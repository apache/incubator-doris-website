(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{445:function(t,s,a){"use strict";a.r(s);var e=a(43),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spark-doris-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-doris-connector"}},[t._v("#")]),t._v(" Spark Doris Connector")]),t._v(" "),a("p",[t._v("Spark Doris Connector can support reading data stored in Doris through Spark.")]),t._v(" "),a("ul",[a("li",[t._v("The current version only supports reading data from "),a("code",[t._v("Doris")]),t._v(".")]),t._v(" "),a("li",[t._v("You can map the "),a("code",[t._v("Doris")]),t._v(" table to"),a("code",[t._v("DataFrame")]),t._v(" or "),a("code",[t._v("RDD")]),t._v(", it is recommended to use"),a("code",[t._v("DataFrame")]),t._v(".")]),t._v(" "),a("li",[t._v("Support the completion of data filtering on the "),a("code",[t._v("Doris")]),t._v(" side to reduce the amount of data transmission.")])]),t._v(" "),a("h2",{attrs:{id:"version-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-compatibility"}},[t._v("#")]),t._v(" Version Compatibility")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Connector")]),t._v(" "),a("th",[t._v("Spark")]),t._v(" "),a("th",[t._v("Doris")]),t._v(" "),a("th",[t._v("Java")]),t._v(" "),a("th",[t._v("Scala")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1.0.0")]),t._v(" "),a("td",[t._v("2.x")]),t._v(" "),a("td",[t._v("0.12+")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("2.11")])])])]),t._v(" "),a("h2",{attrs:{id:"build-and-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-install"}},[t._v("#")]),t._v(" Build and Install")]),t._v(" "),a("p",[t._v("Execute following command in dir "),a("code",[t._v("extension/spark-doris-connector/")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" build.sh\n")])])]),a("p",[t._v("After successful compilation, the file "),a("code",[t._v("doris-spark-1.0.0-SNAPSHOT.jar")]),t._v(" will be generated in the "),a("code",[t._v("output/")]),t._v(" directory. Copy this file to "),a("code",[t._v("ClassPath")]),t._v(" in "),a("code",[t._v("Spark")]),t._v(" to use "),a("code",[t._v("Spark-Doris-Connector")]),t._v(". For example, "),a("code",[t._v("Spark")]),t._v(" running in "),a("code",[t._v("Local")]),t._v(" mode, put this file in the "),a("code",[t._v("jars/")]),t._v(" folder. "),a("code",[t._v("Spark")]),t._v(" running in "),a("code",[t._v("Yarn")]),t._v(" cluster mode, put this file in the pre-deployment package.")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("h3",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEMPORARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VIEW")]),t._v(" spark_doris\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" doris\nOPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"table.identifier"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fenodes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_USERNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_PASSWORD"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" spark_doris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"dataframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataframe"}},[t._v("#")]),t._v(" DataFrame")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" dorisSparkDF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.table.identifier"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.fenodes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_USERNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_PASSWORD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndorisSparkDF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"rdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdd"}},[t._v("#")]),t._v(" RDD")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" dorisSparkRDD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dorisRDD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  tableIdentifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Some"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cfg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Some"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.fenodes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.request.auth.user"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_USERNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.request.auth.password"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_PASSWORD"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndorisSparkRDD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h3",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("doris.fenodes")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Doris FE http address, support multiple addresses, separated by commas")])]),t._v(" "),a("tr",[a("td",[t._v("doris.table.identifier")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Doris table identifier, eg, db1.tbl1")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.retries")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Number of retries to send requests to Doris")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.connect.timeout.ms")]),t._v(" "),a("td",[t._v("30000")]),t._v(" "),a("td",[t._v("Connection timeout for sending requests to Doris")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.read.timeout.ms")]),t._v(" "),a("td",[t._v("30000")]),t._v(" "),a("td",[t._v("Read timeout for sending request to Doris")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.query.timeout.s")]),t._v(" "),a("td",[t._v("3600")]),t._v(" "),a("td",[t._v("Query the timeout time of doris, the default is 1 hour, -1 means no timeout limit")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.tablet.size")]),t._v(" "),a("td",[t._v("Integer.MAX_VALUE")]),t._v(" "),a("td",[t._v("The number of Doris Tablets corresponding to an RDD Partition. The smaller this value is set, the more partitions will be generated. This will increase the parallelism on the Spark side, but at the same time will cause greater pressure on Doris.")])]),t._v(" "),a("tr",[a("td",[t._v("doris.batch.size")]),t._v(" "),a("td",[t._v("1024")]),t._v(" "),a("td",[t._v("The maximum number of rows to read data from BE at one time. Increasing this value can reduce the number of connections between Spark and Doris. Thereby reducing the extra time overhead caused by network delay.")])]),t._v(" "),a("tr",[a("td",[t._v("doris.exec.mem.limit")]),t._v(" "),a("td",[t._v("2147483648")]),t._v(" "),a("td",[t._v("Memory limit for a single query. The default is 2GB, in bytes.")])]),t._v(" "),a("tr",[a("td",[t._v("doris.deserialize.arrow.async")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Whether to support asynchronous conversion of Arrow format to RowBatch required for spark-doris-connector iteration")])]),t._v(" "),a("tr",[a("td",[t._v("doris.deserialize.queue.size")]),t._v(" "),a("td",[t._v("64")]),t._v(" "),a("td",[t._v("Asynchronous conversion of the internal processing queue in Arrow format takes effect when doris.deserialize.arrow.async is true")])])])]),t._v(" "),a("h3",{attrs:{id:"sql-dataframe-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-dataframe-configuration"}},[t._v("#")]),t._v(" SQL & Dataframe Configuration")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Doris username")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Doris password")])]),t._v(" "),a("tr",[a("td",[t._v("doris.filter.query.in.max.count")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("In the predicate pushdown, the maximum number of elements in the in expression value list. If this number is exceeded, the in-expression conditional filtering is processed on the Spark side.")])])])]),t._v(" "),a("h3",{attrs:{id:"rdd-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdd-configuration"}},[t._v("#")]),t._v(" RDD Configuration")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("doris.request.auth.user")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Doris username")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.auth.password")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Doris password")])]),t._v(" "),a("tr",[a("td",[t._v("doris.read.field")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("List of column names in the Doris table, separated by commas")])]),t._v(" "),a("tr",[a("td",[t._v("doris.filter.query")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Filter expression of the query, which is transparently transmitted to Doris. Doris uses this expression to complete source-side data filtering.")])])])]),t._v(" "),a("h2",{attrs:{id:"doris-spark-column-type-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-spark-column-type-mapping"}},[t._v("#")]),t._v(" Doris & Spark Column Type Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Doris Type")]),t._v(" "),a("th",[t._v("Spark Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("NULL_TYPE")]),t._v(" "),a("td",[t._v("DataTypes.NullType")])]),t._v(" "),a("tr",[a("td",[t._v("BOOLEAN")]),t._v(" "),a("td",[t._v("DataTypes.BooleanType")])]),t._v(" "),a("tr",[a("td",[t._v("TINYINT")]),t._v(" "),a("td",[t._v("DataTypes.ByteType")])]),t._v(" "),a("tr",[a("td",[t._v("SMALLINT")]),t._v(" "),a("td",[t._v("DataTypes.ShortType")])]),t._v(" "),a("tr",[a("td",[t._v("INT")]),t._v(" "),a("td",[t._v("DataTypes.IntegerType")])]),t._v(" "),a("tr",[a("td",[t._v("BIGINT")]),t._v(" "),a("td",[t._v("DataTypes.LongType")])]),t._v(" "),a("tr",[a("td",[t._v("FLOAT")]),t._v(" "),a("td",[t._v("DataTypes.FloatType")])]),t._v(" "),a("tr",[a("td",[t._v("DOUBLE")]),t._v(" "),a("td",[t._v("DataTypes.DoubleType")])]),t._v(" "),a("tr",[a("td",[t._v("DATE")]),t._v(" "),a("td",[t._v("DataTypes.StringType"),a("sup",[t._v("1")])])]),t._v(" "),a("tr",[a("td",[t._v("DATETIME")]),t._v(" "),a("td",[t._v("DataTypes.StringType"),a("sup",[t._v("1")])])]),t._v(" "),a("tr",[a("td",[t._v("BINARY")]),t._v(" "),a("td",[t._v("DataTypes.BinaryType")])]),t._v(" "),a("tr",[a("td",[t._v("DECIMAL")]),t._v(" "),a("td",[t._v("DecimalType")])]),t._v(" "),a("tr",[a("td",[t._v("CHAR")]),t._v(" "),a("td",[t._v("DataTypes.StringType")])]),t._v(" "),a("tr",[a("td",[t._v("LARGEINT")]),t._v(" "),a("td",[t._v("DataTypes.StringType")])]),t._v(" "),a("tr",[a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("DataTypes.StringType")])]),t._v(" "),a("tr",[a("td",[t._v("DECIMALV2")]),t._v(" "),a("td",[t._v("DecimalType")])]),t._v(" "),a("tr",[a("td",[t._v("TIME")]),t._v(" "),a("td",[t._v("DataTypes.DoubleType")])]),t._v(" "),a("tr",[a("td",[t._v("HLL")]),t._v(" "),a("td",[t._v("Unsupported datatype")])])])]),t._v(" "),a("ul",[a("li",[t._v("Note: In Connector, "),a("code",[t._v("DATE")]),t._v(" and"),a("code",[t._v("DATETIME")]),t._v(" are mapped to "),a("code",[t._v("String")]),t._v(". Due to the processing logic of the Doris underlying storage engine, when the time type is used directly, the time range covered cannot meet the demand. So use "),a("code",[t._v("String")]),t._v(" type to directly return the corresponding time readable text.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);