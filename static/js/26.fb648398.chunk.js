(this["webpackJsonplinken-sphere"]=this["webpackJsonplinken-sphere"]||[]).push([[26],{619:function(e,a,t){"use strict";t.r(a);var n=t(55),s=t(0),l=t.n(s),c=(t(148),t(31)),r=t(430),i=t(425),o=t(402),d=t(133),m=t.n(d),u=t(401),p=t(3),g=t(117),E=t.n(g),h=t(300);a.default=Object(c.b)((function(e){return{personalCostsData:e.personalLicenseCosts.costs}}))((function(e){var a=l.a.useState(""),t=Object(n.a)(a,2),s=t[0],c=t[1],d=l.a.useState(!1),g=Object(n.a)(d,2),w=g[0],f=g[1],N=function(e){var a,t=new Date,n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];switch(e){case"Today":a=t.getDate();break;case"Yesterday":a=t.getDate()-1}return l.a.createElement(o.a,{className:"date-row"},l.a.createElement(m.a,{className:"padding-sides-20 color-white",colspan:"6"},l.a.createElement("b",{className:"color-white"},e),l.a.createElement("span",{className:"color-grey inline"},a," ",n)))},b=function(e,a){return l.a.createElement(o.a,{key:a},l.a.createElement(m.a,{className:"padding-sides-25 red text-align-right"},"$",e.amount),l.a.createElement(m.a,{className:"padding-sides-15 color-white"},l.a.createElement("span",{className:"icon-inside inline align-items-baseline"},p.a.userIcons.forTable),e.user),l.a.createElement(m.a,{className:"padding-sides-10 color-white"},e.costAction),l.a.createElement(m.a,{className:"padding-sides-20 color-white"},e.costDetail[0],l.a.createElement("span",{className:"ml-10 icon-inside inline align-items-baseline"},p.a.licenseIcons.cog," ",e.costDetail[1])),l.a.createElement(m.a,{className:"padding-sides-20 color-white text-align-right"},e.boughtLeft),l.a.createElement(m.a,{className:"padding-sides-15 color-grey"},"3 Apr, 19:20:55"))},C=e.personalCostsData.filter((function(e){if(e.user.toLowerCase().includes(s.toLowerCase())||e.costAction.toLowerCase().includes(s.toLowerCase())||e.costDetail[0].toLowerCase().includes(s.toLowerCase())||e.costDetail[1].toLowerCase().includes(s.toLowerCase())||e.boughtLeft.toLowerCase().includes(s.toLowerCase()))return e}));return C=C.map((function(e,a){return b(e,a)})),l.a.createElement("div",{className:"\u0441ustomStyle"},l.a.createElement("div",{className:"filterPanel"},l.a.createElement(h.a,{id:"filterPanel.search"},(function(e){return l.a.createElement(E.a,{variant:"filled",fullWidth:!0,className:"search_area",placeholder:e,value:s,onChange:function(e){c(e.target.value)}})})),l.a.createElement("div",{className:"search_additional_components"},l.a.createElement("div",{className:"calendar"},p.a.searchComponents.calendar))),l.a.createElement(r.a,{className:"configTable"},l.a.createElement(i.a,null,l.a.createElement(o.a,null,l.a.createElement(m.a,{className:"padding-sides-25 w125 text-align-right"},l.a.createElement(h.a,{id:"table.amount"})),l.a.createElement(m.a,{className:"padding-sides-15 w150"},l.a.createElement(h.a,{id:"table.user"})),l.a.createElement(m.a,{className:"padding-sides-10 w120"},l.a.createElement(h.a,{id:"table.costAction"})),l.a.createElement(m.a,{className:"padding-sides-20 "},l.a.createElement(h.a,{id:"table.costDetail"})),l.a.createElement(m.a,{className:"padding-sides-20 w125 text-align-right"},l.a.createElement(h.a,{id:"table.boughtLeft"})),l.a.createElement(m.a,{className:w?"padding-sides-15 w125 td-date":"padding-sides-15 w125 td-date rotate-child-180 ",onClick:function(){f(!w)}},p.a.tableIcons.date," ",l.a.createElement(h.a,{id:"table.date"})))),l.a.createElement(u.a,{className:"no-hover"},s.length?C:w?l.a.createElement(l.a.Fragment,null,N("Yesterday"),e.personalCostsData.map((function(e,a){return b(e,a)})).reverse(),N("Today"),e.personalCostsData.map((function(e,a){return b(e,a)})).reverse()):l.a.createElement(l.a.Fragment,null,N("Today"),e.personalCostsData.map((function(e,a){return b(e,a)})),N("Yesterday"),e.personalCostsData.map((function(e,a){return b(e,a)}))))))}))}}]);
//# sourceMappingURL=26.fb648398.chunk.js.map