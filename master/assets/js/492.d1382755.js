(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{415:function(e,r,t){"use strict";t.r(r);var n=t(33),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"export"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[e._v("#")]),e._v(" EXPORT")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('该语句用于将指定表的数据导出到指定位置。\n该功能通过 broker 进程实现。对于不同的目的存储系统，需要部署不同的 broker。可以通过 SHOW BROKER 查看已部署的 broker。\n这是一个异步操作，任务提交成功则返回。执行后可使用 SHOW EXPORT 命令查看进度。\n\n语法：\n    EXPORT TABLE table_name\n    [PARTITION (p1[,p2])]\n    TO export_path\n    [opt_properties]\n    broker;\n\n1. table_name\n  当前要导出的表的表名，目前支持engine为olap和mysql的表的导出。\n\n2. partition\n  可以只导出指定表的某些指定分区\n\n3. export_path\n  导出的路径，需为目录。目前不能导出到本地，需要导出到broker。\n\n4. opt_properties\n  用于指定一些特殊参数。\n      语法：\n      [PROPERTIES ("key"="value", ...)]\n    \n      可以指定如下参数：\n        column_separator: 指定导出的列分隔符，默认为\\t。\n        line_delimiter: 指定导出的行分隔符，默认为\\n。\n        exec_mem_limit: 导出在单个 BE 节点的内存使用上限，默认为 2GB，单位为字节。\n        timeout：导入作业的超时时间，默认为1天，单位是秒。\n        tablet_num_per_task：每个子任务能分配的最大 Tablet 数量。\n\n5. broker\n  用于指定导出使用的broker\n      语法：\n      WITH BROKER broker_name ("key"="value"[,...])\n      这里需要指定具体的broker name, 以及所需的broker属性\n\n  对于不同存储系统对应的 broker，这里需要输入的参数不同。具体参数可以参阅：`help broker load` 中 broker 所需属性。\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. 将 testTbl 表中的所有数据导出到 hdfs 上\n    EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");\n\n2. 将 testTbl 表中的分区p1,p2导出到 hdfs 上\n\n    EXPORT TABLE testTbl PARTITION (p1,p2) TO "hdfs://hdfs_host:port/a/b/c" WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");\n3. 将 testTbl 表中的所有数据导出到 hdfs 上，以","作为列分隔符\n\n    EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" PROPERTIES ("column_separator"=",") WITH BROKER "broker_name" ("username"="xxx", "password"="yyy");\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("EXPORT\n")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);