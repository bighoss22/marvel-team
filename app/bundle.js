!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=10)}([function(e,n,t){var o=t(7);e.exports=function(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){(this.readyState=4&200==this.status)&&"daredevil"==e.name&&o(JSON.parse(this.responseText))},n.open("Get","http://rsimmons.tgb2.ninja:4000"),n.send()}},function(e,n){e.exports=function(){var e=document.getElementById("content");let n=document.createElement("div");n.className="w3-bar w3-blue";let t=document.createElement("a");t.className="w3-bar-item w3-button",t.href="#",t.innerHTML="Home",n.append(t);let o=document.createElement("a");o.className="w3-bar-item w3 button",o.href="#/avengers",o.innerHTML="Avenger",n.append(o),e.append(n)}},function(e,n,t){var o=t(1),r=t(0);e.exports=function(){o(),r({name:"daredevil"})}},function(e,n,t){var o=t(1);t(0);e.exports=function(){o(),document.getElementById("content").innerHTML="This is the wolverine detail page"}},function(e,n,t){var o=t(1);t(0);e.exports=function(){o(),document.getElementById("content").innerHTML="This is the daredevil detail page"}},function(e,n,t){var o=t(1);t(0);e.exports=function(){o(),document.getElementById("content").innerHTML="This is the mystique detail page"}},function(e,n,t){var o=t(1);t(0);e.exports=function(){o(),document.getElementById("content").innerHTML="This is the medusa detail page"}},function(e,n){},function(e,n,t){var o=t(1);t(0);e.exports=function(){o(),document.getElementById("content").innerHTML="This is the lukes detail page"}},function(e,n){e.exports=function(){let e=document.getElementById("content"),n=document.createElement("div");n.className="w3-bar w3-blue";let t=document.createElement("a");t.className="w3-bar-item w3-button",t.href="#",t.innerHTML="Home",n.append(t);let o=document.createElement("a");o.className="w3-bar-item w3-button",o.href="#/avengers",o.innerHTML="Avengers",n.append(o),e.append(n)}},function(e,n,t){var o=new Navigo("http://rsimmons.tgb2.ninja:3000/#",!0,"#"),r=t(9),i=t(8),a=t(6),c=t(5),u=t(4),d=t(3),s=t(2);t(0);o.on(function(){document.getElementById("content").innerHTML="",r()}).on({avengers:function(){document.getElementById("content").innerHTML="",s()},"avengers/Luke":function(){document.getElementById("content").innerHTML="",i()},"avengers/Medusa":function(){document.getElementById("content").innerHTML="",a()},"avengers/Mystique":function(){document.getElementById("content").innerHTML="",c()},"avengers/Daredevil":function(){document.getElementById("content").innerHTML="",u()},"avengers/Wolverine":function(){document.getElementById("content").innerHTML="",d()}}).resolve()}]);