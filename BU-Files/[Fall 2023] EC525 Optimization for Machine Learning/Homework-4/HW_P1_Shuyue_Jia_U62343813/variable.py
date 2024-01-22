'''implements Variable class that wraps numpy arrays.'''

import numpy as np


class Variable(object):
    '''Variable class holds a numpy array and pointers for autodiff graph.
    
    You should fill out any further code needed to initialize a Variable object
    here.
    '''

    def __init__(self, data, parent=None):

        # pass arguments to numpy to create array structure.
        self.data = np.array(data)

        # some things may become a little easier if we convert scalars into
        # rank 1 vectors.
        if self.data.shape == ():
            self.data = np.expand_dims(self.data, 0)

        # Initialize the gradient to None.
        self.grad = None

        # Store the parent operation that created this Variable.
        self.parent = parent

        # Store children's gradients
        self.children_gradient = {}

    def detach(self):
        '''detach tensor from computation graph so that gradient computation stops.'''
        self.parent = None

    def backward(self, downstream_grad=None, accumulator=None):
        '''
        backward pass.
        args:
            downstream_grad:
                numpy array representing derivative of final output
                with respect to this tensor.
        
        This function returns no values, but accomplishes two tasks:
        1. accumulate the downstream_grad in the self.grad attribute so that
        at the end of all backward passes, the self.grad attribute contains
        the gradient of the final output with respect to this tensor.

        Note that this is NOT accomplished by self.grad = downstream_grad!

        2. pass downstream_grad to the parent operations that created this
        Variable so that the backpropogation can continue.
        '''
        # set a default value for downstream_grad.
        # if the backward is called on the output Variable and the output
        # is a scalar, this will result in the standard gradient calculuation.
        # Otherwise, it will have some weird behavior that we will not be
        # concerned with.
        if downstream_grad is None:
            downstream_grad = np.ones_like(self.data)

        if self.grad is None:
            self.grad = np.zeros_like(downstream_grad)

        # Accumulate the `downstream_grad` into `self.grad`.
        self.grad += downstream_grad

        if accumulator is not None:
            self.children_gradient[accumulator] -= 1

        # Check if the current Variable has a parent and if all values
        # in the children_gradient dictionary are equal to 0.
        if self.parent is not None and all([v == 0 for v in self.children_gradient.values()]):
            # If both conditions are met, call the backward method on the parent Variable
            # and pass the current Variable's gradient (self.grad).
            self.parent.backward(self.grad)

    def children(self, child):
        """
        Register a child operation and increment the gradient count for the child.

        Args:
            child (Operation): The child operation that uses this operation's output.

        """
        self.children_gradient[child] = self.children_gradient.get(child, 0) + 1
