(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,o=n(7),s=n.n(o),r=n(6),i=n(8),a=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),h=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.Length="length",t.Alphabet="alphabet",t.None=""}(c||(c={}));var g=function(){var t=Object(a.useState)(c.None),e=Object(r.a)(t,2),n=e[0],o=e[1],s=Object(a.useState)(!1),l=Object(r.a)(s,2),g=l[0],d=l[1],p=function(t,e,n){var o=Object(i.a)(t);switch(e){case c.Length:o.sort((function(t,e){return t.length-e.length}));break;case c.Alphabet:o.sort((function(t,e){return t.localeCompare(e)}))}return n&&o.reverse(),o}(j,n,g);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==c.Alphabet}),onClick:function(){return o(c.Alphabet)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==c.Length}),onClick:function(){return o(c.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!g}),onClick:function(){return d(!g)},children:"Reverse"}),(n||g)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){d(!1),o(c.None)},children:"Reset"})]}),Object(b.jsx)(h,{goods:p})]})};s.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0d1ddd33.chunk.js.map