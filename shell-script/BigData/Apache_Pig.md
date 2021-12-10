# Apache Pig

Apache Pig = Pig (Hadoop-based Database) + Pig-Latin (SQL-like Command)

(Pig = Hadoop-based Platform with Pig-Latin)

Traditional RDBMS (Relational DataBase Management Systems, e.g., SQL)

Pig- Address the drawbacks of Parallel RDBMS and MapReduce at the same time.

### grunt

**Node.js** (js-based server) package manager

**Grunt** is a task management tool based on Node.js. It can automatically run the tasks you set.

**Node.js** is an open source, cross-platform runtime environment that can run JavaScript on the server side.

**Grunt Shell**: Run Pig code interactively, similar to a python shell.

### You can use Pig Latin's LOAD operator to load data from the file system (HDFS / Local) into Apache Pig.

Relation_name = LOAD 'Input file path' USING function AS schema;

dept = LOAD 'ex_data/emp_dept/dept.csv' AS (deptno:INT, dname:CHARARRAY, loc: CHARARRAY);

salgrade = LOAD 'ex_data/emp_dept/salgrade.csv' AS (grade:INT, losal:INT, hisal:INT);

### DUMP = Output all records of the relation

DUMP emp;

##################################################################################################

### Using Pig to Retrieve Data

Relation2_name = FILTER Relation1_name BY (condition);

Relation2_name = FOREACH Relation2_name GENERATE (required data);

result1 = FILTER emp BY ename == 'SMITH';

result2 = FOREACH result1 GENERATE hiredate;

DUMP result2;

##################################################################################################

### Sort the relationship in ascending / descending order

Relation_name2 = ORDER Relatin_name1 BY (ASC|DESC);

### The LIMIT operator is used to obtain a limited number of tuples from the relationship.

Result = LIMIT Relation_name required number of tuples;

joinDate1 = FOREACH emp GENERATE ename, hiredate ; 

joinDate2 = ORDER joinDate1 BY hiredate ASC; 

earliestJoinDate = LIMIT joinDate2 1 ;

##################################################################################################

### The GROUP operator is used to group the data in one or more relations. It collects the data having the same key.

GROUP ... BY ...

FOREACH ... GENERATE group as deptno, COUNT(emp) AS ...

### The JOIN operator is used to combine records from two or more relations.

JOIN ... BY ..., ... BY ...

empDept = GROUP emp BY deptno;

deptEmp = FOREACH empDept GENERATE group AS deptno, COUNT(emp) AS empCnt;

jointCnt = JOIN deptEmp BY deptno, dept BY deptno;

DUMP jointCnt;

### https://www.tutorialspoint.com/apache_pig/index.htm

```
User = load ‘users’ as (ID, age);
Fltrd = filter users by age >= 18 and age <= 25;
Purchases = load “purchaes” as (ID, goods);
Jnd = join Fltrd by ID, Purchases by User;
Grpd = group Jnd by goods;
Smmd = foreach Grpd generate group, COUNT(Jnd) as sales; Srtd = order Smmd by sales desc;
Top5 = limit Srtd 5;
store Top5 into ‘top5sales’
```

