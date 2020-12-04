# SLplay module

from matplotlib.pyplot import *
from numpy import *
from random import *
from copy import copy

#ion()

def ninetybit(i):
    "return 1 90% of the time, otherwise 0"
    if randrange(10)==0: return 0
    else: return 1

def fiftybit(i): return randrange(2)

def signum(s):
    "sign of s as 0/1"
    if s>0: return 1
    else:   return 0

def sumOFten(x): return sum(x[0:10]) 

def logistic(s): return 1/(1+exp(-s))

def exp(n=50, numruns=100, numsteps=400, binsize=10,  
        featuregenerator=fiftybit, alpha=0.01, noise=0):
    "run an experiment"
    x = zeros(n)
    MSE = zeros(numsteps//binsize)
    for run in range(numruns):
        w = zeros(n)
        for t in range(numsteps):
            for i in range(n): x[i] = featuregenerator(i)
            y = signum(dot(w,x))
            z = x[0] + gauss(0,noise)
            #print w,x,s,y,z
            w += alpha * (z-y) * x
            error = (z-y)**2
            MSE[t//binsize] += error
        #print(run, end=' ')
    MSE = MSE/(binsize*numruns)
    print()
    print(MSE)
    return MSE

#plot(exp(binsize=50))
#figure()
plot(exp(binsize=20))
plot(exp(binsize=20, alpha=0.1))
plot(exp(binsize=20, n=25))
#alphas = [2**e for e in range(-9, -5)]
#plot(alphas, [min(3,exp(alpha=a)[-1]) for a in alphas])
#for a in alphas:
#    plot([min(100,e) for e in exp(numsteps=1000, binsize=50, numruns=500, alpha=a)])


show()

"""
SLplay.py - the truth machine

The base learning algorithm is a perceptron, a binary classifier
this is why the value of alpha is not important.

What is the effect of the # of irrelevant features?
How is the learning time influenced by it? linearly?
vary n; observe time to criterion error level.

Is it important that the binary input vectors have the same # of 1s?
make alternate problem with constant #1s; compare learning rate

What if the inputs are not 0s and 1s, but 6s and 7s? 
Is the learning rate affected?

Other targets?

You could change the learning system from a classifier to a regressor.
This just means the guesses (estimates) are real numbers rather than 0/1.
All the rest is the same.

In this case, you should be able to show that various measures of MSE, 
such as final MSE or cumulative MSE, are U-shaped functions of alpha.

You should be able to show that the best alpha depends on the level of noise in the target function

You should be able to show that the rule for alpha in the book is good.

...
"""
