(this["webpackJsonplinken-sphere"]=this["webpackJsonplinken-sphere"]||[]).push([[9],{171:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"h",(function(){return c})),t.d(a,"d",(function(){return r})),t.d(a,"f",(function(){return i})),t.d(a,"i",(function(){return o})),t.d(a,"a",(function(){return s})),t.d(a,"g",(function(){return u})),t.d(a,"j",(function(){return m})),t.d(a,"e",(function(){return p})),t.d(a,"c",(function(){return d}));var n=t(8),l=function(e,a){return{type:n.a.SET_ACTIVITY,payload:{bool:e,id:a}}},c=function(e,a){return{type:n.a.SET_USERS,payload:{bool:e,id:a}}},r=function(e,a){return{type:n.a.SET_COSTS,payload:{bool:e,id:a}}},i=function(e,a){return{type:n.a.SET_SELECT,payload:{bool:e,id:a}}},o=function(e){return{type:n.a.SORT_TABLE_BY_TYPE,payload:e}},s=function(e){return{type:n.a.SET_ACCESS_RIGHTS,payload:e}},u=function(e){return{type:n.a.SET_SELECT_FOR_USERS,payload:e}},m=function(e){return{type:n.a.UPDATE_USERS,payload:e}},p=function(e){return{type:n.a.SET_DAYS_LEFT,payload:e}},d=function(e){return{type:n.a.SET_CONFIG_LIMIT,payload:e}}},576:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(5),r=t(49),i=t(25),o=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setCurrentLanguage:function(a){return e(Object(r.m)(a))},setLanguageModal:function(a){return e(Object(r.o)(a))}}}))((function(e){var a=e.appState.appLanguage.currentAppLanguage,t=Object(c.a)(e.appState.appLanguage.languagesInterface),r="",i=t.map((function(t){var n="";return t.value===a&&(n="currentLang"),l.a.createElement("div",{key:t.title.toString(),onClick:function(a){var n;n=t.value,e.setCurrentLanguage(n),e.setLanguageModal(!1)},className:n},l.a.createElement("img",{src:t.icon,alt:""})," ",t.title)}));t.find((function(e){return e.value===a}));return e.appState.modals.languageDropdown&&(r=l.a.createElement("div",{className:"appLanguageDropdown"},l.a.createElement("div",{className:"content"},i))),l.a.createElement(n.Fragment,null,r)})),s=t(106),u=t(584),m=t(105),p=t.n(m),d=t(342),f=t(15),E=t(327),h=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setBuyPLicenseModal:function(a){return e(Object(r.e)(a))}}}))((function(e){var a="",t=Object(f.e)(),n=l.a.useState(e.appState.modals.buyPersLicense.data),c=Object(s.a)(n,2),r=c[0],i=c[1],o=l.a.useState("From account balance"),m=Object(s.a)(o,2),h=m[0],v=m[1];return e.appState.modals.buyPersLicense&&(a=l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w320"},l.a.createElement("header",null,l.a.createElement("h3",null,"Buy Personal License"),l.a.createElement("div",{className:"close",onClick:function(){e.setBuyPLicenseModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement(p.a,{variant:"filled",fullWidth:!0,select:!0,label:"Payment method",value:h,onChange:function(e){var a;a=e.target,v(a.value)}},l.a.createElement(d.a,{value:"From account balance"},"From account balance"),l.a.createElement(d.a,{value:"From Bitcoin wallet"},"From Bitcoin wallet")),l.a.createElement(p.a,{label:"Amount",fullWidth:!0,rows:1,value:r,onChange:function(e,a){i(a)},variant:"filled",className:"inputDollar"}),l.a.createElement(u.a,{step:100,min:0,max:1e4,value:r,onChange:function(e,a){a>=1e3&&i(a)}}),l.a.createElement("p",null,"Funds will be transferred from account balance to license balance"),l.a.createElement(E.a,{variant:"contained",className:"btn btn--blue",onClick:function(){t.push("/licenses/1234567890/activity"),e.setBuyPLicenseModal(!1)}},"GO TO PAYMENT"))))),a})),v=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setBuyCLicenseModal:function(a){return e(Object(r.d)(a))}}}))((function(e){var a=Object(f.e)(),t=l.a.useState(e.appState.modals.buyCorpLicense.data),n=Object(s.a)(t,2),c=n[0],r=n[1],i=l.a.useState("From account balance"),o=Object(s.a)(i,2),m=o[0],h=o[1];return l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w320"},l.a.createElement("header",null,l.a.createElement("h3",null,"Buy Corporate License"),l.a.createElement("div",{className:"close",onClick:function(){e.setBuyCLicenseModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement(p.a,{variant:"filled",fullWidth:!0,select:!0,label:"Payment method",value:m,onChange:function(e){var a;a=e.target,h(a.value)}},l.a.createElement(d.a,{value:"From account balance"},"From account balance"),l.a.createElement(d.a,{value:"From Bitcoin wallet"},"From Bitcoin wallet")),l.a.createElement(p.a,{label:"Amount",fullWidth:!0,rows:1,value:c,onChange:function(e,a){r(a)},variant:"filled",className:"inputDollar"}),l.a.createElement(u.a,{step:100,min:0,max:5e4,value:c,onChange:function(e,a){a>=5e3&&r(a)}}),l.a.createElement("p",null,"Funds will be transferred from account balance to license balance"),l.a.createElement(E.a,{variant:"contained",className:"btn btn--blue",onClick:function(){a.push("/licenses/1234567890/activity"),e.setBuyCLicenseModal(!1)}},"GO TO PAYMENT"))))})),b=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setRefillBalanceModal:function(a){return e(Object(r.s)(a))}}}))((function(e){var a="",t=l.a.useState(1e3),c=Object(s.a)(t,2),r=c[0],i=c[1],o=l.a.useState("Bitcoin"),m=Object(s.a)(o,2),f=m[0],E=m[1];return e.appState.modals.refillAccountBalance&&(a=l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w320"},l.a.createElement("header",null,l.a.createElement("h3",null,"Refill account balance"),l.a.createElement("div",{className:"close",onClick:function(){e.setRefillBalanceModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement(p.a,{variant:"filled",fullWidth:!0,select:!0,label:"Payment method",value:f,onChange:function(e){var a;a=e.target,E(a.value)}},l.a.createElement(d.a,{value:"Bitcoin"},"Bitcoin"),l.a.createElement(d.a,{value:"Ethereum"},"Ethereum")),l.a.createElement(p.a,{label:"Amount to replenish",fullWidth:!0,rows:1,value:r,onChange:function(e,a){i(a)},variant:"filled",className:"inputDollar"}),l.a.createElement(u.a,{step:100,min:0,max:1e4,value:r,onChange:function(e,a){i(a)}}),l.a.createElement("p",null,"Funds will be transferred from account balance to license balance"),l.a.createElement("div",{className:"btn btn--blue"},"GO TO PAYMENT"))))),l.a.createElement(n.Fragment,null,a)})),L=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setRefillLicenseModal:function(a){return e(Object(r.t)(a))}}}))((function(e){var a=null,t=l.a.useState(1500),c=Object(s.a)(t,2),r=c[0],i=c[1],o=l.a.useState("From account balance"),m=Object(s.a)(o,2),f=m[0],h=m[1];return e.appState.modals.refillLicenseBalance&&(a=l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w320"},l.a.createElement("header",null,l.a.createElement("h3",null,"Refill account balance"),l.a.createElement("div",{className:"close",onClick:function(){e.setRefillLicenseModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement("div",{className:"header"},l.a.createElement("div",null,l.a.createElement("h6",null,"Account balance: "),l.a.createElement("p",null,"$ ",l.a.createElement("span",{className:"color-white"},"3500"),".00")),l.a.createElement("div",null,l.a.createElement("h6",null,"License balance: "),l.a.createElement("p",null,"$ ",l.a.createElement("span",{className:"color-white"},"1063"),".00"))),l.a.createElement(p.a,{variant:"filled",fullWidth:!0,select:!0,label:"Payment method",value:f,onChange:function(e){var a;a=e.target,h(a.value)}},l.a.createElement(d.a,{value:"From account balance"},"From account balance"),l.a.createElement(d.a,{value:"From account balance2"},"From account balance2")),l.a.createElement(p.a,{label:"Amount to replenish",fullWidth:!0,rows:1,value:r,onChange:function(e,a){i(a)},variant:"filled",className:"inputDollar"}),l.a.createElement(u.a,{step:100,min:0,max:1e4,value:r,onChange:function(e,a){i(a)}}),l.a.createElement("p",null,"Funds will be transferred from account balance to license balance"),l.a.createElement(E.a,{variant:"contained",className:"btn btn--blue"},"GO TO PAYMENT"))))),l.a.createElement(n.Fragment,null,a)})),g=t(171),w=t(2),S=Object(i.b)((function(e){return{appState:e.appOptions.appState,usersTabData:e.corporateLicenseUsers.usersTab}}),(function(e){return{setLicenseDaysSettingsModal:function(a){return e(Object(r.p)(a))},setDaysLeft:function(a){return e(Object(g.e)(a))}}}))((function(e){var a=Object.assign({},e.appState.modals.licenseDaysSettings.data),t=l.a.useState("$"+a.userOptions.balance),n=Object(s.a)(t,2),c=n[0],r=n[1],i=l.a.useState(0),o=Object(s.a)(i,2),m=o[0],d=o[1],f=l.a.useState(""),h=Object(s.a)(f,2),v=h[0],b=h[1],L=l.a.useState(a.userOptions.daysLeft),g=Object(s.a)(L,2),S=g[0],O=g[1];return l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w400"},l.a.createElement("header",null,l.a.createElement("h3",null,"Days Settings"),l.a.createElement("div",{className:"close",onClick:function(){e.setLicenseDaysSettingsModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement("div",{className:"header"},l.a.createElement("div",null,l.a.createElement("h6",null,"User: "),l.a.createElement("p",null,l.a.createElement("span",{className:"icon-inside"},w.a.userIcons.forTable," ",a.user.name))),l.a.createElement("div",null,l.a.createElement("h6",null,"Days left: "),l.a.createElement("p",{className:"color-white"},a.userOptions.daysLeft))),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"fieldsWrapper"},l.a.createElement(p.a,{label:"Days left",fullWidth:!0,rows:1,value:S,onChange:function(e){var t;t=e.target.value,O(t),t>a.userOptions.daysLeft?(r("$"+(a.userOptions.balance+2*(t-a.userOptions.daysLeft)).toFixed(2)),d("-$"+(2*(t-a.userOptions.daysLeft)).toFixed(2)),b("color-red")):t===a.userOptions.daysLeft?(b(""),d(0),r("$"+a.userOptions.balance)):(b("color-green"),d("+$"+(2*(a.userOptions.daysLeft-t)).toFixed(2)),r("$"+(a.userOptions.balance+2*(t-a.userOptions.daysLeft)).toFixed(2)))},variant:"filled",className:"col-3"}),l.a.createElement(p.a,{label:"Balance",fullWidth:!0,rows:1,value:c,variant:"filled",className:"col-3"}),l.a.createElement(p.a,{label:S<a.userOptions.daysLeft?"Refund":"Spend",fullWidth:!0,rows:1,value:m,variant:"filled",className:v+" col-3"})),l.a.createElement(u.a,{step:1,min:0,max:90,value:S,onChange:function(e,t){O(t),t>a.userOptions.daysLeft?(r("$"+(a.userOptions.balance+2*(t-a.userOptions.daysLeft)).toFixed(2)),d("-$"+(2*(t-a.userOptions.daysLeft)).toFixed(2)),b("color-red")):t===a.userOptions.daysLeft?(b(""),d(0),r("$"+a.userOptions.balance)):(b("color-green"),d("+$"+(2*(a.userOptions.daysLeft-t)).toFixed(2)),r("$"+(a.userOptions.balance+2*(t-a.userOptions.daysLeft)).toFixed(2)))}}),l.a.createElement("p",null,S>a.userOptions.daysLeft?l.a.createElement(l.a.Fragment,null,"You are about to ",l.a.createElement("b",{className:"color-white"},"add ",S-a.userOptions.daysLeft," days.")," The cost of adding is ",l.a.createElement("span",{className:"color-red"},m),". Funds will be deducted from the balance of the license."):null,S===a.userOptions.daysLeft?l.a.createElement(l.a.Fragment,null,"Set a new value for the remaining days. You can edit any field, the value of the remaining fields will change automatically."):null,S<a.userOptions.daysLeft?l.a.createElement(l.a.Fragment,null,"You are about to ",l.a.createElement("b",{className:"color-white"},"take ",a.userOptions.daysLeft-S," days.")," The reimbursement cost will be ",l.a.createElement("span",{className:"color-green"},m),". The funds will be credited to the balance of your license."):null),l.a.createElement(E.a,{variant:"contained",className:"btn btn--blue",onClick:function(){!function(){var t={id:a.user.id,balance:+c.match(/\d+/)[0],daysValue:S};e.setDaysLeft(t),d(0),b(""),e.setLicenseDaysSettingsModal(!1)}()}},"SAVE CHANGES"))))})),O=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setChangeEmailModal:function(a){return e(Object(r.g)(a))},setNewEmailAuthModal:function(a){return e(Object(r.r)(a))}}}))((function(e){var a="";return e.appState.modals.changeEmail&&(a=l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w320"},l.a.createElement("header",null,l.a.createElement("h3",null,"Change Email"),l.a.createElement("div",{className:"close",onClick:function(){e.setChangeEmailModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement("p",null,"Email change is out after confirmation of current e-mail. We will send an email to ",l.a.createElement("span",{className:"color-white"},"Lionel.Messi@gmail.com")," which contains a link that you should click on"),l.a.createElement("div",{className:"btn btn--blue",onClick:function(){e.setChangeEmailModal(!1),e.setNewEmailAuthModal(!0)}},"Send link from my email"))))),l.a.createElement(n.Fragment,null,a)})),y=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setChangePasswordlModal:function(a){return e(Object(r.i)(a))},setChangePasswordAuthModal:function(a){return e(Object(r.h)(a))}}}))((function(e){var a="";return e.appState.modals.changePass&&(a=l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w320"},l.a.createElement("header",null,l.a.createElement("h3",null,"Change Password"),l.a.createElement("div",{className:"close",onClick:function(){e.setChangePasswordlModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement("p",null,"Password change is carried out after confirmation of e-mail. We will send an email to ",l.a.createElement("span",{className:"color-white"},"Lionel.Messi@gmail.com "),"which contains a link that you should click on"),l.a.createElement("div",{className:"btn btn--blue",onClick:function(){e.setChangePasswordlModal(!1),e.setChangePasswordAuthModal(!0)}},"Send link from my email"))))),l.a.createElement(n.Fragment,null,a)})),N=t(174),C=t.n(N),j=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setChangeTelegramModal:function(a){return e(Object(r.j)(a))}}}))((function(e){var a=l.a.useState(),t=Object(s.a)(a,2),c=t[0],r=t[1],i=l.a.useState(!0),o=Object(s.a)(i,2),u=o[0],m=o[1],d="";return e.appState.modals.changeTelegram&&(d=l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w320"},l.a.createElement("header",null,l.a.createElement("h3",null,"Change Telegram"),l.a.createElement("div",{className:"close",onClick:function(){e.setChangeTelegramModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement(p.a,{variant:"filled",fullWidth:!0,label:"Your telegram",value:c,onChange:function(e){r(e.target.value)}}),l.a.createElement("div",{className:"switch-wrapper"},l.a.createElement(C.a,{checked:u,name:"autoRenew",onChange:function(e){m(!u)}}),l.a.createElement("p",null,l.a.createElement("span",{className:"color-white"},"Display for other users"))),l.a.createElement("div",{className:"btn btn--blue",onClick:function(){e.setChangeTelegramModal(!1)}},"Save changes"))))),l.a.createElement(n.Fragment,null,d)})),M=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setChangeDealModal:function(a){return e(Object(r.f)(a))}}}))((function(e){var a=l.a.useState(),t=Object(s.a)(a,2),c=(t[0],t[1],l.a.useState(!0)),r=Object(s.a)(c,2),i=(r[0],r[1],l.a.useState("Questions about buying a license")),o=Object(s.a)(i,2),u=o[0],m=(o[1],l.a.useState("Plan to take over the universe")),d=Object(s.a)(m,2),f=(d[0],d[1],l.a.useState("")),E=Object(s.a)(f,2),h=(E[0],E[1],l.a.useState("")),v=Object(s.a)(h,2),b=v[0],L=(v[1],l.a.useState("")),g=Object(s.a)(L,2),S=g[0],O=(g[1],l.a.useState(1e3)),y=Object(s.a)(O,2),N=y[0],C=(y[1],l.a.useState(100)),j=Object(s.a)(C,2),M=j[0],R=(j[1],l.a.useState(1100)),T=Object(s.a)(R,2),F=T[0],k=(T[1],l.a.useState("")),A=Object(s.a)(k,2),x=(A[0],A[1],l.a.useState("")),D=Object(s.a)(x,2),B=(D[0],D[1],l.a.useState(!0)),P=Object(s.a)(B,2),W=(P[0],P[1],l.a.useState("")),_=Object(s.a)(W,2),Z=_[0],Y=(_[1],"");return e.appState.modals.changeDeal&&(Y=l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w500"},l.a.createElement("header",null,l.a.createElement("h3",null,"Deal details"),l.a.createElement("div",{className:"close",onClick:function(){e.setChangeDealModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement("div",{className:"alertPanel"},w.a.userIcon," Lionel Messi offers to join to Corporate license"),l.a.createElement("div",{className:"row1"},l.a.createElement(p.a,{variant:"filled",label:"Buyer Login",value:S}),l.a.createElement(p.a,{variant:"filled",label:"Seller Login",value:b})),l.a.createElement("div",{className:"row2"},l.a.createElement(p.a,{variant:"filled",label:"Amount to send",value:N}),l.a.createElement(p.a,{variant:"filled",disabled:!0,label:"Comision rate",value:M}),l.a.createElement(p.a,{variant:"filled",label:"Amount to recive",value:F})),l.a.createElement("div",{className:"row3"},l.a.createElement(p.a,{label:"Deal title",fullWidth:!0,rows:1,value:u,variant:"filled"}),l.a.createElement(p.a,{label:"Terms of transaction",fullWidth:!0,multiline:!0,rows:11,value:Z,className:"height-auto",variant:"filled"})),l.a.createElement("div",{className:"btn btn--blue",onClick:function(){e.setChangeDealModal(!1)}},"Cancel a deal"))))),l.a.createElement(n.Fragment,null,Y)})),R=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setAutoRenewalModal:function(a){return e(Object(r.c)(a))}}}))((function(e){var a="",t=l.a.useState(200),c=Object(s.a)(t,2),r=c[0],i=c[1],o=l.a.useState(500),m=Object(s.a)(o,2),d=m[0],f=m[1],E=l.a.useState(!0),h=Object(s.a)(E,2),v=h[0],b=h[1];return e.appState.modals.autoRenewal&&(a=l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w320"},l.a.createElement("header",null,l.a.createElement("h3",null,"Auto renewal settings"),l.a.createElement("div",{className:"close",onClick:function(){e.setAutoRenewalModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement("div",{className:"switch-wrapper"},l.a.createElement(C.a,{checked:v,name:"autoRenew",onChange:function(e){b(!v)}}),l.a.createElement("p",null,l.a.createElement("span",{className:"color-white"},"Auto renew"))),l.a.createElement(p.a,{variant:"filled",fullWidth:!0,label:"License balance left",value:r,className:"inputDollar",onChange:function(e){i(e.target.value)}}),l.a.createElement(p.a,{label:"Amount to replenish",fullWidth:!0,rows:1,value:d,onChange:function(e){f(e.target.value)},variant:"filled",className:"inputDollar"}),l.a.createElement(u.a,{step:100,min:0,max:1e4,value:d,onChange:function(e,a){f(a)}}),l.a.createElement("p",null,"When the balance of the license is less than ",l.a.createElement("span",{className:"color-white"},"$",r),", it will automatically replenish by ",l.a.createElement("span",{className:"color-white"},"$",d),"  from account balance"),l.a.createElement("div",{className:"btn btn--blue"},"GO TO PAYMENT"))))),l.a.createElement(n.Fragment,null,a)})),T=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setMigrationModal:function(a){return e(Object(r.q)(a))}}}))((function(e){var a="",t=l.a.useState(200),c=Object(s.a)(t,2),r=(c[0],c[1],l.a.useState(500)),i=Object(s.a)(r,2),o=(i[0],i[1],l.a.useState(!0)),u=Object(s.a)(o,2),m=u[0],p=u[1];return e.appState.modals.migration&&(a=l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w500"},l.a.createElement("header",null,l.a.createElement("h3",null,"Migration to corporate"),l.a.createElement("div",{className:"close",onClick:function(){e.setMigrationModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement("div",{className:"alertPanel"},"Lionel Messi offers to join to Corporate license"),l.a.createElement("span",{className:"color-orange"},l.a.createElement("svg",{width:"17",height:"15",className:"mr-10",viewBox:"0 0 17 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M16.5586 12.8086L9.99609 1.40625C9.50391 0.558594 8.21875 0.53125 7.72656 1.40625L1.16406 12.8086C0.671875 13.6562 1.30078 14.75 2.3125 14.75H15.4102C16.4219 14.75 17.0508 13.6836 16.5586 12.8086ZM8.875 10.4297C9.55859 10.4297 10.1328 11.0039 10.1328 11.6875C10.1328 12.3984 9.55859 12.9453 8.875 12.9453C8.16406 12.9453 7.61719 12.3984 7.61719 11.6875C7.61719 11.0039 8.16406 10.4297 8.875 10.4297ZM7.67188 5.91797C7.64453 5.72656 7.80859 5.5625 8 5.5625H9.72266C9.91406 5.5625 10.0781 5.72656 10.0508 5.91797L9.85938 9.63672C9.83203 9.82812 9.69531 9.9375 9.53125 9.9375H8.19141C8.02734 9.9375 7.89062 9.82812 7.86328 9.63672L7.67188 5.91797Z",fill:"#F2994A"})),"If you accept his invitation, the following will happen:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Your sessions and configs will be available to users of the corporate license of Ronaldo"),l.a.createElement("li",null,"The balance of your balance will go in favor of the balance of the corporate license of Ronaldo"),l.a.createElement("li",null,"Your account with the email Lionel.Messi@gmail.com and login Lionel Messi will be permanently deleted, but you can register an empty account again")),l.a.createElement("p",{className:"description"},"If you don\u2019t know what this is about, click the \u201cREJECT\u201d button and the user will not disturb you anymore."),l.a.createElement("div",{className:"switch-wrapper"},l.a.createElement(C.a,{checked:m,name:"autoRenew",onChange:function(e){p(!m)}}),l.a.createElement("p",null,l.a.createElement("span",{className:"color-white"},"Everything is clear, I want to migrate to corporate"))),l.a.createElement("div",{className:"btns-wrapper"},l.a.createElement("div",{className:"btn btn--decline"},"Reject invite"),l.a.createElement("div",{className:"btn btn--accept"},"Decline invite")))))),l.a.createElement(n.Fragment,null,a)})),F=Object(i.b)((function(e){return{appState:e.appOptions.appState,usersTabData:e.corporateLicenseUsers.usersTab}}),(function(e){return{setAccessRightsModal:function(a){return e(Object(r.a)(a))},setAccessRights:function(a){return e(Object(g.a)(a))}}}))((function(e){var a=l.a.useState(!0),t=Object(s.a)(a,2),n=t[0],c=t[1],r=l.a.useState(!0),i=Object(s.a)(r,2),o=i[0],u=i[1],m=l.a.useState(!0),p=Object(s.a)(m,2),d=p[0],f=p[1],h=[];e.usersTabData.map((function(e,a){e.userOptions.isSelected&&h.push(e)}));return l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w320"},l.a.createElement("header",null,l.a.createElement("h3",null,"Set access rights"),l.a.createElement("div",{className:"close",onClick:function(){e.setAccessRightsModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement("div",{className:"header"},l.a.createElement("div",null,l.a.createElement("h6",null,"User: "),l.a.createElement("p",{className:"icon-inside"},w.a.userIcons.forTable," ",l.a.createElement("b",null,h.length," selected users")," "))),l.a.createElement("div",{className:"line mb-10"}),l.a.createElement("div",null,l.a.createElement(C.a,{checked:n,onChange:function(){c(!n)}}),l.a.createElement("span",{className:"color-white ml-10"},"Sees activity")),l.a.createElement("div",null,l.a.createElement(C.a,{checked:o,onChange:function(){u(!o)}}),l.a.createElement("span",{className:"color-white ml-10"},"Sees users")),l.a.createElement("div",null,l.a.createElement(C.a,{checked:d,onChange:function(){f(!d)}}),l.a.createElement("span",{className:"color-white ml-10"},"Sees costs")),l.a.createElement("p",{className:"mt-10"},"Access rights will be applied to all selected users"),l.a.createElement(E.a,{variant:"contained",className:"btn btn--blue",onClick:function(){!function(){var a=e.usersTabData.map((function(e,a){return e.userOptions.isSelected&&(e.userOptions.seesActivity=n,e.userOptions.seesUsers=o,e.userOptions.seesCosts=d,e.userOptions.isSelected=!1),e}));e.setAccessRights(a),e.setAccessRightsModal(!1)}()}},"Save changes"))))})),k=Object(i.b)((function(e){return{appState:e.appOptions.appState,usersTabData:e.corporateLicenseUsers.usersTab}}),(function(e){return{setAuthorizationDataModal:function(a){return e(Object(r.b)(a))},setSelectForUsers:function(a){return e(Object(g.g)(a))}}}))((function(e){var a=[];e.usersTabData.map((function(e){e.userOptions.isSelected&&a.push(e)}));var t=(a=a.map((function(e){return e.user.name+": "+e.user.id+"; "+e.user.creds.password+";"}))).toString().replace(/,/g,"\r\n"),n=l.a.useState(a),c=Object(s.a)(n,2);c[0],c[1];return l.a.createElement("div",{className:"popup-layer"},l.a.createElement("div",{className:"popup-content w400"},l.a.createElement("header",null,l.a.createElement("h3",null,"Authorization data"),l.a.createElement("div",{className:"close",onClick:function(){e.setAuthorizationDataModal(!1)}},l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M6.65613 5.74086L11.6899 0.707107L10.9828 0L5.94903 5.03375L0.956513 0.0412364L0.249406 0.748343L5.24192 5.74086L0 10.9828L0.707107 11.6899L5.94903 6.44797L11.2322 11.7311L11.9393 11.024L6.65613 5.74086Z",fill:"white"})))),l.a.createElement("main",null,l.a.createElement(p.a,{label:"Nickname: Login; Password;",fullWidth:!0,multiline:!0,disabled:!0,rows:a.length,value:t,className:"heightAuto",variant:"filled"}),l.a.createElement(E.a,{variant:"contained",className:"btn btn--blue",onClick:function(){navigator.clipboard.writeText(t),e.setSelectForUsers(!1),e.setAuthorizationDataModal(!1)}},"Copy to clipboard"))))}));a.default=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setAccessRightsModal:function(a){return e(Object(r.a)(a))}}}))((function(e){var a=null;return e.appState.modals.languageDropdown&&(a=l.a.createElement(o,null)),e.appState.modals.buyCorpLicense.bool&&(a=l.a.createElement(v,null)),e.appState.modals.buyPersLicense.bool&&(a=l.a.createElement(h,null)),e.appState.modals.refillAccountBalance&&(a=l.a.createElement(b,null)),e.appState.modals.refillLicenseBalance&&(a=l.a.createElement(L,null)),e.appState.modals.changeEmail&&(a=l.a.createElement(O,null)),e.appState.modals.changePass&&(a=l.a.createElement(y,null)),e.appState.modals.changeTelegram&&(a=l.a.createElement(j,null)),e.appState.modals.autoRenewal&&(a=l.a.createElement(R,null)),e.appState.modals.migration&&(a=l.a.createElement(T,null)),e.appState.modals.accessRights&&(a=l.a.createElement(F,null)),e.appState.modals.licenseDaysSettings.bool&&(a=l.a.createElement(S,null)),e.appState.modals.authorizationData&&(a=l.a.createElement(k,null)),e.appState.modals.changeDeal.bool&&(a=l.a.createElement(M,null)),a}))}}]);
//# sourceMappingURL=9.d0d8cf0c.chunk.js.map