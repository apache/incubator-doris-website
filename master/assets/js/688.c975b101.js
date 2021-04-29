(window.webpackJsonp=window.webpackJsonp||[]).push([[688],{1075:function(a,e,t){"use strict";t.r(e);var s=t(43),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"show-stream-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-stream-load"}},[a._v("#")]),a._v(" SHOW STREAM LOAD")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('该语句用于展示指定的Stream Load任务的执行情况\n语法：\n    SHOW STREAM LOAD\n    [FROM db_name]\n    [\n        WHERE \n        [LABEL [ = "your_label" | LIKE "label_matcher"]]\n        [STATUS = ["SUCCESS"|"FAIL"]]\n    ]\n    [ORDER BY ...]\n    [LIMIT limit][OFFSET offset];\n    \n说明：\n    1) 如果不指定 db_name，使用当前默认db\n    2) 如果使用 LABEL LIKE，则会匹配Stream Load任务的 label 包含 label_matcher 的任务\n    3) 如果使用 LABEL = ，则精确匹配指定的 label\n    4) 如果指定了 STATUS，则匹配 STREAM LOAD 状态\n    5) 可以使用 ORDER BY 对任意列组合进行排序\n    6) 如果指定了 LIMIT，则显示 limit 条匹配记录。否则全部显示\n    7) 如果指定了 OFFSET，则从偏移量offset开始显示查询结果。默认情况下偏移量为0。\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('1. 展示默认 db 的所有Stream Load任务\n    SHOW STREAM LOAD;\n\n2. 展示指定 db 的Stream Load任务，label 中包含字符串 "2014_01_02"，展示最老的10个\n    SHOW STREAM LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n    \n3. 展示指定 db 的Stream Load任务，指定 label 为 "load_example_db_20140102"\n    SHOW STREAM LOAD FROM example_db WHERE LABEL = "load_example_db_20140102";\n    \n4. 展示指定 db 的Stream Load任务，指定 status 为 "success", 并按 LoadStartTime 降序排序\n    SHOW STREAM LOAD FROM example_db WHERE STATUS = "success" ORDER BY LoadStartTime DESC;\n    \n5. 展示指定 db 的导入任务 并按 LoadStartTime 降序排序,并从偏移量5开始显示10条查询结果\n    SHOW STREAM LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\n    SHOW STREAM LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("SHOW,STREAM LOAD\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);