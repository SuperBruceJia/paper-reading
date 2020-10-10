# Exposing Kubernetes Ports

## Service Types

kubectl expose

## Creating a ClusterIP Service

kubectl get pods -w

kubectl create deployment httpenv --image=bretfisher/httpenv

kubectl scale deployment/httpenv --replicas=5

kubectl expose deployment/httpenv --port 8888

kubectl get service

kubectl run --generator run-pod/v1 tmp-shell --rm -it --image bretfisher/netshoot -- bash

curl httpenv:8888

curl [ip of service]:8888

kubectl get service

## Creating a NodePort and LoadBalancer Service

kubectl get all

kubectl expose deployment/httpenv --port 8888 --name httpenv-np --type NodePort

kubectl get services

curl localhost:32334

kubectl expose deployment/httpenv --port 8888 --name httpenv-lb --type LoadBalancer

kubectl get services

curl localhost:8888

kubectl delete service/httpenv service/httpenv-np

kubectl delete service/httpenv-lb deployment/httpenv

## Kubernetes Services DNS

curl <hostname>

kubectl get namespaces

curl <hostname>.<namespace>.svc.cluster.local

