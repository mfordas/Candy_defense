!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);var r=class{constructor(t,e){this.x=t,this.y=e,this.radius=100}drawCandy(){i.fillStyle="black",i.arc(this.x,this.y,this.radius,0,2*Math.PI),i.fill()}};n.d(e,"canvas",(function(){return o})),n.d(e,"ctx",(function(){return i})),n.d(e,"cw",(function(){return u})),n.d(e,"ch",(function(){return c}));const o=document.querySelector("#draw"),i=o.getContext("2d"),u=o.width=window.innerWidth,c=o.height=window.innerHeight;console.log(u),console.log(c);const l=new r(u/2,c/2);requestAnimationFrame((function t(e){l.drawCandy(),console.log("works"),requestAnimationFrame(t)}))}]);
//# sourceMappingURL=main.js.map