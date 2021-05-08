(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{697:function(e,t,r){"use strict";r.r(t);var o=r(43),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"export"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[e._v("#")]),e._v(" EXPORT")]),e._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('This statement is used to export data from a specified table to a specified location.\nThis function is implemented by broker process. For different purpose storage systems, different brokers need to be deployed. Deployed brokers can be viewed through SHOW BROKER.\nThis is an asynchronous operation, which returns if the task is submitted successfully. After execution, you can use the SHOW EXPORT command to view progress.\n\nGrammar:\n    EXPORT TABLE table_name\n    [PARTITION (p1 [,p2]]\n    [WHERE [expr]]\n    TO export_path\n    [opt_properties]\n    [broker｜S3];\n\n1. table_name\n   The table names to be exported currently support the export of tables with engine as OLAP and mysql.\n\n2. partition\n   You can export only certain specified partitions of the specified table\n\n3. expr\n   Export rows that meet the where condition, optional. If you leave it blank, all rows are exported by default. \n\n4. export_path\n   The exported path needs to be a directory. At present, it can\'t be exported to local, so it needs to be exported to broker.\n\n5. opt_properties\n   Used to specify some special parameters.\n   Grammar:\n   [PROPERTIES ("key"="value", ...)]\n\n    The following parameters can be specified:\n      column_separator: Specifies the exported column separator, defaulting to t. Supports invisible characters, such as\'\\x07\'.\n      column: Specify the columns to be exported, separated by commas. If you do not fill in this parameter, the default is to export all the columns of the table.\n      line_delimiter: Specifies the exported line separator, defaulting to\\n. Supports invisible characters, such as\'\\x07\'.\n      exec_mem_limit: Exports the upper limit of memory usage for a single BE node, defaulting to 2GB in bytes.\n      timeout: The time-out for importing jobs is 1 day by default, in seconds.\n      tablet_num_per_task: The maximum number of tablets that each subtask can allocate.\n\n 6. broker|S3\n    Specify to use broker export or export through S3 protocol\n      Grammar:\n      WITH [BROKER broker_name| S3] ("key"="value"[,...])\n      Here you need to specify the specific broker name and the required broker attributes, If you use the S3 protocol, you do not need to specify the broker name\n\n    For brokers corresponding to different storage systems, the input parameters are different. Specific parameters can be referred to: `help broker load\', broker required properties.\n    When exporting to local, you do not need to fill in this part.\n')])])]),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('1. Export all data from the testTbl table to HDFS\n   EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");\n\n2. Export partitions P1 and P2 from the testTbl table to HDFS\n   EXPORT TABLE testTbl PARTITION (p1,p2) TO "hdfs://hdfs_host:port/a/b/c" WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");\n\n3. Export all data in the testTbl table to hdfs, using "," as column separator\n   EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" PROPERTIES ("column_separator"=",") WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");\n\n4. Export the row meet condition k1 = 1 in the testTbl table to hdfs.\n   EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" WHERE k1=1 WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");\n\n5. Export all data in the testTbl table to the local.\n   EXPORT TABLE testTbl TO "file:///home/data/a";\n\n6. Export all data in the testTbl table to hdfs, using the invisible character "\\x07" as the column and row separator. \n   EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" PROPERTIES ("column_separator"="\\\\x07", "line_delimiter" = "\\\\x07") WITH BROKER "broker_name" ("username"="xxx", "password"="yyy")\n\n7. Export column k1, v1 from the testTbl to the local.\n   EXPORT TABLE testTbl TO "file:///home/data/a" PROPERTIES ("columns" = "k1,v1");\n')])])]),r("h2",{attrs:{id:"keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("EXPORT\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);