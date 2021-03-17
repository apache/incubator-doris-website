(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{1071:function(t,a,s){"use strict";s.r(a);var _=s(43),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"doris-output-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-output-plugin"}},[t._v("#")]),t._v(" Doris output plugin")]),t._v(" "),s("p",[t._v("该插件用于logstash输出数据到Doris，使用 HTTP 协议与 Doris FE Http接口交互，并通过 Doris 的 stream load 的方式进行数据导入.")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://doris.apache.org/master/zh-CN/administrator-guide/load-data/stream-load-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解Doris Stream Load "),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://doris.apache.org/master/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解更多关于Doris"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"安装和编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装和编译"}},[t._v("#")]),t._v(" 安装和编译")]),t._v(" "),s("h3",{attrs:{id:"_1-下载插件源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载插件源码"}},[t._v("#")]),t._v(" 1.下载插件源码")]),t._v(" "),s("h3",{attrs:{id:"_2-编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译"}},[t._v("#")]),t._v(" 2.编译")]),t._v(" "),s("p",[t._v("在extension/logstash/ 目录下执行")]),t._v(" "),s("p",[s("code",[t._v("gem build logstash-output-doris.gemspec")])]),t._v(" "),s("p",[t._v("你将在同目录下得到 logstash-output-doris-{version}.gem 文件")]),t._v(" "),s("h3",{attrs:{id:"_3-插件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-插件安装"}},[t._v("#")]),t._v(" 3.插件安装")]),t._v(" "),s("p",[t._v("copy logstash-output-doris-{version}.gem 到 logstash 安装目录下")]),t._v(" "),s("p",[t._v("执行命令")]),t._v(" "),s("p",[s("code",[t._v("./bin/logstash-plugin install logstash-output-doris-{version}.gem")])]),t._v(" "),s("p",[t._v("安装 logstash-output-doris 插件")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h3",{attrs:{id:"示例："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例："}},[t._v("#")]),t._v(" 示例：")]),t._v(" "),s("p",[t._v("在config目录下新建一个配置配置文件，命名为 logstash-doris.conf")]),t._v(" "),s("p",[t._v("具体配置如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('output {\n    doris {\n        http_hosts => [ "http://fehost:8030" ]\n        user => user_name\n        password => password\n        db => "db_name"\n        table => "table_name"\n        label_prefix => "label_prefix"\n        column_separator => ","\n    }\n}\n')])])]),s("p",[t._v("配置说明：")]),t._v(" "),s("p",[t._v("连接相关配置：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("配置")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("http_hosts")])]),t._v(" "),s("td",[t._v("FE的HTTP交互地址 eg")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("user")])]),t._v(" "),s("td",[t._v("用户名，该用户需要有doris对应库表的导入权限")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("password")])]),t._v(" "),s("td",[t._v("密码")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("db")])]),t._v(" "),s("td",[t._v("数据库名")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("table")])]),t._v(" "),s("td",[t._v("表名")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("label_prefix")])]),t._v(" "),s("td",[t._v("导入标识前缀，最终生成的标识为 "),s("em",[t._v("{label_prefix}_{db}_{table}_{time_stamp}")])])])])]),t._v(" "),s("p",[t._v("导入相关配置：("),s("a",{attrs:{href:"http://doris.apache.org/master/zh-CN/administrator-guide/load-data/stream-load-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("配置")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("column_separator")])]),t._v(" "),s("td",[t._v("列分割符，默认为\\t。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("columns")])]),t._v(" "),s("td",[t._v("用于指定导入文件中的列和 table 中的列的对应关系。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("where")])]),t._v(" "),s("td",[t._v("导入任务指定的过滤条件。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("max_filter_ratio")])]),t._v(" "),s("td",[t._v("导入任务的最大容忍率，默认零容忍。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("partition")])]),t._v(" "),s("td",[t._v("待导入表的 Partition 信息。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("timeout")])]),t._v(" "),s("td",[t._v("超时时间，默认为600s。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("strict_mode")])]),t._v(" "),s("td",[t._v("严格模式，默认为false。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("timezone")])]),t._v(" "),s("td",[t._v("指定本次导入所使用的时区，默认为东八区。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("exec_mem_limit")])]),t._v(" "),s("td",[t._v("导入内存限制，默认为 2GB，单位为字节。")])])])]),t._v(" "),s("p",[t._v("其他配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("配置")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("save_on_failure")])]),t._v(" "),s("td",[t._v("如果导入失败是否在本地保存，默认为true")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("save_dir")])]),t._v(" "),s("td",[t._v("本地保存目录，默认为 /tmp")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("automatic_retries")])]),t._v(" "),s("td",[t._v("失败时重试最大次数，默认为3")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("batch_size")])]),t._v(" "),s("td",[t._v("每批次最多处理的event数量，默认为100000")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("idle_flush_time")])]),t._v(" "),s("td",[t._v("最大间隔时间，默认为20（秒）")])])])]),t._v(" "),s("h2",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),s("p",[t._v("执行命令启动doris output plugin：")]),t._v(" "),s("p",[s("code",[t._v("{logstash-home}/bin/logstash -f {logstash-home}/config/logstash-doris.conf --config.reload.automatic")])]),t._v(" "),s("h2",{attrs:{id:"完整使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整使用示例"}},[t._v("#")]),t._v(" 完整使用示例")]),t._v(" "),s("h3",{attrs:{id:"_1-编译doris-output-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-编译doris-output-plugin"}},[t._v("#")]),t._v(" 1.编译doris-output-plugin")]),t._v(" "),s("p",[t._v("1> 下载ruby压缩包，自行到"),s("a",{attrs:{href:"https://www.ruby-lang.org/en/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ruby官网"),s("OutboundLink")],1),t._v("下载，这里使用的2.7.1版本")]),t._v(" "),s("p",[t._v("2> 编译安装，配置ruby的环境变量")]),t._v(" "),s("p",[t._v("3> 到doris源码 extension/logstash/ 目录下，执行")]),t._v(" "),s("p",[s("code",[t._v("gem build logstash-output-doris.gemspec")])]),t._v(" "),s("p",[t._v("得到文件 logstash-output-doris-0.1.0.gem，至此编译完成")]),t._v(" "),s("h3",{attrs:{id:"_2-安装配置filebeat-此处使用filebeat作为input"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装配置filebeat-此处使用filebeat作为input"}},[t._v("#")]),t._v(" 2.安装配置filebeat(此处使用filebeat作为input)")]),t._v(" "),s("p",[t._v("1> "),s("a",{attrs:{href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("es官网"),s("OutboundLink")],1),t._v("下载 filebeat tar压缩包并解压")]),t._v(" "),s("p",[t._v("2> 进入filebeat目录下，修改配置文件 filebeat.yml 如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('filebeat.inputs:\n- type: log\n  paths:\n    - /tmp/doris.data\noutput.logstash:\n  hosts: ["localhost:5044"]\n')])])]),s("p",[t._v("/tmp/doris.data 为doris数据路径")]),t._v(" "),s("p",[t._v("3> 启动filebeat：")]),t._v(" "),s("p",[s("code",[t._v('./filebeat -e -c filebeat.yml -d "publish"')])]),t._v(" "),s("h3",{attrs:{id:"_3-安装logstash及doris-out-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装logstash及doris-out-plugin"}},[t._v("#")]),t._v(" 3.安装logstash及doris-out-plugin")]),t._v(" "),s("p",[t._v("1> "),s("a",{attrs:{href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("es官网"),s("OutboundLink")],1),t._v("下载 logstash tar压缩包并解压")]),t._v(" "),s("p",[t._v("2> 将步骤1中得到的 logstash-output-doris-0.1.0.gem copy到logstash安装目录下")]),t._v(" "),s("p",[t._v("3> 执行")]),t._v(" "),s("p",[s("code",[t._v("./bin/logstash-plugin install logstash-output-doris-0.1.0.gem")])]),t._v(" "),s("p",[t._v("安装插件")]),t._v(" "),s("p",[t._v("4> 在config 目录下新建配置文件 logstash-doris.conf 内容如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('input {\n    beats {\n        port => "5044"\n    }\n}\n\noutput {\n    doris {\n        http_hosts => [ "http://127.0.0.1:8030" ]\n        user => doris\n        password => doris\n        db => "logstash_output_test"\n        table => "output"\n        label_prefix => "doris"\n        column_separator => ","\n        columns => "a,b,c,d,e"\n    }\n}\n')])])]),s("p",[t._v("这里的配置需按照配置说明自行配置")]),t._v(" "),s("p",[t._v("5> 启动logstash：")]),t._v(" "),s("p",[t._v("./bin/logstash -f ./config/logstash-doris.conf --config.reload.automatic")]),t._v(" "),s("h3",{attrs:{id:"_4-测试功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试功能"}},[t._v("#")]),t._v(" 4.测试功能")]),t._v(" "),s("p",[t._v("向/tmp/doris.data追加写入数据")]),t._v(" "),s("p",[s("code",[t._v("echo a,b,c,d,e >> /tmp/doris.data")])]),t._v(" "),s("p",[t._v("观察logstash日志，若返回response的Status为 Success，则导入成功，此时可在 logstash_output_test.output 表中查看已导入的数据")])])}),[],!1,null,null,null);a.default=e.exports}}]);