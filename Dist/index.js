!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var r=n(8),i=n(19);e.exports=n(3)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(5)("wks"),i=n(7),o=n(0).Symbol,s="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=s&&o[e]||(s?o:i)("Symbol."+e))}).store=r},function(e,t,n){e.exports=!n(17)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(6),i=n(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(16)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(9),i=n(28),o=n(29),s=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(10);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports={}},function(e,t,n){var r=n(31),i=n(20);e.exports=function(e){return r(i(e))}},function(e,t,n){var r=n(0),i=n(1),o=n(4),s=n(7)("src"),a=n(35),u=(""+a).split("toString");n(6).inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,n,a){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",t)),e[t]!==n&&(c&&(o(n,s)||i(n,s,e[t]?""+e[t]:u.join(String(t)))),e===r?e[t]=n:a?e[t]?e[t]=n:i(e,t,n):(delete e[t],i(e,t,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[s]||a.call(this)}))},function(e,t,n){var r=n(5)("keys"),i=n(7);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t,n){"use strict";n(25),Object.defineProperty(t,"__esModule",{value:!0}),t.sum=t.ch=t.cw=t.ctx=t.canvas=void 0,n(59);var r=h(n(48)),i=h(n(50)),o=h(n(52)),s=h(n(54)),a=h(n(55)),u=h(n(56)),c=f(n(57)),l=f(n(58));function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}function h(e){return e&&e.__esModule?e:{default:e}}const v=document.querySelector("#draw");t.canvas=v;const m=v.getContext("2d");t.ctx=m;const y=v.width=window.innerWidth-5;t.cw=y;const p=v.height=window.innerHeight-55;t.ch=p;const g=new r.default(y/2,p/2),b=new s.default(0),L=new a.default(0,0,!1),x=new u.default(100),w=new o.default;let M,O=0,_=[],E=[];function P(){return m.clearRect(0,0,y,p),g.drawCandy(m,y,p),w.drawBlood(m,y,p),_.forEach(e=>{e.drawBug(m,y,p),e.moveOfBug(),w.setY(),w.setX()}),_.forEach(e=>{e.deleteBug(g.x,g.y,g.radius)}),_.forEach(e=>{0===e.radius&&(_.splice(_.indexOf(e),1),x.decreaseHealth(),x.healthBarHandler())}),document.getElementById("level-number").innerHTML="".concat(L.levelNumber),document.getElementById("health").innerHTML="".concat(x.health),document.getElementById("points").innerHTML="".concat(b.points),document.getElementById("time-to-level-end").innerHTML="".concat(L.time),0===L.levelNumber&&!1===L.ready?(L.setLevelTime(E[O].time),void L.setLevelNumber(E[O].levelNumber)):L.time<=0&&!0===L.ready&&x.health>0?(L.setLevelReady(!1),L.stopCountLevelTime(),clearInterval(M),_=[],w.setY(),w.setX(),O+=1,void(E.length>O?(L.setLevelTime(E[O].time),L.setLevelNumber(E[O].levelNumber),c.showMiddleLevel()):(L.stopCountLevelTime(),clearInterval(M),_=[],O=0,L.setLevelTime(E[O].time),L.setLevelNumber(E[O].levelNumber),x.healthReload(),x.healthBarHandler(),b.resetPoints(),c.finish()))):x.health<=0&&!0===L.ready?(b.resetPoints(),L.stopCountLevelTime(),clearInterval(M),_=[],O=0,L.setLevelTime(E[O].time),L.setLevelNumber(E[O].levelNumber),c.gameover(),x.healthReload(),x.healthBarHandler(),void c.tryAgain()):void requestAnimationFrame(P)}function S(e){_.forEach(t=>{t.deleteBug(e.offsetX,e.offsetY,40)}),_.forEach(t=>{0===t.radius&&(_.splice(_.indexOf(t),1),b.countPoints(),w.setX(e.offsetX),w.setY(e.offsetY))})}function I(){m.clearRect(0,0,y,p),g.drawCandy(m),M=setInterval(()=>{for(let e=0;e<1;e++){let e=new i.default(0,0);e.setPosition(p,y),e.setVelocityVector(g.x,g.y),_.push(e)}},1300-100*L.levelNumber),L.countLevelTime(),requestAnimationFrame(P)}E=L.generateLevels(c.numberOfLevels);const j=document.getElementById("next-level"),T=document.getElementById("start"),R=document.getElementsByClassName("try-again");v.addEventListener("mousedown",S),v.addEventListener("click",S),j.addEventListener("mousedown",()=>{L.setLevelReady(!0),!0===L.ready&&I()}),T.addEventListener("mousedown",()=>{L.setLevelReady(!0),!0===L.ready&&I()});for(let e of R)e.addEventListener("mousedown",()=>{L.setLevelReady(!0),!0===L.ready&&I()});!1===c.ready&&(c.startGame(),c.nextLevel(),c.settings(),c.credits(),c.tryAgain(),c.backToMainMenu(),c.saveSettings()),document.getElementById("save-settings").addEventListener("mousedown",()=>{!0===c.getSettingsReady()&&(E=[...L.generateLevels(c.numberOfLevels)])});t.sum=(e,t)=>e+t,l.loadScriptAsync(),requestAnimationFrame(P)},function(e,t){e.exports=!1},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(10),i=n(0).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(41),i=n(23);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(8).f,i=n(4),o=n(2)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){for(var r=n(26),i=n(21),o=n(13),s=n(0),a=n(1),u=n(11),c=n(2),l=c("iterator"),d=c("toStringTag"),f=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(h),m=0;m<v.length;m++){var y,p=v[m],g=h[p],b=s[p],L=b&&b.prototype;if(L&&(L[l]||a(L,l,f),L[d]||a(L,d,p),u[p]=f,g))for(y in r)L[y]||o(L,y,r[y],!0)}},function(e,t,n){"use strict";var r=n(27),i=n(30),o=n(11),s=n(12);e.exports=n(33)(Array,"Array",(function(e,t){this._t=s(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t,n){var r=n(2)("unscopables"),i=Array.prototype;null==i[r]&&n(1)(i,r,{}),e.exports=function(e){i[r][e]=!0}},function(e,t,n){e.exports=!n(3)&&!n(17)((function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(10);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var r=n(32);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){"use strict";var r=n(16),i=n(34),o=n(13),s=n(1),a=n(11),u=n(38),c=n(24),l=n(46),d=n(2)("iterator"),f=!([].keys&&"next"in[].keys()),h=function(){return this};e.exports=function(e,t,n,v,m,y,p){u(n,t,v);var g,b,L,x=function(e){if(!f&&e in _)return _[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},w=t+" Iterator",M="values"==m,O=!1,_=e.prototype,E=_[d]||_["@@iterator"]||m&&_[m],P=E||x(m),S=m?M?x("entries"):P:void 0,I="Array"==t&&_.entries||E;if(I&&(L=l(I.call(new e)))!==Object.prototype&&L.next&&(c(L,w,!0),r||"function"==typeof L[d]||s(L,d,h)),M&&E&&"values"!==E.name&&(O=!0,P=function(){return E.call(this)}),r&&!p||!f&&!O&&_[d]||s(_,d,P),a[t]=P,a[w]=h,m)if(g={values:M?P:x("values"),keys:y?P:x("keys"),entries:S},p)for(b in g)b in _||o(_,b,g[b]);else i(i.P+i.F*(f||O),t,g);return g}},function(e,t,n){var r=n(0),i=n(6),o=n(1),s=n(13),a=n(36),u=function(e,t,n){var c,l,d,f,h=e&u.F,v=e&u.G,m=e&u.S,y=e&u.P,p=e&u.B,g=v?r:m?r[t]||(r[t]={}):(r[t]||{}).prototype,b=v?i:i[t]||(i[t]={}),L=b.prototype||(b.prototype={});for(c in v&&(n=t),n)d=((l=!h&&g&&void 0!==g[c])?g:n)[c],f=p&&l?a(d,r):y&&"function"==typeof d?a(Function.call,d):d,g&&s(g,c,d,e&u.U),b[c]!=d&&o(b,c,f),y&&L[c]!=d&&(L[c]=d)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},function(e,t,n){e.exports=n(5)("native-function-to-string",Function.toString)},function(e,t,n){var r=n(37);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var r=n(39),i=n(19),o=n(24),s={};n(1)(s,n(2)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(s,{next:i(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(9),i=n(40),o=n(23),s=n(14)("IE_PROTO"),a=function(){},u=function(){var e,t=n(18)("iframe"),r=o.length;for(t.style.display="none",n(45).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;r--;)delete u.prototype[o[r]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(a.prototype=r(e),n=new a,a.prototype=null,n[s]=e):n=u(),void 0===t?n:i(n,t)}},function(e,t,n){var r=n(8),i=n(9),o=n(21);e.exports=n(3)?Object.defineProperties:function(e,t){i(e);for(var n,s=o(t),a=s.length,u=0;a>u;)r.f(e,n=s[u++],t[n]);return e}},function(e,t,n){var r=n(4),i=n(12),o=n(42)(!1),s=n(14)("IE_PROTO");e.exports=function(e,t){var n,a=i(e),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;t.length>u;)r(a,n=t[u++])&&(~o(c,n)||c.push(n));return c}},function(e,t,n){var r=n(12),i=n(43),o=n(44);e.exports=function(e){return function(t,n,s){var a,u=r(t),c=i(u.length),l=o(s,c);if(e&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(22),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(22),i=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?i(e+t,0):o(e,t)}},function(e,t,n){var r=n(0).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(4),i=n(47),o=n(14)("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},function(e,t,n){var r=n(20);e.exports=function(e){return Object(r(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(49))&&r.__esModule?r:{default:r};n(15);let o=new Image;o.src=i.default;var s=class{constructor(e,t){this.x=e,this.y=t,this.radius=50}drawCandy(e,t,n){t<=480||n<=480?e.drawImage(o,this.x-.18*o.width/2,this.y-.18*o.height/2,.18*o.width,.18*o.height):e.drawImage(o,this.x-.25*o.width/2,this.y-.25*o.height/2,.25*o.width,.25*o.height)}};t.default=s},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/94f7691bd246781e54cfe3dd246b5a7b.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(51))&&r.__esModule?r:{default:r};let o=new Image;o.src=i.default;var s=class{constructor(e,t){this.x=e,this.y=t,this.radius=25,this.vx=0,this.vy=0,this.angle=0}setX(e){return this.x=e}setY(e){return this.y=e}setVX(e){return this.vx=e}setVY(e){return this.vy=e}setAngle(e){return this.angle=e}getX(){return this.x}getY(){return this.y}getVX(){return this.vx}getVY(){return this.vy}getAngle(){return this.angle}drawBug(e,t,n){e.save(),e.translate(this.x,this.y),e.rotate(this.setRotationAngle()),e.translate(-this.x,-this.y),t<=480||n<=480?e.drawImage(o,this.x-.07*o.width/2,this.y-.07*o.height/2,.07*o.width,.07*o.height):e.drawImage(o,this.x-.1*o.width/2,this.y-.1*o.height/2,.1*o.width,.1*o.height),e.restore()}getRandomNumber(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}setPosition(e,t){this.getRandomNumber(0,1e5)%5!=0&&this.getRandomNumber(0,1e5)%3!=0&&this.getRandomNumber(0,1e5)%4!=0&&this.getRandomNumber(0,1e5)%2!=0&&this.getRandomNumber(0,1e5)%8!=0||(this.getRandomNumber(0,1e5)%2==0&&this.setX(this.getRandomNumber(0,t)),this.getRandomNumber(0,1e5)%2!=0&&(this.y=e,this.setX(this.getRandomNumber(0,t)))),this.getRandomNumber(0,1e5)%7>2&&this.getRandomNumber(0,1e5)%7!=0&&(this.x=0,this.setY(this.getRandomNumber(0,e))),this.getRandomNumber(0,1e5)%7<=2&&this.getRandomNumber(0,1e5)%7!=0&&(this.x=t,this.setY(this.getRandomNumber(0,e)))}moveOfBug(){this.setX(this.x+=this.vx),this.setY(this.y+=this.vy)}deleteBug(e,t,n){if(Math.sqrt((e-this.x)**2+(t-this.y)**2)<=this.radius+n)return this.radius=0}setVelocityVector(e,t){let n=t-this.y,r=e-this.x,i=Math.abs(r/n);this.vy=3.5/Math.sqrt(i**2+1),this.vx=this.vy*i,this.vx=r>0?this.vx:-this.vx,this.vy=n>0?this.vy:-this.vy}setRotationAngle(){return this.vx>0&&this.vy>0&&(this.angle=180*Math.PI/180-Math.atan(Math.abs(this.vx/this.vy))),this.vx>0&&this.vy<0&&(this.angle=90*Math.PI/180-Math.abs(Math.atan(this.vy/this.vx))),this.vx<0&&this.vy>0&&(this.angle=270*Math.PI/180+Math.atan(this.vy/this.vx)),this.vx<0&&this.vy<0&&(this.angle=270*Math.PI/180+Math.abs(Math.atan(this.vy/this.vx))),this.angle}};t.default=s},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/c53ebe5fd5dfd5e1aed2dc39d54a4616.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(53))&&r.__esModule?r:{default:r};let o=new Image;o.src=i.default;var s=class{constructor(e,t){this.x=e,this.y=t}drawBlood(e,t,n){t<=480||n<=480?(console.log("small screen"),e.drawImage(o,this.x-.07*o.width/2,this.y-.07*o.height/2,.07*o.width,.07*o.height)):(console.log("big screen"),e.drawImage(o,this.x-.1*o.width/2,this.y-.1*o.height/2,.1*o.width,.1*o.height))}setX(e){return this.x=e}setY(e){return this.y=e}};t.default=s},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/7906ce2d224cce6089e4154016326e52.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=class{constructor(e){this.points=0}countPoints(){return this.points++}resetPoints(){return this.points=0}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class r{constructor(e,t,n){this.levelNumber=e,this.time=t,this.ready=n,this.intervalCountLevelTime=null}generateLevels(e){let t=[];for(let n=1;n<=e;n++){let e=new r(n,10*n,!1);t.push(e)}return t}setLevelTime(e){return this.time=e}setLevelNumber(e){return this.levelNumber=e}setLevelReady(e){return this.ready=e}countLevelTime(){return this.intervalCountLevelTime=setInterval(()=>{this.setLevelTime(--this.time)},1e3),this.time}stopCountLevelTime(){clearInterval(this.intervalCountLevelTime)}}var i=r;t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=class{constructor(e){this.health=e}healthReload(){return this.health=100}healthBarHandler(){const e=document.getElementById("health-level");e.style.width="".concat(this.health,"%"),this.health>35?e.style.backgroundColor="#02e30e":e.style.backgroundColor="#f0051c"}decreaseHealth(){return this.health=this.health-5}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.startGame=function(){document.getElementById("start").addEventListener("mousedown",()=>{r.classList.remove("hide"),i.classList.remove("hide"),o.classList.remove("hide"),s.classList.add("hide"),p(!0),y(!0)})},t.setReady=y,t.nextLevel=function(){document.getElementById("next-level").addEventListener("mousedown",()=>{o.classList.remove("hide"),a.classList.add("hide"),t.ready=f=!0})},t.showMiddleLevel=function(){o.classList.add("hide"),a.classList.remove("hide"),t.ready=f=!1},t.settings=function(){document.getElementById("settings").addEventListener("mousedown",()=>{u.classList.remove("hide"),s.classList.add("hide"),p(!1)})},t.saveSettings=function(){document.getElementById("save-settings").addEventListener("mousedown",()=>{m=document.getElementById("player-name").value,t.numberOfLevels=v=document.getElementById("number-of-levels").value,p(!0),u.classList.add("hide"),s.classList.remove("hide")})},t.credits=function(){document.getElementById("credits").addEventListener("mousedown",()=>{s.classList.add("hide"),c.classList.remove("hide")})},t.backToMainMenu=function(){const e=document.getElementsByClassName("back-to-main-menu");for(let t of e)t.addEventListener("mousedown",()=>{r.classList.add("hide"),i.classList.add("hide"),s.classList.remove("hide"),c.classList.add("hide"),l.classList.add("hide")})},t.setSettingsReady=p,t.gameover=function(){o.classList.add("hide"),l.classList.remove("hide")},t.tryAgain=function(){const e=document.getElementsByClassName("try-again");for(let t of e)t.addEventListener("mousedown",()=>{o.classList.remove("hide"),l.classList.add("hide")})},t.getSettingsReady=function(){return h},t.getReady=function(){return f},t.finish=function(){o.classList.add("hide"),d.classList.remove("hide")},t.numberOfLevels=t.settingsReady=t.ready=void 0;const r=document.getElementById("infobar"),i=document.getElementById("infobar2"),o=document.getElementById("container"),s=document.getElementById("buttons-container"),a=document.getElementById("buttons-container-middle-level"),u=document.getElementById("settings-container"),c=document.getElementById("credits-container"),l=document.getElementById("gameover-container"),d=document.getElementById("finish-container");let f=!1;t.ready=f;let h=!1;t.settingsReady=h;let v=10;t.numberOfLevels=v;let m="Player";function y(e){return t.ready=f=e}function p(e){return t.settingsReady=h=e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadScriptAsync=function(){const e=document.createElement("script");e.onload=function(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-149871373-1")},e.src="https://www.googletagmanager.com/gtag/js?id=UA-149871373-1",document.head.appendChild(e)}},function(e,t){}]);
//# sourceMappingURL=index.js.map