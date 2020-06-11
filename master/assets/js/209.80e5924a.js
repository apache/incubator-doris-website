(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{596:function(e,t,n){"use strict";n.r(t);var i=n(43),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"alter-view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alter-view"}},[e._v("#")]),e._v(" ALTER VIEW")]),e._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('This statement is used to modify the definition of a view\nSyntax:\n\tALTER VIEW\n    [db_name.]view_name\n    (column1[ COMMENT "col comment"][, column2, ...])\n    AS query_stmt\n    \nExplain:\n\t1. View is logical, it isn\'t stored in the physical medium. When we querying, view will be embed as subqueries in query statement. Therefore, modifying the definition of views is equivalent to modifying query_stmt which is defined in view.\n\t2. query_stmt is arbitrarily supported SQL.\n')])])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('1. Modify example_view on the example_db\n\n\tALTER VIEW example_db.example_view\n\t(\n\t\tc1 COMMENT "column 1",\n\t\tc2 COMMENT "column 2",\n\t\tc3 COMMENT "column 3"\n\t)\n\tAS SELECT k1, k2, SUM(v1) FROM example_table \n\tGROUP BY k1, k2')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);