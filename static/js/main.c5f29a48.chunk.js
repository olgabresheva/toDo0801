(this.webpackJsonpscr0801=this.webpackJsonpscr0801||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(18),c=a.n(l),r=(a(25),a(19)),i=a(2);a(5),a(7);var s=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),m=s[0],u=s[1],d=Object(n.useState)(!0),h=Object(i.a)(d,2),v=h[0],f=h[1];return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"exampleFormControlInput1"},o.a.createElement("strong",null,"Your To Do List")),o.a.createElement("br",null),o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",className:"form-control form-control-sm",value:l,placeholder:"Enter Task Name",onChange:function(e){return c(e.target.value)}})),o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",className:"form-control form-control-sm",value:m,placeholder:"Enter Task Description",onChange:function(e){u(e.target.value),m.length>2?f(!1):f(!0)}}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("button",{disabled:v,type:"submit",className:"btn btn-info btn-sm",onClick:function(t){e.onNewTaskAdd(l,m),c(""),u(""),t.preventDefault(),f(!0)}},"Add Task")))),o.a.createElement("span",null," "))},m=o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})),u=o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-check-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"})),d=o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"})),h=o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-chevron-down",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})),v=o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-chevron-up",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}));var f=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(e.item.name),s=Object(i.a)(r,2),f=s[0],E=s[1];return o.a.createElement("div",{className:"input-group"},l?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",className:"form-control form-control-sm",value:f,onChange:function(e){return E(e.target.value)}}),o.a.createElement("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(){e.taskEditSave(e.item._id,f),c(!1)}},"Save")):o.a.createElement("span",{className:e.item.done?"done form-control form-control-sm":"form-control form-control-sm",onDoubleClick:function(){return c(!0)}},e.item.name),o.a.createElement("div",{className:"input-group-append",id:"button-addon"},o.a.createElement("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return e.onStatusChange(e.item._id,e.item.done)}},e.item.done?u:d),o.a.createElement("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return e.onTaskDelete(e.item._id)}},m),o.a.createElement("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return e.onTaskMove(e.item._id,"up")}},v),o.a.createElement("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return e.onTaskMove(e.item._id,"down")}},h)))};var E=function(e){return o.a.createElement("div",{className:"ToDoList"},o.a.createElement("ul",{className:"list-unstyled"},e.list.map((function(t){return o.a.createElement("li",{key:t._id},o.a.createElement(f,{item:t,onTaskDelete:e.onTaskDelete,onStatusChange:e.onStatusChange,onTaskEditSave:e.onTaskEditSave,taskEditSave:e.taskEditSave,onTaskMove:e.onTaskMove}))}))))},b=(a(26),a(3)),p=a.n(b);var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=function(){p()({url:"http://localhost:5000/todo",method:"GET"}).then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){c()}),[]),o.a.createElement("div",{className:"container"},o.a.createElement(s,{onNewTaskAdd:function(e,t){p()({url:"http://localhost:5000/todo/",method:"POST",data:{name:e,description:t}}).then((function(e){c()})).catch((function(e){return console.log(e)}))}}),o.a.createElement("hr",null),o.a.createElement(E,{list:a,onTaskDelete:function(e){p()({url:"http://localhost:5000/todo/".concat(e),method:"DELETE"}).then((function(e){c()})).catch((function(e){return console.log(e)}))},onStatusChange:function(e,t){p()({url:"http://localhost:5000/todo/".concat(e),method:"PUT",data:{done:!t}}).then((function(e){c()})).catch((function(e){return console.log(e)}))},taskEditSave:function(e,t){p()({url:"http://localhost:5000/todo/".concat(e),method:"PATCH",data:{name:t}}).then((function(e){c()})).catch((function(e){return e.target.value}))},onTaskMove:function(e,t){var n,o=a.findIndex((function(t){return t.id===e}));n=Object(r.a)(a),"up"===t&&0!==o&&n.splice(o-1,0,n.splice(o,1)[0]),"down"===t&&n.splice(o+1,0,n.splice(o,1)[0]),l(n)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.c5f29a48.chunk.js.map