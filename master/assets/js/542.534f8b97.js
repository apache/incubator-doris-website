(window.webpackJsonp=window.webpackJsonp||[]).push([[542],{928:function(e,a,t){"use strict";t.r(a);var n=t(43),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"show-restore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-restore"}},[e._v("#")]),e._v(" SHOW RESTORE")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("该语句用于查看 RESTORE 任务\n语法：\n    SHOW RESTORE [FROM db_name]\n    \n说明：\n    1. Palo 中仅保存最近一次 RESTORE 任务。\n    2. 各列含义如下：\n        JobId：                  唯一作业id\n        Label：                  要恢复的备份的名称\n        Timestamp：              要恢复的备份的时间版本\n        DbName：                 所属数据库\n        State：                  当前阶段\n            PENDING：        提交作业后的初始状态\n            SNAPSHOTING：    执行快照中\n            DOWNLOAD：       快照完成，准备下载仓库中的快照\n            DOWNLOADING：    快照下载中\n            COMMIT：         快照下载完成，准备生效\n            COMMITING：      生效中\n            FINISHED：       作业成功\n            CANCELLED：      作业失败\n        AllowLoad：              恢复时是否允许导入（当前不支持）\n        ReplicationNum：         指定恢复的副本数\n        RestoreJobs：            要恢复的表和分区\n        CreateTime：             任务提交时间\n        MetaPreparedTime：       元数据准备完成时间\n        SnapshotFinishedTime：   快照完成时间\n        DownloadFinishedTime：   快照下载完成时间\n        FinishedTime：           作业结束时间\n        UnfinishedTasks：        在 SNAPSHOTING、DOWNLOADING 和 COMMITING 阶段会显示还未完成的子任务id\n        Status：                 如果作业失败，显示失败信息\n        Timeout：                作业超时时间，单位秒\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 查看 example_db 下最近一次 RESTORE 任务。\n    SHOW RESTORE FROM example_db;\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SHOW, RESTORE\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);