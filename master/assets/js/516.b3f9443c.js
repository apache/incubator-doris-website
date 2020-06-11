(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{902:function(t,a,e){"use strict";e.r(a);var s=e(43),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"truncate-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#truncate-table"}},[t._v("#")]),t._v(" TRUNCATE TABLE")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("该语句用于清空指定表和分区的数据\n语法：\n\n    TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)];\n\n说明：\n    1. 该语句清空数据，但保留表或分区。\n    2. 不同于 DELETE，该语句只能整体清空指定的表或分区，不能添加过滤条件。\n    3. 不同于 DELETE，使用该方式清空数据不会对查询性能造成影响。\n    4. 该操作删除的数据不可恢复。\n    5. 使用该命令时，表状态需为 NORMAL，即不允许正在进行 SCHEMA CHANGE 等操作。\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("1. 清空 example_db 下的表 tbl\n\n    TRUNCATE TABLE example_db.tbl;\n\n2. 清空表 tbl 的 p1 和 p2 分区\n\n    TRUNCATE TABLE tbl PARTITION(p1, p2);\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("TRUNCATE,TABLE\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);