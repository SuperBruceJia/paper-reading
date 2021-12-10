# Running Hadoop

## jps

JPS: Java Virtual Machine Process Status Tool

Check all java application process ID (PID), an check if all hadoop processes are running by executing. We often use the jps command to view java-related processes in the daily production of big data.

## Components

Hadoop Distributed File System (HDFS)

Yet Another Resource Negotiator (YARN)

MapReduce

## start-dfs.sh

Start the Hadoop DFS daemons, the name node and data node.

## start-yarn.sh

Start Resource + Node Manager

## mr-jobhistory-daemon.sh start historyserver

Start the JobHistory Server (Manage Job Log)
