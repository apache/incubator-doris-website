(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{637:function(a,e,t){"use strict";t.r(e);var n=t(43),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"show-backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-backup"}},[a._v("#")]),a._v(" SHOW BACKUP")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("This statement is used to view BACKUP tasks\nGrammar:\nSHOW BACKUP [FROM db_name]")]),a._v(" "),t("p",[a._v("Explain:")]),a._v(" "),t("ol",[t("li",[a._v("Only the last BACKUP task is saved in Palo.")]),a._v(" "),t("li",[a._v("Each column has the following meanings:\nJobId: Unique job ID\nSnapshotName: The name of the backup\nDbName: Subordinate database\nState: Current phase\nPENDING: The initial state after submitting a job\nSNAPSHOTING: In the execution snapshot\nUPLOAD_SNAPSHOT: Snapshot completed, ready for upload\nUPLOADING: Snapshot uploading\nSAVE_META: Save job meta-information as a local file\nUPLOAD_INFO: Upload job meta-information\nFINISHED: Operation Successful\nCANCELLED: Job Failure\nBackup Objs: Backup tables and partitions\nCreateTime: Task submission time\nSnapshot Finished Time: Snapshot completion time\nUpload Finished Time: Snapshot Upload Completion Time\nFinishedTime: Job End Time\nUnfinished Tasks: The unfinished sub-task ID is displayed in the SNAP HOTING and UPLOADING phases\nStatus: Display failure information if the job fails\nTimeout: Job timeout, per second")])]),a._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("ol",[t("li",[a._v("See the last BACKUP task under example_db.\nSHOW BACKUP FROM example_db;")])]),a._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("p",[a._v("SHOW, BACKUP")])])}),[],!1,null,null,null);e.default=s.exports}}]);