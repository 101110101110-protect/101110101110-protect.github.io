(this["webpackJsonplinken-sphere"]=this["webpackJsonplinken-sphere"]||[]).push([[24],{618:function(e,a,n){"use strict";n.r(a);var s=n(55),t=n(0),i=n.n(t),l=(n(148),n(31)),c=n(430),r=n(425),o=n(402),d=n(133),m=n.n(d),p=n(401),u=n(3),E=n(117),g=n.n(E),N=n(300);a.default=Object(l.b)((function(e){return{personalActivityData:e.personalLicenseActivity.activity}}))((function(e){var a=i.a.useState(""),n=Object(s.a)(a,2),t=n[0],l=n[1],d=i.a.useState(!1),E=Object(s.a)(d,2),b=E[0],h=E[1],w=function(e){var a,n=new Date,s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()];switch(e){case"Today":a=n.getDate();break;case"Yesterday":a=n.getDate()-1}return i.a.createElement(o.a,{className:"date-row"},i.a.createElement(m.a,{className:"padding-sides-20 color-white",colspan:"4"},i.a.createElement("b",{className:"color-white"},e),i.a.createElement("span",{className:"color-grey inline"},a," ",s)))},y=e.personalActivityData.filter((function(e){if(e.user.toLowerCase().includes(t.toLowerCase())||e.description[0].toLowerCase().includes(t.toLowerCase())||e.description[1].toLowerCase().includes(t.toLowerCase())||e.action.toLowerCase().includes(t.toLowerCase()))return e}));return y=y.map((function(e,a){return i.a.createElement(o.a,{key:a},i.a.createElement(m.a,{className:"padding-sides-15 color-white"},i.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),i.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),i.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],i.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])," "),i.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))})),i.a.createElement("div",{className:"\u0441ustomStyle"},i.a.createElement("div",{className:"filterPanel"},i.a.createElement(N.a,{id:"filterPanel.search"},(function(e){return i.a.createElement(g.a,{variant:"filled",fullWidth:!0,className:"search_area",placeholder:e,value:t,onChange:function(e){l(e.target.value)}})})),i.a.createElement("div",{className:"search_additional_components"},i.a.createElement("div",{className:"calendar"},u.a.searchComponents.calendar))),i.a.createElement(c.a,{className:"configTable"},i.a.createElement(r.a,null,i.a.createElement(o.a,null,i.a.createElement(m.a,{className:"padding-sides-20 w160"},i.a.createElement(N.a,{id:"table.user"})),i.a.createElement(m.a,{className:"padding-sides-0 w140"},i.a.createElement(N.a,{id:"table.action"})),i.a.createElement(m.a,{className:"padding-sides-25"},i.a.createElement(N.a,{id:"table.description"})),i.a.createElement(m.a,{className:b?"padding-sides-25 w140 td-date":"padding-sides-25 w140 td-date rotate-child-180 ",onClick:function(){h(!b)}},u.a.tableIcons.date," ",i.a.createElement(N.a,{id:"table.date"})))),i.a.createElement(p.a,{className:"no-hover"},t.length?y:b?i.a.createElement(i.a.Fragment,null,w("Yesterday"),e.personalActivityData.map((function(e,a){return i.a.createElement(o.a,null,i.a.createElement(m.a,{className:"padding-sides-15 color-white"},i.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),i.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),i.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],i.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])),i.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))})).reverse(),w("Today"),e.personalActivityData.map((function(e,a){return i.a.createElement(o.a,null,i.a.createElement(m.a,{className:"padding-sides-15 color-white"},i.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),i.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),i.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],i.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])),i.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))})).reverse()):i.a.createElement(i.a.Fragment,null,w("Today"),e.personalActivityData.map((function(e,a){return i.a.createElement(o.a,null,i.a.createElement(m.a,{className:"padding-sides-15 color-white"},i.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),i.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),i.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],i.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])," "),i.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))})),w("Yesterday"),e.personalActivityData.map((function(e,a){return i.a.createElement(o.a,null,i.a.createElement(m.a,{className:"padding-sides-15 color-white"},i.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),i.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),i.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],i.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])," "),i.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))}))))))}))}}]);
//# sourceMappingURL=24.4f4411ff.chunk.js.map