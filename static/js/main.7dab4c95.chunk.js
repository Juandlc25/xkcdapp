(this.webpackJsonpxkcd=this.webpackJsonpxkcd||[]).push([[0],{114:function(t,n,c){},115:function(t,n,c){"use strict";c.r(n);var e=c(2),a=c(0),i=c.n(a),o=c(15),r=c.n(o),s=(c(55),c(14)),u=(c(56),c(24)),l=c.n(u);c(73);var j=function(t){var n=t.comic;return Object(e.jsxs)("div",{className:"comic",children:[Object(e.jsx)("h2",{className:"comic__title",children:n.title}),Object(e.jsx)("img",{className:"comic__img",alt:"comicImg",src:n.img})]})},m=(c(74),c(130)),d=c(38),f=c.n(d),h=c(41),b=c.n(h),O=c(40),x=c.n(O),v=c(39),p=c.n(v);var g=function(t){var n=t.fetchComic,c=t.fetchLastestComic,a=t.fetchRandomComic,i=t.comic,o=t.lastestComic;return Object(e.jsxs)("div",{className:"btns",children:[Object(e.jsx)(m.a,{variant:"contained",color:"primary",disabled:1===i.num,onClick:function(){return n(1)},children:Object(e.jsx)(f.a,{})}),Object(e.jsxs)(m.a,{variant:"contained",color:"primary",disabled:i.num<=1,onClick:function(){i.num>1&&n(i.num-1)},children:[Object(e.jsx)(p.a,{})," Previous"]}),Object(e.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){return a()},children:"Random"}),Object(e.jsxs)(m.a,{variant:"contained",color:"primary",onClick:function(){return n(i.num+1)},disabled:i.num===o,children:["Next",Object(e.jsx)(x.a,{})]}),Object(e.jsx)(m.a,{variant:"contained",color:"primary",disabled:i.num===o,onClick:function(){return c()},children:Object(e.jsx)(b.a,{})})]})},C=c(42);var k=function(){return Object(e.jsx)("div",{children:Object(e.jsx)(C.CommonLoading,{})})},y=c(13),N=c(45);c(114);var S=function(){var t=Object(a.useState)(null),n=Object(s.a)(t,2),c=n[0],i=n[1];return Object(e.jsx)("div",{className:"starRaiting",children:Object(y.a)(Array(5)).map((function(t,n){var a=n+1;return Object(e.jsxs)("label",{children:[Object(e.jsx)("input",{type:"radio",name:"rating",value:a,onClick:function(){return i(a)}}),Object(e.jsx)(N.a,{className:"starRaiting__star",size:50,color:a<=c?"#fcc107":"#7B7B7B"})]})}))})};var _=function(){var t=Object(a.useState)(null),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(!0),r=Object(s.a)(o,2),u=r[0],m=r[1],d=Object(a.useState)(null),f=Object(s.a)(d,2),h=f[0],b=f[1],O=function(t){m(!0),l.a.get("https://cors-anywhere.herokuapp.com/https://xkcd.com/".concat(t,"/info.0.json")).then((function(t){return i(t.data)})).catch((function(t){return console.log("error: ",t)})).finally((function(){return m(!1)}))};return Object(a.useEffect)((function(){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;m(!0),l.a.get("https://cors-anywhere.herokuapp.com/https://xkcd.com/".concat(t,"/info.0.json")).then((function(t){return i(t.data)})).catch((function(t){return console.log("error: ",t)})).finally((function(){return m(!1)}))}()}),[]),u?Object(e.jsxs)("div",{children:[Object(e.jsx)(k,{})," "]}):Object(e.jsxs)("div",{className:"app",children:[Object(e.jsx)(j,{comic:c}),Object(e.jsx)(g,{comic:c,fetchComic:O,fetchLastestComic:function(){m(!0),l.a.get("https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json").then((function(t){i(t.data),b(t.data.num)})).catch((function(t){console.log(t)})).finally((function(){return m(!1)}))},fetchRandomComic:function(){var t=Math.floor(601*Math.random());O(t)},lastestComic:h}),Object(e.jsx)(S,{})]})},w=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(n){var c=n.getCLS,e=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;c(t),e(t),a(t),i(t),o(t)}))};r.a.render(Object(e.jsx)(i.a.StrictMode,{children:Object(e.jsx)(_,{})}),document.getElementById("root")),w()},55:function(t,n,c){},56:function(t,n,c){},73:function(t,n,c){},74:function(t,n,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.7dab4c95.chunk.js.map