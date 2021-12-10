# Apache Pig

Apache Pig = Pig (Hadoop-based Database) + Pig-Latin (SQL-like Command)

(Pig = Hadoop-based Platform with Pig-Latin)

Traditional RDBMS (Relational DataBase Management Systems, e.g., SQL)

Pig- Address the drawbacks of Parallel RDBMS and MapReduce at the same time.

Be careful: Pig is CASE-SENSITIVE to relation name, data (and some command)

<img width="1227" alt="image" src="https://user-images.githubusercontent.com/31528604/145536654-f06b65c0-2884-432a-b180-7e1b52ca962d.png">

<img width="1227" alt="image" src="https://user-images.githubusercontent.com/31528604/145536676-4e877ee0-c254-4e1f-a9a7-47389cb9b341.png">

### grunt

**Node.js** (js-based server) package manager

**Grunt** is a task management tool based on Node.js. It can automatically run the tasks you set.

**Node.js** is an open source, cross-platform runtime environment that can run JavaScript on the server side.

**Grunt Shell**: Run Pig code interactively, similar to a python shell.

<img width="1227" alt="image" src="https://user-images.githubusercontent.com/31528604/145536874-69ef9a6c-70dc-4a2c-9298-69b21f3bf918.png">

### You can use Pig Latin's LOAD operator to load data from the file system (HDFS / Local) into Apache Pig.

Relation_name = LOAD 'Input file path' USING function AS schema;

dept = LOAD 'ex_data/emp_dept/dept.csv' AS (deptno:INT, dname:CHARARRAY, loc: CHARARRAY);

salgrade = LOAD 'ex_data/emp_dept/salgrade.csv' AS (grade:INT, losal:INT, hisal:INT);

<img width="1225" alt="image" src="https://user-images.githubusercontent.com/31528604/145536939-34c05c0b-964b-40cb-a42d-a254f457cd92.png">

### describe = Describe the schema of a relation (table)

describe emp

### DUMP = Output all records of the relation

DUMP emp;

### Schema

Schema in Pig : Fit Data into the pre-defined tuple {} as data structure

### Load

**Relation_name**: We must mention the relation in which the data is to be stored. 

**Input file path**: We must mention the HDFS directory where the files are stored (In MapReduce mode).

**Function**: We must choose a function from a set of loading functions provided by Apache Pig.

**Schema**: We must define the data schema.

##################################################################################################

### Using Pig to Retrieve Data

Relation2_name = FILTER Relation1_name BY (condition);

Relation2_name = FOREACH Relation2_name GENERATE (required data);

result1 = FILTER emp BY ename == 'SMITH';

result2 = FOREACH result1 GENERATE hiredate;

DUMP result2;

<img width="1227" alt="image" src="https://user-images.githubusercontent.com/31528604/145537007-c3c4a135-007b-40a5-ad61-5486c540d2fb.png">

<img width="1225" alt="image" src="https://user-images.githubusercontent.com/31528604/145537073-dda48e73-1d3d-4b9a-8422-7fffe02b32f8.png">

##################################################################################################

### Sort the relationship in ascending / descending order

Relation_name2 = ORDER Relatin_name1 BY (ASC|DESC);

order_by_data = ORDER student_details BY age DESC;

### The LIMIT operator is used to obtain a limited number of tuples from the relationship.

Result = LIMIT Relation_name required number of tuples;

limit_data = LIMIT student_details 4;

joinDate1 = FOREACH emp GENERATE ename, hiredate ; 

joinDate2 = ORDER joinDate1 BY hiredate ASC; 

earliestJoinDate = LIMIT joinDate2 1 ;

##################################################################################################

### The GROUP operator is used to group the data in one or more relations. It collects the data having the same key.

GROUP ... BY ...

Group_data = GROUP Relation_name BY age;

FOREACH ... GENERATE group as deptno, COUNT(emp) AS ...

### The JOIN operator is used to combine records from two or more relations.

JOIN ... BY ..., ... BY ...

result = JOIN relation1 BY columnname, relation2 BY columnname;

empDept = GROUP emp BY deptno;

deptEmp = FOREACH empDept GENERATE group AS deptno, COUNT(emp) AS empCnt;

jointCnt = JOIN deptEmp BY deptno, dept BY deptno;

DUMP jointCnt;

<img width="1226" alt="image" src="https://user-images.githubusercontent.com/31528604/145536838-bb2baa8b-76a9-4d40-9ee8-d837ea8939d3.png">

### https://www.tutorialspoint.com/apache_pig/index.htm

<img width="1226" alt="image" src="https://user-images.githubusercontent.com/31528604/145537153-d6239cbd-812c-41a8-b7f6-e68641c821d9.png">

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

<img width="1220" alt="image" src="https://user-images.githubusercontent.com/31528604/145536741-095f28e3-1298-4bac-a34f-958216324c05.png">

