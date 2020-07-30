(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{447:function(t,e,a){"use strict";a.r(e);var o=a(43),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"format-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format-code"}},[t._v("#")]),t._v(" Format Code")]),t._v(" "),a("p",[t._v("To automatically format the code, clang-format is a good choice.")]),t._v(" "),a("h2",{attrs:{id:"code-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-style"}},[t._v("#")]),t._v(" Code Style")]),t._v(" "),a("p",[t._v("Doris Code Style is based on Google's, makes a few changes. The customized .clang-format\nfile is in the root dir of Doris.\nNow, .clang-format file only works on clang-format-8.0.1+.")]),t._v(" "),a("h2",{attrs:{id:"preparing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing"}},[t._v("#")]),t._v(" Preparing")]),t._v(" "),a("p",[t._v("You should install clang-format, or you can use clang-format plugins which support by IDEs or Editors.")]),t._v(" "),a("h3",{attrs:{id:"install-clang-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-clang-format"}},[t._v("#")]),t._v(" Install clang-format")]),t._v(" "),a("p",[t._v("Ubuntu: "),a("code",[t._v("apt-get install clang-format")])]),t._v(" "),a("p",[t._v("Mac: "),a("code",[t._v("brew install clang-format")])]),t._v(" "),a("p",[t._v("The current release is 10.0, you can specify old version, e.g.")]),t._v(" "),a("p",[a("code",[t._v("apt-get install clang-format-9")])]),t._v(" "),a("p",[t._v("Centos 7:")]),t._v(" "),a("p",[t._v("The version of clang-format installed by yum is too old. Compiling clang from source\nis recommended.")]),t._v(" "),a("h3",{attrs:{id:"clang-format-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clang-format-plugins"}},[t._v("#")]),t._v(" Clang-format plugins")]),t._v(" "),a("p",[t._v('Clion IDE supports the plugin "ClangFormat", you can search in '),a("code",[t._v("File->Setting->Plugins")]),t._v("\nand download it.\nBut the version is not match with clang-format. Judging from the options supported,\nthe version is lower than clang-format-9.0.")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[t._v("#")]),t._v(" CMD")]),t._v(" "),a("p",[a("code",[t._v("clang-format --style=file -i $File$")])]),t._v(" "),a("p",[a("code",[t._v("-style=file")]),t._v(" Clang-format will try to find the .clang-format file located in the closest parent directory of the input file. When the standard input is used, the search is started from the current directory.")]),t._v(" "),a("p",[a("code",[t._v("--lines = m:n")]),t._v(" Format a range of lines. Multiple ranges can be formatted by specifying several -lines arguments.")]),t._v(" "),a("p",[a("code",[t._v("-i")]),t._v("input file")]),t._v(" "),a("p",[t._v("Note: filter out the files which should not be formatted, when batch clang-formating files.")]),t._v(" "),a("p",[t._v("A example of how to filter *.h/*.cpp and exclude some dirs:")]),t._v(" "),a("p",[t._v("Centos")]),t._v(" "),a("p",[a("code",[t._v('find . -type f -not \\( -wholename ./env/* \\) -regextype posix-egrep -regex ".*\\.(cpp|h)" | xargs clang-format -i -style=file')])]),t._v(" "),a("p",[t._v("Mac")]),t._v(" "),a("p",[a("code",[t._v('find -E . -type f -not \\( -wholename ./env/* \\) -regex ".*\\.(cpp|h)" | xargs clang-format -i --style=file')])]),t._v(" "),a("h3",{attrs:{id:"using-clang-format-in-ides-or-editors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-clang-format-in-ides-or-editors"}},[t._v("#")]),t._v(" Using clang-format in IDEs or Editors")]),t._v(" "),a("h4",{attrs:{id:"clion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clion"}},[t._v("#")]),t._v(" Clion")]),t._v(" "),a("p",[t._v("If using the plugin 'ClangFormat' in Clion, choose "),a("code",[t._v("Reformat Code")]),t._v(" or press the keyboard\nshortcut.")]),t._v(" "),a("h4",{attrs:{id:"vs-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[t._v("#")]),t._v(" VS Code")]),t._v(" "),a("p",[t._v("VS Code needs install the extension 'Clang-Format', and specify the executable path of\nclang-format in settings.")]),t._v(" "),a("p",[t._v("Open the vs code configuration page and search "),a("code",[t._v("clang_format")]),t._v(", fill the box as follows.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"clang_format_path":  "$clang-format path$",\n"clang_format_style": "file"\n')])])]),a("p",[t._v("Then, right click the file and choose "),a("code",[t._v("Format Document")]),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);