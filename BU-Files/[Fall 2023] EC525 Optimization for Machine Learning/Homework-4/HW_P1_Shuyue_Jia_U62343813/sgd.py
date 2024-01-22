'''SGD implementation'''

from variable import Variable


def SGD(loss_fn, params, data, learning_rate):
    ''''performs an SGD update and returns updated parameters.
    arguments:
        loss_fn: function that takes params, data and returns a loss value.
        params: list of Variables representing parameters of some model.
        data: list of Variables representing minibatch data.
        learning_rate: learning rate for SGD.
    returns: two values:
        new_params: Variable containing next value for params after SGD update,
        correct: float number that is 1.0 if the prediction was correct, and 
            0.0 otherwise.
    '''
    # Calculate the loss and determine the correctness of predictions
    loss, correct = loss_fn(params, data)

    # Perform backward pass to compute gradients
    loss.backward()

    # Initialize a list for updated parameters
    new_params = []

    # Update each parameter using gradient descent
    for p in params:
        # Compute the updated data for the parameter
        updated_data = p.data - learning_rate * p.grad

        # Create a new Variable with the updated data
        new_params.append(Variable(updated_data))

    return new_params, correct
