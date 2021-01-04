(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{1001:function(e,a,t){"use strict";t.r(a);var n=t(43),l=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[e._v("#")]),e._v(" BACKUP")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('该语句用于备份指定数据库下的数据。该命令为异步操作。提交成功后，需通过 SHOW BACKUP 命令查看进度。仅支持备份 OLAP 类型的表。\n语法：\n    BACKUP SNAPSHOT [db_name].{snapshot_name}\n    TO `repository_name`\n    ON (\n        `table_name` [PARTITION (`p1`, ...)],\n        ...\n    )\n    PROPERTIES ("key"="value", ...);\n        \n说明：\n    1. 同一数据库下只能有一个正在执行的 BACKUP 或 RESTORE 任务。\n    2. ON 子句中标识需要备份的表和分区。如果不指定分区，则默认备份该表的所有分区。\n    3. PROPERTIES 目前支持以下属性：\n            "type" = "full"：表示这是一次全量更新（默认）。\n            "timeout" = "3600"：任务超时时间，默认为一天。单位秒。\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. 全量备份 example_db 下的表 example_tbl 到仓库 example_repo 中：\n    BACKUP SNAPSHOT example_db.snapshot_label1\n    TO example_repo\n    ON (example_tbl)\n    PROPERTIES ("type" = "full");\n    \n2. 全量备份 example_db 下，表 example_tbl 的 p1, p2 分区，以及表 example_tbl2 到仓库 example_repo 中：\n    BACKUP SNAPSHOT example_db.snapshot_label2\n    TO example_repo\n    ON \n    (\n        example_tbl PARTITION (p1,p2),\n        example_tbl2\n    );\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("BACKUP\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);