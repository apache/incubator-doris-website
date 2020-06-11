(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{732:function(e,t,s){"use strict";s.r(t);var l=s(43),n=Object(l.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rollup-与查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollup-与查询"}},[e._v("#")]),e._v(" Rollup 与查询")]),e._v(" "),s("p",[e._v("在 Doris 里 Rollup 作为一份聚合物化视图，其在查询中可以起到两个作用：")]),e._v(" "),s("ul",[s("li",[e._v("索引")]),e._v(" "),s("li",[e._v("聚合数据（仅用于聚合模型，即aggregate key）")])]),e._v(" "),s("p",[e._v("但是为了命中 Rollup 需要满足一定的条件，并且可以通过执行计划中 ScanNdoe 节点的 PreAggregation 的值来判断是否可以命中 Rollup，以及 Rollup 字段来判断命中的是哪一张 Rollup 表。")]),e._v(" "),s("h2",{attrs:{id:"名词解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[e._v("#")]),e._v(" 名词解释")]),e._v(" "),s("p",[e._v("Base：基表。")]),e._v(" "),s("p",[e._v("Rollup：一般指基于 Base 表创建的 Rollup 表，但在一些场景包括 Base 以及 Rollup 表。")]),e._v(" "),s("h2",{attrs:{id:"索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[e._v("#")]),e._v(" 索引")]),e._v(" "),s("p",[e._v("前面的查询实践中已经介绍过 Doris 的前缀索引，即 Doris 会把 Base/Rollup 表中的前 36 个字节（有 varchar 类型则可能导致前缀索引不满 36 个字节，varchar 会截断前缀索引，并且最多使用 varchar 的 20 个字节）在底层存储引擎单独生成一份排序的稀疏索引数据(数据也是排序的，用索引定位，然后在数据中做二分查找)，然后在查询的时候会根据查询中的条件来匹配每个 Base/Rollup 的前缀索引，并且选择出匹配前缀索引最长的一个 Base/Rollup。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("       -----\x3e 从左到右匹配\n+----+----+----+----+----+----+\n| c1 | c2 | c3 | c4 | c5 |... |\n")])])]),s("p",[e._v("如上图，取查询中 where 以及 on 上下推到 ScanNode 的条件，从前缀索引的第一列开始匹配，检查条件中是否有这些列，有则累计匹配的长度，直到匹配不上或者36字节结束（varchar类型的列只能匹配20个字节，并且会匹配不足36个字节截断前缀索引），然后选择出匹配长度最长的一个 Base/Rollup，下面举例说明，创建了一张Base表以及四张rollup：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+---------------+-------+--------------+------+-------+---------+-------+\n| IndexName     | Field | Type         | Null | Key   | Default | Extra |\n+---------------+-------+--------------+------+-------+---------+-------+\n| test          | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\n|               | k9    | VARCHAR(20)  | Yes  | true  | N/A     |       |\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|               |       |              |      |       |         |       |\n| rollup_index1 | k9    | VARCHAR(20)  | Yes  | true  | N/A     |       |\n|               | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|               |       |              |      |       |         |       |\n| rollup_index2 | k9    | VARCHAR(20)  | Yes  | true  | N/A     |       |\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|               |       |              |      |       |         |       |\n| rollup_index3 | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\n|               | k9    | VARCHAR(20)  | Yes  | true  | N/A     |       |\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|               |       |              |      |       |         |       |\n| rollup_index4 | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\n|               | k9    | VARCHAR(20)  | Yes  | true  | N/A     |       |\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n+---------------+-------+--------------+------+-------+---------+-------+\n")])])]),s("p",[e._v("三张表的前缀索引分别为")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Base(k1 ,k2, k3, k4, k5, k6, k7)\n\nrollup_index1(k9)，rollup_index2(k9)\n\nrollup_index3(k4, k5, k6, k1, k2, k3, k7)\n\nrollup_index4(k4, k6, k5, k1, k2, k3, k7)\n")])])]),s("p",[e._v("能用的上前缀索引的列上的条件需要是 "),s("code",[e._v("=")]),e._v(" "),s("code",[e._v("<")]),e._v(" "),s("code",[e._v(">")]),e._v(" "),s("code",[e._v("<=")]),e._v(" "),s("code",[e._v(">=")]),e._v(" "),s("code",[e._v("in")]),e._v(" "),s("code",[e._v("between")]),e._v(" 这些并且这些条件是并列的且关系使用 "),s("code",[e._v("and")]),e._v(" 连接，对于"),s("code",[e._v("or")]),e._v("、"),s("code",[e._v("!=")]),e._v(" 等这些不能命中，然后看以下查询：")]),e._v(" "),s("p",[s("code",[e._v("SELECT * FROM test WHERE k1 = 1 AND k2 > 3;")])]),e._v(" "),s("p",[e._v("有 k1 以及 k2 上的条件，检查只有 Base 的第一列含有条件里的 k1，所以匹配最长的前缀索引即 test，explain一下：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("|   0:OlapScanNode                                                                                                                                                                                                                                                                                                                                                                                                 \n|      TABLE: test                                                                                                                                                                                                                                                                                                                                                                                                  \n|      PREAGGREGATION: OFF. Reason: No AggregateInfo                                                                                                                                                                                                                                                                                                                                                                \n|      PREDICATES: `k1` = 1, `k2` > 3                                                                                                                                                                                                                                                                                                                                                                               \n|      partitions=1/1                                                                                                                                                                                                                                                                                                                                                                                               \n|      rollup: test                                                                                                                                                                                                                                                                                                                                                                                                 \n|      buckets=1/10                                                                                                                                                                                                                                                                                                                                                                                                 \n|      cardinality=-1                                                                                                                                                                                                                                                                                                                                                                                               \n|      avgRowSize=0.0                                                                                                                                                                                                                                                                                                                                                                                               \n|      numNodes=0                                                                                                                                                                                                                                                                                                                                                                                                   \n|      tuple ids: 0\n")])])]),s("p",[e._v("再看以下查询：")]),e._v(" "),s("p",[s("code",[e._v("SELECT * FROM test WHERE k4 = 1 AND k5 > 3;")])]),e._v(" "),s("p",[e._v("有 k4 以及 k5 的条件，检查 rollup_index3、rollup_index4 的第一列含有 k4，但是 rollup_index3 的第二列含有k5，所以匹配的前缀索引最长。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("|   0:OlapScanNode                                                                                                                                                                                                                                                                                                                                                                                                \n|      TABLE: test                                                                                                                                                                                                                                                                                                                                                                                                  \n|      PREAGGREGATION: OFF. Reason: No AggregateInfo                                                                                                                                                                                                                                                                                                                                                                \n|      PREDICATES: `k4` = 1, `k5` > 3                                                                                                                                                                                                                                                                                                                                                                              \n|      partitions=1/1                                                                                                                                                                                                                                                                                                                                                                                               \n|      rollup: rollup_index3                                                                                                                                                                                                                                                                                                                                                                                        \n|      buckets=10/10                                                                                                                                                                                                                                                                                                                                                                                                \n|      cardinality=-1                                                                                                                                                                                                                                                                                                                                                                                               \n|      avgRowSize=0.0                                                                                                                                                                                                                                                                                                                                                                                               \n|      numNodes=0                                                                                                                                                                                                                                                                                                                                                                                                   \n|      tuple ids: 0\n")])])]),s("p",[e._v("现在我们尝试匹配含有 varchar 列上的条件，如下：")]),e._v(" "),s("p",[s("code",[e._v('SELECT * FROM test WHERE k9 IN ("xxx", "yyyy") AND k1 = 10;')])]),e._v(" "),s("p",[e._v("有 k9 以及 k1 两个条件，rollup_index1 以及 rollup_index2 的第一列都含有 k9，按理说这里选择这两个 rollup 都可以命中前缀索引并且效果是一样的随机选择一个即可（因为这里 varchar 刚好20个字节，前缀索引不足36个字节被截断），但是当前策略这里还会继续匹配 k1，因为 rollup_index1 的第二列为 k1，所以选择了 rollup_index1，其实后面的 k1 条件并不会起到加速的作用。(如果对于前缀索引外的条件需要其可以起到加速查询的目的，可以通过建立 Bloom Filter 过滤器加速。一般对于字符串类型建立即可，因为 Doris 针对列存在 Block 级别对于整形、日期已经有 Min/Max 索引) 以下是 explain 的结果。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("|   0:OlapScanNode                                                                                                                                                                                                                                                                                                                                                                                                  \n|      TABLE: test                                                                                                                                                                                                                                                                                                                                                                                                  \n|      PREAGGREGATION: OFF. Reason: No AggregateInfo                                                                                                                                                                                                                                                                                                                                                                \n|      PREDICATES: `k9` IN ('xxx', 'yyyy'), `k1` = 10                                                                                                                                                                                                                                                                                                                                                               \n|      partitions=1/1                                                                                                                                                                                                                                                                                                                                                                                               \n|      rollup: rollup_index1                                                                                                                                                                                                                                                                                                                                                                                        \n|      buckets=1/10                                                                                                                                                                                                                                                                                                                                                                                                 \n|      cardinality=-1                                                                                                                                                                                                                                                                                                                                                                                               \n|      avgRowSize=0.0                                                                                                                                                                                                                                                                                                                                                                                               \n|      numNodes=0                                                                                                                                                                                                                                                                                                                                                                                                   \n|      tuple ids: 0\n")])])]),s("p",[e._v("最后看一个多张Rollup都可以命中的查询：")]),e._v(" "),s("p",[s("code",[e._v("SELECT * FROM test WHERE k4 < 1000 AND k5 = 80 AND k6 >= 10000;")])]),e._v(" "),s("p",[e._v("有 k4,k5,k6 三个条件，rollup_index3 以及 rollup_index4 的前3列分别含有这三列，所以两者匹配的前缀索引长度一致，选取两者都可以，当前默认的策略为选取了比较早创建的一张 rollup，这里为 rollup_index3。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("|   0:OlapScanNode                                                                                                                                                                                                                                                                                                                                                                                                  \n|      TABLE: test                                                                                                                                                                                                                                                                                                                                                                                                  \n|      PREAGGREGATION: OFF. Reason: No AggregateInfo                                                                                                                                                                                                                                                                                                                                                                \n|      PREDICATES: `k4` < 1000, `k5` = 80, `k6` >= 10000.0                                                                                                                                                                                                                                                                                                                                                          \n|      partitions=1/1                                                                                                                                                                                                                                                                                                                                                                                               \n|      rollup: rollup_index3                                                                                                                                                                                                                                                                                                                                                                                        \n|      buckets=10/10                                                                                                                                                                                                                                                                                                                                                                                                \n|      cardinality=-1                                                                                                                                                                                                                                                                                                                                                                                               \n|      avgRowSize=0.0                                                                                                                                                                                                                                                                                                                                                                                               \n|      numNodes=0                                                                                                                                                                                                                                                                                                                                                                                                   \n|      tuple ids: 0\n")])])]),s("p",[e._v("如果稍微修改上面的查询为：")]),e._v(" "),s("p",[s("code",[e._v("SELECT * FROM test WHERE k4 < 1000 AND k5 = 80 OR k6 >= 10000;")])]),e._v(" "),s("p",[e._v("则这里的查询不能命中前缀索引。（甚至 Doris 存储引擎内的任何 Min/Max,BloomFilter 索引都不能起作用)")]),e._v(" "),s("h2",{attrs:{id:"聚合数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚合数据"}},[e._v("#")]),e._v(" 聚合数据")]),e._v(" "),s("p",[e._v("当然一般的聚合物化视图其聚合数据的功能是必不可少的，这类物化视图对于聚合类查询或报表类查询都有非常大的帮助，要命中聚合物化视图需要下面一些前提：")]),e._v(" "),s("ol",[s("li",[e._v("查询或者子查询中涉及的所有列都存在一张独立的 Rollup 中。")]),e._v(" "),s("li",[e._v("如果查询或者子查询中有 Join，则 Join 的类型需要是 Inner join。")])]),e._v(" "),s("p",[e._v("以下是可以命中Rollup的一些聚合查询的种类，")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("列类型 查询类型")]),e._v(" "),s("th",[e._v("Sum")]),e._v(" "),s("th",[e._v("Distinct/Count Distinct")]),e._v(" "),s("th",[e._v("Min")]),e._v(" "),s("th",[e._v("Max")]),e._v(" "),s("th",[e._v("Ndv")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Key")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[e._v("true")])]),e._v(" "),s("tr",[s("td",[e._v("Value(Sum)")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")])]),e._v(" "),s("tr",[s("td",[e._v("Value(Replace)")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")])]),e._v(" "),s("tr",[s("td",[e._v("Value(Min)")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")])]),e._v(" "),s("tr",[s("td",[e._v("Value(Max)")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[e._v("false")])])])]),e._v(" "),s("p",[e._v("如果符合上述条件，则针对聚合模型在判断命中 Rollup 的时候会有两个阶段：")]),e._v(" "),s("ol",[s("li",[e._v("首先通过条件匹配出命中前缀索引索引最长的 Rollup 表，见上述索引策略。")]),e._v(" "),s("li",[e._v("然后比较 Rollup 的行数，选择最小的一张 Rollup。")])]),e._v(" "),s("p",[e._v("如下 Base 表以及 Rollup：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+-------------+-------+--------------+------+-------+---------+-------+\n| IndexName   | Field | Type         | Null | Key   | Default | Extra |\n+-------------+-------+--------------+------+-------+---------+-------+\n| test_rollup | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|             | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|             | k3    | INT          | Yes  | true  | N/A     |       |\n|             | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|             | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|             | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|             | k7    | DATE         | Yes  | true  | N/A     |       |\n|             | k8    | DATETIME     | Yes  | true  | N/A     |       |\n|             | k9    | VARCHAR(20)  | Yes  | true  | N/A     |       |\n|             | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|             | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|             |       |              |      |       |         |       |\n| rollup2     | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|             | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|             | k3    | INT          | Yes  | true  | N/A     |       |\n|             | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|             | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|             |       |              |      |       |         |       |\n| rollup1     | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|             | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|             | k3    | INT          | Yes  | true  | N/A     |       |\n|             | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|             | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|             | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|             | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n+-------------+-------+--------------+------+-------+---------+-------+\n")])])]),s("p",[e._v("看以下查询：")]),e._v(" "),s("p",[s("code",[e._v("SELECT SUM(k11) FROM test_rollup WHERE k1 = 10 AND k2 > 200 AND k3 in (1,2,3);")])]),e._v(" "),s("p",[e._v("首先判断查询是否可以命中聚合的 Rollup表，经过查上面的图是可以的，然后条件中含有 k1,k2,k3 三个条件，这三个条件 test_rollup、rollup1、rollup2 的前三列都含有，所以前缀索引长度一致，然后比较行数显然 rollup2 的聚合程度最高行数最少所以选取 rollup2。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("|   0:OlapScanNode                                          |\n|      TABLE: test_rollup                                   |\n|      PREAGGREGATION: ON                                   |\n|      PREDICATES: `k1` = 10, `k2` > 200, `k3` IN (1, 2, 3) |\n|      partitions=1/1                                       |\n|      rollup: rollup2                                      |\n|      buckets=1/10                                         |\n|      cardinality=-1                                       |\n|      avgRowSize=0.0                                       |\n|      numNodes=0                                           |\n|      tuple ids: 0                                         |\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);