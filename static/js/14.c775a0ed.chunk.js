(this["webpackJsonplinken-sphere"]=this["webpackJsonplinken-sphere"]||[]).push([[14],{134:function(e,a,t){"use strict";var n=t(115),i=t(114);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var l=i(t(126)),s=i(t(123)),r=n(t(0)),c=(i(t(18)),i(t(111))),o=i(t(133)),d=i(t(156)),m=t(162),p=i(t(224)),u=i(t(225)),g=function(e){return{root:(0,s.default)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,m.lighten)((0,m.fade)(e.palette.divider,1),.88):(0,m.darken)((0,m.fade)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}};a.styles=g;var f=r.forwardRef((function(e,a){var t,n,i=e.align,o=void 0===i?"inherit":i,m=e.classes,g=e.className,f=e.component,h=e.padding,E=e.scope,y=e.size,N=e.sortDirection,v=e.variant,b=(0,l.default)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),w=r.useContext(p.default),x=r.useContext(u.default),C=x&&"head"===x.variant;f?(n=f,t=C?"columnheader":"cell"):n=C?"th":"td";var k=E;!k&&C&&(k="col");var A=h||(w&&w.padding?w.padding:"default"),D=y||(w&&w.size?w.size:"medium"),T=v||x&&x.variant,I=null;return N&&(I="asc"===N?"ascending":"descending"),r.createElement(n,(0,s.default)({ref:a,className:(0,c.default)(m.root,m[T],g,"inherit"!==o&&m["align".concat((0,d.default)(o))],"default"!==A&&m["padding".concat((0,d.default)(A))],"medium"!==D&&m["size".concat((0,d.default)(D))],"head"===T&&w&&w.stickyHeader&&m.stickyHeader),"aria-sort":I,role:t,scope:k},b))})),h=(0,o.default)(g,{name:"MuiTableCell"})(f);a.default=h},156:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){if("string"!==typeof e)throw new Error((0,n.formatMuiErrorMessage)(7));return e.charAt(0).toUpperCase()+e.slice(1)};var n=t(32)},224:function(e,a,t){"use strict";var n=t(115);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(0)).createContext();a.default=i},225:function(e,a,t){"use strict";var n=t(115);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(0)).createContext();a.default=i},628:function(e,a,t){"use strict";t.r(a);var n=t(116),i=t(0),l=t.n(i),s=(t(146),t(31)),r=t(392),c=t(394),o=t(391),d=t(134),m=t.n(d),p=t(395),u=t(3),g=t(113),f=t.n(g),h=t(296);a.default=Object(s.b)((function(e){return{personalActivityData:e.personalLicenseActivity.activity}}))((function(e){var a=l.a.useState(""),t=Object(n.a)(a,2),i=t[0],s=t[1],d=l.a.useState(!1),g=Object(n.a)(d,2),E=g[0],y=g[1],N=function(e){var a,t=new Date,n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];switch(e){case"Today":a=t.getDate();break;case"Yesterday":a=t.getDate()-1}return l.a.createElement(o.a,{className:"date-row"},l.a.createElement(m.a,{className:"padding-sides-20 color-white",colspan:"4"},l.a.createElement("b",{className:"color-white"},e),l.a.createElement("span",{className:"color-grey inline"},a," ",n)))},v=e.personalActivityData.filter((function(e){if(e.user.toLowerCase().includes(i.toLowerCase())||e.description[0].toLowerCase().includes(i.toLowerCase())||e.description[1].toLowerCase().includes(i.toLowerCase())||e.action.toLowerCase().includes(i.toLowerCase()))return e}));return v=v.map((function(e,a){return l.a.createElement(o.a,{key:a},l.a.createElement(m.a,{className:"padding-sides-15 color-white"},l.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),l.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),l.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],l.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])," "),l.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))})),l.a.createElement("div",{className:"\u0441ustomStyle"},l.a.createElement("div",{className:"filterPanel"},l.a.createElement(h.a,{id:"filterPanel.search"},(function(e){return l.a.createElement(f.a,{variant:"filled",fullWidth:!0,className:"search_area",placeholder:e,value:i,onChange:function(e){s(e.target.value)}})})),l.a.createElement("div",{className:"search_additional_components"},l.a.createElement("div",{className:"calendar"},u.a.searchComponents.calendar))),l.a.createElement(r.a,{className:"configTable"},l.a.createElement(c.a,null,l.a.createElement(o.a,null,l.a.createElement(m.a,{className:"padding-sides-20 w160"},l.a.createElement(h.a,{id:"table.user"})),l.a.createElement(m.a,{className:"padding-sides-0 w140"},l.a.createElement(h.a,{id:"table.action"})),l.a.createElement(m.a,{className:"padding-sides-25"},l.a.createElement(h.a,{id:"table.description"})),l.a.createElement(m.a,{className:E?"padding-sides-25 w140 td-date":"padding-sides-25 w140 td-date rotate-child-180 ",onClick:function(){y(!E)}},u.a.tableIcons.date," ",l.a.createElement(h.a,{id:"table.date"})))),l.a.createElement(p.a,{className:"no-hover"},i.length?v:E?l.a.createElement(l.a.Fragment,null,N("Yesterday"),e.personalActivityData.map((function(e,a){return l.a.createElement(o.a,null,l.a.createElement(m.a,{className:"padding-sides-15 color-white"},l.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),l.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),l.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],l.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])),l.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))})).reverse(),N("Today"),e.personalActivityData.map((function(e,a){return l.a.createElement(o.a,null,l.a.createElement(m.a,{className:"padding-sides-15 color-white"},l.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),l.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),l.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],l.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])),l.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))})).reverse()):l.a.createElement(l.a.Fragment,null,N("Today"),e.personalActivityData.map((function(e,a){return l.a.createElement(o.a,null,l.a.createElement(m.a,{className:"padding-sides-15 color-white"},l.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),l.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),l.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],l.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])," "),l.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))})),N("Yesterday"),e.personalActivityData.map((function(e,a){return l.a.createElement(o.a,null,l.a.createElement(m.a,{className:"padding-sides-15 color-white"},l.a.createElement("span",{className:"icon-inside align-items-baseline inline"},u.a.userIcons.forTable,e.user)),l.a.createElement(m.a,{className:"padding-sides-0 color-white"},e.action),l.a.createElement(m.a,{className:"padding-sides-25 color-white"},e.description[0],l.a.createElement("span",{className:"color-grey icon-inside align-items-baseline inline ml-10"},u.a.licenseIcons.mail,e.description[1])," "),l.a.createElement(m.a,{className:"padding-sides-20 color-grey"},"13 Feb, 11:10:22"))}))))))}))}}]);
//# sourceMappingURL=14.c775a0ed.chunk.js.map