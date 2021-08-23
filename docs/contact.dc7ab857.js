function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e,t){return Object.keys(t).forEach((function(n){"default"!==n&&"__esModule"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),e}const n=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},r=e=>{const t=n(e);return t&&document.querySelector(t)?t:null},o=e=>{const t=n(e);return t?document.querySelector(t):null},i=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),s=e=>i(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,a=(e,t,n)=>{Object.keys(n).forEach((r=>{const o=n[r],s=t[r],a=s&&i(s)?"element":null==(c=s)?`${c}`:{}.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase();var c;if(!new RegExp(o).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${o}".`)}))},c=e=>!(!i(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),l=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),f=()=>{},u=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},p=[],d=()=>"rtl"===document.documentElement.dir,h=e=>{var t;t=()=>{const t=u();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}},"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",(()=>{p.forEach((e=>e()))})),p.push(t)):t()},g=e=>{"function"==typeof e&&e()},m=(e,t,n=!0)=>{if(!n)return void g(e);const r=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let o=!1;const i=({target:n})=>{n===t&&(o=!0,t.removeEventListener("transitionend",i),g(e))};t.addEventListener("transitionend",i),setTimeout((()=>{o||t.dispatchEvent(new Event("transitionend"))}),r)},v=new Map;var b={set(e,t,n){v.has(e)||v.set(e,new Map);const r=v.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get:(e,t)=>v.has(e)&&v.get(e).get(t)||null,remove(e,t){if(!v.has(e))return;const n=v.get(e);n.delete(t),0===n.size&&v.delete(e)}};const y=/[^.]*(?=\..*)\.|.*/,w=/\..*/,_=/::\d+$/,O={};let E=1;const x={mouseenter:"mouseover",mouseleave:"mouseout"},A=/^(mouseenter|mouseleave)/i,C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function D(e,t){return t&&`${t}::${E++}`||e.uidEvent||E++}function j(e){const t=D(e);return e.uidEvent=t,O[t]=O[t]||{},O[t]}function k(e,t,n=null){const r=Object.keys(e);for(let o=0,i=r.length;o<i;o++){const i=e[r[o]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function L(e,t,n){const r="string"==typeof t,o=r?n:t;let i=P(e);return C.has(i)||(i=e),[r,o,i]}function T(e,t,n,r,o){if("string"!=typeof t||!e)return;if(n||(n=r,r=null),A.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[i,s,a]=L(t,n,r),c=j(e),l=c[a]||(c[a]={}),f=k(l,s,i?n:null);if(f)return void(f.oneOff=f.oneOff&&o);const u=D(s,t.replace(y,"")),p=i?function(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(let a=i.length;a--;)if(i[a]===s)return o.delegateTarget=s,r.oneOff&&M.off(e,o.type,t,n),n.apply(s,[o]);return null}}(e,n,r):function(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&M.off(e,r.type,t),t.apply(e,[r])}}(e,n);p.delegationSelector=i?n:null,p.originalHandler=s,p.oneOff=o,p.uidEvent=u,l[u]=p,e.addEventListener(a,p,i)}function S(e,t,n,r,o){const i=k(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function P(e){return e=e.replace(w,""),x[e]||e}const M={on(e,t,n,r){T(e,t,n,r,!1)},one(e,t,n,r){T(e,t,n,r,!0)},off(e,t,n,r){if("string"!=typeof t||!e)return;const[o,i,s]=L(t,n,r),a=s!==t,c=j(e),l=t.startsWith(".");if(void 0!==i){if(!c||!c[s])return;return void S(e,c,s,i,o?n:null)}l&&Object.keys(c).forEach((n=>{!function(e,t,n,r){const o=t[n]||{};Object.keys(o).forEach((i=>{if(i.includes(r)){const r=o[i];S(e,t,n,r.originalHandler,r.delegationSelector)}}))}(e,c,n,t.slice(1))}));const f=c[s]||{};Object.keys(f).forEach((n=>{const r=n.replace(_,"");if(!a||t.includes(r)){const t=f[n];S(e,c,s,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!=typeof t||!e)return null;const r=u(),o=P(t),i=t!==o,s=C.has(o);let a,c=!0,l=!0,f=!1,p=null;return i&&r&&(a=r.Event(t,n),r(e).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),f=a.isDefaultPrevented()),s?(p=document.createEvent("HTMLEvents"),p.initEvent(o,c,!0)):p=new CustomEvent(t,{bubbles:c,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((e=>{Object.defineProperty(p,e,{get:()=>n[e]})})),f&&p.preventDefault(),l&&e.dispatchEvent(p),p.defaultPrevented&&void 0!==a&&a.preventDefault(),p}};var N=M;function H(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function B(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}var I={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${B(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${B(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=H(e.dataset[n])})),t},getDataAttribute:(e,t)=>H(e.getAttribute(`data-bs-${B(t)}`)),offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position:e=>({top:e.offsetTop,left:e.offsetLeft})};var R={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let r=e.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE&&3!==r.nodeType;)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!l(e)&&c(e)))}};var W=class{constructor(e){(e=s(e))&&(this._element=e,b.set(this._element,this.constructor.DATA_KEY,this))}dispose(){b.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){m(e,t,n)}static getInstance(e){return b.get(s(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.1.0"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}};const q={toggle:!0,parent:null},$={toggle:"boolean",parent:"(null|element)"};class V extends W{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=R.find('[data-bs-toggle="collapse"]');for(let e=0,t=n.length;e<t;e++){const t=n[e],o=r(t),i=R.find(o).filter((e=>e===this._element));null!==o&&i.length&&(this._selector=o,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return q}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=R.find(".collapse .collapse",this._config.parent);t=R.find(".show, .collapsing",this._config.parent).filter((t=>!e.includes(t)))}const n=R.findOne(this._selector);if(t.length){const r=t.find((e=>n!==e));if(e=r?V.getInstance(r):null,e&&e._isTransitioning)return}if(N.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t.forEach((t=>{n!==t&&V.getOrCreateInstance(t,{toggle:!1}).hide(),e||b.set(t,"bs.collapse",null)}));const r=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[r]="",N.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[r]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(N.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,this._element.offsetHeight,this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const t=this._triggerArray.length;for(let e=0;e<t;e++){const t=this._triggerArray[e],n=o(t);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),N.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(e=this._element){return e.classList.contains("show")}_getConfig(e){return(e={...q,...I.getDataAttributes(this._element),...e}).toggle=Boolean(e.toggle),e.parent=s(e.parent),a("collapse",e,$),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=R.find(".collapse .collapse",this._config.parent);R.find('[data-bs-toggle="collapse"]',this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=o(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove("collapsed"):e.classList.add("collapsed"),e.setAttribute("aria-expanded",t)}))}static jQueryInterface(e){return this.each((function(){const t={};"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=V.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}N.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=r(this);R.find(t).forEach((e=>{V.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),h(V);var Y={};e(Y,"popperGenerator",(()=>yt)),e(Y,"detectOverflow",(()=>at)),e(Y,"createPopperBase",(()=>wt)),e(Y,"createPopper",(()=>_t)),e(Y,"createPopperLite",(()=>Ot));var z={};e(z,"afterMain",(()=>ue)),e(z,"write",(()=>de)),e(z,"bottom",(()=>U)),e(z,"left",(()=>Q)),e(z,"read",(()=>ae)),e(z,"modifierPhases",(()=>ge)),e(z,"end",(()=>J)),e(z,"top",(()=>K)),e(z,"reference",(()=>re)),e(z,"start",(()=>Z)),e(z,"clippingParents",(()=>ee)),e(z,"auto",(()=>X)),e(z,"popper",(()=>ne)),e(z,"beforeRead",(()=>se)),e(z,"basePlacements",(()=>G)),e(z,"viewport",(()=>te)),e(z,"afterRead",(()=>ce)),e(z,"main",(()=>fe)),e(z,"beforeWrite",(()=>pe)),e(z,"variationPlacements",(()=>oe)),e(z,"placements",(()=>ie)),e(z,"right",(()=>F)),e(z,"beforeMain",(()=>le)),e(z,"afterWrite",(()=>he));var K="top",U="bottom",F="right",Q="left",X="auto",G=[K,U,F,Q],Z="start",J="end",ee="clippingParents",te="viewport",ne="popper",re="reference",oe=G.reduce((function(e,t){return e.concat([t+"-"+Z,t+"-"+J])}),[]),ie=[].concat(G,[X]).reduce((function(e,t){return e.concat([t,t+"-"+Z,t+"-"+J])}),[]),se="beforeRead",ae="read",ce="afterRead",le="beforeMain",fe="main",ue="afterMain",pe="beforeWrite",de="write",he="afterWrite",ge=[se,ae,ce,le,fe,ue,pe,de,he],me={};function ve(e){return e?(e.nodeName||"").toLowerCase():null}function be(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ye(e){return e instanceof be(e).Element||e instanceof Element}function we(e){return e instanceof be(e).HTMLElement||e instanceof HTMLElement}function _e(e){return"undefined"!=typeof ShadowRoot&&(e instanceof be(e).ShadowRoot||e instanceof ShadowRoot)}e(me,"applyStyles",(()=>Oe)),e(me,"arrow",(()=>qe)),e(me,"computeStyles",(()=>Ye)),e(me,"eventListeners",(()=>Ke)),e(me,"flip",(()=>ct)),e(me,"hide",(()=>ut)),e(me,"offset",(()=>pt)),e(me,"popperOffsets",(()=>dt)),e(me,"preventOverflow",(()=>ht));var Oe={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];we(o)&&ve(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});we(r)&&ve(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function Ee(e){return e.split("-")[0]}var xe=Math.round;function Ae(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;return we(e)&&t&&(r=n.width/e.offsetWidth||1,o=n.height/e.offsetHeight||1),{width:xe(n.width/r),height:xe(n.height/o),top:xe(n.top/o),right:xe(n.right/r),bottom:xe(n.bottom/o),left:xe(n.left/r),x:xe(n.left/r),y:xe(n.top/o)}}function Ce(e){var t=Ae(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function De(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_e(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function je(e){return be(e).getComputedStyle(e)}function ke(e){return["table","td","th"].indexOf(ve(e))>=0}function Le(e){return((ye(e)?e.ownerDocument:e.document)||window.document).documentElement}function Te(e){return"html"===ve(e)?e:e.assignedSlot||e.parentNode||(_e(e)?e.host:null)||Le(e)}function Se(e){return we(e)&&"fixed"!==je(e).position?e.offsetParent:null}function Pe(e){for(var t=be(e),n=Se(e);n&&ke(n)&&"static"===je(n).position;)n=Se(n);return n&&("html"===ve(n)||"body"===ve(n)&&"static"===je(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&we(e)&&"fixed"===je(e).position)return null;for(var n=Te(e);we(n)&&["html","body"].indexOf(ve(n))<0;){var r=je(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function Me(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var Ne=Math.max,He=Math.min,Be=Math.round;function Ie(e,t,n){return Ne(e,He(t,n))}function Re(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function We(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var qe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,a=Ee(n.placement),c=Me(a),l=[Q,F].indexOf(a)>=0?"height":"width";if(i&&s){var f=function(e,t){return Re("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:We(e,G))}(o.padding,n),u=Ce(i),p="y"===c?K:Q,d="y"===c?U:F,h=n.rects.reference[l]+n.rects.reference[c]-s[c]-n.rects.popper[l],g=s[c]-n.rects.reference[c],m=Pe(i),v=m?"y"===c?m.clientHeight||0:m.clientWidth||0:0,b=h/2-g/2,y=f[p],w=v-u[l]-f[d],_=v/2-u[l]/2+b,O=Ie(y,_,w),E=c;n.modifiersData[r]=((t={})[E]=O,t.centerOffset=O-_,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&De(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},$e={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ve(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,s=e.position,a=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,f=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Be(Be(t*r)/r)||0,y:Be(Be(n*r)/r)||0}}(i):"function"==typeof l?l(i):i,u=f.x,p=void 0===u?0:u,d=f.y,h=void 0===d?0:d,g=i.hasOwnProperty("x"),m=i.hasOwnProperty("y"),v=Q,b=K,y=window;if(c){var w=Pe(n),_="clientHeight",O="clientWidth";w===be(n)&&"static"!==je(w=Le(n)).position&&(_="scrollHeight",O="scrollWidth"),o===K&&(b=U,h-=w[_]-r.height,h*=a?1:-1),o===Q&&(v=F,p-=w[O]-r.width,p*=a?1:-1)}var E,x=Object.assign({position:s},c&&$e);return a?Object.assign({},x,((E={})[b]=m?"0":"",E[v]=g?"0":"",E.transform=(y.devicePixelRatio||1)<2?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",E)):Object.assign({},x,((t={})[b]=m?h+"px":"",t[v]=g?p+"px":"",t.transform="",t))}var Ye={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,c=void 0===a||a,l={placement:Ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ve(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ve(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},ze={passive:!0};var Ke={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,s=r.resize,a=void 0===s||s,c=be(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",n.update,ze)})),a&&c.addEventListener("resize",n.update,ze),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",n.update,ze)})),a&&c.removeEventListener("resize",n.update,ze)}},data:{}},Ue={left:"right",right:"left",bottom:"top",top:"bottom"};function Fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return Ue[e]}))}var Qe={start:"end",end:"start"};function Xe(e){return e.replace(/start|end/g,(function(e){return Qe[e]}))}function Ge(e){var t=be(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Ze(e){return Ae(Le(e)).left+Ge(e).scrollLeft}function Je(e){var t=je(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function et(e){return["html","body","#document"].indexOf(ve(e))>=0?e.ownerDocument.body:we(e)&&Je(e)?e:et(Te(e))}function tt(e,t){var n;void 0===t&&(t=[]);var r=et(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=be(r),s=o?[i].concat(i.visualViewport||[],Je(r)?r:[]):r,a=t.concat(s);return o?a:a.concat(tt(Te(s)))}function nt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function rt(e,t){return t===te?nt(function(e){var t=be(e),n=Le(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,s=0,a=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:o,height:i,x:s+Ze(e),y:a}}(e)):we(t)?function(e){var t=Ae(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):nt(function(e){var t,n=Le(e),r=Ge(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=Ne(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=Ne(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-r.scrollLeft+Ze(e),c=-r.scrollTop;return"rtl"===je(o||n).direction&&(a+=Ne(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:a,y:c}}(Le(e)))}function ot(e,t,n){var r="clippingParents"===t?function(e){var t=tt(Te(e)),n=["absolute","fixed"].indexOf(je(e).position)>=0&&we(e)?Pe(e):e;return ye(n)?t.filter((function(e){return ye(e)&&De(e,n)&&"body"!==ve(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],s=o.reduce((function(t,n){var r=rt(e,n);return t.top=Ne(r.top,t.top),t.right=He(r.right,t.right),t.bottom=He(r.bottom,t.bottom),t.left=Ne(r.left,t.left),t}),rt(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function it(e){return e.split("-")[1]}function st(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Ee(o):null,s=o?it(o):null,a=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case K:t={x:a,y:n.y-r.height};break;case U:t={x:a,y:n.y+n.height};break;case F:t={x:n.x+n.width,y:c};break;case Q:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=i?Me(i):null;if(null!=l){var f="y"===l?"height":"width";switch(s){case Z:t[l]=t[l]-(n[f]/2-r[f]/2);break;case J:t[l]=t[l]+(n[f]/2-r[f]/2)}}return t}function at(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,s=void 0===i?ee:i,a=n.rootBoundary,c=void 0===a?te:a,l=n.elementContext,f=void 0===l?ne:l,u=n.altBoundary,p=void 0!==u&&u,d=n.padding,h=void 0===d?0:d,g=Re("number"!=typeof h?h:We(h,G)),m=f===ne?re:ne,v=e.elements.reference,b=e.rects.popper,y=e.elements[p?m:f],w=ot(ye(y)?y:y.contextElement||Le(e.elements.popper),s,c),_=Ae(v),O=st({reference:_,element:b,strategy:"absolute",placement:o}),E=nt(Object.assign({},b,O)),x=f===ne?E:_,A={top:w.top-x.top+g.top,bottom:x.bottom-w.bottom+g.bottom,left:w.left-x.left+g.left,right:x.right-w.right+g.right},C=e.modifiersData.offset;if(f===ne&&C){var D=C[o];Object.keys(A).forEach((function(e){var t=[F,U].indexOf(e)>=0?1:-1,n=[K,U].indexOf(e)>=0?"y":"x";A[e]+=D[n]*t}))}return A}var ct={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,s=n.altAxis,a=void 0===s||s,c=n.fallbackPlacements,l=n.padding,f=n.boundary,u=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,h=void 0===d||d,g=n.allowedAutoPlacements,m=t.options.placement,v=Ee(m),b=c||(v===m||!h?[Fe(m)]:function(e){if(Ee(e)===X)return[];var t=Fe(e);return[Xe(e),t,Xe(t)]}(m)),y=[m].concat(b).reduce((function(e,n){return e.concat(Ee(n)===X?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?ie:c,f=it(r),u=f?a?oe:oe.filter((function(e){return it(e)===f})):G,p=u.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=u);var d=p.reduce((function(t,n){return t[n]=at(e,{placement:n,boundary:o,rootBoundary:i,padding:s})[Ee(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:f,rootBoundary:u,padding:l,flipVariations:h,allowedAutoPlacements:g}):n)}),[]),w=t.rects.reference,_=t.rects.popper,O=new Map,E=!0,x=y[0],A=0;A<y.length;A++){var C=y[A],D=Ee(C),j=it(C)===Z,k=[K,U].indexOf(D)>=0,L=k?"width":"height",T=at(t,{placement:C,boundary:f,rootBoundary:u,altBoundary:p,padding:l}),S=k?j?F:Q:j?U:K;w[L]>_[L]&&(S=Fe(S));var P=Fe(S),M=[];if(i&&M.push(T[D]<=0),a&&M.push(T[S]<=0,T[P]<=0),M.every((function(e){return e}))){x=C,E=!1;break}O.set(C,M)}if(E)for(var N=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return x=t,"break"},H=h?3:1;H>0;H--){if("break"===N(H))break}t.placement!==x&&(t.modifiersData[r]._skip=!0,t.placement=x,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function lt(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ft(e){return[K,F,U,Q].some((function(t){return e[t]>=0}))}var ut={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,s=at(t,{elementContext:"reference"}),a=at(t,{altBoundary:!0}),c=lt(s,r),l=lt(a,o,i),f=ft(c),u=ft(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":u})}};var pt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,s=ie.reduce((function(e,n){return e[n]=function(e,t,n){var r=Ee(e),o=[Q,K].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,s=i[0],a=i[1];return s=s||0,a=(a||0)*o,[Q,F].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}(n,t.rects,i),e}),{}),a=s[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=s}};var dt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=st({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var ht={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,s=n.altAxis,a=void 0!==s&&s,c=n.boundary,l=n.rootBoundary,f=n.altBoundary,u=n.padding,p=n.tether,d=void 0===p||p,h=n.tetherOffset,g=void 0===h?0:h,m=at(t,{boundary:c,rootBoundary:l,padding:u,altBoundary:f}),v=Ee(t.placement),b=it(t.placement),y=!b,w=Me(v),_="x"===w?"y":"x",O=t.modifiersData.popperOffsets,E=t.rects.reference,x=t.rects.popper,A="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,C={x:0,y:0};if(O){if(i||a){var D="y"===w?K:Q,j="y"===w?U:F,k="y"===w?"height":"width",L=O[w],T=O[w]+m[D],S=O[w]-m[j],P=d?-x[k]/2:0,M=b===Z?E[k]:x[k],N=b===Z?-x[k]:-E[k],H=t.elements.arrow,B=d&&H?Ce(H):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},R=I[D],W=I[j],q=Ie(0,E[k],B[k]),$=y?E[k]/2-P-q-R-A:M-q-R-A,V=y?-E[k]/2+P+q+W+A:N+q+W+A,Y=t.elements.arrow&&Pe(t.elements.arrow),z=Y?"y"===w?Y.clientTop||0:Y.clientLeft||0:0,X=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,G=O[w]+$-X-z,J=O[w]+V-X;if(i){var ee=Ie(d?He(T,G):T,L,d?Ne(S,J):S);O[w]=ee,C[w]=ee-L}if(a){var te="x"===w?K:Q,ne="x"===w?U:F,re=O[_],oe=re+m[te],ie=re-m[ne],se=Ie(d?He(oe,G):oe,re,d?Ne(ie,J):ie);O[_]=se,C[_]=se-re}}t.modifiersData[r]=C}},requiresIfExists:["offset"]};function gt(e,t,n){void 0===n&&(n=!1);var r,o,i=we(t),s=we(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),a=Le(t),c=Ae(e,s),l={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(i||!i&&!n)&&(("body"!==ve(t)||Je(a))&&(l=(r=t)!==be(r)&&we(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:Ge(r)),we(t)?((f=Ae(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):a&&(f.x=Ze(a))),{x:c.left+l.scrollLeft-f.x,y:c.top+l.scrollTop-f.y,width:c.width,height:c.height}}function mt(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var vt={placement:"bottom",modifiers:[],strategy:"absolute"};function bt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function yt(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?vt:o;return function(e,t,n){void 0===n&&(n=i);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},vt,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,f={state:a,setOptions:function(n){u(),a.options=Object.assign({},i,a.options,n),a.scrollParents={reference:ye(e)?tt(e):e.contextElement?tt(e.contextElement):[],popper:tt(t)};var o=function(e){var t=mt(e);return ge.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,a.options.modifiers)));return a.orderedModifiers=o.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:a,name:t,instance:f,options:r}),s=function(){};c.push(i||s)}})),f.update()},forceUpdate:function(){if(!l){var e=a.elements,t=e.reference,n=e.popper;if(bt(t,n)){a.rects={reference:gt(t,Pe(n),"fixed"===a.options.strategy),popper:Ce(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var o=a.orderedModifiers[r],i=o.fn,s=o.options,c=void 0===s?{}:s,u=o.name;"function"==typeof i&&(a=i({state:a,options:c,name:u,instance:f})||a)}else a.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){u(),l=!0}};if(!bt(e,t))return f;function u(){c.forEach((function(e){return e()})),c=[]}return f.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var wt=yt(),_t=yt({defaultModifiers:[Ke,dt,Ye,Oe,pt,ct,ht,qe,ut]}),Ot=yt({defaultModifiers:[Ke,dt,Ye,Oe]});t(Y,z),t(Y,me);const Et=new RegExp("ArrowUp|ArrowDown|Escape"),xt=d()?"top-end":"top-start",At=d()?"top-start":"top-end",Ct=d()?"bottom-end":"bottom-start",Dt=d()?"bottom-start":"bottom-end",jt=d()?"left-start":"right-start",kt=d()?"right-start":"left-start",Lt={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Tt={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class St extends W{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Lt}static get DefaultType(){return Tt}static get NAME(){return"dropdown"}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(N.trigger(this._element,"show.bs.dropdown",e).defaultPrevented)return;const t=St.getParentFromElement(this._element);this._inNavbar?I.setDataAttribute(this._menu,"popper","none"):this._createPopper(t),"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach((e=>N.on(e,"mouseover",f))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add("show"),this._element.classList.add("show"),N.trigger(this._element,"shown.bs.dropdown",e)}hide(){if(l(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){N.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>N.off(e,"mouseover",f))),this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),I.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,"hidden.bs.dropdown",e))}_getConfig(e){if(e={...this.constructor.Default,...I.getDataAttributes(this._element),...e},a("dropdown",e,this.constructor.DefaultType),"object"==typeof e.reference&&!i(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${"dropdown".toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if(void 0===Y)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:i(this._config.reference)?t=s(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),r=n.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=Y.createPopper(t,this._menu,n),r&&I.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains("show")}_getMenuElement(){return R.next(this._element,".dropdown-menu")[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains("dropend"))return jt;if(e.classList.contains("dropstart"))return kt;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?At:xt:t?Dt:Ct}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(c);n.length&&((e,t,n,r)=>{let o=e.indexOf(t);if(-1===o)return e[!n&&r?e.length-1:0];const i=e.length;return o+=n?1:-1,r&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))]})(n,t,"ArrowDown"===e,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=St.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const t=R.find('[data-bs-toggle="dropdown"]');for(let n=0,r=t.length;n<r;n++){const r=St.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const o={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(o.clickEvent=e)}r._completeHide(o)}}static getParentFromElement(e){return o(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?"Space"===e.key||"Escape"!==e.key&&("ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.target.closest(".dropdown-menu")):!Et.test(e.key))return;const t=this.classList.contains("show");if(!t&&"Escape"===e.key)return;if(e.preventDefault(),e.stopPropagation(),l(this))return;const n=this.matches('[data-bs-toggle="dropdown"]')?this:R.prev(this,'[data-bs-toggle="dropdown"]')[0],r=St.getOrCreateInstance(n);if("Escape"!==e.key)return"ArrowUp"===e.key||"ArrowDown"===e.key?(t||r.show(),void r._selectMenuItem(e)):void(t&&"Space"!==e.key||St.clearMenus());r.hide()}}N.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',St.dataApiKeydownHandler),N.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",St.dataApiKeydownHandler),N.on(document,"click.bs.dropdown.data-api",St.clearMenus),N.on(document,"keyup.bs.dropdown.data-api",St.clearMenus),N.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(e){e.preventDefault(),St.getOrCreateInstance(this).toggle()})),h(St);
//# sourceMappingURL=contact.dc7ab857.js.map
