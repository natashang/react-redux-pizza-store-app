(this["webpackJsonpredux-pizza-list-ver3"]=this["webpackJsonpredux-pizza-list-ver3"]||[]).push([[0],{33:function(e,a,t){e.exports=t(48)},38:function(e,a,t){},39:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=(t(38),t(39),t(40),t(16)),u=t(14),i=t(53),m=t(55),d=t(54),p=function(e,a){for(var t=0;t<e.length;t++)if(e[t].name===a)return e[t]},s=[{name:"Home",label:"Click here to begin",next:"/addcustomer",progress:0},{name:"Add Customer",prev:"/",next:"/addcrust",plabel:"Back",nlabel:"Next",progress:20},{name:"Add Crust",prev:"/addcustomer",next:"/addsauce",plabel:"Back",nlabel:"Next",progress:40},{name:"Add Sauce",label:"Next : Toppings --\x3e ",prev:"/addcrust",next:"/addToppings",plabel:"Back",nlabel:"Next",progress:60},{name:"Add Toppings",label:"Display My Order!",prev:"/addsauce",next:"/display",plabel:"Back",nlabel:"Next",progress:80},{name:"Display Order",label:"Done",prev:"/addtoppings",next:"/",plabel:"Back",nlabel:"Finish",progress:100}],E=function(){var e=p(s,"Home"),a=e.progress;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{animated:!0,now:a}),r.a.createElement("h1",null,"Pizza Delivery Shop"),r.a.createElement("p",null,"Welcome! Build your own pizza in seconds! We offer a wide selection of locally sourced ingredients. We also do delivery! "),r.a.createElement(o.b,{to:e.next},r.a.createElement(d.a,null,e.label)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"This project is hosted on GitHub Pages and is available for viewing."),r.a.createElement("a",{href:"https://github.com/natashang/react-redux-pizza-store-app"},"View code here"))},b=t(12),g=t(5),h=t(13),f=t(52),v=t(49),y=t(50),O=t(31),x={display:"flex",alignItems:"center",justifyContent:"center"},C=function(e){return r.a.createElement(v.a,{style:x},r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(o.b,{to:e.prev},r.a.createElement(d.a,null,e.plabel))),r.a.createElement(O.a,null,r.a.createElement(o.b,{to:e.next},r.a.createElement(d.a,{onClick:e.handleButtonClick},e.nlabel)))))},j=t(7);var _=Object(j.b)((function(e){return{_order:e.order}}),(function(e){return{addCustomer:function(a){return e(function(e){return{type:"ADD_CUSTOMER",payload:{name:e.name,email:e.email,phone:e.phone,address:e.address}}}(a))}}}))((function(e){var a=e.addCustomer,t=Object(n.useState)({name:"",email:"",phone:"",address:""}),l=Object(h.a)(t,2),c=l[0],o=l[1],u=p(s,"Add Customer"),i=u.progress,d=function(e){o(Object(g.a)({},c,Object(b.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(m.a,{animated:!0,now:i}),r.a.createElement("h1",null,"Enter customer information"),r.a.createElement(f.a,null,r.a.createElement(f.a.Label,null,"Name"),r.a.createElement(f.a.Control,{type:"text",name:"name",value:c.name,onChange:function(e){return d(e)}}),r.a.createElement(f.a.Label,null," Email: "),r.a.createElement(f.a.Control,{type:"email",name:"email",value:c.email,onChange:function(e){return d(e)}}),r.a.createElement(f.a.Label,null," Phone:  "),r.a.createElement(f.a.Control,{type:"text",name:"phone",value:c.phone,onChange:function(e){return d(e)}}),r.a.createElement(f.a.Label,null," Address: "),r.a.createElement(f.a.Control,{type:"text",name:"address",value:c.address,onChange:function(e){return d(e)}})),r.a.createElement("br",null),r.a.createElement(C,{prev:u.prev,plabel:u.plabel,next:u.next,nlabel:u.nlabel,handleButtonClick:function(){a(c)}}))})),S=Object(j.b)((function(e){return{_order:e.order}}),(function(e){return{addCrust:function(a){return e(function(e){return{type:"ADD_CRUST",payload:{crust:e.crust}}}(a))}}}))((function(e){var a=e.addCrust,t=Object(n.useState)({crust:""}),l=Object(h.a)(t,2),c=l[0],o=l[1],u=p(s,"Add Crust"),i=u.progress;return r.a.createElement("div",null,r.a.createElement(m.a,{animated:!0,now:i}),r.a.createElement("h1",null,"Select a crust type"),r.a.createElement(f.a,null,[{id:1,name:"regular"},{id:2,name:"thin"},{id:3,name:"thick"},{id:4,name:"gluten-free"}].map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(f.a.Check,{custom:!0,id:e.id,type:"radio",name:"crust",label:e.name,value:e.name,onChange:function(e){return a=e,void o(Object(g.a)({},c,Object(b.a)({},a.target.name,a.currentTarget.value)));var a}}))}))),r.a.createElement("br",null),r.a.createElement(C,{prev:u.prev,plabel:u.plabel,next:u.next,nlabel:u.nlabel,handleButtonClick:function(){a(c)}}))})),D=Object(j.b)((function(e){return{_order:e.order}}),(function(e){return{addSauce:function(a){return e(function(e){return{type:"ADD_SAUCE",payload:{sauce:e.sauce}}}(a))}}}))((function(e){var a=e.addSauce,t=Object(n.useState)({sauce:""}),l=Object(h.a)(t,2),c=l[0],o=l[1],u=p(s,"Add Sauce"),i=u.progress;return r.a.createElement("div",null,r.a.createElement(m.a,{animated:!0,now:i}),r.a.createElement("h1",null,"Select your sauce"),r.a.createElement(f.a,null,[{id:1,name:"tomato"},{id:2,name:"marinara"},{id:3,name:"olive oil"},{id:4,name:"none"}].map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(f.a.Check,{custom:!0,id:e.id,type:"radio",name:"sauce",label:e.name,value:e.name,onChange:function(e){return a=e,void o(Object(g.a)({},c,Object(b.a)({},a.target.name,a.currentTarget.value)));var a}}))}))),r.a.createElement("br",null),r.a.createElement(C,{prev:u.prev,plabel:u.plabel,next:u.next,nlabel:u.nlabel,handleButtonClick:function(){a(c)}}))})),k=t(21),A=Object(j.b)((function(e){return{_order:e.order}}),(function(e){return{addToppings:function(a){return e(function(e){return{type:"ADD_TOPPINGS",payload:{toppings:e.toppings}}}(a))}}}))((function(e){var a=e.addToppings,t=Object(n.useState)({toppings:[]}),l=Object(h.a)(t,2),c=l[0],o=l[1],u=p(s,"Add Toppings"),i=u.progress,d=function(e){console.log("in handleadd, topping = ",e.name);var a=Object(k.a)(c.toppings);a.push(e),o(Object(g.a)({},c,{toppings:a}))},E=function(e,a){console.log("in handledelete, topping = ",e.name,"index =",a);var t=Object(k.a)(c.toppings);t.splice(a,1),o(Object(g.a)({},c,{toppings:t}))};return r.a.createElement("div",null,r.a.createElement(m.a,{animated:!0,now:i}),r.a.createElement("h1",null,"Select your toppings"),r.a.createElement(f.a,null,[{id:1,name:"pepperoni"},{id:2,name:"sausage"},{id:3,name:"pineapple"},{id:4,name:"mango"},{id:5,name:"potato"},{id:6,name:"red pepper"},{id:7,name:"mushrooms"},{id:8,name:"parmesean"}].map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(f.a.Check,{custom:!0,id:e.id,type:"checkbox",name:"topping",label:e.name,value:e.name,onChange:function(a){return function(e,a){for(var t=Object(k.a)(c.toppings),n=-1,r=0;r<t.length;r++)t[r].name===e.name&&(n=r);-1===n?d(e):E(e,n)}(e)}}))}))),r.a.createElement("br",null),r.a.createElement(C,{prev:u.prev,plabel:u.plabel,next:u.next,nlabel:u.nlabel,handleButtonClick:function(){a(c)}}))})),w=t(51),T=Object(j.b)((function(e){return{_order:e.order}}),(function(e){return{resetApp:function(){return e({type:"RESET_APP",payload:""})}}}))((function(e){var a=e._order,t=e.resetApp,n=p(s,"Display Order"),l=n.progress;return r.a.createElement("div",null,r.a.createElement(m.a,{animated:!0,now:l}),r.a.createElement("h1",null,"Here's your final order"),r.a.createElement(w.a,{bordered:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,a.name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,a.email)),r.a.createElement("tr",null,r.a.createElement("td",null,"Phone"),r.a.createElement("td",null,a.phone)),r.a.createElement("tr",null,r.a.createElement("td",null,"Address"),r.a.createElement("td",null,a.address)),r.a.createElement("tr",null,r.a.createElement("td",null,"Pizza Crust"),r.a.createElement("td",null,a.crust)),r.a.createElement("tr",null,r.a.createElement("td",null,"Pizza Sauce"),r.a.createElement("td",null,a.sauce)),r.a.createElement("tr",null,r.a.createElement("td",null,"Pizza Toppings"),r.a.createElement("td",null,r.a.createElement("ul",null,a.toppings.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}))))))),r.a.createElement(C,{prev:n.prev,plabel:n.plabel,next:n.next,nlabel:n.nlabel,handleButtonClick:t}))}));var z=function(){return r.a.createElement("div",{style:x},r.a.createElement(i.a,{border:"primary",style:{width:"50rem"}},r.a.createElement(i.a.Body,null,r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:E}),r.a.createElement(u.a,{exact:!0,path:"/addcustomer",component:_}),r.a.createElement(u.a,{exact:!0,path:"/addcrust",component:S}),r.a.createElement(u.a,{exact:!0,path:"/addsauce",component:D}),r.a.createElement(u.a,{exact:!0,path:"/addtoppings",component:A}),r.a.createElement(u.a,{exact:!0,path:"/display",component:T}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=t(17),B={};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CUSTOMER":return Object(g.a)({},e,{},a.payload);case"DISPLAY_ORDER":return e;case"ADD_CRUST":case"ADD_SAUCE":case"ADD_TOPPINGS":return Object(g.a)({},e,{},a.payload);case"RESET_APP":return Object(g.a)({},B);default:return e}},R=Object(P.b)({order:N}),U=Object(P.c)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(j.a,{store:U},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.46697686.chunk.js.map