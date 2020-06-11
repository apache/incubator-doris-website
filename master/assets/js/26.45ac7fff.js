(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{415:function(e,t,a){"use strict";a.r(t);var o=a(43),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"broker-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[e._v("#")]),e._v(" Broker Load")]),e._v(" "),a("p",[e._v("Broker load is an asynchronous import method, and the data source supported depends on the data source supported by the Broker process.")]),e._v(" "),a("p",[e._v("Users need to create Broker load imports through MySQL protocol and check the import results by viewing the import commands.")]),e._v(" "),a("h2",{attrs:{id:"applicable-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applicable-scenarios"}},[e._v("#")]),e._v(" Applicable scenarios")]),e._v(" "),a("ul",[a("li",[e._v("Source data in Broker accessible storage systems, such as HDFS.")]),e._v(" "),a("li",[e._v("Data volumes range from tens to hundreds of GB.")])]),e._v(" "),a("h2",{attrs:{id:"noun-interpretation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),a("ol",[a("li",[e._v("Frontend (FE): Metadata and scheduling nodes of Doris system. In the import process, it is mainly responsible for the generation of import plan and the scheduling of import tasks.")]),e._v(" "),a("li",[e._v("Backend (BE): The computing and storage nodes of Doris system. In the import process, it is mainly responsible for ETL and storage of data.")]),e._v(" "),a("li",[e._v("Broker: Broker is an independent stateless process. It encapsulates the file system interface and provides Doris with the ability to read files in the remote storage system.")]),e._v(" "),a("li",[e._v("Plan: Import the execution plan, and BE executes the import execution plan to import data into Doris system.")])]),e._v(" "),a("h2",{attrs:{id:"basic-principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-principles"}},[e._v("#")]),e._v(" Basic Principles")]),e._v(" "),a("p",[e._v("After the user submits the import task, FE generates the corresponding plan and distributes the plan to several BEs according to the number of BEs and the size of the file. Each BE performs part of the import data.")]),e._v(" "),a("p",[e._v("BE pulls data from Broker and imports it into the system after transforming the data. All BEs complete the import, and the FE decides whether the import is successful or not.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                 +\n                 | 1. user create broker load\n                 v\n            +----+----+\n            |         |\n            |   FE    |\n            |         |\n            +----+----+\n                 |\n                 | 2. BE etl and load the data\n    +--------------------------+\n    |            |             |\n+---v---+     +--v----+    +---v---+\n|       |     |       |    |       |\n|  BE   |     |  BE   |    |   BE  |\n|       |     |       |    |       |\n+---+-^-+     +---+-^-+    +--+-^--+\n    | |           | |         | |\n    | |           | |         | | 3. pull data from broker\n+---v-+-+     +---v-+-+    +--v-+--+\n|       |     |       |    |       |\n|Broker |     |Broker |    |Broker |\n|       |     |       |    |       |\n+---+-^-+     +---+-^-+    +---+-^-+\n    | |           | |          | |\n+---v-+-----------v-+----------v-+-+\n|       HDFS/BOS/AFS cluster       |\n|                                  |\n+----------------------------------+\n\n")])])]),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic operations")]),e._v(" "),a("h3",{attrs:{id:"create-a-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-load"}},[e._v("#")]),e._v(" Create a load")]),e._v(" "),a("p",[e._v("Broker load create a data load job")]),e._v(" "),a("p",[e._v("Grammar:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LOAD LABEL db_name.label_name \n(data_desc, ...)\nWITH BROKER broker_name broker_properties\n[PROPERTIES (key1=value1, ... )]\n\n* data_desc:\n\n    DATA INFILE ('file_path', ...)\n    [NEGATIVE]\n    INTO TABLE tbl_name\n    [PARTITION (p1, p2)]\n    [COLUMNS TERMINATED BY separator ]\n    [(col1, ...)]\n    [SET (k1=f1(xx), k2=f2(xx))]\n    [WHERE predicate]\n\n* broker_properties: \n\n    (key1=value1, ...)\n")])])]),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1)\n    ),\n    DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file2")\n    INTO TABLE tbl2\n    COLUMNS TERMINATED BY ","\n    (col1, col2)\n    where col1 > 1\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n\n')])])]),a("p",[e._v("Create the imported detailed grammar execution "),a("code",[e._v("HELP BROKER LOAD")]),e._v(" View grammar help. This paper mainly introduces the parametric meaning and points for attention in Broker load's creation import grammar.")]),e._v(" "),a("h4",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[e._v("#")]),e._v(" Label")]),e._v(" "),a("p",[e._v("Identity of import task. Each import task has a unique Label within a single database. Label is a user-defined name in the import command. With this Label, users can view the execution of the corresponding import task.")]),e._v(" "),a("p",[e._v("Another function of Label is to prevent users from repeatedly importing the same data. "),a("strong",[e._v("It is strongly recommended that users use the same label for the same batch of data. Thus, repeated requests for the same batch of data can only be accepted once, guaranteeing at-Most-One semantics")])]),e._v(" "),a("p",[e._v("When the corresponding import job status of Label is CANCELLED, it can be used again to submit the import job.")]),e._v(" "),a("h4",{attrs:{id:"data-description-class-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-description-class-parameters"}},[e._v("#")]),e._v(" Data Description Class Parameters")]),e._v(" "),a("p",[e._v("Data description class parameters mainly refer to the parameters belonging to "),a("code",[e._v("data_desc")]),e._v(" in Broker load creating import statements. Each group of "),a("code",[e._v("data_desc")]),e._v(" mainly describes the data source address, ETL function, target table and partition information involved in this import.")]),e._v(" "),a("p",[e._v("The following is a detailed explanation of some parameters of the data description class:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Multi-table import")]),e._v(" "),a("p",[e._v("Broker load supports a single import task involving multiple tables, and each Broker load import task can implement multiple tables import by declaring multiple tables in multiple "),a("code",[e._v("data_desc")]),e._v(". Each individual "),a("code",[e._v("data_desc")]),e._v(" can also specify the data source address belonging to the table. Broker load guarantees atomic success or failure between multiple tables imported at a single time.")])]),e._v(" "),a("li",[a("p",[e._v("negative")]),e._v(" "),a("p",[a("code",[e._v("data_desc")]),e._v(" can also set up data fetching and anti-importing. This function is mainly used when aggregated columns in data tables are of SUM type. If you want to revoke a batch of imported data. The `negative'parameter can be used as a batch of data. Doris automatically retrieves this batch of data on aggregated columns to eliminate the same batch of data.")])]),e._v(" "),a("li",[a("p",[e._v("partition")]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("data_desc")]),e._v(", you can specify the partition information of the table to be imported, but it will not be imported if the data to be imported does not belong to the specified partition. At the same time, data that does not specify a Partition is considered error data.")])]),e._v(" "),a("li",[a("p",[e._v("where predicate")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("  The where statement in ```data_desc``` is responsible for filtering the data that has been transformed. The unselected rows which is filtered by where predicate will not be calculated in ```max_filter_ratio``` . If there are more then one where predicate of the same table , the multi where predicate will be merged from different ```data_desc``` and the policy is AND. \n")])])])])]),e._v(" "),a("h4",{attrs:{id:"import-job-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-job-parameters"}},[e._v("#")]),e._v(" Import job parameters")]),e._v(" "),a("p",[e._v("Import job parameters mainly refer to the parameters in Broker load creating import statement that belong to "),a("code",[e._v("opt_properties")]),e._v(". Import operation parameters act on the whole import operation.")]),e._v(" "),a("p",[e._v("The following is a detailed explanation of some parameters of the import operation parameters:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("time out")]),e._v(" "),a("p",[e._v("The time-out of the import job (in seconds) allows the user to set the time-out of each import by himself in "),a("code",[e._v("opt_properties")]),e._v(". If the import task is not completed within the set timeout time, it will be cancelled by the system and become CANCELLED. The default import timeout for Broker load is 4 hours.")]),e._v(" "),a("p",[e._v("Usually, the user does not need to manually set the timeout of the import task. When the import cannot be completed within the default timeout time, the task timeout can be set manually.")]),e._v(" "),a("blockquote",[a("p",[e._v("Recommended timeout")]),e._v(" "),a("p",[e._v("Total File Size (MB) / Slowest Import Speed (MB/s) > timeout \t>((MB) * Number of tables to be imported and related Roll up tables) / (10 * Number of concurrent imports)")])]),e._v(" "),a("blockquote",[a("p",[e._v("The concurrency of imports can be seen in the final configuration of the import system in the document. The current import speed limit is 10MB/s in 10 of the formulas.")])]),e._v(" "),a("blockquote",[a("p",[e._v("For example, a 1G data to be imported contains three Rollup tables, and the current concurrency of imports is 3. The minimum value of timeout is "),a("code",[e._v("(1 * 1024 * 3) / (10 * 3) = 102 seconds.")])])]),e._v(" "),a("p",[e._v("Because the machine environment of each Doris cluster is different and the concurrent query tasks of the cluster are different, the slowest import speed of the user Doris cluster requires the user to guess the import task speed according to the history.")])]),e._v(" "),a("li",[a("p",[e._v("max_filter_ratio")]),e._v(" "),a("p",[e._v("The maximum tolerance rate of the import task is 0 by default, and the range of values is 0-1. When the import error rate exceeds this value, the import fails.")]),e._v(" "),a("p",[e._v("If the user wishes to ignore the wrong row, the import can be successful by setting this parameter greater than 0.")]),e._v(" "),a("p",[e._v("The calculation formula is as follows:")]),e._v(" "),a("p",[a("code",[e._v("(dpp.abnorm.ALL / (dpp.abnorm.ALL + dpp.norm.ALL ) ) > max_filter_ratio")])]),e._v(" "),a("p",[a("code",[e._v("dpp.abnorm.ALL")]),e._v(" denotes the number of rows whose data quality is not up to standard. Such as type mismatch, column mismatch, length mismatch and so on.")]),e._v(" "),a("p",[a("code",[e._v("dpp.norm.ALL")]),e._v(" refers to the number of correct data in the import process. The correct amount of data for the import task can be queried by the "),a("code",[e._v("SHOW LOAD")]),e._v(" command.")]),e._v(" "),a("p",[e._v("The number of rows in the original file = "),a("code",[e._v("dpp.abnorm.ALL + dpp.norm.ALL")])])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("exec_mem_limit")]),e._v(" "),a("p",[e._v("Memory limit. Default is 2GB. Unit is Bytes.")])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("strict_mode")]),e._v(" "),a("p",[e._v("Broker load can use "),a("code",[e._v("strict mode")]),e._v(". Use "),a("code",[e._v('properties ("strict_mode" = "true")')]),e._v("  to enable "),a("code",[e._v("strict mode")]),e._v(", default is false")]),e._v(" "),a("p",[e._v("The strict mode means that the column type conversion in the import process is strictly filtered. The strategy of strict filtering is as follows:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("For column type conversion, if strict mode is true, the wrong data will be filtered. Error data here refers to the kind of data that the original data is not null and the result is null after participating in column type conversion.")])]),e._v(" "),a("li",[a("p",[e._v("Strict mode does not affect the imported column when it is generated by a function transformation.")])]),e._v(" "),a("li",[a("p",[e._v("For a column type imported that contains scope restrictions, strict mode does not affect it if the original data can normally pass type conversion, but can not pass scope restrictions. For example, if the type is decimal (1,0) and the original data is 10, it falls within the scope of type conversion but not column declaration. This data strict has no effect on it.")])])])])]),e._v(" "),a("h4",{attrs:{id:"import-relation-between-strict-mode-source-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-relation-between-strict-mode-source-data"}},[e._v("#")]),e._v(" Import Relation between strict mode source data")]),e._v(" "),a("p",[e._v("Here's an example of a column type TinyInt")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: When columns in a table allow null values to be imported")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("source data")]),e._v(" "),a("th",[e._v("source data example")]),e._v(" "),a("th",[e._v("string to int")]),e._v(" "),a("th",[e._v("strict_mode")]),e._v(" "),a("th",[e._v("result")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("null")]),e._v(" "),a("td",[e._v("\\N")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa or 2000")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("invalid data(filtered)")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("correct data")])])])]),e._v(" "),a("p",[e._v("Here's an example of column type Decimal (1,0)")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: When columns in a table allow null values to be imported")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("source data")]),e._v(" "),a("th",[e._v("source data example")]),e._v(" "),a("th",[e._v("string to int")]),e._v(" "),a("th",[e._v("strict_mode")]),e._v(" "),a("th",[e._v("result")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("null")]),e._v(" "),a("td",[e._v("\\N")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("invalid data(filtered)")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("1 or 10")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("correct data")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: Although 10 is a value beyond the range, strict mode does not affect it because its type meets the requirements of decimal. 10 will eventually be filtered in other ETL processes. But it will not be filtered by strict mode.")])]),e._v(" "),a("h3",{attrs:{id:"view-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-load"}},[e._v("#")]),e._v(" View load")]),e._v(" "),a("p",[e._v("Broker load import mode is asynchronous, so the user must create the imported Label record and use Label in the "),a("strong",[e._v("view Import command to view the import result")]),e._v(". View import commands are common in all import modes. The specific syntax can be "),a("code",[e._v("HELP SHOW LOAD")]),e._v(".")]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('mysql> show load order by createtime desc limit 1\\G\n*************************** 1. row ***************************\n         JobId: 76391\n         Label: label1\n         State: FINISHED\n      Progress: ETL:N/A; LOAD:100%\n          Type: BROKER\n       EtlInfo: dpp.abnorm.ALL=15; dpp.norm.ALL=28133376\n      TaskInfo: cluster:N/A; timeout(s):10800; max_filter_ratio:5.0E-5\n      ErrorMsg: N/A\n    CreateTime: 2019-07-27 11:46:42\n  EtlStartTime: 2019-07-27 11:46:44\n EtlFinishTime: 2019-07-27 11:46:44\n LoadStartTime: 2019-07-27 11:46:44\nLoadFinishTime: 2019-07-27 11:50:16\n           URL: http://192.168.1.1:8040/api/_load_error_log?file=__shard_4/error_log_insert_stmt_4bb00753932c491a-a6da6e2725415317_4bb00753932c491a_a6da6e2725415317\n    JobDetails: {"Unfinished backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"ScannedRows":2390016,"TaskNumber":1,"All backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"FileNumber":1,"FileSize":1073741824}\n')])])]),a("p",[e._v("The following is mainly about the significance of viewing the parameters in the return result set of the import command:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("JobId")]),e._v(" "),a("p",[e._v("The unique ID of the import task is different for each import task, which is automatically generated by the system. Unlike Label, JobId will never be the same, while Label can be reused after the import task fails.")])]),e._v(" "),a("li",[a("p",[e._v("Label")]),e._v(" "),a("p",[e._v("Identity of import task.")])]),e._v(" "),a("li",[a("p",[e._v("State")]),e._v(" "),a("p",[e._v("Import the current phase of the task. In the Broker load import process, PENDING and LOADING are the two main import states. If the Broker load is in the PENDING state, it indicates that the current import task is waiting to be executed; the LOADING state indicates that it is executing.")]),e._v(" "),a("p",[e._v("There are two final stages of the import task: CANCELLED and FINISHED. When Load job is in these two stages, the import is completed. CANCELLED is the import failure, FINISHED is the import success.")])]),e._v(" "),a("li",[a("p",[e._v("Progress")]),e._v(" "),a("p",[e._v("Import the progress description of the task. There are two kinds of progress: ETL and LOAD, which correspond to the two stages of the import process, ETL and LOADING. At present, Broker load only has the LOADING stage, so ETL will always be displayed as "),a("code",[e._v("N/A")]),e._v(".")]),e._v(" "),a("p",[e._v("The progress range of LOAD is 0-100%.")]),e._v(" "),a("p",[a("code",[e._v("LOAD Progress = Number of tables currently completed / Number of tables designed for this import task * 100%")])]),e._v(" "),a("p",[a("strong",[e._v("If all import tables complete the import, then the progress of LOAD is 99%")]),e._v(" import enters the final effective stage, and the progress of LOAD will only be changed to 100% after the entire import is completed.")]),e._v(" "),a("p",[e._v("Import progress is not linear. So if there is no change in progress over a period of time, it does not mean that the import is not being implemented.")])]),e._v(" "),a("li",[a("p",[e._v("Type")]),e._v(" "),a("p",[e._v("Types of import tasks. The type value of Broker load is only BROKER.")])]),e._v(" "),a("li",[a("p",[e._v("Etlinfo")]),e._v(" "),a("p",[e._v("It mainly shows the imported data quantity indicators "),a("code",[e._v("unselected.rows")]),e._v(", "),a("code",[e._v("dpp.norm.ALL")]),e._v(" and "),a("code",[e._v("dpp.abnorm.ALL")]),e._v(". The first value shows the rows which has been filtered by where predicate. Users can verify that the error rate of the current import task exceeds max_filter_ratio based on these two indicators.")])]),e._v(" "),a("li",[a("p",[e._v("TaskInfo")]),e._v(" "),a("p",[e._v("It mainly shows the current import task parameters, that is, the user-specified import task parameters when creating the Broker load import task, including "),a("code",[e._v("cluster")]),e._v(", "),a("code",[e._v("timeout")]),e._v(", and "),a("code",[e._v("max_filter_ratio")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("ErrorMsg")]),e._v(" "),a("p",[e._v("When the import task status is CANCELLED, the reason for the failure is displayed in two parts: type and msg. If the import task succeeds, the "),a("code",[e._v("N/A")]),e._v(" is displayed.")]),e._v(" "),a("p",[e._v("The value meaning of type:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("USER_CANCEL: User Canceled Tasks\nETL_RUN_FAIL：Import tasks that failed in the ETL phase\nETL_QUALITY_UNSATISFIED：Data quality is not up to standard, that is, the error rate exceedsmax_filter_ratio\nLOAD_RUN_FAIL：Import tasks that failed in the LOADING phase\nTIMEOUT：Import task not completed in overtime\nUNKNOWN：Unknown import error\n")])])])]),e._v(" "),a("li",[a("p",[e._v("CreateTime /EtlStartTime /EtlFinishTime /LoadStartTime /LoadFinishTime")]),e._v(" "),a("p",[e._v("These values represent the creation time of the import, the beginning time of the ETL phase, the completion time of the ETL phase, the beginning time of the Loading phase and the completion time of the entire import task, respectively.")]),e._v(" "),a("p",[e._v("Broker load import has no ETL stage, so its EtlStartTime, EtlFinishTime, LoadStartTime are set to the same value.")]),e._v(" "),a("p",[e._v("Import tasks stay in CreateTime for a long time, while LoadStartTime is N/A, which indicates that import tasks are heavily stacked at present. Users can reduce the frequency of import submissions.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LoadFinishTime - CreateTime = Time consumed by the entire import task\nLoadFinishTime - LoadStartTime = The entire Broker load import task execution time = the time consumed by the entire import task - the time the import task waits\n")])])])]),e._v(" "),a("li",[a("p",[e._v("URL")]),e._v(" "),a("p",[e._v("The error data sample of the import task can be obtained by accessing the URL address. When there is no error data in this import, the URL field is N/A.")])]),e._v(" "),a("li",[a("p",[e._v("JobDetails")]),e._v(" "),a("p",[e._v("Display some details of the running status of the job. Including file number, total file size(Bytes), num of sub tasks, scanned rows, related backend ids and unfinished backend ids.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"Unfinished backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"ScannedRows":2390016,"TaskNumber":1,"All backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"FileNumber":1,"FileSize":1073741824}\n')])])]),a("p",[e._v("This info will be updated every 5 seconds. the ScannedRows only for displaying the job progress, not indicate the real numbers.")])])]),e._v(" "),a("h3",{attrs:{id:"cancel-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancel-load"}},[e._v("#")]),e._v(" Cancel load")]),e._v(" "),a("p",[e._v("When the Broker load job status is not CANCELLED or FINISHED, it can be manually cancelled by the user. When canceling, you need to specify a Label for the import task to be cancelled. Canceling Import command syntax can perform "),a("code",[e._v("HELP CANCEL LOAD")]),e._v(" view.")]),e._v(" "),a("h2",{attrs:{id:"relevant-system-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relevant-system-configuration"}},[e._v("#")]),e._v(" Relevant System Configuration")]),e._v(" "),a("h3",{attrs:{id:"fe-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration"}},[e._v("#")]),e._v(" FE configuration")]),e._v(" "),a("p",[e._v("The following configurations belong to the Broker load system-level configuration, which acts on all Broker load import tasks. Configuration values are adjusted mainly by modifying "),a("code",[e._v("fe.conf")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("min_bytes_per_broker_scanner/max_bytes_per_broker_scanner/max_broker_concurrency")]),e._v(" "),a("p",[e._v("The first two configurations limit the minimum and maximum amount of data processed by a single BE. The third configuration limits the maximum number of concurrent imports for a job. The minimum amount of data processed, the maximum number of concurrencies, the size of source files and the number of BEs in the current cluster "),a("strong",[e._v("together determine the concurrency of this import")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("The number of concurrent imports = Math. min (source file size / minimum throughput, maximum concurrency, current number of BE nodes)\nProcessing capacity of this import of a single BE = source file size / concurrency of this import\n")])])]),a("p",[e._v("Usually the maximum amount of data supported by an import job is "),a("code",[e._v("max_bytes_per_broker_scanner * number of BE nodes")]),e._v(". If you need to import a larger amount of data, you need to adjust the size of the "),a("code",[e._v("max_bytes_per_broker_scanner")]),e._v(" parameter appropriately.")])])]),e._v(" "),a("p",[e._v("Default configuration:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("```\nParameter name: min_bytes_per_broker_scanner, default 64MB, unit bytes.\nParameter name: max_broker_concurrency, default 10.\nParameter name: max_bytes_per_broker_scanner, default 3G, unit bytes.\n```\n")])])]),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("h3",{attrs:{id:"application-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-scenarios"}},[e._v("#")]),e._v(" Application scenarios")]),e._v(" "),a("p",[e._v("The most appropriate scenario to use Broker load is the scenario of raw data in a file system (HDFS, BOS, AFS). Secondly, since Broker load is the only way of asynchronous import in a single import, users can also consider using Broker load if they need to use asynchronous access in importing large files.")]),e._v(" "),a("h3",{attrs:{id:"data-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-volume"}},[e._v("#")]),e._v(" Data volume")]),e._v(" "),a("p",[e._v("We will only discuss the case of a single BE. If the user cluster has more than one BE, the amount of data in the heading below should be multiplied by the number of BEs. For example, if the user has three BEs, then the number below 3G (including) should be multiplied by 3, that is, under 9G (including).")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Below 3G (including)")]),e._v(" "),a("p",[e._v("Users can submit Broker load to create import requests directly.")])]),e._v(" "),a("li",[a("p",[e._v("Over 3G")]),e._v(" "),a("p",[e._v("Since the maximum processing capacity of a single imported BE is 3G, the imported files over 3G need to be imported by adjusting the import parameters of Broker load to achieve the import of large files.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Modify the maximum number of scans and concurrency of a single BE according to the current number of BEs and the size of the original file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Modify the configuration in fe.conf\n\nmax_broker_concurrency = BE number\nThe amount of data processed by a single BE for the current import task = the original file size / max_broker_concurrency\nMax_bytes_per_broker_scanner >= the amount of data processed by a single BE of the current import task\n\nFor example, a 100G file with 10 BEs in the cluster\nmax_broker_concurrency = 10\nMax================\n\n")])])]),a("p",[e._v("After modification, all BEs process import tasks concurrently, and each BE processes part of the original file.")]),e._v(" "),a("p",[a("em",[e._v("Note: The configurations in both FEs are system configurations, that is to say, their modifications work on all Broker load tasks.")])])]),e._v(" "),a("li",[a("p",[e._v("Customize the timeout time of the current import task when creating the import")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Current import task single BE processing data volume / user Doris cluster slowest import speed (MB/s) >= current import task timeout time >= current import task single BE processing data volume / 10M/s\n\nFor example, a 100G file with 10 BEs in the cluster\nTimeout > 1000s = 10G / 10M /s\n\n")])])])]),e._v(" "),a("li",[a("p",[e._v("When the user finds that the timeout time calculated in the second step exceeds the default maximum time-out time for importing the system by 4 hours.")]),e._v(" "),a("p",[e._v("At this time, it is not recommended that users directly increase the maximum time-out to solve the problem. If the single import time exceeds the default maximum import timeout of 4 hours, it is better to solve the problem by splitting the file to be imported and importing it several times. The main reason is that if a single import exceeds 4 hours, the time cost of retry after import failure is very high.")]),e._v(" "),a("p",[e._v("The maximum amount of imported file data expected by the Doris cluster can be calculated by the following formula:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Expected maximum imported file data = 14400s * 10M / s * BE number\nFor example, the BE number of clusters is 10.\nExpected maximum imported file data volume = 14400 * 10M / s * 10 = 1440000M 1440G\n\nNote: The average user's environment may not reach the speed of 10M/s, so it is recommended that more than 500G files be split and imported.\n\n")])])])])])])]),e._v(" "),a("h3",{attrs:{id:"complete-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complete-examples"}},[e._v("#")]),e._v(" Complete examples")]),e._v(" "),a("p",[e._v("Data situation: User data in HDFS, file address is hdfs://abc.com:8888/store_sales, HDFS authentication user name is root, password is password, data size is about 30G, hope to import into database bj_sales table store_sales.")]),e._v(" "),a("p",[e._v("Cluster situation: The number of BEs in the cluster is about 3, and the Broker name is broker.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Step 1: After the calculation of the above method, the single BE import quantity is 10G, then the configuration of FE needs to be modified first, and the maximum amount of single BE import is changed to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("max_bytes_per_broker_scanner = 10737418240\n\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Step 2: Calculated, the import time is about 1000s, which does not exceed the default timeout time. No custom timeout time for import can be configured.")])]),e._v(" "),a("li",[a("p",[e._v("Step 3: Create import statements")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('LOAD LABEL bj_sales.store_sales_broker_load_01\n(\n    DATA INFILE("hdfs://abc.com:8888/store_sales")\n    INTO TABLE store_sales\n)\nWITH BROKER \'broker\'\n("username"="root", "password"="password");\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"common-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-questions"}},[e._v("#")]),e._v(" Common Questions")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("failed with : "),a("code",[e._v("Scan bytes per broker scanner exceed limit:xxx")])]),e._v(" "),a("p",[e._v("Refer to the Best Practices section of the document to modify the FE configuration items "),a("code",[e._v("max_bytes_per_broker_scanner")]),e._v(" and "),a("code",[e._v("max_broker_concurrency'.")])])]),e._v(" "),a("li",[a("p",[e._v("failed with ："),a("code",[e._v("failed to send batch")]),e._v(" or "),a("code",[e._v("TabletWriter add batch with unknown id")])]),e._v(" "),a("p",[e._v("Refer to "),a("strong",[e._v("General System Configuration")]),e._v(" in "),a("strong",[e._v("BE Configuration")]),e._v(" in the Import Manual (./load-manual.md), and modify "),a("code",[e._v("query_timeout")]),e._v(" and "),a("code",[e._v("streaming_load_rpc_max_alive_time_sec")]),e._v(" appropriately.")])]),e._v(" "),a("li",[a("p",[e._v("failed with : "),a("code",[e._v("LOAD_RUN_FAIL; msg: Invalid Column Name: xxx")]),e._v("\n    \n     If it is PARQUET or ORC format data, you need to keep the column names in the file header consistent with the column names in the doris table, such as:\n     "),a("code",[e._v("`      (tmp_c1, tmp_c2)      SET      (          id = tmp_c2,          name = tmp_c1      )")]),e._v(" `\n     Represents getting the column with (tmp_c1, tmp_c2) as the column name in parquet or orc, which is mapped to the (id, name) column in the doris table. If set is not set, the column names in the column are used as the mapping relationship.")])])]),e._v(" "),a("p",[e._v("Note: If the orc file directly generated by some hive versions is used, the table header in the orc file is not the column name in the hive meta, but (_col0, _col1, _col2, ...), which may cause the Invalid Column Name error, then You need to use set for mapping.")])])}),[],!1,null,null,null);t.default=r.exports}}]);