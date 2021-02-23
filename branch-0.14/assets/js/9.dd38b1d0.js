(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{399:function(e,t,a){"use strict";a.r(t);var s=a(43),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"bitmap-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-index"}},[e._v("#")]),e._v(" Bitmap Index")]),e._v(" "),a("p",[e._v("Users can speed up queries by creating a bitmap index\nThis document focuses on how to create an index job, as well as some considerations and frequently asked questions when creating an index.")]),e._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("ul",[a("li",[e._v("bitmap index：a fast data structure that speeds up queries")])]),e._v(" "),a("h2",{attrs:{id:"basic-principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-principles"}},[e._v("#")]),e._v(" Basic Principles")]),e._v(" "),a("p",[e._v("Creating and dropping index is essentially a schema change job. For details, please refer to\n"),a("RouterLink",{attrs:{to:"/en/administrator-guide/alter-table/alter-table-schema-change.html"}},[e._v("Schema Change")]),e._v("。")],1),e._v(" "),a("h2",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[e._v("There are two forms of index creation and modification related syntax, one is integrated with alter table statement, and the other is using separate\ncreate/drop index syntax")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create Index")]),e._v(" "),a("p",[e._v("Please refer to "),a("RouterLink",{attrs:{to:"/en/sql-reference/sql-statements/Data Definition/CREATE INDEX.html"}},[e._v("CREATE INDEX")]),e._v("\nor "),a("RouterLink",{attrs:{to:"/en/sql-reference/sql-statements/Data Definition/ALTER TABLE.html"}},[e._v("ALTER TABLE")]),e._v(",\nYou can also specify a bitmap index when creating a table，Please refer to "),a("RouterLink",{attrs:{to:"/en/sql-reference/sql-statements/Data Definition/CREATE TABLE.html"}},[e._v("CREATE TABLE")])],1)]),e._v(" "),a("li",[a("p",[e._v("Show Index")]),e._v(" "),a("p",[e._v("Please refer to "),a("RouterLink",{attrs:{to:"/en/sql-reference/sql-statements/Administration/SHOW INDEX.html"}},[e._v("SHOW INDEX")])],1)]),e._v(" "),a("li",[a("p",[e._v("Drop Index")]),e._v(" "),a("p",[e._v("Please refer to "),a("RouterLink",{attrs:{to:"/en/sql-reference/sql-statements/Data Definition/DROP INDEX.html"}},[e._v("DROP INDEX")]),e._v(" or "),a("RouterLink",{attrs:{to:"/en/sql-reference/sql-statements/Data Definition/ALTER TABLE.html"}},[e._v("ALTER TABLE")])],1)])]),e._v(" "),a("h2",{attrs:{id:"create-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-job"}},[e._v("#")]),e._v(" Create Job")]),e._v(" "),a("p",[e._v("Please refer to "),a("RouterLink",{attrs:{to:"/en/administrator-guide/alter-table/alter-table-schema-change.html"}},[e._v("Schema Change")])],1),e._v(" "),a("h2",{attrs:{id:"view-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-job"}},[e._v("#")]),e._v(" View Job")]),e._v(" "),a("p",[e._v("Please refer to "),a("RouterLink",{attrs:{to:"/en/administrator-guide/alter-table/alter-table-schema-change.html"}},[e._v("Schema Change")])],1),e._v(" "),a("h2",{attrs:{id:"cancel-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancel-job"}},[e._v("#")]),e._v(" Cancel Job")]),e._v(" "),a("p",[e._v("Please refer to "),a("RouterLink",{attrs:{to:"/en/administrator-guide/alter-table/alter-table-schema-change.html"}},[e._v("Schema Change")])],1),e._v(" "),a("h2",{attrs:{id:"notice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[e._v("#")]),e._v(" Notice")]),e._v(" "),a("ul",[a("li",[e._v("Currently only index of bitmap type is supported.")]),e._v(" "),a("li",[e._v("The bitmap index is only created on a single column.")]),e._v(" "),a("li",[e._v("Bitmap indexes can be applied to all columns of the "),a("code",[e._v("Duplicate")]),e._v(" data model and key columns of the "),a("code",[e._v("Aggregate")]),e._v(" and "),a("code",[e._v("Uniq")]),e._v(" models.")]),e._v(" "),a("li",[e._v("The data types supported by bitmap indexes are as follows:\n"),a("ul",[a("li",[a("code",[e._v("TINYINT")])]),e._v(" "),a("li",[a("code",[e._v("SMALLINT")])]),e._v(" "),a("li",[a("code",[e._v("INT")])]),e._v(" "),a("li",[a("code",[e._v("UNSIGNEDINT")])]),e._v(" "),a("li",[a("code",[e._v("BIGINT")])]),e._v(" "),a("li",[a("code",[e._v("CHAR")])]),e._v(" "),a("li",[a("code",[e._v("VARCHAE")])]),e._v(" "),a("li",[a("code",[e._v("DATE")])]),e._v(" "),a("li",[a("code",[e._v("DATETIME")])]),e._v(" "),a("li",[a("code",[e._v("LARGEINT")])]),e._v(" "),a("li",[a("code",[e._v("DECIMAL")])]),e._v(" "),a("li",[a("code",[e._v("BOOL")])])])]),e._v(" "),a("li",[e._v("The bitmap index takes effect only in segmentV2. The table's storage format will be converted to V2 automatically when creating index.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);