import numpy as np
from sklearn.datasets import fetch_openml

import ops_impl as ops
from sgd import SGD
from variable import Variable


# load mnist data:
def load_mnist():
    print("loading mnist data....")
    mnist = fetch_openml('mnist_784', data_home='./data', as_frame=False)
    mnist.target = np.array([int(t) for t in mnist.target])
    print("done!")

    return mnist


def loss_fn(params, data):
    '''computes hinge for linear classification of MNIST digits.
    
    args:
        params: list containing [weights, bias]
            where weights is a 10x784 Variable and
            bias is a scalar Variable.
        data: list containing [features, label]
            where features is a 784 dimensional numpy array
            and label is an integer
        
    returns:
        loss, correct
            where loss is a Variable representing the hinge loss
            of the 10-dimenaional scores where
            scores[i] = dot(weights[i] , features) + bias
            and correct is a float that is 1.0 if scores[label] is the largest
            score and 0.0 otherwise.
    '''

    # Create a HingeLoss operation with the target label
    hinge_loss = ops.HingeLoss(data[1])

    # Get the scores using the input data and model parameters
    scores = get_scores(Variable(data[0]), params)

    # Compute the loss by applying the hinge_loss operation to the scores
    loss = hinge_loss(scores)

    # Check if the predicted label matches the true label (1 if correct, 0 if incorrect)
    if int(np.argmax(scores.data)) == data[1]:
        correct = 1.0
    else:
        correct = 0.0

    return loss, correct


def get_scores(features, params):
    
    weights, bias = params
    return ops.matmul(weights, features) + bias


def get_normal(shape):
    return np.random.normal(np.zeros(shape))


def train_mnist(learning_rate, epochs, mnist):
    print("training linear classifier...")
    running_accuracy = 0.0
    it = 0

    TRAINING_SIZE = 60000
    TESTING_SIZE = 10000

    params = [Variable(np.zeros((10, 784))), Variable(np.zeros((10, 1)))]

    for it in range(epochs * TRAINING_SIZE):
        data = [mnist.data[it % 60000].reshape(-1, 1)/255.0, mnist.target[it % 60000]]
        params, correct = SGD(loss_fn, params, data, learning_rate)
        running_accuracy += (correct - running_accuracy)/(it + 1.0)
        if (it+1) % 10000 == 0:
            print("iteration: {}, current train accuracy: {}".format(it+1, running_accuracy))

    running_accuracy = 0.0
    print("running evaluation...")
    for it in range(TESTING_SIZE):
        data = [mnist.data[it + 60000].reshape(-1, 1)/255.0, mnist.target[it + 60000]]
        loss, correct = loss_fn(params, data)
        running_accuracy += (correct - running_accuracy)/(it + 1.0)
    print("eval accuracy: ", running_accuracy)


if __name__ == '__main__':
    mnist_data = load_mnist()
    train_mnist(0.01, 2, mnist_data)
