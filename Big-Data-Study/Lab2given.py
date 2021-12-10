from copy import deepcopy
import numpy as np
import pandas as pd
from sklearn.datasets import make_blobs
from joblib import Parallel, delayed

# Importing the dataset
data = pd.read_csv('xclara.csv')
print("Input Data and Shape")
print(data.shape)
data.head()

# Getting the values and plotting it
f1 = data['V1'].values
f2 = data['V2'].values
X = np.array(list(zip(f1, f2)))


# Euclidean Distance Caculator
def dist(a, b, ax=1):
    return np.linalg.norm(a - b, axis=ax)


def assignment(x, C):

    distances = dist(x, C)
    cluster = np.argmin(distances)
    ci = cluster

    return ci


def centroidcompute(X, clusters, i):

    points = [X[j] for j in range(len(X)) if clusters[j] == i]

    return np.mean(points, axis=0)


# Number of clusters
k = 3

# X coordinates of random centroids
C_x = np.random.randint(0, np.max(X)-20, size=k)
# Y coordinates of random centroids
C_y = np.random.randint(0, np.max(X)-20, size=k)
C = np.array(list(zip(C_x, C_y)), dtype=np.float32)
print("Initial Centroids")
print(C)

# To store the value of centroids when it updates
C_old = np.zeros(C.shape)
# Cluster Lables(0, 1, 2)
clusters = np.zeros(len(X))
# Error func. - Distance between new centroids and old centroids
error = dist(C, C_old, None)
# Loop will run till the error becomes zero
while error != 0:
    # Assigning each value to its closest cluster
    # for i in range(len(X)):
    #     distances = dist(X[i], C)
    #     cluster = np.argmin(distances)
    #     clusters[i] = cluster
    clusters = Parallel(n_jobs=2)(delayed(assignment)(X[i], C) for i in range(len(X)))
    
    # Storing the old centroid values
    C_old = deepcopy(C)

    # Finding the new centroids by taking the average value
    # for i in range(k):
    #     points = [X[j] for j in range(len(X)) if clusters[j] == i]
    #     C[i] = np.mean(points, axis=0)
    b = Parallel(n_jobs=2)(delayed(centroidcompute)(X, clusters, i) for i in range(k))
    for i in range(k):
        C[i] = b[i]

    error = dist(C, C_old, None)

'''
==========================================================
scikit-learn
==========================================================
'''

from sklearn.cluster import KMeans

# Number of clusters
kmeans = KMeans(n_clusters=3)
# Fitting the input data
kmeans = kmeans.fit(X)
# Getting the cluster labels
labels = kmeans.predict(X)
# Centroid values
centroids = kmeans.cluster_centers_

# Comparing with scikit-learn centroids
print("Final Centroid Values")
print("From scratch done by us:")
print(C) # From Scratch
print("From scikit-learn package:")
print(centroids) # From sci-kit learn
