(this["webpackJsonplinken-sphere"]=this["webpackJsonplinken-sphere"]||[]).push([[16],{601:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=(t(162),t(30)),r=t(401),c=t(392),s=t(369),o=t(148),m=t.n(o),u=t(368),d=t(3),E=t(117),g=t.n(E),v=t(47),I=t(340),p=t(336);a.default=Object(i.b)((function(e){return{inviteData:e.corporateLicenseInvite.invite}}),(function(e){return{setNewValueForInviteStoreItem:function(a,t,n){return e(function(e,a,t){return{type:v.a.SET_NEW_VALUE_INVITE_FOR_STORE_ITEM,payload:{item:e,itemValue:a,id:t}}}(a,t,n))},createInviteItem:function(a){return e(function(e){return{type:v.a.CREATE_INVITE_ITEM,payload:e}}(a))},deleteInviteItem:function(a){return e(function(e){return{type:v.a.DELETE_INVITE_ITEM,payload:e}}(a))}}}))((function(e){var a=function(a){return l.a.createElement(s.a,{className:"inputs-row"},l.a.createElement(m.a,{className:"padding-sides-10 color-white"},l.a.createElement(g.a,{fullWidth:!0,value:a.login,onChange:function(t){e.setNewValueForInviteStoreItem("login",t.target.value,a.ticketID)},variant:"filled"})),l.a.createElement(m.a,{className:"padding-sides-10 color-white"},l.a.createElement(g.a,{fullWidth:!0,value:"CU"+a.newLogin,onChange:function(t){e.setNewValueForInviteStoreItem("newLogin",t.target.value,a.ticketID)},variant:"filled",disabled:!0})),l.a.createElement(m.a,{className:"padding-sides-10 color-white"},l.a.createElement(g.a,{fullWidth:!0,value:a.password,onChange:function(t){e.setNewValueForInviteStoreItem("password",t.target.value,a.ticketID)},variant:"filled"})),l.a.createElement(m.a,{className:"padding-sides-10 color-white"},l.a.createElement(g.a,{fullWidth:!0,value:a.nickname,onChange:function(t){e.setNewValueForInviteStoreItem("nickname",t.target.value,a.ticketID)},variant:"filled"})),l.a.createElement(m.a,{className:"padding-sides-10 color-grey"},l.a.createElement(g.a,{fullWidth:!0,value:a.telegram,onChange:function(t){e.setNewValueForInviteStoreItem("telegram",t.target.value,a.ticketID)},variant:"filled"})),l.a.createElement(m.a,{className:"padding-sides-10 color-grey"},l.a.createElement(g.a,{fullWidth:!0,value:a.comment,onChange:function(t){e.setNewValueForInviteStoreItem("comment",t.target.value,a.ticketID)},variant:"filled",className:"w80p"}),l.a.createElement("div",{className:"generateTable__btnsWrapper"},e.inviteData.store.length>1?l.a.createElement(I.a,{className:"btn--table",onClick:function(){e.deleteInviteItem(a.ticketID)}},d.a.buttons.minus):null,l.a.createElement(I.a,{className:"btn--table",onClick:function(){!function(){var a=e.inviteData.store,t=e.inviteData.defValues,n=+new Date,l={login:a[a.length-1].login+1,newLogin:a[a.length-1].login+1,password:t.password,nickname:t.nickname,telegram:t.telegram,comment:t.comment,ticketID:n};e.createInviteItem(l)}()}},d.a.buttons.plus))))};return l.a.createElement("div",{className:"\u0441ustomStyle"},l.a.createElement("div",{className:"alertPanel"},l.a.createElement("p",{className:"color-white"},"The users listed below will be invited to join your license. You can only invite users with whom you have an agreement on migration."),l.a.createElement("span",{className:"btn-text color-blue"},"MORE")),l.a.createElement(r.a,{className:"configTable"},l.a.createElement(c.a,null,l.a.createElement(s.a,null,l.a.createElement(m.a,{className:"padding-sides-20 "},l.a.createElement(p.a,{id:"table.currentLogin"})),l.a.createElement(m.a,{className:"padding-sides-10 "},l.a.createElement(p.a,{id:"table.newLogin"})),l.a.createElement(m.a,{className:"padding-sides-10 "},l.a.createElement(p.a,{id:"table.password"})),l.a.createElement(m.a,{className:"padding-sides-10"},l.a.createElement(p.a,{id:"table.nickname"})),l.a.createElement(m.a,{className:"padding-sides-10"},l.a.createElement(p.a,{id:"table.telegram"})),l.a.createElement(m.a,{className:"padding-sides-10 w500"},l.a.createElement(p.a,{id:"table.commentRoleOrMore"})))),l.a.createElement(u.a,{className:"no-hover"},e.inviteData.store.map((function(e){return a(e)})))))}))}}]);
//# sourceMappingURL=16.f2c60b2f.chunk.js.map