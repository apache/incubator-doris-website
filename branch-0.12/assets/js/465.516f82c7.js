(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{480:function(a,e,t){"use strict";t.r(e);var n=t(33),L=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"cancel-alter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cancel-alter"}},[a._v("#")]),a._v(" CANCEL ALTER")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("该语句用于撤销一个 ALTER 操作。\n1. 撤销 ALTER TABLE COLUMN 操作\n语法：\n    CANCEL ALTER TABLE COLUMN\n    FROM db_name.table_name\n\n2. 撤销 ALTER TABLE ROLLUP 操作\n语法：\n    CANCEL ALTER TABLE ROLLUP\n    FROM db_name.table_name\n\n3. 根据job id批量撤销rollup操作\n语法:\n    CANCEL ALTER TABLE ROLLUP\n            FROM db_name.table_name (jobid,...)\n注意：\n    该命令为异步操作，具体是否执行成功需要使用`show alter table rollup`查看任务状态确认\n4. 撤销 ALTER CLUSTER 操作\n语法：\n    （待实现...）\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("[CANCEL ALTER TABLE COLUMN]\n1. 撤销针对 my_table 的 ALTER COLUMN 操作。\n    CANCEL ALTER TABLE COLUMN\n    FROM example_db.my_table;\n\n[CANCEL ALTER TABLE ROLLUP]\n1. 撤销 my_table 下的 ADD ROLLUP 操作。\n    CANCEL ALTER TABLE ROLLUP\n    FROM example_db.my_table;\n\n[CANCEL ALTER TABLE ROLLUP]\n1. 根据job id撤销 my_table 下的 ADD ROLLUP 操作。\n    CANCEL ALTER TABLE ROLLUP\n     FROM example_db.my_table (12801,12802);\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("CANCEL,ALTER,TABLE,COLUMN,ROLLUP\n")])])])])}),[],!1,null,null,null);e.default=L.exports}}]);