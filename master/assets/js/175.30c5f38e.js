(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{561:function(e,t,a){"use strict";a.r(t);var r=a(43),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"set-property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-property"}},[e._v("#")]),e._v(" SET PROPERTY")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("p",[e._v("SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']")]),e._v(" "),a("p",[e._v("Set user attributes, including resources allocated to users, import cluster, etc. The user attributes set here are for user, not user_identity. That is to say, if two users'jack'@'%' and'jack'@'192%'are created through the CREATE USER statement, the SET PROPERTY statement can only be used for the jack user, not'jack'@'%' or'jack'@'192%'")]),e._v(" "),a("p",[e._v("Importing cluster is only applicable to Baidu internal users.")]),e._v(" "),a("p",[e._v("key:")]),e._v(" "),a("p",[e._v("Super user rights:\nMax_user_connections: Maximum number of connections.\nresource.cpu_share: cpu资源分配。\nLoad_cluster. {cluster_name}. priority: assigns priority to a specified cluster, which can be HIGH or NORMAL")]),e._v(" "),a("p",[e._v("Ordinary user rights:\nQuota.normal: Resource allocation at the normal level.\nQuota.high: Resource allocation at the high level.\nQuota.low: Resource allocation at low level.")]),e._v(" "),a("p",[e._v("Load_cluster. {cluster_name}. hadoop_palo_path: The Hadoop directory used by Palo needs to store ETL programs and intermediate data generated by ETL for Palo to import. After the import is completed, the intermediate data will be automatically cleaned up, and the ETL program will be automatically reserved for next use.\nLoad_cluster. {cluster_name}. hadoop_configs: configuration of hadoop, where fs. default. name, mapred. job. tracker, hadoop. job. UGI must be filled in.\nLoad ucluster. {cluster  name}. hadoop port: Hadoop HDFS name node http}\nDefault_load_cluster: The default import cluster.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Modify the maximum number of user jacks to 1000\nSET PROPERTY FOR 'jack' 'max_user_connections' = '1000';")])]),e._v(" "),a("li",[a("p",[e._v("Modify the cpu_share of user Jack to 1000\nSET PROPERTY FOR 'jack' 'resource.cpu_share' = '1000';")])]),e._v(" "),a("li",[a("p",[e._v("Modify the weight of the normal group of Jack users\nSet property for'jack''quota. normal' = 400';")])]),e._v(" "),a("li",[a("p",[e._v("Add import cluster for user jack\nSET PROPERTY FOR 'jack'\n'load 'cluster.{cluster name}.hadoop'u palo path' ='/user /palo /palo path',\n'load_cluster.{cluster_name}.hadoop_configs' = 'fs.default.name=hdfs://dpp.cluster.com:port;mapred.job.tracker=dpp.cluster.com:port;hadoop.job.ugi=user,password;mapred.job.queue.name=job_queue_name_in_hadoop;mapred.job.priority=HIGH;';")])]),e._v(" "),a("li",[a("p",[e._v("Delete the import cluster under user jack.\nSET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}' = '';")])]),e._v(" "),a("li",[a("p",[e._v("Modify user jack's default import cluster\nSET PROPERTY FOR 'jack' 'default_load_cluster' = '{cluster_name}';")])]),e._v(" "),a("li",[a("p",[e._v("Modify the cluster priority of user Jack to HIGH\nSET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}.priority' = 'HIGH';")])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("SET, PROPERTY")])])}),[],!1,null,null,null);t.default=o.exports}}]);