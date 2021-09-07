var library=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";var r=n(1),o=Object.prototype.toString;function i(t){return"[object Array]"===o.call(t)}function u(t){return void 0===t}function c(t){return null!==t&&"object"==typeof t}function a(t){return"[object Function]"===o.call(t)}function s(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:c,isUndefined:u,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:a,isStream:function(t){return c(t)&&a(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:s,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)s(arguments[r],n);return e},deepMerge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]="object"==typeof n?t({},n):n}for(var r=0,o=arguments.length;r<o;r++)s(arguments[r],n);return e},extend:function(t,e,n){return s(e,(function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){"use strict";var r=n(0);function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var u=[];r.forEach(e,(function(t,e){null!=t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),u.push(o(e)+"="+o(t))})))})),i=u.join("&")}if(i){var c=t.indexOf("#");-1!==c&&(t=t.slice(0,c)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";(function(e){var r=n(0),o=n(18),i={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var c,a={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e))&&(c=n(5)),c),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(u(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(t){a.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){a.headers[t]=r.merge(i)})),t.exports=a}).call(this,n(17))},function(t,e,n){"use strict";var r=n(0),o=n(19),i=n(2),u=n(21),c=n(24),a=n(25),s=n(6);t.exports=function(t){return new Promise((function(e,f){var l=t.data,d=t.headers;r.isFormData(l)&&delete d["Content-Type"];var h=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",b=t.auth.password||"";d.Authorization="Basic "+btoa(p+":"+b)}var v=u(t.baseURL,t.url);if(h.open(t.method.toUpperCase(),i(v,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:t,request:h};o(e,f,r),h=null}},h.onabort=function(){h&&(f(s("Request aborted",t,"ECONNABORTED",h)),h=null)},h.onerror=function(){f(s("Network Error",t,null,h)),h=null},h.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),f(s(e,t,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var m=n(26),g=(t.withCredentials||a(v))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;g&&(d[t.xsrfHeaderName]=g)}if("setRequestHeader"in h&&r.forEach(d,(function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete d[e]:h.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),t.responseType)try{h.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){h&&(h.abort(),f(t),h=null)})),void 0===l&&(l=null),h.send(l)}))}},function(t,e,n){"use strict";var r=n(20);t.exports=function(t,e,n,o,i){var u=new Error(t);return r(u,e,n,o,i)}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){e=e||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],u=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(t){void 0!==e[t]&&(n[t]=e[t])})),r.forEach(i,(function(o){r.isObject(e[o])?n[o]=r.deepMerge(t[o],e[o]):void 0!==e[o]?n[o]=e[o]:r.isObject(t[o])?n[o]=r.deepMerge(t[o]):void 0!==t[o]&&(n[o]=t[o])})),r.forEach(u,(function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])}));var c=o.concat(i).concat(u),a=Object.keys(e).filter((function(t){return-1===c.indexOf(t)}));return r.forEach(a,(function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])})),n}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){n(10);const r=n(30);t.exports=class{constructor(t,e){this.api=t,this.player=e}async start(){return this.account=await this.api.accountInfo(),console.log("Playing as "+this.account.data.username),this.api.streamEvents(t=>this.eventHandler(t)),this.account}eventHandler(t){switch(t.type){case"challenge":this.handleChallenge(t.challenge);break;case"gameStart":this.handleGameStart(t.game.id);break;default:console.log("Unhandled event : "+JSON.stringify(t))}}handleGameStart(t){new r(this.api,this.account.data.username,this.player).start(t)}async handleChallenge(t){if(t.rated){console.log("Declining rated challenge from "+t.challenger.id);const e=await this.api.declineChallenge(t.id);console.log("Declined",e.data||e)}else{console.log("Accepting unrated challenge from "+t.challenger.id);const e=await this.api.acceptChallenge(t.id);console.log("Accepted",e.data||e)}}}},function(t,e,n){const r=n(11),o=n(29);t.exports=class{constructor(t){this.baseURL="https://lichess.org/",this.headers={Authorization:"Bearer "+t},this.axiosConfig={baseURL:this.baseURL,headers:this.headers}}acceptChallenge(t){return this.post(`api/challenge/${t}/accept`)}declineChallenge(t){return this.post(`api/challenge/${t}/decline`)}upgrade(){return this.post("api/bot/account/upgrade")}accountInfo(){return this.get("api/account")}makeMove(t,e){return this.post(`api/bot/game/${t}/move/${e}`)}abortGame(t){return this.post(`api/bot/game/${t}/abort`)}resignGame(t){return this.post(`api/bot/game/${t}/resign`)}streamEvents(t){return this.stream("api/stream/event",t)}streamGame(t,e){return this.stream("api/bot/game/stream/"+t,e)}chat(t,e,n){return this.post(`api/bot/game/${t}/chat`,{room:e,text:n})}logAndReturn(t){return console.log(JSON.stringify(t.data)),t}get(t){return console.log("GET "+t),r.get(t+"?v="+Date.now(),this.axiosConfig).then(this.logAndReturn).catch(t=>console.log(t))}post(t,e){return console.log(`POST ${t} `+JSON.stringify(e||{})),r.post(t,e||{},this.axiosConfig).then(this.logAndReturn).catch(t=>console.log(t.response||t))}stream(t,e){console.log(`GET ${t} stream`),o({method:"GET",url:this.baseURL+t,headers:this.headers}).node("!",(function(t){console.log("STREAM data : "+JSON.stringify(t)),e(t)})).fail((function(t){console.error(JSON.stringify(t))}))}}},function(t,e,n){t.exports=n(12)},function(t,e,n){"use strict";var r=n(0),o=n(1),i=n(13),u=n(7);function c(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var a=c(n(4));a.Axios=i,a.create=function(t){return c(u(a.defaults,t))},a.Cancel=n(8),a.CancelToken=n(27),a.isCancel=n(3),a.all=function(t){return Promise.all(t)},a.spread=n(28),t.exports=a,t.exports.default=a},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(14),u=n(15),c=n(7);function a(t){this.defaults=t,this.interceptors={request:new i,response:new i}}a.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=c(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[u,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)n=n.then(e.shift(),e.shift());return n},a.prototype.getUri=function(t){return t=c(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){a.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}})),r.forEach(["post","put","patch"],(function(t){a.prototype[t]=function(e,n,o){return this.request(r.merge(o||{},{method:t,url:e,data:n}))}})),t.exports=a},function(t,e,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},function(t,e,n){"use strict";var r=n(0),o=n(16),i=n(3),u=n(4);function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||u.adapter)(t).then((function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,s=[],f=!1,l=-1;function d(){f&&a&&(f=!1,a.length?s=a.concat(s):l=-1,s.length&&h())}function h(){if(!f){var t=c(d);f=!0;for(var e=s.length;e;){for(a=s,s=[];++l<e;)a&&a[l].run();l=-1,e=s.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function b(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new p(t,e)),1!==s.length||f||c(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e,n){var o=n.config.validateStatus;!o||o(n.status)?t(n):e(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},function(t,e,n){"use strict";var r=n(22),o=n(23);t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,u={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(u[e]&&o.indexOf(e)>=0)return;u[e]="set-cookie"===e?(u[e]?u[e]:[]).concat([n]):u[e]?u[e]+", "+n:n}})),u):u}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,u){var c=[];c.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(o)&&c.push("path="+o),r.isString(i)&&c.push("domain="+i),!0===u&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,n){"use strict";var r=n(8);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){
/*!
 * v2.1.4-104-gc868b3a
 * 
 */
var r;"undefined"!=typeof self&&self,r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";n.d(e,"j",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"k",(function(){return s})),n.d(e,"e",(function(){return f})),n.d(e,"g",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"f",(function(){return p}));var r=n(1),o=s((function(t,e){var n=e.length;return s((function(r){for(var o=0;o<r.length;o++)e[n+o]=r[o];return e.length=n+r.length,t.apply(this,e)}))}));function i(t,e){return function(){return t.call(this,e.apply(this,arguments))}}function u(t){return function(e){return e[t]}}s((function(t){var e=Object(r.c)(t);function n(t,e){return[a(t,e)]}return s((function(t){return Object(r.f)(n,t,e)[0]}))}));var c=s((function(t){return s((function(e){for(var n,r=0;r<u("length")(t);r++)if(n=a(e,t[r]))return n}))}));function a(t,e){return e.apply(void 0,t)}function s(t){var e=t.length-1,n=Array.prototype.slice;if(0===e)return function(){return t.call(this,n.call(arguments))};if(1===e)return function(){return t.call(this,arguments[0],n.call(arguments,1))};var r=Array(t.length);return function(){for(var o=0;o<e;o++)r[o]=arguments[o];return r[e]=n.call(arguments,e),t.apply(this,r)}}function f(t){return function(e,n){return t(n,e)}}function l(t,e){return function(n){return t(n)&&e(n)}}function d(){}function h(){return!0}function p(t){return function(){return t}}},function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"l",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"h",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"j",(function(){return f})),n.d(e,"f",(function(){return l})),n.d(e,"m",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return p})),n.d(e,"k",(function(){return b})),n.d(e,"e",(function(){return v}));var r=n(0);function o(t,e){return[t,e]}var i=Object(r.c)(0),u=Object(r.c)(1);function c(t){return b(t.reduce(Object(r.e)(o),null))}var a=Object(r.k)(c);function s(t){return l((function(t,e){return t.unshift(e),t}),[],t)}function f(t,e){return e?o(t(i(e)),f(t,u(e))):null}function l(t,e,n){return n?t(l(t,e,u(n)),i(n)):e}function d(t,e,n){return function t(n,r){return n?e(i(n))?(r(i(n)),u(n)):o(i(n),t(u(n),r)):null}(t,n||r.i)}function h(t,e){return!e||t(i(e))&&h(t,u(e))}function p(t,e){t&&(i(t).apply(null,e),p(u(t),e))}function b(t){return function t(e,n){return e?t(u(e),o(i(e),n)):n}(t,null)}function v(t,e){return e&&(t(i(e))?i(e):v(t,u(e)))}},function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var r=n(1),o=n(0);function i(t,e){return e&&e.constructor===t}var u=Object(o.c)("length"),c=Object(o.j)(i,String);function a(t){return void 0!==t}function s(t,e){return e instanceof Object&&Object(r.a)((function(t){return t in e}),t)}},function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return f})),n.d(e,"c",(function(){return l})),n.d(e,"m",(function(){return d})),n.d(e,"n",(function(){return h})),n.d(e,"a",(function(){return p})),n.d(e,"j",(function(){return b})),n.d(e,"l",(function(){return v})),n.d(e,"k",(function(){return m})),n.d(e,"o",(function(){return g}));var r=1,o=r++,i=r++,u=r++,c=r++,a="fail",s=r++,f=r++,l="start",d="data",h="end",p=r++,b=r++,v=r++,m=r++;function g(t,e,n){try{var r=JSON.parse(e)}catch(t){}return{statusCode:t,body:e,jsonBody:r,thrown:n}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return u}));var r=n(0);function o(t,e){return{key:t,node:e}}var i=Object(r.c)("key"),u=Object(r.c)("node")},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(1),o=n(0),i=n(2),u=n(8),c=n(9);function a(t){var e=Object(r.h)("resume","pause","pipe"),n=Object(o.j)(i.b,e);return t?n(t)||Object(i.d)(t)?Object(u.a)(c.a,t):Object(u.a)(c.a,t.url,t.method,t.body,t.headers,t.withCredentials,t.cached):Object(c.a)()}a.drop=function(){return a.drop}},function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var r=n(3),o=n(4),i=n(2),u=n(1),c={};function a(t){var e=t(r.f).emit,n=t(r.d).emit,a=t(r.i).emit,s=t(r.h).emit;function f(t,e,n){Object(o.c)(Object(u.g)(t))[e]=n}function l(t,n,r){t&&f(t,n,r);var i=Object(u.d)(Object(o.b)(n,r),t);return e(i),i}var d={};return d[r.l]=function(t,e){if(!t)return a(e),l(t,c,e);var n=function(t,e){var n=Object(o.c)(Object(u.g)(t));return Object(i.c)(Array,n)?l(t,Object(i.e)(n),e):t}(t,e),r=Object(u.l)(n),s=Object(o.a)(Object(u.g)(n));return f(r,s,e),Object(u.d)(Object(o.b)(s,e),r)},d[r.k]=function(t){return n(t),Object(u.l)(t)||s(Object(o.c)(Object(u.g)(t)))},d[r.j]=l,d}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5);e.default=r.a},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(2);function o(t,e,n,o,i,u,c){return i=i?JSON.parse(JSON.stringify(i)):{},o?(Object(r.d)(o)||(o=JSON.stringify(o),i["Content-Type"]=i["Content-Type"]||"application/json"),i["Content-Length"]=i["Content-Length"]||o.length):o=null,t(n||"GET",function(t,e){return!1===e&&(-1===t.indexOf("?")?t+="?":t+="&",t+="_="+(new Date).getTime()),t}(e,c),o,i,u||!1)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(10),o=n(12),i=n(6),u=n(13),c=n(14),a=n(16),s=n(17),f=n(18);function l(t,e,n,l,d){var h=Object(r.a)();return e&&Object(f.b)(h,Object(f.a)(),t,e,n,l,d),Object(s.a)(h),Object(o.a)(h,Object(i.b)(h)),Object(u.a)(h,c.a),Object(a.a)(h,e)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(11),o=n(0);function i(){var t={},e=i("newListener"),n=i("removeListener");function i(o){return t[o]=Object(r.a)(o,e,n),t[o]}function u(e){return t[e]||i(e)}return["emit","on","un"].forEach((function(t){u[t]=Object(o.k)((function(e,n){Object(o.b)(n,u(e)[t])}))})),u}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(1),o=n(2),i=n(0);function u(t,e,n){var u,c;function a(t){return function(e){return e.id===t}}return{on:function(n,o){var i={listener:n,id:o||n};return e&&e.emit(t,n,i.id),u=Object(r.d)(i,u),c=Object(r.d)(n,c),this},emit:function(){Object(r.b)(c,arguments)},un:function(e){var o;u=Object(r.m)(u,a(e),(function(t){o=t})),o&&(c=Object(r.m)(c,(function(t){return t===o.listener})),n&&n.emit(t,o.listener,o.id))},listeners:function(){return c},hasListener:function(t){var e=t?a(t):i.a;return Object(o.a)(Object(r.e)(e,u))}}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(4),o=n(3),i=n(1);function u(t,e){var n,u={};function c(t){return function(e){n=t(n,e)}}for(var a in e)t(a).on(c(e[a]),u);t(o.g).on((function(t){var e=Object(i.g)(n),o=Object(r.a)(e),u=Object(i.l)(n);u&&(Object(r.c)(Object(i.g)(u))[o]=t)})),t(o.e).on((function(){var t=Object(i.g)(n),e=Object(r.a)(t),o=Object(i.l)(n);o&&delete Object(r.c)(Object(i.g)(o))[e]})),t(o.a).on((function(){for(var n in e)t(n).un(u)}))}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(3),o=n(1),i=n(4);function u(t,e){var n={node:t(r.d),path:t(r.f)};function u(e,n,r){var u=t(e).emit;n.on((function(t){var e=r(t);!1!==e&&function(t,e,n){var r=Object(o.k)(n);t(e,Object(o.i)(Object(o.l)(Object(o.j)(i.a,r))),Object(o.i)(Object(o.j)(i.c,r)))}(u,Object(i.c)(e),t)}),e),t("removeListener").on((function(r){r===e&&(t(r).listeners()||n.un(e))}))}t("newListener").on((function(t){var r=/(node|path):(.*)/.exec(t);if(r){var o=n[r[1]];o.hasListener(t)||u(t,o,e(r[2]))}}))}},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),o=n(1),i=n(4),u=n(2),c=n(6),a=n(15),s=Object(a.a)((function(t,e,n,a,s){var f=Object(r.d)(i.a,o.g),l=Object(r.d)(i.c,o.g);function d(t,e){return e[1]?Object(r.g)(t,o.g):t}function h(t){return t===r.a?r.a:Object(r.g)((function(t){return f(t)!==c.a}),Object(r.d)(t,o.l))}function p(){return function(t){return f(t)===c.a}}function b(t,e,n,r,i){var c=t(n);if(c){var a=function(t,e,n){return Object(o.f)((function(t,e){return e(t,n)}),e,t)}(e,r,c);return i(n.substr(Object(u.e)(c[0])),a)}}function v(t,e){return Object(r.j)(b,t,e)}var m=Object(r.h)(v(t,Object(o.h)(d,(function(t,e){var n=e[3];if(!n)return t;var i=Object(r.j)(u.b,Object(o.c)(n.split(/\W+/))),c=Object(r.d)(i,l);return Object(r.g)(c,t)}),(function(t,e){var n=e[2],o=n&&"*"!==n?function(t){return String(f(t))===n}:r.a;return Object(r.g)(o,t)}),h)),v(e,Object(o.h)((function(t){if(t===r.a)return r.a;var e=p(),n=t,o=h((function(t){return i(t)})),i=Object(r.h)(e,n,o);return i}))),v(n,Object(o.h)()),v(a,Object(o.h)(d,p)),v(s,Object(o.h)((function(t){return function(e){var n=t(e);return!0===n?Object(o.g)(e):n}}))),(function(t){throw Error('"'+t+'" could not be tokenised')}));function g(t,e){return e}function j(t,e){return m(t,e,t?j:g)}return function(t){try{return j(t,r.a)}catch(e){throw Error('Could not compile "'+t+'" because '+e.message)}}}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r,o,i,u,c,a,s,f,l,d,h,p=n(0),b=(r=Object(p.k)((function(t){return t.unshift(/^/),(e=RegExp(t.map(Object(p.c)("source")).join(""))).exec.bind(e);var e})),u=r(o=/(\$?)/,/([\w-_]+|\*)/,i=/(?:{([\w ]*?)})?/),c=r(o,/\["([^"]+)"\]/,i),a=r(o,/\[(\d+|\*)\]/,i),s=r(o,/()/,/{([\w ]*?)}/),f=r(/\.\./),l=r(/\./),d=r(o,/!/),h=r(/$/),function(t){return t(Object(p.h)(u,c,a,s),f,l,d,h)})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(3),o=n(0),i=n(2),u=n(5);function c(t,e){var n,c=/^(node|path):./,a=t(r.h),s=t(r.e).emit,f=t(r.g).emit,l=Object(o.k)((function(e,r){if(n[e])Object(o.b)(r,n[e]);else{var i=t(e),u=r[0];c.test(e)?d(i,p(u)):i.on(u)}return n}));function d(t,e,r){r=r||e;var i=h(e);return t.on((function(){var e=!1;n.forget=function(){e=!0},Object(o.b)(arguments,i),delete n.forget,e&&t.un(r)}),r),n}function h(t){return function(){try{return t.apply(n,arguments)}catch(t){setTimeout((function(){throw new Error(t.message)}))}}}function p(t){return function(){var e=t.apply(this,arguments);Object(i.a)(e)&&(e===u.a.drop?s():f(e))}}function b(e,n,r){var o;o="node"===e?p(r):r,d(function(e,n){return t(e+":"+n)}(e,n),o,r)}function v(t,e,r){return Object(i.d)(e)?b(t,e,r):function(t,e){for(var n in e)b(t,n,e[n])}(t,e),n}return t(r.i).on((function(t){n.root=Object(o.f)(t)})),t(r.c).on((function(t,e){n.header=function(t){return t?e[t]:e}})),n={on:l,addListener:l,removeListener:function(e,r,o){if("done"===e)a.un(r);else if("node"===e||"path"===e)t.un(e+":"+r,o);else{var i=r;t(e).un(i)}return n},emit:t.emit,node:Object(o.j)(v,"node"),path:Object(o.j)(v,"path"),done:Object(o.j)(d,a),start:Object(o.j)((function(e,r){return t(e).on(h(r),r),n}),r.c),fail:t(r.b).on,abort:t(r.a).emit,header:o.i,root:o.i,source:e}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(3);function o(t){var e,n,o,i,u=t(r.j).emit,c=t(r.l).emit,a=t(r.k).emit,s=t(r.b).emit,f=/[\\"\n]/g,l=0,d=l++,h=l++,p=l++,b=l++,v=l++,m=l++,g=l++,j=l++,O=l++,y=l++,w=l++,x=l++,S=l++,E=l++,C=l++,T=l++,R=l++,k=l++,A=l++,N=l++,L=65536,U="",B=!1,M=!1,P=d,I=[],q=null,D=0,_=0,H=0,$=0,F=1;function J(t){void 0!==i&&(c(i),a(),i=void 0),e=Error(t+"\nLn: "+F+"\nCol: "+$+"\nChr: "+n),s(Object(r.o)(void 0,void 0,e))}function G(t){return"\r"===t||"\n"===t||" "===t||"\t"===t}t(r.m).on((function(t){if(!e){if(M)return J("Cannot write after close");var r,s=0;for(n=t[0];n&&(s>0&&(o=n),n=t[s++]);)switch(H++,"\n"===n?(F++,$=0):$++,P){case d:if("{"===n)P=p;else if("["===n)P=v;else if(!G(n))return J("Non-whitespace before {[.");continue;case j:case p:if(G(n))continue;if(P===j)I.push(O);else{if("}"===n){c({}),a(),P=I.pop()||h;continue}I.push(b)}if('"'!==n)return J('Malformed object key should start with " ');P=g;continue;case O:case b:if(G(n))continue;if(":"===n)P===b?(I.push(b),void 0!==i&&(c({}),u(i),i=void 0),_++):void 0!==i&&(u(i),i=void 0),P=h;else if("}"===n)void 0!==i&&(c(i),a(),i=void 0),a(),_--,P=I.pop()||h;else{if(","!==n)return J("Bad object");P===b&&I.push(b),void 0!==i&&(c(i),a(),i=void 0),P=j}continue;case v:case h:if(G(n))continue;if(P===v){if(c([]),_++,P=h,"]"===n){a(),_--,P=I.pop()||h;continue}I.push(m)}if('"'===n)P=g;else if("{"===n)P=p;else if("["===n)P=v;else if("t"===n)P=y;else if("f"===n)P=S;else if("n"===n)P=R;else if("-"===n)U+=n;else if("0"===n)U+=n,P=20;else{if(-1==="123456789".indexOf(n))return J("Bad value");U+=n,P=20}continue;case m:if(","===n)I.push(m),void 0!==i&&(c(i),a(),i=void 0),P=h;else{if("]"!==n){if(G(n))continue;return J("Bad array")}void 0!==i&&(c(i),a(),i=void 0),a(),_--,P=I.pop()||h}continue;case g:void 0===i&&(i="");var l=s-1;t:for(;;){for(;D>0;)if(q+=n,n=t.charAt(s++),4===D?(i+=String.fromCharCode(parseInt(q,16)),D=0,l=s-1):D++,!n)break t;if('"'===n&&!B){P=I.pop()||h,i+=t.substring(l,s-1);break}if(!("\\"!==n||B||(B=!0,i+=t.substring(l,s-1),n=t.charAt(s++))))break;if(B){if(B=!1,"n"===n?i+="\n":"r"===n?i+="\r":"t"===n?i+="\t":"f"===n?i+="\f":"b"===n?i+="\b":"u"===n?(D=1,q=""):i+=n,n=t.charAt(s++),l=s-1,n)continue;break}f.lastIndex=s;var z=f.exec(t);if(!z){s=t.length+1,i+=t.substring(l,s-1);break}if(s=z.index+1,!(n=t.charAt(z.index))){i+=t.substring(l,s-1);break}}continue;case y:if(!n)continue;if("r"!==n)return J("Invalid true started with t"+n);P=w;continue;case w:if(!n)continue;if("u"!==n)return J("Invalid true started with tr"+n);P=x;continue;case x:if(!n)continue;if("e"!==n)return J("Invalid true started with tru"+n);c(!0),a(),P=I.pop()||h;continue;case S:if(!n)continue;if("a"!==n)return J("Invalid false started with f"+n);P=E;continue;case E:if(!n)continue;if("l"!==n)return J("Invalid false started with fa"+n);P=C;continue;case C:if(!n)continue;if("s"!==n)return J("Invalid false started with fal"+n);P=T;continue;case T:if(!n)continue;if("e"!==n)return J("Invalid false started with fals"+n);c(!1),a(),P=I.pop()||h;continue;case R:if(!n)continue;if("u"!==n)return J("Invalid null started with n"+n);P=k;continue;case k:if(!n)continue;if("l"!==n)return J("Invalid null started with nu"+n);P=A;continue;case A:if(!n)continue;if("l"!==n)return J("Invalid null started with nul"+n);c(null),a(),P=I.pop()||h;continue;case N:if("."!==n)return J("Leading zero not followed by .");U+=n,P=20;continue;case 20:if(-1!=="0123456789".indexOf(n))U+=n;else if("."===n){if(-1!==U.indexOf("."))return J("Invalid number has two dots");U+=n}else if("e"===n||"E"===n){if(-1!==U.indexOf("e")||-1!==U.indexOf("E"))return J("Invalid number has two exponential");U+=n}else if("+"===n||"-"===n){if("e"!==o&&"E"!==o)return J("Invalid symbol in number");U+=n}else U&&(c(parseFloat(U)),a(),U=""),s--,P=I.pop()||h;continue;default:return J("Unknown state: "+P)}H>=L&&(r=0,void 0!==i&&i.length>65536&&(J("Max buffer length exceeded: textNode"),r=Math.max(r,i.length)),U.length>65536&&(J("Max buffer length exceeded: numberNode"),r=Math.max(r,U.length)),L=65536-r+H)}})),t(r.n).on((function(){if(P===d)return c({}),a(),void(M=!0);P===h&&0===_||J("Unexpected end"),void 0!==i&&(c(i),a(),i=void 0),M=!0}))}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var r=n(19),o=n(3),i=n(2),u=n(20),c=n(0);function a(){return new XMLHttpRequest}function s(t,e,n,a,s,f,l){var d=t(o.m).emit,h=t(o.b).emit,p=0,b=!0;function v(){if("2"===String(e.status)[0]){var t=e.responseText,n=(" "+t.substr(p)).substr(1);n&&d(n),p=Object(i.e)(t)}}function m(e){try{b&&t(o.c).emit(e.status,Object(u.a)(e.getAllResponseHeaders())),b=!1}catch(t){}}t(o.a).on((function(){e.onreadystatechange=null,e.abort()})),"onprogress"in e&&(e.onprogress=v),e.onreadystatechange=function(){switch(e.readyState){case 2:case 3:return m(e);case 4:m(e),"2"===String(e.status)[0]?(v(),t(o.n).emit()):h(Object(o.o)(e.status,e.responseText))}};try{for(var g in e.open(n,a,!0),f)e.setRequestHeader(g,f[g]);Object(r.a)(window.location,Object(r.b)(a))||e.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.withCredentials=l,e.send(s)}catch(t){window.setTimeout(Object(c.j)(h,Object(o.o)(void 0,void 0,t)),0)}}},function(t,e,n){"use strict";function r(t,e){function n(e){return String(e.port||{"http:":80,"https:":443}[e.protocol||t.protocol])}return!!(e.protocol&&e.protocol!==t.protocol||e.host&&e.host!==t.host||e.host&&n(e)!==n(t))}function o(t){var e=/(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(t)||[];return{protocol:e[1]||"",host:e[2]||"",port:e[3]||""}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},function(t,e,n){"use strict";function r(t){var e={};return t&&t.split("\r\n").forEach((function(t){var n=t.indexOf(": ");e[t.substring(0,n)]=t.substring(n+2)})),e}n.d(e,"a",(function(){return r}))}]).default},t.exports=r()},function(t,e){t.exports=class{constructor(t,e,n){this.api=t,this.name=e,this.player=n}start(t){this.gameId=t,this.api.streamGame(t,t=>this.handler(t))}handleChatLine(t){if(t.username!==this.name){const e=this.player.getReply(t);e&&this.api.chat(this.gameId,t.room,e)}}handler(t){switch(t.type){case"chatLine":this.handleChatLine(t);break;case"gameFull":this.colour=this.playingAs(t),this.playNextMove(t.state.moves);break;case"gameState":this.playNextMove(t.moves);break;default:console.log("Unhandled game event : "+JSON.stringify(t))}}playNextMove(t){const e=""===t?[]:t.split(" ");if(this.isTurn(this.colour,e)){const t=this.player.getNextMove(e);t&&(console.log(this.name+" as "+this.colour+" to move "+t),this.api.makeMove(this.gameId,t))}}playingAs(t){return t.white.name===this.name?"white":"black"}isTurn(t,e){var n=e.length%2;return"white"===t?0===n:1===n}}}]);