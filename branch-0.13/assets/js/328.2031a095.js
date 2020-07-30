(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{715:function(_,e,s){"use strict";s.r(e);var t=s(43),r=Object(t.a)({},(function(){var _=this,e=_.$createElement,s=_._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"fe-监控项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fe-监控项"}},[_._v("#")]),_._v(" FE 监控项")]),_._v(" "),s("p",[_._v("该文档主要介绍 FE 的相关监控项。")]),_._v(" "),s("h2",{attrs:{id:"查看监控项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看监控项"}},[_._v("#")]),_._v(" 查看监控项")]),_._v(" "),s("p",[_._v("FE 的监控项可以通过以下方式访问：")]),_._v(" "),s("p",[s("code",[_._v("http://fe_host:fe_http_port/metrics")])]),_._v(" "),s("p",[_._v("默认显示为 "),s("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[_._v("Prometheus"),s("OutboundLink")],1),_._v(" 格式。")]),_._v(" "),s("p",[_._v("通过以下接口可以获取 Json 格式的监控项：")]),_._v(" "),s("p",[s("code",[_._v("http://fe_host:fe_http_port/metrics?type=json")])]),_._v(" "),s("h2",{attrs:{id:"监控项列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控项列表"}},[_._v("#")]),_._v(" 监控项列表")]),_._v(" "),s("h3",{attrs:{id:"doris-fe-snmp-name-tcp-in-errs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-in-errs"}},[_._v("#")]),_._v(" "),s("code",[_._v('doris_fe_snmp{name="tcp_in_errs"}')])]),_._v(" "),s("p",[_._v("该监控项为 "),s("code",[_._v("/proc/net/snmp")]),_._v(" 中的 "),s("code",[_._v("Tcp: InErrs")]),_._v(" 字段值。表示当前接收到的错误的 TCP 包的数量。")]),_._v(" "),s("p",[_._v("结合采样周期可以计算发生率。")]),_._v(" "),s("p",[_._v("通常用于排查网络问题。")]),_._v(" "),s("h3",{attrs:{id:"doris-fe-snmp-name-tcp-retrans-segs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-retrans-segs"}},[_._v("#")]),_._v(" "),s("code",[_._v('doris_fe_snmp{name="tcp_retrans_segs"}')])]),_._v(" "),s("p",[_._v("该监控项为 "),s("code",[_._v("/proc/net/snmp")]),_._v(" 中的 "),s("code",[_._v("Tcp: RetransSegs")]),_._v(" 字段值。表示当前重传的 TCP 包的数量。")]),_._v(" "),s("p",[_._v("结合采样周期可以计算发生率。")]),_._v(" "),s("p",[_._v("通常用于排查网络问题。")]),_._v(" "),s("h3",{attrs:{id:"doris-fe-snmp-name-tcp-in-segs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-in-segs"}},[_._v("#")]),_._v(" "),s("code",[_._v('doris_fe_snmp{name="tcp_in_segs"}')])]),_._v(" "),s("p",[_._v("该监控项为 "),s("code",[_._v("/proc/net/snmp")]),_._v(" 中的 "),s("code",[_._v("Tcp: InSegs")]),_._v(" 字段值。表示当前接收到的所有 TCP 包的数量。")]),_._v(" "),s("p",[_._v("通过 "),s("code",[_._v("(NEW_tcp_in_errs - OLD_tcp_in_errs) / (NEW_tcp_in_segs - OLD_tcp_in_segs)")]),_._v(" 可以计算接收到的 TCP 错误包率。")]),_._v(" "),s("p",[_._v("通常用于排查网络问题。")]),_._v(" "),s("h3",{attrs:{id:"doris-fe-snmp-name-tcp-out-segs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-out-segs"}},[_._v("#")]),_._v(" "),s("code",[_._v('doris_fe_snmp{name="tcp_out_segs"}')])]),_._v(" "),s("p",[_._v("该监控项为 "),s("code",[_._v("/proc/net/snmp")]),_._v(" 中的 "),s("code",[_._v("Tcp: OutSegs")]),_._v(" 字段值。表示当前发送的所有带 RST 标记的 TCP 包的数量。")]),_._v(" "),s("p",[_._v("通过 "),s("code",[_._v("(NEW_tcp_tcp_retrans_segs - OLD_tcp_retrans_segs) / (NEW_tcp_out_segs - OLD_tcp_out_segs)")]),_._v(" 可以计算 TCP 重传率。")]),_._v(" "),s("p",[_._v("通常用于排查网络问题。")])])}),[],!1,null,null,null);e.default=r.exports}}]);