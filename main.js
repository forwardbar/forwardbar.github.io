/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),l=function(){function e(t){var i=this;if(r(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return s(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var i=document.createDocumentFragment();if(this.config.loop)for(var r=this.innerElements.length-this.perPage;r<this.innerElements.length;r++){var n=this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));i.appendChild(n)}for(var s=0;s<this.innerElements.length;s++){var l=this.buildSliderFrameItem(this.innerElements[s]);i.appendChild(l)}if(this.config.loop)for(var o=0;o<this.perPage;o++){var a=this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));i.appendChild(a)}this.sliderFrame.appendChild(i),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===n(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide-e<0){this.disableTransition();var r=this.currentSlide+this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r-e}else this.currentSlide=this.currentSlide-e}else this.currentSlide=Math.max(this.currentSlide-e,0);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var r=this.currentSlide-this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r+e}else this.currentSlide=this.currentSlide+e}else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,i=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,r=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+r+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+r+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,r=e>0&&this.currentSlide-i<0,n=e<0&&this.currentSlide+i>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent(r||n)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var i=e<this.currentSlide,r=this.currentSlide+this.perPage-1===e;(i||r)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var r=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=r?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var i=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)i.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},i=e;for(var r in i)t[r]=i[r];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=l,e.exports=t.default}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
module.exports = __webpack_require__(37);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*! https://mths.be/scrollingelement v1.5.2 by @diegoperini & @mathias | MIT license */
if (!('scrollingElement' in document)) (function() {

	function computeStyle(element) {
		if (window.getComputedStyle) {
			// Support Firefox < 4 which throws on a single parameter.
			return getComputedStyle(element, null);
		}
		// Support Internet Explorer < 9.
		return element.currentStyle;
	}

	function isBodyElement(element) {
		// The `instanceof` check gives the correct result for e.g. `body` in a
		// non-HTML namespace.
		if (window.HTMLBodyElement) {
			return element instanceof HTMLBodyElement;
		}
		// Fall back to a `tagName` check for old browsers.
		return /body/i.test(element.tagName);
	}

	function getNextBodyElement(frameset) {
		// We use this function to be correct per spec in case `document.body` is
		// a `frameset` but there exists a later `body`. Since `document.body` is
		// a `frameset`, we know the root is an `html`, and there was no `body`
		// before the `frameset`, so we just need to look at siblings after the
		// `frameset`.
		var current = frameset;
		while (current = current.nextSibling) {
			if (current.nodeType == 1 && isBodyElement(current)) {
				return current;
			}
		}
		// No `body` found.
		return null;
	}

	// Note: standards mode / quirks mode can be toggled at runtime via
	// `document.write`.
	var isCompliantCached;
	var isCompliant = function() {
		var isStandardsMode = /^CSS1/.test(document.compatMode);
		if (!isStandardsMode) {
			// In quirks mode, the result is equivalent to the non-compliant
			// standards mode behavior.
			return false;
		}
		if (isCompliantCached === void 0) {
			// When called for the first time, check whether the browser is
			// standard-compliant, and cache the result.
			var iframe = document.createElement('iframe');
			iframe.style.height = '1px';
			(document.body || document.documentElement || document).appendChild(iframe);
			var doc = iframe.contentWindow.document;
			doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
			doc.close();
			isCompliantCached = doc.documentElement.scrollHeight > doc.body.scrollHeight;
			iframe.parentNode.removeChild(iframe);
		}
		return isCompliantCached;
	};

	function isRendered(style) {
		return style.display != 'none' && !(style.visibility == 'collapse' &&
			/^table-(.+-group|row|column)$/.test(style.display));
	}

	function isScrollable(body) {
		// A `body` element is scrollable if `body` and `html` both have
		// non-`visible` overflow and are both being rendered.
		var bodyStyle = computeStyle(body);
		var htmlStyle = computeStyle(document.documentElement);
		return bodyStyle.overflow != 'visible' && htmlStyle.overflow != 'visible' &&
			isRendered(bodyStyle) && isRendered(htmlStyle);
	}

	var scrollingElement = function() {
		if (isCompliant()) {
			return document.documentElement;
		}
		var body = document.body;
		// Note: `document.body` could be a `frameset` element, or `null`.
		// `tagName` is uppercase in HTML, but lowercase in XML.
		var isFrameset = body && !/body/i.test(body.tagName);
		body = isFrameset ? getNextBodyElement(body) : body;
		// If `body` is itself scrollable, it is not the `scrollingElement`.
		return body && isScrollable(body) ? null : body;
	};

	if (Object.defineProperty) {
		// Support modern browsers that lack a native implementation.
		Object.defineProperty(document, 'scrollingElement', {
			'get': scrollingElement
		});
	} else if (document.__defineGetter__) {
		// Support Firefox ≤ 3.6.9, Safari ≤ 4.1.3.
		document.__defineGetter__('scrollingElement', scrollingElement);
	} else {
		// IE ≤ 4 lacks `attachEvent`, so it only gets this one assignment. IE ≤ 7
		// gets it too, but the value is updated later (see `propertychange`).
		document.scrollingElement = scrollingElement();
		document.attachEvent && document.attachEvent('onpropertychange', function() {
			// This is for IE ≤ 7 only.
			// A `propertychange` event fires when `<body>` is parsed because
			// `document.activeElement` then changes.
			if (window.event.propertyName == 'activeElement') {
				document.scrollingElement = scrollingElement();
			}
		});
	}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

(function (ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;
    if (!this.parentElement) return null;
    return this.parentElement.closest(selector);
  };
})(Element.prototype);

(function () {
  // global DOMTokenList
  var dummy = document.createElement('div'),
      dtp = DOMTokenList.prototype,
      toggle = dtp.toggle,
      add = dtp.add,
      rem = dtp.remove;
  dummy.classList.add('class1', 'class2'); // Older versions of the HTMLElement.classList spec didn't allow multiple
  // arguments, easy to test for

  if (!dummy.classList.contains('class2')) {
    dtp.add = function () {
      Array.prototype.forEach.call(arguments, add.bind(this));
    };

    dtp.remove = function () {
      Array.prototype.forEach.call(arguments, rem.bind(this));
    };
  } // Older versions of the spec didn't have a forcedState argument for
  // `toggle` either, test by checking the return value after forcing


  if (!dummy.classList.toggle('class1', true)) {
    dtp.toggle = function (cls, forcedState) {
      if (forcedState === undefined) return toggle.call(this, cls);
      (forcedState ? add : rem).call(this, cls);
      return !!forcedState;
    };
  }
})();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var tabs = document.querySelectorAll('.nav-tabs');

var changePane = function changePane(e) {
  e.preventDefault();
  var navTab = e.target.closest('.nav-tabs');
  var tabItem = e.target.closest('.nav-tabs__item');
  var tabId = tabItem.dataset.tab;
  var currentActiveTab = navTab.querySelector('.nav-tabs__item.active');
  var currentActivePane = navTab.querySelector('.nav-tabs__pane.active');
  var nextActivePane = navTab.querySelector("#".concat(tabId));
  currentActiveTab.classList.remove('active');
  tabItem.classList.add('active');
  currentActivePane.classList.remove('active', 'show');
  nextActivePane.classList.add('active', 'show');
};

var addButtonEvent = function addButtonEvent(tab) {
  var buttons = tab.querySelectorAll('.nav-tabs__link');
  buttons.forEach(function (btn) {
    return btn.addEventListener('click', changePane);
  });
};

tabs.forEach(function (tab) {
  return addButtonEvent(tab);
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var tabs = document.querySelectorAll('.accordion');

var toogleItem = function toogleItem(e) {
  e.preventDefault();
  var item = e.target.closest('.accordion').querySelector('.accordion__item');

  if (item.style.maxHeight) {
    item.style.maxHeight = null;
  } else {
    item.style.maxHeight = "".concat(item.scrollHeight, "px");
  }
};

var addButtonEvent = function addButtonEvent(tab) {
  var buttons = tab.querySelectorAll('.accordion__handler');
  buttons.forEach(function (btn) {
    return btn.addEventListener('click', toogleItem);
  });
};

tabs.forEach(function (tab) {
  return addButtonEvent(tab);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./borsch.jpg": 8,
	"./burger.jpg": 9,
	"./buter-sel.jpg": 10,
	"./cesar-krevetki.jpg": 11,
	"./cesar-kurica.jpg": 12,
	"./cheesecake.jpg": 13,
	"./karbonara.jpg": 14,
	"./kolbasy-gov.jpg": 15,
	"./kolbasy.jpg": 16,
	"./krevetki.jpg": 17,
	"./kriliya.jpg": 18,
	"./myasnie-chipsi.jpg": 19,
	"./myasnoy-nabor.jpg": 20,
	"./pelmeni.jpg": 21,
	"./rebra.jpg": 22,
	"./shaverma.jpg": 23,
	"./shaverma_krevetki.jpg": 24,
	"./solyanka.jpg": 25,
	"./steik-g.jpg": 26,
	"./tar-tar.jpg": 27,
	"./zakuski.jpg": 28
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 7;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/borsch.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/burger.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/buter-sel.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cesar-krevetki.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cesar-kurica.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cheesecake.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/karbonara.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kolbasy-gov.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kolbasy.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/krevetki.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kriliya.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/myasnie-chipsi.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/myasnoy-nabor.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pelmeni.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rebra.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shaverma.jpg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shaverma_krevetki.jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/solyanka.jpg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steik-g.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tar-tar.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/zakuski.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-144x144.png": 30,
	"./apple-touch-icon.png": 31,
	"./favicon-16x16.png": 32,
	"./favicon-32x32.png": 33,
	"./favicon.ico": 34,
	"./mstile-150x150.png": 35,
	"./safari-pinned-tab.svg": 36
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 29;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/android-chrome-144x144.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/apple-touch-icon.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/favicon-16x16.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/favicon-32x32.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mstile-150x150.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/safari-pinned-tab.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(1);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);

// EXTERNAL MODULE: ./node_modules/siema/dist/siema.min.js
var siema_min = __webpack_require__(0);
var siema_min_default = /*#__PURE__*/__webpack_require__.n(siema_min);

// EXTERNAL MODULE: ./node_modules/scrollingelement/scrollingelement.js
var scrollingelement = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/disable-scroll/es/index.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var DisableScroll =
/*#__PURE__*/
function () {
  function DisableScroll() {
    var _this = this;

    _classCallCheck(this, DisableScroll);

    _defineProperty(this, "handleWheel", function (e) {
      e.preventDefault();
    });

    _defineProperty(this, "handleScroll", function () {
      var _window;

      (_window = window).scrollTo.apply(_window, _toConsumableArray(_this.lockToScrollPos));
    });

    _defineProperty(this, "handleKeydown", function (e) {
      var keys = _this.options.keyboardKeys;
      /* istanbul ignore else */

      if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) !== -1) {
        keys = _this.options.authorizedInInputs;
      }
      /* istanbul ignore else */


      if (keys.indexOf(e.keyCode) !== -1) {
        e.preventDefault();
      }
    });

    this.options = {
      disableWheel: true,
      disableScroll: true,
      disableKeys: true,
      keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
      authorizedInInputs: [32, 37, 38, 39, 40] // space: 32, page up: 33, page down: 34, end: 35, home: 36
      // left: 37, up: 38, right: 39, down: 40

    };
    this.element = canUseDOM ? document.scrollingElement : null;
    this.lockToScrollPos = [0, 0];
  }
  /**
   * Disable Page Scroll
   * @external Node
   *
   * @param {HTMLElement} [element] - DOM Element, usually document.body
   * @param {object} [options] - Change the initial options
   */


  _createClass(DisableScroll, [{
    key: "on",
    value: function on(element, options) {
      if (!canUseDOM) return;
      this.element = element || this.element;
      this.options = _objectSpread({}, this.options, options);
      var _this$options = this.options,
          disableKeys = _this$options.disableKeys,
          disableScroll = _this$options.disableScroll,
          disableWheel = _this$options.disableWheel;
      /* istanbul ignore else */

      if (disableWheel) {
        document.addEventListener('wheel', this.handleWheel);
        document.addEventListener('touchmove', this.handleWheel);
      }
      /* istanbul ignore else */


      if (disableScroll) {
        this.lockToScrollPos = [this.element.scrollLeft || this.element.scrollX, this.element.scrollTop || this.element.scrollY];
        document.addEventListener('scroll', this.handleScroll);
      }
      /* istanbul ignore else */


      if (disableKeys) {
        document.addEventListener('keydown', this.handleKeydown);
      }
    }
    /**
     * Re-enable page scrolls
     */

  }, {
    key: "off",
    value: function off() {
      if (!canUseDOM) return;
      document.removeEventListener('wheel', this.handleWheel);
      document.removeEventListener('touchmove', this.handleWheel);
      document.removeEventListener('scroll', this.handleScroll);
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }]);

  return DisableScroll;
}();

/* harmony default export */ var es = (new DisableScroll());
// EXTERNAL MODULE: ./views/blocks/common/polyfill.js
var polyfill = __webpack_require__(4);

// EXTERNAL MODULE: ./views/blocks/nav-tabs/nav-tabs.js
var nav_tabs = __webpack_require__(5);

// EXTERNAL MODULE: ./views/blocks/accordion/accordion.js
var accordion = __webpack_require__(6);

// CONCATENATED MODULE: ./views/blocks/fullscreen-gallery/fullscreen-gallery.js

var cache = {};

function importAll(r) {
  r.keys().forEach(function (key) {
    return cache[key] = r(key);
  });
}

importAll(__webpack_require__(7));

function noscroll() {
  window.scrollTo(document.documentElement.scrollLeft, document.documentElement.scrollTop);
  console.log(document.documentElement.scrollLeft, document.documentElement.scrollTop);
}

var gallery = document.querySelector('.fullscreen-gallery');
var clozeBtn = document.querySelector('.fullscreen-gallery__button');
var nextBtn = gallery.querySelector('.photo-arrow--right');
var prevBtn = gallery.querySelector('.photo-arrow--left');
var galleryImg = gallery.querySelector('img');
var links = document.querySelectorAll('.fullscreen-gallery__link');
var curElm;

var getNext = function getNext(n) {
  return n === links.length - 1 ? 0 : n + 1;
};

var getPrev = function getPrev(n) {
  return n === 0 ? links.length - 1 : n - 1;
};

var getRealUrl = function getRealUrl(elm) {
  var getLinkUrl = function getLinkUrl(linkElm) {
    return "./".concat(linkElm.dataset.img);
  };

  var linkUrl = getLinkUrl(elm);
  console.log(linkUrl);
  return cache[linkUrl];
};

var openImage = function openImage(linkNumber) {
  curElm = linkNumber;
  var elm = links[linkNumber];
  galleryImg.src = getRealUrl(elm);
  var figcaption = gallery.querySelector('.fullscreen-gallery__figcaption');
  figcaption.innerHTML = elm.dataset.text;
};

var fullscreen_gallery_deactivateGallery = function deactivateGallery() {
  gallery.classList.remove('show');
  es.off();
};

var fullscreen_gallery_activateGallery = function activateGallery() {
  gallery.classList.add('active');
  setTimeout(function () {
    gallery.classList.add('show');
  }, 1);
  es.on();
};

links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var elm = e.currentTarget;
    var elmNumber = Array.from(links).findIndex(function (node) {
      return elm.isSameNode(node);
    });
    fullscreen_gallery_activateGallery();
    openImage(elmNumber);
  });
});
clozeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  fullscreen_gallery_deactivateGallery();
});
nextBtn.addEventListener('click', function () {
  return openImage(getNext(curElm));
});
prevBtn.addEventListener('click', function () {
  return openImage(getPrev(curElm));
});
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowRight':
      openImage(getNext(curElm));
      break;

    case 'ArrowLeft':
      openImage(getPrev(curElm));
      break;

    default:
  }
});
gallery.addEventListener('transitionend', function (e) {
  if (!e.currentTarget.classList.contains('show')) {
    e.currentTarget.classList.remove('active');
  }
}, false);
// CONCATENATED MODULE: ./views/main.js
// import '@babel/polyfill';








var reqFavicons = __webpack_require__(29);

reqFavicons.keys().forEach(reqFavicons);
webfontloader_default.a.load({
  google: {
    families: ['Exo 2:300,400:cyrillic', 'Open Sans:300,400,400i,600:cyrillic']
  }
}); // Hamburger menu

var toggler = document.querySelector('.menu-toggle');
toggler.addEventListener('click', function (e) {
  e.preventDefault();
  var currentTogler = e.currentTarget;

  if (currentTogler.classList.contains('is-active')) {
    es.off();
  } else {
    es.on();
  }

  currentTogler.classList.toggle('is-active');
  var menuDropdown = currentTogler.parentNode;
  menuDropdown.classList.toggle('open');
  menuDropdown.querySelectorAll('a').forEach(function (link) {
    return link.addEventListener('click', function () {
      es.off();
      currentTogler.classList.remove('is-active');
      menuDropdown.classList.remove('open');
    });
  });
});
var pageHeroLogo = document.querySelector('.page-hero__logo');
var siteMenu = document.querySelector('.site-nav');
window.addEventListener('scroll', function () {
  var bottomOfLogo = pageHeroLogo.offsetTop - pageHeroLogo.clientHeight / 2 - 30;

  if (bottomOfLogo > window.pageYOffset && siteMenu.classList.contains('scrolled')) {
    siteMenu.classList.remove('scrolled');
  } else if (bottomOfLogo < window.pageYOffset) {
    siteMenu.classList.add('scrolled');
  }
});
var carousels = document.querySelectorAll('.carousel');

siema_min_default.a.prototype.addBullets = function addBullets() {
  var _this = this;

  var count = this.innerElements.length;
  var bulletsContainer = this.selector.parentNode.querySelector('.carousel__bullets');

  if (count === 0 || !bulletsContainer) {
    return false;
  }

  bulletsContainer.innerHtml = '';

  var _loop = function _loop(i) {
    var btn = document.createElement('button');
    btn.dataset.index = i;
    btn.classList.add('carousel__bullet');

    if (i === _this.currentSlide) {
      btn.classList.add('active');
    }

    btn.classList.add('carousel__bullet');
    btn.addEventListener('click', function () {
      return _this.goTo(i);
    });
    bulletsContainer.appendChild(btn);
  };

  for (var i = 0; i < count; i += 1) {
    _loop(i);
  } // const remeberChange = this.config.onChange;


  this.config.onChange = function onChange() {
    var _this2 = this;

    setTimeout(function () {
      _this2.resizeHandler();

      console.log('change with bullets');
    }, 400);
    this.selector.parentNode.querySelector('.carousel__bullets .active').classList.remove('active');
    this.selector.parentNode.querySelector('.carousel__bullets').children[this.currentSlide].classList.add('active');
  };

  return true;
};

carousels.forEach(function (carousel) {
  var track = carousel.querySelector('.carousel__track');
  var siema = new siema_min_default.a({
    selector: track,
    duration: 400,
    loop: carousel.dataset.loop,
    perPage: Number(carousel.dataset.perPage) || {
      720: 2,
      960: 3
    },
    onInit: function onInit() {
      var _this3 = this;

      setTimeout(function () {
        _this3.resizeHandler();
      }, 400);
    },
    onChange: function onChange() {
      var _this4 = this;

      setTimeout(function () {
        _this4.resizeHandler();

        console.log('change');
      }, 400);
    }
  });
  var leftBtn = carousel.querySelector('.carousel__arrow--left');
  var rightBtn = carousel.querySelector('.carousel__arrow--right');

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener('click', function () {
      return siema.prev();
    });
    rightBtn.addEventListener('click', function () {
      return siema.next();
    });
  }

  siema.addBullets();

  if (Number(carousel.dataset.autoPlay)) {
    setInterval(function () {
      return siema.next();
    }, Number(carousel.dataset.autoPlay));
  }
}); // disable outline for pressed buttons, but still works;

document.querySelectorAll('button').forEach(function (btn) {
  btn.addEventListener('mousedown', function (e) {
    return e.preventDefault();
  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map