"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_=self.webpackChunkgoit_react_hw_08_phonebook_||[]).push([[730],{7730:function(n,e,t){t.r(e),t.d(e,{default:function(){return vn}});var r,o=t(6907),a=t(9439),l=t(2791),i=t(9434),c=t(208),u=t(1686),d=t.n(u),f=t(6916),s=function(n){return n.contacts.items},p=function(n){return n.filter},x=function(n){return n.contacts.error},h=function(n){return n.contacts.isLoading},m=(0,f.P1)([s,p],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),b=["title","titleId"];function g(){return g=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},g.apply(this,arguments)}function v(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function C(n,e){var t=n.title,o=n.titleId,a=v(n,b);return l.createElement("svg",g({width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},a),t?l.createElement("title",{id:o},t):null,r||(r=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8ZM13.506 11.5648C14.4282 10.6577 15 9.39565 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 9.39827 5.57396 10.6625 6.49914 11.5699C3.74942 12.5366 2 14.6259 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 15.2701 5.93073 13 10 13C11.9542 13 13.4554 13.5451 14.4579 14.2992C14.8992 14.6311 15.5262 14.5425 15.8581 14.1011C16.1901 13.6598 16.1015 13.0328 15.6601 12.7008C15.0431 12.2368 14.3206 11.851 13.506 11.5648ZM19 14.5C19.5523 14.5 20 14.9477 20 15.5V18H22.5C23.0523 18 23.5 18.4477 23.5 19C23.5 19.5523 23.0523 20 22.5 20H20V22.5C20 23.0523 19.5523 23.5 19 23.5C18.4477 23.5 18 23.0523 18 22.5V20H15.5C14.9477 20 14.5 19.5523 14.5 19C14.5 18.4477 14.9477 18 15.5 18H18V15.5C18 14.9477 18.4477 14.5 19 14.5Z"})))}var j,Z,w,y,O,P=l.forwardRef(C),k=(t.p,t(168)),E=t(2360),S=E.ZP.form(j||(j=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),A=E.ZP.input(Z||(Z=(0,k.Z)(["\n  padding:12px;\n  margin-bottom: 12px;\n  border-radius: 6px;\n  border: none;\n  outline: 0;\n  background-color: #fff;\n  box-shadow: 0 1px 6px 0 #20212447;\n"]))),L=E.ZP.button(w||(w=(0,k.Z)(["\n  > svg {\n    width: 20px;\n    height: 30px;\n    fill: #02ba52;\n  }\n  /* padding: 10px 20px; */\n  margin-top: 5px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n  :hover {\n    background-color: #1677ff;\n    > svg {\n      fill: #fff;\n    }\n  }\n"]))),I=E.ZP.p(y||(y=(0,k.Z)(["\n  /* padding: 10px 20px; */\n  margin-bottom: 15px;\n"]))),N=t(3329),_=function(){var n=(0,i.I0)(),e=(0,i.v9)(s),t=(0,l.useState)(""),r=(0,a.Z)(t,2),o=r[0],u=r[1],f=(0,l.useState)(""),p=(0,a.Z)(f,2),x=p[0],h=p[1];return(0,N.jsxs)(S,{onSubmit:function(t){t.preventDefault();var r={name:o,number:x};if(e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))d().Report.warning("Alert","Contact with name ".concat(r.name," already exists!"),"Ok");else{var a=e.find((function(n){var e=n.number;return r.number.replace(/\D/g,"")===e.replace(/\D/g,"")}));a?d().Report.warning("Alert","Same number ".concat(r.number," already in contact list!"),"Ok"):(n((0,c.uK)(r)),u(""),h(""))}},children:[(0,N.jsx)(I,{children:"Handle Name"}),(0,N.jsx)(A,{type:"text",name:"name",placeholder:"Enter name",value:o,onChange:function(n){u(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",title:"Handle Name field contains just letters",required:!0}),(0,N.jsx)(I,{children:"Phone Number"}),(0,N.jsx)(A,{type:"tel",name:"number",placeholder:"Enter phone number",value:x,onChange:function(n){h(n.target.value)},pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Number format should follow +1 234 5678901 or 123 4567890.",required:!0}),(0,N.jsx)(L,{type:"submit",children:(0,N.jsx)(P,{})})]})},z=t(4664),H=t(3521),M=t(7027),R=t(5820),q=t(9519),V=t(7309),B=t(2639),D=["title","titleId"];function T(){return T=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},T.apply(this,arguments)}function F(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function K(n,e){var t=n.title,r=n.titleId,o=F(n,D);return l.createElement("svg",T({width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?l.createElement("title",{id:r},t):null,O||(O=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5ZM13.506 11.5648C14.4282 10.6578 15 9.39566 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 9.39827 5.57396 10.6625 6.49914 11.5699C3.74942 12.5366 2 14.6259 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 15.2701 5.93073 13 10 13C11.5647 13 12.8409 13.3499 13.8011 13.8767C14.2853 14.1424 14.8932 13.9652 15.1588 13.481C15.4245 12.9968 15.2473 12.3889 14.7631 12.1233C14.3732 11.9094 13.9535 11.7221 13.506 11.5648ZM15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L19 17.5858L21.2929 15.2929C21.6834 14.9024 22.3166 14.9024 22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L20.4142 19L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L19 20.4142L16.7071 22.7071C16.3166 23.0976 15.6834 23.0976 15.2929 22.7071C14.9024 22.3166 14.9024 21.6834 15.2929 21.2929L17.5858 19L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929Z"})))}var Y,$=l.forwardRef(K),G=(t.p,["title","titleId"]);function J(){return J=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},J.apply(this,arguments)}function Q(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function U(n,e){var t=n.title,r=n.titleId,o=Q(n,G);return l.createElement("svg",J({fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?l.createElement("title",{id:r},t):null,Y||(Y=l.createElement("path",{d:"M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"})))}var W,X,nn,en,tn,rn=l.forwardRef(U),on=(t.p,E.ZP.li(W||(W=(0,k.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 10px;\n  background-color: #f5f6f7;\n  padding-left: 10px;\n  border-radius: 7px;\n"])))),an=E.ZP.span(X||(X=(0,k.Z)(["\n  margin-right: 10px;\n"]))),ln=E.ZP.a(nn||(nn=(0,k.Z)(["\n  cursor: pointer;\n  color: #1677ff;\n  :hover {\n    text-decoration: underline;\n  }\n"]))),cn=E.ZP.button(en||(en=(0,k.Z)(["\n  @media only screen and (max-width: 600px) {\n    margin-right: 10px;\n  }\n  > svg {\n    width: 30px;\n    height: 22px;\n    fill: #f50505;\n  }\n  padding: 3px 10px 0 10px;\n  margin-left: 5px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n  :hover {\n    background-color: #1677ff;\n    > svg {\n      fill: #fff;\n    }\n  }\n"]))),un=E.ZP.button(tn||(tn=(0,k.Z)(["\n  > svg {\n    width: 30px;\n    height: 22px;\n    fill: #051df5;\n  }\n  padding: 3px 10px 0 10px;\n  margin-left: 20px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n  :hover {\n    background-color: #1677ff;\n    > svg {\n      fill: #fff;\n    }\n  }\n"])));var dn=function(n){var e=n.contact,t=(0,i.I0)(),r=(0,l.useState)(!1),o=(0,a.Z)(r,2),u=o[0],d=o[1],f=(0,l.useState)(e.name),s=(0,a.Z)(f,2),p=s[0],x=s[1],h=(0,l.useState)(e.number),m=(0,a.Z)(h,2),b=m[0],g=m[1],v=function(){t((0,c.GK)(e.id))},C=function(){d(!1)};return(0,N.jsxs)(on,{children:[(0,N.jsx)(an,{children:e.name}),(0,N.jsx)(ln,{href:"tel:".concat(e.number),children:e.number}),(0,N.jsx)(un,{onClick:function(){d(!0)},children:(0,N.jsx)(rn,{})}),(0,N.jsx)(R.Z,{title:"Delete contact",description:"Are you sure to delete this contact?",onConfirm:function(n){v(n.target.value),M.ZP.success("Click on Yes")},onCancel:function(n){console.log(n),M.ZP.error("Click on No")},okText:"Yes",cancelText:"No",children:(0,N.jsx)(cn,{danger:!0,children:(0,N.jsx)($,{})})}),(0,N.jsx)(q.Z,{open:u,onCancel:C,footer:[(0,N.jsx)(V.ZP,{onClick:C,children:"Cancel"},"cancel"),(0,N.jsx)(V.ZP,{onClick:function(){d(!1),t((0,c.xt)({id:e.id,name:p,number:b}))},children:"Save"},"save")],children:(0,N.jsxs)("div",{className:"modal-content",children:[(0,N.jsx)("label",{children:"New Name:"}),(0,N.jsx)(B.Z,{type:"text",value:p,onChange:function(n){x(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",title:"Handle name should only contain letters",required:!0}),(0,N.jsx)("label",{children:"New Number:"}),(0,N.jsx)(B.Z,{type:"text",value:b,onChange:function(n){g(n.target.value)},pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Number format should follow +1 234 5678901 or 123 4567890.",required:!0})]})})]})};var fn,sn,pn=function(){var n=(0,i.v9)(m),e=(0,i.v9)(x),t=(0,i.v9)(h),r=(0,i.I0)();return(0,l.useEffect)((function(){r((0,c.yF)())}),[r]),(0,N.jsx)("ul",{children:t&&!e?(0,N.jsx)(H.a,{}):0!==n.length||e?n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,N.jsx)(dn,{contact:{id:e,name:t,number:r}},e)})):(0,N.jsx)(z.Z,{})})},xn=t(3728),hn=t(6895),mn=(0,E.ZP)(B.Z)(fn||(fn=(0,k.Z)(["\n  width: auto;\n  padding: 5px;\n  border-radius: 6px;\n  border: none;\n  outline: 0;\n  background-color: #fff;\n  box-shadow: 0 1px 6px 0 #20212447;\n"]))),bn=E.ZP.h3(sn||(sn=(0,k.Z)(["\n  color: #2e2d2dbc;\n"])));var gn=function(){var n=(0,i.I0)(),e=(0,i.v9)(p);return(0,i.v9)(s).length<1?(0,N.jsx)(bn,{children:"Add your first contact"}):(0,N.jsx)(mn,{type:"text",name:"filter",placeholder:"Search by name",value:e,onChange:function(e){n((0,hn.T)(e.target.value.trim()))},prefix:(0,N.jsx)(xn.Vph,{})})};var vn=function(){return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(o.B6,{children:[(0,N.jsx)(o.ql,{children:(0,N.jsx)("title",{children:"Phonebook\ud83d\udcf1"})}),(0,N.jsx)(_,{}),(0,N.jsx)("h2",{children:"Contacts"}),(0,N.jsx)(gn,{}),(0,N.jsx)(pn,{})]})})}}}]);
//# sourceMappingURL=730.25c5b1c8.chunk.js.map