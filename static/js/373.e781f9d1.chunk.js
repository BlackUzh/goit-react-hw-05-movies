"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[373],{344:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,i,c,u=e(433),s=e(439),o=e(791),p=e(689),f=e(436),l=e.p+"static/media/photo.0965d49a941daab29f13.jpg",h=e(168),d=e(686),x=d.Z.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n  padding: 20px;\n"]))),g=d.Z.li(a||(a=(0,h.Z)(["\n  display: flex;\n  width: calc((100% - 60px) / 5);\n  min-width: 175px;\n  font-size: 14px;\n  background-color: #f2eee6;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),m=d.Z.div(i||(i=(0,h.Z)(["\n  padding: 10px;\n  font-style: italic;\n"]))),v=d.Z.p(c||(c=(0,h.Z)(["\n  font-weight: bold;\n  font-style: normal;\n"]))),Z=e(184);var w=function(){var n=(0,p.UO)().movieId,t=(0,o.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1];return(0,o.useEffect)((function(){n&&(0,f.nA)(n,"credits").then((function(n){var t=n.cast;a((0,u.Z)(t))})).catch((function(n){return console.log(n)}))}),[n]),(0,Z.jsx)("div",{children:(0,Z.jsx)(x,{children:r&&r.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return(0,Z.jsxs)(g,{children:[(0,Z.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w300"+e:l,width:"80",height:"120",alt:r}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)(v,{children:r}),a&&(0,Z.jsx)("p",{children:a})]})]},t)}))})})}},436:function(n,t,e){e.d(t,{WK:function(){return p},Y5:function(){return l},nA:function(){return d},wr:function(){return s}});var r=e(861),a=e(687),i=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmU5NzBhNDk0NzRlODhjOGRkMGE0NWZlMTRiNDNkNCIsInN1YiI6IjY0YTJiZmY3ODI4OWEwMDBhZTg4OTcyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RvEqmRylIgh2LAFsKUIxIJGb6d9l6sg-wNjsCyA7mFs"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/day?language=en-US",u);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&language=en-US"),u);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?language=en-US"),u);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/").concat(e,"?language=en-US"),u);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=373.e781f9d1.chunk.js.map