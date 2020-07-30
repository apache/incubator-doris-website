(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{567:function(e,t,a){"use strict";a.r(t);var s=a(43),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-user"}},[e._v("#")]),e._v(" CREATE USER")]),e._v(" "),a("p",[e._v("##Description")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("p",[e._v("CREATE USER user_identity [IDENTIFIED BY 'password'] [DEFAULT ROLE 'role_name']")]),e._v(" "),a("p",[e._v("user_identity:\n'user_name'@'host'")]),e._v(" "),a("p",[e._v("The CREATE USER command is used to create a Doris user. In Doris, a user_identity uniquely identifies a user. User_identity consists of two parts, user_name and host, where username is the user name. The host identifies the host address where the client connects. The host part can use% for fuzzy matching. If no host is specified, the default is'%', which means that the user can connect to Doris from any host.")]),e._v(" "),a("p",[e._v("The host part can also be specified as a domain with the grammar:'user_name'@['domain']. Even if surrounded by brackets, Doris will think of it as a domain and try to parse its IP address. At present, it only supports BNS analysis within Baidu.")]),e._v(" "),a("p",[e._v("If a role (ROLE) is specified, the permissions that the role has are automatically granted to the newly created user. If not specified, the user defaults to having no permissions. The specified ROLE must already exist.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[e._v("Create a passwordless user (without specifying host, it is equivalent to Jack @'%')")])]),e._v(" "),a("p",[e._v("CREATE USER 'jack';")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Create a password user that allows login from'172.10.1.10'")])]),e._v(" "),a("p",[e._v("CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("To avoid passing plaintext, use case 2 can also be created in the following way")])]),e._v(" "),a("p",[e._v("CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';")]),e._v(" "),a("p",[e._v("Later encrypted content can be obtained through PASSWORD (), for example:")]),e._v(" "),a("p",[e._v("SELECT PASSWORD('123456');")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Create a user who is allowed to log in from the'192.168'subnet and specify its role as example_role")])]),e._v(" "),a("p",[e._v("CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Create a user who is allowed to log in from the domain name'example_domain'.")])]),e._v(" "),a("p",[e._v("CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '12345';")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Create a user and specify a role")])]),e._v(" "),a("p",[e._v("CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';")]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("CREATE, USER")])])}),[],!1,null,null,null);t.default=r.exports}}]);