(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{731:function(t,_,a){"use strict";a.r(_);var e=a(43),v=Object(e.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据划分"}},[t._v("#")]),t._v(" 数据划分")]),t._v(" "),a("p",[t._v("本文档主要介绍 Doris 的建表和数据划分，以及建表操作中可能遇到的问题和解决方法。")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("在 Doris 中，数据都以表（Table）的形式进行逻辑上的描述。")]),t._v(" "),a("h3",{attrs:{id:"row-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-column"}},[t._v("#")]),t._v(" Row & Column")]),t._v(" "),a("p",[t._v("一张表包括行（Row）和列（Column）。Row 即用户的一行数据。Column 用于描述一行数据中不同的字段。")]),t._v(" "),a("p",[t._v("Column 可以分为两大类：Key 和 Value。从业务角度看，Key 和 Value 可以分别对应维度列和指标列。从聚合模型的角度来说，Key 列相同的行，会聚合成一行。其中 Value 列的聚合方式由用户在建表时指定。关于更多聚合模型的介绍，可以参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/getting-started/data-model-rollup.html"}},[t._v("Doris 数据模型")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"tablet-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablet-partition"}},[t._v("#")]),t._v(" Tablet & Partition")]),t._v(" "),a("p",[t._v("在 Doris 的存储引擎中，用户数据被水平划分为若干个数据分片（Tablet，也称作数据分桶）。每个 Tablet 包含若干数据行。各个 Tablet 之间的数据没有交集，并且在物理上是独立存储的。")]),t._v(" "),a("p",[t._v("多个 Tablet 在逻辑上归属于不同的分区（Partition）。一个 Tablet 只属于一个 Partition。而一个 Partition 包含若干个 Tablet。因为 Tablet 在物理上是独立存储的，所以可以视为 Partition 在物理上也是独立。Tablet 是数据移动、复制等操作的最小物理存储单元。")]),t._v(" "),a("p",[t._v("若干个 Partition 组成一个 Table。Partition 可以视为是逻辑上最小的管理单元。数据的导入与删除，都可以或仅能针对一个 Partition 进行。")]),t._v(" "),a("h2",{attrs:{id:"数据划分-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据划分-2"}},[t._v("#")]),t._v(" 数据划分")]),t._v(" "),a("p",[t._v("我们以一个建表操作来说明 Doris 的数据划分。")]),t._v(" "),a("p",[t._v("Doris 的建表是一个同步命令，命令返回成功，即表示建表成功。")]),t._v(" "),a("p",[t._v("可以通过 "),a("code",[t._v("HELP CREATE TABLE;")]),t._v(" 查看更多帮助。")]),t._v(" "),a("p",[t._v("本小节通过一个例子，来介绍 Doris 的建表方式。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE TABLE IF NOT EXISTS example_db.expamle_tbl\n(\n    `user_id` LARGEINT NOT NULL COMMENT "用户id",\n    `date` DATE NOT NULL COMMENT "数据灌入日期时间",\n    `timestamp` DATETIME NOT NULL COMMENT "数据灌入的时间戳",\n    `city` VARCHAR(20) COMMENT "用户所在城市",\n    `age` SMALLINT COMMENT "用户年龄",\n    `sex` TINYINT COMMENT "用户性别",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "用户最后一次访问时间",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "用户总消费",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "用户最大停留时间",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "用户最小停留时间"\n)\nENGINE=olap\nAGGREGATE KEY(`user_id`, `date`, `timestamp`, `city`, `age`, `sex`)\nPARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES LESS THAN ("2017-02-01"),\n    PARTITION `p201702` VALUES LESS THAN ("2017-03-01"),\n    PARTITION `p201703` VALUES LESS THAN ("2017-04-01")\n)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 16\nPROPERTIES\n(\n    "replication_num" = "3",\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2018-01-01 12:00:00"\n);\n\n')])])]),a("h3",{attrs:{id:"列定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列定义"}},[t._v("#")]),t._v(" 列定义")]),t._v(" "),a("p",[t._v("这里我们只以 AGGREGATE KEY 数据模型为例进行说明。更多数据模型参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/getting-started/data-model-rollup.html"}},[t._v("Doris 数据模型")]),t._v("。")],1),t._v(" "),a("p",[t._v("列的基本类型，可以通过在 mysql-client 中执行 "),a("code",[t._v("HELP CREATE TABLE;")]),t._v(" 查看。")]),t._v(" "),a("p",[t._v("AGGREGATE KEY 数据模型中，所有没有指定聚合方式（SUM、REPLACE、MAX、MIN）的列视为 Key 列。而其余则为 Value 列。")]),t._v(" "),a("p",[t._v("定义列时，可参照如下建议：")]),t._v(" "),a("ol",[a("li",[t._v("Key 列必须在所有 Value 列之前。")]),t._v(" "),a("li",[t._v("尽量选择整型类型。因为整型类型的计算和查找比较效率远高于字符串。")]),t._v(" "),a("li",[t._v("对于不同长度的整型类型的选择原则，遵循 "),a("strong",[t._v("够用即可")]),t._v("。")]),t._v(" "),a("li",[t._v("对于 VARCHAR 和 STRING 类型的长度，遵循 "),a("strong",[t._v("够用即可")]),t._v("。")]),t._v(" "),a("li",[t._v("所有列的总字节长度（包括 Key 和 Value）不能超过 100KB。")])]),t._v(" "),a("h3",{attrs:{id:"分区与分桶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分区与分桶"}},[t._v("#")]),t._v(" 分区与分桶")]),t._v(" "),a("p",[t._v("Doris 支持两层的数据划分。第一层是 Partition，仅支持 Range 的划分方式。第二层是 Bucket（Tablet），仅支持 Hash 的划分方式。")]),t._v(" "),a("p",[t._v("也可以仅使用一层分区。使用一层分区时，只支持 Bucket 划分。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Partition")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Partition 列可以指定一列或多列。分区类必须为 KEY 列。多列分区的使用方式在后面 "),a("strong",[t._v("多列分区")]),t._v(" 小结介绍。")])]),t._v(" "),a("li",[a("p",[t._v("不论分区列是什么类型，在写分区值时，都需要加双引号。")])]),t._v(" "),a("li",[a("p",[t._v("分区列通常为时间列，以方便的管理新旧数据。")])]),t._v(" "),a("li",[a("p",[t._v("分区数量理论上没有上限。")])]),t._v(" "),a("li",[a("p",[t._v("当不使用 Partition 建表时，系统会自动生成一个和表名同名的，全值范围的 Partition。该 Partition 对用户不可见，并且不可删改。")])]),t._v(" "),a("li",[a("p",[t._v("Partition 支持通过 "),a("code",[t._v("VALUES LESS THAN (...)")]),t._v(" 仅指定上界，系统会将前一个分区的上界作为该分区的下界，生成一个左闭右开的区间。通过，也支持通过 "),a("code",[t._v("VALUES [...)")]),t._v(" 指定同时指定上下界，生成一个左闭右开的区间。")])]),t._v(" "),a("li",[a("p",[t._v("通过 "),a("code",[t._v("VALUES [...)")]),t._v(" 同时指定上下界比较容易理解。这里举例说明，当使用 "),a("code",[t._v("VALUES LESS THAN (...)")]),t._v(" 语句进行分区的增删操作时，分区范围的变化情况：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如上示例，当建表完成后，会自动生成如下3个分区：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p201701: [MIN_VALUE,  2017-02-01)\np201702: [2017-02-01, 2017-03-01)\np201703: [2017-03-01, 2017-04-01)\n")])])])]),t._v(" "),a("li",[a("p",[t._v('当我们增加一个分区 p201705 VALUES LESS THAN ("2017-06-01")，分区结果如下：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p201701: [MIN_VALUE,  2017-02-01)\np201702: [2017-02-01, 2017-03-01)\np201703: [2017-03-01, 2017-04-01)\np201705: [2017-04-01, 2017-06-01)\n")])])])]),t._v(" "),a("li",[a("p",[t._v("此时我们删除分区 p201703，则分区结果如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p201701: [MIN_VALUE,  2017-02-01)\np201702: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")])])]),a("blockquote",[a("p",[t._v("注意到 p201702 和 p201705 的分区范围并没有发生变化，而这两个分区之间，出现了一个空洞：[2017-03-01, 2017-04-01)。即如果导入的数据范围在这个空洞范围内，是无法导入的。")])])]),t._v(" "),a("li",[a("p",[t._v("继续删除分区 p201702，分区结果如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p201701: [MIN_VALUE,  2017-02-01)\np201705: [2017-04-01, 2017-06-01)\n空洞范围变为：[2017-02-01, 2017-04-01)\n")])])])]),t._v(" "),a("li",[a("p",[t._v('现在增加一个分区 p201702new VALUES LESS THAN ("2017-03-01")，分区结果如下：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p201701:    [MIN_VALUE,  2017-02-01)\np201702new: [2017-02-01, 2017-03-01)\np201705:    [2017-04-01, 2017-06-01)\n")])])]),a("blockquote",[a("p",[t._v("可以看到空洞范围缩小为：[2017-03-01, 2017-04-01)")])])]),t._v(" "),a("li",[a("p",[t._v('现在删除分区 p201701，并添加分区 p201612 VALUES LESS THAN ("2017-01-01")，分区结果如下：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p201612:    [MIN_VALUE,  2017-01-01)\np201702new: [2017-02-01, 2017-03-01)\np201705:    [2017-04-01, 2017-06-01) \n")])])]),a("blockquote",[a("p",[t._v("即出现了一个新的空洞：[2017-01-01, 2017-02-01)")])])])])])]),t._v(" "),a("p",[t._v("综上，分区的删除不会改变已存在分区的范围。删除分区可能出现空洞。通过 "),a("code",[t._v("VALUES LESS THAN")]),t._v(" 语句增加分区时，分区的下界紧接上一个分区的上界。")]),t._v(" "),a("p",[t._v("不可添加范围重叠的分区。")])]),t._v(" "),a("li",[a("p",[t._v("Bucket")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果使用了 Partition，则 "),a("code",[t._v("DISTRIBUTED ...")]),t._v(" 语句描述的是数据在"),a("strong",[t._v("各个分区内")]),t._v("的划分规则。如果不使用 Partition，则描述的是对整个表的数据的划分规则。")])]),t._v(" "),a("li",[a("p",[t._v("分桶列可以是多列，但必须为 Key 列。分桶列可以和 Partition 列相同或不同。")])]),t._v(" "),a("li",[a("p",[t._v("分桶列的选择，是在 "),a("strong",[t._v("查询吞吐")]),t._v(" 和 "),a("strong",[t._v("查询并发")]),t._v(" 之间的一种权衡：")]),t._v(" "),a("ol",[a("li",[t._v("如果选择多个分桶列，则数据分布更均匀。但如果查询条件不包含所有分桶列的等值条件的话，一个查询会扫描所有分桶。这样查询的吞吐会增加，但是单个查询的延迟也会增加。这个方式适合大吞吐低并发的查询场景。")]),t._v(" "),a("li",[t._v("如果仅选择一个或少数分桶列，则点查询可以仅查询一个分桶。这种方式适合高并发的点查询场景。")])])]),t._v(" "),a("li",[a("p",[t._v("分桶的数量理论上没有上限。")])])])]),t._v(" "),a("li",[a("p",[t._v("关于 Partition 和 Bucket 的数量和数据量的建议。")]),t._v(" "),a("ul",[a("li",[t._v("一个表的 Tablet 总数量等于 (Partition num * Bucket num)。")]),t._v(" "),a("li",[t._v("一个表的 Tablet 数量，在不考虑扩容的情况下，推荐略多于整个集群的磁盘数量。")]),t._v(" "),a("li",[t._v("单个 Tablet 的数据量理论上没有上下界，但建议在 1G - 10G 的范围内。如果单个 Tablet 数据量过小，则数据的聚合效果不佳，且元数据管理压力大。如果数据量过大，则不利于副本的迁移、补齐，且会增加 Schema Change 或者 Rollup 操作失败重试的代价（这些操作失败重试的粒度是 Tablet）。")]),t._v(" "),a("li",[t._v("当 Tablet 的数据量原则和数量原则冲突时，建议优先考虑数据量原则。")]),t._v(" "),a("li",[t._v("在建表时，每个分区的 Bucket 数量统一指定。但是在动态增加分区时（"),a("code",[t._v("ADD PARTITION")]),t._v("），可以单独指定新分区的 Bucket 数量。可以利用这个功能方便的应对数据缩小或膨胀。")]),t._v(" "),a("li",[t._v("一个 Partition 的 Bucket 数量一旦指定，不可更改。所以在确定 Bucket 数量时，需要预先考虑集群扩容的情况。比如当前只有 3 台 host，每台 host 有 1 块盘。如果 Bucket 的数量只设置为 3 或更小，那么后期即使再增加机器，也不能提高并发度。")]),t._v(" "),a("li",[t._v("举一些例子：假设在有10台BE，每台BE一块磁盘的情况下。如果一个表总大小为 500MB，则可以考虑4-8个分片。5GB：8-16个。50GB：32个。500GB：建议分区，每个分区大小在 50GB 左右，每个分区16-32个分片。5TB：建议分区，每个分区大小在 50GB 左右，每个分区16-32个分片。")])]),t._v(" "),a("blockquote",[a("p",[t._v("注：表的数据量可以通过 "),a("code",[t._v("show data")]),t._v(" 命令查看，结果除以副本数，即表的数据量。")])])])]),t._v(" "),a("h4",{attrs:{id:"多列分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多列分区"}},[t._v("#")]),t._v(" 多列分区")]),t._v(" "),a("p",[t._v("Doris 支持指定多列作为分区列，示例如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('PARTITION BY RANGE(`date`, `id`)\n(\n    PARTITION `p201701_1000` VALUES LESS THAN ("2017-02-01", "1000"),\n    PARTITION `p201702_2000` VALUES LESS THAN ("2017-03-01", "2000"),\n    PARTITION `p201703_all`  VALUES LESS THAN ("2017-04-01")\n)\n')])])]),a("p",[t._v("在以上示例中，我们指定 "),a("code",[t._v("date")]),t._v("(DATE 类型) 和 "),a("code",[t._v("id")]),t._v("(INT 类型) 作为分区列。以上示例最终得到的分区如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('* p201701_1000:    [(MIN_VALUE,  MIN_VALUE), ("2017-02-01", "1000")   )\n* p201702_2000:    [("2017-02-01", "1000"),  ("2017-03-01", "2000")   )\n* p201703_all:     [("2017-03-01", "2000"),  ("2017-04-01", MIN_VALUE)) \n')])])]),a("p",[t._v("注意，最后一个分区用户缺省只指定了 "),a("code",[t._v("date")]),t._v(" 列的分区值，所以 "),a("code",[t._v("id")]),t._v(" 列的分区值会默认填充 "),a("code",[t._v("MIN_VALUE")]),t._v("。当用户插入数据时，分区列值会按照顺序依次比较，最终得到对应的分区。举例如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("* 数据  --\x3e  分区\n* 2017-01-01, 200     --\x3e p201701_1000\n* 2017-01-01, 2000    --\x3e p201701_1000\n* 2017-02-01, 100     --\x3e p201701_1000\n* 2017-02-01, 2000    --\x3e p201702_2000\n* 2017-02-15, 5000    --\x3e p201702_2000\n* 2017-03-01, 2000    --\x3e p201703_all\n* 2017-03-10, 1       --\x3e p201703_all\n* 2017-04-01, 1000    --\x3e 无法导入\n* 2017-05-01, 1000    --\x3e 无法导入\n")])])]),a("h3",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" PROPERTIES")]),t._v(" "),a("p",[t._v("在建表语句的最后 PROPERTIES 中，可以指定以下两个参数：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("replication_num")]),t._v(" "),a("ul",[a("li",[t._v("每个 Tablet 的副本数量。默认为3，建议保持默认即可。在建表语句中，所有 Partition 中的 Tablet 副本数量统一指定。而在增加新分区时，可以单独指定新分区中 Tablet 的副本数量。")]),t._v(" "),a("li",[t._v("副本数量可以在运行时修改。强烈建议保持奇数。")]),t._v(" "),a("li",[t._v("最大副本数量取决于集群中独立 IP 的数量（注意不是 BE 数量）。Doris 中副本分布的原则是，不允许同一个 Tablet 的副本分布在同一台物理机上，而识别物理机即通过 IP。所以，即使在同一台物理机上部署了 3 个或更多 BE 实例，如果这些 BE 的 IP 相同，则依然只能设置副本数为 1。")]),t._v(" "),a("li",[t._v("对于一些小，并且更新不频繁的维度表，可以考虑设置更多的副本数。这样在 Join 查询时，可以有更大的概率进行本地数据 Join。")])])]),t._v(" "),a("li",[a("p",[t._v("storage_medium & storage_cooldown_time")]),t._v(" "),a("ul",[a("li",[t._v("BE 的数据存储目录可以显式的指定为 SSD 或者 HDD（通过 .SSD 或者 .HDD 后缀区分）。建表时，可以统一指定所有 Partition 初始存储的介质。注意，后缀作用是显式指定磁盘介质，而不会检查是否与实际介质类型相符。")]),t._v(" "),a("li",[t._v("默认初始存储介质可通过fe的配置文件 "),a("code",[t._v("fe.conf")]),t._v(" 中指定 "),a("code",[t._v("default_storage_medium=xxx")]),t._v("，如果没有指定，则默认为 HDD。如果指定为 SSD，则数据初始存放在 SSD 上。")]),t._v(" "),a("li",[t._v("如果没有指定 storage_cooldown_time，则默认 30 天后，数据会从 SSD 自动迁移到 HDD 上。如果指定了 storage_cooldown_time，则在到达 storage_cooldown_time 时间后，数据才会迁移。")]),t._v(" "),a("li",[t._v("注意，当指定 storage_medium 时，该参数只是一个“尽力而为”的设置。即使集群内没有设置 SSD 存储介质，也不会报错，而是自动存储在可用的数据目录中。同样，如果 SSD 介质不可访问、空间不足，都可能导致数据初始直接存储在其他可用介质上。而数据到期迁移到 HDD 时，如果 HDD 介质不可访问、空间不足，也可能迁移失败（但是会不断尝试）。")])])])]),t._v(" "),a("h3",{attrs:{id:"engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine"}},[t._v("#")]),t._v(" ENGINE")]),t._v(" "),a("p",[t._v("本示例中，ENGINE 的类型是 olap，即默认的 ENGINE 类型。在 Doris 中，只有这个 ENGINE 类型是由 Doris 负责数据管理和存储的。其他 ENGINE 类型，如 mysql、broker、es 等等，本质上只是对外部其他数据库或系统中的表的映射，以保证 Doris 可以读取这些数据。而 Doris 本身并不创建、管理和存储任何非 olap ENGINE 类型的表和数据。")]),t._v(" "),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("`IF NOT EXISTS` 表示如果没有创建过该表，则创建。注意这里只判断表名是否存在，而不会判断新建表结构是否与已存在的表结构相同。所以如果存在一个同名但不同构的表，该命令也会返回成功，但并不代表已经创建了新的表和新的结构。\n")])])]),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("h3",{attrs:{id:"建表操作常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建表操作常见问题"}},[t._v("#")]),t._v(" 建表操作常见问题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("如果在较长的建表语句中出现语法错误，可能会出现语法错误提示不全的现象。这里罗列可能的语法错误供手动纠错：")]),t._v(" "),a("ul",[a("li",[t._v("语法结构错误。请仔细阅读 "),a("code",[t._v("HELP CREATE TABLE;")]),t._v("，检查相关语法结构。")]),t._v(" "),a("li",[t._v("保留字。当用户自定义名称遇到保留字时，需要用反引号 `` 引起来。建议所有自定义名称使用这个符号引起来。")]),t._v(" "),a("li",[t._v("中文字符或全角字符。非 utf8 编码的中文字符，或隐藏的全角字符（空格，标点等）会导致语法错误。建议使用带有显示不可见字符的文本编辑器进行检查。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Failed to create partition [xxx] . Timeout")])]),t._v(" "),a("p",[t._v("Doris 建表是按照 Partition 粒度依次创建的。当一个 Partition 创建失败时，可能会报这个错误。即使不使用 Partition，当建表出现问题时，也会报 "),a("code",[t._v("Failed to create partition")]),t._v("，因为如前文所述，Doris 会为没有指定 Partition 的表创建一个不可更改的默认的 Partition。")]),t._v(" "),a("p",[t._v("当遇到这个错误是，通常是 BE 在创建数据分片时遇到了问题。可以参照以下步骤排查：")]),t._v(" "),a("ol",[a("li",[t._v("在 fe.log 中，查找对应时间点的 "),a("code",[t._v("Failed to create partition")]),t._v(" 日志。在该日志中，会出现一系列类似 "),a("code",[t._v("{10001-10010}")]),t._v(" 字样的数字对。数字对的第一个数字表示 Backend ID，第二个数字表示 Tablet ID。如上这个数字对，表示 ID 为 10001 的 Backend 上，创建 ID 为 10010 的 Tablet 失败了。")]),t._v(" "),a("li",[t._v("前往对应 Backend 的 be.INFO 日志，查找对应时间段内，tablet id 相关的日志，可以找到错误信息。")]),t._v(" "),a("li",[t._v("以下罗列一些常见的 tablet 创建失败错误，包括但不限于：\n"),a("ul",[a("li",[t._v("BE 没有收到相关 task，此时无法在 be.INFO 中找到 tablet id 相关日志。或者 BE 创建成功，但汇报失败。以上问题，请参阅 [部署与升级文档] 检查 FE 和 BE 的连通性。")]),t._v(" "),a("li",[t._v("预分配内存失败。可能是表中一行的字节长度超过了 100KB。")]),t._v(" "),a("li",[a("code",[t._v("Too many open files")]),t._v("。打开的文件句柄数超过了 Linux 系统限制。需修改 Linux 系统的句柄数限制。")])])])]),t._v(" "),a("p",[t._v("如果创建数据分片时超时，也可以通过在 fe.conf 中设置 "),a("code",[t._v("tablet_create_timeout_second=xxx")]),t._v(" 以及 "),a("code",[t._v("max_create_table_timeout_second=xxx")]),t._v(" 来延长超时时间。其中 "),a("code",[t._v("tablet_create_timeout_second")]),t._v(" 默认是1秒, "),a("code",[t._v("max_create_table_timeout_second")]),t._v(" 默认是60秒，总体的超时时间为min(tablet_create_timeout_second * replication_num, max_create_table_timeout_second);")])]),t._v(" "),a("li",[a("p",[t._v("建表命令长时间不返回结果。")]),t._v(" "),a("p",[t._v("Doris 的建表命令是同步命令。该命令的超时时间目前设置的比较简单，即（tablet num * replication num）秒。如果创建较多的数据分片，并且其中有分片创建失败，则可能导致等待较长超时后，才会返回错误。")]),t._v(" "),a("p",[t._v("正常情况下，建表语句会在几秒或十几秒内返回。如果超过一分钟，建议直接取消掉这个操作，前往 FE 或 BE 的日志查看相关错误。")])])])])}),[],!1,null,null,null);_.default=v.exports}}]);