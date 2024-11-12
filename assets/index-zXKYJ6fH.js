function Ow(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cy={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),Lw=Symbol.for("react.portal"),xw=Symbol.for("react.fragment"),Mw=Symbol.for("react.strict_mode"),Vw=Symbol.for("react.profiler"),bw=Symbol.for("react.provider"),Uw=Symbol.for("react.context"),Fw=Symbol.for("react.forward_ref"),Bw=Symbol.for("react.suspense"),jw=Symbol.for("react.memo"),zw=Symbol.for("react.lazy"),Pp=Symbol.iterator;function Hw(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var hy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dy=Object.assign,fy={};function Hi(t,e,n){this.props=t,this.context=e,this.refs=fy,this.updater=n||hy}Hi.prototype.isReactComponent={};Hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function py(){}py.prototype=Hi.prototype;function Qh(t,e,n){this.props=t,this.context=e,this.refs=fy,this.updater=n||hy}var Xh=Qh.prototype=new py;Xh.constructor=Qh;dy(Xh,Hi.prototype);Xh.isPureReactComponent=!0;var kp=Array.isArray,my=Object.prototype.hasOwnProperty,Yh={current:null},gy={key:!0,ref:!0,__self:!0,__source:!0};function yy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)my.call(e,r)&&!gy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Eo,type:t,key:s,ref:o,props:i,_owner:Yh.current}}function Gw(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function $w(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Np=/\/+/g;function $u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$w(""+t.key):e.toString(36)}function Aa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Eo:case Lw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$u(o,0):r,kp(i)?(n="",t!=null&&(n=t.replace(Np,"$&/")+"/"),Aa(i,e,n,"",function(h){return h})):i!=null&&(Jh(i)&&(i=Gw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Np,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+$u(s,l);o+=Aa(s,e,n,u,i)}else if(u=Hw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+$u(s,l++),o+=Aa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zo(t,e,n){if(t==null)return t;var r=[],i=0;return Aa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ww(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Sa={transition:null},qw={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:Yh};function vy(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Hi;Y.Fragment=xw;Y.Profiler=Vw;Y.PureComponent=Qh;Y.StrictMode=Mw;Y.Suspense=Bw;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qw;Y.act=vy;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)my.call(e,u)&&!gy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Eo,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:Uw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bw,_context:t},t.Consumer=t};Y.createElement=yy;Y.createFactory=function(t){var e=yy.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:Fw,render:t}};Y.isValidElement=Jh;Y.lazy=function(t){return{$$typeof:zw,_payload:{_status:-1,_result:t},_init:Ww}};Y.memo=function(t,e){return{$$typeof:jw,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Sa.transition;Sa.transition={};try{t()}finally{Sa.transition=e}};Y.unstable_act=vy;Y.useCallback=function(t,e){return ht.current.useCallback(t,e)};Y.useContext=function(t){return ht.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Y.useEffect=function(t,e){return ht.current.useEffect(t,e)};Y.useId=function(){return ht.current.useId()};Y.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return ht.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Y.useRef=function(t){return ht.current.useRef(t)};Y.useState=function(t){return ht.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return ht.current.useTransition()};Y.version="18.3.1";cy.exports=Y;var V=cy.exports;const D=Dw(V),Kw=Ow({__proto__:null,default:D},[V]);var Dc={},_y={exports:{}},kt={},Ey={exports:{}},wy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,$){var W=z.length;z.push($);e:for(;0<W;){var ie=W-1>>>1,X=z[ie];if(0<i(X,$))z[ie]=$,z[W]=X,W=ie;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],W=z.pop();if(W!==$){z[0]=W;e:for(var ie=0,X=z.length,ee=X>>>1;ie<ee;){var Ae=2*(ie+1)-1,Ce=z[Ae],Ue=Ae+1,st=z[Ue];if(0>i(Ce,W))Ue<X&&0>i(st,Ce)?(z[ie]=st,z[Ue]=W,ie=Ue):(z[ie]=Ce,z[Ae]=W,ie=Ae);else if(Ue<X&&0>i(st,W))z[ie]=st,z[Ue]=W,ie=Ue;else break e}}return $}function i(z,$){var W=z.sortIndex-$.sortIndex;return W!==0?W:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,v=3,C=!1,R=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var $=n(h);$!==null;){if($.callback===null)r(h);else if($.startTime<=z)r(h),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(h)}}function O(z){if(k=!1,E(z),!R)if(n(u)!==null)R=!0,Jt(b);else{var $=n(h);$!==null&&Ne(O,$.startTime-z)}}function b(z,$){R=!1,k&&(k=!1,I(m),m=-1),C=!0;var W=v;try{for(E($),p=n(u);p!==null&&(!(p.expirationTime>$)||z&&!S());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,v=p.priorityLevel;var X=ie(p.expirationTime<=$);$=t.unstable_now(),typeof X=="function"?p.callback=X:p===n(u)&&r(u),E($)}else r(u);p=n(u)}if(p!==null)var ee=!0;else{var Ae=n(h);Ae!==null&&Ne(O,Ae.startTime-$),ee=!1}return ee}finally{p=null,v=W,C=!1}}var B=!1,w=null,m=-1,_=5,T=-1;function S(){return!(t.unstable_now()-T<_)}function P(){if(w!==null){var z=t.unstable_now();T=z;var $=!0;try{$=w(!0,z)}finally{$?A():(B=!1,w=null)}}else B=!1}var A;if(typeof y=="function")A=function(){y(P)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,ft=Te.port2;Te.port1.onmessage=P,A=function(){ft.postMessage(null)}}else A=function(){L(P,0)};function Jt(z){w=z,B||(B=!0,A())}function Ne(z,$){m=L(function(){z(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||C||(R=!0,Jt(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var W=v;v=$;try{return z()}finally{v=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=v;v=z;try{return $()}finally{v=W}},t.unstable_scheduleCallback=function(z,$,W){var ie=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ie+W:ie):W=ie,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=W+X,z={id:f++,callback:$,priorityLevel:z,startTime:W,expirationTime:X,sortIndex:-1},W>ie?(z.sortIndex=W,e(h,z),n(u)===null&&z===n(h)&&(k?(I(m),m=-1):k=!0,Ne(O,W-ie))):(z.sortIndex=X,e(u,z),R||C||(R=!0,Jt(b))),z},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(z){var $=v;return function(){var W=v;v=$;try{return z.apply(this,arguments)}finally{v=W}}}})(wy);Ey.exports=wy;var Qw=Ey.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xw=V,Pt=Qw;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iy=new Set,Hs={};function qr(t,e){Oi(t,e),Oi(t+"Capture",e)}function Oi(t,e){for(Hs[t]=e,t=0;t<e.length;t++)Iy.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=Object.prototype.hasOwnProperty,Yw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Dp={};function Jw(t){return Lc.call(Dp,t)?!0:Lc.call(Op,t)?!1:Yw.test(t)?Dp[t]=!0:(Op[t]=!0,!1)}function Zw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function e1(t,e,n,r){if(e===null||typeof e>"u"||Zw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zh=/[\-:]([a-z])/g;function ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zh,ed);We[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zh,ed);We[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zh,ed);We[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function td(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e1(e,n,i,r)&&(n=null),r||i===null?Jw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=Xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),li=Symbol.for("react.portal"),ui=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),Ty=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),Sy=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function cs(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Wu;function Es(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var qu=!1;function Ku(t,e){if(!t||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function t1(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=Ku(t.type,!1),t;case 11:return t=Ku(t.type.render,!1),t;case 1:return t=Ku(t.type,!0),t;default:return""}}function bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ui:return"Fragment";case li:return"Portal";case xc:return"Profiler";case nd:return"StrictMode";case Mc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ay:return(t.displayName||"Context")+".Consumer";case Ty:return(t._context.displayName||"Context")+".Provider";case rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case id:return e=t.displayName||null,e!==null?e:bc(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return bc(t(e))}catch{}}return null}function n1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bc(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r1(t){var e=Cy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=r1(t))}function Ry(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Cy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Py(t,e){e=e.checked,e!=null&&td(t,"checked",e,!1)}function Fc(t,e){Py(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function wi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ws(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function ky(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ny(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ny(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,Oy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i1=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){i1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function Dy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function Ly(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var s1=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hc(t,e){if(e){if(s1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Gc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wc=null,Ii=null,Ti=null;function Up(t){if(t=To(t)){if(typeof Wc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Gl(e),Wc(t.stateNode,t.type,e))}}function xy(t){Ii?Ti?Ti.push(t):Ti=[t]:Ii=t}function My(){if(Ii){var t=Ii,e=Ti;if(Ti=Ii=null,Up(t),e)for(t=0;t<e.length;t++)Up(e[t])}}function Vy(t,e){return t(e)}function by(){}var Qu=!1;function Uy(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return Vy(t,e,n)}finally{Qu=!1,(Ii!==null||Ti!==null)&&(by(),My())}}function $s(t,e){var n=t.stateNode;if(n===null)return null;var r=Gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var qc=!1;if(An)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){qc=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{qc=!1}function o1(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ps=!1,qa=null,Ka=!1,Kc=null,a1={onError:function(t){Ps=!0,qa=t}};function l1(t,e,n,r,i,s,o,l,u){Ps=!1,qa=null,o1.apply(a1,arguments)}function u1(t,e,n,r,i,s,o,l,u){if(l1.apply(this,arguments),Ps){if(Ps){var h=qa;Ps=!1,qa=null}else throw Error(U(198));Ka||(Ka=!0,Kc=h)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(t){if(Kr(t)!==t)throw Error(U(188))}function c1(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fp(i),t;if(s===r)return Fp(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function By(t){return t=c1(t),t!==null?jy(t):null}function jy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jy(t);if(e!==null)return e;t=t.sibling}return null}var zy=Pt.unstable_scheduleCallback,Bp=Pt.unstable_cancelCallback,h1=Pt.unstable_shouldYield,d1=Pt.unstable_requestPaint,Se=Pt.unstable_now,f1=Pt.unstable_getCurrentPriorityLevel,od=Pt.unstable_ImmediatePriority,Hy=Pt.unstable_UserBlockingPriority,Qa=Pt.unstable_NormalPriority,p1=Pt.unstable_LowPriority,Gy=Pt.unstable_IdlePriority,Bl=null,rn=null;function m1(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:v1,g1=Math.log,y1=Math.LN2;function v1(t){return t>>>=0,t===0?32:31-(g1(t)/y1|0)|0}var ra=64,ia=4194304;function Is(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Is(l):(s&=o,s!==0&&(r=Is(s)))}else o=n&~i,o!==0?r=Is(o):s!==0&&(r=Is(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function _1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=_1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Qc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $y(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function w1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Wy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qy,ld,Ky,Qy,Xy,Xc=!1,sa=[],Kn=null,Qn=null,Xn=null,Ws=new Map,qs=new Map,Un=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(e.pointerId)}}function ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=To(e),e!==null&&ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function T1(t,e,n,r,i){switch(e){case"focusin":return Kn=ds(Kn,t,e,n,r,i),!0;case"dragenter":return Qn=ds(Qn,t,e,n,r,i),!0;case"mouseover":return Xn=ds(Xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ws.set(s,ds(Ws.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qs.set(s,ds(qs.get(s)||null,t,e,n,r,i)),!0}return!1}function Yy(t){var e=Ar(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Fy(n),e!==null){t.blockedOn=e,Xy(t.priority,function(){Ky(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$c=r,n.target.dispatchEvent(r),$c=null}else return e=To(n),e!==null&&ld(e),t.blockedOn=n,!1;e.shift()}return!0}function zp(t,e,n){Ca(t)&&n.delete(e)}function A1(){Xc=!1,Kn!==null&&Ca(Kn)&&(Kn=null),Qn!==null&&Ca(Qn)&&(Qn=null),Xn!==null&&Ca(Xn)&&(Xn=null),Ws.forEach(zp),qs.forEach(zp)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,Xc||(Xc=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,A1)))}function Ks(t){function e(i){return fs(i,t)}if(0<sa.length){fs(sa[0],t);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kn!==null&&fs(Kn,t),Qn!==null&&fs(Qn,t),Xn!==null&&fs(Xn,t),Ws.forEach(e),qs.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Yy(n),n.blockedOn===null&&Un.shift()}var Ai=Nn.ReactCurrentBatchConfig,Ya=!0;function S1(t,e,n,r){var i=oe,s=Ai.transition;Ai.transition=null;try{oe=1,ud(t,e,n,r)}finally{oe=i,Ai.transition=s}}function C1(t,e,n,r){var i=oe,s=Ai.transition;Ai.transition=null;try{oe=4,ud(t,e,n,r)}finally{oe=i,Ai.transition=s}}function ud(t,e,n,r){if(Ya){var i=Yc(t,e,n,r);if(i===null)oc(t,e,r,Ja,n),jp(t,r);else if(T1(i,t,e,n,r))r.stopPropagation();else if(jp(t,r),e&4&&-1<I1.indexOf(t)){for(;i!==null;){var s=To(i);if(s!==null&&qy(s),s=Yc(t,e,n,r),s===null&&oc(t,e,r,Ja,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else oc(t,e,r,null,n)}}var Ja=null;function Yc(t,e,n,r){if(Ja=null,t=sd(r),t=Ar(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ja=t,null}function Jy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f1()){case od:return 1;case Hy:return 4;case Qa:case p1:return 16;case Gy:return 536870912;default:return 16}default:return 16}}var Gn=null,cd=null,Ra=null;function Zy(){if(Ra)return Ra;var t,e=cd,n=e.length,r,i="value"in Gn?Gn.value:Gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ra=i.slice(t,1<r?1-r:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function Hp(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:Hp,this.isPropagationStopped=Hp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=Nt(Gi),Io=ve({},Gi,{view:0,detail:0}),R1=Nt(Io),Yu,Ju,ps,jl=ve({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(Yu=t.screenX-ps.screenX,Ju=t.screenY-ps.screenY):Ju=Yu=0,ps=t),Yu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),Gp=Nt(jl),P1=ve({},jl,{dataTransfer:0}),k1=Nt(P1),N1=ve({},Io,{relatedTarget:0}),Zu=Nt(N1),O1=ve({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),D1=Nt(O1),L1=ve({},Gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x1=Nt(L1),M1=ve({},Gi,{data:0}),$p=Nt(M1),V1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=U1[t])?!!e[t]:!1}function dd(){return F1}var B1=ve({},Io,{key:function(t){if(t.key){var e=V1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j1=Nt(B1),z1=ve({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=Nt(z1),H1=ve({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),G1=Nt(H1),$1=ve({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),W1=Nt($1),q1=ve({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K1=Nt(q1),Q1=[9,13,27,32],fd=An&&"CompositionEvent"in window,ks=null;An&&"documentMode"in document&&(ks=document.documentMode);var X1=An&&"TextEvent"in window&&!ks,ev=An&&(!fd||ks&&8<ks&&11>=ks),qp=" ",Kp=!1;function tv(t,e){switch(t){case"keyup":return Q1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ci=!1;function Y1(t,e){switch(t){case"compositionend":return nv(e);case"keypress":return e.which!==32?null:(Kp=!0,qp);case"textInput":return t=e.data,t===qp&&Kp?null:t;default:return null}}function J1(t,e){if(ci)return t==="compositionend"||!fd&&tv(t,e)?(t=Zy(),Ra=cd=Gn=null,ci=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ev&&e.locale!=="ko"?null:e.data;default:return null}}var Z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Z1[t.type]:e==="textarea"}function rv(t,e,n,r){xy(r),e=Za(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ns=null,Qs=null;function eI(t){pv(t,0)}function zl(t){var e=fi(t);if(Ry(e))return t}function tI(t,e){if(t==="change")return e}var iv=!1;if(An){var ec;if(An){var tc="oninput"in document;if(!tc){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),tc=typeof Xp.oninput=="function"}ec=tc}else ec=!1;iv=ec&&(!document.documentMode||9<document.documentMode)}function Yp(){Ns&&(Ns.detachEvent("onpropertychange",sv),Qs=Ns=null)}function sv(t){if(t.propertyName==="value"&&zl(Qs)){var e=[];rv(e,Qs,t,sd(t)),Uy(eI,e)}}function nI(t,e,n){t==="focusin"?(Yp(),Ns=e,Qs=n,Ns.attachEvent("onpropertychange",sv)):t==="focusout"&&Yp()}function rI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Qs)}function iI(t,e){if(t==="click")return zl(e)}function sI(t,e){if(t==="input"||t==="change")return zl(e)}function oI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:oI;function Xs(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lc.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function Jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,e){var n=Jp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jp(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function av(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aI(t){var e=av(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(r!==null&&pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zp(n,s);var o=Zp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lI=An&&"documentMode"in document&&11>=document.documentMode,hi=null,Jc=null,Os=null,Zc=!1;function em(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zc||hi==null||hi!==Wa(r)||(r=hi,"selectionStart"in r&&pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Xs(Os,r)||(Os=r,r=Za(Jc,"onSelect"),0<r.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hi)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var di={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},nc={},lv={};An&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Hl(t){if(nc[t])return nc[t];if(!di[t])return t;var e=di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lv)return nc[t]=e[n];return t}var uv=Hl("animationend"),cv=Hl("animationiteration"),hv=Hl("animationstart"),dv=Hl("transitionend"),fv=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){fv.set(t,e),qr(e,[t])}for(var rc=0;rc<tm.length;rc++){var ic=tm[rc],uI=ic.toLowerCase(),cI=ic[0].toUpperCase()+ic.slice(1);hr(uI,"on"+cI)}hr(uv,"onAnimationEnd");hr(cv,"onAnimationIteration");hr(hv,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(dv,"onTransitionEnd");Oi("onMouseEnter",["mouseout","mouseover"]);Oi("onMouseLeave",["mouseout","mouseover"]);Oi("onPointerEnter",["pointerout","pointerover"]);Oi("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));function nm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,u1(r,e,void 0,t),t.currentTarget=null}function pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;nm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;nm(i,l,h),s=u}}}if(Ka)throw t=Kc,Ka=!1,Kc=null,t}function de(t,e){var n=e[ih];n===void 0&&(n=e[ih]=new Set);var r=t+"__bubble";n.has(r)||(mv(e,t,2,!1),n.add(r))}function sc(t,e,n){var r=0;e&&(r|=4),mv(n,t,r,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function Ys(t){if(!t[la]){t[la]=!0,Iy.forEach(function(n){n!=="selectionchange"&&(hI.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,sc("selectionchange",!1,e))}}function mv(t,e,n,r){switch(Jy(e)){case 1:var i=S1;break;case 4:i=C1;break;default:i=ud}n=i.bind(null,e,n,t),i=void 0,!qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ar(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Uy(function(){var h=s,f=sd(n),p=[];e:{var v=fv.get(t);if(v!==void 0){var C=hd,R=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":C=j1;break;case"focusin":R="focus",C=Zu;break;case"focusout":R="blur",C=Zu;break;case"beforeblur":case"afterblur":C=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=k1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=G1;break;case uv:case cv:case hv:C=D1;break;case dv:C=W1;break;case"scroll":C=R1;break;case"wheel":C=K1;break;case"copy":case"cut":case"paste":C=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Wp}var k=(e&4)!==0,L=!k&&t==="scroll",I=k?v!==null?v+"Capture":null:v;k=[];for(var y=h,E;y!==null;){E=y;var O=E.stateNode;if(E.tag===5&&O!==null&&(E=O,I!==null&&(O=$s(y,I),O!=null&&k.push(Js(y,O,E)))),L)break;y=y.return}0<k.length&&(v=new C(v,R,null,n,f),p.push({event:v,listeners:k}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",v&&n!==$c&&(R=n.relatedTarget||n.fromElement)&&(Ar(R)||R[Sn]))break e;if((C||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,C?(R=n.relatedTarget||n.toElement,C=h,R=R?Ar(R):null,R!==null&&(L=Kr(R),R!==L||R.tag!==5&&R.tag!==6)&&(R=null)):(C=null,R=h),C!==R)){if(k=Gp,O="onMouseLeave",I="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=Wp,O="onPointerLeave",I="onPointerEnter",y="pointer"),L=C==null?v:fi(C),E=R==null?v:fi(R),v=new k(O,y+"leave",C,n,f),v.target=L,v.relatedTarget=E,O=null,Ar(f)===h&&(k=new k(I,y+"enter",R,n,f),k.target=E,k.relatedTarget=L,O=k),L=O,C&&R)t:{for(k=C,I=R,y=0,E=k;E;E=si(E))y++;for(E=0,O=I;O;O=si(O))E++;for(;0<y-E;)k=si(k),y--;for(;0<E-y;)I=si(I),E--;for(;y--;){if(k===I||I!==null&&k===I.alternate)break t;k=si(k),I=si(I)}k=null}else k=null;C!==null&&rm(p,v,C,k,!1),R!==null&&L!==null&&rm(p,L,R,k,!0)}}e:{if(v=h?fi(h):window,C=v.nodeName&&v.nodeName.toLowerCase(),C==="select"||C==="input"&&v.type==="file")var b=tI;else if(Qp(v))if(iv)b=sI;else{b=rI;var B=nI}else(C=v.nodeName)&&C.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(b=iI);if(b&&(b=b(t,h))){rv(p,b,n,f);break e}B&&B(t,v,h),t==="focusout"&&(B=v._wrapperState)&&B.controlled&&v.type==="number"&&Bc(v,"number",v.value)}switch(B=h?fi(h):window,t){case"focusin":(Qp(B)||B.contentEditable==="true")&&(hi=B,Jc=h,Os=null);break;case"focusout":Os=Jc=hi=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,em(p,n,f);break;case"selectionchange":if(lI)break;case"keydown":case"keyup":em(p,n,f)}var w;if(fd)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else ci?tv(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(ev&&n.locale!=="ko"&&(ci||m!=="onCompositionStart"?m==="onCompositionEnd"&&ci&&(w=Zy()):(Gn=f,cd="value"in Gn?Gn.value:Gn.textContent,ci=!0)),B=Za(h,m),0<B.length&&(m=new $p(m,t,null,n,f),p.push({event:m,listeners:B}),w?m.data=w:(w=nv(n),w!==null&&(m.data=w)))),(w=X1?Y1(t,n):J1(t,n))&&(h=Za(h,"onBeforeInput"),0<h.length&&(f=new $p("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=w))}pv(p,e)})}function Js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Za(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$s(t,n),s!=null&&r.unshift(Js(t,s,i)),s=$s(t,e),s!=null&&r.push(Js(t,s,i))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=$s(n,s),u!=null&&o.unshift(Js(n,u,l))):i||(u=$s(n,s),u!=null&&o.push(Js(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dI=/\r\n?/g,fI=/\u0000|\uFFFD/g;function im(t){return(typeof t=="string"?t:""+t).replace(dI,`
`).replace(fI,"")}function ua(t,e,n){if(e=im(e),im(t)!==e&&n)throw Error(U(425))}function el(){}var eh=null,th=null;function nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rh=typeof setTimeout=="function"?setTimeout:void 0,pI=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,mI=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(t){return sm.resolve(null).then(t).catch(gI)}:rh;function gI(t){setTimeout(function(){throw t})}function ac(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ks(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ks(e)}function Yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $i=Math.random().toString(36).slice(2),tn="__reactFiber$"+$i,Zs="__reactProps$"+$i,Sn="__reactContainer$"+$i,ih="__reactEvents$"+$i,yI="__reactListeners$"+$i,vI="__reactHandles$"+$i;function Ar(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=om(t);t!==null;){if(n=t[tn])return n;t=om(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[tn]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Gl(t){return t[Zs]||null}var sh=[],pi=-1;function dr(t){return{current:t}}function fe(t){0>pi||(t.current=sh[pi],sh[pi]=null,pi--)}function ue(t,e){pi++,sh[pi]=t.current,t.current=e}var ar={},nt=dr(ar),yt=dr(!1),xr=ar;function Di(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function tl(){fe(yt),fe(nt)}function am(t,e,n){if(nt.current!==ar)throw Error(U(168));ue(nt,e),ue(yt,n)}function gv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,n1(t)||"Unknown",i));return ve({},n,r)}function nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,xr=nt.current,ue(nt,t),ue(yt,yt.current),!0}function lm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=gv(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,fe(yt),fe(nt),ue(nt,t)):fe(yt),ue(yt,n)}var pn=null,$l=!1,lc=!1;function yv(t){pn===null?pn=[t]:pn.push(t)}function _I(t){$l=!0,yv(t)}function fr(){if(!lc&&pn!==null){lc=!0;var t=0,e=oe;try{var n=pn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,$l=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),zy(od,fr),i}finally{oe=e,lc=!1}}return null}var mi=[],gi=0,rl=null,il=0,Ot=[],Dt=0,Mr=null,mn=1,gn="";function wr(t,e){mi[gi++]=il,mi[gi++]=rl,rl=t,il=e}function vv(t,e,n){Ot[Dt++]=mn,Ot[Dt++]=gn,Ot[Dt++]=Mr,Mr=t;var r=mn;t=gn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Wt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function md(t){t.return!==null&&(wr(t,1),vv(t,1,0))}function gd(t){for(;t===rl;)rl=mi[--gi],mi[gi]=null,il=mi[--gi],mi[gi]=null;for(;t===Mr;)Mr=Ot[--Dt],Ot[Dt]=null,gn=Ot[--Dt],Ot[Dt]=null,mn=Ot[--Dt],Ot[Dt]=null}var Ct=null,At=null,me=!1,zt=null;function _v(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,At=Yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,At=null,!0):!1;default:return!1}}function oh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ah(t){if(me){var e=At;if(e){var n=e;if(!um(t,e)){if(oh(t))throw Error(U(418));e=Yn(n.nextSibling);var r=Ct;e&&um(t,e)?_v(r,n):(t.flags=t.flags&-4097|2,me=!1,Ct=t)}}else{if(oh(t))throw Error(U(418));t.flags=t.flags&-4097|2,me=!1,Ct=t}}}function cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function ca(t){if(t!==Ct)return!1;if(!me)return cm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nh(t.type,t.memoizedProps)),e&&(e=At)){if(oh(t))throw Ev(),Error(U(418));for(;e;)_v(t,e),e=Yn(e.nextSibling)}if(cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=Yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Ct?Yn(t.stateNode.nextSibling):null;return!0}function Ev(){for(var t=At;t;)t=Yn(t.nextSibling)}function Li(){At=Ct=null,me=!1}function yd(t){zt===null?zt=[t]:zt.push(t)}var EI=Nn.ReactCurrentBatchConfig;function ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hm(t){var e=t._init;return e(t._payload)}function wv(t){function e(I,y){if(t){var E=I.deletions;E===null?(I.deletions=[y],I.flags|=16):E.push(y)}}function n(I,y){if(!t)return null;for(;y!==null;)e(I,y),y=y.sibling;return null}function r(I,y){for(I=new Map;y!==null;)y.key!==null?I.set(y.key,y):I.set(y.index,y),y=y.sibling;return I}function i(I,y){return I=tr(I,y),I.index=0,I.sibling=null,I}function s(I,y,E){return I.index=E,t?(E=I.alternate,E!==null?(E=E.index,E<y?(I.flags|=2,y):E):(I.flags|=2,y)):(I.flags|=1048576,y)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,y,E,O){return y===null||y.tag!==6?(y=mc(E,I.mode,O),y.return=I,y):(y=i(y,E),y.return=I,y)}function u(I,y,E,O){var b=E.type;return b===ui?f(I,y,E.props.children,O,E.key):y!==null&&(y.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vn&&hm(b)===y.type)?(O=i(y,E.props),O.ref=ms(I,y,E),O.return=I,O):(O=Ma(E.type,E.key,E.props,null,I.mode,O),O.ref=ms(I,y,E),O.return=I,O)}function h(I,y,E,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=gc(E,I.mode,O),y.return=I,y):(y=i(y,E.children||[]),y.return=I,y)}function f(I,y,E,O,b){return y===null||y.tag!==7?(y=Nr(E,I.mode,O,b),y.return=I,y):(y=i(y,E),y.return=I,y)}function p(I,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=mc(""+y,I.mode,E),y.return=I,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ea:return E=Ma(y.type,y.key,y.props,null,I.mode,E),E.ref=ms(I,null,y),E.return=I,E;case li:return y=gc(y,I.mode,E),y.return=I,y;case Vn:var O=y._init;return p(I,O(y._payload),E)}if(ws(y)||cs(y))return y=Nr(y,I.mode,E,null),y.return=I,y;ha(I,y)}return null}function v(I,y,E,O){var b=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return b!==null?null:l(I,y,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ea:return E.key===b?u(I,y,E,O):null;case li:return E.key===b?h(I,y,E,O):null;case Vn:return b=E._init,v(I,y,b(E._payload),O)}if(ws(E)||cs(E))return b!==null?null:f(I,y,E,O,null);ha(I,E)}return null}function C(I,y,E,O,b){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(E)||null,l(y,I,""+O,b);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ea:return I=I.get(O.key===null?E:O.key)||null,u(y,I,O,b);case li:return I=I.get(O.key===null?E:O.key)||null,h(y,I,O,b);case Vn:var B=O._init;return C(I,y,E,B(O._payload),b)}if(ws(O)||cs(O))return I=I.get(E)||null,f(y,I,O,b,null);ha(y,O)}return null}function R(I,y,E,O){for(var b=null,B=null,w=y,m=y=0,_=null;w!==null&&m<E.length;m++){w.index>m?(_=w,w=null):_=w.sibling;var T=v(I,w,E[m],O);if(T===null){w===null&&(w=_);break}t&&w&&T.alternate===null&&e(I,w),y=s(T,y,m),B===null?b=T:B.sibling=T,B=T,w=_}if(m===E.length)return n(I,w),me&&wr(I,m),b;if(w===null){for(;m<E.length;m++)w=p(I,E[m],O),w!==null&&(y=s(w,y,m),B===null?b=w:B.sibling=w,B=w);return me&&wr(I,m),b}for(w=r(I,w);m<E.length;m++)_=C(w,I,m,E[m],O),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?m:_.key),y=s(_,y,m),B===null?b=_:B.sibling=_,B=_);return t&&w.forEach(function(S){return e(I,S)}),me&&wr(I,m),b}function k(I,y,E,O){var b=cs(E);if(typeof b!="function")throw Error(U(150));if(E=b.call(E),E==null)throw Error(U(151));for(var B=b=null,w=y,m=y=0,_=null,T=E.next();w!==null&&!T.done;m++,T=E.next()){w.index>m?(_=w,w=null):_=w.sibling;var S=v(I,w,T.value,O);if(S===null){w===null&&(w=_);break}t&&w&&S.alternate===null&&e(I,w),y=s(S,y,m),B===null?b=S:B.sibling=S,B=S,w=_}if(T.done)return n(I,w),me&&wr(I,m),b;if(w===null){for(;!T.done;m++,T=E.next())T=p(I,T.value,O),T!==null&&(y=s(T,y,m),B===null?b=T:B.sibling=T,B=T);return me&&wr(I,m),b}for(w=r(I,w);!T.done;m++,T=E.next())T=C(w,I,m,T.value,O),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?m:T.key),y=s(T,y,m),B===null?b=T:B.sibling=T,B=T);return t&&w.forEach(function(P){return e(I,P)}),me&&wr(I,m),b}function L(I,y,E,O){if(typeof E=="object"&&E!==null&&E.type===ui&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ea:e:{for(var b=E.key,B=y;B!==null;){if(B.key===b){if(b=E.type,b===ui){if(B.tag===7){n(I,B.sibling),y=i(B,E.props.children),y.return=I,I=y;break e}}else if(B.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vn&&hm(b)===B.type){n(I,B.sibling),y=i(B,E.props),y.ref=ms(I,B,E),y.return=I,I=y;break e}n(I,B);break}else e(I,B);B=B.sibling}E.type===ui?(y=Nr(E.props.children,I.mode,O,E.key),y.return=I,I=y):(O=Ma(E.type,E.key,E.props,null,I.mode,O),O.ref=ms(I,y,E),O.return=I,I=O)}return o(I);case li:e:{for(B=E.key;y!==null;){if(y.key===B)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(I,y.sibling),y=i(y,E.children||[]),y.return=I,I=y;break e}else{n(I,y);break}else e(I,y);y=y.sibling}y=gc(E,I.mode,O),y.return=I,I=y}return o(I);case Vn:return B=E._init,L(I,y,B(E._payload),O)}if(ws(E))return R(I,y,E,O);if(cs(E))return k(I,y,E,O);ha(I,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(I,y.sibling),y=i(y,E),y.return=I,I=y):(n(I,y),y=mc(E,I.mode,O),y.return=I,I=y),o(I)):n(I,y)}return L}var xi=wv(!0),Iv=wv(!1),sl=dr(null),ol=null,yi=null,vd=null;function _d(){vd=yi=ol=null}function Ed(t){var e=sl.current;fe(sl),t._currentValue=e}function lh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Si(t,e){ol=t,vd=yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},yi===null){if(ol===null)throw Error(U(308));yi=t,ol.dependencies={lanes:0,firstContext:t}}else yi=yi.next=t;return e}var Sr=null;function wd(t){Sr===null?Sr=[t]:Sr.push(t)}function Tv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bn=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,wd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}function dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function al(t,e,n,r){var i=t.updateQueue;bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var v=l.lane,C=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,k=l;switch(v=e,C=n,k.tag){case 1:if(R=k.payload,typeof R=="function"){p=R.call(C,p,v);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,v=typeof R=="function"?R.call(C,p,v):R,v==null)break e;p=ve({},p,v);break e;case 2:bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else C={eventTime:C,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=C,u=p):f=f.next=C,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=p}}function fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Ao={},sn=dr(Ao),eo=dr(Ao),to=dr(Ao);function Cr(t){if(t===Ao)throw Error(U(174));return t}function Td(t,e){switch(ue(to,e),ue(eo,t),ue(sn,Ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zc(e,t)}fe(sn),ue(sn,e)}function Mi(){fe(sn),fe(eo),fe(to)}function Sv(t){Cr(to.current);var e=Cr(sn.current),n=zc(e,t.type);e!==n&&(ue(eo,t),ue(sn,n))}function Ad(t){eo.current===t&&(fe(sn),fe(eo))}var ge=dr(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uc=[];function Sd(){for(var t=0;t<uc.length;t++)uc[t]._workInProgressVersionPrimary=null;uc.length=0}var Na=Nn.ReactCurrentDispatcher,cc=Nn.ReactCurrentBatchConfig,Vr=0,ye=null,Oe=null,xe=null,ul=!1,Ds=!1,no=0,wI=0;function Xe(){throw Error(U(321))}function Cd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function Rd(t,e,n,r,i,s){if(Vr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?SI:CI,t=n(r,i),Ds){s=0;do{if(Ds=!1,no=0,25<=s)throw Error(U(301));s+=1,xe=Oe=null,e.updateQueue=null,Na.current=RI,t=n(r,i)}while(Ds)}if(Na.current=cl,e=Oe!==null&&Oe.next!==null,Vr=0,xe=Oe=ye=null,ul=!1,e)throw Error(U(300));return t}function Pd(){var t=no!==0;return no=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ye.memoizedState=xe=t:xe=xe.next=t,xe}function bt(){if(Oe===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=xe===null?ye.memoizedState:xe.next;if(e!==null)xe=e,Oe=t;else{if(t===null)throw Error(U(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},xe===null?ye.memoizedState=xe=t:xe=xe.next=t}return xe}function ro(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Vr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ye.lanes|=f,br|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Kt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dc(t){var e=bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Cv(){}function Rv(t,e){var n=ye,r=bt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,kd(Nv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,io(9,kv.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(U(349));Vr&30||Pv(n,e,i)}return i}function Pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kv(t,e,n,r){e.value=n,e.getSnapshot=r,Ov(e)&&Dv(t)}function Nv(t,e,n){return n(function(){Ov(e)&&Dv(t)})}function Ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function Dv(t){var e=Cn(t,1);e!==null&&qt(e,t,1,-1)}function pm(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:t},e.queue=t,t=t.dispatch=AI.bind(null,ye,t),[e.memoizedState,t]}function io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Lv(){return bt().memoizedState}function Oa(t,e,n,r){var i=en();ye.flags|=t,i.memoizedState=io(1|e,n,void 0,r===void 0?null:r)}function Wl(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Cd(r,o.deps)){i.memoizedState=io(e,n,s,r);return}}ye.flags|=t,i.memoizedState=io(1|e,n,s,r)}function mm(t,e){return Oa(8390656,8,t,e)}function kd(t,e){return Wl(2048,8,t,e)}function xv(t,e){return Wl(4,2,t,e)}function Mv(t,e){return Wl(4,4,t,e)}function Vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bv(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,Vv.bind(null,e,t),n)}function Nd(){}function Uv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Bv(t,e,n){return Vr&21?(Kt(n,e)||(n=$y(),ye.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function II(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=cc.transition;cc.transition={};try{t(!1),e()}finally{oe=n,cc.transition=r}}function jv(){return bt().memoizedState}function TI(t,e,n){var r=er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zv(t))Hv(e,n);else if(n=Tv(t,e,n,r),n!==null){var i=ct();qt(n,t,r,i),Gv(n,e,r)}}function AI(t,e,n){var r=er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zv(t))Hv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,o)){var u=e.interleaved;u===null?(i.next=i,wd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Tv(t,e,i,r),n!==null&&(i=ct(),qt(n,t,r,i),Gv(n,e,r))}}function zv(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function Hv(t,e){Ds=ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}var cl={readContext:Vt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},SI={readContext:Vt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:mm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,Vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TI.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:pm,useDebugValue:Nd,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=pm(!1),e=t[0];return t=II.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=en();if(me){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ve===null)throw Error(U(349));Vr&30||Pv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,mm(Nv.bind(null,r,s,t),[t]),r.flags|=2048,io(9,kv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Ve.identifierPrefix;if(me){var n=gn,r=mn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=no++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CI={readContext:Vt,useCallback:Uv,useContext:Vt,useEffect:kd,useImperativeHandle:bv,useInsertionEffect:xv,useLayoutEffect:Mv,useMemo:Fv,useReducer:hc,useRef:Lv,useState:function(){return hc(ro)},useDebugValue:Nd,useDeferredValue:function(t){var e=bt();return Bv(e,Oe.memoizedState,t)},useTransition:function(){var t=hc(ro)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:jv,unstable_isNewReconciler:!1},RI={readContext:Vt,useCallback:Uv,useContext:Vt,useEffect:kd,useImperativeHandle:bv,useInsertionEffect:xv,useLayoutEffect:Mv,useMemo:Fv,useReducer:dc,useRef:Lv,useState:function(){return dc(ro)},useDebugValue:Nd,useDeferredValue:function(t){var e=bt();return Oe===null?e.memoizedState=t:Bv(e,Oe.memoizedState,t)},useTransition:function(){var t=dc(ro)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:jv,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function uh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=er(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(qt(e,t,i,r),ka(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=er(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(qt(e,t,i,r),ka(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=er(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jn(t,i,r),e!==null&&(qt(e,t,r,n),ka(e,t,r))}};function gm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,s):!0}function $v(t,e,n){var r=!1,i=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=vt(e)?xr:nt.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ym(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function ch(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Id(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=vt(e)?xr:nt.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ql.enqueueReplaceState(i,i.state,null),al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vi(t,e){try{var n="",r=e;do n+=t1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PI=typeof WeakMap=="function"?WeakMap:Map;function Wv(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dl||(dl=!0,wh=r),hh(t,e)},n}function qv(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hh(t,e),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zI.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Em(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,Jn(n,e,1))),n.lanes|=1),t)}var kI=Nn.ReactCurrentOwner,gt=!1;function lt(t,e,n,r){e.child=t===null?Iv(e,null,n,r):xi(e,t.child,n,r)}function wm(t,e,n,r,i){n=n.render;var s=e.ref;return Si(e,i),r=Rd(t,e,n,r,s,i),n=Pd(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(me&&n&&md(e),e.flags|=1,lt(t,e,r,i),e.child)}function Im(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kv(t,e,s,r,i)):(t=Ma(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&t.ref===e.ref)return Rn(t,e,i)}return e.flags|=1,t=tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Kv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xs(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Rn(t,e,i)}return dh(t,e,n,r,i)}function Qv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(_i,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(_i,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(_i,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(_i,Tt),Tt|=r;return lt(t,e,i,n),e.child}function Xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dh(t,e,n,r,i){var s=vt(n)?xr:nt.current;return s=Di(e,s),Si(e,i),n=Rd(t,e,n,r,s,i),r=Pd(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(me&&r&&md(e),e.flags|=1,lt(t,e,n,i),e.child)}function Tm(t,e,n,r,i){if(vt(n)){var s=!0;nl(e)}else s=!1;if(Si(e,i),e.stateNode===null)Da(t,e),$v(e,n,r),ch(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Vt(h):(h=vt(n)?xr:nt.current,h=Di(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&ym(e,o,r,h),bn=!1;var v=e.memoizedState;o.state=v,al(e,r,o,i),u=e.memoizedState,l!==r||v!==u||yt.current||bn?(typeof f=="function"&&(uh(e,n,f,r),u=e.memoizedState),(l=bn||gm(e,n,l,r,v,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Av(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Bt(e.type,l),o.props=h,p=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=vt(n)?xr:nt.current,u=Di(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||v!==u)&&ym(e,o,r,u),bn=!1,v=e.memoizedState,o.state=v,al(e,r,o,i);var R=e.memoizedState;l!==p||v!==R||yt.current||bn?(typeof C=="function"&&(uh(e,n,C,r),R=e.memoizedState),(h=bn||gm(e,n,h,r,v,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return fh(t,e,n,r,s,i)}function fh(t,e,n,r,i,s){Xv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&lm(e,n,!1),Rn(t,e,s);r=e.stateNode,kI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xi(e,t.child,null,s),e.child=xi(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&lm(e,n,!0),e.child}function Yv(t){var e=t.stateNode;e.pendingContext?am(t,e.pendingContext,e.pendingContext!==e.context):e.context&&am(t,e.context,!1),Td(t,e.containerInfo)}function Am(t,e,n,r,i){return Li(),yd(i),e.flags|=256,lt(t,e,n,r),e.child}var ph={dehydrated:null,treeContext:null,retryLane:0};function mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jv(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ge,i&1),t===null)return ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xl(o,r,0,null),t=Nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mh(n),e.memoizedState=ph,t):Od(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return NI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=tr(l,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ph,r}return s=t.child,t=s.sibling,r=tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Od(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,r){return r!==null&&yd(r),xi(e,t.child,null,n),t=Od(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fc(Error(U(422))),da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xl({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xi(e,t.child,null,o),e.child.memoizedState=mh(o),e.memoizedState=ph,s);if(!(e.mode&1))return da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=fc(s,r,void 0),da(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),qt(r,t,i,-1))}return bd(),r=fc(Error(U(421))),da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=Yn(i.nextSibling),Ct=e,me=!0,zt=null,t!==null&&(Ot[Dt++]=mn,Ot[Dt++]=gn,Ot[Dt++]=Mr,mn=t.id,gn=t.overflow,Mr=e),e=Od(e,r.children),e.flags|=4096,e)}function Sm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lh(t.return,e,n)}function pc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,n,e);else if(t.tag===19)Sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pc(e,!0,n,null,s);break;case"together":pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Da(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OI(t,e,n){switch(e.tag){case 3:Yv(e),Li();break;case 5:Sv(e);break;case 1:vt(e.type)&&nl(e);break;case 4:Td(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(sl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?Jv(t,e,n):(ue(ge,ge.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Zv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,Qv(t,e,n)}return Rn(t,e,n)}var e0,gh,t0,n0;e0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gh=function(){};t0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Cr(sn.current);var s=null;switch(n){case"input":i=Uc(t,i),r=Uc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=jc(t,i),r=jc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=el)}Hc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Hs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Hs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};n0=function(t,e,n,r){n!==r&&(e.flags|=4)};function gs(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DI(t,e,n){var r=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return vt(e.type)&&tl(),Ye(e),null;case 3:return r=e.stateNode,Mi(),fe(yt),fe(nt),Sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(Ah(zt),zt=null))),gh(t,e),Ye(e),null;case 5:Ad(e);var i=Cr(to.current);if(n=e.type,t!==null&&e.stateNode!=null)t0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Ye(e),null}if(t=Cr(sn.current),ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[Zs]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Ts.length;i++)de(Ts[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":xp(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Vp(r,s),de("invalid",r)}Hc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",""+l]):Hs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":ta(r),Mp(r,s,!0);break;case"textarea":ta(r),bp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=el)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ny(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[Zs]=r,e0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ts.length;i++)de(Ts[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":xp(t,r),i=Uc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":Vp(t,r),i=jc(t,r),de("invalid",t);break;default:i=r}Hc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ly(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Oy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Gs(t,u):typeof u=="number"&&Gs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&td(t,s,u,o))}switch(n){case"input":ta(t),Mp(t,r,!1);break;case"textarea":ta(t),bp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wi(t,!!r.multiple,s,!1):r.defaultValue!=null&&wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)n0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Cr(to.current),Cr(sn.current),ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return Ye(e),null;case 13:if(fe(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&At!==null&&e.mode&1&&!(e.flags&128))Ev(),Li(),e.flags|=98560,s=!1;else if(s=ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[tn]=e}else Li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else zt!==null&&(Ah(zt),zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?De===0&&(De=3):bd())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Mi(),gh(t,e),t===null&&Ys(e.stateNode.containerInfo),Ye(e),null;case 10:return Ed(e.type._context),Ye(e),null;case 17:return vt(e.type)&&tl(),Ye(e),null;case 19:if(fe(ge),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gs(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ll(t),o!==null){for(e.flags|=128,gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>bi&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ye(e),null}else 2*Se()-s.renderingStartTime>bi&&n!==1073741824&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Vd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function LI(t,e){switch(gd(e),e.tag){case 1:return vt(e.type)&&tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mi(),fe(yt),fe(nt),Sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ad(e),null;case 13:if(fe(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ge),null;case 4:return Mi(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var fa=!1,et=!1,xI=typeof WeakSet=="function"?WeakSet:Set,H=null;function vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function yh(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var Cm=!1;function MI(t,e){if(eh=Ya,t=av(),pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,v=null;t:for(;;){for(var C;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(C=p.firstChild)!==null;)v=p,p=C;for(;;){if(p===t)break t;if(v===n&&++h===i&&(l=o),v===s&&++f===r&&(u=o),(C=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(th={focusedElem:t,selectionRange:n},Ya=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,L=R.memoizedState,I=e.stateNode,y=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:Bt(e.type,k),L);I.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Ee(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=Cm,Cm=!1,R}function Ls(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yh(e,n,s)}i=i.next}while(i!==r)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r0(t){var e=t.alternate;e!==null&&(t.alternate=null,r0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[Zs],delete e[ih],delete e[yI],delete e[vI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i0(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=el));else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}function Eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}var Be=null,jt=!1;function xn(t,e,n){for(n=n.child;n!==null;)s0(t,e,n),n=n.sibling}function s0(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:et||vi(n,e);case 6:var r=Be,i=jt;Be=null,xn(t,e,n),Be=r,jt=i,Be!==null&&(jt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(jt?(t=Be,n=n.stateNode,t.nodeType===8?ac(t.parentNode,n):t.nodeType===1&&ac(t,n),Ks(t)):ac(Be,n.stateNode));break;case 4:r=Be,i=jt,Be=n.stateNode.containerInfo,jt=!0,xn(t,e,n),Be=r,jt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yh(n,e,o),i=i.next}while(i!==r)}xn(t,e,n);break;case 1:if(!et&&(vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ee(n,e,l)}xn(t,e,n);break;case 21:xn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,xn(t,e,n),et=r):xn(t,e,n);break;default:xn(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xI),e.forEach(function(r){var i=GI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,jt=!1;break e;case 3:Be=l.stateNode.containerInfo,jt=!0;break e;case 4:Be=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if(Be===null)throw Error(U(160));s0(s,o,i),Be=null,jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ee(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o0(e,t),e=e.sibling}function o0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Zt(t),r&4){try{Ls(3,t,t.return),Kl(3,t)}catch(k){Ee(t,t.return,k)}try{Ls(5,t,t.return)}catch(k){Ee(t,t.return,k)}}break;case 1:Ft(e,t),Zt(t),r&512&&n!==null&&vi(n,n.return);break;case 5:if(Ft(e,t),Zt(t),r&512&&n!==null&&vi(n,n.return),t.flags&32){var i=t.stateNode;try{Gs(i,"")}catch(k){Ee(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Py(i,s),Gc(l,o);var h=Gc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Ly(i,p):f==="dangerouslySetInnerHTML"?Oy(i,p):f==="children"?Gs(i,p):td(i,f,p,h)}switch(l){case"input":Fc(i,s);break;case"textarea":ky(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?wi(i,!!s.multiple,C,!1):v!==!!s.multiple&&(s.defaultValue!=null?wi(i,!!s.multiple,s.defaultValue,!0):wi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zs]=s}catch(k){Ee(t,t.return,k)}}break;case 6:if(Ft(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ee(t,t.return,k)}}break;case 3:if(Ft(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ks(e.containerInfo)}catch(k){Ee(t,t.return,k)}break;case 4:Ft(e,t),Zt(t);break;case 13:Ft(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xd=Se())),r&4&&Pm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(et=(h=et)||f,Ft(e,t),et=h):Ft(e,t),Zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(v=H,C=v.child,v.tag){case 0:case 11:case 14:case 15:Ls(4,v,v.return);break;case 1:vi(v,v.return);var R=v.stateNode;if(typeof R.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(k){Ee(r,n,k)}}break;case 5:vi(v,v.return);break;case 22:if(v.memoizedState!==null){Nm(p);continue}}C!==null?(C.return=v,H=C):Nm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Dy("display",o))}catch(k){Ee(t,t.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(k){Ee(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ft(e,t),Zt(t),r&4&&Pm(t);break;case 21:break;default:Ft(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gs(i,""),r.flags&=-33);var s=Rm(t);Eh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rm(t);_h(t,l,o);break;default:throw Error(U(161))}}catch(u){Ee(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VI(t,e,n){H=t,a0(t)}function a0(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=fa;var h=et;if(fa=o,(et=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Om(i):u!==null?(u.return=o,H=u):Om(i);for(;s!==null;)H=s,a0(s),s=s.sibling;H=i,fa=l,et=h}km(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):km(t)}}function km(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||Kl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ks(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}et||e.flags&512&&vh(e)}catch(v){Ee(e,e.return,v)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Nm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Om(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(u){Ee(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ee(e,i,u)}}var s=e.return;try{vh(e)}catch(u){Ee(e,s,u)}break;case 5:var o=e.return;try{vh(e)}catch(u){Ee(e,o,u)}}}catch(u){Ee(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var bI=Math.ceil,hl=Nn.ReactCurrentDispatcher,Dd=Nn.ReactCurrentOwner,xt=Nn.ReactCurrentBatchConfig,ne=0,Ve=null,Pe=null,Ge=0,Tt=0,_i=dr(0),De=0,so=null,br=0,Ql=0,Ld=0,xs=null,mt=null,xd=0,bi=1/0,fn=null,dl=!1,wh=null,Zn=null,pa=!1,$n=null,fl=0,Ms=0,Ih=null,La=-1,xa=0;function ct(){return ne&6?Se():La!==-1?La:La=Se()}function er(t){return t.mode&1?ne&2&&Ge!==0?Ge&-Ge:EI.transition!==null?(xa===0&&(xa=$y()),xa):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Jy(t.type)),t):1}function qt(t,e,n,r){if(50<Ms)throw Ms=0,Ih=null,Error(U(185));wo(t,n,r),(!(ne&2)||t!==Ve)&&(t===Ve&&(!(ne&2)&&(Ql|=n),De===4&&Fn(t,Ge)),_t(t,r),n===1&&ne===0&&!(e.mode&1)&&(bi=Se()+500,$l&&fr()))}function _t(t,e){var n=t.callbackNode;E1(t,e);var r=Xa(t,t===Ve?Ge:0);if(r===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?_I(Dm.bind(null,t)):yv(Dm.bind(null,t)),mI(function(){!(ne&6)&&fr()}),n=null;else{switch(Wy(r)){case 1:n=od;break;case 4:n=Hy;break;case 16:n=Qa;break;case 536870912:n=Gy;break;default:n=Qa}n=m0(n,l0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l0(t,e){if(La=-1,xa=0,ne&6)throw Error(U(327));var n=t.callbackNode;if(Ci()&&t.callbackNode!==n)return null;var r=Xa(t,t===Ve?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pl(t,r);else{e=r;var i=ne;ne|=2;var s=c0();(Ve!==t||Ge!==e)&&(fn=null,bi=Se()+500,kr(t,e));do try{BI();break}catch(l){u0(t,l)}while(!0);_d(),hl.current=s,ne=i,Pe!==null?e=0:(Ve=null,Ge=0,e=De)}if(e!==0){if(e===2&&(i=Qc(t),i!==0&&(r=i,e=Th(t,i))),e===1)throw n=so,kr(t,0),Fn(t,r),_t(t,Se()),n;if(e===6)Fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!UI(i)&&(e=pl(t,r),e===2&&(s=Qc(t),s!==0&&(r=s,e=Th(t,s))),e===1))throw n=so,kr(t,0),Fn(t,r),_t(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ir(t,mt,fn);break;case 3:if(Fn(t,r),(r&130023424)===r&&(e=xd+500-Se(),10<e)){if(Xa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rh(Ir.bind(null,t,mt,fn),e);break}Ir(t,mt,fn);break;case 4:if(Fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bI(r/1960))-r,10<r){t.timeoutHandle=rh(Ir.bind(null,t,mt,fn),r);break}Ir(t,mt,fn);break;case 5:Ir(t,mt,fn);break;default:throw Error(U(329))}}}return _t(t,Se()),t.callbackNode===n?l0.bind(null,t):null}function Th(t,e){var n=xs;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=pl(t,e),t!==2&&(e=mt,mt=n,e!==null&&Ah(e)),t}function Ah(t){mt===null?mt=t:mt.push.apply(mt,t)}function UI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fn(t,e){for(e&=~Ld,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function Dm(t){if(ne&6)throw Error(U(327));Ci();var e=Xa(t,0);if(!(e&1))return _t(t,Se()),null;var n=pl(t,e);if(t.tag!==0&&n===2){var r=Qc(t);r!==0&&(e=r,n=Th(t,r))}if(n===1)throw n=so,kr(t,0),Fn(t,e),_t(t,Se()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,mt,fn),_t(t,Se()),null}function Md(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(bi=Se()+500,$l&&fr())}}function Ur(t){$n!==null&&$n.tag===0&&!(ne&6)&&Ci();var e=ne;ne|=1;var n=xt.transition,r=oe;try{if(xt.transition=null,oe=1,t)return t()}finally{oe=r,xt.transition=n,ne=e,!(ne&6)&&fr()}}function Vd(){Tt=_i.current,fe(_i)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pI(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:Mi(),fe(yt),fe(nt),Sd();break;case 5:Ad(r);break;case 4:Mi();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:Ed(r.type._context);break;case 22:case 23:Vd()}n=n.return}if(Ve=t,Pe=t=tr(t.current,null),Ge=Tt=e,De=0,so=null,Ld=Ql=br=0,mt=xs=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sr=null}return t}function u0(t,e){do{var n=Pe;try{if(_d(),Na.current=cl,ul){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ul=!1}if(Vr=0,xe=Oe=ye=null,Ds=!1,no=0,Dd.current=null,n===null||n.return===null){De=1,so=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=_m(o);if(C!==null){C.flags&=-257,Em(C,o,l,s,e),C.mode&1&&vm(s,h,e),e=C,u=h;var R=e.updateQueue;if(R===null){var k=new Set;k.add(u),e.updateQueue=k}else R.add(u);break e}else{if(!(e&1)){vm(s,h,e),bd();break e}u=Error(U(426))}}else if(me&&l.mode&1){var L=_m(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Em(L,o,l,s,e),yd(Vi(u,l));break e}}s=u=Vi(u,l),De!==4&&(De=2),xs===null?xs=[s]:xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Wv(s,u,e);dm(s,I);break e;case 1:l=u;var y=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Zn===null||!Zn.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=qv(s,l,e);dm(s,O);break e}}s=s.return}while(s!==null)}d0(n)}catch(b){e=b,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function c0(){var t=hl.current;return hl.current=cl,t===null?cl:t}function bd(){(De===0||De===3||De===2)&&(De=4),Ve===null||!(br&268435455)&&!(Ql&268435455)||Fn(Ve,Ge)}function pl(t,e){var n=ne;ne|=2;var r=c0();(Ve!==t||Ge!==e)&&(fn=null,kr(t,e));do try{FI();break}catch(i){u0(t,i)}while(!0);if(_d(),ne=n,hl.current=r,Pe!==null)throw Error(U(261));return Ve=null,Ge=0,De}function FI(){for(;Pe!==null;)h0(Pe)}function BI(){for(;Pe!==null&&!h1();)h0(Pe)}function h0(t){var e=p0(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?d0(t):Pe=e,Dd.current=null}function d0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LI(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Pe=null;return}}else if(n=DI(n,e,Tt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);De===0&&(De=5)}function Ir(t,e,n){var r=oe,i=xt.transition;try{xt.transition=null,oe=1,jI(t,e,n,r)}finally{xt.transition=i,oe=r}return null}function jI(t,e,n,r){do Ci();while($n!==null);if(ne&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(w1(t,s),t===Ve&&(Pe=Ve=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,m0(Qa,function(){return Ci(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=oe;oe=1;var l=ne;ne|=4,Dd.current=null,MI(t,n),o0(n,t),aI(th),Ya=!!eh,th=eh=null,t.current=n,VI(n),d1(),ne=l,oe=o,xt.transition=s}else t.current=n;if(pa&&(pa=!1,$n=t,fl=i),s=t.pendingLanes,s===0&&(Zn=null),m1(n.stateNode),_t(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dl)throw dl=!1,t=wh,wh=null,t;return fl&1&&t.tag!==0&&Ci(),s=t.pendingLanes,s&1?t===Ih?Ms++:(Ms=0,Ih=t):Ms=0,fr(),null}function Ci(){if($n!==null){var t=Wy(fl),e=xt.transition,n=oe;try{if(xt.transition=null,oe=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,fl=0,ne&6)throw Error(U(331));var i=ne;for(ne|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Ls(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var v=f.sibling,C=f.return;if(r0(f),f===h){H=null;break}if(v!==null){v.return=C,H=v;break}H=C}}}var R=s.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var L=k.sibling;k.sibling=null,k=L}while(k!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ls(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var y=t.current;for(H=y;H!==null;){o=H;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,H=E;else e:for(o=y;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Kl(9,l)}}catch(b){Ee(l,l.return,b)}if(l===o){H=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,H=O;break e}H=l.return}}if(ne=i,fr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Bl,t)}catch{}r=!0}return r}finally{oe=n,xt.transition=e}}return!1}function Lm(t,e,n){e=Vi(n,e),e=Wv(t,e,1),t=Jn(t,e,1),e=ct(),t!==null&&(wo(t,1,e),_t(t,e))}function Ee(t,e,n){if(t.tag===3)Lm(t,t,n);else for(;e!==null;){if(e.tag===3){Lm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){t=Vi(n,t),t=qv(e,t,1),e=Jn(e,t,1),t=ct(),e!==null&&(wo(e,1,t),_t(e,t));break}}e=e.return}}function zI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Ge&n)===n&&(De===4||De===3&&(Ge&130023424)===Ge&&500>Se()-xd?kr(t,0):Ld|=n),_t(t,e)}function f0(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=ct();t=Cn(t,e),t!==null&&(wo(t,e,n),_t(t,n))}function HI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f0(t,n)}function GI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),f0(t,n)}var p0;p0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,OI(t,e,n);gt=!!(t.flags&131072)}else gt=!1,me&&e.flags&1048576&&vv(e,il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Da(t,e),t=e.pendingProps;var i=Di(e,nt.current);Si(e,n),i=Rd(null,e,r,t,i,n);var s=Pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,nl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Id(e),i.updater=ql,e.stateNode=i,i._reactInternals=e,ch(e,r,t,n),e=fh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&md(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Da(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WI(r),t=Bt(r,t),i){case 0:e=dh(null,e,r,t,n);break e;case 1:e=Tm(null,e,r,t,n);break e;case 11:e=wm(null,e,r,t,n);break e;case 14:e=Im(null,e,r,Bt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),dh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Tm(t,e,r,i,n);case 3:e:{if(Yv(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Av(t,e),al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vi(Error(U(423)),e),e=Am(t,e,r,n,i);break e}else if(r!==i){i=Vi(Error(U(424)),e),e=Am(t,e,r,n,i);break e}else for(At=Yn(e.stateNode.containerInfo.firstChild),Ct=e,me=!0,zt=null,n=Iv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===i){e=Rn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return Sv(e),t===null&&ah(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nh(r,i)?o=null:s!==null&&nh(r,s)&&(e.flags|=32),Xv(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&ah(e),null;case 13:return Jv(t,e,n);case 4:return Td(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xi(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),wm(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(sl,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!yt.current){e=Rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),lh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),lh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Si(e,n),i=Vt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),Im(t,e,r,i,n);case 15:return Kv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Da(t,e),e.tag=1,vt(r)?(t=!0,nl(e)):t=!1,Si(e,n),$v(e,r,i),ch(e,r,i,n),fh(null,e,r,!0,t,n);case 19:return Zv(t,e,n);case 22:return Qv(t,e,n)}throw Error(U(156,e.tag))};function m0(t,e){return zy(t,e)}function $I(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new $I(t,e,n,r)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WI(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rd)return 11;if(t===id)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ma(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ui:return Nr(n.children,i,s,e);case nd:o=8,i|=8;break;case xc:return t=Lt(12,n,e,i|2),t.elementType=xc,t.lanes=s,t;case Mc:return t=Lt(13,n,e,i),t.elementType=Mc,t.lanes=s,t;case Vc:return t=Lt(19,n,e,i),t.elementType=Vc,t.lanes=s,t;case Sy:return Xl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ty:o=10;break e;case Ay:o=9;break e;case rd:o=11;break e;case id:o=14;break e;case Vn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Nr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Xl(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=Sy,t.lanes=n,t.stateNode={isHidden:!1},t}function mc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function gc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,r,i,s,o,l,u){return t=new qI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(s),t}function KI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:li,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function g0(t){if(!t)return ar;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(vt(n))return gv(t,n,e)}return e}function y0(t,e,n,r,i,s,o,l,u){return t=Fd(n,r,!0,t,i,s,o,l,u),t.context=g0(null),n=t.current,r=ct(),i=er(n),s=En(r,i),s.callback=e??null,Jn(n,s,i),t.current.lanes=i,wo(t,i,r),_t(t,r),t}function Yl(t,e,n,r){var i=e.current,s=ct(),o=er(i);return n=g0(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jn(i,e,o),t!==null&&(qt(t,i,o,s),ka(t,i,o)),o}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bd(t,e){xm(t,e),(t=t.alternate)&&xm(t,e)}function QI(){return null}var v0=typeof reportError=="function"?reportError:function(t){console.error(t)};function jd(t){this._internalRoot=t}Jl.prototype.render=jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Yl(t,e,null,null)};Jl.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){Yl(null,t,null,null)}),e[Sn]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&Yy(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function XI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ml(o);s.call(h)}}var o=y0(e,r,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[Sn]=o.current,Ys(t.nodeType===8?t.parentNode:t),Ur(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=ml(u);l.call(h)}}var u=Fd(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=u,t[Sn]=u.current,Ys(t.nodeType===8?t.parentNode:t),Ur(function(){Yl(e,u,n,r)}),u}function eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ml(o);l.call(u)}}Yl(e,o,t,i)}else o=XI(n,e,t,i,r);return ml(o)}qy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Is(e.pendingLanes);n!==0&&(ad(e,n|1),_t(e,Se()),!(ne&6)&&(bi=Se()+500,fr()))}break;case 13:Ur(function(){var r=Cn(t,1);if(r!==null){var i=ct();qt(r,t,1,i)}}),Bd(t,1)}};ld=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=ct();qt(e,t,134217728,n)}Bd(t,134217728)}};Ky=function(t){if(t.tag===13){var e=er(t),n=Cn(t,e);if(n!==null){var r=ct();qt(n,t,e,r)}Bd(t,e)}};Qy=function(){return oe};Xy=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Wc=function(t,e,n){switch(e){case"input":if(Fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gl(r);if(!i)throw Error(U(90));Ry(r),Fc(r,i)}}}break;case"textarea":ky(t,n);break;case"select":e=n.value,e!=null&&wi(t,!!n.multiple,e,!1)}};Vy=Md;by=Ur;var YI={usingClientEntryPoint:!1,Events:[To,fi,Gl,xy,My,Md]},ys={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JI={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=By(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||QI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Bl=ma.inject(JI),rn=ma}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YI;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(U(200));return KI(t,e,null,n)};kt.createRoot=function(t,e){if(!zd(t))throw Error(U(299));var n=!1,r="",i=v0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,r,i),t[Sn]=e.current,Ys(t.nodeType===8?t.parentNode:t),new jd(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=By(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return Ur(t)};kt.hydrate=function(t,e,n){if(!Zl(e))throw Error(U(200));return eu(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=v0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y0(e,null,t,1,n??null,i,!1,s,o),t[Sn]=e.current,Ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jl(e)};kt.render=function(t,e,n){if(!Zl(e))throw Error(U(200));return eu(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(U(40));return t._reactRootContainer?(Ur(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};kt.unstable_batchedUpdates=Md;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zl(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return eu(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function _0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)}catch(t){console.error(t)}}_0(),_y.exports=kt;var ZI=_y.exports,Vm=ZI;Dc.createRoot=Vm.createRoot,Dc.hydrateRoot=Vm.hydrateRoot;const E0="/loonflix-repo/assets/logo-CPM_tptD.png",eT="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='40'%20width='40'%20viewBox='0%200%20101%20101'%20id='Search'%3e%3cpath%20d='M63.3%2059.9c3.8-4.6%206.2-10.5%206.2-17%200-14.6-11.9-26.5-26.5-26.5S16.5%2028.3%2016.5%2042.9%2028.4%2069.4%2043%2069.4c6.4%200%2012.4-2.3%2017-6.2l20.6%2020.6c.5.5%201.1.7%201.7.7.6%200%201.2-.2%201.7-.7.9-.9.9-2.5%200-3.4L63.3%2059.9zm-20.4%204.7c-12%200-21.7-9.7-21.7-21.7s9.7-21.7%2021.7-21.7%2021.7%209.7%2021.7%2021.7-9.7%2021.7-21.7%2021.7z'%20fill='%23fffcfc'%20class='color000000%20svgShape'%3e%3c/path%3e%3c/svg%3e",tT="data:image/svg+xml,%3csvg%20fill='%23FFFFFF'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='24px'%20height='24px'%3e%3cpath%20d='M%2011.984375%200.98632812%20A%201.0001%201.0001%200%200%200%2011%202%20L%2011%203.203125%20C%207.0846057%203.7180136%204%206.9478647%204%2011%20L%204%2014%20C%204%2016.555556%202.2929688%2018.292969%202.2929688%2018.292969%20A%201.0001%201.0001%200%200%200%203%2020%20L%209%2020%20C%209%2021.64497%2010.35503%2023%2012%2023%20C%2013.64497%2023%2015%2021.64497%2015%2020%20L%2021%2020%20A%201.0001%201.0001%200%200%200%2021.707031%2018.292969%20C%2021.707031%2018.292969%2020%2016.555556%2020%2014%20L%2020%2011%20C%2020%206.9478647%2016.915394%203.7180136%2013%203.203125%20L%2013%202%20A%201.0001%201.0001%200%200%200%2011.984375%200.98632812%20z%20M%2011.945312%205.0117188%20A%201.0001%201.0001%200%200%200%2012.056641%205.0117188%20C%2015.354136%205.0438544%2018%207.6945858%2018%2011%20L%2018%2014%20C%2018%2015.653192%2018.534621%2017.010786%2019.083984%2018%20L%204.9160156%2018%20C%205.4653791%2017.010786%206%2015.653192%206%2014%20L%206%2011%20C%206%207.6939188%208.6468845%205.0427993%2011.945312%205.0117188%20z%20M%2011%2020%20L%2013%2020%20C%2013%2020.56503%2012.56503%2021%2012%2021%20C%2011.43497%2021%2011%2020.56503%2011%2020%20z'/%3e%3c/svg%3e",nT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAAB1SURBVEhLY2RY9IKBloAJStMMjFpAEIxaQBCg54P/seJQFlBu8UsoCy/Ar2U0DggCukcy1cFoHOABkPyBzwKgCuRMRB7AZwEkW5JhB7LLiEpFyHbgLz8Q5sKUkZxMCXoIzQWj+YAgGLWAIBi1gCAY6hYwMAAAye8itvnxsMsAAAAASUVORK5CYII=",rT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVklEQVR4nO3QQQqAIBRFUdcpUdQmGv5tN7vioGbS/yoE8c5Q5F00JRH5BrAAF371bo4ENuLW6CvOwLh1fJQ7Yl3jzogNjb9E5ow3InPHb8AB7M+ByD8UUd8N/l77H38AAAAASUVORK5CYII=";var bm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},I0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let v=(l&15)<<2|h>>6,C=h&63;u||(C=64,o||(v=64)),r.push(n[f],n[p],n[v],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new sT;const v=s<<2|l>>4;if(r.push(v),h!==64){const C=l<<4&240|h>>2;if(r.push(C),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oT=function(t){const e=w0(t);return I0.encodeByteArray(e,!0)},gl=function(t){return oT(t).replace(/\./g,"")},T0=function(t){try{return I0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=()=>aT().__FIREBASE_DEFAULTS__,uT=()=>{if(typeof process>"u"||typeof bm>"u")return;const t=bm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&T0(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return lT()||uT()||cT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A0=t=>{var e,n;return(n=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hT=t=>{const e=A0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},S0=()=>{var t;return(t=tu())===null||t===void 0?void 0:t.config},C0=t=>{var e;return(e=tu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gl(JSON.stringify(n)),gl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function mT(){var t;const e=(t=tu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function R0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vT(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _T(){return!mT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function P0(){try{return typeof indexedDB=="object"}catch{return!1}}function k0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ET(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wT,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}}class Qr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IT(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,l,r)}}function IT(t,e){return t.replace(TT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TT=/\{\$([^}]+)}/g;function AT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Um(s)&&Um(o)){if(!oo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Um(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ST(t,e){const n=new CT(t,e);return n.subscribe.bind(n)}class CT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yc),i.error===void 0&&(i.error=yc),i.complete===void 0&&(i.complete=yc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=1e3,kT=2,NT=4*60*60*1e3,OT=.5;function Fm(t,e=PT,n=kT){const r=e*Math.pow(n,t),i=Math.round(OT*r*(Math.random()-.5)*2);return Math.min(NT,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xT(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LT(t){return t===Tr?void 0:t}function xT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const VT={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},bT=J.INFO,UT={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},FT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nu{constructor(e){this.name=e,this._logLevel=bT,this._logHandler=FT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const BT=(t,e)=>e.some(n=>t instanceof n);let Bm,jm;function jT(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zT(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N0=new WeakMap,Sh=new WeakMap,O0=new WeakMap,vc=new WeakMap,Hd=new WeakMap;function HT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&N0.set(n,t)}).catch(()=>{}),Hd.set(e,t),e}function GT(t){if(Sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sh.set(t,e)}let Ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $T(t){Ch=t(Ch)}function WT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return O0.set(r,e.sort?e.sort():[e]),nr(r)}:zT().includes(t)?function(...e){return t.apply(_c(this),e),nr(N0.get(this))}:function(...e){return nr(t.apply(_c(this),e))}}function qT(t){return typeof t=="function"?WT(t):(t instanceof IDBTransaction&&GT(t),BT(t,jT())?new Proxy(t,Ch):t)}function nr(t){if(t instanceof IDBRequest)return HT(t);if(vc.has(t))return vc.get(t);const e=qT(t);return e!==t&&(vc.set(t,e),Hd.set(e,t)),e}const _c=t=>Hd.get(t);function D0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nr(o.result),u.oldVersion,u.newVersion,nr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const KT=["get","getKey","getAll","getAllKeys","count"],QT=["put","add","delete","clear"],Ec=new Map;function zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=QT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KT.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ec.set(e,s),s}$T(t=>({...t,get:(e,n,r)=>zm(e,n)||t.get(e,n,r),has:(e,n)=>!!zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rh="@firebase/app",Hm="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new nu("@firebase/app"),JT="@firebase/app-compat",ZT="@firebase/analytics-compat",eA="@firebase/analytics",tA="@firebase/app-check-compat",nA="@firebase/app-check",rA="@firebase/auth",iA="@firebase/auth-compat",sA="@firebase/database",oA="@firebase/data-connect",aA="@firebase/database-compat",lA="@firebase/functions",uA="@firebase/functions-compat",cA="@firebase/installations",hA="@firebase/installations-compat",dA="@firebase/messaging",fA="@firebase/messaging-compat",pA="@firebase/performance",mA="@firebase/performance-compat",gA="@firebase/remote-config",yA="@firebase/remote-config-compat",vA="@firebase/storage",_A="@firebase/storage-compat",EA="@firebase/firestore",wA="@firebase/vertexai",IA="@firebase/firestore-compat",TA="firebase",AA="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="[DEFAULT]",SA={[Rh]:"fire-core",[JT]:"fire-core-compat",[eA]:"fire-analytics",[ZT]:"fire-analytics-compat",[nA]:"fire-app-check",[tA]:"fire-app-check-compat",[rA]:"fire-auth",[iA]:"fire-auth-compat",[sA]:"fire-rtdb",[oA]:"fire-data-connect",[aA]:"fire-rtdb-compat",[lA]:"fire-fn",[uA]:"fire-fn-compat",[cA]:"fire-iid",[hA]:"fire-iid-compat",[dA]:"fire-fcm",[fA]:"fire-fcm-compat",[pA]:"fire-perf",[mA]:"fire-perf-compat",[gA]:"fire-rc",[yA]:"fire-rc-compat",[vA]:"fire-gcs",[_A]:"fire-gcs-compat",[EA]:"fire-fst",[IA]:"fire-fst-compat",[wA]:"fire-vertex","fire-js":"fire-js",[TA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Map,CA=new Map,kh=new Map;function Gm(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ln(t){const e=t.name;if(kh.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;kh.set(e,t);for(const n of yl.values())Gm(n,t);for(const n of CA.values())Gm(n,t);return!0}function Xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Qr("app","Firebase",RA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=AA;function L0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ph,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=S0()),!n)throw rr.create("no-options");const s=yl.get(i);if(s){if(oo(n,s.options)&&oo(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new MT(i);for(const u of kh.values())o.addComponent(u);const l=new PA(n,r,o);return yl.set(i,l),l}function Gd(t=Ph){const e=yl.get(t);if(!e&&t===Ph&&S0())return L0();if(!e)throw rr.create("no-app",{appName:t});return e}function Mt(t,e,n){var r;let i=(r=SA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(l.join(" "));return}ln(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="firebase-heartbeat-database",NA=1,ao="firebase-heartbeat-store";let wc=null;function x0(){return wc||(wc=D0(kA,NA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),wc}async function OA(t){try{const n=(await x0()).transaction(ao),r=await n.objectStore(ao).get(M0(t));return await n.done,r}catch(e){if(e instanceof Yt)Pn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function $m(t,e){try{const r=(await x0()).transaction(ao,"readwrite");await r.objectStore(ao).put(e,M0(t)),await r.done}catch(n){if(n instanceof Yt)Pn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function M0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=1024,LA=30*24*60*60*1e3;class xA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=LA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:r,unsentEntries:i}=MA(this._heartbeatsCache.heartbeats),s=gl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Pn.warn(n),""}}}function Wm(){return new Date().toISOString().substring(0,10)}function MA(t,e=DA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P0()?k0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qm(t){return gl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){ln(new Qt("platform-logger",e=>new XT(e),"PRIVATE")),ln(new Qt("heartbeat",e=>new xA(e),"PRIVATE")),Mt(Rh,Hm,t),Mt(Rh,Hm,"esm2017"),Mt("fire-js","")}bA("");var UA="firebase",FA="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(UA,FA,"app");const V0="@firebase/installations",$d="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=1e4,U0=`w:${$d}`,F0="FIS_v2",BA="https://firebaseinstallations.googleapis.com/v1",jA=60*60*1e3,zA="installations",HA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fr=new Qr(zA,HA,GA);function B0(t){return t instanceof Yt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0({projectId:t}){return`${BA}/projects/${t}/installations`}function z0(t){return{token:t.token,requestStatus:2,expiresIn:WA(t.expiresIn),creationTime:Date.now()}}async function H0(t,e){const r=(await e.json()).error;return Fr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function G0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $A(t,{refreshToken:e}){const n=G0(t);return n.append("Authorization",qA(e)),n}async function $0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function WA(t){return Number(t.replace("s","000"))}function qA(t){return`${F0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=j0(t),i=G0(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:F0,appId:t.appId,sdkVersion:U0},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await $0(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:z0(h.authToken)}}else throw await H0("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=/^[cdef][\w-]{21}$/,Nh="";function YA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=JA(t);return XA.test(n)?n:Nh}catch{return Nh}}function JA(t){return QA(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new Map;function K0(t,e){const n=ru(t);Q0(n,e),ZA(n,e)}function Q0(t,e){const n=q0.get(t);if(n)for(const r of n)r(e)}function ZA(t,e){const n=eS();n&&n.postMessage({key:t,fid:e}),tS()}let Rr=null;function eS(){return!Rr&&"BroadcastChannel"in self&&(Rr=new BroadcastChannel("[Firebase] FID Change"),Rr.onmessage=t=>{Q0(t.data.key,t.data.fid)}),Rr}function tS(){q0.size===0&&Rr&&(Rr.close(),Rr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebase-installations-database",rS=1,Br="firebase-installations-store";let Ic=null;function Wd(){return Ic||(Ic=D0(nS,rS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Br)}}})),Ic}async function vl(t,e){const n=ru(t),i=(await Wd()).transaction(Br,"readwrite"),s=i.objectStore(Br),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&K0(t,e.fid),e}async function X0(t){const e=ru(t),r=(await Wd()).transaction(Br,"readwrite");await r.objectStore(Br).delete(e),await r.done}async function iu(t,e){const n=ru(t),i=(await Wd()).transaction(Br,"readwrite"),s=i.objectStore(Br),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&K0(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qd(t){let e;const n=await iu(t.appConfig,r=>{const i=iS(r),s=sS(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Nh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iS(t){const e=t||{fid:YA(),registrationStatus:0};return Y0(e)}function sS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oS(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aS(t)}:{installationEntry:e}}async function oS(t,e){try{const n=await KA(t,e);return vl(t.appConfig,n)}catch(n){throw B0(n)&&n.customData.serverCode===409?await X0(t.appConfig):await vl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aS(t){let e=await Km(t.appConfig);for(;e.registrationStatus===1;)await W0(100),e=await Km(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qd(t);return r||n}return e}function Km(t){return iu(t,e=>{if(!e)throw Fr.create("installation-not-found");return Y0(e)})}function Y0(t){return lS(t)?{fid:t.fid,registrationStatus:0}:t}function lS(t){return t.registrationStatus===1&&t.registrationTime+b0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS({appConfig:t,heartbeatServiceProvider:e},n){const r=cS(t,n),i=$A(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:U0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await $0(()=>fetch(r,l));if(u.ok){const h=await u.json();return z0(h)}else throw await H0("Generate Auth Token",u)}function cS(t,{fid:e}){return`${j0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(t,e=!1){let n;const r=await iu(t.appConfig,s=>{if(!J0(s))throw Fr.create("not-registered");const o=s.authToken;if(!e&&fS(o))return s;if(o.requestStatus===1)return n=hS(t,e),s;{if(!navigator.onLine)throw Fr.create("app-offline");const l=mS(s);return n=dS(t,l),l}});return n?await n:r.authToken}async function hS(t,e){let n=await Qm(t.appConfig);for(;n.authToken.requestStatus===1;)await W0(100),n=await Qm(t.appConfig);const r=n.authToken;return r.requestStatus===0?Kd(t,e):r}function Qm(t){return iu(t,e=>{if(!J0(e))throw Fr.create("not-registered");const n=e.authToken;return gS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dS(t,e){try{const n=await uS(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await vl(t.appConfig,r),n}catch(n){if(B0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await X0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await vl(t.appConfig,r)}throw n}}function J0(t){return t!==void 0&&t.registrationStatus===2}function fS(t){return t.requestStatus===2&&!pS(t)}function pS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jA}function mS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gS(t){return t.requestStatus===1&&t.requestTime+b0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(t){const e=t,{installationEntry:n,registrationPromise:r}=await qd(e);return r?r.catch(console.error):Kd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e=!1){const n=t;return await _S(n),(await Kd(n,e)).token}async function _S(t){const{registrationPromise:e}=await qd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t){if(!t||!t.options)throw Tc("App Configuration");if(!t.name)throw Tc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tc(t){return Fr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="installations",wS="installations-internal",IS=t=>{const e=t.getProvider("app").getImmediate(),n=ES(e),r=Xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TS=t=>{const e=t.getProvider("app").getImmediate(),n=Xr(e,Z0).getImmediate();return{getId:()=>yS(n),getToken:i=>vS(n,i)}};function AS(){ln(new Qt(Z0,IS,"PUBLIC")),ln(new Qt(wS,TS,"PRIVATE"))}AS();Mt(V0,$d);Mt(V0,$d,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="analytics",SS="firebase_id",CS="origin",RS=60*1e3,PS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new nu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Qr("analytics","Analytics",kS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t){if(!t.startsWith(Qd)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function e_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function OS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function DS(t,e){const n=OS("firebase-js-sdk-policy",{createScriptURL:NS}),r=document.createElement("script"),i=`${Qd}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function LS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xS(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await e_(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){Et.error(l)}t("config",i,s)}async function MS(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await e_(n);for(const u of o){const h=l.find(p=>p.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Et.error(s)}}function VS(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await MS(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await xS(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Et.error(l)}}return i}function bS(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=VS(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function US(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Qd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=30,BS=1e3;class jS{constructor(e={},n=BS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const t_=new jS;function zS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function HS(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:zS(r)},s=PS.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function GS(t,e=t_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new qS;return setTimeout(async()=>{l.abort()},RS),n_({appId:r,apiKey:i,measurementId:s},o,l,e)}async function n_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=t_){var s;const{appId:o,measurementId:l}=t;try{await $S(r,e)}catch(u){if(l)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await HS(t);return i.deleteThrottleMetadata(o),u}catch(u){const h=u;if(!WS(h)){if(i.deleteThrottleMetadata(o),l)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?Fm(n,i.intervalMillis,FS):Fm(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),Et.debug(`Calling attemptFetch again in ${f} millis`),n_(t,p,r,i)}}function $S(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function WS(t){if(!(t instanceof Yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function KS(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(){if(P0())try{await k0()}catch(t){return Et.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Et.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XS(t,e,n,r,i,s,o){var l;const u=GS(t);u.then(C=>{n[C.measurementId]=C.appId,t.options.measurementId&&C.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Et.error(C)),e.push(u);const h=QS().then(C=>{if(C)return r.getId()}),[f,p]=await Promise.all([u,h]);US(s)||DS(s,f.measurementId),i("js",new Date);const v=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return v[CS]="firebase",v.update=!0,p!=null&&(v[SS]=p),i("config",f.measurementId,v),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.app=e}_delete(){return delete Vs[this.app.options.appId],Promise.resolve()}}let Vs={},Xm=[];const Ym={};let Ac="dataLayer",JS="gtag",Jm,r_,Zm=!1;function ZS(){const t=[];if(R0()&&t.push("This is a browser extension environment."),ET()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function eC(t,e,n){ZS();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(Vs[r]!=null)throw Rt.create("already-exists",{id:r});if(!Zm){LS(Ac);const{wrappedGtag:s,gtagCore:o}=bS(Vs,Xm,Ym,Ac,JS);r_=s,Jm=o,Zm=!0}return Vs[r]=XS(t,Xm,Ym,e,Jm,Ac,n),new YS(t)}function tC(t=Gd()){t=it(t);const e=Xr(t,_l);return e.isInitialized()?e.getImmediate():nC(t)}function nC(t,e={}){const n=Xr(t,_l);if(n.isInitialized()){const i=n.getImmediate();if(oo(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}function rC(t,e,n,r){t=it(t),KS(r_,Vs[t.app.options.appId],e,n,r).catch(i=>Et.error(i))}const eg="@firebase/analytics",tg="0.10.9";function iC(){ln(new Qt(_l,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return eC(r,i,n)},"PUBLIC")),ln(new Qt("analytics-internal",t,"PRIVATE")),Mt(eg,tg),Mt(eg,tg,"esm2017");function t(e){try{const n=e.getProvider(_l).getImmediate();return{logEvent:(r,i,s)=>rC(n,r,i,s)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}iC();function Xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sC=i_,s_=new Qr("auth","Firebase",i_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new nu("@firebase/auth");function oC(t,...e){El.logLevel<=J.WARN&&El.warn(`Auth (${Wi}): ${t}`,...e)}function Va(t,...e){El.logLevel<=J.ERROR&&El.error(`Auth (${Wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Yd(t,...e)}function on(t,...e){return Yd(t,...e)}function o_(t,e,n){const r=Object.assign(Object.assign({},sC()),{[e]:n});return new Qr("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return o_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return s_.create(t,...e)}function q(t,e,...n){if(!t)throw Yd(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function kn(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aC(){return ng()==="http:"||ng()==="https:"}function ng(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aC()||R0()||"connection"in navigator)?navigator.onLine:!0}function uC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=pT()||yT()}get(){return lC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new Co(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mr(t,e,n,r,i={}){return l_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=So(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return gT()||(h.referrerPolicy="no-referrer"),a_.fetch()(u_(t,t.config.apiHost,n,l),h)})}async function l_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cC),e);try{const i=new fC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ga(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw o_(t,f,h);Xt(t,f)}}catch(i){if(i instanceof Yt)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function Ro(t,e,n,r,i={}){const s=await mr(t,e,n,r,i);return"mfaPendingCredential"in s&&Xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function u_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Jd(t.config,i):`${t.config.apiScheme}://${i}`}function dC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),hC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function rg(t){return t!==void 0&&t.enterprise!==void 0}class pC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mC(t,e){return mr(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function c_(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yC(t,e=!1){const n=it(t),r=await n.getIdToken(e),i=Zd(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bs(Sc(i.auth_time)),issuedAtTime:bs(Sc(i.iat)),expirationTime:bs(Sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function Zd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=T0(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ig(t){const e=Zd(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&vC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await lo(t,c_(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?h_(s.providerUserInfo):[],l=wC(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Dh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function EC(t){const e=it(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function h_(t){return t.map(e=>{var{providerId:n}=e,r=Xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e){const n=await l_(t,{},async()=>{const r=So({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=u_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",a_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TC(t,e){return mr(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=ig(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await IC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ri;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _C(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yC(this,e)}reload(){return EC(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await lo(this,gC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:O,isAnonymous:b,providerData:B,stsTokenManager:w}=n;q(E&&w,e,"internal-error");const m=Ri.fromJSON(this.name,w);q(typeof E=="string",e,"internal-error"),Mn(p,e.name),Mn(v,e.name),q(typeof O=="boolean",e,"internal-error"),q(typeof b=="boolean",e,"internal-error"),Mn(C,e.name),Mn(R,e.name),Mn(k,e.name),Mn(L,e.name),Mn(I,e.name),Mn(y,e.name);const _=new vn({uid:E,auth:e,email:v,emailVerified:O,displayName:p,isAnonymous:b,photoURL:R,phoneNumber:C,tenantId:k,stsTokenManager:m,createdAt:I,lastLoginAt:y});return B&&Array.isArray(B)&&(_.providerData=B.map(T=>Object.assign({},T))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ri;i.updateFromServerResponse(n);const s=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?h_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ri;l.updateFromIdToken(r);const u=new vn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Dh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Map;function _n(t){kn(t instanceof Function,"Expected a class definition");let e=sg.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d_.type="NONE";const og=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e,n){return`firebase:${t}:${e}:${n}`}class Pi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ba(this.userKey,i.apiKey,s),this.fullPersistenceKey=ba("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pi(_n(og),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||_n(og);const o=ba(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=vn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Pi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Pi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v_(e))return"Blackberry";if(__(e))return"Webos";if(p_(e))return"Safari";if((e.includes("chrome/")||m_(e))&&!e.includes("edge/"))return"Chrome";if(y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f_(t=rt()){return/firefox\//i.test(t)}function p_(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function m_(t=rt()){return/crios\//i.test(t)}function g_(t=rt()){return/iemobile/i.test(t)}function y_(t=rt()){return/android/i.test(t)}function v_(t=rt()){return/blackberry/i.test(t)}function __(t=rt()){return/webos/i.test(t)}function ef(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AC(t=rt()){var e;return ef(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SC(){return vT()&&document.documentMode===10}function E_(t=rt()){return ef(t)||y_(t)||__(t)||v_(t)||/windows phone/i.test(t)||g_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e=[]){let n;switch(t){case"Browser":n=ag(rt());break;case"Worker":n=`${ag(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e={}){return mr(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=6;class kC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:PC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lg(this),this.idTokenSubscription=new lg(this),this.beforeStateQueue=new CC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await c_(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(wn(this));const n=e?it(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RC(this),n=new kC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await TC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Pi.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return it(t)}class lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ST(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OC(t){su=t}function I_(t){return su.loadJS(t)}function DC(){return su.recaptchaEnterpriseScript}function LC(){return su.gapiScript}function xC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class MC{constructor(){this.enterprise=new VC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class VC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bC="recaptcha-enterprise",T_="NO_RECAPTCHA";class UC{constructor(e){this.type=bC,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{mC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new pC(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;rg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(T_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&rg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=DC();u.length!==0&&(u+=l),I_(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function ug(t,e,n,r=!1,i=!1){const s=new UC(t);let o;if(i)o=T_;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Lh(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ug(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ug(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t,e){const n=Xr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(oo(s,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function BC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jC(t,e,n){const r=Yr(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=A_(e),{host:o,port:l}=zC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),HC()}function A_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zC(t){const e=A_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cg(o)}}}function cg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function GC(t,e){return mr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t,e){return Ro(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function qC(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends tf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lh(e,n,"signInWithPassword",$C);case"emailLink":return WC(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lh(e,r,"signUpPassword",GC);case"emailLink":return qC(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e){return Ro(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="http://localhost";class jr extends tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ki(e,n)}buildRequest(){const e={requestUri:KC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=So(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XC(t){const e=As(Ss(t)).link,n=e?As(Ss(e)).deep_link_id:null,r=As(Ss(t)).deep_link_id;return(r?As(Ss(r)).link:null)||r||n||e||t}class nf{constructor(e){var n,r,i,s,o,l;const u=As(Ss(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=QC((i=u.mode)!==null&&i!==void 0?i:null);q(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=XC(e);try{return new nf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.providerId=qi.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nf.parseLink(n);return q(r,"argument-error"),uo._fromEmailAndCode(e,r.code,r.tenantId)}}qi.PROVIDER_ID="password";qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends S_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Po{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Po{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Po{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e){return Ro(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vn._fromIdTokenResponse(e,r,i),o=hg(r);return new zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hg(r);return new zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Il.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Il(e,n,r,i)}}function C_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Il._fromErrorAndOperation(t,s,e,r):s})}async function JC(t,e,n=!1){const r=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await lo(t,C_(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Zd(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e,n=!1){if(nn(t.app))return Promise.reject(wn(t));const r="signIn",i=await C_(t,r,e),s=await zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function eR(t,e){return R_(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tR(t,e,n){if(nn(t.app))return Promise.reject(wn(t));const r=Yr(t),o=await Lh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&P_(t),u}),l=await zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function nR(t,e,n){return nn(t.app)?Promise.reject(wn(t)):eR(it(t),qi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&P_(t),r})}function rR(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function iR(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function sR(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function oR(t){return it(t).signOut()}const Tl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tl,"1"),this.storage.removeItem(Tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=1e3,lR=10;class N_ extends k_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=E_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N_.type="LOCAL";const uR=N_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_ extends k_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O_.type="SESSION";const D_=O_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await cR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ou.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=rf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function dR(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function fR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mR(){return L_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="firebaseLocalStorageDb",gR=1,Al="firebaseLocalStorage",M_="fbase_key";class ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function au(t,e){return t.transaction([Al],e?"readwrite":"readonly").objectStore(Al)}function yR(){const t=indexedDB.deleteDatabase(x_);return new ko(t).toPromise()}function xh(){const t=indexedDB.open(x_,gR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Al,{keyPath:M_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Al)?e(r):(r.close(),await yR(),e(await xh()))})})}async function dg(t,e,n){const r=au(t,!0).put({[M_]:e,value:n});return new ko(r).toPromise()}async function vR(t,e){const n=au(t,!1).get(e),r=await new ko(n).toPromise();return r===void 0?null:r.value}function fg(t,e){const n=au(t,!0).delete(e);return new ko(n).toPromise()}const _R=800,ER=3;class V_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ER)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ou._getInstance(mR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fR(),!this.activeServiceWorker)return;this.sender=new hR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await dg(e,Tl,"1"),await fg(e,Tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=au(i,!1).getAll();return new ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V_.type="LOCAL";const wR=V_;new Co(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e){return e?_n(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TR(t){return R_(t.auth,new sf(t),t.bypassAuthState)}function AR(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),ZC(n,new sf(t),t.bypassAuthState)}async function SR(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),JC(n,new sf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TR;case"linkViaPopup":case"linkViaRedirect":return SR;case"reauthViaPopup":case"reauthViaRedirect":return AR;default:Xt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new Co(2e3,1e4);class Ei extends b_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ei.currentPopupAction&&Ei.currentPopupAction.cancel(),Ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CR.get())};e()}}Ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="pendingRedirect",Ua=new Map;class PR extends b_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await kR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kR(t,e){const n=DR(e),r=OR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function NR(t,e){Ua.set(t._key(),e)}function OR(t){return _n(t._redirectPersistence)}function DR(t){return ba(RR,t.config.apiKey,t.name)}async function LR(t,e,n=!1){if(nn(t.app))return Promise.reject(wn(t));const r=Yr(t),i=IR(r,e),o=await new PR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=10*60*1e3;class MR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(pg(e))}saveEventToCache(e){this.cachedEventUids.add(pg(e)),this.lastProcessedEventTime=Date.now()}}function pg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FR=/^https?/;async function BR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bR(t);for(const n of e)try{if(jR(n))return}catch{}Xt(t,"unauthorized-domain")}function jR(t){const e=Oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FR.test(n))return!1;if(UR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Co(3e4,6e4);function mg(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HR(t){return new Promise((e,n)=>{var r,i,s;function o(){mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mg(),n(on(t,"network-request-failed"))},timeout:zR.get()})}if(!((i=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=an().gapi)===null||s===void 0)&&s.load)o();else{const l=xC("iframefcb");return an()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},I_(`${LC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function GR(t){return Fa=Fa||HR(t),Fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new Co(5e3,15e3),WR="__/auth/iframe",qR="emulator/auth/iframe",KR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XR(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jd(e,qR):`https://${t.config.authDomain}/${WR}`,r={apiKey:e.apiKey,appName:t.name,v:Wi},i=QR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${So(r).slice(1)}`}async function YR(t){const e=await GR(t),n=an().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:XR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{s(o)},$R.get());function u(){an().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZR=500,eP=600,tP="_blank",nP="http://localhost";class gg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rP(t,e,n,r=ZR,i=eP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},JR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=rt().toLowerCase();n&&(l=m_(h)?tP:n),f_(h)&&(e=e||nP,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[C,R])=>`${v}${C}=${R},`,"");if(AC(h)&&l!=="_self")return iP(e||"",l),new gg(null);const p=window.open(e||"",l,f);q(p,t,"popup-blocked");try{p.focus()}catch{}return new gg(p)}function iP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="__/auth/handler",oP="emulator/auth/handler",aP=encodeURIComponent("fac");async function yg(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wi,eventId:i};if(e instanceof S_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",AT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Po){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${aP}=${encodeURIComponent(u)}`:"";return`${lP(t)}?${So(l).slice(1)}${h}`}function lP({config:t}){return t.emulator?Jd(t,oP):`https://${t.authDomain}/${sP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="webStorageSupport";class uP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D_,this._completeRedirectFn=LR,this._overrideRedirectResult=NR}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yg(e,n,r,Oh(),i);return rP(e,o,rf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yg(e,n,r,Oh(),i);return dR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YR(e),r=new MR(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cc];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return E_()||p_()||ef()}}const cP=uP;var vg="@firebase/auth",_g="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fP(t){ln(new Qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(t)},h=new NC(r,i,s,u);return BC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ln(new Qt("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new hP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(vg,_g,dP(t)),Mt(vg,_g,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=5*60,mP=C0("authIdTokenMaxAge")||pP;let Eg=null;const gP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mP)return;const i=n==null?void 0:n.token;Eg!==i&&(Eg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yP(t=Gd()){const e=Xr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FC(t,{popupRedirectResolver:cP,persistence:[wR,uR,D_]}),r=C0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gP(s.toString());iR(n,o,()=>o(n.currentUser)),rR(n,l=>o(l))}}const i=A0("auth");return i&&jC(n,`http://${i}`),n}function vP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}OC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fP("Browser");var wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var F_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(T,S,P){for(var A=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)A[Te-2]=arguments[Te];return m.prototype[S].apply(T,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var S=0;16>S;++S)T[S]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(S=0;16>S;++S)T[S]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],S=w.g[2];var P=w.g[3],A=m+(P^_&(S^P))+T[0]+3614090360&4294967295;m=_+(A<<7&4294967295|A>>>25),A=P+(S^m&(_^S))+T[1]+3905402710&4294967295,P=m+(A<<12&4294967295|A>>>20),A=S+(_^P&(m^_))+T[2]+606105819&4294967295,S=P+(A<<17&4294967295|A>>>15),A=_+(m^S&(P^m))+T[3]+3250441966&4294967295,_=S+(A<<22&4294967295|A>>>10),A=m+(P^_&(S^P))+T[4]+4118548399&4294967295,m=_+(A<<7&4294967295|A>>>25),A=P+(S^m&(_^S))+T[5]+1200080426&4294967295,P=m+(A<<12&4294967295|A>>>20),A=S+(_^P&(m^_))+T[6]+2821735955&4294967295,S=P+(A<<17&4294967295|A>>>15),A=_+(m^S&(P^m))+T[7]+4249261313&4294967295,_=S+(A<<22&4294967295|A>>>10),A=m+(P^_&(S^P))+T[8]+1770035416&4294967295,m=_+(A<<7&4294967295|A>>>25),A=P+(S^m&(_^S))+T[9]+2336552879&4294967295,P=m+(A<<12&4294967295|A>>>20),A=S+(_^P&(m^_))+T[10]+4294925233&4294967295,S=P+(A<<17&4294967295|A>>>15),A=_+(m^S&(P^m))+T[11]+2304563134&4294967295,_=S+(A<<22&4294967295|A>>>10),A=m+(P^_&(S^P))+T[12]+1804603682&4294967295,m=_+(A<<7&4294967295|A>>>25),A=P+(S^m&(_^S))+T[13]+4254626195&4294967295,P=m+(A<<12&4294967295|A>>>20),A=S+(_^P&(m^_))+T[14]+2792965006&4294967295,S=P+(A<<17&4294967295|A>>>15),A=_+(m^S&(P^m))+T[15]+1236535329&4294967295,_=S+(A<<22&4294967295|A>>>10),A=m+(S^P&(_^S))+T[1]+4129170786&4294967295,m=_+(A<<5&4294967295|A>>>27),A=P+(_^S&(m^_))+T[6]+3225465664&4294967295,P=m+(A<<9&4294967295|A>>>23),A=S+(m^_&(P^m))+T[11]+643717713&4294967295,S=P+(A<<14&4294967295|A>>>18),A=_+(P^m&(S^P))+T[0]+3921069994&4294967295,_=S+(A<<20&4294967295|A>>>12),A=m+(S^P&(_^S))+T[5]+3593408605&4294967295,m=_+(A<<5&4294967295|A>>>27),A=P+(_^S&(m^_))+T[10]+38016083&4294967295,P=m+(A<<9&4294967295|A>>>23),A=S+(m^_&(P^m))+T[15]+3634488961&4294967295,S=P+(A<<14&4294967295|A>>>18),A=_+(P^m&(S^P))+T[4]+3889429448&4294967295,_=S+(A<<20&4294967295|A>>>12),A=m+(S^P&(_^S))+T[9]+568446438&4294967295,m=_+(A<<5&4294967295|A>>>27),A=P+(_^S&(m^_))+T[14]+3275163606&4294967295,P=m+(A<<9&4294967295|A>>>23),A=S+(m^_&(P^m))+T[3]+4107603335&4294967295,S=P+(A<<14&4294967295|A>>>18),A=_+(P^m&(S^P))+T[8]+1163531501&4294967295,_=S+(A<<20&4294967295|A>>>12),A=m+(S^P&(_^S))+T[13]+2850285829&4294967295,m=_+(A<<5&4294967295|A>>>27),A=P+(_^S&(m^_))+T[2]+4243563512&4294967295,P=m+(A<<9&4294967295|A>>>23),A=S+(m^_&(P^m))+T[7]+1735328473&4294967295,S=P+(A<<14&4294967295|A>>>18),A=_+(P^m&(S^P))+T[12]+2368359562&4294967295,_=S+(A<<20&4294967295|A>>>12),A=m+(_^S^P)+T[5]+4294588738&4294967295,m=_+(A<<4&4294967295|A>>>28),A=P+(m^_^S)+T[8]+2272392833&4294967295,P=m+(A<<11&4294967295|A>>>21),A=S+(P^m^_)+T[11]+1839030562&4294967295,S=P+(A<<16&4294967295|A>>>16),A=_+(S^P^m)+T[14]+4259657740&4294967295,_=S+(A<<23&4294967295|A>>>9),A=m+(_^S^P)+T[1]+2763975236&4294967295,m=_+(A<<4&4294967295|A>>>28),A=P+(m^_^S)+T[4]+1272893353&4294967295,P=m+(A<<11&4294967295|A>>>21),A=S+(P^m^_)+T[7]+4139469664&4294967295,S=P+(A<<16&4294967295|A>>>16),A=_+(S^P^m)+T[10]+3200236656&4294967295,_=S+(A<<23&4294967295|A>>>9),A=m+(_^S^P)+T[13]+681279174&4294967295,m=_+(A<<4&4294967295|A>>>28),A=P+(m^_^S)+T[0]+3936430074&4294967295,P=m+(A<<11&4294967295|A>>>21),A=S+(P^m^_)+T[3]+3572445317&4294967295,S=P+(A<<16&4294967295|A>>>16),A=_+(S^P^m)+T[6]+76029189&4294967295,_=S+(A<<23&4294967295|A>>>9),A=m+(_^S^P)+T[9]+3654602809&4294967295,m=_+(A<<4&4294967295|A>>>28),A=P+(m^_^S)+T[12]+3873151461&4294967295,P=m+(A<<11&4294967295|A>>>21),A=S+(P^m^_)+T[15]+530742520&4294967295,S=P+(A<<16&4294967295|A>>>16),A=_+(S^P^m)+T[2]+3299628645&4294967295,_=S+(A<<23&4294967295|A>>>9),A=m+(S^(_|~P))+T[0]+4096336452&4294967295,m=_+(A<<6&4294967295|A>>>26),A=P+(_^(m|~S))+T[7]+1126891415&4294967295,P=m+(A<<10&4294967295|A>>>22),A=S+(m^(P|~_))+T[14]+2878612391&4294967295,S=P+(A<<15&4294967295|A>>>17),A=_+(P^(S|~m))+T[5]+4237533241&4294967295,_=S+(A<<21&4294967295|A>>>11),A=m+(S^(_|~P))+T[12]+1700485571&4294967295,m=_+(A<<6&4294967295|A>>>26),A=P+(_^(m|~S))+T[3]+2399980690&4294967295,P=m+(A<<10&4294967295|A>>>22),A=S+(m^(P|~_))+T[10]+4293915773&4294967295,S=P+(A<<15&4294967295|A>>>17),A=_+(P^(S|~m))+T[1]+2240044497&4294967295,_=S+(A<<21&4294967295|A>>>11),A=m+(S^(_|~P))+T[8]+1873313359&4294967295,m=_+(A<<6&4294967295|A>>>26),A=P+(_^(m|~S))+T[15]+4264355552&4294967295,P=m+(A<<10&4294967295|A>>>22),A=S+(m^(P|~_))+T[6]+2734768916&4294967295,S=P+(A<<15&4294967295|A>>>17),A=_+(P^(S|~m))+T[13]+1309151649&4294967295,_=S+(A<<21&4294967295|A>>>11),A=m+(S^(_|~P))+T[4]+4149444226&4294967295,m=_+(A<<6&4294967295|A>>>26),A=P+(_^(m|~S))+T[11]+3174756917&4294967295,P=m+(A<<10&4294967295|A>>>22),A=S+(m^(P|~_))+T[2]+718787259&4294967295,S=P+(A<<15&4294967295|A>>>17),A=_+(P^(S|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(S+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,T=this.B,S=this.h,P=0;P<m;){if(S==0)for(;P<=_;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<m;)if(T[S++]=w.charCodeAt(P++),S==this.blockSize){i(this,T),S=0;break}}else for(;P<m;)if(T[S++]=w[P++],S==this.blockSize){i(this,T),S=0;break}}this.h=S,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)w[_++]=this.g[m]>>>T&255;return w};function s(w,m){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function o(w,m){this.h=m;for(var _=[],T=!0,S=w.length-1;0<=S;S--){var P=w[S]|0;T&&P==m||(_[S]=P,T=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?s(w,function(m){return new o([m|0],0>m?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return L(h(-w));for(var m=[],_=1,T=0;w>=_;T++)m[T]=w/_|0,_*=4294967296;return new o(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return L(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),T=p,S=0;S<w.length;S+=8){var P=Math.min(8,w.length-S),A=parseInt(w.substring(S,S+P),m);8>P?(P=h(Math.pow(m,P)),T=T.j(P).add(h(A))):(T=T.j(_),T=T.add(h(A)))}return T}var p=u(0),v=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-L(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(k(this))return"-"+L(this).toString(w);for(var m=h(Math.pow(w,6)),_=this,T="";;){var S=O(_,m).g;_=I(_,S.j(m));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=S,R(_))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=I(this,w),k(w)?-1:R(w)?0:1};function L(w){for(var m=w.g.length,_=[],T=0;T<m;T++)_[T]=~w.g[T];return new o(_,~w.h).add(v)}t.abs=function(){return k(this)?L(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0,S=0;S<=m;S++){var P=T+(this.i(S)&65535)+(w.i(S)&65535),A=(P>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);T=A>>>16,P&=65535,A&=65535,_[S]=A<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(w,m){return w.add(L(m))}t.j=function(w){if(R(this)||R(w))return p;if(k(this))return k(w)?L(this).j(L(w)):L(L(this).j(w));if(k(w))return L(this.j(L(w)));if(0>this.l(C)&&0>w.l(C))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<w.g.length;S++){var P=this.i(T)>>>16,A=this.i(T)&65535,Te=w.i(S)>>>16,ft=w.i(S)&65535;_[2*T+2*S]+=A*ft,y(_,2*T+2*S),_[2*T+2*S+1]+=P*ft,y(_,2*T+2*S+1),_[2*T+2*S+1]+=A*Te,y(_,2*T+2*S+1),_[2*T+2*S+2]+=P*Te,y(_,2*T+2*S+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new o(_,0)};function y(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function E(w,m){this.g=w,this.h=m}function O(w,m){if(R(m))throw Error("division by zero");if(R(w))return new E(p,p);if(k(w))return m=O(L(w),m),new E(L(m.g),L(m.h));if(k(m))return m=O(w,L(m)),new E(L(m.g),m.h);if(30<w.g.length){if(k(w)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,T=m;0>=T.l(w);)_=b(_),T=b(T);var S=B(_,1),P=B(T,1);for(T=B(T,2),_=B(_,2);!R(T);){var A=P.add(T);0>=A.l(w)&&(S=S.add(_),P=A),T=B(T,1),_=B(_,1)}return m=I(w,S.j(m)),new E(S,m)}for(S=p;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(_),A=P.j(m);k(A)||0<A.l(w);)_-=T,P=h(_),A=P.j(m);R(P)&&(P=v),S=S.add(P),w=I(w,A)}return new E(S,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&w.i(T);return new o(_,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|w.i(T);return new o(_,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^w.i(T);return new o(_,this.h^w.h)};function b(w){for(var m=w.g.length+1,_=[],T=0;T<m;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(_,w.h)}function B(w,m){var _=m>>5;m%=32;for(var T=w.g.length-_,S=[],P=0;P<T;P++)S[P]=0<m?w.i(P+_)>>>m|w.i(P+_+1)<<32-m:w.i(P+_);return new o(S,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,F_=o}).apply(typeof wg<"u"?wg:typeof self<"u"?self:typeof window<"u"?window:{});var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B_,Cs,j_,Ba,Mh,z_,H_,G_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ya=="object"&&ya];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,N={next:function(){if(!g&&d<a.length){var x=d++;return{value:c(x,a[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function v(a,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,v.apply(null,arguments)}function C(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,N,x){for(var j=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)j[ae-2]=arguments[ae];return c.prototype[N].apply(g,j)}}function k(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function L(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const N=a.length||0,x=g.length||0;a.length=N+x;for(let j=0;j<x;j++)a[N+j]=g[j]}else a.push(g)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function y(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var b=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function B(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let x=0;x<_.length;x++)d=_[x],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function S(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function A(){var a=$;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Te{constructor(){this.h=this.g=null}add(c,d){const g=ft.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var ft=new I(()=>new Jt,a=>a.reset());class Jt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,z=!1,$=new Te,W=()=>{const a=l.Promise.resolve(void 0);Ne=()=>{a.then(ie)}};var ie=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){P(d)}var c=ft;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Ce(a,c){if(ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(b){e:{try{O(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ue[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ce.aa.h.call(this)}}R(Ce,ee);var Ue={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),wu=0;function tw(a,c,d,g,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=N,this.key=++wu,this.da=this.fa=!1}function Mo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vo(a){this.src=a,this.g={},this.h=0}Vo.prototype.add=function(a,c,d,g,N){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var j=Tu(a,c,g,N);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new tw(c,this.src,x,!!g,N),c.fa=d,a.push(c)),c};function Iu(a,c){var d=c.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,c,void 0),x;(x=0<=N)&&Array.prototype.splice.call(g,N,1),x&&(Mo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Tu(a,c,d,g){for(var N=0;N<a.length;++N){var x=a[N];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==g)return N}return-1}var Au="closure_lm_"+(1e6*Math.random()|0),Su={};function kf(a,c,d,g,N){if(Array.isArray(c)){for(var x=0;x<c.length;x++)kf(a,c[x],d,g,N);return null}return d=Df(d),a&&a[st]?a.K(c,d,h(g)?!!g.capture:!!g,N):nw(a,c,d,!1,g,N)}function nw(a,c,d,g,N,x){if(!c)throw Error("Invalid event type");var j=h(N)?!!N.capture:!!N,ae=Ru(a);if(ae||(a[Au]=ae=new Vo(a)),d=ae.add(c,d,g,j,x),d.proxy)return d;if(g=rw(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Ae||(N=j),N===void 0&&(N=!1),a.addEventListener(c.toString(),g,N);else if(a.attachEvent)a.attachEvent(Of(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function rw(){function a(d){return c.call(a.src,a.listener,d)}const c=iw;return a}function Nf(a,c,d,g,N){if(Array.isArray(c))for(var x=0;x<c.length;x++)Nf(a,c[x],d,g,N);else g=h(g)?!!g.capture:!!g,d=Df(d),a&&a[st]?(a=a.i,c=String(c).toString(),c in a.g&&(x=a.g[c],d=Tu(x,d,g,N),-1<d&&(Mo(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[c],a.h--)))):a&&(a=Ru(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Tu(c,d,g,N)),(d=-1<a?c[a]:null)&&Cu(d))}function Cu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[st])Iu(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Of(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Ru(c))?(Iu(d,a),d.h==0&&(d.src=null,c[Au]=null)):Mo(a)}}}function Of(a){return a in Su?Su[a]:Su[a]="on"+a}function iw(a,c){if(a.da)a=!0;else{c=new Ce(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&Cu(a),a=d.call(g,c)}return a}function Ru(a){return a=a[Au],a instanceof Vo?a:null}var Pu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Df(a){return typeof a=="function"?a:(a[Pu]||(a[Pu]=function(c){return a.handleEvent(c)}),a[Pu])}function qe(){X.call(this),this.i=new Vo(this),this.M=this,this.F=null}R(qe,X),qe.prototype[st]=!0,qe.prototype.removeEventListener=function(a,c,d,g){Nf(this,a,c,d,g)};function ot(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new ee(c,a);else if(c instanceof ee)c.target=c.target||a;else{var N=c;c=new ee(g,a),T(c,N)}if(N=!0,d)for(var x=d.length-1;0<=x;x--){var j=c.g=d[x];N=bo(j,g,!0,c)&&N}if(j=c.g=a,N=bo(j,g,!0,c)&&N,N=bo(j,g,!1,c)&&N,d)for(x=0;x<d.length;x++)j=c.g=d[x],N=bo(j,g,!1,c)&&N}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)Mo(d[g]);delete a.g[c],a.h--}}this.F=null},qe.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},qe.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function bo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,x=0;x<c.length;++x){var j=c[x];if(j&&!j.da&&j.capture==d){var ae=j.listener,Fe=j.ha||j.src;j.fa&&Iu(a.i,j),N=ae.call(Fe,g)!==!1&&N}}return N&&!g.defaultPrevented}function Lf(a,c,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function xf(a){a.g=Lf(()=>{a.g=null,a.i&&(a.i=!1,xf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class sw extends X{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:xf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yi(a){X.call(this),this.h=a,this.g={}}R(Yi,X);var Mf=[];function Vf(a){B(a.g,function(c,d){this.g.hasOwnProperty(d)&&Cu(c)},a),a.g={}}Yi.prototype.N=function(){Yi.aa.N.call(this),Vf(this)},Yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ku=l.JSON.stringify,ow=l.JSON.parse,aw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Nu(){}Nu.prototype.h=null;function bf(a){return a.h||(a.h=a.i())}function Uf(){}var Ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ou(){ee.call(this,"d")}R(Ou,ee);function Du(){ee.call(this,"c")}R(Du,ee);var yr={},Ff=null;function Uo(){return Ff=Ff||new qe}yr.La="serverreachability";function Bf(a){ee.call(this,yr.La,a)}R(Bf,ee);function Zi(a){const c=Uo();ot(c,new Bf(c))}yr.STAT_EVENT="statevent";function jf(a,c){ee.call(this,yr.STAT_EVENT,a),this.stat=c}R(jf,ee);function at(a){const c=Uo();ot(c,new jf(c,a))}yr.Ma="timingevent";function zf(a,c){ee.call(this,yr.Ma,a),this.size=c}R(zf,ee);function es(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function lw(a,c,d,g,N,x){a.info(function(){if(a.g)if(x)for(var j="",ae=x.split("&"),Fe=0;Fe<ae.length;Fe++){var re=ae[Fe].split("=");if(1<re.length){var Ke=re[0];re=re[1];var Qe=Ke.split("_");j=2<=Qe.length&&Qe[1]=="type"?j+(Ke+"="+re+"&"):j+(Ke+"=redacted&")}}else j=null;else j=x;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+d+`
`+j})}function uw(a,c,d,g,N,x,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+d+`
`+x+" "+j})}function ti(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+hw(a,d)+(g?" "+g:"")})}function cw(a,c){a.info(function(){return"TIMEOUT: "+c})}ts.prototype.info=function(){};function hw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var x=N[0];if(x!="noop"&&x!="stop"&&x!="close")for(var j=1;j<N.length;j++)N[j]=""}}}}return ku(d)}catch{return c}}var Fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lu;function Bo(){}R(Bo,Nu),Bo.prototype.g=function(){return new XMLHttpRequest},Bo.prototype.i=function(){return{}},Lu=new Bo;function On(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new Yi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gf}function Gf(){this.i=null,this.g="",this.h=!1}var $f={},xu={};function Mu(a,c,d){a.L=1,a.v=Go(hn(c)),a.m=d,a.P=!0,Wf(a,null)}function Wf(a,c){a.F=Date.now(),jo(a),a.A=hn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),op(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Gf,a.g=Ap(a.j,d?c:null,!a.m),0<a.O&&(a.M=new sw(v(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Mf[0]=N.toString()),N=Mf);for(var x=0;x<N.length;x++){var j=kf(d,N[x],g||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Zi(),lw(a.i,a.u,a.A,a.l,a.R,a.m)}On.prototype.ca=function(a){a=a.target;const c=this.M;c&&dn(a)==3?c.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=dn(this.g);var c=this.g.Ba();const ii=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||fp(this.g)))){this.J||Qe!=4||c==7||(c==8||0>=ii?Zi(3):Zi(2)),Vu(this);var d=this.g.Z();this.X=d;t:if(qf(this)){var g=fp(this.g);a="";var N=g.length,x=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),ns(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(x&&c==N-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,uw(this.i,this.u,this.A,this.l,this.R,Qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,Fe=this.g;if((ae=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ae)){var re=ae;break t}}re=null}if(d=re)ti(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bu(this,d);else{this.o=!1,this.s=3,at(12),vr(this),ns(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<j.length;)if(Ut=dw(this,j),Ut==xu){Qe==4&&(this.s=4,at(14),d=!1),ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==$f){this.s=4,at(15),ti(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else ti(this.i,this.l,Ut,null),bu(this,Ut);if(qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||j.length!=0||this.h.h||(this.s=1,at(16),d=!1),this.o=this.o&&d,!d)ti(this.i,this.l,j,"[Invalid Chunked Response]"),vr(this),ns(this);else if(0<j.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Hu(Ke),Ke.M=!0,at(11))}}else ti(this.i,this.l,j,null),bu(this,j);Qe==4&&vr(this),this.o&&!this.J&&(Qe==4?Ep(this.j,this):(this.o=!1,jo(this)))}else kw(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),vr(this),ns(this)}}}catch{}finally{}};function qf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function dw(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?xu:(d=Number(c.substring(d,g)),isNaN(d)?$f:(g+=1,g+d>c.length?xu:(c=c.slice(g,g+d),a.C=g+d,c)))}On.prototype.cancel=function(){this.J=!0,vr(this)};function jo(a){a.S=Date.now()+a.I,Kf(a,a.I)}function Kf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=es(v(a.ba,a),c)}function Vu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}On.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(cw(this.i,this.A),this.L!=2&&(Zi(),at(17)),vr(this),this.s=2,ns(this)):Kf(this,this.S-a)};function ns(a){a.j.G==0||a.J||Ep(a.j,a)}function vr(a){Vu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Vf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function bu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Uu(d.h,a))){if(!a.K&&Uu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Xo(d),Ko(d);else break e;zu(d),at(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=es(v(d.Za,d),6e3));if(1>=Yf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Er(d,11)}else if((a.K||d.g==a)&&Xo(d),!y(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let re=N[c];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const Ke=re[3];Ke!=null&&(d.la=Ke,d.j.info("VER="+d.la));const Qe=re[4];Qe!=null&&(d.Aa=Qe,d.j.info("SVER="+d.Aa));const ii=re[5];ii!=null&&typeof ii=="number"&&0<ii&&(g=1.5*ii,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ut=a.g;if(Ut){const Jo=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jo){var x=g.h;x.g||Jo.indexOf("spdy")==-1&&Jo.indexOf("quic")==-1&&Jo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Fu(x,x.h),x.h=null))}if(g.D){const Gu=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Gu&&(g.ya=Gu,he(g.I,g.D,Gu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var j=a;if(g.qa=Tp(g,g.J?g.ia:null,g.W),j.K){Jf(g.h,j);var ae=j,Fe=g.L;Fe&&(ae.I=Fe),ae.B&&(Vu(ae),jo(ae)),g.g=j}else vp(g);0<d.i.length&&Qo(d)}else re[0]!="stop"&&re[0]!="close"||Er(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?Er(d,7):ju(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Zi(4)}catch{}}var fw=class{constructor(a,c){this.g=a,this.map=c}};function Qf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yf(a){return a.h?1:a.g?a.g.size:0}function Uu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Fu(a,c){a.g?a.g.add(c):a.h=c}function Jf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Qf.prototype.cancel=function(){if(this.i=Zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return k(a.i)}function pw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function mw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function ep(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=mw(a),g=pw(a),N=g.length,x=0;x<N;x++)c.call(void 0,g[x],d&&d[x],a)}var tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),N=null;if(0<=g){var x=a[d].substring(0,g);N=a[d].substring(g+1)}else x=a[d];c(x,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function _r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _r){this.h=a.h,zo(this,a.j),this.o=a.o,this.g=a.g,Ho(this,a.s),this.l=a.l;var c=a.i,d=new ss;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),np(this,d),this.m=a.m}else a&&(c=String(a).match(tp))?(this.h=!1,zo(this,c[1]||"",!0),this.o=rs(c[2]||""),this.g=rs(c[3]||"",!0),Ho(this,c[4]),this.l=rs(c[5]||"",!0),np(this,c[6]||"",!0),this.m=rs(c[7]||"")):(this.h=!1,this.i=new ss(null,this.h))}_r.prototype.toString=function(){var a=[],c=this.j;c&&a.push(is(c,rp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(is(c,rp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(is(d,d.charAt(0)=="/"?_w:vw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",is(d,ww)),a.join("")};function hn(a){return new _r(a)}function zo(a,c,d){a.j=d?rs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ho(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function np(a,c,d){c instanceof ss?(a.i=c,Iw(a.i,a.h)):(d||(c=is(c,Ew)),a.i=new ss(c,a.h))}function he(a,c,d){a.i.set(c,d)}function Go(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function rs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function is(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,yw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rp=/[#\/\?@]/g,vw=/[#\?:]/g,_w=/[#\?]/g,Ew=/[#\?@]/g,ww=/#/g;function ss(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&gw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ss.prototype,t.add=function(a,c){Dn(this),this.i=null,a=ni(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function ip(a,c){Dn(a),c=ni(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function sp(a,c){return Dn(a),c=ni(a,c),a.g.has(c)}t.forEach=function(a,c){Dn(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(c,N,g,this)},this)},this)},t.na=function(){Dn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const N=a[g];for(let x=0;x<N.length;x++)d.push(c[g])}return d},t.V=function(a){Dn(this);let c=[];if(typeof a=="string")sp(this,a)&&(c=c.concat(this.g.get(ni(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Dn(this),this.i=null,a=ni(this,a),sp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function op(a,c,d){ip(a,c),0<d.length&&(a.i=null,a.g.set(ni(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const x=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var N=x;j[g]!==""&&(N+="="+encodeURIComponent(String(j[g]))),a.push(N)}}return this.i=a.join("&")};function ni(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Iw(a,c){c&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(d,g){var N=g.toLowerCase();g!=N&&(ip(this,g),op(this,N,d))},a)),a.j=c}function Tw(a,c){const d=new ts;if(l.Image){const g=new Image;g.onload=C(Ln,d,"TestLoadImage: loaded",!0,c,g),g.onerror=C(Ln,d,"TestLoadImage: error",!1,c,g),g.onabort=C(Ln,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=C(Ln,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function Aw(a,c){const d=new ts,g=new AbortController,N=setTimeout(()=>{g.abort(),Ln(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(N),x.ok?Ln(d,"TestPingServer: ok",!0,c):Ln(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Ln(d,"TestPingServer: error",!1,c)})}function Ln(a,c,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function Sw(){this.g=new aw}function Cw(a,c,d){const g=d||"";try{ep(a,function(N,x){let j=N;h(N)&&(j=ku(N)),c.push(g+x+"="+encodeURIComponent(j))})}catch(N){throw c.push(g+"type="+encodeURIComponent("_badmap")),N}}function $o(a){this.l=a.Ub||null,this.j=a.eb||!1}R($o,Nu),$o.prototype.g=function(){return new Wo(this.l,this.j)},$o.prototype.i=function(a){return function(){return a}}({});function Wo(a,c){qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Wo,qe),t=Wo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,as(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ap(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ap(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?os(this):as(this),this.readyState==3&&ap(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,os(this))},t.Qa=function(a){this.g&&(this.response=a,os(this))},t.ga=function(){this.g&&os(this)};function os(a){a.readyState=4,a.l=null,a.j=null,a.v=null,as(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function as(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lp(a){let c="";return B(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Bu(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=lp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function _e(a){qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(_e,qe);var Rw=/^https?$/i,Pw=["POST","PUT"];t=_e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lu.g(),this.v=this.o?bf(this.o):bf(Lu),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(x){up(this,x);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())d.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Pw,c,void 0))||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,j]of d)this.g.setRequestHeader(x,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dp(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){up(this,x)}};function up(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,cp(a),qo(a)}function cp(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),qo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qo(this,!0)),_e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hp(this):this.bb())},t.bb=function(){hp(this)};function hp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dn(a)!=4||a.Z()!=2)){if(a.u&&dn(a)==4)Lf(a.Ea,0,a);else if(ot(a,"readystatechange"),dn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=j===0){var N=String(a.D).match(tp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!Rw.test(N?N.toLowerCase():"")}d=g}if(d)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var x=2<dn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",cp(a)}}finally{qo(a)}}}}function qo(a,c){if(a.g){dp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ot(a,"ready");try{d.onreadystatechange=g}catch{}}}function dp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),ow(c)}};function fp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kw(a){const c={};a=(a.g&&2<=dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=S(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[N]||[];c[N]=x,x.push(d)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ls(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function pp(a){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ls("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ls("baseRetryDelayMs",5e3,a),this.cb=ls("retryDelaySeedMs",1e4,a),this.Wa=ls("forwardChannelMaxRetries",2,a),this.wa=ls("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qf(a&&a.concurrentRequestLimit),this.Da=new Sw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){at(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Tp(this,null,this.W),Qo(this)};function ju(a){if(mp(a),a.G==3){var c=a.U++,d=hn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),us(a,d),c=new On(a,a.j,c),c.L=2,c.v=Go(hn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ap(c.j,null),c.g.ea(c.v)),c.F=Date.now(),jo(c)}Ip(a)}function Ko(a){a.g&&(Hu(a),a.g.cancel(),a.g=null)}function mp(a){Ko(a),a.u&&(l.clearTimeout(a.u),a.u=null),Xo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Qo(a){if(!Xf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ne||W(),z||(Ne(),z=!0),$.add(c,a),a.B=0}}function Nw(a,c){return Yf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=es(v(a.Ga,a,c),wp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new On(this,this.j,a);let x=this.o;if(this.S&&(x?(x=m(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(N.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=yp(this,N,c),d=hn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),us(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(lp(x)))+"&"+c:this.m&&Bu(d,this.m,x)),Fu(this.h,N),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),N.T=!0,Mu(N,d,null)):Mu(N,d,c),this.G=2}}else this.G==3&&(a?gp(this,a):this.i.length==0||Xf(this.h)||gp(this))};function gp(a,c){var d;c?d=c.l:d=a.U++;const g=hn(a.I);he(g,"SID",a.K),he(g,"RID",d),he(g,"AID",a.T),us(a,g),a.m&&a.o&&Bu(g,a.m,a.o),d=new On(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=yp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fu(a.h,d),Mu(d,g,c)}function us(a,c){a.H&&B(a.H,function(d,g){he(c,g,d)}),a.l&&ep({},function(d,g){he(c,g,d)})}function yp(a,c,d){d=Math.min(a.i.length,d);var g=a.l?v(a.l.Na,a.l,a):null;e:{var N=a.i;let x=-1;for(;;){const j=["count="+d];x==-1?0<d?(x=N[0].g,j.push("ofs="+x)):x=0:j.push("ofs="+x);let ae=!0;for(let Fe=0;Fe<d;Fe++){let re=N[Fe].g;const Ke=N[Fe].map;if(re-=x,0>re)x=Math.max(0,N[Fe].g-100),ae=!1;else try{Cw(Ke,j,"req"+re+"_")}catch{g&&g(Ke)}}if(ae){g=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function vp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ne||W(),z||(Ne(),z=!0),$.add(c,a),a.v=0}}function zu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=es(v(a.Fa,a),wp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_p(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=es(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Ko(this),_p(this))};function Hu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function _p(a){a.g=new On(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=hn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),us(a,c),a.m&&a.o&&Bu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Go(hn(c)),d.m=null,d.P=!0,Wf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ko(this),zu(this),at(19))};function Xo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ep(a,c){var d=null;if(a.g==c){Xo(a),Hu(a),a.g=null;var g=2}else if(Uu(a.h,c))d=c.D,Jf(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;g=Uo(),ot(g,new zf(g,d)),Qo(a)}else vp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(g==1&&Nw(a,c)||g==2&&zu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function wp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Er(a,c){if(a.j.info("Error code "+c),c==2){var d=v(a.fb,a),g=a.Xa;const N=!g;g=new _r(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zo(g,"https"),Go(g),N?Tw(g.toString(),d):Aw(g.toString(),d)}else at(2);a.G=0,a.l&&a.l.sa(c),Ip(a),mp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Ip(a){if(a.G=0,a.ka=[],a.l){const c=Zf(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Tp(a,c,d){var g=d instanceof _r?hn(d):new _r(d);if(g.g!="")c&&(g.g=c+"."+g.g),Ho(g,g.s);else{var N=l.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var x=new _r(null);g&&zo(x,g),c&&(x.g=c),N&&Ho(x,N),d&&(x.l=d),g=x}return d=a.D,c=a.ya,d&&c&&he(g,d,c),he(g,"VER",a.la),us(a,g),g}function Ap(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new _e(new $o({eb:d})):new _e(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sp(){}t=Sp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yo(){}Yo.prototype.g=function(a,c){return new It(a,c)};function It(a,c){qe.call(this),this.g=new pp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!y(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ri(this)}R(It,qe),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){ju(this.g)},It.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ku(a),a=d);c.i.push(new fw(c.Ya++,a)),c.G==3&&Qo(c)},It.prototype.N=function(){this.g.l=null,delete this.j,ju(this.g),delete this.g,It.aa.N.call(this)};function Cp(a){Ou.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Cp,Ou);function Rp(){Du.call(this),this.status=1}R(Rp,Du);function ri(a){this.g=a}R(ri,Sp),ri.prototype.ua=function(){ot(this.g,"a")},ri.prototype.ta=function(a){ot(this.g,new Cp(a))},ri.prototype.sa=function(a){ot(this.g,new Rp)},ri.prototype.ra=function(){ot(this.g,"b")},Yo.prototype.createWebChannel=Yo.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,G_=function(){return new Yo},H_=function(){return Uo()},z_=yr,Mh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,Ba=Fo,Hf.COMPLETE="complete",j_=Hf,Uf.EventType=Ji,Ji.OPEN="a",Ji.CLOSE="b",Ji.ERROR="c",Ji.MESSAGE="d",qe.prototype.listen=qe.prototype.K,Cs=Uf,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,B_=_e}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});const Ig="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new nu("@firebase/firestore");function oi(){return Hr.logLevel}function G(t,...e){if(Hr.logLevel<=J.DEBUG){const n=e.map(of);Hr.debug(`Firestore (${Ki}): ${t}`,...n)}}function Gr(t,...e){if(Hr.logLevel<=J.ERROR){const n=e.map(of);Hr.error(`Firestore (${Ki}): ${t}`,...n)}}function Sl(t,...e){if(Hr.logLevel<=J.WARN){const n=e.map(of);Hr.warn(`Firestore (${Ki}): ${t}`,...n)}}function of(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: `+t;throw Gr(e),new Error(e)}function Ie(t,e){t||Z()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _P{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class EP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wP{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new $_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Ze(e)}}class IP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ie(this.o===void 0);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new AP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Ui(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new be(0,0))}static max(){return new pe(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends co{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const RP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends co{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return RP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(we.fromString(e))}static fromName(e){return new Q(we.fromString(e).popFirst(5))}static empty(){return new Q(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new we(e.slice()))}}function PP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new lr(i,Q.empty(),e)}function kP(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(pe.min(),Q.empty(),-1)}static max(){return new lr(pe.max(),Q.empty(),-1)}}function NP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==OP)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function LP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function No(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}lf.oe=-1;function uf(t){return t==null}function Cl(t){return t===0&&1/t==-1/0}function xP(t){return typeof t=="number"&&Number.isInteger(t)&&!Cl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Tg(e)),e=VP(t.get(n),e);return Tg(e)}function VP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Tg(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function q_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new wt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new wt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new va(this.root,e,this.comparator,!1)}getReverseIterator(){return new va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new va(this.root,e,this.comparator,!0)}}class va{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new wt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sg(this.data.getIterator())}getIteratorFrom(e){return new Sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new $t([])}unionWith(e){let n=new $e(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bP("Invalid base64 string: "+s):s}}(e);return new un(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new un(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}un.EMPTY_BYTE_STRING=new un("");const UP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $r(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=UP.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?un.fromBase64String(t):un.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hf(t){const e=t.mapValue.fields.__previous_value__;return cf(e)?hf(e):e}function Rl(t){const e=$r(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Pl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cf(t)?4:jP(t)?9007199254740991:BP(t)?10:11:Z()}function cn(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rl(t).isEqual(Rl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=$r(i.timestampValue),l=$r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fi(i.bytesValue).isEqual(Fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),l=ze(s.doubleValue);return o===l?Cl(o)===Cl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ui(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ag(o)!==Ag(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function ho(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function Bi(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cg(t.timestampValue,e.timestampValue);case 4:return Cg(Rl(t),Rl(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Fi(s),u=Fi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(ze(s.latitude),ze(o.latitude));return l!==0?l:se(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Rg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},v=o.fields||{},C=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=v.value)===null||u===void 0?void 0:u.arrayValue,k=se(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Rg(C,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===_a.mapValue&&o===_a.mapValue)return 0;if(s===_a.mapValue)return 1;if(o===_a.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const v=se(u[p],f[p]);if(v!==0)return v;const C=Bi(l[u[p]],h[f[p]]);if(C!==0)return C}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=$r(t),r=$r(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Rg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Bi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function ji(t){return Vh(t)}function Vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vh(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function ja(t){switch(Wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hf(t);return e?16+ja(e):16;case 5:return 2*t.stringValue.length;case 6:return Fi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ja(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Qi(r.fields,(s,o)=>{i+=s.length+ja(o)}),i}(t.mapValue);default:throw Z()}}function bh(t){return!!t&&"integerValue"in t}function df(t){return!!t&&"arrayValue"in t}function za(t){return!!t&&"mapValue"in t}function BP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Us(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Gt(Us(this.value))}}function K_(t){const e=[];return Qi(t.fields,(n,r)=>{const i=new He([n]);if(za(r)){const s=K_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ht(e,0,pe.min(),pe.min(),pe.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ht(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new Ht(e,2,n,pe.min(),pe.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,pe.min(),pe.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.position=e,this.inclusive=n}}function Pg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function kg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n="asc"){this.field=e,this.dir=n}}function zP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{}class Me extends Q_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GP(e,n,r):n==="array-contains"?new qP(e,r):n==="in"?new KP(e,r):n==="not-in"?new QP(e,r):n==="array-contains-any"?new XP(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $P(e,r):new WP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bi(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(Bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends Q_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ur(e,n)}matches(e){return X_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function X_(t){return t.op==="and"}function Y_(t){return HP(t)&&X_(t)}function HP(t){for(const e of t.filters)if(e instanceof ur)return!1;return!0}function Uh(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+ji(t.value);if(Y_(t))return t.filters.map(e=>Uh(e)).join(",");{const e=t.filters.map(n=>Uh(n)).join(",");return`${t.op}(${e})`}}function J_(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&cn(r.value,i.value)}(t,e):t instanceof ur?function(r,i){return i instanceof ur&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&J_(o,i.filters[l]),!0):!1}(t,e):void Z()}function Z_(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${ji(n.value)}`}(t):t instanceof ur?function(n){return n.op.toString()+" {"+n.getFilters().map(Z_).join(" ,")+"}"}(t):"Filter"}class GP extends Me{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class $P extends Me{constructor(e,n){super(e,"in",n),this.keys=eE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WP extends Me{constructor(e,n){super(e,"not-in",n),this.keys=eE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class qP extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return df(n)&&ho(n.arrayValue,this.value)}}class KP extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class QP extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class XP extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ng(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YP(t,e,n,r,i,s,o)}function ff(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),uf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ji(r)).join(",")),e.ue=n}return e.ue}function pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!J_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kg(t.startAt,e.startAt)&&kg(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function JP(t,e,n,r,i,s,o,l){return new lu(t,e,n,r,i,s,o,l)}function ZP(t){return new lu(t)}function Og(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ek(t){return t.collectionGroup!==null}function Fs(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Nl(s,r))}),n.has(He.keyField().canonicalString())||e.ce.push(new Nl(He.keyField(),r))}return e.ce}function Dr(t){const e=ce(t);return e.le||(e.le=tk(e,Fs(t))),e.le}function tk(t,e){if(t.limitType==="F")return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nl(i.field,s)});const n=t.endAt?new kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kl(t.startAt.position,t.startAt.inclusive):null;return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fh(t,e,n){return new lu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tE(t,e){return pf(Dr(t),Dr(e))&&t.limitType===e.limitType}function nE(t){return`${ff(Dr(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Z_(i)).join(", ")}]`),uf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ji(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ji(i)).join(",")),`Target(${r})`}(Dr(t))}; limitType=${t.limitType})`}function mf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Pg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Fs(r),i)||r.endAt&&!function(o,l,u){const h=Pg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Fs(r),i))}(t,e)}function nk(t){return(e,n)=>{let r=!1;for(const i of Fs(t)){const s=rk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rk(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Bi(u,h):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return q_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new wt(Q.comparator);function Ol(){return ik}const rE=new wt(Q.comparator);function Ea(...t){let e=rE;for(const n of t)e=e.insert(n.key,n);return e}function iE(t){let e=rE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return Bs()}function sE(){return Bs()}function Bs(){return new Jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const sk=new wt(Q.comparator),ok=new $e(Q.comparator);function tt(...t){let e=ok;for(const n of t)e=e.add(n);return e}const ak=new $e(se);function lk(){return ak}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cl(e)?"-0":e}}function oE(t){return{integerValue:""+t}}function uk(t,e){return xP(e)?oE(e):gf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this._=void 0}}function ck(t,e,n){return t instanceof Dl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cf(s)&&(s=hf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fo?lE(t,e):t instanceof po?uE(t,e):function(i,s){const o=aE(i,s),l=Dg(o)+Dg(i.Pe);return bh(o)&&bh(i.Pe)?oE(l):gf(i.serializer,l)}(t,e)}function hk(t,e,n){return t instanceof fo?lE(t,e):t instanceof po?uE(t,e):n}function aE(t,e){return t instanceof Ll?function(r){return bh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Dl extends uu{}class fo extends uu{constructor(e){super(),this.elements=e}}function lE(t,e){const n=cE(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends uu{constructor(e){super(),this.elements=e}}function uE(t,e){let n=cE(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class Ll extends uu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Dg(t){return ze(t.integerValue||t.doubleValue)}function cE(t){return df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fo&&i instanceof fo||r instanceof po&&i instanceof po?Ui(r.elements,i.elements,cn):r instanceof Ll&&i instanceof Ll?cn(r.Pe,i.Pe):r instanceof Dl&&i instanceof Dl}(t.transform,e.transform)}class fk{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cu{}function hE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fE(t.key,In.none()):new Oo(t.key,t.data,In.none());{const n=t.data,r=Gt.empty();let i=new $e(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zr(t.key,r,new $t(i.toArray()),In.none())}}function pk(t,e,n){t instanceof Oo?function(i,s,o){const l=i.value.clone(),u=xg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(i,s,o){if(!Ha(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=xg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(dE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function js(t,e,n,r){return t instanceof Oo?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=s.value.clone(),f=Mg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zr?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=Mg(s.fieldTransforms,u,o),f=o.data;return f.setAll(dE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ha(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=aE(r.transform,i||null);s!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,s))}return n||null}function Lg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ui(r,i,(s,o)=>dk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends cu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zr extends cu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xg(t,e,n){const r=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,hk(o,l,n[i]))}return r}function Mg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ck(s,o,e))}return r}class fE extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gk extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=hE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),tt())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(n,r)=>Lg(n,r))&&Ui(this.baseMutations,e.baseMutations,(n,r)=>Lg(n,r))}}class yf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ie(e.mutations.length===r.length);let i=function(){return sk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,te;function _k(t){switch(t){default:return Z();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Ek(t){if(t===void 0)return Gr("GRPC error has no .code"),F.UNKNOWN;switch(t){case Re.OK:return F.OK;case Re.CANCELLED:return F.CANCELLED;case Re.UNKNOWN:return F.UNKNOWN;case Re.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Re.INTERNAL:return F.INTERNAL;case Re.UNAVAILABLE:return F.UNAVAILABLE;case Re.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Re.NOT_FOUND:return F.NOT_FOUND;case Re.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Re.ABORTED:return F.ABORTED;case Re.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Re.DATA_LOSS:return F.DATA_LOSS;default:return Z()}}(te=Re||(Re={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new F_([4294967295,4294967295],0);class wk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ik(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tk(t,e){return Bh(t,e.toTimestamp())}function Ni(t){return Ie(!!t),pe.fromTimestamp(function(n){const r=$r(n);return new be(r.seconds,r.nanos)}(t))}function pE(t,e){return jh(t,e).canonicalString()}function jh(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ak(t){const e=we.fromString(t);return Ie(Dk(e)),e}function zh(t,e){return pE(t.databaseId,e.path)}function Sk(t){const e=Ak(t);return e.length===4?we.emptyPath():Rk(e)}function Ck(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rk(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vg(t,e,n){return{name:zh(t,e),fields:n.value.mapValue.fields}}function Pk(t,e){let n;if(e instanceof Oo)n={update:Vg(t,e.key,e.value)};else if(e instanceof fE)n={delete:zh(t,e.key)};else if(e instanceof Zr)n={update:Vg(t,e.key,e.data),updateMask:Ok(e.fieldMask)};else{if(!(e instanceof gk))return Z();n={verify:zh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ll)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Tk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function kk(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ni(i.updateTime):Ni(s);return o.isEqual(pe.min())&&(o=Ni(s)),new fk(o,i.transformResults||[])}(n,e))):[]}function Nk(t){let e=Sk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ie(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const v=mE(p);return v instanceof ur&&Y_(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(v=>function(R){return new Nl(ai(R.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,uf(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(p){const v=!!p.before,C=p.values||[];return new kl(C,v)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const v=!p.before,C=p.values||[];return new kl(C,v)}(n.endAt)),JP(e,i,o,s,l,"F",u,h)}function mE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ai(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ai(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ai(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ai(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(ai(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ur.create(n.compositeFilter.filters.map(r=>mE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function ai(t){return He.fromServerFormat(t.fieldPath)}function Ok(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.ct=e}}function xk(t){const e=Nk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.un=new Vk}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(lr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Vk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class pt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(41943040,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new zi(0)}static kn(){return new zi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class bk{constructor(e){this.Un=e,this.buffer=new $e(Ug),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ug(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Uk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){G("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){No(n)?G("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await af(n)}await this.Hn(3e5)})}}class Fk{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(lf.oe);const r=new bk(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(bg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bg):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),oi()<=J.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function Bk(t,e){return new Fk(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.changes=new Jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&js(r.mutation,i,$t.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,tt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=tt()){const i=Pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ea();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,tt()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ol();const o=Bs(),l=function(){return Bs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Zr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),js(f.mutation,h,f.mutation.getFieldMask(),be.now())):o.set(h.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new zk(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Bs();let i=new wt((o,l)=>o-l),s=tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||$t.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||tt()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=sE();f.forEach(v=>{if(!s.has(v)){const C=hE(n.get(v),r.get(v));C!==null&&p.set(v,C),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ek(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Pr());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,tt())).next(f=>({batchId:l,changes:iE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Ea();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ea();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,v){return new lu(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ht.newInvalidDocument(f)))});let l=Ea();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&js(f.mutation,h,$t.empty(),be.now()),mf(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ni(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:xk(i.bundledQuery),readTime:Ni(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.overlays=new wt(Q.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Pr(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new wt((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Pr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Pr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vk(n,r));let s=this.Ir.get(n);s===void 0&&(s=tt(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.sessionToken=un.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.Tr=new $e(Le.Er),this.dr=new $e(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Le(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new we([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new we([])),r=new Le(n,e),i=new Le(n,e+1);let s=tt();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $e(Le.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(se);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Le(new Q(s),0);let l=new $e(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Le(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.Mr=e,this.docs=function(){return new wt(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let r=Ol();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ht.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ol();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||NP(kP(f),r)<=0||(i.has(f.key)||mf(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qk(this)}getSize(e){return M.resolve(this.size)}}class Qk extends jk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.persistence=e,this.Nr=new Jr(n=>ff(n),pf),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vf,this.targetCount=0,this.kr=zi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n){this.qr={},this.overlays={},this.Qr=new lf(0),this.Kr=!1,this.Kr=!0,this.$r=new Wk,this.referenceDelegate=e(this),this.Ur=new Xk(this),this.indexManager=new Mk,this.remoteDocumentCache=function(i){return new Kk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Lk(n),this.Gr=new Gk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $k,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new qk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new Yk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Yk extends DP{constructor(e){super(),this.currentSequenceNumber=e}}class _f{constructor(e){this.persistence=e,this.Jr=new vf,this.Yr=null}static Zr(e){return new _f(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class xl{constructor(e,n){this.persistence=e,this.ti=new Jr(r=>MP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Bk(this,n)}static Zr(e,n){return new xl(e,n)}zr(){}jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return M.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,pe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),M.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ja(e.data.value)),n}nr(e,n,r){return M.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=tt(),i=tt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ef(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _T()?8:LP(rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Jk;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(oi()<=J.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(oi()<=J.DEBUG&&G("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(oi()<=J.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(n))):M.resolve())}Yi(e,n){if(Og(n))return M.resolve(null);let r=Dr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fh(n,null,"F"),r=Dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=tt(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Fh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Og(n)||i.isEqual(pe.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(oi()<=J.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vs(n)),this.rs(e,o,n,PP(i,-1)).next(l=>l))})}ts(e,n){let r=new $e(nk(e));return n.forEach((i,s)=>{mf(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return oi()<=J.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",vs(n)),this.Ji.getDocumentsMatchingQuery(e,n,lr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new wt(se),this._s=new Jr(s=>ff(s),pf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function t2(t,e,n,r){return new e2(t,e,n,r)}async function yE(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=tt();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function n2(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,v=p.keys();let C=M.resolve();return v.forEach(R=>{C=C.next(()=>f.getEntry(u,R)).next(k=>{const L=h.docVersions.get(R);Ie(L!==null),k.version.compareTo(L)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=tt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function r2(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function i2(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Fg{constructor(){this.activeTargetIds=lk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class s2{constructor(){this.so=new Fg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa=null;function Rc(){return wa===null?wa=function(){return 268435456+Math.round(2147483648*Math.random())}():wa++,"0x"+wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class u2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Rc(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(G("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Sl("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ki}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=a2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Rc();return new Promise((o,l)=>{const u=new B_;u.setWithCredentials(!0),u.listenOnce(j_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ba.NO_ERROR:const f=u.getResponseJson();G(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ba.TIMEOUT:G(Je,`RPC '${e}' ${s} timed out`),l(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const p=u.getStatus();if(G(Je,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const C=v==null?void 0:v.error;if(C&&C.status&&C.message){const R=function(L){const I=L.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(I)>=0?I:F.UNKNOWN}(C.status);l(new K(R,C.message))}else l(new K(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(F.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{G(Je,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);G(Je,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Rc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=G_(),l=H_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");G(Je,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let v=!1,C=!1;const R=new l2({Io:L=>{C?G(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(v||(G(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),v=!0),G(Je,`RPC '${e}' stream ${i} sending:`,L),p.send(L))},To:()=>p.close()}),k=(L,I,y)=>{L.listen(I,E=>{try{y(E)}catch(O){setTimeout(()=>{throw O},0)}})};return k(p,Cs.EventType.OPEN,()=>{C||(G(Je,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),k(p,Cs.EventType.CLOSE,()=>{C||(C=!0,G(Je,`RPC '${e}' stream ${i} transport closed`),R.So())}),k(p,Cs.EventType.ERROR,L=>{C||(C=!0,Sl(Je,`RPC '${e}' stream ${i} transport errored:`,L),R.So(new K(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,Cs.EventType.MESSAGE,L=>{var I;if(!C){const y=L.data[0];Ie(!!y);const E=y,O=E.error||((I=E[0])===null||I===void 0?void 0:I.error);if(O){G(Je,`RPC '${e}' stream ${i} received error:`,O);const b=O.status;let B=function(_){const T=Re[_];if(T!==void 0)return Ek(T)}(b),w=O.message;B===void 0&&(B=F.INTERNAL,w="Unknown error status: "+b+" with message "+O.message),C=!0,R.So(new K(B,w)),p.close()}else G(Je,`RPC '${e}' stream ${i} received:`,y),R.bo(y)}}),k(l,z_.STAT_EVENT,L=>{L.stat===Mh.PROXY?G(Je,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Mh.NOPROXY&&G(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){return new wk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new vE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Gr(n.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h2 extends c2{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kk(e.writeResults,e.commitTime),r=Ni(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ck(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Pk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,jh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,jh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class f2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gr(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Lo(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ce(u);h.L_.add(4),await Do(h),h.q_.set("Unknown"),h.L_.delete(4),await du(h)}(this))})}),this.q_=new f2(r,i)}}async function du(t){if(Lo(t))for(const e of t.B_)await e(!0)}async function Do(t){for(const e of t.B_)await e(!1)}function Lo(t){return ce(t).L_.size===0}async function _E(t,e,n){if(!No(e))throw e;t.L_.add(1),await Do(t),t.q_.set("Offline"),n||(n=()=>r2(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await du(t)})}function EE(t,e){return e().catch(n=>_E(t,n,e))}async function fu(t){const e=ce(t),n=cr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;m2(e);)try{const i=await i2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,g2(e,i)}catch(i){await _E(e,i)}wE(e)&&IE(e)}function m2(t){return Lo(t)&&t.O_.length<10}function g2(t,e){t.O_.push(e);const n=cr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function wE(t){return Lo(t)&&!cr(t).n_()&&t.O_.length>0}function IE(t){cr(t).start()}async function y2(t){cr(t).p_()}async function v2(t){const e=cr(t);for(const n of t.O_)e.m_(n.mutations)}async function _2(t,e,n){const r=t.O_.shift(),i=yf.from(r,e,n);await EE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fu(t)}async function E2(t,e){e&&cr(t).V_&&await async function(r,i){if(function(o){return _k(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();cr(r).s_(),await EE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await fu(r)}}(t,e),wE(t)&&IE(t)}async function jg(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Lo(n);n.L_.add(3),await Do(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await du(n)}async function w2(t,e){const n=ce(t);e?(n.L_.delete(2),await du(n)):e||(n.L_.add(2),await Do(n),n.q_.set("Unknown"))}function cr(t){return t.U_||(t.U_=function(n,r,i){const s=ce(n);return s.w_(),new h2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:y2.bind(null,t),mo:E2.bind(null,t),f_:v2.bind(null,t),g_:_2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await fu(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new wf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function TE(t,e){if(Gr("AsyncQueue",`${e}: ${t}`),No(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}class I2{constructor(){this.queries=zg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ce(n),s=i.queries;i.queries=zg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function zg(){return new Jr(t=>nE(t),tE)}function T2(t){t.Y_.forEach(e=>{e.next()})}var Hg,Gg;(Gg=Hg||(Hg={})).ea="default",Gg.Cache="cache";class A2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Jr(l=>nE(l),tE),this.Ma=new Map,this.xa=new Set,this.Oa=new wt(Q.comparator),this.Na=new Map,this.La=new vf,this.Ba={},this.ka=new Map,this.qa=zi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function S2(t,e,n){const r=k2(t);try{const i=await function(o,l){const u=ce(o),h=be.now(),f=l.reduce((C,R)=>C.add(R.key),tt());let p,v;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let R=Ol(),k=tt();return u.cs.getEntries(C,f).next(L=>{R=L,R.forEach((I,y)=>{y.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,R)).next(L=>{p=L;const I=[];for(const y of l){const E=mk(y,p.get(y.key).overlayedDocument);E!=null&&I.push(new Zr(y.key,E,K_(E.value.mapValue),In.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,I,l)}).next(L=>{v=L;const I=L.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(C,L.batchId,I)})}).then(()=>({batchId:v.batchId,changes:iE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new wt(se)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await pu(r,i.changes),await fu(r.remoteStore)}catch(i){const s=TE(i,"Failed to persist write");n.reject(s)}}function $g(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ce(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const v of p.j_)v.Z_(l)&&(h=!0)}),h&&T2(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function C2(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await n2(n.localStore,e);SE(n,r,null),AE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pu(n,i)}catch(i){await af(i)}}async function R2(t,e,n){const r=ce(t);try{const i=await function(o,l){const u=ce(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ie(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);SE(r,e,n),AE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pu(r,i)}catch(i){await af(i)}}function AE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function SE(t,e,n){const r=ce(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function pu(t,e,n){const r=ce(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Ef.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=ce(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,v=>M.forEach(v.$i,C=>f.persistence.referenceDelegate.addReference(p,v.targetId,C)).next(()=>M.forEach(v.Ui,C=>f.persistence.referenceDelegate.removeReference(p,v.targetId,C)))))}catch(p){if(!No(p))throw p;G("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const C=f.os.get(v),R=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(v,k)}}}(r.localStore,s))}async function P2(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await yE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pu(n,r.hs)}}function k2(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=C2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=R2.bind(null,e),e}class Ml{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return t2(this.persistence,new Zk,e.initialUser,this.serializer)}Ga(e){return new gE(_f.Zr,this.serializer)}Wa(e){return new s2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ml.provider={build:()=>new Ml};class N2 extends Ml{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Ie(this.persistence.referenceDelegate instanceof xl);const r=this.persistence.referenceDelegate.garbageCollector;return new Uk(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new gE(r=>xl.Zr(r,n),this.serializer)}}class Hh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$g(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=P2.bind(null,this.syncEngine),await w2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new I2}()}createDatastore(e){const n=hu(e.databaseInfo.databaseId),r=function(s){return new u2(s)}(e.databaseInfo);return function(s,o,l,u){return new d2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new p2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$g(this.syncEngine,n,0),function(){return Bg.D()?new Bg:new o2}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new A2(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ce(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Do(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hh.provider={build:()=>new Hh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=W_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=TE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kc(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await D2(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>jg(e.remoteStore,i)),t._onlineComponents=e}async function D2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Sl("Error using user provided cache. Falling back to memory cache: "+n),await kc(t,new Ml)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await kc(t,new N2(void 0));return t._offlineComponents}async function L2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Wg(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Wg(t,new Hh))),t._onlineComponents}function x2(t){return L2(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function M2(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kg(t){if(!Q.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qg(t){if(Q.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function If(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function PE(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=If(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}M2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _P;switch(r.type){case"firstParty":return new TP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qg.get(n);r&&(G("ComponentProvider","Removing Datastore"),qg.delete(n),r.terminate())}(this),Promise.resolve()}}function V2(t,e,n,r={}){var i;const s=(t=PE(t,mu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Sl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ze.MOCK_USER;else{l=fT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(h)}t._authCredentials=new EP(new $_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tf(this.firestore,e,this._query)}}class Tn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tn(this.firestore,e,this._key)}}class ir extends Tf{constructor(e,n,r){super(e,n,ZP(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tn(this.firestore,null,new Q(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function b2(t,e,...n){if(t=it(t),RE("collection","path",e),t instanceof mu){const r=we.fromString(e,...n);return Qg(r),new ir(t,null,r)}{if(!(t instanceof Tn||t instanceof ir))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Qg(r),new ir(t.firestore,null,r)}}function U2(t,e,...n){if(t=it(t),arguments.length===1&&(e=W_.newId()),RE("doc","path",e),t instanceof mu){const r=we.fromString(e,...n);return Kg(r),new Tn(t,null,new Q(r))}{if(!(t instanceof Tn||t instanceof ir))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Kg(r),new Tn(t.firestore,t instanceof ir?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vE(this,"async_queue_retry"),this.Vu=()=>{const r=Pc();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Or;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!No(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Gr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=wf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class kE extends mu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Yg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yg(e),this._firestoreClient=void 0,await e}}}function F2(t,e){const n=typeof t=="object"?t:Gd(),r=typeof t=="string"?t:"(default)",i=Xr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hT("firestore");s&&V2(i,...s)}return i}function B2(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||j2(t),t._firestoreClient}function j2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new FP(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,CE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new O2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mo(un.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mo(un.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=/^__.*__$/;class H2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}function xE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Af{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Vl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(xE(this.Cu)&&z2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class G2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hu(e)}Qu(e,n,r,i=!1){return new Af({Cu:e,methodName:n,qu:r,path:He.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $2(t){const e=t._freezeSettings(),n=hu(t._databaseId);return new G2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function W2(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);UE("Data must be an object, but it was:",o,r);const l=VE(r,o);let u,h;if(s.merge)u=new $t(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const v=q2(e,p,n);if(!o.contains(v))throw new K(F.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);X2(f,v)||f.push(v)}u=new $t(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new H2(new Gt(l),u,h)}function ME(t,e){if(bE(t=it(t)))return UE("Unsupported field value:",e,t),VE(t,e);if(t instanceof OE)return function(r,i){if(!xE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ME(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:Bh(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bh(i.serializer,s)}}if(r instanceof DE)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mo)return{bytesValue:Ik(i.serializer,r._byteString)};if(r instanceof Tn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pE(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof LE)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return gf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${If(r)}`)}(t,e)}function VE(t,e){const n={};return q_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qi(t,(r,i)=>{const s=ME(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function bE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof DE||t instanceof mo||t instanceof Tn||t instanceof OE||t instanceof LE)}function UE(t,e,n){if(!bE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=If(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function q2(t,e,n){if((e=it(e))instanceof NE)return e._internalPath;if(typeof e=="string")return Q2(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const K2=new RegExp("[~\\*/\\[\\]]");function Q2(t,e,n){if(e.search(K2)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new NE(...e.split("."))._internalPath}catch{throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,l+t+u)}function X2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function J2(t,e){const n=PE(t.firestore,kE),r=U2(t),i=Y2(t.converter,e);return Z2(n,[W2($2(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,In.exists(!1))]).then(()=>r)}function Z2(t,e){return function(r,i){const s=new Or;return r.asyncQueue.enqueueAndForget(async()=>S2(await x2(r),i,s)),s.promise}(B2(t),e)}(function(e,n=!0){(function(i){Ki=i})(Wi),ln(new Qt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new kE(new wP(r.getProvider("auth-internal")),new SP(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Mt(Ig,"4.7.4",e),Mt(Ig,"4.7.4","esm2017")})();function FE(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=FE(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Wn(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=FE(t))&&(r&&(r+=" "),r+=e);return r}const go=t=>typeof t=="number"&&!isNaN(t),Lr=t=>typeof t=="string",St=t=>typeof t=="function",Ga=t=>Lr(t)||St(t)?t:null,Gh=t=>V.isValidElement(t)||Lr(t)||St(t)||go(t);function eN(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function gu(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:h,done:f,nodeRef:p,isIn:v,playToast:C}=o;const R=r?`${e}--${u}`:e,k=r?`${n}--${u}`:n,L=V.useRef(0);return V.useLayoutEffect(()=>{const I=p.current,y=R.split(" "),E=O=>{O.target===p.current&&(C(),I.removeEventListener("animationend",E),I.removeEventListener("animationcancel",E),L.current===0&&O.type!=="animationcancel"&&I.classList.remove(...y))};I.classList.add(...y),I.addEventListener("animationend",E),I.addEventListener("animationcancel",E)},[]),V.useEffect(()=>{const I=p.current,y=()=>{I.removeEventListener("animationend",y),i?eN(I,f,s):f()};v||(h?y():(L.current=1,I.className+=` ${k}`,I.addEventListener("animationend",y)))},[v]),D.createElement(D.Fragment,null,l)}}function Jg(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const ut=new Map;let yo=[];const $h=new Set,tN=t=>$h.forEach(e=>e(t)),BE=()=>ut.size>0;function jE(t,e){var n;if(e)return!((n=ut.get(e))==null||!n.isToastActive(t));let r=!1;return ut.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function zE(t,e){Gh(t)&&(BE()||yo.push({content:t,options:e}),ut.forEach(n=>{n.buildToast(t,e)}))}function Zg(t,e){ut.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function nN(t){const{subscribe:e,getSnapshot:n,setProps:r}=V.useRef(function(s){const o=s.containerId||1;return{subscribe(l){const u=function(f,p,v){let C=1,R=0,k=[],L=[],I=[],y=p;const E=new Map,O=new Set,b=()=>{I=Array.from(E.values()),O.forEach(m=>m())},B=m=>{L=m==null?[]:L.filter(_=>_!==m),b()},w=m=>{const{toastId:_,onOpen:T,updateId:S,children:P}=m.props,A=S==null;m.staleId&&E.delete(m.staleId),E.set(_,m),L=[...L,m.props.toastId].filter(Te=>Te!==m.staleId),b(),v(Jg(m,A?"added":"updated")),A&&St(T)&&T(V.isValidElement(P)&&P.props)};return{id:f,props:y,observe:m=>(O.add(m),()=>O.delete(m)),toggle:(m,_)=>{E.forEach(T=>{_!=null&&_!==T.props.toastId||St(T.toggle)&&T.toggle(m)})},removeToast:B,toasts:E,clearQueue:()=>{R-=k.length,k=[]},buildToast:(m,_)=>{if((X=>{let{containerId:ee,toastId:Ae,updateId:Ce}=X;const Ue=ee?ee!==f:f!==1,st=E.has(Ae)&&Ce==null;return Ue||st})(_))return;const{toastId:T,updateId:S,data:P,staleId:A,delay:Te}=_,ft=()=>{B(T)},Jt=S==null;Jt&&R++;const Ne={...y,style:y.toastStyle,key:C++,...Object.fromEntries(Object.entries(_).filter(X=>{let[ee,Ae]=X;return Ae!=null})),toastId:T,updateId:S,data:P,closeToast:ft,isIn:!1,className:Ga(_.className||y.toastClassName),bodyClassName:Ga(_.bodyClassName||y.bodyClassName),progressClassName:Ga(_.progressClassName||y.progressClassName),autoClose:!_.isLoading&&(z=_.autoClose,$=y.autoClose,z===!1||go(z)&&z>0?z:$),deleteToast(){const X=E.get(T),{onClose:ee,children:Ae}=X.props;St(ee)&&ee(V.isValidElement(Ae)&&Ae.props),v(Jg(X,"removed")),E.delete(T),R--,R<0&&(R=0),k.length>0?w(k.shift()):b()}};var z,$;Ne.closeButton=y.closeButton,_.closeButton===!1||Gh(_.closeButton)?Ne.closeButton=_.closeButton:_.closeButton===!0&&(Ne.closeButton=!Gh(y.closeButton)||y.closeButton);let W=m;V.isValidElement(m)&&!Lr(m.type)?W=V.cloneElement(m,{closeToast:ft,toastProps:Ne,data:P}):St(m)&&(W=m({closeToast:ft,toastProps:Ne,data:P}));const ie={content:W,props:Ne,staleId:A};y.limit&&y.limit>0&&R>y.limit&&Jt?k.push(ie):go(Te)?setTimeout(()=>{w(ie)},Te):w(ie)},setProps(m){y=m},setToggle:(m,_)=>{E.get(m).toggle=_},isToastActive:m=>L.some(_=>_===m),getSnapshot:()=>I}}(o,s,tN);ut.set(o,u);const h=u.observe(l);return yo.forEach(f=>zE(f.content,f.options)),yo=[],()=>{h(),ut.delete(o)}},setProps(l){var u;(u=ut.get(o))==null||u.setProps(l)},getSnapshot(){var l;return(l=ut.get(o))==null?void 0:l.getSnapshot()}}}(t)).current;r(t);const i=V.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return t.newestOnTop&&i.reverse(),i.forEach(l=>{const{position:u}=l.props;o.has(u)||o.set(u,[]),o.get(u).push(l)}),Array.from(o,l=>s(l[0],l[1]))},isToastActive:jE,count:i==null?void 0:i.length}}function rN(t){const[e,n]=V.useState(!1),[r,i]=V.useState(!1),s=V.useRef(null),o=V.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:h,onClick:f,closeOnClick:p}=t;var v,C;function R(){n(!0)}function k(){n(!1)}function L(E){const O=s.current;o.canDrag&&O&&(o.didMove=!0,e&&k(),o.delta=t.draggableDirection==="x"?E.clientX-o.start:E.clientY-o.start,o.start!==E.clientX&&(o.canCloseOnClick=!1),O.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,O.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function I(){document.removeEventListener("pointermove",L),document.removeEventListener("pointerup",I);const E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}(C=ut.get((v={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||C.setToggle(v.id,v.fn),V.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||k(),window.addEventListener("focus",R),window.addEventListener("blur",k),()=>{window.removeEventListener("focus",R),window.removeEventListener("blur",k)}},[t.pauseOnFocusLoss]);const y={onPointerDown:function(E){if(t.draggable===!0||t.draggable===E.pointerType){o.didMove=!1,document.addEventListener("pointermove",L),document.addEventListener("pointerup",I);const O=s.current;o.canCloseOnClick=!0,o.canDrag=!0,O.style.transition="none",t.draggableDirection==="x"?(o.start=E.clientX,o.removalDistance=O.offsetWidth*(t.draggablePercent/100)):(o.start=E.clientY,o.removalDistance=O.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(E){const{top:O,bottom:b,left:B,right:w}=s.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&t.pauseOnHover&&E.clientX>=B&&E.clientX<=w&&E.clientY>=O&&E.clientY<=b?k():R()}};return l&&u&&(y.onMouseEnter=k,t.stacked||(y.onMouseLeave=R)),p&&(y.onClick=E=>{f&&f(E),o.canCloseOnClick&&h()}),{playToast:R,pauseToast:k,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:y}}function iN(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:h,rtl:f,isIn:p,theme:v}=t;const C=s||u&&h===0,R={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(R.transform=`scaleX(${h})`);const k=Wn("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${v}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),L=St(o)?o({rtl:f,type:i,defaultClassName:k}):Wn(k,o),I={[u&&h>=1?"onTransitionEnd":"onAnimationEnd"]:u&&h<1?null:()=>{p&&r()}};return D.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":C},D.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${v} Toastify__progress-bar--${i}`}),D.createElement("div",{role:"progressbar","aria-hidden":C?"true":"false","aria-label":"notification timer",className:L,style:R,...I}))}let sN=1;const HE=()=>""+sN++;function oN(t){return t&&(Lr(t.toastId)||go(t.toastId))?t.toastId:HE()}function zs(t,e){return zE(t,e),e.toastId}function bl(t,e){return{...e,type:e&&e.type||t,toastId:oN(e)}}function Ia(t){return(e,n)=>zs(e,bl(t,n))}function le(t,e){return zs(t,bl("default",e))}le.loading=(t,e)=>zs(t,bl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),le.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Lr(i)?le.loading(i,n):le.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(f,p,v)=>{if(p==null)return void le.dismiss(r);const C={type:f,...l,...n,data:v},R=Lr(p)?{render:p}:p;return r?le.update(r,{...C,...R}):le(R.render,{...C,...R}),v},h=St(t)?t():t;return h.then(f=>u("success",o,f)).catch(f=>u("error",s,f)),h},le.success=Ia("success"),le.info=Ia("info"),le.error=Ia("error"),le.warning=Ia("warning"),le.warn=le.warning,le.dark=(t,e)=>zs(t,bl("default",{theme:"dark",...e})),le.dismiss=function(t){(function(e){var n;if(BE()){if(e==null||Lr(n=e)||go(n))ut.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=ut.get(e.containerId);r?r.removeToast(e.id):ut.forEach(i=>{i.removeToast(e.id)})}}else yo=yo.filter(r=>e!=null&&r.options.toastId!==e)})(t)},le.clearWaitingQueue=function(t){t===void 0&&(t={}),ut.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},le.isActive=jE,le.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=ut.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:HE()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,zs(o,s)}},le.done=t=>{le.update(t,{progress:1})},le.onChange=function(t){return $h.add(t),()=>{$h.delete(t)}},le.play=t=>Zg(!0,t),le.pause=t=>Zg(!1,t);const aN=typeof window<"u"?V.useLayoutEffect:V.useEffect,Ta=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return D.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Nc={info:function(t){return D.createElement(Ta,{...t},D.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return D.createElement(Ta,{...t},D.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return D.createElement(Ta,{...t},D.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return D.createElement(Ta,{...t},D.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return D.createElement("div",{className:"Toastify__spinner"})}},lN=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=rN(t),{closeButton:o,children:l,autoClose:u,onClick:h,type:f,hideProgressBar:p,closeToast:v,transition:C,position:R,className:k,style:L,bodyClassName:I,bodyStyle:y,progressClassName:E,progressStyle:O,updateId:b,role:B,progress:w,rtl:m,toastId:_,deleteToast:T,isIn:S,isLoading:P,closeOnClick:A,theme:Te}=t,ft=Wn("Toastify__toast",`Toastify__toast-theme--${Te}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":m},{"Toastify__toast--close-on-click":A}),Jt=St(k)?k({rtl:m,position:R,type:f,defaultClassName:ft}):Wn(ft,k),Ne=function(ie){let{theme:X,type:ee,isLoading:Ae,icon:Ce}=ie,Ue=null;const st={theme:X,type:ee};return Ce===!1||(St(Ce)?Ue=Ce({...st,isLoading:Ae}):V.isValidElement(Ce)?Ue=V.cloneElement(Ce,st):Ae?Ue=Nc.spinner():(wu=>wu in Nc)(ee)&&(Ue=Nc[ee](st))),Ue}(t),z=!!w||!u,$={closeToast:v,type:f,theme:Te};let W=null;return o===!1||(W=St(o)?o($):V.isValidElement(o)?V.cloneElement(o,$):function(ie){let{closeToast:X,theme:ee,ariaLabel:Ae="close"}=ie;return D.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ee}`,type:"button",onClick:Ce=>{Ce.stopPropagation(),X(Ce)},"aria-label":Ae},D.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},D.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}($)),D.createElement(C,{isIn:S,done:T,position:R,preventExitTransition:n,nodeRef:r,playToast:s},D.createElement("div",{id:_,onClick:h,"data-in":S,className:Jt,...i,style:L,ref:r},D.createElement("div",{...S&&{role:B},className:St(I)?I({type:f}):Wn("Toastify__toast-body",I),style:y},Ne!=null&&D.createElement("div",{className:Wn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},Ne),D.createElement("div",null,l)),W,D.createElement(iN,{...b&&!z?{key:`pb-${b}`}:{},rtl:m,theme:Te,delay:u,isRunning:e,isIn:S,closeToast:v,hide:p,type:f,style:O,className:E,controlledProgress:z,progress:w||0})))},yu=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},uN=gu(yu("bounce",!0));gu(yu("slide",!0));gu(yu("zoom"));gu(yu("flip"));const cN={position:"top-right",transition:uN,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function hN(t){let e={...cN,...t};const n=t.stacked,[r,i]=V.useState(!0),s=V.useRef(null),{getToastToRender:o,isToastActive:l,count:u}=nN(e),{className:h,style:f,rtl:p,containerId:v}=e;function C(k){const L=Wn("Toastify__toast-container",`Toastify__toast-container--${k}`,{"Toastify__toast-container--rtl":p});return St(h)?h({position:k,rtl:p,defaultClassName:L}):Wn(L,Ga(h))}function R(){n&&(i(!0),le.play())}return aN(()=>{if(n){var k;const L=s.current.querySelectorAll('[data-in="true"]'),I=12,y=(k=e.position)==null?void 0:k.includes("top");let E=0,O=0;Array.from(L).reverse().forEach((b,B)=>{const w=b;w.classList.add("Toastify__toast--stacked"),B>0&&(w.dataset.collapsed=`${r}`),w.dataset.pos||(w.dataset.pos=y?"top":"bot");const m=E*(r?.2:1)+(r?0:I*B);w.style.setProperty("--y",`${y?m:-1*m}px`),w.style.setProperty("--g",`${I}`),w.style.setProperty("--s",""+(1-(r?O:0))),E+=w.offsetHeight,O+=.025})}},[r,u,n]),D.createElement("div",{ref:s,className:"Toastify",id:v,onMouseEnter:()=>{n&&(i(!1),le.pause())},onMouseLeave:R},o((k,L)=>{const I=L.length?{...f}:{...f,pointerEvents:"none"};return D.createElement("div",{className:C(k),style:I,key:`container-${k}`},L.map(y=>{let{content:E,props:O}=y;return D.createElement(lN,{...O,stacked:n,collapseAll:R,isIn:l(O.toastId,O.containerId),style:O.style,key:`toast-${O.key}`},E)}))}))}const dN={apiKey:"AIzaSyC5cOJ9LDIIDa37_BuqzUo8B6Bl9kYc6sU",authDomain:"netflix-clone-8458a.firebaseapp.com",projectId:"netflix-clone-8458a",storageBucket:"netflix-clone-8458a.firebasestorage.app",messagingSenderId:"764022159409",appId:"1:764022159409:web:6ac2e021fcf418d26d7d10",measurementId:"G-B713C1VRZ9"},Sf=L0(dN);tC(Sf);const vu=yP(Sf),fN=F2(Sf),pN=async(t,e)=>{try{const r=(await tR(vu,t,e)).user;await J2(b2(fN,"user"),{uid:r.uid,authProvider:"local",email:t})}catch(n){console.log(n),le.error(n.code)}},mN=async(t,e)=>{try{await nR(vu,t,e)}catch(n){console.log(n),le.error(n.code)}},gN=()=>{oR(vu)},yN=()=>{const t=V.useRef();return V.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>=80?t.current.classList.add("nav-dark"):t.current.classList.remove("nav-dark")})},[]),D.createElement("div",{ref:t,className:"navbar"},D.createElement("div",{className:"navbar-left"},D.createElement("img",{src:E0,alt:""}),D.createElement("ul",null,D.createElement("li",null,"Home"),D.createElement("li",null,"TV Shows"),D.createElement("li",null,"Movies"),D.createElement("li",null,"New & Popular"),D.createElement("li",null,"My List"),D.createElement("li",null,"Browse by Language"))),D.createElement("div",{className:"navbar-right"},D.createElement("img",{src:eT,alt:"",className:"icons"}),D.createElement("img",{src:tT,alt:"",className:"icons"}),D.createElement("div",{className:"navbar-profile"},D.createElement("img",{src:nT,alt:"",className:"profile"}),D.createElement("img",{src:rT,alt:"",className:"icons"}),D.createElement("div",{className:"dropdown"},D.createElement("p",{onClick:()=>{gN()}},"Sign out of Loonflix")))))},vN="/loonflix-repo/assets/herobanner-Cr1H3Ade.jpg",_N="/loonflix-repo/assets/title-CxvmRYa6.png",EN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO2dQWoUQRSGPxEjgoIb0aWudRMPEE+RrUuvIN5AUYwuvYJXmLlAsk+vJzBmofRCyKZHnCeBEkREEq3qV/Xq/+DfV30UM/13v5kGIYQQQgghhAjKDvAKOAW+AAfAHe9FReQlYL/lK/ACuOG9uEic/kH0z6yBZ8BV70VGwC6QAdj3XmgPoi1lAex6L7gH0QZsgY/AA++FRxdtKRPwHrjtvYHooi1lBJ4D1703El20payAp8AV7w1FF20ph8Ce96Z6EG2/XKE88t5cD6IN2AAfgLvem4wu2lLOUtW/RcfYjFn3XOnNIUOPld4cs+yp0ptztr1UeqskU/RKb5VljFrprdKsolV6qzxHUSq9NZJF65XeGsq3VOnv0SDWYM5arPTWcNYtVXoLkKGFSm+BsgQeUykWLNtaK70FzVRbpbfgGWup9NZJTrwrvXWWI+CJRBO30lvH2QDv0jC+RFNe+BuJZpaTff6TEp1oJJooea0TTfEvw7fANYmmmGRd3lH2FKuwUFawKjhlBeumEmUF6zYpZQXrxj+dT6dagAx6OEtRwRo3oKxgDdBQVrBGwij/OawhR8oKDvNLXKs0K++n1rmxyjLWMoeRG6skU22TRbnxFrytdVYuN56SlzVX5tx4CB5aqMy5mVPwuqUJ/dzMWZlv0jElBW/0xyjlRS+Ah44HqDpyCz6MUplzk0vwKlplzs3/Ch6jVubc/KvgKXplzs1lBX9Plfm+98Jb47JXErveC26Viwg+7rEy5+bTXwR3XZlzo5cpzMROkn1+sj/r9SBCCCGEEEIIQXv8AGMxL6IG0qwhAAAAAElFTkSuQmCC",wN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsUlEQVR4nO2dTYwVRRCAO5AsRuRH2HAQFMJK/DuLnBSX6M0Y4wG9CETZ6E0kIfGEeoAlxkREBSGagAQwGi+KR1CPLgLBg5IVFBA8KFzdhbCfqWxtJGa6Z95u95ue2fqSl5DZ96Zqunq6q6uqG+cMwzAMwzAMwzAMwzAMwzAMwwDuBp4H3gI+A04B54BrwKh+rum1k8AR/e5z8ltrwQ4BZgJPAnuBYaaO3OMj4AlghhnE3/D3ADuAP0iH3HtQZJkh/mv45cBOYITucR04ANw/bQ0BzNbeeIP6uKHGn+umE8CzwGXyQYamZ1zbAW4DdnfYODeB09pTB4DVOmzdCfToR/7dp38b0O/Kb8Y6lPU+MMu1EWCpupBVG/0YsB5YOAWZvcAG4LjeswonW+e+Ag9V9G5G9A1ZnkAHeUP2VJzsLwIPujYAPAJcLXngMWA/cFcX9FkMfFpheBKdV7oW9Pyyxj8LPFqDbqsrLPT+buybACwBLpQ84BfA/Bp1nAMcKtFRhs6lroHeTmjCldd/s8sEYEvJkHSiUd5Riaspi58XXGYA60oWhbtcgxZZoZ6fXeP/zwihN+FplzOypC9Z4WYz7JQMRz4uAXe4XAHeDSh/KLKsVcAm/ayKfG/JO/h42+UIcF9gDBVXc04kOfOBbwpkHAXmRXyThwOR1D6XG8AnHoXHYvr5FDf+BF9HlPN4YD7Y6zJMpkjPKGJ/5GGnjGirV+CgR8ZoVvEizWQV8U/M8AKwubT54bXIi0lf7Gi7yyiH6wu07Y4sa3MFA2yKLFNy076AXf05Zk2gF3EzdlSTLg9BKvPewFywJqas2D3kWCJ5RwON/1Uimd924w2frHK/epRbn0jePPF2iho/lhtaIPNFzzOeTSGvU+/HN/wsTCx7pS7CXgUeTixrUWAYWpJSdpliUrFWxCnXMoAznmddW6dSUgJYxE7XMoBdnmd9o06lfDGTja5lAC93I8bVqVJSQVDEY65lMB6aKOJEnUr95lFqWWK5Pbr6vqLhb6mw60ksU2qRijifUm6ZUpK0LiK1BzRYIHMwsUypMSrir5Ryy5SSoFQRqXvjlQKZfyaWOcvzrCMp5eZqgEKmowF8NT8LWmiA3hyHoLom4UKm4yT8o0ep1S00QL9H7FBKuZNdiA200ACv5LgQe7OOUAT1GMAXitiaUu5kg3GnW2iAMzkG42QPbxESuu1tiwEIh6MXp5JbVTlf/cyGFhlgo0fkz6lkdqKcbIIu4niLDPCdR+SHqWR2opzsQPdlxfqabgDCSfn+FDI7VXCGFq0WsacFBtjnESelODNdDniik2hR0+KmGoDxnLcv3rXN5YJ6Qz5FDzTYAIc9oq5nd94E8LGvYWKPlXTBAJLVC4z9SYbWKQGsCJSnD8c8j4HiTSCXI9cenQv0/uj7mKMAvBN4C44knnO2R7z/54Hn2OFyRbd9hnbEb4mYEx7UNyFqThh4PaC/FOTOdjkjp44EHkDG1HUuUxg/V8I37sv1p1wTAD4IGOFGjkZgvPFD21SbU2ym+VNfsmaiN21xmaDDTmh76g+p89ypDsX4nTBf1nxUwdyArz/Bpex8/qrIQRcVDusYlqqzGnTrD7iaE0jd0wOuyWgZeZXjag52o9RbwwtlvX6i8ZOWvXf7TRAXroxR3XHTlyiquS8QMrmVC43v+Z54kZw6UoUxjcHLzpRFU8xkvQR838H5cUO1brrognfkS277GNN87HtaIt6vvXnBLYf2LdRr/fodkfFTh4f2jelhf83ydiaDnDoSyCHUwcXGLLJiAdwuu0sqjsmpuK69Pso5Fo0EWKaNILvqu8WoHl28ou7nz22S3l7RW5oscu9trZ1kI+aY1+ixZ3LMzVT5RaoXdIKu/2iBpsF4SGOtzheH1U08p4u7if/A4apeG9LvbNXfJD+H1DAMwzAMwzAMwzAMwzAMwzBc/vwL4LImOvpUNA4AAAAASUVORK5CYII=";/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vo.apply(this,arguments)}var qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qn||(qn={}));const ey="popstate";function IN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Wh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ul(i)}return AN(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function GE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TN(){return Math.random().toString(36).substr(2,8)}function ty(t,e){return{usr:t.state,key:t.key,idx:e}}function Wh(t,e,n,r){return n===void 0&&(n=null),vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xi(e):e,{state:n,key:e&&e.key||r||TN()})}function Ul(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function AN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=qn.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(vo({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=qn.Pop;let L=f(),I=L==null?null:L-h;h=L,u&&u({action:l,location:k.location,delta:I})}function v(L,I){l=qn.Push;let y=Wh(k.location,L,I);h=f()+1;let E=ty(y,h),O=k.createHref(y);try{o.pushState(E,"",O)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(O)}s&&u&&u({action:l,location:k.location,delta:1})}function C(L,I){l=qn.Replace;let y=Wh(k.location,L,I);h=f();let E=ty(y,h),O=k.createHref(y);o.replaceState(E,"",O),s&&u&&u({action:l,location:k.location,delta:0})}function R(L){let I=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof L=="string"?L:Ul(L);return y=y.replace(/ $/,"%20"),ke(I,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,I)}let k={get action(){return l},get location(){return t(i,o)},listen(L){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ey,p),u=L,()=>{i.removeEventListener(ey,p),u=null}},createHref(L){return e(i,L)},createURL:R,encodeLocation(L){let I=R(L);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:v,replace:C,go(L){return o.go(L)}};return k}var ny;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ny||(ny={}));function SN(t,e,n){return n===void 0&&(n="/"),CN(t,e,n,!1)}function CN(t,e,n,r){let i=typeof e=="string"?Xi(e):e,s=Cf(i.pathname||"/",n);if(s==null)return null;let o=$E(t);RN(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=UN(s);l=VN(o[u],h,r)}return l}function $E(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=sr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),$E(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:xN(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of WE(s.path))i(s,o,u)}),e}function WE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=WE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function RN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PN=/^:[\w-]+$/,kN=3,NN=2,ON=1,DN=10,LN=-2,ry=t=>t==="*";function xN(t,e){let n=t.split("/"),r=n.length;return n.some(ry)&&(r+=LN),e&&(r+=NN),n.filter(i=>!ry(i)).reduce((i,s)=>i+(PN.test(s)?kN:s===""?ON:DN),r)}function MN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function VN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=iy({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),v=u.route;if(!p&&h&&n&&!r[r.length-1].route.index&&(p=iy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:sr([s,p.pathname]),pathnameBase:zN(sr([s,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(s=sr([s,p.pathnameBase]))}return o}function iy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,p)=>{let{paramName:v,isOptional:C}=f;if(v==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const R=l[p];return C&&!R?h[v]=void 0:h[v]=(R||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function bN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),GE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function UN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return GE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function FN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xi(t):t;return{pathname:n?n.startsWith("/")?n:BN(n,e):e,search:HN(r),hash:GN(i)}}function BN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function qE(t,e){let n=jN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function KE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xi(t):(i=vo({},t),ke(!i.pathname||!i.pathname.includes("?"),Oc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Oc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Oc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let v=o.split("/");for(;v[0]==="..";)v.shift(),p-=1;i.pathname=v.join("/")}l=p>=0?e[p]:"/"}let u=FN(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const sr=t=>t.join("/").replace(/\/\/+/g,"/"),zN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),HN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $N(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const QE=["post","put","patch","delete"];new Set(QE);const WN=["get",...QE];new Set(WN);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_o.apply(this,arguments)}const Rf=V.createContext(null),qN=V.createContext(null),ei=V.createContext(null),_u=V.createContext(null),gr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),XE=V.createContext(null);function KN(t,e){let{relative:n}=e===void 0?{}:e;xo()||ke(!1);let{basename:r,navigator:i}=V.useContext(ei),{hash:s,pathname:o,search:l}=JE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:sr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function xo(){return V.useContext(_u)!=null}function Eu(){return xo()||ke(!1),V.useContext(_u).location}function YE(t){V.useContext(ei).static||V.useLayoutEffect(t)}function Pf(){let{isDataRoute:t}=V.useContext(gr);return t?lO():QN()}function QN(){xo()||ke(!1);let t=V.useContext(Rf),{basename:e,future:n,navigator:r}=V.useContext(ei),{matches:i}=V.useContext(gr),{pathname:s}=Eu(),o=JSON.stringify(qE(i,n.v7_relativeSplatPath)),l=V.useRef(!1);return YE(()=>{l.current=!0}),V.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=KE(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:sr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function XN(){let{matches:t}=V.useContext(gr),e=t[t.length-1];return e?e.params:{}}function JE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext(ei),{matches:i}=V.useContext(gr),{pathname:s}=Eu(),o=JSON.stringify(qE(i,r.v7_relativeSplatPath));return V.useMemo(()=>KE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function YN(t,e){return JN(t,e)}function JN(t,e,n,r){xo()||ke(!1);let{navigator:i}=V.useContext(ei),{matches:s}=V.useContext(gr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Eu(),f;if(e){var p;let L=typeof e=="string"?Xi(e):e;u==="/"||(p=L.pathname)!=null&&p.startsWith(u)||ke(!1),f=L}else f=h;let v=f.pathname||"/",C=v;if(u!=="/"){let L=u.replace(/^\//,"").split("/");C="/"+v.replace(/^\//,"").split("/").slice(L.length).join("/")}let R=SN(t,{pathname:C}),k=rO(R&&R.map(L=>Object.assign({},L,{params:Object.assign({},l,L.params),pathname:sr([u,i.encodeLocation?i.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?u:sr([u,i.encodeLocation?i.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),s,n,r);return e&&k?V.createElement(_u.Provider,{value:{location:_o({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:qn.Pop}},k):k}function ZN(){let t=aO(),e=$N(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const eO=V.createElement(ZN,null);class tO extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(gr.Provider,{value:this.props.routeContext},V.createElement(XE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nO(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(Rf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(gr.Provider,{value:e},r)}function rO(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ke(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:v,errors:C}=n,R=p.route.loader&&v[p.route.id]===void 0&&(!C||C[p.route.id]===void 0);if(p.route.lazy||R){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,v)=>{let C,R=!1,k=null,L=null;n&&(C=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||eO,u&&(h<0&&v===0?(R=!0,L=null):h===v&&(R=!0,L=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,v+1)),y=()=>{let E;return C?E=k:R?E=L:p.route.Component?E=V.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=f,V.createElement(nO,{match:p,routeContext:{outlet:f,matches:I,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?V.createElement(tO,{location:n.location,revalidation:n.revalidation,component:k,error:C,children:y(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):y()},null)}var ZE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ZE||{}),Fl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Fl||{});function iO(t){let e=V.useContext(Rf);return e||ke(!1),e}function sO(t){let e=V.useContext(qN);return e||ke(!1),e}function oO(t){let e=V.useContext(gr);return e||ke(!1),e}function ew(t){let e=oO(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function aO(){var t;let e=V.useContext(XE),n=sO(Fl.UseRouteError),r=ew(Fl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function lO(){let{router:t}=iO(ZE.UseNavigateStable),e=ew(Fl.UseNavigateStable),n=V.useRef(!1);return YE(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,_o({fromRouteId:e},s)))},[t,e])}const sy={};function uO(t,e){sy[e]||(sy[e]=!0,console.warn(e))}const oy=(t,e,n)=>uO(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function cO(t,e){t!=null&&t.v7_startTransition||oy("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&oy("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function $a(t){ke(!1)}function hO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qn.Pop,navigator:s,static:o=!1,future:l}=t;xo()&&ke(!1);let u=e.replace(/^\/*/,"/"),h=V.useMemo(()=>({basename:u,navigator:s,static:o,future:_o({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Xi(r));let{pathname:f="/",search:p="",hash:v="",state:C=null,key:R="default"}=r,k=V.useMemo(()=>{let L=Cf(f,u);return L==null?null:{location:{pathname:L,search:p,hash:v,state:C,key:R},navigationType:i}},[u,f,p,v,C,R,i]);return k==null?null:V.createElement(ei.Provider,{value:h},V.createElement(_u.Provider,{children:n,value:k}))}function dO(t){let{children:e,location:n}=t;return YN(qh(e),n)}new Promise(()=>{});function qh(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,qh(r.props.children,s));return}r.type!==$a&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=qh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kh(){return Kh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kh.apply(this,arguments)}function fO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function pO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mO(t,e){return t.button===0&&(!e||e==="_self")&&!pO(t)}const gO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yO="6";try{window.__reactRouterVersion=yO}catch{}const vO="startTransition",ay=Kw[vO];function _O(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=IN({window:i,v5Compat:!0}));let o=s.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=V.useCallback(p=>{h&&ay?ay(()=>u(p)):u(p)},[u,h]);return V.useLayoutEffect(()=>o.listen(f),[o,f]),V.useEffect(()=>cO(r),[r]),V.createElement(hO,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const EO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,IO=V.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:f,viewTransition:p}=e,v=fO(e,gO),{basename:C}=V.useContext(ei),R,k=!1;if(typeof h=="string"&&wO.test(h)&&(R=h,EO))try{let E=new URL(window.location.href),O=h.startsWith("//")?new URL(E.protocol+h):new URL(h),b=Cf(O.pathname,C);O.origin===E.origin&&b!=null?h=b+O.search+O.hash:k=!0}catch{}let L=KN(h,{relative:i}),I=TO(h,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function y(E){r&&r(E),E.defaultPrevented||I(E)}return V.createElement("a",Kh({},v,{href:R||L,onClick:k||s?r:y,ref:n,target:u}))});var ly;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ly||(ly={}));var uy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(uy||(uy={}));function TO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Pf(),h=Eu(),f=JE(t,{relative:o});return V.useCallback(p=>{if(mO(p,n)){p.preventDefault();let v=r!==void 0?r:Ul(h)===Ul(f);u(t,{replace:v,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[h,u,f,r,i,n,t,s,o,l])}const _s=({title:t,category:e})=>{const[n,r]=V.useState([]),i=V.useRef(),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWQ1OWJjNjllZGI2NzhmZTA0OTRmMzlhOGE3Y2RkNSIsIm5iZiI6MTczMTEyMjMzMC4xNzgwMjIxLCJzdWIiOiI2NzJlZDIxZTlmZGRlOGM0Yjg4YmM4ZmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wwcqgk0dcJsaAgsapbsTO268Epgx1Lxd6VGtHB-G_hM"}},o=l=>{l.preventDefault(),i.current.scrollLeft+=l.deltaY};return V.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${e||"now_playing"}?language=en-US&page=1`,s).then(l=>l.json()).then(l=>r(l.results)).catch(l=>console.error(l)),i.current.addEventListener("wheel",o)},[]),D.createElement("div",{className:"title-cards"},D.createElement("h2",null,t||"Popular on Netflix"),D.createElement("div",{className:"card-list",ref:i},n.map((l,u)=>D.createElement(IO,{to:`/player/${l.id}`,className:"card",key:u},D.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+l.poster_path,alt:""})))))},AO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAemSURBVHhe7Z1riFVVGIad7ZlxRicdL2lqqQmFZXbRgkCioovQjyhTgowspR/1I4wsTbJMCopAyj9dfxRJRQlF0Q2KLgSCBVJhKSkZiY5mjqbjZZw50/OufeGcMxd1Zty3873w8n177cs553v3t9bea6+9ziCDwWAwGAwGg8FgMBgMBoPBYDDkADWBHVB0dnZ6mMEivrM1NTXyVd6FrNP38Fgvt0Y2WCfryrA6bgG3gBseS8eWLUUHLAZWbGcfWe3fKQO1Xh+mIrdc4Xfgum0qlkuP16F9sAOKPgnClyvA8bhjYBMcHtgRAevhMDg08GUbAr8W1sEhJXRBhlqnoCvgzle5lrH9AsdT8BRIBbYNtgd0QS7hMXgcapuQKhOPBDxa4h+AhwIbch/feW8g3GnhlATht+j0uRz3OngJvAgq8AqyAqoAh0Gu44v0SeisgZhIXIl3IrAhJd5e+CvcQji+wW7FnjSjeg0cH1gHb8R9Al4GddbqjK2sJgwVIG6uugsogT4lbk9jt2GVid2iW0E4lurz6bgPwwUcQGe/oZ8gpq2YV+HLxHQ77JIxXQRhp1p4D+4ydrjALzUMFIitRNgIlxDfjVAZFKFMELZVW3EL7mtwPBtXRVsQN4ixrtw2YW/zPG9nUOxQFvBisagrJ9V1V/glhjMJBPkScweiqCpziBpnVurScrWJER+I9RzMcmIf6VB6tXQ9XOC7hhhxH4JcHPhlGfIgRjduhnhxNrzJdwNBEGMqZhYpZI14zCDkuqW4ivZbvR1RhsyCZ/muIW4gyoUYZUqUIdMw6m8yJADiPxkzUr7uyNWBNxWV1A9lSADEXp20E9DC9UmpqjpHKwyJQl1VBWWIqqrRrsiQJHRhNVgZoi50V38ZEsX50DNB0oPJ1FYuQ1Rl6WGTIVmcS+NekCCj5PhlhqSABvVkyGgJMtYvSh/4gj/DF2ELPOnjzxxgogRxd4gpxSHOnEfgrfjr0GSXX5xbjE+7IEplPcz5Afd+eDeirIcaCZJHOEFG+X664XnecYT5FncRVsL86a/JFcZKENfLmAUgRCfCqBr7AM5EFLUvu2DZc+kMY6QE0QC3zAFBDsBHcefBNYjyt1uRbbirrMx2uyNIOxmzAbuSxXmI8hHUoLWsokmCZL6XF0GOwR9x74KLM1yN1UuQXDy2RRC1L0fh2yzOYPkFRNmeMWGGSpDcPZhClP0YVWPz4WpEaVZ5BtCYmwypBBlyAmE24T4Hb0aUL+Bpj0aPGQ16N0O9vbkFohyHGoU+Fz6AKNugRqinEY3hA6rcA1HUvryOOxs+xe/eDNPWvgxTlVVVPb2Iohdp1kDdv6xClBZ/TSpQG75OVlXgJ5+AepFG7cs1iPJ9GrJFWihDqhaIoG6jKVDVdipOTLUheekHOmXwmxuLxeJC3HVQ/WJX6ux0KxME36tDGdLj61V5BD96KnwTdy2cgw5puspskyB6kzTXQACPjBgHV+Lr3mQuQgxPQ1ZU4EjuBZEQiHAv7mdwVUqFCHFYgugN0dwBEYYixiLc9XAtGsyEab+IcRmil+BzBYTQq3lhOzEbITSJQRbQqvuQXGQIGaHZHybB5SxuhvMlBMzSfdZRXfZmPkP4DWPgEvgJfAYNsjoSs1VV1n++nz1QNQ2BCxFBb7PqhdVLYb/nRUkQLZkUBAEKCHEe7lvwFURQg52HTlInyEHfTz8CIWZgV7CoWRDuhHl6nrNfguzz/XQDEZrg47jvwycRIo8vGTWnXhBEGExW3I7V6MUVCDENZrmd6A2pF0RXT2on3kWE6TmrnrpDcw1n3w380K+CAkNC4MTTlINT3FUWflqfMVcTNAHNQQmiG8PMXGnlGJqmyT0PkSBpeq5crdBo/qL6spQq/7oiQ5LQ8KQoQzTSz5AsdpAcTpDDsFmtvCs2xA5Cr3ENv8EOVVkaXrkF5vJBVUagdyd3o0U0tdzvMJr3zxA7/oKaETuaL+sXqKrLkAy2Q9dj4gTxPG8n6fKdtSPxg5CrqdiABq6GCjNE0LBKux+JH6quPvbdckG2wud91xAjnqV22h34XWa21jOHD3GvZaMsDQ7IHIizrm7fI8wLYfQiUWmGaPS1WvplUNNgV92Y37hAbDUThcYUa/73sre6ygQR2OAnuBj3a7/EMJAITvR34FLYpcuq22qJnTQpfyPuY3ApAtkEywODg8RVj5/fgN0O4e21nWBnjdu6GvchOBNq1geNAmzggNbG9ALipqoo/FskZcLn8CXCpluMHm8vTimoHFwZMxFX/ycyAWqo5iQ4DmpQmoTSJDbyR/CBeX3mXQZiorZAtwp6niSrTlrxH7gDKvh72O4P7jP2sHxS9Oksl0CYBqyqMvcnX3yws5TJqrrTtIESSVN3SLAou6DGUMkXtW34H1bR/1gF1HZ6B1J/FNavjOR7qe4O//hLPdx6SqppONyffnH4NraRrz/40k2aqO10hqtM49c0v8oBttPFj5a1TRtl7cG+8nUczVykY572jfYZq3b4Ujp2ePyerBD5wT4R+EFly6yvpUjZp3+JkxVLL0wUAAVe1YX+1k42FCEC+5YFqiJwod9TmfMr9jEYDAaDwWAwGAwGg8FgMBgMBoMhwqBB/wOEkCLUHASZ+AAAAABJRU5ErkJggg==",SO="/loonflix-repo/assets/instagram_icon-Cgn4dyva.png",CO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAQ9SURBVHhe7Z07iBRZFIana3ysj0BHEfGBIoqybmBgJrgGBgtmiomBkaJoLpiJkQoGRmK2sGYbL6wGG2wgaOyyKqyggibi6Ihvp9rv9K2GwUf12H3rzqm9/wc/994e7K65f51zbt2qdjpj/wPKslxEswItR6vRFrQZbex0OhPdbnce/QKNo5m/s42NEnVDt9fauM9/6HRRFI/CsFlaawiTPI5+ovsL2oF6BqAJTLDJjwKfcZvmAIbcC6+ILyAiNqAr6CF6w6Q1Bu//D9pafXTjRDuTUsDELEHH6d5CR4iE9eiH3g8bhM9IlklaYwhGrKG5gC4yP6tQqmMvCBQZMhMmZBPNb+gYRizuvZiOpHXWvSFEhq2SLtPdgxn9VVFKzBBFiIER82lOot0JU9TnKEL6YMiPNEcxo/HCXYPNkSKk4gRaF7p54NYQascqmsNER9KU8RVUQyqOoIWhO6eohlA7FtAcdBAdhiIEQ2xzMKva0cdrytqOPKQrQxECtnNr1yAeSJo2vRqyFtk9DA8kjZCk7s8WlrxXaQ7FLOrUJbvx9BG9RA/Qc/QBTaM6nnIYZ9D9apwXzFuBIb+j0iYxBrzVNLqOdjGci/2wWeMxZdkxzY8ZHfAMnectb6BBETGnuDOkOoNjn8WWnu5iRv++uVu8RkhsQ95hhpniHq+GxD6u95Xc484QzuToy0ze0h7rcV07+niMkOjYQsuaMPKNO0OYvOgRAhYdMmRIYpvRow0rLCOLlAWtqB9GLobMfFbXNbkYYntYrUApyxlKWc5oZEXzNcqynKDZhgbd51iCzrIq2hmGo8NS+ibNqTD6bt6h20VRvArDZklpyD6aX5noleGVdoCZ/3LM+9Gd6qVGySVljcIkpryp+o0jQwbzkuiwtJUEGTIAzJiieRtGzSNDBkC6mkKKEA9ghO1/WcpKdi9FhtRj1y9TGJLswlKG1GNGTIZuGmRIPbYH9iJ00yBD6rEIsVVWMmRIPRYhSZ9WkSH1mCGqIY6YZoWlCHGEIsQZr5GKuhdIV09SXhQaye6HdLvdvegSXbtRVYcd0zImItpX2vjcxzR/htE3sW0Sk6Wpt3z+C/7d30VR/GU/zBYmYWlZltdoo2HfDane3j1KWc7IxZBWPLVoyBBnKGU5w6shrTmjY6MIcYYMcUYuhujZXjEc7gyxK+uqmyXuDOmEr55plSV8kIshulJ3hr5jKIbDqyEq6l7Qsle4IhdDtHUihkOGOMOdIdo6cUa1ypIhwge5GGJPI7YCRYgzVNSdoQhxRi6GaPt9RGKnrNakQI+GqIYIP6iGOCMXQ1RDRqQ1Z3RsVEOcoZTlDI+GNDF5MkQMhwxxRi6G6DpkBCzf9/7KZxiOTrWl3wq8RkhrJjA2qiHOyMKQmOmvabzWkNgTqKIuhkOGOCPZ/yg3W0j3BTpL9+fwyuiw7P0DnauGjhkb+wRf4i+5cQ9f/gAAAABJRU5ErkJggg==",RO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAA85SURBVHhe7Z0LsFVVGce5F5CHKCi+QBHylSYWgo9UrNAynF4Mo0UE2pAzhDqVo5Y9xHQmR6cxsezhTDpZlEplaIxNqeQjJzXLRxppTaKW+BaU172cC/3+e6/LwD1nr/XtdV77XM5/5j97nbO/b61vP856fOtb6wxoo4022mijjUh0bNmy5QNwL/e50Vjd0dFxJ9ziPrcMuGdT4IHuY16s4pr/DEvu81Z0lEqluZ2dnVeTHpp+1VCs6+npmT948OCl7nNLgAcxFV5Pct/0m1zogvN4GMtgT/rVNiDj3TZv3vxbuJl0w0GxT3LY35lTeGDvwc7mKKB7HodBLrvKQOgY+HSq0lhQbgleRXKEM6ewwM69oF7entR6O9BZT23wLZKDXXZ+oHAqfDlVbywodw08Z8mSJQOdOYUD9g2B18FuZ7YZ6HTBa0mOctmFgXAnSnNjCqwFKPcNOM2ZUyhg3iBs+x7sSq3NjXvQ3dtlZweKw1G8Hub+SdYClLsS7ufMKQQwaxAdn4XYtSG10g50hP/A+Gvq6uo6nAweVk4u34aBInvgYpK7OXOaCuzQL+MM+EpiYE6g9yh8j8suDuTTQSYnxRpRLSj3bfgFkjs5k5oG7JgGn08tywf0noHvI9npsjOhwx23A5kMhLPoJy92X3mBrAY4F8GXki8qYyRcSJ7BupT8XucwnfHRI+k3jQc38xAOd2Nv7uoG+zXWWIDuTyuONWJBN00N2SYK8AIZQVWNt+uKzGfg26mWH8jpDYsZeFUFilYNobHG46kl+YDeBu7b5S672oL896GA38NgI48RbyF3NsnMqoZzutjzZXSiFAByy2D+3kkVoNj9KVPXXEqtsAMdVbcXk6xPdUvG8nVNpZAXVGAIyP2Pw1SnXhHI7ALVkwt2GhDZCL8Ohzj1uoIiB/Fi3Uh5MWONTfA7cFeXXX1AWZ10+86lIFMfHDlVNbs79Yrg/JFwhVPxArkX4TEkK7Z3tQL5axymh5/7l+HwCLpjXHb1BYWpqrkamt4c5G7jkNl15ZzymwffSBQCQO5BDgc49ZqDvDX+UlUaNShG70l4mMuuMaDAXeFiaKpqOHyT4zCnXgbOD+a8fnmmNxK55XBPp14zkLXsWABNL0dfoPcAY7fqxhqxoPA8VY38YppryaxqOLcTctdJPgTk5IRcRNLvKc0J8jwaqu3LDfSe7e7uPpFkXatTLzBCb9Oa1CQ/kHscjnOqFYGYejWPQcsv72U4nWSuwVYlkIc6LBPI79/KOy/QU6/y8ySrtqUqYMBgqOooOD4R6LXcjWxmY4eIGtPT4Euphh/IPQirrq/Jagr5/CXNNR/QW8fhImhzpdcbGLQz/FFinQHIqpub2Z5wTq7tL0PrIPQuktHzJ+jql3EXjJnX6IYXkGzGDGs2MGo8b/8TqZlBrIYzoK89UeN6q4RD0I2Ei5xqLqCudusaGDPwE35AUm6gYgGj1HX9NHw1sTYAHp766d6qBrE9kPkrtLQnmtQ6jaR5Ugv5YfBLMGp6Ab374HiXXfGAcapqvgKt45PlHPZx6mXgnB7yyXBlohAAcuo0vJtksJeDnB7GZTD3vIZgeaEKAWwdjrE3pGb7wQXpzVwCMxtDnUPuYsuNU37wdpjZPgmIquNwNnwz1cwH9J7icKjLrvjAYPmnTJNaiKyH6i5mVjWcG4qMKRLGyVwBM8cniBwFTb+6vkBPfjyF/TRvrJEXMlZGWy8auafh8SQz+/Cc3xven2r4gZx+KWeRLHvIfH8Ev+BYV/qb8AySNR2MNgQYvVOpVFKDuTa5Gg+QEXSzM9sTgfMaK/wrUQoAuZWMmo93qgn4Wvp/SyXyAT15Bs6BDfE01wVcx1C4hIuwVDV6q29xqhWB2EBkLoDrU61sICPcQjJxapIeAzUoDdpSCahdxqHp08hVgwuRE/Kh9LLCQFaDLF8jPwqZ38BgVxUZQb2+3WHsWEMDP8Vf7eJMaH1wMRPh3901eoHcK/CjJH3tyXh4b6rhB3LqNPwSxobtqDNRqFCkqsG1qao5Ewa7mboDQPMd3vheZA6Cz6Va9QH5q7PxDldk/wLXp66rpkOD1QYym+kJ/Zhkpn+Icxo0zobB9iQG5Ps8fKcrrn+C60yCJNJL9gM5wTt/jthIzt8AaxruSn7qyXnnbvoNuNhxcjskVx4AsoramEfS54SUp/aBRKEGIC/NFJ4Oi+FKbwS4aEUAWufP5Z96l1OtCM4fBqPcIH1BPl/jsOM8DIGLlhNSITLWyBW1J97QfWQ0qaWJoiigu5Ffrlzp/b+aqgQuXO3JUmgZNCrG6UqSmW8u5+W9/TZUQEUuSAcugv1nrBED7oXmz02TWry9G5A916lWBOf3g/dD82hcskAe4oZGRBYW3IijuC+aQQwCWXlapzjVMnBOXeHjoLk9QXYVPNhl0Qb3RPMdF8Jg/Y+MoGldrxOyVCrNQs4aCSMPQsssMm0IuCmjqZJ+wdEyaNT6PMVj+fxd+qUoSCLYaaBc4UaShVgUVBhw88ZBa9Cd2pP5TrUiOL8ntA5C18I5JAu7yLQp4IZM4sa8ntylAJBbB08gmdlN5bxWfplWPCH3HDzCqbbRC26KFvFYB40PwYOcahkQUdWlNYGm9gQocCF2e4z+CW6KIs+vhUH/lGSo/3/IMXP8gJgWap4HTaE+yC3jULw4q2aCGyL/lGm7CuQ0gTSbpM/fJSeklkQEgZzmTxaQbG6MbtHATXk/fDG9TX4gJyekN+qc8xqfaPFQcNDIr+6Z7u7uY0numG6ULHDvPgatjfyKrq6uyU61DIhokkzzJ9bxiSbJJjj1NgRuiAaN34CW8UmyyQDMXD6HmOJ4v5pq+IGc8AfYulEm9QA3ZF9ojcfSoPFzJDPjpjinqMXboMWpyaC/dAnJ9vikF9yU0fDXujnpbfIDuVfhJ5x6RXBe8/Ha5sLyUP4LTyHZbuS5CaqyLqGRzTXPgY5W6h7nsikDItqZ4nRkgpH6yAgPk2z7u7gJM7gZUUEM6GmpwGiXVRkQ0fhEcyDW9ulXJHfMXwkXrh6RNlB7K7kjEUBX7YmC5HxBEoqEuQNa50+0bK31oxfzgAtWo/txWHXMFXko6G4WSd/4RJNa96UafiCneRYFQOw4vxQuWg3uE9A86+cD2aziMMllXwbOyd/1YRgchDqb5O/K9J/1K3Cx8mOp71+Th9ELsnuMwx6umDJwTp0HU9CFbAOK9d3ZqfdPcIFj6U3d5K67piBvBUl8F2Y6ITmngOylTsUL5NTIa5ef/hkuxMVpMuln0LTWPQY8bM3bfxb6VlbppfhTohAAspok08qv/uXv4oJUXag3FLX4Er1/WHWR0/gkFHSn5W6m7XGRk7Oy/0xqcU3qUcmBaNpVri/Qk4t+UqlUyrMJmnbqyQz5QUQviHWRqaAgvtafj+ci9DA0O2ha194X6PW6NLSeUYO8y6GpykNO60UyB42cUxV6E7QsCkp2OoKt7e/atGnTTC4mdofP1zh8EG4dD5DWJgPWRln1/xdJ+iIhNT55NNXwg3ZHQRJnOtXWA9cwgYsw7dDQF6gouEGDvbI3koesIG7TgBK5F+CRTrUiOH84otYgPgXcTXSqrQOMVnUgv1BuoKc3eyHJ4S677cD3GuRp5a/J5cJLobWPmZNQnFO1Oh8G2zhkhFths/57JT8wdizUgs2ogR9q3+fgbUCR6d1JyFQGYhqIZu5Mh8hI+BNkLDsTaT7+Ulj8SS2M1O4Oik6MGmugp0h50w6fiMtp+PNU0w/ZAxVZ75vUUtDFPxOFAJDTuvwZTrWYwMBk6hTmdqWjo1Gx1pfn2l8R+UPgChj8pSCi+v9DJL1BEpy3tifa8cE73mkasE9/o6QdR03BCtsCHUF7pkzkY64RMfKq/+dA9ciCcOWEBo3aVsP6UDTiL96kFobNofE03ZS+QFfTsQoXjXJ3o6eqSwtHrZsMyA2fuVKL81oUpO1xLe2JAv2u4FgcJyTGqBtqiq3qC10Q9G4gYAH6qi5vTzINADktx9auqL6q60BoWmSEnDZVO4lk8/1dGKKFmLGbSqoO1m4+NZkIIi/tc2La6RSspoqtOM7pBdl8BGqeJQjknoXN3egMO7R+MGpeAxWNeuWb8m5Clgdkq/ZkOrTuWf8UnEyy4put76GCJKw+OC0Dr9tO3F5Q8AgM/R00BTf3BXpaPFPzf2gjT20XJadhcFEoMsK90BfErXl/BfFZenHqKcoJWXFAWzdQ4AioQZQphmpbOKPVM6nb3+WRvwaNpoGpZGhPdBMzgxoQGcN5/cGXqSpEbCbHxszHU1jvppLBDcv6Ah09DP03yFiXXd1AGZoZ1OabQSCnTctCTshToGnnPB6w5m6Odqr1BQWdBWM3ldTWGIfChvRGKG8yNP1xJnJqdzL3PeF7VV3aHte6CYI6F/V98ShASwdiJ5nUNZxGsmFdQ8rSTdTOdNaVv3fCUNCd/rUzCGXGwbsTazTIVL2XE6GpC9gX6Kl7O9dl11BQvDofN0PryqprOGQ2ypzXznl6cJZBqNazeIPCc4PM5OrW/LM2h4np3q6i1yNXRNMGTZSt7vkdiUEBIKf25FKSFd9svtf9eC+0OiE1H+9dtJoLZDQKqoeRu3uLjtzUWvfXdDc15hyAHdbl2K/BmU61DIio6pLfzloVaj6m+vl4MhpGj0Hz0jG/DEG7MRTi36CxQ2/2p6B1ZZWCuOWFUBVVRkT09+dW179wM8n49gRlzV0rci/ml6Hurf6CrlCzapim9sS68lfQn7foz5OzaO7gIKuq8EKS+YO4UVKo55Uwdp9D7eFbyB0+sU3tiZZENxyUqwiak0nma09QUqRIbPdW9WXDxhoxwEY5IaP2hK8GlKmq/x6YGX+8HRBU91Y9iNiBnyIGT3XZFRrYad5+sNagXFWbfqcqcnoYWq8RG0OlNRqfJFnYX8a2wNYhpfT/0nO7gKoFZao98f9VKwLH0qOSOzp3jwrIoZbrX2+KAGzWQlPtMhflsa4GlJndtea89lnPs+RrK1DRjJ82JmvJdd7Yre3MTfMntQbl/pHD9vPxfCmvqNzPuYGeurctvykY13ACjHILVQPKFLRJ24iknueDJmYWwtkwxn+/vKOj43zo+4P7woMb0gnla9O9aOzk0oAB+lP8q5IHghFax60uWJTziwexFq5xH1savJyqcrVdR2MmlrbHRndso4022mijjZwYMOD/KoBRa38ic14AAAAASUVORK5CYII=",PO=()=>D.createElement("div",{className:"footer"},D.createElement("div",{className:"footer-icons"},D.createElement("img",{src:CO,alt:""}),D.createElement("img",{src:SO,alt:""}),D.createElement("img",{src:RO,alt:""}),D.createElement("img",{src:AO,alt:""})),D.createElement("ul",null,D.createElement("li",null,D.createElement("a",null,"Audio Description")),D.createElement("li",null,D.createElement("a",null,"Help Center")),D.createElement("li",null,D.createElement("a",null,"Gift Cards")),D.createElement("li",null,D.createElement("a",null,"Media Center")),D.createElement("li",null,D.createElement("a",null,"Investor Relations")),D.createElement("li",null,D.createElement("a",null,"Jobs")),D.createElement("li",null,D.createElement("a",null,"Netflix Shop")),D.createElement("li",null,D.createElement("a",null,"Terms of Use")),D.createElement("li",null,D.createElement("a",null,"Privacy")),D.createElement("li",null,D.createElement("a",null,"Legal Notices")),D.createElement("li",null,D.createElement("a",null,"Cookie Preferences")),D.createElement("li",null,D.createElement("a",null,"Corporate Information")),D.createElement("li",null,D.createElement("a",null,"Contact Us")),D.createElement("li",null,D.createElement("a",null,"Do Not Sell or Share My Personal Information")),D.createElement("li",null,D.createElement("a",null,"Ad Choices"))),D.createElement("div",{className:"service-code"},"Service Code"),D.createElement("p",{className:"copyright-text"},"© 1997 - 2024 Loonflix, Inc.")),kO=()=>D.createElement("div",{className:"home"},D.createElement(yN,null),D.createElement("div",{className:"hero"},D.createElement("img",{src:vN,alt:"",className:"banner-img"}),D.createElement("div",{className:"hero-caption"},D.createElement("img",{src:_N,alt:"",className:"caption-img"}),D.createElement("p",null,"A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth."),D.createElement("div",{className:"hero-btns"},D.createElement("button",{className:"btn"},D.createElement("img",{src:EN,alt:""}),"Play"),D.createElement("button",{className:"btn dark-btn"},D.createElement("img",{src:wN,alt:""}),"More Info")),D.createElement(_s,null))),D.createElement("div",{className:"more-cards"},D.createElement(_s,{title:"Blockbuster Movies",category:"top_rated"}),D.createElement(_s,{title:"Only on Netflix",category:"popular"}),D.createElement(_s,{title:"Upcoming",category:"upcoming"}),D.createElement(_s,{title:"Top Picks for You",category:"now_playing"})),D.createElement(PO,null)),NO="/loonflix-repo/assets/loading_screen-OMdCkKTM.gif",OO=()=>{const[t,e]=V.useState("Sign In"),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,l]=V.useState(!1),u=async h=>{h.preventDefault(),l(!0),t==="Sign In"?await mN(n,i):await pN(n,i),l(!1)};return o?D.createElement("div",{className:"loading-spinner"},D.createElement("img",{src:NO,alt:""})):D.createElement("div",{className:"login"},D.createElement("img",{src:E0,className:"login-logo",alt:""}),D.createElement("div",{className:"login-form"},D.createElement("h1",null,t),D.createElement("form",null,D.createElement("input",{type:"email",placeholder:"Email",value:n,onChange:h=>{r(h.target.value)}}),D.createElement("input",{type:"password",placeholder:"Password",value:i,onChange:h=>{s(h.target.value)}}),D.createElement("button",{onClick:u,type:"submit"},t),D.createElement("div",{className:"form-help"},D.createElement("div",{className:"remember"},D.createElement("input",{type:"checkbox"}),D.createElement("label",{htmlFor:""},"Remember Me")),D.createElement("p",null,"Need Help?"))),D.createElement("div",{className:"form-switch"},t==="Sign In"?D.createElement("p",null,"New to Loonflix?",D.createElement("span",{onClick:()=>{e("Sign Up")}},"Sign up now"),"."):D.createElement("p",null,"Already have account?",D.createElement("span",{onClick:()=>{e("Sign In")}},"Sign in now"),"."))))},DO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAPYSURBVHhe7Z3PSxVRGIadiQrTikQkM40wgmgdbQraROu2QosUIaJVixCjfVCC/QFF0aKICNwF0bKIFrWNqH3UIsIf+due794vSJzbPTN6DqLvAy/3jOceoqdh5rwXp9sihBBCbDZWVlYyHyYh6R+2GVheXu7Ksuw6os9yaH//CfIgz/MfNi82ACSfIO/INFkixi8yhvgD/jaxHpB5nJjkRaSugp99IRf8raIqSDxKXhVJNvj5Ahnyt0ch99ctCQ5zBB5jOEbOcW3eUZtYy6JHlMUln+T1mZ2xduYWwZzxhpzypaIMiOvHY4jkr+QS2e1LRSg47EPcczJfV1oM89/JIMN2XypCQVw/eUkanskG81PkMmnzpSIUpNkW7i1pJnmSDJBWXypCQZpJfk8Kt3B/Yd4kX2S4y5eKUBBnlws7k0Ml7/SlIhSk2Y0v9Jo8wFBnchkQliHOzmTbXTTbwtnuwm58uiaXAX8m2T4gekoabuGYM2yfPEi0uygL0uxMDpbMofbJZUGaykhsEKcyEhukqYzEBmkqI7FBnMpIbJCmMhIThKmMxAZ/KiMpQJrKSGyQpjISG8SpjMQGaSojsUGaykhsEKcyEhukqYzEBGEqI7HBn8pICpCmMhIbpKmMxAZxKiOxQZrKSGyQ1ktURmKDuNsInK7ZbMA/klVGqoLA12SprnQtzG2bMhL7GZYFslIfFmLP+e0jumSsB87Wa+Rn/fwthvkZMsqw05eJsiDvABLvksma1QYwP0vGSY8vFWVBXgcuRwJkz5EnDPt8qSgLAveS4QDZ9mDlC9LrS0VZkNdKhsiUey2EebuMPCLdvlSUBXlt5AaZca+FMG/bvnGGukFWBYEdxG6Qs3WtxbjsWwz3+1JRFuQdROJj0uyTPPvvHq4y3ONLRVkQ2INAe4T4d81qA1z2FYb62LQqCDxE7pNmuxErNTcZ6ppdFQR2kTsBsm03co+o1FQFeSo1qUCgSk0qkKdSkwrkqdSkAoEqNalAnkpNKhCoUpMKBKrUpAKBKjWpQJ5KTSoQqFKTCuSp1KQCeSo1qUCgSk0qkKdSkwoEqtSkAoEqNalAoEpNKpCnUpMKBKrUpAJ5KjWpwGM7AkdNZl1rMczbP4Y9AmK/EC+qgMBOBNrvXc/VrDaA+c/kvC8TVcBj01LDnF2vhxlG+0qrLf09LEaWZd94GSETiJyt/XAt9pzN/561EaFwxh5G9ENeV90gOTY+MDzjbxXrBaHdCLUbn12T7XIxb5KJ7VCiPha9Hb9mz3YXp8kRO+bS8gn5H/M8n7ZjscEgN7P4oRBCiG1LS8sfVc8t49uFuHoAAAAASUVORK5CYII=",LO=()=>{const{id:t}=XN(),e=Pf(),[n,r]=V.useState({name:"",key:"",published_at:"",type:""}),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWQ1OWJjNjllZGI2NzhmZTA0OTRmMzlhOGE3Y2RkNSIsIm5iZiI6MTczMTEyMjMzMC4xNzgwMjIxLCJzdWIiOiI2NzJlZDIxZTlmZGRlOGM0Yjg4YmM4ZmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wwcqgk0dcJsaAgsapbsTO268Epgx1Lxd6VGtHB-G_hM"}};return V.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${t}/videos?language=en-US`,i).then(s=>s.json()).then(s=>r(s.results[0])).catch(s=>console.error(s))},[]),D.createElement("div",{className:"player"},D.createElement("img",{src:DO,onClick:()=>{e(-2)},alt:""}),D.createElement("iframe",{width:"90%",height:"90%",src:`https://www.youtube.com/embed/${n.key}`,title:"trailer",frameBorder:"0",allowFullScreen:!0}),D.createElement("div",{className:"player-info"},D.createElement("p",null,n.published_at.slice(0,10)),D.createElement("p",null,n.name),D.createElement("p",null,n.type)))},xO=()=>{const t=Pf();return V.useEffect(()=>{sR(vu,async e=>{e?(console.log("Logged In"),t("/")):(console.log("Logged Out"),t("/login"))})},[]),D.createElement("div",null,D.createElement(hN,{theme:"dark"}),D.createElement(dO,null,D.createElement($a,{path:"/",element:D.createElement(kO,null)}),D.createElement($a,{path:"/login",element:D.createElement(OO,null)}),D.createElement($a,{path:"/player/:id",element:D.createElement(LO,null)})))};Dc.createRoot(document.getElementById("root")).render(D.createElement(D.StrictMode,null,D.createElement(_O,null,D.createElement(xO,null))));
