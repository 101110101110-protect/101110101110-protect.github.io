(this["webpackJsonplinken-sphere"]=this["webpackJsonplinken-sphere"]||[]).push([[16],{317:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a(46),r=function(e,t,a){return{type:n.a.SET_NEW_VALUE_INVITE_FOR_STORE_ITEM,payload:{item:e,itemValue:t,id:a}}},l=function(e){return{type:n.a.CREATE_INVITE_ITEM,payload:e}},i=function(e){return{type:n.a.DELETE_INVITE_ITEM,payload:e}}},632:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(138),a(31)),i=(a(3),a(115)),o=a.n(i),c=a(317),u=a(374);t.default=Object(l.b)((function(e){return{inviteData:e.corporateLicenseInvite.invite}}),(function(e){return{setNewValueForInviteStoreItem:function(t,a,n){return e(Object(c.c)(t,a,n))},createInviteItem:function(t){return e(Object(c.a)(t))},deleteInviteItem:function(t){return e(Object(c.b)(t))}}}))((function(e){return r.a.createElement("div",{className:"\u0441ustomStyle"},r.a.createElement("div",{className:"alertPanel alertPanel--mobile"},r.a.createElement("p",{className:"color-white"},"The users listed below will be invited to join your license. You can only invite users with whom you have an agreement on migration."),r.a.createElement("span",{className:"btn-text color-blue"},"MORE")),r.a.createElement("div",{className:"generateItems__wrapper"},e.inviteData.store.map((function(t){return function(t){return r.a.createElement("div",{className:"generateCard"},r.a.createElement("span",{className:"color-grey"},"Login"),r.a.createElement(o.a,{fullWidth:!0,value:"CU"+t.login,onChange:function(a){e.setNewValueForStoreItem("login",a.target.value,t.ticketID)},variant:"filled",disabled:!0}),r.a.createElement("span",{className:"color-grey"},"New login"),r.a.createElement(o.a,{fullWidth:!0,value:"CU"+t.newLogin,onChange:function(a){e.setNewValueForInviteStoreItem("newLogin",a.target.value,t.ticketID)},variant:"filled",disabled:!0}),r.a.createElement("span",{className:"color-grey"},"Password"),r.a.createElement(o.a,{fullWidth:!0,value:t.password,onChange:function(a){e.setNewValueForStoreItem("password",a.target.value,t.ticketID)},variant:"filled"}),r.a.createElement("span",{className:"color-grey"},"Nickname"),r.a.createElement(o.a,{fullWidth:!0,value:t.nickname,onChange:function(a){e.setNewValueForStoreItem("nickname",a.target.value,t.ticketID)},variant:"filled"}),r.a.createElement("span",{className:"color-grey"},"Telegram"),r.a.createElement(o.a,{fullWidth:!0,value:t.telegram,onChange:function(a){e.setNewValueForStoreItem("telegram",a.target.value,t.ticketID)},variant:"filled"}),r.a.createElement("span",{className:"color-grey"},"Comment"),r.a.createElement(o.a,{fullWidth:!0,value:t.comment,onChange:function(a){e.setNewValueForStoreItem("comment",a.target.value,t.ticketID)},variant:"filled"}),r.a.createElement(u.a,{variant:"contained",className:"btn btn--red mb-15"},"Exclude"))}(t)}))))}))}}]);
//# sourceMappingURL=16.45e39301.chunk.js.map