(this.webpackJsonpleedscarajo=this.webpackJsonpleedscarajo||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),l=t(11),r=t.n(l),u=(t(74),t(14)),d=t(12),m=(t(99),t(5)),c=t(13),h=t(124),y=t(125),i=Object(d.atom)({key:"positions",default:null}),w=function(){var e=Object(d.useRecoilValue)(i),a=Object(o.useState)({property:"points",direction:"desc"}),t=Object(c.a)(a,2),l=t[0],r=t[1];return e?n.a.createElement(h.a,{primaryKey:"index",sort:l,onSort:r,columns:[{property:"position",header:n.a.createElement(y.a,null,"Position")},{property:"team.name",header:n.a.createElement(y.a,null,"Team")},{property:"playedGames",header:n.a.createElement(y.a,null,"G")},{property:"won",header:n.a.createElement(y.a,null,"W")},{property:"draw",header:n.a.createElement(y.a,null,"D")},{property:"lost",header:n.a.createElement(y.a,null,"L")},{property:"goalDifference",header:n.a.createElement(y.a,null,"GD")},{property:"points",header:n.a.createElement(y.a,null,"P")}],data:e.standings[0].table}):n.a.createElement("div",null,"Loading...")},s=t(60),J=t(32),K=function(){return n.a.createElement(h.a,{primaryKey:"index",columns:[{property:"home",header:n.a.createElement(y.a,null,"Home"),render:function(e){var a=e.home;return J[a]}},{property:"away",header:n.a.createElement(y.a,null,"Away"),render:function(e){var a=e.away;return J[a]}},{property:"date",header:n.a.createElement(y.a,null,"Date"),render:function(e){var a=e.date;return n.a.createElement(y.a,null,a)}}],data:s})},U=t(21),p=t.n(U),S=t(66),f=t(61),E=function(){var e=Object(d.useRecoilState)(i),a=Object(c.a)(e,2),t=(a[0],a[1]),l=localStorage.getItem("lcDataTable"),r=function(e,a,t){var n=Object(o.useState)(null),l=Object(c.a)(n,2),r=l[0],u=l[1],d=Object(o.useState)(null),m=Object(c.a)(d,2),h=m[0],y=m[1],i=Object(o.useState)(!1),w=Object(c.a)(i,2),s=w[0],J=w[1];return Object(o.useEffect)((function(){t?(u(JSON.parse(t)),J(!1),y(!1)):function(){var t=Object(f.a)(p.a.mark((function t(){var o,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return J(!0),t.prev=1,t.next=4,fetch(e,Object(S.a)({method:"GET"},a));case 4:return o=t.sent,t.next=7,o.json();case 7:n=t.sent,u(n),J(!1),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),y(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}()()}),[]),{data:r,error:h,loading:s}}("".concat("https://api.football-data.org/v2/competitions/2016","/standings"),{headers:{"x-auth-token":"3f6c1f8c43724bef824da7eaa66d847a"}},l),u=r.loading,m=r.data,h=r.error;return h&&console.log("error:",h),Object(o.useEffect)((function(){if(!u&&m){var e=m;!l&&localStorage.setItem("lcDataTable",JSON.stringify(e)),t(e)}}),[m,u,l,t]),n.a.createElement("div",null,"Home")},T=function(){return n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"".concat("","/home")},n.a.createElement(E,null)),n.a.createElement(m.a,{path:"".concat("","/positions")},n.a.createElement(w,null)),n.a.createElement(m.a,{path:"".concat("","/fixture")},n.a.createElement(K,null)))},b=t(122),W=t(123),v=function(){return n.a.createElement(b.a,{pad:"medium"},n.a.createElement(W.a,{direction:"row"},n.a.createElement(u.b,{to:"/home"},"Home"),n.a.createElement(u.b,{to:"/positions"},"Positions"),n.a.createElement(u.b,{to:"/fixture"},"Fixture")))},g=t(62),O=t(63),j=t(64),C=t(65),B=function(e){Object(C.a)(t,e);var a=Object(j.a)(t);function t(e){var o;return Object(g.a)(this,t),(o=a.call(this,e)).state={hasError:!1},o}return Object(O.a)(t,[{key:"componentDidCatch",value:function(e,a){console.log(e)}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("h1",null,"Oops!"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(n.a.Component);var k=function(){return n.a.createElement(B,null,n.a.createElement("div",{className:"App"},n.a.createElement(d.RecoilRoot,null,n.a.createElement(u.a,null,n.a.createElement(v,null),n.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e){e.exports=JSON.parse('["Barnsley","Birmingham City","Blackburn Rovers","Brentford","Bristol City","Cardiff City","Charlton Athletic","Derby County","Fulham","Huddersfield Town","Hull City","Leeds United","Luton Town","Middlesbrough","Millwall","Nottingham Forest","Preston North End","Queens Park Rangers","Reading","Sheffield Wednesday","Stoke City","Swansea City","West Bromwich Albion","Wigan Athletic"]')},60:function(e){e.exports=JSON.parse('[{"home":4,"away":19,"date":"Sun Jun 28 2020 12:00 (UK)"},{"home":15,"away":9,"date":"Sun Jun 28 2020 14:15 (UK)"},{"home":14,"away":21,"date":"Tue Jun 30 2020 17:00 (UK)"},{"home":0,"away":2,"date":"Tue Jun 30 2020 18:00 (UK)"},{"home":5,"away":6,"date":"Tue Jun 30 2020 18:00 (UK)"},{"home":18,"away":3,"date":"Tue Jun 30 2020 18:00 (UK)"},{"home":17,"away":8,"date":"Tue Jun 30 2020 18:30 (UK)"},{"home":11,"away":12,"date":"Tue Jun 30 2020 19:45 (UK)"},{"home":23,"away":20,"date":"Tue Jun 30 2020 19:45 (UK)"},{"home":16,"away":7,"date":"Wed Jul 01 2020 17:00 (UK)"},{"home":1,"away":9,"date":"Wed Jul 01 2020 18:00 (UK)"},{"home":15,"away":4,"date":"Wed Jul 01 2020 18:00 (UK)"},{"home":19,"away":22,"date":"Wed Jul 01 2020 19:45 (UK)"},{"home":10,"away":13,"date":"Thu Jul 02 2020 17:00 (UK)"},{"home":6,"away":14,"date":"Fri Jul 03 2020 20:15 (UK)"},{"home":7,"away":15,"date":"Sat Jul 04 2020 12:30 (UK)"},{"home":2,"away":11,"date":"Sat Jul 04 2020 15:00 (UK)"},{"home":3,"away":23,"date":"Sat Jul 04 2020 15:00 (UK)"},{"home":4,"away":5,"date":"Sat Jul 04 2020 15:00 (UK)"},{"home":8,"away":1,"date":"Sat Jul 04 2020 15:00 (UK)"},{"home":9,"away":16,"date":"Sat Jul 04 2020 15:00 (UK)"},{"home":12,"away":18,"date":"Sat Jul 04 2020 15:00 (UK)"},{"home":20,"away":0,"date":"Sat Jul 04 2020 15:00 (UK)"},{"home":21,"away":19,"date":"Sun Jul 05 2020 12:00 (UK)"},{"home":13,"away":17,"date":"Sun Jul 05 2020 15:00 (UK)"},{"home":22,"away":10,"date":"Sun Jul 05 2020 15:00 (UK)"},{"home":15,"away":8,"date":"Tue Jul 07 2020 17:00 (UK)"},{"home":3,"away":6,"date":"Tue Jul 07 2020 18:00 (UK)"},{"home":18,"away":9,"date":"Tue Jul 07 2020 18:00 (UK)"},{"home":5,"away":2,"date":"Tue Jul 07 2020 19:45 (UK)"},{"home":12,"away":0,"date":"Tue Jul 07 2020 19:45 (UK)"},{"home":14,"away":13,"date":"Wed Jul 08 2020 15:00 (UK)"},{"home":22,"away":7,"date":"Wed Jul 08 2020 17:00 (UK)"},{"home":1,"away":21,"date":"Wed Jul 08 2020 18:00 (UK)"},{"home":4,"away":10,"date":"Wed Jul 08 2020 18:00 (UK)"},{"home":23,"away":17,"date":"Wed Jul 08 2020 18:00 (UK)"},{"home":19,"away":16,"date":"Wed Jul 08 2020 19:45 (UK)"},{"home":11,"away":20,"date":"Thu Jul 09 2020 17:00 (UK)"},{"home":6,"away":18,"date":"Sat Jul 11 2020 12:30 (UK)"},{"home":0,"away":23,"date":"Sat Jul 11 2020 15:00 (UK)"},{"home":2,"away":22,"date":"Sat Jul 11 2020 15:00 (UK)"},{"home":7,"away":3,"date":"Sat Jul 11 2020 15:00 (UK)"},{"home":8,"away":5,"date":"Sat Jul 11 2020 15:00 (UK)"},{"home":9,"away":12,"date":"Sat Jul 11 2020 15:00 (UK)"},{"home":10,"away":14,"date":"Sat Jul 11 2020 15:00 (UK)"},{"home":13,"away":4,"date":"Sat Jul 11 2020 15:00 (UK)"},{"home":16,"away":15,"date":"Sat Jul 11 2020 15:00 (UK)"},{"home":17,"away":19,"date":"Sat Jul 11 2020 15:00 (UK)"},{"home":20,"away":1,"date":"Sun Jul 12 2020 15:00 (UK)"},{"home":21,"away":11,"date":"Sun Jul 12 2020 15:00 (UK)"},{"home":18,"away":13,"date":"Tue Jul 14 2020 18:00 (UK)"},{"home":23,"away":10,"date":"Tue Jul 14 2020 18:00 (UK)"},{"home":3,"away":16,"date":"Tue Jul 14 2020 19:45 (UK)"},{"home":5,"away":7,"date":"Tue Jul 14 2020 19:45 (UK)"},{"home":12,"away":17,"date":"Tue Jul 14 2020 19:45 (UK)"},{"home":14,"away":2,"date":"Tue Jul 14 2020 19:45 (UK)"},{"home":19,"away":9,"date":"Tue Jul 14 2020 19:45 (UK)"},{"home":22,"away":8,"date":"Tue Jul 14 2020 20:00 (UK)"},{"home":1,"away":6,"date":"Wed Jul 15 2020 18:00 (UK)"},{"home":15,"away":21,"date":"Wed Jul 15 2020 18:00 (UK)"},{"home":4,"away":20,"date":"Wed Jul 15 2020 19:45 (UK)"},{"home":11,"away":0,"date":"Wed Jul 15 2020 19:45 (UK)"},{"home":6,"away":23,"date":"Sat Jul 18 2020 12:30 (UK)"},{"home":0,"away":15,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":2,"away":18,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":7,"away":11,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":8,"away":19,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":9,"away":22,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":10,"away":12,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":13,"away":5,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":16,"away":1,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":17,"away":14,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":20,"away":3,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":21,"away":4,"date":"Sat Jul 18 2020 15:00 (UK)"},{"home":1,"away":7,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":3,"away":0,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":4,"away":16,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":5,"away":10,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":11,"away":6,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":12,"away":2,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":14,"away":9,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":15,"away":20,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":18,"away":21,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":19,"away":13,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":22,"away":17,"date":"Wed Jul 22 2020 (TBC) (UK)"},{"home":23,"away":8,"date":"Wed Jul 22 2020 (TBC) (UK)"}]')},69:function(e,a,t){e.exports=t(109)},74:function(e,a,t){},99:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.05bff2e5.chunk.js.map