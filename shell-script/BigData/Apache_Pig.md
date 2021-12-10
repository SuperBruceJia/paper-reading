# Apache Pig

Apache Pig = Pig (Hadoop-based Database) + Pig-Latin (SQL-like Command)

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
