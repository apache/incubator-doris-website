(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{308:function(t,e,n){},340:function(t,e,n){"use strict";var o={},s=(n(346),n(43)),a=Object(s.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-wrapper"},[e("br"),this._v(" "),e("span",{staticClass:"footer-text"},[this._v("© Copyright 2020, Apache Doris(Incubating)")]),this._v(" "),e("br"),this._v(" "),e("span",{staticClass:"footer-text"},[this._v("\n  Apache Doris(incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.")])])}],!1,null,null,null);e.a=a.exports},346:function(t,e,n){"use strict";var o=n(308);n.n(o).a},390:function(t,e,n){"use strict";var o=n(391),s=n(340),a={components:{ParentLayout:o.a,CustomFooter:s.a}},i=n(43),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ParentLayout"),this._v(" "),e("footer",[e("CustomFooter")],1)],1)}),[],!1,null,null,null);e.a=r.exports},395:function(t,e,n){"use strict";n.r(e);n(168),n(95),n(93),n(44),n(65),n(96);var o=n(389),s=n(340),a=n(371),i=n.n(a),r={components:{ParentLayout:o.a,CustomFooter:s.a},data:function(){return{renderIndex:0}},mounted:function(){var t=this;i.a.get("/versions.json").then((function(e){Object.keys(t.$site.themeConfig.locales).forEach((function(n){t.$site.themeConfig.locales[n].nav=t.$site.themeConfig.locales[n].nav.concat(e.data[n.replace(/\//gi,"")]||[])})),t.renderIndex=1})).catch((function(e){t.renderIndex=1,console.log(e)}))}},c=n(43),u=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("ParentLayout",{key:this.renderIndex},[e("Content"),this._v(" "),e("footer",{attrs:{slot:"page-bottom"},slot:"page-bottom"},[e("CustomFooter")],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);