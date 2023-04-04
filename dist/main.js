(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,'* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.main-content {\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    font-weight: bold;\n    padding: 1rem;\n    background-color: blanchedalmond;\n    border-bottom: 1px solid black;\n}\n\n.content-left {\n    width: 10rem;\n}\n\n.content-right {\n    flex: 1;\n    padding: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.main-menu {\n    transition: 0.3s;\n    border: 1px solid black;\n}\n\n.main-menu:hover {\n    transform: rotate(180deg);\n}\n\n.menu-icon {\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n}\n\n.menu-icon:hover .dropdown-content {\n    display: block;\n    margin-left: 1rem;\n    margin-top: 1rem;\n}\n\n.dropmenu {\n    margin-bottom: 5px;\n}\n\n.dropmenu:hover {\n    background-color: rgb(164, 226, 164);\n    cursor: default;\n}\n\n.dropmenu:active {\n    transform: scale(95%);\n}\n\n.dropmenu {\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    border: 1px solid black;\n    background-color: blanchedalmond;\n}\n\n.xform {\n    display: flex;\n    flex-direction: column;\n}\n\n.popup {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: 400px;\n    transform: translate(-50%, -50%);\n    border: 1px solid black;\n    background-color: blanchedalmond;\n    padding: 1rem;\n    z-index: 10;\n}\n\ninput[type="text"],\ntextarea {\n    padding: 0.5rem;\n    border: 1px solid black;\n}\n\n.create {\n    margin: 1rem;\n    padding: 0.3rem;\n    font-size: 1rem;\n    border: 1px solid black;\n    background-color: blanchedalmond;\n}\n\n.close {\n    padding: 0.3rem;\n    font-size: 1rem;\n    border: 1px solid black;\n    background-color: blanchedalmond;\n}\n.create:hover,\n.close:hover,\n.deleteBtn:hover {\n    background-color: rgb(164, 226, 164);\n}\n\n.create:active,\n.close:active,\n.deleteBtn:active {\n    transform: scale(95%);\n}\n\n.result {\n    border: 1px solid black;\n    padding: 1rem;\n    display: inline-block;\n    transition: 0.3s;\n    margin: 1rem;\n    max-width: 400px;\n    overflow-wrap: break-word;\n}\n\n.result:hover {\n    transform: scale(1.1);\n}\n\n.deleteBtn {\n    margin-top: 1rem;\n    padding: 0.3rem;\n    font-size: 1rem;\n    border: 1px solid black;\n    background-color: blanchedalmond;\n}',""]);const i=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var d=n[i],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),d=t.n(i),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const b=document.querySelector(".content-right");let v=document.createElement("button");document.querySelector(".dropmenu").addEventListener("click",(function(){!function(){const n=document.createElement("div");n.classList.add("popup");const e=document.createElement("form");e.classList.add("xform");const t=document.createElement("label");t.setAttribute("for","subject"),t.textContent="Subject",e.appendChild(t);const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("class","subject"),r.setAttribute("name","subject"),e.appendChild(r);const o=document.createElement("label");o.setAttribute("for","subjectText"),o.textContent="Text",e.appendChild(o);const a=document.createElement("textarea");a.setAttribute("rows","20"),a.setAttribute("columns","60"),e.appendChild(a);const c=document.createElement("button");c.classList.add("create"),c.textContent="Create",e.appendChild(c);const i=document.createElement("button");i.classList.add("close"),i.textContent="Close",e.appendChild(i),n.appendChild(e),b.appendChild(n),c.addEventListener("click",(function(n){n.preventDefault();const e=document.createElement("div");e.classList.add("result");const t=document.createElement("div");t.classList.add("list-item"),t.textContent=r.value,e.appendChild(t);const o=document.createElement("hr");e.appendChild(o);const c=document.createElement("div");c.classList.add("list-item"),c.textContent=a.value,e.appendChild(c),v=document.createElement("button"),v.classList.add("deleteBtn"),v.textContent="Delete",e.appendChild(v),b.appendChild(e),v.addEventListener("click",(function(){b.removeChild(e)}))})),i.addEventListener("click",(function(e){e.preventDefault(),n.style.transform="scale(0)"}))}()}))})()})();