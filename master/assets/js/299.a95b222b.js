(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{856:function(t,a,e){"use strict";e.r(a);var s=e(33),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"be-tablet数据恢复工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#be-tablet数据恢复工具"}},[t._v("#")]),t._v(" BE Tablet数据恢复工具")]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("用户在使用Doris的过程中，可能会发生因为一些误操作或者线上bug，导致一些有效的tablet被删除（包括元数据和数据）。为了防止在这些异常情况出现数据丢失，Doris提供了回收站机制，来保护用户数据。用户删除的tablet数据不会被直接删除，会被放在回收站中存储一段时间，在一段时间之后会有定时清理机制将过期的数据删除。回收站中的数据包括：tablet的data文件(.dat)，tablet的索引文件(.idx)和tablet的元数据文件(.hdr)。数据将会存放在如下格式的路径：")]),t._v(" "),e("p",[t._v("/root_path/trash/time_label/tablet_id/schema_hash/")]),t._v(" "),e("p",[t._v("其中， root path是用户配置的一块盘上be存储的根目录；\ntrash：是回收站的目录\ntime_label: 时间标签，为了回收站中数据目录的唯一性，同时记录数据时间，使用时间标签作为子目录")]),t._v(" "),e("p",[t._v("当用户发现线上的数据被误删除，需要从回收站中恢复被删除的tablet，需要用到这个tablet数据恢复功能。BE提供http接口和restore_tablet_tool.sh脚本实现这个功能，支持单tablet操作（single mode）和批量操作模式（batch mode）。\n在single mode下，支持单个tablet的数据恢复。\n在batch mode下，支持批量tablet的数据恢复。")]),t._v(" "),e("h2",{attrs:{id:"操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),e("h3",{attrs:{id:"single-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-mode"}},[t._v("#")]),t._v(" single mode")]),t._v(" "),e("h4",{attrs:{id:"http请求方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http请求方式"}},[t._v("#")]),t._v(" http请求方式")]),t._v(" "),e("p",[t._v("BE中提供单个tablet数据恢复的http接口，接口如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl -X POST "http://localhost:8040/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n')])])]),e("p",[t._v("成功的结果如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"status": "Success", "msg": "OK"}\n')])])]),e("p",[t._v("失败的话，会返回相应的失败原因，一种可能的结果如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{"status": "Failed", "msg": "create link path failed"}\n')])])]),e("h4",{attrs:{id:"脚本方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本方式"}},[t._v("#")]),t._v(" 脚本方式")]),t._v(" "),e("p",[t._v("restore_tablet_tool.sh可用来实现单tablet数据恢复的功能。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n')])])]),e("h3",{attrs:{id:"batch-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#batch-mode"}},[t._v("#")]),t._v(" batch mode")]),t._v(" "),e("p",[t._v("批量恢复模式用于实现恢复多个tablet数据的功能。使用的时候需要预先将恢复的tablet id和schema hash按照逗号分隔的格式放在一个文件中，一个tablet一行。\n格式如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("12345,11111\n12346,11111\n12347,11111\n")])])]),e("p",[t._v("然后如下的命令进行恢复(假设文件名为：tablets.txt)：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n')])])])])}),[],!1,null,null,null);a.default=l.exports}}]);