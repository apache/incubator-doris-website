(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{423:function(e,t,o){"use strict";o.r(t);var s=o(43),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction-overview"}},[e._v("#")]),e._v(" Introduction Overview")]),e._v(" "),o("p",[e._v("The Load function is to import the user's raw data into Doris. After successful import, users can query data through Mysql client.")]),e._v(" "),o("p",[e._v("Doris supports multiple imports. It is recommended to read this document in full first, and then to view the detailed documents of their respective import modes according to the selected import mode.")]),e._v(" "),o("h2",{attrs:{id:"basic-concepts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic concepts")]),e._v(" "),o("ol",[o("li",[e._v("Frontend (FE): Metadata and scheduling nodes of Doris system. In the import process, it is mainly responsible for the generation of import planning and the scheduling of import tasks.")]),e._v(" "),o("li",[e._v("Backend (BE): The computing and storage nodes of Doris system. In the import process, it is mainly responsible for ETL and storage of data.")]),e._v(" "),o("li",[e._v("Broker: Broker is an independent stateless process. It encapsulates the file system interface and provides Doris with the ability to read files in the remote storage system.")]),e._v(" "),o("li",[e._v("Load job: The import job reads the source data submitted by the user, transforms or cleans it, and imports the data into the Doris system. After the import is completed, the data can be queried by the user.")]),e._v(" "),o("li",[e._v("Label: All import jobs have a Label. Label is unique in a database and can be specified by the user or automatically generated by the system to identify an import job. The same Label can only be used for a successful import job.")]),e._v(" "),o("li",[e._v("MySQL Protocol/HTTP Protocol: Doris provides two kinds of access protocol interfaces. MySQL protocol and HTTP protocol. Part of the import mode uses MySQL protocol interface to submit jobs, and part of the import mode uses HTTP protocol interface to submit jobs.")])]),e._v(" "),o("h2",{attrs:{id:"load-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#load-mode"}},[e._v("#")]),e._v(" Load mode")]),e._v(" "),o("p",[e._v("To adapt to different data import requirements, Doris system provides five different import methods. Each import mode supports different data sources and has different usage modes (asynchronous, synchronous).")]),e._v(" "),o("p",[e._v("All import methods support CSV data format. Broker load also supports parquet and orc data format.")]),e._v(" "),o("p",[e._v("For instructions on each import mode, please refer to the operation manual for a single import mode.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Broker load")]),e._v(" "),o("p",[e._v("Access and read external data sources (such as HDFS) through the Broker process and import them into Doris. The user submits the import job through Mysql protocol and executes it asynchronously. View the import results through the "),o("code",[e._v("SHOW LOAD")]),e._v(" command.")])]),e._v(" "),o("li",[o("p",[e._v("Stream load")]),e._v(" "),o("p",[e._v("Users submit requests through HTTP protocol and create imports with raw data. It is mainly used to quickly import data from local files or data streams into Doris. The Import command returns the import result synchronously.")])]),e._v(" "),o("li",[o("p",[e._v("Insert")]),e._v(" "),o("p",[e._v("Similar to the Insert statement in MySQL, Doris provides "),o("code",[e._v("INSERT INTO tbl SELECT ...;")]),e._v("reading data from Doris's table and importing it into another table. Or by "),o("code",[e._v("INSERT INTO tbl VALUES (...);")]),e._v(" Insert a single piece of data.")])]),e._v(" "),o("li",[o("p",[e._v("Multi load")]),e._v(" "),o("p",[e._v("Users submit multiple import jobs through HTTP protocol. Multi Load guarantees the atomic validity of multiple import jobs.")])]),e._v(" "),o("li",[o("p",[e._v("Routine load")]),e._v(" "),o("p",[e._v("Users submit routine import jobs through MySQL protocol, generate a resident thread, read and import data from data sources (such as Kafka) uninterruptedly into Doris.")])])]),e._v(" "),o("h2",{attrs:{id:"basic-principles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-principles"}},[e._v("#")]),e._v(" Basic Principles")]),e._v(" "),o("h3",{attrs:{id:"import-execution-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#import-execution-process"}},[e._v("#")]),e._v(" Import execution process")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("+---------+      +---------+      +----------+      +-----------+\n|         |      |         |      |          |      |           |\n| PENDING +-----\x3e+   ETL   +-----\x3e+ LOADING  +-----\x3e+ FINISHED  |\n|         |      |         |      |          |      |           |\n+---------+      +---+-----+      +----+-----+      +-----------+\n     |               |                 |\n     |               |                 |\n     |               |                 |\n     |               |                 |            +-----------+\n     |               |                 |            |           |\n     +---------------+-----------------+------------\x3e CANCELLED |\n                                                    |           |\n                                                    +-----------+\n\n")])])]),o("p",[e._v("As shown above, an import operation mainly goes through the four stages above.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("PENDING (not required): Only Broker Load has this stage. Broker Load is submitted by the user and stays at this stage for a short time until it is scheduled by Scheduler in FE. Scheduler's schedule interval is 5 seconds.")])]),e._v(" "),o("li",[o("p",[e._v("ETL (not required): This stage exists before version 0.10.0 (included), mainly for transforming raw data according to user declaration and filtering raw data that does not meet the requirements. In the version after 0.10.0, the ETL phase no longer exists, and the work of data transformation is merged into the LOADING phase.")])]),e._v(" "),o("li",[o("p",[e._v("LOADING: This stage is mainly used to push the transformed data into the corresponding BE storage before version 0.10.0 (including). In the version after 0.10.0, the data is cleaned and changed first, and then sent to BE storage. When all imported data are imported, the process of waiting for validity enters, and Load job is still LOADING.")])]),e._v(" "),o("li",[o("p",[e._v("FINISHED: After all the data involved in Load Job takes effect, the state of Load Job becomes FINISHED. Data imported after FINISHED can be queried.")])]),e._v(" "),o("li",[o("p",[e._v("CANCELLED: Before job FINISH, jobs may be cancelled and entered the CANCELLED state. For example, the user manually cancels, or imports errors. CANCELLED is also the final state of Load Job and cannot be executed again.")])])]),e._v(" "),o("p",[e._v("In the above stage, except for the PENDING to LOADING stage, which is scheduled by Scheduler, the transfer before other stages is implemented by callback mechanism.")]),e._v(" "),o("h3",{attrs:{id:"label-and-atomicity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#label-and-atomicity"}},[e._v("#")]),e._v(" Label and Atomicity")]),e._v(" "),o("p",[e._v("Doris provides atomic assurance for all import methods. It ensures that the data in the same import operation is valid for atoms. There will be no case of importing only part of the data.")]),e._v(" "),o("p",[e._v("At the same time, each import job has a Label designated by the user or automatically generated by the system. Label is unique in a database. When an import job corresponding to a Label is successful enough, the import job cannot be submitted repeatedly using the Label. If the import job corresponding to Label fails, it can be reused.")]),e._v(" "),o("p",[e._v("Users can use Label mechanism to ensure that the data corresponding to Label can be imported at most once, at the level of At-Most-One semantics.")]),e._v(" "),o("h2",{attrs:{id:"synchronization-and-asynchronization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#synchronization-and-asynchronization"}},[e._v("#")]),e._v(" Synchronization and asynchronization")]),e._v(" "),o("p",[e._v("Doris's current import methods fall into two categories, synchronous and asynchronous. If an external program accesses Doris's import function, it is necessary to determine which type of import mode is used and then determine the access logic.")]),e._v(" "),o("h3",{attrs:{id:"synchronization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#synchronization"}},[e._v("#")]),e._v(" Synchronization")]),e._v(" "),o("p",[e._v("Synchronized import means that users create import tasks, Doris executes import synchronously, and returns user import results after execution. Users can directly determine whether the import is successful or not by synchronizing the results returned by creating the import task command.")]),e._v(" "),o("p",[e._v("The import methods of synchronous type are "),o("strong",[e._v("Stream load")]),e._v(", "),o("strong",[e._v("Insert")]),e._v(".")]),e._v(" "),o("p",[e._v("Operation steps:")]),e._v(" "),o("ol",[o("li",[e._v("Users (external systems) create import tasks.")]),e._v(" "),o("li",[e._v("Doris returns the import result.")]),e._v(" "),o("li",[e._v("The user (external system) judges the import result and can submit the import task again if it fails.")])]),e._v(" "),o("p",[o("em",[e._v("Note: If the user returns the import synchronously and the amount of data imported is too large, it may take a long time to create the import request to return the result.")])]),e._v(" "),o("h3",{attrs:{id:"asynchronism"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#asynchronism"}},[e._v("#")]),e._v(" Asynchronism")]),e._v(" "),o("p",[e._v("Asynchronous import means that after the user creates the import task, Doris directly returns to the successful creation. "),o("strong",[e._v("Successful creation does not mean that data has been imported into")]),e._v(". The import task will be executed asynchronously. After successful creation, users need to send a polling command to check the status of the import job. If the creation fails, you can judge whether it needs to be created again based on the failure information.")]),e._v(" "),o("p",[e._v("The ways to import asynchronous types are: "),o("strong",[e._v("Broker load")]),e._v(", "),o("strong",[e._v("Multi load")]),e._v(".")]),e._v(" "),o("p",[e._v("Operation steps:")]),e._v(" "),o("ol",[o("li",[e._v("Users (external systems) create import tasks.")]),e._v(" "),o("li",[e._v("Doris returns the import creation result.")]),e._v(" "),o("li",[e._v("User (external system) judges the result of import creation, success enters 4, failure returns to retry to create import, return to 1.")]),e._v(" "),o("li",[e._v("The user (external system) polls to see the import task until the status changes to FINISHED or CANCELLED.")])]),e._v(" "),o("h3",{attrs:{id:"notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),o("p",[e._v("Neither asynchronous nor synchronous import types should be retried endlessly after Doris returns an import failure or an import creation failure. "),o("strong",[e._v("After a limited number of retries and failures, the external system retains the failure information. Most of the retries fail because of the problem of using method or data itself.")])]),e._v(" "),o("h2",{attrs:{id:"memory-limit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#memory-limit"}},[e._v("#")]),e._v(" Memory Limit")]),e._v(" "),o("p",[e._v("Users can limit the memory usage of a single load by setting parameters to prevent the system from taking up too much memory and causing the system OOM.\nDifferent load methods restrict memory in a slightly different way. You can refer to the respective load manuals for viewing.")]),e._v(" "),o("p",[e._v("An load job is usually distributed across multiple Backends. The load memory limit is the memory usage of load job on a single Backend, not memory usage across the cluster.")]),e._v(" "),o("p",[e._v("At the same time, each Backend sets the overall upper limit of the memory available for load. See the General System Configuration section below for specific configuration. This configuration limits the overall memory usage limit for all load tasks running on this Backend.")]),e._v(" "),o("p",[e._v("Smaller memory limits can affect load efficiency because the load process can frequently write in-memory data back to disk because memory reaches the upper limit. Excessive memory limits can cause system OOM when load concurrency is high. Therefore, you need to properly set the load memory limit according to your needs.")]),e._v(" "),o("h2",{attrs:{id:"best-practices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),o("p",[e._v("When users access Doris import, they usually use program access mode to ensure that data is imported into Doris regularly. Below is a brief description of the best practices for program access to Doris.")]),e._v(" "),o("ol",[o("li",[e._v("Choose the appropriate import mode: According to the location of the data source, choose the import mode. For example, if raw data is stored on HDFS, import it using Broker load.")]),e._v(" "),o("li",[e._v("Protocol for determining the import mode: If Broker load import mode is selected, external systems need to be able to submit and view import jobs regularly using MySQL protocol.")]),e._v(" "),o("li",[e._v("Determine the type of import mode: import mode is synchronous or asynchronous. For example, Broker load is an asynchronous import mode. After submitting the creation import, the external system must call the check import command to determine whether the import is successful or not based on the results of the check import command.")]),e._v(" "),o("li",[e._v("Label generation strategy: Label generation strategy needs to be satisfied, and each batch of data is unique and fixed. Doris can then guarantee At-Most-Once.")]),e._v(" "),o("li",[e._v("The program itself guarantees At-Least-Once: The external system needs to guarantee its own At-Least-Once, so that Exactly-Once of the import process can be guaranteed.")])]),e._v(" "),o("h2",{attrs:{id:"general-system-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#general-system-configuration"}},[e._v("#")]),e._v(" General System Configuration")]),e._v(" "),o("p",[e._v("The following sections explain several system-level configurations that are common to all imports.")]),e._v(" "),o("h3",{attrs:{id:"fe-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration"}},[e._v("#")]),e._v(" FE configuration")]),e._v(" "),o("p",[e._v("The following configuration belongs to the system configuration of FE, which can be modified by modifying the configuration file "),o("code",[e._v("fe.conf")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("max_load_timeout_second and min_load_timeout_second")]),e._v(" "),o("p",[e._v("The two configurations mean the maximum import timeout time and the minimum import timeout time in seconds. The default maximum timeout time is 3 days and the default minimum timeout time is 1 second. User-defined import timeouts should not exceed this range. This parameter is applicable to all import modes.")])]),e._v(" "),o("li",[o("p",[e._v("desired_max_waiting_jobs")]),e._v(" "),o("p",[e._v("The maximum number of imported tasks in the waiting queue is 100 by default. New import requests are rejected when the number of imports in the PENDING state (i.e. waiting for execution) in FE exceeds that value.")]),e._v(" "),o("p",[e._v("This configuration is only valid for asynchronous execution of imports. When the number of import waiting for asynchronous execution exceeds the default value, subsequent creation of import requests will be rejected.")])]),e._v(" "),o("li",[o("p",[e._v("max_running_txn_num_per_db")]),e._v(" "),o("p",[e._v("The implication of this configuration is that the maximum number of running load jobs in each database (no distinction between import types, uniform counting). The default value is 100. When the current database is running more than the maximum number of imports, subsequent imports will not be executed. If the job is imported synchronously, the import will be rejected. If it is an asynchronous import job. The job will wait in the queue.")])])]),e._v(" "),o("h3",{attrs:{id:"be-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#be-configuration"}},[e._v("#")]),e._v(" BE configuration")]),e._v(" "),o("p",[e._v("The following configuration belongs to the BE system configuration, which can be modified by modifying the BE configuration file "),o("code",[e._v("be.conf")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("push_write_mbytes_per_sec")]),e._v(" "),o("p",[e._v("Writing speed limit for a single Tablet on BE. The default is 10, or 10MB/s. Usually the maximum write speed of BE to a single Tablet is between 10 and 30 MB/s, depending on Schema and the system. This parameter can be adjusted appropriately to control the import speed.")])]),e._v(" "),o("li",[o("p",[e._v("write_buffer_size")]),e._v(" "),o("p",[e._v("The imported data will be written to a memtable on BE, and the memtable will not be written back to disk until it reaches the threshold. The default size is 100MB. Too small threshold may result in a large number of small files on BE. This threshold can be increased appropriately to reduce the number of files. However, excessive thresholds can lead to RPC timeouts, as shown in the configuration instructions below.")])]),e._v(" "),o("li",[o("p",[e._v("tablet_writer_rpc_timeout_sec")]),e._v(" "),o("p",[e._v("During the import process, a Batch (1024 rows) RPC timeout is sent. Default 600 seconds. Because the RPC may involve multiple memtable writes, it may cause RPC timeouts, which can be adjusted appropriately to reduce timeout errors (such as "),o("code",[e._v("send batch fail")]),e._v("). At the same time, if the "),o("code",[e._v("write_buffer_size")]),e._v(" configuration is increased, this parameter needs to be adjusted appropriately.")])]),e._v(" "),o("li",[o("p",[e._v("streaming_load_rpc_max_alive_time_sec")]),e._v(" "),o("p",[e._v("During the import process, Doris opens a Writer for each Tablet to receive and write data. This parameter specifies Writer's waiting timeout time. If Writer does not receive any data at this time, Writer will be destroyed automatically. When the system processing speed is slow, Writer may not receive the next batch of data for a long time, resulting in import error: "),o("code",[e._v("Tablet Writer add batch with unknown id")]),e._v(". This configuration can be increased appropriately at this time. The default is 600 seconds.")])]),e._v(" "),o("li",[o("p",[e._v("load_process_max_memory_limit_bytes and load_process_max_memory_limit_percent")]),e._v(" "),o("p",[e._v("These two parameters limit the upper memory limit that can be used to load tasks on a single Backend. The maximum memory and maximum memory percentage are respectively. "),o("code",[e._v("load_process_max_memory_limit_percent")]),e._v(" defaults to 80%, which is 80% of the "),o("code",[e._v("mem_limit")]),e._v(" configuration. That is, if the physical memory is M, the default load memory limit is M * 80% * 80%.")])])]),e._v(" "),o("p",[o("code",[e._v("load_process_max_memory_limit_bytes")]),e._v(" defaults to 100GB. The system takes the smaller of the two parameters as the final Backend load memory usage limit.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("label_keep_max_second")]),e._v(" "),o("p",[e._v("The retention time of load job which is FINISHED or CANCELLED. The record of load job will be kept in Doris system for a period of time which is determined by this parameter. The default time of this parameter is 3 days. This parameter is common to all types of load job.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);