(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),a=t.n(c),o=t(8),r=t(4),u=t(2),i=t(0),s=function(e){var n=e.persons,t=e.deleteName;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsxs)("li",{children:[e.name,"    ",e.number,Object(i.jsx)("button",{onClick:function(){return t(e)},children:" Delete"})]},e.id)}))})},d=function(e){var n=e.value,t=e.onChange;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{value:n,onChange:t})," "]})},l=function(e){var n=e.addName,t=e.newName,c=e.newNumber,a=e.handleNameChange,o=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:[" name: ",Object(i.jsx)("input",{value:t,onChange:a})]}),Object(i.jsxs)("div",{children:[" number: ",Object(i.jsx)("input",{value:c,onChange:o})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},j=t(3),b=t.n(j),h="/api/persons",f=function(){return b.a.get(h)},m=function(e){return b.a.post(h,e)},v=function(e,n){return b.a.put("".concat(h,"/").concat(e),n)},O=function(e){return b.a.delete("".concat(h,"/").concat(e))},p=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},g=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)(""),j=Object(r.a)(a,2),h=j[0],g=j[1],x=Object(u.useState)(""),w=Object(r.a)(x,2),C=w[0],N=w[1],k=Object(u.useState)(""),S=Object(r.a)(k,2),y=S[0],D=S[1],E=Object(u.useState)("Error: "),J=Object(r.a)(E,2),L=J[0],A=J[1];Object(u.useEffect)((function(){b.a.get("/api/persons").then((function(e){var n=e.data;console.log(n),c(n)}))}),[]);var B=""===y?t:t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{message:L}),Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(d,{value:y,onChange:function(e){D(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(l,{addName:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===h.trim()}));if(console.log(n),0===n.length){var a={name:h.trim(),number:C,id:t.length+1};console.log(a),m(a).then((function(e){c(t.concat(e.data)),A("".concat(a.name," was successfully added to the server"))})).catch((function(e){A("Could not add ".concat(a.name," to server"))}))}else if(window.confirm("".concat(h," is already added to the phonebook, replace the old number with a new one"))){var r=Object(o.a)(Object(o.a)({},n[0]),{},{number:C});v(n[0].id,r).then((function(e){f().then((function(e){var n=e.data;c(n),A("Updated user ".concat(r.name," on server"))}))})).catch((function(e){A("Could not update user ".concat(r.name," on server"))}))}g(""),N("")},newName:h,handleNameChange:function(e){g(e.target.value)},newNumber:C,handleNumberChange:function(e){N(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(s,{persons:B,deleteName:function(e){if(window.confirm("Delete ".concat(e.name,"?"))){var n=e.id;O(n).then((function(e){f().then((function(e){var n=e.data;c(n)}))})).catch((function(n){A("".concat(e," could not be removed from server"))}))}}})]})};t(41);a.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b04cb029.chunk.js.map