'''provides  implementations of various operations, subclasses of Operation.'''

import functools
import numpy as np

from operation import Operation
from variable import Variable


class VariableAdd(Operation):
    '''tensor addition operation.
    given a list of Variable objects with a common shape, adds them up.'''

    def __init__(self):
        super(VariableAdd, self).__init__(name="Add")

    def forward_call(self, summands):
        '''summands should be a list of ndarrays, all with the same dimensions.
        args:
            summands: list of Variables all with same shape.
        returns:
            numpy array of same shape as input Variables containing the sum
            of the input tensors.

        Example: 
        if  summands = [A, B, C] where
        A.data = np.array([1, 2, 0])
        B.data = np.array([2, 3, 10])
        C.data = np.array([3, -2, 90]),
        
        the return value should be:
        np.array([6, 3, 100]).'''

        assert len(summands) > 0, "Add called with no inputs!"
        shape = summands[0].data.shape
        for summand in summands:
            assert summand.data.shape == shape, "Shape mismatch in Add: shapes: {}".format(
                [summand.data.shape for summand in summands])

        # Assigns the list of 'summands' to the 'self.parents' attribute.
        self.parents = summands

        # Calculates the sum of the 'data' attribute of each 'summand' in the 'summands' list
        # and assigns the result to the 'out' variable.
        out = sum([summand.data for summand in summands])

        return out

    def backward_call(self, downstream_grad):
        '''
        backward functions for tensor addition.
        args:
            downstream_grad: numpy array containing gradient of final
            computation output with respect to the output of this operation.
        returns: list of  numpy arrays such that ith entry of returned list
            is gradient of final computation output with respect to ith entry
            of the input list to forward_call.'''
        # Create a list 'gradient' containing 'downstream_grad' repeated 'len(self.parents)' times
        gradient = [downstream_grad] * len(self.parents)

        # Initialize an empty list 'new_grad' to store modified gradients
        new_grad = []

        # Loop over each gradient 'g' in the 'gradient' list
        for g in gradient:
            if g.ndim == 1:
                # If the dimension of 'g' is 1, expand it by adding a new axis (a new dimension)
                new_grad.append(np.expand_dims(g, axis=1))
            else:
                # If the dimension of 'g' is not 1, keep it as it is
                new_grad.append(g)

        # Update the 'gradient' list with the modified gradients stored in 'new_grad'
        gradient = new_grad

        return gradient


class VariableMultiply(Operation):
    '''coordinate-wise multiply operation.'''

    def __init__(self):
        super(VariableMultiply, self).__init__(name="Multiply")

    def forward_call(self, multiplicands):
        '''inputs should be a list of Variables, all with the same dimensions.
        Like all forward_call implementations, this function should also
        set self.parents appriopriately.
        args:
            multiplicands: list of Variables all of same shape.
        returns:
            a numpy array of the same shape as all the input Variables that is
            equal to all the Variables multiplied together entry-wise.

        Example:
        if multiplicands = [A, B, C] where
        A.data = np.array([1, 2, 0])
        B.data = np.array([2, 3, 10])
        C.data = np.array([3, -2, 90]),

        the return value should be:
        np.array([6, -12, 0]).
        '''

        assert len(multiplicands) > 0, "Multiply called with no inputs!"
        shape = multiplicands[0].data.shape
        for multiplicand in multiplicands:
            assert multiplicand.data.shape == shape, "Shape mismatch in Multiply!"

        # Set self.parents to the list of multiplicands
        self.parents = multiplicands

        # Calculate the product of data from all multiplicands using functools.reduce
        out = functools.reduce(lambda x, y: x * y, [multiplicand.data for multiplicand in multiplicands])

        return out

    def backward_call(self, downstream_grad):
        # Create a list of zeros with the same length as the number of parents
        gradient = [0] * len(self.parents)

        # Check the number of parents
        if len(self.parents) > 2:
            # If there are more than two parents, calculate gradients for each parent
            for i in range(len(self.parents)):
                # Calculate the gradient for the current parent by multiplying
                # downstream_grad by the product of all other parents' data
                gradient[i] = downstream_grad * functools.reduce(
                    lambda x, y: x * y,
                    [m.data for m in self.parents if m != self.parents[i]]
                )
        elif len(self.parents) == 2:
            # If there are exactly two parents, calculate gradients for each parent
            gradient[0] = downstream_grad * self.parents[1].data
            gradient[1] = downstream_grad * self.parents[0].data
        else:
            # If there is only one parent, the gradient is simply downstream_grad
            gradient[0] = downstream_grad

        return gradient


class ScalarMultiply(Operation):
    '''multiplication by a scalar.'''

    def __init__(self):
        super(ScalarMultiply, self).__init__(name="Scalar Multiply")

    def forward_call(self, scalar, tensor):
        '''
        multiplies a tensor by a scalar.
        args:
            scalar: a Variable of shape (1) (i.e. np.shape(scalar.data) is (1).
            tensor: a Variable of arbitrary shape.
            
        returns: a numpy array of same shape as input tensor containing the result
            multiplying each element of tensor by scalar.
        
        Example:
        if scalar.data is np.array([3.0]) and tensor.data is np.array([1.0, 2.0, 3.0])
        then the return value should be np.array([3.0, 6.0, 9.0])'''

        assert scalar.data.size == 1, "ScalarMultiply called with non-scalar input!"

        # Assigning a list to self.parents with two elements: a scalar and a tensor
        self.parents = [scalar, tensor]

        # Performing an element-wise multiplication between the data of the scalar and the data of the tensor
        out = scalar.data * tensor.data

        return out

    def backward_call(self, downstream_grad):
        # Calculate the gradient for the first parent (self.parents[1])
        # by performing element-wise multiplication between the data of the second parent
        # (self.parents[1].data) and the downstream gradient (downstream_grad), and then summing the results.
        # This computes the dot product between the second parent's data and the downstream gradient.
        grad_parent1 = np.sum(self.parents[1].data * downstream_grad)

        # Calculate the gradient for the second parent (self.parents[0]) by performing
        # element-wise multiplication between the data of the first parent (self.parents[0].data)
        # and the downstream gradient (downstream_grad).
        grad_parent0 = self.parents[0].data * downstream_grad

        # Return the computed gradients as a list, where grad_parent0 is the gradient with respect to the first parent
        # and grad_parent1 is the gradient with respect to the second parent.
        gradient = [grad_parent1, grad_parent0]

        return gradient


class MatrixMultiply(Operation):
    '''matrix multiplication operation.'''
    def __init__(self):
        super(MatrixMultiply, self).__init__(name="MatrixMultiply")

    def forward_call(self, A, B):
        '''
        computes a matrix multiply forward pass.
        args:
            A: a 2-dimensional Variable (i.e. a matrix) of shape (x, y)
            B: a 2-dimensional Variable of shape (y, z).
            
        returns:
            a numpy array of shape (x, z) containing the matrix product of A
            and B.'''
        assert len(A.data.shape) == 2 and len(B.data.shape) == 2, \
            "inputs to matrix multiply are not matrices! A shape: {}, B shape: {}".format(A.data.shape, B.data.shape)

        # Define the parents list, which contains Variable objects A and B
        self.parents = [A, B]

        # Perform a dot product between the data arrays of A and B, and store the result in 'out'
        out = np.dot(A.data, B.data)

        return out

    def backward_call(self, downstream_grad):
        # Check the dimensions of downstream_grad
        if downstream_grad.ndim == 1:
            # If it's 1-dimensional, convert it to a column vector by adding a new axis
            downstream_grad_mat = np.expand_dims(downstream_grad, axis=1)
        else:
            # If it's already a matrix, keep it as is
            downstream_grad_mat = downstream_grad

        # Compute the gradient for the first parent
        grad_0 = np.dot(downstream_grad_mat, self.parents[1].data.T)
        # Compute the gradient for the second parent
        grad_1 = np.dot(self.parents[0].data.T, downstream_grad_mat)
        # Combine the gradients into a list
        gradient = [grad_0, grad_1]

        return gradient


class HingeLoss(Operation):
    '''compute hinge loss.
    assumes input are a scores for a single example (no need to support
    minibatches of scores).
    
    Input "scores" will be [1 x C] tensor representing scores for each of
    C classes.
    "label" is an integer in [0,..., C-1].
    The multi-class hinge loss is given by the (unweighted) formula here:
    https://pytorch.org/docs/stable/generated/torch.nn.MultiMarginLoss.html
    '''

    def __init__(self, label):
        super(HingeLoss, self).__init__(name="Hinge Loss")
        self.label = label

    def forward_call(self, scores):
        '''
        forward pass for Hinge Loss.
        args:
            scores: 1xC Variable object containing scores for different classes.
        returns:
            float or shape (1) numpy array containing multiclass hinge loss.
        '''
        self.parents = [scores]

        # Set the margin hyperparameter for the margin loss.
        margin = 1.0

        # Calculate the hinge loss for each class by comparing the score of the correct class
        # (scores.data[self.label]) with the scores of other classes.
        # Any loss less than the margin is set to 0 using np.maximum.
        loss = np.maximum(scores.data - scores.data[self.label] + margin, 0.0)

        # Calculate the average loss across all classes by subtracting the margin term
        # and dividing by the number of classes (length of scores.data).
        out = (np.sum(loss) - margin) / len(scores.data)

        return out

    def backward_call(self, downstream_grad):
        '''
        backward pass for Hinge Loss.
        args:
            downstream_grad: shape (1) numpy array or float containing
                downstream grad in backpropogation (gradient of final
                output with respect to output of the hinge loss).
        returns:
            gradient of final output with respect to input scores of hinge loss.
        '''
        # Get the data (scores) from the first parent in the operation's parents list
        score_data = self.parents[0].data

        # Determine the number of classes (dimensions) in the scores data
        num_classes = score_data.shape[0]

        # Extract the score corresponding to the true label (self.label)
        correct_score = score_data[self.label]

        # Initialize an empty list for gradient values
        gradient = []

        # Loop through the classes
        for i in range(num_classes):
            # If the current class is the correct class (self.label), set the gradient to 0
            # Otherwise, use the hinge loss formula for the gradient
            if i == self.label or 1 + score_data[i] - correct_score <= 0:
                gradient.append(0)
            else:
                gradient.append(1 / num_classes)

        # Calculate the number of positive gradient values
        positive_count = sum([1 if z > 0 else 0 for z in gradient])

        # Update the gradient for the correct class with a specific value
        gradient[self.label] = -positive_count / num_classes

        # Multiply the computed gradient by the downstream gradient
        gradient = [np.array(gradient) * downstream_grad]

        return gradient


class Power(Operation):
    '''raise to a power'''

    def __init__(self, exponent):
        super(Power, self).__init__(name="{} Power".format(exponent))

        self.exponent = exponent

    def forward_call(self, tensor):
        self.parents = [tensor]

        return np.power(tensor.data, self.exponent)

    def backward_call(self, downstream_grad):
        tensor = self.parents[0]
        return [downstream_grad * self.exponent * np.power(tensor.data, self.exponent - 1.0)]


class Exp(Operation):
    '''exponentiate'''

    def __init__(self):
        super(Exp, self).__init__(name="exp")

    def forward_call(self, tensor):
        self.parents = [tensor]
        self.output = np.exp(tensor.data)
        return self.output

    def backward_call(self, downstream_grad):
        return [downstream_grad * self.output]


class Maximum(Operation):
    '''computes coordinate-wise maximum of a list of tensors'''

    def __init__(self):
        super(Maximum, self).__init__(name="maximum")

    def forward_call(self, terms):
        '''
        args:
            terms: a list of Variable objects to compute maximum.
        returns:
            a numpy array whose ith coordinate is the maximum value of the
            ith coordinate of all the Variables in terms.'''
        self.parents = terms
        self.output = functools.reduce(
            lambda x, y: np.maximum(x, y), [t.data for t in terms])

        return self.output

    def backward_call(self, downstream_grad):
        masks = [t.data == self.output for t in self.parents]

        return [m * downstream_grad for m in masks]


class ReLU(Operation):
    '''computes coordinate-wise maximum with 0'''

    def __init__(self):
        super(ReLU, self).__init__(name="relu")

    def forward_call(self, A):
        self.parents = [A]
        self.output = np.maximum(A.data, 0.0)

        return self.output

    def backward_call(self, downstream_grad):
        mask = (self.output == self.parents[0].data)
        return [mask * downstream_grad]


class ReduceMax(Operation):
    '''computes the maximum element of a tensor'''

    def __init__(self):
        super(ReduceMax, self).__init__(name="ReduceMax")

    def forward_call(self, A):
        self.parents = [A]
        self.output = np.max(A.data)

        return self.output

    def backward_call(self, downstream_grad):
        A = self.parents[0]

        mask = (A.data == self.output)
        return [mask * downstream_grad]


class TensorDot(Operation):
    def __init__(self):
        super(TensorDot, self).__init__(name="TensorDot")

    def forward_call(self, A, B, dims_to_contract):
        '''A and B are are Variables, dims_to_contract is number
        of dimensions to contract. This is a special case of np.tensordot.
        Example:
        A is dim [2, 3, 4]
        B is dim [3, 4, 5]

        if dims_to_contract is 2, output will be [2, 5]
        Otherwise it is an error.
        '''

        self.parents = [A, B]
        self.dims_to_contract = dims_to_contract

        return np.tensordot(A.data, B.data, dims_to_contract)

    def backward_call(self, downstream_grad):
        A = self.parents[0]
        B = self.parents[1]
        A_indices = np.arange(0, len(A.data.shape) - self.dims_to_contract)
        B_indices = np.arange(self.dims_to_contract, len(B.data.shape))
        A_grad = np.tensordot(downstream_grad, B.data, [B_indices, B_indices])
        B_grad = np.tensordot(A.data, downstream_grad, [A_indices, A_indices])

        return [A_grad, B_grad]


###### Helper functions for operator overloading ######

Variable.__add__ = lambda self, other: VariableAdd()([self, other])


def mul(self, other):
    if not isinstance(other, Variable):
        other = Variable(other)
    if other.data.size == 1:
        return ScalarMultiply()(other, self)
    else:
        return VariableMultiply()([self, other])
Variable.__mul__ = Variable.__rmul__ = mul
Variable.__neg__ = lambda self: -1 * self
Variable.__sub__ = lambda self, other: self + (- other)


def div(A, B):
    if not isinstance(B, Variable):
        B = Variable(B)
    B_inverse = Power(-1.0)(B)
    if B.data.size == 1:
        return ScalarMultiply()(B_inverse, A)
    else:
        return VariableMultiply()([A, B_inverse])

Variable.__truediv__ = div
Variable.__rtruediv__ = lambda self, other: div(other, self)


###### Helper functions for applying operations ######

def matmul(a, b):
    mm = MatrixMultiply()
    return mm(a, b)


def pow(tensor, exponent):
    power = Power(exponent)
    return power(tensor)


def tensordot(A, B, dims_to_contract):
    tensordot_op = TensorDot()
    return tensordot_op(A, B, dims_to_contract)


def relu(A):
    relu_op = ReLU()
    return relu_op(A)
