(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{137:function(e,a,t){"use strict";t.r(a);t(169),t(68),t(221);var n=t(6),r=t.n(n),l=(t(274),t(184)),o=t.n(l),s=t(170),i=t.n(s),c=t(161),u=t.n(c),m=t(0),d=t.n(m),p=t(156),g=t(157),N=t(158),E=t(140),b=t(143),h=t(155),v=t(188),y=t(159),k=t(172),f=function(){return d.a.createElement(E.a,{flex:!0,dirColumn:!0,centered:!0,className:"container spacing"},d.a.createElement(y.a,{bold:!0,text:"Tehtävien palautus"}),d.a.createElement("a",{href:"https://studies.cs.helsinki.fi/fullstackopen/",style:{padding:"1rem 0"},className:"col-2 centered spacing--small"},d.a.createElement(k.a,{largeMargin:!0,className:"nav-item-hover",childrenClassName:"triple-border__return-tasks"},"Palauta tehtävät palautussovellukseen")))},w=t(293),x=(t(294),t(138)),A=t(295),C=t.n(A),D=t(426),M=t.n(D),T=t(4),L=t.n(T),I=t(217),j=function(e){function a(a){var t;return(t=e.call(this,a)||this).componentDidMount=function(){var e=Array.from(document.querySelectorAll("h3")),a=document.querySelector("h1"),n=e.map(function(e){return e.id=C()(e.innerText),{text:e.innerText,id:e.id,level:e.nodeName}});t.setState({headings:n,h1Top:a.offsetTop})},t.loopThroughPartsNode=function(e){var a=t.state.headings,n=t.props,r=n.part,l=n.letter,o=n.currentPath,s=n.currentPartTitle,i=n.colorCode,c=[];for(var u in e)s!==e[u]?c.push(d.a.createElement(x.Link,{className:"left-navigation-link",style:{borderColor:i},to:"/osa"+r+"/"+M()(e[u])},u+" "+e[u])):c.push(d.a.createElement(I.a,{containerClassName:"accordion--side-navigation",style:{color:i},titleStyle:{backgroundColor:i,borderColor:i},initiallyOpened:!0,key:u,title:l+" "+e[u],list:a.map(function(e){return{href:o+"#"+e.id,text:e.text}})}));return c},t.state={h1Top:0,headings:[]},t}return r()(a,e),a.prototype.render=function(){var e=this,a=this.props.part;return d.a.createElement(x.StaticQuery,{query:"482968305",render:function(t){var n=t.allSidenavigationJson.edges[0].node["_"+a];return d.a.createElement(E.a,{tag:"ul",flex:!0,dirColumn:!0,className:"scroll-navigation "+e.props.className},e.loopThroughPartsNode(n))},data:w})},a}(m.Component);j.defaultProps={className:""},j.propTypes={className:L.a.string,colorCode:L.a.string.isRequired};var P=j,S=t(219),R=t(428),Z=t.n(R);t.d(a,"default",function(){return B}),t.d(a,"contentPageQuery",function(){return Q});var B=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={h1Top:0},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=Array.from(document.querySelectorAll("a")),a=document.querySelector("h1"),t=this.props.data.markdownRemark.frontmatter;e.map(function(e){return e.style="border-color: "+p[t.partColor]}),this.setState({h1Top:a.offsetTop})},t.render=function(){var e=this.props.data.markdownRemark,a=e.frontmatter,t=e.html,n=a.mainImage,r=a.title,l=a.subTitle,s=a.letter,c=a.part,m=a.partColor,y=p[m],k={replace:function(e){var a=e.type,t=e.name,n=e.attribs,r=e.children;return"tag"===a&&"picture"===t?d.a.createElement("picture",null,d.a.createElement("img",{style:{borderColor:y},alt:"fullstack content",src:r[0].attribs.src})):"tag"===a&&"pre"===t?d.a.createElement("pre",null,u()(r,k)):"tag"===a&&"content"===n.class?d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"course-content col-7 push-right-2"},u()(r,k))):"tag"===a&&"tasks"===n.class?d.a.createElement(N.a,{style:{backgroundColor:y},className:"spacing spacing--after tasks"},d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"course-content col-7 push-right-2",style:{borderColor:y}},"pre"===r.name?d.a.createElement("pre",null,u()(r,k)):u()(r,k)))):void 0}};return d.a.createElement(h.a,null,d.a.createElement("div",{className:"arrow-go-up",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},d.a.createElement("img",{src:Z.a,alt:"arrow-up"})),d.a.createElement("div",{className:"course-container spacing--small spacing--after"},d.a.createElement(N.a,{backgroundColor:y,className:"spacing--after",style:{backgroundImage:"url("+o.a.resolve(n.publicURL)+")",backgroundPosition:"center center",backgroundSize:"80%",backgroundRepeat:"no-repeat",backgroundColor:y}},d.a.createElement("div",{className:"container"},d.a.createElement(g.a,{upperCase:!0,content:[{backgroundColor:y,text:"Fullstack",link:"/about"},{backgroundColor:y,text:r,link:"/osa"+c},{backgroundColor:"black",text:l}]}))),d.a.createElement(E.a,{flex:!0},d.a.createElement(P,{part:c,letter:s,currentPartTitle:l,currentPath:a.path,colorCode:y,style:{top:this.state.h1Top}}),d.a.createElement("div",{className:"course"},d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"col-7 course-content push-right-2"},d.a.createElement("p",{className:"col-1 letter",style:{borderColor:y}},s),d.a.createElement(S.a,{headingLevel:"h1",text:l}))),i()(t,k))),d.a.createElement(f,null),d.a.createElement(v.a,{prev:c>0?c-1:void 0,next:c<8?c+1:void 0})),d.a.createElement(b.a,null))},a}(m.Component),Q="3989089508"},143:function(e,a,t){"use strict";var n=t(138),r=t(0),l=t.n(r),o=t(150),s=t.n(o),i=t(151),c=t.n(i),u=t(146);a.a=function(){return l.a.createElement("div",{id:"footer",className:"container spacing--after",style:{justifyContent:"space-between"}},l.a.createElement("div",{className:"col-4",style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("a",{href:"https://www.helsinki.fi/",className:"image--large image--contain",style:{width:"100%"}},l.a.createElement(u.a,{className:"image--large image--contain",src:s.a})),l.a.createElement("a",{href:"https://www.houston-inc.com/",className:"push-right-2",style:{width:"100%"}},l.a.createElement(u.a,{className:"image--large image--contain",src:c.a}))),l.a.createElement("div",{className:"col-2",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement(n.Link,{to:"/about",className:"nav-item-hover",style:{marginLeft:"4.5rem"}},"KURSSISTA"),l.a.createElement(n.Link,{to:"/faq",className:"nav-item-hover"},"FAQs")))}},156:function(e){e.exports={white:"#ffffff",black:"#000000",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},157:function(e,a,t){"use strict";t(28),t(162),t(187);var n=t(139),r=t.n(n),l=(t(163),t(138)),o=t(4),s=t.n(o),i=t(0),c=t.n(i),u=t(140),m=function(e){var a,t=e.className,n=e.link,o=e.content,s=e.stack,i=e.bold,m=e.thickBorder,d=e.upperCase,p=r()(e,["className","link","content","stack","bold","thickBorder","upperCase"]),g=c.a.createElement("div",{className:"arrow__container arrows--horizontal"},o.map(function(e,a){var n={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:"black"===e.backgroundColor?"white":"black"};return c.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper "+t},p),c.a.createElement("div",{className:"arrow__rectangle "+(i?"bold":"")+" "+(m?"arrow__rectangle--thick-border":""),style:n},e.link?c.a.createElement(l.Link,{to:e.link},d?e.text.toUpperCase():e.text):d?e.text.toUpperCase():e.text),c.a.createElement("div",{className:"arrow__point "+(m?"arrow__point--thick-border":""),style:n}))}));return s||n?!s&&n?a=c.a.createElement("div",{className:"spacing--small spacing--after-small"},c.a.createElement(l.Link,{to:n,style:{display:"inline-block"}},g)):s&&(a=c.a.createElement("div",{className:"col-10 spacing--after"},c.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},o.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:"black"===e.backgroundColor?"white":"black"};return c.a.createElement(l.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},p),c.a.createElement(u.a,{flex:!0,className:"arrow__rectangle",style:a},c.a.createElement("p",{className:"arrow--stacked-letter"},e.letter),c.a.createElement("p",{className:"arrow--stacked-title"},e.text)),c.a.createElement("div",{className:"arrow__point",style:a}))})))):a=c.a.createElement("div",{className:"col-10 spacing spacing--after"},g),a};m.propTypes={className:s.a.string,link:s.a.string,content:s.a.array.isRequired,stack:s.a.bool,upperCase:s.a.bool,bold:s.a.bool,thickBorder:s.a.bool},m.defaultProps={className:""},a.a=m},158:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28);var n=t(139),r=t.n(n),l=(t(165),t(4)),o=t.n(l),s=t(0),i=t.n(s),c=function(e){var a=e.className,t=e.backgroundColor,n=r()(e,["className","backgroundColor"]),l=t?{backgroundColor:t}:null;return i.a.createElement("div",Object.assign({className:"banner "+a,style:l},n))};c.defaultProps={className:""},c.propTypes={className:o.a.string}},159:function(e,a,t){"use strict";t.d(a,"a",function(){return E});t(28),t(162);var n=t(139),r=t.n(n),l=(t(189),t(170)),o=t.n(l),s=t(161),i=t.n(s),c=t(4),u=t.n(c),m=t(0),d=t.n(m),p=t(190),g=t.n(p),N=t(140),E=function(e){var a=e.text,t=e.className,n=e.heading,l=e.headingFontSize,s=e.bold,c=e.centered,u=e.noPadding,m=r()(e,["text","className","heading","headingFontSize","bold","centered","noPadding"]),p=[];c&&p.push("centered"),s&&p.push("bold"),u&&p.push("body-text--no-padding");var E={replace:function(e){var a=e.type,t=e.attribs,n=e.children;if("tag"===a&&"github-logo"===t.class)return d.a.createElement(N.a,{flex:!0,autoBottomMargin:!0,className:"github-logo__container"},d.a.createElement("img",{style:{maxWidth:"1rem",maxHeight:"1rem",margin:"auto 0"},alt:"github-logo",src:g.a}),d.a.createElement("p",{style:{marginLeft:"0.611rem"}},i()(n,E)))}};return d.a.createElement("div",Object.assign({className:"body-text "+t},m),n.title&&function(){if(n){var e=n.level;return d.a.createElement(e,{className:"body-text__title",style:l?{fontSize:l}:{}},n.title)}return null}(),a&&"string"==typeof a?d.a.createElement("p",{className:"body-text__content "+p.join(" ")},a):a&&a.map(function(e){return d.a.createElement("div",{key:e,className:"body-text__content "+p.join(" ")},o()(e,E))}))};E.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},E.propTypes={heading:u.a.shape({text:u.a.string,level:u.a.string}),headingFontSize:u.a.string,text:u.a.oneOfType([u.a.string,u.a.array]),className:u.a.string,centered:u.a.bool,bold:u.a.bool,noPadding:u.a.bool}},163:function(e,a,t){},165:function(e,a,t){},188:function(e,a,t){"use strict";var n=t(138),r=t(4),l=t(0),o=t.n(l),s=t(140),i=function(e){var a=e.prev,t=e.next;return o.a.createElement(s.a,{className:"container spacing spacing--after-large"},void 0!==a?o.a.createElement(n.Link,{to:"/osa"+a,className:"push-right-1"},o.a.createElement(s.a,{flex:!0,dirColumn:!0},o.a.createElement("p",{style:{textAlign:"right"}},"Osa ",a),o.a.createElement("b",null,"Edellinen osa"))):o.a.createElement(s.a,{className:"push-right-1"}),void 0!==t?o.a.createElement(n.Link,{to:"/osa"+t,className:"push-left-1"},o.a.createElement(s.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Osa ",t),o.a.createElement("b",null,"Seuraava osa"))):o.a.createElement(s.a,{className:"push-left-1"}))};i.defaultProps={prev:void 0,next:void 0},i.propTypes={prev:r.PropTypes.number,next:r.PropTypes.number},a.a=i},189:function(e,a,t){},190:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},217:function(e,a,t){"use strict";var n=t(6),r=t.n(n),l=(t(218),t(138)),o=t(4),s=t.n(o),i=t(0),c=t.n(i),u=t(159),m=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpened:!1},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},t.render=function(){var e=this,a=this.props,t=a.title,n=a.content,r=a.className,o=a.containerClassName,s=a.list,i=a.titleStyle,m=this.state.isOpened;return c.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+o},c.a.createElement("button",{className:"accordion accordion__title "+(m?"active":"")+" "+r,style:i,onClick:function(){return e.setState({isOpened:!m})}},t),c.a.createElement("div",{className:"panel",style:{padding:m?"2rem 18px":"",maxHeight:""+(m?"unset":0),transition:"max-height 0.2s ease-out"}},n&&c.a.createElement(u.a,{className:"col-8 push-right-1",text:n}),s&&c.a.createElement("ul",null,s.map(function(e){return c.a.createElement("li",{key:e.text},c.a.createElement(l.Link,{to:e.href},e.text))}))))},a}(i.Component);m.propTypes={title:s.a.string.isRequired,content:s.a.oneOfType([s.a.string,s.a.array]),list:s.a.array,className:s.a.string,containerClassName:s.a.string,initiallyOpened:s.a.bool,titleStyle:s.a.object},m.defaultProps={className:"",containerClassName:"",initiallyOpened:!1,titleStyle:{}},a.a=m},218:function(e,a,t){},219:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28);var n=t(139),r=t.n(n),l=(t(220),t(4)),o=t.n(l),s=t(0),i=t.n(s),c=function(e){var a=e.className,t=e.headingLevel,n=void 0===t?"h2":t,l=e.headingFontSize,o=e.text,s=r()(e,["className","headingLevel","headingFontSize","text"]),c=n;return i.a.createElement(c,Object.assign({className:"sub-header "+a,style:l?{fontSize:l}:{}},s),o)};c.propTypes={className:o.a.string,headingLevel:o.a.string,text:o.a.string.isRequired,headingFontSize:o.a.string},c.defaultProps={className:""}},220:function(e,a,t){},274:function(e,a,t){},293:function(e){e.exports={data:{allSidenavigationJson:{edges:[{node:{_0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},_1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},_2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},_3:{a:"Web-sovellusten toiminnan perusteet",b:"Node.js/Express",c:"Mongo",d:"Konfiguraatiot"},_4:{a:"Node.js/Express",b:"Node.js -sovellusten testaus",c:"JS",d:"Mongoose",e:"Web"},_5:{a:"React",b:"Frontendin testauksen alkeet",c:"Redux",d:"React+Redux",e:"Javascript"},_6:{a:"Redux",b:"React+Redux",c:"React"},_7:{a:"Webpack",b:"Tyylien lisääminen sovellukseen",c:"Testaus",d:"React",e:"React/Node-sovellusten tietoturva",f:"Tyypitys",g:"Tulevaisuuden trendejä"},_8:{a:"GraphQL"}}}]}}}},294:function(e,a,t){},428:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzEuNDk0IDMxLjQ5NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEuNDk0IDMxLjQ5NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzFFMjAxRDsiIGQ9Ik0xMC4yNzMsNS4wMDljMC40NDQtMC40NDQsMS4xNDMtMC40NDQsMS41ODcsMGMwLjQyOSwwLjQyOSwwLjQyOSwxLjE0MywwLDEuNTcxbC04LjA0Nyw4LjA0N2gyNi41NTQNCgljMC42MTksMCwxLjEyNywwLjQ5MiwxLjEyNywxLjExMWMwLDAuNjE5LTAuNTA4LDEuMTI3LTEuMTI3LDEuMTI3SDMuODEzbDguMDQ3LDguMDMyYzAuNDI5LDAuNDQ0LDAuNDI5LDEuMTU5LDAsMS41ODcNCgljLTAuNDQ0LDAuNDQ0LTEuMTQzLDAuNDQ0LTEuNTg3LDBsLTkuOTUyLTkuOTUyYy0wLjQyOS0wLjQyOS0wLjQyOS0xLjE0MywwLTEuNTcxTDEwLjI3Myw1LjAwOXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"}}]);
//# sourceMappingURL=component---src-templates-content-template-js-4f70ed4771062d3c9700.js.map