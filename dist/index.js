!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-easy-slider",[],e):"object"==typeof exports?exports["vue-easy-slider"]=e():t["vue-easy-slider"]=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SliderItem=e.Slider=void 0;var r=n(1),o=i(r),a=n(11),s=i(a);e.Slider=o["default"],e.SliderItem=s["default"]},function(t,e,n){n(2);var i=n(7)(n(8),n(10),"data-v-5dba9d84",null);t.exports=i.exports},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(5)("1be75862",i,!0)},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".slider[data-v-5dba9d84]{position:relative;overflow:hidden}.slider:hover .btn-left[data-v-5dba9d84]{background:linear-gradient(90deg,rgba(0,0,0,.2),transparent)}.slider:hover .btn-right[data-v-5dba9d84]{background:linear-gradient(-90deg,rgba(0,0,0,.2),transparent)}.items[data-v-5dba9d84]{position:relative;height:100%;width:100%}.btn[data-v-5dba9d84]{position:absolute;top:0;z-index:999;height:100%;width:50px;border:none;background:rgba(0,0,0,.1);outline:none;transition:background .3s;cursor:pointer}.btn-left[data-v-5dba9d84]{left:0;background:linear-gradient(90deg,rgba(0,0,0,.1),transparent)}.btn-right[data-v-5dba9d84]{right:0;background:linear-gradient(-90deg,rgba(0,0,0,.1),transparent)}.slider-icon[data-v-5dba9d84]{display:inline-block;width:15px;height:15px;border-left:2px solid hsla(0,0%,100%,.6);border-bottom:2px solid hsla(0,0%,100%,.6);transition:border .2s}.slider-icon-left[data-v-5dba9d84]{transform:rotate(45deg)}.slider-icon-right[data-v-5dba9d84]{transform:rotate(-135deg)}.btn:hover .slider-icon[data-v-5dba9d84]{border-color:#fff}.indicators[data-v-5dba9d84]{position:absolute;bottom:20px;z-index:999}.indi-center[data-v-5dba9d84]{left:50%;transform:translateX(-50%)}.indi-left[data-v-5dba9d84]{left:6%}.indi-right[data-v-5dba9d84]{right:6%}.slider-indicator-icon[data-v-5dba9d84]{display:inline-block;width:10px;height:10px;margin:0 .1rem;cursor:pointer;border-radius:50%;background-color:rgba(0,0,0,.2)}.slider-indicator-active[data-v-5dba9d84]{background-color:hsla(0,0%,100%,.2)}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=d[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(o(n.parts[r]));d[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return v;i.parentNode.removeChild(i)}if(m){var o=h++;i=f||(f=r()),e=a.bind(null,i,o,!1),n=a.bind(null,i,o,!0)}else i=r(),e=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function a(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function s(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,c=n(6),d={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var r=c(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o],s=d[a.id];s.refs--,n.push(s)}e?(r=c(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=o[0],s=o[1],u=o[2],c=o[3],d={id:t+":"+r,css:s,media:u,sourceMap:c};i[a]?i[a].parts.push(d):n.push(i[a]={id:a,parts:[d]})}return n}},function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},a=typeof t["default"];"object"!==a&&"function"!==a||(r=t,o=t["default"]);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var u=Object.create(s.computed||null);Object.keys(i).forEach(function(t){var e=i[t];u[t]=function(){return e}}),s.computed=u}return{esModule:r,exports:o,options:s}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9);e["default"]={data:function(){return{children:[],nowItemIndex:0,timer:0}},props:{width:{type:String,"default":"auto"},height:{type:String,"default":"300px"},interval:{type:Number,"default":3e3},speed:{type:Number,"default":500},auto:{type:Boolean,"default":!0},indicators:{"default":"center"},controlBtn:{type:Boolean,"default":!0},animation:{type:String,"default":"normal"},initIndex:{type:Number,"default":0}},computed:{childrenLength:function(){return this.children.length}},methods:{updateItems:function(){var t=this;this.children=this.$children.filter(function(t){return"easy-slider-item"===t.$options.name}),this.nowItemIndex=this.initIndex;var e=this.children[this.nowItemIndex];e&&e.initItem(),this.$nextTick(function(){e&&(t.handleSetTopItem(e),t.autoplay())})},handleSetTopItem:function(t,e){t&&t.$el&&(t.$el.style.zIndex=99),e&&e.$el&&(e.$el.style.zIndex=98)},autoplay:function(){function t(){return setInterval(function(){var t=(e.nowItemIndex+1)%e.childrenLength;e.jump(t)},e.interval)}if(this.auto&&!(this.childrenLength<2)){var e=this;this.timer&&clearInterval(this.timer),this.timer=t()}},jump:function(t){var e=this.children[this.nowItemIndex],n=this.children[t],i=t-this.nowItemIndex,r=i>0;i===-(this.childrenLength-1)&&(r=!0),i===this.childrenLength-1&&(r=!1),e&&n&&(e.hideHandle(r),n.showHandle(r),this.nowItemIndex=t,this.$emit("changeSlide",{index:t}))},prev:function(){if(!(this.childrenLength<2)){var t=this.nowItemIndex-1===-1?this.childrenLength-1:this.nowItemIndex-1;this.$emit("previous",{original:this.nowItemIndex,next:t}),this.jump(t),this.autoplay()}},next:function(){if(!(this.childrenLength<2)){var t=(this.nowItemIndex+1)%this.childrenLength;this.$emit("next",{original:this.nowItemIndex,next:t}),this.jump(t),this.autoplay()}},indicatorHandle:function(t){this.childrenLength<2||t!==this.nowItemIndex&&(this.jump(t),this.autoplay())}},created:function(){this.handleItemChange=(0,i.throttle)(this.updateItems,100),this.jump=(0,i.debounce)(this.jump,this.speed+100)},beforeMount:function(){this.handleItemChange()},activated:function(){this.handleItemChange()},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)},deactivated:function(){this.timer&&clearTimeout(this.timer)}}},function(t,e){"use strict";function n(t,e,n){var i,r=null;return function(){var o=this,a=arguments,s=+new Date;clearTimeout(r),i||(i=s),s-i>=n?(t.apply(o,a),i=s):r=setTimeout(function(){t.apply(o,a)},e)}}function i(t,e){var n=!1;return function(){n||(n=!0,t.apply(this,arguments),setTimeout(function(){return n=!1},e))}}Object.defineProperty(e,"__esModule",{value:!0}),e.throttle=n,e.debounce=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider",style:{width:t.width,height:t.height}},[n("div",{staticClass:"items"},[t._t("default")],2),t._v(" "),t.indicators?n("div",{"class":"indicators indi-"+t.indicators,on:{click:function(t){t.stopPropagation()}}},t._l(t.childrenLength,function(e){return n("span",{key:e,staticClass:"slider-indicator-icon","class":{"slider-indicator-active":t.nowItemIndex===e-1},on:{click:function(n){t.indicatorHandle(e-1)}}})})):t._e(),t._v(" "),t.controlBtn?n("button",{staticClass:"btn btn-left",on:{click:function(e){e.stopPropagation(),t.prev(e)}}},[n("i",{staticClass:"slider-icon slider-icon-left"})]):t._e(),t._v(" "),t.controlBtn?n("button",{staticClass:"btn btn-right",on:{click:function(e){e.stopPropagation(),t.next(e)}}},[n("i",{staticClass:"slider-icon slider-icon-right"})]):t._e()])},staticRenderFns:[]}},function(t,e,n){n(12);var i=n(7)(n(14),n(36),"data-v-31c81028",null);t.exports=i.exports},function(t,e,n){var i=n(13);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(5)("061c0d1f",i,!0)},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".slider-item[data-v-31c81028],.wrap[data-v-31c81028]{position:absolute;top:0;left:0;width:100%;height:100%}",""])},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),o=i(r),a=function(t){var e=getComputedStyle(t),n=e.width;return parseFloat(n)},s=function(t,e){return e?-t:t},u=function(t,e,n){var i=new o["default"](t,e);i.animate(n)},c={normal:{beforeEnter:function(t,e){var n=s(a(e),!t.direction);e.style.transform="translateX("+n+"px)"},enter:function(t,e,n){var i=s(a(e),!t.direction);u(t.speed,function(t){e.style.transform="translateX("+(i-i*t)+"px)"},n)},leave:function(t,e,n){var i=s(a(e),t.direction);u(t.speed,function(t){e.style.transform="translateX("+i*t+"px)"},n)}},fade:{beforeEnter:function(t,e){e.style.opacity=0,e.style.transform="translateX("+(t.direction?"10px":"-10px")+")"},enter:function(t,e,n){var i=t.direction?10:-10;u(t.speed,function(t){e.style.opacity=t,e.style.transform="translateX("+(i-i*t)+"px)"},n)},leave:function(t,e,n){var i=t.direction?-10:10;u(t.speed,function(t){e.style.opacity=1-t,e.style.transform="translateX("+i*t+"px)"},n)}}};e["default"]={name:"easy-slider-item",data:function(){return{animate:!1,direction:0,speed:0,show:!1,animation:""}},props:{onClick:{type:Function,"default":function(){}}},methods:{beforeEnter:function(t){c[this.animation].beforeEnter(this,t)},enter:function(t,e){c[this.animation].enter(this,t,e)},leave:function(t,e){var n=this;c[this.animation].leave(this,t,function(){e(),n.show=!1})},showHandle:function(t){var e=this;this.direction=t,this.show=!0,this.$nextTick(function(){return e.animate=!0})},hideHandle:function(t){this.direction=t,this.animate=!1},initItem:function(){this.animate=!0,this.show=!0}},created:function(){this.$parent.handleItemChange(),this.speed=this.$parent.speed,this.animation=this.$parent.animation}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(){return!performance&&performance.now?performance.now():Date.now?Date.now():(new Date).getTime()}Object.defineProperty(e,"__esModule",{value:!0});var o=n(16),a=i(o),s=n(17),u=i(s);"undefined"==typeof window.requestAnimationFrame&&(window.requestAnimationFrame=function(t){return setTimeout(function(){t(r())},1e3/60)},window.cancelAnimationFrame=function(t){return clearTimeout(t)});var c=function(){function t(e,n,i){(0,a["default"])(this,t),this.duration=e,this.update=n,this.easing=i}return(0,u["default"])(t,[{key:"animate",value:function(t){function e(u){n=n||u;var c=Math.min(1,(u-n)/i);r.call(a,o?o(c):c,c),c<1?s=requestAnimationFrame(e):t(a)}var n=0,i=this.duration,r=this.update,o=this.easing,a=this,s=0;a.cancel=function(){cancelAnimationFrame(s),r.call(a,0,0),t(new Error("User canceled!"))},s=requestAnimationFrame(e)}},{key:"ease",value:function(e){return new t(this.duration,this.update,e)}}]),t}();e["default"]=c},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(18),o=i(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o["default"])(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={"default":n(19),__esModule:!0}},function(t,e,n){n(20);var i=n(23).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(21);i(i.S+i.F*!n(31),"Object",{defineProperty:n(27).f})},function(t,e,n){var i=n(22),r=n(23),o=n(24),a=n(26),s="prototype",u=function(t,e,n){var c,d,l,f=t&u.F,h=t&u.G,p=t&u.S,v=t&u.P,m=t&u.B,b=t&u.W,g=h?r:r[e]||(r[e]={}),y=g[s],x=h?i:p?i[e]:(i[e]||{})[s];h&&(n=e);for(c in n)d=!f&&x&&void 0!==x[c],d&&c in g||(l=d?x[c]:n[c],g[c]=h&&"function"!=typeof x[c]?n[c]:m&&d?o(l,i):b&&x[c]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[s]=t[s],e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[c]=l,t&u.R&&y&&!y[c]&&a(y,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(25);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(27),r=n(35);t.exports=n(31)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(28),r=n(30),o=n(34),a=Object.defineProperty;e.f=n(31)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(29);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(31)&&!n(32)(function(){return 7!=Object.defineProperty(n(33)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(32)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var i=n(29),r=n(22).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var i=n(29);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"slider-item",on:{click:t.onClick}},[n("transition",{attrs:{css:!1},on:{beforeEnter:t.beforeEnter,enter:t.enter,leave:t.leave}},[t.animate?n("div",{staticClass:"wrap"},[t._t("default")],2):t._e()])],1):t._e()},staticRenderFns:[]}}])});