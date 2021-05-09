(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{1067:function(t,a,n){"use strict";n.r(a);var _=n(43),i=Object(_.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"正交的bitmap计算udaf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正交的bitmap计算udaf"}},[t._v("#")]),t._v(" 正交的BITMAP计算UDAF")]),t._v(" "),n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),n("p",[t._v("Doris原有的Bitmap聚合函数设计比较通用，但对亿级别以上bitmap大基数的交并集计算性能较差。排查后端be的bitmap聚合函数逻辑，发现主要有两个原因。一是当bitmap基数较大时，如bitmap大小超过1g，网络/磁盘IO处理时间比较长；二是后端be实例在scan数据后全部传输到顶层节点进行求交和并运算，给顶层单节点带来压力，成为处理瓶颈。")]),t._v(" "),n("p",[t._v("解决思路是将bitmap列的值按照range划分，不同range的值存储在不同的分桶中，保证了不同分桶的bitmap值是正交的。当查询时，先分别对不同分桶中的正交bitmap进行聚合计算，然后顶层节点直接将聚合计算后的值合并汇总，并输出。如此会大大提高计算效率，解决了顶层单节点计算瓶颈问题。")]),t._v(" "),n("h2",{attrs:{id:"使用指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[t._v("#")]),t._v(" 使用指南")]),t._v(" "),n("ol",[n("li",[t._v("建表，增加hid列，表示bitmap列值id范围, 作为hash分桶列")]),t._v(" "),n("li",[t._v("数据罐库，load数据时，对bitmap列值range范围划分")]),t._v(" "),n("li",[t._v("编译UDAF，产出.so动态库")]),t._v(" "),n("li",[t._v("在DORIS中注册UDAF，DORIS在运行时加载.so库")]),t._v(" "),n("li",[t._v("使用场景")])]),t._v(" "),n("h3",{attrs:{id:"create-table"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[t._v("#")]),t._v(" Create table")]),t._v(" "),n("p",[t._v("建表时需要使用聚合模型，数据类型是 bitmap , 聚合函数是 bitmap_union")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE TABLE `user_tag_bitmap` (\n  `tag` bigint(20) NULL COMMENT "用户标签",\n  `hid` smallint(6) NULL COMMENT "分桶id",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`tag`, `hid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`hid`) BUCKETS 3\n')])])]),n("p",[t._v("表schema增加hid列，表示id范围, 作为hash分桶列。")]),t._v(" "),n("p",[t._v("注：hid数和BUCKETS要设置合理，hid数设置至少是BUCKETS的5倍以上，以使数据hash分桶尽量均衡")]),t._v(" "),n("h3",{attrs:{id:"data-load"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-load"}},[t._v("#")]),t._v(" Data Load")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("LOAD LABEL user_tag_bitmap_test\n(\nDATA INFILE('hdfs://abc')\nINTO TABLE user_tag_bitmap\nCOLUMNS TERMINATED BY ','\n(tmp_tag, tmp_user_id)\nSET (\ntag = tmp_tag,\nhid = ceil(tmp_user_id/5000000),\nuser_id = to_bitmap(tmp_user_id)\n)\n)\n注意：5000000这个数不固定，可按需调整\n...\n")])])]),n("p",[t._v("数据格式：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n")])])]),n("p",[t._v("注：第一列代表用户标签，由中文转换成数字")]),t._v(" "),n("p",[t._v("load数据时，对用户bitmap值range范围纵向切割，例如，用户id在1-5000000范围内的hid值相同，hid值相同的行会分配到一个分桶内，如此每个分桶内到的bitmap都是正交的。在bitmap的udaf实现上，可以利用桶内bitmap值正交特性，进行交并集计算，计算结果会被shuffle至top节点聚合。")]),t._v(" "),n("h3",{attrs:{id:"编译udaf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译udaf"}},[t._v("#")]),t._v(" 编译UDAF")]),t._v(" "),n("p",[t._v("源代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("contrib/udf/src/udaf_orthogonal_bitmap/\n|-- bitmap_value.h\n|-- CMakeLists.txt\n|-- orthogonal_bitmap_function.cpp\n|-- orthogonal_bitmap_function.h\n`-- string_value.h\n")])])]),n("p",[t._v("编译UDAF：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$cd contrib/udf\n$ sh build_udf.sh\n\n")])])]),n("p",[t._v("libudaf_orthogonal_bitmap.so产出目录：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("output/contrib/udf/lib/udaf_orthogonal_bitmap/libudaf_orthogonal_bitmap.so\n")])])]),n("h3",{attrs:{id:"在doris中注册udaf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在doris中注册udaf"}},[t._v("#")]),t._v(" 在DORIS中注册UDAF")]),t._v(" "),n("p",[t._v("Doris查询前设置参数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("set parallel_fragment_exec_instance_num=5\n")])])]),n("p",[t._v("注：根据集群情况设置并发参数，提高并发计算性能")]),t._v(" "),n("p",[t._v("新udaf聚合函数在mysql客户端链接session中创建,创建时需要注册函数符号，函数符号会以动态库.so的方式加载。")]),t._v(" "),n("h4",{attrs:{id:"bitmap-orthogonal-intersect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-orthogonal-intersect"}},[t._v("#")]),t._v(" bitmap_orthogonal_intersect")]),t._v(" "),n("p",[t._v("求bitmap交集函数")]),t._v(" "),n("p",[t._v("语法：")]),t._v(" "),n("p",[t._v("orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)")]),t._v(" "),n("p",[t._v("参数：")]),t._v(" "),n("p",[t._v("第一个参数是Bitmap列，第二个参数是用来过滤的维度列，第三个参数是变长参数，含义是过滤维度列的不同取值")]),t._v(" "),n("p",[t._v("说明：")]),t._v(" "),n("p",[t._v("查询规划上聚合分2层，在第一层be节点（update、serialize）先按filter_values为key进行hash聚合，然后对所有key的bitmap求交集，结果序列化后发送至第二层be节点(merge、finalize)，在第二层be节点对所有来源于第一层节点的bitmap值循环求并集")]),t._v(" "),n("p",[t._v("创建UDAF：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('drop FUNCTION orthogonal_bitmap_intersect(BITMAP,BIGINT,BIGINT, ...);\nCREATE AGGREGATE FUNCTION orthogonal_bitmap_intersect(BITMAP,BIGINT,BIGINT, ...) RETURNS BITMAP INTERMEDIATE varchar(1)\nPROPERTIES (\n"init_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions21bitmap_intersect_initIlNS_9BigIntValEEEvPNS_15FunctionContextEPNS_9StringValE",\n"update_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions23bitmap_intersect_updateIlNS_9BigIntValEEEvPNS_15FunctionContextERKNS_9StringValERKT0_iPS9_PS6_",\n"serialize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions30bitmap_intersect_and_serializeIlEENS_9StringValEPNS_15FunctionContextERKS2_",\n"merge_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions12bitmap_unionEPNS_15FunctionContextERKNS_9StringValEPS3_",\n"finalize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions16bitmap_serializeEPNS_15FunctionContextERKNS_9StringValE",\n"object_file"="http://ip:port/libudaf_orthogonal_bitmap.so" );\n\n')])])]),n("p",[t._v("注意：")]),t._v(" "),n("p",[t._v("1.column_to_filter, filter_values列这里设置为BIGINT类型；")]),t._v(" "),n("p",[t._v('2.函数符号通过nm /xxx/xxx/libudaf_orthogonal_bitmap.so|grep "xxx" 查找')]),t._v(" "),n("p",[t._v("样例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("select BITMAP_COUNT(orthogonal_bitmap_intersect(user_id, tag, 13080800, 11110200)) from user_tag_bitmap  where tag in (13080800, 11110200);\n\n")])])]),n("h4",{attrs:{id:"orthogonal-bitmap-intersect-count"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-intersect-count"}},[t._v("#")]),t._v(" orthogonal_bitmap_intersect_count")]),t._v(" "),n("p",[t._v("求bitmap交集count函数,语法同原版intersect_count，但实现不同")]),t._v(" "),n("p",[t._v("语法：")]),t._v(" "),n("p",[t._v("orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)")]),t._v(" "),n("p",[t._v("参数：")]),t._v(" "),n("p",[t._v("第一个参数是Bitmap列，第二个参数是用来过滤的维度列，第三个参数开始是变长参数，含义是过滤维度列的不同取值")]),t._v(" "),n("p",[t._v("说明：")]),t._v(" "),n("p",[t._v("查询规划聚合上分2层，在第一层be节点（update、serialize）先按filter_values为key进行hash聚合，然后对所有key的bitmap求交集，再对交集结果求count，count值序列化后发送至第二层be节点（merge、finalize），在第二层be节点对所有来源于第一层节点的count值循环求sum")]),t._v(" "),n("p",[t._v("创建UDAF：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('drop FUNCTION orthogonal_bitmap_intersect_count(BITMAP,BIGINT,BIGINT, ...);\nCREATE AGGREGATE FUNCTION orthogonal_bitmap_intersect_count(BITMAP,BIGINT,BIGINT, ...) RETURNS BIGINT INTERMEDIATE varchar(1)\nPROPERTIES (\n"init_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions27bitmap_intersect_count_initIlNS_9BigIntValEEEvPNS_15FunctionContextEPNS_9StringValE",\n"update_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions23bitmap_intersect_updateIlNS_9BigIntValEEEvPNS_15FunctionContextERKNS_9StringValERKT0_iPS9_PS6_",\n"serialize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions32bitmap_intersect_count_serializeIlEENS_9StringValEPNS_15FunctionContextERKS2_",\n"merge_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions18bitmap_count_mergeEPNS_15FunctionContextERKNS_9StringValEPS3_",\n"finalize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions21bitmap_count_finalizeEPNS_15FunctionContextERKNS_9StringValE",\n"object_file"="http://ip:port/libudaf_orthogonal_bitmap.so" );\n')])])]),n("h4",{attrs:{id:"orthogonal-bitmap-union-count"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-union-count"}},[t._v("#")]),t._v(" orthogonal_bitmap_union_count")]),t._v(" "),n("p",[t._v("求bitmap并集count函数，语法同原版bitmap_union_count，但实现不同。")]),t._v(" "),n("p",[t._v("语法：")]),t._v(" "),n("p",[t._v("orthogonal_bitmap_union_count(bitmap_column)")]),t._v(" "),n("p",[t._v("参数：")]),t._v(" "),n("p",[t._v("参数类型是bitmap，是待求并集count的列")]),t._v(" "),n("p",[t._v("说明：")]),t._v(" "),n("p",[t._v("查询规划上分2层，在第一层be节点（update、serialize）对所有bitmap求并集，再对并集的结果bitmap求count，count值序列化后发送至第二层be节点（merge、finalize），在第二层be节点对所有来源于第一层节点的count值循环求sum")]),t._v(" "),n("p",[t._v("创建UDAF：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('drop FUNCTION orthogonal_bitmap_union_count(BITMAP);\nCREATE AGGREGATE FUNCTION orthogonal_bitmap_union_count(BITMAP) RETURNS BIGINT INTERMEDIATE varchar(1)\nPROPERTIES (\n"init_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions23bitmap_union_count_initEPNS_15FunctionContextEPNS_9StringValE",\n"update_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions12bitmap_unionEPNS_15FunctionContextERKNS_9StringValEPS3_",\n"serialize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions22bitmap_count_serializeEPNS_15FunctionContextERKNS_9StringValE",\n"merge_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions18bitmap_count_mergeEPNS_15FunctionContextERKNS_9StringValEPS3_",\n"finalize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions21bitmap_count_finalizeEPNS_15FunctionContextERKNS_9StringValE",\n"object_file"="http://ip:port/libudaf_orthogonal_bitmap.so" );\n')])])]),n("h3",{attrs:{id:"使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),n("p",[t._v("符合对bitmap进行正交计算的场景，如在用户行为分析中，计算留存，漏斗，用户画像等。")]),t._v(" "),n("p",[t._v("人群圈选：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" select orthogonal_bitmap_intersect_count(user_id, tag, 13080800, 11110200) from user_tag_bitmap where tag in (13080800, 11110200);\n 注：13080800、11110200代表用户标签\n")])])]),n("p",[t._v("计算user_id的去重值：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("select orthogonal_bitmap_union_count(user_id) from user_tag_bitmap where tag in (13080800, 11110200);\n\n")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);