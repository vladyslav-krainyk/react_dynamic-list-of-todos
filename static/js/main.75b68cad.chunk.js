(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),n=c(4),l=c(2),r=c(3),o=c.n(r),i=c(1),d=(c(13),c(14),c(6)),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.todoId,a=e.onSelectTodo,s=e.onSelectUser;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.title,l=e.completed,r=e.userId;return Object(u.jsxs)("tr",{"data-cy":"todo",className:"has-background-info-white",children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered",children:l&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()(l?"has-text-success":"has-text-danger"),children:n})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(t),s(r)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",t!==c?"fa-eye":"fa-eye-slash")})})})})]},t)}))})]})},h=function(e){var t=e.query,c=e.filterType,a=e.onClear,s=e.onChange,n=e.onChangeFilterType;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){n(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:s,value:t}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){a()}})})]})]})},m=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x,f=function(e){return O("/users/".concat(e))},p=function(e){var t=e.todos,c=e.userId,a=e.todoId,s=e.onSelectTodo,r=e.onSelectUser,d=Object(i.useState)(null),j=Object(l.a)(d,2),b=j[0],h=j[1];Object(i.useEffect)((function(){var e=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(c);case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var O=t.filter((function(e){return e.id===a}))[0];return Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),b?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(0),r(0)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:O.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[O.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(b.email),children:b.name})]})]})]}):Object(u.jsx)(m,{})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(x||(x={}));var v=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(!1),r=Object(l.a)(s,2),d=r[0],j=r[1],f=Object(i.useState)(x.All),v=Object(l.a)(f,2),N=v[0],y=v[1],g=Object(i.useState)(!1),S=Object(l.a)(g,2),C=S[0],k=S[1],w=Object(i.useState)(""),T=Object(l.a)(w,2),I=T[0],A=T[1],_=Object(i.useState)(0),E=Object(l.a)(_,2),F=E[0],L=E[1],U=Object(i.useState)(0),B=Object(l.a)(U,2),P=B[0],q=B[1];Object(i.useEffect)((function(){var e=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,O("/todos");case 4:t=e.sent,a(t),k(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),j(!0),k(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var J=function(e){L(e)},D=function(e){q(e)},M=Object(i.useMemo)((function(){return c.filter((function(e){var t=e.title,a=e.completed,s=t.toLowerCase(),n=I.toLowerCase();switch(N){case x.All:return s.includes(n);case x.Completed:return a&&s.includes(n);case x.Active:return!a&&s.includes(n);default:return c}}))}),[c,N,I]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{filterType:N,query:I,onClear:function(){A("")},onChange:function(e){A(e.target.value)},onChangeFilterType:function(e){y(e)}})}),Object(u.jsxs)("div",{className:"block",children:[C?Object(u.jsx)(m,{}):Object(u.jsx)(b,{todos:M,todoId:F,onSelectTodo:J,onSelectUser:D}),d&&Object(u.jsx)("div",{className:"error",style:{color:"red",textAlign:"center"},children:"Failed to fetch data. Please try again later."})]})]})})}),F>0&&Object(u.jsx)(p,{todos:c,userId:P,todoId:F,onSelectTodo:J,onSelectUser:D})]})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.75b68cad.chunk.js.map