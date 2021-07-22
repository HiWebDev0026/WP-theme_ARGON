!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var a=n(2),r=(n.n(a),n(3)),o=n(5),l=(n.n(o),n(6)),c=(n.n(l),n(7));(0,wp.blocks.registerBlockType)("argon/alert",{title:Object(r.a)("\u63d0\u793a"),icon:"warning",category:"argon",keywords:["argon",Object(r.a)("\u63d0\u793a")],attributes:{color:{type:"string",default:"#7889e8"},content:{type:"string",default:""},fa_icon_name:{type:"string",default:"info-circle"}},edit:function(e){var t=function(t){e.setAttributes({content:t})},n=function(t){e.setAttributes({color:t})},a=function(t){e.setAttributes({fa_icon_name:t})};return wp.element.createElement("div",null,wp.element.createElement("div",{className:"alert",style:{backgroundColor:e.attributes.color}},!(Object(c.a)(e.attributes.fa_icon_name)||""==e.attributes.fa_icon_name)&&wp.element.createElement("span",{className:"alert-inner--icon"},wp.element.createElement("i",{className:"fa fa-"+e.attributes.fa_icon_name})),wp.element.createElement(o.RichText,{tagName:"span",className:"alert-inner--text",placeholder:Object(r.a)("\u5185\u5bb9"),value:e.attributes.content,onChange:t})),wp.element.createElement(o.InspectorControls,{key:"setting"},wp.element.createElement(l.PanelBody,{title:Object(r.a)("\u533a\u5757\u8bbe\u7f6e"),icon:"more",initialOpen:!0},wp.element.createElement(l.PanelRow,null,wp.element.createElement("div",{id:"gutenpride-controls"},wp.element.createElement("fieldset",null,wp.element.createElement(l.PanelRow,null,Object(r.a)("\u989c\u8272","argon")),wp.element.createElement(l.ColorPalette,{onChange:n,colors:[{name:"argon",color:"#7889e8"},{name:"green",color:"#4fd69c"},{name:"red",color:"#f75676"},{name:"blue",color:"#37d5f2"},{name:"orange",color:"#fc7c5f"},{name:"pink",color:"#fa7298"},{name:"black",color:"#3c4d69"}],value:e.attributes.color})),wp.element.createElement("fieldset",null,wp.element.createElement(l.PanelRow,null,Object(r.a)("\u56fe\u6807","argon")),wp.element.createElement(l.TextControl,{value:e.attributes.fa_icon_name,onChange:a}),wp.element.createElement("p",{className:"help-text"},Object(r.a)("Font Awesome \u4e2d\u7684\u56fe\u6807\u540d\uff0c\u7559\u7a7a\u5219\u4e0d\u663e\u793a","argon"),"\xa0",wp.element.createElement("a",{href:"https://fontawesome.com/v4.7.0/icons/",target:"_blank"},Object(r.a)("\u6d4f\u89c8\u56fe\u6807","argon")))))))))},save:function(e){return wp.element.createElement("div",{className:"alert",style:{backgroundColor:e.attributes.color}},!(Object(c.a)(e.attributes.fa_icon_name)||""==e.attributes.fa_icon_name)&&wp.element.createElement("span",{className:"alert-inner--icon"},wp.element.createElement("i",{className:"fa fa-"+e.attributes.fa_icon_name})),wp.element.createElement("span",{className:"alert-inner--text",dangerouslySetInnerHTML:{__html:e.attributes.content}}))}})},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return __});var a={};a.en_US=n(4).translations;var __=function(e){var t=argon_language;return"undefined"==typeof a[t]?e:"undefined"==typeof a[t][e]?e:a[t][e]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"translations",function(){return a});var a={"\u63d0\u793a":"Alert","\u533a\u5757\u8bbe\u7f6e":"Block Settings","\u989c\u8272":"Color","\u56fe\u6807":"Icon","Font Awesome \u4e2d\u7684\u56fe\u6807\u540d\uff0c\u7559\u7a7a\u5219\u4e0d\u663e\u793a":"The name of Font Awesome icon, leave it blank to hide the icon.","\u6d4f\u89c8\u56fe\u6807":"View icons"}},function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.components},function(e,t,n){"use strict";function a(e){return/\s/.test("number"===typeof e?String.fromCharCode(e):e.charAt(0))}t.a=a}]);