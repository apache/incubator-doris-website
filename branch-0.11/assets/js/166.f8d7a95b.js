(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{658:function(e,n,a){"use strict";a.r(n);var t=a(33),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[e._v("#")]),e._v(" CREATE TABLE")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name\n(column_definition1[, column_definition2, ...])\n[ENGINE = [olap|mysql|broker]]\n[key_desc]\n[COMMENT "table comment"]\n[partition_desc]\n[distribution_desc]\n[PROPERTIES ("key"="value", ...)]\n[BROKER PROPERTIES ("key"="value", ...)];\n')])])]),a("ol",[a("li",[a("p",[e._v("column_definition")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("p",[e._v('col_name col_type [agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]')]),e._v(" "),a("p",[e._v("Explain:\ncol_name: Name of column\ncol_type: Type of column")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" TINYINT(1 Byte)\n     Range: -2^7 + 1 ~ 2^7 - 1\n SMALLINT(2 Bytes)\n     Range: -2^15 + 1 ~ 2^15 - 1\n INT(4 Bytes)\n     Range: -2^31 + 1 ~ 2^31 - 1\n BIGINT(8 Bytes)\n     Range: -2^63 + 1 ~ 2^63 - 1\n LARGEINT(16 Bytes)\n     Range: -2^127 + 1 ~ 2^127 - 1\n FLOAT(4 Bytes)\n     Support scientific notation\n DOUBLE(12 Bytes)\n     Support scientific notation\n DECIMAL[(precision, scale)] (16 Bytes)\n     Default is DECIMAL(10, 0)\n     precision: 1 ~ 27\n     scale: 0 ~ 9\n     integer part: 1 ~ 18\n     fractional part: 0 ~ 9\n     Not support scientific notation\n DATE(3 Bytes)\n     Range: 1900-01-01 ~ 9999-12-31\n DATETIME(8 Bytes)\n     Range: 1900-01-01 00:00:00 ~ 9999-12-31 23:59:59\n CHAR[(length)]\n     Fixed length string. Range: 1 ~ 255. Default: 1\n VARCHAR[(length)]\n     Variable length string. Range: 1 ~ 65533\n HLL (1~16385 Bytes)\n     HLLL tpye, No need to specify length.\n     This type can only be queried by hll_union_agg, hll_cardinality, hll_hash functions.\n")])])]),a("p",[e._v("agg_type: Aggregation type. If not specified, the column is key column. Otherwise, the column is value column.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" * SUM、MAX、MIN、REPLACE\n * HLL_UNION: Only for HLL type\n * REPLACE_IF_NOT_NULL: The meaning of this aggregation type is that substitution will occur if and only if the newly imported data is a non-null value. If the newly imported data is null, Doris will still retain the original value. Note: if NOT NULL is specified in the REPLACE_IF_NOT_NULL column when the user creates the table, Doris will convert it to NULL and will not report an error to the user. Users can leverage this aggregate type to achieve importing some of columns.\n * BITMAP_UNION: Only for BITMAP type\n")])])]),a("p",[e._v("Allow NULL: Default is NOT NULL. NULL value should be represented as "),a("code",[e._v("\\N")]),e._v(" in load source file.")]),e._v(" "),a("p",[e._v("Notice:"),a("br"),e._v("\nThe origin value of BITMAP_UNION column should be TINYINT, SMALLINT, INT.")])]),e._v(" "),a("li",[a("p",[e._v("ENGINE type")]),e._v(" "),a("p",[e._v("Default is olap. Options are: olap, mysql, broker")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("For mysql, properties should include:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "host" = "mysql_server_host",\n    "port" = "mysql_server_port",\n    "user" = "your_user_name",\n    "password" = "your_password",\n    "database" = "database_name",\n    "table" = "table_name"\n)\n')])])])])]),e._v(" "),a("p",[e._v("Notice:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(' "table_name" is the real table name in MySQL database.\n table_name in CREATE TABLE stmt is table is Doris. They can be different or same.\n \n MySQL table created in Doris is for accessing data in MySQL database.\n Doris does not maintain and store any data from MySQL table.\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("For broker, properties should include:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "broker_name" = "broker_name",\n    "path" = "file_path1[,file_path2]",\n    "column_separator" = "value_separator"\n    "line_delimiter" = "value_delimiter"\n)\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('BROKER PROPERTIES(\n    "username" = "name", \n    "password" = "password"\n)\n')])])]),a("p",[e._v("For different broker, the broker properties are different")])])]),e._v(" "),a("p",[e._v("Notice:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(' Files name in "path" is separated by ",". If file name includes ",", use "%2c" instead. If file name includes "%", use "%25" instead.\n\n Support CSV and Parquet. Support GZ, BZ2, LZ4, LZO(LZOP)\n')])])])]),e._v(" "),a("li",[a("p",[e._v("key_desc")]),e._v(" "),a("p",[e._v("Syntax:\nkey_type(k1[,k2 ...])")]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" Data is orderd by specified key columns. And has different behaviors for different key desc.\n\n     AGGREGATE KEY:\n\n             value columns will be aggregated is key columns are same.\n\n     UNIQUE KEY:\n\n             The new incoming rows will replace the old rows if key columns are same.\n\n     DUPLICATE KEY:\n\n             All incoming rows will be saved.\n")])])]),a("p",[e._v("NOTICE:\nExcept for AGGREGATE KEY, no need to specify aggregation type for value columns.")])]),e._v(" "),a("li",[a("p",[e._v("partition_desc\nPartition has two ways to use:")]),e._v(" "),a("ol",[a("li",[e._v("LESS THAN")])]),e._v(" "),a("p",[e._v("Syntex:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(' ```\n PARTITION BY RANGE (k1, k2, ...)\n (\n PARTITION partition_name1 VALUES LESS THAN MAXVALUE|("value1", "value2", ...),\n PARTITION partition_name2 VALUES LESS THAN MAXVALUE|("value1", "value2", ...)\n ...\n )\n ```\n')])])]),a("p",[e._v("Explain:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" 1) Partition name only support [A-z0-9_]\n 2) Partition key column's type should be:\n     TINYINT, SMALLINT, INT, BIGINT, LARGEINT, DATE, DATETIME\n 3) The range is [closed, open). And the lower bound of first partition is MIN VALUE of specifed column type.\n 4) NULL values should be save in partition which includes MIN VALUE.\n 5) Support multi partition columns, the the default partition value is MIN VALUE.\n")])])]),a("p",[e._v("2）Fixed Range\nSyntex:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(' ```\n PARTITION BY RANGE (k1, k2, k3, ...)\n (\n PARTITION partition_name1 VALUES [("k1-lower1", "k2-lower1", "k3-lower1",...), ("k1-upper1", "k2-upper1", "k3-upper1", ...)),\n PARTITION partition_name2 VALUES [("k1-lower1-2", "k2-lower1-2", ...), ("k1-upper1-2", MAXVALUE, ))\n "k3-upper1-2", ...\n )\n ```\n')])])]),a("p",[e._v("Explain:\n1）The Fixed Range is more flexible than the LESS THAN, and the left and right intervals are completely determined by the user.\n2）Others are consistent with LESS THAN.")])]),e._v(" "),a("li",[a("p",[e._v("distribution_desc")]),e._v(" "),a("ol",[a("li",[e._v("Hash\nSyntax:\nDISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]\nExplain:\nThe default buckets is 10.")])])]),e._v(" "),a("li",[a("p",[e._v("PROPERTIES")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If ENGINE type is olap. User can specify storage medium, cooldown time and replication number:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "storage_medium" = "[SSD|HDD]",\n    ["storage_cooldown_time" = "yyyy-MM-dd HH:mm:ss"],\n    ["replication_num" = "3"]\n    )\n')])])]),a("p",[e._v('storage_medium:         SSD or HDD\nstorage_cooldown_time:  If storage_medium is SSD, data will be automatically moved to HDD when timeout.\nDefault is 7 days.\nFormat: "yyyy-MM-dd HH:mm:ss"\nreplication_num:        Replication number of a partition. Default is 3.')]),e._v(" "),a("p",[e._v("If table is not range partitions. This property takes on Table level. Or it will takes on Partition level.")]),e._v(" "),a("p",[e._v("User can specify different properties for different partition by "),a("code",[e._v("ADD PARTITION")]),e._v(" or "),a("code",[e._v("MODIFY PARTITION")]),e._v(" statements.")])]),e._v(" "),a("li",[a("p",[e._v("If Engine type is olap, user can set bloom filter index for column.")]),e._v(" "),a("p",[e._v("Bloom filter index will be used when query contains "),a("code",[e._v("IN")]),e._v(" or "),a("code",[e._v("EQUAL")]),e._v(".\nBloom filter index support key columns with type except TINYINT FLOAT DOUBLE, also support value with REPLACE aggregation type.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "bloom_filter_columns"="k1,k2,k3"\n)\n')])])])]),e._v(" "),a("li",[a("p",[e._v("For Colocation Join:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "colocate_with"="table1"\n)\n')])])])])])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('1. Create an olap table, distributed by hash, with aggregation type.\n\n    ```\n    CREATE TABLE example_db.table_hash\n    (\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n    )\n    ENGINE=olap\n    AGGREGATE KEY(k1, k2)\n    COMMENT "my first doris table"\n    DISTRIBUTED BY HASH(k1) BUCKETS 32\n    PROPERTIES ("storage_type"="column");\n    ```\n    \n2. Create an olap table, distributed by hash, with aggregation type. Also set storage medium and cooldown time.\n\n    ```\n    CREATE TABLE example_db.table_hash\n    (\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048) REPLACE,\n    v2 SMALLINT SUM DEFAULT "10"\n    )\n    ENGINE=olap\n    UNIQUE KEY(k1, k2)\n    DISTRIBUTED BY HASH (k1, k2) BUCKETS 32\n    PROPERTIES(\n    "storage_type"="column", \n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2015-06-04 00:00:00"\n    );\n\n3. Create an olap table, with range partitioned, distributed by hash.\n1) LESS THAN\n    ```\n    CREATE TABLE example_db.table_range\n    (\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n    )\n    ENGINE=olap\n    DUPLICATE KEY(k1, k2, k3)\n    PARTITION BY RANGE (k1)\n    (\n    PARTITION p1 VALUES LESS THAN ("2014-01-01"),\n    PARTITION p2 VALUES LESS THAN ("2014-06-01"),\n    PARTITION p3 VALUES LESS THAN ("2014-12-01")\n    )\n    DISTRIBUTED BY HASH(k2) BUCKETS 32\n    PROPERTIES(\n    "storage_medium" = "SSD", "storage_cooldown_time" = "2015-06-04 00:00:00"\n    );\n    ```\n    \n    Explain: \n    This statement will create 3 partitions:\n\n    ```\n    ( {    MIN     },   {"2014-01-01"} )\n    [ {"2014-01-01"},   {"2014-06-01"} )\n    [ {"2014-06-01"},   {"2014-12-01"} )\n    ``` \n    \n    Data outside these ranges will not be loaded.\n\n2) Fixed Range\n    CREATE TABLE table_range\n    (\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n    )\n    ENGINE=olap\n    DUPLICATE KEY(k1, k2, k3)\n    PARTITION BY RANGE (k1, k2, k3)\n    (\n    PARTITION p1 VALUES [("2014-01-01", "10", "200"), ("2014-01-01", "20", "300")),\n    PARTITION p2 VALUES [("2014-06-01", "100", "200"), ("2014-07-01", "100", "300"))\n    )\n    DISTRIBUTED BY HASH(k2) BUCKETS 32\n    PROPERTIES(\n    "storage_medium" = "SSD"\n    );\n\n4. Create a mysql table\n\n    ```\n    CREATE TABLE example_db.table_mysql\n    (\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    k4 VARCHAR(2048),\n    k5 DATETIME\n    )\n    ENGINE=mysql\n    PROPERTIES\n    (\n    "host" = "127.0.0.1",\n    "port" = "8239",\n    "user" = "mysql_user",\n    "password" = "mysql_passwd",\n    "database" = "mysql_db_test",\n    "table" = "mysql_table_test"\n    );\n    ```\n    \n5. Create a broker table, with file on HDFS, line delimit by "|", column separated by "\\n"\n\n    ```\n    CREATE EXTERNAL TABLE example_db.table_broker (\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    k4 VARCHAR(2048),\n    k5 DATETIME\n    )\n    ENGINE=broker\n    PROPERTIES (\n    "broker_name" = "hdfs",\n    "path" = "hdfs://hdfs_host:hdfs_port/data1,hdfs://hdfs_host:hdfs_port/data2,hdfs://hdfs_host:hdfs_port/data3%2c4",\n    "column_separator" = "|",\n    "line_delimiter" = "\\n"\n    )\n    BROKER PROPERTIES (\n    "username" = "hdfs_user",\n    "password" = "hdfs_password"\n    );\n    ```\n\n6. Create table will HLL column\n\n    ```\n    CREATE TABLE example_db.example_table\n    (\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 HLL HLL_UNION,\n    v2 HLL HLL_UNION\n    )\n    ENGINE=olap\n    AGGREGATE KEY(k1, k2)\n    DISTRIBUTED BY HASH(k1) BUCKETS 32;\n    ```\n\n7. Create a table will BITMAP_UNION column\n\n    ```\n    CREATE TABLE example_db.example_table\n    (\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 VARCHAR(0) BITMAP_UNION,  // 注意:  bitmap_union的varchar长度需要指定为0\n    v2 VARCHAR(0) BITMAP_UNION\n    )\n    ENGINE=olap\n    AGGREGATE KEY(k1, k2)\n    DISTRIBUTED BY HASH(k1) BUCKETS 32;\n    ```\n\n8. Create 2 colocate join table.\n\n    ```\n    CREATE TABLE `t1` (\n    `id` int(11) COMMENT "",\n    `value` varchar(8) COMMENT ""\n    ) ENGINE=OLAP\n    DUPLICATE KEY(`id`)\n    DISTRIBUTED BY HASH(`id`) BUCKETS 10\n    PROPERTIES (\n    "colocate_with" = "group1"\n    );\n\n    CREATE TABLE `t2` (\n    `id` int(11) COMMENT "",\n    `value` varchar(8) COMMENT ""\n    ) ENGINE=OLAP\n    DUPLICATE KEY(`id`)\n    DISTRIBUTED BY HASH(`id`) BUCKETS 10\n    PROPERTIES (\n    "colocate_with" = "group1"\n    );\n    ```\n\n9. Create a broker table, with file on BOS.\n\n    ```\n    CREATE EXTERNAL TABLE example_db.table_broker (\n    k1 DATE\n    )\n    ENGINE=broker\n    PROPERTIES (\n    "broker_name" = "bos",\n    "path" = "bos://my_bucket/input/file",\n    )\n    BROKER PROPERTIES (\n      "bos_endpoint" = "http://bj.bcebos.com",\n      "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n      "bos_secret_accesskey"="yyyyyyyyyyyyyyyyyyyy"\n    );\n    ```\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("CREATE,TABLE\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);