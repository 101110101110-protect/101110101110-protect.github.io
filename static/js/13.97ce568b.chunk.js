(this["webpackJsonplinken-sphere"]=this["webpackJsonplinken-sphere"]||[]).push([[13],{585:function(e,a,t){"use strict";t.r(a);var n=t(118),s=t(0),c=t.n(s),l=(t(162),t(30)),r=t(401),i=t(392),o=t(369),d=t(148),m=t.n(d),u=t(368),g=t(3),p=t(117),E=t.n(p),h=t(336);a.default=Object(l.b)((function(e){return{costsData:e.corporateLicenseCosts.costs}}))((function(e){var a=c.a.useState(""),t=Object(n.a)(a,2),s=t[0],l=t[1],d=c.a.useState(!1),p=Object(n.a)(d,2),f=p[0],w=p[1],N=function(e){var a,t=new Date,n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];switch(e){case"Today":a=t.getDay();break;case"Yesterday":a=t.getDay()-1}return c.a.createElement(o.a,{className:"date-row"},c.a.createElement(m.a,{className:"padding-sides-20 color-white",colspan:"6"},c.a.createElement("b",{className:"color-white"},e),c.a.createElement("span",{className:"color-grey inline"},a," ",n)))},b=function(e,a){return c.a.createElement(o.a,{key:a},c.a.createElement(m.a,{className:"padding-sides-25 red text-align-right"},"$",e.amount),c.a.createElement(m.a,{className:"padding-sides-15 color-white"},c.a.createElement("span",{className:"icon-inside inline align-items-baseline"},g.a.userIcons.forTable),e.user),c.a.createElement(m.a,{className:"padding-sides-10 color-white"},e.costAction),c.a.createElement(m.a,{className:"padding-sides-20 color-white"},e.costDetail[0],c.a.createElement("span",{className:"ml-10 icon-inside inline align-items-baseline"},g.a.licenseIcons.cog," ",e.costDetail[1])),c.a.createElement(m.a,{className:"padding-sides-20 color-white text-align-right"},e.boughtLeft),c.a.createElement(m.a,{className:"padding-sides-15 color-grey"},"3 Apr, 19:20:55"))},v=e.costsData.filter((function(e){if(e.user.toLowerCase().includes(s.toLowerCase())||e.costAction.toLowerCase().includes(s.toLowerCase())||e.costDetail[0].toLowerCase().includes(s.toLowerCase())||e.costDetail[1].toLowerCase().includes(s.toLowerCase())||e.boughtLeft.toLowerCase().includes(s.toLowerCase()))return e}));return v=v.map((function(e,a){return b(e,a)})),c.a.createElement("div",{className:"\u0441ustomStyle"},c.a.createElement("div",{className:"filterPanel"},c.a.createElement(h.a,{id:"filterPanel.search"},(function(e){return c.a.createElement(E.a,{variant:"filled",fullWidth:!0,className:"search_area",placeholder:e,value:s,onChange:function(e){l(e.target.value)}})})),c.a.createElement("div",{className:"search_additional_components"},c.a.createElement("div",{className:"calendar"},g.a.searchComponents.calendar),c.a.createElement("div",null,g.a.searchComponents.filter))),c.a.createElement(r.a,{className:"configTable"},c.a.createElement(i.a,null,c.a.createElement(o.a,null,c.a.createElement(m.a,{className:"padding-sides-25 w125 text-align-right"},c.a.createElement(h.a,{id:"table.amount"})),c.a.createElement(m.a,{className:"padding-sides-15 w150"},c.a.createElement(h.a,{id:"table.user"})),c.a.createElement(m.a,{className:"padding-sides-10 w120"},c.a.createElement(h.a,{id:"table.costAction"})),c.a.createElement(m.a,{className:"padding-sides-20 "},c.a.createElement(h.a,{id:"table.costDetail"})),c.a.createElement(m.a,{className:"padding-sides-20 w125 text-align-right"},c.a.createElement(h.a,{id:"table.boughtLeft"})),c.a.createElement(m.a,{className:f?"padding-sides-15 w125 td-date":"padding-sides-15 w125 td-date rotate-child-180 ",onClick:function(){w(!f)}},g.a.tableIcons.date," ",c.a.createElement(h.a,{id:"table.date"})))),c.a.createElement(u.a,{className:"no-hover"},s.length?v:f?c.a.createElement(c.a.Fragment,null,N("Yesterday"),e.costsData.map((function(e,a){return b(e,a)})).reverse(),N("Today"),e.costsData.map((function(e,a){return b(e,a)})).reverse()):c.a.createElement(c.a.Fragment,null,N("Today"),e.costsData.map((function(e,a){return b(e,a)})),N("Yesterday"),e.costsData.map((function(e,a){return b(e,a)}))))))}))}}]);
//# sourceMappingURL=13.97ce568b.chunk.js.map