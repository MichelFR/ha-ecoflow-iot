var go=Object.create;var na=Object.defineProperty;var vo=Object.getOwnPropertyDescriptor;var _o=Object.getOwnPropertyNames;var yo=Object.getPrototypeOf,bo=Object.prototype.hasOwnProperty;var wo=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports);var xo=(_,i,r,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let h of _o(i))!bo.call(_,h)&&h!==r&&na(_,h,{get:()=>i[h],enumerable:!(l=vo(i,h))||l.enumerable});return _};var ko=(_,i,r)=>(r=_!=null?go(yo(_)):{},xo(i||!_||!_.__esModule?na(r,"default",{value:_,enumerable:!0}):r,_));var Ya=wo((ji,xs)=>{typeof document<"u"&&typeof navigator<"u"&&(function(_,i){typeof ji=="object"&&typeof xs<"u"?xs.exports=i():typeof define=="function"&&define.amd?define(i):(_=typeof globalThis<"u"?globalThis:_||self,_.lottie=i())})(ji,(function(){"use strict";var _="http://www.w3.org/2000/svg",i="",r=!1,l=-999999,h=function(e){r=!!e},g=function(){return r},$=function(e){i=e},D=function(){return i};function U(t){return document.createElement(t)}function j(t,e){var s,a=t.length,o;for(s=0;s<a;s+=1){o=t[s].prototype;for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e.prototype[n]=o[n])}}function nt(t,e){return Object.getOwnPropertyDescriptor(t,e)}function X(t){function e(){}return e.prototype=t,e}var rt=(function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(s){this.audios.push(s)},pause:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].pause()},resume:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].resume()},setRate:function(s){var a,o=this.audios.length;for(a=0;a<o;a+=1)this.audios[a].setRate(s)},createAudio:function(s){return this.audioFactory?this.audioFactory(s):window.Howl?new window.Howl({src:[s]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(s){this.audioFactory=s},setVolume:function(s){this._volume=s,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}})(),at=(function(){function t(s,a){var o=0,n=[],d;switch(s){case"int16":case"uint8c":d=1;break;default:d=1.1;break}for(o=0;o<a;o+=1)n.push(d);return n}function e(s,a){return s==="float32"?new Float32Array(a):s==="int16"?new Int16Array(a):s==="uint8c"?new Uint8ClampedArray(a):t(s,a)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t})();function ot(t){return Array.apply(null,{length:t})}function ce(t){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce(t)}var Nt=!0,Kt=null,ee=null,Wt="",Hi=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),vi=!1,Lt=Math.pow,ii=Math.sqrt,ie=Math.floor,Cs=Math.max,De=Math.min,si={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,s=t.length;for(e=0;e<s;e+=1)si[t[e]]=Math[t[e]]})();function ur(){return{}}si.random=Math.random,si.abs=function(t){var e=ce(t);if(e==="object"&&t.length){var s=ot(t.length),a,o=t.length;for(a=0;a<o;a+=1)s[a]=Math.abs(t[a]);return s}return Math.abs(t)};var Wi=150,ut=Math.PI/180,Z=.5519;function St(t){vi=!!t}function Se(t){return vi?Math.round(t):t}function Ue(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function Ne(t,e,s,a){this.type=t,this.currentTime=e,this.totalTime=s,this.direction=a<0?-1:1}function Be(t,e){this.type=t,this.direction=e<0?-1:1}function je(t,e,s,a){this.type=t,this.currentLoop=s,this.totalLoops=e,this.direction=a<0?-1:1}function ri(t,e,s){this.type=t,this.firstFrame=e,this.totalFrames=s}function mr(t,e){this.type=t,this.target=e}function mn(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function gn(t){this.type="configError",this.nativeError=t}function pl(t,e){this.type=t,this.nativeError=e}var Ot=(function(){var t=0;return function(){return t+=1,Wt+"__lottie_element_"+t}})();function Ms(t,e,s){var a,o,n,d,v,p,x,A;switch(d=Math.floor(t*6),v=t*6-d,p=s*(1-e),x=s*(1-v*e),A=s*(1-(1-v)*e),d%6){case 0:a=s,o=A,n=p;break;case 1:a=x,o=s,n=p;break;case 2:a=p,o=s,n=A;break;case 3:a=p,o=x,n=s;break;case 4:a=A,o=p,n=s;break;case 5:a=s,o=p,n=x;break;default:break}return[a,o,n]}function Fs(t,e,s){var a=Math.max(t,e,s),o=Math.min(t,e,s),n=a-o,d,v=a===0?0:n/a,p=a/255;switch(a){case o:d=0;break;case t:d=e-s+n*(e<s?6:0),d/=6*n;break;case e:d=s-t+n*2,d/=6*n;break;case s:d=t-e+n*4,d/=6*n;break;default:break}return[d,v,p]}function gr(t,e){var s=Fs(t[0]*255,t[1]*255,t[2]*255);return s[1]+=e,s[1]>1?s[1]=1:s[1]<=0&&(s[1]=0),Ms(s[0],s[1],s[2])}function vr(t,e){var s=Fs(t[0]*255,t[1]*255,t[2]*255);return s[2]+=e,s[2]>1?s[2]=1:s[2]<0&&(s[2]=0),Ms(s[0],s[1],s[2])}function _r(t,e){var s=Fs(t[0]*255,t[1]*255,t[2]*255);return s[0]+=e/360,s[0]>1?s[0]-=1:s[0]<0&&(s[0]+=1),Ms(s[0],s[1],s[2])}var fl=(function(){var t=[],e,s;for(e=0;e<256;e+=1)s=e.toString(16),t[e]=s.length===1?"0"+s:s;return function(a,o,n){return a<0&&(a=0),o<0&&(o=0),n<0&&(n=0),"#"+t[a]+t[o]+t[n]}})(),vn=function(e){Nt=!!e},_n=function(){return Nt},yn=function(e){Kt=e},qi=function(){return Kt},ul=function(e){ee=e},yr=function(){return ee},Gi=function(e){Wi=e},_i=function(){return Wi},bn=function(e){Wt=e},ml=function(){return Wt};function it(t){return document.createElementNS(_,t)}function Is(t){"@babel/helpers - typeof";return Is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Is(t)}var yi=(function(){var t=1,e=[],s,a,o={onmessage:function(){},postMessage:function(E){s({data:E})}},n={postMessage:function(E){o.onmessage({data:E})}};function d(m){if(window.Worker&&window.Blob&&g()){var E=new Blob(["var _workerSelf = self; self.onmessage = ",m.toString()],{type:"text/javascript"}),C=URL.createObjectURL(E);return new Worker(C)}return s=m,o}function v(){a||(a=d(function(E){function C(){function I(N,b){var P,c,f=N.length,R,F,q,Q;for(c=0;c<f;c+=1)if(P=N[c],"ks"in P&&!P.completed){if(P.completed=!0,P.hasMask){var et=P.masksProperties;for(F=et.length,R=0;R<F;R+=1)if(et[R].pt.k.i)k(et[R].pt.k);else for(Q=et[R].pt.k.length,q=0;q<Q;q+=1)et[R].pt.k[q].s&&k(et[R].pt.k[q].s[0]),et[R].pt.k[q].e&&k(et[R].pt.k[q].e[0])}P.ty===0?(P.layers=u(P.refId,b),I(P.layers,b)):P.ty===4?y(P.shapes):P.ty===5&&st(P)}}function S(N,b){if(N){var P=0,c=N.length;for(P=0;P<c;P+=1)N[P].t===1&&(N[P].data.layers=u(N[P].data.refId,b),I(N[P].data.layers,b))}}function w(N,b){for(var P=0,c=b.length;P<c;){if(b[P].id===N)return b[P];P+=1}return null}function u(N,b){var P=w(N,b);return P?P.layers.__used?JSON.parse(JSON.stringify(P.layers)):(P.layers.__used=!0,P.layers):null}function y(N){var b,P=N.length,c,f;for(b=P-1;b>=0;b-=1)if(N[b].ty==="sh")if(N[b].ks.k.i)k(N[b].ks.k);else for(f=N[b].ks.k.length,c=0;c<f;c+=1)N[b].ks.k[c].s&&k(N[b].ks.k[c].s[0]),N[b].ks.k[c].e&&k(N[b].ks.k[c].e[0]);else N[b].ty==="gr"&&y(N[b].it)}function k(N){var b,P=N.i.length;for(b=0;b<P;b+=1)N.i[b][0]+=N.v[b][0],N.i[b][1]+=N.v[b][1],N.o[b][0]+=N.v[b][0],N.o[b][1]+=N.v[b][1]}function M(N,b){var P=b?b.split("."):[100,100,100];return N[0]>P[0]?!0:P[0]>N[0]?!1:N[1]>P[1]?!0:P[1]>N[1]?!1:N[2]>P[2]?!0:P[2]>N[2]?!1:null}var z=(function(){var N=[4,4,14];function b(c){var f=c.t.d;c.t.d={k:[{s:f,t:0}]}}function P(c){var f,R=c.length;for(f=0;f<R;f+=1)c[f].ty===5&&b(c[f])}return function(c){if(M(N,c.v)&&(P(c.layers),c.assets)){var f,R=c.assets.length;for(f=0;f<R;f+=1)c.assets[f].layers&&P(c.assets[f].layers)}}})(),V=(function(){var N=[4,7,99];return function(b){if(b.chars&&!M(N,b.v)){var P,c=b.chars.length;for(P=0;P<c;P+=1){var f=b.chars[P];f.data&&f.data.shapes&&(y(f.data.shapes),f.data.ip=0,f.data.op=99999,f.data.st=0,f.data.sr=1,f.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},b.chars[P].t||(f.data.shapes.push({ty:"no"}),f.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}})(),B=(function(){var N=[5,7,15];function b(c){var f=c.t.p;typeof f.a=="number"&&(f.a={a:0,k:f.a}),typeof f.p=="number"&&(f.p={a:0,k:f.p}),typeof f.r=="number"&&(f.r={a:0,k:f.r})}function P(c){var f,R=c.length;for(f=0;f<R;f+=1)c[f].ty===5&&b(c[f])}return function(c){if(M(N,c.v)&&(P(c.layers),c.assets)){var f,R=c.assets.length;for(f=0;f<R;f+=1)c.assets[f].layers&&P(c.assets[f].layers)}}})(),tt=(function(){var N=[4,1,9];function b(c){var f,R=c.length,F,q;for(f=0;f<R;f+=1)if(c[f].ty==="gr")b(c[f].it);else if(c[f].ty==="fl"||c[f].ty==="st")if(c[f].c.k&&c[f].c.k[0].i)for(q=c[f].c.k.length,F=0;F<q;F+=1)c[f].c.k[F].s&&(c[f].c.k[F].s[0]/=255,c[f].c.k[F].s[1]/=255,c[f].c.k[F].s[2]/=255,c[f].c.k[F].s[3]/=255),c[f].c.k[F].e&&(c[f].c.k[F].e[0]/=255,c[f].c.k[F].e[1]/=255,c[f].c.k[F].e[2]/=255,c[f].c.k[F].e[3]/=255);else c[f].c.k[0]/=255,c[f].c.k[1]/=255,c[f].c.k[2]/=255,c[f].c.k[3]/=255}function P(c){var f,R=c.length;for(f=0;f<R;f+=1)c[f].ty===4&&b(c[f].shapes)}return function(c){if(M(N,c.v)&&(P(c.layers),c.assets)){var f,R=c.assets.length;for(f=0;f<R;f+=1)c.assets[f].layers&&P(c.assets[f].layers)}}})(),K=(function(){var N=[4,4,18];function b(c){var f,R=c.length,F,q;for(f=R-1;f>=0;f-=1)if(c[f].ty==="sh")if(c[f].ks.k.i)c[f].ks.k.c=c[f].closed;else for(q=c[f].ks.k.length,F=0;F<q;F+=1)c[f].ks.k[F].s&&(c[f].ks.k[F].s[0].c=c[f].closed),c[f].ks.k[F].e&&(c[f].ks.k[F].e[0].c=c[f].closed);else c[f].ty==="gr"&&b(c[f].it)}function P(c){var f,R,F=c.length,q,Q,et,lt;for(R=0;R<F;R+=1){if(f=c[R],f.hasMask){var ht=f.masksProperties;for(Q=ht.length,q=0;q<Q;q+=1)if(ht[q].pt.k.i)ht[q].pt.k.c=ht[q].cl;else for(lt=ht[q].pt.k.length,et=0;et<lt;et+=1)ht[q].pt.k[et].s&&(ht[q].pt.k[et].s[0].c=ht[q].cl),ht[q].pt.k[et].e&&(ht[q].pt.k[et].e[0].c=ht[q].cl)}f.ty===4&&b(f.shapes)}}return function(c){if(M(N,c.v)&&(P(c.layers),c.assets)){var f,R=c.assets.length;for(f=0;f<R;f+=1)c.assets[f].layers&&P(c.assets[f].layers)}}})();function H(N){N.__complete||(tt(N),z(N),V(N),B(N),K(N),I(N.layers,N.assets),S(N.chars,N.assets),N.__complete=!0)}function st(N){N.t.a.length===0&&"m"in N.t.p}var G={};return G.completeData=H,G.checkColors=tt,G.checkChars=V,G.checkPathProperties=B,G.checkShapes=K,G.completeLayers=I,G}if(n.dataManager||(n.dataManager=C()),n.assetLoader||(n.assetLoader=(function(){function I(w){var u=w.getResponseHeader("content-type");return u&&w.responseType==="json"&&u.indexOf("json")!==-1||w.response&&Is(w.response)==="object"?w.response:w.response&&typeof w.response=="string"?JSON.parse(w.response):w.responseText?JSON.parse(w.responseText):null}function S(w,u,y,k){var M,z=new XMLHttpRequest;try{z.responseType="json"}catch{}z.onreadystatechange=function(){if(z.readyState===4)if(z.status===200)M=I(z),y(M);else try{M=I(z),y(M)}catch(V){k&&k(V)}};try{z.open(["G","E","T"].join(""),w,!0)}catch{z.open(["G","E","T"].join(""),u+"/"+w,!0)}z.send()}return{load:S}})()),E.data.type==="loadAnimation")n.assetLoader.load(E.data.path,E.data.fullPath,function(I){n.dataManager.completeData(I),n.postMessage({id:E.data.id,payload:I,status:"success"})},function(){n.postMessage({id:E.data.id,status:"error"})});else if(E.data.type==="complete"){var T=E.data.animation;n.dataManager.completeData(T),n.postMessage({id:E.data.id,payload:T,status:"success"})}else E.data.type==="loadData"&&n.assetLoader.load(E.data.path,E.data.fullPath,function(I){n.postMessage({id:E.data.id,payload:I,status:"success"})},function(){n.postMessage({id:E.data.id,status:"error"})})}),a.onmessage=function(m){var E=m.data,C=E.id,T=e[C];e[C]=null,E.status==="success"?T.onComplete(E.payload):T.onError&&T.onError()})}function p(m,E){t+=1;var C="processId_"+t;return e[C]={onComplete:m,onError:E},C}function x(m,E,C){v();var T=p(E,C);a.postMessage({type:"loadAnimation",path:m,fullPath:window.location.origin+window.location.pathname,id:T})}function A(m,E,C){v();var T=p(E,C);a.postMessage({type:"loadData",path:m,fullPath:window.location.origin+window.location.pathname,id:T})}function O(m,E,C){v();var T=p(E,C);a.postMessage({type:"complete",animation:m,id:T})}return{loadAnimation:x,loadData:A,completeAnimation:O}})(),wn=(function(){var t=(function(){var S=U("canvas");S.width=1,S.height=1;var w=S.getContext("2d");return w.fillStyle="rgba(0,0,0,0)",w.fillRect(0,0,1,1),S})();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function s(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function a(S,w,u){var y="";if(S.e)y=S.p;else if(w){var k=S.p;k.indexOf("images/")!==-1&&(k=k.split("/")[1]),y=w+k}else y=u,y+=S.u?S.u:"",y+=S.p;return y}function o(S){var w=0,u=setInterval(function(){var y=S.getBBox();(y.width||w>500)&&(this._imageLoaded(),clearInterval(u)),w+=1}.bind(this),50)}function n(S){var w=a(S,this.assetsPath,this.path),u=it("image");Hi?this.testImageLoaded(u):u.addEventListener("load",this._imageLoaded,!1),u.addEventListener("error",function(){y.img=t,this._imageLoaded()}.bind(this),!1),u.setAttributeNS("http://www.w3.org/1999/xlink","href",w),this._elementHelper.append?this._elementHelper.append(u):this._elementHelper.appendChild(u);var y={img:u,assetData:S};return y}function d(S){var w=a(S,this.assetsPath,this.path),u=U("img");u.crossOrigin="anonymous",u.addEventListener("load",this._imageLoaded,!1),u.addEventListener("error",function(){y.img=t,this._imageLoaded()}.bind(this),!1),u.src=w;var y={img:u,assetData:S};return y}function v(S){var w={assetData:S},u=a(S,this.assetsPath,this.path);return yi.loadData(u,function(y){w.img=y,this._footageLoaded()}.bind(this),function(){w.img={},this._footageLoaded()}.bind(this)),w}function p(S,w){this.imagesLoadedCb=w;var u,y=S.length;for(u=0;u<y;u+=1)S[u].layers||(!S[u].t||S[u].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(S[u]))):S[u].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(S[u]))))}function x(S){this.path=S||""}function A(S){this.assetsPath=S||""}function O(S){for(var w=0,u=this.images.length;w<u;){if(this.images[w].assetData===S)return this.images[w].img;w+=1}return null}function m(){this.imagesLoadedCb=null,this.images.length=0}function E(){return this.totalImages===this.loadedAssets}function C(){return this.totalFootages===this.loadedFootagesCount}function T(S,w){S==="svg"?(this._elementHelper=w,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function I(){this._imageLoaded=e.bind(this),this._footageLoaded=s.bind(this),this.testImageLoaded=o.bind(this),this.createFootageData=v.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return I.prototype={loadAssets:p,setAssetsPath:A,setPath:x,loadedImages:E,loadedFootages:C,destroy:m,getAsset:O,createImgData:d,createImageData:n,imageLoaded:e,footageLoaded:s,setCacheType:T},I})();function br(){}br.prototype={triggerEvent:function(e,s){if(this._cbs[e])for(var a=this._cbs[e],o=0;o<a.length;o+=1)a[o](s)},addEventListener:function(e,s){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(s),function(){this.removeEventListener(e,s)}.bind(this)},removeEventListener:function(e,s){if(!s)this._cbs[e]=null;else if(this._cbs[e]){for(var a=0,o=this._cbs[e].length;a<o;)this._cbs[e][a]===s&&(this._cbs[e].splice(a,1),a-=1,o-=1),a+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var xn=(function(){function t(e){for(var s=e.split(`\r
`),a={},o,n=0,d=0;d<s.length;d+=1)o=s[d].split(":"),o.length===2&&(a[o[0]]=o[1].trim(),n+=1);if(n===0)throw new Error;return a}return function(e){for(var s=[],a=0;a<e.length;a+=1){var o=e[a],n={time:o.tm,duration:o.dr};try{n.payload=JSON.parse(e[a].cm)}catch{try{n.payload=t(e[a].cm)}catch{n.payload={name:e[a].cm}}}s.push(n)}return s}})(),kn=(function(){function t(e){this.compositions.push(e)}return function(){function e(s){for(var a=0,o=this.compositions.length;a<o;){if(this.compositions[a].data&&this.compositions[a].data.nm===s)return this.compositions[a].prepareFrame&&this.compositions[a].data.xt&&this.compositions[a].prepareFrame(this.currentFrame),this.compositions[a].compInterface;a+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}})(),bi={},Sn=function(e,s){bi[e]=s};function $n(t){return bi[t]}function An(){if(bi.canvas)return"canvas";for(var t in bi)if(bi[t])return t;return""}function Yi(t){"@babel/helpers - typeof";return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yi(t)}var J=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Ot(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=_n(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=kn(),this.imagePreloader=new wn,this.audioController=rt(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new Ne("drawnFrame",0,0,0),this.expressionsPlugin=qi()};j([br],J),J.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var s=$n(e);this.renderer=new s(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),yi.loadAnimation(t.path,this.configAnimation,this.onSetupError))},J.prototype.onSetupError=function(){this.trigger("data_failed")},J.prototype.setupAnimation=function(t){yi.completeAnimation(t,this.configAnimation)},J.prototype.setData=function(t,e){e&&Yi(e)!=="object"&&(e=JSON.parse(e));var s={wrapper:t,animationData:e},a=t.attributes;s.path=a.getNamedItem("data-animation-path")?a.getNamedItem("data-animation-path").value:a.getNamedItem("data-bm-path")?a.getNamedItem("data-bm-path").value:a.getNamedItem("bm-path")?a.getNamedItem("bm-path").value:"",s.animType=a.getNamedItem("data-anim-type")?a.getNamedItem("data-anim-type").value:a.getNamedItem("data-bm-type")?a.getNamedItem("data-bm-type").value:a.getNamedItem("bm-type")?a.getNamedItem("bm-type").value:a.getNamedItem("data-bm-renderer")?a.getNamedItem("data-bm-renderer").value:a.getNamedItem("bm-renderer")?a.getNamedItem("bm-renderer").value:An()||"canvas";var o=a.getNamedItem("data-anim-loop")?a.getNamedItem("data-anim-loop").value:a.getNamedItem("data-bm-loop")?a.getNamedItem("data-bm-loop").value:a.getNamedItem("bm-loop")?a.getNamedItem("bm-loop").value:"";o==="false"?s.loop=!1:o==="true"?s.loop=!0:o!==""&&(s.loop=parseInt(o,10));var n=a.getNamedItem("data-anim-autoplay")?a.getNamedItem("data-anim-autoplay").value:a.getNamedItem("data-bm-autoplay")?a.getNamedItem("data-bm-autoplay").value:a.getNamedItem("bm-autoplay")?a.getNamedItem("bm-autoplay").value:!0;s.autoplay=n!=="false",s.name=a.getNamedItem("data-name")?a.getNamedItem("data-name").value:a.getNamedItem("data-bm-name")?a.getNamedItem("data-bm-name").value:a.getNamedItem("bm-name")?a.getNamedItem("bm-name").value:"";var d=a.getNamedItem("data-anim-prerender")?a.getNamedItem("data-anim-prerender").value:a.getNamedItem("data-bm-prerender")?a.getNamedItem("data-bm-prerender").value:a.getNamedItem("bm-prerender")?a.getNamedItem("bm-prerender").value:"";d==="false"&&(s.prerender=!1),s.path?this.setParams(s):this.trigger("destroy")},J.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,s,a=e.length,o=t.layers,n,d=o.length;for(n=0;n<d;n+=1)for(s=0;s<a;){if(e[s].id===o[n].id){e[s]=o[n];break}s+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(a=t.assets.length,s=0;s<a;s+=1)this.animationData.assets.push(t.assets[s]);this.animationData.__complete=!1,yi.completeAnimation(this.animationData,this.onSegmentComplete)},J.prototype.onSegmentComplete=function(t){this.animationData=t;var e=qi();e&&e.initExpressions(this),this.loadNextSegment()},J.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var s=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,yi.loadData(s,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},J.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},J.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},J.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},J.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=xn(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},J.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},J.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=qi();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},J.prototype.resize=function(t,e){var s=typeof t=="number"?t:void 0,a=typeof e=="number"?e:void 0;this.renderer.updateContainerSize(s,a)},J.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},J.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},J.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},J.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},J.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},J.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},J.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},J.prototype.getMarkerData=function(t){for(var e,s=0;s<this.markers.length;s+=1)if(e=this.markers[s],e.payload&&e.payload.name===t)return e;return null},J.prototype.goToAndStop=function(t,e,s){if(!(s&&this.name!==s)){var a=Number(t);if(isNaN(a)){var o=this.getMarkerData(t);o&&this.goToAndStop(o.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},J.prototype.goToAndPlay=function(t,e,s){if(!(s&&this.name!==s)){var a=Number(t);if(isNaN(a)){var o=this.getMarkerData(t);o&&(o.duration?this.playSegments([o.time,o.time+o.duration],!0):this.goToAndStop(o.time,!0))}else this.goToAndStop(a,e,s);this.play()}},J.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,s=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(s=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(s=!0,e=0)):this.setCurrentRawFrameValue(e),s&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},J.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},J.prototype.setSegment=function(t,e){var s=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?s=t:this.currentRawFrame+this.firstFrame>e&&(s=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,s!==-1&&this.goToAndStop(s,!0)},J.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),Yi(t[0])==="object"){var s,a=t.length;for(s=0;s<a;s+=1)this.segments.push(t[s])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},J.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},J.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},J.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},J.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},J.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},J.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},J.prototype.setLoop=function(t){this.loop=t},J.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},J.prototype.getVolume=function(){return this.audioController.getVolume()},J.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},J.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},J.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},J.prototype.getPath=function(){return this.path},J.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var s=t.p;s.indexOf("images/")!==-1&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},J.prototype.getAssetData=function(t){for(var e=0,s=this.assets.length;e<s;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},J.prototype.hide=function(){this.renderer.hide()},J.prototype.show=function(){this.renderer.show()},J.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},J.prototype.updateDocumentData=function(t,e,s){try{var a=this.renderer.getElementByPath(t);a.updateDocumentData(e,s)}catch{}},J.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new Ne(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new je(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new Be(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new ri(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new mr(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new Ne(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new je(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new Be(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new ri(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new mr(t,this))},J.prototype.triggerRenderFrameError=function(t){var e=new mn(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},J.prototype.triggerConfigError=function(t){var e=new gn(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var yt=(function(){var t={},e=[],s=0,a=0,o=0,n=!0,d=!1;function v(b){for(var P=0,c=b.target;P<a;)e[P].animation===c&&(e.splice(P,1),P-=1,a-=1,c.isPaused||O()),P+=1}function p(b,P){if(!b)return null;for(var c=0;c<a;){if(e[c].elem===b&&e[c].elem!==null)return e[c].animation;c+=1}var f=new J;return m(f,b),f.setData(b,P),f}function x(){var b,P=e.length,c=[];for(b=0;b<P;b+=1)c.push(e[b].animation);return c}function A(){o+=1,tt()}function O(){o-=1}function m(b,P){b.addEventListener("destroy",v),b.addEventListener("_active",A),b.addEventListener("_idle",O),e.push({elem:P,animation:b}),a+=1}function E(b){var P=new J;return m(P,null),P.setParams(b),P}function C(b,P){var c;for(c=0;c<a;c+=1)e[c].animation.setSpeed(b,P)}function T(b,P){var c;for(c=0;c<a;c+=1)e[c].animation.setDirection(b,P)}function I(b){var P;for(P=0;P<a;P+=1)e[P].animation.play(b)}function S(b){var P=b-s,c;for(c=0;c<a;c+=1)e[c].animation.advanceTime(P);s=b,o&&!d?window.requestAnimationFrame(S):n=!0}function w(b){s=b,window.requestAnimationFrame(S)}function u(b){var P;for(P=0;P<a;P+=1)e[P].animation.pause(b)}function y(b,P,c){var f;for(f=0;f<a;f+=1)e[f].animation.goToAndStop(b,P,c)}function k(b){var P;for(P=0;P<a;P+=1)e[P].animation.stop(b)}function M(b){var P;for(P=0;P<a;P+=1)e[P].animation.togglePause(b)}function z(b){var P;for(P=a-1;P>=0;P-=1)e[P].animation.destroy(b)}function V(b,P,c){var f=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),R,F=f.length;for(R=0;R<F;R+=1)c&&f[R].setAttribute("data-bm-type",c),p(f[R],b);if(P&&F===0){c||(c="svg");var q=document.getElementsByTagName("body")[0];q.innerText="";var Q=U("div");Q.style.width="100%",Q.style.height="100%",Q.setAttribute("data-bm-type",c),q.appendChild(Q),p(Q,b)}}function B(){var b;for(b=0;b<a;b+=1)e[b].animation.resize()}function tt(){!d&&o&&n&&(window.requestAnimationFrame(w),n=!1)}function K(){d=!0}function H(){d=!1,tt()}function st(b,P){var c;for(c=0;c<a;c+=1)e[c].animation.setVolume(b,P)}function G(b){var P;for(P=0;P<a;P+=1)e[P].animation.mute(b)}function N(b){var P;for(P=0;P<a;P+=1)e[P].animation.unmute(b)}return t.registerAnimation=p,t.loadAnimation=E,t.setSpeed=C,t.setDirection=T,t.play=I,t.pause=u,t.stop=k,t.togglePause=M,t.searchAnimations=V,t.resize=B,t.goToAndStop=y,t.destroy=z,t.freeze=K,t.unfreeze=H,t.setVolume=st,t.mute=G,t.unmute=N,t.getRegisteredAnimations=x,t})(),wi=(function(){var t={};t.getBezierEasing=s;var e={};function s(w,u,y,k,M){var z=M||("bez_"+w+"_"+u+"_"+y+"_"+k).replace(/\./g,"p");if(e[z])return e[z];var V=new S([w,u,y,k]);return e[z]=V,V}var a=4,o=.001,n=1e-7,d=10,v=11,p=1/(v-1),x=typeof Float32Array=="function";function A(w,u){return 1-3*u+3*w}function O(w,u){return 3*u-6*w}function m(w){return 3*w}function E(w,u,y){return((A(u,y)*w+O(u,y))*w+m(u))*w}function C(w,u,y){return 3*A(u,y)*w*w+2*O(u,y)*w+m(u)}function T(w,u,y,k,M){var z,V,B=0;do V=u+(y-u)/2,z=E(V,k,M)-w,z>0?y=V:u=V;while(Math.abs(z)>n&&++B<d);return V}function I(w,u,y,k){for(var M=0;M<a;++M){var z=C(u,y,k);if(z===0)return u;var V=E(u,y,k)-w;u-=V/z}return u}function S(w){this._p=w,this._mSampleValues=x?new Float32Array(v):new Array(v),this._precomputed=!1,this.get=this.get.bind(this)}return S.prototype={get:function(u){var y=this._p[0],k=this._p[1],M=this._p[2],z=this._p[3];return this._precomputed||this._precompute(),y===k&&M===z?u:u===0?0:u===1?1:E(this._getTForX(u),k,z)},_precompute:function(){var u=this._p[0],y=this._p[1],k=this._p[2],M=this._p[3];this._precomputed=!0,(u!==y||k!==M)&&this._calcSampleValues()},_calcSampleValues:function(){for(var u=this._p[0],y=this._p[2],k=0;k<v;++k)this._mSampleValues[k]=E(k*p,u,y)},_getTForX:function(u){for(var y=this._p[0],k=this._p[2],M=this._mSampleValues,z=0,V=1,B=v-1;V!==B&&M[V]<=u;++V)z+=p;--V;var tt=(u-M[V])/(M[V+1]-M[V]),K=z+tt*p,H=C(K,y,k);return H>=o?I(u,K,y,k):H===0?K:T(u,z,z+p,y,k)}},t})(),wr=(function(){function t(e){return e.concat(ot(e.length))}return{double:t}})(),Ki=(function(){return function(t,e,s){var a=0,o=t,n=ot(o),d={newElement:v,release:p};function v(){var x;return a?(a-=1,x=n[a]):x=e(),x}function p(x){a===o&&(n=wr.double(n),o*=2),s&&s(x),n[a]=x,a+=1}return d}})(),xr=(function(){function t(){return{addedLength:0,percents:at("float32",_i()),lengths:at("float32",_i())}}return Ki(8,t)})(),kr=(function(){function t(){return{lengths:[],totalLength:0}}function e(s){var a,o=s.lengths.length;for(a=0;a<o;a+=1)xr.release(s.lengths[a]);s.lengths.length=0}return Ki(8,t,e)})();function En(){var t=Math;function e(m,E,C,T,I,S){var w=m*T+E*I+C*S-I*T-S*m-C*E;return w>-.001&&w<.001}function s(m,E,C,T,I,S,w,u,y){if(C===0&&S===0&&y===0)return e(m,E,T,I,w,u);var k=t.sqrt(t.pow(T-m,2)+t.pow(I-E,2)+t.pow(S-C,2)),M=t.sqrt(t.pow(w-m,2)+t.pow(u-E,2)+t.pow(y-C,2)),z=t.sqrt(t.pow(w-T,2)+t.pow(u-I,2)+t.pow(y-S,2)),V;return k>M?k>z?V=k-M-z:V=z-M-k:z>M?V=z-M-k:V=M-k-z,V>-1e-4&&V<1e-4}var a=(function(){return function(m,E,C,T){var I=_i(),S,w,u,y,k,M=0,z,V=[],B=[],tt=xr.newElement();for(u=C.length,S=0;S<I;S+=1){for(k=S/(I-1),z=0,w=0;w<u;w+=1)y=Lt(1-k,3)*m[w]+3*Lt(1-k,2)*k*C[w]+3*(1-k)*Lt(k,2)*T[w]+Lt(k,3)*E[w],V[w]=y,B[w]!==null&&(z+=Lt(V[w]-B[w],2)),B[w]=V[w];z&&(z=ii(z),M+=z),tt.percents[S]=k,tt.lengths[S]=M}return tt.addedLength=M,tt}})();function o(m){var E=kr.newElement(),C=m.c,T=m.v,I=m.o,S=m.i,w,u=m._length,y=E.lengths,k=0;for(w=0;w<u-1;w+=1)y[w]=a(T[w],T[w+1],I[w],S[w+1]),k+=y[w].addedLength;return C&&u&&(y[w]=a(T[w],T[0],I[w],S[0]),k+=y[w].addedLength),E.totalLength=k,E}function n(m){this.segmentLength=0,this.points=new Array(m)}function d(m,E){this.partialLength=m,this.point=E}var v=(function(){var m={};return function(E,C,T,I){var S=(E[0]+"_"+E[1]+"_"+C[0]+"_"+C[1]+"_"+T[0]+"_"+T[1]+"_"+I[0]+"_"+I[1]).replace(/\./g,"p");if(!m[S]){var w=_i(),u,y,k,M,z,V=0,B,tt,K=null;E.length===2&&(E[0]!==C[0]||E[1]!==C[1])&&e(E[0],E[1],C[0],C[1],E[0]+T[0],E[1]+T[1])&&e(E[0],E[1],C[0],C[1],C[0]+I[0],C[1]+I[1])&&(w=2);var H=new n(w);for(k=T.length,u=0;u<w;u+=1){for(tt=ot(k),z=u/(w-1),B=0,y=0;y<k;y+=1)M=Lt(1-z,3)*E[y]+3*Lt(1-z,2)*z*(E[y]+T[y])+3*(1-z)*Lt(z,2)*(C[y]+I[y])+Lt(z,3)*C[y],tt[y]=M,K!==null&&(B+=Lt(tt[y]-K[y],2));B=ii(B),V+=B,H.points[u]=new d(B,tt),K=tt}H.segmentLength=V,m[S]=H}return m[S]}})();function p(m,E){var C=E.percents,T=E.lengths,I=C.length,S=ie((I-1)*m),w=m*E.addedLength,u=0;if(S===I-1||S===0||w===T[S])return C[S];for(var y=T[S]>w?-1:1,k=!0;k;)if(T[S]<=w&&T[S+1]>w?(u=(w-T[S])/(T[S+1]-T[S]),k=!1):S+=y,S<0||S>=I-1){if(S===I-1)return C[S];k=!1}return C[S]+(C[S+1]-C[S])*u}function x(m,E,C,T,I,S){var w=p(I,S),u=1-w,y=t.round((u*u*u*m[0]+(w*u*u+u*w*u+u*u*w)*C[0]+(w*w*u+u*w*w+w*u*w)*T[0]+w*w*w*E[0])*1e3)/1e3,k=t.round((u*u*u*m[1]+(w*u*u+u*w*u+u*u*w)*C[1]+(w*w*u+u*w*w+w*u*w)*T[1]+w*w*w*E[1])*1e3)/1e3;return[y,k]}var A=at("float32",8);function O(m,E,C,T,I,S,w){I<0?I=0:I>1&&(I=1);var u=p(I,w);S=S>1?1:S;var y=p(S,w),k,M=m.length,z=1-u,V=1-y,B=z*z*z,tt=u*z*z*3,K=u*u*z*3,H=u*u*u,st=z*z*V,G=u*z*V+z*u*V+z*z*y,N=u*u*V+z*u*y+u*z*y,b=u*u*y,P=z*V*V,c=u*V*V+z*y*V+z*V*y,f=u*y*V+z*y*y+u*V*y,R=u*y*y,F=V*V*V,q=y*V*V+V*y*V+V*V*y,Q=y*y*V+V*y*y+y*V*y,et=y*y*y;for(k=0;k<M;k+=1)A[k*4]=t.round((B*m[k]+tt*C[k]+K*T[k]+H*E[k])*1e3)/1e3,A[k*4+1]=t.round((st*m[k]+G*C[k]+N*T[k]+b*E[k])*1e3)/1e3,A[k*4+2]=t.round((P*m[k]+c*C[k]+f*T[k]+R*E[k])*1e3)/1e3,A[k*4+3]=t.round((F*m[k]+q*C[k]+Q*T[k]+et*E[k])*1e3)/1e3;return A}return{getSegmentsLength:o,getNewSegment:O,getPointInSegment:x,buildBezierData:v,pointOnLine2D:e,pointOnLine3D:s}}var se=En(),He=l,Sr=Math.abs;function $r(t,e){var s=this.offsetTime,a;this.propType==="multidimensional"&&(a=at("float32",this.pv.length));for(var o=e.lastIndex,n=o,d=this.keyframes.length-1,v=!0,p,x,A;v;){if(p=this.keyframes[n],x=this.keyframes[n+1],n===d-1&&t>=x.t-s){p.h&&(p=x),o=0;break}if(x.t-s>t){o=n;break}n<d-1?n+=1:(o=0,v=!1)}A=this.keyframesMetadata[n]||{};var O,m,E,C,T,I,S=x.t-s,w=p.t-s,u;if(p.to){A.bezierData||(A.bezierData=se.buildBezierData(p.s,x.s||p.e,p.to,p.ti));var y=A.bezierData;if(t>=S||t<w){var k=t>=S?y.points.length-1:0;for(m=y.points[k].point.length,O=0;O<m;O+=1)a[O]=y.points[k].point[O]}else{A.__fnct?I=A.__fnct:(I=wi.getBezierEasing(p.o.x,p.o.y,p.i.x,p.i.y,p.n).get,A.__fnct=I),E=I((t-w)/(S-w));var M=y.segmentLength*E,z,V=e.lastFrame<t&&e._lastKeyframeIndex===n?e._lastAddedLength:0;for(T=e.lastFrame<t&&e._lastKeyframeIndex===n?e._lastPoint:0,v=!0,C=y.points.length;v;){if(V+=y.points[T].partialLength,M===0||E===0||T===y.points.length-1){for(m=y.points[T].point.length,O=0;O<m;O+=1)a[O]=y.points[T].point[O];break}else if(M>=V&&M<V+y.points[T+1].partialLength){for(z=(M-V)/y.points[T+1].partialLength,m=y.points[T].point.length,O=0;O<m;O+=1)a[O]=y.points[T].point[O]+(y.points[T+1].point[O]-y.points[T].point[O])*z;break}T<C-1?T+=1:v=!1}e._lastPoint=T,e._lastAddedLength=V-y.points[T].partialLength,e._lastKeyframeIndex=n}}else{var B,tt,K,H,st;if(d=p.s.length,u=x.s||p.e,this.sh&&p.h!==1)if(t>=S)a[0]=u[0],a[1]=u[1],a[2]=u[2];else if(t<=w)a[0]=p.s[0],a[1]=p.s[1],a[2]=p.s[2];else{var G=Ar(p.s),N=Ar(u),b=(t-w)/(S-w);Pn(a,Tn(G,N,b))}else for(n=0;n<d;n+=1)p.h!==1&&(t>=S?E=1:t<w?E=0:(p.o.x.constructor===Array?(A.__fnct||(A.__fnct=[]),A.__fnct[n]?I=A.__fnct[n]:(B=p.o.x[n]===void 0?p.o.x[0]:p.o.x[n],tt=p.o.y[n]===void 0?p.o.y[0]:p.o.y[n],K=p.i.x[n]===void 0?p.i.x[0]:p.i.x[n],H=p.i.y[n]===void 0?p.i.y[0]:p.i.y[n],I=wi.getBezierEasing(B,tt,K,H).get,A.__fnct[n]=I)):A.__fnct?I=A.__fnct:(B=p.o.x,tt=p.o.y,K=p.i.x,H=p.i.y,I=wi.getBezierEasing(B,tt,K,H).get,p.keyframeMetadata=I),E=I((t-w)/(S-w)))),u=x.s||p.e,st=p.h===1?p.s[n]:p.s[n]+(u[n]-p.s[n])*E,this.propType==="multidimensional"?a[n]=st:a=st}return e.lastIndex=o,a}function Tn(t,e,s){var a=[],o=t[0],n=t[1],d=t[2],v=t[3],p=e[0],x=e[1],A=e[2],O=e[3],m,E,C,T,I;return E=o*p+n*x+d*A+v*O,E<0&&(E=-E,p=-p,x=-x,A=-A,O=-O),1-E>1e-6?(m=Math.acos(E),C=Math.sin(m),T=Math.sin((1-s)*m)/C,I=Math.sin(s*m)/C):(T=1-s,I=s),a[0]=T*o+I*p,a[1]=T*n+I*x,a[2]=T*d+I*A,a[3]=T*v+I*O,a}function Pn(t,e){var s=e[0],a=e[1],o=e[2],n=e[3],d=Math.atan2(2*a*n-2*s*o,1-2*a*a-2*o*o),v=Math.asin(2*s*a+2*o*n),p=Math.atan2(2*s*n-2*a*o,1-2*s*s-2*o*o);t[0]=d/ut,t[1]=v/ut,t[2]=p/ut}function Ar(t){var e=t[0]*ut,s=t[1]*ut,a=t[2]*ut,o=Math.cos(e/2),n=Math.cos(s/2),d=Math.cos(a/2),v=Math.sin(e/2),p=Math.sin(s/2),x=Math.sin(a/2),A=o*n*d-v*p*x,O=v*p*d+o*n*x,m=v*n*d+o*p*x,E=o*p*d-v*n*x;return[O,m,E,A]}function Er(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==He&&(this._caching.lastFrame>=s&&t>=s||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var a=this.interpolateValue(t,this._caching);this.pv=a}return this._caching.lastFrame=t,this.pv}function Xi(t){var e;if(this.propType==="unidimensional")e=t*this.mult,Sr(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var s=0,a=this.v.length;s<a;)e=t[s]*this.mult,Sr(this.v[s]-e)>1e-5&&(this.v[s]=e,this._mdf=!0),s+=1}function Zi(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,s=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)s=this.effectsSequence[t](s);this.setVValue(s),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function Ji(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function Cn(t,e,s,a){this.propType="unidimensional",this.mult=s||1,this.data=e,this.v=s?e.k*s:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=a,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=Zi,this.setVValue=Xi,this.addEffect=Ji}function Mn(t,e,s,a){this.propType="multidimensional",this.mult=s||1,this.data=e,this._mdf=!1,this.elem=t,this.container=a,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var o,n=e.k.length;for(this.v=at("float32",n),this.pv=at("float32",n),this.vel=at("float32",n),o=0;o<n;o+=1)this.v[o]=e.k[o]*this.mult,this.pv[o]=e.k[o];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=Zi,this.setVValue=Xi,this.addEffect=Ji}function Fn(t,e,s,a){this.propType="unidimensional",this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:He,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=s||1,this.elem=t,this.container=a,this.comp=t.comp,this.v=He,this.pv=He,this._isFirstFrame=!0,this.getValue=Zi,this.setVValue=Xi,this.interpolateValue=$r,this.effectsSequence=[Er.bind(this)],this.addEffect=Ji}function In(t,e,s,a){this.propType="multidimensional";var o,n=e.k.length,d,v,p,x;for(o=0;o<n-1;o+=1)e.k[o].to&&e.k[o].s&&e.k[o+1]&&e.k[o+1].s&&(d=e.k[o].s,v=e.k[o+1].s,p=e.k[o].to,x=e.k[o].ti,(d.length===2&&!(d[0]===v[0]&&d[1]===v[1])&&se.pointOnLine2D(d[0],d[1],v[0],v[1],d[0]+p[0],d[1]+p[1])&&se.pointOnLine2D(d[0],d[1],v[0],v[1],v[0]+x[0],v[1]+x[1])||d.length===3&&!(d[0]===v[0]&&d[1]===v[1]&&d[2]===v[2])&&se.pointOnLine3D(d[0],d[1],d[2],v[0],v[1],v[2],d[0]+p[0],d[1]+p[1],d[2]+p[2])&&se.pointOnLine3D(d[0],d[1],d[2],v[0],v[1],v[2],v[0]+x[0],v[1]+x[1],v[2]+x[2]))&&(e.k[o].to=null,e.k[o].ti=null),d[0]===v[0]&&d[1]===v[1]&&p[0]===0&&p[1]===0&&x[0]===0&&x[1]===0&&(d.length===2||d[2]===v[2]&&p[2]===0&&x[2]===0)&&(e.k[o].to=null,e.k[o].ti=null));this.effectsSequence=[Er.bind(this)],this.data=e,this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=s||1,this.elem=t,this.container=a,this.comp=t.comp,this.getValue=Zi,this.setVValue=Xi,this.interpolateValue=$r,this.frameId=-1;var A=e.k[0].s.length;for(this.v=at("float32",A),this.pv=at("float32",A),o=0;o<A;o+=1)this.v[o]=He,this.pv[o]=He;this._caching={lastFrame:He,lastIndex:0,value:at("float32",A)},this.addEffect=Ji}var W=(function(){function t(s,a,o,n,d){a.sid&&(a=s.globalData.slotManager.getProp(a));var v;if(!a.k.length)v=new Cn(s,a,n,d);else if(typeof a.k[0]=="number")v=new Mn(s,a,n,d);else switch(o){case 0:v=new Fn(s,a,n,d);break;case 1:v=new In(s,a,n,d);break;default:break}return v.effectsSequence.length&&d.addDynamicProperty(v),v}var e={getProp:t};return e})();function $t(){}$t.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,s=this.dynamicProperties.length;for(e=0;e<s;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var We=(function(){function t(){return at("float32",2)}return Ki(8,t)})();function de(){this.c=!1,this._length=0,this._maxLength=8,this.v=ot(this._maxLength),this.o=ot(this._maxLength),this.i=ot(this._maxLength)}de.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var s=0;s<e;)this.v[s]=We.newElement(),this.o[s]=We.newElement(),this.i[s]=We.newElement(),s+=1},de.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},de.prototype.doubleArrayLength=function(){this.v=this.v.concat(ot(this._maxLength)),this.i=this.i.concat(ot(this._maxLength)),this.o=this.o.concat(ot(this._maxLength)),this._maxLength*=2},de.prototype.setXYAt=function(t,e,s,a,o){var n;switch(this._length=Math.max(this._length,a+1),this._length>=this._maxLength&&this.doubleArrayLength(),s){case"v":n=this.v;break;case"i":n=this.i;break;case"o":n=this.o;break;default:n=[];break}(!n[a]||n[a]&&!o)&&(n[a]=We.newElement()),n[a][0]=t,n[a][1]=e},de.prototype.setTripleAt=function(t,e,s,a,o,n,d,v){this.setXYAt(t,e,"v",d,v),this.setXYAt(s,a,"o",d,v),this.setXYAt(o,n,"i",d,v)},de.prototype.reverse=function(){var t=new de;t.setPathData(this.c,this._length);var e=this.v,s=this.o,a=this.i,o=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],a[0][0],a[0][1],s[0][0],s[0][1],0,!1),o=1);var n=this._length-1,d=this._length,v;for(v=o;v<d;v+=1)t.setTripleAt(e[n][0],e[n][1],a[n][0],a[n][1],s[n][0],s[n][1],v,!1),n-=1;return t},de.prototype.length=function(){return this._length};var Tt=(function(){function t(){return new de}function e(o){var n=o._length,d;for(d=0;d<n;d+=1)We.release(o.v[d]),We.release(o.i[d]),We.release(o.o[d]),o.v[d]=null,o.i[d]=null,o.o[d]=null;o._length=0,o.c=!1}function s(o){var n=a.newElement(),d,v=o._length===void 0?o.v.length:o._length;for(n.setLength(v),n.c=o.c,d=0;d<v;d+=1)n.setTripleAt(o.v[d][0],o.v[d][1],o.o[d][0],o.o[d][1],o.i[d][0],o.i[d][1],d);return n}var a=Ki(4,t,e);return a.clone=s,a})();function Ls(){this._length=0,this._maxLength=4,this.shapes=ot(this._maxLength)}Ls.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(ot(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},Ls.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)Tt.release(this.shapes[t]);this._length=0};var ai=(function(){var t={newShapeCollection:o,release:n},e=0,s=4,a=ot(s);function o(){var d;return e?(e-=1,d=a[e]):d=new Ls,d}function n(d){var v,p=d._length;for(v=0;v<p;v+=1)Tt.release(d.shapes[v]);d._length=0,e===s&&(a=wr.double(a),s*=2),a[e]=d,e+=1}return t})(),Qi=(function(){var t=-999999;function e(S,w,u){var y=u.lastIndex,k,M,z,V,B,tt,K,H,st,G=this.keyframes;if(S<G[0].t-this.offsetTime)k=G[0].s[0],z=!0,y=0;else if(S>=G[G.length-1].t-this.offsetTime)k=G[G.length-1].s?G[G.length-1].s[0]:G[G.length-2].e[0],z=!0;else{for(var N=y,b=G.length-1,P=!0,c,f,R;P&&(c=G[N],f=G[N+1],!(f.t-this.offsetTime>S));)N<b-1?N+=1:P=!1;if(R=this.keyframesMetadata[N]||{},z=c.h===1,y=N,!z){if(S>=f.t-this.offsetTime)H=1;else if(S<c.t-this.offsetTime)H=0;else{var F;R.__fnct?F=R.__fnct:(F=wi.getBezierEasing(c.o.x,c.o.y,c.i.x,c.i.y).get,R.__fnct=F),H=F((S-(c.t-this.offsetTime))/(f.t-this.offsetTime-(c.t-this.offsetTime)))}M=f.s?f.s[0]:c.e[0]}k=c.s[0]}for(tt=w._length,K=k.i[0].length,u.lastIndex=y,V=0;V<tt;V+=1)for(B=0;B<K;B+=1)st=z?k.i[V][B]:k.i[V][B]+(M.i[V][B]-k.i[V][B])*H,w.i[V][B]=st,st=z?k.o[V][B]:k.o[V][B]+(M.o[V][B]-k.o[V][B])*H,w.o[V][B]=st,st=z?k.v[V][B]:k.v[V][B]+(M.v[V][B]-k.v[V][B])*H,w.v[V][B]=st}function s(){var S=this.comp.renderedFrame-this.offsetTime,w=this.keyframes[0].t-this.offsetTime,u=this.keyframes[this.keyframes.length-1].t-this.offsetTime,y=this._caching.lastFrame;return y!==t&&(y<w&&S<w||y>u&&S>u)||(this._caching.lastIndex=y<S?this._caching.lastIndex:0,this.interpolateShape(S,this.pv,this._caching)),this._caching.lastFrame=S,this.pv}function a(){this.paths=this.localShapeCollection}function o(S,w){if(S._length!==w._length||S.c!==w.c)return!1;var u,y=S._length;for(u=0;u<y;u+=1)if(S.v[u][0]!==w.v[u][0]||S.v[u][1]!==w.v[u][1]||S.o[u][0]!==w.o[u][0]||S.o[u][1]!==w.o[u][1]||S.i[u][0]!==w.i[u][0]||S.i[u][1]!==w.i[u][1])return!1;return!0}function n(S){o(this.v,S)||(this.v=Tt.clone(S),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function d(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var S;this.kf?S=this.pv:this.data.ks?S=this.data.ks.k:S=this.data.pt.k;var w,u=this.effectsSequence.length;for(w=0;w<u;w+=1)S=this.effectsSequence[w](S);this.setVValue(S),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function v(S,w,u){this.propType="shape",this.comp=S.comp,this.container=S,this.elem=S,this.data=w,this.k=!1,this.kf=!1,this._mdf=!1;var y=u===3?w.pt.k:w.ks.k;this.v=Tt.clone(y),this.pv=Tt.clone(this.v),this.localShapeCollection=ai.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=a,this.effectsSequence=[]}function p(S){this.effectsSequence.push(S),this.container.addDynamicProperty(this)}v.prototype.interpolateShape=e,v.prototype.getValue=d,v.prototype.setVValue=n,v.prototype.addEffect=p;function x(S,w,u){this.propType="shape",this.comp=S.comp,this.elem=S,this.container=S,this.offsetTime=S.data.st,this.keyframes=u===3?w.pt.k:w.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var y=this.keyframes[0].s[0].i.length;this.v=Tt.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,y),this.pv=Tt.clone(this.v),this.localShapeCollection=ai.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=a,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[s.bind(this)]}x.prototype.getValue=d,x.prototype.interpolateShape=e,x.prototype.setVValue=n,x.prototype.addEffect=p;var A=(function(){var S=Z;function w(u,y){this.v=Tt.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=ai.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=y.d,this.elem=u,this.comp=u.comp,this.frameId=-1,this.initDynamicPropertyContainer(u),this.p=W.getProp(u,y.p,1,0,this),this.s=W.getProp(u,y.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return w.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var y=this.p.v[0],k=this.p.v[1],M=this.s.v[0]/2,z=this.s.v[1]/2,V=this.d!==3,B=this.v;B.v[0][0]=y,B.v[0][1]=k-z,B.v[1][0]=V?y+M:y-M,B.v[1][1]=k,B.v[2][0]=y,B.v[2][1]=k+z,B.v[3][0]=V?y-M:y+M,B.v[3][1]=k,B.i[0][0]=V?y-M*S:y+M*S,B.i[0][1]=k-z,B.i[1][0]=V?y+M:y-M,B.i[1][1]=k-z*S,B.i[2][0]=V?y+M*S:y-M*S,B.i[2][1]=k+z,B.i[3][0]=V?y-M:y+M,B.i[3][1]=k+z*S,B.o[0][0]=V?y+M*S:y-M*S,B.o[0][1]=k-z,B.o[1][0]=V?y+M:y-M,B.o[1][1]=k+z*S,B.o[2][0]=V?y-M*S:y+M*S,B.o[2][1]=k+z,B.o[3][0]=V?y-M:y+M,B.o[3][1]=k-z*S}},j([$t],w),w})(),O=(function(){function S(w,u){this.v=Tt.newElement(),this.v.setPathData(!0,0),this.elem=w,this.comp=w.comp,this.data=u,this.frameId=-1,this.d=u.d,this.initDynamicPropertyContainer(w),u.sy===1?(this.ir=W.getProp(w,u.ir,0,0,this),this.is=W.getProp(w,u.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=W.getProp(w,u.pt,0,0,this),this.p=W.getProp(w,u.p,1,0,this),this.r=W.getProp(w,u.r,0,ut,this),this.or=W.getProp(w,u.or,0,0,this),this.os=W.getProp(w,u.os,0,.01,this),this.localShapeCollection=ai.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return S.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var u=Math.floor(this.pt.v)*2,y=Math.PI*2/u,k=!0,M=this.or.v,z=this.ir.v,V=this.os.v,B=this.is.v,tt=2*Math.PI*M/(u*2),K=2*Math.PI*z/(u*2),H,st,G,N,b=-Math.PI/2;b+=this.r.v;var P=this.data.d===3?-1:1;for(this.v._length=0,H=0;H<u;H+=1){st=k?M:z,G=k?V:B,N=k?tt:K;var c=st*Math.cos(b),f=st*Math.sin(b),R=c===0&&f===0?0:f/Math.sqrt(c*c+f*f),F=c===0&&f===0?0:-c/Math.sqrt(c*c+f*f);c+=+this.p.v[0],f+=+this.p.v[1],this.v.setTripleAt(c,f,c-R*N*G*P,f-F*N*G*P,c+R*N*G*P,f+F*N*G*P,H,!0),k=!k,b+=y*P}},convertPolygonToPath:function(){var u=Math.floor(this.pt.v),y=Math.PI*2/u,k=this.or.v,M=this.os.v,z=2*Math.PI*k/(u*4),V,B=-Math.PI*.5,tt=this.data.d===3?-1:1;for(B+=this.r.v,this.v._length=0,V=0;V<u;V+=1){var K=k*Math.cos(B),H=k*Math.sin(B),st=K===0&&H===0?0:H/Math.sqrt(K*K+H*H),G=K===0&&H===0?0:-K/Math.sqrt(K*K+H*H);K+=+this.p.v[0],H+=+this.p.v[1],this.v.setTripleAt(K,H,K-st*z*M*tt,H-G*z*M*tt,K+st*z*M*tt,H+G*z*M*tt,V,!0),B+=y*tt}this.paths.length=0,this.paths[0]=this.v}},j([$t],S),S})(),m=(function(){function S(w,u){this.v=Tt.newElement(),this.v.c=!0,this.localShapeCollection=ai.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=w,this.comp=w.comp,this.frameId=-1,this.d=u.d,this.initDynamicPropertyContainer(w),this.p=W.getProp(w,u.p,1,0,this),this.s=W.getProp(w,u.s,1,0,this),this.r=W.getProp(w,u.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return S.prototype={convertRectToPath:function(){var u=this.p.v[0],y=this.p.v[1],k=this.s.v[0]/2,M=this.s.v[1]/2,z=De(k,M,this.r.v),V=z*(1-Z);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(u+k,y-M+z,u+k,y-M+z,u+k,y-M+V,0,!0),this.v.setTripleAt(u+k,y+M-z,u+k,y+M-V,u+k,y+M-z,1,!0),z!==0?(this.v.setTripleAt(u+k-z,y+M,u+k-z,y+M,u+k-V,y+M,2,!0),this.v.setTripleAt(u-k+z,y+M,u-k+V,y+M,u-k+z,y+M,3,!0),this.v.setTripleAt(u-k,y+M-z,u-k,y+M-z,u-k,y+M-V,4,!0),this.v.setTripleAt(u-k,y-M+z,u-k,y-M+V,u-k,y-M+z,5,!0),this.v.setTripleAt(u-k+z,y-M,u-k+z,y-M,u-k+V,y-M,6,!0),this.v.setTripleAt(u+k-z,y-M,u+k-V,y-M,u+k-z,y-M,7,!0)):(this.v.setTripleAt(u-k,y+M,u-k+V,y+M,u-k,y+M,2),this.v.setTripleAt(u-k,y-M,u-k,y-M+V,u-k,y-M,3))):(this.v.setTripleAt(u+k,y-M+z,u+k,y-M+V,u+k,y-M+z,0,!0),z!==0?(this.v.setTripleAt(u+k-z,y-M,u+k-z,y-M,u+k-V,y-M,1,!0),this.v.setTripleAt(u-k+z,y-M,u-k+V,y-M,u-k+z,y-M,2,!0),this.v.setTripleAt(u-k,y-M+z,u-k,y-M+z,u-k,y-M+V,3,!0),this.v.setTripleAt(u-k,y+M-z,u-k,y+M-V,u-k,y+M-z,4,!0),this.v.setTripleAt(u-k+z,y+M,u-k+z,y+M,u-k+V,y+M,5,!0),this.v.setTripleAt(u+k-z,y+M,u+k-V,y+M,u+k-z,y+M,6,!0),this.v.setTripleAt(u+k,y+M-z,u+k,y+M-z,u+k,y+M-V,7,!0)):(this.v.setTripleAt(u-k,y-M,u-k+V,y-M,u-k,y-M,1,!0),this.v.setTripleAt(u-k,y+M,u-k,y+M-V,u-k,y+M,2,!0),this.v.setTripleAt(u+k,y+M,u+k-V,y+M,u+k,y+M,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:a},j([$t],S),S})();function E(S,w,u){var y;if(u===3||u===4){var k=u===3?w.pt:w.ks,M=k.k;M.length?y=new x(S,w,u):y=new v(S,w,u)}else u===5?y=new m(S,w):u===6?y=new A(S,w):u===7&&(y=new O(S,w));return y.k&&S.addDynamicProperty(y),y}function C(){return v}function T(){return x}var I={};return I.getShapeProp=E,I.getConstructorFunction=C,I.getKeyframedConstructorFunction=T,I})();var Pt=(function(){var t=Math.cos,e=Math.sin,s=Math.tan,a=Math.round;function o(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function n(c){if(c===0)return this;var f=t(c),R=e(c);return this._t(f,-R,0,0,R,f,0,0,0,0,1,0,0,0,0,1)}function d(c){if(c===0)return this;var f=t(c),R=e(c);return this._t(1,0,0,0,0,f,-R,0,0,R,f,0,0,0,0,1)}function v(c){if(c===0)return this;var f=t(c),R=e(c);return this._t(f,0,R,0,0,1,0,0,-R,0,f,0,0,0,0,1)}function p(c){if(c===0)return this;var f=t(c),R=e(c);return this._t(f,-R,0,0,R,f,0,0,0,0,1,0,0,0,0,1)}function x(c,f){return this._t(1,f,c,1,0,0)}function A(c,f){return this.shear(s(c),s(f))}function O(c,f){var R=t(f),F=e(f);return this._t(R,F,0,0,-F,R,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,s(c),1,0,0,0,0,1,0,0,0,0,1)._t(R,-F,0,0,F,R,0,0,0,0,1,0,0,0,0,1)}function m(c,f,R){return!R&&R!==0&&(R=1),c===1&&f===1&&R===1?this:this._t(c,0,0,0,0,f,0,0,0,0,R,0,0,0,0,1)}function E(c,f,R,F,q,Q,et,lt,ht,bt,Vt,ae,Dt,At,Bt,ft){return this.props[0]=c,this.props[1]=f,this.props[2]=R,this.props[3]=F,this.props[4]=q,this.props[5]=Q,this.props[6]=et,this.props[7]=lt,this.props[8]=ht,this.props[9]=bt,this.props[10]=Vt,this.props[11]=ae,this.props[12]=Dt,this.props[13]=At,this.props[14]=Bt,this.props[15]=ft,this}function C(c,f,R){return R=R||0,c!==0||f!==0||R!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,c,f,R,1):this}function T(c,f,R,F,q,Q,et,lt,ht,bt,Vt,ae,Dt,At,Bt,ft){var Y=this.props;if(c===1&&f===0&&R===0&&F===0&&q===0&&Q===1&&et===0&&lt===0&&ht===0&&bt===0&&Vt===1&&ae===0)return Y[12]=Y[12]*c+Y[15]*Dt,Y[13]=Y[13]*Q+Y[15]*At,Y[14]=Y[14]*Vt+Y[15]*Bt,Y[15]*=ft,this._identityCalculated=!1,this;var ue=Y[0],Me=Y[1],me=Y[2],ne=Y[3],ge=Y[4],ve=Y[5],Ut=Y[6],Fe=Y[7],Ie=Y[8],Zt=Y[9],Le=Y[10],Jt=Y[11],Ke=Y[12],os=Y[13],ls=Y[14],hs=Y[15];return Y[0]=ue*c+Me*q+me*ht+ne*Dt,Y[1]=ue*f+Me*Q+me*bt+ne*At,Y[2]=ue*R+Me*et+me*Vt+ne*Bt,Y[3]=ue*F+Me*lt+me*ae+ne*ft,Y[4]=ge*c+ve*q+Ut*ht+Fe*Dt,Y[5]=ge*f+ve*Q+Ut*bt+Fe*At,Y[6]=ge*R+ve*et+Ut*Vt+Fe*Bt,Y[7]=ge*F+ve*lt+Ut*ae+Fe*ft,Y[8]=Ie*c+Zt*q+Le*ht+Jt*Dt,Y[9]=Ie*f+Zt*Q+Le*bt+Jt*At,Y[10]=Ie*R+Zt*et+Le*Vt+Jt*Bt,Y[11]=Ie*F+Zt*lt+Le*ae+Jt*ft,Y[12]=Ke*c+os*q+ls*ht+hs*Dt,Y[13]=Ke*f+os*Q+ls*bt+hs*At,Y[14]=Ke*R+os*et+ls*Vt+hs*Bt,Y[15]=Ke*F+os*lt+ls*ae+hs*ft,this._identityCalculated=!1,this}function I(c){var f=c.props;return this.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15])}function S(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function w(c){for(var f=0;f<16;){if(c.props[f]!==this.props[f])return!1;f+=1}return!0}function u(c){var f;for(f=0;f<16;f+=1)c.props[f]=this.props[f];return c}function y(c){var f;for(f=0;f<16;f+=1)this.props[f]=c[f]}function k(c,f,R){return{x:c*this.props[0]+f*this.props[4]+R*this.props[8]+this.props[12],y:c*this.props[1]+f*this.props[5]+R*this.props[9]+this.props[13],z:c*this.props[2]+f*this.props[6]+R*this.props[10]+this.props[14]}}function M(c,f,R){return c*this.props[0]+f*this.props[4]+R*this.props[8]+this.props[12]}function z(c,f,R){return c*this.props[1]+f*this.props[5]+R*this.props[9]+this.props[13]}function V(c,f,R){return c*this.props[2]+f*this.props[6]+R*this.props[10]+this.props[14]}function B(){var c=this.props[0]*this.props[5]-this.props[1]*this.props[4],f=this.props[5]/c,R=-this.props[1]/c,F=-this.props[4]/c,q=this.props[0]/c,Q=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/c,et=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/c,lt=new Pt;return lt.props[0]=f,lt.props[1]=R,lt.props[4]=F,lt.props[5]=q,lt.props[12]=Q,lt.props[13]=et,lt}function tt(c){var f=this.getInverseMatrix();return f.applyToPointArray(c[0],c[1],c[2]||0)}function K(c){var f,R=c.length,F=[];for(f=0;f<R;f+=1)F[f]=tt(c[f]);return F}function H(c,f,R){var F=at("float32",6);if(this.isIdentity())F[0]=c[0],F[1]=c[1],F[2]=f[0],F[3]=f[1],F[4]=R[0],F[5]=R[1];else{var q=this.props[0],Q=this.props[1],et=this.props[4],lt=this.props[5],ht=this.props[12],bt=this.props[13];F[0]=c[0]*q+c[1]*et+ht,F[1]=c[0]*Q+c[1]*lt+bt,F[2]=f[0]*q+f[1]*et+ht,F[3]=f[0]*Q+f[1]*lt+bt,F[4]=R[0]*q+R[1]*et+ht,F[5]=R[0]*Q+R[1]*lt+bt}return F}function st(c,f,R){var F;return this.isIdentity()?F=[c,f,R]:F=[c*this.props[0]+f*this.props[4]+R*this.props[8]+this.props[12],c*this.props[1]+f*this.props[5]+R*this.props[9]+this.props[13],c*this.props[2]+f*this.props[6]+R*this.props[10]+this.props[14]],F}function G(c,f){if(this.isIdentity())return c+","+f;var R=this.props;return Math.round((c*R[0]+f*R[4]+R[12])*100)/100+","+Math.round((c*R[1]+f*R[5]+R[13])*100)/100}function N(){for(var c=0,f=this.props,R="matrix3d(",F=1e4;c<16;)R+=a(f[c]*F)/F,R+=c===15?")":",",c+=1;return R}function b(c){var f=1e4;return c<1e-6&&c>0||c>-1e-6&&c<0?a(c*f)/f:c}function P(){var c=this.props,f=b(c[0]),R=b(c[1]),F=b(c[4]),q=b(c[5]),Q=b(c[12]),et=b(c[13]);return"matrix("+f+","+R+","+F+","+q+","+Q+","+et+")"}return function(){this.reset=o,this.rotate=n,this.rotateX=d,this.rotateY=v,this.rotateZ=p,this.skew=A,this.skewFromAxis=O,this.shear=x,this.scale=m,this.setTransform=E,this.translate=C,this.transform=T,this.multiply=I,this.applyToPoint=k,this.applyToX=M,this.applyToY=z,this.applyToZ=V,this.applyToPointArray=st,this.applyToTriplePoints=H,this.applyToPointStringified=G,this.toCSS=N,this.to2dCSS=P,this.clone=u,this.cloneFromProps=y,this.equals=w,this.inversePoints=K,this.inversePoint=tt,this.getInverseMatrix=B,this._t=this.transform,this.isIdentity=S,this._identity=!0,this._identityCalculated=!1,this.props=at("float32",16),this.reset()}})();function zs(t){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zs(t)}var dt={},ts="__[STANDALONE]__",Tr="__[ANIMATIONDATA]__",Pr="";function Ln(t){$(t)}function Cr(){ts===!0?yt.searchAnimations(Tr,ts,Pr):yt.searchAnimations()}function zn(t){vn(t)}function On(t){bn(t)}function Rn(t){return ts===!0&&(t.animationData=JSON.parse(Tr)),yt.loadAnimation(t)}function Vn(t){if(typeof t=="string")switch(t){case"high":Gi(200);break;default:case"medium":Gi(50);break;case"low":Gi(10);break}else!isNaN(t)&&t>1&&Gi(t);_i()>=50?St(!1):St(!0)}function Dn(){return typeof navigator<"u"}function Un(t,e){t==="expressions"&&yn(e)}function Nn(t){switch(t){case"propertyFactory":return W;case"shapePropertyFactory":return Qi;case"matrix":return Pt;default:return null}}dt.play=yt.play,dt.pause=yt.pause,dt.setLocationHref=Ln,dt.togglePause=yt.togglePause,dt.setSpeed=yt.setSpeed,dt.setDirection=yt.setDirection,dt.stop=yt.stop,dt.searchAnimations=Cr,dt.registerAnimation=yt.registerAnimation,dt.loadAnimation=Rn,dt.setSubframeRendering=zn,dt.resize=yt.resize,dt.goToAndStop=yt.goToAndStop,dt.destroy=yt.destroy,dt.setQuality=Vn,dt.inBrowser=Dn,dt.installPlugin=Un,dt.freeze=yt.freeze,dt.unfreeze=yt.unfreeze,dt.setVolume=yt.setVolume,dt.mute=yt.mute,dt.unmute=yt.unmute,dt.getRegisteredAnimations=yt.getRegisteredAnimations,dt.useWebWorker=h,dt.setIDPrefix=On,dt.__getFactory=Nn,dt.version="5.13.0";function Bn(){document.readyState==="complete"&&(clearInterval(Wn),Cr())}function jn(t){for(var e=Mr.split("&"),s=0;s<e.length;s+=1){var a=e[s].split("=");if(decodeURIComponent(a[0])==t)return decodeURIComponent(a[1])}return null}var Mr="";if(ts){var Fr=document.getElementsByTagName("script"),Hn=Fr.length-1,Ir=Fr[Hn]||{src:""};Mr=Ir.src?Ir.src.replace(/^[^\?]+\??/,""):"",Pr=jn("renderer")}var Wn=setInterval(Bn,100);try{!((typeof ji>"u"?"undefined":zs(ji))==="object"&&typeof xs<"u")&&!(typeof define=="function"&&define.amd)&&(window.bodymovin=dt)}catch{}var $e=(function(){var t={},e={};t.registerModifier=s,t.getModifier=a;function s(o,n){e[o]||(e[o]=n)}function a(o,n,d){return new e[o](n,d)}return t})();function qt(){}qt.prototype.initModifierProperties=function(){},qt.prototype.addShapeToModifier=function(){},qt.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:ai.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},qt.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=l,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},qt.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},j([$t],qt);function Xt(){}j([qt],Xt),Xt.prototype.initModifierProperties=function(t,e){this.s=W.getProp(t,e.s,0,.01,this),this.e=W.getProp(t,e.e,0,.01,this),this.o=W.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},Xt.prototype.addShapeToModifier=function(t){t.pathsData=[]},Xt.prototype.calculateShapeEdges=function(t,e,s,a,o){var n=[];e<=1?n.push({s:t,e}):t>=1?n.push({s:t-1,e:e-1}):(n.push({s:t,e:1}),n.push({s:0,e:e-1}));var d=[],v,p=n.length,x;for(v=0;v<p;v+=1)if(x=n[v],!(x.e*o<a||x.s*o>a+s)){var A,O;x.s*o<=a?A=0:A=(x.s*o-a)/s,x.e*o>=a+s?O=1:O=(x.e*o-a)/s,d.push([A,O])}return d.length||d.push([0,0]),d},Xt.prototype.releasePathsData=function(t){var e,s=t.length;for(e=0;e<s;e+=1)kr.release(t[e]);return t.length=0,t},Xt.prototype.processShapes=function(t){var e,s;if(this._mdf||t){var a=this.o.v%360/360;if(a<0&&(a+=1),this.s.v>1?e=1+a:this.s.v<0?e=0+a:e=this.s.v+a,this.e.v>1?s=1+a:this.e.v<0?s=0+a:s=this.e.v+a,e>s){var o=e;e=s,s=o}e=Math.round(e*1e4)*1e-4,s=Math.round(s*1e4)*1e-4,this.sValue=e,this.eValue=s}else e=this.sValue,s=this.eValue;var n,d,v=this.shapes.length,p,x,A,O,m,E=0;if(s===e)for(d=0;d<v;d+=1)this.shapes[d].localShapeCollection.releaseShapes(),this.shapes[d].shape._mdf=!0,this.shapes[d].shape.paths=this.shapes[d].localShapeCollection,this._mdf&&(this.shapes[d].pathsData.length=0);else if(s===1&&e===0||s===0&&e===1){if(this._mdf)for(d=0;d<v;d+=1)this.shapes[d].pathsData.length=0,this.shapes[d].shape._mdf=!0}else{var C=[],T,I;for(d=0;d<v;d+=1)if(T=this.shapes[d],!T.shape._mdf&&!this._mdf&&!t&&this.m!==2)T.shape.paths=T.localShapeCollection;else{if(n=T.shape.paths,x=n._length,m=0,!T.shape._mdf&&T.pathsData.length)m=T.totalShapeLength;else{for(A=this.releasePathsData(T.pathsData),p=0;p<x;p+=1)O=se.getSegmentsLength(n.shapes[p]),A.push(O),m+=O.totalLength;T.totalShapeLength=m,T.pathsData=A}E+=m,T.shape._mdf=!0}var S=e,w=s,u=0,y;for(d=v-1;d>=0;d-=1)if(T=this.shapes[d],T.shape._mdf){for(I=T.localShapeCollection,I.releaseShapes(),this.m===2&&v>1?(y=this.calculateShapeEdges(e,s,T.totalShapeLength,u,E),u+=T.totalShapeLength):y=[[S,w]],x=y.length,p=0;p<x;p+=1){S=y[p][0],w=y[p][1],C.length=0,w<=1?C.push({s:T.totalShapeLength*S,e:T.totalShapeLength*w}):S>=1?C.push({s:T.totalShapeLength*(S-1),e:T.totalShapeLength*(w-1)}):(C.push({s:T.totalShapeLength*S,e:T.totalShapeLength}),C.push({s:0,e:T.totalShapeLength*(w-1)}));var k=this.addShapes(T,C[0]);if(C[0].s!==C[0].e){if(C.length>1){var M=T.shape.paths.shapes[T.shape.paths._length-1];if(M.c){var z=k.pop();this.addPaths(k,I),k=this.addShapes(T,C[1],z)}else this.addPaths(k,I),k=this.addShapes(T,C[1])}this.addPaths(k,I)}}T.shape.paths=I}}},Xt.prototype.addPaths=function(t,e){var s,a=t.length;for(s=0;s<a;s+=1)e.addShape(t[s])},Xt.prototype.addSegment=function(t,e,s,a,o,n,d){o.setXYAt(e[0],e[1],"o",n),o.setXYAt(s[0],s[1],"i",n+1),d&&o.setXYAt(t[0],t[1],"v",n),o.setXYAt(a[0],a[1],"v",n+1)},Xt.prototype.addSegmentFromArray=function(t,e,s,a){e.setXYAt(t[1],t[5],"o",s),e.setXYAt(t[2],t[6],"i",s+1),a&&e.setXYAt(t[0],t[4],"v",s),e.setXYAt(t[3],t[7],"v",s+1)},Xt.prototype.addShapes=function(t,e,s){var a=t.pathsData,o=t.shape.paths.shapes,n,d=t.shape.paths._length,v,p,x=0,A,O,m,E,C=[],T,I=!0;for(s?(O=s._length,T=s._length):(s=Tt.newElement(),O=0,T=0),C.push(s),n=0;n<d;n+=1){for(m=a[n].lengths,s.c=o[n].c,p=o[n].c?m.length:m.length+1,v=1;v<p;v+=1)if(A=m[v-1],x+A.addedLength<e.s)x+=A.addedLength,s.c=!1;else if(x>e.e){s.c=!1;break}else e.s<=x&&e.e>=x+A.addedLength?(this.addSegment(o[n].v[v-1],o[n].o[v-1],o[n].i[v],o[n].v[v],s,O,I),I=!1):(E=se.getNewSegment(o[n].v[v-1],o[n].v[v],o[n].o[v-1],o[n].i[v],(e.s-x)/A.addedLength,(e.e-x)/A.addedLength,m[v-1]),this.addSegmentFromArray(E,s,O,I),I=!1,s.c=!1),x+=A.addedLength,O+=1;if(o[n].c&&m.length){if(A=m[v-1],x<=e.e){var S=m[v-1].addedLength;e.s<=x&&e.e>=x+S?(this.addSegment(o[n].v[v-1],o[n].o[v-1],o[n].i[0],o[n].v[0],s,O,I),I=!1):(E=se.getNewSegment(o[n].v[v-1],o[n].v[0],o[n].o[v-1],o[n].i[0],(e.s-x)/S,(e.e-x)/S,m[v-1]),this.addSegmentFromArray(E,s,O,I),I=!1,s.c=!1)}else s.c=!1;x+=A.addedLength,O+=1}if(s._length&&(s.setXYAt(s.v[T][0],s.v[T][1],"i",T),s.setXYAt(s.v[s._length-1][0],s.v[s._length-1][1],"o",s._length-1)),x>e.e)break;n<d-1&&(s=Tt.newElement(),I=!0,C.push(s),O=0)}return C};function xi(){}j([qt],xi),xi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=W.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},xi.prototype.processPath=function(t,e){var s=e/100,a=[0,0],o=t._length,n=0;for(n=0;n<o;n+=1)a[0]+=t.v[n][0],a[1]+=t.v[n][1];a[0]/=o,a[1]/=o;var d=Tt.newElement();d.c=t.c;var v,p,x,A,O,m;for(n=0;n<o;n+=1)v=t.v[n][0]+(a[0]-t.v[n][0])*s,p=t.v[n][1]+(a[1]-t.v[n][1])*s,x=t.o[n][0]+(a[0]-t.o[n][0])*-s,A=t.o[n][1]+(a[1]-t.o[n][1])*-s,O=t.i[n][0]+(a[0]-t.i[n][0])*-s,m=t.i[n][1]+(a[1]-t.i[n][1])*-s,d.setTripleAt(v,p,x,A,O,m,n);return d},xi.prototype.processShapes=function(t){var e,s,a=this.shapes.length,o,n,d=this.amount.v;if(d!==0){var v,p;for(s=0;s<a;s+=1){if(v=this.shapes[s],p=v.localShapeCollection,!(!v.shape._mdf&&!this._mdf&&!t))for(p.releaseShapes(),v.shape._mdf=!0,e=v.shape.paths.shapes,n=v.shape.paths._length,o=0;o<n;o+=1)p.addShape(this.processPath(e[o],d));v.shape.paths=v.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var Os=(function(){var t=[0,0];function e(p){var x=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||x,this.a&&p.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&p.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&p.skewFromAxis(-this.sk.v,this.sa.v),this.r?p.rotate(-this.r.v):p.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?p.translate(this.px.v,this.py.v,-this.pz.v):p.translate(this.px.v,this.py.v,0):p.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function s(p){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||p){var x;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var A,O;if(x=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(A=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/x,0),O=this.p.getValueAtTime(this.p.keyframes[0].t/x,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(A=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/x,0),O=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/x,0)):(A=this.p.pv,O=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/x,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){A=[],O=[];var m=this.px,E=this.py;m._caching.lastFrame+m.offsetTime<=m.keyframes[0].t?(A[0]=m.getValueAtTime((m.keyframes[0].t+.01)/x,0),A[1]=E.getValueAtTime((E.keyframes[0].t+.01)/x,0),O[0]=m.getValueAtTime(m.keyframes[0].t/x,0),O[1]=E.getValueAtTime(E.keyframes[0].t/x,0)):m._caching.lastFrame+m.offsetTime>=m.keyframes[m.keyframes.length-1].t?(A[0]=m.getValueAtTime(m.keyframes[m.keyframes.length-1].t/x,0),A[1]=E.getValueAtTime(E.keyframes[E.keyframes.length-1].t/x,0),O[0]=m.getValueAtTime((m.keyframes[m.keyframes.length-1].t-.01)/x,0),O[1]=E.getValueAtTime((E.keyframes[E.keyframes.length-1].t-.01)/x,0)):(A=[m.pv,E.pv],O[0]=m.getValueAtTime((m._caching.lastFrame+m.offsetTime-.01)/x,m.offsetTime),O[1]=E.getValueAtTime((E._caching.lastFrame+E.offsetTime-.01)/x,E.offsetTime))}else O=t,A=O;this.v.rotate(-Math.atan2(A[1]-O[1],A[0]-O[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function a(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function o(){}function n(p){this._addDynamicProperty(p),this.elem.addDynamicProperty(p),this._isDirty=!0}function d(p,x,A){if(this.elem=p,this.frameId=-1,this.propType="transform",this.data=x,this.v=new Pt,this.pre=new Pt,this.appliedTransformations=0,this.initDynamicPropertyContainer(A||p),x.p&&x.p.s?(this.px=W.getProp(p,x.p.x,0,0,this),this.py=W.getProp(p,x.p.y,0,0,this),x.p.z&&(this.pz=W.getProp(p,x.p.z,0,0,this))):this.p=W.getProp(p,x.p||{k:[0,0,0]},1,0,this),x.rx){if(this.rx=W.getProp(p,x.rx,0,ut,this),this.ry=W.getProp(p,x.ry,0,ut,this),this.rz=W.getProp(p,x.rz,0,ut,this),x.or.k[0].ti){var O,m=x.or.k.length;for(O=0;O<m;O+=1)x.or.k[O].to=null,x.or.k[O].ti=null}this.or=W.getProp(p,x.or,1,ut,this),this.or.sh=!0}else this.r=W.getProp(p,x.r||{k:0},0,ut,this);x.sk&&(this.sk=W.getProp(p,x.sk,0,ut,this),this.sa=W.getProp(p,x.sa,0,ut,this)),this.a=W.getProp(p,x.a||{k:[0,0,0]},1,0,this),this.s=W.getProp(p,x.s||{k:[100,100,100]},1,.01,this),x.o?this.o=W.getProp(p,x.o,0,.01,p):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}d.prototype={applyToMatrix:e,getValue:s,precalculateMatrix:a,autoOrient:o},j([$t],d),d.prototype.addDynamicProperty=n,d.prototype._addDynamicProperty=$t.prototype.addDynamicProperty;function v(p,x,A){return new d(p,x,A)}return{getTransformProperty:v}})();function re(){}j([qt],re),re.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=W.getProp(t,e.c,0,null,this),this.o=W.getProp(t,e.o,0,null,this),this.tr=Os.getTransformProperty(t,e.tr,this),this.so=W.getProp(t,e.tr.so,0,.01,this),this.eo=W.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Pt,this.rMatrix=new Pt,this.sMatrix=new Pt,this.tMatrix=new Pt,this.matrix=new Pt},re.prototype.applyTransforms=function(t,e,s,a,o,n){var d=n?-1:1,v=a.s.v[0]+(1-a.s.v[0])*(1-o),p=a.s.v[1]+(1-a.s.v[1])*(1-o);t.translate(a.p.v[0]*d*o,a.p.v[1]*d*o,a.p.v[2]),e.translate(-a.a.v[0],-a.a.v[1],a.a.v[2]),e.rotate(-a.r.v*d*o),e.translate(a.a.v[0],a.a.v[1],a.a.v[2]),s.translate(-a.a.v[0],-a.a.v[1],a.a.v[2]),s.scale(n?1/v:v,n?1/p:p),s.translate(a.a.v[0],a.a.v[1],a.a.v[2])},re.prototype.init=function(t,e,s,a){for(this.elem=t,this.arr=e,this.pos=s,this.elemsData=a,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[s]);s>0;)s-=1,this._elements.unshift(e[s]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},re.prototype.resetElements=function(t){var e,s=t.length;for(e=0;e<s;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},re.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},re.prototype.changeGroupRender=function(t,e){var s,a=t.length;for(s=0;s<a;s+=1)t[s]._render=e,t[s].ty==="gr"&&this.changeGroupRender(t[s].it,e)},re.prototype.processShapes=function(t){var e,s,a,o,n,d=!1;if(this._mdf||t){var v=Math.ceil(this.c.v);if(this._groups.length<v){for(;this._groups.length<v;){var p={it:this.cloneElements(this._elements),ty:"gr"};p.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,p),this._groups.splice(0,0,p),this._currentCopies+=1}this.elem.reloadShapes(),d=!0}n=0;var x;for(a=0;a<=this._groups.length-1;a+=1){if(x=n<v,this._groups[a]._render=x,this.changeGroupRender(this._groups[a].it,x),!x){var A=this.elemsData[a].it,O=A[A.length-1];O.transform.op.v!==0?(O.transform.op._mdf=!0,O.transform.op.v=0):O.transform.op._mdf=!1}n+=1}this._currentCopies=v;var m=this.o.v,E=m%1,C=m>0?Math.floor(m):Math.ceil(m),T=this.pMatrix.props,I=this.rMatrix.props,S=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var w=0;if(m>0){for(;w<C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),w+=1;E&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,E,!1),w+=E)}else if(m<0){for(;w>C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),w-=1;E&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-E,!0),w-=E)}a=this.data.m===1?0:this._currentCopies-1,o=this.data.m===1?1:-1,n=this._currentCopies;for(var u,y;n;){if(e=this.elemsData[a].it,s=e[e.length-1].transform.mProps.v.props,y=s.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(a/(this._currentCopies-1)),w!==0){for((a!==0&&o===1||a!==this._currentCopies-1&&o===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(I[0],I[1],I[2],I[3],I[4],I[5],I[6],I[7],I[8],I[9],I[10],I[11],I[12],I[13],I[14],I[15]),this.matrix.transform(S[0],S[1],S[2],S[3],S[4],S[5],S[6],S[7],S[8],S[9],S[10],S[11],S[12],S[13],S[14],S[15]),this.matrix.transform(T[0],T[1],T[2],T[3],T[4],T[5],T[6],T[7],T[8],T[9],T[10],T[11],T[12],T[13],T[14],T[15]),u=0;u<y;u+=1)s[u]=this.matrix.props[u];this.matrix.reset()}else for(this.matrix.reset(),u=0;u<y;u+=1)s[u]=this.matrix.props[u];w+=1,n-=1,a+=o}}else for(n=this._currentCopies,a=0,o=1;n;)e=this.elemsData[a].it,s=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,n-=1,a+=o;return d},re.prototype.addShape=function(){};function ki(){}j([qt],ki),ki.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=W.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},ki.prototype.processPath=function(t,e){var s=Tt.newElement();s.c=t.c;var a,o=t._length,n,d,v,p,x,A,O=0,m,E,C,T,I,S;for(a=0;a<o;a+=1)n=t.v[a],v=t.o[a],d=t.i[a],n[0]===v[0]&&n[1]===v[1]&&n[0]===d[0]&&n[1]===d[1]?(a===0||a===o-1)&&!t.c?(s.setTripleAt(n[0],n[1],v[0],v[1],d[0],d[1],O),O+=1):(a===0?p=t.v[o-1]:p=t.v[a-1],x=Math.sqrt(Math.pow(n[0]-p[0],2)+Math.pow(n[1]-p[1],2)),A=x?Math.min(x/2,e)/x:0,I=n[0]+(p[0]-n[0])*A,m=I,S=n[1]-(n[1]-p[1])*A,E=S,C=m-(m-n[0])*Z,T=E-(E-n[1])*Z,s.setTripleAt(m,E,C,T,I,S,O),O+=1,a===o-1?p=t.v[0]:p=t.v[a+1],x=Math.sqrt(Math.pow(n[0]-p[0],2)+Math.pow(n[1]-p[1],2)),A=x?Math.min(x/2,e)/x:0,C=n[0]+(p[0]-n[0])*A,m=C,T=n[1]+(p[1]-n[1])*A,E=T,I=m-(m-n[0])*Z,S=E-(E-n[1])*Z,s.setTripleAt(m,E,C,T,I,S,O),O+=1):(s.setTripleAt(t.v[a][0],t.v[a][1],t.o[a][0],t.o[a][1],t.i[a][0],t.i[a][1],O),O+=1);return s},ki.prototype.processShapes=function(t){var e,s,a=this.shapes.length,o,n,d=this.rd.v;if(d!==0){var v,p;for(s=0;s<a;s+=1){if(v=this.shapes[s],p=v.localShapeCollection,!(!v.shape._mdf&&!this._mdf&&!t))for(p.releaseShapes(),v.shape._mdf=!0,e=v.shape.paths.shapes,n=v.shape.paths._length,o=0;o<n;o+=1)p.addShape(this.processPath(e[o],d));v.shape.paths=v.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function es(t,e){return Math.abs(t-e)*1e5<=Math.min(Math.abs(t),Math.abs(e))}function Rs(t){return Math.abs(t)<=1e-5}function Lr(t,e,s){return t*(1-s)+e*s}function Ae(t,e,s){return[Lr(t[0],e[0],s),Lr(t[1],e[1],s)]}function qn(t,e,s){if(t===0)return[];var a=e*e-4*t*s;if(a<0)return[];var o=-e/(2*t);if(a===0)return[o];var n=Math.sqrt(a)/(2*t);return[o-n,o+n]}function zr(t,e,s,a){return[-t+3*e-3*s+a,3*t-6*e+3*s,-3*t+3*e,t]}function Or(t){return new mt(t,t,t,t,!1)}function mt(t,e,s,a,o){o&&oi(t,e)&&(e=Ae(t,a,1/3)),o&&oi(s,a)&&(s=Ae(t,a,2/3));var n=zr(t[0],e[0],s[0],a[0]),d=zr(t[1],e[1],s[1],a[1]);this.a=[n[0],d[0]],this.b=[n[1],d[1]],this.c=[n[2],d[2]],this.d=[n[3],d[3]],this.points=[t,e,s,a]}mt.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},mt.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},mt.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},mt.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},mt.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(Rs(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,s=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(s<0)return[];var a=Math.sqrt(s);return Rs(a)?a>0&&a<1?[e]:[]:[e-a,e+a].filter(function(o){return o>0&&o<1})},mt.prototype.split=function(t){if(t<=0)return[Or(this.points[0]),this];if(t>=1)return[this,Or(this.points[this.points.length-1])];var e=Ae(this.points[0],this.points[1],t),s=Ae(this.points[1],this.points[2],t),a=Ae(this.points[2],this.points[3],t),o=Ae(e,s,t),n=Ae(s,a,t),d=Ae(o,n,t);return[new mt(this.points[0],e,o,d,!0),new mt(d,n,a,this.points[3],!0)]};function Rr(t,e){var s=t.points[0][e],a=t.points[t.points.length-1][e];if(s>a){var o=a;a=s,s=o}for(var n=qn(3*t.a[e],2*t.b[e],t.c[e]),d=0;d<n.length;d+=1)if(n[d]>0&&n[d]<1){var v=t.point(n[d])[e];v<s?s=v:v>a&&(a=v)}return{min:s,max:a}}mt.prototype.bounds=function(){return{x:Rr(this,0),y:Rr(this,1)}},mt.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}};function is(t,e,s){var a=t.boundingBox();return{cx:a.cx,cy:a.cy,width:a.width,height:a.height,bez:t,t:(e+s)/2,t1:e,t2:s}}function Vr(t){var e=t.bez.split(.5);return[is(e[0],t.t1,t.t),is(e[1],t.t,t.t2)]}function Gn(t,e){return Math.abs(t.cx-e.cx)*2<t.width+e.width&&Math.abs(t.cy-e.cy)*2<t.height+e.height}function Si(t,e,s,a,o,n){if(Gn(t,e)){if(s>=n||t.width<=a&&t.height<=a&&e.width<=a&&e.height<=a){o.push([t.t,e.t]);return}var d=Vr(t),v=Vr(e);Si(d[0],v[0],s+1,a,o,n),Si(d[0],v[1],s+1,a,o,n),Si(d[1],v[0],s+1,a,o,n),Si(d[1],v[1],s+1,a,o,n)}}mt.prototype.intersections=function(t,e,s){e===void 0&&(e=2),s===void 0&&(s=7);var a=[];return Si(is(this,0,1),is(t,0,1),0,e,a,s),a},mt.shapeSegment=function(t,e){var s=(e+1)%t.length();return new mt(t.v[e],t.o[e],t.i[s],t.v[s],!0)},mt.shapeSegmentInverted=function(t,e){var s=(e+1)%t.length();return new mt(t.v[s],t.i[s],t.o[e],t.v[e],!0)};function Vs(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function ss(t,e,s,a){var o=[t[0],t[1],1],n=[e[0],e[1],1],d=[s[0],s[1],1],v=[a[0],a[1],1],p=Vs(Vs(o,n),Vs(d,v));return Rs(p[2])?null:[p[0]/p[2],p[1]/p[2]]}function ni(t,e,s){return[t[0]+Math.cos(e)*s,t[1]-Math.sin(e)*s]}function Ds(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function oi(t,e){return es(t[0],e[0])&&es(t[1],e[1])}function $i(){}j([qt],$i),$i.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=W.getProp(t,e.s,0,null,this),this.frequency=W.getProp(t,e.r,0,null,this),this.pointsType=W.getProp(t,e.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function Dr(t,e,s,a,o,n,d){var v=s-Math.PI/2,p=s+Math.PI/2,x=e[0]+Math.cos(s)*a*o,A=e[1]-Math.sin(s)*a*o;t.setTripleAt(x,A,x+Math.cos(v)*n,A-Math.sin(v)*n,x+Math.cos(p)*d,A-Math.sin(p)*d,t.length())}function Yn(t,e){var s=[e[0]-t[0],e[1]-t[1]],a=-Math.PI*.5,o=[Math.cos(a)*s[0]-Math.sin(a)*s[1],Math.sin(a)*s[0]+Math.cos(a)*s[1]];return o}function Kn(t,e){var s=e===0?t.length()-1:e-1,a=(e+1)%t.length(),o=t.v[s],n=t.v[a],d=Yn(o,n);return Math.atan2(0,1)-Math.atan2(d[1],d[0])}function Ur(t,e,s,a,o,n,d){var v=Kn(e,s),p=e.v[s%e._length],x=e.v[s===0?e._length-1:s-1],A=e.v[(s+1)%e._length],O=n===2?Math.sqrt(Math.pow(p[0]-x[0],2)+Math.pow(p[1]-x[1],2)):0,m=n===2?Math.sqrt(Math.pow(p[0]-A[0],2)+Math.pow(p[1]-A[1],2)):0;Dr(t,e.v[s%e._length],v,d,a,m/((o+1)*2),O/((o+1)*2),n)}function Xn(t,e,s,a,o,n){for(var d=0;d<a;d+=1){var v=(d+1)/(a+1),p=o===2?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,x=e.normalAngle(v),A=e.point(v);Dr(t,A,x,n,s,p/((a+1)*2),p/((a+1)*2),o),n=-n}return n}$i.prototype.processPath=function(t,e,s,a){var o=t._length,n=Tt.newElement();if(n.c=t.c,t.c||(o-=1),o===0)return n;var d=-1,v=mt.shapeSegment(t,0);Ur(n,t,0,e,s,a,d);for(var p=0;p<o;p+=1)d=Xn(n,v,e,s,a,-d),p===o-1&&!t.c?v=null:v=mt.shapeSegment(t,(p+1)%o),Ur(n,t,p+1,e,s,a,d);return n},$i.prototype.processShapes=function(t){var e,s,a=this.shapes.length,o,n,d=this.amplitude.v,v=Math.max(0,Math.round(this.frequency.v)),p=this.pointsType.v;if(d!==0){var x,A;for(s=0;s<a;s+=1){if(x=this.shapes[s],A=x.localShapeCollection,!(!x.shape._mdf&&!this._mdf&&!t))for(A.releaseShapes(),x.shape._mdf=!0,e=x.shape.paths.shapes,n=x.shape.paths._length,o=0;o<n;o+=1)A.addShape(this.processPath(e[o],d,v,p));x.shape.paths=x.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Us(t,e,s){var a=Math.atan2(e[0]-t[0],e[1]-t[1]);return[ni(t,a,s),ni(e,a,s)]}function li(t,e){var s,a,o,n,d,v,p;p=Us(t.points[0],t.points[1],e),s=p[0],a=p[1],p=Us(t.points[1],t.points[2],e),o=p[0],n=p[1],p=Us(t.points[2],t.points[3],e),d=p[0],v=p[1];var x=ss(s,a,o,n);x===null&&(x=a);var A=ss(d,v,o,n);return A===null&&(A=d),new mt(s,x,A,v)}function Nr(t,e,s,a,o){var n=e.points[3],d=s.points[0];if(a===3||oi(n,d))return n;if(a===2){var v=-e.tangentAngle(1),p=-s.tangentAngle(0)+Math.PI,x=ss(n,ni(n,v+Math.PI/2,100),d,ni(d,v+Math.PI/2,100)),A=x?Ds(x,n):Ds(n,d)/2,O=ni(n,v,2*A*Z);return t.setXYAt(O[0],O[1],"o",t.length()-1),O=ni(d,p,2*A*Z),t.setTripleAt(d[0],d[1],d[0],d[1],O[0],O[1],t.length()),d}var m=oi(n,e.points[2])?e.points[0]:e.points[2],E=oi(d,s.points[1])?s.points[3]:s.points[1],C=ss(m,n,d,E);return C&&Ds(C,n)<o?(t.setTripleAt(C[0],C[1],C[0],C[1],C[0],C[1],t.length()),C):n}function Br(t,e){var s=t.intersections(e);return s.length&&es(s[0][0],1)&&s.shift(),s.length?s[0]:null}function jr(t,e){var s=t.slice(),a=e.slice(),o=Br(t[t.length-1],e[0]);return o&&(s[t.length-1]=t[t.length-1].split(o[0])[0],a[0]=e[0].split(o[1])[1]),t.length>1&&e.length>1&&(o=Br(t[0],e[e.length-1]),o)?[[t[0].split(o[0])[0]],[e[e.length-1].split(o[1])[1]]]:[s,a]}function Zn(t){for(var e,s=1;s<t.length;s+=1)e=jr(t[s-1],t[s]),t[s-1]=e[0],t[s]=e[1];return t.length>1&&(e=jr(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function Hr(t,e){var s=t.inflectionPoints(),a,o,n,d;if(s.length===0)return[li(t,e)];if(s.length===1||es(s[1],1))return n=t.split(s[0]),a=n[0],o=n[1],[li(a,e),li(o,e)];n=t.split(s[0]),a=n[0];var v=(s[1]-s[0])/(1-s[0]);return n=n[1].split(v),d=n[0],o=n[1],[li(a,e),li(d,e),li(o,e)]}function Ai(){}j([qt],Ai),Ai.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=W.getProp(t,e.a,0,null,this),this.miterLimit=W.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=this.amount.effectsSequence.length!==0},Ai.prototype.processPath=function(t,e,s,a){var o=Tt.newElement();o.c=t.c;var n=t.length();t.c||(n-=1);var d,v,p,x=[];for(d=0;d<n;d+=1)p=mt.shapeSegment(t,d),x.push(Hr(p,e));if(!t.c)for(d=n-1;d>=0;d-=1)p=mt.shapeSegmentInverted(t,d),x.push(Hr(p,e));x=Zn(x);var A=null,O=null;for(d=0;d<x.length;d+=1){var m=x[d];for(O&&(A=Nr(o,O,m[0],s,a)),O=m[m.length-1],v=0;v<m.length;v+=1)p=m[v],A&&oi(p.points[0],A)?o.setXYAt(p.points[1][0],p.points[1][1],"o",o.length()-1):o.setTripleAt(p.points[0][0],p.points[0][1],p.points[1][0],p.points[1][1],p.points[0][0],p.points[0][1],o.length()),o.setTripleAt(p.points[3][0],p.points[3][1],p.points[3][0],p.points[3][1],p.points[2][0],p.points[2][1],o.length()),A=p.points[3]}return x.length&&Nr(o,O,x[0][0],s,a),o},Ai.prototype.processShapes=function(t){var e,s,a=this.shapes.length,o,n,d=this.amount.v,v=this.miterLimit.v,p=this.lineJoin;if(d!==0){var x,A;for(s=0;s<a;s+=1){if(x=this.shapes[s],A=x.localShapeCollection,!(!x.shape._mdf&&!this._mdf&&!t))for(A.releaseShapes(),x.shape._mdf=!0,e=x.shape.paths.shapes,n=x.shape.paths._length,o=0;o<n;o+=1)A.addShape(this.processPath(e[o],d,p,v));x.shape.paths=x.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Wr(t){for(var e=t.fStyle?t.fStyle.split(" "):[],s="normal",a="normal",o=e.length,n,d=0;d<o;d+=1)switch(n=e[d].toLowerCase(),n){case"italic":a="italic";break;case"bold":s="700";break;case"black":s="900";break;case"medium":s="500";break;case"regular":case"normal":s="400";break;case"light":case"thin":s="200";break;default:break}return{style:a,weight:t.fWeight||s}}var qe=(function(){var t=5e3,e={w:0,size:0,shapes:[],data:{shapes:[]}},s=[];s=s.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var a=127988,o=917631,n=917601,d=917626,v=65039,p=8205,x=127462,A=127487,O=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function m(b){var P=b.split(","),c,f=P.length,R=[];for(c=0;c<f;c+=1)P[c]!=="sans-serif"&&P[c]!=="monospace"&&R.push(P[c]);return R.join(",")}function E(b,P){var c=U("span");c.setAttribute("aria-hidden",!0),c.style.fontFamily=P;var f=U("span");f.innerText="giItT1WQy@!-/#",c.style.position="absolute",c.style.left="-10000px",c.style.top="-10000px",c.style.fontSize="300px",c.style.fontVariant="normal",c.style.fontStyle="normal",c.style.fontWeight="normal",c.style.letterSpacing="0",c.appendChild(f),document.body.appendChild(c);var R=f.offsetWidth;return f.style.fontFamily=m(b)+", "+P,{node:f,w:R,parent:c}}function C(){var b,P=this.fonts.length,c,f,R=P;for(b=0;b<P;b+=1)this.fonts[b].loaded?R-=1:this.fonts[b].fOrigin==="n"||this.fonts[b].origin===0?this.fonts[b].loaded=!0:(c=this.fonts[b].monoCase.node,f=this.fonts[b].monoCase.w,c.offsetWidth!==f?(R-=1,this.fonts[b].loaded=!0):(c=this.fonts[b].sansCase.node,f=this.fonts[b].sansCase.w,c.offsetWidth!==f&&(R-=1,this.fonts[b].loaded=!0)),this.fonts[b].loaded&&(this.fonts[b].sansCase.parent.parentNode.removeChild(this.fonts[b].sansCase.parent),this.fonts[b].monoCase.parent.parentNode.removeChild(this.fonts[b].monoCase.parent)));R!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function T(b,P){var c=document.body&&P?"svg":"canvas",f,R=Wr(b);if(c==="svg"){var F=it("text");F.style.fontSize="100px",F.setAttribute("font-family",b.fFamily),F.setAttribute("font-style",R.style),F.setAttribute("font-weight",R.weight),F.textContent="1",b.fClass?(F.style.fontFamily="inherit",F.setAttribute("class",b.fClass)):F.style.fontFamily=b.fFamily,P.appendChild(F),f=F}else{var q=new OffscreenCanvas(500,500).getContext("2d");q.font=R.style+" "+R.weight+" 100px "+b.fFamily,f=q}function Q(et){return c==="svg"?(f.textContent=et,f.getComputedTextLength()):f.measureText(et).width}return{measureText:Q}}function I(b,P){if(!b){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=b.list;return}if(!document.body){this.isLoaded=!0,b.list.forEach(function(Vt){Vt.helper=T(Vt),Vt.cache={}}),this.fonts=b.list;return}var c=b.list,f,R=c.length,F=R;for(f=0;f<R;f+=1){var q=!0,Q,et;if(c[f].loaded=!1,c[f].monoCase=E(c[f].fFamily,"monospace"),c[f].sansCase=E(c[f].fFamily,"sans-serif"),!c[f].fPath)c[f].loaded=!0,F-=1;else if(c[f].fOrigin==="p"||c[f].origin===3){if(Q=document.querySelectorAll('style[f-forigin="p"][f-family="'+c[f].fFamily+'"], style[f-origin="3"][f-family="'+c[f].fFamily+'"]'),Q.length>0&&(q=!1),q){var lt=U("style");lt.setAttribute("f-forigin",c[f].fOrigin),lt.setAttribute("f-origin",c[f].origin),lt.setAttribute("f-family",c[f].fFamily),lt.type="text/css",lt.innerText="@font-face {font-family: "+c[f].fFamily+"; font-style: normal; src: url('"+c[f].fPath+"');}",P.appendChild(lt)}}else if(c[f].fOrigin==="g"||c[f].origin===1){for(Q=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),et=0;et<Q.length;et+=1)Q[et].href.indexOf(c[f].fPath)!==-1&&(q=!1);if(q){var ht=U("link");ht.setAttribute("f-forigin",c[f].fOrigin),ht.setAttribute("f-origin",c[f].origin),ht.type="text/css",ht.rel="stylesheet",ht.href=c[f].fPath,document.body.appendChild(ht)}}else if(c[f].fOrigin==="t"||c[f].origin===2){for(Q=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),et=0;et<Q.length;et+=1)c[f].fPath===Q[et].src&&(q=!1);if(q){var bt=U("link");bt.setAttribute("f-forigin",c[f].fOrigin),bt.setAttribute("f-origin",c[f].origin),bt.setAttribute("rel","stylesheet"),bt.setAttribute("href",c[f].fPath),P.appendChild(bt)}}c[f].helper=T(c[f],P),c[f].cache={},this.fonts.push(c[f])}F===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function S(b){if(b){this.chars||(this.chars=[]);var P,c=b.length,f,R=this.chars.length,F;for(P=0;P<c;P+=1){for(f=0,F=!1;f<R;)this.chars[f].style===b[P].style&&this.chars[f].fFamily===b[P].fFamily&&this.chars[f].ch===b[P].ch&&(F=!0),f+=1;F||(this.chars.push(b[P]),R+=1)}}}function w(b,P,c){for(var f=0,R=this.chars.length;f<R;){if(this.chars[f].ch===b&&this.chars[f].style===P&&this.chars[f].fFamily===c)return this.chars[f];f+=1}return(typeof b=="string"&&b.charCodeAt(0)!==13||!b)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",b,P,c)),e}function u(b,P,c){var f=this.getFontByName(P),R=b;if(!f.cache[R]){var F=f.helper;if(b===" "){var q=F.measureText("|"+b+"|"),Q=F.measureText("||");f.cache[R]=(q-Q)/100}else f.cache[R]=F.measureText(b)/100}return f.cache[R]*c}function y(b){for(var P=0,c=this.fonts.length;P<c;){if(this.fonts[P].fName===b)return this.fonts[P];P+=1}return this.fonts[0]}function k(b){var P=0,c=b.charCodeAt(0);if(c>=55296&&c<=56319){var f=b.charCodeAt(1);f>=56320&&f<=57343&&(P=(c-55296)*1024+f-56320+65536)}return P}function M(b,P){var c=b.toString(16)+P.toString(16);return O.indexOf(c)!==-1}function z(b){return b===p}function V(b){return b===v}function B(b){var P=k(b);return P>=x&&P<=A}function tt(b){return B(b.substr(0,2))&&B(b.substr(2,2))}function K(b){return s.indexOf(b)!==-1}function H(b,P){var c=k(b.substr(P,2));if(c!==a)return!1;var f=0;for(P+=2;f<5;){if(c=k(b.substr(P,2)),c<n||c>d)return!1;f+=1,P+=2}return k(b.substr(P,2))===o}function st(){this.isLoaded=!0}var G=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};G.isModifier=M,G.isZeroWidthJoiner=z,G.isFlagEmoji=tt,G.isRegionalCode=B,G.isCombinedCharacter=K,G.isRegionalFlag=H,G.isVariationSelector=V,G.BLACK_FLAG_CODE_POINT=a;var N={addChars:S,addFonts:I,getCharData:w,getFontByName:y,measureText:u,checkLoadedFonts:C,setIsLoaded:st};return G.prototype=N,G})();function qr(t){this.animationData=t}qr.prototype.getProp=function(t){return this.animationData.slots&&this.animationData.slots[t.sid]?Object.assign(t,this.animationData.slots[t.sid].p):t};function Jn(t){return new qr(t)}function rs(){}rs.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,s=this.renderableComponents.length;for(e=0;e<s;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var Ns=(function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}})();function Qn(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function to(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function eo(t,e,s){this.p=W.getProp(e,t.v,1,0,s)}function io(t,e,s){this.p=W.getProp(e,t.v,1,0,s)}function so(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function ro(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function ao(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function no(){this.p={}}function Gr(t,e){var s=t.ef||[];this.effectElements=[];var a,o=s.length,n;for(a=0;a<o;a+=1)n=new Ei(s[a],e),this.effectElements.push(n)}function Ei(t,e){this.init(t,e)}j([$t],Ei),Ei.prototype.getValue=Ei.prototype.iterateDynamicProperties,Ei.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var s,a=this.data.ef.length,o,n=this.data.ef;for(s=0;s<a;s+=1){switch(o=null,n[s].ty){case 0:o=new Qn(n[s],e,this);break;case 1:o=new to(n[s],e,this);break;case 2:o=new eo(n[s],e,this);break;case 3:o=new io(n[s],e,this);break;case 4:case 7:o=new ao(n[s],e,this);break;case 10:o=new so(n[s],e,this);break;case 11:o=new ro(n[s],e,this);break;case 5:o=new Gr(n[s],e,this);break;default:o=new no(n[s],e,this);break}o&&this.effectElements.push(o)}};function Ee(){}Ee.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,s=this.data.masksProperties.length;e<s;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){var e=yr();if(e){var s=e("layer"),a=e("effects"),o=e("shape"),n=e("text"),d=e("comp");this.layerInterface=s(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var v=a.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(v),this.data.ty===0||this.data.xt?this.compInterface=d(this):this.data.ty===4?(this.layerInterface.shapeInterface=o(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=n(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var e=Ns(this.data.bm),s=this.baseElement||this.layerElement;s.style["mix-blend-mode"]=e},initBaseData:function(e,s,a){this.globalData=s,this.comp=a,this.data=e,this.layerId=Ot(),this.data.sr||(this.data.sr=1),this.effectsManager=new Gr(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function Te(){}Te.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,s){var a,o=this.dynamicProperties.length;for(a=0;a<o;a+=1)(s||this._isParent&&this.dynamicProperties[a].propType==="transform")&&(this.dynamicProperties[a].getValue(),this.dynamicProperties[a]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function Pe(t,e,s){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,s)}Pe.prototype.prepareFrame=function(){},j([rs,Ee,Te],Pe),Pe.prototype.getBaseElement=function(){return null},Pe.prototype.renderFrame=function(){},Pe.prototype.destroy=function(){},Pe.prototype.initExpressions=function(){var t=yr();if(t){var e=t("footage");this.layerInterface=e(this)}},Pe.prototype.getFootageData=function(){return this.footageData};function Rt(t,e,s){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,s),this._isPlaying=!1,this._canPlay=!1;var a=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(a),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?W.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=W.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}Rt.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var s=this._volume*this._volumeMultiplier;this._previousVolume!==s&&(this._previousVolume=s,this.audio.volume(s))},j([rs,Ee,Te],Rt),Rt.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},Rt.prototype.show=function(){},Rt.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},Rt.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},Rt.prototype.resume=function(){this._canPlay=!0},Rt.prototype.setRate=function(t){this.audio.rate(t)},Rt.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},Rt.prototype.getBaseElement=function(){return null},Rt.prototype.destroy=function(){},Rt.prototype.sourceRectAtTime=function(){},Rt.prototype.initExpressions=function(){};function Ct(){}Ct.prototype.checkLayers=function(t){var e,s=this.layers.length,a;for(this.completeLayers=!0,e=s-1;e>=0;e-=1)this.elements[e]||(a=this.layers[e],a.ip-a.st<=t-this.layers[e].st&&a.op-a.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},Ct.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},Ct.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Ct.prototype.createAudio=function(t){return new Rt(t,this.globalData,this)},Ct.prototype.createFootage=function(t){return new Pe(t,this.globalData,this)},Ct.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},Ct.prototype.includeLayers=function(t){this.completeLayers=!1;var e,s=t.length,a,o=this.layers.length;for(e=0;e<s;e+=1)for(a=0;a<o;){if(this.layers[a].id===t[e].id){this.layers[a]=t[e];break}a+=1}},Ct.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},Ct.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Ct.prototype.buildElementParenting=function(t,e,s){for(var a=this.elements,o=this.layers,n=0,d=o.length;n<d;)o[n].ind==e&&(!a[n]||a[n]===!0?(this.buildItem(n),this.addPendingElement(t)):(s.push(a[n]),a[n].setAsParent(),o[n].parent!==void 0?this.buildElementParenting(t,o[n].parent,s):t.setHierarchy(s))),n+=1},Ct.prototype.addPendingElement=function(t){this.pendingElements.push(t)},Ct.prototype.searchExtraCompositions=function(t){var e,s=t.length;for(e=0;e<s;e+=1)if(t[e].xt){var a=this.createComp(t[e]);a.initExpressions(),this.globalData.projectInterface.registerComposition(a)}},Ct.prototype.getElementById=function(t){var e,s=this.elements.length;for(e=0;e<s;e+=1)if(this.elements[e].data.ind===t)return this.elements[e];return null},Ct.prototype.getElementByPath=function(t){var e=t.shift(),s;if(typeof e=="number")s=this.elements[e];else{var a,o=this.elements.length;for(a=0;a<o;a+=1)if(this.elements[a].data.nm===e){s=this.elements[a];break}}return t.length===0?s:s.getElementByPath(t)},Ct.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new qe,this.globalData.slotManager=Jn(t),this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};var oo={TRANSFORM_EFFECT:"transformEFfect"};function hi(){}hi.prototype={initTransform:function(){var e=new Pt;this.finalTransform={mProp:this.data.ks?Os.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:e,localMat:e,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,s=this.finalTransform.mat,a=0,o=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;a<o;){if(this.hierarchy[a].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}a+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),a=0;a<o;a+=1)s.multiply(this.hierarchy[a].finalTransform.mProp.v)}(!this.localTransforms||this.finalTransform._matMdf)&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var e=0,s=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;e<s;)this.localTransforms[e]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[e]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),e+=1;if(this.finalTransform._localMatMdf){var a=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(a),e=1;e<s;e+=1){var o=this.localTransforms[e].matrix;a.multiply(o)}a.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var n=this.finalTransform.localOpacity;for(e=0;e<s;e+=1)n*=this.localTransforms[e].opacity*.01;this.finalTransform.localOpacity=n}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var e=this.renderableEffectsManager.getEffects(oo.TRANSFORM_EFFECT);if(e.length){this.localTransforms=[],this.finalTransform.localMat=new Pt;var s=0,a=e.length;for(s=0;s<a;s+=1)this.localTransforms.push(e[s])}}},globalToLocal:function(e){var s=[];s.push(this.finalTransform);for(var a=!0,o=this.comp;a;)o.finalTransform?(o.data.hasMask&&s.splice(0,0,o.finalTransform),o=o.comp):a=!1;var n,d=s.length,v;for(n=0;n<d;n+=1)v=s[n].mat.applyToPointArray(0,0,0),e=[e[0]-v[0],e[1]-v[1],0];return e},mHelper:new Pt};function Ge(t,e,s){this.data=t,this.element=e,this.globalData=s,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var a=this.globalData.defs,o,n=this.masksProperties?this.masksProperties.length:0;this.viewData=ot(n),this.solidPath="";var d,v=this.masksProperties,p=0,x=[],A,O,m=Ot(),E,C,T,I,S="clipPath",w="clip-path";for(o=0;o<n;o+=1)if((v[o].mode!=="a"&&v[o].mode!=="n"||v[o].inv||v[o].o.k!==100||v[o].o.x)&&(S="mask",w="mask"),(v[o].mode==="s"||v[o].mode==="i")&&p===0?(E=it("rect"),E.setAttribute("fill","#ffffff"),E.setAttribute("width",this.element.comp.data.w||0),E.setAttribute("height",this.element.comp.data.h||0),x.push(E)):E=null,d=it("path"),v[o].mode==="n")this.viewData[o]={op:W.getProp(this.element,v[o].o,0,.01,this.element),prop:Qi.getShapeProp(this.element,v[o],3),elem:d,lastPath:""},a.appendChild(d);else{p+=1,d.setAttribute("fill",v[o].mode==="s"?"#000000":"#ffffff"),d.setAttribute("clip-rule","nonzero");var u;if(v[o].x.k!==0?(S="mask",w="mask",I=W.getProp(this.element,v[o].x,0,null,this.element),u=Ot(),C=it("filter"),C.setAttribute("id",u),T=it("feMorphology"),T.setAttribute("operator","erode"),T.setAttribute("in","SourceGraphic"),T.setAttribute("radius","0"),C.appendChild(T),a.appendChild(C),d.setAttribute("stroke",v[o].mode==="s"?"#000000":"#ffffff")):(T=null,I=null),this.storedData[o]={elem:d,x:I,expan:T,lastPath:"",lastOperator:"",filterId:u,lastRadius:0},v[o].mode==="i"){O=x.length;var y=it("g");for(A=0;A<O;A+=1)y.appendChild(x[A]);var k=it("mask");k.setAttribute("mask-type","alpha"),k.setAttribute("id",m+"_"+p),k.appendChild(d),a.appendChild(k),y.setAttribute("mask","url("+D()+"#"+m+"_"+p+")"),x.length=0,x.push(y)}else x.push(d);v[o].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[o]={elem:d,lastPath:"",op:W.getProp(this.element,v[o].o,0,.01,this.element),prop:Qi.getShapeProp(this.element,v[o],3),invRect:E},this.viewData[o].prop.k||this.drawPath(v[o],this.viewData[o].prop.v,this.viewData[o])}for(this.maskElement=it(S),n=x.length,o=0;o<n;o+=1)this.maskElement.appendChild(x[o]);p>0&&(this.maskElement.setAttribute("id",m),this.element.maskedElement.setAttribute(w,"url("+D()+"#"+m+")"),a.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}Ge.prototype.getMaskProperty=function(t){return this.viewData[t].prop},Ge.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,s,a=this.masksProperties.length;for(s=0;s<a;s+=1)if((this.viewData[s].prop._mdf||t)&&this.drawPath(this.masksProperties[s],this.viewData[s].prop.v,this.viewData[s]),(this.viewData[s].op._mdf||t)&&this.viewData[s].elem.setAttribute("fill-opacity",this.viewData[s].op.v),this.masksProperties[s].mode!=="n"&&(this.viewData[s].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[s].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[s].x&&(this.storedData[s].x._mdf||t))){var o=this.storedData[s].expan;this.storedData[s].x.v<0?(this.storedData[s].lastOperator!=="erode"&&(this.storedData[s].lastOperator="erode",this.storedData[s].elem.setAttribute("filter","url("+D()+"#"+this.storedData[s].filterId+")")),o.setAttribute("radius",-this.storedData[s].x.v)):(this.storedData[s].lastOperator!=="dilate"&&(this.storedData[s].lastOperator="dilate",this.storedData[s].elem.setAttribute("filter",null)),this.storedData[s].elem.setAttribute("stroke-width",this.storedData[s].x.v*2))}},Ge.prototype.getMaskelement=function(){return this.maskElement},Ge.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},Ge.prototype.drawPath=function(t,e,s){var a=" M"+e.v[0][0]+","+e.v[0][1],o,n;for(n=e._length,o=1;o<n;o+=1)a+=" C"+e.o[o-1][0]+","+e.o[o-1][1]+" "+e.i[o][0]+","+e.i[o][1]+" "+e.v[o][0]+","+e.v[o][1];if(e.c&&n>1&&(a+=" C"+e.o[o-1][0]+","+e.o[o-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),s.lastPath!==a){var d="";s.elem&&(e.c&&(d=t.inv?this.solidPath+a:a),s.elem.setAttribute("d",d)),s.lastPath=a}},Ge.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var Ti=(function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=s;function e(a,o){var n=it("filter");return n.setAttribute("id",a),o!==!0&&(n.setAttribute("filterUnits","objectBoundingBox"),n.setAttribute("x","0%"),n.setAttribute("y","0%"),n.setAttribute("width","100%"),n.setAttribute("height","100%")),n}function s(){var a=it("feColorMatrix");return a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),a}return t})(),Yr=(function(){var t={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),/firefox/i.test(navigator.userAgent)&&(t.svgLumaHidden=!1),t})(),as={},Kr="filter_result_";function Bs(t){var e,s="SourceGraphic",a=t.data.ef?t.data.ef.length:0,o=Ot(),n=Ti.createFilter(o,!0),d=0;this.filters=[];var v;for(e=0;e<a;e+=1){v=null;var p=t.data.ef[e].ty;if(as[p]){var x=as[p].effect;v=new x(n,t.effectsManager.effectElements[e],t,Kr+d,s),s=Kr+d,as[p].countsAsEffect&&(d+=1)}v&&this.filters.push(v)}d&&(t.globalData.defs.appendChild(n),t.layerElement.setAttribute("filter","url("+D()+"#"+o+")")),this.filters.length&&t.addRenderableComponent(this)}Bs.prototype.renderFrame=function(t){var e,s=this.filters.length;for(e=0;e<s;e+=1)this.filters[e].renderFrame(t)},Bs.prototype.getEffects=function(t){var e,s=this.filters.length,a=[];for(e=0;e<s;e+=1)this.filters[e].type===t&&a.push(this.filters[e]);return a};function gl(t,e,s){as[t]={effect:e,countsAsEffect:s}}function Pi(){}Pi.prototype={initRendererElement:function(){this.layerElement=it("g")},createContainerElements:function(){this.matteElement=it("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null;if(this.data.td){this.matteMasks={};var s=it("g");s.setAttribute("id",this.layerId),s.appendChild(this.layerElement),e=s,this.globalData.defs.appendChild(s)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var a=it("clipPath"),o=it("path");o.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var n=Ot();if(a.setAttribute("id",n),a.appendChild(o),this.globalData.defs.appendChild(a),this.checkMasks()){var d=it("g");d.setAttribute("clip-path","url("+D()+"#"+n+")"),d.appendChild(this.layerElement),this.transformedElement=d,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+D()+"#"+n+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new Ge(this.data,this,this.globalData),this.renderableEffectsManager=new Bs(this),this.searchEffectTransforms()},getMatte:function(e){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[e]){var s=this.layerId+"_"+e,a,o,n,d;if(e===1||e===3){var v=it("mask");v.setAttribute("id",s),v.setAttribute("mask-type",e===3?"luminance":"alpha"),n=it("use"),n.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),v.appendChild(n),this.globalData.defs.appendChild(v),!Yr.maskType&&e===1&&(v.setAttribute("mask-type","luminance"),a=Ot(),o=Ti.createFilter(a),this.globalData.defs.appendChild(o),o.appendChild(Ti.createAlphaToLuminanceFilter()),d=it("g"),d.appendChild(n),v.appendChild(d),d.setAttribute("filter","url("+D()+"#"+a+")"))}else if(e===2){var p=it("mask");p.setAttribute("id",s),p.setAttribute("mask-type","alpha");var x=it("g");p.appendChild(x),a=Ot(),o=Ti.createFilter(a);var A=it("feComponentTransfer");A.setAttribute("in","SourceGraphic"),o.appendChild(A);var O=it("feFuncA");O.setAttribute("type","table"),O.setAttribute("tableValues","1.0 0.0"),A.appendChild(O),this.globalData.defs.appendChild(o);var m=it("rect");m.setAttribute("width",this.comp.data.w),m.setAttribute("height",this.comp.data.h),m.setAttribute("x","0"),m.setAttribute("y","0"),m.setAttribute("fill","#ffffff"),m.setAttribute("opacity","0"),x.setAttribute("filter","url("+D()+"#"+a+")"),x.appendChild(m),n=it("use"),n.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),x.appendChild(n),Yr.maskType||(p.setAttribute("mask-type","luminance"),o.appendChild(Ti.createAlphaToLuminanceFilter()),d=it("g"),x.appendChild(m),d.appendChild(this.layerElement),x.appendChild(d)),this.globalData.defs.appendChild(p)}this.matteMasks[e]=s}return this.matteMasks[e]},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+D()+"#"+e+")")}};function ci(){}ci.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function Ci(){}(function(){var t={initElement:function(s,a,o){this.initFrame(),this.initBaseData(s,a,o),this.initTransform(s,a,o),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var s=this.baseElement||this.layerElement;s.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var s=this.baseElement||this.layerElement;s.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(s){this._mdf=!1,this.prepareRenderableFrame(s),this.prepareProperties(s,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};j([rs,X(t)],Ci)})();function Mi(t,e,s){this.assetData=e.getAssetData(t.refId),this.assetData&&this.assetData.sid&&(this.assetData=e.slotManager.getProp(this.assetData)),this.initElement(t,e,s),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}j([Ee,hi,Pi,ci,Te,Ci],Mi),Mi.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=it("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},Mi.prototype.sourceRectAtTime=function(){return this.sourceRect};function lo(t,e){this.elem=t,this.pos=e}function Xr(){}Xr.prototype={addShapeToModifiers:function(e){var s,a=this.shapeModifiers.length;for(s=0;s<a;s+=1)this.shapeModifiers[s].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var s=0,a=this.shapeModifiers.length;s<a;)if(this.shapeModifiers[s].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,s=this.shapes.length;for(e=0;e<s;e+=1)this.shapes[e].sh.reset();s=this.shapeModifiers.length;var a;for(e=s-1;e>=0&&(a=this.shapeModifiers[e].processShapes(this._isFirstFrame),!a);e-=1);}},searchProcessedElement:function(e){for(var s=this.processedElements,a=0,o=s.length;a<o;){if(s[a].elem===e)return s[a].pos;a+=1}return 0},addProcessedElement:function(e,s){for(var a=this.processedElements,o=a.length;o;)if(o-=1,a[o].elem===e){a[o].pos=s;return}a.push(new lo(e,s))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};var Zr={1:"butt",2:"round",3:"square"},Jr={1:"miter",2:"round",3:"bevel"};function Qr(t,e,s){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=s,this.lvl=e,this._isAnimated=!!s.k;for(var a=0,o=t.length;a<o;){if(t[a].mProps.dynamicProperties.length){this._isAnimated=!0;break}a+=1}}Qr.prototype.setAsAnimated=function(){this._isAnimated=!0};function ta(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=it("path"),this.msElem=null}ta.prototype.reset=function(){this.d="",this._mdf=!1};function ns(t,e,s,a){this.elem=t,this.frameId=-1,this.dataProps=ot(e.length),this.renderer=s,this.k=!1,this.dashStr="",this.dashArray=at("float32",e.length?e.length-1:0),this.dashoffset=at("float32",1),this.initDynamicPropertyContainer(a);var o,n=e.length||0,d;for(o=0;o<n;o+=1)d=W.getProp(t,e[o].v,0,0,this),this.k=d.k||this.k,this.dataProps[o]={n:e[o].n,p:d};this.k||this.getValue(!0),this._isAnimated=this.k}ns.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,s=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<s;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},j([$t],ns);function ea(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=W.getProp(t,e.o,0,.01,this),this.w=W.getProp(t,e.w,0,null,this),this.d=new ns(t,e.d||{},"svg",this),this.c=W.getProp(t,e.c,1,255,this),this.style=s,this._isAnimated=!!this._isAnimated}j([$t],ea);function ia(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=W.getProp(t,e.o,0,.01,this),this.c=W.getProp(t,e.c,1,255,this),this.style=s}j([$t],ia);function sa(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=s}j([$t],sa);function Fi(t,e,s){this.data=e,this.c=at("uint8c",e.p*4);var a=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=at("float32",a),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=a,this.initDynamicPropertyContainer(s),this.prop=W.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}Fi.prototype.comparePoints=function(t,e){for(var s=0,a=this.o.length/2,o;s<a;){if(o=Math.abs(t[s*4]-t[e*4+s*2]),o>.01)return!1;s+=1}return!0},Fi.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},Fi.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,s=this.data.p*4,a,o;for(e=0;e<s;e+=1)a=e%4===0?100:255,o=Math.round(this.prop.v[e]*a),this.c[e]!==o&&(this.c[e]=o,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=this.data.p*4;e<s;e+=1)a=e%2===0?100:1,o=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==o&&(this.o[e-this.data.p*4]=o,this._omdf=!t);this._mdf=!t}},j([$t],Fi);function di(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,s)}di.prototype.initGradientData=function(t,e,s){this.o=W.getProp(t,e.o,0,.01,this),this.s=W.getProp(t,e.s,1,null,this),this.e=W.getProp(t,e.e,1,null,this),this.h=W.getProp(t,e.h||{k:0},0,.01,this),this.a=W.getProp(t,e.a||{k:0},0,ut,this),this.g=new Fi(t,e.g,this),this.style=s,this.stops=[],this.setGradientData(s.pElem,e),this.setGradientOpacity(e,s),this._isAnimated=!!this._isAnimated},di.prototype.setGradientData=function(t,e){var s=Ot(),a=it(e.t===1?"linearGradient":"radialGradient");a.setAttribute("id",s),a.setAttribute("spreadMethod","pad"),a.setAttribute("gradientUnits","userSpaceOnUse");var o=[],n,d,v;for(v=e.g.p*4,d=0;d<v;d+=4)n=it("stop"),a.appendChild(n),o.push(n);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+D()+"#"+s+")"),this.gf=a,this.cst=o},di.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var s,a,o,n=it("mask"),d=it("path");n.appendChild(d);var v=Ot(),p=Ot();n.setAttribute("id",p);var x=it(t.t===1?"linearGradient":"radialGradient");x.setAttribute("id",v),x.setAttribute("spreadMethod","pad"),x.setAttribute("gradientUnits","userSpaceOnUse"),o=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var A=this.stops;for(a=t.g.p*4;a<o;a+=2)s=it("stop"),s.setAttribute("stop-color","rgb(255,255,255)"),x.appendChild(s),A.push(s);d.setAttribute(t.ty==="gf"?"fill":"stroke","url("+D()+"#"+v+")"),t.ty==="gs"&&(d.setAttribute("stroke-linecap",Zr[t.lc||2]),d.setAttribute("stroke-linejoin",Jr[t.lj||2]),t.lj===1&&d.setAttribute("stroke-miterlimit",t.ml)),this.of=x,this.ms=n,this.ost=A,this.maskId=p,e.msElem=d}},j([$t],di);function ra(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=W.getProp(t,e.w,0,null,this),this.d=new ns(t,e.d||{},"svg",this),this.initGradientData(t,e,s),this._isAnimated=!!this._isAnimated}j([di,$t],ra);function ho(){this.it=[],this.prevViewData=[],this.gr=it("g")}function co(t,e,s){this.transform={mProps:t,op:e,container:s},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var aa=function(e,s,a,o){if(s===0)return"";var n=e.o,d=e.i,v=e.v,p,x=" M"+o.applyToPointStringified(v[0][0],v[0][1]);for(p=1;p<s;p+=1)x+=" C"+o.applyToPointStringified(n[p-1][0],n[p-1][1])+" "+o.applyToPointStringified(d[p][0],d[p][1])+" "+o.applyToPointStringified(v[p][0],v[p][1]);return a&&s&&(x+=" C"+o.applyToPointStringified(n[p-1][0],n[p-1][1])+" "+o.applyToPointStringified(d[0][0],d[0][1])+" "+o.applyToPointStringified(v[0][0],v[0][1]),x+="z"),x},po=(function(){var t=new Pt,e=new Pt,s={createRenderFunction:a};function a(O){switch(O.ty){case"fl":return v;case"gf":return x;case"gs":return p;case"st":return A;case"sh":case"el":case"rc":case"sr":return d;case"tr":return o;case"no":return n;default:return null}}function o(O,m,E){(E||m.transform.op._mdf)&&m.transform.container.setAttribute("opacity",m.transform.op.v),(E||m.transform.mProps._mdf)&&m.transform.container.setAttribute("transform",m.transform.mProps.v.to2dCSS())}function n(){}function d(O,m,E){var C,T,I,S,w,u,y=m.styles.length,k=m.lvl,M,z,V,B;for(u=0;u<y;u+=1){if(S=m.sh._mdf||E,m.styles[u].lvl<k){for(z=e.reset(),V=k-m.styles[u].lvl,B=m.transformers.length-1;!S&&V>0;)S=m.transformers[B].mProps._mdf||S,V-=1,B-=1;if(S)for(V=k-m.styles[u].lvl,B=m.transformers.length-1;V>0;)z.multiply(m.transformers[B].mProps.v),V-=1,B-=1}else z=t;if(M=m.sh.paths,T=M._length,S){for(I="",C=0;C<T;C+=1)w=M.shapes[C],w&&w._length&&(I+=aa(w,w._length,w.c,z));m.caches[u]=I}else I=m.caches[u];m.styles[u].d+=O.hd===!0?"":I,m.styles[u]._mdf=S||m.styles[u]._mdf}}function v(O,m,E){var C=m.style;(m.c._mdf||E)&&C.pElem.setAttribute("fill","rgb("+ie(m.c.v[0])+","+ie(m.c.v[1])+","+ie(m.c.v[2])+")"),(m.o._mdf||E)&&C.pElem.setAttribute("fill-opacity",m.o.v)}function p(O,m,E){x(O,m,E),A(O,m,E)}function x(O,m,E){var C=m.gf,T=m.g._hasOpacity,I=m.s.v,S=m.e.v;if(m.o._mdf||E){var w=O.ty==="gf"?"fill-opacity":"stroke-opacity";m.style.pElem.setAttribute(w,m.o.v)}if(m.s._mdf||E){var u=O.t===1?"x1":"cx",y=u==="x1"?"y1":"cy";C.setAttribute(u,I[0]),C.setAttribute(y,I[1]),T&&!m.g._collapsable&&(m.of.setAttribute(u,I[0]),m.of.setAttribute(y,I[1]))}var k,M,z,V;if(m.g._cmdf||E){k=m.cst;var B=m.g.c;for(z=k.length,M=0;M<z;M+=1)V=k[M],V.setAttribute("offset",B[M*4]+"%"),V.setAttribute("stop-color","rgb("+B[M*4+1]+","+B[M*4+2]+","+B[M*4+3]+")")}if(T&&(m.g._omdf||E)){var tt=m.g.o;for(m.g._collapsable?k=m.cst:k=m.ost,z=k.length,M=0;M<z;M+=1)V=k[M],m.g._collapsable||V.setAttribute("offset",tt[M*2]+"%"),V.setAttribute("stop-opacity",tt[M*2+1])}if(O.t===1)(m.e._mdf||E)&&(C.setAttribute("x2",S[0]),C.setAttribute("y2",S[1]),T&&!m.g._collapsable&&(m.of.setAttribute("x2",S[0]),m.of.setAttribute("y2",S[1])));else{var K;if((m.s._mdf||m.e._mdf||E)&&(K=Math.sqrt(Math.pow(I[0]-S[0],2)+Math.pow(I[1]-S[1],2)),C.setAttribute("r",K),T&&!m.g._collapsable&&m.of.setAttribute("r",K)),m.s._mdf||m.e._mdf||m.h._mdf||m.a._mdf||E){K||(K=Math.sqrt(Math.pow(I[0]-S[0],2)+Math.pow(I[1]-S[1],2)));var H=Math.atan2(S[1]-I[1],S[0]-I[0]),st=m.h.v;st>=1?st=.99:st<=-1&&(st=-.99);var G=K*st,N=Math.cos(H+m.a.v)*G+I[0],b=Math.sin(H+m.a.v)*G+I[1];C.setAttribute("fx",N),C.setAttribute("fy",b),T&&!m.g._collapsable&&(m.of.setAttribute("fx",N),m.of.setAttribute("fy",b))}}}function A(O,m,E){var C=m.style,T=m.d;T&&(T._mdf||E)&&T.dashStr&&(C.pElem.setAttribute("stroke-dasharray",T.dashStr),C.pElem.setAttribute("stroke-dashoffset",T.dashoffset[0])),m.c&&(m.c._mdf||E)&&C.pElem.setAttribute("stroke","rgb("+ie(m.c.v[0])+","+ie(m.c.v[1])+","+ie(m.c.v[2])+")"),(m.o._mdf||E)&&C.pElem.setAttribute("stroke-opacity",m.o.v),(m.w._mdf||E)&&(C.pElem.setAttribute("stroke-width",m.w.v),C.msElem&&C.msElem.setAttribute("stroke-width",m.w.v))}return s})();function _t(t,e,s){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,s),this.prevViewData=[]}j([Ee,hi,Pi,Xr,ci,Te,Ci],_t),_t.prototype.initSecondaryElement=function(){},_t.prototype.identityMatrix=new Pt,_t.prototype.buildExpressionInterface=function(){},_t.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},_t.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,s,a,o=this.stylesList.length,n,d=[],v=!1;for(a=0;a<o;a+=1){for(n=this.stylesList[a],v=!1,d.length=0,t=0;t<e;t+=1)s=this.shapes[t],s.styles.indexOf(n)!==-1&&(d.push(s),v=s._isAnimated||v);d.length>1&&v&&this.setShapesAsAnimated(d)}},_t.prototype.setShapesAsAnimated=function(t){var e,s=t.length;for(e=0;e<s;e+=1)t[e].setAsAnimated()},_t.prototype.createStyleElement=function(t,e){var s,a=new ta(t,e),o=a.pElem;if(t.ty==="st")s=new ea(this,t,a);else if(t.ty==="fl")s=new ia(this,t,a);else if(t.ty==="gf"||t.ty==="gs"){var n=t.ty==="gf"?di:ra;s=new n(this,t,a),this.globalData.defs.appendChild(s.gf),s.maskId&&(this.globalData.defs.appendChild(s.ms),this.globalData.defs.appendChild(s.of),o.setAttribute("mask","url("+D()+"#"+s.maskId+")"))}else t.ty==="no"&&(s=new sa(this,t,a));return(t.ty==="st"||t.ty==="gs")&&(o.setAttribute("stroke-linecap",Zr[t.lc||2]),o.setAttribute("stroke-linejoin",Jr[t.lj||2]),o.setAttribute("fill-opacity","0"),t.lj===1&&o.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&o.setAttribute("fill-rule","evenodd"),t.ln&&o.setAttribute("id",t.ln),t.cl&&o.setAttribute("class",t.cl),t.bm&&(o.style["mix-blend-mode"]=Ns(t.bm)),this.stylesList.push(a),this.addToAnimatedContents(t,s),s},_t.prototype.createGroupElement=function(t){var e=new ho;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=Ns(t.bm)),e},_t.prototype.createTransformElement=function(t,e){var s=Os.getTransformProperty(this,t,this),a=new co(s,s.o,e);return this.addToAnimatedContents(t,a),a},_t.prototype.createShapeElement=function(t,e,s){var a=4;t.ty==="rc"?a=5:t.ty==="el"?a=6:t.ty==="sr"&&(a=7);var o=Qi.getShapeProp(this,t,a,this),n=new Qr(e,s,o);return this.shapes.push(n),this.addShapeToModifiers(n),this.addToAnimatedContents(t,n),n},_t.prototype.addToAnimatedContents=function(t,e){for(var s=0,a=this.animatedContents.length;s<a;){if(this.animatedContents[s].element===e)return;s+=1}this.animatedContents.push({fn:po.createRenderFunction(t),element:e,data:t})},_t.prototype.setElementStyles=function(t){var e=t.styles,s,a=this.stylesList.length;for(s=0;s<a;s+=1)e.indexOf(this.stylesList[s])===-1&&!this.stylesList[s].closed&&e.push(this.stylesList[s])},_t.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},_t.prototype.searchShapes=function(t,e,s,a,o,n,d){var v=[].concat(n),p,x=t.length-1,A,O,m=[],E=[],C,T,I;for(p=x;p>=0;p-=1){if(I=this.searchProcessedElement(t[p]),I?e[p]=s[I-1]:t[p]._render=d,t[p].ty==="fl"||t[p].ty==="st"||t[p].ty==="gf"||t[p].ty==="gs"||t[p].ty==="no")I?e[p].style.closed=t[p].hd:e[p]=this.createStyleElement(t[p],o),t[p]._render&&e[p].style.pElem.parentNode!==a&&a.appendChild(e[p].style.pElem),m.push(e[p].style);else if(t[p].ty==="gr"){if(!I)e[p]=this.createGroupElement(t[p]);else for(O=e[p].it.length,A=0;A<O;A+=1)e[p].prevViewData[A]=e[p].it[A];this.searchShapes(t[p].it,e[p].it,e[p].prevViewData,e[p].gr,o+1,v,d),t[p]._render&&e[p].gr.parentNode!==a&&a.appendChild(e[p].gr)}else t[p].ty==="tr"?(I||(e[p]=this.createTransformElement(t[p],a)),C=e[p].transform,v.push(C)):t[p].ty==="sh"||t[p].ty==="rc"||t[p].ty==="el"||t[p].ty==="sr"?(I||(e[p]=this.createShapeElement(t[p],v,o)),this.setElementStyles(e[p])):t[p].ty==="tm"||t[p].ty==="rd"||t[p].ty==="ms"||t[p].ty==="pb"||t[p].ty==="zz"||t[p].ty==="op"?(I?(T=e[p],T.closed=!1):(T=$e.getModifier(t[p].ty),T.init(this,t[p]),e[p]=T,this.shapeModifiers.push(T)),E.push(T)):t[p].ty==="rp"&&(I?(T=e[p],T.closed=!0):(T=$e.getModifier(t[p].ty),e[p]=T,T.init(this,t,p,e),this.shapeModifiers.push(T),d=!1),E.push(T));this.addProcessedElement(t[p],p+1)}for(x=m.length,p=0;p<x;p+=1)m[p].closed=!0;for(x=E.length,p=0;p<x;p+=1)E[p].closed=!0},_t.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},_t.prototype.renderShape=function(){var t,e=this.animatedContents.length,s;for(t=0;t<e;t+=1)s=this.animatedContents[t],(this._isFirstFrame||s.element._isAnimated)&&s.data!==!0&&s.fn(s.data,s.element,this._isFirstFrame)},_t.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function js(t,e,s,a,o,n){this.o=t,this.sw=e,this.sc=s,this.fc=a,this.m=o,this.p=n,this._mdf={o:!0,sw:!!e,sc:!!s,fc:!!a,m:!0,p:!0}}js.prototype.update=function(t,e,s,a,o,n){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var d=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,d=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,d=!0),this.sc!==s&&(this.sc=s,this._mdf.sc=!0,d=!0),this.fc!==a&&(this.fc=a,this._mdf.fc=!0,d=!0),this.m!==o&&(this.m=o,this._mdf.m=!0,d=!0),n.length&&(this.p[0]!==n[0]||this.p[1]!==n[1]||this.p[4]!==n[4]||this.p[5]!==n[5]||this.p[12]!==n[12]||this.p[13]!==n[13])&&(this.p=n,this._mdf.p=!0,d=!0),d};function zt(t,e){this._frameId=l,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,e.d&&e.d.sid&&(e.d=t.globalData.slotManager.getProp(e.d)),this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}zt.prototype.defaultBoxWidth=[0,0],zt.prototype.copyData=function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},zt.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},zt.prototype.searchProperty=function(){return this.searchKeyframes()},zt.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},zt.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},zt.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,s=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var a,o=this.effectsSequence.length,n=t||this.data.d.k[this.keysIndex].s;for(a=0;a<o;a+=1)s!==this.keysIndex?n=this.effectsSequence[a](n,n.t):n=this.effectsSequence[a](this.currentData,n.t);e!==n&&this.setCurrentData(n),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},zt.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,s=0,a=t.length;s<=a-1&&!(s===a-1||t[s+1].t>e);)s+=1;return this.keysIndex!==s&&(this.keysIndex=s),this.data.d.k[this.keysIndex].s},zt.prototype.buildFinalText=function(t){for(var e=[],s=0,a=t.length,o,n,d=!1,v=!1,p="";s<a;)d=v,v=!1,o=t.charCodeAt(s),p=t.charAt(s),qe.isCombinedCharacter(o)?d=!0:o>=55296&&o<=56319?qe.isRegionalFlag(t,s)?p=t.substr(s,14):(n=t.charCodeAt(s+1),n>=56320&&n<=57343&&(qe.isModifier(o,n)?(p=t.substr(s,2),d=!0):qe.isFlagEmoji(t.substr(s,4))?p=t.substr(s,4):p=t.substr(s,2))):o>56319?(n=t.charCodeAt(s+1),qe.isVariationSelector(o)&&(d=!0)):qe.isZeroWidthJoiner(o)&&(d=!0,v=!0),d?(e[e.length-1]+=p,d=!1):e.push(p),s+=p.length;return e},zt.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,s=this.data,a=[],o,n,d,v=0,p,x=s.m.g,A=0,O=0,m=0,E=[],C=0,T=0,I,S,w=e.getFontByName(t.f),u,y=0,k=Wr(w);t.fWeight=k.weight,t.fStyle=k.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),n=t.finalText.length,t.finalLineHeight=t.lh;var M=t.tr/1e3*t.finalSize,z;if(t.sz)for(var V=!0,B=t.sz[0],tt=t.sz[1],K,H;V;){H=this.buildFinalText(t.t),K=0,C=0,n=H.length,M=t.tr/1e3*t.finalSize;var st=-1;for(o=0;o<n;o+=1)z=H[o].charCodeAt(0),d=!1,H[o]===" "?st=o:(z===13||z===3)&&(C=0,d=!0,K+=t.finalLineHeight||t.finalSize*1.2),e.chars?(u=e.getCharData(H[o],w.fStyle,w.fFamily),y=d?0:u.w*t.finalSize/100):y=e.measureText(H[o],t.f,t.finalSize),C+y>B&&H[o]!==" "?(st===-1?n+=1:o=st,K+=t.finalLineHeight||t.finalSize*1.2,H.splice(o,st===o?1:0,"\r"),st=-1,C=0):(C+=y,C+=M);K+=w.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&tt<K?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=H,n=t.finalText.length,V=!1)}C=-M,y=0;var G=0,N;for(o=0;o<n;o+=1)if(d=!1,N=t.finalText[o],z=N.charCodeAt(0),z===13||z===3?(G=0,E.push(C),T=C>T?C:T,C=-2*M,p="",d=!0,m+=1):p=N,e.chars?(u=e.getCharData(N,w.fStyle,e.getFontByName(t.f).fFamily),y=d?0:u.w*t.finalSize/100):y=e.measureText(p,t.f,t.finalSize),N===" "?G+=y+M:(C+=y+M+G,G=0),a.push({l:y,an:y,add:A,n:d,anIndexes:[],val:p,line:m,animatorJustifyOffset:0}),x==2){if(A+=y,p===""||p===" "||o===n-1){for((p===""||p===" ")&&(A-=y);O<=o;)a[O].an=A,a[O].ind=v,a[O].extra=y,O+=1;v+=1,A=0}}else if(x==3){if(A+=y,p===""||o===n-1){for(p===""&&(A-=y);O<=o;)a[O].an=A,a[O].ind=v,a[O].extra=y,O+=1;A=0,v+=1}}else a[v].ind=v,a[v].extra=0,v+=1;if(t.l=a,T=C>T?C:T,E.push(C),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=T,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=E;var b=s.a,P,c;S=b.length;var f,R,F=[];for(I=0;I<S;I+=1){for(P=b[I],P.a.sc&&(t.strokeColorAnim=!0),P.a.sw&&(t.strokeWidthAnim=!0),(P.a.fc||P.a.fh||P.a.fs||P.a.fb)&&(t.fillColorAnim=!0),R=0,f=P.s.b,o=0;o<n;o+=1)c=a[o],c.anIndexes[I]=R,(f==1&&c.val!==""||f==2&&c.val!==""&&c.val!==" "||f==3&&(c.n||c.val==" "||o==n-1)||f==4&&(c.n||o==n-1))&&(P.s.rn===1&&F.push(R),R+=1);s.a[I].s.totalChars=R;var q=-1,Q;if(P.s.rn===1)for(o=0;o<n;o+=1)c=a[o],q!=c.anIndexes[I]&&(q=c.anIndexes[I],Q=F.splice(Math.floor(Math.random()*F.length),1)[0]),c.anIndexes[I]=Q}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=w.ascent*t.finalSize/100},zt.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var s=this.copyData({},this.data.d.k[e].s);s=this.copyData(s,t),this.data.d.k[e].s=s,this.recalculate(e),this.setCurrentData(s),this.elem.addDynamicProperty(this)},zt.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},zt.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},zt.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var fo=(function(){var t=Math.max,e=Math.min,s=Math.floor;function a(n,d){this._currentTextLength=-1,this.k=!1,this.data=d,this.elem=n,this.comp=n.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(n),this.s=W.getProp(n,d.s||{k:0},0,0,this),"e"in d?this.e=W.getProp(n,d.e,0,0,this):this.e={v:100},this.o=W.getProp(n,d.o||{k:0},0,0,this),this.xe=W.getProp(n,d.xe||{k:0},0,0,this),this.ne=W.getProp(n,d.ne||{k:0},0,0,this),this.sm=W.getProp(n,d.sm||{k:100},0,0,this),this.a=W.getProp(n,d.a,0,.01,this),this.dynamicProperties.length||this.getValue()}a.prototype={getMult:function(d){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var v=0,p=0,x=1,A=1;this.ne.v>0?v=this.ne.v/100:p=-this.ne.v/100,this.xe.v>0?x=1-this.xe.v/100:A=1+this.xe.v/100;var O=wi.getBezierEasing(v,p,x,A).get,m=0,E=this.finalS,C=this.finalE,T=this.data.sh;if(T===2)C===E?m=d>=C?1:0:m=t(0,e(.5/(C-E)+(d-E)/(C-E),1)),m=O(m);else if(T===3)C===E?m=d>=C?0:1:m=1-t(0,e(.5/(C-E)+(d-E)/(C-E),1)),m=O(m);else if(T===4)C===E?m=0:(m=t(0,e(.5/(C-E)+(d-E)/(C-E),1)),m<.5?m*=2:m=1-2*(m-.5)),m=O(m);else if(T===5){if(C===E)m=0;else{var I=C-E;d=e(t(0,d+.5-E),C-E);var S=-I/2+d,w=I/2;m=Math.sqrt(1-S*S/(w*w))}m=O(m)}else T===6?(C===E?m=0:(d=e(t(0,d+.5-E),C-E),m=(1+Math.cos(Math.PI+Math.PI*2*d/(C-E)))/2),m=O(m)):(d>=s(E)&&(d-E<0?m=t(0,e(e(C,1)-(E-d),1)):m=t(0,e(C-d,1))),m=O(m));if(this.sm.v!==100){var u=this.sm.v*.01;u===0&&(u=1e-8);var y=.5-u*.5;m<y?m=0:(m=(m-y)/u,m>1&&(m=1))}return m*this.a.v},getValue:function(d){this.iterateDynamicProperties(),this._mdf=d||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,d&&this.data.r===2&&(this.e.v=this._currentTextLength);var v=this.data.r===2?1:100/this.data.totalChars,p=this.o.v/v,x=this.s.v/v+p,A=this.e.v/v+p;if(x>A){var O=x;x=A,A=O}this.finalS=x,this.finalE=A}},j([$t],a);function o(n,d,v){return new a(n,d,v)}return{getTextSelectorProp:o}})();function uo(t,e,s){var a={propType:!1},o=W.getProp,n=e.a;this.a={r:n.r?o(t,n.r,0,ut,s):a,rx:n.rx?o(t,n.rx,0,ut,s):a,ry:n.ry?o(t,n.ry,0,ut,s):a,sk:n.sk?o(t,n.sk,0,ut,s):a,sa:n.sa?o(t,n.sa,0,ut,s):a,s:n.s?o(t,n.s,1,.01,s):a,a:n.a?o(t,n.a,1,0,s):a,o:n.o?o(t,n.o,0,.01,s):a,p:n.p?o(t,n.p,1,0,s):a,sw:n.sw?o(t,n.sw,0,0,s):a,sc:n.sc?o(t,n.sc,1,0,s):a,fc:n.fc?o(t,n.fc,1,0,s):a,fh:n.fh?o(t,n.fh,0,0,s):a,fs:n.fs?o(t,n.fs,0,.01,s):a,fb:n.fb?o(t,n.fb,0,.01,s):a,t:n.t?o(t,n.t,0,0,s):a},this.s=fo.getTextSelectorProp(t,e.s,s),this.s.t=e.s.t}function Ye(t,e,s){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=s,this._animatorsData=ot(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(s)}Ye.prototype.searchProperties=function(){var t,e=this._textData.a.length,s,a=W.getProp;for(t=0;t<e;t+=1)s=this._textData.a[t],this._animatorsData[t]=new uo(this._elem,s,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:a(this._elem,this._textData.p.a,0,0,this),f:a(this._elem,this._textData.p.f,0,0,this),l:a(this._elem,this._textData.p.l,0,0,this),r:a(this._elem,this._textData.p.r,0,0,this),p:a(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=a(this._elem,this._textData.m.a,1,0,this)},Ye.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var s=this._moreOptions.alignment.v,a=this._animatorsData,o=this._textData,n=this.mHelper,d=this._renderType,v=this.renderedLetters.length,p,x,A,O,m=t.l,E,C,T,I,S,w,u,y,k,M,z,V,B,tt,K;if(this._hasMaskedPath){if(K=this._pathData.m,!this._pathData.n||this._pathData._mdf){var H=K.v;this._pathData.r.v&&(H=H.reverse()),E={tLength:0,segments:[]},O=H._length-1;var st;for(V=0,A=0;A<O;A+=1)st=se.buildBezierData(H.v[A],H.v[A+1],[H.o[A][0]-H.v[A][0],H.o[A][1]-H.v[A][1]],[H.i[A+1][0]-H.v[A+1][0],H.i[A+1][1]-H.v[A+1][1]]),E.tLength+=st.segmentLength,E.segments.push(st),V+=st.segmentLength;A=O,K.v.c&&(st=se.buildBezierData(H.v[A],H.v[0],[H.o[A][0]-H.v[A][0],H.o[A][1]-H.v[A][1]],[H.i[0][0]-H.v[0][0],H.i[0][1]-H.v[0][1]]),E.tLength+=st.segmentLength,E.segments.push(st),V+=st.segmentLength),this._pathData.pi=E}if(E=this._pathData.pi,C=this._pathData.f.v,u=0,w=1,I=0,S=!0,M=E.segments,C<0&&K.v.c)for(E.tLength<Math.abs(C)&&(C=-Math.abs(C)%E.tLength),u=M.length-1,k=M[u].points,w=k.length-1;C<0;)C+=k[w].partialLength,w-=1,w<0&&(u-=1,k=M[u].points,w=k.length-1);k=M[u].points,y=k[w-1],T=k[w],z=T.partialLength}O=m.length,p=0,x=0;var G=t.finalSize*1.2*.714,N=!0,b,P,c,f,R;f=a.length;var F,q=-1,Q,et,lt,ht=C,bt=u,Vt=w,ae=-1,Dt,At,Bt,ft,Y,ue,Me,me,ne="",ge=this.defaultPropsArray,ve;if(t.j===2||t.j===1){var Ut=0,Fe=0,Ie=t.j===2?-.5:-1,Zt=0,Le=!0;for(A=0;A<O;A+=1)if(m[A].n){for(Ut&&(Ut+=Fe);Zt<A;)m[Zt].animatorJustifyOffset=Ut,Zt+=1;Ut=0,Le=!0}else{for(c=0;c<f;c+=1)b=a[c].a,b.t.propType&&(Le&&t.j===2&&(Fe+=b.t.v*Ie),P=a[c].s,F=P.getMult(m[A].anIndexes[c],o.a[c].s.totalChars),F.length?Ut+=b.t.v*F[0]*Ie:Ut+=b.t.v*F*Ie);Le=!1}for(Ut&&(Ut+=Fe);Zt<A;)m[Zt].animatorJustifyOffset=Ut,Zt+=1}for(A=0;A<O;A+=1){if(n.reset(),Dt=1,m[A].n)p=0,x+=t.yOffset,x+=N?1:0,C=ht,N=!1,this._hasMaskedPath&&(u=bt,w=Vt,k=M[u].points,y=k[w-1],T=k[w],z=T.partialLength,I=0),ne="",me="",ue="",ve="",ge=this.defaultPropsArray;else{if(this._hasMaskedPath){if(ae!==m[A].line){switch(t.j){case 1:C+=V-t.lineWidths[m[A].line];break;case 2:C+=(V-t.lineWidths[m[A].line])/2;break;default:break}ae=m[A].line}q!==m[A].ind&&(m[q]&&(C+=m[q].extra),C+=m[A].an/2,q=m[A].ind),C+=s[0]*m[A].an*.005;var Jt=0;for(c=0;c<f;c+=1)b=a[c].a,b.p.propType&&(P=a[c].s,F=P.getMult(m[A].anIndexes[c],o.a[c].s.totalChars),F.length?Jt+=b.p.v[0]*F[0]:Jt+=b.p.v[0]*F),b.a.propType&&(P=a[c].s,F=P.getMult(m[A].anIndexes[c],o.a[c].s.totalChars),F.length?Jt+=b.a.v[0]*F[0]:Jt+=b.a.v[0]*F);for(S=!0,this._pathData.a.v&&(C=m[0].an*.5+(V-this._pathData.f.v-m[0].an*.5-m[m.length-1].an*.5)*q/(O-1),C+=this._pathData.f.v);S;)I+z>=C+Jt||!k?(B=(C+Jt-I)/T.partialLength,et=y.point[0]+(T.point[0]-y.point[0])*B,lt=y.point[1]+(T.point[1]-y.point[1])*B,n.translate(-s[0]*m[A].an*.005,-(s[1]*G)*.01),S=!1):k&&(I+=T.partialLength,w+=1,w>=k.length&&(w=0,u+=1,M[u]?k=M[u].points:K.v.c?(w=0,u=0,k=M[u].points):(I-=T.partialLength,k=null)),k&&(y=T,T=k[w],z=T.partialLength));Q=m[A].an/2-m[A].add,n.translate(-Q,0,0)}else Q=m[A].an/2-m[A].add,n.translate(-Q,0,0),n.translate(-s[0]*m[A].an*.005,-s[1]*G*.01,0);for(c=0;c<f;c+=1)b=a[c].a,b.t.propType&&(P=a[c].s,F=P.getMult(m[A].anIndexes[c],o.a[c].s.totalChars),(p!==0||t.j!==0)&&(this._hasMaskedPath?F.length?C+=b.t.v*F[0]:C+=b.t.v*F:F.length?p+=b.t.v*F[0]:p+=b.t.v*F));for(t.strokeWidthAnim&&(Bt=t.sw||0),t.strokeColorAnim&&(t.sc?At=[t.sc[0],t.sc[1],t.sc[2]]:At=[0,0,0]),t.fillColorAnim&&t.fc&&(ft=[t.fc[0],t.fc[1],t.fc[2]]),c=0;c<f;c+=1)b=a[c].a,b.a.propType&&(P=a[c].s,F=P.getMult(m[A].anIndexes[c],o.a[c].s.totalChars),F.length?n.translate(-b.a.v[0]*F[0],-b.a.v[1]*F[1],b.a.v[2]*F[2]):n.translate(-b.a.v[0]*F,-b.a.v[1]*F,b.a.v[2]*F));for(c=0;c<f;c+=1)b=a[c].a,b.s.propType&&(P=a[c].s,F=P.getMult(m[A].anIndexes[c],o.a[c].s.totalChars),F.length?n.scale(1+(b.s.v[0]-1)*F[0],1+(b.s.v[1]-1)*F[1],1):n.scale(1+(b.s.v[0]-1)*F,1+(b.s.v[1]-1)*F,1));for(c=0;c<f;c+=1){if(b=a[c].a,P=a[c].s,F=P.getMult(m[A].anIndexes[c],o.a[c].s.totalChars),b.sk.propType&&(F.length?n.skewFromAxis(-b.sk.v*F[0],b.sa.v*F[1]):n.skewFromAxis(-b.sk.v*F,b.sa.v*F)),b.r.propType&&(F.length?n.rotateZ(-b.r.v*F[2]):n.rotateZ(-b.r.v*F)),b.ry.propType&&(F.length?n.rotateY(b.ry.v*F[1]):n.rotateY(b.ry.v*F)),b.rx.propType&&(F.length?n.rotateX(b.rx.v*F[0]):n.rotateX(b.rx.v*F)),b.o.propType&&(F.length?Dt+=(b.o.v*F[0]-Dt)*F[0]:Dt+=(b.o.v*F-Dt)*F),t.strokeWidthAnim&&b.sw.propType&&(F.length?Bt+=b.sw.v*F[0]:Bt+=b.sw.v*F),t.strokeColorAnim&&b.sc.propType)for(Y=0;Y<3;Y+=1)F.length?At[Y]+=(b.sc.v[Y]-At[Y])*F[0]:At[Y]+=(b.sc.v[Y]-At[Y])*F;if(t.fillColorAnim&&t.fc){if(b.fc.propType)for(Y=0;Y<3;Y+=1)F.length?ft[Y]+=(b.fc.v[Y]-ft[Y])*F[0]:ft[Y]+=(b.fc.v[Y]-ft[Y])*F;b.fh.propType&&(F.length?ft=_r(ft,b.fh.v*F[0]):ft=_r(ft,b.fh.v*F)),b.fs.propType&&(F.length?ft=gr(ft,b.fs.v*F[0]):ft=gr(ft,b.fs.v*F)),b.fb.propType&&(F.length?ft=vr(ft,b.fb.v*F[0]):ft=vr(ft,b.fb.v*F))}}for(c=0;c<f;c+=1)b=a[c].a,b.p.propType&&(P=a[c].s,F=P.getMult(m[A].anIndexes[c],o.a[c].s.totalChars),this._hasMaskedPath?F.length?n.translate(0,b.p.v[1]*F[0],-b.p.v[2]*F[1]):n.translate(0,b.p.v[1]*F,-b.p.v[2]*F):F.length?n.translate(b.p.v[0]*F[0],b.p.v[1]*F[1],-b.p.v[2]*F[2]):n.translate(b.p.v[0]*F,b.p.v[1]*F,-b.p.v[2]*F));if(t.strokeWidthAnim&&(ue=Bt<0?0:Bt),t.strokeColorAnim&&(Me="rgb("+Math.round(At[0]*255)+","+Math.round(At[1]*255)+","+Math.round(At[2]*255)+")"),t.fillColorAnim&&t.fc&&(me="rgb("+Math.round(ft[0]*255)+","+Math.round(ft[1]*255)+","+Math.round(ft[2]*255)+")"),this._hasMaskedPath){if(n.translate(0,-t.ls),n.translate(0,s[1]*G*.01+x,0),this._pathData.p.v){tt=(T.point[1]-y.point[1])/(T.point[0]-y.point[0]);var Ke=Math.atan(tt)*180/Math.PI;T.point[0]<y.point[0]&&(Ke+=180),n.rotate(-Ke*Math.PI/180)}n.translate(et,lt,0),C-=s[0]*m[A].an*.005,m[A+1]&&q!==m[A+1].ind&&(C+=m[A].an/2,C+=t.tr*.001*t.finalSize)}else{switch(n.translate(p,x,0),t.ps&&n.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:n.translate(m[A].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[m[A].line]),0,0);break;case 2:n.translate(m[A].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[m[A].line])/2,0,0);break;default:break}n.translate(0,-t.ls),n.translate(Q,0,0),n.translate(s[0]*m[A].an*.005,s[1]*G*.01,0),p+=m[A].l+t.tr*.001*t.finalSize}d==="html"?ne=n.toCSS():d==="svg"?ne=n.to2dCSS():ge=[n.props[0],n.props[1],n.props[2],n.props[3],n.props[4],n.props[5],n.props[6],n.props[7],n.props[8],n.props[9],n.props[10],n.props[11],n.props[12],n.props[13],n.props[14],n.props[15]],ve=Dt}v<=A?(R=new js(ve,ue,Me,me,ne,ge),this.renderedLetters.push(R),v+=1,this.lettersChangedFlag=!0):(R=this.renderedLetters[A],this.lettersChangedFlag=R.update(ve,ue,Me,me,ne,ge)||this.lettersChangedFlag)}}},Ye.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},Ye.prototype.mHelper=new Pt,Ye.prototype.defaultPropsArray=[],j([$t],Ye);function Gt(){}Gt.prototype.initElement=function(t,e,s){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,s),this.textProperty=new zt(this,t.t,this.dynamicProperties),this.textAnimator=new Ye(t.t,this.renderType,this),this.initTransform(t,e,s),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Gt.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},Gt.prototype.createPathShape=function(t,e){var s,a=e.length,o,n="";for(s=0;s<a;s+=1)e[s].ty==="sh"&&(o=e[s].ks.k,n+=aa(o,o.i.length,!0,t));return n},Gt.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},Gt.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},Gt.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},Gt.prototype.applyTextPropertiesToMatrix=function(t,e,s,a,o){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s])/2,0,0);break;default:break}e.translate(a,o,0)},Gt.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},Gt.prototype.emptyProp=new js,Gt.prototype.destroy=function(){},Gt.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var mo={shapes:[]};function pe(t,e,s){this.textSpans=[],this.renderType="svg",this.initElement(t,e,s)}j([Ee,hi,Pi,ci,Te,Ci,Gt],pe),pe.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=it("text"))},pe.prototype.buildTextContents=function(t){for(var e=0,s=t.length,a=[],o="";e<s;)t[e]==="\r"||t[e]===""?(a.push(o),o=""):o+=t[e],e+=1;return a.push(o),a},pe.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var s=t.shapes[0];if(s.it){var a=s.it[s.it.length-1];a.s&&(a.s.k[0]=e,a.s.k[1]=e)}}return t},pe.prototype.buildNewText=function(){this.addDynamicProperty(this);var t,e,s=this.textProperty.currentData;this.renderedLetters=ot(s?s.l.length:0),s.fc?this.layerElement.setAttribute("fill",this.buildColor(s.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),s.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(s.sc)),this.layerElement.setAttribute("stroke-width",s.sw)),this.layerElement.setAttribute("font-size",s.finalSize);var a=this.globalData.fontManager.getFontByName(s.f);if(a.fClass)this.layerElement.setAttribute("class",a.fClass);else{this.layerElement.setAttribute("font-family",a.fFamily);var o=s.fWeight,n=s.fStyle;this.layerElement.setAttribute("font-style",n),this.layerElement.setAttribute("font-weight",o)}this.layerElement.setAttribute("aria-label",s.t);var d=s.l||[],v=!!this.globalData.fontManager.chars;e=d.length;var p,x=this.mHelper,A="",O=this.data.singleShape,m=0,E=0,C=!0,T=s.tr*.001*s.finalSize;if(O&&!v&&!s.sz){var I=this.textContainer,S="start";switch(s.j){case 1:S="end";break;case 2:S="middle";break;default:S="start";break}I.setAttribute("text-anchor",S),I.setAttribute("letter-spacing",T);var w=this.buildTextContents(s.finalText);for(e=w.length,E=s.ps?s.ps[1]+s.ascent:0,t=0;t<e;t+=1)p=this.textSpans[t].span||it("tspan"),p.textContent=w[t],p.setAttribute("x",0),p.setAttribute("y",E),p.style.display="inherit",I.appendChild(p),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=p,E+=s.finalLineHeight;this.layerElement.appendChild(I)}else{var u=this.textSpans.length,y;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!v||!O||t===0){if(p=u>t?this.textSpans[t].span:it(v?"g":"text"),u<=t){if(p.setAttribute("stroke-linecap","butt"),p.setAttribute("stroke-linejoin","round"),p.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=p,v){var k=it("g");p.appendChild(k),this.textSpans[t].childSpan=k}this.textSpans[t].span=p,this.layerElement.appendChild(p)}p.style.display="inherit"}if(x.reset(),O&&(d[t].n&&(m=-T,E+=s.yOffset,E+=C?1:0,C=!1),this.applyTextPropertiesToMatrix(s,x,d[t].line,m,E),m+=d[t].l||0,m+=T),v){y=this.globalData.fontManager.getCharData(s.finalText[t],a.fStyle,this.globalData.fontManager.getFontByName(s.f).fFamily);var M;if(y.t===1)M=new Ii(y.data,this.globalData,this);else{var z=mo;y.data&&y.data.shapes&&(z=this.buildShapeData(y.data,s.finalSize)),M=new _t(z,this.globalData,this)}if(this.textSpans[t].glyph){var V=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(V.layerElement),V.destroy()}this.textSpans[t].glyph=M,M._debug=!0,M.prepareFrame(0),M.renderFrame(),this.textSpans[t].childSpan.appendChild(M.layerElement),y.t===1&&this.textSpans[t].childSpan.setAttribute("transform","scale("+s.finalSize/100+","+s.finalSize/100+")")}else O&&p.setAttribute("transform","translate("+x.props[12]+","+x.props[13]+")"),p.textContent=d[t].val,p.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}O&&p&&p.setAttribute("d",A)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},pe.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},pe.prototype.getValue=function(){var t,e=this.textSpans.length,s;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<e;t+=1)s=this.textSpans[t].glyph,s&&(s.prepareFrame(this.comp.renderedFrame-this.data.st),s._mdf&&(this._mdf=!0))},pe.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,s=this.textAnimator.renderedLetters,a=this.textProperty.currentData.l;e=a.length;var o,n,d;for(t=0;t<e;t+=1)a[t].n||(o=s[t],n=this.textSpans[t].span,d=this.textSpans[t].glyph,d&&d.renderFrame(),o._mdf.m&&n.setAttribute("transform",o.m),o._mdf.o&&n.setAttribute("opacity",o.o),o._mdf.sw&&n.setAttribute("stroke-width",o.sw),o._mdf.sc&&n.setAttribute("stroke",o.sc),o._mdf.fc&&n.setAttribute("fill",o.fc))}};function Hs(t,e,s){this.initElement(t,e,s)}j([Mi],Hs),Hs.prototype.createContent=function(){var t=it("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function Ce(t,e,s){this.initFrame(),this.initBaseData(t,e,s),this.initFrame(),this.initTransform(t,e,s),this.initHierarchy()}Ce.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},Ce.prototype.renderFrame=function(){},Ce.prototype.getBaseElement=function(){return null},Ce.prototype.destroy=function(){},Ce.prototype.sourceRectAtTime=function(){},Ce.prototype.hide=function(){},j([Ee,hi,ci,Te],Ce);function wt(){}j([Ct],wt),wt.prototype.createNull=function(t){return new Ce(t,this.globalData,this)},wt.prototype.createShape=function(t){return new _t(t,this.globalData,this)},wt.prototype.createText=function(t){return new pe(t,this.globalData,this)},wt.prototype.createImage=function(t){return new Mi(t,this.globalData,this)},wt.prototype.createSolid=function(t){return new Hs(t,this.globalData,this)},wt.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var s=it("clipPath"),a=it("rect");a.setAttribute("width",t.w),a.setAttribute("height",t.h),a.setAttribute("x",0),a.setAttribute("y",0);var o=Ot();s.setAttribute("id",o),s.appendChild(a),this.layerElement.setAttribute("clip-path","url("+D()+"#"+o+")"),e.appendChild(s),this.layers=t.layers,this.elements=ot(t.layers.length)},wt.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},wt.prototype.updateContainerSize=function(){},wt.prototype.findIndexByInd=function(t){var e=0,s=this.layers.length;for(e=0;e<s;e+=1)if(this.layers[e].ind===t)return e;return-1},wt.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var s=this.createItem(this.layers[t]);if(e[t]=s,qi()&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(s),s.initExpressions()),this.appendElementInPos(s,t),this.layers[t].tt){var a="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(a===-1)return;if(!this.elements[a]||this.elements[a]===!0)this.buildItem(a),this.addPendingElement(s);else{var o=e[a],n=o.getMatte(this.layers[t].tt);s.setMatte(n)}}}},wt.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,s=this.elements.length;e<s;){if(this.elements[e]===t){var a="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,o=this.elements[a],n=o.getMatte(this.layers[e].tt);t.setMatte(n);break}e+=1}}},wt.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=s-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<s;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},wt.prototype.appendElementInPos=function(t,e){var s=t.getBaseElement();if(s){for(var a=0,o;a<e;)this.elements[a]&&this.elements[a]!==!0&&this.elements[a].getBaseElement()&&(o=this.elements[a].getBaseElement()),a+=1;o?this.layerElement.insertBefore(s,o):this.layerElement.appendChild(s)}},wt.prototype.hide=function(){this.layerElement.style.display="none"},wt.prototype.show=function(){this.layerElement.style.display="block"};function fe(){}j([Ee,hi,ci,Te,Ci],fe),fe.prototype.initElement=function(t,e,s){this.initFrame(),this.initBaseData(t,e,s),this.initTransform(t,e,s),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},fe.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var s,a=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),s=a-1;s>=0;s-=1)(this.completeLayers||this.elements[s])&&(this.elements[s].prepareFrame(this.renderedFrame-this.layers[s].st),this.elements[s]._mdf&&(this._mdf=!0))}},fe.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},fe.prototype.setElements=function(t){this.elements=t},fe.prototype.getElements=function(){return this.elements},fe.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},fe.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function Ii(t,e,s){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?ot(this.layers.length):[],this.initElement(t,e,s),this.tm=t.tm?W.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}j([wt,fe,Pi],Ii),Ii.prototype.createComp=function(t){return new Ii(t,this.globalData,this)};function Ws(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=it("svg");var s="";if(e&&e.title){var a=it("title"),o=Ot();a.setAttribute("id",o),a.textContent=e.title,this.svgElement.appendChild(a),s+=o}if(e&&e.description){var n=it("desc"),d=Ot();n.setAttribute("id",d),n.textContent=e.description,this.svgElement.appendChild(n),s+=" "+d}s&&this.svgElement.setAttribute("aria-labelledby",s);var v=it("defs");this.svgElement.appendChild(v);var p=it("g");this.svgElement.appendChild(p),this.layerElement=p,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:v,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}return j([wt],Ws),Ws.prototype.createComp=function(t){return new Ii(t,this.globalData,this)},Sn("svg",Ws),$e.registerModifier("tm",Xt),$e.registerModifier("pb",xi),$e.registerModifier("rp",re),$e.registerModifier("rd",ki),$e.registerModifier("zz",$i),$e.registerModifier("op",Ai),dt}))});var Mt="ecoflow-energy-card",Qt="ecoflow-house-card",te="ecoflow-space-card",ze="ecoflow_iot",_e="/ecoflow_iot";function ye(_,i){return _&&(i?.hassUrl?i.hassUrl(_):_)}var cs=globalThis,ds=cs.ShadowRoot&&(cs.ShadyCSS===void 0||cs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qs=Symbol(),oa=new WeakMap,Li=class{constructor(i,r,l){if(this._$cssResult$=!0,l!==qs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=r}get styleSheet(){let i=this.o,r=this.t;if(ds&&i===void 0){let l=r!==void 0&&r.length===1;l&&(i=oa.get(r)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),l&&oa.set(r,i))}return i}toString(){return this.cssText}},la=_=>new Li(typeof _=="string"?_:_+"",void 0,qs),jt=(_,...i)=>{let r=_.length===1?_[0]:i.reduce((l,h,g)=>l+($=>{if($._$cssResult$===!0)return $.cssText;if(typeof $=="number")return $;throw Error("Value passed to 'css' function must be a 'css' function result: "+$+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(h)+_[g+1],_[0]);return new Li(r,_,qs)},ha=(_,i)=>{if(ds)_.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of i){let l=document.createElement("style"),h=cs.litNonce;h!==void 0&&l.setAttribute("nonce",h),l.textContent=r.cssText,_.appendChild(l)}},Gs=ds?_=>_:_=>_ instanceof CSSStyleSheet?(i=>{let r="";for(let l of i.cssRules)r+=l.cssText;return la(r)})(_):_;var{is:So,defineProperty:$o,getOwnPropertyDescriptor:Ao,getOwnPropertyNames:Eo,getOwnPropertySymbols:To,getPrototypeOf:Po}=Object,ps=globalThis,ca=ps.trustedTypes,Co=ca?ca.emptyScript:"",Mo=ps.reactiveElementPolyfillSupport,zi=(_,i)=>_,Ys={toAttribute(_,i){switch(i){case Boolean:_=_?Co:null;break;case Object:case Array:_=_==null?_:JSON.stringify(_)}return _},fromAttribute(_,i){let r=_;switch(i){case Boolean:r=_!==null;break;case Number:r=_===null?null:Number(_);break;case Object:case Array:try{r=JSON.parse(_)}catch{r=null}}return r}},pa=(_,i)=>!So(_,i),da={attribute:!0,type:String,converter:Ys,reflect:!1,useDefault:!1,hasChanged:pa};Symbol.metadata??=Symbol("metadata"),ps.litPropertyMetadata??=new WeakMap;var be=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,r=da){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(i,r),!r.noAccessor){let l=Symbol(),h=this.getPropertyDescriptor(i,l,r);h!==void 0&&$o(this.prototype,i,h)}}static getPropertyDescriptor(i,r,l){let{get:h,set:g}=Ao(this.prototype,i)??{get(){return this[r]},set($){this[r]=$}};return{get:h,set($){let D=h?.call(this);g?.call(this,$),this.requestUpdate(i,D,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??da}static _$Ei(){if(this.hasOwnProperty(zi("elementProperties")))return;let i=Po(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(zi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zi("properties"))){let r=this.properties,l=[...Eo(r),...To(r)];for(let h of l)this.createProperty(h,r[h])}let i=this[Symbol.metadata];if(i!==null){let r=litPropertyMetadata.get(i);if(r!==void 0)for(let[l,h]of r)this.elementProperties.set(l,h)}this._$Eh=new Map;for(let[r,l]of this.elementProperties){let h=this._$Eu(r,l);h!==void 0&&this._$Eh.set(h,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let r=[];if(Array.isArray(i)){let l=new Set(i.flat(1/0).reverse());for(let h of l)r.unshift(Gs(h))}else i!==void 0&&r.push(Gs(i));return r}static _$Eu(i,r){let l=r.attribute;return l===!1?void 0:typeof l=="string"?l:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(i=>i(this))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){let i=new Map,r=this.constructor.elementProperties;for(let l of r.keys())this.hasOwnProperty(l)&&(i.set(l,this[l]),delete this[l]);i.size>0&&(this._$Ep=i)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ha(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(i=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach(i=>i.hostDisconnected?.())}attributeChangedCallback(i,r,l){this._$AK(i,l)}_$ET(i,r){let l=this.constructor.elementProperties.get(i),h=this.constructor._$Eu(i,l);if(h!==void 0&&l.reflect===!0){let g=(l.converter?.toAttribute!==void 0?l.converter:Ys).toAttribute(r,l.type);this._$Em=i,g==null?this.removeAttribute(h):this.setAttribute(h,g),this._$Em=null}}_$AK(i,r){let l=this.constructor,h=l._$Eh.get(i);if(h!==void 0&&this._$Em!==h){let g=l.getPropertyOptions(h),$=typeof g.converter=="function"?{fromAttribute:g.converter}:g.converter?.fromAttribute!==void 0?g.converter:Ys;this._$Em=h;let D=$.fromAttribute(r,g.type);this[h]=D??this._$Ej?.get(h)??D,this._$Em=null}}requestUpdate(i,r,l,h=!1,g){if(i!==void 0){let $=this.constructor;if(h===!1&&(g=this[i]),l??=$.getPropertyOptions(i),!((l.hasChanged??pa)(g,r)||l.useDefault&&l.reflect&&g===this._$Ej?.get(i)&&!this.hasAttribute($._$Eu(i,l))))return;this.C(i,r,l)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,r,{useDefault:l,reflect:h,wrapped:g},$){l&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,$??r??this[i]),g!==!0||$!==void 0)||(this._$AL.has(i)||(this.hasUpdated||l||(r=void 0),this._$AL.set(i,r)),h===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[h,g]of this._$Ep)this[h]=g;this._$Ep=void 0}let l=this.constructor.elementProperties;if(l.size>0)for(let[h,g]of l){let{wrapped:$}=g,D=this[h];$!==!0||this._$AL.has(h)||D===void 0||this.C(h,void 0,g,D)}}let i=!1,r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),this._$EO?.forEach(l=>l.hostUpdate?.()),this.update(r)):this._$EM()}catch(l){throw i=!1,this._$EM(),l}i&&this._$AE(r)}willUpdate(i){}_$AE(i){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(i){}firstUpdated(i){}};be.elementStyles=[],be.shadowRootOptions={mode:"open"},be[zi("elementProperties")]=new Map,be[zi("finalized")]=new Map,Mo?.({ReactiveElement:be}),(ps.reactiveElementVersions??=[]).push("2.1.2");var er=globalThis,fa=_=>_,fs=er.trustedTypes,ua=fs?fs.createPolicy("lit-html",{createHTML:_=>_}):void 0,ba="$lit$",Oe=`lit$${Math.random().toFixed(9).slice(2)}$`,wa="?"+Oe,Fo=`<${wa}>`,Je=document,Ri=()=>Je.createComment(""),Vi=_=>_===null||typeof _!="object"&&typeof _!="function",ir=Array.isArray,Io=_=>ir(_)||typeof _?.[Symbol.iterator]=="function",Ks=`[ 	
\f\r]`,Oi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ma=/-->/g,ga=/>/g,Xe=RegExp(`>|${Ks}(?:([^\\s"'>=/]+)(${Ks}*=${Ks}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),va=/'/g,_a=/"/g,xa=/^(?:script|style|textarea|title)$/i,sr=_=>(i,...r)=>({_$litType$:_,strings:i,values:r}),L=sr(1),Ht=sr(2),kl=sr(3),Qe=Symbol.for("lit-noChange"),xt=Symbol.for("lit-nothing"),ya=new WeakMap,Ze=Je.createTreeWalker(Je,129);function ka(_,i){if(!ir(_)||!_.hasOwnProperty("raw"))throw Error("invalid template strings array");return ua!==void 0?ua.createHTML(i):i}var Lo=(_,i)=>{let r=_.length-1,l=[],h,g=i===2?"<svg>":i===3?"<math>":"",$=Oi;for(let D=0;D<r;D++){let U=_[D],j,nt,X=-1,rt=0;for(;rt<U.length&&($.lastIndex=rt,nt=$.exec(U),nt!==null);)rt=$.lastIndex,$===Oi?nt[1]==="!--"?$=ma:nt[1]!==void 0?$=ga:nt[2]!==void 0?(xa.test(nt[2])&&(h=RegExp("</"+nt[2],"g")),$=Xe):nt[3]!==void 0&&($=Xe):$===Xe?nt[0]===">"?($=h??Oi,X=-1):nt[1]===void 0?X=-2:(X=$.lastIndex-nt[2].length,j=nt[1],$=nt[3]===void 0?Xe:nt[3]==='"'?_a:va):$===_a||$===va?$=Xe:$===ma||$===ga?$=Oi:($=Xe,h=void 0);let at=$===Xe&&_[D+1].startsWith("/>")?" ":"";g+=$===Oi?U+Fo:X>=0?(l.push(j),U.slice(0,X)+ba+U.slice(X)+Oe+at):U+Oe+(X===-2?D:at)}return[ka(_,g+(_[r]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),l]},Di=class _{constructor({strings:i,_$litType$:r},l){let h;this.parts=[];let g=0,$=0,D=i.length-1,U=this.parts,[j,nt]=Lo(i,r);if(this.el=_.createElement(j,l),Ze.currentNode=this.el.content,r===2||r===3){let X=this.el.content.firstChild;X.replaceWith(...X.childNodes)}for(;(h=Ze.nextNode())!==null&&U.length<D;){if(h.nodeType===1){if(h.hasAttributes())for(let X of h.getAttributeNames())if(X.endsWith(ba)){let rt=nt[$++],at=h.getAttribute(X).split(Oe),ot=/([.?@])?(.*)/.exec(rt);U.push({type:1,index:g,name:ot[2],strings:at,ctor:ot[1]==="."?Zs:ot[1]==="?"?Js:ot[1]==="@"?Qs:fi}),h.removeAttribute(X)}else X.startsWith(Oe)&&(U.push({type:6,index:g}),h.removeAttribute(X));if(xa.test(h.tagName)){let X=h.textContent.split(Oe),rt=X.length-1;if(rt>0){h.textContent=fs?fs.emptyScript:"";for(let at=0;at<rt;at++)h.append(X[at],Ri()),Ze.nextNode(),U.push({type:2,index:++g});h.append(X[rt],Ri())}}}else if(h.nodeType===8)if(h.data===wa)U.push({type:2,index:g});else{let X=-1;for(;(X=h.data.indexOf(Oe,X+1))!==-1;)U.push({type:7,index:g}),X+=Oe.length-1}g++}}static createElement(i,r){let l=Je.createElement("template");return l.innerHTML=i,l}};function pi(_,i,r=_,l){if(i===Qe)return i;let h=l!==void 0?r._$Co?.[l]:r._$Cl,g=Vi(i)?void 0:i._$litDirective$;return h?.constructor!==g&&(h?._$AO?.(!1),g===void 0?h=void 0:(h=new g(_),h._$AT(_,r,l)),l!==void 0?(r._$Co??=[])[l]=h:r._$Cl=h),h!==void 0&&(i=pi(_,h._$AS(_,i.values),h,l)),i}var Xs=class{constructor(i,r){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){let{el:{content:r},parts:l}=this._$AD,h=(i?.creationScope??Je).importNode(r,!0);Ze.currentNode=h;let g=Ze.nextNode(),$=0,D=0,U=l[0];for(;U!==void 0;){if($===U.index){let j;U.type===2?j=new Ui(g,g.nextSibling,this,i):U.type===1?j=new U.ctor(g,U.name,U.strings,this,i):U.type===6&&(j=new tr(g,this,i)),this._$AV.push(j),U=l[++D]}$!==U?.index&&(g=Ze.nextNode(),$++)}return Ze.currentNode=Je,h}p(i){let r=0;for(let l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(i,l,r),r+=l.strings.length-2):l._$AI(i[r])),r++}},Ui=class _{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,r,l,h){this.type=2,this._$AH=xt,this._$AN=void 0,this._$AA=i,this._$AB=r,this._$AM=l,this.options=h,this._$Cv=h?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode,r=this._$AM;return r!==void 0&&i?.nodeType===11&&(i=r.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,r=this){i=pi(this,i,r),Vi(i)?i===xt||i==null||i===""?(this._$AH!==xt&&this._$AR(),this._$AH=xt):i!==this._$AH&&i!==Qe&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Io(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==xt&&Vi(this._$AH)?this._$AA.nextSibling.data=i:this.T(Je.createTextNode(i)),this._$AH=i}$(i){let{values:r,_$litType$:l}=i,h=typeof l=="number"?this._$AC(i):(l.el===void 0&&(l.el=Di.createElement(ka(l.h,l.h[0]),this.options)),l);if(this._$AH?._$AD===h)this._$AH.p(r);else{let g=new Xs(h,this),$=g.u(this.options);g.p(r),this.T($),this._$AH=g}}_$AC(i){let r=ya.get(i.strings);return r===void 0&&ya.set(i.strings,r=new Di(i)),r}k(i){ir(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,l,h=0;for(let g of i)h===r.length?r.push(l=new _(this.O(Ri()),this.O(Ri()),this,this.options)):l=r[h],l._$AI(g),h++;h<r.length&&(this._$AR(l&&l._$AB.nextSibling,h),r.length=h)}_$AR(i=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);i!==this._$AB;){let l=fa(i).nextSibling;fa(i).remove(),i=l}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},fi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,r,l,h,g){this.type=1,this._$AH=xt,this._$AN=void 0,this.element=i,this.name=r,this._$AM=h,this.options=g,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=xt}_$AI(i,r=this,l,h){let g=this.strings,$=!1;if(g===void 0)i=pi(this,i,r,0),$=!Vi(i)||i!==this._$AH&&i!==Qe,$&&(this._$AH=i);else{let D=i,U,j;for(i=g[0],U=0;U<g.length-1;U++)j=pi(this,D[l+U],r,U),j===Qe&&(j=this._$AH[U]),$||=!Vi(j)||j!==this._$AH[U],j===xt?i=xt:i!==xt&&(i+=(j??"")+g[U+1]),this._$AH[U]=j}$&&!h&&this.j(i)}j(i){i===xt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},Zs=class extends fi{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===xt?void 0:i}},Js=class extends fi{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==xt)}},Qs=class extends fi{constructor(i,r,l,h,g){super(i,r,l,h,g),this.type=5}_$AI(i,r=this){if((i=pi(this,i,r,0)??xt)===Qe)return;let l=this._$AH,h=i===xt&&l!==xt||i.capture!==l.capture||i.once!==l.once||i.passive!==l.passive,g=i!==xt&&(l===xt||h);h&&this.element.removeEventListener(this.name,this,l),g&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},tr=class{constructor(i,r,l){this.element=i,this.type=6,this._$AN=void 0,this._$AM=r,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(i){pi(this,i)}};var zo=er.litHtmlPolyfillSupport;zo?.(Di,Ui),(er.litHtmlVersions??=[]).push("3.3.3");var Sa=(_,i,r)=>{let l=r?.renderBefore??i,h=l._$litPart$;if(h===void 0){let g=r?.renderBefore??null;l._$litPart$=h=new Ui(i.insertBefore(Ri(),g),g,void 0,r??{})}return h._$AI(_),h};var rr=globalThis,kt=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Sa(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Qe}};kt._$litElement$=!0,kt.finalized=!0,rr.litElementHydrateSupport?.({LitElement:kt});var Oo=rr.litElementPolyfillSupport;Oo?.({LitElement:kt});(rr.litElementVersions??=[]).push("4.2.2");var us=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function ui(_){return us.some(i=>i.key===_)?`${_e}/devices/${_}.png`:null}function ti(_){return typeof _=="string"&&_.includes(`${_e}/`)&&_.endsWith(".png")?`${_.slice(0,-4)}.webp`:null}function $a(_){let i=Ro(_);return i?ui(i):null}function Ro(_){if(!_)return null;let i=us.find(r=>r.match&&r.match.test(_));return i?i.key:null}var Vo={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","sys_load","sys_grid_power","load_from_pv","load_from_grid","load_from_bat","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power","soh","bat_temp","chg_rem_time","dsg_rem_time","full_energy","cycles","calendar_soh"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function Do(_){return Object.values(_.entities||{}).filter(i=>i.platform===ze)}function Uo(_){if(_.translation_key)return _.translation_key;let i=_.entity_id.split(".")[1],r=i.lastIndexOf("_");return r>=0?i.slice(r+1):i}function oe(_){let i=new Map;for(let l of Do(_))l.device_id&&(i.has(l.device_id)||i.set(l.device_id,[]),i.get(l.device_id).push(l));let r=[];for(let[l,h]of i)h.some(g=>Uo(g)==="pv_total")&&r.push({deviceId:l,device:_.devices?.[l],ents:h});return r}function le(_,i){let r={};for(let l of i){let[h]=l.entity_id.split("."),g=l.translation_key;g&&(Vo[h]||[]).includes(g)&&(r[`${h}.${g}`]=l.entity_id)}if(!r["sensor.cms_batt_soc"])for(let l of i){if(!l.entity_id.startsWith("sensor."))continue;let h=_.states?.[l.entity_id];if(h?.attributes?.device_class==="battery"&&h?.attributes?.unit_of_measurement==="%"){r["sensor.cms_batt_soc"]=l.entity_id;break}}return r}async function ar(_){if(!_?.callWS)return{};try{return await _.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function Aa(_){let i=await ar(_),r=Object.keys(i);if(!r.length)return[];let l=[];try{l=await _.callWS({type:"config_entries/get"})||[]}catch{l=[]}let h=new Map(l.map(g=>[g.entry_id,g]));return r.map(g=>({id:g,title:h.get(g)?.title||h.get(g)?.domain||g,domain:h.get(g)?.domain||""}))}function Ea(_,i){let r=i===void 0?Object.keys(_||{}):i,l={};for(let h of r){let g=_?.[h]?.wh_hours;if(g)for(let[$,D]of Object.entries(g)){let U=Number(D);Number.isFinite(U)&&(l[$]=(l[$]||0)+U)}}return l}function nr(_,i=new Date){let r=i.getFullYear(),l=i.getMonth(),h=i.getDate(),g={};for(let[$,D]of Object.entries(_||{})){let U=new Date($);Number.isNaN(U.getTime())||U.getFullYear()===r&&U.getMonth()===l&&U.getDate()===h&&(g[U.getHours()]=(g[U.getHours()]||0)+D)}return g}function or(_,i=new Date){let r=nr(_,i),l=Object.keys(r);return l.length?l.reduce((h,g)=>h+r[g],0):null}async function No(_){if(!_?.callWS)return null;try{return await _.callWS({type:"energy/get_prefs"})||null}catch{return null}}function Bo(_){let i={solar:[],gridFrom:[],gridTo:[],batIn:[],batOut:[]};for(let r of _?.energy_sources||[])if(r.type==="solar"&&r.stat_energy_from&&i.solar.push(r.stat_energy_from),r.type==="battery"&&(r.stat_energy_to&&i.batIn.push(r.stat_energy_to),r.stat_energy_from&&i.batOut.push(r.stat_energy_from)),r.type==="grid"){for(let l of r.flow_from||[])l.stat_energy_from&&i.gridFrom.push(l.stat_energy_from);for(let l of r.flow_to||[])l.stat_energy_to&&i.gridTo.push(l.stat_energy_to)}return i}async function Ni(_,i){if(!_?.callWS||!i.length)return 0;let r=new Date,l=new Date(r.getFullYear(),r.getMonth(),r.getDate());try{let h=await _.callWS({type:"recorder/statistics_during_period",start_time:l.toISOString(),statistic_ids:i,period:"day",types:["change"]}),g=0;for(let $ of i)for(let D of h?.[$]||[]){let U=Number(D.change);Number.isFinite(U)&&(g+=U)}return g}catch{return 0}}async function Ta(_){let i=await No(_);if(!i)return null;let r=Bo(i),[l,h,g,$,D]=await Promise.all([Ni(_,r.solar),Ni(_,r.gridFrom),Ni(_,r.gridTo),Ni(_,r.batIn),Ni(_,r.batOut)]),U=l+h+D-g-$,j=U>0?Math.max(0,Math.min(100,Math.round((1-h/U)*100))):null;return{solar:l,gridImport:h,gridExport:g,batIn:$,batOut:D,consumption:U,independence:j}}async function Pa(_,i,r,l){if(!_?.callWS||!i)return null;let h=new Date,$={type:"recorder/statistics_during_period",start_time:(r instanceof Date?r:new Date(h.getFullYear(),h.getMonth(),h.getDate())).toISOString(),statistic_ids:[i],period:"hour",types:["change"]};l instanceof Date&&($.end_time=l.toISOString());try{let U=(await _.callWS($))?.[i];if(!Array.isArray(U))return null;let j={};for(let nt of U){let X=new Date(nt.start),rt=Number(nt.change);Number.isNaN(X.getTime())||!Number.isFinite(rt)||(j[X.getHours()]=(j[X.getHours()]||0)+rt)}return j}catch{return null}}function ct(_){return typeof _=="string"&&/\{[{%]/.test(_)}function gt(_){return typeof _=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(_)}function pt(_){let i=Number(_?.state);return Number.isFinite(i)?i:null}function we(_){return _==null||!Number.isFinite(_)?null:Math.abs(_)>=1e3?`${(_/1e3).toFixed(2)} kW`:`${Math.round(_)} W`}function he(_){return _==null||!Number.isFinite(_)?{n:"\u2013",u:"W"}:Math.abs(_)>=1e3?{n:(_/1e3).toFixed(2),u:"kW"}:{n:String(Math.round(_)),u:"W"}}function ms(_){return{n:_!=null&&Number.isFinite(_)?_.toFixed(1):"\u2013",u:"kWh"}}function lr(_,i=1){return _==null||!Number.isFinite(_)?null:Math.abs(_)>=1e3?`${(_/1e3).toFixed(i)} kWh`:`${Math.round(_)} Wh`}function Ca(_){if(_==null||!Number.isFinite(_))return null;let i=Math.round(_);if(i<60)return`${i} min`;let r=Math.floor(i/60);if(r<24){let g=i%60;return g?`${r} h ${g} min`:`${r} h`}let l=Math.floor(r/24),h=r%24;return h?`${l} d ${h} h`:`${l} d`}var Ma=!1;async function Yt(){if(!Ma){Ma=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var Fa={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off",confirm_action:"Are you sure?"},house:{home:"Home",grid:"Grid",from_grid:"From grid",to_grid:"To grid",idle:"Idle",not_setup:"Card not set up \u2014 add the EcoFlow IoT integration",page:{appearance:"Appearance",display:"What to show",battery:"Battery",entities:"Entities"},short:{show_flows:"Flows",show_grid:"Grid",show_solar:"Solar",show_home:"Home",show_battery:"Battery"},mode:{auto:"Automatic",day:"Day",night:"Night"},toggle:{show_flows:"Animate energy flows",show_grid:"Show grid power",show_solar:"Show solar power",show_home:"Show home consumption",show_battery:"Show battery"},editor:{style:"House style",style_n:"House {n}",mode:"Day / night",battery:"Battery",battery_hint:"Pick the device render that matches your setup. Shown in front of the house.",custom:"Custom house image",custom_light:"Light / day image",custom_dark:"Dark / night image",custom_remove:"Remove",uploading:"Uploading\u2026",custom_hint:"Upload your own house render to use instead of the built-in styles. The dark image is shown at night (auto/night mode); upload only the light one to use it for both. For a perfect fit, match the built-in 2340\xD71680 layout \u2014 download the full set below to trace over.",download_zip:"Download all house images (.zip)",preparing:"Preparing download\u2026",entities:"Entities",entities_hint:"Override the auto-detected sensors that drive the scene. Leave empty to use the integration's defaults."},battery:{re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + gateway",re305_or_re306_battery:"Stream Ultra",re305_or_re306_device:"Stream Ultra + inverter",re305_device:"Stream Ultra + battery",re306_device:"Stream Ultra (single)",re306_dpu_battery:"Stream Ultra (stacked)",po_space_re305_battery:"Battery stack",po_space_battery:"Battery + inverter",po_space_battery_system_battery:"Single battery",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Battery (JT303)",jt321_space_battery:"Battery (JT321)",dc303_space_battery:"Battery (DC303)"}},battery:{title:"Battery",idle:"Idle",health:"Health",calendar_health:"Calendar health",temperature:"Temperature",time_to_full:"Time to full",time_to_empty:"Time to empty",capacity:"Capacity",cycles:"Cycles"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today.",stats_default:"Default (Solar, Grid)",stats_count:"{n} tiles",stats_default_hint:"The card shows live Solar and Grid power. Customize to show any entities you like instead, each with its own tap action.",stats_customize:"Customize tiles",stats_hint:"Add the entities to show as stat tiles. Set a name and icon, and choose what happens on tap (more-info by default).",stats_add:"Add tile",stats_reset:"Reset to default",stats_remove:"Remove",stats_move_up:"Move up",stats_move_down:"Move down",stat_n:"Tile {n}",stat_field_entity:"Entity",stat_field_name:"Name",stat_field_icon:"Icon",stat_field_tap_action:"Tap action"},page:{appearance:"Appearance",entities:"Entities",stats:"Stat tiles",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",sys_grid_power:"Grid power (whole system)",sys_load:"Home consumption",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}},space:{page:{appearance:"Appearance",weather:"Weather",overlays:"Floating overlays",tiles:"Bottom tiles",tabs:"Sidebar tabs"},n_items:"{n} configured",weather_hint:"Pick a weather entity to show the temperature and humidity in the top bar. Leave empty to hide it.",weather_entity:"Weather entity",overlays_hint:"Floating values over the house. Drag a chip on the preview to position it, or fine-tune with X/Y below. Bind each to an auto-detected sensor, any entity, or a template.",add_overlay:"Add overlay",tiles_hint:"The cards along the bottom. Each shows a value from a sensor, entity, or template.",add_tile:"Add tile",tabs_hint:"The sidebar buttons. The first is always Home (the scene above); each other tab embeds an existing Lovelace view by its path.",rail_labels:"Show labels under icons",rail_align:"Align items",align:{start:"Top",center:"Center",end:"Bottom"},add_tab:"Add tab",home_tab:"Home",path_hint:"Lovelace view path, e.g. solar or dashboard-name/solar",f_label:"Label",f_icon:"Icon (mdi:\u2026)",f_unit:"Unit",f_anchor:"Anchor",f_color:"Value color (optional)",f_icon_color:"Icon color (optional)",f_dot:"Status dot color (optional)",f_low:"Night low (text, entity or template)",f_slot:"Sensor",f_secondary:"Secondary line (text, entity or template)",f_path:"View path",f_co2_value:"CO\u2082 saved (text, entity or template)",f_co2_trees:"Trees equivalent (optional)",co2_title:"CO\u2082 chip",co2_hint:"An optional chip in the centre of the top bar, as in the app.",f_preset:"Preset",preset_none:"None (custom)",preset_hint:"Auto-bound and styled. Set Preset to \u201CNone (custom)\u201D to choose your own entity or template.",today:"Today",preset:{solar:"Solar power",grid:"Grid power",battery:"Battery power",solar_today:"Solar produced today",usage:"Consumption today",energy_independence:"Energy independence"},src_auto:"Auto",src_entity:"Entity",src_template:"Template",anchor:{center:"Center","top-left":"Top left","top-center":"Top center","top-right":"Top right","bottom-left":"Bottom left","bottom-center":"Bottom center","bottom-right":"Bottom right"},remove:"Remove",embed_missing:"Lovelace view not found \u2014 check the path in the editor.",embed_empty:"No view path set for this tab."}};var Ia={card:{no_device:"Kein EcoFlow Stream-Ger\xE4t gefunden. Richten Sie zuerst die EcoFlow IoT-Integration ein.",device:"EcoFlow Stream",solar:"Solar",grid:"Netz",grid_import:"Bezug",grid_export:"Einspeisung",grid_idle:"Netz inaktiv",battery:"Batterie",charging:"L\xE4dt",discharging:"Entl\xE4dt",today:"Solar heute",produced:"erzeugt",forecast:"Prognose",of_forecast:"{pct}% der Prognose",exceeded:"Prognose erreicht",reserve:"Reserve",charge_limit:"Laden \u2264",discharge_limit:"Entladen \u2265",ac1:"AC 1",ac2:"AC 2",off:"Aus",confirm_action:"Sind Sie sicher?"},house:{home:"Hausnetz",grid:"Netz",from_grid:"Vom Netz",to_grid:"Ins Netz",idle:"Bereit",not_setup:"Karte nicht eingerichtet \u2013 richten Sie die EcoFlow IoT-Integration ein",page:{appearance:"Darstellung",display:"Anzeige",battery:"Batterie",entities:"Entit\xE4ten"},short:{show_flows:"Fl\xFCsse",show_grid:"Netz",show_solar:"Solar",show_home:"Haus",show_battery:"Batterie"},mode:{auto:"Automatisch",day:"Tag",night:"Nacht"},toggle:{show_flows:"Energiefl\xFCsse animieren",show_grid:"Netzleistung anzeigen",show_solar:"Solarleistung anzeigen",show_home:"Hausverbrauch anzeigen",show_battery:"Batterie anzeigen"},editor:{style:"Haus-Stil",style_n:"Haus {n}",mode:"Tag / Nacht",battery:"Batterie",battery_hint:"W\xE4hle das Ger\xE4te-Render, das zu deinem Aufbau passt. Es wird vor dem Haus angezeigt.",custom:"Eigenes Hausbild",custom_light:"Helles / Tag-Bild",custom_dark:"Dunkles / Nacht-Bild",custom_remove:"Entfernen",uploading:"Wird hochgeladen \u2026",custom_hint:"Lade dein eigenes Haus-Render hoch, um es statt der mitgelieferten Stile zu verwenden. Das dunkle Bild wird nachts angezeigt (Auto-/Nacht-Modus); lade nur das helle hoch, um es f\xFCr beide zu nutzen. F\xFCr eine perfekte Passung das mitgelieferte Format 2340\xD71680 \xFCbernehmen \u2013 lade unten den kompletten Satz zum Nachzeichnen herunter.",download_zip:"Alle Hausbilder herunterladen (.zip)",preparing:"Download wird vorbereitet \u2026",entities:"Entit\xE4ten",entities_hint:"\xDCberschreiben Sie die automatisch erkannten Sensoren, die die Darstellung steuern. Leer lassen, um die Standardwerte der Integration zu verwenden."},battery:{re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + Gateway",re305_or_re306_battery:"Stream Ultra",re305_or_re306_device:"Stream Ultra + Wechselrichter",re305_device:"Stream Ultra + Batterie",re306_device:"Stream Ultra (einzeln)",re306_dpu_battery:"Stream Ultra (gestapelt)",po_space_re305_battery:"Batteriestapel",po_space_battery:"Batterie + Wechselrichter",po_space_battery_system_battery:"Einzelbatterie",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Batterie (JT303)",jt321_space_battery:"Batterie (JT321)",dc303_space_battery:"Batterie (DC303)"}},battery:{title:"Batterie",idle:"Inaktiv",health:"Zustand",calendar_health:"Kalenderzustand",temperature:"Temperatur",time_to_full:"Zeit bis voll",time_to_empty:"Zeit bis leer",capacity:"Kapazit\xE4t",cycles:"Zyklen"},confirm:{title:"Steckdose ausschalten?",ac_off:"{name} ausschalten? Alles, was daran angeschlossen ist, verliert die Stromversorgung.",cancel:"Abbrechen",turn_off:"Ausschalten"},panels:{title:"Solarmodule",panel:"Modul {n}",total:"Gesamt",none:"F\xFCr dieses Ger\xE4t sind keine Daten je Solarmodul verf\xFCgbar."},editor:{device:"EcoFlow-Ger\xE4t",automatic:"Automatisch",image:"Ger\xE4tebild",entity:"Entit\xE4t",value_template:"Wert / Vorlage",mode_auto:"Auto",mode_entity:"Entit\xE4t",mode_custom:"Benutzerdefiniert",auto_value:"Automatisch erkannt: {value}",not_found:"nicht gefunden",overridden:"{n} \xFCberschrieben",shown:"Angezeigt",nothing_shown:"Nichts angezeigt",panel:"Modul {n}",panel_name:"Modulname",panel_entity:"Leistungssensor",panel_hidden:"Auf der Karte ausgeblendet.",panels_hint:"Benennen Sie ein Modul um, weisen Sie ihm einen anderen Sensor zu oder blenden Sie es aus der Aufschl\xFCsselung aus. Mit dem Schalter zeigen oder verbergen Sie jedes Modul.",panels_count:"{n} Module",panels_hidden:"{n} ausgeblendet",loading:"L\xE4dt\u2026",forecast_hint:"W\xE4hlen Sie, welche Solarprognose-Anbieter verwendet werden \u2014 dieselben, die im Energie-Dashboard von Home Assistant eingerichtet sind (Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule).",forecast_none:"Keine Solarprognose konfiguriert. F\xFCgen Sie unter Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule eine Prognose hinzu, dann erscheint sie hier.",forecast_none_short:"Nicht konfiguriert",forecast_selected:"{n} von {total} Anbietern",none:"Nicht festgelegt",collection_key:"Energie-Sammlungsschl\xFCssel",collection_hint:"Optional. Um einem in einer Energie-Zeitraumauswahl-Karte gew\xE4hlten Datum zu folgen (Energie-Datumsauswahl), geben Sie hier denselben Sammlungsschl\xFCssel ein wie auf jener Karte \u2014 er beginnt mit \u201Eenergy_\u201C; verwenden Sie \u201Eenergy\u201C f\xFCr eine Auswahl, die auf ihrem Standardschl\xFCssel belassen wurde. Leer lassen, um immer heute anzuzeigen.",stats_default:"Standard (Solar, Netz)",stats_count:"{n} Kacheln",stats_default_hint:"Die Karte zeigt die aktuelle Solar- und Netzleistung. Passen Sie sie an, um stattdessen beliebige Entit\xE4ten anzuzeigen \u2014 jede mit eigener Tipp-Aktion.",stats_customize:"Kacheln anpassen",stats_hint:"F\xFCgen Sie die Entit\xE4ten hinzu, die als Kacheln angezeigt werden sollen. Legen Sie Name und Symbol fest und w\xE4hlen Sie, was beim Tippen passiert (standardm\xE4\xDFig Info-Dialog).",stats_add:"Kachel hinzuf\xFCgen",stats_reset:"Auf Standard zur\xFCcksetzen",stats_remove:"Entfernen",stats_move_up:"Nach oben",stats_move_down:"Nach unten",stat_n:"Kachel {n}",stat_field_entity:"Entit\xE4t",stat_field_name:"Name",stat_field_icon:"Symbol",stat_field_tap_action:"Tipp-Aktion"},page:{appearance:"Darstellung",entities:"Entit\xE4ten",stats:"Kacheln",panels:"Solarmodule",forecast:"Solarprognose",advanced:"Erweitert"},toggle:{show_image:"Ger\xE4tebild anzeigen",show_today:"Heutige Erzeugung anzeigen",show_grid:"Netzleistung anzeigen",show_ac:"AC-Steckdosen anzeigen",show_panels:"F\xFCr Aufschl\xFCsselung je Modul auf Solarleistung tippen",show_forecast:"Heutige Erzeugung mit der Prognose vergleichen"},short:{show_image:"Bild",show_today:"Heute",show_grid:"Netz",show_ac:"AC-Steckdosen",show_panels:"Module",show_forecast:"Prognose"},slot:{sensor:{cms_batt_soc:"Batteriestand",bat_power:"Batterieleistung (Lade-/Entladegeschwindigkeit)",pv_total:"Solarleistung",grid_power:"Netzleistung",sys_grid_power:"Netzleistung (Gesamtsystem)",sys_load:"Hausverbrauch",solar_energy:"Solarenergie (Quelle f\xFCr Tagessumme)",pv1_power:"Solarmodul 1",pv2_power:"Solarmodul 2",pv3_power:"Solarmodul 3",pv4_power:"Solarmodul 4",schuko1_power:"AC-Steckdose 1 Leistung",schuko2_power:"AC-Steckdose 2 Leistung",forecast_today:"Prognose-Entit\xE4t (erwartete Erzeugung heute)"},number:{max_charge_soc:"Ladelimit",min_discharge_soc:"Entladelimit",backup_reserve:"Notstromreserve"},switch:{ac1:"AC-Steckdose 1",ac2:"AC-Steckdose 2"}},space:{page:{appearance:"Darstellung",weather:"Wetter",overlays:"Schwebende Overlays",tiles:"Kacheln unten",tabs:"Seitenleisten-Tabs"},n_items:"{n} konfiguriert",weather_hint:"W\xE4hle eine Wetter-Entit\xE4t, um Temperatur und Luftfeuchte in der Kopfzeile zu zeigen. Leer lassen zum Ausblenden.",weather_entity:"Wetter-Entit\xE4t",overlays_hint:"Schwebende Werte \xFCber dem Haus. Ziehe einen Chip in der Vorschau zum Positionieren oder nutze X/Y unten. Binde jeden an einen erkannten Sensor, eine Entit\xE4t oder ein Template.",add_overlay:"Overlay hinzuf\xFCgen",tiles_hint:"Die Kacheln am unteren Rand. Jede zeigt einen Wert aus Sensor, Entit\xE4t oder Template.",add_tile:"Kachel hinzuf\xFCgen",tabs_hint:"Die Seitenleisten-Buttons. Der erste ist immer Home (die Szene oben); jeder weitere Tab bettet eine vorhandene Lovelace-Ansicht per Pfad ein.",rail_labels:"Beschriftungen unter Symbolen anzeigen",rail_align:"Ausrichtung",align:{start:"Oben",center:"Mitte",end:"Unten"},add_tab:"Tab hinzuf\xFCgen",home_tab:"Home",path_hint:"Lovelace-Ansichtspfad, z. B. solar oder dashboard-name/solar",f_label:"Bezeichnung",f_icon:"Symbol (mdi:\u2026)",f_unit:"Einheit",f_anchor:"Anker",f_color:"Wertfarbe (optional)",f_icon_color:"Symbolfarbe (optional)",f_dot:"Statuspunkt-Farbe (optional)",f_low:"Nacht-Tiefstwert (Text, Entit\xE4t oder Template)",f_slot:"Sensor",f_secondary:"Zweite Zeile (Text, Entit\xE4t oder Template)",f_path:"Ansichtspfad",f_co2_value:"CO\u2082 eingespart (Text, Entit\xE4t oder Template)",f_co2_trees:"Baum-\xC4quivalent (optional)",co2_title:"CO\u2082-Chip",co2_hint:"Ein optionaler Chip in der Mitte der Kopfzeile, wie in der App.",f_preset:"Vorlage",preset_none:"Keine (benutzerdefiniert)",preset_hint:"Automatisch verkn\xFCpft und gestylt. Setze die Vorlage auf \u201EKeine\u201C, um eine eigene Entit\xE4t oder ein Template zu w\xE4hlen.",today:"Heute",preset:{solar:"Solarleistung",grid:"Netzleistung",battery:"Batterieleistung",solar_today:"Heute erzeugter Solarstrom",usage:"Verbrauch heute",energy_independence:"Energieunabh\xE4ngigkeit"},src_auto:"Auto",src_entity:"Entit\xE4t",src_template:"Template",anchor:{center:"Mitte","top-left":"Oben links","top-center":"Oben mittig","top-right":"Oben rechts","bottom-left":"Unten links","bottom-center":"Unten mittig","bottom-right":"Unten rechts"},remove:"Entfernen",embed_missing:"Lovelace-Ansicht nicht gefunden \u2014 Pfad im Editor pr\xFCfen.",embed_empty:"F\xFCr diesen Tab ist kein Ansichtspfad gesetzt."}};var hr={en:Fa,de:Ia};function Wo(_){return(_?.locale?.language||_?.language||"en").split("-")[0]}function La(_,i){let r=i.split(".").reduce((l,h)=>l?.[h],_);return typeof r=="string"?r:void 0}function Ft(_,i,r={}){let l=hr[Wo(_)]||hr.en,h=La(l,i)??La(hr.en,i)??i;for(let[g,$]of Object.entries(r))h=h.replace(`{${g}}`,$);return h}var za=jt`
  ha-card {
    padding: 20px;
  }
  .empty {
    padding: 8px;
    color: var(--secondary-text-color);
  }
  .clickable {
    cursor: pointer;
  }
  /* <picture> wrappers shouldn't affect layout; the inner <img> is the box. */
  picture {
    display: contents;
  }

  /* header: name + AC on the left, battery/device circle on the right */
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
  }
  .head-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
  }
  .name {
    font-size: 1.4em;
    font-weight: 700;
    line-height: 1.15;
  }
  .subtitle {
    color: var(--secondary-text-color);
    font-size: 0.95em;
  }
  /* battery / device circle (right of the header, vertically centred) */
  .batt-circle {
    position: relative;
    width: 152px;
    height: 152px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--secondary-background-color);
  }
  /* energy-flow particles: small dots that stream inward (absorbed into the
     device) while charging and outward while discharging — replaces the old
     pulsing glow. Lives behind the device image so particles visually merge
     into / emerge from the device near the centre.

     State changes are animated, never an instant swap: the whole layer fades
     via opacity (.show), the dot colour transitions between charge/discharge,
     and going idle pauses the animation in place (instead of snapping the dots
     to the centre) so they fade out gracefully. */
  .batt-particles {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.55s ease;
  }
  .batt-particles.show {
    opacity: 1;
  }
  .batt-particles .particle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    margin: -2.5px 0 0 -2.5px;
    border-radius: 50%;
    opacity: 0;
    will-change: transform, opacity;
    transition: background-color 0.55s ease, box-shadow 0.55s ease;
  }
  .batt-particles.charge .particle {
    background-color: var(--state-sensor-battery-high-color, #43a047);
    box-shadow: 0 0 5px color-mix(in srgb, var(--state-sensor-battery-high-color, #43a047) 70%, transparent);
    animation: particle-charge 1.6s linear infinite;
  }
  .batt-particles.discharge .particle {
    background-color: var(--info-color, #2196f3);
    box-shadow: 0 0 5px color-mix(in srgb, var(--info-color, #2196f3) 70%, transparent);
    animation: particle-discharge 1.6s linear infinite;
  }
  /* while fading out (idle) keep the dots frozen where they are rather than
     letting the animation reset them to the centre. */
  .batt-particles:not(.show) .particle {
    animation-play-state: paused;
  }
  @keyframes particle-charge {
    0% {
      transform: rotate(var(--angle)) translateY(-64px) scale(1);
      opacity: 0;
    }
    15%,
    80% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) translateY(-22px) scale(0.3);
      opacity: 0;
    }
  }
  @keyframes particle-discharge {
    0% {
      transform: rotate(var(--angle)) translateY(-22px) scale(0.3);
      opacity: 0;
    }
    15%,
    80% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) translateY(-64px) scale(1);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .batt-particles .particle {
      animation: none !important;
    }
  }
  .batt-ring {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .ring-track {
    fill: none;
    stroke: var(--divider-color);
    stroke-width: 5;
  }
  .ring-fill {
    fill: none;
    stroke: var(--state-sensor-battery-high-color, #43a047);
    stroke-width: 5;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease, stroke 0.55s ease;
  }
  .ring-fill.low {
    stroke: var(--error-color, #db4437);
  }
  .ring-fill.charge {
    stroke: var(--state-sensor-battery-high-color, #43a047);
  }
  .ring-fill.discharge {
    stroke: var(--info-color, #2196f3);
  }
  /* a spark that travels around the ring while charging / discharging; fades
     in/out (.show) and transitions colour rather than popping on state change */
  .ring-spin {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform-box: fill-box;
    opacity: 0;
    transition: opacity 0.55s ease, stroke 0.55s ease;
  }
  .ring-spin.show {
    opacity: 1;
  }
  .ring-spin.charge {
    stroke: var(--state-sensor-battery-high-color, #43a047);
    animation: ring-spin 1.5s linear infinite;
  }
  .ring-spin.discharge {
    stroke: var(--info-color, #2196f3);
    animation: ring-spin 1.9s linear infinite reverse;
  }
  .ring-spin:not(.show) {
    animation-play-state: paused;
  }
  @keyframes ring-spin {
    to {
      transform: rotate(360deg);
    }
  }
  /* charge / discharge / reserve limit ticks on the ring */
  .ring-tick {
    stroke-width: 2.4;
    stroke-linecap: round;
  }
  .ring-tick.charge {
    stroke: var(--state-sensor-battery-high-color, #43a047);
  }
  .ring-tick.discharge {
    stroke: var(--error-color, #db4437);
  }
  .ring-tick.reserve {
    stroke: var(--primary-text-color);
  }
  .batt-circle .device-img {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 58%;
    max-height: 58%;
    object-fit: contain;
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
  }
  .batt-icon {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    --mdc-icon-size: 56px;
    color: var(--state-icon-color, var(--primary-text-color));
  }
  .batt-badge {
    position: absolute;
    left: 50%;
    bottom: -3px;
    transform: translateX(-50%);
    background: var(--card-background-color, var(--ha-card-background));
    border: 1px solid var(--divider-color);
    border-radius: 13px;
    padding: 1px 11px;
    font-weight: 800;
    font-size: 1.05em;
    color: var(--primary-text-color);
  }
  .batt-speed {
    position: absolute;
    left: 50%;
    top: -3px;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    gap: 3px;
    border-radius: 13px;
    padding: 2px 9px;
    font-size: 0.78em;
    font-weight: 700;
    white-space: nowrap;
    background: var(--card-background-color, var(--ha-card-background));
    border: 1px solid var(--divider-color);
  }
  .batt-speed ha-icon {
    --mdc-icon-size: 14px;
  }
  .batt-speed.charge {
    color: var(--state-sensor-battery-high-color, #43a047);
  }
  .batt-speed.discharge {
    color: var(--info-color, #2196f3);
  }

  /* AC sockets (stacked, compact, in the header's left column) */
  .ac {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 14px;
  }
  .ac-socket {
    display: flex;
    align-items: center;
    gap: 9px;
    background: var(--secondary-background-color);
    border-radius: 12px;
    padding: 6px 10px;
    transition: filter 0.15s ease;
  }
  .ac-socket:hover {
    filter: brightness(1.08);
  }
  .ac-socket ha-switch {
    --mdc-switch-track-width: 32px;
    transform: scale(0.85);
    transform-origin: right center;
  }
  .ac-icon {
    --mdc-icon-size: 19px;
    color: var(--secondary-text-color);
  }
  .ac-icon.on {
    color: var(--state-switch-active-color, var(--primary-color));
  }
  .ac-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }
  .ac-name {
    color: var(--secondary-text-color);
    font-size: 0.8em;
    line-height: 1.2;
  }
  .ac-power {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .ac-power .metric-num {
    font-size: 1.05em;
  }

  /* power stats */
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }
  /* a configured stat list can hold any number of tiles — let them wrap. */
  .stats.custom {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
  .stat {
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    transition: filter 0.15s ease, transform 0.1s ease;
  }
  .stat.clickable:hover {
    filter: brightness(1.08);
  }
  .stat.clickable:active {
    transform: scale(0.99);
  }
  .stat-head {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--secondary-text-color);
    font-size: 0.85em;
  }
  .stat-head ha-icon,
  .stat-head ha-state-icon {
    --mdc-icon-size: 18px;
  }
  .stat-head .more {
    margin-left: auto;
    opacity: 0.6;
    --mdc-icon-size: 16px;
  }
  .stat-value {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .stat-sub {
    font-size: 0.82em;
    color: var(--secondary-text-color);
  }
  /* shared number + muted unit, used for every primary value */
  .metric {
    display: inline-flex;
    align-items: baseline;
    gap: 3px;
  }
  .metric-num {
    font-size: 1.4em;
    font-weight: 800;
    line-height: 1;
  }
  .metric-unit {
    font-size: 0.78em;
    font-weight: 600;
    opacity: 0.8;
  }
  .solar .stat-value {
    color: var(--energy-solar-color, #ff9800);
  }
  .grid.import .stat-value {
    color: var(--energy-grid-consumption-color, #488fc2);
  }
  .grid.export .stat-value {
    color: var(--energy-grid-return-color, #8353d1);
  }

  /* today's production + forecast */
  .today {
    margin-top: 16px;
    padding: 14px;
    border-radius: 14px;
    background: var(--secondary-background-color);
    transition: filter 0.15s ease;
  }
  .today.clickable:hover {
    filter: brightness(1.08);
  }
  .today-head {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .today-more {
    align-self: center;
    margin-left: auto;
    color: var(--secondary-text-color);
    --mdc-icon-size: 18px;
  }
  .today-more + .today-value {
    margin-left: 8px;
  }
  .today-head ha-icon {
    --mdc-icon-size: 18px;
    color: var(--energy-solar-color, #ff9800);
    align-self: center;
  }
  .today-label {
    color: var(--secondary-text-color);
    font-size: 0.85em;
  }
  .today-value {
    margin-left: auto;
    font-weight: 800;
    color: var(--energy-solar-color, #ff9800);
  }
  .fc-bar {
    height: 10px;
    border-radius: 5px;
    background: var(--divider-color);
    margin: 12px 0 6px;
    overflow: hidden;
  }
  .fc-fill {
    height: 100%;
    border-radius: 5px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.5s ease;
  }
  .fc-fill.met {
    background: var(--state-sensor-battery-high-color, #43a047);
  }
  .fc-legend {
    display: flex;
    justify-content: space-between;
    font-size: 0.82em;
    color: var(--secondary-text-color);
  }
  .fc-legend b {
    color: var(--primary-text-color);
    font-weight: 700;
  }

  /* dialog */
  .dlg-body {
    padding: 4px 4px 8px;
  }

  /* battery detail dialog */
  .batt-detail {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 4px 2px 6px;
  }
  .batt-hero {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  img.batt-hero-img {
    width: 96px;
    height: 96px;
    object-fit: contain;
  }
  ha-icon.batt-hero-img {
    --mdc-icon-size: 72px;
    color: var(--secondary-text-color);
  }
  .batt-hero-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .batt-hero-pct {
    font-size: 2.6em;
    font-weight: 700;
    line-height: 1;
    color: var(--primary-text-color);
  }
  .batt-hero-u {
    font-size: 0.45em;
    font-weight: 600;
    color: var(--secondary-text-color);
    margin-left: 2px;
  }
  .batt-hero-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.95em;
    font-weight: 600;
    color: var(--secondary-text-color);
  }
  .batt-hero-status ha-icon {
    --mdc-icon-size: 18px;
  }
  .batt-hero-status.charge {
    color: var(--state-sensor-battery-high-color, #43a047);
  }
  .batt-hero-status.discharge {
    color: var(--info-color, #2196f3);
  }
  .batt-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .batt-tile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    border-radius: 12px;
    background: var(--secondary-background-color);
  }
  .batt-tile.clickable {
    cursor: pointer;
    transition: filter 0.15s ease;
  }
  .batt-tile.clickable:hover {
    filter: brightness(1.06);
  }
  .batt-tile > ha-icon {
    --mdc-icon-size: 22px;
    color: var(--primary-color);
    flex: 0 0 auto;
  }
  .batt-tile-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .batt-tile-val {
    font-size: 1.05em;
    font-weight: 700;
    color: var(--primary-text-color);
    white-space: nowrap;
  }
  .batt-tile-label {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .confirm-body {
    padding: 4px 4px 0;
  }
  .confirm-text {
    color: var(--secondary-text-color);
    font-size: 0.95em;
    line-height: 1.45;
  }
  .confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 24px;
  }
  .text-btn,
  .filled-btn {
    border: none;
    border-radius: 20px;
    padding: 10px 18px;
    font-size: 0.95em;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.15s ease, background-color 0.15s ease;
  }
  .text-btn {
    background: transparent;
    color: var(--primary-color);
  }
  .text-btn:hover {
    background: color-mix(in srgb, var(--primary-color) 10%, transparent);
  }
  .filled-btn {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    padding: 10px 24px;
  }
  .filled-btn.danger {
    background: var(--error-color, #db4437);
    color: #fff;
  }
  .filled-btn:hover {
    filter: brightness(1.08);
  }
  .panels {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .panel-row {
    padding: 10px 8px;
    border-radius: 10px;
    transition: background-color 0.15s ease;
  }
  .panel-row:hover {
    background: var(--secondary-background-color);
  }
  .panel-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel-name {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-text-color);
  }
  .panel-name ha-icon {
    --mdc-icon-size: 20px;
    color: var(--energy-solar-color, #ff9800);
  }
  .panel-val {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .pbar {
    height: 7px;
    border-radius: 4px;
    background: var(--divider-color);
    margin-top: 7px;
    overflow: hidden;
  }
  .pfill {
    height: 100%;
    border-radius: 4px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.4s ease;
  }
  .panel-total {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding: 10px 8px 2px;
    border-top: 1px solid var(--divider-color);
    font-weight: 700;
    color: var(--primary-text-color);
  }

  /* forecast / production graph */
  .fc-graph-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .fc-graph-title {
    font-weight: 700;
    font-size: 1.15em;
    color: var(--primary-text-color);
  }
  .fc-graph-total {
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 5px 12px;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .chart {
    width: 100%;
    height: auto;
    display: block;
  }
  .fc-grid {
    stroke: var(--divider-color);
    stroke-width: 1;
  }
  .fc-axis {
    fill: var(--secondary-text-color);
    font-size: 13px;
    font-family: inherit;
  }
  .fc-axis-y,
  .fc-unit {
    text-anchor: end;
  }
  .fc-axis-x {
    text-anchor: middle;
  }
  .fc-actual {
    fill: var(--energy-solar-color, #ff9800);
  }
  .fc-line {
    fill: none;
    stroke: var(--primary-text-color);
    stroke-width: 2;
    stroke-dasharray: 6 5;
    stroke-linejoin: round;
    opacity: 0.85;
  }
  .fc-graph-legend {
    display: flex;
    gap: 18px;
    justify-content: center;
    margin-top: 10px;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }
  .lg {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .lg::before {
    content: "";
    width: 14px;
    height: 3px;
    border-radius: 2px;
  }
  .lg-actual::before {
    height: 12px;
    width: 10px;
    border-radius: 2px;
    background: var(--energy-solar-color, #ff9800);
  }
  .lg-fc::before {
    background: repeating-linear-gradient(
      90deg,
      var(--primary-text-color) 0 6px,
      transparent 6px 11px
    );
  }

  /* produced-vs-forecast progress (red) */
  .fc-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: -2px 0 12px;
  }
  .fc-progress-track {
    flex: 1;
    height: 8px;
    border-radius: 6px;
    background: var(--secondary-background-color);
    overflow: hidden;
  }
  .fc-progress-fill {
    height: 100%;
    border-radius: 6px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.5s ease;
  }
  .fc-progress-label {
    font-size: 0.85em;
    font-weight: 700;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  /* the live, in-progress hour: same solar colour as the other bars, set apart
   * by a gentle pulse + glow that reads as "still rising" */
  .fc-current {
    transform-box: fill-box;
    transform-origin: bottom;
    animation: fc-pulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 0 3px var(--energy-solar-color, #ff9800));
  }
  @keyframes fc-pulse {
    0%,
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
    50% {
      opacity: 0.6;
      transform: scaleY(1.04);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .fc-current {
      animation: none;
    }
  }

  /* hover / touch tooltip */
  .fc-hit {
    fill: transparent;
    pointer-events: all;
    cursor: pointer;
  }
  .fc-band {
    fill: var(--primary-text-color);
    opacity: 0.06;
  }
  .fc-tip-box {
    fill: var(--card-background-color, #1c1c1c);
    stroke: var(--divider-color);
    stroke-width: 1;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
  }
  .fc-tip-time {
    fill: var(--primary-text-color);
    font-size: 15px;
    font-weight: 700;
  }
  .fc-tip-line {
    fill: var(--secondary-text-color);
    font-size: 14px;
  }
  .fc-tip-line .v {
    fill: var(--primary-text-color);
    font-weight: 700;
  }
`;function cr(_){let i=[];for(let r=1;r<=4;r++){let l=_._config.panels?.[r]||{};if(l.hidden)continue;let h=`sensor.pv${r}_power`,g=_._state(h);g&&i.push({i:r,watts:pt(g),id:_._entityId(h),name:l.name||null})}return i}function Oa(_){let i=(g,$)=>Ft(_.hass,g,$),r=cr(_);if(!r.length)return L`<div class="empty">${i("panels.none")}</div>`;let l=Math.max(1,...r.map(g=>g.watts||0)),h=r.reduce((g,$)=>g+($.watts||0),0);return L`<div class="panels">
    ${r.map(g=>L`<div
        class="panel-row clickable"
        @click=${()=>_._moreInfoId(g.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${g.name||i("panels.panel",{n:g.i})}
          </span>
          <span class="panel-val">${we(g.watts)??"\u2013"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,(g.watts||0)/l*100)}%"
          ></div>
        </div>
      </div>`)}
    <div class="panel-total">
      <span>${i("panels.total")}</span>
      <span>${we(h)??"\u2013"}</span>
    </div>
  </div>`}var gs=1e3,dr=340,Et={l:46,r:14,t:16,b:28};function Va(_,{actual:i,forecast:r,totalWh:l,forecastWh:h,currentHour:g,showForecast:$,title:D}){let U=(Z,St)=>Ft(_.hass,Z,St),j=gs-Et.l-Et.r,nt=dr-Et.t-Et.b,X=j/24,rt=Z=>Et.l+Z/24*j,at=0;for(let Z=0;Z<24;Z++)at=Math.max(at,(i[Z]||0)/1e3),$&&(at=Math.max(at,(r[Z]||0)/1e3));let ot=qo(at>0?at:.1),ce=Z=>Et.t+nt-Z/ot*nt,Nt=X*.66,Kt=[];for(let Z=0;Z<24;Z++){let St=(i[Z]||0)/1e3;if(St<=0)continue;let Se=rt(Z+.5)-Nt/2,Ue=ce(St),Ne=Z===g?"fc-actual fc-current":"fc-actual";Kt.push(Ht`<rect class=${Ne} x=${Se.toFixed(1)} y=${Ue.toFixed(1)}
        width=${Nt.toFixed(1)} height=${(Et.t+nt-Ue).toFixed(1)} rx="2"></rect>`)}let ee=null;if($){let Z=[];for(let St=0;St<=24;St++)Z.push(`${rt(St).toFixed(1)},${ce((r[St]||0)/1e3).toFixed(1)}`);ee=Ht`<polyline class="fc-line" points=${Z.join(" ")}></polyline>`}let Wt=[],Hi=4;for(let Z=0;Z<=Hi;Z++){let St=ot/Hi*Z,Se=ce(St);Wt.push(Ht`<line class="fc-grid" x1=${Et.l} y1=${Se.toFixed(1)} x2=${gs-Et.r} y2=${Se.toFixed(1)}></line>`),Wt.push(Ht`<text class="fc-axis fc-axis-y" x=${Et.l-6} y=${(Se+4).toFixed(1)}>${Go(St)}</text>`)}let vi=[];for(let Z=0;Z<=24;Z+=4)vi.push(Ht`<text class="fc-axis fc-axis-x" x=${rt(Z).toFixed(1)} y=${dr-8}>${Z}:00</text>`);let Lt=$&&h>0&&l!=null?Math.round(l/h*100):null,ii=Z=>{_._fcTip!==Z&&(_._fcTip=Z,_.requestUpdate())},ie=()=>{_._fcTip!=null&&(_._fcTip=null,_.requestUpdate())},Cs=[];for(let Z=0;Z<24;Z++)Cs.push(Ht`<rect class="fc-hit" x=${rt(Z).toFixed(1)} y=${Et.t} width=${X.toFixed(1)} height=${nt}
        @pointerenter=${()=>ii(Z)} @pointermove=${()=>ii(Z)}
        @pointerdown=${()=>ii(Z)}></rect>`);let De=_._fcTip,si=De!=null&&De>=0&&De<24,ur=si?Ht`<rect class="fc-band" x=${rt(De).toFixed(1)} y=${Et.t} width=${X.toFixed(1)} height=${nt}></rect>`:null,Wi=si?ut(De):null;function ut(Z){let St=((i[Z]||0)/1e3).toFixed(2),Se=((r[Z]||0)/1e3).toFixed(2),Ue=184,Ne=$?84:60,Be=rt(Z+.5)-Ue/2;Be=Math.max(Et.l,Math.min(gs-Et.r-Ue,Be));let je=Et.t+6,ri=Be+12;return Ht`<g class="fc-tip" pointer-events="none">
      <rect class="fc-tip-box" x=${Be.toFixed(1)} y=${je} width=${Ue} height=${Ne} rx="7"></rect>
      <text class="fc-tip-time" x=${ri} y=${je+24}>${Ra(Z)}:00 – ${Ra((Z+1)%24)}:00</text>
      <text class="fc-tip-line" x=${ri} y=${je+46}>${U("card.produced")}: <tspan class="v">${St} kWh</tspan></text>
      ${$?Ht`<text class="fc-tip-line" x=${ri} y=${je+68}>${U("card.forecast")}: <tspan class="v">${Se} kWh</tspan></text>`:null}
    </g>`}return L`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${D||U("card.today")}</span>
      <span class="fc-graph-total"
        >${(l!=null?l/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    ${Lt!=null?L`<div class="fc-progress" title=${U("card.of_forecast",{pct:Lt})}>
          <div class="fc-progress-track">
            <div
              class="fc-progress-fill"
              style="width:${Math.min(100,Lt)}%"
            ></div>
          </div>
          <span class="fc-progress-label">${U("card.of_forecast",{pct:Lt})}</span>
        </div>`:""}
    <svg
      class="chart"
      viewBox="0 0 ${gs} ${dr}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      @pointerleave=${ie}
      @pointercancel=${ie}
    >
      ${Wt}${vi}
      <text class="fc-axis fc-unit" x=${Et.l-6} y=${Et.t-4}>kWh</text>
      ${ur}${Kt}${ee}${Cs}${Wi}
    </svg>
    ${$?L`<div class="fc-graph-legend">
          <span class="lg lg-actual">${U("card.produced")}</span>
          <span class="lg lg-fc">${U("card.forecast")}</span>
        </div>`:""}
  </div>`}function qo(_){let i=Math.pow(10,Math.floor(Math.log10(_))),r=_/i;return(r<=1?1:r<=2?2:r<=5?5:10)*i}function Go(_){return _>=10?Math.round(_).toString():_.toFixed(1).replace(/\.0$/,"")}function Ra(_){return String(_).padStart(2,"0")}var Yo=300*1e3,vs=class extends kt{static styles=za;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._battDir="",this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),Yt(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},Yo)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let i of Object.values(this._tmplUnsub||{}))typeof i=="function"&&i();this._tmplUnsub={}}setConfig(i){this._config=i||{}}static getConfigElement(){return document.createElement(`${Mt}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(i,r){return Ft(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=oe(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_state(i){let r=this._config.entities?.[i];if(r){if(ct(r)){let h=this._templateResults?.[r];return{state:h===void 0?"unknown":String(h),attributes:{}}}return gt(r)?this.hass.states[r]:{state:r,attributes:{}}}let l=this._map?.[i];return l?this.hass.states[l]:void 0}_entityId(i){let r=this._config.entities?.[i];return r&&gt(r)&&!ct(r)?r:this._map?.[i]}updated(i){super.updated(i),(i.has("hass")||i.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let i=this._entityId("sensor.solar_energy");if(!i||!this.hass)return;let{start:r,end:l}=this._dataRange(),h=await Pa(this.hass,i,r,l);this._hourly=h||{},this._todayWh=h?Object.values(h).reduce((g,$)=>g+($||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await ar(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let i=new Date;return{start:new Date(i.getFullYear(),i.getMonth(),i.getDate()),end:i,ref:i}}_bindEnergyCollection(){let i=this._config.collection_key,r=i?`_${i}`:null;if(r!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=r,this._period=null),!r||this._collUnsub||!this.hass?.connection)return;let l=this.hass.connection[r];if(!l||typeof l.subscribe!="function")return;let h=()=>{this._period={start:l.start,end:l.end},this._refreshData()};this._collUnsub=l.subscribe(()=>h()),h()}_mergedForecast(){return Ea(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let i=or(this._mergedForecast(),this._dataRange().ref);return i!=null?i/1e3:null}_isToday(){let i=this._dataRange().ref,r=new Date;return i.getFullYear()===r.getFullYear()&&i.getMonth()===r.getMonth()&&i.getDate()===r.getDate()}_periodLabel(){return this._isToday()?this._t("card.today"):this._dataRange().ref.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let i=[...Object.values(this._config.entities||{}),this._config.title].filter(r=>ct(r));for(let r of i)if(!this._tmplUnsub[r]){this._tmplUnsub[r]=!0;try{this._tmplUnsub[r]=await this.hass.connection.subscribeMessage(l=>{this._templateResults[r]=l.result,this.requestUpdate()},{type:"render_template",template:r})}catch{this._templateResults[r]="error",this.requestUpdate()}}for(let r of Object.keys(this._tmplUnsub))if(!i.includes(r)){let l=this._tmplUnsub[r];typeof l=="function"&&l(),delete this._tmplUnsub[r],delete this._templateResults[r]}}_moreInfo(i){this._moreInfoId(this._entityId(i))}_moreInfoId(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}render(){if(!this.hass)return L``;let i=this._device;return i?(this._map=le(this.hass,i.ents),this._isToday()?L`<ha-card>
      ${this._renderHead(i)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),Oa(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),this._forecastGraph(),"large"):""}
      ${this._dialog==="battery"?this._dialogFrame(this._t("battery.title"),this._renderBatteryDetail()):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`:L`<ha-card>${this._forecastGraph()}</ha-card>`):L`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(i,r,l="medium"){return L`<ha-adaptive-dialog
      open
      width=${l}
      header-title=${i}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${r}</div>
    </ha-adaptive-dialog>`}_imageSrc(i){let r=i?.device?.model;return ye(this._config.image_url||(this._config.image?ui(this._config.image):$a(r)),this.hass)}_renderHead(i){let r=this._config.title,l=r&&ct(r)?String(this._templateResults?.[r]??""):r,h=i.device?.model,g=l||i.device?.name_by_user||i.device?.name||h||this._t("card.device"),$=this._imageSrc(i);return L`<div class="head">
      <div class="head-left">
        <div class="name">${g}</div>
        ${h&&h!==g?L`<div class="subtitle">${h}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle($,g)}
    </div>`}_renderBatteryCircle(i,r){let l=this._state("sensor.cms_batt_soc"),h=this._show("show_image")&&i;if(!l&&!h)return"";let g=pt(l),$=pt(this._state("sensor.bat_power")),D=this._state("binary_sensor.battery_charging")?.state==="on"||$!=null&&$>1,U=!D&&$!=null&&$<-1,j=D?"charge":U?"discharge":g!=null&&g<=15?"low":"",nt=D?"charge":U?"discharge":"";nt&&(this._battDir=nt);let X=nt||this._battDir,rt=!!nt,at=2*Math.PI*44,ot=g!=null?Math.max(0,Math.min(100,g)):0,ce=[{v:pt(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:pt(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:pt(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(Nt=>Nt.v!=null);return L`<div
      class="batt-circle clickable ${nt}"
      @click=${()=>this._dialog="battery"}
    >
      ${l?L`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${j}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${at.toFixed(1)};stroke-dashoffset:${(at*(1-ot/100)).toFixed(1)}"
            ></circle>
            ${X?Ht`<circle
                  class="ring-spin ${X} ${rt?"show":""}"
                  cx="50"
                  cy="50"
                  r="44"
                  stroke-dasharray="16 261"
                ></circle>`:""}
            ${ce.map(Nt=>{let Kt=Math.max(0,Math.min(100,Nt.v))/100*2*Math.PI,ee=Math.sin(Kt),Wt=Math.cos(Kt);return Ht`<line
                class="ring-tick ${Nt.cls}"
                x1=${(50+39.5*ee).toFixed(1)}
                y1=${(50-39.5*Wt).toFixed(1)}
                x2=${(50+48.5*ee).toFixed(1)}
                y2=${(50-48.5*Wt).toFixed(1)}
              ><title>${Nt.label} ${Math.round(Nt.v)}%</title></line>`})}
          </svg>`:""}
      ${l&&X?L`<div class="batt-particles ${X} ${rt?"show":""}">
            ${Array.from({length:12},(Nt,Kt)=>{let ee=Kt*30,Wt=Kt*5%12/12*1.6;return L`<span
                class="particle"
                style="--angle:${ee}deg;animation-delay:${Wt.toFixed(2)}s"
              ></span>`})}
          </div>`:""}
      ${h?L`<picture
            >${ti(i)?L`<source
                  srcset=${ti(i)}
                  type="image/webp"
                />`:""}<img class="device-img" src="${i}" alt="${r}"
          /></picture>`:l?L`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${l}
            ></ha-state-icon>`:L`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${l&&(D||U)&&$!=null?L`<span class="batt-speed ${nt}">
            <ha-icon
              icon=${D?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${we(Math.abs($))}
          </span>`:""}
      ${l?L`<span class="batt-badge"
            >${g!=null?Math.round(g):"\u2013"}%</span
          >`:""}
    </div>`}_renderBatteryDetail(){let i=this._device,r=this._show("show_image")&&this._imageSrc(i),l=i?.device?.name||i?.device?.model||this._t("card.device"),h=pt(this._state("sensor.cms_batt_soc")),g=pt(this._state("sensor.bat_power")),$=this._state("binary_sensor.battery_charging")?.state==="on"||g!=null&&g>1,D=!$&&g!=null&&g<-1,U=$?"charge":D?"discharge":"",j=$?"mdi:flash":D?"mdi:battery-arrow-down":"mdi:battery",nt=$?this._t("card.charging"):D?this._t("card.discharging"):this._t("battery.idle"),X=($||D)&&g!=null?we(Math.abs(g)):null,rt=[{slot:"sensor.soh",icon:"mdi:heart-pulse",label:this._t("battery.health")},{slot:"sensor.calendar_soh",icon:"mdi:calendar-heart",label:this._t("battery.calendar_health")},{slot:"sensor.bat_temp",icon:"mdi:thermometer",label:this._t("battery.temperature")},...$?[{slot:"sensor.chg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_full")}]:[],...D?[{slot:"sensor.dsg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_empty")}]:[],{slot:"sensor.full_energy",icon:"mdi:battery-high",label:this._t("battery.capacity")},{slot:"sensor.cycles",icon:"mdi:battery-sync",label:this._t("battery.cycles")}].map(at=>({...at,value:this._battTileValue(at.slot)})).filter(at=>at.value!=null);return L`<div class="batt-detail">
      <div class="batt-hero">
        ${r?L`<picture
              >${ti(r)?L`<source srcset=${ti(r)} type="image/webp" />`:""}<img class="batt-hero-img" src=${r} alt=${l}
            /></picture>`:L`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${h!=null?Math.round(h):"\u2013"}<span class="batt-hero-u">%</span></span
          >
          <span class="batt-hero-status ${U}">
            <ha-icon icon=${j}></ha-icon>${nt}${X?` \xB7 ${X}`:""}
          </span>
        </div>
      </div>
      ${rt.length?L`<div class="batt-grid">
            ${rt.map(at=>{let ot=this._entityId(at.slot);return L`<div
                class="batt-tile ${ot?"clickable":""}"
                @click=${ot?()=>this._moreInfoId(ot):null}
              >
                <ha-icon icon=${at.icon}></ha-icon>
                <div class="batt-tile-text">
                  <span class="batt-tile-val">${at.value}</span>
                  <span class="batt-tile-label">${at.label}</span>
                </div>
              </div>`})}
          </div>`:""}
    </div>`}_battTileValue(i){let r=this._state(i),l=pt(r);if(l==null)return null;let h=r.attributes?.unit_of_measurement||"";return h==="W"?we(l):h==="Wh"?lr(l):h==="kWh"?lr(l*1e3):h==="min"?Ca(l):h==="%"?`${Math.round(l)}%`:h?`${Math.round(l)} ${h}`:String(Math.round(l))}_renderAc(){let i=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(r=>({...r,swState:this._state(r.sw),pwState:this._state(r.pw)})).filter(r=>r.swState||r.pwState);return i.length?L`<div class="ac">
      ${i.map(r=>{let l=r.swState?.state==="on",h=pt(r.pwState);return L`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(r.pw)||this._entityId(r.sw))}
        >
          <ha-icon class="ac-icon ${l?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${r.label}</span>
            <span class="ac-power">
              ${r.swState&&!l?this._t("card.off"):h!=null?this._metric(he(h)):r.pwState?"\u2014":""}
            </span>
          </div>
          ${r.swState?L`<ha-switch
                .checked=${l}
                @click=${g=>g.stopPropagation()}
                @change=${()=>this._toggleSwitch(r.sw,r.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(i,r){let l=this._entityId(i),h=l?this.hass.states[l]:null;!l||!h||(h.state==="on"?this._confirmAc={slot:i,label:r}:this.hass.callService("switch","turn_on",{entity_id:l}))}_renderConfirmAc(){let{label:i}=this._confirmAc,r=()=>this._confirmAc=null;return L`<ha-adaptive-dialog
      open
      width="small"
      header-title=${this._t("confirm.title")}
      @closed=${r}
    >
      <div class="confirm-body">
        <div class="confirm-text">
          ${this._t("confirm.ac_off",{name:i})}
        </div>
        <div class="confirm-actions">
          <button class="text-btn" @click=${r}>
            ${this._t("confirm.cancel")}
          </button>
          <button
            class="filled-btn danger"
            @click=${()=>{let l=this._entityId(this._confirmAc.slot);l&&this.hass.callService("switch","turn_off",{entity_id:l}),this._confirmAc=null}}
          >
            ${this._t("confirm.turn_off")}
          </button>
        </div>
      </div>
    </ha-adaptive-dialog>`}_metric(i){return L`<span class="metric"
      ><span class="metric-num">${i.n}</span
      ><span class="metric-unit">${i.u}</span></span
    >`}_renderStats(){if(Array.isArray(this._config.stats))return L`<div class="stats custom">
        ${this._config.stats.map($=>this._renderCustomStat($))}
      </div>`;let i=pt(this._state("sensor.pv_total")),r=cr(this),l=this._show("show_panels")&&r.length>0,h=this._state("sensor.grid_power"),g=pt(h);return L`<div class="stats">
      <div
        class="stat solar ${l?"clickable":""}"
        @click=${l?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${l?L`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${this._metric(he(i))}</div>
        ${l?L`<div class="stat-sub">
              ${r.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(g):L`<div></div>`}
    </div>`}_renderGrid(i){let r=i!=null&&i>1,l=i!=null&&i<-1,h=r?"import":l?"export":"",g=r?this._t("card.grid_import"):l?this._t("card.grid_export"):this._t("card.grid_idle");return L`<div
      class="stat grid ${h} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${l?"mdi:transmission-tower-export":r?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${this._metric(he(i!=null?Math.abs(i):null))}
      </div>
      <div class="stat-sub">${g}</div>
    </div>`}_renderCustomStat(i){if(!i||!i.entity&&!i.name)return L``;let r=i.entity?this.hass.states[i.entity]:void 0,l=i.name||r?.attributes?.friendly_name||i.entity||"",h=i.tap_action,g=!h||h.action!=="none";return L`<div
      class="stat ${g?"clickable":""}"
      @click=${g?()=>this._handleAction(h,i.entity):null}
    >
      <div class="stat-head">
        ${i.icon?L`<ha-icon icon=${i.icon}></ha-icon>`:r?L`<ha-state-icon
                .hass=${this.hass}
                .stateObj=${r}
              ></ha-state-icon>`:L`<ha-icon icon="mdi:gauge"></ha-icon>`}
        ${l}
      </div>
      <div class="stat-value">${this._metric(this._statValue(r))}</div>
    </div>`}_statValue(i){let r=i?.state;if(r==null||r==="unavailable"||r==="unknown")return{n:"\u2013",u:""};let l=pt(i),h=i.attributes?.unit_of_measurement||"";return l==null?{n:r,u:""}:h==="W"?he(l):{n:Number.isInteger(l)?String(l):l.toFixed(1),u:h}}_handleAction(i,r){let l=i||{action:"more-info"},h=l.action||"more-info";if(h!=="none"){if(l.confirmation){let g=l.confirmation.text||this._t("card.confirm_action")||"Are you sure?";if(!window.confirm(g))return}switch(h){case"more-info":this._moreInfoId(l.entity||r);return;case"toggle":{let g=l.entity||r;g&&this.hass.callService("homeassistant","toggle",{entity_id:g});return}case"navigate":l.navigation_path&&(history.pushState(null,"",l.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0})));return;case"url":l.url_path&&window.open(l.url_path,l.new_tab===!1?"_self":"_blank");return;case"perform-action":case"call-service":{let g=l.perform_action||l.service,[$,D]=(g||"").split(".",2);$&&D&&this.hass.callService($,D,l.data||l.service_data||{},l.target);return}default:this._moreInfoId(l.entity||r)}}}_forecastGraph(){let i=this._dataRange().ref,r=this._mergedForecast();return Va(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:nr(r,i),totalWh:this._todayWh,forecastWh:or(r,i),currentHour:this._isToday()?new Date().getHours():null,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})}_renderToday(){let i=this._todayWh!=null?this._todayWh/1e3:null,r=Object.keys(this._forecasts||{}).length>0,l=this._show("show_forecast")&&r?this._forecastTodayKWh():null,h=l!=null&&l>0,g=h&&i!=null?Math.min(100,Math.round(i/l*100)):null,$=g!=null&&g>=100;return L`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(ms(i))}</span>
      </div>
      ${h?L`<div class="fc-bar">
              <div
                class="fc-fill ${$?"met":""}"
                style="width:${g}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${i!=null?i.toFixed(1):"\u2013"}</b> /
                ${l.toFixed(1)} kWh
              </span>
              <span>
                ${$?this._t("card.exceeded"):this._t("card.of_forecast",{pct:g??0})}
              </span>
            </div>`:""}
    </div>`}};function Da(_,i){if(!i)return null;let r=_?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${i}/${r}icon.png`}var Ko=[{name:"device",selector:{device:{integration:ze}}}],Ua={appearance:[["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},Na={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},Ba=new Set,ja=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"stats",icon:"mdi:chart-box-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],Xo=4,_s=class extends kt{static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),Yt()}setConfig(i){this._config=i||{}}_t(i,r){return Ft(this.hass,i,r)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,Aa(this.hass).then(i=>{this._providers=i}))}render(){if(!this.hass)return L``;let i=ja.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_defaults(){let i=oe(this.hass),r=this._config.device&&i.find(l=>l.deviceId===this._config.device)||i[0];return r?le(this.hass,r.ents):{}}_renderRoot(){return L`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Ko}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${ja.map(i=>L`<button
            class="nav-row"
            @click=${()=>this._page=i.id}
          >
            <ha-icon class="nav-icon" icon=${i.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`page.${i.id}`)}</span>
              <span class="nav-secondary">${this._summary(i.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(i){if(i==="panels"){let $=this._detectedPanels(),D=$.filter(j=>this._config.panels?.[j]?.hidden).length,U=this._t("editor.panels_count",{n:$.length});return D&&(U+=` \xB7 ${this._t("editor.panels_hidden",{n:D})}`),U}if(i==="forecast"){let $=this._providers;if($===void 0)return this._t("editor.automatic");if(!$.length)return this._t("editor.forecast_none_short");let D=this._config.forecast_config_entries,U=D===void 0?$.length:D.length;return this._t("editor.forecast_selected",{n:U,total:$.length})}if(i==="stats"){let $=this._config.stats;return Array.isArray($)?this._t("editor.stats_count",{n:$.length}):this._t("editor.stats_default")}if(i==="advanced")return this._config.collection_key||this._t("editor.none");let r=(Na[i]||[]).filter(([$])=>this._config.entities?.[$]).length,l=r?` \xB7 ${this._t("editor.overridden",{n:r})}`:"",h=Ua[i]||[];if(!h.length)return r?this._t("editor.overridden",{n:r}):this._t("editor.automatic");let g=h.filter(([$,D])=>this._config[$]??D);return g.length?g.map(([$])=>this._t(`short.${$}`)).join(", ")+l:`${this._t("editor.nothing_shown")}${l}`}_renderSubpage(i){return L`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${i.id}`)}</span>
      </div>
      ${(Ua[i.id]||[]).map(([r,l,h])=>this._renderToggle(r,l,h))}
      ${i.id==="appearance"?this._renderImagePicker():i.id==="stats"?this._renderStatsPage():i.id==="panels"?this._renderPanelsPage():i.id==="forecast"?this._renderForecastPage():i.id==="advanced"?this._renderAdvancedPage():(Na[i.id]||[]).map(([r,l])=>this._renderSlot(r,l))}`}_renderImagePicker(){let i=this._config.image,r=this._config.image_url,l=this._config.show_image??!0;return L`<div class="section">
        <ha-icon icon="mdi:image-multiple-outline"></ha-icon>${this._t("editor.image")}
      </div>
      <div class=${l?"img-grid":"img-grid dim"}>
        <button
          class="img-opt ${!i&&!r?"on":""}"
          title=${this._t("editor.automatic")}
          @click=${()=>this._setImage(null)}
        >
          <span class="img-auto"><ha-icon icon="mdi:auto-fix"></ha-icon></span>
          <span class="img-label">${this._t("editor.automatic")}</span>
        </button>
        ${us.map(h=>L`<button
            class="img-opt ${i===h.key?"on":""}"
            title=${h.name}
            @click=${()=>this._setImage(h.key)}
          >
            <picture
              ><source
                srcset=${ti(ui(h.key))}
                type="image/webp"
              /><img
                src=${ui(h.key)}
                loading="lazy"
                alt=${h.name} /></picture
            >
            <span class="img-label">${h.name}</span>
          </button>`)}
      </div>`}_setImage(i){let r={...this._config,type:`custom:${Mt}`};delete r.image_url,i?r.image=i:delete r.image,this._dispatch(r)}_renderAdvancedPage(){return L`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${i=>{i.stopPropagation(),this._setCollectionKey(i.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(i){let r={...this._config,type:`custom:${Mt}`};i?r.collection_key=i:delete r.collection_key,this._dispatch(r)}_renderStatsPage(){let i=this._config.stats;return Array.isArray(i)?L`<div class="hint top-hint">${this._t("editor.stats_hint")}</div>
      ${i.map((r,l)=>this._renderStatBlock(r,l,i.length))}
      <div class="stats-actions">
        <button class="add-btn" @click=${()=>this._addStat()}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("editor.stats_add")}
        </button>
        <button class="text-btn" @click=${()=>this._resetStats()}>
          ${this._t("editor.stats_reset")}
        </button>
      </div>`:L`<div class="hint top-hint">
          ${this._t("editor.stats_default_hint")}
        </div>
        <button class="filled-btn" @click=${()=>this._seedDefaultStats()}>
          ${this._t("editor.stats_customize")}
        </button>`}_renderStatBlock(i,r,l){let h=[{name:"entity",selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"tap_action",selector:{ui_action:{}}}],g=i.name||i.entity||this._t("editor.stat_n",{n:r+1});return L`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon=${i.icon||"mdi:chart-box-outline"}></ha-icon>
        <span class="panel-title">${g}</span>
        <button
          class="icon-btn"
          .disabled=${r===0}
          title=${this._t("editor.stats_move_up")}
          @click=${()=>this._moveStat(r,-1)}
        >
          <ha-icon icon="mdi:arrow-up"></ha-icon>
        </button>
        <button
          class="icon-btn"
          .disabled=${r===l-1}
          title=${this._t("editor.stats_move_down")}
          @click=${()=>this._moveStat(r,1)}
        >
          <ha-icon icon="mdi:arrow-down"></ha-icon>
        </button>
        <button
          class="icon-btn danger"
          title=${this._t("editor.stats_remove")}
          @click=${()=>this._removeStat(r)}
        >
          <ha-icon icon="mdi:delete-outline"></ha-icon>
        </button>
      </div>
      <ha-form
        .hass=${this.hass}
        .data=${i}
        .schema=${h}
        .computeLabel=${$=>this._t(`editor.stat_field_${$.name}`)}
        @value-changed=${$=>{$.stopPropagation(),this._updateStat(r,$.detail.value)}}
      ></ha-form>
    </div>`}_seedDefaultStats(){let i=this._defaults(),r=l=>{let h=this._config.entities?.[l];return h&&gt(h)&&!ct(h)?h:i[l]||""};this._setStats([{entity:r("sensor.pv_total"),name:this._t("card.solar"),icon:"mdi:solar-power-variant"},{entity:r("sensor.grid_power"),name:this._t("card.grid"),icon:"mdi:transmission-tower"}])}_updateStat(i,r){let l=[...this._config.stats||[]],h={};for(let[g,$]of Object.entries(r))$===""||$==null||(h[g]=$);l[i]=h,this._setStats(l)}_addStat(){this._setStats([...this._config.stats||[],{}])}_removeStat(i){let r=[...this._config.stats||[]];r.splice(i,1),this._setStats(r)}_moveStat(i,r){let l=[...this._config.stats||[]],h=i+r;h<0||h>=l.length||([l[i],l[h]]=[l[h],l[i]],this._setStats(l))}_setStats(i){this._dispatch({...this._config,stats:i,type:`custom:${Mt}`})}_resetStats(){let i={...this._config,type:`custom:${Mt}`};delete i.stats,this._dispatch(i)}_renderForecastPage(){let i=this._providers;if(i===void 0)return L`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!i.length)return L`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let r=this._config.show_forecast??!0,l=this._config.forecast_config_entries,h=g=>l===void 0?!0:l.includes(g);return L`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${r?"":"dim"}>
        ${i.map(g=>L`<div class="row">
            ${this._renderBrand(g.domain)}
            <span class="row-label"
              >${g.title}<span class="row-sub">${g.domain}</span></span
            >
            <ha-switch
              .checked=${h(g.id)}
              .disabled=${!r}
              @change=${$=>this._toggleProvider(g.id,$.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(i){let r=Da(this.hass,i);return L`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${r?L`<img
            class="brand"
            src=${r}
            @error=${l=>{l.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(i,r){let l=(this._providers||[]).map($=>$.id),h=this._config.forecast_config_entries??l.slice();h=r?[...new Set([...h,i])]:h.filter($=>$!==i);let g={...this._config,type:`custom:${Mt}`};h.length===l.length&&l.every($=>h.includes($))?delete g.forecast_config_entries:g.forecast_config_entries=h,this._dispatch(g)}_detectedPanels(){let i=this._defaults(),r=[];for(let l=1;l<=Xo;l++)(i[`sensor.pv${l}_power`]||this._config.entities?.[`sensor.pv${l}_power`])&&r.push(l);return r.length?r:[1,2,3,4]}_renderPanelsPage(){return L`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(i=>this._renderPanelConfig(i))}`}_renderPanelConfig(i){let r=this._config.panels?.[i]||{},l=!!r.hidden,h=`sensor.pv${i}_power`;return L`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${r.name||this._t("editor.panel",{n:i})}</span
        >
        <ha-switch
          .checked=${!l}
          @change=${g=>this._dispatch(this._withPanel(i,{hidden:!g.target.checked}))}
        ></ha-switch>
      </div>
      ${l?L`<div class="hint">${this._t("editor.panel_hidden")}</div>`:L`<ha-form
              .hass=${this.hass}
              .data=${{value:r.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${g=>{g.stopPropagation(),this._dispatch(this._withPanel(i,{name:g.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(h,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(i,r){let l={...this._config.panels||{}},h={...l[i]||{}};for(let[$,D]of Object.entries(r))D===""||D==null||D===!1?delete h[$]:h[$]=D;Object.keys(h).length?l[i]=h:delete l[i];let g={...this._config,panels:l,type:`custom:${Mt}`};return Object.keys(l).length||delete g.panels,g}_renderToggle(i,r,l){return L`<div class="row">
      <ha-icon icon=${l}></ha-icon>
      <span class="row-label">${this._t(`toggle.${i}`)}</span>
      <ha-switch
        .checked=${this._config[i]??r}
        @change=${h=>this._toggleDisplay(i,r,h.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(i,r){return this._modes[i]?this._modes[i]:r?gt(r)&&!ct(r)?"entity":"custom":Ba.has(i)?"entity":"auto"}_renderModeChips(i,r){let l=Ba.has(i)?["entity","custom"]:["auto","entity","custom"];return L`<div class="modes">
      ${l.map(h=>L`<button
          class="mode ${r===h?"on":""}"
          @click=${()=>{this._modes={...this._modes,[i]:h},h==="auto"&&this._setOverride(i,"")}}
        >
          ${this._t(`editor.mode_${h}`)}
        </button>`)}
    </div>`}_renderSlot(i,r,l){let h=this._config.entities?.[i]||"",g=this._slotMode(i,h),$=this._defaults()[i];return L`<div class="section">
        <ha-icon icon=${r}></ha-icon>${l||this._t(`slot.${i}`)}
      </div>
      ${this._renderModeChips(i,g)}
      ${g==="auto"?L`<div class="hint">
            ${this._t("editor.auto_value",{value:$||this._t("editor.not_found")})}
          </div>`:g==="entity"?L`<ha-form
              .hass=${this.hass}
              .data=${{value:gt(h)&&!ct(h)?h:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${D=>{D.stopPropagation(),this._setOverride(i,D.detail.value.value||"")}}
            ></ha-form>`:L`<ha-form
              .hass=${this.hass}
              .data=${{value:gt(h)&&!ct(h)?"":h}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${D=>{D.stopPropagation(),this._setOverride(i,D.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(i,r){let l={...this._config.entities||{}};r?l[i]=r:delete l[i];let h={...this._config,entities:l,type:`custom:${Mt}`};return Object.keys(l).length||delete h.entities,h}_setOverride(i,r){this._dispatch(this._withOverride(i,r))}_toggleDisplay(i,r,l){let h={...this._config,type:`custom:${Mt}`};l===r?delete h[i]:h[i]=l,this._dispatch(h)}_valueChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${Mt}`};r.device||delete r.device,this._dispatch(r)}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return jt`
      .nav {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
      }
      .nav-row {
        display: flex;
        align-items: center;
        gap: 14px;
        border: none;
        background: transparent;
        padding: 12px 6px;
        cursor: pointer;
        text-align: left;
        border-radius: 10px;
        color: var(--primary-text-color);
        transition: background-color 0.15s ease;
      }
      .nav-row:hover {
        background: var(--secondary-background-color);
      }
      .nav-row ha-icon {
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
      }
      .nav-labels {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .nav-label {
        font-size: 1em;
      }
      .nav-secondary {
        font-size: 0.85em;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 280px;
      }
      .subpage-head {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--card-background-color, var(--ha-card-background));
        padding: 8px 0;
        margin-top: -8px;
      }
      .back {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        cursor: pointer;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        transition: background-color 0.15s ease;
      }
      .back:hover {
        background: var(--secondary-background-color);
      }
      .subpage-title {
        font-size: 1.1em;
        font-weight: 600;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 4px;
      }
      .row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .row-label {
        flex: 1;
        color: var(--primary-text-color);
      }
      .row-sub {
        display: block;
        font-size: 0.8em;
        color: var(--secondary-text-color);
      }
      .dim {
        opacity: 0.45;
        pointer-events: none;
      }
      .provider-icon {
        position: relative;
        width: 24px;
        height: 24px;
        flex: 0 0 auto;
      }
      .provider-icon ha-icon {
        position: absolute;
        inset: 0;
        --mdc-icon-size: 24px;
        color: var(--secondary-text-color);
      }
      .provider-icon img.brand {
        position: absolute;
        inset: 0;
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
      picture {
        display: contents;
      }
      .img-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(82px, 1fr));
        gap: 8px;
        margin-top: 4px;
      }
      .img-opt {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        border: 2px solid transparent;
        border-radius: 12px;
        background: var(--secondary-background-color);
        padding: 8px 4px;
        cursor: pointer;
        transition: border-color 0.15s ease, filter 0.15s ease;
      }
      .img-opt:hover {
        filter: brightness(1.12);
      }
      .img-opt.on {
        border-color: var(--primary-color);
      }
      .img-opt img,
      .img-auto {
        width: 56px;
        height: 56px;
        object-fit: contain;
      }
      .img-auto {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--secondary-text-color);
      }
      .img-auto ha-icon {
        --mdc-icon-size: 30px;
      }
      .img-label {
        font-size: 0.72em;
        text-align: center;
        line-height: 1.1;
        color: var(--secondary-text-color);
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .section {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        margin: 18px 0 8px;
        color: var(--primary-text-color);
      }
      .section ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
        margin-bottom: 10px;
      }
      .mode {
        flex: 1;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        padding: 8px 0;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9em;
        transition: background-color 0.15s ease, color 0.15s ease;
      }
      .mode:hover:not(.on) {
        background: rgba(127, 127, 127, 0.18);
      }
      .mode.on {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        font-weight: 600;
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin: 4px 4px 12px;
      }
      .top-hint {
        margin: 0 4px 10px;
      }
      .panel-block {
        padding: 6px 4px 12px;
        border-bottom: 1px solid var(--divider-color);
      }
      .panel-title-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
      }
      .panel-title-row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--energy-solar-color, #ff9800);
      }
      .panel-title {
        flex: 1;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      ha-form {
        display: block;
        margin-bottom: 12px;
      }
      .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        flex: 0 0 auto;
        transition: background-color 0.15s ease, color 0.15s ease;
      }
      .icon-btn ha-icon {
        --mdc-icon-size: 20px;
        color: inherit;
      }
      .icon-btn:hover:not([disabled]) {
        background: var(--secondary-background-color);
      }
      .icon-btn[disabled] {
        opacity: 0.3;
        cursor: default;
      }
      .icon-btn.danger:hover:not([disabled]) {
        color: var(--error-color, #db4437);
      }
      .stats-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
      }
      .add-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 1px dashed var(--divider-color);
        background: transparent;
        color: var(--primary-color);
        padding: 8px 14px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.95em;
        font-weight: 600;
        transition: background-color 0.15s ease;
      }
      .add-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .add-btn:hover {
        background: color-mix(in srgb, var(--primary-color) 10%, transparent);
      }
      .filled-btn {
        border: none;
        border-radius: 20px;
        padding: 10px 22px;
        font-size: 0.95em;
        font-weight: 600;
        cursor: pointer;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        transition: filter 0.15s ease;
      }
      .filled-btn:hover {
        filter: brightness(1.08);
      }
      .text-btn {
        border: none;
        border-radius: 20px;
        padding: 8px 14px;
        font-size: 0.95em;
        font-weight: 600;
        cursor: pointer;
        background: transparent;
        color: var(--primary-color);
        transition: background-color 0.15s ease;
      }
      .text-btn:hover {
        background: color-mix(in srgb, var(--primary-color) 10%, transparent);
      }
    `}};var ei=["1","2","3","4","5","6","7","8","9"],It="1",ys=["auto","day","night"],Re="auto";function Ha(_,i){if(_==="day"||_==="night")return _;let r=i?.states?.["sun.sun"];return r?r.state==="below_horizon"?"night":"day":i?.themes?.darkMode?"night":"day"}function Zo(_,i,r){let l=ei.includes(_)?_:It;return ye(`${_e}/houses/${Ha(i,r)}_${l}.webp`,r)}function pr(_){return!!(_?.house_image||_?.house_image_dark)}function mi(_,i){let r=_?.house_image,l=_?.house_image_dark;if(r||l){let h=Ha(_?.house_mode,i);return ye(h==="night"?l||r:r||l,i)}return Zo(_?.house,_?.house_mode,i)}function bs(_,i){let r=ei.includes(_)?_:It;return ye(`${_e}/houses/day_${r}.webp`,i)}function Wa(_){let i=[];for(let r of["day","night"])for(let l of ei)i.push({name:`${r}_${l}.webp`,url:ye(`${_e}/houses/${r}_${l}.webp`,_)});return i}var Bi=["re_space_system_battery","re_space_system_battery_gateway","re305_or_re306_battery","re305_or_re306_device","re305_device","re306_device","re306_dpu_battery","po_space_re305_battery","po_space_battery","po_space_battery_system_battery","po_space_battery_ats","po_space_battery_shp32","po_space_battery_system_dpu","jt303_space_battery","jt321_space_battery","dc303_space_battery"],xe="re_space_system_battery";function Ve(_,i){let r=Bi.includes(_)?_:xe;return ye(`${_e}/batteries/${r}.webp`,i)}var Jo=new Set(["re_space_system_battery","re_space_system_battery_gateway"]);function ws(_){return Jo.has(_||xe)}function qa(_,i){return ye(`${_e}/flows/${_}.json`,i)}var Qo={8:3,9:6};function Ga(_){return`re_space_solar_${Qo[_]||Math.min(7,Math.max(1,_||1))}`}var ke={grid_in:"re_space_gridin",grid_out:"re_space_gridout",home:"re_space_home",bat_in:"jt303_space_battery_input",bat_out:"jt303_space_battery_output",bat_chg:"re_space_bat_chg",bat_dsg:"re_space_bat_dsg",bat_soc:"re_space_bat_soc"};var Ka=ko(Ya(),1);var vt=1,tl=[{key:"solar",file:_=>Ga(_.route),active:_=>_.solar>vt},{key:"grid_in",file:()=>ke.grid_in,active:_=>_.grid>vt},{key:"grid_out",file:()=>ke.grid_out,active:_=>_.grid<-vt},{key:"home",file:()=>ke.home,active:_=>_.load>vt},{key:"bat_in",file:()=>ke.bat_in,active:_=>_.bat>vt,bat:!0},{key:"bat_out",file:()=>ke.bat_out,active:_=>_.bat<-vt,bat:!0},{key:"bat_soc",file:()=>ke.bat_soc,active:_=>_.soc!=null,mode:"soc",bat:!0},{key:"bat_chg",file:()=>ke.bat_chg,active:_=>_.bat>vt,bat:!0},{key:"bat_dsg",file:()=>ke.bat_dsg,active:_=>_.bat<-vt,bat:!0}],gi=class{constructor(){this._anims={}}sync(i,{hass:r,showFlows:l,batOverlays:h,states:g}){if(i)for(let $ of tl){let D=i.querySelector(`[data-flow="${$.key}"]`);if(!D)continue;let U=l&&$.active(g)&&(!$.bat||h);this._setFlow(r,D,$,U,g)}}destroy(){for(let i of Object.values(this._anims))i.anim?.destroy();this._anims={}}_setFlow(i,r,l,h,g){let $=l.key,D=l.file(g),U=l.mode||"play",j=this._anims[$];if(h&&(!j||j.file!==D)){j?.anim?.destroy();let nt=Ka.default.loadAnimation({container:r,renderer:"svg",loop:U!=="soc",autoplay:!1,path:qa(D,i),rendererSettings:{preserveAspectRatio:"xMidYMin meet"}});j=this._anims[$]={anim:nt,file:D,ready:!1,mode:U},nt.addEventListener("DOMLoaded",()=>{j.ready=!0,this._applyFlow(j,h,g)})}j&&this._applyFlow(j,h,g),r.style.opacity=h?"1":"0"}_applyFlow(i,r,l){if(i.ready){if(i.mode==="soc"){i.anim.goToAndStop(Math.max(0,Math.min(100,l.soc??0)),!0);return}r?i.anim.play():i.anim.pause()}}};var Xa=jt`
  :host {
    display: block;
    /* Height the card may use: the viewport below the HA header. vh works on
       every renderer (including older Cast receivers); dvh, when supported,
       tracks mobile browser chrome better. --ef-title reserves the title row
       when one is shown (see house-card's has-title reflection). */
    --ef-view: calc(100vh - var(--header-height, 56px));
    --ef-title: 0px;
  }
  @supports (height: 100dvh) {
    :host {
      --ef-view: calc(100dvh - var(--header-height, 56px));
    }
  }
  :host([has-title]) {
    --ef-title: 40px;
  }
  ha-card {
    overflow: hidden;
    position: relative;
    /* Contain every internal z-index in the card's own stacking context so the
       figures / lines can't paint over Home Assistant's nav. */
    isolation: isolate;
    z-index: 0;
    /* Cap the whole card to the available height so a panel view (which hands
       the card the full viewport) fits without scrolling. Shorter views never
       reach this, so they're unaffected. */
    max-height: var(--ef-view);
  }
  .title {
    font-size: 1.05em;
    font-weight: 600;
    color: var(--primary-text-color);
    padding: 14px 16px 0;
  }
  .empty {
    padding: 24px 16px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  /* Banner centered over the illustration when the card has no device set up:
     the scene still previews (and animates) but carries no live values. */
  .setup-warning {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 86%;
    padding: 8px 14px;
    border-radius: 12px;
    /* Solid card surface first as a fallback; tinted warning on top where
       color-mix is supported. */
    background: var(--ha-card-background, var(--card-background-color, #fff));
    background: color-mix(
      in srgb,
      var(--warning-color, #ff9800) 16%,
      var(--ha-card-background, var(--card-background-color, #fff))
    );
    color: var(--primary-text-color);
    font-size: clamp(11px, 2.6vw, 14px);
    font-weight: 600;
    line-height: 1.3;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);
    pointer-events: none;
  }
  .setup-warning ha-icon {
    flex: none;
    color: var(--warning-color, #ff9800);
    --mdc-icon-size: 1.3em;
  }

  /* The illustration: house render with overlays pinned to the same box. The
     2340×1680 house and 1170×840 overlays share an aspect ratio, so object-fit:
     contain on each lines them up exactly. */
  /* The house render is 2340×1680; the stage is a touch taller so a clear band
     is left at the bottom for the battery readout. The house and every overlay
     are top-aligned (object-position / preserveAspectRatio) so they stay
     mutually aligned and that band stays free of the illustration. */
  .stage {
    position: relative;
    /* Fill the card width, but cap it so the fixed-aspect illustration (and thus
       the whole card) fits the available height. When height is the limit the
       stage narrows and centers — letterboxed left/right — instead of
       overflowing; when width is the limit (masonry / grid / mobile) the 100%
       wins and the layout is unchanged. */
    width: min(
      100%,
      calc((var(--ef-view) - var(--ef-title) - 8px) * 2340 / 1920)
    );
    aspect-ratio: 2340 / 1920;
    margin-inline: auto;
  }
  .layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  img.layer {
    object-fit: contain;
    object-position: top center;
  }
  .flow {
    transition: opacity 0.4s ease;
  }
  /* Flow paths between sources and the house sit under the battery box; the SoC
     fill and charge/discharge glow sit on top of it. */
  .z-bg {
    z-index: 1;
  }
  .box {
    z-index: 2;
  }
  .z-box {
    z-index: 3;
  }

  /* Leader lines dropping from each figure into the scene (app-style). */
  .leaders {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
  }
  .leader {
    position: absolute;
    width: 1px;
    background: linear-gradient(
      to bottom,
      color-mix(in srgb, var(--primary-text-color) 38%, transparent),
      transparent
    );
  }
  .leader.grid {
    left: 6.5%;
    top: 13%;
    height: 62%;
  }
  .leader.solar {
    left: 44.5%;
    top: 13%;
    height: 34%;
  }
  .leader.home {
    left: 70%;
    top: 13%;
    height: 50%;
  }

  /* Top figures — Grid · Solar · Home. Each figure is left-aligned at the x of
     its leader line (below), so the figure sits directly above its line. A soft
     scrim of the card surface keeps them legible over the render behind them. */
  .stats {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    height: clamp(70px, 18%, 112px);
    background: linear-gradient(
      to bottom,
      var(--ha-card-background, var(--card-background-color, #fff)) 30%,
      transparent
    );
  }
  .stat {
    position: absolute;
    top: clamp(8px, 3%, 20px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    border-radius: 10px;
    /* no left padding so the text's left edge sits exactly on the leader line */
    padding: 4px 8px 4px 0;
  }
  .stat.col-grid {
    left: 6.5%;
  }
  .stat.col-solar {
    left: 44.5%;
  }
  .stat.col-home {
    left: 70%;
  }
  .stat.clickable {
    cursor: pointer;
  }
  .stat.clickable:hover {
    background: rgba(255, 255, 255, 0.06);
  }
  .stat-value {
    color: var(--primary-text-color, #fff);
    line-height: 1.1;
    white-space: nowrap;
  }
  .stat-value .num {
    font-size: clamp(15px, 4.2vw, 26px);
    font-weight: 700;
  }
  .stat-value .unit {
    font-size: 0.62em;
    font-weight: 600;
    margin-left: 2px;
    opacity: 0.7;
  }
  .stat-label {
    font-size: clamp(10px, 2.2vw, 13px);
    color: var(--secondary-text-color);
    margin-top: 2px;
  }
  .stat.solar .stat-value .num {
    color: var(--energy-solar-color, #ff9800);
  }
  .stat.import .stat-value .num {
    color: var(--energy-grid-consumption-color, #488fc2);
  }
  .stat.export .stat-value .num {
    color: var(--energy-grid-return-color, #8353d1);
  }

  /* Battery readout in the clear band below the house — no container needed. */
  .battery {
    position: absolute;
    left: 50%;
    bottom: clamp(2px, 1.5%, 14px);
    transform: translateX(-50%);
    z-index: 3;
    text-align: center;
    border-radius: 12px;
    padding: 4px 12px;
  }
  .battery.clickable {
    cursor: pointer;
  }
  .battery.clickable:hover {
    background: rgba(127, 127, 127, 0.12);
  }
  .battery-line {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-text-color, #fff);
    font-weight: 700;
    font-size: clamp(13px, 3.4vw, 18px);
    white-space: nowrap;
  }
  .battery-line ha-icon {
    --mdc-icon-size: 1.05em;
    color: var(--secondary-text-color);
  }
  .battery.charge .battery-line ha-icon {
    color: var(--energy-battery-in-color, #3ddc84);
  }
  .battery.discharge .battery-line ha-icon {
    color: var(--energy-battery-out-color, #f06292);
  }
  .battery-soc {
    color: var(--primary-text-color, #fff);
  }
  .battery-label {
    font-size: clamp(10px, 2.2vw, 13px);
    margin-top: 1px;
    color: var(--secondary-text-color);
  }
  .battery.charge .battery-label {
    color: var(--energy-battery-in-color, #3ddc84);
  }
  .battery.discharge .battery-label {
    color: var(--energy-battery-out-color, #f06292);
  }
`;var ks=class extends kt{static styles=Xa;static get properties(){return{hass:{},_config:{}}}constructor(){super(),this._flows=new gi}connectedCallback(){super.connectedCallback(),Yt()}disconnectedCallback(){super.disconnectedCallback(),this._flows.destroy()}setConfig(i){this._config=i||{}}static getConfigElement(){return document.createElement(`${Qt}-editor`)}static getStubConfig(){return{house:It}}getCardSize(){return 7}_t(i,r){return Ft(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=oe(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_state(i){let r=this._config.entities?.[i];if(r)return gt(r)&&!ct(r)?this.hass.states[r]:{state:r,attributes:{}};let l=this._map?.[i];return l?this.hass.states[l]:void 0}_entityId(i){let r=this._config.entities?.[i];return r&&gt(r)&&!ct(r)?r:this._map?.[i]}_moreInfo(i){let r=this._entityId(i);r&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:r},bubbles:!0,composed:!0}))}_grid(){let i=this._state("sensor.grid_power");return pt(i??this._state("sensor.sys_grid_power"))}_flowStates(){let i=parseInt(this._config.house||It,10)||1;if(!this._device)return{grid:-400,solar:1500,load:700,bat:500,soc:65,route:i};let r=this._grid(),l=pt(this._state("sensor.pv_total")),h=pt(this._state("sensor.sys_load")),g=pt(this._state("sensor.bat_power")),$=pt(this._state("sensor.cms_batt_soc"));return{grid:r,solar:l,load:h,bat:g,soc:$,route:i}}updated(i){super.updated(i),this._flows.sync(this.renderRoot,{hass:this.hass,showFlows:this._show("show_flows"),batOverlays:this._show("show_battery")&&ws(this._config.battery),states:this._flowStates()});let r=!!(this._config?.title&&!ct(this._config.title));this.toggleAttribute("has-title",r)}render(){if(!this.hass)return L``;let i=this._device,r=!i;this._map=i?le(this.hass,i.ents):{};let l=this._config.title&&!ct(this._config.title)?this._config.title:"",h=this._show("show_battery");return L`<ha-card>
      ${l?L`<div class="title">${l}</div>`:""}
      <div class="stage">
        <img
          class="layer house"
          src=${mi(this._config,this.hass)}
          alt=""
        />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${h?L`<img
              class="layer box"
              src=${Ve(this._config.battery,this.hass)}
              alt=""
            />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        ${this._renderLeaders()} ${this._renderStats()}
        ${h?this._renderBattery():""}
        ${r?this._renderSetupWarning():""}
      </div>
    </ha-card>`}_renderSetupWarning(){return L`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`}_renderLeaders(){return L`<div class="leaders">
      ${this._show("show_grid")?L`<span class="leader grid"></span>`:""}
      ${this._show("show_solar")?L`<span class="leader solar"></span>`:""}
      ${this._show("show_home")?L`<span class="leader home"></span>`:""}
    </div>`}_renderStats(){let i=!this._device,r=this._flowStates(),l=[];if(this._show("show_grid")){let h=!i&&r.grid>vt,g=!i&&r.grid<-vt;l.push({slot:"sensor.grid_power",fallback:"sensor.sys_grid_power",anchor:"col-grid",value:i?null:r.grid!=null?Math.abs(r.grid):null,label:h?this._t("house.from_grid"):g?this._t("house.to_grid"):this._t("house.grid"),cls:h?"import":g?"export":""})}return this._show("show_solar")&&l.push({slot:"sensor.pv_total",anchor:"col-solar",value:i?null:r.solar,label:this._t("card.solar"),cls:!i&&r.solar>vt?"solar":""}),this._show("show_home")&&l.push({slot:"sensor.sys_load",anchor:"col-home",value:i?null:r.load,label:this._t("house.home"),cls:!i&&r.load>vt?"home":""}),l.length?L`<div class="stats">
      ${l.map(h=>{let g=he(h.value);return L`<div
          class="stat ${h.anchor} ${h.cls} clickable"
          @click=${()=>this._moreInfo(this._entityId(h.slot)?h.slot:h.fallback||h.slot)}
        >
          <div class="stat-value">
            <span class="num">${g.n}</span><span class="unit">${g.u}</span>
          </div>
          <div class="stat-label">${h.label}</div>
        </div>`})}
    </div>`:""}_renderBattery(){let i=pt(this._state("sensor.cms_batt_soc")),r=pt(this._state("sensor.bat_power")),l=r!=null&&r>vt,h=r!=null&&r<-vt,g=l?"charge":h?"discharge":"",$=l?this._t("card.charging"):h?this._t("card.discharging"):this._t("house.idle"),D=r!=null&&(l||h)?we(Math.abs(r)):null;return L`<div
      class="battery ${g} clickable"
      @click=${()=>this._moreInfo(this._entityId("sensor.cms_batt_soc")?"sensor.cms_batt_soc":"sensor.bat_power")}
    >
      <div class="battery-line">
        ${D?L`<ha-icon
              icon=${l?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon
            ><span class="battery-power">${D}</span>`:""}
        ${i!=null?L`<span class="battery-soc">${Math.round(i)}%</span>`:""}
      </div>
      <div class="battery-label">${$}</div>
    </div>`}};var el=(()=>{let _=new Uint32Array(256);for(let i=0;i<256;i++){let r=i;for(let l=0;l<8;l++)r=r&1?3988292384^r>>>1:r>>>1;_[i]=r>>>0}return _})();function il(_){let i=4294967295;for(let r=0;r<_.length;r++)i=el[(i^_[r])&255]^i>>>8;return(i^4294967295)>>>0}var Za=33,Ja=0;function Qa(_){let i=new TextEncoder,r=[],l=[],h=0;for(let D of _){let U=i.encode(D.name),j=il(D.data),nt=D.data.length,X=new DataView(new ArrayBuffer(30));X.setUint32(0,67324752,!0),X.setUint16(4,20,!0),X.setUint16(6,0,!0),X.setUint16(8,0,!0),X.setUint16(10,Ja,!0),X.setUint16(12,Za,!0),X.setUint32(14,j,!0),X.setUint32(18,nt,!0),X.setUint32(22,nt,!0),X.setUint16(26,U.length,!0),X.setUint16(28,0,!0),r.push(new Uint8Array(X.buffer),U,D.data);let rt=new DataView(new ArrayBuffer(46));rt.setUint32(0,33639248,!0),rt.setUint16(4,20,!0),rt.setUint16(6,20,!0),rt.setUint16(8,0,!0),rt.setUint16(10,0,!0),rt.setUint16(12,Ja,!0),rt.setUint16(14,Za,!0),rt.setUint32(16,j,!0),rt.setUint32(20,nt,!0),rt.setUint32(24,nt,!0),rt.setUint16(28,U.length,!0),rt.setUint16(30,0,!0),rt.setUint16(32,0,!0),rt.setUint16(34,0,!0),rt.setUint16(36,0,!0),rt.setUint32(38,0,!0),rt.setUint32(42,h,!0),l.push(new Uint8Array(rt.buffer),U),h+=30+U.length+nt}let g=l.reduce((D,U)=>D+U.length,0),$=new DataView(new ArrayBuffer(22));return $.setUint32(0,101010256,!0),$.setUint16(8,_.length,!0),$.setUint16(10,_.length,!0),$.setUint32(12,g,!0),$.setUint32(16,h,!0),$.setUint16(20,0,!0),new Blob([...r,...l,new Uint8Array($.buffer)],{type:"application/zip"})}var sl=[{name:"device",selector:{device:{integration:ze}}}],tn=[{id:"appearance",icon:"mdi:palette-outline"},{id:"display",icon:"mdi:eye-outline"},{id:"battery",icon:"mdi:home-battery-outline"},{id:"entities",icon:"mdi:tune-variant"}],en=[["show_flows",!0,"mdi:transit-connection-variant"],["show_grid",!0,"mdi:transmission-tower"],["show_solar",!0,"mdi:solar-power-variant"],["show_home",!0,"mdi:home-lightning-bolt"],["show_battery",!0,"mdi:home-battery"]],sn=[["sensor.sys_grid_power","mdi:transmission-tower"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.sys_load","mdi:home-lightning-bolt"],["sensor.bat_power","mdi:battery-charging"],["sensor.cms_batt_soc","mdi:battery-high"]],rl=[["house_image","light","mdi:white-balance-sunny"],["house_image_dark","dark","mdi:weather-night"]],Ss=class extends kt{static get properties(){return{hass:{},_config:{},_page:{state:!0},_zipping:{state:!0},_uploading:{state:!0}}}constructor(){super(),this._page=null,this._zipping=!1,this._uploading=null}connectedCallback(){super.connectedCallback(),Yt()}setConfig(i){this._config=i||{}}_t(i,r){return Ft(this.hass,i,r)}_defaults(){let i=oe(this.hass),r=this._config.device&&i.find(l=>l.deviceId===this._config.device)||i[0];return r?le(this.hass,r.ents):{}}render(){if(!this.hass)return L``;let i=tn.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_renderRoot(){return L`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${sl}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      <div class="nav">
        ${tn.map(i=>L`<button
            class="nav-row"
            @click=${()=>this._page=i.id}
          >
            <ha-icon class="nav-icon" icon=${i.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`house.page.${i.id}`)}</span>
              <span class="nav-secondary">${this._summary(i.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(i){if(i==="appearance"){if(pr(this._config))return this._t("house.editor.custom");let r=this._config.house||It,l=this._config.house_mode||Re;return`${this._t("house.editor.style_n",{n:r})} \xB7 ${this._t(`house.mode.${l}`)}`}if(i==="display"){let r=en.filter(([l,h])=>this._config[l]??h);return r.length?r.map(([l])=>this._t(`house.short.${l}`)).join(", "):this._t("editor.nothing_shown")}if(i==="battery"){let r=this._config.show_battery??!0,l=this._t(`house.battery.${this._config.battery||xe}`);return r?l:this._t("editor.nothing_shown")}if(i==="entities"){let r=sn.filter(([l])=>this._config.entities?.[l]).length;return r?this._t("editor.overridden",{n:r}):this._t("editor.automatic")}return""}_renderSubpage(i){return L`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`house.page.${i.id}`)}</span>
      </div>
      ${i.id==="appearance"?this._renderAppearancePage():i.id==="display"?en.map(([r,l,h])=>this._renderToggle(r,l,h)):i.id==="battery"?this._renderBatteryPage():this._renderEntitiesPage()}`}_renderAppearancePage(){let i=this._config.house||It,r=pr(this._config),l=this._config.house_mode||Re;return L`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="house-grid">
        ${ei.map(h=>L`<button
            class="house-opt ${!r&&i===h?"on":""}"
            title=${this._t("house.editor.style_n",{n:h})}
            @click=${()=>this._selectHouse(h)}
          >
            <img src=${bs(h,this.hass)} loading="lazy" alt=${h} />
            <span class="house-label">${this._t("house.editor.style_n",{n:h})}</span>
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${ys.map(h=>L`<button
            class="mode ${l===h?"on":""}"
            @click=${()=>this._set("house_mode",h,Re)}
          >
            ${this._t(`house.mode.${h}`)}
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:image-edit-outline"></ha-icon>${this._t("house.editor.custom")}
      </div>
      <div class="hint">${this._t("house.editor.custom_hint")}</div>
      ${rl.map(([h,g,$])=>this._renderUploadSlot(h,g,$))}
      <button
        class="link-btn"
        ?disabled=${this._zipping}
        @click=${this._downloadHouses}
      >
        <ha-icon icon=${this._zipping?"mdi:progress-download":"mdi:download"}></ha-icon>
        <span
          >${this._zipping?this._t("house.editor.preparing"):this._t("house.editor.download_zip")}</span
        >
      </button>`}_renderUploadSlot(i,r,l){let h=this._config[i]||"",g=this._uploading===i,$=this._t(`house.editor.custom_${r}`);return L`<div class="upload-slot">
      <div class="upload-slot-label">
        <ha-icon icon=${l}></ha-icon><span>${$}</span>
      </div>
      ${h?L`<div class="custom-img">
            <img src=${h} alt="" />
            <button class="link-btn danger" @click=${()=>this._set(i,"","")}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
              <span>${this._t("house.editor.custom_remove")}</span>
            </button>
          </div>`:L`<label class="upload ${g?"busy":""}">
            <ha-icon icon=${g?"mdi:progress-upload":"mdi:image-plus"}></ha-icon>
            <span>${g?this._t("house.editor.uploading"):$}</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              ?disabled=${this._uploading}
              @change=${D=>this._pickCustomImage(D,i)}
            />
          </label>`}
    </div>`}_renderBatteryPage(){let i=this._config.battery||xe,r=this._config.show_battery??!0;return L`<div class="hint top-hint">${this._t("house.editor.battery_hint")}</div>
      <div class=${r?"batt-grid":"batt-grid dim"}>
        ${Bi.map(l=>L`<button
            class="batt-opt ${i===l?"on":""}"
            title=${this._t(`house.battery.${l}`)}
            @click=${()=>this._set("battery",l,xe)}
          >
            <span
              class="batt-thumb"
              style=${`background-image:url(${Ve(l,this.hass)})`}
            ></span>
            <span class="batt-label">${this._t(`house.battery.${l}`)}</span>
          </button>`)}
      </div>`}_renderEntitiesPage(){return L`<div class="hint top-hint">${this._t("house.editor.entities_hint")}</div>
      ${sn.map(([i,r])=>this._renderSlot(i,r))}`}_renderToggle(i,r,l){return L`<div class="row">
      <ha-icon icon=${l}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${i}`)}</span>
      <ha-switch
        .checked=${this._config[i]??r}
        @change=${h=>this._set(i,h.target.checked,r)}
      ></ha-switch>
    </div>`}_renderSlot(i,r){let l=this._config.entities?.[i]||"",h=this._defaults()[i],g=gt(l)&&!ct(l)?l:"";return L`<div class="slot">
      <ha-icon icon=${r}></ha-icon>
      <ha-form
        class="slot-form"
        .hass=${this.hass}
        .data=${{value:g}}
        .schema=${[{name:"value",selector:{entity:{}}}]}
        .computeLabel=${()=>`${this._t(`slot.${i}`)}${h?` (${this._t("editor.auto_value",{value:h})})`:""}`}
        @value-changed=${$=>{$.stopPropagation(),this._setOverride(i,$.detail.value.value||"")}}
      ></ha-form>
    </div>`}_deviceChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${Qt}`};r.device||delete r.device,this._dispatch(r)}_set(i,r,l){let h={...this._config,type:`custom:${Qt}`};r===l||r===""||r==null?delete h[i]:h[i]=r,this._dispatch(h)}_selectHouse(i){let r={...this._config,type:`custom:${Qt}`};delete r.house_image,delete r.house_image_dark,i===It?delete r.house:r.house=i,this._dispatch(r)}async _pickCustomImage(i,r){let l=i.target.files?.[0];if(i.target.value="",!(!l||this._uploading)){this._uploading=r;try{let h=new FormData;h.append("file",l);let g=await this.hass.fetchWithAuth("/api/image/upload",{method:"POST",body:h});if(!g.ok)throw new Error(`upload failed: ${g.status}`);let $=await g.json();this._set(r,`/api/image/serve/${$.id}/original`,"")}catch(h){console.error("EcoFlow House card: image upload failed",h)}finally{this._uploading=null}}}async _downloadHouses(){if(!this._zipping){this._zipping=!0;try{let i=await Promise.all(Wa(this.hass).map(async({name:h,url:g})=>{let $=await fetch(g);if(!$.ok)throw new Error(`${g}: ${$.status}`);return{name:h,data:new Uint8Array(await $.arrayBuffer())}})),r=URL.createObjectURL(Qa(i)),l=document.createElement("a");l.href=r,l.download="ecoflow-house-images.zip",l.click(),URL.revokeObjectURL(r)}catch(i){console.error("EcoFlow House card: failed to build zip",i)}finally{this._zipping=!1}}}_setOverride(i,r){let l={...this._config.entities||{}};r?l[i]=r:delete l[i];let h={...this._config,entities:l,type:`custom:${Qt}`};Object.keys(l).length||delete h.entities,this._dispatch(h)}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return jt`
      .nav {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
      }
      .nav-row {
        display: flex;
        align-items: center;
        gap: 14px;
        border: none;
        background: transparent;
        padding: 12px 6px;
        cursor: pointer;
        text-align: left;
        border-radius: 10px;
        color: var(--primary-text-color);
        transition: background-color 0.15s ease;
      }
      .nav-row:hover {
        background: var(--secondary-background-color);
      }
      .nav-row ha-icon {
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
      }
      .nav-labels {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .nav-label {
        font-size: 1em;
      }
      .nav-secondary {
        font-size: 0.85em;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 280px;
      }
      .subpage-head {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--card-background-color, var(--ha-card-background));
        padding: 8px 0;
        margin-top: -8px;
      }
      .back {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        cursor: pointer;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        transition: background-color 0.15s ease;
      }
      .back:hover {
        background: var(--secondary-background-color);
      }
      .subpage-title {
        font-size: 1.1em;
        font-weight: 600;
      }
      .section {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        margin: 18px 0 8px;
        color: var(--primary-text-color);
      }
      .section ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .house-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        gap: 8px;
      }
      .house-opt {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        border: 2px solid transparent;
        border-radius: 12px;
        background: var(--secondary-background-color);
        padding: 6px 4px;
        cursor: pointer;
        transition: border-color 0.15s ease, filter 0.15s ease;
      }
      .house-opt:hover {
        filter: brightness(1.1);
      }
      .house-opt.on {
        border-color: var(--primary-color);
      }
      .house-opt img {
        width: 100%;
        aspect-ratio: 2340 / 1680;
        object-fit: contain;
        border-radius: 6px;
      }
      .house-label {
        font-size: 0.72em;
        color: var(--secondary-text-color);
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }
      .batt-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
        gap: 8px;
      }
      .batt-grid.dim {
        opacity: 0.45;
        pointer-events: none;
      }
      .batt-opt {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        border: 2px solid transparent;
        border-radius: 12px;
        background: var(--secondary-background-color);
        padding: 6px 4px;
        cursor: pointer;
        transition: border-color 0.15s ease, filter 0.15s ease;
      }
      .batt-opt:hover {
        filter: brightness(1.1);
      }
      .batt-opt.on {
        border-color: var(--primary-color);
      }
      /* The renders frame the box at centre; zoom the thumbnail into it. */
      .batt-thumb {
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 8px;
        background-repeat: no-repeat;
        background-position: center 58%;
        background-size: 200%;
      }
      .batt-label {
        font-size: 0.72em;
        color: var(--secondary-text-color);
        text-align: center;
        line-height: 1.15;
        max-width: 100%;
      }
      .modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
      }
      .mode {
        flex: 1;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        padding: 9px 0;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9em;
        transition: background-color 0.15s ease, color 0.15s ease;
      }
      .mode:hover:not(.on) {
        background: rgba(127, 127, 127, 0.18);
      }
      .mode.on {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        font-weight: 600;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 4px;
      }
      .row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .row-label {
        flex: 1;
        color: var(--primary-text-color);
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin: 4px 4px 10px;
      }
      .top-hint {
        margin: 0 4px 10px;
      }
      .upload-slot {
        margin-bottom: 12px;
      }
      .upload-slot-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9em;
        color: var(--primary-text-color);
        margin: 0 2px 6px;
      }
      .upload-slot-label ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .link-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin: 10px 0 4px;
        border: none;
        background: transparent;
        color: var(--primary-color);
        padding: 6px 4px;
        cursor: pointer;
        font-size: 0.9em;
      }
      .link-btn:hover:not([disabled]) {
        text-decoration: underline;
      }
      .link-btn[disabled] {
        opacity: 0.6;
        cursor: default;
      }
      .link-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .link-btn.danger {
        color: var(--error-color, #db4437);
      }
      .upload {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border: 2px dashed var(--divider-color, rgba(127, 127, 127, 0.4));
        border-radius: 12px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        padding: 18px 12px;
        cursor: pointer;
        transition: border-color 0.15s ease, filter 0.15s ease;
      }
      .upload:hover {
        border-color: var(--primary-color);
      }
      .upload.busy {
        pointer-events: none;
        opacity: 0.7;
      }
      .upload ha-icon {
        --mdc-icon-size: 22px;
        color: var(--secondary-text-color);
      }
      .upload input {
        display: none;
      }
      .custom-img {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      .custom-img img {
        width: 100%;
        max-width: 320px;
        aspect-ratio: 2340 / 1680;
        object-fit: contain;
        border-radius: 10px;
        border: 2px solid var(--primary-color);
        background: var(--secondary-background-color);
      }
      .slot {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .slot > ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        flex: 0 0 auto;
      }
      .slot-form {
        flex: 1;
        margin-bottom: 8px;
      }
    `}};var rn=jt`
  :host {
    display: block;
    --ef-view: calc(100vh - var(--header-height, 56px));
    --rail-w: 60px;
    /* App-style dark palette (self-contained so light HA themes still match). */
    --sp-text: #f1f4f7;
    --sp-muted: #9aa3ad;
    --sp-pill: rgba(8, 10, 12, 0.66);
    --sp-tile: rgba(255, 255, 255, 0.05);
    --sp-tile-border: rgba(255, 255, 255, 0.07);
    --sp-pos: #58d18b;
    --sp-neg: #f0707a;
  }
  @supports (height: 100dvh) {
    :host {
      --ef-view: calc(100dvh - var(--header-height, 56px));
    }
  }
  ha-card {
    overflow: hidden;
    position: relative;
    isolation: isolate;
    z-index: 0;
    height: var(--ef-view);
    border: none;
    border-radius: 0;
    color: var(--sp-text);
    /* A subtle top-lit dark gradient, like the app backdrop. */
    background: radial-gradient(
        120% 90% at 50% -10%,
        #2a2f36 0%,
        #181b1f 45%,
        #101215 100%
      ),
      #0e1013;
  }
  .shell {
    display: flex;
    height: 100%;
    width: 100%;
  }

  /* -- left icon rail (minimal, app-style: just icons, no boxes) --
     Vertical alignment of the items is configurable (start / center / end);
     labels under the icons are an opt-in. */
  .rail {
    flex: 0 0 var(--rail-w);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 26px;
    padding: 30px 6px;
    box-sizing: border-box;
    z-index: 2;
  }
  .rail.align-center {
    justify-content: center;
  }
  .rail.align-end {
    justify-content: flex-end;
  }
  .rail.has-labels {
    gap: 18px;
  }
  .rail-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    border: none;
    background: transparent;
    color: var(--sp-muted);
    cursor: pointer;
    padding: 4px;
    width: 100%;
    transition: color 0.15s ease, opacity 0.15s ease;
    opacity: 0.7;
  }
  .rail-btn:hover {
    color: var(--sp-text);
    opacity: 1;
  }
  .rail-btn.on {
    color: var(--sp-text);
    opacity: 1;
  }
  .rail-btn ha-icon {
    --mdc-icon-size: 27px;
  }
  .rail-label {
    font-size: 0.6em;
    line-height: 1.1;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* -- main area -- */
  .main {
    flex: 1 1 auto;
    min-width: 0;
    position: relative;
    overflow: hidden;
  }
  .stage-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* -- top bar -- */
  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px 0;
    gap: 12px;
    z-index: 3;
  }
  .topbar-left,
  .topbar-right {
    flex: 1 1 0;
    display: flex;
    align-items: center;
    min-width: 0;
  }
  .topbar-right {
    justify-content: flex-end;
  }
  .topbar-title {
    font-size: 1.05em;
    font-weight: 600;
    color: var(--sp-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .weather {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    border: none;
    background: transparent;
    color: var(--sp-text);
    cursor: pointer;
    padding: 4px 6px;
    font-size: 1.02em;
    font-weight: 600;
  }
  .w-grp {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
  }
  .w-grp ha-icon {
    --mdc-icon-size: 19px;
    color: var(--sp-muted);
  }
  .w-grp.moon ha-icon {
    color: #8e9bff;
  }

  /* -- the illustration (same coordinate box as the House card) -- */
  .stage {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    width: 100%;
  }
  .layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  img.layer {
    object-fit: contain;
    object-position: top center;
  }
  .flow {
    transition: opacity 0.4s ease;
  }
  .z-bg {
    z-index: 1;
  }
  .box {
    z-index: 2;
  }
  .z-box {
    z-index: 3;
  }

  /* -- floating overlays -- */
  .overlays {
    position: absolute;
    inset: 0;
    z-index: 4;
    pointer-events: none;
  }
  .overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    border: none;
    background: var(--sp-pill);
    color: var(--sp-text);
    border-radius: 13px;
    padding: 7px 13px;
    pointer-events: auto;
    cursor: default;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    white-space: nowrap;
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.32);
  }
  .overlay.clickable {
    cursor: pointer;
  }
  .overlay.clickable:hover {
    background: rgba(20, 24, 28, 0.82);
  }
  .ov-label {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: clamp(10px, 1.5vw, 13px);
    color: var(--sp-muted);
    font-weight: 500;
  }
  .ov-ic {
    --mdc-icon-size: 14px;
  }
  .ov-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-left: 2px;
  }
  .ov-value {
    display: inline-flex;
    align-items: baseline;
    gap: 2px;
    line-height: 1.05;
  }
  .ov-num {
    font-size: clamp(16px, 2.7vw, 26px);
    font-weight: 700;
    color: var(--ef-ov-color, var(--sp-text));
  }
  .ov-unit {
    font-size: 0.62em;
    font-weight: 600;
    color: var(--ef-ov-color, var(--sp-text));
    opacity: 0.8;
  }
  .ov-sec {
    font-size: 0.78em;
    font-weight: 700;
    color: var(--sp-pos);
    margin-left: 4px;
  }

  /* -- bottom tiles -- */
  .tiles {
    flex: 0 0 auto;
    display: flex;
    gap: 14px;
    padding: 10px 20px 20px;
    overflow-x: auto;
    z-index: 3;
  }
  .tile {
    flex: 1 1 0;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid var(--sp-tile-border);
    text-align: left;
    background: var(--sp-tile);
    color: var(--sp-text);
    border-radius: 18px;
    padding: 16px 18px;
    cursor: default;
  }
  .tile.clickable {
    cursor: pointer;
  }
  .tile.clickable:hover {
    background: rgba(255, 255, 255, 0.09);
  }
  .tile-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }
  .tile-label {
    font-size: 0.98em;
    color: var(--sp-muted);
    line-height: 1.2;
  }
  .tile-head ha-icon {
    --mdc-icon-size: 22px;
    color: var(--sp-muted);
    flex: none;
  }
  .tile-value {
    display: flex;
    align-items: baseline;
    gap: 4px;
  }
  .tile-num {
    font-size: clamp(22px, 3vw, 32px);
    font-weight: 800;
    line-height: 1;
  }
  .tile-unit {
    font-size: 0.5em;
    font-weight: 600;
    color: var(--sp-muted);
  }
  .tile-secondary {
    font-size: 0.8em;
    color: var(--sp-muted);
  }
  .tile-secondary.pos {
    color: var(--sp-pos);
  }
  .tile-secondary.neg {
    color: var(--sp-neg);
  }

  /* -- setup warning -- */
  .setup-warning {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 86%;
    padding: 8px 14px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--warning-color, #ff9800) 22%, #15181c);
    color: var(--sp-text);
    font-size: clamp(11px, 2.6vw, 14px);
    font-weight: 600;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
  .setup-warning ha-icon {
    flex: none;
    color: var(--warning-color, #ff9800);
    --mdc-icon-size: 1.3em;
  }

  /* -- embedded Lovelace view --
     The embedded ha-cards live in this card's shadow tree, so theme custom
     properties set here cascade into them: we re-map the common HA theme
     variables to the card's dark palette so embedded cards match the scene
     instead of rendering as white cards on a dark backdrop. */
  .embed {
    height: 100%;
    overflow: auto;
    padding: 20px 16px;
    box-sizing: border-box;
    --primary-text-color: var(--sp-text);
    --primary-background-color: transparent;
    --secondary-text-color: var(--sp-muted);
    --disabled-text-color: #6b7178;
    --card-background-color: rgba(255, 255, 255, 0.05);
    --ha-card-background: rgba(255, 255, 255, 0.05);
    --secondary-background-color: rgba(255, 255, 255, 0.08);
    --divider-color: rgba(255, 255, 255, 0.1);
    --state-icon-color: var(--sp-text);
    --paper-item-icon-color: var(--sp-muted);
    --mdc-theme-surface: #1a1d21;
    --ha-card-border-color: var(--sp-tile-border);
    --ha-card-box-shadow: none;
    color: var(--sp-text);
  }
  .embed-host {
    max-width: 860px;
    margin: 0 auto;
  }
  .embed-host > * {
    display: block;
    margin-bottom: 16px;
  }
  .embed-msg {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--sp-muted);
    padding: 16px;
  }
  .embed-msg ha-icon {
    --mdc-icon-size: 20px;
  }
`;var nn="sensor.grid_power",on="sensor.sys_grid_power",ln="sensor.pv_total",al="sensor.sys_load",hn="sensor.bat_power",cn="sensor.cms_batt_soc",an={center:"translate(-50%, -50%)","top-left":"translate(0, 0)","top-center":"translate(-50%, 0)","top-right":"translate(-100%, 0)","bottom-left":"translate(0, -100%)","bottom-center":"translate(-50%, -100%)","bottom-right":"translate(-100%, -100%)"},dn="var(--energy-solar-color, #ff9800)",pn="var(--energy-grid-consumption-color, #488fc2)",nl="var(--energy-grid-return-color, #8353d1)",fn="var(--energy-battery-in-color, #3ddc84)",ol="var(--energy-battery-out-color, #f06292)",$s={solar:{labelKey:"card.solar",icon:"mdi:solar-power-variant",slot:ln,format:"power",color:_=>_>vt?dn:null},grid:{labelKey:"house.grid",icon:"mdi:transmission-tower",slot:nn,slotFallback:on,format:"power-abs",color:_=>_>vt?pn:_<-vt?nl:null},battery:{labelKey:"card.battery",icon:"mdi:home-battery",slot:hn,format:"power-abs",color:_=>_>vt?fn:_<-vt?ol:null,secondarySlot:cn,secondaryUnit:"%"}},As={solar_today:{labelKey:"space.preset.solar_today",icon:"mdi:solar-power",color:dn,energyKey:"solar",format:"energy",secondaryKey:"space.today"},usage:{labelKey:"space.preset.usage",icon:"mdi:home-lightning-bolt",color:pn,energyKey:"consumption",format:"energy",secondaryKey:"space.today"},energy_independence:{labelKey:"space.preset.energy_independence",icon:"mdi:leaf",color:fn,energyKey:"independence",format:"percent"}},Es=class extends kt{static styles=rn;static get properties(){return{hass:{},_config:{},_tab:{state:!0}}}constructor(){super(),this._tab=0,this._flows=new gi,this._tmplUnsub={},this._tmplResults={},this._embed={path:null,status:null,els:[]},this._energy=void 0,this._energyTimer=null}connectedCallback(){super.connectedCallback(),Yt(),this._refreshEnergy(),this._energyTimer=setInterval(()=>this._refreshEnergy(),300*1e3)}disconnectedCallback(){super.disconnectedCallback(),this._flows.destroy();for(let i of Object.values(this._tmplUnsub))typeof i=="function"&&i();this._tmplUnsub={},this._energyTimer&&clearInterval(this._energyTimer),this._energyTimer=null}async _refreshEnergy(){if(!this.hass||!(this._config.tiles||[]).some(l=>As[l.preset]&&!ct(l.template)&&!(l.entity&&gt(l.entity))&&!l.slot))return;let r=await Ta(this.hass);this._energy=r,this.requestUpdate()}setConfig(i){this._config=i||{}}static getConfigElement(){return document.createElement(`${te}-editor`)}static getStubConfig(){return{tabs:[{id:"home",icon:"mdi:home",label:"Home"}],overlays:[{id:"solar",preset:"solar",x:30,y:27,anchor:"center"},{id:"grid",preset:"grid",x:22,y:62,anchor:"center"},{id:"battery",preset:"battery",x:52,y:62,anchor:"center"}],tiles:[{id:"solar",preset:"solar_today"},{id:"usage",preset:"usage"},{id:"independence",preset:"energy_independence"}],house:It}}getCardSize(){return 12}_t(i,r){return Ft(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=oe(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_slotEntity(i){return this._map?.[i]}_slotState(i){let r=this._slotEntity(i);return r?this.hass.states[r]:void 0}_grid(){let i=this._slotState(nn);return pt(i??this._slotState(on))}_flowStates(){let i=parseInt(this._config.house||It,10)||1;return this._device?{grid:this._grid(),solar:pt(this._slotState(ln)),load:pt(this._slotState(al)),bat:pt(this._slotState(hn)),soc:pt(this._slotState(cn)),route:i}:{grid:-400,solar:1500,load:700,bat:500,soc:65,route:i}}_moreInfo(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}async _syncTemplates(){if(!this.hass?.connection)return;let i=[];for(let r of this._config.overlays||[])ct(r.template)&&i.push(r.template),ct(r.secondary)&&i.push(r.secondary);for(let r of this._config.tiles||[])ct(r.template)&&i.push(r.template),ct(r.secondary)&&i.push(r.secondary);for(let r of i)if(!this._tmplUnsub[r]){this._tmplUnsub[r]=!0;try{this._tmplUnsub[r]=await this.hass.connection.subscribeMessage(l=>{this._tmplResults[r]=l.result,this.requestUpdate()},{type:"render_template",template:r})}catch{this._tmplResults[r]="\u26A0",this.requestUpdate()}}for(let r of Object.keys(this._tmplUnsub))if(!i.includes(r)){let l=this._tmplUnsub[r];typeof l=="function"&&l(),delete this._tmplUnsub[r],delete this._tmplResults[r]}}_fmt(i,r){let l=Number(r);return i==="power"?he(l):i==="power-abs"?he(Math.abs(l)):i==="energy"?ms(l):i==="percent"?{n:Number.isFinite(l)?String(Math.round(l)):"\u2013",u:"%"}:{n:r==null||r===""?"\u2013":String(r),u:""}}_overlayView(i){let r=i.preset?$s[i.preset]:null,l={label:i.label??(r?this._t(r.labelKey):""),icon:i.icon??r?.icon,num:"",unit:"",color:i.color||null,entityId:i.tap_entity||null,secondary:"",dot:i.dot};if(ct(i.template)){let h=this._tmplResults[i.template];l.num=h==null?"\u2026":String(h),l.unit=h==null?"":i.unit||""}else{let h=i.entity&&gt(i.entity)&&i.entity||i.slot&&this._slotEntity(i.slot)||r?.slot&&this._slotEntity(r.slot)||r?.slotFallback&&this._slotEntity(r.slotFallback)||null,g=h?this.hass.states[h]:null;if(g){let $=i.attribute?g.attributes?.[i.attribute]:g.state;if(r?.format){let D=this._fmt(r.format,$);l.num=D.n,l.unit=i.unit??D.u,!l.color&&r.color&&(l.color=r.color(Number($)))}else l.num=$==null||$===""?"\u2013":String($),l.unit=l.num==="\u2013"?"":i.unit??(i.attribute?"":g.attributes?.unit_of_measurement||"");if(l.entityId=i.tap_entity||h,r?.secondarySlot){let D=this._slotEntity(r.secondarySlot),U=D?this.hass.states[D]:null,j=U?Number(U.state):NaN;Number.isFinite(j)&&(l.secondary=`${Math.round(j)}${r.secondaryUnit||""}`)}}else l.entityId=i.tap_entity||h}return i.secondary&&(l.secondary=this._resolveValue(i.secondary)),l}_tileView(i){let r=i.preset?As[i.preset]:null,l={label:i.label??(r?this._t(r.labelKey):""),icon:i.icon??r?.icon,color:i.color||r?.color||null,num:"\u2013",unit:"",entityId:i.tap_entity||null,secondary:""},h=ct(i.template)||i.entity&&gt(i.entity)||i.slot;if(r&&!h){let g=this._energy?this._energy[r.energyKey]:null;if(g!=null){let $=this._fmt(r.format,g);l.num=$.n,l.unit=i.unit??$.u}}else if(ct(i.template)){let g=this._tmplResults[i.template];l.num=g==null?"\u2026":String(g),l.unit=g==null?"":i.unit||""}else{let g=i.entity&&gt(i.entity)&&i.entity||i.slot&&this._slotEntity(i.slot)||null,$=g?this.hass.states[g]:null;if($){let D=i.attribute?$.attributes?.[i.attribute]:$.state;if(r?.format){let U=this._fmt(r.format,D);l.num=U.n,l.unit=i.unit??U.u}else l.num=D==null||D===""?"\u2013":String(D),l.unit=l.num==="\u2013"?"":i.unit??(i.attribute?"":$.attributes?.unit_of_measurement||"");l.entityId=i.tap_entity||g}}return l.secondary=i.secondary?this._resolveValue(i.secondary):r?.secondaryKey?this._t(r.secondaryKey):"",l}_resolveValue(i){if(!i)return"";if(ct(i)){let r=this._tmplResults[i];return r==null?"\u2026":String(r)}if(gt(i)){let r=this.hass.states[i];if(!r)return"";let l=r.attributes?.unit_of_measurement;return l?`${r.state} ${l}`:r.state}return i}updated(i){super.updated(i),this._syncTemplates(),this._activeTab().id==="home"?this._flows.sync(this.renderRoot,{hass:this.hass,showFlows:this._show("show_flows"),batOverlays:this._show("show_battery")&&ws(this._config.battery),states:this._flowStates()}):this._syncEmbed()}_activeTab(){let i=this._tabs();return i[this._tab]||i[0]}_tabs(){let i=this._config.tabs&&this._config.tabs.length?[...this._config.tabs]:[{id:"home",icon:"mdi:home",label:"Home"}];return i[0]={...i[0],id:"home",icon:i[0].icon||"mdi:home"},i}async _syncEmbed(){let i=this.renderRoot?.querySelector(".embed-host");if(!i)return;let l=this._activeTab()?.path||"";if(l&&l===this._embed.path){for(let h of this._embed.els)h.hass=this.hass;return}if(this._embed={path:l,status:"loading",els:[]},i.innerHTML="",!l){this._embed.status="empty";return}try{let h=await this._fetchView(l);if(!h){this._embed.status="missing",i.innerHTML="",this.requestUpdate();return}let g=await window.loadCardHelpers?.();if(!g)throw new Error("card helpers unavailable");let $=[...h.cards||[]];for(let U of h.sections||[])$.push(...U.cards||[]);let D=[];for(let U of $)try{let j=g.createCardElement(U);j.hass=this.hass,i.appendChild(j),D.push(j)}catch{}if(this._activeTab()?.path!==l){i.innerHTML="";return}this._embed={path:l,status:"ready",els:D}}catch{this._embed.status="error",this.requestUpdate()}}async _fetchView(i){let r=String(i).split("/").filter(Boolean),l=r.length>1?r[0]:null,h=r.length>1?r.slice(1).join("/"):r[0],$=(await this.hass.connection.sendMessagePromise({type:"lovelace/config",url_path:l}))?.views||[],D=$.find(U=>U.path===h);return!D&&/^\d+$/.test(h)&&(D=$[Number(h)]),D}render(){if(!this.hass)return L``;let i=this._device;this._map=i?le(this.hass,i.ents):{};let r=this._tabs(),l=r[this._tab]||r[0],h=this._config.rail_labels??!1,g=this._config.rail_align||"start";return L`<ha-card>
      <div class="shell">
        <nav class="rail align-${g} ${h?"has-labels":""}">
          ${r.map(($,D)=>L`<button
              class="rail-btn ${D===this._tab?"on":""}"
              title=${$.label||""}
              @click=${()=>this._tab=D}
            >
              <ha-icon icon=${$.icon||"mdi:view-dashboard-outline"}></ha-icon>
              ${h&&$.label?L`<span class="rail-label">${$.label}</span>`:""}
            </button>`)}
        </nav>
        <div class="main">
          ${l.id==="home"?this._renderHome():this._renderEmbed()}
        </div>
      </div>
    </ha-card>`}_needsDevice(){let i=r=>!r.entity&&!ct(r.template)&&(r.slot||$s[r.preset]);return(this._config.overlays||[]).some(i)}_renderHome(){let i=this._show("show_battery"),r=!this._device&&this._needsDevice();return L`<div class="stage-wrap">
      ${this._renderTopBar()}
      <div class="stage">
        <img class="layer house" src=${mi(this._config,this.hass)} alt="" />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${i?L`<img
              class="layer box"
              src=${Ve(this._config.battery,this.hass)}
              alt=""
            />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        ${this._renderOverlays()}
        ${r?this._renderSetupWarning():""}
      </div>
      ${this._renderTiles()}
    </div>`}_renderTopBar(){let i=this._config.title&&!ct(this._config.title)?this._config.title:"";return L`<div class="topbar">
      <div class="topbar-left">
        ${i?L`<div class="topbar-title">${i}</div>`:""}
      </div>
      ${this._renderWeather()}
    </div>`}_renderWeather(){let i=this._config.weather?.entity,r=i?this.hass.states[i]:null;if(!r)return L`<div class="topbar-right"></div>`;let l=r.attributes||{},h=l.temperature_unit||this.hass.config?.unit_system?.temperature||"\xB0",g=this._resolveValue(this._config.weather?.low),$="";if(g!=="")$=g;else if(Array.isArray(l.forecast)&&l.forecast.length){let D=l.forecast[0].templow??l.forecast[0].temperature;D!=null&&($=`${Math.round(D)} ${h}`)}return L`<div class="topbar-right">
      <button class="weather" @click=${()=>this._moreInfo(i)} title=${r.state}>
        ${l.temperature!=null?L`<span class="w-grp"
              ><ha-icon icon="mdi:thermometer"></ha-icon
              ><span>${Math.round(l.temperature)} ${h}</span></span
            >`:""}
        ${l.humidity!=null?L`<span class="w-grp"
              ><ha-icon icon="mdi:water-percent"></ha-icon
              ><span>${Math.round(l.humidity)} %</span></span
            >`:""}
        ${$?L`<span class="w-grp moon"
              ><ha-icon icon="mdi:weather-night"></ha-icon
              ><span>${$}</span></span
            >`:""}
      </button>
    </div>`}_renderOverlays(){let i=this._config.overlays||[];return i.length?L`<div class="overlays">
      ${i.map(r=>{let l=this._overlayView(r),h=`left:${r.x??50}%;top:${r.y??50}%;transform:${an[r.anchor]||an.center};${l.color?`--ef-ov-color:${l.color};`:""}`;return L`<button
          class="overlay ${l.entityId?"clickable":""}"
          style=${h}
          @click=${()=>this._moreInfo(l.entityId)}
        >
          ${l.label?L`<span class="ov-label"
                >${l.icon?L`<ha-icon class="ov-ic" icon=${l.icon}></ha-icon>`:""}
                <span>${l.label}</span>
                ${r.dot?L`<span class="ov-dot" style=${`background:${r.dot}`}></span>`:""}</span
              >`:""}
          ${l.num!==""?L`<span class="ov-value"
                ><span class="ov-num">${l.num}</span
                >${l.unit?L`<span class="ov-unit">${l.unit}</span>`:""}
                ${l.secondary?L`<span class="ov-sec">· ${l.secondary}</span>`:""}</span
              >`:""}
        </button>`})}
    </div>`:""}_renderTiles(){let i=this._config.tiles||[];return i.length?L`<div class="tiles">
      ${i.map(r=>{let l=this._tileView(r),h=l.secondary.startsWith("+")?"pos":l.secondary.startsWith("-")?"neg":"";return L`<button
          class="tile ${l.entityId?"clickable":""}"
          @click=${()=>this._moreInfo(l.entityId)}
        >
          <div class="tile-head">
            <span class="tile-label">${l.label||""}</span>
            ${l.icon?L`<ha-icon
                  icon=${l.icon}
                  style=${l.color?`color:${l.color}`:""}
                ></ha-icon>`:""}
          </div>
          <div class="tile-value">
            <span class="tile-num">${l.num||"\u2013"}</span
            >${l.unit?L`<span class="tile-unit">${l.unit}</span>`:""}
          </div>
          ${l.secondary?L`<div class="tile-secondary ${h}">${l.secondary}</div>`:""}
        </button>`})}
    </div>`:""}_renderSetupWarning(){return L`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`}_renderEmbed(){let i=this._embed.status;return L`<div class="embed">
      ${i==="missing"||i==="error"?L`<div class="embed-msg">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <span>${this._t("space.embed_missing")}</span>
          </div>`:i==="empty"?L`<div class="embed-msg">
              <ha-icon icon="mdi:link-variant-off"></ha-icon>
              <span>${this._t("space.embed_empty")}</span>
            </div>`:""}
      <div class="embed-host"></div>
    </div>`}};var ll=[{name:"device",selector:{device:{integration:ze}}}],un=[{id:"appearance",icon:"mdi:palette-outline"},{id:"weather",icon:"mdi:weather-partly-cloudy"},{id:"overlays",icon:"mdi:label-multiple-outline"},{id:"tiles",icon:"mdi:card-text-outline"},{id:"tabs",icon:"mdi:dock-left"}],Ts=["sensor.pv_total","sensor.sys_load","sensor.grid_power","sensor.bat_power","sensor.cms_batt_soc"],hl=["center","top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],cl=[["show_flows",!0,"mdi:transit-connection-variant"],["show_battery",!0,"mdi:home-battery"]],dl=0,fr=_=>`${_}_${Date.now().toString(36)}_${dl++}`,Ps=class extends kt{static get properties(){return{hass:{},_config:{},_page:{state:!0},_sel:{state:!0}}}constructor(){super(),this._page=null,this._sel=null,this._modes={},this._drag=null}connectedCallback(){super.connectedCallback(),Yt()}setConfig(i){this._config=i||{}}_t(i,r){return Ft(this.hass,i,r)}render(){if(!this.hass)return L``;let i=un.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_renderRoot(){return L`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ll}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      <div class="nav">
        ${un.map(i=>L`<button class="nav-row" @click=${()=>this._page=i.id}>
            <ha-icon class="nav-icon" icon=${i.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`space.page.${i.id}`)}</span>
              <span class="nav-secondary">${this._summary(i.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(i){if(i==="appearance"){let r=this._config.house||It,l=this._config.house_mode||Re;return`${this._t("house.editor.style_n",{n:r})} \xB7 ${this._t(`house.mode.${l}`)}`}return i==="weather"?this._config.weather?.entity||this._t("editor.automatic"):i==="overlays"?this._t("space.n_items",{n:(this._config.overlays||[]).length}):i==="tiles"?this._t("space.n_items",{n:(this._config.tiles||[]).length}):i==="tabs"?this._t("space.n_items",{n:this._tabs().length}):""}_renderSubpage(i){return L`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`space.page.${i.id}`)}</span>
      </div>
      ${i.id==="appearance"?this._renderAppearance():i.id==="weather"?this._renderWeather():i.id==="overlays"?this._renderOverlays():i.id==="tiles"?this._renderTiles():this._renderTabs()}`}_renderAppearance(){let i=this._config.house||It,r=this._config.house_mode||Re,l=this._config.battery||xe;return L`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="grid">
        ${ei.map(h=>L`<button
            class="opt ${i===h?"on":""}"
            @click=${()=>this._set("house",h,It)}
          >
            <img src=${bs(h,this.hass)} loading="lazy" alt=${h} />
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${ys.map(h=>L`<button
            class="mode ${r===h?"on":""}"
            @click=${()=>this._set("house_mode",h,Re)}
          >
            ${this._t(`house.mode.${h}`)}
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:home-battery-outline"></ha-icon>${this._t("house.editor.battery")}
      </div>
      <div class="grid small">
        ${Bi.map(h=>L`<button
            class="opt ${l===h?"on":""}"
            title=${this._t(`house.battery.${h}`)}
            @click=${()=>this._set("battery",h,xe)}
          >
            <span
              class="batt-thumb"
              style=${`background-image:url(${Ve(h,this.hass)})`}
            ></span>
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:eye-outline"></ha-icon>${this._t("house.page.display")}
      </div>
      ${cl.map(([h,g,$])=>this._renderToggle(h,g,$))}`}_renderToggle(i,r,l){return L`<div class="row">
      <ha-icon icon=${l}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${i}`)}</span>
      <ha-switch
        .checked=${this._config[i]??r}
        @change=${h=>this._set(i,h.target.checked,r)}
      ></ha-switch>
    </div>`}_renderWeather(){let i=this._config.weather?.entity||"";return L`<div class="hint top-hint">${this._t("space.weather_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:i}}
        .schema=${[{name:"value",selector:{entity:{domain:"weather"}}}]}
        .computeLabel=${()=>this._t("space.weather_entity")}
        @value-changed=${r=>{r.stopPropagation(),this._setWeather("entity",r.detail.value.value||"")}}
      ></ha-form>
      ${this._textField(this._t("space.f_low"),this._config.weather?.low||"",r=>this._setWeather("low",r))}`}_setWeather(i,r){let l={...this._config.weather||{}};r?l[i]=r:delete l[i];let h={...this._config,weather:l,type:`custom:${te}`};Object.keys(l).length||delete h.weather,this._dispatch(h)}_renderOverlays(){let i=this._config.overlays||[];return L`<div class="hint top-hint">${this._t("space.overlays_hint")}</div>
      <div
        class="preview"
        @pointermove=${this._onDragMove}
        @pointerup=${this._onDragEnd}
        @pointerleave=${this._onDragEnd}
      >
        <img class="preview-img" src=${mi(this._config,this.hass)} alt="" />
        ${i.map(r=>L`<button
            class="chip ${this._sel===r.id?"sel":""}"
            style=${`left:${r.x??50}%;top:${r.y??50}%`}
            @pointerdown=${l=>this._onDragStart(l,r.id)}
            @click=${()=>this._sel=r.id}
          >
            ${r.icon?L`<ha-icon icon=${r.icon}></ha-icon>`:""}
            <span>${r.label||r.id}</span>
          </button>`)}
      </div>

      ${i.map((r,l)=>this._renderOverlayEditor(r,l))}

      <button class="add-btn" @click=${this._addOverlay}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_overlay")}</span>
      </button>`}_renderOverlayEditor(i,r){let l=this._sel===i.id,h=this._sourceMode(i);return L`<div class="item ${l?"open":""}">
      <div class="item-head" @click=${()=>this._sel=l?null:i.id}>
        ${i.icon?L`<ha-icon icon=${i.icon}></ha-icon>`:L`<ha-icon icon="mdi:label-outline"></ha-icon>`}
        <span class="item-title">${i.label||i.id}</span>
        <ha-icon class="chev" icon=${l?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${l?L`<div class="item-body">
            ${this._renderPresetField("overlays",i,r,$s)}
            ${this._textField(this._t("space.f_label"),i.label||"",g=>this._updateItem("overlays",r,{label:g}))}
            ${this._textField(this._t("space.f_icon"),i.icon||"",g=>this._updateItem("overlays",r,{icon:g}))}
            ${i.preset?"":this._renderSourceField("overlays",i,r,h)}
            ${this._textField(this._t("space.f_unit"),i.unit??"",g=>this._updateItem("overlays",r,{unit:g||void 0}))}
            ${this._textField(this._t("space.f_secondary"),i.secondary||"",g=>this._updateItem("overlays",r,{secondary:g||void 0}))}
            ${this._textField(this._t("space.f_dot"),i.dot||"",g=>this._updateItem("overlays",r,{dot:g||void 0}))}
            ${this._selectField(this._t("space.f_anchor"),hl,i.anchor||"center",g=>this._updateItem("overlays",r,{anchor:g}),g=>this._t(`space.anchor.${g}`))}
            <div class="xy">
              ${this._numField("X %",i.x??50,g=>this._updateItem("overlays",r,{x:g}))}
              ${this._numField("Y %",i.y??50,g=>this._updateItem("overlays",r,{y:g}))}
            </div>
            ${this._textField(this._t("space.f_color"),i.color||"",g=>this._updateItem("overlays",r,{color:g||void 0}))}
            <button class="del-btn" @click=${()=>this._removeItem("overlays",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_renderPresetField(i,r,l,h){let g=["",...Object.keys(h)];return L`${this._selectField(this._t("space.f_preset"),g,r.preset||"",$=>{let D={preset:$||void 0};$&&(D.slot=void 0,D.entity=void 0,D.template=void 0),this._updateItem(i,l,D)},$=>$?this._t(`space.preset.${$}`):this._t("space.preset_none"))}
      ${r.preset?L`<div class="hint">${this._t("space.preset_hint")}</div>`:""}`}_sourceMode(i){return this._modes[i.id]?this._modes[i.id]:ct(i.template)?"template":i.entity?"entity":"auto"}_renderSourceField(i,r,l,h){return L`<div class="src-modes">
        ${["auto","entity","template"].map(g=>L`<button
            class="mode ${h===g?"on":""}"
            @click=${()=>{this._modes={...this._modes,[r.id]:g};let $={slot:void 0,entity:void 0,template:void 0};this._updateItem(i,l,$)}}
          >
            ${this._t(`space.src_${g}`)}
          </button>`)}
      </div>
      ${h==="auto"?this._selectField(this._t("space.f_slot"),Ts,r.slot||Ts[0],g=>this._updateItem(i,l,{slot:g}),g=>this._t(`slot.${g}`)):h==="entity"?L`<ha-form
              .hass=${this.hass}
              .data=${{value:gt(r.entity)?r.entity:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${g=>{g.stopPropagation(),this._updateItem(i,l,{entity:g.detail.value.value||void 0})}}
            ></ha-form>`:L`<ha-form
              .hass=${this.hass}
              .data=${{value:ct(r.template)?r.template:""}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${g=>{g.stopPropagation(),this._updateItem(i,l,{template:g.detail.value.value||void 0})}}
            ></ha-form>`}`}_addOverlay(){let i=[...this._config.overlays||[]],r=fr("ov");i.push({id:r,label:"Overlay",x:50,y:50,anchor:"center",slot:Ts[0]}),this._setList("overlays",i),this._sel=r}_renderTiles(){let i=this._config.tiles||[];return L`<div class="hint top-hint">${this._t("space.tiles_hint")}</div>
      ${i.map((r,l)=>this._renderTileEditor(r,l))}
      <button class="add-btn" @click=${this._addTile}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tile")}</span>
      </button>`}_renderTileEditor(i,r){let l=this._sel===i.id,h=this._sourceMode(i);return L`<div class="item ${l?"open":""}">
      <div class="item-head" @click=${()=>this._sel=l?null:i.id}>
        ${i.icon?L`<ha-icon icon=${i.icon}></ha-icon>`:L`<ha-icon icon="mdi:card-outline"></ha-icon>`}
        <span class="item-title">${i.label||i.id}</span>
        <span class="reorder">
          <button @click=${g=>{g.stopPropagation(),this._moveItem("tiles",r,-1)}}>
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button @click=${g=>{g.stopPropagation(),this._moveItem("tiles",r,1)}}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
        </span>
      </div>
      ${l?L`<div class="item-body">
            ${this._renderPresetField("tiles",i,r,As)}
            ${this._textField(this._t("space.f_label"),i.label||"",g=>this._updateItem("tiles",r,{label:g}))}
            ${this._textField(this._t("space.f_icon"),i.icon||"",g=>this._updateItem("tiles",r,{icon:g}))}
            ${this._textField(this._t("space.f_icon_color"),i.color||"",g=>this._updateItem("tiles",r,{color:g||void 0}))}
            ${i.preset?"":this._renderSourceField("tiles",i,r,h)}
            ${this._textField(this._t("space.f_unit"),i.unit??"",g=>this._updateItem("tiles",r,{unit:g||void 0}))}
            ${this._textField(this._t("space.f_secondary"),i.secondary||"",g=>this._updateItem("tiles",r,{secondary:g||void 0}))}
            <button class="del-btn" @click=${()=>this._removeItem("tiles",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_addTile(){let i=[...this._config.tiles||[]],r=fr("tile");i.push({id:r,label:"Tile",slot:Ts[0]}),this._setList("tiles",i),this._sel=r}_tabs(){return this._config.tabs&&this._config.tabs.length?this._config.tabs:[{id:"home",icon:"mdi:home",label:"Home"}]}_renderTabs(){let i=this._tabs();return L`<div class="row">
        <ha-icon icon="mdi:label-outline"></ha-icon>
        <span class="row-label">${this._t("space.rail_labels")}</span>
        <ha-switch
          .checked=${this._config.rail_labels??!1}
          @change=${r=>this._set("rail_labels",r.target.checked,!1)}
        ></ha-switch>
      </div>
      ${this._selectField(this._t("space.rail_align"),["start","center","end"],this._config.rail_align||"start",r=>this._set("rail_align",r,"start"),r=>this._t(`space.align.${r}`))}
      <div class="hint top-hint" style="margin-top:14px">${this._t("space.tabs_hint")}</div>
      ${i.map((r,l)=>l===0?this._renderHomeTab(r):this._renderTabEditor(r,l))}
      <button class="add-btn" @click=${this._addTab}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tab")}</span>
      </button>`}_renderHomeTab(i){return L`<div class="item">
      <div class="item-head static">
        <ha-icon icon=${i.icon||"mdi:home"}></ha-icon>
        <span class="item-title">${i.label||this._t("house.home")}</span>
        <span class="badge">${this._t("space.home_tab")}</span>
      </div>
    </div>`}_renderTabEditor(i,r){let l=this._sel===`tab${r}`;return L`<div class="item ${l?"open":""}">
      <div class="item-head" @click=${()=>this._sel=l?null:`tab${r}`}>
        <ha-icon icon=${i.icon||"mdi:view-dashboard-outline"}></ha-icon>
        <span class="item-title">${i.label||i.path||`Tab ${r}`}</span>
        <ha-icon class="chev" icon=${l?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${l?L`<div class="item-body">
            ${this._textField(this._t("space.f_label"),i.label||"",h=>this._updateItem("tabs",r,{label:h}))}
            ${this._textField(this._t("space.f_icon"),i.icon||"",h=>this._updateItem("tabs",r,{icon:h}))}
            ${this._textField(this._t("space.f_path"),i.path||"",h=>this._updateItem("tabs",r,{path:h}),this._t("space.path_hint"))}
            <button class="del-btn" @click=${()=>this._removeItem("tabs",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_addTab(){let i=[...this._tabs()];i.push({id:fr("tab"),icon:"mdi:view-dashboard-outline",label:"View",path:""}),this._setList("tabs",i),this._sel=`tab${i.length-1}`}_textField(i,r,l,h){return L`<ha-textfield
      class="field"
      .label=${i}
      .value=${r}
      .helper=${h||""}
      @input=${g=>l(g.target.value)}
    ></ha-textfield>`}_numField(i,r,l){return L`<ha-textfield
      class="field num"
      type="number"
      .label=${i}
      .value=${String(r)}
      @input=${h=>{let g=Number(h.target.value);Number.isFinite(g)&&l(Math.max(0,Math.min(100,Math.round(g))))}}
    ></ha-textfield>`}_selectField(i,r,l,h,g){return L`<ha-select
      class="field"
      .label=${i}
      .value=${l}
      naturalMenuWidth
      @selected=${$=>h(r[$.target.index])}
      @closed=${$=>$.stopPropagation()}
    >
      ${r.map($=>L`<mwc-list-item .value=${$}>${g?g($):$}</mwc-list-item>`)}
    </ha-select>`}_onDragStart(i,r){i.preventDefault(),this._sel=r;let l=this.renderRoot.querySelector(".preview");this._drag={id:r,rect:l.getBoundingClientRect()},l.setPointerCapture?.(i.pointerId)}_onDragMove(i){if(!this._drag)return;let{rect:r,id:l}=this._drag,h=Math.max(0,Math.min(100,(i.clientX-r.left)/r.width*100)),g=Math.max(0,Math.min(100,(i.clientY-r.top)/r.height*100)),D=(this._config.overlays||[]).findIndex(U=>U.id===l);D<0||this._updateItem("overlays",D,{x:Math.round(h),y:Math.round(g)})}_onDragEnd(){this._drag=null}_deviceChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${te}`};r.device||delete r.device,this._dispatch(r)}_set(i,r,l){let h={...this._config,type:`custom:${te}`};r===l||r===""||r==null?delete h[i]:h[i]=r,this._dispatch(h)}_setList(i,r){let l={...this._config,type:`custom:${te}`};!r||!r.length?delete l[i]:l[i]=r,this._dispatch(l)}_updateItem(i,r,l){let h=[...i==="tabs"?this._tabs():this._config[i]||[]];if(!h[r])return;let g={...h[r],...l};for(let $ of Object.keys(g))g[$]===void 0&&delete g[$];h[r]=g,this._setList(i,h)}_removeItem(i,r){let l=[...i==="tabs"?this._tabs():this._config[i]||[]];l.splice(r,1),this._setList(i,l),this._sel=null}_moveItem(i,r,l){let h=[...this._config[i]||[]],g=r+l;g<0||g>=h.length||([h[r],h[g]]=[h[g],h[r]],this._setList(i,h))}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return jt`
      .nav {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
      }
      .nav-row {
        display: flex;
        align-items: center;
        gap: 14px;
        border: none;
        background: transparent;
        padding: 12px 6px;
        cursor: pointer;
        text-align: left;
        border-radius: 10px;
        color: var(--primary-text-color);
      }
      .nav-row:hover {
        background: var(--secondary-background-color);
      }
      .nav-row ha-icon {
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
      }
      .nav-labels {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .nav-secondary {
        font-size: 0.85em;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 280px;
      }
      .subpage-head {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--card-background-color, var(--ha-card-background));
        padding: 8px 0;
        margin-top: -8px;
      }
      .back {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        cursor: pointer;
        border-radius: 50%;
        width: 36px;
        height: 36px;
      }
      .back:hover {
        background: var(--secondary-background-color);
      }
      .subpage-title {
        font-size: 1.1em;
        font-weight: 600;
      }
      .section {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        margin: 18px 0 8px;
      }
      .section ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        gap: 8px;
      }
      .grid.small {
        grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
      }
      .opt {
        border: 2px solid transparent;
        border-radius: 12px;
        background: var(--secondary-background-color);
        padding: 4px;
        cursor: pointer;
      }
      .opt.on {
        border-color: var(--primary-color);
      }
      .opt img {
        width: 100%;
        aspect-ratio: 2340 / 1680;
        object-fit: contain;
        border-radius: 6px;
      }
      .batt-thumb {
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 8px;
        background-repeat: no-repeat;
        background-position: center 58%;
        background-size: 200%;
      }
      .modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
      }
      .mode {
        flex: 1;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        padding: 9px 0;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9em;
      }
      .mode.on {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        font-weight: 600;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 4px;
      }
      .row ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .row-label {
        flex: 1;
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin: 4px 4px 10px;
      }
      .top-hint {
        margin: 0 4px 12px;
      }

      /* drag preview */
      .preview {
        position: relative;
        width: 100%;
        aspect-ratio: 2340 / 1680;
        border-radius: 12px;
        overflow: hidden;
        background: #1b1f24;
        margin-bottom: 16px;
        touch-action: none;
        user-select: none;
      }
      .preview-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: top center;
      }
      .chip {
        position: absolute;
        transform: translate(-50%, -50%);
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border: 2px solid transparent;
        background: rgba(20, 24, 28, 0.78);
        color: #fff;
        border-radius: 10px;
        padding: 3px 8px;
        font-size: 0.78em;
        cursor: grab;
        white-space: nowrap;
      }
      .chip:active {
        cursor: grabbing;
      }
      .chip.sel {
        border-color: var(--primary-color);
      }
      .chip ha-icon {
        --mdc-icon-size: 15px;
      }

      /* list items */
      .item {
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        border-radius: 12px;
        margin-bottom: 8px;
        overflow: hidden;
      }
      .item.open {
        border-color: var(--primary-color);
      }
      .item-head {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        cursor: pointer;
      }
      .item-head.static {
        cursor: default;
      }
      .item-head > ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .item-title {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .chev {
        color: var(--secondary-text-color);
      }
      .badge {
        font-size: 0.72em;
        color: var(--secondary-text-color);
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
        border-radius: 8px;
        padding: 2px 8px;
      }
      .reorder {
        display: inline-flex;
      }
      .reorder button {
        border: none;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        padding: 2px;
      }
      .item-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 4px 12px 14px;
      }
      .field {
        width: 100%;
      }
      .xy {
        display: flex;
        gap: 10px;
      }
      .xy .num {
        flex: 1;
      }
      .src-modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
      }
      .add-btn,
      .del-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 8px 4px;
        font-size: 0.92em;
      }
      .add-btn {
        color: var(--primary-color);
        margin-top: 4px;
      }
      .del-btn {
        color: var(--error-color, #db4437);
        align-self: flex-start;
      }
      .add-btn ha-icon,
      .del-btn ha-icon {
        --mdc-icon-size: 18px;
      }
    `}};customElements.define(Mt,vs);customElements.define(`${Mt}-editor`,_s);customElements.define(Qt,ks);customElements.define(`${Qt}-editor`,Ss);customElements.define(te,Es);customElements.define(`${te}-editor`,Ps);window.customCards=window.customCards||[];window.customCards.push({type:Mt,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:Qt,name:"EcoFlow House Card",description:"Whole-home energy-flow illustration: a house with the battery box and animated grid, solar, home and battery flows.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:te,name:"EcoFlow Space Card",description:"Full-screen whole-home dashboard: the house illustration with configurable floating overlays, a weather widget, stat tiles and a sidebar that embeds other Lovelace views.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
/*! Bundled license information:

lottie-web/build/player/lottie_light.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
