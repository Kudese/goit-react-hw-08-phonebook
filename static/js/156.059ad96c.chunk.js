"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[156],{7156:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a="Contacts_conteiner__M7pj2",s="Contacts_list__R3QeP",r=t(9299),o=t(9434),c=t(184);function u(){var e=(0,o.v9)((function(e){return e.search})),n=(0,o.I0)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"Find by name"}),(0,c.jsx)("input",{onChange:function(e){n({type:r.uP.toString(),payload:"".concat(e.target.value)})},value:e})]})}var i=t(3657),l="ContactIteam_iteam__zpAxg",d="ContactIteam_button__l-DD0";function h(e){var n=e.contact,t=n.id,a=n.name,s=n.number,r=(0,o.I0)();return(0,c.jsxs)("li",{className:l,children:[a,":",s,(0,c.jsx)("button",{className:d,type:"button",onClick:function(){r((0,i.GK)(t))},children:"Delete"})]})}var m=t(2791),_=t(5054);function f(){var e=(0,o.v9)((function(e){return e.contacts.items})),n=(0,o.v9)((function(e){return e.search})),t=(0,o.v9)((function(e){return e.authentcation.token})),r=(0,o.I0)();(0,m.useEffect)((function(){_.r.set(t),r((0,i.yF)())}),[r,t]);var l=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)("h2",{children:"Contacts"}),(0,c.jsx)(u,{}),(0,c.jsx)("ul",{className:s,children:l.map((function(e){return(0,c.jsx)(h,{contact:e},e.id)}))})]})}var p=t(9439),x="PhoneBook_conteiner__ncs1g",b="PhoneBook_form__snyuG",v="PhoneBook_label__dqtiy",j="PhoneBook_button__hxO60";function g(){var e=(0,m.useState)(""),n=(0,p.Z)(e,2),t=n[0],a=n[1],s=(0,m.useState)(""),r=(0,p.Z)(s,2),u=r[0],l=r[1],d=(0,o.I0)(),h=function(e){"name"===e.target.name?a(e.target.value):"number"===e.target.name&&l(e.target.value)};return(0,c.jsxs)("div",{className:x,children:[(0,c.jsx)("h2",{children:"PhoneBook"}),(0,c.jsxs)("form",{className:b,onSubmit:function(e){e.preventDefault(),console.log("submit"),d((0,i.uK)({name:t,number:u})),a(""),l("")},children:[(0,c.jsxs)("label",{className:v,children:["Name",(0,c.jsx)("input",{onChange:h,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsxs)("label",{className:v,children:["Number",(0,c.jsx)("input",{onChange:h,type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)("button",{className:j,type:"submit",children:"Add contact"})]})]})}var C="Contact_section__J3g-L";function k(){return(0,c.jsxs)("div",{className:C,children:[(0,c.jsx)(g,{}),(0,c.jsx)(f,{})]})}}}]);
//# sourceMappingURL=156.059ad96c.chunk.js.map