(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{504:function(e,t,r){"use strict";r.r(t);var o=r(43),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"compilation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compilation"}},[e._v("#")]),e._v(" Compilation")]),e._v(" "),r("p",[e._v("This document focuses on how to code Doris through source code.")]),e._v(" "),r("h2",{attrs:{id:"developing-mirror-compilation-using-docker-recommended"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#developing-mirror-compilation-using-docker-recommended"}},[e._v("#")]),e._v(" Developing mirror compilation using Docker (recommended)")]),e._v(" "),r("h3",{attrs:{id:"use-off-the-shelf-mirrors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-off-the-shelf-mirrors"}},[e._v("#")]),e._v(" Use off-the-shelf mirrors")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Download Docker Mirror")]),e._v(" "),r("p",[r("code",[e._v("$ docker pull apachedoris/doris-dev:build-env")])]),e._v(" "),r("p",[e._v("Check mirror download completed:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ docker images\nREPOSITORY              TAG                 IMAGE ID            CREATED             SIZE\napachedoris/doris-dev   build-env           f8bc5d4024e0        21 hours ago        3.28GB\n")])])])])]),e._v(" "),r("p",[e._v("Note: For different versions of Oris, you need to download the corresponding mirror version.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("image version")]),e._v(" "),r("th",[e._v("commit id")]),e._v(" "),r("th",[e._v("release version")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("apachedoris/doris-dev:build-env")]),e._v(" "),r("td",[e._v("before "),r("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("0.8.x, 0.9.x")])]),e._v(" "),r("tr",[r("td",[e._v("apachedoris/doris-dev:build-env-1.1")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),r("OutboundLink")],1),e._v(" or later")]),e._v(" "),r("td",[e._v("0.10.x or later")])])])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("Running Mirror")]),e._v(" "),r("p",[r("code",[e._v("$ docker run -it apachedoris/doris-dev:build-env")])]),e._v(" "),r("p",[e._v("It is recommended to run the container by mounting the local Doris source directory, so that the compiled binary file will be stored in the host machine and will not disappear because the container exits.")]),e._v(" "),r("p",[e._v("At the same time, it is recommended to mount the maven "),r("code",[e._v(".m2")]),e._v(" directory in the mirror to the host directory at the same time to prevent repeated downloading of maven's dependent libraries each time the compilation is started.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ docker run -it -v /your/local/.m2:/root/.m2 -v /your/local/incubator-doris-DORIS-x.x.x-release/:/root/incubator-doris-DORIS-x.x.x-release/ apachedoris/doris-dev:build-env\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Download source code")]),e._v(" "),r("p",[e._v("After starting the mirror, you should be in the container. The Doris source code can be downloaded from the following command (local source directory mounted is not required):")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/xxx.tar.gz\nor\n$ git clone https://github.com/apache/incubator-doris.git\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Compile Doris")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ sh build.sh\n")])])]),r("p",[e._v("After compilation, the output file is in the "),r("code",[e._v("output/")]),e._v(" directory.")])])]),e._v(" "),r("h3",{attrs:{id:"self-compiling-development-environment-mirror"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#self-compiling-development-environment-mirror"}},[e._v("#")]),e._v(" Self-compiling Development Environment Mirror")]),e._v(" "),r("p",[e._v("You can also create a Doris development environment mirror yourself, referring specifically to the `docker/README.md'file.")]),e._v(" "),r("h2",{attrs:{id:"direct-compilation-centos-ubuntu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#direct-compilation-centos-ubuntu"}},[e._v("#")]),e._v(" Direct Compilation (CentOS/Ubuntu)")]),e._v(" "),r("p",[e._v("You can try to compile Doris directly in your own Linux environment.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("System Dependence")]),e._v(" "),r("p",[r("code",[e._v("GCC 5.3.1+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.11+")])]),e._v(" "),r("p",[e._v("If you are using Ubuntu 16.04 or newer, you can use the following command to install the dependencies")]),e._v(" "),r("p",[r("code",[e._v("sudo apt-get install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev")])]),e._v(" "),r("p",[e._v("After installation, set environment variables "),r("code",[e._v("PATH")]),e._v(", "),r("code",[e._v("JAVA_HOME")]),e._v(", etc.")])]),e._v(" "),r("li",[r("p",[e._v("Compile Doris")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ sh build.sh\n")])])]),r("p",[e._v("After compilation, the output file is in the "),r("code",[e._v("output/")]),e._v(" directory.")])])]),e._v(" "),r("h2",{attrs:{id:"special-statement"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#special-statement"}},[e._v("#")]),e._v(" Special statement")]),e._v(" "),r("p",[e._v("Starting from version 0.13, the dependency on the two third-party libraries [1] and [2] will be removed in the default compiled output. These two third-party libraries are under "),r("a",{attrs:{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU General Public License V3"),r("OutboundLink")],1),e._v(". This license is incompatible with "),r("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache License 2.0"),r("OutboundLink")],1),e._v(", so it should not appear in the Apache release by default.")]),e._v(" "),r("p",[e._v("Remove library [1] will result in the inability to access MySQL external tables. The feature of accessing MySQL external tables will be implemented through "),r("code",[e._v("UnixODBC")]),e._v(" in future release version.")]),e._v(" "),r("p",[e._v("Remove library [2] will cause some data written in earlier versions (before version 0.8) to be unable to read. Because the data in the earlier version was compressed using the LZO algorithm, in later versions, it has been changed to the LZ4 compression algorithm. We will provide tools to detect and convert this part of the data in the future.")]),e._v(" "),r("p",[e._v("If required, users can continue to use these two dependent libraries. If you want to use it, you need to add the following options when compiling:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("WITH_MYSQL=1 WITH_LZO=1 sh build.sh\n")])])]),r("p",[e._v("Note that when users rely on these two third-party libraries, Doris is not used under the Apache License 2.0 by default. Please pay attention to the GPL related agreements.")]),e._v(" "),r("ul",[r("li",[e._v("[1] mysql-5.7.18")]),e._v(" "),r("li",[e._v("[2] lzo-2.10")])])])}),[],!1,null,null,null);t.default=i.exports}}]);