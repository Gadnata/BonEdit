/*
VidoRev Theme Library
Author: BeeTeam368
Author URI: http://themeforest.net/user/beeteam368
Version: 2.9.9.9.9.7
License: Themeforest Licence
License URI: http://themeforest.net/licenses
*/
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});
jQuery.noConflict();
window.global_up_down_scroll = 'down';
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}(function(){})});
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global.scrollDir = factory());
}(this, (function() {
    'use strict';
	
    var attribute = 'data-scrolldir';
    var dir = 'down'; // 'up' or 'down'
    var el = document.documentElement;
    var win = window;
    var body = document.body;
    var historyLength = 32; // Ticks to keep in history.
    var historyMaxAge = 512; // History data time-to-live (ms).
    var thresholdPixels = 64; // Ignore moves smaller than this.
    var history = Array(historyLength);
    var e = void 0; // last scroll event
    var pivot = void 0; // "high-water mark"
    var pivotTime = 0;

    function tick() {
        var y = win.scrollY || win.pageYOffset;
        var t = e.timeStamp;
        var furthest = dir === 'down' ? Math.max : Math.min;

        // Apply bounds to handle rubber banding
        var yMax = body.offsetHeight - win.innerHeight;
        y = Math.max(0, y);
        y = Math.min(yMax, y);

        // Update history
        history.unshift({
            y: y,
            t: t
        });
        history.pop();

        // Are we continuing in the same direction?
        if (y === furthest(pivot, y)) {
            // Update "high-water mark" for current direction
            pivotTime = t;
            pivot = y;
            return;
        }
        // else we have backed off high-water mark

        // Apply max age to find current reference point
        var cutoffTime = t - historyMaxAge;
        if (cutoffTime > pivotTime) {
            pivot = y;
            for (var i = 0; i < historyLength; i += 1) {
                if (!history[i] || history[i].t < cutoffTime) break;
                pivot = furthest(pivot, history[i].y);
            }
        }

        // Have we exceeded threshold?
        if (Math.abs(y - pivot) > thresholdPixels) {
            pivot = y;
            pivotTime = t;
            dir = dir === 'down' ? 'up' : 'down';
            el.setAttribute(attribute, dir);
			window.global_up_down_scroll = dir;
        }
    }

    function handler(event) {
        e = event;
        return win.requestAnimationFrame(tick);
    }

    function scrollDir(opts) {
        if (opts) {
            if (opts.attribute) attribute = opts.attribute;
            if (opts.el) el = opts.el;
            if (opts.win) win = opts.win;
            if (opts.dir) dir = opts.dir;
            // If opts.off, turn it off
            // - set html[data-scrolldir="off"]
            // - remove the event listener
            if (opts.off === true) {
                el.setAttribute(attribute, 'off');
                return win.removeEventListener('scroll', handler);
            }
        }

        // else, turn it on
        // - set html[data-scrolldir="down"]
        // - add the event listener
        pivot = win.scrollY || win.pageYOffset;
        el.setAttribute(attribute, dir);
        return win.addEventListener('scroll', handler);
    }

    return scrollDir;

})));

//http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
//MIT license
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
;(function(factory) {
    if(typeof define === 'function' && define.amd){
        define(['jquery'], factory);
    }else if (typeof exports !== 'undefined'){
        module.exports = factory(require('jquery'));
    }else{
        factory(jQuery);
    }
}(function($){
	'use strict';
	
	var prefix = 'vidorev_theme';		
	var vidorev_theme = window.vidorev_theme || {};
	
  	vidorev_theme = (function(){
		function vidorev_theme(el, options){
			var _ = this;
			
			_.defaults = {
									
			}
			
			if(typeof(options)==='object'){
				_.options = $.extend({}, _.defaults, options);
			}else{
				_.options = _.defaults;
			}
			
			_.$el = $(el);
			
			_.replaceAll = function (str, mapObj){
				var re = new RegExp(Object.keys(mapObj).join('|'), 'gi');
			
				return str.replace(re, function(matched){
					return mapObj[matched.toLowerCase()];
				});
			}
			
			_.check_atob = function(value){
				var _ = this;
				
				var old_value = value;
				
				var mapObj = {
				   '.mp4' : '',
				   '.m3u8' : '',
				}
				
				value = _.replaceAll(value, mapObj);
				
				try {
					window.atob(value);
					return window.atob(value);
				} catch(e) {
					return old_value;
				}
			}
			
			_.sticky_menu_on	= _.$el.hasClass('sticky-menu-on');
			_.sticky_behavior 	= 'down';
			if(_.$el.hasClass('sticky-behavior-up')){
				_.sticky_behavior = 'up';
			}
			
			_.sticky_sidebar_on	= _.$el.hasClass('sticky-sidebar-on');
			
			if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.query_vars)!=='undefined' && typeof(vidorev_jav_js_object.query_vars.paged)!=='undefined'){
				_.global_blog_page = vidorev_jav_js_object.query_vars.paged;
			}else{
				_.global_blog_page = -1;
			}
			if(_.global_blog_page==0){
				_.global_blog_page = 1;
			}
			_.global_blog_ajax_load = true;
			
			_.global_video_autoplay = 'off';			
			if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.video_auto_play)!=='undefined' && !_.getMobileOperatingSystem()){
				_.global_video_autoplay = vidorev_jav_js_object.video_auto_play;
			}
			
			_.global_browser_desktop_autoplay = 'on';
			var isBrowserNoAutoplay = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
			
			if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.vid_auto_play_mute)!=='undefined' && vidorev_jav_js_object.vid_auto_play_mute==='on'){
				isBrowserNoAutoplay = true;
			}
			
			if(!_.getMobileOperatingSystem() && isBrowserNoAutoplay){
				_.global_browser_desktop_autoplay = 'off';
			}
			
			_.global_muted_video = false;
			if(_.global_video_autoplay === 'on' && _.global_browser_desktop_autoplay === 'off'){
				_.global_muted_video = true;
			}
			
			_.preview_mode_active = false;
			if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.video_preview_mode)!=='undefined' && vidorev_jav_js_object.video_preview_mode==='on'){
				_.global_video_autoplay 	= 'on';
				_.global_muted_video 		= true;
				_.preview_mode_active		= true;
			}
			
			_.global_video_network_placeholder_hide = false;
			if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.amp_active)!=='undefined'){
				_.global_video_network_placeholder_hide = true;
			}
			
			/*chrome auto play for vimeo & facebook mute*/
				var isChromeBrowser = false;
				var isChromium 		= window.chrome;
				var winNav 			= window.navigator;
				var vendorName 		= winNav.vendor;
				var isOpera 		= typeof window.opr !== "undefined";
				var isIEedge 		= winNav.userAgent.indexOf("Edge") > -1;
				var isIOSChrome 	= winNav.userAgent.match("CriOS");
				
				if (isIOSChrome) {
					isChromeBrowser = true;
				} else if(
				  isChromium !== null &&
				  typeof isChromium !== "undefined" &&
				  vendorName === "Google Inc." &&
				  isOpera === false &&
				  isIEedge === false
				) {
					isChromeBrowser = true;
				} else { 
					isChromeBrowser = false;
				}
				
				_.global_video_network_mute_for_autoplay = false;
				if(_.global_video_autoplay === 'on' && isChromeBrowser){
					_.global_video_network_mute_for_autoplay = true;
				}				
			/*chrome auto play for vimeo & facebook mute*/
			
			_.global_number_format = 'short';
			if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.number_format)!=='undefined'){
				_.global_number_format = vidorev_jav_js_object.number_format;
			}
			
			_.global_video_lightbox_items = [];
			_.global_video_lightbox_suggested_posts = [];
			_.global_video_lightbox_live_comments = null;
			_.global_click_added_live_comment = null;
			_.global_video_vast_running = [];
			_.global_video_myCred_calculator = [];
			
			_.global_video_auto_next = typeof(Cookies.get('vpautonextvideo'))!=='undefined' && Cookies.get('vpautonextvideo') == 'true';
			
			_.global_hls_library = false;
			_.global_mpd_library = false;
			
			/*video ads*/
			_.default_ads_otps = {
				'vid_ads_m_video_ads':			'no',
				'vid_ads_m_video_ads_type':		'google_ima',
				'vid_ads_m_group_google_ima':	[],
				'vid_ads_m_group_image':		[],
				'vid_ads_m_group_html':			[],
				'vid_ads_m_group_dynamic':		[],
				'vid_ads_m_vpaid_mode':			'no',
				'vid_ads_m_vast_preroll':		[],
				'vid_ads_m_vast_postroll':		[],
				'vid_ads_m_vast_pauseroll':		[],
				'vid_ads_m_vast_midroll':		[],
				'vid_ads_m_time_to_show_ads':	'0',
				'vid_ads_m_time_skip_ads':		'5',
				'vid_ads_m_time_to_hide_ads':	'10'
			}
			
			if(typeof(vidorev_jav_plugin_video_ads_object) === 'object'){
				_.ads_opts = $.extend({}, _.default_ads_otps, vidorev_jav_plugin_video_ads_object);
			}else{
				_.ads_opts = _.default_ads_otps;
			}			
			
			if(typeof(vidorev_jav_plugin_video_ads_object_post) === 'object'){				
				
				if(typeof(vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads_type) !== 'undefined' && $.trim(vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads_type)!=''){										
					_.ads_opts = $.extend({}, _.default_ads_otps, vidorev_jav_plugin_video_ads_object_post);
				}
				
				if(typeof(vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads) !== 'undefined' && $.trim(vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads)!=''){
					_.ads_opts.vid_ads_m_video_ads = vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads;
				}else{
					if(typeof(vidorev_jav_plugin_video_ads_object) === 'object' && typeof(vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads) !== 'undefined' && $.trim(vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads)!=''){
						_.ads_opts.vid_ads_m_video_ads = vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads;
					}
				}
			}
			
			_.get_ads_params(_.ads_opts, true);
			
			_.is_ad_appeared = [];
			_.is_ad_google_ima_control = [];
			_.is_ad_google_ima_stated_event = [];
			_.global_player_playing = [];
			/*video ads*/
			
			/*youtube player*/
			_.you_rel 				= 0,
			_.you_modestbranding 	= 1,
			_.you_showinfo 			= 1;
				
			if(typeof(vidorev_jav_plugin_js_object)!=='undefined'){
				if(typeof(vidorev_jav_plugin_js_object.youtube_rel)!=='undefined' && vidorev_jav_plugin_js_object.youtube_rel==='yes'){
					_.you_rel = 1;
				}
				if(typeof(vidorev_jav_plugin_js_object.youtube_modestbranding)!=='undefined' && vidorev_jav_plugin_js_object.youtube_modestbranding==='no'){
					_.you_modestbranding = 0;
				}
				if(typeof(vidorev_jav_plugin_js_object.youtube_showinfo)!=='undefined' && vidorev_jav_plugin_js_object.youtube_showinfo==='no'){
					_.you_showinfo = 0;
				}
			}
			/*youtube player*/
			
			_.global_scroll_bar_lib = 'malihu';
			if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.scrollbar_library)!=='undefined' && vidorev_jav_js_object.scrollbar_library == 'overlay'){
				_.global_scroll_bar_lib = 'overlay';
			}
			
			_.init();
		}	
			
		return vidorev_theme;
	}());	
	
	vidorev_theme.prototype.get_ads_params = function(ads_opts, global){
		var _ = this;
		
		var ads_enable			= ads_opts.vid_ads_m_video_ads === 'yes'?true:false,
			ads_network			= ads_opts.vid_ads_m_video_ads_type, /*google_ima, image, html5_video, html, vast*/
			time_to_show_ads 	= (typeof(ads_opts.vid_ads_m_time_to_show_ads)!=='undefined'&&$.trim(ads_opts.vid_ads_m_time_to_show_ads)!='')?(ads_opts.vid_ads_m_time_to_show_ads).split(','):[0],
			time_skip_ads 		= (typeof(ads_opts.vid_ads_m_time_skip_ads)!=='undefined'&&_.isNumber(ads_opts.vid_ads_m_time_skip_ads))?parseFloat(ads_opts.vid_ads_m_time_skip_ads):5,
			time_to_hide_ads 	= (typeof(ads_opts.vid_ads_m_time_to_hide_ads)!=='undefined'&&_.isNumber(ads_opts.vid_ads_m_time_to_hide_ads))?parseFloat(ads_opts.vid_ads_m_time_to_hide_ads):10;
		
		var time_to_show_ads_arr = [];
		if(!Array.isArray(time_to_show_ads)){
			time_to_show_ads_arr = [0];
		}else{
			
			var new_time_to_show_ads = [];			
			$.each(time_to_show_ads, function(i, value){
				var new_val = $.trim(value);
				if(_.isNumber(new_val)){
					new_time_to_show_ads[i] = parseFloat(new_val);
				}
			});
			
			time_to_show_ads_arr = 
			($.grep(new_time_to_show_ads, function(n){ 
				return n == 0 || n;
			})).slice()
			.sort(function(a,b){
				return a > b;
			})
			.reduce(function(a,b){
				if (a.slice(-1)[0] !== b) a.push(b);
				return a;
			},[]);		
		}
		
		var va_google_ima_source 	= '',
			va_image_source 		= '',
			va_image_link 			= '',
			va_video_source 		= '',
			va_video_link 			= '',
			va_html_source 			= '',
			va_dynamic_type 		= '',
			va_dynamic_size_desk 	= '',
			va_dynamic_size_mob 	= '',
			va_dynamic_size_vert 	= '',
			va_dynamic_source 		= '',
			va_dynamic_link 		= '',
			va_vast_preroll 		= '',
			va_vast_postroll 		= '',
			va_vast_pauseroll 		= '',
			va_vast_midroll 		= '';
		
		if(	ads_opts.vid_ads_m_group_google_ima != null && Array.isArray(ads_opts.vid_ads_m_group_google_ima) && typeof(ads_opts.vid_ads_m_group_google_ima[0]) === 'object'){
			
			var adsIMARand = '';
			
			if(!_.getMobileOperatingSystem()){
				if(typeof(ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source) !== 'undefined' && Array.isArray(ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source) && ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source.length > 0){
					adsIMARand 	= ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source[Math.floor(Math.random() * ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source.length)];
				}
			}else{
				if(window.innerWidth>767){
					if(typeof(ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_tablet) !== 'undefined' && Array.isArray(ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_tablet) && ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_tablet.length > 0){
						adsIMARand 	= ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_tablet[Math.floor(Math.random() * ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_tablet.length)];
					}
				}else{
					if(typeof(ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_mobile) !== 'undefined' && Array.isArray(ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_mobile) && ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_mobile.length > 0){
						adsIMARand 	= ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_mobile[Math.floor(Math.random() * ads_opts.vid_ads_m_group_google_ima[0].vid_ads_m_ima_source_mobile.length)];
					}
				}
			}
			
			va_google_ima_source = adsIMARand;
			
		}
		
		if(ads_opts.vid_ads_m_group_image != null && Array.isArray(ads_opts.vid_ads_m_group_image) && ads_opts.vid_ads_m_group_image.length > 0){				
			var adsImageRand 	= ads_opts.vid_ads_m_group_image[Math.floor(Math.random() * ads_opts.vid_ads_m_group_image.length)],
				adsImageSource 	= $.trim(adsImageRand.vid_ads_m_image_source),
				adsImageLink 	= $.trim(adsImageRand.vid_ads_m_image_link);
				
			if(typeof(adsImageSource)!=='undefined' && adsImageSource!=''){
				va_image_source 	= adsImageSource;
				va_image_link 		= adsImageLink;
			}
		}
		
		if(ads_opts.vid_ads_m_group_html5_video != null && Array.isArray(ads_opts.vid_ads_m_group_html5_video) && ads_opts.vid_ads_m_group_html5_video.length > 0){				
			var adsVideoRand 	= ads_opts.vid_ads_m_group_html5_video[Math.floor(Math.random() * ads_opts.vid_ads_m_group_html5_video.length)],
				adsVideoSource 	= adsVideoRand.vid_ads_m_video_source,
				adsVideoLink 	= $.trim(adsVideoRand.vid_ads_m_video_link);
				
			if(typeof(adsVideoSource)==='object'){
				va_video_source 	= adsVideoSource;
				va_video_link 		= adsVideoLink;
			}
		}		
		
		if(	ads_opts.vid_ads_m_group_html != null 
			&& Array.isArray(ads_opts.vid_ads_m_group_html) 
			&& typeof(ads_opts.vid_ads_m_group_html[0]) === 'object' 
			&& typeof(ads_opts.vid_ads_m_group_html[0].vid_ads_m_html_source) !== 'undefined' 
			&& Array.isArray(ads_opts.vid_ads_m_group_html[0].vid_ads_m_html_source) 
			&& ads_opts.vid_ads_m_group_html[0].vid_ads_m_html_source.length > 0
		){
			var adsHTMLRand = ads_opts.vid_ads_m_group_html[0].vid_ads_m_html_source[Math.floor(Math.random() * ads_opts.vid_ads_m_group_html[0].vid_ads_m_html_source.length)];
			va_html_source = adsHTMLRand;	
			
			if( (adsHTMLRand.indexOf('ins class="adsbygoogle"')>0 || adsHTMLRand.indexOf('<ins class="adsbygoogle"')>0 || adsHTMLRand.indexOf('class="adsbygoogle"')>0 || (adsHTMLRand.indexOf('data-ad-client')>0 && adsHTMLRand.indexOf('data-ad-slot')>0) ) && adsHTMLRand.indexOf('script') == -1){
				va_html_source = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'+(adsHTMLRand)+'<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>';
			}
		}
		
		if(ads_opts.vid_ads_m_group_dynamic != null && Array.isArray(ads_opts.vid_ads_m_group_dynamic) && ads_opts.vid_ads_m_group_dynamic.length > 0){			
			
			var adsDynamicObj = ads_opts.vid_ads_m_group_dynamic[0];
				
			va_dynamic_type 		= (typeof(adsDynamicObj.vid_ads_m_dynamic_type) !== 'undefined'&&adsDynamicObj.vid_ads_m_dynamic_type!='')?adsDynamicObj.vid_ads_m_dynamic_type:'image';
			va_dynamic_size_desk 	= (typeof(adsDynamicObj.vid_ads_m_dynamic_size_desktop) !== 'undefined'&&adsDynamicObj.vid_ads_m_dynamic_size_desktop!='')?adsDynamicObj.vid_ads_m_dynamic_size_desktop:'336x280';
			va_dynamic_size_mob 	= (typeof(adsDynamicObj.vid_ads_m_dynamic_size_mobile) !== 'undefined'&&adsDynamicObj.vid_ads_m_dynamic_size_mobile!='')?adsDynamicObj.vid_ads_m_dynamic_size_mobile:'300x250';
			va_dynamic_size_vert 	= (typeof(adsDynamicObj.vid_ads_m_dynamic_vertial_align) !== 'undefined'&&adsDynamicObj.vid_ads_m_dynamic_vertial_align!='')?adsDynamicObj.vid_ads_m_dynamic_vertial_align:'bottom';
			
			if(va_dynamic_type == 'image'){
				va_dynamic_source 		= (typeof(adsDynamicObj.vid_ads_m_dyn_image_source) !== 'undefined'&&adsDynamicObj.vid_ads_m_dyn_image_source!='')?adsDynamicObj.vid_ads_m_dyn_image_source:'';
				if(window.innerWidth<992){
					va_dynamic_source 	= (typeof(adsDynamicObj.vid_ads_m_dyn_image_source_mob) !== 'undefined'&&adsDynamicObj.vid_ads_m_dyn_image_source_mob!='')?adsDynamicObj.vid_ads_m_dyn_image_source_mob:'';
				}
				va_dynamic_link 		= (typeof(adsDynamicObj.vid_ads_m_dyn_image_link) !== 'undefined'&&adsDynamicObj.vid_ads_m_dyn_image_link!='')?adsDynamicObj.vid_ads_m_dyn_image_link:'';
			}else if(va_dynamic_type == 'html'){
				var adsDynamicHTMLsource = (typeof(adsDynamicObj.vid_ads_m_dyn_html_source) !== 'undefined'&&adsDynamicObj.vid_ads_m_dyn_html_source!='')?adsDynamicObj.vid_ads_m_dyn_html_source:'';
				if(window.innerWidth<992){
					adsDynamicHTMLsource = (typeof(adsDynamicObj.vid_ads_m_dyn_html_source_mob) !== 'undefined'&&adsDynamicObj.vid_ads_m_dyn_html_source_mob!='')?adsDynamicObj.vid_ads_m_dyn_html_source_mob:'';
				}
				
				va_dynamic_source = adsDynamicHTMLsource;
				
				if( (adsDynamicHTMLsource.indexOf('ins class="adsbygoogle"')>0 || adsDynamicHTMLsource.indexOf('<ins class="adsbygoogle"')>0 || adsDynamicHTMLsource.indexOf('class="adsbygoogle"')>0 || (adsDynamicHTMLsource.indexOf('data-ad-client')>0 && adsDynamicHTMLsource.indexOf('data-ad-slot')>0) ) && adsDynamicHTMLsource.indexOf('script') == -1){
					va_dynamic_source = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'+(adsDynamicHTMLsource)+'<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>';
				}
			}
			
		}
		
		var vast_vpaid_mode	= (typeof(ads_opts.vid_ads_m_vpaid_mode)!=='undefined'&&ads_opts.vid_ads_m_vpaid_mode=='yes')?true:false;
		
		if(ads_opts.vid_ads_m_vast_preroll != null && Array.isArray(ads_opts.vid_ads_m_vast_preroll) && typeof(ads_opts.vid_ads_m_vast_preroll[0]) === 'object' 
		&& typeof(ads_opts.vid_ads_m_vast_preroll[0].vid_ads_m_vast_tag_pre) !== 'undefined' && $.trim(ads_opts.vid_ads_m_vast_preroll[0].vid_ads_m_vast_tag_pre)!=''){				
			va_vast_preroll = $.trim(ads_opts.vid_ads_m_vast_preroll[0].vid_ads_m_vast_tag_pre);
		}
		
		if(ads_opts.vid_ads_m_vast_postroll != null && Array.isArray(ads_opts.vid_ads_m_vast_postroll) && typeof(ads_opts.vid_ads_m_vast_postroll[0]) === 'object'
		&& typeof(ads_opts.vid_ads_m_vast_postroll[0].vid_ads_m_vast_tag_post) !== 'undefined' && $.trim(ads_opts.vid_ads_m_vast_postroll[0].vid_ads_m_vast_tag_post)!=''){				
			va_vast_postroll = $.trim(ads_opts.vid_ads_m_vast_postroll[0].vid_ads_m_vast_tag_post);
		}
		
		if(ads_opts.vid_ads_m_vast_pauseroll != null && Array.isArray(ads_opts.vid_ads_m_vast_pauseroll) && typeof(ads_opts.vid_ads_m_vast_pauseroll[0]) === 'object'
		&& typeof(ads_opts.vid_ads_m_vast_pauseroll[0].vid_ads_m_vast_tag_pause) !== 'undefined' && $.trim(ads_opts.vid_ads_m_vast_pauseroll[0].vid_ads_m_vast_tag_pause)!=''){				
			va_vast_pauseroll = $.trim(ads_opts.vid_ads_m_vast_pauseroll[0].vid_ads_m_vast_tag_pause);
		}
		
		if(ads_opts.vid_ads_m_vast_midroll != null && Array.isArray(ads_opts.vid_ads_m_vast_midroll) && ads_opts.vid_ads_m_vast_midroll.length > 0){				
			va_vast_midroll = ads_opts.vid_ads_m_vast_midroll;
		}
		
		if(global){
			
			_.ads_enable 			= ads_enable;	
			_.ads_network 			= ads_network;
			_.time_to_show_ads 		= time_to_show_ads_arr;
			_.time_skip_ads 		= time_skip_ads;
			_.time_to_hide_ads 		= time_to_hide_ads;
			
			_.va_google_ima_source 	= va_google_ima_source;
			
			_.va_image_source 		= va_image_source;
			_.va_image_link 		= va_image_link;
			
			_.va_video_source 		= va_video_source;
			_.va_video_link 		= va_video_link;
			
			_.va_html_source 		= va_html_source;
			
			_.va_dynamic_type 		= va_dynamic_type;
			_.va_dynamic_size_desk 	= va_dynamic_size_desk;
			_.va_dynamic_size_mob 	= va_dynamic_size_mob;
			_.va_dynamic_size_vert 	= va_dynamic_size_vert;
			_.va_dynamic_source 	= va_dynamic_source;
			_.va_dynamic_link 		= va_dynamic_link;
			
			_.vast_vpaid_mode		= vast_vpaid_mode;
			_.va_vast_preroll 		= va_vast_preroll;			
			_.va_vast_postroll 		= va_vast_postroll;
			_.va_vast_pauseroll  	= va_vast_pauseroll;
			_.va_vast_midroll  		= va_vast_midroll;
			
		}else{
			return {
				'ads_enable': 			ads_enable,
				'ads_network': 			ads_network,
				'time_to_show_ads': 	time_to_show_ads,
				'time_skip_ads': 		time_skip_ads,
				'time_to_hide_ads': 	time_to_hide_ads,
				'va_google_ima_source': va_google_ima_source,
				'va_image_source': 		va_image_source,
				'va_image_link': 		va_image_link,
				'va_video_source': 		va_video_source,
				'va_video_link': 		va_video_link,
				'va_html_source': 		va_html_source,
				
				'va_dynamic_type': 		va_dynamic_type,
				'va_dynamic_size_desk': va_dynamic_size_desk,
				'va_dynamic_size_mob': 	va_dynamic_size_mob,
				'va_dynamic_size_vert': va_dynamic_size_vert,
				'va_dynamic_source': 	va_dynamic_source,
				'va_dynamic_link': 		va_dynamic_link,
				
				'vast_vpaid_mode': 		vast_vpaid_mode,
				'va_vast_preroll': 		va_vast_preroll,
				'va_vast_postroll': 	va_vast_postroll,
				'va_vast_pauseroll': 	va_vast_pauseroll,
				'va_vast_midroll': 		va_vast_midroll,
			};
		}
	}
		
	/*init function [Core]*/
	vidorev_theme.prototype.init = function(){
		var _ = this;
		
		scrollDir({ 
			attribute: 'data-vp-scroll-direction'
		});
		
		_.mobile_menu_open();
		_.mobile_menu_items();
		_.fading_slide_control();
		_.clone_nav();	
		_.top_search_dropdown();	
		_.blog_switch_view();
		_.ajax_load_post();
		_.ajax_infinite_scroll();
		_.single_slider();
		_.video_light_off();
		_.video_share_toolbar();
		_.create_single_video_player();
		_.close_video_player_floating();
		_.auto_next_control();
		_.open_lightbox_video();
		_.close_lightbox_video_title();
		_.close_lightbox_video();
		_.add_scroll_bar_for_playlist();
		_.watch_later();
		_.archive_sort_button();
		_.scroll_control();
		_.alphabet_filter_action();	
		_.sticky_menu();	
		_.sticky_sidebar();
		_.popular_slider();
		_.megamenu_control();
		_.open_lightbox_image();
		_.video_repeat();
		_.amazon_product_link_action();	
		_.download_lightbox();
		_.side_menu();
		_.sv_showmore_content();
		_.video_theater_mode();
		
		_.window_load();
		_.window_resize();
		_.window_scroll();
		
		_.document_control();
		_.facebook_comment_control();
		_.facebook_like_button_control();
		_.single_video_clean_action();
		
		/*init*/		
		_.$el.trigger(prefix+'init', [_]);/*init*/
	}/*init function [Core]*/
	
	vidorev_theme.prototype.window_load = function(){
		var _ = this;
		$(window).on('load', function(){
			
		});
	}

	vidorev_theme.prototype.window_resize = function(){
		var _ 				= this,
			default_width 	= window.innerWidth;
			
		$(window).on('resize', function(){
			if(default_width === window.innerWidth){
				return;
			}
			
			default_width 	= window.innerWidth;
		});
	}

	vidorev_theme.prototype.window_scroll = function(){
		var _ = this;
		
		$(window).on('scroll', function(){
			_.sticky_menu();
			_.ajax_infinite_scroll();
			_.video_player_floating();
			_.scroll_to_top_button();
		});
	}
	vidorev_theme.prototype.document_control = function(){
		var _ = this;
		$(document).on('click', function(e){			

		});
	}
	
	vidorev_theme.prototype.scroll_to_top_button = function(){
		var _ = this;
		
		var $scroll_to_top_button = $('.scroll-to-top-button-control');
		
		if($scroll_to_top_button.length === 0){
			return;
		}
		
		if(document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight){
			$scroll_to_top_button.addClass('active-item').find('a').on('click.scrollToTop', function(){
				$('html, body').stop().animate({scrollTop:0}, {duration:500}, function(){});
				return false;
			});
		}else{
			$scroll_to_top_button.removeClass('active-item').find('a').off('.scrollToTop');
		}
	}
	
	vidorev_theme.prototype.megamenu_control = function(){
		var _ = this;
		
		_.$el.off('.megamenuControl').on('mouseenter.megamenuControl', '.megamenu-item-control', function(e){
			var $t = $(this),
				$parent = $t.parents('.megamenu-wrapper-control');
				
			$parent.find('.megamenu-item-control').addClass('hidden-item').removeClass('active-item');	
			$t.addClass('active-item').removeClass('hidden-item');
			
			var attrID = $.trim($t.attr('data-id'));
			if(typeof(attrID)!=='undefined' && attrID!=''){
				if($parent.find('.sc-blocks-container-control').length > 0){
					$parent.find('.sc-blocks-container-control').addClass('hidden-item').removeClass('active-item');
					$parent.find('.sc-blocks-container-control[data-id="'+(attrID)+'"]').addClass('active-item').removeClass('hidden-item');
				}else{
					$parent.find('.blog-wrapper-control').addClass('hidden-item').removeClass('active-item');
					$parent.find('.blog-wrapper-control[data-id="'+(attrID)+'"]').addClass('active-item').removeClass('hidden-item');
				}	
				
			}
		})
	}
	
	vidorev_theme.prototype.mobile_menu_open = function(){
		var _ = this;
		_.$el.off('.mobileMenuOpen').on('click.mobileMenuOpen', '.button-menu-mobile-control', function(e){
			_.$el.toggleClass('active-mobile-menu');
		})
	}
	
	vidorev_theme.prototype.mobile_menu_items = function(){
		var _ = this;
		_.$el.find('.vp-mobile-menu-items-control > ul > li.menu-item-has-children, .widget_nav_menu ul.menu > li.menu-item-has-children').each(function(index, element) {
			var $t = $(this),
				btn_control_class = 'open-submenu-'+(index);
			$t.append('<span class="open-submenu-mobile '+(btn_control_class)+'"><i class="fa fa-angle-right" aria-hidden="true"></i></span>').find('.'+(btn_control_class)).on('click', function(){
				$t.toggleClass('active-sub-menu').children('ul').slideToggle({duration:368});
			});
		});
	}
	
	vidorev_theme.prototype.fading_slide_control = function(){
		var _ = this;
		$('.fading-slide-control', _.$el).each(function(index, element){
			var $t = $(this);
			
			if($t.find('li').length<2){
				return;
			}
			
			if($t.find('.active-item').length === 0){
				$t.find('li:first-child').addClass('active-item');
			}
			
			setInterval(function(){
				var $next_item = $t.find('.active-item').next('li');
				if($next_item.length === 0){
					$next_item = $t.find('li:first-child');
				}
				
				$t.find('.active-item').removeClass('active-item').css({'display':'none'});
				$next_item.addClass('active-item').fadeIn('slow');
			}, 5000);
		});		
	}
	
	vidorev_theme.prototype.clone_nav = function(){
		var _ = this;
		
		if(!_.sticky_menu_on || $('.main-nav-control', _.$el).length===0){
			return;
		}
			
		$('.main-nav-control', _.$el).clone(true).addClass('sticky-menu-control sticky-menu').find('.wpdreams_asl_container').remove().end().insertAfter('#site-header');
	}
	
	vidorev_theme.prototype.sticky_menu = function(){
		var _ = this;
		
		var $nav_wrap_control = $('.nav-wrap-control', _.$el),
			$sticky_menu_control = $('.sticky-menu-control', _.$el);
		
		if(!_.sticky_menu_on || $sticky_menu_control.length===0){
			return;
		}
			
		if(_.sticky_behavior==='down'){
			if($(window).scrollTop() > $nav_wrap_control.offset().top+$nav_wrap_control.height()+10 && !$sticky_menu_control.hasClass('active-item')){
				$sticky_menu_control.addClass('active-item setTransit');				
				_.$el.trigger(prefix+'stickyMenuShow', [_]);			
			}else if($(window).scrollTop() <= $nav_wrap_control.offset().top && $sticky_menu_control.hasClass('active-item')){
				$sticky_menu_control.removeClass('active-item setTransit').find('a.top-search-dropdown-control').removeClass('active-item');
				$sticky_menu_control.removeClass('active-item setTransit').find('a.top-login-mobile-dropdown-control').removeClass('active-item');
				_.$el.trigger(prefix+'stickyMenuHide', [_]);
			}			
			return;
		}	
		
		if(window.global_up_down_scroll === 'up'){
			if($(window).scrollTop() > $nav_wrap_control.offset().top+$nav_wrap_control.height()+10 && !$sticky_menu_control.hasClass('active-item')){
				$sticky_menu_control.addClass('active-item setTransit');
				_.$el.trigger(prefix+'stickyMenuShow', [_]);
			}else if($(window).scrollTop() <= $nav_wrap_control.offset().top && $sticky_menu_control.hasClass('active-item')){
				$sticky_menu_control.removeClass('active-item setTransit').find('a.top-search-dropdown-control').removeClass('active-item');
				$sticky_menu_control.removeClass('active-item setTransit').find('a.top-login-mobile-dropdown-control').removeClass('active-item');
				_.$el.trigger(prefix+'stickyMenuHide', [_]);
			}
		}else if(window.global_up_down_scroll === 'down'){
			$sticky_menu_control.removeClass('active-item');
			_.$el.trigger(prefix+'stickyMenuHide', [_]);
		}
	}
	
	vidorev_theme.prototype.top_search_dropdown = function(){
		var _ = this;
		
		_.$el.off('.topSearchDropdown').on('click.topSearchDropdown', 'a.top-search-dropdown-control', function(e){
			
			_.$el.trigger(prefix+'topSearchDropdownBefore', [_]);
			
			var $t 		= $(this),
				$textfield = $t.parents('.top-search-elm-control').find('.search-terms-textfield-control');
				
			$t.toggleClass('active-item');	
			
			if($t.hasClass('active-item')){
				setTimeout(function(){
					$textfield.focus();
				}, 200);
				$textfield.focus();				
			}
			
			_.$el.trigger(prefix+'topSearchDropdownAfter', [_]);
			
			return false;
		});
		
		_.$el.off('.topLoginMobileDropdown').on('click.topLoginMobileDropdown', 'a.top-login-mobile-dropdown-control', function(e){
			
			_.$el.trigger(prefix+'topLoginMobileDropdownBefore', [_]);
			
			var $t 		= $(this);
				
			$t.toggleClass('active-item');
			
			_.$el.trigger(prefix+'topLoginMobileDropdownAfter', [_]);
			
			return false;
		});		
	}
	
	vidorev_theme.prototype.blog_switch_view = function(){
		var _ = this;
		
		_.$el.off('.blogSwitchView').on('click.blogSwitchView', '.switch-control', function(e){
			var $t = $(this),
				$blog_items = _.$el.find('.blog-items-control');
				
			var $parent = $t.parents('.series-heading-control');
			if($parent.length > 0 && $parent.next('.blog-items-control').length > 0){
				$blog_items = $parent.next('.blog-items-control');
			}
				
			if($blog_items.length > 0 && ( $blog_items.hasClass('grid-default') || $blog_items.hasClass('list-default') )){
				if($parent.length > 0){
					$parent.find('.switch-control').removeClass('active-item');
				}else{
					$('.switch-control').removeClass('active-item');
				}
				$t.addClass('active-item');
				if($t.hasClass('grid-icon')){
					$blog_items.addClass('grid-default').removeClass('list-default');
				}else if($t.hasClass('list-icon')){
					$blog_items.addClass('list-default').removeClass('grid-default');
				}
			}	
		});
	}
	
	vidorev_theme.prototype.ajax_post_action = function($t){
		var _ = this;
		
		if(_.global_blog_page === -1 || !_.global_blog_ajax_load){
			$t.blur();
			return false;
		}
		
		_.global_blog_ajax_load = false;
		
		var template 	= $t.attr('data-template'),
			style 		= $t.attr('data-style'),
			$parent		= $t.parents('.blog-wrapper-control'),
			$apply_html = $parent.find('.blog-items-control'),
			
			data 		= {
				'action': 		'blog_ajax_load_post',
				'blog_page': 	_.global_blog_page,
				'template': 	template,
				'query_vars':	vidorev_jav_js_object.query_vars,
				'style': 		style,
				'archive_query':(typeof(vidorev_jav_js_object.archive_query)!=='undefined')?vidorev_jav_js_object.archive_query:'',
				'alphabet_filter':(typeof(vidorev_jav_js_object.alphabet_filter)!=='undefined')?vidorev_jav_js_object.alphabet_filter:'',	
				'theme_image_ratio':(typeof(vidorev_jav_js_object.theme_image_ratio)!=='undefined')?vidorev_jav_js_object.theme_image_ratio:'',
				'security':		(typeof(vidorev_jav_js_object.security)!=='undefined')?vidorev_jav_js_object.security:'',
			};
			
		$t.addClass('ajax-loading active-item');	
			
		$.ajax({
			type: 		'POST',
			url: 		vidorev_jav_js_object.admin_ajax,
			cache: 		false,
			data: 		data,
			dataType: 	'html',
			success: 	function(data, textStatus, jqXHR){
				if(data != ''){
				
					$apply_html.append(data);
				
					_.global_blog_page = _.global_blog_page + 1;		
					
					if(typeof(vidorev_builder_control)!=="undefined" && vidorev_builder_control!==null){	
						vidorev_builder_control.imdb_rating_jsonp();		
					}
					
					if(typeof(window.vidorev_visible_image_opacity) !== 'undefined'){
						window.vidorev_visible_image_opacity();
					}
					
					if($apply_html.find('.blog-last-page-control').length>0){
						$parent.find('.blog-last-page-control').remove();
						$parent.find('.blog-pagination-control').remove();
					}
					
					_.$el.trigger('ajaxloadpostcomplete_themeControl', [_]);
				
				} else {
					
					_.global_blog_page = -1;
											
				}					
				
				_.global_blog_ajax_load = true;
				$t.removeClass('ajax-loading active-item').blur();
			},
			error: function( jqXHR, textStatus, errorThrown ){
				_.global_blog_ajax_load = true;
				$t.removeClass('ajax-loading active-item').blur();
			}
		});	
	}
	
	vidorev_theme.prototype.ajax_load_post = function(){
		var _ = this;
			
		_.$el.off('.ajaxLoadPost').on('click.ajaxLoadPost', 'a.loadmore-btn-control', function(e){
			
			var $t = $(this);
			
			_.ajax_post_action($t);
						
			return false;
		});
	}
	
	vidorev_theme.prototype.ajax_infinite_scroll = function(){
		var _ = this;
		
		var $infinite = _.$el.find('.infinite-scroll-control');
		
		if($infinite.length === 0){			
			return;
		}
		$infinite.each(function(index, element){
			var $t = $(this),
				ajaxVisible 	= $t.offset().top,
				ajaxScrollTop 	= $(window).scrollTop()+$(window).height();
				
			if(ajaxVisible <= (ajaxScrollTop) && (ajaxVisible + $(window).height()) > ajaxScrollTop){
				_.ajax_post_action($t);
			};	
		});
	}
	
	vidorev_theme.prototype.facebook_like_button_control = function(){
		var _ = this;
		
		var $fb_like_button_control = _.$el.find('.fb-like');
		
		if($fb_like_button_control.length === 0 || $fb_like_button_control.find('iframe').length > 0){
			return;
		}
		
		var requ_fnc 	= (typeof(FB)!=='undefined' && typeof(FB.Event)!=='undefined');
		var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.facebook_library_url)!=='undefined' && vidorev_jav_plugin_js_object.facebook_library_url!='')?vidorev_jav_plugin_js_object.facebook_library_url:'https://connect.facebook.net/en_US/sdk.js?ver=6.0#xfbml=1&version=v6.0';
		if(!requ_fnc){			
			_.requestScript(requ_url, function(){});
		}		
	}
	
	vidorev_theme.prototype.facebook_comment_control = function(){
		var _ = this;
		
		var $fb_scroll = _.$el.find('#vidorev_facebook_comment');
		
		if($fb_scroll.length === 0 || $fb_scroll.find('iframe').length > 0){
			return;
		}
		
		var requ_fnc 	= (typeof(FB)!=='undefined' && typeof(FB.Event)!=='undefined');
		var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.facebook_library_url)!=='undefined' && vidorev_jav_plugin_js_object.facebook_library_url!='')?vidorev_jav_plugin_js_object.facebook_library_url:'https://connect.facebook.net/en_US/sdk.js?ver=6.0#xfbml=1&version=v6.0';
		if(!requ_fnc){
			$fb_scroll.append('<div class="fb-load-comment-icon-control"><span class="video-load-icon"></span></div>');
			_.requestScript(requ_url, function(){
				var fb_triggerInterval = setInterval(function(){					
					if($fb_scroll.find('iframe').length > 0){												
						clearInterval(fb_triggerInterval);
						setTimeout(function(){
							$fb_scroll.find('.fb-load-comment-icon-control').remove();
						},688);					
					}
				},368);	
			});
		}		
	}	
	
	vidorev_theme.prototype.single_slider = function(){
		var _ = this;
		
		_.$el.find('.is-single-slider').each(function(index, element){
			var $t = $(this),
				$parent_wg = $t.parents('.vidorev-post-extensions');
			
			var options = {
				arrows:true,
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				adaptiveHeight: true,
				focusOnSelect: false,
				prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
			};
			
			if($t.hasClass('effect-fade')){
				options['fade'] = true;
			}
			
			$t.on('init', function(event, slick){
				if($parent_wg.length > 0){
					var $arrow_prev = $parent_wg.find('.widget-arrow-prev-control');
					var $arrow_next = $parent_wg.find('.widget-arrow-next-control');
					$arrow_prev.on('click', function(){
						slick.slickPrev();
					});
					$arrow_next.on('click', function(){
						slick.slickNext();
					});
				}
			});
			
			$t.find('img.ul-normal-effect').addClass('img-effect-setup img-loaded');
			$t.slick(options);
			
		});

	}
	
	vidorev_theme.prototype.video_light_off = function(){
		var _ = this;
		_.$el.off('.videoLightOffBTN').on('click.videoLightOffBTN', '.turn-off-light-control', function(e){
			var $t = $(this);
			$t.toggleClass('active-item');
			_.$el.toggleClass('light-off-enabled');					
		});
	}
	
	vidorev_theme.prototype.video_share_toolbar = function(){
		var _ = this;
		_.$el.off('.videoShareToolbar').on('click.videoShareToolbar', '.share-control', function(e){
			var $t 		= $(this),
				$parent = $t.parents('.single-player-video-wrapper');
				
			$t.toggleClass('active-item');
			$parent.find('.social-share-toolbar-control').toggleClass('active-item');					
		});
	}
	
	vidorev_theme.prototype.alphabet_filter_action = function(){
		var _ = this;
		_.$el.off('.alphabetFilterAction').on('click.alphabetFilterAction', '.alphabet-filter-control', function(e){			
			_.$el.toggleClass('active-alphabet-filter');					
		});
		
		$('#vidorev-advance-search-control').removeClass('init-loading-filter');
	}
	
	vidorev_theme.prototype.getMobileOperatingSystem = function(){
		return navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/);
	}
	
	vidorev_theme.prototype.loadAdsLibraries = function(callback){
		var _ 					= this,
			requ_fnc_adsense 	= (typeof(window)!=='undefined' && typeof(window.adsbygoogle)!=='undefined'),
			requ_fnc_ima 		= (typeof(google)!=='undefined' && typeof(google.ima)!=='undefined'),
			requ_url_adsense	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.google_adsense_library_url)!=='undefined' && vidorev_jav_plugin_js_object.google_adsense_library_url!='')?vidorev_jav_plugin_js_object.google_adsense_library_url:'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
			requ_url_ima		= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.google_ima_library_url)!=='undefined' && vidorev_jav_plugin_js_object.google_ima_library_url!='')?vidorev_jav_plugin_js_object.google_ima_library_url:'https://imasdk.googleapis.com/js/sdkloader/ima3.js';
		
		if(requ_fnc_adsense && requ_fnc_ima){
			callback();
		}else if(!requ_fnc_adsense && !requ_fnc_ima){
			_.requestScript(requ_url_adsense, function(){
				_.requestScript(requ_url_ima, callback);
			});
		}else{
			if(!requ_fnc_adsense){
				_.requestScript(requ_url_adsense, callback);
			}
			if(!requ_fnc_ima){
				_.requestScript(requ_url_ima, callback);
			}
		}
	}
	
	vidorev_theme.prototype.setYoutubeAPIReady = function(vid_id){
		
		var _ = 			this,
			prefix_vid_id = '';
			
		if(typeof(vid_id)!=='undefined'){
			prefix_vid_id = vid_id;
		}	
		
		setTimeout(function(){
			if($('script[src*="youtube.com/iframe_api"]').length>0 || $('script[src*="www-widgetapi.js"]').length>0){			
			
				var triggerInterval = setInterval(function(){					
					if(typeof(YT)!=='undefined' && typeof(YT.Player)!=='undefined'){
						_.loadAdsLibraries(function(){
							$(document).trigger(prefix+'youtubeAPIReady'+(prefix_vid_id), []);
						});						
						clearInterval(triggerInterval);
					}
				},368);			
				
			}else{
				
				var you_API_YTdeferred = $.Deferred();	
				
				window.onYouTubeIframeAPIReady = function(){
					you_API_YTdeferred.resolve(window.YT);
				}
						
				var tag = document.createElement('script');
				tag.src = (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.youtube_library_url)!=='undefined' && vidorev_jav_plugin_js_object.youtube_library_url!='')?vidorev_jav_plugin_js_object.youtube_library_url:'https://www.youtube.com/iframe_api';
				var firstScriptTag = document.getElementsByTagName('script')[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			
				you_API_YTdeferred.done(function(YT){
					_.loadAdsLibraries(function(){
						$(document).trigger(prefix+'youtubeAPIReady'+(prefix_vid_id), []);	
					});
				});
			}
		},368);	
	}
	
	vidorev_theme.prototype.setVideo3rdPartyAPIReady = function(vid_id, triggerName, networkAPI){
		
		var _ = 			this,
			prefix_vid_id = '';
			
		if(typeof(vid_id)!=='undefined'){
			prefix_vid_id = vid_id;
		}
			
		switch(networkAPI){
			case 'jw':
				var requ_fnc 	= (typeof(jwplayer)!=='undefined');
				var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.jwplayer_library_url)!=='undefined' && vidorev_jav_plugin_js_object.jwplayer_library_url!='')?vidorev_jav_plugin_js_object.jwplayer_library_url:'';
				break;
			
			case 'fluidplayer':
				var requ_fnc 	= (typeof(fluidPlayer)!=='undefined');
				var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.fluidplayer_library_url)!=='undefined' && vidorev_jav_plugin_js_object.fluidplayer_library_url!='')?vidorev_jav_plugin_js_object.fluidplayer_library_url:'';
				break;
				
			case 'Plyr':
				var requ_fnc 	= (typeof(Plyr)!=='undefined');
				var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.plyr_library_url)!=='undefined' && vidorev_jav_plugin_js_object.plyr_library_url!='')?vidorev_jav_plugin_js_object.plyr_library_url:'';
				break;	
				
			case 'vimeo':
				var requ_fnc 	= (typeof(Vimeo)!=='undefined' && typeof(Vimeo.Player)!=='undefined');
				var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.vimeo_library_url)!=='undefined' && vidorev_jav_plugin_js_object.vimeo_library_url!='')?vidorev_jav_plugin_js_object.vimeo_library_url:'https://player.vimeo.com/api/player.js';
				break;
				
			case 'dailymotion':
				var requ_fnc 	= (typeof(DM)!=='undefined' && typeof(DM.player)!=='undefined');
				var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.dailymotion_library_url)!=='undefined' && vidorev_jav_plugin_js_object.dailymotion_library_url!='')?vidorev_jav_plugin_js_object.dailymotion_library_url:'https://api.dmcdn.net/all.js';
				break;
				
			case 'facebook':
				var requ_fnc 	= (typeof(FB)!=='undefined' && typeof(FB.Event)!=='undefined');
				var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.facebook_library_url)!=='undefined' && vidorev_jav_plugin_js_object.facebook_library_url!='')?vidorev_jav_plugin_js_object.facebook_library_url:'https://connect.facebook.net/en_US/sdk.js?ver=6.0#xfbml=1&version=v6.0';
				break;
				
			case 'twitch':
				var requ_fnc 	= (typeof(Twitch)!=='undefined' && typeof(Twitch.Player)!=='undefined');
				var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.twitch_library_url)!=='undefined' && vidorev_jav_plugin_js_object.twitch_library_url!='')?vidorev_jav_plugin_js_object.twitch_library_url:'https://player.twitch.tv/js/embed/v1.js';
				break;
				
			case 'selfhosted':
				var requ_fnc 	= (typeof(mejs)!=='undefined');
				var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.mediaelement_library_url)!=='undefined' && vidorev_jav_plugin_js_object.mediaelement_library_url!='')?vidorev_jav_plugin_js_object.mediaelement_library_url:'';
				break;								
		}
		
		if(typeof(requ_fnc)==='undefined' || typeof(requ_url)==='undefined' || $.trim(requ_url)==''){
			return;
		}
		
		if(requ_fnc){
			_.loadAdsLibraries(function(){
				$(document).trigger(prefix+(triggerName)+(prefix_vid_id), []);
			});
		}else{
			_.requestScript(requ_url, function(){
				_.loadAdsLibraries(function(){
					$(document).trigger(prefix+(triggerName)+(prefix_vid_id), []);	
				});
			});
		}	
	}
	
	vidorev_theme.prototype.create_single_video_player = function(player_id, obj){
		var _ = this;
		
		if(typeof(obj)!=='undefined'){
			var player_obj 	= obj,
				autoplay 	= 'off',
				lightbox_cf = true;
				
				if(typeof(player_obj.sc_autoplay_valid)!=='undefined' && player_obj.sc_autoplay_valid==='on'){
					if(!_.getMobileOperatingSystem()){
						autoplay 	= 'on';
					}
					lightbox_cf = false;
				}
		}else{			
			if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.single_video_network)!=='undefined' && typeof(vidorev_jav_js_object.single_video_source)!=='undefined' && typeof(vidorev_jav_js_object.single_video_url)!=='undefined' && typeof(vidorev_jav_js_object.single_video_network_library_setup)!=='undefined'){
				var player_obj = vidorev_jav_js_object,
					autoplay = _.global_video_autoplay;
			}else{
				if(typeof(vidorev_jav_js_object.single_video_network_library_setup)==='undefined' && $('#player-api-control').length > 0){
					$('#player-api-control').append('<div class="require-plugin-player">You need to have installed "VidoRev Extensions Plugin" for used this feature.</div>').parents('.player-3rdparty-control').addClass('player-loaded');;
				}				
				return '';
			}			
		}
		
		/*if(typeof(player_obj.player_library)!=='undefined' && player_obj.player_library!='vp'){
			return '';
		}*/
				
		if(typeof(player_obj)!=='undefined' && typeof(player_obj.single_video_network)!=='undefined' && typeof(player_obj.single_video_source)!=='undefined' && typeof(player_obj.single_video_url)!=='undefined'){
			var single_video_network = player_obj.single_video_network,
				single_video_source = player_obj.single_video_source,
				single_video_url = player_obj.single_video_url;
				
				if(typeof(player_obj.ebs_sco_check)!=='undefined'){				
					single_video_url = _.check_atob(single_video_url);		
				}	
				
				if(typeof(player_id)==='undefined' || player_id === null){
					player_id = 'player-api-control'
				}
				
			if($('#'+(player_id)).length === 0){
				return '';
			}
			
			if(typeof(player_obj.vm_video_ratio)){
				var single_player_ratio = $.trim(player_obj.vm_video_ratio);
				if(single_player_ratio!='' && single_player_ratio!='16:9' && single_player_ratio.indexOf(':')>-1){
					var arr_spr = single_player_ratio.split(':');
					if(arr_spr.length === 2 && _.isNumber(arr_spr[0]) && _.isNumber(arr_spr[1])){						
						var final_ratio = arr_spr[1]/arr_spr[0]*100;
						var $parent_wrap_ratio = $('#'+(player_id)).parents('.video-player-wrap');
						$parent_wrap_ratio.addClass('parent_ratio_custom_'+(player_id));
						$('head').append('<style type="text/css">@media(min-width:768px){.parent_ratio_custom_'+(player_id)+' .video-player-ratio{padding-top:'+(final_ratio)+'%}}</style>');
					}
				}
			}	
			
			if(typeof(player_obj.vm_video_ratio_mobile)){
				var single_player_ratio_mobile = $.trim(player_obj.vm_video_ratio_mobile);
				if(single_player_ratio_mobile!='' && single_player_ratio_mobile!='16:9' && single_player_ratio_mobile.indexOf(':')>-1){
					var arr_spr_mobile = single_player_ratio_mobile.split(':');
					if(arr_spr_mobile.length === 2 && _.isNumber(arr_spr_mobile[0]) && _.isNumber(arr_spr_mobile[1])){						
						var final_ratio_mobile = arr_spr_mobile[1]/arr_spr_mobile[0]*100;
						var $parent_wrap_ratio_mobile = $('#'+(player_id)).parents('.video-player-wrap');
						$parent_wrap_ratio_mobile.addClass('parent_ratio_mobile_custom_'+(player_id));
						$('head').append('<style type="text/css">@media(max-width:767px){.parent_ratio_mobile_custom_'+(player_id)+' .video-player-ratio{padding-top:'+(final_ratio_mobile)+'%}}</style>');
					}
				}
			}	
			
			if(single_video_network=='drive' && $('#'+(player_id)).find('iframe[src*="https://drive.google.com"]').length > 0){
				single_video_network = 'embeded-code';
			}
				
			var $partyElm 			= $('#'+(player_id)).parents('.player-3rdparty-control'),
				player_init_id 		= (player_id)+'-init',
				$player 			= null,
				options 			= {},
				video_duration		= '',
				video_current_time	= '',
				first_create		= true,
				$poster_preload		= $partyElm.find('.autoplay-off-elm-control'),
				$playerMutedControl = $partyElm.find('.player-muted-control'),
				poster_background	= $poster_preload.attr('data-background-url');	
				
			if(typeof(player_obj.membership) && $.trim(player_obj.membership) != '' && (player_obj.membership).indexOf('<div class="trailer-notice">')==-1 && lightbox_cf == true){
				$('#'+(player_id)).html(player_obj.membership);
				$partyElm.addClass('player-loaded');
				return '';
			}
			
			if(typeof(player_obj.membership) && $.trim(player_obj.membership) != '' && (player_obj.membership).indexOf('<div class="trailer-notice">')>-1 && lightbox_cf == true){
				$partyElm.append(player_obj.membership);
			}
			
			if(typeof(player_obj.prime_video) && $.trim(player_obj.prime_video) != '' && lightbox_cf == true){
				$('#'+(player_id)).html(player_obj.prime_video);
				$partyElm.addClass('player-loaded');
				return '';
			}
			
			if(typeof(player_obj.woo_membership) && $.trim(player_obj.woo_membership) != '' && lightbox_cf == true){
				$('#'+(player_id)).html(player_obj.woo_membership);
				$partyElm.addClass('player-loaded');
				return '';
			}
			
			if(typeof(player_obj.mycred_sell) && $.trim(player_obj.mycred_sell) != '' && lightbox_cf == true){
				$('#'+(player_id)).html(player_obj.mycred_sell);
				$partyElm.addClass('player-loaded');
				return '';
			}
			
			if(typeof(player_obj.login_user_lock) && $.trim(player_obj.login_user_lock) != '' && lightbox_cf == true){
				$('#'+(player_id)).html(player_obj.login_user_lock);
				$partyElm.addClass('player-loaded');
				return '';
			}
				
			/*video ads params*/	
			var ads_enable 				= _.ads_enable,
				ads_network 			= _.ads_network,
				time_to_show_ads 		= _.time_to_show_ads,
				time_skip_ads 			= _.time_skip_ads,
				time_to_hide_ads 		= _.time_to_hide_ads,
				va_google_ima_source 	= _.va_google_ima_source,
				va_image_source 		= _.va_image_source,
				va_image_link 			= _.va_image_link,
				va_video_source 		= _.va_video_source,
				va_video_link 			= _.va_video_link,
				va_html_source 			= _.va_html_source,
				
				va_dynamic_type 		= _.va_dynamic_type,
				va_dynamic_size_desk 	= _.va_dynamic_size_desk,
				va_dynamic_size_mob 	= _.va_dynamic_size_mob,
				va_dynamic_size_vert 	= _.va_dynamic_size_vert,
				va_dynamic_source 		= _.va_dynamic_source,
				va_dynamic_link 		= _.va_dynamic_link,
				
				vast_vpaid_mode 		= _.vast_vpaid_mode,
				va_vast_preroll 		= _.va_vast_preroll,
				va_vast_postroll 		= _.va_vast_postroll,
				va_vast_pauseroll 		= _.va_vast_pauseroll,
				va_vast_midroll 		= _.va_vast_midroll;
					
			if(	typeof(player_obj.vidorev_jav_plugin_video_ads_object_post) === 'object'){
				
				if(typeof(player_obj.vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads_type) !== 'undefined' && $.trim(player_obj.vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads_type) != ''){				
					var new_ads_opts 	= $.extend({}, _.default_ads_otps, player_obj.vidorev_jav_plugin_video_ads_object_post);
					var new_ads_params 	= _.get_ads_params(new_ads_opts, false);				
					
					ads_network 			= new_ads_params.ads_network;
					time_to_show_ads 		= new_ads_params.time_to_show_ads;
					time_skip_ads 			= new_ads_params.time_skip_ads;
					time_to_hide_ads 		= new_ads_params.time_to_hide_ads;
					va_google_ima_source 	= new_ads_params.va_google_ima_source;
					va_image_source 		= new_ads_params.va_image_source;
					va_image_link 			= new_ads_params.va_image_link;
					va_video_source 		= new_ads_params.va_video_source;
					va_video_link 			= new_ads_params.va_video_link;
					va_html_source 			= new_ads_params.va_html_source;
					
					va_dynamic_type 		= new_ads_params.va_dynamic_type;
					va_dynamic_size_desk 	= new_ads_params.va_dynamic_size_desk;
					va_dynamic_size_mob 	= new_ads_params.va_dynamic_size_mob;
					va_dynamic_size_vert 	= new_ads_params.va_dynamic_size_vert;
					va_dynamic_source 		= new_ads_params.va_dynamic_source;
					va_dynamic_link 		= new_ads_params.va_dynamic_link;
					
					vast_vpaid_mode 		= new_ads_params.vast_vpaid_mode;
					va_vast_preroll 		= new_ads_params.va_vast_preroll;
					va_vast_postroll 		= new_ads_params.va_vast_postroll;
					va_vast_pauseroll 		= new_ads_params.va_vast_pauseroll;
					va_vast_midroll 		= new_ads_params.va_vast_midroll;
				}
				
				if(typeof(player_obj.vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads) !== 'undefined' && $.trim(player_obj.vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads) != ''){
					ads_enable 				= player_obj.vidorev_jav_plugin_video_ads_object_post.vid_ads_m_video_ads==='yes'?true:false;
				}
			}
			
			if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.video_preview_mode)!=='undefined' && vidorev_jav_js_object.video_preview_mode==='on'){
				ads_enable = false;
			}
			
			if(typeof(vidorev_jav_plugin_video_ads_object)!=='undefined' && typeof(vidorev_jav_plugin_video_ads_object.vid_ads_m_hide_ads_membership_result)!=='undefined' && vidorev_jav_plugin_video_ads_object.vid_ads_m_hide_ads_membership_result==='hide'){
				ads_enable = false;
			}
			
			var ads_object = {
				'ads_enable': 			ads_enable,
				'ads_network': 			ads_network,
				'time_to_show_ads': 	time_to_show_ads,
				'time_skip_ads': 		time_skip_ads,
				'time_to_hide_ads': 	time_to_hide_ads,
				'va_google_ima_source': va_google_ima_source,
				'va_image_source': 		va_image_source,
				'va_image_link': 		va_image_link,
				'va_video_source': 		va_video_source,
				'va_video_link': 		va_video_link,
				'va_html_source': 		va_html_source,
				
				'va_dynamic_type': 		va_dynamic_type,
				'va_dynamic_size_desk': va_dynamic_size_desk,
				'va_dynamic_size_mob': 	va_dynamic_size_mob,
				'va_dynamic_size_vert': va_dynamic_size_vert,
				'va_dynamic_source': 	va_dynamic_source,
				'va_dynamic_link': 		va_dynamic_link,
				
				'vast_vpaid_mode':		vast_vpaid_mode,
				'va_vast_preroll': 		va_vast_preroll,
				'va_vast_postroll': 	va_vast_postroll,
				'va_vast_pauseroll': 	va_vast_pauseroll,
				'va_vast_midroll': 		va_vast_midroll,
			}/*video ads params*/
			
			var $lib_item_control				= $('#'+(player_id)).parents('.lib-item-control');
			
			var is_used_plyr_player 			= (typeof(player_obj.player_library)!=='undefined'&&player_obj.player_library=='vp'&&typeof(player_obj.plyr_player)!=='undefined'&&player_obj.plyr_player=='on');
			
			/*3rd party*/
			if(typeof(player_obj.player_library)!=='undefined' && player_obj.player_library!='vp'){
				switch(player_obj.player_library){
					case 'jw':
						$(document).on(prefix+'jwAPIReady'+(player_id), function(){
						/*api ready*/	
							if(typeof(jwplayer)!=='undefined'){							
								if(typeof(vidorev_jav_js_object.jwplayer_licence_key)!=='undefined' && vidorev_jav_js_object.jwplayer_licence_key!=''){
									jwplayer.key = vidorev_jav_js_object.jwplayer_licence_key;
								}
								
								var jw_pos_img = $partyElm.find('img.poster-preload').attr('src');
								
								if(typeof(jw_pos_img)==='undefined'){
									jw_pos_img = '';
								}
								
								options = {
									'file':	 	single_video_url,
									'image': 	jw_pos_img,								
								}
								
								if(typeof(player_obj.single_media_sources)!=='undefined' && Array.isArray(player_obj.single_media_sources)){
									var array_sources = [];
									$.each(player_obj.single_media_sources, function(i, value){
										if(typeof(value)==='object'){
											if(typeof(value.source_file)!=='undefined' && $.trim(value.source_file)!=''){
												array_sources[i] = {};
												
												if(typeof(player_obj.ebs_sco_check)!=='undefined'){
													array_sources[i].file = _.check_atob($.trim(value.source_file));
												}else{
													array_sources[i].file = $.trim(value.source_file);
												}
												
												if(typeof(value.source_label)!=='undefined' && $.trim(value.source_label)!=''){
													array_sources[i].label = $.trim(value.source_label);
												}
											}
										}
									});
								}
								
								if(typeof(array_sources)!=='undefined' && Array.isArray(array_sources) && array_sources.length>0){
									options.sources = array_sources;
								}
								
								if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
									options.advertising = {
										'client': 		'googima',
										'tag': 			va_google_ima_source,
										'skipoffset': 5,
										/*'cuetext': 		'Advertisement',
										'skipmessage': 	'Skip ad in xx',
										'skiptext': 	'Skip',*/							
									}
								}
								
								if(_.preview_mode_active){
									options.controls = false;
								}
								
								$player = jwplayer(player_id).setup(options);
								
								$player.on('ready', function(){
									if(_.global_muted_video){
										$player.setMute(true);
									}
									
									$player.on('play', function(e){								
										_.global_player_playing[player_id] = true;								
										if(typeof($player.getMute())!=='undefined' && $player.getMute() && first_create && !_.preview_mode_active){
											$playerMutedControl.addClass('active-item').on('click', function(){
												$player.setMute(false);
												$(this).removeClass('active-item');
											});
										}	
										first_create = false;
									});
									
									/*ads control*/
									if(ads_enable && ads_network != 'google_ima'){				
										$player.on('time', function(data){
											
											video_duration 		= data.duration;	
											
											if(video_duration===0){
												return;
											}
											
											video_current_time 	= data.currentTime;
											
											_.video_ads({
												'player': 				$player,
												'single_video_network': single_video_network,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
												'partyElm':				$partyElm,
												'ads_object':			ads_object,
											});
											
											_.video_myCred_points({
												'player': 				$player,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
											});
											
										});
									}else{
										if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
											$player.on('time', function(data){
											
												video_duration 		= data.duration;	
												
												if(video_duration===0){
													return;
												}
												
												video_current_time 	= data.currentTime;
												
												_.video_myCred_points({
													'player': 				$player,
													'video_duration': 		video_duration,
													'video_current_time': 	video_current_time,
													'player_id': 			player_id,
												});
												
											});
										}
									}/*ads control*/	
									
									setTimeout(function(){
										
										$player.vidorev_partyLibrary = 'jw';	
										
										if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
											/*Google IMA*/
											_.ads_google_ima({
												'player': 				$player,																
												'player_id': 			player_id,
												'player_init_id': 		player_init_id,
												'partyElm':				$partyElm,
												'fake_player':			_.fake_player({
																			'player': 				$player,
																			'single_video_network': single_video_network,
																		}),
												'autoplay':				autoplay,
												'va_google_ima_source': va_google_ima_source,					
											});
										}else{
										
											$partyElm.addClass('player-loaded');
																		
											if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){								
												$player.play();																
											}else{
												if(!_.global_video_network_placeholder_hide){
													$poster_preload
													.css({'background-image': 'url(' + (poster_background) + ')'})
													.addClass('active-item')
													.on('click', function(){
														$player.play();
														$(this).removeClass('active-item');
													});
												}
											}
											
											$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);
										
										}
										
										if(player_id === 'player-api-control'){
											_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
												_.player_actions($player, single_video_network, 'pause');
											});
										}
										
										_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);
										
									}, 368);
									
									$player.on('complete', function(e){
										$playerMutedControl.removeClass('active-item');
										
										_.reset_ads(player_id);
										
										_.auto_next_fnc({
											'player': 				$player,
											'partyElm':				$partyElm,
											'player_id': 			player_id,
											'single_video_network': single_video_network,
										});
									});
								});
								
								$player.on('setupError', function(){
									$partyElm.addClass('player-loaded');
								});
								
								return '';
							}else{
								$('#'+(player_id)).prepend('<div class="require-plugin-player">You need to declare the library for JWPlayer. Please refer to the documentation.</div>');
								$partyElm.addClass('player-loaded');
							}
						/*api ready*/	
						});
						_.setVideo3rdPartyAPIReady(player_id, 'jwAPIReady', 'jw');
						
						return '';
						
						break;
						
					case 'fluidplayer':	
						
						$(document).on(prefix+'fluidplayerAPIReady'+(player_id), function(){
						/*api ready*/	
							if(typeof(fluidPlayer)!=='undefined' && typeof(vidorev_jav_plugin_fluidplayer_object)!=='undefined'){							
								var $fluidplayer_action = null;
								
								var ff_pos_img = $partyElm.find('img.poster-preload').attr('src');
								
								if(typeof(ff_pos_img)==='undefined'){
									ff_pos_img = false;
								}
								
								var boolean_pr 	= false,
									html_pr		= '';
								
								if(_.global_muted_video || autoplay==='on'){
									boolean_pr 	= true;
									html_pr		= 'muted';
								}
								
								options = {
									layoutControls: {
										fillToContainer: true,
										primaryColor: false,
										posterImage: ff_pos_img,
										autoPlay: false,
										playButtonShowing: true,
										playPauseAnimation: true,
										mute: boolean_pr,
										logo: {
											imageUrl: null,
											position: 'top left',
											clickUrl: null,
											opacity: 1,
											mouseOverImageUrl: null,
											imageMargin: '15px',
											hideWithControls: false,
											showOverAds: false
										},
										htmlOnPauseBlock: {
											html: null,
											height: null,
											width: null,
										},
										allowDownload: false,
										allowTheatre: false,
										playbackRateEnabled: true,
										controlBar: {
											autoHide: true,
											autoHideTimeout: 5,
											animated: true,
										},
										persistentSettings: {
											volume:  false,
											quality: false,
											speed:   false,
											theatre: false
										},
										playerInitCallback: (function(){
																					
											setTimeout(function(){
												
												if(ff_pos_img!==false && typeof(player_obj.video_player_background)!=='undefined' && player_obj.video_player_background === 'on'){
													$partyElm.find('.fluid_video_wrapper video').css({'background-image': 'url(' + (ff_pos_img) + ')'});
												}								
									
												if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
													/*Google IMA*/
													_.ads_google_ima({
														'player': 				$player,																
														'player_id': 			player_id,
														'player_init_id': 		player_init_id,
														'partyElm':				$partyElm,
														'fake_player':			_.fake_player({
																					'player': 				$player,
																					'single_video_network': single_video_network,
																				}),
														'autoplay':				autoplay,
														'va_google_ima_source': va_google_ima_source,					
													});
												}else{
													$partyElm.addClass('player-loaded');
													
													if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){							
														$player.play();											
													}else{
														//$player.volume = 1;
													}
																									
													$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);					
												}
												
												if(player_id === 'player-api-control'){
													_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
														_.player_actions($player, single_video_network, 'pause');
													});
												}
												
												_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);											
												
											},368);	
											
										}),
									},
									vastOptions: {
										adList:                     {},
										skipButtonCaption:          'Skip ad in [seconds]',
										skipButtonClickCaption:     'Skip ad <span class="skip_button_icon"></span>',
										adText:                     null,
										adTextPosition:             'top left',
										adCTAText:                  false,
										adCTATextPosition:          'bottom right',
										vastTimeout:                5000,
										maxAllowedVastTagRedirects: 3,
										showProgressbarMarkers: 	true,
									}							
								}
								
								if(typeof(vidorev_jav_plugin_fluidplayer_object.vid_fluid_m_styling)!=='undefined' && Array.isArray(vidorev_jav_plugin_fluidplayer_object.vid_fluid_m_styling) && typeof(vidorev_jav_plugin_fluidplayer_object.vid_fluid_m_styling[0])!=='undefined'){
									
									var fluidStyle = vidorev_jav_plugin_fluidplayer_object.vid_fluid_m_styling[0];
									
									if(typeof(fluidStyle['vid_fluid_m_logo_url'])!=='undefined' && $.trim(fluidStyle['vid_fluid_m_logo_url'])!=''){									
										options.layoutControls.logo.imageUrl = $.trim(fluidStyle['vid_fluid_m_logo_url']);
									}
									if(typeof(fluidStyle['vid_fluid_m_logo_hover_url'])!=='undefined' && $.trim(fluidStyle['vid_fluid_m_logo_hover_url'])!=''){
										options.layoutControls.logo.mouseOverImageUrl = $.trim(fluidStyle['vid_fluid_m_logo_hover_url']);
									}
									if(typeof(fluidStyle['vid_fluid_m_logo_click_url'])!=='undefined' && $.trim(fluidStyle['vid_fluid_m_logo_click_url'])!=''){
										options.layoutControls.logo.clickUrl = $.trim(fluidStyle['vid_fluid_m_logo_click_url']);
									}
									if(typeof(fluidStyle['vid_fluid_m_display_logo'])!=='undefined' && $.trim(fluidStyle['vid_fluid_m_display_logo'])!=''){
										options.layoutControls.logo.position = $.trim(fluidStyle['vid_fluid_m_display_logo']);
									}
									if(typeof(fluidStyle['vid_fluid_m_logo_opacity'])!=='undefined' && _.isNumber(fluidStyle['vid_fluid_m_logo_opacity'])){
										options.layoutControls.logo.opacity = parseFloat(fluidStyle['vid_fluid_m_logo_opacity'])/100;
									}
									if(typeof(fluidStyle['vid_fluid_m_logo_margin'])!=='undefined' && $.trim(fluidStyle['vid_fluid_m_logo_margin'])!=''){
										options.layoutControls.logo.imageMargin = $.trim(fluidStyle['vid_fluid_m_logo_margin']);
									}
									if(typeof(fluidStyle['vid_fluid_m_primary_color'])!=='undefined' && $.trim(fluidStyle['vid_fluid_m_primary_color'])!=''){
										options.layoutControls.primaryColor = $.trim(fluidStyle['vid_fluid_m_primary_color']);
									}
								}
								
								var vast_valign 			= 'bottom';
								var vast_nonlinearDuration 	= 10;
								var vast_size 				= '728x90';
								
								if(typeof(
									vidorev_jav_plugin_fluidplayer_object.vid_fluid_m_vast_configuration)!=='undefined' &&
									Array.isArray(vidorev_jav_plugin_fluidplayer_object.vid_fluid_m_vast_configuration) &&
									typeof(vidorev_jav_plugin_fluidplayer_object.vid_fluid_m_vast_configuration[0])!=='undefined'
								){
									var fluid_vast_configuration = vidorev_jav_plugin_fluidplayer_object.vid_fluid_m_vast_configuration[0];
									
									if(typeof(fluid_vast_configuration['vid_fluid_m_skipbuttoncaption'])!=='undefined' && $.trim(fluid_vast_configuration['vid_fluid_m_skipbuttoncaption'])!=''){									
										options.vastOptions.skipButtonCaption = $.trim(fluid_vast_configuration['vid_fluid_m_skipbuttoncaption']);
									}								
									if(typeof(fluid_vast_configuration['vid_fluid_m_skipbuttonclickcaption'])!=='undefined' && $.trim(fluid_vast_configuration['vid_fluid_m_skipbuttonclickcaption'])!=''){									
										options.vastOptions.skipButtonClickCaption = $.trim(fluid_vast_configuration['vid_fluid_m_skipbuttonclickcaption']);
									}								
									if(typeof(fluid_vast_configuration['vid_fluid_m_adtext'])!=='undefined' && $.trim(fluid_vast_configuration['vid_fluid_m_adtext'])!=''){									
										options.vastOptions.adText = $.trim(fluid_vast_configuration['vid_fluid_m_adtext']);
									}								
									if(typeof(fluid_vast_configuration['vid_fluid_m_adtextposition'])!=='undefined' && $.trim(fluid_vast_configuration['vid_fluid_m_adtextposition'])!=''){									
										options.vastOptions.adTextPosition = $.trim(fluid_vast_configuration['vid_fluid_m_adtextposition']);
									}
									if(typeof(fluid_vast_configuration['vid_fluid_m_adctatext'])!=='undefined' && $.trim(fluid_vast_configuration['vid_fluid_m_adctatext'])!=''){									
										options.vastOptions.adCTAText = $.trim(fluid_vast_configuration['vid_fluid_m_adctatext']);
									}
									if(typeof(fluid_vast_configuration['vid_fluid_m_adctatextposition'])!=='undefined' && $.trim(fluid_vast_configuration['vid_fluid_m_adctatextposition'])!=''){									
										options.vastOptions.adCTATextPosition = $.trim(fluid_vast_configuration['vid_fluid_m_adctatextposition']);
									}
									if(typeof(fluid_vast_configuration['vid_fluid_m_vasttimeout'])!=='undefined' && _.isNumber(fluid_vast_configuration['vid_fluid_m_vasttimeout'])){
										options.vastOptions.vastTimeout = parseFloat(fluid_vast_configuration['vid_fluid_m_vasttimeout']);
									}
									if(typeof(fluid_vast_configuration['vid_fluid_m_maxallowedvasttagredirects'])!=='undefined' && _.isNumber(fluid_vast_configuration['vid_fluid_m_maxallowedvasttagredirects'])){
										options.vastOptions.maxAllowedVastTagRedirects = parseFloat(fluid_vast_configuration['vid_fluid_m_maxallowedvasttagredirects']);
									}
									if(typeof(fluid_vast_configuration['vid_fluid_m_valign'])!=='undefined' && $.trim(fluid_vast_configuration['vid_fluid_m_valign'])!=''){									
										vast_valign = $.trim(fluid_vast_configuration['vid_fluid_m_valign']);
									}
									if(typeof(fluid_vast_configuration['vid_fluid_m_nonlinearduration'])!=='undefined' && _.isNumber(fluid_vast_configuration['vid_fluid_m_nonlinearduration'])){
										vast_nonlinearDuration = parseFloat(fluid_vast_configuration['vid_fluid_m_nonlinearduration']);
									}
									if(typeof(fluid_vast_configuration['vid_fluid_m_size'])!=='undefined' && $.trim(fluid_vast_configuration['vid_fluid_m_size'])!=''){									
										vast_size = $.trim(fluid_vast_configuration['vid_fluid_m_size']);
									}
								}							
								
								if(ads_enable && ads_network === 'vast'){
									var vast_arr = [];
								
									if(typeof(ads_object.va_vast_preroll)!=='undefined' && ads_object.va_vast_preroll!=''){
										if(typeof(ads_object.vast_vpaid_mode)!=='undefined' && ads_object.vast_vpaid_mode){
											vast_arr[vast_arr.length] = {
												roll: 		'preRoll',
												vastTag: 	ads_object.va_vast_preroll,
											}
										}else{
											vast_arr[vast_arr.length] = {
												roll: 				'preRoll',
												vastTag: 			ads_object.va_vast_preroll,
												vAlign:				vast_valign,
												nonlinearDuration:	vast_nonlinearDuration,
												size:				vast_size,
											}
										}										
									}
									if(typeof(ads_object.va_vast_postroll)!=='undefined' && ads_object.va_vast_postroll!=''){										
										if(typeof(ads_object.vast_vpaid_mode)!=='undefined' && ads_object.vast_vpaid_mode){
											vast_arr[vast_arr.length] = {
												roll: 				'postRoll',
												vastTag: 			ads_object.va_vast_postroll,
											}
										}else{
											vast_arr[vast_arr.length] = {
												roll: 				'postRoll',
												vastTag: 			ads_object.va_vast_postroll,
												vAlign:				vast_valign,
												nonlinearDuration:	vast_nonlinearDuration,
												size:				vast_size,
											}
										}
									}
									if(typeof(ads_object.va_vast_pauseroll)!=='undefined' && ads_object.va_vast_pauseroll!=''){
										
										if(typeof(ads_object.vast_vpaid_mode)!=='undefined' && ads_object.vast_vpaid_mode){
											/*
											no show for vpaid mode enable
											vast_arr[vast_arr.length] = {
												roll: 				'onPauseRoll',
												vastTag: 			ads_object.va_vast_pauseroll,
											}
											*/
										}else{
											vast_arr[vast_arr.length] = {
												roll: 				'onPauseRoll',
												vastTag: 			ads_object.va_vast_pauseroll,
												vAlign:				vast_valign,
												nonlinearDuration:	vast_nonlinearDuration,
												size:				vast_size,
											}
										}
									}
									if(typeof(ads_object.va_vast_midroll)!=='undefined' && Array.isArray(ads_object.va_vast_midroll)){
										$.each(ads_object.va_vast_midroll, function(i, value){									
											if(typeof(value)==='object' && typeof(value.vid_ads_m_vast_tag_mid)!=='undefined' && typeof(value.vid_ads_m_vast_timer_seconds)!=='undefined' && $.trim(value.vid_ads_m_vast_tag_mid)!='' && _.isNumber(value.vid_ads_m_vast_timer_seconds)){												
												if(typeof(ads_object.vast_vpaid_mode)!=='undefined' && ads_object.vast_vpaid_mode){
													vast_arr[vast_arr.length] = {
														roll: 		'midRoll',
														vastTag: 	value.vid_ads_m_vast_tag_mid,
														timer:		value.vid_ads_m_vast_timer_seconds,
													}
												}else{
													vast_arr[vast_arr.length] = {
														roll: 		'midRoll',
														vastTag: 	value.vid_ads_m_vast_tag_mid,
														timer:		value.vid_ads_m_vast_timer_seconds,
														vAlign:				vast_valign,
														nonlinearDuration:	vast_nonlinearDuration,
														size:				vast_size,
													}
												}
											}
											
										});
									}
									
									if(typeof(ads_object.vast_vpaid_mode)!=='undefined' && ads_object.vast_vpaid_mode){
										options.vastOptions.allowVPAID = true;
									}
									
									options.vastOptions.adList = vast_arr;
									options.vastOptions.vastAdvanced = {
										vastLoadedCallback:       (function() {
											_.global_video_vast_running[player_id] = 'no';
										}),
										noVastVideoCallback:      (function() {
										}),
										vastVideoSkippedCallback: (function() {																		
										}),
										vastVideoEndedCallback:   (function() {																		
										})
									}
								}
								
								if(_.preview_mode_active){
									options.layoutControls.logo = {};
									options.layoutControls.subtitlesEnabled = false;
								}
								
								var rnd_fluidplayer_id = (player_id)+'_'+(Math.floor((Math.random() * 9999) + 1));
								var fluid_type 	= 'type="video/mp4"';
								
								var mpd_enable 	= false;
								var mpd_player	= null;
								
								var hls_enable 	= false;
								var hls_player	= null;
								
								if(typeof(player_obj.single_video_streaming) && $.trim(player_obj.single_video_streaming!='')){
									switch(player_obj.single_video_streaming){
										case 'MPEG-DASH':
											fluid_type 	= 'type="application/dash+xml"';
											mpd_enable = true;																		
											break;
										
										case 'HLS':
											fluid_type 	= 'type="application/x-mpegURL"';
											hls_enable	= true;										
											break;	
									}								
								}
															
								var fluid_sources = '<source src="'+(single_video_url)+'" '+(fluid_type)+' />';
								
								if(typeof(player_obj.single_media_sources)!=='undefined' && Array.isArray(player_obj.single_media_sources)){
									$.each(player_obj.single_media_sources, function(i, value){
										if(typeof(value)==='object'){
											if(typeof(value.source_file)!=='undefined' && $.trim(value.source_file)!=''){
												var source_title = i;
												if(typeof(value.source_label)!=='undefined' && $.trim(value.source_label)!=''){
													source_title = $.trim(value.source_label);
												}
												
												if(typeof(player_obj.ebs_sco_check)!=='undefined'){
													fluid_sources+='<source src="'+(_.check_atob($.trim(value.source_file)))+'" title="'+(source_title)+'" '+(fluid_type)+' />';													
												}else{
													fluid_sources+='<source src="'+($.trim(value.source_file))+'" title="'+(source_title)+'" '+(fluid_type)+' />';
												}										
																			
											}
										}
									});
								}
								
								var fluid_subtitles = '';
								
								if(typeof(player_obj.single_media_subtitles)!=='undefined' && Array.isArray(player_obj.single_media_subtitles)){
									$.each(player_obj.single_media_subtitles, function(i, value){
										if(typeof(value)==='object'){
											if(typeof(value.src)!=='undefined' && $.trim(value.src)!='' && typeof(value.label)!=='undefined' && $.trim(value.label)!='' && typeof(value.srclang)!=='undefined' && $.trim(value.srclang)!=''){
												if(i == 0){
													fluid_subtitles+='<track label="'+(value.label)+'" kind="metadata" srclang="'+(value.srclang)+'" src="'+(value.src)+'" default>';
												}else{
													fluid_subtitles+='<track label="'+(value.label)+'" kind="metadata" srclang="'+(value.srclang)+'" src="'+(value.src)+'">';
												}
											}
										}
									});
								}
								
								if(fluid_subtitles!=''){
									options.layoutControls.subtitlesEnabled = true;
								}
								
								if(typeof(player_obj.vid_vtt_preview_vtt_file)!=='undefined' && Array.isArray(player_obj.vid_vtt_preview_vtt_file) && player_obj.vid_vtt_preview_vtt_file.length === 3){
									
									var vtt_preview_file = player_obj.vid_vtt_preview_vtt_file;
									
									options.layoutControls.timelinePreview = {};
									options.layoutControls.timelinePreview.file 					= vtt_preview_file[2];
									options.layoutControls.timelinePreview.type 					= 'VTT';
									options.layoutControls.timelinePreview.spriteRelativePath 		= false;
																		
									if(typeof(player_obj.vid_vtt_preview_sprite_image)!=='undefined' && Array.isArray(player_obj.vid_vtt_preview_sprite_image) && player_obj.vid_vtt_preview_sprite_image.length === 2){
										var vtt_preview_file 										= player_obj.vid_vtt_preview_sprite_image;
										options.layoutControls.timelinePreview.sprite 				= vtt_preview_file[1];
									}
									
								}
								
								$('#'+(player_id)).prepend('<video playsinline="" webkit-playsinline="" id="'+(rnd_fluidplayer_id)+'" preload="metadata" controls '+(html_pr)+'>'+(fluid_sources)+(fluid_subtitles)+'</video>');
								
								$player = document.getElementById(rnd_fluidplayer_id);
								
								var video_handle = function(){
									if($($player).hasClass('selfHosted-ready-load')){
										return;
									}								
									
									$($player).addClass('selfHosted-ready-load');
									
									$player.addEventListener('playing', function(){
										_.global_player_playing[player_id] = true;
										
										if($player.muted && first_create && !_.preview_mode_active){
											$playerMutedControl.addClass('active-item').on('click', function(){
												$player.muted = false;
												$player.volume = 1;
												$(this).removeClass('active-item');
											});
										}	
																		
										first_create = false;
									});
									
									/*ads control*/
									if(ads_enable && ads_network != 'google_ima'){
										$player.addEventListener('timeupdate', function(){
											
											video_duration 		= $player.duration;	
											
											if(video_duration===0){
												return;
											}
											
											video_current_time 	= $player.currentTime;
											
											_.video_ads({
												'player': 				$player,
												'single_video_network': single_video_network,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
												'partyElm':				$partyElm,
												'ads_object':			ads_object,
											});
											
											_.video_myCred_points({
												'player': 				$player,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
											});
											
										});
									}else{
										if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
											$player.addEventListener('timeupdate', function(){
											
												video_duration 		= $player.duration;	
												
												if(video_duration===0){
													return;
												}
												
												video_current_time 	= $player.currentTime;
												
												_.video_myCred_points({
													'player': 				$player,
													'video_duration': 		video_duration,
													'video_current_time': 	video_current_time,
													'player_id': 			player_id,
												});
												
											});
										}
									}/*ads control*/
									
									$fluidplayer_action = fluidPlayer(rnd_fluidplayer_id, options);								
																	
									$player.addEventListener('ended', function(){									
											
										if(typeof(_.global_video_vast_running[player_id])!=='undefined' && _.global_video_vast_running[player_id] == 'no'){
											return;									
										}
										
										$playerMutedControl.removeClass('active-item');
											
										_.reset_ads(player_id);
										
										_.auto_next_fnc({
											'player': 				$player,
											'partyElm':				$partyElm,
											'player_id': 			player_id,
											'single_video_network': single_video_network,
										});
	
									});
								}
								
								var hls_fnc = function(){
									if (Hls.isSupported()) {
										hls_player = new Hls({p2pConfig: {logLevel: false,}});
										hls_player.attachMedia($player);
										hls_player.loadSource(single_video_url);
										hls_player.on(Hls.Events.MANIFEST_PARSED, video_handle);
										hls_player.on(Hls.Events.ERROR, function (event, data) {											
											if (data.fatal) {
												$partyElm.append('<div class="offline-stream-html" style="background-image:url('+(poster_background)+')"><div class="offline-content h4 h6-mobile">'+(vidorev_jav_js_object.translate_currently_offline)+'</div></div>').addClass('player-loaded');
											}
										});
									}else if($player.canPlayType('application/vnd.apple.mpegurl')){
										$player.src = single_video_url;
										$player.addEventListener('loadedmetadata', video_handle);
									}else{
										/*
										$('#'+(player_id)).prepend('<div class="require-plugin-player">Media type not supported by this browser. (application/x-mpegURL)</div>');
										$partyElm.addClass('player-loaded');
										*/
										console.log('Media type not supported by this browser. (application/x-mpegURL)');
										$player.addEventListener('loadedmetadata', video_handle);
									}
									
									return false;
								}
								
								var mpd_fnc = function(){
									if ( typeof ( window.MediaSource || window.WebKitMediaSource ) === "function") {
										mpd_player = dashjs.MediaPlayer().create();
										mpd_player.getDebug().setLogToBrowserConsole(false);
										mpd_player.initialize($player, single_video_url, false);
										mpd_player.on('manifestLoaded', video_handle);	
									}else{
										/*
										$('#'+(player_id)).prepend('<div class="require-plugin-player">Media type not supported by this browser. (application/dash+xml)</div>');
										$partyElm.addClass('player-loaded');
										*/
										console.log('Media type not supported by this browser. (application/dash+xml)');
										$player.addEventListener('loadedmetadata', video_handle);
									}
									
									return false;
								}
								
								if(hls_enable){
									if(!_.global_hls_library){
										_.requestScript(vidorev_jav_plugin_js_object.hls_library_url, function(){
											_.global_hls_library = true;
											return hls_fnc();											
										});
									}else{
										return hls_fnc();	
									}
								}else if(mpd_enable){
									if(!_.global_mpd_library){
										_.requestScript(vidorev_jav_plugin_js_object.mpd_library_url, function(){
											_.global_mpd_library = true;
											return mpd_fnc();											
										});
									}else{
										return mpd_fnc();
									}								
								}else{
									$player.addEventListener('loadedmetadata', video_handle);
								}																		
								
								return '';
							}else{
								$('#'+(player_id)).prepend('<div class="require-plugin-player">You need to activate the Fluid Player player. Please refer to the documentation.</div>');
								$partyElm.addClass('player-loaded');
							}
						/*api ready*/	
						});
						_.setVideo3rdPartyAPIReady(player_id, 'fluidplayerAPIReady', 'fluidplayer');
						
						return '';
						
						break;
						
					case 'videojs':
						
						if(typeof(lightbox_cf)==='undefined'){
							return '';
						}
						break;
						
					case 'flow':
					
						if(typeof(lightbox_cf)==='undefined'){
							return '';
						}
						break;		
				}
			}/*3rd party*/			
										
			switch(single_video_network){
				case 'youtube':
					
					if(is_used_plyr_player){
						$(document).on(prefix+'PlyrAPIReady'+(player_id), function(){							
							
							$('#'+(player_id)).html(
							'<iframe src="https://www.youtube.com/embed/'+(single_video_source)+'?origin=&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowfullscreen allowtransparency allow="autoplay"></iframe>'
							);
							
							/*$('#'+(player_id)).attr({'data-plyr-provider':'youtube', 'data-plyr-embed-id': single_video_source});*/
							
							options = {
								debug: 		false,
								autoplay:	false,
								volume:		1,
								source: {
									type: 'video',
									sources: [
										{
											src: single_video_source,
											provider: 'youtube',
										},
									],
								},
								youtube: {
									noCookie: false,
								}
							};
							
							if(_.preview_mode_active){
								/*options.controls = 0;*/
							}
							
							$player = new Plyr('#'+(player_id), options);
							
														
							$player.on('ready', function(e){
								
								$player.is_used_plyr_player = 'on';
								
								$partyElm.find('.plyr button').attr({'aria-live':'polite'});
								$('#'+(player_id)).find('iframe').attr({'wmode':'Opaque'});
								
								if(_.global_muted_video || _.global_video_network_mute_for_autoplay){
									/*$player.volume = 0;*/
									$player.muted 	= true;
								}
								
								$player.on('volumechange', function(e){
									if($player.volume>0){
										$playerMutedControl.removeClass('active-item');
									}
								});
								
								$player.on('playing', function(e){
									_.global_player_playing[player_id] = true;
									if(typeof($player.muted)!=='undefined' && $player.muted && first_create && !_.preview_mode_active){
										$playerMutedControl.addClass('active-item').on('click', function(){	
											$player.volume 	= 1;
											$player.muted = false;
											$(this).removeClass('active-item');
										});
									}	
									first_create = false;
								});
								
								/*ads control*/	
								if(ads_enable && ads_network != 'google_ima'){				
									$player.on('timeupdate', function(e){
										
										video_duration 		= $player.duration;	
										
										if(video_duration===0){
											return;
										}
										
										video_current_time 	= $player.currentTime;
										
										_.video_ads({
											'player': 				$player,
											'single_video_network': single_video_network,
											'video_duration': 		video_duration,
											'video_current_time': 	video_current_time,
											'player_id': 			player_id,
											'partyElm':				$partyElm,
											'ads_object':			ads_object,
										});
										
										_.video_myCred_points({
											'player': 				$player,
											'video_duration': 		video_duration,
											'video_current_time': 	video_current_time,
											'player_id': 			player_id,
										});
									});
								}else{
									if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
										$player.on('timeupdate', function(e){
										
											video_duration 		= $player.duration;	
											
											if(video_duration===0){
												return;
											}
											
											video_current_time 	= $player.currentTime;
											
											_.video_myCred_points({
												'player': 				$player,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
											});
										});
									}
								}/*ads control*/
								
								setTimeout(function(){						
									
									if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
										/*Google IMA*/
										_.ads_google_ima({
											'player': 				$player,																
											'player_id': 			player_id,
											'player_init_id': 		player_init_id,
											'partyElm':				$partyElm,
											'fake_player':			_.fake_player({
																		'player': 				$player,
																		'single_video_network': single_video_network,
																	}),
											'autoplay':				autoplay,
											'va_google_ima_source': va_google_ima_source,					
										});
									}else{
										$partyElm.addClass('player-loaded');
									
										if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){								
											$player.play();																
										}else{
											$player.volume 	= 1;
											$player.muted = false;
										}
		
										
										$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);
									}
									
									if(player_id === 'player-api-control'){
										_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
											_.player_actions($player, single_video_network, 'pause');
										});
									}
									
									_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);
									
									_.$el.on(prefix+'videoBeforeTimeLapsesClick', function(e, player){
										player.volume 	= 1;
										player.muted = false;									
									});
									
								}, 368);
								
								$player.on('ended', function(e){
									$playerMutedControl.removeClass('active-item');
									
									_.reset_ads(player_id);
									
									_.auto_next_fnc({
										'player': 				$player,
										'partyElm':				$partyElm,
										'player_id': 			player_id,
										'single_video_network': single_video_network,
									});
								});
							});
						});						
						_.setVideo3rdPartyAPIReady(player_id, 'PlyrAPIReady', 'Plyr');
						
					}else{
						options = {
							enablejsapi:	1, 
							html5:			1, 
							wmode:			'transparent', 
							modestbranding:	_.you_modestbranding, 
							iv_load_policy:	3,
							autoplay:		0,
							playsinline:	1,
							rel:			_.you_rel,
							showinfo:		_.you_showinfo,
						}
						
						if(typeof(vidorev_jav_js_object.origin_url)!=='undefined' && vidorev_jav_js_object.origin_url!=''){
							options.origin = vidorev_jav_js_object.origin_url;
						}
						
						if(typeof(player_obj.single_video_youtube_playlist_id)!=='undefined' && player_obj.single_video_youtube_playlist_id!=''){
							options.list 		= $.trim(player_obj.single_video_youtube_playlist_id);
							options.listType 	= 'playlist';
						}
						
						if(_.preview_mode_active){
							options.controls = 0;
						}
						
						$(document).on(prefix+'youtubeAPIReady'+(player_id), function(){
						/*api ready*/	
							var intervalYoutube = null;
							
							$player = new YT.Player(player_id, {						
								videoId: 		single_video_source,
								playerVars: 	options,
								events: 		{
													'onReady': function(e){	
														$('#'+(player_id)).attr({'wmode':'Opaque'});
														
														if(_.global_muted_video){
															$player.mute();
														}
														
														setTimeout(function(){													
															
															if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
																/*Google IMA*/															
																_.ads_google_ima({
																	'player': 				$player,																
																	'player_id': 			player_id,
																	'player_init_id': 		player_init_id,
																	'partyElm':				$partyElm,
																	'fake_player':			_.fake_player({
																								'player': 				$player,
																								'single_video_network': single_video_network,
																							}),
																	'autoplay':				autoplay,
																	'va_google_ima_source': va_google_ima_source,					
																});
															}else{
																$partyElm.addClass('player-loaded');
															
																if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){								
																	$player.playVideo();																
																}else{
																	if(!_.global_video_network_placeholder_hide){
																		$poster_preload
																		.css({'background-image': 'url(' + (poster_background) + ')'})
																		.addClass('active-item')
																		.on('click', function(){
																			$player.playVideo();
																			$(this).removeClass('active-item');
																		});
																	}
																}
																
																$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);
															}
															
															if(player_id === 'player-api-control'){
																_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
																	_.player_actions($player, single_video_network, 'pause');
																});
															}
															
															_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);
															
														}, 368);	
																										
													},
													'onStateChange':function(e){
														
														if(e.data===1){
															_.global_player_playing[player_id] = true;
														}
														
														if(e.target.isMuted() && first_create && !_.preview_mode_active){
															$playerMutedControl.addClass('active-item').on('click', function(){
																e.target.unMute();
																$(this).removeClass('active-item');
															});
														}
																											
														first_create = false;
														
														/*ads control*/
														if(ads_enable && e.data==YT.PlayerState.PLAYING && ads_network != 'google_ima'){
															if(intervalYoutube!==null){
																clearInterval(intervalYoutube);
															}
															intervalYoutube = setInterval(function(){
	
																
																video_duration 		= $player.getDuration();
																
																if(video_duration===0){
																	return;
																}
																
																video_current_time 	= $player.getCurrentTime();
																
																_.video_ads({
																	'player': 				$player,
																	'single_video_network': single_video_network,
																	'video_duration': 		video_duration,
																	'video_current_time': 	video_current_time,
																	'player_id': 			player_id,
																	'partyElm':				$partyElm,
																	'ads_object':			ads_object,
																});
																
																_.video_myCred_points({
																	'player': 				$player,
																	'video_duration': 		video_duration,
																	'video_current_time': 	video_current_time,
																	'player_id': 			player_id,
																});
																
															}, 250);														
														}else{
															if(intervalYoutube!==null){
																clearInterval(intervalYoutube);
															}
																														
															if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
																
																intervalYoutube = setInterval(function(){	
																
																	video_duration 		= $player.getDuration();
																	
																	if(video_duration===0){
																		return;
																	}
																	
																	video_current_time 	= $player.getCurrentTime();
																	
																	_.video_myCred_points({
																		'player': 				$player,
																		'video_duration': 		video_duration,
																		'video_current_time': 	video_current_time,
																		'player_id': 			player_id,
																	});
																	
																}, 250);
															}															
															
														}/*ads control*/
														
														if(e.data===0){
															$playerMutedControl.removeClass('active-item');
															
															_.reset_ads(player_id);
															
															_.auto_next_fnc({
																'player': 				$player,
																'partyElm':				$partyElm,
																'player_id': 			player_id,
																'single_video_network': single_video_network,
															});
															
															e.target.stopVideo();
														}
																											
													}
												},				
							});
						/*api ready*/	
						});					
						_.setYoutubeAPIReady(player_id);
					}
										
					break;
					
				case 'vimeo':
					
					if(is_used_plyr_player){
						
						$(document).on(prefix+'PlyrAPIReady'+(player_id), function(){
							
							$('#'+(player_id)).html(
							'<iframe src="https://player.vimeo.com/video/'+(single_video_source)+'?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media" allowfullscreen allowtransparency allow="autoplay"></iframe>'							
							);
							
							options = {
								debug: 		false,
								autoplay:	false,
								volume:		1,
								source: {
									type: 'video',
									sources: [
										{
											src: single_video_source,
											provider: 'vimeo',
										},
									],
								},
							};
							
							if(_.preview_mode_active){
								/*options.controls = 0;*/
							}
							
							$player = new Plyr('#'+(player_id), options);							
														
							$player.on('ready', function(e){
								
								$player.is_used_plyr_player = 'on';
								
								$partyElm.find('.plyr button').attr({'aria-live':'polite'});
								$('#'+(player_id)).find('iframe').attr({'wmode':'Opaque'});
								
								if(_.global_muted_video || _.global_video_network_mute_for_autoplay){
									/*$player.volume = 0;*/
									$player.muted 	= true;
								}
								
								$player.on('volumechange', function(e){
									if($player.volume>0){
										$playerMutedControl.removeClass('active-item');
									}
								});
								
								$player.on('playing', function(e){
									_.global_player_playing[player_id] = true;
									if(typeof($player.muted)!=='undefined' && $player.muted && first_create && !_.preview_mode_active){
										$playerMutedControl.addClass('active-item').on('click', function(){	
											$player.volume 	= 1;
											$player.muted = false;
											$(this).removeClass('active-item');
										});
									}	
									first_create = false;
									
									$('body').trigger( 'vidorevVimeoVideoPlay', [$player, $partyElm]);
								});
								
								/*ads control*/	
								if(ads_enable && ads_network != 'google_ima'){				
									$player.on('timeupdate', function(e){
										
										video_duration 		= $player.duration;	
										
										if(video_duration===0){
											return;
										}
										
										video_current_time 	= $player.currentTime;
										
										_.video_ads({
											'player': 				$player,
											'single_video_network': single_video_network,
											'video_duration': 		video_duration,
											'video_current_time': 	video_current_time,
											'player_id': 			player_id,
											'partyElm':				$partyElm,
											'ads_object':			ads_object,
										});										
										
										_.video_myCred_points({
											'player': 				$player,
											'video_duration': 		video_duration,
											'video_current_time': 	video_current_time,
											'player_id': 			player_id,
										});
									});
								}else{
									if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
										$player.on('timeupdate', function(e){
										
											video_duration 		= $player.duration;	
											
											if(video_duration===0){
												return;
											}
											
											video_current_time 	= $player.currentTime;													
											
											_.video_myCred_points({
												'player': 				$player,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
											});
										});
									}
								}/*ads control*/
								
								setTimeout(function(){						
									
									if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
										/*Google IMA*/
										_.ads_google_ima({
											'player': 				$player,																
											'player_id': 			player_id,
											'player_init_id': 		player_init_id,
											'partyElm':				$partyElm,
											'fake_player':			_.fake_player({
																		'player': 				$player,
																		'single_video_network': single_video_network,
																	}),
											'autoplay':				autoplay,
											'va_google_ima_source': va_google_ima_source,					
										});
									}else{
										$partyElm.addClass('player-loaded');
									
										if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){								
											$player.play();																
										}else{
											$player.volume 	= 1;
											$player.muted = false;
										}
		
										
										$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);
									}
									
									if(player_id === 'player-api-control'){
										_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
											_.player_actions($player, single_video_network, 'pause');
										});
									}
									
									_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);
									
									_.$el.on(prefix+'videoBeforeTimeLapsesClick', function(e, player){
										player.volume 	= 1;
										player.muted = false;									
									});
									
								}, 368);
								
								$player.on('ended', function(e){
									$playerMutedControl.removeClass('active-item');
									
									_.reset_ads(player_id);
									
									_.auto_next_fnc({
										'player': 				$player,
										'partyElm':				$partyElm,
										'player_id': 			player_id,
										'single_video_network': single_video_network,
									});
									
									$('body').trigger( 'vidorevVimeoVideoEnded', [$player, $partyElm]);
								});
								
								$player.on('pause', function(e){
									$('body').trigger( 'vidorevVimeoVideoPause', [$player, $partyElm]);
								});
							});	
						});						
						_.setVideo3rdPartyAPIReady(player_id, 'PlyrAPIReady', 'Plyr');
						
					}else{
					
						$(document).on(prefix+'vimeoAPIReady'+(player_id), function(){
						/*api ready*/	
							options = {
								id: 			single_video_source,
								autoplay: 		0,
								playsinline: 	true,
							}
							
							if(_.preview_mode_active){
								options.controls = 0;
							}
		
							$player = new Vimeo.Player(player_id, options);
							
							$player.ready().then(function(){
								
								$('#'+(player_id)).find('iframe').attr('allow', 'autoplay; encrypted-media');
								
								if(_.global_muted_video || _.global_video_network_mute_for_autoplay){
									$player.setVolume(0);
								}
								
								$player.on('play', function(e){
									_.global_player_playing[player_id] = true;
									
									$player.getVolume().then(function(volume) {
										if(volume === 0 && !_.preview_mode_active){
											$playerMutedControl.addClass('active-item').on('click', function(){
												$player.setVolume(1);
												$(this).removeClass('active-item');
											});
										}								
									}).catch(function(error) {});
														
									first_create = false;
									
									$('body').trigger( 'vidorevVimeoVideoPlay', [$player, $partyElm]);
								});
								
								/*ads control*/
								if(ads_enable && ads_network != 'google_ima'){
									$player.on('timeupdate', function(e){
										Promise.all([$player.getDuration(), $player.getCurrentTime()]).then(function(dimensions) {
											
											video_duration 		= dimensions[0];
											
											if(video_duration===0){
												return;
											}
											
											video_current_time 	= dimensions[1];
											
											_.video_ads({
												'player': 				$player,
												'single_video_network': single_video_network,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
												'partyElm':				$partyElm,
												'ads_object':			ads_object,												
											});
											
											_.video_myCred_points({
												'player': 				$player,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
											});
											
										});										
									});
								}else{
									if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
										$player.on('timeupdate', function(e){
											Promise.all([$player.getDuration(), $player.getCurrentTime()]).then(function(dimensions) {
												
												video_duration 		= dimensions[0];
												
												if(video_duration===0){
													return;
												}
												
												video_current_time 	= dimensions[1];
												
												_.video_myCred_points({
													'player': 				$player,
													'video_duration': 		video_duration,
													'video_current_time': 	video_current_time,
													'player_id': 			player_id,
												});
												
											});										
										});
									}
								}/*ads control*/	
								
								setTimeout(function(){													
									
									if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
										/*Google IMA*/
										_.ads_google_ima({
											'player': 				$player,																
											'player_id': 			player_id,
											'player_init_id': 		player_init_id,
											'partyElm':				$partyElm,
											'fake_player':			_.fake_player({
																		'player': 				$player,
																		'single_video_network': single_video_network,
																	}),
											'autoplay':				autoplay,
											'va_google_ima_source': va_google_ima_source,					
										});								
									}else{
										$partyElm.addClass('player-loaded');
									
										if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){								
											$player.play();																
										}else{
											if(!_.global_video_network_placeholder_hide){
												$poster_preload
												.css({'background-image': 'url(' + (poster_background) + ')'})
												.addClass('active-item')
												.on('click', function(){
													$player.play();
													$(this).removeClass('active-item');
												});
											}
										}
										
										$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);
									}
									
									if(player_id === 'player-api-control'){
										_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
											_.player_actions($player, single_video_network, 'pause');
										});
									}
									
									_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);
									
								}, 368);
								
								$player.on('ended', function(e){
									$playerMutedControl.removeClass('active-item');
									
									_.reset_ads(player_id);
									
									_.auto_next_fnc({
										'player': 				$player,
										'partyElm':				$partyElm,
										'player_id': 			player_id,
										'single_video_network': single_video_network,
									});
									
									$('body').trigger( 'vidorevVimeoVideoEnded', [$player, $partyElm]);
								});
								
								$player.on('pause', function(e){
									$('body').trigger( 'vidorevVimeoVideoPause', [$player, $partyElm]);
								});
								
							});
						/*api ready*/
						});					
						_.setVideo3rdPartyAPIReady(player_id, 'vimeoAPIReady', 'vimeo');
						
					}
										
					break;
					
				case 'dailymotion':
				
					$(document).on(prefix+'dailymotionAPIReady'+(player_id), function(){
					/*api ready*/	
						options = {
							video: single_video_source,
							params: {
								'endscreen-enable': false,
								autoplay: 			false,
								'sharing-enable':	false,
								'ui-logo':			false,	
							}
						}
						
						if(_.preview_mode_active){
							options.params.controls = false;
						}
						
						$player = DM.player(document.getElementById(player_id), options);
						
						$player.addEventListener('apiready', function(e){
							
							if(_.global_muted_video || _.global_video_network_mute_for_autoplay){
								$player.setMuted(true);
								$player.muted = true;
							}
							
							$player.addEventListener('play', function(e){
								_.global_player_playing[player_id] = true;
								if(typeof($player.muted)!=='undefined' && $player.muted && first_create && !_.preview_mode_active){
									$playerMutedControl.addClass('active-item').on('click', function(){
										$player.toggleMuted();
										$(this).removeClass('active-item');
									});
								}	
								first_create = false;
							});
							
							/*ads control*/	
							if(ads_enable && ads_network != 'google_ima'){				
								$player.addEventListener('timeupdate', function(e){
									
									video_duration 		= $player.duration;	
									
									if(video_duration===0){
										return;
									}
									
									video_current_time 	= $player.currentTime;
									
									_.video_ads({
										'player': 				$player,
										'single_video_network': single_video_network,
										'video_duration': 		video_duration,
										'video_current_time': 	video_current_time,
										'player_id': 			player_id,
										'partyElm':				$partyElm,
										'ads_object':			ads_object,
									});
									
									_.video_myCred_points({
										'player': 				$player,
										'video_duration': 		video_duration,
										'video_current_time': 	video_current_time,
										'player_id': 			player_id,
									});
									
								});
							}else{
								if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
									$player.addEventListener('timeupdate', function(e){
									
										video_duration 		= $player.duration;	
										
										if(video_duration===0){
											return;
										}
										
										video_current_time 	= $player.currentTime;
										
										_.video_myCred_points({
											'player': 				$player,
											'video_duration': 		video_duration,
											'video_current_time': 	video_current_time,
											'player_id': 			player_id,
										});
										
									});
								}
							}/*ads control*/
							
							setTimeout(function(){						
								
								if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
									/*Google IMA*/
									_.ads_google_ima({
										'player': 				$player,																
										'player_id': 			player_id,
										'player_init_id': 		player_init_id,
										'partyElm':				$partyElm,
										'fake_player':			_.fake_player({
																	'player': 				$player,
																	'single_video_network': single_video_network,
																}),
										'autoplay':				autoplay,
										'va_google_ima_source': va_google_ima_source,					
									});
								}else{
									$partyElm.addClass('player-loaded');
								
									if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){								
										$player.play();																
									}else{
										if(!_.global_video_network_placeholder_hide){
											$poster_preload
											.css({'background-image': 'url(' + (poster_background) + ')'})
											.addClass('active-item')
											.on('click', function(){
												$player.play();
												$(this).removeClass('active-item');
											});
										}
									}
	
									
									$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);
								}
								
								if(player_id === 'player-api-control'){
									_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
										_.player_actions($player, single_video_network, 'pause');
									});
								}
								
								_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);
								
							}, 368);
							
							$player.addEventListener('ended', function(e){
								$playerMutedControl.removeClass('active-item');
								
								_.reset_ads(player_id);
								
								_.auto_next_fnc({
									'player': 				$player,
									'partyElm':				$partyElm,
									'player_id': 			player_id,
									'single_video_network': single_video_network,
								});
							});
							
						});
					/*api ready*/
					});					
					_.setVideo3rdPartyAPIReady(player_id, 'dailymotionAPIReady', 'dailymotion');
					
					break;
					
				case 'facebook':
				
					$(document).on(prefix+'facebookAPIReady'+(player_id), function(){
					/*api ready*/
						if(!_.getMobileOperatingSystem()){
							options = {'data-href':single_video_url, 'data-allowfullscreen':'true', 'data-width':'2560', 'data-height':'1440'}
						}else{
							options = {'data-href':single_video_url, 'data-allowfullscreen':'true', 'data-width':'2560'}
						}
						if(_.preview_mode_active){
							options['data-controls'] = 'false';
						}
						
						$('#'+(player_id)).addClass('fb-video').attr(options);					
						FB.Event.subscribe('xfbml.ready', function(msg) {
							if (msg.type === 'video' && msg.id === player_id) {
								$player = msg.instance;
								
								$('#'+(player_id)).find('iframe').attr('allow', 'autoplay; encrypted-media');
															
								if(_.global_muted_video || _.global_video_network_mute_for_autoplay){
									$player.mute();
								}else{
									$player.unmute();
								}						
								
								var intervalFacebook = null;
								
								$player.subscribe('startedPlaying', function(e){
									
									_.global_player_playing[player_id] = true;
									
									if($player.isMuted() && first_create && !_.preview_mode_active){
										$playerMutedControl.addClass('active-item').on('click', function(){
											$player.unmute();
											$(this).removeClass('active-item');
											$player.play();
										});
									}	
									
									first_create = false;
									
									/*ads control*/
									if(ads_enable && ads_network != 'google_ima'){
									
										if(intervalFacebook!==null){
											clearInterval(intervalFacebook);
										}
										intervalFacebook = setInterval(function(){
											
											video_duration 		= $player.getDuration();
											
											if(video_duration===0){
												return;
											}
											
											video_current_time 	= $player.getCurrentPosition();
											
											_.video_ads({
												'player': 				$player,
												'single_video_network': single_video_network,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
												'partyElm':				$partyElm,
												'ads_object':			ads_object,
											});
											
											_.video_myCred_points({
												'player': 				$player,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
											});
											
										}, 250);
									
									}else{
										if(intervalFacebook!==null){
											clearInterval(intervalFacebook);
										}
										if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
											intervalFacebook = setInterval(function(){
												
												video_duration 		= $player.getDuration();
												
												if(video_duration===0){
													return;
												}
												
												video_current_time 	= $player.getCurrentPosition();
												
												_.video_myCred_points({
													'player': 				$player,
													'video_duration': 		video_duration,
													'video_current_time': 	video_current_time,
													'player_id': 			player_id,
												});
												
											}, 250);
										}
									}/*ads control*/
								});							
								
								$player.subscribe('paused', function(e){
									if(ads_enable && intervalFacebook!==null){
										clearInterval(intervalFacebook);
									}
								});
								
								$player.subscribe('finishedPlaying', function(e){
									
									$playerMutedControl.removeClass('active-item');
									
									if(ads_enable){	
										_.reset_ads(player_id);
										if(intervalFacebook!==null){
											clearInterval(intervalFacebook);
										}
									}
									
									_.auto_next_fnc({
										'player': 				$player,
										'partyElm':				$partyElm,
										'player_id': 			player_id,
										'single_video_network': single_video_network,
									});
									
								});
								
								$player.subscribe('error', function(e){
									if(ads_enable){	
										_.reset_ads(player_id);									
										if(intervalFacebook!==null){
											clearInterval(intervalFacebook);
										}
									}
								});
								
								setTimeout(function(){								
									
									if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
										/*Google IMA*/
										_.ads_google_ima({
											'player': 				$player,																
											'player_id': 			player_id,
											'player_init_id': 		player_init_id,
											'partyElm':				$partyElm,
											'fake_player':			_.fake_player({
																		'player': 				$player,
																		'single_video_network': single_video_network,
																	}),
											'autoplay':				autoplay,
											'va_google_ima_source': va_google_ima_source,					
										});
									}else{
										$partyElm.addClass('player-loaded');
									
										if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){								
											$player.play();																
										}else{
											if(!_.global_video_network_placeholder_hide){
												$poster_preload
												.css({'background-image': 'url(' + (poster_background) + ')'})
												.addClass('active-item')
												.on('click', function(){
													$player.play();
													$(this).removeClass('active-item');
												});
											}
										}
										
										$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);
									}
									
									if(player_id === 'player-api-control'){
										_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
											_.player_actions($player, single_video_network, 'pause');
										});
									}
									
									_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);
									
								}, 368);
								
							}
						});
						
						if($('#parse-lightbox-control').length>0){
							FB.XFBML.parse(document.getElementById('parse-lightbox-control'));
						}
					/*api ready*/
					});					
					_.setVideo3rdPartyAPIReady(player_id, 'facebookAPIReady', 'facebook');
					
					break;
					
				case 'twitch':
					
					$(document).on(prefix+'twitchAPIReady'+(player_id), function(){
					/*api ready*/
						options = {						
							video: single_video_source,
							autoplay: _.global_video_autoplay==='on' ? true : false,
							playsinline: true,
							muted: _.global_muted_video,
	
						}
						
						if(single_video_source.indexOf('channel...?><[~|~]')!==-1){
							options = {						
								channel: single_video_source.split('channel...?><[~|~]')[1],
								autoplay: _.global_video_autoplay==='on' ? true : false,
								playsinline: true,
								muted: _.global_muted_video,
							}
						}
						
						if(_.preview_mode_active){
							options.controls = false;
						}					
						
						$player = new Twitch.Player(player_id, options);
						
						$player.addEventListener(Twitch.Player.READY, function(e){
											
							var intervalTwitch 	= null;
							
							$player.addEventListener(Twitch.Player.PLAY, function(e){
								
								if(( first_create && $lib_item_control.length > 0 && !$lib_item_control.hasClass('show-video') ) || ( $lib_item_control.length === 0 && $('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){								
									$player.pause();
									$player.seek(0);
									$player.pause();
								}
								
								_.global_player_playing[player_id] = true;
								
								if($player.getMuted() && first_create && !_.preview_mode_active){
									$playerMutedControl.addClass('active-item').on('click', function(){
										$player.setMuted(false);
										$player.setVolume(1);
										$(this).removeClass('active-item');
									});
								}	
								
								first_create = false;
								
								/*ads control*/	
								if(ads_enable && ads_network != 'google_ima'){							
									if(intervalTwitch!==null){
										clearInterval(intervalTwitch);
									}
									intervalTwitch = setInterval(function(){
										
										video_duration 		= $player.getDuration();
										
										if(video_duration===0){
											return;
										}
										
										video_current_time 	= $player.getCurrentTime();
										
										_.video_ads({
											'player': 				$player,
											'single_video_network': single_video_network,
											'video_duration': 		video_duration,
											'video_current_time': 	video_current_time,
											'player_id': 			player_id,
											'partyElm':				$partyElm,
											'ads_object':			ads_object,
										});
										
										_.video_myCred_points({
											'player': 				$player,
											'video_duration': 		video_duration,
											'video_current_time': 	video_current_time,
											'player_id': 			player_id,
										});
										
									}, 250);
								
								}else{
									if(intervalTwitch!==null){
										clearInterval(intervalTwitch);
									}
									if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
										
										intervalTwitch = setInterval(function(){
										
											video_duration 		= $player.getDuration();
											
											if(video_duration===0){
												return;
											}
											
											video_current_time 	= $player.getCurrentTime();
											
											_.video_myCred_points({
												'player': 				$player,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
											});
											
										}, 250);
									}
								}/*ads control*/
							});
							
							$player.addEventListener(Twitch.Player.PAUSE, function(e){
								if(intervalTwitch!==null){
									clearInterval(intervalTwitch);
								}
							});						
							
							setTimeout(function(){														
								if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
									/*Google IMA*/
									_.ads_google_ima({
										'player': 				$player,																
										'player_id': 			player_id,
										'player_init_id': 		player_init_id,
										'partyElm':				$partyElm,
										'fake_player':			_.fake_player({
																	'player': 				$player,
																	'single_video_network': single_video_network,
																}),
										'autoplay':				autoplay,
										'va_google_ima_source': va_google_ima_source,					
									});
								}else{
									$partyElm.addClass('player-loaded');
									if(autoplay!='on' && !_.global_video_network_placeholder_hide){									
										$poster_preload
										.css({'background-image': 'url(' + (poster_background) + ')'})
										.addClass('active-item')
										.on('click', function(){
											$player.play();
											$(this).removeClass('active-item');
										});
									}
									$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);
								}
								
								if(player_id === 'player-api-control'){
									_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
										_.player_actions($player, single_video_network, 'pause');
									});
								}
								
								_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);
																												
							}, 368);
							
							$player.addEventListener(Twitch.Player.ENDED, function(e){
								$playerMutedControl.removeClass('active-item');
								
								_.reset_ads(player_id);
								
								_.auto_next_fnc({
									'player': 				$player,
									'partyElm':				$partyElm,
									'player_id': 			player_id,
									'single_video_network': single_video_network,
								});
								
								$player.pause();
								$player.seek(0);
								$player.pause();
							});
													
						});
					/*api ready*/
					});					
					_.setVideo3rdPartyAPIReady(player_id, 'twitchAPIReady', 'twitch');
					
					break;	
					
				case 'self-hosted': case 'drive':
					
					$(document).on(prefix+'selfhostedAPIReady'+(player_id), function(){					
					/*api ready*/	
						/*start - old shortcode*/
						var $selfHostedVideo = $partyElm.find('video.wp-video-shortcode');
						
						if($selfHostedVideo.length > 0){
							
							$selfHostedVideo.attr({'playsinline': '', 'webkit-playsinline': '',});
							
							if(typeof(player_obj.video_player_background)!=='undefined' && player_obj.video_player_background === 'on'){
								$selfHostedVideo.css({'background-image': 'url(' + (poster_background) + ')'});
							}
							
							var selfHostedVideoID = $.trim($selfHostedVideo.attr('id'));
							
							if(selfHostedVideoID!=''){
								$player = document.getElementById(selfHostedVideoID);
								
								if(_.preview_mode_active){
									$player.controls = false;
								}
								
								$player.muted = _.global_muted_video;
								$player.addEventListener('loadedmetadata', function(){
									
									if($($player).hasClass('selfHosted-ready-load')){
										return;
									}
									
									$($player).addClass('selfHosted-ready-load');
									
									$player.addEventListener('playing', function(){
										_.global_player_playing[player_id] = true;
										
										if($player.muted && first_create && !_.preview_mode_active){
											$playerMutedControl.addClass('active-item').on('click', function(){
												$player.muted = false;
												$player.volume = 1;
												$(this).removeClass('active-item');
											});
										}	
																		
										first_create = false;
									});
									
									/*ads control*/
									if(ads_enable && ads_network != 'google_ima'){
										$player.addEventListener('timeupdate', function(){
											
											video_duration 		= $player.duration;	
											
											if(video_duration===0){
												return;
											}
											
											video_current_time 	= $player.currentTime;
											
											_.video_ads({
												'player': 				$player,
												'single_video_network': single_video_network,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
												'partyElm':				$partyElm,
												'ads_object':			ads_object,
											});
											
											_.video_myCred_points({
												'player': 				$player,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
											});
											
										});
									}else{
										if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
											$player.addEventListener('timeupdate', function(){
												
												video_duration 		= $player.duration;	
												
												if(video_duration===0){
													return;
												}
												
												video_current_time 	= $player.currentTime;
												
												_.video_myCred_points({
													'player': 				$player,
													'video_duration': 		video_duration,
													'video_current_time': 	video_current_time,
													'player_id': 			player_id,
												});
												
											});
										}
									}/*ads control*/
									
									setTimeout(function(){
										
										if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
											/*Google IMA*/
											_.ads_google_ima({
												'player': 				$player,																
												'player_id': 			player_id,
												'player_init_id': 		player_init_id,
												'partyElm':				$partyElm,
												'fake_player':			_.fake_player({
																			'player': 				$player,
																			'single_video_network': single_video_network,
																		}),
												'autoplay':				autoplay,
												'va_google_ima_source': va_google_ima_source,					
											});
										}else{
											$partyElm.addClass('player-loaded');
											
											if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){
												$player.play();							
											}else{
												$poster_preload
												.css({'background-image': 'url(' + (poster_background) + ')'})
												.addClass('active-item')
												.on('click', function(){
													$player.play();
													$(this).removeClass('active-item');
												});
											}
										}
										
										if(player_id === 'player-api-control'){
											_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
												_.player_actions($player, single_video_network, 'pause');
											});
										}
										
										_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);	
										
									}, 368);
									
									$player.addEventListener('ended', function(){
										$playerMutedControl.removeClass('active-item');
										
										_.reset_ads(player_id);
										
										_.auto_next_fnc({
											'player': 				$player,
											'partyElm':				$partyElm,
											'player_id': 			player_id,
											'single_video_network': single_video_network,
										});
										
									});
									
								});
															
								return;
							}						
						}
						/*end - old shortcode*/					
					
						var $vidorev_video_shortcode 	= $partyElm.find('video.vidorev-video-shortcode');					
						if((typeof(player_obj.single_video_wp_shortcode) === 'undefined' && $vidorev_video_shortcode.length === 0) || typeof(mejs) === 'undefined'){
							return;
						}
						
						if(typeof(player_obj.single_video_wp_shortcode)!=='undefined'){					
							$('#'+(player_id)).append((player_obj.single_video_wp_shortcode).replace('id="video-0-1"', 'id="wpsc-'+(player_id)+'"'));
						}
						
						if($vidorev_video_shortcode.length > 0){
							$vidorev_video_shortcode.addClass('wp-video-shortcode');
						}
						
						if(typeof(player_obj.video_player_background)!=='undefined' && player_obj.video_player_background === 'on'){
							$('#'+(player_id)).find('video.wp-video-shortcode').css({'background-image': 'url(' + (poster_background) + ')'});
						}
						
						$('#'+(player_id)).find('video.wp-video-shortcode').attr({'playsinline': '', 'webkit-playsinline': '',}).mediaelementplayer({
							success: function(player, node){							
								$player = node;
								
								if($(player).find('video').length > 1){
									var $selfHostedLGBVideo = $(player).find('video.wp-video-shortcode');
									$selfHostedLGBVideo.attr({'playsinline': '', 'webkit-playsinline': '',});
									var selfHostedLGBVideoID = $.trim($selfHostedLGBVideo.attr('id'));
									$player = document.getElementById(selfHostedLGBVideoID);
								}
								
								if($($player).hasClass('selfHosted-ready-load')){
									return;
								}
								
								if(_.preview_mode_active){
									$player.controls = false;
								}
								
								$player.muted = _.global_muted_video;
								
								$($player).addClass('selfHosted-ready-load');
								
								$player.addEventListener('playing', function(){
									_.global_player_playing[player_id] = true;
									
									if($player.muted && first_create && !_.preview_mode_active){
										$playerMutedControl.addClass('active-item').on('click', function(){
											$player.muted = false;
											$player.volume = 1;
											$(this).removeClass('active-item');
										});
									}	
									
									first_create = false;
								});
								
								/*ads control*/
								if(ads_enable && ads_network != 'google_ima'){
									$player.addEventListener('timeupdate', function(){
										
										video_duration 		= $player.duration;
										
										if(video_duration===0){
											return;
										}
										
										video_current_time 	= $player.currentTime;
										
										_.video_ads({
											'player': 				$player,
											'single_video_network': single_video_network,
											'video_duration': 		video_duration,
											'video_current_time': 	video_current_time,
											'player_id': 			player_id,
											'partyElm':				$partyElm,
											'ads_object':			ads_object,
										});
										
										_.video_myCred_points({
											'player': 				$player,
											'video_duration': 		video_duration,
											'video_current_time': 	video_current_time,
											'player_id': 			player_id,
										});
										
									});
								}else{
									if(typeof(timeViewVideoRequest_myCred)!=='undefined' && _.isNumber(timeViewVideoRequest_myCred)){
										$player.addEventListener('timeupdate', function(){
											
											video_duration 		= $player.duration;
											
											if(video_duration===0){
												return;
											}
											
											video_current_time 	= $player.currentTime;
																						
											_.video_myCred_points({
												'player': 				$player,
												'video_duration': 		video_duration,
												'video_current_time': 	video_current_time,
												'player_id': 			player_id,
											});
											
										});
									}
								}/*ads control*/	
								
								setTimeout(function(){								
									
									if(ads_enable && ads_network === 'google_ima' && va_google_ima_source!=''){
										/*Google IMA*/
										_.ads_google_ima({
											'player': 				$player,																
											'player_id': 			player_id,
											'player_init_id': 		player_init_id,
											'partyElm':				$partyElm,
											'fake_player':			_.fake_player({
																		'player': 				$player,
																		'single_video_network': single_video_network,
																	}),
											'autoplay':				autoplay,
											'va_google_ima_source': va_google_ima_source,					
										});
									}else{
										$partyElm.addClass('player-loaded');
										
										if($vidorev_video_shortcode.length > 0){
											if(autoplay==='on' && ( $lib_item_control.length === 0 && !$('#parse-lightbox-control.video-lightbox-wrapper-control').hasClass('show-lightbox') ) ){
												$player.play();							
											}else{
												$poster_preload
												.css({'background-image': 'url(' + (poster_background) + ')'})
												.addClass('active-item')
												.on('click', function(){
													$player.play();
													$(this).removeClass('active-item');
												});
											}
										}else{
											if(autoplay!='on'){									
												$poster_preload
												.css({'background-image': 'url(' + (poster_background) + ')'})
												.addClass('active-item')
												.on('click', function(){
													$player.play();
													$(this).removeClass('active-item');
												});
											}
											
											$('#'+(player_init_id)).trigger( prefix+'videoCreateFinish', [$player]);
										}									
									}
									
									if(player_id === 'player-api-control'){
										_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
											_.player_actions($player, single_video_network, 'pause');
										});
									}
									
									_.single_video_time_lapses($player, single_video_network, player_id, $poster_preload);											
									
								},368);	
								
								$player.addEventListener('ended', function(){
									$playerMutedControl.removeClass('active-item');
									
									_.reset_ads(player_id);
									
									_.auto_next_fnc({
										'player': 				$player,
										'partyElm':				$partyElm,
										'player_id': 			player_id,
										'single_video_network': single_video_network,
									});
									
								});			
							}
						});
					/*api ready*/	
					});
					_.setVideo3rdPartyAPIReady(player_id, 'selfhostedAPIReady', 'selfhosted');
					
					break;
					
				case 'embeded-code':
				
					$player = {
						play:function(){},
						pause:function(){},
						seek:function(int){}
					}
					
					var $ads_object = {
						'player': 				$player,
						'player_id': 			player_id,
						'player_init_id': 		player_init_id,
						'single_video_network': single_video_network,											
						'partyElm':				$partyElm,
						'fake_player':			_.fake_player({
													'player': 				$player,
													'single_video_network': single_video_network,
												}),
						'autoplay':				'off',						
						'ads_object':			ads_object,	
						'ads_enable':			ads_enable,
						'ads_network':			ads_network,										
						'va_google_ima_source': va_google_ima_source						
					}
				
					if(typeof(player_obj.single_video_embed) === 'undefined'){
						
						_.video_ads_embed($ads_object);
						return;
						
					}
					
					$('#'+(player_id)).append(player_obj.single_video_embed);
					
					var $vidorev_custom_player = $('#'+(player_id)).find('.video-js');
					if(player_obj.single_video_embed.indexOf('GDPlayer') !== -1 && typeof(videojs) === 'function' && $vidorev_custom_player.length > 0 && typeof($vidorev_custom_player.attr('id'))!=='undefined'){
						videojs($vidorev_custom_player.attr('id'));
						console.log('Vidorev: GD Player setup');
					}else if(player_obj.single_video_embed.indexOf('videojs(') === -1 && player_obj.single_video_embed.indexOf('videojs (') === -1 && typeof(videojs) === 'function' && $vidorev_custom_player.length > 0 && typeof($vidorev_custom_player.attr('id'))!=='undefined'){
						videojs($vidorev_custom_player.attr('id'));
						console.log('Vidorev: video js setup');
					}
					
					_.video_ads_embed($ads_object);
					
					_.$el.on(prefix+'closeLightBoxVideoEventForEmbedTrigger', function(e, _, videoActive){
						if(videoActive.find('#'+(player_id)).length > 0){
							$('#'+(player_id)).html('');
						}
					});
					
					_.$el.on(prefix+'VideoEmbedChangeEventTrigger', function(e, _, videoActive){
						if(videoActive.find('#'+(player_id)).length > 0){
							$('#'+(player_id)).html('');
						}
					});
					
					_.$el.on(prefix+'openLightBoxVideoEmbedEventTrigger', function(e, _, item_id){
						if(item_id.find('#'+(player_id)).length > 0){
							$('#'+(player_id)).append(player_obj.single_video_embed);
							/*_.video_ads_embed($ads_object);*/
						}						
					});												
			}
			
		}else{
			return '';
		}
	}
	
	vidorev_theme.prototype.video_theater_mode = function(){
		var _ = this;
		
		_.$el.off('.theaterModeControl').on('click.theaterModeControl', '.theater-mode-control', function(e){
			var $t = $(this);
			
			if($t.parents('#main-content').length > 0){
				_.$el.addClass('vidorev-theater-mode-classic');
			}
			
			$t.toggleClass('active-item');
			_.$el.toggleClass('vidorev-theater-mode');
			
			var offsetTop = 0;
			
			if(window.innerWidth > 600){
				offsetTop = $('#wpadminbar').height();
			}
			
			var $nav = $('#site-header .nav-wrap-control');
			
			if($nav.length > 0){
				$('html, body').animate({scrollTop:$nav.offset().top - offsetTop}, {duration:500, complete: function(){}});
			}
			
			var sidebarPadding = $('#video-player-wrap-control').height() + 20;
			
			if(_.$el.hasClass('vidorev-theater-mode-classic') && _.$el.hasClass('vidorev-theater-mode')){
				$('#main-sidebar').css({'padding-top':(sidebarPadding)+'px'});
			}else{
				$('#main-sidebar').css({'padding-top':''});//.removeAttr('style');
			}
			
			var default_width 	= window.innerWidth;			
			$(window).on('resize', function(){
				if(default_width === window.innerWidth){
					return;
				}
				
				if(!_.$el.hasClass('vidorev-theater-mode-classic') || !_.$el.hasClass('vidorev-theater-mode')){
					return;
				}
				
				var sidebarPadding = $('#video-player-wrap-control').height() + 20;
				
				$('#main-sidebar').css({'padding-top':(sidebarPadding)+'px'});
				
				default_width 	= window.innerWidth;
			});
			
			if(!_.$el.hasClass('close-side-menu') && $('.side-menu-wrapper-control').css('display')!='none' && _.$el.hasClass('header-vid-side')){				
				_.$el.removeClass('open-side-menu').addClass('close-side-menu');
			}
			
			_.$el.trigger('theater_mode_enable', [_]);				
		});
	}
	
	vidorev_theme.prototype.video_player_floating = function(){
		var _ = this;
		
		var $vidPlayerWrapper 	= $('#video-player-wrap-control'),
			floatingClass 		= 'floating-video';
		
		if($vidPlayerWrapper.length === 0 || _.$el.hasClass('disable-floating-video') || !$vidPlayerWrapper.find('.player-3rdparty-control').hasClass('player-loaded')){
			return;
		}
		
		var videoOffset = $vidPlayerWrapper.offset().top + $vidPlayerWrapper.outerHeight(true);
		
		if($(window).scrollTop() > videoOffset+20){
			if(_.$el.hasClass('floating-video')){
				return;
			}
			_.$el.addClass('floating-video');
		}else{
			if(!_.$el.hasClass('floating-video')){
				return;
			}
			_.$el.removeClass('floating-video');
		}
	}
	
	vidorev_theme.prototype.close_video_player_floating = function(){
		var _ = this;
		
		_.$el.off('.scrollUpVideoPlayerFloating').on('click.scrollUpVideoPlayerFloating', 'a.scroll-up-floating-video-control', function(e){
			$('html, body').animate({scrollTop:0}, {duration:500, complete: function(){}});			
			return false;
		});
		
		_.$el.off('.closeVideoPlayerFloating').on('click.closeVideoPlayerFloating', 'a.close-floating-video-control', function(e){
			var $t = $(this);			
			_.$el.addClass('disable-floating-video');
			return false;				
		});
	}
	
	vidorev_theme.prototype.auto_next_control = function(){
		var _ = this;
		
		_.$el.off('.autoNextControl').on('click.autoNextControl', '.auto-next-control', function(e){
			var $t 				= $(this),
				$icon_control 	= $t.find('.auto-next-icon-control');		
					
			$icon_control.toggleClass('active-item');
			
			if($icon_control.hasClass('active-item')){
				Cookies.set('vpautonextvideo', 'true', { expires: 368 });
			}else{
				Cookies.set('vpautonextvideo', 'false', { expires: 368 });
			}
			
			_.global_video_auto_next = typeof(Cookies.get('vpautonextvideo'))!=='undefined' && Cookies.get('vpautonextvideo') == 'true';
			
			return false;				
		});
		
		_.auto_next_check();
	}
	
	vidorev_theme.prototype.auto_next_check = function(){
		var _ = this;
		
		if(_.global_video_auto_next){			
			$('.auto-next-icon-control').addClass('active-item');
			return true;			
		}
		
		return false;		
	}
	
	vidorev_theme.prototype.player_actions = function($player, single_video_network, action, setCurrentTime){
		var _ = this;
		
		if(typeof($player) === 'undefined' || typeof(single_video_network) === 'undefined'){
			return;
		}
		
		if(typeof($player.vidorev_partyLibrary)!=='undefined'){
			switch($player.vidorev_partyLibrary){				
				case 'jw':
					if(action==='play'){
						$player.play();
					}else if(action==='pause'){
						$player.pause();
					}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){
						$player.seek(setCurrentTime);
					}
					return;
					break;
				
				case 'fluidplayer':
					if(action==='play'){
						$player.play();
					}else if(action==='pause'){
						$player.pause();
					}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){						
						try {
							$player.currentTime = setCurrentTime;								
						} catch (fluidError1) {
							console.log('try fluid-api');
							try {
								$player.skipTo(setCurrentTime);	
							} catch (fluidError2) {
								console.log('err-fluid');
							}													
						}
					}
					return;
					break;				
			}
			
		}
								
		switch(single_video_network){
			case 'youtube':
				
				if(typeof($player.is_used_plyr_player)!=='undefined' && $player.is_used_plyr_player == 'on'){
					if(action==='play'){
						$player.play();
					}else if(action==='pause'){
						$player.pause();
					}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){
						$player.currentTime=setCurrentTime;
						$player.muted=false;
						$player.volume=1;
					}
				}else{
					if(action==='play'){
						$player.playVideo();
					}else if(action==='pause'){
						$player.pauseVideo();
					}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){
						$player.seekTo(setCurrentTime, true);
					}
				}
				break;
				
			case 'vimeo':
				if(typeof($player.is_used_plyr_player)!=='undefined' && $player.is_used_plyr_player == 'on'){
					if(action==='play'){
						$player.play();
					}else if(action==='pause'){
						$player.pause();
					}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){
						$player.currentTime=setCurrentTime;
						$player.muted=false;
						$player.volume=1;
					}
				}else{
					if(action==='play'){
						$player.play();
					}else if(action==='pause'){
						$player.pause();
					}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){
						$player.setCurrentTime(setCurrentTime);
					}
				}
				break;
				
			case 'dailymotion':			
				if(action==='play'){
					$player.play();
				}else if(action==='pause'){
					$player.pause();
				}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){
					$player.seek(setCurrentTime);
				}
				break;
				
			case 'facebook':
				if(action==='play'){
					$player.play();
				}else if(action==='pause'){
					$player.pause();
				}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){
					$player.seek(setCurrentTime);
				}
				break;
				
			case 'twitch':
				if(action==='play'){
					$player.play();
				}else if(action==='pause'){
					$player.pause();
				}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){
					$player.seek(setCurrentTime);
				}	
				break;	
				
			case 'self-hosted': case 'drive':
				if(action==='play'){
					$player.play();
				}else if(action==='pause'){
					$player.pause();
				}else if(action==='seek' && typeof(setCurrentTime)!=='undefined' && _.isNumber(setCurrentTime)){
					$player.currentTime = setCurrentTime;
				}	
				break;				
		}
	}
	
	vidorev_theme.prototype.isNumber = function(n){
		var _ = this;
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	vidorev_theme.prototype.nFormatter = function(num, digits){	
			
		if(isNaN(num)){
			return '0';
		}
		
		var si = [
				{ value: 1E18, symbol: "E" },
				{ value: 1E15, symbol: "P" },
				{ value: 1E12, symbol: "T" },
				{ value: 1E9,  symbol: "G" },
				{ value: 1E6,  symbol: "M" },
				{ value: 1E3,  symbol: "k" }
			],
			rx = /\.0+$|(\.[0-9]*[1-9])0+$/, 
			i;
		for (var i=0; i<si.length;i++) {
			if(num>=si[i].value) {
				return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
			}
		}
		return num.toFixed(digits).replace(rx, "$1");
	}
	
	vidorev_theme.prototype.fake_player = function(values){
		
		if(typeof(values)!=='object'){
			return;
		}
		
		var _ = this;
		
		var $player 				= values.player,
			single_video_network 	= values.single_video_network;

		
		var action = document.createElement('video');
		
		action.play = function(){
			_.player_actions($player, single_video_network, 'play');
		}			
		action.pause = 	function(){
			_.player_actions($player, single_video_network, 'pause');
		}
		
		if(_.global_video_network_placeholder_hide){
			action.vidorev_amp_player = true;
		}
		
		if( (single_video_network === 'self-hosted' || single_video_network === 'drive') && typeof($player.vidorev_partyLibrary)==='undefined' ){
			return $player;
		}
		
		return action;
	}
	
	vidorev_theme.prototype.reset_ads = function(player_id){
		var _ = this;
		if(typeof(_.is_ad_appeared[player_id])!=='undefined' && Array.isArray(_.is_ad_appeared[player_id]) && _.is_ad_appeared[player_id].length>0){
			_.is_ad_appeared[player_id] = [];
			/*$('.data-lightbox-content').append(player_id+'-reset<br>');*/
		}
	}
	
	vidorev_theme.prototype.auto_next_fnc = function(obj){
		var _ = this;

		if(typeof(obj)!=='object'){
			return;
		}else{
			
			var $player					= obj.player,
				$partyElm 				= obj.partyElm,
				player_id 				= obj.player_id,
				single_video_network 	= obj.single_video_network,
				$playlistFrame			= $partyElm.parents('.playlist-frame-control');
			
			var $repeat_btn = null;	
				
			var	action_auto_next = function(next_text, next_url, target_lightbox){
				
				if(_.global_video_network_placeholder_hide){
					return;
				}
					
				var $autoNextControl 	= $partyElm.find('.auto-next-elm-control');
				
				if(next_text!==null){
					$autoNextControl.find('.video-next-title-control').text(next_text);
				}
				
				if(next_url===null){
					next_url = $autoNextControl.attr('data-next-url');
				}
				
				if(typeof(next_url)==='undefined' || next_url==''){
					return;
				}
				
				$autoNextControl.css({'background-image': 'url(' + ($autoNextControl.attr('data-background-url')) + ')'}).addClass('active-item');
				
				if(screenfull.isFullscreen){
					$partyElm.addClass('auto-next-set-fs');
				}
				
				$(window).on('resize', function(){									
					if(screenfull.isFullscreen){
						$partyElm.addClass('auto-next-set-fs');
					}else{
						$partyElm.removeClass('auto-next-set-fs');
					}
				});
				
				var cancel_next = null;
				
				cancel_next = setTimeout(function(){
					if(cancel_next!==null){
						clearTimeout(cancel_next);
					}
					
					if(typeof(target_lightbox)!=='undefined' && target_lightbox.length > 0){
						
						if($partyElm.parents('.lib-item-control').hasClass('show-video') && $partyElm.parents('.video-lightbox-wrapper-control').hasClass('show-lightbox')){
																
							target_lightbox.trigger('click');
						}
													
					}else{							
						window.location.href = next_url;							
					}
				}, 6800);					
									
				$autoNextControl.find('.loader-timer-control').on('click', function(){
					if(cancel_next!==null){
						clearTimeout(cancel_next);
					}
					
					if(typeof(target_lightbox)!=='undefined' && target_lightbox.length > 0){
						target_lightbox.trigger('click');
					}else{
						window.location.href = next_url;
					}
											
					return false;
				});
				
				$autoNextControl.find('.cancel-btn-control').on('click', function(){
					if(cancel_next!==null){
						clearTimeout(cancel_next);
					}
					$autoNextControl.removeClass('active-item');
					$partyElm.removeClass('auto-next-set-fs');
					
					return false;
				});
				
				_.$el.on(prefix+'closeLightBoxVideoEventTrigger', function(){
					if(cancel_next!==null){
						clearTimeout(cancel_next);
					}
					$autoNextControl.removeClass('active-item');
					$partyElm.removeClass('auto-next-set-fs');
				});
				
				_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
					if(cancel_next!==null){
						clearTimeout(cancel_next);
					}
					$autoNextControl.removeClass('active-item');
					$partyElm.removeClass('auto-next-set-fs');
				});
			}
			
			if($partyElm.parents('.video-lightbox-wrapper-control').length > 0){
				
				$repeat_btn = $partyElm.parents('.video-lightbox-wrapper-control').find('.repeat-video-control');
				if($repeat_btn.length === 1 && $repeat_btn.hasClass('active-item')){
					_.video_repeat_action(obj);
					return false;
				}
				
				if(!_.global_video_auto_next){
					return;
				}
				
				var $next_elm 			= $partyElm.parents('.video-lightbox-wrapper-control').find('.next-video-popup-action .check-url-control'),
					next_url 			= $next_elm.attr('href'),
					next_text 			= $next_elm.text();
				
				if($next_elm.length === 0){					
					return;
				}
									
				action_auto_next(next_text, next_url, $next_elm);
				
			}else if($playlistFrame.length > 0){
				
				$repeat_btn = $playlistFrame.find('.repeat-video-control');
				if($repeat_btn.length === 1 && $repeat_btn.hasClass('active-item')){
					_.video_repeat_action(obj);
					return false;
				}
				
				if(!_.global_video_auto_next){
					return;
				}
				
				var $curent_player_index = $playlistFrame.find('.video-listing-item-control.current-item');
				if($curent_player_index.length === 0){
					return;
				}
				
				var index = $curent_player_index.attr('data-index');
				
				if(typeof(index)==='undefined' || !_.isNumber(index)){
					return;
				}
				
				var next_index = parseFloat(index) + 1;
				
				if($playlistFrame.find('.video-listing-item-control[data-index="'+(next_index)+'"]').length === 0){
					next_index = 0;
				}
				
				var $next_elm 			= $playlistFrame.find('.video-listing-item-control[data-index="'+(next_index)+'"]').find('.check-url-control'),
					next_url 			= $next_elm.attr('href'),
					next_text 			= $next_elm.text();
									
				action_auto_next(next_text, next_url);
				
			}else{
				$repeat_btn = _.$el.find('.single-repeat-video-control');
				if($repeat_btn.length === 1 && $repeat_btn.hasClass('active-item')){
					_.video_repeat_action(obj);
					return false;
				}
				
				if(!_.global_video_auto_next){
					return;
				}
				
				action_auto_next(null, null);
			}
		}
	}
	
	vidorev_theme.prototype.video_ads_embed = function(values){
		if(typeof(values)!=='object'){
			return;
		}
		var _ = this;
		
		var ads_enable				= values.ads_enable,
			$partyElm				= values.partyElm;
			
		if(!ads_enable){
			$partyElm.addClass('player-loaded');
			return;
		}
		
		var ads_network				= values.ads_object.ads_network,
			va_google_ima_source	= values.va_google_ima_source,
			$poster_preload			= $partyElm.find('.autoplay-off-elm-control'),
			poster_background		= $poster_preload.attr('data-background-url');			
				
		_.loadAdsLibraries(function(){
			if(ads_network === 'google_ima' && va_google_ima_source!=''){
				
				_.ads_google_ima(values);
				return;
							
			}else if(ads_network != 'google_ima'){
				
				$poster_preload
				.css({'background-image': 'url(' + (poster_background) + ')'})
				.addClass('active-item')
				.on('click', function(){
					switch(ads_network){
						case 'image':
							_.ads_image(values);
							break;
							
						case 'html5_video':
							_.ads_html5_video(values);
							break;	
							
						case 'html':
							_.ads_html(values);
							break;
							
						case 'dynamic_ad':
							_.ads_dynamic(values);
							break;					
					}
					
					$(this).removeClass('active-item');
				});
								
				$partyElm.addClass('player-loaded');							
				return;
				
			}
		});		
	}
	
	vidorev_theme.prototype.video_myCred_points = function(values){
		
		var _ = this;
		
		if(typeof(timeViewVideoRequest_myCred)==='undefined' || !_.isNumber(timeViewVideoRequest_myCred) || typeof(values)!=='object'){
			return;
		}
		
		var	$player 				= values.player, 
			video_duration			= parseFloat(values.video_duration),
			video_current_time		= parseFloat(values.video_current_time),
			player_id				= values.player_id;
			
		_.$el.trigger( prefix+'beeteam368ActionToControlVideo', [player_id, video_current_time, video_duration]);	
			
		if(typeof(_.global_video_myCred_calculator[player_id])!=='undefined' && _.global_video_myCred_calculator[player_id] === null){
			return;
		}
		
		var data = {
			'action': 		'vidorev_update_mycred_points',
			'security':		(typeof(vidorev_jav_js_object.security)!=='undefined')?vidorev_jav_js_object.security:'',					
		}

		if(timeViewVideoRequest_myCred === -1 || timeViewVideoRequest_myCred > 1){
			
			if(typeof(_.global_video_myCred_calculator[player_id])==='undefined'){
				_.global_video_myCred_calculator[player_id] = [1, parseFloat(video_current_time)];
			}else{
				var last_current_time = parseFloat(_.global_video_myCred_calculator[player_id][1]);
				if(parseFloat(video_current_time) > last_current_time){
					_.global_video_myCred_calculator[player_id] = [parseFloat(_.global_video_myCred_calculator[player_id][0])+1, video_current_time];
				}else{
					_.global_video_myCred_calculator[player_id] = [_.global_video_myCred_calculator[player_id][0], last_current_time];					
				}
			}
			
			var time = parseFloat(_.global_video_myCred_calculator[player_id][0]) * 280 / 1000;
			
			if(timeViewVideoRequest_myCred === -1 && time >= video_duration - 3.68){
				_.global_video_myCred_calculator[player_id] = null;
				
				$.ajax({
					type: 		'POST',
					url: 		vidorev_jav_js_object.admin_ajax,
					cache: 		false,
					data: 		data,
					dataType: 	'json',
					success: 	function(data, textStatus, jqXHR){					
						if(typeof(data) === 'object'){
							console.log(data);
						}
					},
				});
				
			}else if(timeViewVideoRequest_myCred > 0 && time >= timeViewVideoRequest_myCred - 1){
				_.global_video_myCred_calculator[player_id][0] = 1;
				
				$.ajax({
					type: 		'POST',
					url: 		vidorev_jav_js_object.admin_ajax,
					cache: 		false,
					data: 		data,
					dataType: 	'json',
					success: 	function(data, textStatus, jqXHR){					
						if(typeof(data) === 'object'){
							console.log(data);
						}
					},
				});
			}
			
		}else if(timeViewVideoRequest_myCred === 1){
			_.global_video_myCred_calculator[player_id] = null;			
			
			$.ajax({
				type: 		'POST',
				url: 		vidorev_jav_js_object.admin_ajax,
				cache: 		false,
				data: 		data,
				dataType: 	'json',
				success: 	function(data, textStatus, jqXHR){					
					if(typeof(data) === 'object'){
						console.log(data);
					}
				},
			});
		}

	}
	
	vidorev_theme.prototype.video_ads = function(values){
		if(typeof(values)!=='object'){
			return;
		}
		var _ = this;
		
		var $player 				= values.player,
			$partyElm				= values.partyElm,
			single_video_network 	= values.single_video_network,
			video_duration			= parseFloat(values.video_duration),
			video_current_time		= parseFloat(values.video_current_time),
			player_id				= values.player_id;
			
		var ads_network				= values.ads_object.ads_network,
			time_to_show_ads 		= values.ads_object.time_to_show_ads,
			time_skip_ads 			= parseFloat(values.ads_object.time_skip_ads),
			time_to_hide_ads 		= parseFloat(values.ads_object.time_to_hide_ads);
			
		if(ads_network === 'google_ima' || ads_network === 'vast'){
			return;
		}	
			
		if(typeof(_.is_ad_appeared[player_id])==='undefined'){
			_.is_ad_appeared[player_id] = [];
		}
		
		if(screenfull.isFullscreen){
			$partyElm.addClass('ads-set-fs');
		}
		
		$(window).on('resize', function(){									
			if(screenfull.isFullscreen){
				$partyElm.addClass('ads-set-fs');
			}else{
				$partyElm.removeClass('ads-set-fs');
			}
		});		
						
		if(!Array.isArray(time_to_show_ads) || !_.isNumber(video_duration) || !_.isNumber(video_current_time)){
			return;
		}
				
		$.each(time_to_show_ads, function(i, value){
			
			var ct_show_ad 			= _.isNumber(value) ? parseFloat(value) : '',
				next_time_show_ad 	=  (typeof(time_to_show_ads[i+1])!=='undefined' && _.isNumber(time_to_show_ads[i+1])) ? parseFloat(time_to_show_ads[i+1]) : video_duration;
					
			if(ct_show_ad !== '' && ct_show_ad < video_duration && video_current_time >= ct_show_ad && video_current_time < next_time_show_ad && typeof(_.is_ad_appeared[player_id][i])==='undefined'){
				
				_.is_ad_appeared[player_id][i] = true;
				
				if(ads_network!='dynamic_ad'){
				
					_.player_actions($player, single_video_network, 'pause');
					
					$(document).on(prefix+'adsFinish'+(player_id), function(){
						_.player_actions($player, single_video_network, 'play');
					});
					
				}
				
				switch(ads_network){
					case 'image':
						_.ads_image(values);
						break;
						
					case 'html5_video':
						_.ads_html5_video(values);
						break;	
						
					case 'html':
						_.ads_html(values);
						break;
						
					case 'dynamic_ad':
						_.ads_dynamic(values);
						break;				
				}

			}
		});
	}
	
	vidorev_theme.prototype.ads_google_ima = function(values){
		if(typeof(values)!=='object'){
			return;
		}
		
		var _ = this;
		
		var $player			= values.player,
			player_id 		= values.player_id,
			adsContainerID 	= (player_id)+'-adContainer',
			player_init_id	= values.player_init_id,
			$player_init_id = $('#'+(player_init_id)),
			$partyElm 		= values.partyElm,
			$textLoadAds	= $partyElm.find('.text-load-ads-control'),
			$ads_muted_c	= $partyElm.find('.ads-muted-control'),
			$fake_player	= values.fake_player,
			autoplay		= values.autoplay,
			adWidth			= $partyElm.width(),
			adHeight		= $partyElm.height();
			
		var va_google_ima_source = values.va_google_ima_source;
		
		if(va_google_ima_source == ''){
			return;
		}

		$partyElm.append('<div class="ima-adContainer ima-adContainer-control" id="'+(adsContainerID)+'"></div>');
		
		var adsManager;
		var adsLoader;
		var adDisplayContainer;
		var intervalTimer = null;
		var videoContent = $fake_player;
		
		var controlPlayer = function(){
				$partyElm.addClass('player-loaded');
				$partyElm.removeClass('ads-active-elm');
				$adContainer.addClass('hide-ads');	
				$textLoadAds.removeClass('show-load-ad');
				$ads_muted_c.removeClass('active-item');
				if(autoplay==='on'){								
					videoContent.play();																
				}else{
					var $poster_preload		= $partyElm.find('.autoplay-off-elm-control'),
						poster_background	= $poster_preload.attr('data-background-url');
					
					if(!$poster_preload.hasClass('ready-setup')){
						if(!_.global_video_network_placeholder_hide){
							$poster_preload
							.css({'background-image': 'url(' + (poster_background) + ')'})
							.addClass('active-item')
							.on('click', function(){						
								videoContent.play();
								$(this).removeClass('active-item');
							});
						}
					}else{
						var $lightbox_video 	= $partyElm.parents('.video-lightbox-wrapper-control');
						var $item_on_lightbox 	= $partyElm.parents('.lib-item-control');
						if($lightbox_video.length > 0 && $item_on_lightbox.length > 0 && (!$lightbox_video.hasClass('show-lightbox') || !$item_on_lightbox.hasClass('show-video') || !$poster_preload.hasClass('ready-clicked'))){
							return;
						}
						videoContent.play();
					}
				}
				
				$player_init_id.trigger( prefix+'videoCreateFinish', [$player]);
			},
			$adContainer = $('#'+(adsContainerID)),
			controlIMAPreroll = function(){
				var $lightbox_video 	= $partyElm.parents('.video-lightbox-wrapper-control');
				var $item_on_lightbox 	= $partyElm.parents('.lib-item-control');
				if($lightbox_video.length > 0 && $item_on_lightbox.length > 0 && (!$lightbox_video.hasClass('show-lightbox') || !$item_on_lightbox.hasClass('show-video'))){										
					adsManager.pause();
				}	
			};
		
		/*onAdsManagerLoaded*/
		
			/*adsManager EVENT*/
				var onAdError = function(adErrorEvent) {
					console.log('adsManager: '+(adErrorEvent.getError()));
					adsManager.destroy();
					controlPlayer();
				}
				
				var onContentPauseRequested = function() {
					videoContent.pause();
				}
				
				var onContentResumeRequested = function() {
					var $lightbox_video 	= $partyElm.parents('.video-lightbox-wrapper-control');
					var $item_on_lightbox 	= $partyElm.parents('.lib-item-control');
					if($lightbox_video.length > 0 && $item_on_lightbox.length > 0 && (!$lightbox_video.hasClass('show-lightbox') || !$item_on_lightbox.hasClass('show-video'))){
						return;
					}
					
					videoContent.play();
				}
				
				var onAdEvent = function(adEvent){
					var ad = adEvent.getAd();
					switch (adEvent.type) {
						case google.ima.AdEvent.Type.LOADED:
							if (!ad.isLinear()) {															
								$partyElm.addClass('ads-non-linear');								
								videoContent.play();
							}else{
								$partyElm.removeClass('ads-non-linear');
							}
							
							$textLoadAds.removeClass('show-load-ad');
							$player_init_id.trigger( prefix+'videoCreateFinish', [$player, adsContainerID]);
												
							break;
						case google.ima.AdEvent.Type.STARTED:						
							
							if(adsManager.getVolume() == 0){
								$ads_muted_c.addClass('active-item').on('click', function(){
									adsManager.setVolume(1);
									$(this).removeClass('active-item');
								});
							}
							
							$partyElm.addClass('ads-active-elm');
							$adContainer.removeClass('hide-ads');
							$textLoadAds.removeClass('show-load-ad');
							
							if (ad.isLinear()) {
								intervalTimer = setInterval(function() {
									var remainingTime = adsManager.getRemainingTime();
									if(typeof(_.global_player_playing[player_id])!=='undefined' && _.global_player_playing[player_id]){
										_.global_player_playing[player_id] = false;
										videoContent.pause();
										
										var $lightbox_video 	= $partyElm.parents('.video-lightbox-wrapper-control');
										var $item_on_lightbox 	= $partyElm.parents('.lib-item-control');
										if($lightbox_video.length > 0 && $item_on_lightbox.length > 0 && (!$lightbox_video.hasClass('show-lightbox') || !$item_on_lightbox.hasClass('show-video'))){
											return;
										}
										
										adsManager.resume();
									}
								},
								368);
							}
							
							controlIMAPreroll();
							
							break;
						case google.ima.AdEvent.Type.COMPLETE:
							$partyElm.removeClass('ads-active-elm');
							$adContainer.addClass('hide-ads');
							$ads_muted_c.removeClass('active-item');
							if (intervalTimer!=null && ad.isLinear()) {
								clearInterval(intervalTimer);
							}
							break;							
						case google.ima.AdEvent.Type.SKIPPED:
							$partyElm.removeClass('ads-active-elm');
							$adContainer.addClass('hide-ads');
							$ads_muted_c.removeClass('active-item');
							if (intervalTimer!=null && ad.isLinear()) {
								clearInterval(intervalTimer);
							}
							break;							
						case google.ima.AdEvent.Type.USER_CLOSE:
							$partyElm.removeClass('ads-active-elm');
							$adContainer.addClass('hide-ads');
							$ads_muted_c.removeClass('active-item');						
							if (intervalTimer!=null && ad.isLinear()) {
								clearInterval(intervalTimer);
							}
							break;	
						case google.ima.AdEvent.Type.VOLUME_MUTED:
							$ads_muted_c.addClass('active-item').on('click', function(){
								adsManager.setVolume(1);
								$(this).removeClass('active-item');
							});
							break;	
					}
				}
			/*adsManager EVENT*/
			
			var onAdsManagerLoaded = function(adsManagerLoadedEvent){
				
				/*adsRenderingSettings*/
					var adsRenderingSettings = new google.ima.AdsRenderingSettings();		
					adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
				/*adsRenderingSettings*/
				
				/*adsManager*/
					adsManager = adsManagerLoadedEvent.getAdsManager( videoContent, adsRenderingSettings );
					
					/*RUN Ads*/						
						
						$partyElm.addClass('player-loaded');
						
						if(autoplay==='on'){
							
							if(screenfull.isFullscreen){
								$partyElm.addClass('ads-set-fs');
							}
							
							$(window).on('resize', function(){									
								if(screenfull.isFullscreen){
									$partyElm.addClass('ads-set-fs');
								}else{
									$partyElm.removeClass('ads-set-fs');
								}
							});
							
							$textLoadAds.addClass('show-load-ad');
							
							adDisplayContainer.initialize();
							try {
								
								adsManager.init(adWidth, adHeight, google.ima.ViewMode.NORMAL);
								if(_.global_muted_video){
									adsManager.setVolume(0);
								}
								_.is_ad_google_ima_control[adsContainerID] = adsManager;
								
								_.is_ad_google_ima_stated_event[adsContainerID] = true;	
								adsManager.start();
																
							} catch (adError) {
								
								console.log('adsManager-init: '+(adError));								
								controlPlayer();
								
							}
													
						}else{
							
							var $poster_preload		= $partyElm.find('.autoplay-off-elm-control'),
								poster_background	= $poster_preload.attr('data-background-url');	
								
							$poster_preload
							.css({'background-image': 'url(' + (poster_background) + ')'})
							.addClass('active-item ready-setup')
							.on('click', function(){
								
								/*screenfull.request($('#player-api-control')[0]);*/
								
								if(screenfull.isFullscreen){
									$partyElm.addClass('ads-set-fs');
								}
								
								$(window).on('resize', function(){									
									if(screenfull.isFullscreen){
										$partyElm.addClass('ads-set-fs');
									}else{
										$partyElm.removeClass('ads-set-fs');
									}
								});								
																
								$(this).addClass('ready-clicked');
								
								$textLoadAds.addClass('show-load-ad');
																
								if(typeof(videoContent.vidorev_amp_player)==='undefined'){
									videoContent.load();
									videoContent.play();
								}
								
								adDisplayContainer.initialize();
								try {
									
									adsManager.init(adWidth, adHeight, google.ima.ViewMode.NORMAL);
									if(_.global_muted_video){
										adsManager.setVolume(0);
									}
									_.is_ad_google_ima_control[adsContainerID] = adsManager;
									
									_.is_ad_google_ima_stated_event[adsContainerID] = true;	
									adsManager.start();
									
								} catch (adError) {
									
									console.log('adsManager-init: '+(adError));
									controlPlayer();
									
								}	
															
								$(this).removeClass('active-item');
								videoContent.pause();
								
							});
							
							$player_init_id.trigger( prefix+'playVideoWithGoogleIMAReady', [$player, $poster_preload]);	
							
						}
					/*RUN Ads*/
								
					adsManager.addEventListener( google.ima.AdErrorEvent.Type.AD_ERROR, onAdError );
					adsManager.addEventListener( google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested );		
					adsManager.addEventListener( google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested );		
					adsManager.addEventListener( google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdEvent );
					adsManager.addEventListener( google.ima.AdEvent.Type.LOADED, onAdEvent );
					adsManager.addEventListener( google.ima.AdEvent.Type.STARTED, onAdEvent );
					adsManager.addEventListener( google.ima.AdEvent.Type.COMPLETE, onAdEvent );	
					
					adsManager.addEventListener( google.ima.AdEvent.Type.AD_BREAK_READY, onAdEvent );	
					adsManager.addEventListener( google.ima.AdEvent.Type.AD_METADATA, onAdEvent );	
					adsManager.addEventListener( google.ima.AdEvent.Type.CLICK, onAdEvent );	
					adsManager.addEventListener( google.ima.AdEvent.Type.DURATION_CHANGE, onAdEvent );	
					adsManager.addEventListener( google.ima.AdEvent.Type.FIRST_QUARTILE, onAdEvent );	
					adsManager.addEventListener( google.ima.AdEvent.Type.IMPRESSION, onAdEvent );	
					adsManager.addEventListener( google.ima.AdEvent.Type.INTERACTION, onAdEvent );	
					adsManager.addEventListener( google.ima.AdEvent.Type.LINEAR_CHANGED, onAdEvent );
					
					adsManager.addEventListener( google.ima.AdEvent.Type.LOG, onAdEvent );
					adsManager.addEventListener( google.ima.AdEvent.Type.MIDPOINT, onAdEvent );
					adsManager.addEventListener( google.ima.AdEvent.Type.PAUSED, onAdEvent );
					adsManager.addEventListener( google.ima.AdEvent.Type.RESUMED, onAdEvent );
					
					adsManager.addEventListener( google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, onAdEvent );
					adsManager.addEventListener( google.ima.AdEvent.Type.SKIPPED, onAdEvent );	
					adsManager.addEventListener( google.ima.AdEvent.Type.THIRD_QUARTILE, onAdEvent );
					
					adsManager.addEventListener( google.ima.AdEvent.Type.USER_CLOSE, onAdEvent );
					adsManager.addEventListener( google.ima.AdEvent.Type.VOLUME_CHANGED, onAdEvent );
					adsManager.addEventListener( google.ima.AdEvent.Type.VOLUME_MUTED, onAdEvent );		
				/*adsManager*/
				
			}	
		/*onAdsManagerLoaded*/
		
		/*adDisplayContainer*/
			adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById(adsContainerID)/*, videoContent*/);			
		/*adDisplayContainer*/
		
		/*adsLoader*/			
			/*adsLoader EVENT*/
				var adsLoader_onAdError = function(adErrorEvent) {
					console.log('adsLoader: '+(adErrorEvent.getError()));								
					controlPlayer();
				}
			/*adsLoader EVENT*/
			
			adsLoader = new google.ima.AdsLoader(adDisplayContainer);
			adsLoader.getSettings().setAutoPlayAdBreaks(false);
			
			/*adsRequest*/
				var adsRequest 		= new google.ima.AdsRequest();
				adsRequest.adTagUrl = va_google_ima_source;
			
				adsRequest.linearAdSlotWidth = adWidth;
				adsRequest.linearAdSlotHeight = adHeight;
			
				adsRequest.nonLinearAdSlotWidth = adWidth;
				adsRequest.nonLinearAdSlotHeight = adHeight;
			/*adsRequest*/
			
			adsLoader.requestAds(adsRequest);
			
			adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, false);
			adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, adsLoader_onAdError, false);
			
			videoContent.addEventListener('ended', function(){
				adsLoader.contentComplete();
			});					
			
		/*adsLoader*/
	}
	
	vidorev_theme.prototype.ads_image = function(values){
		if(typeof(values)!=='object'){
			return;
		}
		var _ = this;
		
		var player_id				= values.player_id,
			ads_object				= values.ads_object;
		
		if(typeof(ads_object)==='undefined' || typeof(ads_object.va_image_source)==='undefined' || $.trim(ads_object.va_image_source)==''){
			$(document).trigger(prefix+'adsFinish'+(player_id), [_]);
			return false;
		}
		
		var	va_image_source			= $.trim(ads_object.va_image_source),
			va_image_link			= $.trim(ads_object.va_image_link),
			time_skip_ads 			= parseFloat(ads_object.time_skip_ads),
			time_to_hide_ads 		= parseFloat(ads_object.time_to_hide_ads);
		
		var $partyElm				= values.partyElm,
			selfAdsID				= (player_id)+'-selfAdsID';
			
		var before_ads 	= '',
			after_ads	= '';
				
		if(va_image_link!=''){
			before_ads 	= '<a href="'+(va_image_link)+'" target="_blank">';
			after_ads	= '</a>';
		}	
		
		if($partyElm.find('#'+(selfAdsID)).length === 0){
			
			var skip_ad_image = '';
			
			if($partyElm.find('.video-play-control').length>0){
				var img_video_url = $partyElm.find('.video-play-control').attr('data-background-url');
				if(typeof(img_video_url)!=='undefined' && img_video_url!=''){
					skip_ad_image = '<span class="skip-ad-image" style="background-image:url('+(img_video_url)+')"></span>';
				}				
			}
			
			var html_ads_wrapper = '<div class="other-ads-container self-adContainer-control" id="'+(selfAdsID)+'">\
				'+(before_ads)+'\
					<img src="'+(va_image_source)+'" class="type-image-ads type-image-ads-control">\
				'+(after_ads)+'\
				<span class="skip-ad skip-ad-control">\
					<span class="skip-text skip-text-control"><span>'+(vidorev_jav_js_object.translate_skip_ad)+'</span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>\
					<span class="skip-ad-in skip-ad-in-control"><span>'+(vidorev_jav_js_object.translate_skip_ad_in)+'</span><span class="skip-second skip-second-control">'+(time_skip_ads)+'</span></span>\
					'+(skip_ad_image)+'\
				</span>\
			</div>';
			
			if($partyElm.find('.mejs-container').length > 0){
				$partyElm.find('.mejs-container').append(html_ads_wrapper);
			}else if($partyElm.find('.fluid_video_wrapper').length > 0){
				$partyElm.find('.fluid_video_wrapper').append(html_ads_wrapper);
			}else if($partyElm.find('.plyr.plyr--video').length > 0){
				$partyElm.find('.plyr.plyr--video').append(html_ads_wrapper);	
			}else{
				$partyElm.append(html_ads_wrapper);
			}
		}
		
		var $selfAdsContainer 	= $('#'+(selfAdsID)+'.self-adContainer-control'),
			$skipAds			= $selfAdsContainer.find('.skip-ad-control'),
			$skipSecond			= $selfAdsContainer.find('.skip-second-control'),
			$textLoadAds		= $partyElm.find('.text-load-ads-control'); 
			
		var timeOutHideAds 	= null,
			timeOutSkipAds 	= null;	
			
		var remove_ads =  function(){
			if(timeOutHideAds!==null){
				clearTimeout(timeOutHideAds);
			}
			
			if(timeOutSkipAds!==null){
				clearInterval(timeOutSkipAds);
			}
			
			$skipAds.removeClass('active-skip');
			$selfAdsContainer.addClass('hide-ads');
			$skipSecond.text(time_skip_ads);			
		}	
			
		$skipAds.off('.clickSkipAds').on('click.clickSkipAds', function(){
			remove_ads();				
			$(document).trigger(prefix+'adsFinish'+(player_id), [_]);
		});	
			
		$selfAdsContainer.removeClass('hide-ads');
		$textLoadAds.addClass('show-load-ad');
		
		$selfAdsContainer.find('.type-image-ads-control').on('load', function(){
			
			var $lightbox_wrapper 	= $partyElm.parents('.video-lightbox-wrapper-control'),
				$item_wrapper		= $partyElm.parents('.lib-item-control show-video');
				
			if( $lightbox_wrapper.length > 0 && $item_wrapper.length > 0 && (!$lightbox_wrapper.hasClass('show-lightbox') || !$item_wrapper.hasClass('show-video')) ){
				return false;
			}	
			
			$textLoadAds.removeClass('show-load-ad');
			$selfAdsContainer.addClass('ready-ad');
			
			if(timeOutHideAds!==null){
				clearTimeout(timeOutHideAds);
			}
						
			if(timeOutSkipAds!==null){
				clearInterval(timeOutSkipAds);
			}
						
			timeOutHideAds = setTimeout(function(){				
				clearTimeout(timeOutHideAds);									
				$skipAds.trigger('click');				
			}, time_to_hide_ads * 1000);
			
			var currentSkipSeconds = time_skip_ads;
			timeOutSkipAds = setInterval(function(){				
				currentSkipSeconds--;
				if(currentSkipSeconds===0){
					clearInterval(timeOutSkipAds);
					$skipAds.addClass('active-skip');
				}
				
				$skipSecond.text(currentSkipSeconds);				
			}, 1000);
		})
		.each(function() {
			var $lightbox_wrapper 	= $partyElm.parents('.video-lightbox-wrapper-control'),
				$item_wrapper		= $partyElm.parents('.lib-item-control show-video');
				
			if( $lightbox_wrapper.length > 0 && $item_wrapper.length > 0 && (!$lightbox_wrapper.hasClass('show-lightbox') || !$item_wrapper.hasClass('show-video')) ){
				return false;
			}	
			
			if(this.complete) {
				$(this).load();
			}
		});
		
		_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){						
			remove_ads();			
		});
		
		_.$el.on(prefix+'closeLightBoxVideoEventTrigger', function(){			
			remove_ads();
		});

	}
	
	vidorev_theme.prototype.converSecondsToTime = function(seconds){
		var date = new Date(null);
		date.setSeconds(seconds);
		var result = '';
		try{
			result = date.toISOString().substr(11, 8);
		}catch(err){
			return result;
		}
		var res = result.split(':');
		if(res.length === 3 && res[0] == '00'){
			result = (res[1])+':'+(res[2]);
		}
		return result;
	}
	
	vidorev_theme.prototype.ads_html5_video = function(values){
		if(typeof(values)!=='object'){
			return;
		}
		var _ = this;
		
		var player_id				= values.player_id,
			ads_object				= values.ads_object;
		
		if(typeof(ads_object)==='undefined' || typeof(ads_object.va_video_source)!=='object'){
			$(document).trigger(prefix+'adsFinish'+(player_id), [_]);
			return false;
		}
		
		var	va_video_source			= ads_object.va_video_source,
			va_video_link			= $.trim(ads_object.va_video_link),
			time_skip_ads 			= parseFloat(ads_object.time_skip_ads);
		
		var $partyElm				= values.partyElm,
			selfAdsID				= (player_id)+'-selfAdsID';
			
		var before_ads 	= '',
			after_ads	= '';
				
		if(va_video_link!=''){
			before_ads 	= '<a href="'+(va_video_link)+'" target="_blank" class="videoads-link-target">';
			after_ads	= '</a>';
		}	
		
		var video_html_5_id = 'vidorev_vid_ads_'+(player_id);
		
		if($partyElm.find('#'+(selfAdsID)).length === 0){
			
			var skip_ad_image = '';
			
			if($partyElm.find('.video-play-control').length>0){
				var img_video_url = $partyElm.find('.video-play-control').attr('data-background-url');
				if(typeof(img_video_url)!=='undefined' && img_video_url!=''){
					skip_ad_image = '<span class="skip-ad-image" style="background-image:url('+(img_video_url)+')"></span>';
				}				
			}
			
			var video_source = '';
			$.each( va_video_source, function( key, value ) {
				var ext = value.slice((Math.max(0, value.lastIndexOf(".")) || Infinity) + 1);
				switch(ext){
					case 'mp4':
						video_source+='<source src="'+(value)+'" type="video/mp4">';
						break;
						
					case 'webm':
						video_source+='<source src="'+(value)+'" type="video/webm">';
						break;
						
					case 'ogg':
						video_source+='<source src="'+(value)+'" type="video/ogg">';
						break;
				}
			});	
						
			var adsContent = '<video class="type-videoads" id="'+(video_html_5_id)+'" webkit-playsinline playsinline>'+(video_source)+'</video>';
			
			var html_ads_wrapper = '<div class="other-ads-container self-adContainer-control" id="'+(selfAdsID)+'">\
				'+(adsContent)+'\
				'+(before_ads)+'\
				'+(after_ads)+'\
				<span class="countdown-video-time countdown-video-time-control"></span>\
				<span class="skip-ad skip-ad-control">\
					<span class="skip-text skip-text-control"><span>'+(vidorev_jav_js_object.translate_skip_ad)+'</span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>\
					<span class="skip-ad-in skip-ad-in-control"><span>'+(vidorev_jav_js_object.translate_skip_ad_in)+'</span><span class="skip-second skip-second-control">'+(time_skip_ads)+'</span></span>\
					'+(skip_ad_image)+'\
				</span>\
			</div>';
			
			if($partyElm.find('.mejs-container').length > 0){
				$partyElm.find('.mejs-container').append(html_ads_wrapper);
			}else if($partyElm.find('.fluid_video_wrapper').length > 0){
				$partyElm.find('.fluid_video_wrapper').append(html_ads_wrapper);
				$partyElm.find('.ads-muted-control').remove();
				$partyElm.find('.self-adContainer-control').append('<div class="player-muted ads-mute-elm ads-muted-control"><i class="fa fa-volume-off" aria-hidden="true"></i></div>');
			}else if($partyElm.find('.plyr.plyr--video').length > 0){
				$partyElm.find('.plyr.plyr--video').append(html_ads_wrapper);	
			}else{
				$partyElm.append(html_ads_wrapper);
			}

		}
		
		var $selfAdsContainer 	= $('#'+(selfAdsID)+'.self-adContainer-control'),
			$skipAds			= $selfAdsContainer.find('.skip-ad-control'),
			$skipSecond			= $selfAdsContainer.find('.skip-second-control'),
			$textLoadAds		= $partyElm.find('.text-load-ads-control'),
			$countdownTimeVideo	= $selfAdsContainer.find('.countdown-video-time-control'),
			$ads_muted_c		= $partyElm.find('.ads-muted-control'); 
					
		var remove_ads =  function(){			
			$skipAds.removeClass('active-skip');
			$selfAdsContainer.addClass('hide-ads');
			$skipSecond.text(time_skip_ads);
			$countdownTimeVideo.text('');
			$ads_muted_c.removeClass('active-item')
			
			vid_ads.pause();
			vid_ads.addEventListener('loadedmetadata', function() {
				this.currentTime = 0;
			}, false);			
			vid_ads.load();			
		}	
			
		$skipAds.off('.clickSkipAds').on('click.clickSkipAds', function(){
			remove_ads();				
			$(document).trigger(prefix+'adsFinish'+(player_id), [_]);
		});	
			
		$selfAdsContainer.removeClass('hide-ads');
		$textLoadAds.addClass('show-load-ad');
		
		var vid_ads = $('#'+(video_html_5_id))[0];

		if(!$ads_muted_c.hasClass('ready-load-evt')){
			vid_ads.muted = _.global_muted_video;		
			if(_.getMobileOperatingSystem()){
				vid_ads.muted = true;
			}
		}
		
		vid_ads.onloadeddata = function(){
			var $lightbox_wrapper 	= $partyElm.parents('.video-lightbox-wrapper-control'),
				$item_wrapper		= $partyElm.parents('.lib-item-control show-video');
				
			if( $lightbox_wrapper.length > 0 && $item_wrapper.length > 0 && (!$lightbox_wrapper.hasClass('show-lightbox') || !$item_wrapper.hasClass('show-video')) ){
				return false;
			}	
			
			$textLoadAds.removeClass('show-load-ad');
			$selfAdsContainer.addClass('ready-ad');
			
			vid_ads.onerror = function(){
				$skipAds.trigger('click');
			}
			
			vid_ads.onended = function(){
				$skipAds.trigger('click');
			}
			
			vid_ads.addEventListener('playing', function(){				
				
				if(vid_ads.muted){
					$ads_muted_c.addClass('active-item').on('click', function(){
						vid_ads.muted = false;
						vid_ads.volume = 1;
						$(this).removeClass('active-item').addClass('ready-load-evt');
					});
				}	

			});
			
			vid_ads.ontimeupdate = function(){
				var videoDuration = vid_ads.duration;
				
				$countdownTimeVideo.text(_.converSecondsToTime((vid_ads.duration-vid_ads.currentTime)));
								
				if(time_skip_ads<=vid_ads.currentTime){
					$skipAds.addClass('active-skip');
				}else{
					$skipSecond.text(Math.ceil(time_skip_ads-vid_ads.currentTime));
				}																					
			}
			
			if(!$selfAdsContainer.hasClass('hide-ads')){
				vid_ads.play();
			}
			
		}
		
		if($selfAdsContainer.hasClass('ready-ad') || _.getMobileOperatingSystem()){
			vid_ads.load();
		}
		
		_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){						
			remove_ads();			
		});
		
		_.$el.on(prefix+'closeLightBoxVideoEventTrigger', function(){			
			remove_ads();
		});

	}
	
	vidorev_theme.prototype.ads_html = function(values){
		if(typeof(values)!=='object'){
			return;
		}
		var _ = this;
		
		var player_id				= values.player_id,
			ads_object				= values.ads_object;
		
		if(typeof(ads_object)==='undefined' || typeof(ads_object.va_html_source)==='undefined' || $.trim(ads_object.va_html_source)==''){
			$(document).trigger(prefix+'adsFinish'+(player_id), [_]);
			return false;
		}
		
		var	va_html_source			= $.trim(ads_object.va_html_source),
			time_skip_ads 			= parseFloat(ads_object.time_skip_ads),
			time_to_hide_ads 		= parseFloat(ads_object.time_to_hide_ads);
		
		var $partyElm				= values.partyElm,
			selfAdsID				= (player_id)+'-selfAdsID';
			
		var extra_class_ads = '';
		
		if(va_html_source.indexOf('ins class="adsbygoogle"')>0 || va_html_source.indexOf('<ins class="adsbygoogle"')>0 || va_html_source.indexOf('class="adsbygoogle"')>0 || va_html_source.indexOf('data-ad-client')>0 || va_html_source.indexOf('data-ad-slot')>0){
			extra_class_ads = 'type-mode-google-adsense';
		}	
			
		var before_ads 	= '<div class="html-wrapper-ads html-wrapper-ads-control '+(extra_class_ads)+'">',
			after_ads	= '</div>';
	
		
		if($partyElm.find('#'+(selfAdsID)).length === 0){
			
			var skip_ad_image = '';
			
			if($partyElm.find('.video-play-control').length>0){
				var img_video_url = $partyElm.find('.video-play-control').attr('data-background-url');
				if(typeof(img_video_url)!=='undefined' && img_video_url!=''){
					skip_ad_image = '<span class="skip-ad-image" style="background-image:url('+(img_video_url)+')"></span>';
				}				
			}
			
			var html_ads_wrapper = '<div class="other-ads-container self-adContainer-control" id="'+(selfAdsID)+'">\
				'+(before_ads)+'\
					'+(va_html_source)+'\
				'+(after_ads)+'\
				<span class="skip-ad skip-ad-control">\
					<span class="skip-text skip-text-control"><span>'+(vidorev_jav_js_object.translate_skip_ad)+'</span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>\
					<span class="skip-ad-in skip-ad-in-control"><span>'+(vidorev_jav_js_object.translate_skip_ad_in)+'</span><span class="skip-second skip-second-control">'+(time_skip_ads)+'</span></span>\
					'+(skip_ad_image)+'\
				</span>\
			</div>';
			
			if($partyElm.find('.mejs-container').length > 0){
				$partyElm.find('.mejs-container').append(html_ads_wrapper);
			}else if($partyElm.find('.fluid_video_wrapper').length > 0){
				$partyElm.find('.fluid_video_wrapper').append(html_ads_wrapper);
			}else if($partyElm.find('.plyr.plyr--video').length > 0){
				$partyElm.find('.plyr.plyr--video').append(html_ads_wrapper);	
			}else{
				$partyElm.append(html_ads_wrapper);
			}
		}
		
		var $selfAdsContainer 	= $('#'+(selfAdsID)+'.self-adContainer-control'),
			$skipAds			= $selfAdsContainer.find('.skip-ad-control'),
			$skipSecond			= $selfAdsContainer.find('.skip-second-control'),
			$textLoadAds		= $partyElm.find('.text-load-ads-control'),
			$htmlWrapper		= $partyElm.find('.html-wrapper-ads-control'); 
			
		$selfAdsContainer.removeClass('hide-ads');
		$textLoadAds.addClass('show-load-ad');
		_.$el.addClass('adsense-google-active');
		
		if($.trim($htmlWrapper.html())==''){
			$htmlWrapper.html(va_html_source);
		}
		
		var timeOutHideAds 	= null,
			timeOutSkipAds 	= null;	
			
		var remove_ads =  function(){
			if(timeOutHideAds!==null){
				clearTimeout(timeOutHideAds);
			}
			
			if(timeOutSkipAds!==null){
				clearInterval(timeOutSkipAds);
			}
			
			$skipAds.removeClass('active-skip');
			$selfAdsContainer.addClass('hide-ads');
			$skipSecond.text(time_skip_ads);
			
			if(extra_class_ads=='type-mode-google-adsense'){
				$htmlWrapper.html('');	
			}
			_.$el.removeClass('adsense-google-active');		
		}	
			
		$skipAds.off('.clickSkipAds').on('click.clickSkipAds', function(){
			remove_ads();				
			$(document).trigger(prefix+'adsFinish'+(player_id), [_]);
		});	
		
		var active_ads = function(){
			var $lightbox_wrapper 	= $partyElm.parents('.video-lightbox-wrapper-control'),
				$item_wrapper		= $partyElm.parents('.lib-item-control show-video');
				
			if( $lightbox_wrapper.length > 0 && $item_wrapper.length > 0 && (!$lightbox_wrapper.hasClass('show-lightbox') || !$item_wrapper.hasClass('show-video')) ){
				return false;
			}	
			
			$textLoadAds.removeClass('show-load-ad');
			$selfAdsContainer.addClass('ready-ad');
			
			if(timeOutHideAds!==null){
				clearTimeout(timeOutHideAds);
			}
						
			if(timeOutSkipAds!==null){
				clearInterval(timeOutSkipAds);
			}
						
			timeOutHideAds = setTimeout(function(){				
				clearTimeout(timeOutHideAds);									
				$skipAds.trigger('click');				
			}, time_to_hide_ads * 1000);
			
			var currentSkipSeconds = time_skip_ads;
			timeOutSkipAds = setInterval(function(){				
				currentSkipSeconds--;
				if(currentSkipSeconds===0){
					clearInterval(timeOutSkipAds);
					$skipAds.addClass('active-skip');
				}
				
				$skipSecond.text(currentSkipSeconds);				
			}, 1000);
		}
		
		if(extra_class_ads=='type-mode-google-adsense'){
			$htmlWrapper.find('iframe').on('load', function(){
				active_ads();
			});
			if($htmlWrapper.find('iframe').length === 0){
				setTimeout(function(){
					if($htmlWrapper.find('iframe').length > 0){
						active_ads();
					}else{
						setTimeout(function(){
							if($htmlWrapper.find('iframe').length > 0){
								active_ads();
							}else{
								remove_ads();
							}
						},666);
					}
				},368);
			}	
		}else{
			active_ads();
		}
		
		_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){						
			remove_ads();			
		});
		
		_.$el.on(prefix+'closeLightBoxVideoEventTrigger', function(){			
			remove_ads();
		});
	}
	
	vidorev_theme.prototype.ads_dynamic = function(values){
		if(typeof(values)!=='object'){
			return;
		}
		var _ = this;
		
		var player_id				= values.player_id,
			ads_object				= values.ads_object;
			
		if(typeof(ads_object)==='undefined' || typeof(ads_object.va_dynamic_type)==='undefined' || $.trim(ads_object.va_dynamic_type)=='' || typeof(ads_object.va_dynamic_source)==='undefined' || $.trim(ads_object.va_dynamic_source)==''){
			return false;
		}
		
		var	va_dynamic_type			= $.trim(ads_object.va_dynamic_type),
			va_dynamic_size_desk	= $.trim(ads_object.va_dynamic_size_desk),
			va_dynamic_size_mob		= $.trim(ads_object.va_dynamic_size_mob),
			va_dynamic_size_vert	= $.trim(ads_object.va_dynamic_size_vert),
			va_dynamic_source		= $.trim(ads_object.va_dynamic_source),
			va_dynamic_link			= $.trim(ads_object.va_dynamic_link),
			time_to_hide_ads 		= parseFloat(ads_object.time_to_hide_ads);
			
		var $partyElm				= values.partyElm,
			selfAdsID				= (player_id)+'-selfAdsID';	
			
		var before_ads 				= '',
			after_ads				= '',
			mid_ads_ct				= '';	
		
		switch(va_dynamic_type){
			case 'image':
				if(va_dynamic_link!=''){
					before_ads 	= '<a href="'+(va_dynamic_link)+'" target="_blank">';
					after_ads	= '</a>';
				}		
				mid_ads_ct	= '<img src="'+(va_dynamic_source)+'" class="type-image-ads type-image-ads-control">';
				break;
				
			case 'html':
				var extra_class_ads = '';
				if(va_dynamic_source.indexOf('ins class="adsbygoogle"')>0 || va_dynamic_source.indexOf('<ins class="adsbygoogle"')>0 || va_dynamic_source.indexOf('class="adsbygoogle"')>0 || va_dynamic_source.indexOf('data-ad-client')>0 || va_dynamic_source.indexOf('data-ad-slot')>0){
					extra_class_ads = 'type-mode-google-adsense';
				}
				before_ads 	= '<div class="dynamic-html-ads dynamic-html-ads-control '+(extra_class_ads)+'">',
				after_ads	= '</div>';
				mid_ads_ct	= va_dynamic_source;
				break;	
		}
		
		if($partyElm.find('#'+(selfAdsID)).length === 0){
			var html_ads_wrapper = '<div class="dynamic-ads-container dynamic-adContainer-control desk-'+(va_dynamic_size_desk)+' mobi-'+(va_dynamic_size_mob)+' vert-'+(va_dynamic_size_vert)+'" id="'+(selfAdsID)+'">\
				<span class="dynamic-close-button dynamic-close-button-control"><i class="fa fa-times" aria-hidden="true"></i></span>\
				<div class="dynamic-ads-content dynamic-ads-content-control">\
					'+(before_ads)+(mid_ads_ct)+(after_ads)+'\
				</div>\
			</div>';
			
			if($partyElm.find('.mejs-container').length > 0){
				$partyElm.find('.mejs-container').append(html_ads_wrapper);
			}else if($partyElm.find('.fluid_video_wrapper').length > 0){
				$partyElm.find('.fluid_video_wrapper').append(html_ads_wrapper);
			}else if($partyElm.find('.plyr.plyr--video').length > 0){
				$partyElm.find('.plyr.plyr--video').append(html_ads_wrapper);	
			}else{
				$partyElm.append(html_ads_wrapper);
			}

		}
		
		var $selfAdsContainer = $('#'+(selfAdsID)+'.dynamic-adContainer-control'),
			$html_dynamic_adsense = $selfAdsContainer.find('.dynamic-html-ads-control'),
			$closeDynamicAds = $selfAdsContainer.find('.dynamic-close-button-control');
			
		$selfAdsContainer.removeClass('hidden-dynamic-ads');
		_.$el.addClass('adsense-google-active');	
		
		if(va_dynamic_type == 'html' && typeof(extra_class_ads) && extra_class_ads=='type-mode-google-adsense' && $.trim($html_dynamic_adsense.html())==''){
			$html_dynamic_adsense.html(va_dynamic_source);
		}
		
		var timeOutHideAds 	= null;
		
		var remove_ads =  function(){
			
			if(timeOutHideAds!==null){
				clearTimeout(timeOutHideAds);
			}
			
			$selfAdsContainer.addClass('hidden-dynamic-ads');
			
			if(va_dynamic_type == 'html' && typeof(extra_class_ads) && extra_class_ads=='type-mode-google-adsense'){
				$html_dynamic_adsense.html('');				
			}
			
			_.$el.removeClass('adsense-google-active');					
		}
		
		$closeDynamicAds.on('click', function(){
			remove_ads();
		});
		
		var active_ads = function(){
			var $lightbox_wrapper 	= $partyElm.parents('.video-lightbox-wrapper-control'),
				$item_wrapper		= $partyElm.parents('.lib-item-control show-video');
				
			if( $lightbox_wrapper.length > 0 && $item_wrapper.length > 0 && (!$lightbox_wrapper.hasClass('show-lightbox') || !$item_wrapper.hasClass('show-video')) ){
				return false;
			}	
			
			$selfAdsContainer.addClass('ready-ad');
			
			if(timeOutHideAds!==null){
				clearTimeout(timeOutHideAds);
			}
						
			timeOutHideAds = setTimeout(function(){				
				clearTimeout(timeOutHideAds);									
				$closeDynamicAds.trigger('click');				
			}, time_to_hide_ads * 1000);
			
		}
		
		if(va_dynamic_type == 'html' && typeof(extra_class_ads) && extra_class_ads=='type-mode-google-adsense'){
			$html_dynamic_adsense.find('iframe').on('load', function(){
				active_ads();
			});
			
			if($html_dynamic_adsense.find('iframe').length === 0){
                setTimeout(function(){
                    if($html_dynamic_adsense.find('iframe').length > 0){
                        active_ads();
                    }else{
                        setTimeout(function(){
                            if($html_dynamic_adsense.find('iframe').length > 0){
                                active_ads();
                            }else{
                                remove_ads();
                            }
                        },666);
                    }
                },368);
            }
			
		}else if(va_dynamic_type == 'image'){
			$selfAdsContainer.find('.type-image-ads-control')
			.on('load', function(){
				active_ads();
			})
			.each(function() {
				var $lightbox_wrapper 	= $partyElm.parents('.video-lightbox-wrapper-control'),
					$item_wrapper		= $partyElm.parents('.lib-item-control show-video');
					
				if( $lightbox_wrapper.length > 0 && $item_wrapper.length > 0 && (!$lightbox_wrapper.hasClass('show-lightbox') || !$item_wrapper.hasClass('show-video')) ){
					return false;
				}	
				
				if(this.complete) {
					$(this).load();
				}
			});
		}else{
			active_ads();
		}
		
		_.$el.on(prefix+'openLightBoxVideoEventTrigger', function(){
			remove_ads();	
		});
		
		_.$el.on(prefix+'closeLightBoxVideoEventTrigger', function(){
			remove_ads();
		});
	}
	
	vidorev_theme.prototype.open_lightbox_image = function(){
		var _ = this;
		_.$el.off('.openLightboxImage').on('click.openLightboxImage', '.img-lightbox-icon-control', function(e){
			
			_.$el.trigger(prefix+'openLightBoxImageEventTrigger', [_]);
			
			var $t 			= $(this),
				img_source 	= $t.attr('data-url'),
				img_id		= $t.attr('data-id');
			
			if(typeof(img_id)==='undefined' || typeof(img_source)==='undefined'){
				return false;
			}
			
			var $lightbox_wrapper = _.$el.find('.image-lightbox-wrapper-control');	
			if($lightbox_wrapper.length === 0) {
				_.$el.append( 	'<div class="image-lightbox-wrapper image-lightbox-wrapper-control dark-background">\
									<div class="close-btn close-img-lg-control"></div>\
									<div class="img-loading img-loading-control"><span class="video-load-icon"></span></div>\
								</div>' );
								
				$lightbox_wrapper = _.$el.find('.image-lightbox-wrapper-control');
				
				$('.close-img-lg-control', $lightbox_wrapper).on('click', function(){
					$lightbox_wrapper.removeClass('show-lightbox');
					$('img.image-lightbox-item-control', $lightbox_wrapper).removeClass('active-item');
					_.$el.trigger(prefix+'closeLightBoxImageEventTrigger', [_]);
				});
				
				setTimeout(function(){
					$lightbox_wrapper.addClass('show-lightbox');
				}, 200);
			}else{
				$lightbox_wrapper.addClass('show-lightbox');
			}
			
			if($lightbox_wrapper.find('.image-lightbox-item-control[data-id="'+(img_id)+'"]').length === 0){
				
				$lightbox_wrapper.append('<img src="'+(img_source)+'" class="image-lightbox-item image-lightbox-item-control" data-id="'+(img_id)+'">');
				
				setTimeout(function(){
					$('<img src="'+(img_source)+'">').on('load', function(){
						if($lightbox_wrapper.hasClass('show-lightbox')){						
							$('img.image-lightbox-item-control[data-id="'+(img_id)+'"]', $lightbox_wrapper).addClass('active-item');						
						}
					});
				}, 368);
				
			}else{
				$('img.image-lightbox-item-control[data-id="'+(img_id)+'"]', $lightbox_wrapper).addClass('active-item');
			}
			
		});
	}
	
	vidorev_theme.prototype.open_lightbox_video = function(){
		var _ = this;
		
		_.$el.off('.openLightboxVideo').on('click.openLightboxVideo', '.video-popup-control', function(e){
			
			_.$el.trigger(prefix+'openLightBoxVideoEventTrigger', [_]);
			
			var $t 				= $(this),
				id 				= $.trim($t.attr('data-id')),
				player_id 		= 'player-api-control-'+(id),
				player_init_id 	= (player_id)+'-init',
				item_id 		= 'video-lib-'+(id);
			
			if(id==''){
				return;
			}
			
			var $lightbox_wrapper = _.$el.find('.video-lightbox-wrapper-control');
			
			if($lightbox_wrapper.length === 0) {
				var class_show_tab 			= '',
					class_suggested_active 	= 'active-item',
					class_comments_active 	= '';
				
				if(vidorev_jav_js_object.video_lightbox_suggested == 'off'){
					class_show_tab +=' suggested-off suggested-off-control';
					class_suggested_active 	= '';
					class_comments_active 	= 'active-item';
				}
				
				if(vidorev_jav_js_object.video_lightbox_comments == 'off'){
					class_show_tab +=' comments-off comments-off-control';					
				}
				
				var class_show_form_comment = 'disable-comment';
				if(vidorev_jav_js_object.is_user_logged_in == '1'){
					class_show_form_comment = '';
				}
				
				_.$el.append(	'<div id="parse-lightbox-control" class="video-lightbox-wrapper video-lightbox-wrapper-control dark-background '+(class_show_tab)+'">\
									<div class="lib-item-cp navigation-font">\
										<div class="site__container-fluid">\
											<div class="site__row">\
												<div class="site__col cp-left">\
													<div class="lib-close-video lib-close-video-control"><span class="close-btn"></span><span>'+(vidorev_jav_js_object.translate_close)+'</span></div>\
												</div>\
												<div class="site__col cp-center">\
													<div class="auto-next-control"><span>'+(vidorev_jav_js_object.translate_auto_next)+'</span><span><i class="auto-next-icon big-style auto-next-icon-control"></i></span></div>\
												</div>\
												<div class="site__col cp-right">\
													<div class="listing-toolbar listing-toolbar-control">\
														<div class="site__row">\
															<div class="site__col toolbar-item toolbar-item-control h6 '+(class_suggested_active)+'" data-active="suggested">'+(vidorev_jav_js_object.translate_suggested)+'</div>\
															<div class="site__col toolbar-item toolbar-item-control h6 '+(class_comments_active)+'" data-active="comments">'+(vidorev_jav_js_object.translate_comments)+'</div>\
														</div>\
													</div>\
												</div>\
											</div>\
										</div>\
									</div>\
									<div class="lib-contents lib-contents-control">\
										<div class="site__container-fluid">\
											<div class="site__row">\
												<div class="site__col lib-vid-player lib-vid-player-control">\
												</div>\
												<div class="site__col lib-vid-listing lib-vid-listing-control">\
													<div class="listing-toolbar listing-toolbar-control">\
														<div class="site__container-fluid">\
															<div class="site__row">\
																<div class="site__col toolbar-item toolbar-item-control h6 '+(class_suggested_active)+'" data-active="suggested">'+(vidorev_jav_js_object.translate_suggested)+'</div>\
																<div class="site__col toolbar-item toolbar-item-control h6 '+(class_comments_active)+'" data-active="comments">'+(vidorev_jav_js_object.translate_comments)+'</div>\
															</div>\
														</div>\
													</div>\
													<div class="data-lightbox data-lightbox-control">\
														<div class="data-lightbox-content">\
															<div class="suggested-listing suggested-listing-control '+(class_suggested_active)+'">\
																<div class="loading-content loading-content-control">'+(vidorev_jav_js_object.translate_loading)+'...<br><span class="loader-bar"></span></div>\
																<div class="ajax-content ajax-content-control"></div>\
															</div>\
															<div class="comments-listing comments-listing-control '+(class_comments_active)+'">\
																<div class="loading-content loading-content-control">'+(vidorev_jav_js_object.translate_loading)+'...<br><span class="loader-bar"></span></div>\
																<div class="ajax-comment-form ajax-comment-form-control '+(class_show_form_comment)+'">\
																	<div class="ajax-comment-form-wrapper">\
																		<div class="comment-input-wrap"><input type="text" class="live-comment-input live-comment-input-control" placeholder="'+(vidorev_jav_js_object.translate_public_comment)+'..."></div>\
																		<div class="comment-send-wrap"><button class="live-comment-send live-comment-send-control">'+(vidorev_jav_js_object.translate_post_comment)+'</button>\
																			<input type="button" class="live-comment-reset live-comment-reset-control white-style" value="'+(vidorev_jav_js_object.translate_reset)+'">\
																		</div>\
																		<div class="login-tooltip"><span>'+(vidorev_jav_js_object.translate_login_comment)+'</span></div>\
																	</div>\
																</div>\
																<div class="ajax-content ajax-content-control"></div>\
															</div>\
														</div>\
													</div>\
												</div>\
											</div>\
										</div>\
									</div>\
								</div>'
				);
								
				$lightbox_wrapper = _.$el.find('.video-lightbox-wrapper-control');
				
				var $btnResetCommentForm = $lightbox_wrapper.find('.live-comment-reset-control'),
					$inputTextCommentForm = $lightbox_wrapper.find('.live-comment-input-control');
				
				$btnResetCommentForm.off('.resetCommentForm').on('click.resetCommentForm', function(){
					$inputTextCommentForm.val('');
				});
				
				setTimeout(function(){
					
					$lightbox_wrapper.addClass('show-lightbox');
					
					if(_.global_scroll_bar_lib === 'malihu'){

						$lightbox_wrapper.find('.data-lightbox-control').mCustomScrollbar({
							theme: 'minimal',
							alwaysShowScrollbar:0,
							scrollInertia: 200,
						});

					}else if(_.global_scroll_bar_lib === 'overlay'){
						
						$lightbox_wrapper.find('.data-lightbox-control').overlayScrollbars({
							scrollbars:{
								autoHide:'move',
							}
						});
					}
					
				},200);
				
			}else{
				$lightbox_wrapper.addClass('show-lightbox');
				
				var $videoActive = $lightbox_wrapper.find('.lib-item-control.show-video');
				if($videoActive.length>0){
					var	idActive = $videoActive.attr('id');					
					$videoActive.removeClass('show-video');
					
					_.$el.trigger(prefix+'VideoEmbedChangeEventTrigger', [_, $videoActive]);
					
					if(typeof(_.global_video_lightbox_items[idActive])!=='undefined'){
						_.player_actions(_.global_video_lightbox_items[idActive][0], _.global_video_lightbox_items[idActive][1], 'pause');
					}
				}
				
			}
			
			$('html').addClass('disable-scroll');
			
			_.auto_next_check();
			
			var $suggested_listing_control 		= $lightbox_wrapper.find('.suggested-listing-control'),
					$comments_listing_control 	= $lightbox_wrapper.find('.comments-listing-control');
					
			$suggested_listing_control.removeClass('load-completed').find('.ajax-content-control').html('');
			$comments_listing_control.removeClass('load-completed').find('.ajax-content-control').html('');			
			
			try{
				if(vidorev_jav_js_object.single_post_comment_type == 'facebook'){
					_.action_lightbox_facebook_comment(id, $comments_listing_control);
				}else{
					_.get_lightbox_video_comment(id, '', $comments_listing_control);
					_.action_lightbox_added_comment(id, $comments_listing_control);
				}			
			}catch (comment_error) {
				console.log(comment_error);
			}			
			
			if($('#'+(item_id)).length===0){
			
				var html = '';
				
				html+= '<div id="'+(item_id)+'" class="lib-item lib-item-control show-video">';
							
							html+= '<div class="single-player-video-wrapper">\
										<div class="video-lightbox-title video-lightbox-title-control"></div>\
										<div class="video-player-wrap">\
											<div class="video-player-ratio"></div>\
											<div class="video-player-content video-player-control">\
												<div class="player-3rdparty player-3rdparty-control" id="'+(player_init_id)+'">\
													<div id="'+(player_id)+'" class="player-api">\
													</div>\
													<div class="player-muted player-muted-control"><i class="fa fa-volume-off" aria-hidden="true"></i></div>\
													<div class="text-load-ads text-load-ads-control">\
														'+(vidorev_jav_js_object.translate_text_load_ad)+'\
													</div>\
													<div class="autoplay-off-elm autoplay-off-elm-control video-play-control" data-id="'+(id)+'">\
														<span class="video-icon big-icon video-play-control" data-id="'+(id)+'"></span>\
													</div>\
													<div class="player-muted ads-mute-elm ads-muted-control"><i class="fa fa-volume-off" aria-hidden="true"></i></div>\
													<div class="auto-next-elm auto-next-elm-control dark-background">\
														<div class="auto-next-content">\
															<div class="up-next-text font-size-12">'+(vidorev_jav_js_object.translate_up_next)+'</div>\
															<h3 class="h6-mobile video-next-title video-next-title-control"></h3>\
															<div class="loader-timer-wrapper loader-timer-control">\
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" class="loader-timer">\
																	<circle class="progress-timer" fill="none" stroke-linecap="round" cx="20" cy="20" r="15.915494309" />\
																</svg>\
																<i class="fa fa-fast-forward" aria-hidden="true"></i>\
															</div>\
															<a href="#" class="basic-button basic-button-default cancel-btn cancel-btn-control">'+(vidorev_jav_js_object.translate_cancel)+'</a>\
														</div>\
													</div>\
												</div>\
												<div class="video-loading video-loading-control">\
													<span class="video-load-icon"></span>\
												</div>\
											</div>\
										</div>\
									</div>';
									
				html+= '</div>';			
						
				$lightbox_wrapper.find('.lib-vid-player-control').append(html);
				
				var data 		= {
					'action': 		'get_player_params',				
					'post_id': 		id,
					'security':		(typeof(vidorev_jav_js_object.security)!=='undefined')?vidorev_jav_js_object.security:'',					
				}
				
				$.ajax({
					type: 		'POST',
					url: 		vidorev_jav_js_object.admin_ajax,
					cache: 		false,
					data: 		data,
					dataType: 	'json',
					success: 	function(data, textStatus, jqXHR){					
						if(typeof(data) === 'object'){
							
							if(vidorev_jav_js_object.video_lightbox_suggested == 'on' && typeof(data.single_video_suggested)!=='undefined'){	
								_.global_video_lightbox_suggested_posts[item_id] = data.single_video_suggested;
								$suggested_listing_control.addClass('load-completed').find('.ajax-content-control').html(data.single_video_suggested);
								if(typeof(window.vidorev_visible_image_opacity) !== 'undefined'){
									window.vidorev_visible_image_opacity();
								}
							}
							
							if(typeof(data.video_title)!=='undefined' && $.trim(data.video_title)!=''){
								$('#'+(item_id)).find('.video-lightbox-title-control').html(data.video_title);
							}
							
							_.$el.trigger(prefix+'openLightBoxVideoHandleCustomAction', [_, $('#'+(item_id)), id, data]);
							
							if(typeof(data.single_video_network) === 'undefined' && typeof(data.single_video_source) === 'undefined' && typeof(data.single_video_url) === 'undefined'){
								return false;
							}
							
							var $poster_preload		= $('#'+(player_init_id)).find('.autoplay-off-elm-control');															
							$poster_preload.attr('data-background-url', data.poster_background).append('<img class="poster-preload" src="'+(data.poster_background)+'">');
							
							var $autoNextControl     = $('#'+(player_init_id)).find('.auto-next-elm-control');	
							$autoNextControl.attr('data-background-url', data.poster_background);					
							
							$('#'+(player_init_id)).on(prefix+'videoCreateFinish', function(e, player, adsContainerID){
								
								_.global_video_lightbox_items[item_id] = [player, data.single_video_network];
								
								setTimeout(function(){
									
									if(!$('#'+(item_id)).hasClass('show-video') || !$lightbox_wrapper.hasClass('show-lightbox') || _.global_video_autoplay!='on' || typeof(adsContainerID)!=='undefined'){										
										return false;
									}									
									
									$poster_preload.removeClass('active-item');
									_.player_actions(player, data.single_video_network, 'play');	
																	
								},200);								
								
							});							
							
							$('#'+(player_init_id)).on(prefix+'playVideoWithGoogleIMAReady', function(e, player, $poster_preload){
								if(_.global_video_autoplay==='on' && $('#'+(item_id)).hasClass('show-video') && $lightbox_wrapper.hasClass('show-lightbox')){
									$poster_preload.trigger('click');
								}
							});
							
							_.create_single_video_player(player_id, data);
							
						}					
						
					},
					error: function( jqXHR, textStatus, errorThrown ){
					}
				});	
			
			}else{
				$('#'+(item_id)).addClass('show-video');
				
				_.$el.trigger(prefix+'openLightBoxVideoEmbedEventTrigger', [_, $('#'+(item_id))]);
				
				var $poster_preload	= $('#'+(item_id)).find('.autoplay-off-elm-control');
				
				if(vidorev_jav_js_object.video_lightbox_suggested == 'on' && typeof(_.global_video_lightbox_suggested_posts[item_id])!=='undefined'){
					$suggested_listing_control.addClass('load-completed').find('.ajax-content-control').html(_.global_video_lightbox_suggested_posts[item_id]);
					if(typeof(window.vidorev_visible_image_opacity) !== 'undefined'){
						window.vidorev_visible_image_opacity();
					}
				}
				
				if($('#'+(item_id)).find('.ima-adContainer-control:not(.hide-ads)').length>0){
					
					var adsContainerID = $('#'+(item_id)).find('.ima-adContainer-control').attr('id');
					
					if(typeof(adsContainerID)!=='undefined' && typeof(_.is_ad_google_ima_control[adsContainerID])!=='undefined'){
						try{
							if(typeof(_.is_ad_google_ima_stated_event[adsContainerID])==='boolean' && _.is_ad_google_ima_stated_event[adsContainerID] === true){							
								_.is_ad_google_ima_control[adsContainerID].resume();
							}else{
								if($('#'+(item_id)).find('.autoplay-off-elm-control.active-item').length === 0){								
									_.is_ad_google_ima_stated_event[adsContainerID] = true;
									_.is_ad_google_ima_control[adsContainerID].start();	
								}
							}
						}catch (imaError) {
						}
					}else{
						if(_.global_video_autoplay==='on'){
							$poster_preload.trigger('click');
						}
					}	
					return false;
				}
				
				if(typeof(_.global_video_lightbox_items[item_id])==='undefined' || _.global_video_autoplay!='on'){
					return false;
				}
				
				$poster_preload.removeClass('active-item');
				_.player_actions(_.global_video_lightbox_items[item_id][0], _.global_video_lightbox_items[item_id][1], 'play');
			}
			
			return false;				
		});
		
		_.$el.off('.lightboxToolbar').on('click.lightboxToolbar', '.listing-toolbar-control .toolbar-item-control', function(e){
			var $t 			= $(this),
				active		= $t.attr('data-active');
				
			$('.listing-toolbar-control .toolbar-item-control, .data-lightbox-control .suggested-listing-control, .data-lightbox-control .comments-listing-control').removeClass('active-item');
			$('.listing-toolbar-control .toolbar-item-control[data-active="'+(active)+'"], .data-lightbox-control .'+(active)+'-listing-control').addClass('active-item');
		});
	}
	
	vidorev_theme.prototype.action_lightbox_facebook_comment = function(post_id, comments_listing_control){
		var _ = this;
		
		var $comments_listing_control 	= comments_listing_control,
			comment_id 					= 'facebook-comment-'+(post_id),	
			$facebook_comment 			= $comments_listing_control.find('#'+comment_id);
		
		$comments_listing_control.removeClass('load-completed').find('.facebook-comment-control').removeClass('active-item');	
		
		var data = {
			'action': 		'get_post_data_for_lightbox',				
			'post_id': 		post_id,
			'security':		(typeof(vidorev_jav_js_object.security)!=='undefined')?vidorev_jav_js_object.security:'',			
		}
		
		if($facebook_comment.length > 0){			
			$facebook_comment.addClass('active-item');
			$comments_listing_control.addClass('load-completed');	
		}else{
			$.ajax({
				type: 		'POST',
				url: 		vidorev_jav_js_object.admin_ajax,
				cache: 		false,
				data: 		data,
				dataType: 	'json',
				success: 	function(data, textStatus, jqXHR){					
					
					if(typeof(data) === 'object' && typeof(data['post_url']) !== 'undefined'){
						$comments_listing_control.prepend('<div class="facebook-comment facebook-comment-control" id="'+(comment_id)+'">\
							<div id="fb-root"></div>\
							<div class="fb-comments" data-href="'+(data['post_url'])+'" data-width="auto" data-numposts="20" data-order-by="time" data-colorscheme="dark"></div>\
							</div>'
						);
						
						var fb_action_lightbox = function(){
							FB.XFBML.parse(document.getElementById(comment_id));
						
							var facebook_comment_loaded = null;
							
							facebook_comment_loaded = setTimeout(function(){
								$comments_listing_control.find('#'+comment_id).addClass('active-item');
								$comments_listing_control.addClass('load-completed');
								facebook_comment_loaded = null;
							}, 2000);
							
							_.$el.on(prefix+'closeLightBoxVideoEventTrigger', function(){
								if(facebook_comment_loaded!==null){
									clearTimeout(facebook_comment_loaded);
									$comments_listing_control.removeClass('load-completed').find('#'+comment_id).removeClass('active-item');
								}							
							});	
						}
						
						var requ_fnc 	= (typeof(FB)!=='undefined' && typeof(FB.Event)!=='undefined');
						var requ_url	= (typeof(vidorev_jav_plugin_js_object)!=='undefined' && typeof(vidorev_jav_plugin_js_object.facebook_library_url)!=='undefined' && vidorev_jav_plugin_js_object.facebook_library_url!='')?vidorev_jav_plugin_js_object.facebook_library_url:'https://connect.facebook.net/en_US/sdk.js?ver=6.0#xfbml=1&version=v6.0';
						if(!requ_fnc){							
							_.requestScript(requ_url, fb_action_lightbox);
						}else{
							fb_action_lightbox();
						}										
					}						
					
				},
				error: function( jqXHR, textStatus, errorThrown ){
				}
			});
		}
		
	}
	
	vidorev_theme.prototype.action_lightbox_added_comment = function(post_id, comments_listing_control){
		var _ = this;
		
		_.$el.off('.lightboxAddedComment');
		
		if(post_id=='' || vidorev_jav_js_object.video_lightbox_comments == 'off'){			
			return;
		}
		
		_.$el.on('click.lightboxAddedComment', '.live-comment-send-control', function(e){
			
			var $t 						= $(this),
				$commentForm			= $t.parents('.ajax-comment-form-control'),
				$inputTextCommentForm	= $commentForm.find('.live-comment-input-control'),
				comment_value			= $inputTextCommentForm.val();
			
			if(comment_value==''){				
				return false;
			}
			
			$inputTextCommentForm.val('');
			
			if( _.global_click_added_live_comment === 1){
				return false;
			}
			
			$commentForm.addClass('added-loading');
						
			_.global_click_added_live_comment = 1;
			clearInterval(_.global_video_lightbox_live_comments);
			_.global_video_lightbox_live_comments = null;
			
			var added_comment = {
				'action': 		'add_live_comment',				
				'post_id': 		post_id,
				'comment':		comment_value,
				'security':		(typeof(vidorev_jav_js_object.security)!=='undefined')?vidorev_jav_js_object.security:'',				
			}
			
			$.ajax({
				type: 		'POST',
				url: 		vidorev_jav_js_object.admin_ajax,
				cache: 		false,
				data: 		added_comment,
				dataType: 	'json',
				success: 	function(data, textStatus, jqXHR){
					
					var $comments_listing_control = comments_listing_control,
						$comments_ajax = $comments_listing_control.find('.comment-wrapper-control'),
						query_date = '';
						
					if($comments_ajax.find('.comment-item').length>0 && typeof($comments_ajax.find('.comment-item').eq(0))!=='undefined' && typeof($comments_ajax.find('.comment-item').eq(0).attr('data-date'))!=='undefined'){
						query_date = $comments_ajax.find('.comment-item').eq(0).attr('data-date');
					}
						
					_.global_click_added_live_comment = null;	
					
					_.$el.on(prefix+'add_comment_end', function(){
						$commentForm.removeClass('added-loading');
						$t.blur();
					});
								
					_.get_lightbox_video_comment(post_id, query_date, $comments_listing_control);
					
					if(typeof(data) === 'object'){
						if(data.result == '0'){
							if($commentForm.find('.spam-error').length === 0 ){
								$commentForm.append('<div class="spam-error">'+(data.msg)+'</div>');
							}
						}else if(data.result == '2'){
							if($commentForm.find('.spam-error').length > 0 ){
								$commentForm.find('.spam-error').remove();
							}
						}
					}
					
					if(typeof(window.vidorev_visible_image_opacity) !== 'undefined'){
						window.vidorev_visible_image_opacity();
					}					
					
				},
				error: function( jqXHR, textStatus, errorThrown ){
				}
			});	
			
		});
		
		_.$el.off('.enterlightboxInputComment').on('keydown.enterlightboxInputComment', '.live-comment-input-control', function(e){
			if(e.keyCode === 13){
				_.$el.find('.live-comment-send-control').trigger('click');
			}
		});
	}
	
	vidorev_theme.prototype.get_lightbox_video_comment = function(post_id, query_date, comments_listing_control){
		var _ = this;
		
		if(post_id=='' || vidorev_jav_js_object.video_lightbox_comments == 'off'){
			return;
		}
		
		var $comments_listing_control = comments_listing_control,
			$comments_ajax = $comments_listing_control.find('.comment-wrapper-control');
		
		var data_comment = {
			'action': 		'get_player_comments',				
			'post_id': 		post_id,	
			'query_date':	query_date,
			'security':		(typeof(vidorev_jav_js_object.security)!=='undefined')?vidorev_jav_js_object.security:'',				
		}
		
		$.ajax({
			type: 		'POST',
			url: 		vidorev_jav_js_object.admin_ajax,
			cache: 		false,
			data: 		data_comment,
			dataType: 	'html',
			success: 	function(data, textStatus, jqXHR){					
				if(typeof(data) !== 'undefined' && _.global_click_added_live_comment===null){						
					
					if($comments_ajax.length === 0){
						$comments_listing_control.addClass('load-completed').find('.ajax-content-control').html(data);	
						$comments_ajax = $comments_listing_control.find('.comment-wrapper-control');
					}else{
						if($.trim(data)!==''){
							$comments_ajax.prepend(data);
						}
					}
					
					if(typeof(window.vidorev_visible_image_opacity) !== 'undefined'){
						window.vidorev_visible_image_opacity();
					}
					
					_.$el.trigger(prefix+'add_comment_end', []);
					
					if(_.global_video_lightbox_live_comments===null){
						_.global_video_lightbox_live_comments = setInterval(
							function(){
								clearInterval(_.global_video_lightbox_live_comments);
								_.global_video_lightbox_live_comments = null;
								
								if($comments_ajax.find('.comment-item').length>0 && typeof($comments_ajax.find('.comment-item').eq(0))!=='undefined' && typeof($comments_ajax.find('.comment-item').eq(0).attr('data-date'))!=='undefined'){
									query_date = $comments_ajax.find('.comment-item').eq(0).attr('data-date');
								}
								
								_.get_lightbox_video_comment(post_id, query_date, $comments_listing_control);								
							},
							5368
						);
					}			
					
				}					
				
			},
			error: function( jqXHR, textStatus, errorThrown ){
			}
		});
	}
	
	vidorev_theme.prototype.close_lightbox_video_title = function(){
		var _ = this;
		
		_.$el.off('.closeLightboxVideoTitle').on('click.closeLightboxVideoTitle', '.close-title-control', function(e){
			var $t = $(this);
			var $video_title_wrapper = $t.parents('.video-lightbox-title-control');
			
			if($video_title_wrapper.length > 0){
				$video_title_wrapper.remove();
			}
		});
	}
	
	vidorev_theme.prototype.close_lightbox_video = function(){
		var _ = this;
		
		_.$el.off('.closeLightboxVideo').on('click.closeLightboxVideo', '.lib-close-video-control', function(e){
			
			_.$el.trigger(prefix+'closeLightBoxVideoEventTrigger', [_]);
			
			var $lightbox_wrapper 	= _.$el.find('.video-lightbox-wrapper-control'),
				$videoActive		= $lightbox_wrapper.find('.lib-item-control.show-video'),
				idActive			= $videoActive.attr('id');
				
			var $suggested_listing_control 	= $lightbox_wrapper.find('.suggested-listing-control'),
				$comments_listing_control 	= $lightbox_wrapper.find('.comments-listing-control');
			
			if(_.global_video_lightbox_live_comments!==null){	
				clearInterval(_.global_video_lightbox_live_comments);
				_.global_video_lightbox_live_comments = null;	
			}
				
			$suggested_listing_control.removeClass('load-completed').find('.ajax-content-control').html('');
			$comments_listing_control.removeClass('load-completed').find('.ajax-content-control').html('');	
			
			$videoActive.removeClass('show-video');
			$lightbox_wrapper.removeClass('show-lightbox');	
			
			$('html').removeClass('disable-scroll');
			
			_.$el.off('.lightboxAddedComment');
			
			if($comments_listing_control.find('.spam-error').length > 0 ){
				$comments_listing_control.find('.spam-error').remove();
			}
			
			_.$el.trigger(prefix+'closeLightBoxVideoEventForEmbedTrigger', [_, $videoActive]);
			
			if(typeof(_.global_video_lightbox_items[idActive])==='undefined'){
				return false;
			}
								
			var $player = _.global_video_lightbox_items[idActive][0],
				network = _.global_video_lightbox_items[idActive][1],
				adsContainerID = $videoActive.find('.ima-adContainer-control').attr('id');
			
			_.player_actions($player, network, 'pause');
							
			if(typeof(adsContainerID)!=='undefined' && typeof(_.is_ad_google_ima_control[adsContainerID])!=='undefined' && typeof(_.is_ad_google_ima_stated_event[adsContainerID])==='boolean' && _.is_ad_google_ima_stated_event[adsContainerID] === true){
				try{
					_.is_ad_google_ima_control[adsContainerID].pause();
				}catch (imaError) {
				}
			}		
			
			return false;
		});			
	}
	
	vidorev_theme.prototype.add_scroll_bar_for_playlist = function(){
		var _ = this;
		
		if(_.global_scroll_bar_lib === 'malihu'){

			_.$el.find('.video-playlist-listing-control').mCustomScrollbar({
				alwaysShowScrollbar:1,
				scrollInertia: 200,
			});

		}else if(_.global_scroll_bar_lib === 'overlay'){
			
			_.$el.find('.video-playlist-listing-control').overlayScrollbars({
				scrollbars:{
					/*autoHide:'move',*/
				}
			});
		}
	}
	
	vidorev_theme.prototype.watch_later = function(){
		var _ 			= this,
			cookie_name = 'vpwatchlatervideos';
		
		var cookie_action = function($t, action){
			
			var id = $t.attr('data-id');
			
			if(!_.isNumber(id)){
				return false;
			}
			
			id = parseFloat(id);			
			
			if(typeof(Cookies.get(cookie_name))!=='undefined'){
				var current_video_ids = $.trim(Cookies.get(cookie_name));
				var new_current_video_ids = [];
				
				$.each(current_video_ids.split(','), function(i, value){
					var new_val = $.trim(value);
					if(_.isNumber(new_val)){
						new_current_video_ids[i] = parseFloat(new_val);
					}
				});
				
				var index = new_current_video_ids.indexOf(id);
				
				if(action === 'remove'){
					
					if(index !== -1){
						new_current_video_ids.splice(index, 1);
						var new_cookie = new_current_video_ids.join();
						Cookies.set(cookie_name, new_cookie, { expires: 368 });
						
						if(new_cookie===''){
							_.$el.find('.hasVideos-control').removeClass('hasVideos');
						}
					}					
					$t.removeClass('active-item');
					
					var $parent = $t.parents('.watch-later-archive-control');
					if($parent.length > 0){
						$('article[id="post-'+(id)+'"]', $parent).hide('fast', function(){ 
							$(this).remove()
						});
					}
					
					var $top_parent = _.$el.find('.top-watch-later-control');
					$('.video-listing-item[id="post-'+(id)+'-wl"]', $top_parent).hide('fast', function(){ 
						$(this).remove();
						if($top_parent.find('.video-listing-item-control').length === 0){
							$top_parent.addClass('no-video');
							_.$el.find('.hasVideos-control').removeClass('hasVideos');
						}
					});
					
				}else if(action === 'add'){
					
					if(index === -1){
						new_current_video_ids.push(id);
						var new_cookie = new_current_video_ids.join();
						Cookies.set(cookie_name, new_cookie, { expires: 368 });
						add_item_to_top($t);
					}
					
				}
			}else{
				if(action === 'add'){
					Cookies.set(cookie_name, id, { expires: 368 });
					add_item_to_top($t);
				}
			}
			
			if(action === 'add'){
				_.$el.find('.hasVideos-control').addClass('hasVideos');	
				$t.addClass('active-item');
			}		
			
		}
		
		var add_item_to_top = function($t){
			var id = $t.attr('data-id');
			
			if(!_.isNumber(id)){
				return false;
			}
			
			id = parseFloat(id);
			
			var title = $t.attr('data-title'),
				hyperlink = $t.attr('data-hyperlink'),
				img = $t.attr('data-img-src'),
				$container = _.$el.find('.top-watch-later-control');
			
			var $img = '';	
			
			if(typeof(img)!=='undefined' && img !=''){
				$img = '<img class="blog-picture" src="'+(img)+'">';	
			}
			
			$container.prepend('<div class="video-listing-item video-listing-item-control" id="post-'+(id)+'-wl">\
								<div class="video-img">'+($img)+'</div>\
								<div class="video-content">\
									<h3 class="h6 post-title">\
										<a href="'+(hyperlink)+'" title="'+(title)+'">'+(title)+'</a>\
									</h3>\
								</div>\
								<div class="remove-item-watch-later remove-item-watch-later-control" data-id="'+(id)+'"><i class="fa fa-times" aria-hidden="true"></i></div>\
							</div>')
			.removeClass('no-video');	
		}
			
		_.$el.off('.addWatchLater').on('click.addWatchLater', '.watch-later-control', function(e){
			var $t = $(this);				
			
			if($t.hasClass('active-item')){
				cookie_action($t, 'remove');
			}else{
				cookie_action($t, 'add');
			}
		});
		
		_.$el.off('.removeWatchLater').on('click.removeWatchLater', '.remove-item-watch-later-control', function(e){
			var $t = $(this),
				id = $t.attr('data-id');
				
			cookie_action($t, 'remove', id);
			
			var $parent = $t.parents('.top-watch-later-control');
			
			$('.video-listing-item[id="post-'+(id)+'-wl"]', $parent).hide('fast', function(){ 
				$(this).remove();
				if($parent.find('.video-listing-item-control').length === 0){
					$parent.addClass('no-video');
					_.$el.find('.hasVideos-control').removeClass('hasVideos');
				}
			});
			
			var $pageWatch = _.$el.find('.watch-later-archive-control');			
			if($pageWatch.length > 0){
				$('article[id="post-'+(id)+'"]', $pageWatch).hide('fast', function(){ 
					$(this).remove()
				});
			}
						
			_.$el.find('.watch-later-control[data-id="'+(id)+'"]').removeClass('active-item');
		});
	}
	
	vidorev_theme.prototype.archive_sort_button = function(){
		var _ = this;	
		
		_.$el.off('.archiveSortBtn').on('click.archiveSortBtn', '.sort-block-control', function(e){
			var $t = $(this);
			$t.toggleClass('active-item');
		});	
	}
	
	vidorev_theme.prototype.download_lightbox = function(){
		var _ = this;	
		
		_.$el.off('.downloadFilesLightbox').on('click.downloadFilesLightbox', '.download-files-control', function(e){
			var $t = $(this);
			_.$el.toggleClass('active-download');
			return false;
		});	
	}
	
	vidorev_theme.prototype.video_repeat = function(){
		var _ = this;	
		
		_.$el.off('.videoPlayerRepeat').on('click.videoPlayerRepeat', '.repeat-video-control', function(e){
			var $t = $(this);
			$t.toggleClass('active-item');
		});	
	}
	
	vidorev_theme.prototype.video_repeat_action = function(obj){
		var _ = this;
		var $player					= obj.player,
			$partyElm 				= obj.partyElm,
			player_id 				= obj.player_id,
			single_video_network 	= obj.single_video_network,
			timeOutfnc				= null;
			
		_.$el.on(prefix+'closeLightBoxVideoEventTrigger', function(){
			if(timeOutfnc!=null){
				clearTimeout(timeOutfnc);
			}
		});
		
		timeOutfnc = setTimeout(function(){
			_.player_actions($player, single_video_network, 'seek', 0);
			_.player_actions($player, single_video_network, 'play');
		}, 368);
		
	}
	
	vidorev_theme.prototype.scroll_control = function(){
		var _ = this;	
		
		_.$el.off('.scrollControlAction').on('click.scrollControlAction', '.scroll-elm-control', function(e){
			var $t = $(this),
				elm = $t.attr('href');
			
			if(typeof(elm)==='undefined' || elm==''){
				elm = $t.attr('data-href');
			}	
				
			if($(elm).length > 0){
				$('html, body').stop().animate({scrollTop:($(elm).offset().top-$('#wpadminbar').height()-40)}, {duration:500}, function(){});
				return false;
			}	
		});	
	}
	
	vidorev_theme.prototype.sticky_sidebar = function(){
		var _ = this;	
		
		if(!_.sticky_sidebar_on){
			return;
		}
		
		var scroll_down_fix = 0;
		
		if(_.$el.hasClass('sticky-menu-on') && !_.$el.hasClass('sticky-behavior-up')){
			scroll_down_fix = $('.sticky-menu-control').outerHeight();			
		}
		
		var offsetTop = $('#wpadminbar').outerHeight() + 30 + scroll_down_fix,
			opts = {
				additionalMarginTop: offsetTop,
				additionalMarginBottom:30,
				disableOnResponsiveLayouts:false,				
			}
			
		if(_.$el.hasClass('sticky-menu-on sticky-behavior-up')){
			opts.stickyUpMenuHeight = $('.sticky-menu-control').outerHeight();
		}	
		
		if($('.sidebar-content-control').length>0){		
			$('.sidebar-content-control').theiaStickySidebar(opts);
		}
		
		$('.elementor-widget-sidebar[data-element_type="sidebar.default"], .elementor-widget-sidebar[data-widget_type="sidebar.default"]', _.$el).each(function(index, element){
			var $t 							= $(this),
				sticky_sidebar_class 		= 'sticky-sidebar-'+index+'rnd'+(Math.floor((Math.random() * 999) + 1)),
				$row_parents				= $t.parents('.elementor-row');
				
				if(typeof(vidorev_jav_js_object)!=='undefined' && typeof(vidorev_jav_js_object.elementor_version)!=='undefined' && vidorev_jav_js_object.elementor_version==='ver-3x'){
					$row_parents				= $t.parents('.elementor-container');
				}				
						
			if($row_parents.find('.elementor-element.elementor-inner-column[data-element_type="column"]').length > 1 || $row_parents.find('.elementor-element.elementor-top-column[data-element_type="column"]').length > 1){
				$t.addClass(sticky_sidebar_class);			
				$('.'+(sticky_sidebar_class)).theiaStickySidebar(opts);
			}
		});	
	}
	
	vidorev_theme.prototype.popular_slider = function(){
		var _ = this;
		
		_.$el.find('.slider-popular-control').each(function(index, element){
			var $t 		= $(this);
			var options = {
				arrows:true,
				dots: false,
				infinite: true,
				speed: 500,
				slidesToShow: 2,
				slidesToScroll: 1,
				adaptiveHeight: true,
				focusOnSelect: false,
				prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
				responsive: [					
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 	1,
								slidesToScroll: 1,								
							}
						},								
				]
			}
			
			if(_.$el.hasClass('fullwidth-mode-enable')){
				options['slidesToShow'] = 4;
				options['responsive'] = [
					{
						breakpoint: 2000,
						settings: {
							slidesToShow: 	3,								
						}
					},
					{
						breakpoint: 1580,
						settings: {
							slidesToShow: 	2,								
						}
					},				
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 	1,
							slidesToScroll: 1,								
						}
					},								
				];
			}
			
			$t.on('init', function(event, slick){
				
			});
			
			$t.find('img.ul-normal-effect').addClass('img-effect-setup img-loaded');
			$t.slick(options);
		});
	}
	
	vidorev_theme.prototype.amazon_product_link_action = function(){
		var _ = this;
		_.$el.off('.amazonProductLink').on('click.amazonProductLink', '.amazon-action-control', function(e){
			var $t 		= $(this),
				$parent = $t.parents('.amazon-product-link-control');
			
			var sub_class = '';
			
			if(window.innerWidth < 768){
				sub_class = ' active-mobile';
			}else{
				sub_class = '';
			}
			
			if($t.attr('data-action') === 'open'){
				$parent.addClass('active-item'+(sub_class));
			}else{
				$parent.removeClass('active-item active-mobile');
			}	
			
		});	
	}	
	
	vidorev_theme.prototype.side_menu = function(){
		var _ = this;
		
		_.$el.off('.closeSideMenu').on('click.closeSideMenu', '.button-menu-side-control', function(e){
			var $t = $(this);
			if(_.$el.hasClass('close-side-menu') || $('.side-menu-wrapper-control').css('display')==='none'){
				_.$el.removeClass('close-side-menu').addClass('open-side-menu');
				Cookies.set('vidorevsidemenustatus', 'open', { expires: 368 });
			}else{
				_.$el.removeClass('open-side-menu').addClass('close-side-menu');
				Cookies.set('vidorevsidemenustatus', 'close', { expires: 368 });
			}
		
			_.$el.trigger(prefix+'side_menu_action', [_]);
		});
		
		if(_.global_scroll_bar_lib === 'malihu'){

			_.$el.find('.side-menu-children-control').mCustomScrollbar({
				theme: 'minimal',
				alwaysShowScrollbar:0,
				scrollInertia: 200,
			});

		}else if(_.global_scroll_bar_lib === 'overlay'){
			
			_.$el.find('.side-menu-children-control').overlayScrollbars({
				scrollbars:{
					autoHide:'move',
				}
			});
		}
		
		_.$el.find('.main-side-menu > ul > li.menu-item-has-children').each(function(index, element) {
			var $t = $(this),
				btn_control_class = 'open-submenu-'+(index);
			$t.append('<span class="open-submenu-mobile '+(btn_control_class)+'"><i class="fa fa-angle-right" aria-hidden="true"></i></span>').find('.'+(btn_control_class)).on('click', function(){
				$t.toggleClass('active-sub-menu').children('ul').slideToggle({duration:368});
			});
		});
	}
	
	vidorev_theme.prototype.sv_showmore_content = function(){
		var _ = this;
		_.$el.off('.showmoreButtonBontrol').on('click.showmoreButtonControl', '.showmore_button_control', function(e){
			var $t = $(this);
			$t.toggleClass('show-more-content');
			_.$el.toggleClass('show-more-content');
			
			if(!_.$el.hasClass('show-more-content')){				
				$('html, body').animate({scrollTop:$('.hidden-content-control').offset().top-150}, {duration:500, complete: function(){}});			
			}
		});
	}
	
	vidorev_theme.prototype.requestScript = function(url, callback) {
		var _ = this;

        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
			
		head.appendChild(script);	
			
        script.onreadystatechange = callback;
        script.onload = callback;
		script.onerror = callback;
		
    }
	
	vidorev_theme.prototype.single_video_clean_action = function(){
		var _ = this;	
		
		_.$el.off('.videoCleanStyle').on('click.videoCleanStyle', '.show-hide-toolbar-control', function(e){
			var $t = $(this);
			_.$el.toggleClass('single-video-clean-style');
		});	
	}
	
	vidorev_theme.prototype.single_video_time_lapses = function($player, single_video_network, player_id, $poster_preload){
		var _ = this;	
		var $wrap_time_lapses_ct = $('#'+(player_id)).parents('.vidorev-custom-embed-control');
		
		if(player_id != 'player-api-control' && $wrap_time_lapses_ct.length === 0){			
			return;
		}
		
		if($wrap_time_lapses_ct.length > 0){
			$wrap_time_lapses_ct.find('.time_lapses_control').attr({'data-vid-id':player_id});
		}else{
			_.$el.find('.time_lapses_control').attr({'data-vid-id':player_id});
		}
		
		_.$el.on('click.timeLapsesControl', '.time_lapses_control[data-vid-id="'+(player_id)+'"]', function(e){
			
			var $t = $(this);
			
			var time = $.trim($t.attr('data-time'));
			
			if(typeof(time)!=='undefined' && time!=''){
				var time =  time.split(':');
				var time_length = time.length;
				
				var hours = 0;
				var mins = 0;
				var secs = 0;
				
				var seek_time = 0;
				
				switch(time_length){
					case 3:
						
						hours = $.trim(time[0]);
						mins = $.trim(time[1]);
						secs = $.trim(time[2]);
						
						if(_.isNumber(hours) && _.isNumber(mins) && _.isNumber(secs)){
							seek_time = parseFloat(hours) * 3600 + parseFloat(mins) * 60 + parseFloat(secs);
						}						
						
						break;
						
					case 2:
						
						mins = $.trim(time[0]);
						secs = $.trim(time[1]);
						
						if(_.isNumber(mins) && _.isNumber(secs)){
							seek_time = parseFloat(mins) * 60 + parseFloat(secs);
						}
					
						break;
						
					case 1:
					
						secs = $.trim(time[0]);
						
						if(_.isNumber(secs)){
							seek_time = parseFloat(secs);
						}
						
						break;		
				}
				
				if(seek_time==0){
					seek_time=0.01;
				}
				
				if(seek_time > 0){
					
					_.$el.trigger( prefix+'videoBeforeTimeLapsesClick', [$player]);
					
					if($poster_preload.hasClass('active-item')){
						_.player_actions($player, single_video_network, 'seek', seek_time);
						$poster_preload.trigger('click');						
					}else{						
						_.player_actions($player, single_video_network, 'seek', seek_time);
						_.player_actions($player, single_video_network, 'play');
						$poster_preload.removeClass('active-item');
					}					
					
					_.$el.trigger( prefix+'videoAfterTimeLapsesClick', [$player]);
					
					if($wrap_time_lapses_ct.length > 0){
						$('html, body').stop().animate({scrollTop:$('#'+(player_id)).parents('.vidorev-custom-embed-control').offset().top-90}, {duration:500}, function(){});
					}else{
						$('html, body').stop().animate({scrollTop:$('#'+(player_id)).parents('#video-player-wrap-control').offset().top-90}, {duration:500}, function(){});
					}
				}
			}
			
			return false;
		});
	}
		
	/*destroy [Core]*/
	vidorev_theme.prototype.destroy = function(){
		var _ = this;		
	}/*destroy [Core]*/
	
	/*jquery [Core]*/
	$.fn.J_vidorev_theme = function(){
		var _ 		= this,
			opt 	= arguments[0],
			args 	= Array.prototype.slice.call(arguments, 1),
			l 		= _.length,
			i,
			ret;
		for(i = 0; i < l; i++) {
			if(typeof opt == 'object' || typeof opt == 'undefined'){
				_[i].J_vidorev_theme = new vidorev_theme(_[i], opt);
			}else{
				ret = _[i].J_vidorev_theme[opt].apply(_[i].J_vidorev_theme, args);
			}
			if (typeof ret != 'undefined'){				
				return ret;
			}
		}
		return _;
	}/*jquery [Core]*/
	
	/*ready [Core]*/
	$(document).ready(function(){
		var $b = $( 'body' ),
			options = { };
			
		$b.on(prefix+'init', function(e, fnc){
			console.log('VidoRev: library is installed, version 2.9.9.9.9.7');
			window.get_vidorev_build_fnc = fnc;
			$b.trigger('get_vidorev_build_fnc', []);
		});
			
		$b.J_vidorev_theme( options );		
	});/*ready [Core]*/
		
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});
jQuery.noConflict();
}));