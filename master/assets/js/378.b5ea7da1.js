(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{740:function(t,e,a){"use strict";a.r(e);var s=a(33),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"timediff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timediff"}},[t._v("#")]),t._v(" timediff")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("TIME TIMEDIFF(DATETIME expr1, DATETIME expr2)")])]),t._v(" "),a("p",[t._v("TIMEDIFF返回两个DATETIME之间的差值")]),t._v(" "),a("p",[t._v("TIMEDIFF函数返回表示为时间值的expr1 - expr2的结果，返回值为TIME类型")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> SELECT TIMEDIFF(now(),utc_timestamp());\n+----------------------------------+\n| timediff(now(), utc_timestamp()) |\n+----------------------------------+\n| 08:00:00                         |\n+----------------------------------+\n\nmysql> SELECT TIMEDIFF('2019-07-11 16:59:30','2019-07-11 16:59:21');\n+--------------------------------------------------------+\n| timediff('2019-07-11 16:59:30', '2019-07-11 16:59:21') |\n+--------------------------------------------------------+\n| 00:00:09                                               |\n+--------------------------------------------------------+\n\nmysql> SELECT TIMEDIFF('2019-01-01 00:00:00', NULL);\n+---------------------------------------+\n| timediff('2019-01-01 00:00:00', NULL) |\n+---------------------------------------+\n| NULL                                  |\n+---------------------------------------+\n")])])]),a("p",[t._v("##keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("TIMEDIFF\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);