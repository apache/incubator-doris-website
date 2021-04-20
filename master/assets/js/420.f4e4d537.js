(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{805:function(e,t,_){"use strict";_.r(t);var a=_(43),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"delete"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" Delete")]),e._v(" "),_("p",[e._v("Delete不同于其他导入方式，它是一个同步过程。和Insert into相似，所有的Delete操作在Doris中是一个独立的导入作业，一般Delete语句需要指定表和分区以及删除的条件来筛选要删除的数据，并将会同时删除base表和rollup表的数据。")]),e._v(" "),_("h2",{attrs:{id:"语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[e._v("#")]),e._v(" 语法")]),e._v(" "),_("p",[e._v("主要的Delete语法如下：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("DELETE FROM table_name [PARTITION partition_name]\nWHERE\ncolumn_name1 op value[ AND column_name2 op value ...];\n")])])]),_("p",[e._v("示例1：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("DELETE FROM my_table PARTITION p1 WHERE k1 = 3;\n")])])]),_("p",[e._v("示例2:")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('DELETE FROM my_table PARTITION p1 WHERE k1 < 3 AND k2 = "abc";\n')])])]),_("p",[e._v("下面介绍删除语句中使用到的参数：")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("PARTITION")]),e._v(" "),_("p",[e._v("Delete语句的目标分区，若未指定，则此表必须为单分区表，否则无法delete")])]),e._v(" "),_("li",[_("p",[e._v("WHERE")]),e._v(" "),_("p",[e._v("Delete语句的条件语句，所有删除语句都必须指定WHERE语句")])])]),e._v(" "),_("p",[e._v("说明：")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("Where")]),e._v("语句中的op的类型可包括"),_("code",[e._v("=, >, <, >=, <=, !=, in, not in")]),e._v("。")]),e._v(" "),_("li",[_("code",[e._v("Where")]),e._v("语句中的列只能是"),_("code",[e._v("key")]),e._v("列")]),e._v(" "),_("li",[e._v("当选定的"),_("code",[e._v("key")]),e._v("列不存在某个rollup表内时，无法进行delete")]),e._v(" "),_("li",[e._v("条件语句中各个条件只能是"),_("code",[e._v("and")]),e._v("关系，如希望达成"),_("code",[e._v("or")]),e._v("可将条件分别写入两个delete语句中")]),e._v(" "),_("li",[e._v("如果指定表为RANGE分区表，则必须指定 "),_("code",[e._v("PARTITION")]),e._v("。如果是单分区表，可以不指定。")]),e._v(" "),_("li",[e._v("不同于Insert into命令，delete不能手动指定"),_("code",[e._v("label")]),e._v("，有关label的概念可以查看"),_("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/load-data/insert-into-manual.html"}},[e._v("Insert Into文档")])],1)]),e._v(" "),_("h2",{attrs:{id:"返回结果"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[e._v("#")]),e._v(" 返回结果")]),e._v(" "),_("p",[e._v("Delete命令是一个SQL命令，返回结果是同步的，分为以下几种：")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("执行成功")]),e._v(" "),_("p",[e._v("如果Delete顺利执行完成并可见，将返回下列结果，"),_("code",[e._v("Query OK")]),e._v("表示成功")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n")])])])]),e._v(" "),_("li",[_("p",[e._v("提交成功，但未可见")]),e._v(" "),_("p",[e._v("Doris的事务提交分为两步：提交和发布版本，只有完成了发布版本步骤，结果才对用户是可见的。若已经提交成功了，那么就可以认为最终一定会发布成功，Doris会尝试在提交完后等待发布一段时间，如果超时后即使发布版本还未完成也会优先返回给用户，提示用户提交已经完成。若如果Delete已经提交并执行，但是仍未发布版本和可见，将返回下列结果")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n")])])]),_("p",[e._v("结果会同时返回一个json字符串：")]),e._v(" "),_("p",[_("code",[e._v("affected rows")]),e._v("表示此次删除影响的行，由于Doris的删除目前是逻辑删除，因此对于这个值是恒为0。")]),e._v(" "),_("p",[_("code",[e._v("label")]),e._v("为自动生成的 label，是该导入作业的标识。每个导入作业，都有一个在单 database 内部唯一的 Label。")]),e._v(" "),_("p",[_("code",[e._v("status")]),e._v("表示数据删除是否可见，如果可见，显示"),_("code",[e._v("VISIBLE")]),e._v("，如果不可见,显示"),_("code",[e._v("COMMITTED")]),e._v("。")]),e._v(" "),_("p",[_("code",[e._v("txnId")]),e._v("为这个Delete job对应的事务id")]),e._v(" "),_("p",[_("code",[e._v("err")]),e._v("字段会显示一些本次删除的详细信息")])]),e._v(" "),_("li",[_("p",[e._v("提交失败，事务取消")]),e._v(" "),_("p",[e._v("如果Delete语句没有提交成功，将会被Doris自动中止，返回下列结果")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {错误原因}\n")])])]),_("p",[e._v("示例：")]),e._v(" "),_("p",[e._v("比如说一个超时的删除，将会返回timeout时间和未完成的"),_("code",[e._v("(tablet=replica)")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n")])])]),_("p",[_("strong",[e._v("综上，对于Delete操作返回结果的正确处理逻辑为：")])]),e._v(" "),_("ol",[_("li",[_("p",[e._v("如果返回结果为"),_("code",[e._v("ERROR 1064 (HY000)")]),e._v("，则表示删除失败")])]),e._v(" "),_("li",[_("p",[e._v("如果返回结果为"),_("code",[e._v("Query OK")]),e._v("，则表示删除执行成功")]),e._v(" "),_("ol",[_("li",[e._v("如果"),_("code",[e._v("status")]),e._v("为"),_("code",[e._v("COMMITTED")]),e._v("，表示数据仍不可见，用户可以稍等一段时间再用"),_("code",[e._v("show delete")]),e._v("命令查看结果")]),e._v(" "),_("li",[e._v("如果"),_("code",[e._v("status")]),e._v("为"),_("code",[e._v("VISIBLE")]),e._v("，表示数据删除成功。")])])])])])]),e._v(" "),_("h2",{attrs:{id:"可配置项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可配置项"}},[e._v("#")]),e._v(" 可配置项")]),e._v(" "),_("h3",{attrs:{id:"fe配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fe配置"}},[e._v("#")]),e._v(" FE配置")]),e._v(" "),_("p",[_("strong",[e._v("TIMEOUT配置")])]),e._v(" "),_("p",[e._v("总体来说，Doris的删除作业的超时时间限制在30秒到5分钟时间内，具体时间可通过下面配置项调整")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("tablet_delete_timeout_second")])]),e._v(" "),_("p",[e._v("delete自身的超时时间是可受指定分区下tablet的数量弹性改变的，此项配置为平均一个tablet所贡献的timeout时间，默认值为2。")]),e._v(" "),_("p",[e._v("假设此次删除所指定分区下有5个tablet，那么可提供给delete的timeout时间为10秒，由于低于最低超时时间30秒，因此最终超时时间为30秒。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("load_straggler_wait_second")])]),e._v(" "),_("p",[e._v("如果用户预估的数据量确实比较大，使得5分钟的上限不足时，用户可以通过此项调整timeout上限，默认值为300。")]),e._v(" "),_("p",[_("strong",[e._v("TIMEOUT的具体计算规则为(秒)")])]),e._v(" "),_("p",[_("code",[e._v("TIMEOUT = MIN(load_straggler_wait_second, MAX(30, tablet_delete_timeout_second * tablet_num))")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("query_timeout")])]),e._v(" "),_("p",[e._v("因为delete本身是一个SQL命令，因此删除语句也会受session限制，timeout还受Session中的"),_("code",[e._v("query_timeout")]),e._v("值影响，可以通过"),_("code",[e._v("SET query_timeout = xxx")]),e._v("来增加超时时间，单位是秒。")])])]),e._v(" "),_("p",[_("strong",[e._v("IN谓词配置")])]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("max_allowed_in_element_num_of_delete")])]),e._v(" "),_("p",[e._v("如果用户在使用in谓词时需要占用的元素比较多，用户可以通过此项调整允许携带的元素上限，默认值为1024。")])])]),e._v(" "),_("h2",{attrs:{id:"查看历史记录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看历史记录"}},[e._v("#")]),e._v(" 查看历史记录")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("用户可以通过show delete语句查看历史上已执行完成的删除记录")]),e._v(" "),_("p",[e._v("语法")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("SHOW DELETE [FROM db_name]\n")])])]),_("p",[e._v("示例")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('mysql> show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n')])])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);