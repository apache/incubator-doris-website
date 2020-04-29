(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{745:function(e,t,r){"use strict";r.r(t);var o=r(33),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"export"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[e._v("#")]),e._v(" EXPORT")]),e._v(" "),r("p",[e._v("Description")]),e._v(" "),r("p",[e._v("This statement is used to export data from a specified table to a specified location.\nThis function is implemented by broker process. For different purpose storage systems, different brokers need to be deployed. Deployed brokers can be viewed through SHOW BROKER.\nThis is an asynchronous operation, which returns if the task is submitted successfully. After execution, you can use the SHOW EXPORT command to view progress.")]),e._v(" "),r("p",[e._v("Grammar:\nEXPORT TABLE table_name\n[PARTITION (p1 [,p2]]\nTO export_path\n[opt_properties]\nbroker;")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("table_name\nThe table names to be exported currently support the export of tables with engine as OLAP and mysql.")])]),e._v(" "),r("li",[r("p",[e._v("partition\nYou can export only certain specified partitions of the specified table")])]),e._v(" "),r("li",[r("p",[e._v("export_path\nThe exported path needs to be a directory. At present, it can't be exported to local, so it needs to be exported to broker.")])]),e._v(" "),r("li",[r("p",[e._v('opt_properties\nUsed to specify some special parameters.\nGrammar:\n[PROPERTIES ("key"="value", ...)]')])])]),e._v(" "),r("p",[e._v("The following parameters can be specified:\nColumn_separator: Specifies the exported column separator, defaulting to t.\nLine_delimiter: Specifies the exported line separator, defaulting to\\n.\nExc_mem_limit: Exports the upper limit of memory usage for a single BE node, defaulting to 2GB in bytes.\nTimeout: The time-out for importing jobs is 1 day by default, in seconds.\nTablet_num_per_task: The maximum number of tablets that each subtask can allocate.")]),e._v(" "),r("p",[e._v('Five. debris\nBroker used to specify export usage\nGrammar:\nWITH BROKER broker_name ("key"="value"[,...])\nHere you need to specify the specific broker name and the required broker attributes')]),e._v(" "),r("p",[e._v("For brokers corresponding to different storage systems, the input parameters are different. Specific parameters can be referred to: `help broker load', broker required properties.")]),e._v(" "),r("p",[e._v("'35;'35; example")]),e._v(" "),r("ol",[r("li",[r("p",[e._v('Export all data from the testTbl table to HDFS\nEXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");')])]),e._v(" "),r("li",[r("p",[e._v("Export partitions P1 and P2 from the testTbl table to HDFS")])])]),e._v(" "),r("p",[e._v('EXPORT TABLE testTbl PARTITION (p1,p2) TO "hdfs://hdfs_host:port/a/b/c" WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");\n3. Export all data in the testTbl table to hdfs, using "," as column separator')]),e._v(" "),r("p",[e._v('EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" PROPERTIES ("column_separator"=",") WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");')]),e._v(" "),r("h2",{attrs:{id:"keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),r("p",[e._v("EXPORT")])])}),[],!1,null,null,null);t.default=s.exports}}]);