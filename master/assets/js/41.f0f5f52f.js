(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{430:function(e,t,s){"use strict";s.r(t);var a=s(43),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"sql-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-mode"}},[e._v("#")]),e._v(" SQL MODE")]),e._v(" "),s("p",[e._v("The SQL MODE supported by Doris refers to the sql mode management mechanism of MySQL. Each client can set its own sql mode, and the database administrator with admin permission can set the global sql mode.")]),e._v(" "),s("h2",{attrs:{id:"sql-mode-introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-mode-introduction"}},[e._v("#")]),e._v(" Sql mode introduction")]),e._v(" "),s("p",[e._v("SQL MODE enables users to switch between different styles of SQL syntax and data verification strictness, making Doris more compatible with other databases. For example, in some databases, the '||' symbol is a string connector, but in Doris it is equivalent to 'or'. At this time, users only need to use SQL mode to switch to the style they want. Each client can set sql mode, which is valid in the current conversation. Only users with admin permission can set global SQL mode.")]),e._v(" "),s("h2",{attrs:{id:"theory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theory"}},[e._v("#")]),e._v(" Theory")]),e._v(" "),s("p",[e._v("SQL MODE is stored in session variables with a 64 bit long type. Each bit of this address represents the on / off (1 for on, 0 for off) state of a mode. As long as we know the specific bit of each mode, we can easily and quickly verify and operate SQL mode through bit operation.")]),e._v(" "),s("p",[e._v("Every time you query sql mode, the long type will be parsed into a user-readable string. Similarly, the sql mode string sent by the user to the server will be parsed into a long type that can be stored in session variables.")]),e._v(" "),s("p",[e._v("The set global sql mode will be persisted, so the operation on the global sql mode is always only once, even after the program is restarted, the last global sql mode can be recovered.")]),e._v(" "),s("h2",{attrs:{id:"operation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[e._v("#")]),e._v(" Operation")]),e._v(" "),s("p",[e._v("1、set sql mode")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('set global sql_mode = "DEFAULT"\nset session sql_mode = "DEFAULT"\n')])])]),s("blockquote",[s("p",[e._v("At present, Doris's default sql mode is DEFAULT (but it will be changed in the future modification).\nSetting global sql mode requires admin permission and affects all clients that connect later.\nSetting session sql mode will only affect the current conversation client. The default setting way is session.")])]),e._v(" "),s("p",[e._v("2、select sql mode")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("select @@global.sql_mode\nselect @@session.sql_mode\n")])])]),s("blockquote",[s("p",[e._v("In addition to this method, you can also view the current sql mode by returning all session variables as follows")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("show global variables\nshow session variables\n")])])]),s("h2",{attrs:{id:"supported-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-mode"}},[e._v("#")]),e._v(" supported mode")]),e._v(" "),s("ol",[s("li",[s("p",[s("code",[e._v("PIPES_AS_CONCAT")])]),e._v(" "),s("p",[e._v("Treat '||' as a string concatenation operator (same as CONCAT()) rather than as a synonym for OR. (e.g., "),s("code",[e._v("'a'||'b' = 'ab'")]),e._v(", "),s("code",[e._v("1||0 = '10'")]),e._v(")")])])]),e._v(" "),s("h2",{attrs:{id:"combine-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#combine-mode"}},[e._v("#")]),e._v(" combine mode")]),e._v(" "),s("p",[e._v("(Work in progress)")])])}),[],!1,null,null,null);t.default=o.exports}}]);