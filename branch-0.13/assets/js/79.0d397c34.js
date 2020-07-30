(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{466:function(e,t,a){"use strict";a.r(t);var n=a(43),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"doris-storage-file-format-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-storage-file-format-optimization"}},[e._v("#")]),e._v(" Doris Storage File Format Optimization")]),e._v(" "),a("h2",{attrs:{id:"file-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-format"}},[e._v("#")]),e._v(" File format")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/segment_v2.png"),alt:""}}),e._v(" "),a("center",[e._v("1. doris segment")]),e._v(" "),a("p",[e._v("Documents include:")]),e._v(" "),a("ul",[a("li",[e._v("The file starts with an 8-byte magic code to identify the file format and version")]),e._v(" "),a("li",[e._v("Data Region: Used to store data information for each column, where the data is loaded on demand by pages.")]),e._v(" "),a("li",[e._v("Index Region: Doris stores the index data of each column in Index Region, where the data is loaded according to column granularity, so the data information of the following column is stored separately.")]),e._v(" "),a("li",[e._v("Footer信息\n"),a("ul",[a("li",[e._v("FileFooterPB: Metadata Information for Definition Files")]),e._v(" "),a("li",[e._v("Chesum of 4 bytes of footer Pb content")]),e._v(" "),a("li",[e._v("Four bytes FileFooterPB message length for reading FileFooterPB")]),e._v(" "),a("li",[e._v("The 8 byte MAGIC CODE is stored in the last bit to facilitate the identification of file types in different scenarios.")])])])]),e._v(" "),a("p",[e._v("The data in the file is organized in the form of page, which is the basic unit of coding and compression. Current page types include the following:")]),e._v(" "),a("h3",{attrs:{id:"datapage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datapage"}},[e._v("#")]),e._v(" DataPage")]),e._v(" "),a("p",[e._v("Data Page is divided into two types: nullable and non-nullable data pages.")]),e._v(" "),a("p",[e._v("Nullable's data page includes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n                 +----------------+\n                 |  value count   |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 | bitmap length  |\n                 |----------------|\n                 |  null bitmap   |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")])])]),a("p",[e._v("non -zero data page32467;- 26500;- 229140;-")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                 |----------------|\n                 |   value count  |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")])])]),a("p",[e._v("The meanings of each field are as follows:")]),e._v(" "),a("ul",[a("li",[e._v("value count\n"),a("ul",[a("li",[e._v("Represents the number of rows in a page")])])]),e._v(" "),a("li",[e._v("First row id\n"),a("ul",[a("li",[e._v("Line number of the first line in page")])])]),e._v(" "),a("li",[e._v("bitmap length\n"),a("ul",[a("li",[e._v("Represents the number of bytes in the next bitmap")])])]),e._v(" "),a("li",[e._v("null bitmap\n"),a("ul",[a("li",[e._v("bitmap representing null information")])])]),e._v(" "),a("li",[e._v("Data\n"),a("ul",[a("li",[e._v("Store data after encoding and compress")]),e._v(" "),a("li",[e._v("You need to write in the header information of the data: is_compressed")]),e._v(" "),a("li",[e._v("Various kinds of data encoded by different codes need to write some field information in the header information in order to achieve data parsing.")]),e._v(" "),a("li",[e._v("TODO: Add header information for various encodings")])])]),e._v(" "),a("li",[e._v("Checksum\n"),a("ul",[a("li",[e._v("Store page granularity checksum, including page header and subsequent actual data")])])])]),e._v(" "),a("h3",{attrs:{id:"bloom-filter-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bloom-filter-pages"}},[e._v("#")]),e._v(" Bloom Filter Pages")]),e._v(" "),a("p",[e._v("For each bloom filter column, a page of the bloom filter is generated corresponding to the granularity of the page and saved in the bloom filter pages area.")]),e._v(" "),a("h3",{attrs:{id:"ordinal-index-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordinal-index-page"}},[e._v("#")]),e._v(" Ordinal Index Page")]),e._v(" "),a("p",[e._v("For each column, a sparse index of row numbers is established according to page granularity. The content is a pointer to the block (including offset and length) for the line number of the start line of the page")]),e._v(" "),a("h3",{attrs:{id:"short-key-index-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#short-key-index-page"}},[e._v("#")]),e._v(" Short Key Index page")]),e._v(" "),a("p",[e._v("We generate a sparse index of short key every N rows (configurable) with the contents of short key - > line number (ordinal)")]),e._v(" "),a("h3",{attrs:{id:"column-s-other-indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#column-s-other-indexes"}},[e._v("#")]),e._v(" Column's other indexes###")]),e._v(" "),a("p",[e._v("The format design supports the subsequent expansion of other index information, such as bitmap index, spatial index, etc. It only needs to write the required data to the existing column data, and add the corresponding metadata fields to FileFooterPB.")]),e._v(" "),a("h3",{attrs:{id:"metadata-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-definition"}},[e._v("#")]),e._v(" Metadata Definition###")]),e._v(" "),a("p",[e._v("FileFooterPB is defined as:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("message ColumnPB {\n    optional uint32 column_id = 1; // 这里使用column id，不使用column name是因为计划支持修改列名\n    optional string type = 2; // 列类型\n    optional string aggregation = 3; // 是否聚合\n    optional uint32 length = 4; // 长度\n    optional bool is_key = 5; // 是否是主键列\n    optional string default_value = 6; // 默认值\n    optional uint32 precision = 9 [default = 27]; // 精度\n    optional uint32 frac = 10 [default = 9];\n    optional bool is_nullable = 11 [default=false]; // 是否有null\n    optional bool is_bf_column = 15 [default=false]; // 是否有bf词典\n\toptional bool is_bitmap_column = 16 [default=false]; // 是否有bitmap索引\n}\n\n// page偏移\nmessage PagePointerPB {\n\trequired uint64 offset; // page在文件中的偏移\n\trequired uint32 length; // page的大小\n}\n\nmessage MetadataPairPB {\n  optional string key = 1;\n  optional bytes value = 2;\n}\n\nmessage ColumnMetaPB {\n\toptional ColumnMessage encoding; // 编码方式\n\n\toptional PagePointerPB dict_page // 词典page\n\trepeated PagePointerPB bloom_filter_pages; // bloom filter词典信息\n\toptional PagePointerPB ordinal_index_page; // 行号索引数据\n\toptional PagePointerPB page_zone_map_page; // page级别统计信息索引数据\n\n\toptional PagePointerPB bitmap_index_page; // bitmap索引数据\n\n\toptional uint64 data_footprint; // 列中索引的大小\n\toptional uint64 index_footprint; // 列中数据的大小\n\toptional uint64 raw_data_footprint; // 原始列数据大小\n\n\toptional CompressKind compress_kind; // 列的压缩方式\n\n\toptional ZoneMapPB column_zone_map; //文件级别的过滤条件\n\trepeated MetadataPairPB column_meta_datas;\n}\n\nmessage FileFooterPB {\n\toptional uint32 version = 2 [default = 1]; // 用于版本兼容和升级使用\n\trepeated ColumnPB schema = 5; // 列Schema\n    optional uint64 num_values = 4; // 文件中保存的行数\n    optional uint64 index_footprint = 7; // 索引大小\n    optional uint64 data_footprint = 8; // 数据大小\n\toptional uint64 raw_data_footprint = 8; // 原始数据大小\n\n    optional CompressKind compress_kind = 9 [default = COMPRESS_LZO]; // 压缩方式\n    repeated ColumnMetaPB column_metas = 10; // 列元数据\n\toptional PagePointerPB key_index_page; // short key索引page\n}\n\n")])])]),a("h2",{attrs:{id:"read-write-logic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-write-logic"}},[e._v("#")]),e._v(" Read-write logic##")]),e._v(" "),a("h3",{attrs:{id:"write"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write"}},[e._v("#")]),e._v(" Write")]),e._v(" "),a("p",[e._v("The general writing process is as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Write magic")]),e._v(" "),a("li",[e._v("Generate corresponding Column Writer according to schema information. Each Column Writer obtains corresponding encoding information (configurable) according to different types, and generates corresponding encoder according to encoding.")]),e._v(" "),a("li",[e._v("Call encoder - > add (value) for data writing. Each K line generates a short key index entry, and if the current page satisfies certain conditions (the size exceeds 1M or the number of rows is K), a new page is generated and cached in memory.")]),e._v(" "),a("li",[e._v("Continuous cycle step 3 until data writing is completed. Brush the data of each column into the file in sequence")]),e._v(" "),a("li",[e._v("Generate FileFooterPB information and write it to the file.")])]),e._v(" "),a("p",[e._v("Relevant issues:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("How does the index of short key be generated?")]),e._v(" "),a("ul",[a("li",[e._v("Now we still generate a short key sparse index according to how many rows are sparse, and keep a short sparse index generated every 1024 rows. The specific content is: short key - > ordinal")])])]),e._v(" "),a("li",[a("p",[e._v("What should be stored in the ordinal index?")]),e._v(" "),a("ul",[a("li",[e._v("Store the first ordinal to page pointer mapping information for pages")])])]),e._v(" "),a("li",[a("p",[e._v("What are stored in pages of different encoding types?")]),e._v(" "),a("ul",[a("li",[e._v("Dictionary Compression")]),e._v(" "),a("li",[e._v("plain")]),e._v(" "),a("li",[e._v("rle")]),e._v(" "),a("li",[e._v("bshuf")])])])]),e._v(" "),a("h3",{attrs:{id:"read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[e._v("#")]),e._v(" Read###")]),e._v(" "),a("ol",[a("li",[e._v("Read the magic of the file and judge the type and version of the file.")]),e._v(" "),a("li",[e._v("Read FileFooterPB and check sum")]),e._v(" "),a("li",[e._v("Read short key index and data ordinal index information of corresponding columns according to required columns")]),e._v(" "),a("li",[e._v("Use start key and end key, locate the row number to be read through short key index, then determine the row ranges to be read through ordinal index, and filter the row ranges to be read through statistics, bitmap index and so on.")]),e._v(" "),a("li",[e._v("Then read row data through ordinal index according to row ranges")])]),e._v(" "),a("p",[e._v("Relevant issues:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("How to quickly locate a row within the page?")]),e._v(" "),a("p",[e._v("The data inside the page is encoding, so it can not locate the row-level data quickly. Different encoding methods have different schemes for fast line number positioning in-house, which need to be analyzed concretely:")]),e._v(" "),a("ul",[a("li",[e._v("If it is rle-coded, skip is performed by resolving the head of RLE until the RLE block containing the row is reached, and then the reverse solution is performed.")]),e._v(" "),a("li",[e._v("binary plain encoding: offset information will be stored in the page, and offset information will be specified in the page header. When reading, offset information will be parsed into the array first, so that you can quickly locate the data of a row of block through offset data information of each row.")])])]),e._v(" "),a("li",[a("p",[e._v("How to achieve efficient block reading? Consider merging adjacent blocks while they are being read, one-time reading?\nThis requires judging whether the block is continuous at the time of reading, and if it is continuous, reading it once.")])])]),e._v(" "),a("h2",{attrs:{id:"coding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding"}},[e._v("#")]),e._v(" Coding##")]),e._v(" "),a("p",[e._v("In the existing Doris storage, plain encoding is adopted for string type encoding, which is inefficient. After comparison, it is found that in Baidu statistics scenario, data will expand more than twice because of string type coding. Therefore, it is planned to introduce dictionary-based coding compression.")]),e._v(" "),a("h2",{attrs:{id:"compression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression##")]),e._v(" "),a("p",[e._v("It implements a scalable compression framework, supports a variety of compression algorithms, facilitates the subsequent addition of new compression algorithms, and plans to introduce zstd compression.")]),e._v(" "),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" TODO")]),e._v(" "),a("ol",[a("li",[e._v("How to implement nested types? How to locate line numbers in nested types?")]),e._v(" "),a("li",[e._v("How to optimize the downstream bitmap and column statistics statistics caused by ScanRange splitting?")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);