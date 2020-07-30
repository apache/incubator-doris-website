(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{691:function(e,t,a){"use strict";a.r(t);var s=a(43),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"user-配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-配置项"}},[e._v("#")]),e._v(" User 配置项")]),e._v(" "),a("p",[e._v("该文档主要介绍了 User 级别的相关配置项。User 级别的配置生效范围为单个用户。每个用户都可以设置自己的 User property。相互不影响。")]),e._v(" "),a("h2",{attrs:{id:"查看配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看配置项"}},[e._v("#")]),e._v(" 查看配置项")]),e._v(" "),a("p",[e._v("FE 启动后，在 MySQL 客户端，通过下面命令查看 User 的配置项：")]),e._v(" "),a("p",[a("code",[e._v("SHOW PROPERTY [FOR user] [LIKE key pattern]")])]),e._v(" "),a("p",[e._v("具体语法可通过命令："),a("code",[e._v("help show property;")]),e._v(" 查询。")]),e._v(" "),a("h2",{attrs:{id:"设置配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置配置项"}},[e._v("#")]),e._v(" 设置配置项")]),e._v(" "),a("p",[e._v("FE 启动后，在MySQL 客户端，通过下面命令修改 User 的配置项：")]),e._v(" "),a("p",[a("code",[e._v("SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']")])]),e._v(" "),a("p",[e._v("具体语法可通过命令："),a("code",[e._v("help set property;")]),e._v(" 查询。")]),e._v(" "),a("p",[e._v("User 级别的配置项只会对指定用户生效，并不会影响其他用户的配置。")]),e._v(" "),a("h2",{attrs:{id:"应用举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用举例"}},[e._v("#")]),e._v(" 应用举例")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("修改用户 Billie 的 "),a("code",[e._v("max_user_connections")])]),e._v(" "),a("p",[e._v("通过 "),a("code",[e._v("SHOW PROPERTY FOR 'Billie' LIKE '%max_user_connections%';")]),e._v(" 查看 Billie 用户当前的最大链接数为 100。")]),e._v(" "),a("p",[e._v("通过 "),a("code",[e._v("SET PROPERTY FOR 'Billie' 'max_user_connections' = '200';")]),e._v(" 修改 Billie 用户的当前最大连接数到 200。")])])]),e._v(" "),a("h2",{attrs:{id:"配置项列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项列表"}},[e._v("#")]),e._v(" 配置项列表")]),e._v(" "),a("h3",{attrs:{id:"max-user-connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-user-connections"}},[e._v("#")]),e._v(" max_user_connections")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("用户最大的连接数，默认值为100。一般情况不需要更改该参数，除非查询的并发数超过了默认值。\n")])])]),a("h3",{attrs:{id:"resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[e._v("#")]),e._v(" resource")]),e._v(" "),a("h3",{attrs:{id:"quota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quota"}},[e._v("#")]),e._v(" quota")]),e._v(" "),a("h3",{attrs:{id:"default-load-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-load-cluster"}},[e._v("#")]),e._v(" default_load_cluster")]),e._v(" "),a("h3",{attrs:{id:"load-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-cluster"}},[e._v("#")]),e._v(" load_cluster")])])}),[],!1,null,null,null);t.default=r.exports}}]);