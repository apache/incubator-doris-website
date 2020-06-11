(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{423:function(e,t,s){"use strict";s.r(t);var a=s(43),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"multi-tenancy-exprimental"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-tenancy-exprimental"}},[e._v("#")]),e._v(" Multi-tenancy(Exprimental)")]),e._v(" "),s("p",[e._v("This function is experimental and is not recommended for use in production environment.")]),e._v(" "),s("h2",{attrs:{id:"background"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),s("p",[e._v("Doris, as a PB-level online report and multi-dimensional analysis database, provides cloud-based database services through open cloud, and deploys a physical cluster for each client in the cloud. Internally, a physical cluster deploys multiple services, and separately builds clusters for services with high isolation requirements. In view of the above problems:")]),e._v(" "),s("ul",[s("li",[e._v("Deployment of multiple physical cluster maintenance costs a lot (upgrade, functionality on-line, bug repair).")]),e._v(" "),s("li",[e._v("A user's query or a bug caused by a query often affects other users.")]),e._v(" "),s("li",[e._v("In the actual production environment, only one BE process can be deployed on a single machine. Multiple BEs can better solve the problem of fat nodes. And for join, aggregation operations can provide higher concurrency.")])]),e._v(" "),s("p",[e._v("Together with the above three points, Doris needs a new multi-tenant scheme, which not only can achieve better resource isolation and fault isolation, but also can reduce the cost of maintenance to meet the needs of common and private clouds.")]),e._v(" "),s("h2",{attrs:{id:"design-principles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-principles"}},[e._v("#")]),e._v(" Design Principles")]),e._v(" "),s("ul",[s("li",[e._v("Easy to use")]),e._v(" "),s("li",[e._v("Low Development Cost")]),e._v(" "),s("li",[e._v("Convenient migration of existing clusters")])]),e._v(" "),s("h2",{attrs:{id:"noun-interpretation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),s("ul",[s("li",[e._v("FE: Frontend, the module for metadata management or query planning in Doris.")]),e._v(" "),s("li",[e._v("BE: Backend, the module used to store and query data in Doris.")]),e._v(" "),s("li",[e._v("Master: A role for FE. A Doris cluster has only one Master and the other FE is Observer or Follower.")]),e._v(" "),s("li",[e._v("instance: A BE process is an instance in time.")]),e._v(" "),s("li",[e._v("host: a single physical machine")]),e._v(" "),s("li",[e._v("Cluster: A cluster consisting of multiple instances.")]),e._v(" "),s("li",[e._v("Tenant: A cluster belongs to a tenant. Cluster is a one-to-one relationship with tenants.")]),e._v(" "),s("li",[e._v("database: A user-created database")])]),e._v(" "),s("h2",{attrs:{id:"main-ideas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-ideas"}},[e._v("#")]),e._v(" Main Ideas")]),e._v(" "),s("ul",[s("li",[e._v("Deploy instances of multiple BEs on a host to isolate resources at the process level.")]),e._v(" "),s("li",[e._v("Multiple instances form a cluster, and a cluster is assigned to a business-independent tenant.")]),e._v(" "),s("li",[e._v("FE adds cluster level and is responsible for cluster management.")]),e._v(" "),s("li",[e._v("CPU, IO, memory and other resources are segregated by cgroup.")])]),e._v(" "),s("h2",{attrs:{id:"design-scheme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-scheme"}},[e._v("#")]),e._v(" Design scheme")]),e._v(" "),s("p",[e._v("In order to achieve isolation, the concept of "),s("strong",[e._v("virtual cluster")]),e._v(" is introduced.")]),e._v(" "),s("ol",[s("li",[e._v("Cluster represents a virtual cluster consisting of instances of multiple BEs. Multiple clusters share FE.")]),e._v(" "),s("li",[e._v("Multiple instances can be started on a host. When a cluster is created, an arbitrary number of instances are selected to form a cluster.")]),e._v(" "),s("li",[e._v("While creating a cluster, an account named superuser is created, which belongs to the cluster. Super user can manage clusters, create databases, assign privileges, and so on.")]),e._v(" "),s("li",[e._v("After Doris starts, the sink creates a default cluster: default_cluster. If the user does not want to use the function of multi-cluster, the default cluster is provided and other operational details of multi-cluster are hidden.")])]),e._v(" "),s("p",[e._v("The concrete structure is as follows:\n"),s("img",{attrs:{src:e.$withBase("/images/multi_tenant_arch.png"),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"sql-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-interface"}},[e._v("#")]),e._v(" SQL interface")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Login")]),e._v(" "),s("p",[e._v("Default cluster login name: user_name@default_cluster or user_name")]),e._v(" "),s("p",[e._v("Custom cluster login name: user_name@cluster_name")]),e._v(" "),s("p",[s("code",[e._v("mysqlclient -h host -P port -u user_name@cluster_name -p password")])])]),e._v(" "),s("li",[s("p",[e._v("Add, delete, decommission and cancel BE")]),e._v(" "),s("p",[s("code",[e._v('ALTER SYSTEM ADD BACKEND "host:port"')]),e._v(" "),s("code",[e._v('ALTER SYSTEM DROP BACKEND "host:port"')]),e._v(" "),s("code",[e._v('ALTER SYSTEM DECOMMISSION BACKEND "host:port"')]),e._v(" "),s("code",[e._v('CANCEL DECOMMISSION BACKEND "host:port"')])]),e._v(" "),s("p",[e._v("It is strongly recommended to use DECOMMISSION instead of DROP to delete BACKEND. The DECOMMISSION operation will first need to copy data from the offline node to other instances in the cluster. After that, they will be offline.")])]),e._v(" "),s("li",[s("p",[e._v("Create a cluster and specify the password for the superuser account")]),e._v(" "),s("p",[s("code",[e._v('CREATE CLUSTER cluster_name PROPERTIES ("instance_num" = "10") identified by "password"')])])]),e._v(" "),s("li",[s("p",[e._v("Enter a cluster")]),e._v(" "),s("p",[s("code",[e._v("ENTER cluster name")])])]),e._v(" "),s("li",[s("p",[e._v("Cluster Expansion and Shrinkage")]),e._v(" "),s("p",[s("code",[e._v('ALTER CLUSTER cluster_name PROPERTIES ("instance_num" = "10")')])]),e._v(" "),s("p",[e._v("When the number of instances specified is more than the number of existing be in cluster, it is expanded and if less than it is condensed.")])]),e._v(" "),s("li",[s("p",[e._v("Link, migrate DB")]),e._v(" "),s("p",[s("code",[e._v("LINK DATABASE src_cluster_name.db_name dest_cluster_name.db_name")])]),e._v(" "),s("p",[e._v("Soft-chain dB of one cluster to dB of another cluster can be used by users who need temporary access to dB of other clusters but do not need actual data migration.")]),e._v(" "),s("p",[s("code",[e._v("MIGRATE DATABASE src_cluster_name.db_name dest_cluster_name.db_name")])]),e._v(" "),s("p",[e._v("If you need to migrate dB across clusters, after linking, migrate the actual migration of data.")]),e._v(" "),s("p",[e._v("Migration does not affect the query, import and other operations of the current two dbs. This is an asynchronous operation. You can see the progress of migration through "),s("code",[e._v("SHOW MIGRATIONS")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Delete clusters")]),e._v(" "),s("p",[s("code",[e._v("DROP CLUSTER cluster_name")])]),e._v(" "),s("p",[e._v("Deleting a cluster requires that all databases in the cluster be deleted manually first.")])]),e._v(" "),s("li",[s("p",[e._v("Others")]),e._v(" "),s("p",[s("code",[e._v("SHOW CLUSTERS")])]),e._v(" "),s("p",[e._v("Show clusters that have been created in the system. Only root users have this permission.")]),e._v(" "),s("p",[s("code",[e._v("SHOW BACKENDS")])]),e._v(" "),s("p",[e._v("View the BE instance in the cluster.")]),e._v(" "),s("p",[s("code",[e._v("SHOW MIGRATIONS")])]),e._v(" "),s("p",[e._v("Show current DB migration tasks. After the migration of DB is completed, you can view the progress of the migration through this command.")])])]),e._v(" "),s("h2",{attrs:{id:"detailed-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed design")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Namespace isolation")]),e._v(" "),s("p",[e._v("In order to introduce multi-tenant, the namespaces between clusters in the system need to be isolated.")]),e._v(" "),s("p",[e._v("Doris's existing metadata is image + Journal (metadata is designed in related documents). Doris records operations involving metadata as a journal, and then regularly writes images in the form of "),s("strong",[e._v("Fig. 1")]),e._v(" and reads them in the order in which they are written when loaded. But this brings a problem that the format that has been written is not easy to modify. For example, the metadata format for recording data distribution is: database + table + tablet + replica nesting. If we want to isolate the namespace between clusters in the past way, we need to add a layer of cluster on the database and the level of internal metadata. Change to cluster + database + table + tablet + replica, as shown in "),s("strong",[e._v("Figure 2")]),e._v(". But the problems brought about by adding one layer are as follows:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("The change of metadata brought by adding one layer is incompatible. It needs to be written in cluster+db+table+tablet+replica level in the way of Figure 2. This changes the way of metadata organization in the past. The upgrading of the old version will be more troublesome. The ideal way is to write cluster in the order of Figure 3 in the form of existing metadata. Metadata.")])]),e._v(" "),s("li",[s("p",[e._v("All the DB and user used in the code need to add a layer of cluster. There are many workload changes and deep levels. Most of the code acquires db. The existing functions almost need to be changed, and a layer of cluster locks need to be nested on the basis of DB locks.")])])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/palo_meta.png"),alt:""}}),e._v(" "),s("p",[e._v("To sum up, we adopt a prefix to DB and user names to isolate the internal problems caused by the conflict of DB and user names between clusters.")]),e._v(" "),s("p",[e._v("As follows, all SQL input involves db name and user name, and all SQL input needs to spell the full name of DB and user according to their cluster.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/cluster_namaspace.png"),alt:""}}),e._v(" "),s("p",[e._v("In this way, the above two problems no longer exist. Metadata is also organized in a relatively simple way. That is to say, use ** Figure 3 ** to record db, user and nodes belonging to their own cluster.")])]),e._v(" "),s("li",[s("p",[e._v("BE 节点管理")]),e._v(" "),s("p",[e._v("Each cluster has its own set of instances, which can be viewed through "),s("code",[e._v("SHOW BACKENDS")]),e._v(". In order to distinguish which cluster the instance belongs to and how it is used, BE introduces several states:")]),e._v(" "),s("ul",[s("li",[e._v("Free: When a BE node is added to the system, be is idle when it does not belong to any cluster.")]),e._v(" "),s("li",[e._v("Use: When creating a cluster or expanding capacity is selected into a cluster, it is in use.")]),e._v(" "),s("li",[e._v("Cluster decommission: If a shrinkage is performed, the be that is executing the shrinkage is in this state. After that, the be state becomes free.")]),e._v(" "),s("li",[e._v("System decommission: be is offline. When the offline is completed, the be will be permanently deleted.")])]),e._v(" "),s("p",[e._v("Only root users can check whether all be in the cluster is used through the cluster item in "),s("code",[e._v('SHOW PROC "/backends"')]),e._v(". To be free is to be idle, otherwise to be in use. "),s("code",[e._v("SHOW BACKENDS")]),e._v("can only see the nodes in the cluster. The following is a schematic diagram of the state changes of be nodes.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/backend_state.png"),alt:""}})]),e._v(" "),s("li",[s("p",[e._v("Creating Clusters")]),e._v(" "),s("p",[e._v("Only root users can create a cluster and specify any number of BE instances.")]),e._v(" "),s("p",[e._v("Supports selecting multiple instances on the same machine. The general principle of selecting instance is to select be on different machines as much as possible and to make the number of be used on all machines as uniform as possible.")]),e._v(" "),s("p",[e._v("For use, each user and DB belongs to a cluster (except root). To create user and db, you first need to enter a cluster. When a cluster is created, the system defaults to the manager of the cluster, the superuser account. Supuser has the right to create db, user, and view the number of be nodes in the cluster to which it belongs. All non-root user logins must specify a cluster, namely "),s("code",[e._v("user_name@cluster_name")]),e._v(".")]),e._v(" "),s("p",[e._v("Only root users can view all clusters in the system through `SHOW CLUSTER', and can enter different clusters through @ different cluster names. User clusters are invisible except root.")]),e._v(" "),s("p",[e._v("In order to be compatible with the old version of Doris, a cluster named default_cluster was built in, which could not be used when creating the cluster.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/user_authority.png"),alt:""}})]),e._v(" "),s("li",[s("p",[e._v("Cluster Expansion")]),e._v(" "),s("p",[e._v("The process of cluster expansion is the same as that of cluster creation. BE instance on hosts that are not outside the cluster is preferred. The selected principles are the same as creating clusters.")])]),e._v(" "),s("li",[s("p",[e._v("集群缩容、CLUSTER DECOMMISSION")]),e._v(" "),s("p",[e._v("Users can scale clusters by setting instance num of clusters.")]),e._v(" "),s("p",[e._v("Cluster shrinkage takes precedence over downlining instances on hosts with the largest number of BE instances.")]),e._v(" "),s("p",[e._v("Users can also directly use "),s("code",[e._v("ALTER CLUSTER DECOMMISSION BACKEND")]),e._v(" to specify BE for cluster scaling.")])])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/replica_recover.png"),alt:""}}),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[s("p",[e._v("Create table")]),e._v(" "),s("p",[e._v("To ensure high availability, each fragmented copy must be on a different machine. So when building a table, the strategy of choosing the be where the replica is located is to randomly select a be on each host. Then, the number of be copies needed is randomly selected from these be. On the whole, it can distribute patches evenly on each machine.")]),e._v(" "),s("p",[e._v("Therefore, adding a fragment that needs to create a 3-copy fragment, even if the cluster contains three or more instances, but only two or less hosts, still cannot create the fragment.")])]),e._v(" "),s("li",[s("p",[e._v("Load Balancing")]),e._v(" "),s("p",[e._v("The granularity of load balancing is cluster level, and there is no load balancing between clusters. However, the computing load is carried out at the host level, and there may be BE instances of different clusters on a host. In the cluster, the load is calculated by the number of fragments on each host and the utilization of storage, and then the fragments on the machine with high load are copied to the machine with low load (see the load balancing documents for details).")])]),e._v(" "),s("li",[s("p",[e._v("LINK DATABASE (Soft Chain)")]),e._v(" "),s("p",[e._v("Multiple clusters can access each other's data through a soft chain. The link level is dB for different clusters.")]),e._v(" "),s("p",[e._v("DB in other clusters is accessed by adding DB information of other clusters that need to be accessed in one cluster.")]),e._v(" "),s("p",[e._v("When querying the linked db, the computing and storage resources used are those of the cluster where the source DB is located.")]),e._v(" "),s("p",[e._v("DB that is soft-chained cannot be deleted in the source cluster. Only when the linked DB is deleted can the source DB be deleted. Deleting link DB will not delete source db.")])]),e._v(" "),s("li",[s("p",[e._v("MIGRATE DATABASE")]),e._v(" "),s("p",[e._v("DB can be physically migrated between clusters.")]),e._v(" "),s("p",[e._v("To migrate db, you must first link db. After migration, the data will migrate to the cluster where the linked DB is located, and after migration, the source DB will be deleted and the link will be disconnected.")]),e._v(" "),s("p",[e._v("Data migration reuses the process of replicating data in load balancing and replica recovery (see load balancing related documents for details). Specifically, after executing the "),s("code",[e._v("MIRAGTE")]),e._v(" command, Doris will modify the cluster of all copies of the source DB to the destination cluster in the metadata.")]),e._v(" "),s("p",[e._v("Doris regularly checks whether machines in the cluster are balanced, replicas are complete, and redundant replicas are available. The migration of DB borrows this process, checking whether the be where the replica is located belongs to the cluster while checking the replica is complete, and if not, it is recorded in the replica to be restored. And when the duplicate is redundant to be deleted, it will first delete the duplicate outside the cluster, and then choose according to the existing strategy: the duplicate of the downtime be -> the duplicate of clone -> the duplicate of the backward version - > the duplicate on the host with high load, until the duplicate is not redundant.")])])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/cluster_link_and_migrate_db.png"),alt:""}}),e._v(" "),s("ol",{attrs:{start:"10"}},[s("li",[s("p",[e._v("BE process isolation")]),e._v(" "),s("p",[e._v("In order to isolate the actual cpu, IO and memory between be processes, we need to rely on the deployment of be. When deploying, you need to configure the CGroup on the periphery and write all the processes of be to be deployed to the cgroup. If the physical isolation of IO between the data storage paths of each be configuration requires different disks, there is no much introduction here.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);