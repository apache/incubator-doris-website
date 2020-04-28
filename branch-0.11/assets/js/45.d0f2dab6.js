(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{481:function(e,t,n){"use strict";n.r(t);var a=n(33),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("35; Rollup -19982;* 26597;* 35810")]),e._v(" "),n("p",[e._v("As a polymer view in Doris, Rollup can play two roles in queries:")]),e._v(" "),n("ul",[n("li",[e._v("Index")]),e._v(" "),n("li",[e._v("Aggregate data (only for aggregate models, aggregate key)")])]),e._v(" "),n("p",[e._v("However, in order to hit Rollup, certain conditions need to be met, and the value of PreAggregation of ScanNdo node in the execution plan can be used to determine whether Rollup can be hit or not, and the Rollup field can be used to determine which Rollup table is hit.")]),e._v(" "),n("h2",{attrs:{id:"noun-interpretation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),n("p",[e._v("Base: Base table.")]),e._v(" "),n("p",[e._v("Rollup: Generally, it refers to the Rollup tables created based on Base tables, but in some scenarios, it includes Base and Rollup tables.")]),e._v(" "),n("h2",{attrs:{id:"index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),n("p",[e._v("Doris's prefix index has been introduced in the previous query practice, that is, Doris will generate the first 36 bytes in the Base/Rollup table separately in the underlying storage engine (with varchar type, the prefix index may be less than 36 bytes, varchar will truncate the prefix index, and use up to 20 bytes of varchar). A sorted sparse index data (data is also sorted, positioned by index, and then searched by dichotomy in the data), and then matched each Base/Rollup prefix index according to the conditions in the query, and selected a Base/Rollup that matched the longest prefix index.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("---\x3e matching from left to right\n+----+----+----+----+----+----+\nC1 `124; c2 `124; c3 `124; c4 `124; c5 `124;... 1244;\n")])])]),n("p",[e._v("As shown in the figure above, the conditions of where and on in the query are pushed up and down to ScanNode and matched from the first column of the prefix index. Check if there are any of these columns in the condition, and then accumulate the matching length until the matching cannot match or the end of 36 bytes (columns of varchar type can only match 20 bytes and match less than 36 words). Section truncates prefix index, and then chooses a Base/Rollup with the longest matching length. The following example shows how to create a Base table and four rollups:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("+---------------+-------+--------------+------+-------+---------+-------+\n| IndexName     | Field | Type         | Null | Key   | Default | Extra |\n+---------------+-------+--------------+------+-------+---------+-------+\n| test          | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\nYes 1244; true 124N /A 124R; 124R (20) VARCHAR (20) 124R; Yes\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|               |       |              |      |       |         |       |\nRoll -up of index 1 `124; k9 `124R; VARCHAR (20)'124R; Yes `1244true `124N /A `1244';\n|               | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|               |       |              |      |       |         |       |\n\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|               |       |              |      |       |         |       |\n| rollup_index3 | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\nYes 1244; true 124N /A 124R; 124R (20) VARCHAR (20) 124R; Yes\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|               |       |              |      |       |         |       |\n| rollup_index4 | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|               | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|               | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|               | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|               | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|               | k3    | INT          | Yes  | true  | N/A     |       |\n|               | k7    | DATE         | Yes  | true  | N/A     |       |\n|               | k8    | DATETIME     | Yes  | true  | N/A     |       |\nYes 1244; true 124N /A 124R; 124R (20) VARCHAR (20) 124R; Yes\n|               | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|               | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n+---------------+-------+--------------+------+-------+---------+-------+\n")])])]),n("p",[e._v("The prefix indexes of the three tables are")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Base (k1, k2, k3, k4, k5, k6, k7)\n\nIndex1 (k9)/index rollup (k9)\n\n\n\n\n")])])]),n("p",[e._v("Conditions on columns that can be indexed with the prefix need to be "),n("code",[e._v("= ``or', ``in',")]),e._v("between', and these conditions are side-by-side and the relationship uses "),n("code",[e._v("and")]),e._v("connections', which cannot be hit for "),n("code",[e._v("or',")]),e._v("!=` and so on. Then look at the following query:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("SELECT * FROM test WHERE k1 = 1 AND k2 > 3;\n")])])]),n("p",[e._v("With the conditions on K1 and k2, check that only the first column of Base contains K1 in the condition, so match the longest prefix index, test, explain:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|   0:OlapScanNode\n|      TABLE: test\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo\n|      PREDICATES: `k1` = 1, `k2` > 3\npartitions =1 /1\nRollup: test\n|      buckets=1/10\n|      cardinality=-1\n|      avgRowSize=0.0\n|      numNodes=0\n|      tuple ids: 0\n")])])]),n("p",[e._v("Look again at the following queries:")]),e._v(" "),n("p",[n("code",[e._v("SELECT * FROM test WHERE k4 =1 AND k5 > 3;")])]),e._v(" "),n("p",[e._v("With K4 and K5 conditions, check that the first column of rollup_index3 and rollup_index4 contains k4, but the second column of rollup_index3 contains k5, so the matching prefix index is the longest.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|   0:OlapScanNode\n|      TABLE: test\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo\n|      PREDICATES: `k4` = 1, `k5` > 3\npartitions =1 /1\nRollup: Rollup -u index3\n|      buckets=10/10\n|      cardinality=-1\n|      avgRowSize=0.0\n|      numNodes=0\n|      tuple ids: 0\n")])])]),n("p",[e._v("Now we try to match the conditions on the column containing varchar, as follows:")]),e._v(" "),n("p",[n("code",[e._v('SELECT * FROM test WHERE k9 IN ("xxx", "yyyy") AND k1 = 10;')])]),e._v(" "),n("p",[e._v("There are K9 and K1 conditions. The first column of rollup_index1 and rollup_index2 contains k9. It is reasonable to choose either rollup here to hit the prefix index and randomly select the same one (because there are just 20 bytes in varchar, and the prefix index is truncated in less than 36 bytes). The current strategy here will continue to match k1, because the second rollup_index1 is listed as k1, so rollup_index1 is chosen, in fact, the latter K1 condition will not play an accelerating role. (If the condition outside the prefix index needs to accelerate the query, it can be accelerated by establishing a Bloom Filter filter. Typically for string types, because Doris has a Block level for columns, a Min/Max index for shaping and dates.) The following is the result of explain.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|   0:OlapScanNode\n|      TABLE: test\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo\n|      PREDICATES: `k9` IN ('xxx', 'yyyy'), `k1` = 10\npartitions =1 /1\nRollup: Rollup -u index1\n|      buckets=1/10\n|      cardinality=-1\n|      avgRowSize=0.0\n|      numNodes=0\n|      tuple ids: 0\n")])])]),n("p",[e._v("Finally, look at a query that can be hit by more than one Rollup:")]),e._v(" "),n("p",[e._v('"Select * from test where K4 < 1000 and K5 = 80 and K6 = 10000;"')]),e._v(" "),n("p",[e._v("There are three conditions: k4, K5 and k6. The first three columns of rollup_index3 and rollup_index4 contain these three columns respectively. So the prefix index length matched by them is the same. Both can be selected. The current default strategy is to select a rollup created earlier. Here is rollup_index3.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|   0:OlapScanNode\n|      TABLE: test\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo\n|      PREDICATES: `k4` < 1000, `k5` = 80, `k6` >= 10000.0\npartitions =1 /1\nRollup: Rollup -u index3\n|      buckets=10/10\n|      cardinality=-1\n|      avgRowSize=0.0\n|      numNodes=0\n|      tuple ids: 0\n")])])]),n("p",[e._v("If you modify the above query slightly as follows:")]),e._v(" "),n("p",[n("code",[e._v("SELECT * FROM test WHERE k4 < 1000 AND k5 = 80 OR k6 >= 10000;")])]),e._v(" "),n("p",[e._v("The query here cannot hit the prefix index. (Even any Min/Max in the Doris storage engine, the BloomFilter index doesn't work.)")]),e._v(" "),n("h2",{attrs:{id:"aggregate-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-data"}},[e._v("#")]),e._v(" Aggregate data")]),e._v(" "),n("p",[e._v("Of course, the function of aggregated data is indispensable for general polymer views. Such materialized views are very helpful for aggregated queries or report queries. To hit the polymer views, the following prerequisites are needed:")]),e._v(" "),n("ol",[n("li",[e._v("There is a separate Rollup for all columns involved in a query or subquery.")]),e._v(" "),n("li",[e._v("If there is Join in a query or sub-query, the type of Join needs to be Inner join.")])]),e._v(" "),n("p",[e._v("The following are some types of aggregated queries that can hit Rollup.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("列类型 查询类型")]),e._v(" "),n("th",[e._v("Sum")]),e._v(" "),n("th",[e._v("Distinct/Count Distinct")]),e._v(" "),n("th",[e._v("Min")]),e._v(" "),n("th",[e._v("Max")]),e._v(" "),n("th",[e._v("Ndv")])])]),e._v(" "),n("tbody")]),e._v(" "),n("p",[e._v("Key: 124key; false 124true true 124true true true true 124true true true 124true true true true 124true true true true true true true")]),e._v(" "),n("ul",[n("li",[e._v("124; Value (SUM) 124; False False False False False False False False False False False False False False False \\")]),e._v(" "),n("li",[e._v("124; value (replace) FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE")]),e._v(" "),n("li",[e._v("124; value (min) = 124; false = 124; true = 124; false = 124; false = 124; false = 124; false = 124; false = 124; false = 124;")]),e._v(" "),n("li",[e._v("124; Value (Max) 124; False False False True False False False")])]),e._v(" "),n("p",[e._v("If the above conditions are met, there will be two stages in judging the hit of Rollup for the aggregation model:")]),e._v(" "),n("ol",[n("li",[e._v("Firstly, the Rollup table with the longest index hit by prefix index is matched by conditions. See the index strategy above.")]),e._v(" "),n("li",[e._v("Then compare the rows of Rollup and select the smallest Rollup.")])]),e._v(" "),n("p",[e._v("The following Base table and Rollup:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("+-------------+-------+--------------+------+-------+---------+-------+\n| IndexName   | Field | Type         | Null | Key   | Default | Extra |\n+-------------+-------+--------------+------+-------+---------+-------+\n| test_rollup | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|             | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|             | k3    | INT          | Yes  | true  | N/A     |       |\n|             | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|             | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|             | k6    | CHAR(5)      | Yes  | true  | N/A     |       |\n|             | k7    | DATE         | Yes  | true  | N/A     |       |\n|             | k8    | DATETIME     | Yes  | true  | N/A     |       |\nYes 1244; true 124N /A 124R; 124R (20) VARCHAR (20) 124R; Yes\n|             | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|             | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|             |       |              |      |       |         |       |\n| rollup2     | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|             | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|             | k3    | INT          | Yes  | true  | N/A     |       |\n|             | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|             | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n|             |       |              |      |       |         |       |\n| rollup1     | k1    | TINYINT      | Yes  | true  | N/A     |       |\n|             | k2    | SMALLINT     | Yes  | true  | N/A     |       |\n|             | k3    | INT          | Yes  | true  | N/A     |       |\n|             | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|             | k5    | DECIMAL(9,3) | Yes  | true  | N/A     |       |\n|             | k10   | DOUBLE       | Yes  | false | N/A     | MAX   |\n|             | k11   | FLOAT        | Yes  | false | N/A     | SUM   |\n+-------------+-------+--------------+------+-------+---------+-------+\n")])])]),n("p",[e._v("See the following queries:")]),e._v(" "),n("p",[n("code",[e._v("SELECT SUM(k11) FROM test_rollup WHERE k1 = 10 AND k2 > 200 AND k3 in (1,2,3);")])]),e._v(" "),n("p",[e._v("Firstly, it judges whether the query can hit the aggregated Rolup table. After checking the graph above, it is possible. Then the condition contains three conditions: k1, K2 and k3. The first three columns of test_rollup, rollup1 and rollup2 contain all the three conditions. So the prefix index length is the same. Then, it is obvious that the aggregation degree of rollup2 is the highest when comparing the number of rows. Row 2 is selected because of the minimum number of rows.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|   0:OlapScanNode                                          |\n|      TABLE: test_rollup                                   |\nPREAGGREGATION: ON {124}\n|      PREDICATES: `k1` = 10, `k2` > 200, `k3` IN (1, 2, 3) |\npartitions =1 /1\n|      rollup: rollup2                                      |\n|      buckets=1/10                                         |\n|      cardinality=-1                                       |\n|      avgRowSize=0.0                                       |\n|      numNodes=0                                           |\n|      tuple ids: 0                                         |\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);