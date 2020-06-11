(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{936:function(t,e,a){"use strict";a.r(e);var n=a(43),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stream-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[t._v("#")]),t._v(" STREAM LOAD")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('NAME:\n    stream-load: load data to table in streaming\n\nSYNOPSIS\n    curl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load\n\nDESCRIPTION\n    该语句用于向指定的 table 导入数据，与普通Load区别是，这种导入方式是同步导入。\n    这种导入方式仍然能够保证一批导入任务的原子性，要么全部数据导入成功，要么全部失败。\n    该操作会同时更新和此 base table 相关的 rollup table 的数据。\n    这是一个同步操作，整个数据导入工作完成后返回给用户导入结果。\n    当前支持HTTP chunked与非chunked上传两种方式，对于非chunked方式，必须要有Content-Length来标示上传内容长度，这样能够保证数据的完整性。\n    另外，用户最好设置Expect Header字段内容100-continue，这样可以在某些出错场景下避免不必要的数据传输。\n\nOPTIONS\n    用户可以通过HTTP的Header部分来传入导入参数\n\n    label: 一次导入的标签，相同标签的数据无法多次导入。用户可以通过指定Label的方式来避免一份数据重复导入的问题。\n    当前Palo内部保留30分钟内最近成功的label。\n\n    column_separator：用于指定导入文件中的列分隔符，默认为\\t。如果是不可见字符，则需要加\\x作为前缀，使用十六进制来表示分隔符。\n    如hive文件的分隔符\\x01，需要指定为-H "column_separator:\\x01"\n\n    columns：用于指定导入文件中的列和 table 中的列的对应关系。如果源文件中的列正好对应表中的内容，那么是不需要指定这个字段的内容的。\n    如果源文件与表schema不对应，那么需要这个字段进行一些数据转换。这里有两种形式column，一种是直接对应导入文件中的字段，直接使用字段名表示；\n    一种是衍生列，语法为 `column_name` = expression。举几个例子帮助理解。\n    例1: 表中有3个列“c1, c2, c3”，源文件中的三个列一次对应的是"c3,c2,c1"; 那么需要指定-H "columns: c3, c2, c1"\n    例2: 表中有3个列“c1, c2, c3", 源文件中前三列依次对应，但是有多余1列；那么需要指定-H "columns: c1, c2, c3, xxx";\n    最后一个列随意指定个名称占位即可\n    例3: 表中有3个列“year, month, day"三个列，源文件中只有一个时间列，为”2018-06-01 01:02:03“格式；\n    那么可以指定-H "columns: col, year = year(col), month=month(col), day=day(col)"完成导入\n\n    where: 用于抽取部分数据。用户如果有需要将不需要的数据过滤掉，那么可以通过设定这个选项来达到。\n    例1: 只导入大于k1列等于20180601的数据，那么可以在导入时候指定-H "where: k1 = 20180601"\n\n    max_filter_ratio：最大容忍可过滤（数据不规范等原因）的数据比例。默认零容忍。数据不规范不包括通过 where 条件过滤掉的行。\n\n    partitions: 用于指定这次导入所设计的partition。如果用户能够确定数据对应的partition，推荐指定该项。不满足这些分区的数据将被过滤掉。\n    比如指定导入到p1, p2分区，-H "partitions: p1, p2"\n\n    timeout: 指定导入的超时时间。单位秒。默认是 600 秒。可设置范围为 1 秒 ~ 259200 秒。\n\n    strict_mode: 用户指定此次导入是否开启严格模式，默认为开启。关闭方式为 -H "strict_mode: false"。\n\n    timezone: 指定本次导入所使用的时区。默认为东八区。该参数会影响所有导入涉及的和时区有关的函数结果。\n\n    exec_mem_limit: 导入内存限制。默认为 2GB。单位为字节。\n\n    format: 指定导入数据格式，默认是csv，支持json格式。\n\n    jsonpaths: 导入json方式分为：简单模式和精准模式。\n          简单模式：没有设置jsonpaths参数即为简单模式，这种模式下要求json数据是对象类型，例如：\n          {"k1":1, "k2":2, "k3":"hello"}，其中k1，k2，k3是列名字。\n\n          匹配模式：用于json数据相对复杂，需要通过jsonpaths参数匹配对应的value。\n\n    strip_outer_array: 布尔类型，为true表示json数据以数组对象开始且将数组对象中进行展平，默认值是false。例如：\n       [\n        {"k1" : 1, "v1" : 2},\n        {"k1" : 3, "v1" : 4}\n       ]\n       当strip_outer_array为true，最后导入到doris中会生成两行数据。\n\nRETURN VALUES\n    导入完成后，会以Json格式返回这次导入的相关内容。当前包括一下字段\n    Status: 导入最后的状态。\n        Success：表示导入成功，数据已经可见；\n        Publish Timeout：表述导入作业已经成功Commit，但是由于某种原因并不能立即可见。用户可以视作已经成功不必重试导入\n        Label Already Exists: 表明该Label已经被其他作业占用，可能是导入成功，也可能是正在导入。\n        用户需要通过get label state命令来确定后续的操作\n        其他：此次导入失败，用户可以指定Label重试此次作业\n    Message: 导入状态详细的说明。失败时会返回具体的失败原因。\n    NumberTotalRows: 从数据流中读取到的总行数\n    NumberLoadedRows: 此次导入的数据行数，只有在Success时有效\n    NumberFilteredRows: 此次导入过滤掉的行数，即数据质量不合格的行数\n    NumberUnselectedRows: 此次导入，通过 where 条件被过滤掉的行数\n    LoadBytes: 此次导入的源文件数据量大小\n    LoadTimeMs: 此次导入所用的时间\n    ErrorURL: 被过滤数据的具体内容，仅保留前1000条\n\nERRORS\n    可以通过以下语句查看导入错误详细信息：\n\n    SHOW LOAD WARNINGS ON \'url\'\n\n    其中 url 为 ErrorURL 给出的 url。\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('1. 将本地文件\'testData\'中的数据导入到数据库\'testDb\'中\'testTbl\'的表，使用Label用于去重。指定超时时间为 100 秒\n    curl --location-trusted -u root -H "label:123" -H "timeout:100" -T testData http://host:port/api/testDb/testTbl/_stream_load\n\n2. 将本地文件\'testData\'中的数据导入到数据库\'testDb\'中\'testTbl\'的表，使用Label用于去重, 并且只导入k1等于20180601的数据\n    curl --location-trusted -u root -H "label:123" -H "where: k1=20180601" -T testData http://host:port/api/testDb/testTbl/_stream_load\n\n3. 将本地文件\'testData\'中的数据导入到数据库\'testDb\'中\'testTbl\'的表, 允许20%的错误率（用户是defalut_cluster中的）\n    curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n\n4. 将本地文件\'testData\'中的数据导入到数据库\'testDb\'中\'testTbl\'的表, 允许20%的错误率，并且指定文件的列名（用户是defalut_cluster中的）\n    curl --location-trusted -u root  -H "label:123" -H "max_filter_ratio:0.2" -H "columns: k2, k1, v1" -T testData http://host:port/api/testDb/testTbl/_stream_load\n\n5. 将本地文件\'testData\'中的数据导入到数据库\'testDb\'中\'testTbl\'的表中的p1, p2分区, 允许20%的错误率。\n    curl --location-trusted -u root  -H "label:123" -H "max_filter_ratio:0.2" -H "partitions: p1, p2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n\n6. 使用streaming方式导入（用户是defalut_cluster中的）\n    seq 1 10 | awk \'{OFS="\\t"}{print $1, $1 * 10}\' | curl --location-trusted -u root -T - http://host:port/api/testDb/testTbl/_stream_load\n\n7. 导入含有HLL列的表，可以是表中的列或者数据中的列用于生成HLL列，也可使用hll_empty补充数据中没有的列\n    curl --location-trusted -u root -H "columns: k1, k2, v1=hll_hash(k1), v2=hll_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load\n\n8. 导入数据进行严格模式过滤，并设置时区为 Africa/Abidjan\n    curl --location-trusted -u root -H "strict_mode: true" -H "timezone: Africa/Abidjan" -T testData http://host:port/api/testDb/testTbl/_stream_load\n\n9. 导入含有BITMAP列的表，可以是表中的列或者数据中的列用于生成BITMAP列，也可以使用bitmap_empty填充空的Bitmap\n    curl --location-trusted -u root -H "columns: k1, k2, v1=to_bitmap(k1), v2=bitmap_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load\n\n10. 简单模式，导入json数据\n     表结构： \n       `category` varchar(512) NULL COMMENT "",\n       `author` varchar(512) NULL COMMENT "",\n       `title` varchar(512) NULL COMMENT "",\n       `price` double NULL COMMENT ""\n   json数据格式：\n       {"category":"C++","author":"avc","title":"C++ primer","price":895}\n     导入命令：\n       curl --location-trusted -u root  -H "label:123" -H "format: json" -T testData http://host:port/api/testDb/testTbl/_stream_load\n     为了提升吞吐量，支持一次性导入条数据，json数据格式如下：\n          [\n           {"category":"C++","author":"avc","title":"C++ primer","price":89.5},\n           {"category":"Java","author":"avc","title":"Effective Java","price":95},\n           {"category":"Linux","author":"avc","title":"Linux kernel","price":195}\n          ]\n11. 匹配模式，导入json数据\n   json数据格式：\n       [\n       {"category":"xuxb111","author":"1avc","title":"SayingsoftheCentury","price":895},\n       {"category":"xuxb222","author":"2avc","title":"SayingsoftheCentury","price":895},\n       {"category":"xuxb333","author":"3avc","title":"SayingsoftheCentury","price":895}\n       ]\n     通过指定jsonpath进行精准导入，例如只导入category、author、price三个属性  \n     curl --location-trusted -u root  -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\"$.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -T testData http://host:port/api/testDb/testTbl/_stream_load\n     说明：\n       1）如果json数据是以数组开始，并且数组中每个对象是一条记录，则需要将strip_outer_array设置成true，表示展平数组。\n       2）如果json数据是以数组开始，并且数组中每个对象是一条记录，在设置jsonpath时，我们的ROOT节点实际上是数组中对象。\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("STREAM,LOAD\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);