(this["webpackJsonplinken-sphere"]=this["webpackJsonplinken-sphere"]||[]).push([[16],{118:function(e,t,a){"use strict";a.d(t,"n",(function(){return r})),a.d(t,"o",(function(){return u})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"h",(function(){return o})),a.d(t,"g",(function(){return s})),a.d(t,"s",(function(){return p})),a.d(t,"t",(function(){return d})),a.d(t,"p",(function(){return m})),a.d(t,"j",(function(){return E})),a.d(t,"l",(function(){return f})),a.d(t,"m",(function(){return h})),a.d(t,"f",(function(){return g})),a.d(t,"q",(function(){return b})),a.d(t,"e",(function(){return v})),a.d(t,"d",(function(){return O})),a.d(t,"i",(function(){return _})),a.d(t,"r",(function(){return A})),a.d(t,"k",(function(){return S}));var n=a(7),r=(a(11),function(e){return{type:n.a.SET_CURRENT_LANGUAGE,payload:e}}),u=function(e){return{type:n.a.SET_LANGUAGE_MODAL,payload:e}},l=function(e){return{type:n.a.SET_AUTH_LANGUAGE_MODAL,payload:e}},c=function(e){return{type:n.a.SET_ACCESS_RIGHTS_MODAL,payload:e}},i=function(e){return{type:n.a.SET_ACCESS_RIGHTS_FOR_ONE_USER_MODAL,payload:e}},o=function(e){return{type:n.a.SET_BUY_P_LICENSE_MODAL,payload:e}},s=function(e){return{type:n.a.SET_BUY_C_LICENSE_MODAL,payload:e}},p=function(e){return{type:n.a.SET_REFILL_BALANCE_MODAL,payload:e}},d=function(e){return{type:n.a.SET_REFILL_LICENSE_MODAL,payload:e}},m=function(e){return{type:n.a.SET_LICENSE_DAYS_SETTINGS_MODAL,payload:e}},E=function(e){return{type:n.a.SET_CHANGE_EMAIL_MODAL,payload:e}},f=function(e){return{type:n.a.SET_CHANGE_PASSWORD_MODAL,payload:e}},h=function(e){return{type:n.a.SET_CHANGE_TELEGRAM_MODAL,payload:e}},g=function(e){return{type:n.a.SET_AUTO_RENEWAL_MODAL,payload:e}},b=function(e){return{type:n.a.SET_MIGRATION_MODAL,payload:e}},v=function(e){return{type:n.a.SET_AUTHORIZATION_DATA_MODAL,payload:e}},O=function(e){return{type:n.a.SET_AUTHORIZATION_DATA_FOR_ONE_USER_MODAL,payload:e}},_=function(e){return{type:n.a.SET_CHANGE_DEAL_MODAL,payload:e}},A=function(e){return{type:n.a.SET_NEW_EMAIL_AUTHMODAL,payload:e}},S=function(e){return{type:n.a.SET_CHANGE_PASSWORD_AUTHMODAL,payload:e}}},274:function(e,t,a){},638:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),u=a.n(r),l=a(3),c=a(118),i=a(31),o=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setCurrentLanguage:function(t){return e(Object(c.n)(t))},setAuthLanguageModal:function(t){return e(Object(c.c)(t))}}}))((function(e){var t=e.appState.appLanguage.currentAppLanguage,a=Object(n.a)(e.appState.appLanguage.languagesInterface),r=null,l=a.map((function(a){var n="";return a.value===t&&(n="currentLang"),u.a.createElement("div",{key:a.title.toString(),onClick:function(t){var n;n=a.value,e.setCurrentLanguage(n),e.setAuthLanguageModal(!1)},className:n},u.a.createElement("img",{src:a.icon,alt:""})," ",a.title)}));a.find((function(e){return e.value===t}));return e.appState.modals.authLanguageDropdown&&(r=u.a.createElement("div",{className:"appLanguageDropdown"},u.a.createElement("div",{className:"content"},l))),r})),s=(a(274),a(116)),p=a(113),d=a.n(p),m=a(376),E=a(22),f=a(296),h=a(58),g=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setAuthLanguageModal:function(t){return e(Object(c.c)(t))}}}))((function(e){var t=Object(E.e)(),a=u.a.useState(""),n=Object(s.a)(a,2),r=n[0],l=n[1],c=u.a.useState(""),i=Object(s.a)(c,2),o=i[0],p=i[1];return u.a.createElement("div",{className:Object(h.a)({m:"authModal w400",s:"authModal w100p sign"})},u.a.createElement("header",null,u.a.createElement("div",{onClick:function(){t.push("/auth/sign_up")}},u.a.createElement(f.a,{id:"button.signUp"})),u.a.createElement("div",{className:"active"},u.a.createElement(f.a,{id:"button.signIn"}))),u.a.createElement("main",null,u.a.createElement(f.a,{id:"auth.loginOrEmail"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:o,onChange:function(e){p(e.target.value)}})})),u.a.createElement(f.a,{id:"auth.password"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:r,type:"password",onChange:function(e){l(e.target.value)}})}))),u.a.createElement("footer",null,u.a.createElement(m.a,{variant:"contained",className:"btn btn--blue",onClick:function(){t.push("/licenses/new")}},u.a.createElement(f.a,{id:"button.signIn"})),u.a.createElement("div",{className:"btn btn--text",onClick:function(){t.push("/auth/reset_password")}},u.a.createElement(f.a,{id:"button.forgotPassword"}))))})),b=(a(582),a(177)),v=a.n(b),O=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setAuthLanguageModal:function(t){return e(Object(c.c)(t))}}}))((function(e){var t=u.a.useState(),a=Object(s.a)(t,2),n=a[0],r=a[1],l=u.a.useState(),c=Object(s.a)(l,2),i=c[0],o=c[1],p=u.a.useState(),g=Object(s.a)(p,2),b=g[0],O=g[1],_=u.a.useState(),A=Object(s.a)(_,2),S=A[0],w=A[1],L=u.a.useState(),N=Object(s.a)(L,2),y=N[0],M=N[1],C=u.a.useState(!0),j=Object(s.a)(C,2),T=j[0],D=j[1],k=Object(E.e)();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:Object(h.a)({m:"authModal w400",s:"authModal w100p sign"})},u.a.createElement("header",null,u.a.createElement("div",{className:"active"},u.a.createElement(f.a,{id:"button.signUp"})),u.a.createElement("div",{onClick:function(){k.push("/auth/sign_in")}},u.a.createElement(f.a,{id:"button.signIn"}))),u.a.createElement("main",null,u.a.createElement(f.a,{id:"auth.login"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:n,onChange:function(e){r(e.target.value)}})})),u.a.createElement("div",{className:"doubled"},u.a.createElement(f.a,{id:"auth.password"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:i,type:"password",onChange:function(e){o(e.target.value)}})})),u.a.createElement(f.a,{id:"auth.passwordAgain"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:b,type:"password",onChange:function(e){O(e.target.value)}})}))),u.a.createElement(f.a,{id:"auth.email"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:S,onChange:function(e){w(e.target.value)}})})),u.a.createElement(f.a,{id:"auth.promocode"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:y,onChange:function(e){M(e.target.value)}})}))),u.a.createElement("footer",null,u.a.createElement("div",{className:"switch-wrapper"},u.a.createElement(v.a,{checked:T,name:"autoRenew",onChange:function(e){D(!T)}}),u.a.createElement("p",null,u.a.createElement("span",{className:"color-white"},"I accept")," terms of service")),u.a.createElement(m.a,{variant:"contained",className:"btn btn--blue",onClick:function(){k.push("/licenses/new")}},u.a.createElement(f.a,{id:"button.toRegister"}))))," ")})),_=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setAuthLanguageModal:function(t){return e(Object(c.c)(t))}}}))((function(e){var t=Object(E.e)(),a=u.a.useState(),n=Object(s.a)(a,2),r=n[0],l=n[1],c=u.a.useState(),i=Object(s.a)(c,2),o=i[0],p=i[1];return u.a.createElement("div",{className:Object(h.a)({m:"authModal w400",s:"authModal authModal--mobile w100p authModal--popup"})},u.a.createElement("header",null,u.a.createElement("p",null,u.a.createElement(f.a,{id:"auth.setANewPassword"})),Object(h.a)({})),u.a.createElement("main",null,u.a.createElement(f.a,{id:"auth.newPassword"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:r,type:"password",onChange:function(e){var t;e.target.value,l(t)}})})),u.a.createElement(f.a,{id:"auth.newPasswordAgain"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:o,type:"password",onChange:function(e){var t;t=e.target.value,p(t.value)}})}))),u.a.createElement("footer",null,u.a.createElement(m.a,{variant:"contained",className:"btn btn--blue",onClick:function(){t.push("/auth/sign_in")}},u.a.createElement(f.a,{id:"button.changePassword"})),u.a.createElement("div",{className:"btn btn--text",onClick:function(){t.push("/auth/sign_in")}},u.a.createElement(f.a,{id:"button.cancelChangePassword"}))))})),A=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setAuthLanguageModal:function(t){return e(Object(c.c)(t))}}}))((function(e){var t=u.a.useState(),a=Object(s.a)(t,2),n=a[0],l=a[1],c=Object(r.useHistory)();return u.a.createElement("div",{className:Object(h.a)({m:"authModal w400",s:"authModal authModal--mobile w100p authModal--popup"})},u.a.createElement("header",null,u.a.createElement("p",null,u.a.createElement(f.a,{id:"auth.setANewEmail"}))),u.a.createElement("main",null,u.a.createElement(f.a,{id:"auth.newEmail"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:"New email",placeholder:e,value:n,onChange:function(e){l(e.target.value)}})}))),u.a.createElement("footer",null,u.a.createElement("p",null,"We will send a password reset link ",u.a.createElement("span",{className:"color-white"},"to your email")," account associated with the specified login"),u.a.createElement("div",{className:"btn btn--blue",onClick:function(){c.push("licenses/new")}},u.a.createElement(f.a,{id:"button.sendResetPasswordLink"})),u.a.createElement("div",{className:"btn btn--text",onClick:function(){c.push("licenses/new")}},u.a.createElement(f.a,{id:"button.cancelChangePassword"}))))})),S=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{setAuthLanguageModal:function(t){return e(Object(c.c)(t))}}}))((function(e){console.log("res pass");var t=u.a.useState(),a=Object(s.a)(t,2),n=a[0],r=a[1],l=Object(E.e)();return u.a.createElement("div",{className:Object(h.a)({m:"authModal w400",s:"authModal authModal--mobile w100p authModal--popup"})},u.a.createElement("header",null,u.a.createElement("p",null,u.a.createElement(f.a,{id:"auth.resetPassword"}))),u.a.createElement("main",null,u.a.createElement(f.a,{id:"auth.youreLogin"},(function(e){return u.a.createElement(d.a,{variant:"filled",fullWidth:!0,label:e,value:n,onChange:function(e){r(e.target.value)}})}))),u.a.createElement("footer",null,u.a.createElement("p",null,"We will send a password reset link ",u.a.createElement("span",{className:"color-white"},"to your email")," account associated with the specified login"),u.a.createElement(m.a,{variant:"contained",className:"btn btn--blue",onClick:function(){l.push("/auth/set_new_password")}},u.a.createElement(f.a,{id:"button.sendResetPasswordLink"})),u.a.createElement("div",{className:"btn btn--text",onClick:function(){l.push("/auth/sign_in")}},u.a.createElement(f.a,{id:"button.cancelChangePassword"}))))}));t.default=Object(i.b)((function(e){return{appState:e.appOptions.appState}}),(function(e){return{}}))((function(e){var t=Object(h.a)({m:"AuthWindow",s:"AuthWindow AuthWindow--mobile"}),a=Object(E.e)();Object(r.useEffect)((function(){"/"===window.location.pathname&&a.push("licenses/new")}),[]);var c=e.appState.appLanguage.currentAppLanguage,i=Object(n.a)(e.appState.appLanguage.languagesInterface),s=(i.map((function(e){var t="";return e.value===c&&(t="currentLang"),u.a.createElement("div",{key:e.toString(),className:t},u.a.createElement("img",{src:e.icon,alt:""})," ",e.title)})),i.find((function(e){return e.value===c}))),p=u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"appLanguage appLanguage--auth",onClick:function(){e.setAuthLanguageModal(!0)}},u.a.createElement("img",{src:s.icon,alt:""}),s.value),u.a.createElement(o,null));return u.a.createElement("div",{className:t},u.a.createElement("div",{className:"logo"},l.a.menuIcons.logo),u.a.createElement(E.a,{path:"/auth/sign_in",render:function(){return u.a.createElement(g,null)}}),u.a.createElement(E.a,{path:"/auth/sign_up",render:function(){return u.a.createElement(O,null)}}),u.a.createElement(E.a,{path:"/auth/set_new_password",render:function(){return u.a.createElement(_,null)}}),u.a.createElement(E.a,{path:"/auth/set_new_email",render:function(){return u.a.createElement(A,null)}}),u.a.createElement(E.a,{path:"/auth/reset_password",render:function(){return u.a.createElement(S,null)}}),Object(h.a)({m:p,s:""}))}))}}]);
//# sourceMappingURL=16.9cee23aa.chunk.js.map