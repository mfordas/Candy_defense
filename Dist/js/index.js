!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=n.p+"Dist/img/94f7691bd246781e54cfe3dd246b5a7b.png";function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=new Image;o.src=i;var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.radius=50,this.vx=1,this.vy=5}var t,n,i;return t=e,(n=[{key:"drawCandy",value:function(){j.drawImage(o,this.x-.25*o.width/2,this.y-.25*o.height/2,.25*o.width,.25*o.height)}}])&&a(t.prototype,n),i&&a(t,i),e}(),s=n.p+"Dist/img/c53ebe5fd5dfd5e1aed2dc39d54a4616.png";function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=new Image;u.src=s;var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.radius=15,this.vx=0,this.vy=0,this.angle=0,this.color="hsl(".concat(this.getRandomNumber(0,360),", 100%, 50%)")}var t,n,i;return t=e,(n=[{key:"drawBug",value:function(){j.save(),j.translate(this.x,this.y),j.rotate(this.setRotationAngle()),j.translate(-this.x,-this.y),j.drawImage(u,this.x-.1*u.width/2,this.y-.1*u.height/2,.1*u.width,.1*u.height),j.restore()}},{key:"getRandomXBugPosition",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),this.x=Math.floor(Math.random()*(t-e))+e}},{key:"getRandomYBugPosition",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),this.y=Math.floor(Math.random()*(t-e))+e}},{key:"getRandomNumber",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},{key:"setPosition",value:function(){this.getRandomNumber(0,1e4)%5!=0&&this.getRandomNumber(0,1e4)%3!=0&&this.getRandomNumber(0,1e4)%4!=0&&this.getRandomNumber(0,1e4)%2!=0&&this.getRandomNumber(0,1e4)%8!=0||(this.getRandomNumber(0,1e4)%2==0&&this.getRandomXBugPosition(0,C),this.getRandomNumber(0,1e4)%2!=0&&(this.y=A,this.getRandomXBugPosition(0,C))),this.getRandomNumber(0,1e4)%7>2&&this.getRandomNumber(0,1e4)%7!=0&&(this.x=0,this.getRandomYBugPosition(0,A)),this.getRandomNumber(0,1e4)%7<=2&&this.getRandomNumber(0,1e4)%7!=0&&(this.x=C,this.getRandomYBugPosition(0,A))}},{key:"moveOfBug",value:function(){this.x+=this.vx,this.y+=this.vy}},{key:"deleteBug",value:function(e,t,n){Math.sqrt(Math.pow(e-this.x,2)+Math.pow(t-this.y,2))<=this.radius+n&&(this.radius=0)}},{key:"setVelocityVector",value:function(e,t){var n=t-this.y,i=e-this.x,a=Math.abs(i/n);this.vy=3.5/Math.sqrt(Math.pow(a,2)+1),this.vx=this.vy*a,this.vx=i>0?this.vx:-this.vx,this.vy=n>0?this.vy:-this.vy}},{key:"setRotationAngle",value:function(){return this.vx>0&&this.vy>0&&(this.angle=180*Math.PI/180-Math.atan(Math.abs(this.vx/this.vy))),this.vx>0&&this.vy<0&&(this.angle=90*Math.PI/180-Math.abs(Math.atan(this.vy/this.vx))),this.vx<0&&this.vy>0&&(this.angle=270*Math.PI/180+Math.atan(this.vy/this.vx)),this.vx<0&&this.vy<0&&(this.angle=270*Math.PI/180+Math.abs(Math.atan(this.vy/this.vx))),this.angle}}])&&d(t.prototype,n),i&&d(t,i),e}();function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.points=0}var t,n,i;return t=e,(n=[{key:"countPoints",value:function(){this.point=this.points++}}])&&c(t.prototype,n),i&&c(t,i),e}();function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.levelNumber=t,this.time=n,this.ready=i}var t,n,i;return t=e,(n=[{key:"generateLevels",value:function(t){for(var n=[],i=1;i<=t;i++){var a=new e(i,10*i,!1);n.push(a)}return n}},{key:"setLevelTime",value:function(e){return this.time=e}},{key:"setLevelNumber",value:function(e){return this.levelNumber=e}},{key:"setLevelReady",value:function(e){return this.ready=e}},{key:"countLevelTime",value:function(){var e=this;return!(this.time>0)||(setInterval((function(){return e.time=--e.time}),1e3),this.time)}}])&&m(t.prototype,n),i&&m(t,i),e}();function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.health=t}var t,n,i;return t=e,(n=[{key:"healthReload",value:function(){this.health=100;var e=document.getElementById("health-level");return e.style.width="".concat(this.health,"%"),e.style.backgroundColor="#02e30e",this.health}},{key:"decreaseHealth",value:function(){var e=document.getElementById("health-level");return e.style.width="".concat(this.health,"%"),this.health>35?e.style.backgroundColor="#02e30e":e.style.backgroundColor="#f0051c",this.health=this.health-5}}])&&f(t.prototype,n),i&&f(t,i),e}(),g=document.getElementById("infobar"),b=document.getElementById("infobar2"),w=document.getElementById("container"),L=document.getElementById("buttons-container"),p=document.getElementById("buttons-container-middle-level"),E=document.getElementById("settings-container"),I=document.getElementById("credits-container"),x=document.getElementById("gameover-container"),B=!1,M=10;function k(){document.getElementById("try-again").addEventListener("mousedown",(function(){g.classList.remove("hide"),b.classList.remove("hide"),w.classList.remove("hide"),x.classList.add("hide")}))}function R(e){return e}n.d(t,"canvas",(function(){return O})),n.d(t,"ctx",(function(){return j})),n.d(t,"cw",(function(){return C})),n.d(t,"ch",(function(){return A}));var N,P,T,O=document.querySelector("#draw"),j=O.getContext("2d"),C=O.width=window.innerWidth-5,A=O.height=window.innerHeight-55,H=new r(C/2,A/2),q=new h(0),S=new v(0,0,!1),_=new y(100),V=0,X=[];function Y(){return j.clearRect(0,0,C,A),H.drawCandy(),X.forEach((function(e){e.drawBug(),e.moveOfBug()})),X.forEach((function(e){e.deleteBug(H.x,H.y,H.radius)})),X.forEach((function(e){0===e.radius&&(X.splice(X.indexOf(e),1),_.decreaseHealth())})),document.getElementById("level-number").innerHTML="".concat(S.levelNumber),document.getElementById("health").innerHTML="".concat(_.health),document.getElementById("points").innerHTML="".concat(q.points),document.getElementById("time-to-level-end").innerHTML="".concat(S.time),0===S.levelNumber&&!1===S.ready?(S.setLevelTime(T[V].time),void S.setLevelNumber(T[V].levelNumber)):S.time<=0&&!0===S.ready&&_.health>0?(S.setLevelReady(!1),clearInterval(N),clearInterval(P),X=[],V+=1,S.setLevelTime(T[V].time),S.setLevelNumber(T[V].levelNumber),g.classList.add("hide"),b.classList.add("hide"),w.classList.add("hide"),p.classList.remove("hide"),void(B=!1)):_.health<=0&&!0===S.ready?(clearInterval(N),clearInterval(P),X=[],V=0,S.setLevelTime(T[V].time),S.setLevelNumber(T[V].levelNumber),console.log("gameover"),g.classList.add("hide"),b.classList.add("hide"),w.classList.add("hide"),x.classList.remove("hide"),_.healthReload(),void k()):void requestAnimationFrame(Y)}function D(e){X.forEach((function(t){t.deleteBug(e.offsetX,e.offsetY,50)})),X.forEach((function(e){0===e.radius&&(X.splice(X.indexOf(e),1),q.countPoints())}))}function F(){j.clearRect(0,0,C,A),H.drawCandy(),P=setInterval((function(){for(var e=0;e<1;e++){var t=new l(0,0);t.setPosition(),t.setVelocityVector(H.x,H.y),X.push(t)}}),1300-100*S.levelNumber),S.ready,N=setInterval((function(){S.setLevelTime(--S.time)}),1e3),requestAnimationFrame(Y)}T=S.generateLevels(M);var U=document.getElementById("next-level"),W=document.getElementById("start"),z=document.getElementById("try-again");O.addEventListener("mousedown",D),O.addEventListener("click",D),U.addEventListener("mousedown",(function(){S.setLevelReady(!0),!0===S.ready&&F()})),W.addEventListener("mousedown",(function(){S.setLevelReady(!0),!0===S.ready&&F()})),z.addEventListener("mousedown",(function(){S.setLevelReady(!0),!0===S.ready&&F()})),!1===B&&(document.getElementById("start").addEventListener("mousedown",(function(){g.classList.remove("hide"),b.classList.remove("hide"),w.classList.remove("hide"),L.classList.add("hide"),R(!0),B=!0})),document.getElementById("next-level").addEventListener("mousedown",(function(){g.classList.remove("hide"),b.classList.remove("hide"),w.classList.remove("hide"),p.classList.add("hide"),B=!0})),document.getElementById("settings").addEventListener("mousedown",(function(){E.classList.remove("hide"),L.classList.add("hide"),R(!1)})),document.getElementById("credits").addEventListener("mousedown",(function(){L.classList.add("hide"),I.classList.remove("hide")})),k(),document.getElementById("back-to-main-menu").addEventListener("mousedown",(function(){L.classList.remove("hide"),I.classList.add("hide"),x.classList.add("hide")})),document.getElementById("back-to-main-menu2").addEventListener("mousedown",(function(){L.classList.remove("hide"),x.classList.add("hide")})),document.getElementById("save-settings").addEventListener("mousedown",(function(){document.getElementById("player-name").value,M=document.getElementById("number-of-levels").value,R(!0),E.classList.add("hide"),L.classList.remove("hide")}))),function(e,t){if("function"!=typeof t)throw new Error("Not a valid callback for async script load");var n=document.createElement("script");n.onload=t,n.src=e,document.head.appendChild(n)}("https://www.googletagmanager.com/gtag/js?id=UA-149871373-1",(function(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-149871373-1")})),requestAnimationFrame(Y)}]);
//# sourceMappingURL=index.js.map