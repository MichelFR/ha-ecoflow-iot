var wo=Object.create;var ua=Object.defineProperty;var xo=Object.getOwnPropertyDescriptor;var ko=Object.getOwnPropertyNames;var So=Object.getPrototypeOf,$o=Object.prototype.hasOwnProperty;var Ao=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports);var Eo=(c,i,r,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let h of ko(i))!$o.call(c,h)&&h!==r&&ua(c,h,{get:()=>i[h],enumerable:!(n=xo(i,h))||n.enumerable});return c};var Po=(c,i,r)=>(r=c!=null?wo(So(c)):{},Eo(i||!c||!c.__esModule?ua(r,"default",{value:c,enumerable:!0}):r,c));var Ja=Ao((Gi,Fs)=>{typeof document<"u"&&typeof navigator<"u"&&(function(c,i){typeof Gi=="object"&&typeof Fs<"u"?Fs.exports=i():typeof define=="function"&&define.amd?define(i):(c=typeof globalThis<"u"?globalThis:c||self,c.lottie=i())})(Gi,(function(){"use strict";var c="http://www.w3.org/2000/svg",i="",r=!1,n=-999999,h=function(e){r=!!e},g=function(){return r},$=function(e){i=e},V=function(){return i};function U(t){return document.createElement(t)}function B(t,e){var s,a=t.length,l;for(s=0;s<a;s+=1){l=t[s].prototype;for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e.prototype[o]=l[o])}}function Z(t,e){return Object.getOwnPropertyDescriptor(t,e)}function X(t){function e(){}return e.prototype=t,e}var nt=(function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(s){this.audios.push(s)},pause:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].pause()},resume:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].resume()},setRate:function(s){var a,l=this.audios.length;for(a=0;a<l;a+=1)this.audios[a].setRate(s)},createAudio:function(s){return this.audioFactory?this.audioFactory(s):window.Howl?new window.Howl({src:[s]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(s){this.audioFactory=s},setVolume:function(s){this._volume=s,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}})(),ot=(function(){function t(s,a){var l=0,o=[],p;switch(s){case"int16":case"uint8c":p=1;break;default:p=1.1;break}for(l=0;l<a;l+=1)o.push(p);return o}function e(s,a){return s==="float32"?new Float32Array(a):s==="int16"?new Int16Array(a):s==="uint8c"?new Uint8ClampedArray(a):t(s,a)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t})();function ht(t){return Array.apply(null,{length:t})}function de(t){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de(t)}var Bt=!0,Kt=null,ee=null,Wt="",Yi=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),yi=!1,Lt=Math.pow,ii=Math.sqrt,ie=Math.floor,Us=Math.max,Ve=Math.min,si={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,s=t.length;for(e=0;e<s;e+=1)si[t[e]]=Math[t[e]]})();function xr(){return{}}si.random=Math.random,si.abs=function(t){var e=de(t);if(e==="object"&&t.length){var s=ht(t.length),a,l=t.length;for(a=0;a<l;a+=1)s[a]=Math.abs(t[a]);return s}return Math.abs(t)};var Ki=150,mt=Math.PI/180,J=.5519;function St(t){yi=!!t}function Se(t){return yi?Math.round(t):t}function Ue(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function Be(t,e,s,a){this.type=t,this.currentTime=e,this.totalTime=s,this.direction=a<0?-1:1}function Ne(t,e){this.type=t,this.direction=e<0?-1:1}function je(t,e,s,a){this.type=t,this.currentLoop=s,this.totalLoops=e,this.direction=a<0?-1:1}function ri(t,e,s){this.type=t,this.firstFrame=e,this.totalFrames=s}function kr(t,e){this.type=t,this.target=e}function bn(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function wn(t){this.type="configError",this.nativeError=t}function kl(t,e){this.type=t,this.nativeError=e}var Ot=(function(){var t=0;return function(){return t+=1,Wt+"__lottie_element_"+t}})();function Bs(t,e,s){var a,l,o,p,_,f,x,A;switch(p=Math.floor(t*6),_=t*6-p,f=s*(1-e),x=s*(1-_*e),A=s*(1-(1-_)*e),p%6){case 0:a=s,l=A,o=f;break;case 1:a=x,l=s,o=f;break;case 2:a=f,l=s,o=A;break;case 3:a=f,l=x,o=s;break;case 4:a=A,l=f,o=s;break;case 5:a=s,l=f,o=x;break;default:break}return[a,l,o]}function Ns(t,e,s){var a=Math.max(t,e,s),l=Math.min(t,e,s),o=a-l,p,_=a===0?0:o/a,f=a/255;switch(a){case l:p=0;break;case t:p=e-s+o*(e<s?6:0),p/=6*o;break;case e:p=s-t+o*2,p/=6*o;break;case s:p=t-e+o*4,p/=6*o;break;default:break}return[p,_,f]}function Sr(t,e){var s=Ns(t[0]*255,t[1]*255,t[2]*255);return s[1]+=e,s[1]>1?s[1]=1:s[1]<=0&&(s[1]=0),Bs(s[0],s[1],s[2])}function $r(t,e){var s=Ns(t[0]*255,t[1]*255,t[2]*255);return s[2]+=e,s[2]>1?s[2]=1:s[2]<0&&(s[2]=0),Bs(s[0],s[1],s[2])}function Ar(t,e){var s=Ns(t[0]*255,t[1]*255,t[2]*255);return s[0]+=e/360,s[0]>1?s[0]-=1:s[0]<0&&(s[0]+=1),Bs(s[0],s[1],s[2])}var Sl=(function(){var t=[],e,s;for(e=0;e<256;e+=1)s=e.toString(16),t[e]=s.length===1?"0"+s:s;return function(a,l,o){return a<0&&(a=0),l<0&&(l=0),o<0&&(o=0),"#"+t[a]+t[l]+t[o]}})(),xn=function(e){Bt=!!e},kn=function(){return Bt},Sn=function(e){Kt=e},Xi=function(){return Kt},$l=function(e){ee=e},Er=function(){return ee},Zi=function(e){Ki=e},bi=function(){return Ki},$n=function(e){Wt=e},Al=function(){return Wt};function rt(t){return document.createElementNS(c,t)}function js(t){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},js(t)}var wi=(function(){var t=1,e=[],s,a,l={onmessage:function(){},postMessage:function(E){s({data:E})}},o={postMessage:function(E){l.onmessage({data:E})}};function p(v){if(window.Worker&&window.Blob&&g()){var E=new Blob(["var _workerSelf = self; self.onmessage = ",v.toString()],{type:"text/javascript"}),C=URL.createObjectURL(E);return new Worker(C)}return s=v,l}function _(){a||(a=p(function(E){function C(){function L(N,b){var T,d,u=N.length,R,F,q,tt;for(d=0;d<u;d+=1)if(T=N[d],"ks"in T&&!T.completed){if(T.completed=!0,T.hasMask){var it=T.masksProperties;for(F=it.length,R=0;R<F;R+=1)if(it[R].pt.k.i)k(it[R].pt.k);else for(tt=it[R].pt.k.length,q=0;q<tt;q+=1)it[R].pt.k[q].s&&k(it[R].pt.k[q].s[0]),it[R].pt.k[q].e&&k(it[R].pt.k[q].e[0])}T.ty===0?(T.layers=m(T.refId,b),L(T.layers,b)):T.ty===4?y(T.shapes):T.ty===5&&at(T)}}function S(N,b){if(N){var T=0,d=N.length;for(T=0;T<d;T+=1)N[T].t===1&&(N[T].data.layers=m(N[T].data.refId,b),L(N[T].data.layers,b))}}function w(N,b){for(var T=0,d=b.length;T<d;){if(b[T].id===N)return b[T];T+=1}return null}function m(N,b){var T=w(N,b);return T?T.layers.__used?JSON.parse(JSON.stringify(T.layers)):(T.layers.__used=!0,T.layers):null}function y(N){var b,T=N.length,d,u;for(b=T-1;b>=0;b-=1)if(N[b].ty==="sh")if(N[b].ks.k.i)k(N[b].ks.k);else for(u=N[b].ks.k.length,d=0;d<u;d+=1)N[b].ks.k[d].s&&k(N[b].ks.k[d].s[0]),N[b].ks.k[d].e&&k(N[b].ks.k[d].e[0]);else N[b].ty==="gr"&&y(N[b].it)}function k(N){var b,T=N.i.length;for(b=0;b<T;b+=1)N.i[b][0]+=N.v[b][0],N.i[b][1]+=N.v[b][1],N.o[b][0]+=N.v[b][0],N.o[b][1]+=N.v[b][1]}function M(N,b){var T=b?b.split("."):[100,100,100];return N[0]>T[0]?!0:T[0]>N[0]?!1:N[1]>T[1]?!0:T[1]>N[1]?!1:N[2]>T[2]?!0:T[2]>N[2]?!1:null}var z=(function(){var N=[4,4,14];function b(d){var u=d.t.d;d.t.d={k:[{s:u,t:0}]}}function T(d){var u,R=d.length;for(u=0;u<R;u+=1)d[u].ty===5&&b(d[u])}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var u,R=d.assets.length;for(u=0;u<R;u+=1)d.assets[u].layers&&T(d.assets[u].layers)}}})(),D=(function(){var N=[4,7,99];return function(b){if(b.chars&&!M(N,b.v)){var T,d=b.chars.length;for(T=0;T<d;T+=1){var u=b.chars[T];u.data&&u.data.shapes&&(y(u.data.shapes),u.data.ip=0,u.data.op=99999,u.data.st=0,u.data.sr=1,u.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},b.chars[T].t||(u.data.shapes.push({ty:"no"}),u.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}})(),j=(function(){var N=[5,7,15];function b(d){var u=d.t.p;typeof u.a=="number"&&(u.a={a:0,k:u.a}),typeof u.p=="number"&&(u.p={a:0,k:u.p}),typeof u.r=="number"&&(u.r={a:0,k:u.r})}function T(d){var u,R=d.length;for(u=0;u<R;u+=1)d[u].ty===5&&b(d[u])}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var u,R=d.assets.length;for(u=0;u<R;u+=1)d.assets[u].layers&&T(d.assets[u].layers)}}})(),et=(function(){var N=[4,1,9];function b(d){var u,R=d.length,F,q;for(u=0;u<R;u+=1)if(d[u].ty==="gr")b(d[u].it);else if(d[u].ty==="fl"||d[u].ty==="st")if(d[u].c.k&&d[u].c.k[0].i)for(q=d[u].c.k.length,F=0;F<q;F+=1)d[u].c.k[F].s&&(d[u].c.k[F].s[0]/=255,d[u].c.k[F].s[1]/=255,d[u].c.k[F].s[2]/=255,d[u].c.k[F].s[3]/=255),d[u].c.k[F].e&&(d[u].c.k[F].e[0]/=255,d[u].c.k[F].e[1]/=255,d[u].c.k[F].e[2]/=255,d[u].c.k[F].e[3]/=255);else d[u].c.k[0]/=255,d[u].c.k[1]/=255,d[u].c.k[2]/=255,d[u].c.k[3]/=255}function T(d){var u,R=d.length;for(u=0;u<R;u+=1)d[u].ty===4&&b(d[u].shapes)}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var u,R=d.assets.length;for(u=0;u<R;u+=1)d.assets[u].layers&&T(d.assets[u].layers)}}})(),K=(function(){var N=[4,4,18];function b(d){var u,R=d.length,F,q;for(u=R-1;u>=0;u-=1)if(d[u].ty==="sh")if(d[u].ks.k.i)d[u].ks.k.c=d[u].closed;else for(q=d[u].ks.k.length,F=0;F<q;F+=1)d[u].ks.k[F].s&&(d[u].ks.k[F].s[0].c=d[u].closed),d[u].ks.k[F].e&&(d[u].ks.k[F].e[0].c=d[u].closed);else d[u].ty==="gr"&&b(d[u].it)}function T(d){var u,R,F=d.length,q,tt,it,ct;for(R=0;R<F;R+=1){if(u=d[R],u.hasMask){var dt=u.masksProperties;for(tt=dt.length,q=0;q<tt;q+=1)if(dt[q].pt.k.i)dt[q].pt.k.c=dt[q].cl;else for(ct=dt[q].pt.k.length,it=0;it<ct;it+=1)dt[q].pt.k[it].s&&(dt[q].pt.k[it].s[0].c=dt[q].cl),dt[q].pt.k[it].e&&(dt[q].pt.k[it].e[0].c=dt[q].cl)}u.ty===4&&b(u.shapes)}}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var u,R=d.assets.length;for(u=0;u<R;u+=1)d.assets[u].layers&&T(d.assets[u].layers)}}})();function H(N){N.__complete||(et(N),z(N),D(N),j(N),K(N),L(N.layers,N.assets),S(N.chars,N.assets),N.__complete=!0)}function at(N){N.t.a.length===0&&"m"in N.t.p}var G={};return G.completeData=H,G.checkColors=et,G.checkChars=D,G.checkPathProperties=j,G.checkShapes=K,G.completeLayers=L,G}if(o.dataManager||(o.dataManager=C()),o.assetLoader||(o.assetLoader=(function(){function L(w){var m=w.getResponseHeader("content-type");return m&&w.responseType==="json"&&m.indexOf("json")!==-1||w.response&&js(w.response)==="object"?w.response:w.response&&typeof w.response=="string"?JSON.parse(w.response):w.responseText?JSON.parse(w.responseText):null}function S(w,m,y,k){var M,z=new XMLHttpRequest;try{z.responseType="json"}catch{}z.onreadystatechange=function(){if(z.readyState===4)if(z.status===200)M=L(z),y(M);else try{M=L(z),y(M)}catch(D){k&&k(D)}};try{z.open(["G","E","T"].join(""),w,!0)}catch{z.open(["G","E","T"].join(""),m+"/"+w,!0)}z.send()}return{load:S}})()),E.data.type==="loadAnimation")o.assetLoader.load(E.data.path,E.data.fullPath,function(L){o.dataManager.completeData(L),o.postMessage({id:E.data.id,payload:L,status:"success"})},function(){o.postMessage({id:E.data.id,status:"error"})});else if(E.data.type==="complete"){var P=E.data.animation;o.dataManager.completeData(P),o.postMessage({id:E.data.id,payload:P,status:"success"})}else E.data.type==="loadData"&&o.assetLoader.load(E.data.path,E.data.fullPath,function(L){o.postMessage({id:E.data.id,payload:L,status:"success"})},function(){o.postMessage({id:E.data.id,status:"error"})})}),a.onmessage=function(v){var E=v.data,C=E.id,P=e[C];e[C]=null,E.status==="success"?P.onComplete(E.payload):P.onError&&P.onError()})}function f(v,E){t+=1;var C="processId_"+t;return e[C]={onComplete:v,onError:E},C}function x(v,E,C){_();var P=f(E,C);a.postMessage({type:"loadAnimation",path:v,fullPath:window.location.origin+window.location.pathname,id:P})}function A(v,E,C){_();var P=f(E,C);a.postMessage({type:"loadData",path:v,fullPath:window.location.origin+window.location.pathname,id:P})}function O(v,E,C){_();var P=f(E,C);a.postMessage({type:"complete",animation:v,id:P})}return{loadAnimation:x,loadData:A,completeAnimation:O}})(),An=(function(){var t=(function(){var S=U("canvas");S.width=1,S.height=1;var w=S.getContext("2d");return w.fillStyle="rgba(0,0,0,0)",w.fillRect(0,0,1,1),S})();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function s(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function a(S,w,m){var y="";if(S.e)y=S.p;else if(w){var k=S.p;k.indexOf("images/")!==-1&&(k=k.split("/")[1]),y=w+k}else y=m,y+=S.u?S.u:"",y+=S.p;return y}function l(S){var w=0,m=setInterval(function(){var y=S.getBBox();(y.width||w>500)&&(this._imageLoaded(),clearInterval(m)),w+=1}.bind(this),50)}function o(S){var w=a(S,this.assetsPath,this.path),m=rt("image");Yi?this.testImageLoaded(m):m.addEventListener("load",this._imageLoaded,!1),m.addEventListener("error",function(){y.img=t,this._imageLoaded()}.bind(this),!1),m.setAttributeNS("http://www.w3.org/1999/xlink","href",w),this._elementHelper.append?this._elementHelper.append(m):this._elementHelper.appendChild(m);var y={img:m,assetData:S};return y}function p(S){var w=a(S,this.assetsPath,this.path),m=U("img");m.crossOrigin="anonymous",m.addEventListener("load",this._imageLoaded,!1),m.addEventListener("error",function(){y.img=t,this._imageLoaded()}.bind(this),!1),m.src=w;var y={img:m,assetData:S};return y}function _(S){var w={assetData:S},m=a(S,this.assetsPath,this.path);return wi.loadData(m,function(y){w.img=y,this._footageLoaded()}.bind(this),function(){w.img={},this._footageLoaded()}.bind(this)),w}function f(S,w){this.imagesLoadedCb=w;var m,y=S.length;for(m=0;m<y;m+=1)S[m].layers||(!S[m].t||S[m].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(S[m]))):S[m].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(S[m]))))}function x(S){this.path=S||""}function A(S){this.assetsPath=S||""}function O(S){for(var w=0,m=this.images.length;w<m;){if(this.images[w].assetData===S)return this.images[w].img;w+=1}return null}function v(){this.imagesLoadedCb=null,this.images.length=0}function E(){return this.totalImages===this.loadedAssets}function C(){return this.totalFootages===this.loadedFootagesCount}function P(S,w){S==="svg"?(this._elementHelper=w,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function L(){this._imageLoaded=e.bind(this),this._footageLoaded=s.bind(this),this.testImageLoaded=l.bind(this),this.createFootageData=_.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return L.prototype={loadAssets:f,setAssetsPath:A,setPath:x,loadedImages:E,loadedFootages:C,destroy:v,getAsset:O,createImgData:p,createImageData:o,imageLoaded:e,footageLoaded:s,setCacheType:P},L})();function Pr(){}Pr.prototype={triggerEvent:function(e,s){if(this._cbs[e])for(var a=this._cbs[e],l=0;l<a.length;l+=1)a[l](s)},addEventListener:function(e,s){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(s),function(){this.removeEventListener(e,s)}.bind(this)},removeEventListener:function(e,s){if(!s)this._cbs[e]=null;else if(this._cbs[e]){for(var a=0,l=this._cbs[e].length;a<l;)this._cbs[e][a]===s&&(this._cbs[e].splice(a,1),a-=1,l-=1),a+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var En=(function(){function t(e){for(var s=e.split(`\r
`),a={},l,o=0,p=0;p<s.length;p+=1)l=s[p].split(":"),l.length===2&&(a[l[0]]=l[1].trim(),o+=1);if(o===0)throw new Error;return a}return function(e){for(var s=[],a=0;a<e.length;a+=1){var l=e[a],o={time:l.tm,duration:l.dr};try{o.payload=JSON.parse(e[a].cm)}catch{try{o.payload=t(e[a].cm)}catch{o.payload={name:e[a].cm}}}s.push(o)}return s}})(),Pn=(function(){function t(e){this.compositions.push(e)}return function(){function e(s){for(var a=0,l=this.compositions.length;a<l;){if(this.compositions[a].data&&this.compositions[a].data.nm===s)return this.compositions[a].prepareFrame&&this.compositions[a].data.xt&&this.compositions[a].prepareFrame(this.currentFrame),this.compositions[a].compInterface;a+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}})(),xi={},Tn=function(e,s){xi[e]=s};function Cn(t){return xi[t]}function Mn(){if(xi.canvas)return"canvas";for(var t in xi)if(xi[t])return t;return""}function Ji(t){"@babel/helpers - typeof";return Ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ji(t)}var Q=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Ot(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=kn(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=Pn(),this.imagePreloader=new An,this.audioController=nt(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new Be("drawnFrame",0,0,0),this.expressionsPlugin=Xi()};B([Pr],Q),Q.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var s=Cn(e);this.renderer=new s(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),wi.loadAnimation(t.path,this.configAnimation,this.onSetupError))},Q.prototype.onSetupError=function(){this.trigger("data_failed")},Q.prototype.setupAnimation=function(t){wi.completeAnimation(t,this.configAnimation)},Q.prototype.setData=function(t,e){e&&Ji(e)!=="object"&&(e=JSON.parse(e));var s={wrapper:t,animationData:e},a=t.attributes;s.path=a.getNamedItem("data-animation-path")?a.getNamedItem("data-animation-path").value:a.getNamedItem("data-bm-path")?a.getNamedItem("data-bm-path").value:a.getNamedItem("bm-path")?a.getNamedItem("bm-path").value:"",s.animType=a.getNamedItem("data-anim-type")?a.getNamedItem("data-anim-type").value:a.getNamedItem("data-bm-type")?a.getNamedItem("data-bm-type").value:a.getNamedItem("bm-type")?a.getNamedItem("bm-type").value:a.getNamedItem("data-bm-renderer")?a.getNamedItem("data-bm-renderer").value:a.getNamedItem("bm-renderer")?a.getNamedItem("bm-renderer").value:Mn()||"canvas";var l=a.getNamedItem("data-anim-loop")?a.getNamedItem("data-anim-loop").value:a.getNamedItem("data-bm-loop")?a.getNamedItem("data-bm-loop").value:a.getNamedItem("bm-loop")?a.getNamedItem("bm-loop").value:"";l==="false"?s.loop=!1:l==="true"?s.loop=!0:l!==""&&(s.loop=parseInt(l,10));var o=a.getNamedItem("data-anim-autoplay")?a.getNamedItem("data-anim-autoplay").value:a.getNamedItem("data-bm-autoplay")?a.getNamedItem("data-bm-autoplay").value:a.getNamedItem("bm-autoplay")?a.getNamedItem("bm-autoplay").value:!0;s.autoplay=o!=="false",s.name=a.getNamedItem("data-name")?a.getNamedItem("data-name").value:a.getNamedItem("data-bm-name")?a.getNamedItem("data-bm-name").value:a.getNamedItem("bm-name")?a.getNamedItem("bm-name").value:"";var p=a.getNamedItem("data-anim-prerender")?a.getNamedItem("data-anim-prerender").value:a.getNamedItem("data-bm-prerender")?a.getNamedItem("data-bm-prerender").value:a.getNamedItem("bm-prerender")?a.getNamedItem("bm-prerender").value:"";p==="false"&&(s.prerender=!1),s.path?this.setParams(s):this.trigger("destroy")},Q.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,s,a=e.length,l=t.layers,o,p=l.length;for(o=0;o<p;o+=1)for(s=0;s<a;){if(e[s].id===l[o].id){e[s]=l[o];break}s+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(a=t.assets.length,s=0;s<a;s+=1)this.animationData.assets.push(t.assets[s]);this.animationData.__complete=!1,wi.completeAnimation(this.animationData,this.onSegmentComplete)},Q.prototype.onSegmentComplete=function(t){this.animationData=t;var e=Xi();e&&e.initExpressions(this),this.loadNextSegment()},Q.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var s=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,wi.loadData(s,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},Q.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},Q.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},Q.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},Q.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=En(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},Q.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},Q.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=Xi();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},Q.prototype.resize=function(t,e){var s=typeof t=="number"?t:void 0,a=typeof e=="number"?e:void 0;this.renderer.updateContainerSize(s,a)},Q.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},Q.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},Q.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},Q.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},Q.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},Q.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},Q.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},Q.prototype.getMarkerData=function(t){for(var e,s=0;s<this.markers.length;s+=1)if(e=this.markers[s],e.payload&&e.payload.name===t)return e;return null},Q.prototype.goToAndStop=function(t,e,s){if(!(s&&this.name!==s)){var a=Number(t);if(isNaN(a)){var l=this.getMarkerData(t);l&&this.goToAndStop(l.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},Q.prototype.goToAndPlay=function(t,e,s){if(!(s&&this.name!==s)){var a=Number(t);if(isNaN(a)){var l=this.getMarkerData(t);l&&(l.duration?this.playSegments([l.time,l.time+l.duration],!0):this.goToAndStop(l.time,!0))}else this.goToAndStop(a,e,s);this.play()}},Q.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,s=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(s=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(s=!0,e=0)):this.setCurrentRawFrameValue(e),s&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},Q.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},Q.prototype.setSegment=function(t,e){var s=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?s=t:this.currentRawFrame+this.firstFrame>e&&(s=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,s!==-1&&this.goToAndStop(s,!0)},Q.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),Ji(t[0])==="object"){var s,a=t.length;for(s=0;s<a;s+=1)this.segments.push(t[s])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},Q.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},Q.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},Q.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},Q.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},Q.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},Q.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},Q.prototype.setLoop=function(t){this.loop=t},Q.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},Q.prototype.getVolume=function(){return this.audioController.getVolume()},Q.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},Q.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},Q.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},Q.prototype.getPath=function(){return this.path},Q.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var s=t.p;s.indexOf("images/")!==-1&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},Q.prototype.getAssetData=function(t){for(var e=0,s=this.assets.length;e<s;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},Q.prototype.hide=function(){this.renderer.hide()},Q.prototype.show=function(){this.renderer.show()},Q.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},Q.prototype.updateDocumentData=function(t,e,s){try{var a=this.renderer.getElementByPath(t);a.updateDocumentData(e,s)}catch{}},Q.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new Be(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new je(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new Ne(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new ri(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new kr(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new Be(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new je(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new Ne(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new ri(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new kr(t,this))},Q.prototype.triggerRenderFrameError=function(t){var e=new bn(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},Q.prototype.triggerConfigError=function(t){var e=new wn(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var yt=(function(){var t={},e=[],s=0,a=0,l=0,o=!0,p=!1;function _(b){for(var T=0,d=b.target;T<a;)e[T].animation===d&&(e.splice(T,1),T-=1,a-=1,d.isPaused||O()),T+=1}function f(b,T){if(!b)return null;for(var d=0;d<a;){if(e[d].elem===b&&e[d].elem!==null)return e[d].animation;d+=1}var u=new Q;return v(u,b),u.setData(b,T),u}function x(){var b,T=e.length,d=[];for(b=0;b<T;b+=1)d.push(e[b].animation);return d}function A(){l+=1,et()}function O(){l-=1}function v(b,T){b.addEventListener("destroy",_),b.addEventListener("_active",A),b.addEventListener("_idle",O),e.push({elem:T,animation:b}),a+=1}function E(b){var T=new Q;return v(T,null),T.setParams(b),T}function C(b,T){var d;for(d=0;d<a;d+=1)e[d].animation.setSpeed(b,T)}function P(b,T){var d;for(d=0;d<a;d+=1)e[d].animation.setDirection(b,T)}function L(b){var T;for(T=0;T<a;T+=1)e[T].animation.play(b)}function S(b){var T=b-s,d;for(d=0;d<a;d+=1)e[d].animation.advanceTime(T);s=b,l&&!p?window.requestAnimationFrame(S):o=!0}function w(b){s=b,window.requestAnimationFrame(S)}function m(b){var T;for(T=0;T<a;T+=1)e[T].animation.pause(b)}function y(b,T,d){var u;for(u=0;u<a;u+=1)e[u].animation.goToAndStop(b,T,d)}function k(b){var T;for(T=0;T<a;T+=1)e[T].animation.stop(b)}function M(b){var T;for(T=0;T<a;T+=1)e[T].animation.togglePause(b)}function z(b){var T;for(T=a-1;T>=0;T-=1)e[T].animation.destroy(b)}function D(b,T,d){var u=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),R,F=u.length;for(R=0;R<F;R+=1)d&&u[R].setAttribute("data-bm-type",d),f(u[R],b);if(T&&F===0){d||(d="svg");var q=document.getElementsByTagName("body")[0];q.innerText="";var tt=U("div");tt.style.width="100%",tt.style.height="100%",tt.setAttribute("data-bm-type",d),q.appendChild(tt),f(tt,b)}}function j(){var b;for(b=0;b<a;b+=1)e[b].animation.resize()}function et(){!p&&l&&o&&(window.requestAnimationFrame(w),o=!1)}function K(){p=!0}function H(){p=!1,et()}function at(b,T){var d;for(d=0;d<a;d+=1)e[d].animation.setVolume(b,T)}function G(b){var T;for(T=0;T<a;T+=1)e[T].animation.mute(b)}function N(b){var T;for(T=0;T<a;T+=1)e[T].animation.unmute(b)}return t.registerAnimation=f,t.loadAnimation=E,t.setSpeed=C,t.setDirection=P,t.play=L,t.pause=m,t.stop=k,t.togglePause=M,t.searchAnimations=D,t.resize=j,t.goToAndStop=y,t.destroy=z,t.freeze=K,t.unfreeze=H,t.setVolume=at,t.mute=G,t.unmute=N,t.getRegisteredAnimations=x,t})(),ki=(function(){var t={};t.getBezierEasing=s;var e={};function s(w,m,y,k,M){var z=M||("bez_"+w+"_"+m+"_"+y+"_"+k).replace(/\./g,"p");if(e[z])return e[z];var D=new S([w,m,y,k]);return e[z]=D,D}var a=4,l=.001,o=1e-7,p=10,_=11,f=1/(_-1),x=typeof Float32Array=="function";function A(w,m){return 1-3*m+3*w}function O(w,m){return 3*m-6*w}function v(w){return 3*w}function E(w,m,y){return((A(m,y)*w+O(m,y))*w+v(m))*w}function C(w,m,y){return 3*A(m,y)*w*w+2*O(m,y)*w+v(m)}function P(w,m,y,k,M){var z,D,j=0;do D=m+(y-m)/2,z=E(D,k,M)-w,z>0?y=D:m=D;while(Math.abs(z)>o&&++j<p);return D}function L(w,m,y,k){for(var M=0;M<a;++M){var z=C(m,y,k);if(z===0)return m;var D=E(m,y,k)-w;m-=D/z}return m}function S(w){this._p=w,this._mSampleValues=x?new Float32Array(_):new Array(_),this._precomputed=!1,this.get=this.get.bind(this)}return S.prototype={get:function(m){var y=this._p[0],k=this._p[1],M=this._p[2],z=this._p[3];return this._precomputed||this._precompute(),y===k&&M===z?m:m===0?0:m===1?1:E(this._getTForX(m),k,z)},_precompute:function(){var m=this._p[0],y=this._p[1],k=this._p[2],M=this._p[3];this._precomputed=!0,(m!==y||k!==M)&&this._calcSampleValues()},_calcSampleValues:function(){for(var m=this._p[0],y=this._p[2],k=0;k<_;++k)this._mSampleValues[k]=E(k*f,m,y)},_getTForX:function(m){for(var y=this._p[0],k=this._p[2],M=this._mSampleValues,z=0,D=1,j=_-1;D!==j&&M[D]<=m;++D)z+=f;--D;var et=(m-M[D])/(M[D+1]-M[D]),K=z+et*f,H=C(K,y,k);return H>=l?L(m,K,y,k):H===0?K:P(m,z,z+f,y,k)}},t})(),Tr=(function(){function t(e){return e.concat(ht(e.length))}return{double:t}})(),Qi=(function(){return function(t,e,s){var a=0,l=t,o=ht(l),p={newElement:_,release:f};function _(){var x;return a?(a-=1,x=o[a]):x=e(),x}function f(x){a===l&&(o=Tr.double(o),l*=2),s&&s(x),o[a]=x,a+=1}return p}})(),Cr=(function(){function t(){return{addedLength:0,percents:ot("float32",bi()),lengths:ot("float32",bi())}}return Qi(8,t)})(),Mr=(function(){function t(){return{lengths:[],totalLength:0}}function e(s){var a,l=s.lengths.length;for(a=0;a<l;a+=1)Cr.release(s.lengths[a]);s.lengths.length=0}return Qi(8,t,e)})();function Fn(){var t=Math;function e(v,E,C,P,L,S){var w=v*P+E*L+C*S-L*P-S*v-C*E;return w>-.001&&w<.001}function s(v,E,C,P,L,S,w,m,y){if(C===0&&S===0&&y===0)return e(v,E,P,L,w,m);var k=t.sqrt(t.pow(P-v,2)+t.pow(L-E,2)+t.pow(S-C,2)),M=t.sqrt(t.pow(w-v,2)+t.pow(m-E,2)+t.pow(y-C,2)),z=t.sqrt(t.pow(w-P,2)+t.pow(m-L,2)+t.pow(y-S,2)),D;return k>M?k>z?D=k-M-z:D=z-M-k:z>M?D=z-M-k:D=M-k-z,D>-1e-4&&D<1e-4}var a=(function(){return function(v,E,C,P){var L=bi(),S,w,m,y,k,M=0,z,D=[],j=[],et=Cr.newElement();for(m=C.length,S=0;S<L;S+=1){for(k=S/(L-1),z=0,w=0;w<m;w+=1)y=Lt(1-k,3)*v[w]+3*Lt(1-k,2)*k*C[w]+3*(1-k)*Lt(k,2)*P[w]+Lt(k,3)*E[w],D[w]=y,j[w]!==null&&(z+=Lt(D[w]-j[w],2)),j[w]=D[w];z&&(z=ii(z),M+=z),et.percents[S]=k,et.lengths[S]=M}return et.addedLength=M,et}})();function l(v){var E=Mr.newElement(),C=v.c,P=v.v,L=v.o,S=v.i,w,m=v._length,y=E.lengths,k=0;for(w=0;w<m-1;w+=1)y[w]=a(P[w],P[w+1],L[w],S[w+1]),k+=y[w].addedLength;return C&&m&&(y[w]=a(P[w],P[0],L[w],S[0]),k+=y[w].addedLength),E.totalLength=k,E}function o(v){this.segmentLength=0,this.points=new Array(v)}function p(v,E){this.partialLength=v,this.point=E}var _=(function(){var v={};return function(E,C,P,L){var S=(E[0]+"_"+E[1]+"_"+C[0]+"_"+C[1]+"_"+P[0]+"_"+P[1]+"_"+L[0]+"_"+L[1]).replace(/\./g,"p");if(!v[S]){var w=bi(),m,y,k,M,z,D=0,j,et,K=null;E.length===2&&(E[0]!==C[0]||E[1]!==C[1])&&e(E[0],E[1],C[0],C[1],E[0]+P[0],E[1]+P[1])&&e(E[0],E[1],C[0],C[1],C[0]+L[0],C[1]+L[1])&&(w=2);var H=new o(w);for(k=P.length,m=0;m<w;m+=1){for(et=ht(k),z=m/(w-1),j=0,y=0;y<k;y+=1)M=Lt(1-z,3)*E[y]+3*Lt(1-z,2)*z*(E[y]+P[y])+3*(1-z)*Lt(z,2)*(C[y]+L[y])+Lt(z,3)*C[y],et[y]=M,K!==null&&(j+=Lt(et[y]-K[y],2));j=ii(j),D+=j,H.points[m]=new p(j,et),K=et}H.segmentLength=D,v[S]=H}return v[S]}})();function f(v,E){var C=E.percents,P=E.lengths,L=C.length,S=ie((L-1)*v),w=v*E.addedLength,m=0;if(S===L-1||S===0||w===P[S])return C[S];for(var y=P[S]>w?-1:1,k=!0;k;)if(P[S]<=w&&P[S+1]>w?(m=(w-P[S])/(P[S+1]-P[S]),k=!1):S+=y,S<0||S>=L-1){if(S===L-1)return C[S];k=!1}return C[S]+(C[S+1]-C[S])*m}function x(v,E,C,P,L,S){var w=f(L,S),m=1-w,y=t.round((m*m*m*v[0]+(w*m*m+m*w*m+m*m*w)*C[0]+(w*w*m+m*w*w+w*m*w)*P[0]+w*w*w*E[0])*1e3)/1e3,k=t.round((m*m*m*v[1]+(w*m*m+m*w*m+m*m*w)*C[1]+(w*w*m+m*w*w+w*m*w)*P[1]+w*w*w*E[1])*1e3)/1e3;return[y,k]}var A=ot("float32",8);function O(v,E,C,P,L,S,w){L<0?L=0:L>1&&(L=1);var m=f(L,w);S=S>1?1:S;var y=f(S,w),k,M=v.length,z=1-m,D=1-y,j=z*z*z,et=m*z*z*3,K=m*m*z*3,H=m*m*m,at=z*z*D,G=m*z*D+z*m*D+z*z*y,N=m*m*D+z*m*y+m*z*y,b=m*m*y,T=z*D*D,d=m*D*D+z*y*D+z*D*y,u=m*y*D+z*y*y+m*D*y,R=m*y*y,F=D*D*D,q=y*D*D+D*y*D+D*D*y,tt=y*y*D+D*y*y+y*D*y,it=y*y*y;for(k=0;k<M;k+=1)A[k*4]=t.round((j*v[k]+et*C[k]+K*P[k]+H*E[k])*1e3)/1e3,A[k*4+1]=t.round((at*v[k]+G*C[k]+N*P[k]+b*E[k])*1e3)/1e3,A[k*4+2]=t.round((T*v[k]+d*C[k]+u*P[k]+R*E[k])*1e3)/1e3,A[k*4+3]=t.round((F*v[k]+q*C[k]+tt*P[k]+it*E[k])*1e3)/1e3;return A}return{getSegmentsLength:l,getNewSegment:O,getPointInSegment:x,buildBezierData:_,pointOnLine2D:e,pointOnLine3D:s}}var se=Fn(),He=n,Fr=Math.abs;function Ir(t,e){var s=this.offsetTime,a;this.propType==="multidimensional"&&(a=ot("float32",this.pv.length));for(var l=e.lastIndex,o=l,p=this.keyframes.length-1,_=!0,f,x,A;_;){if(f=this.keyframes[o],x=this.keyframes[o+1],o===p-1&&t>=x.t-s){f.h&&(f=x),l=0;break}if(x.t-s>t){l=o;break}o<p-1?o+=1:(l=0,_=!1)}A=this.keyframesMetadata[o]||{};var O,v,E,C,P,L,S=x.t-s,w=f.t-s,m;if(f.to){A.bezierData||(A.bezierData=se.buildBezierData(f.s,x.s||f.e,f.to,f.ti));var y=A.bezierData;if(t>=S||t<w){var k=t>=S?y.points.length-1:0;for(v=y.points[k].point.length,O=0;O<v;O+=1)a[O]=y.points[k].point[O]}else{A.__fnct?L=A.__fnct:(L=ki.getBezierEasing(f.o.x,f.o.y,f.i.x,f.i.y,f.n).get,A.__fnct=L),E=L((t-w)/(S-w));var M=y.segmentLength*E,z,D=e.lastFrame<t&&e._lastKeyframeIndex===o?e._lastAddedLength:0;for(P=e.lastFrame<t&&e._lastKeyframeIndex===o?e._lastPoint:0,_=!0,C=y.points.length;_;){if(D+=y.points[P].partialLength,M===0||E===0||P===y.points.length-1){for(v=y.points[P].point.length,O=0;O<v;O+=1)a[O]=y.points[P].point[O];break}else if(M>=D&&M<D+y.points[P+1].partialLength){for(z=(M-D)/y.points[P+1].partialLength,v=y.points[P].point.length,O=0;O<v;O+=1)a[O]=y.points[P].point[O]+(y.points[P+1].point[O]-y.points[P].point[O])*z;break}P<C-1?P+=1:_=!1}e._lastPoint=P,e._lastAddedLength=D-y.points[P].partialLength,e._lastKeyframeIndex=o}}else{var j,et,K,H,at;if(p=f.s.length,m=x.s||f.e,this.sh&&f.h!==1)if(t>=S)a[0]=m[0],a[1]=m[1],a[2]=m[2];else if(t<=w)a[0]=f.s[0],a[1]=f.s[1],a[2]=f.s[2];else{var G=Lr(f.s),N=Lr(m),b=(t-w)/(S-w);Ln(a,In(G,N,b))}else for(o=0;o<p;o+=1)f.h!==1&&(t>=S?E=1:t<w?E=0:(f.o.x.constructor===Array?(A.__fnct||(A.__fnct=[]),A.__fnct[o]?L=A.__fnct[o]:(j=f.o.x[o]===void 0?f.o.x[0]:f.o.x[o],et=f.o.y[o]===void 0?f.o.y[0]:f.o.y[o],K=f.i.x[o]===void 0?f.i.x[0]:f.i.x[o],H=f.i.y[o]===void 0?f.i.y[0]:f.i.y[o],L=ki.getBezierEasing(j,et,K,H).get,A.__fnct[o]=L)):A.__fnct?L=A.__fnct:(j=f.o.x,et=f.o.y,K=f.i.x,H=f.i.y,L=ki.getBezierEasing(j,et,K,H).get,f.keyframeMetadata=L),E=L((t-w)/(S-w)))),m=x.s||f.e,at=f.h===1?f.s[o]:f.s[o]+(m[o]-f.s[o])*E,this.propType==="multidimensional"?a[o]=at:a=at}return e.lastIndex=l,a}function In(t,e,s){var a=[],l=t[0],o=t[1],p=t[2],_=t[3],f=e[0],x=e[1],A=e[2],O=e[3],v,E,C,P,L;return E=l*f+o*x+p*A+_*O,E<0&&(E=-E,f=-f,x=-x,A=-A,O=-O),1-E>1e-6?(v=Math.acos(E),C=Math.sin(v),P=Math.sin((1-s)*v)/C,L=Math.sin(s*v)/C):(P=1-s,L=s),a[0]=P*l+L*f,a[1]=P*o+L*x,a[2]=P*p+L*A,a[3]=P*_+L*O,a}function Ln(t,e){var s=e[0],a=e[1],l=e[2],o=e[3],p=Math.atan2(2*a*o-2*s*l,1-2*a*a-2*l*l),_=Math.asin(2*s*a+2*l*o),f=Math.atan2(2*s*o-2*a*l,1-2*s*s-2*l*l);t[0]=p/mt,t[1]=_/mt,t[2]=f/mt}function Lr(t){var e=t[0]*mt,s=t[1]*mt,a=t[2]*mt,l=Math.cos(e/2),o=Math.cos(s/2),p=Math.cos(a/2),_=Math.sin(e/2),f=Math.sin(s/2),x=Math.sin(a/2),A=l*o*p-_*f*x,O=_*f*p+l*o*x,v=_*o*p+l*f*x,E=l*f*p-_*o*x;return[O,v,E,A]}function zr(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==He&&(this._caching.lastFrame>=s&&t>=s||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var a=this.interpolateValue(t,this._caching);this.pv=a}return this._caching.lastFrame=t,this.pv}function ts(t){var e;if(this.propType==="unidimensional")e=t*this.mult,Fr(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var s=0,a=this.v.length;s<a;)e=t[s]*this.mult,Fr(this.v[s]-e)>1e-5&&(this.v[s]=e,this._mdf=!0),s+=1}function es(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,s=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)s=this.effectsSequence[t](s);this.setVValue(s),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function is(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function zn(t,e,s,a){this.propType="unidimensional",this.mult=s||1,this.data=e,this.v=s?e.k*s:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=a,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=es,this.setVValue=ts,this.addEffect=is}function On(t,e,s,a){this.propType="multidimensional",this.mult=s||1,this.data=e,this._mdf=!1,this.elem=t,this.container=a,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var l,o=e.k.length;for(this.v=ot("float32",o),this.pv=ot("float32",o),this.vel=ot("float32",o),l=0;l<o;l+=1)this.v[l]=e.k[l]*this.mult,this.pv[l]=e.k[l];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=es,this.setVValue=ts,this.addEffect=is}function Rn(t,e,s,a){this.propType="unidimensional",this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:He,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=s||1,this.elem=t,this.container=a,this.comp=t.comp,this.v=He,this.pv=He,this._isFirstFrame=!0,this.getValue=es,this.setVValue=ts,this.interpolateValue=Ir,this.effectsSequence=[zr.bind(this)],this.addEffect=is}function Dn(t,e,s,a){this.propType="multidimensional";var l,o=e.k.length,p,_,f,x;for(l=0;l<o-1;l+=1)e.k[l].to&&e.k[l].s&&e.k[l+1]&&e.k[l+1].s&&(p=e.k[l].s,_=e.k[l+1].s,f=e.k[l].to,x=e.k[l].ti,(p.length===2&&!(p[0]===_[0]&&p[1]===_[1])&&se.pointOnLine2D(p[0],p[1],_[0],_[1],p[0]+f[0],p[1]+f[1])&&se.pointOnLine2D(p[0],p[1],_[0],_[1],_[0]+x[0],_[1]+x[1])||p.length===3&&!(p[0]===_[0]&&p[1]===_[1]&&p[2]===_[2])&&se.pointOnLine3D(p[0],p[1],p[2],_[0],_[1],_[2],p[0]+f[0],p[1]+f[1],p[2]+f[2])&&se.pointOnLine3D(p[0],p[1],p[2],_[0],_[1],_[2],_[0]+x[0],_[1]+x[1],_[2]+x[2]))&&(e.k[l].to=null,e.k[l].ti=null),p[0]===_[0]&&p[1]===_[1]&&f[0]===0&&f[1]===0&&x[0]===0&&x[1]===0&&(p.length===2||p[2]===_[2]&&f[2]===0&&x[2]===0)&&(e.k[l].to=null,e.k[l].ti=null));this.effectsSequence=[zr.bind(this)],this.data=e,this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=s||1,this.elem=t,this.container=a,this.comp=t.comp,this.getValue=es,this.setVValue=ts,this.interpolateValue=Ir,this.frameId=-1;var A=e.k[0].s.length;for(this.v=ot("float32",A),this.pv=ot("float32",A),l=0;l<A;l+=1)this.v[l]=He,this.pv[l]=He;this._caching={lastFrame:He,lastIndex:0,value:ot("float32",A)},this.addEffect=is}var W=(function(){function t(s,a,l,o,p){a.sid&&(a=s.globalData.slotManager.getProp(a));var _;if(!a.k.length)_=new zn(s,a,o,p);else if(typeof a.k[0]=="number")_=new On(s,a,o,p);else switch(l){case 0:_=new Rn(s,a,o,p);break;case 1:_=new Dn(s,a,o,p);break;default:break}return _.effectsSequence.length&&p.addDynamicProperty(_),_}var e={getProp:t};return e})();function $t(){}$t.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,s=this.dynamicProperties.length;for(e=0;e<s;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var We=(function(){function t(){return ot("float32",2)}return Qi(8,t)})();function pe(){this.c=!1,this._length=0,this._maxLength=8,this.v=ht(this._maxLength),this.o=ht(this._maxLength),this.i=ht(this._maxLength)}pe.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var s=0;s<e;)this.v[s]=We.newElement(),this.o[s]=We.newElement(),this.i[s]=We.newElement(),s+=1},pe.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},pe.prototype.doubleArrayLength=function(){this.v=this.v.concat(ht(this._maxLength)),this.i=this.i.concat(ht(this._maxLength)),this.o=this.o.concat(ht(this._maxLength)),this._maxLength*=2},pe.prototype.setXYAt=function(t,e,s,a,l){var o;switch(this._length=Math.max(this._length,a+1),this._length>=this._maxLength&&this.doubleArrayLength(),s){case"v":o=this.v;break;case"i":o=this.i;break;case"o":o=this.o;break;default:o=[];break}(!o[a]||o[a]&&!l)&&(o[a]=We.newElement()),o[a][0]=t,o[a][1]=e},pe.prototype.setTripleAt=function(t,e,s,a,l,o,p,_){this.setXYAt(t,e,"v",p,_),this.setXYAt(s,a,"o",p,_),this.setXYAt(l,o,"i",p,_)},pe.prototype.reverse=function(){var t=new pe;t.setPathData(this.c,this._length);var e=this.v,s=this.o,a=this.i,l=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],a[0][0],a[0][1],s[0][0],s[0][1],0,!1),l=1);var o=this._length-1,p=this._length,_;for(_=l;_<p;_+=1)t.setTripleAt(e[o][0],e[o][1],a[o][0],a[o][1],s[o][0],s[o][1],_,!1),o-=1;return t},pe.prototype.length=function(){return this._length};var Pt=(function(){function t(){return new pe}function e(l){var o=l._length,p;for(p=0;p<o;p+=1)We.release(l.v[p]),We.release(l.i[p]),We.release(l.o[p]),l.v[p]=null,l.i[p]=null,l.o[p]=null;l._length=0,l.c=!1}function s(l){var o=a.newElement(),p,_=l._length===void 0?l.v.length:l._length;for(o.setLength(_),o.c=l.c,p=0;p<_;p+=1)o.setTripleAt(l.v[p][0],l.v[p][1],l.o[p][0],l.o[p][1],l.i[p][0],l.i[p][1],p);return o}var a=Qi(4,t,e);return a.clone=s,a})();function Hs(){this._length=0,this._maxLength=4,this.shapes=ht(this._maxLength)}Hs.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(ht(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},Hs.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)Pt.release(this.shapes[t]);this._length=0};var ai=(function(){var t={newShapeCollection:l,release:o},e=0,s=4,a=ht(s);function l(){var p;return e?(e-=1,p=a[e]):p=new Hs,p}function o(p){var _,f=p._length;for(_=0;_<f;_+=1)Pt.release(p.shapes[_]);p._length=0,e===s&&(a=Tr.double(a),s*=2),a[e]=p,e+=1}return t})(),ss=(function(){var t=-999999;function e(S,w,m){var y=m.lastIndex,k,M,z,D,j,et,K,H,at,G=this.keyframes;if(S<G[0].t-this.offsetTime)k=G[0].s[0],z=!0,y=0;else if(S>=G[G.length-1].t-this.offsetTime)k=G[G.length-1].s?G[G.length-1].s[0]:G[G.length-2].e[0],z=!0;else{for(var N=y,b=G.length-1,T=!0,d,u,R;T&&(d=G[N],u=G[N+1],!(u.t-this.offsetTime>S));)N<b-1?N+=1:T=!1;if(R=this.keyframesMetadata[N]||{},z=d.h===1,y=N,!z){if(S>=u.t-this.offsetTime)H=1;else if(S<d.t-this.offsetTime)H=0;else{var F;R.__fnct?F=R.__fnct:(F=ki.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y).get,R.__fnct=F),H=F((S-(d.t-this.offsetTime))/(u.t-this.offsetTime-(d.t-this.offsetTime)))}M=u.s?u.s[0]:d.e[0]}k=d.s[0]}for(et=w._length,K=k.i[0].length,m.lastIndex=y,D=0;D<et;D+=1)for(j=0;j<K;j+=1)at=z?k.i[D][j]:k.i[D][j]+(M.i[D][j]-k.i[D][j])*H,w.i[D][j]=at,at=z?k.o[D][j]:k.o[D][j]+(M.o[D][j]-k.o[D][j])*H,w.o[D][j]=at,at=z?k.v[D][j]:k.v[D][j]+(M.v[D][j]-k.v[D][j])*H,w.v[D][j]=at}function s(){var S=this.comp.renderedFrame-this.offsetTime,w=this.keyframes[0].t-this.offsetTime,m=this.keyframes[this.keyframes.length-1].t-this.offsetTime,y=this._caching.lastFrame;return y!==t&&(y<w&&S<w||y>m&&S>m)||(this._caching.lastIndex=y<S?this._caching.lastIndex:0,this.interpolateShape(S,this.pv,this._caching)),this._caching.lastFrame=S,this.pv}function a(){this.paths=this.localShapeCollection}function l(S,w){if(S._length!==w._length||S.c!==w.c)return!1;var m,y=S._length;for(m=0;m<y;m+=1)if(S.v[m][0]!==w.v[m][0]||S.v[m][1]!==w.v[m][1]||S.o[m][0]!==w.o[m][0]||S.o[m][1]!==w.o[m][1]||S.i[m][0]!==w.i[m][0]||S.i[m][1]!==w.i[m][1])return!1;return!0}function o(S){l(this.v,S)||(this.v=Pt.clone(S),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function p(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var S;this.kf?S=this.pv:this.data.ks?S=this.data.ks.k:S=this.data.pt.k;var w,m=this.effectsSequence.length;for(w=0;w<m;w+=1)S=this.effectsSequence[w](S);this.setVValue(S),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function _(S,w,m){this.propType="shape",this.comp=S.comp,this.container=S,this.elem=S,this.data=w,this.k=!1,this.kf=!1,this._mdf=!1;var y=m===3?w.pt.k:w.ks.k;this.v=Pt.clone(y),this.pv=Pt.clone(this.v),this.localShapeCollection=ai.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=a,this.effectsSequence=[]}function f(S){this.effectsSequence.push(S),this.container.addDynamicProperty(this)}_.prototype.interpolateShape=e,_.prototype.getValue=p,_.prototype.setVValue=o,_.prototype.addEffect=f;function x(S,w,m){this.propType="shape",this.comp=S.comp,this.elem=S,this.container=S,this.offsetTime=S.data.st,this.keyframes=m===3?w.pt.k:w.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var y=this.keyframes[0].s[0].i.length;this.v=Pt.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,y),this.pv=Pt.clone(this.v),this.localShapeCollection=ai.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=a,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[s.bind(this)]}x.prototype.getValue=p,x.prototype.interpolateShape=e,x.prototype.setVValue=o,x.prototype.addEffect=f;var A=(function(){var S=J;function w(m,y){this.v=Pt.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=ai.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=y.d,this.elem=m,this.comp=m.comp,this.frameId=-1,this.initDynamicPropertyContainer(m),this.p=W.getProp(m,y.p,1,0,this),this.s=W.getProp(m,y.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return w.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var y=this.p.v[0],k=this.p.v[1],M=this.s.v[0]/2,z=this.s.v[1]/2,D=this.d!==3,j=this.v;j.v[0][0]=y,j.v[0][1]=k-z,j.v[1][0]=D?y+M:y-M,j.v[1][1]=k,j.v[2][0]=y,j.v[2][1]=k+z,j.v[3][0]=D?y-M:y+M,j.v[3][1]=k,j.i[0][0]=D?y-M*S:y+M*S,j.i[0][1]=k-z,j.i[1][0]=D?y+M:y-M,j.i[1][1]=k-z*S,j.i[2][0]=D?y+M*S:y-M*S,j.i[2][1]=k+z,j.i[3][0]=D?y-M:y+M,j.i[3][1]=k+z*S,j.o[0][0]=D?y+M*S:y-M*S,j.o[0][1]=k-z,j.o[1][0]=D?y+M:y-M,j.o[1][1]=k+z*S,j.o[2][0]=D?y-M*S:y+M*S,j.o[2][1]=k+z,j.o[3][0]=D?y-M:y+M,j.o[3][1]=k-z*S}},B([$t],w),w})(),O=(function(){function S(w,m){this.v=Pt.newElement(),this.v.setPathData(!0,0),this.elem=w,this.comp=w.comp,this.data=m,this.frameId=-1,this.d=m.d,this.initDynamicPropertyContainer(w),m.sy===1?(this.ir=W.getProp(w,m.ir,0,0,this),this.is=W.getProp(w,m.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=W.getProp(w,m.pt,0,0,this),this.p=W.getProp(w,m.p,1,0,this),this.r=W.getProp(w,m.r,0,mt,this),this.or=W.getProp(w,m.or,0,0,this),this.os=W.getProp(w,m.os,0,.01,this),this.localShapeCollection=ai.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return S.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var m=Math.floor(this.pt.v)*2,y=Math.PI*2/m,k=!0,M=this.or.v,z=this.ir.v,D=this.os.v,j=this.is.v,et=2*Math.PI*M/(m*2),K=2*Math.PI*z/(m*2),H,at,G,N,b=-Math.PI/2;b+=this.r.v;var T=this.data.d===3?-1:1;for(this.v._length=0,H=0;H<m;H+=1){at=k?M:z,G=k?D:j,N=k?et:K;var d=at*Math.cos(b),u=at*Math.sin(b),R=d===0&&u===0?0:u/Math.sqrt(d*d+u*u),F=d===0&&u===0?0:-d/Math.sqrt(d*d+u*u);d+=+this.p.v[0],u+=+this.p.v[1],this.v.setTripleAt(d,u,d-R*N*G*T,u-F*N*G*T,d+R*N*G*T,u+F*N*G*T,H,!0),k=!k,b+=y*T}},convertPolygonToPath:function(){var m=Math.floor(this.pt.v),y=Math.PI*2/m,k=this.or.v,M=this.os.v,z=2*Math.PI*k/(m*4),D,j=-Math.PI*.5,et=this.data.d===3?-1:1;for(j+=this.r.v,this.v._length=0,D=0;D<m;D+=1){var K=k*Math.cos(j),H=k*Math.sin(j),at=K===0&&H===0?0:H/Math.sqrt(K*K+H*H),G=K===0&&H===0?0:-K/Math.sqrt(K*K+H*H);K+=+this.p.v[0],H+=+this.p.v[1],this.v.setTripleAt(K,H,K-at*z*M*et,H-G*z*M*et,K+at*z*M*et,H+G*z*M*et,D,!0),j+=y*et}this.paths.length=0,this.paths[0]=this.v}},B([$t],S),S})(),v=(function(){function S(w,m){this.v=Pt.newElement(),this.v.c=!0,this.localShapeCollection=ai.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=w,this.comp=w.comp,this.frameId=-1,this.d=m.d,this.initDynamicPropertyContainer(w),this.p=W.getProp(w,m.p,1,0,this),this.s=W.getProp(w,m.s,1,0,this),this.r=W.getProp(w,m.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return S.prototype={convertRectToPath:function(){var m=this.p.v[0],y=this.p.v[1],k=this.s.v[0]/2,M=this.s.v[1]/2,z=Ve(k,M,this.r.v),D=z*(1-J);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(m+k,y-M+z,m+k,y-M+z,m+k,y-M+D,0,!0),this.v.setTripleAt(m+k,y+M-z,m+k,y+M-D,m+k,y+M-z,1,!0),z!==0?(this.v.setTripleAt(m+k-z,y+M,m+k-z,y+M,m+k-D,y+M,2,!0),this.v.setTripleAt(m-k+z,y+M,m-k+D,y+M,m-k+z,y+M,3,!0),this.v.setTripleAt(m-k,y+M-z,m-k,y+M-z,m-k,y+M-D,4,!0),this.v.setTripleAt(m-k,y-M+z,m-k,y-M+D,m-k,y-M+z,5,!0),this.v.setTripleAt(m-k+z,y-M,m-k+z,y-M,m-k+D,y-M,6,!0),this.v.setTripleAt(m+k-z,y-M,m+k-D,y-M,m+k-z,y-M,7,!0)):(this.v.setTripleAt(m-k,y+M,m-k+D,y+M,m-k,y+M,2),this.v.setTripleAt(m-k,y-M,m-k,y-M+D,m-k,y-M,3))):(this.v.setTripleAt(m+k,y-M+z,m+k,y-M+D,m+k,y-M+z,0,!0),z!==0?(this.v.setTripleAt(m+k-z,y-M,m+k-z,y-M,m+k-D,y-M,1,!0),this.v.setTripleAt(m-k+z,y-M,m-k+D,y-M,m-k+z,y-M,2,!0),this.v.setTripleAt(m-k,y-M+z,m-k,y-M+z,m-k,y-M+D,3,!0),this.v.setTripleAt(m-k,y+M-z,m-k,y+M-D,m-k,y+M-z,4,!0),this.v.setTripleAt(m-k+z,y+M,m-k+z,y+M,m-k+D,y+M,5,!0),this.v.setTripleAt(m+k-z,y+M,m+k-D,y+M,m+k-z,y+M,6,!0),this.v.setTripleAt(m+k,y+M-z,m+k,y+M-z,m+k,y+M-D,7,!0)):(this.v.setTripleAt(m-k,y-M,m-k+D,y-M,m-k,y-M,1,!0),this.v.setTripleAt(m-k,y+M,m-k,y+M-D,m-k,y+M,2,!0),this.v.setTripleAt(m+k,y+M,m+k-D,y+M,m+k,y+M,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:a},B([$t],S),S})();function E(S,w,m){var y;if(m===3||m===4){var k=m===3?w.pt:w.ks,M=k.k;M.length?y=new x(S,w,m):y=new _(S,w,m)}else m===5?y=new v(S,w):m===6?y=new A(S,w):m===7&&(y=new O(S,w));return y.k&&S.addDynamicProperty(y),y}function C(){return _}function P(){return x}var L={};return L.getShapeProp=E,L.getConstructorFunction=C,L.getKeyframedConstructorFunction=P,L})();var Tt=(function(){var t=Math.cos,e=Math.sin,s=Math.tan,a=Math.round;function l(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function o(d){if(d===0)return this;var u=t(d),R=e(d);return this._t(u,-R,0,0,R,u,0,0,0,0,1,0,0,0,0,1)}function p(d){if(d===0)return this;var u=t(d),R=e(d);return this._t(1,0,0,0,0,u,-R,0,0,R,u,0,0,0,0,1)}function _(d){if(d===0)return this;var u=t(d),R=e(d);return this._t(u,0,R,0,0,1,0,0,-R,0,u,0,0,0,0,1)}function f(d){if(d===0)return this;var u=t(d),R=e(d);return this._t(u,-R,0,0,R,u,0,0,0,0,1,0,0,0,0,1)}function x(d,u){return this._t(1,u,d,1,0,0)}function A(d,u){return this.shear(s(d),s(u))}function O(d,u){var R=t(u),F=e(u);return this._t(R,F,0,0,-F,R,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,s(d),1,0,0,0,0,1,0,0,0,0,1)._t(R,-F,0,0,F,R,0,0,0,0,1,0,0,0,0,1)}function v(d,u,R){return!R&&R!==0&&(R=1),d===1&&u===1&&R===1?this:this._t(d,0,0,0,0,u,0,0,0,0,R,0,0,0,0,1)}function E(d,u,R,F,q,tt,it,ct,dt,bt,Dt,ae,Vt,At,Nt,ut){return this.props[0]=d,this.props[1]=u,this.props[2]=R,this.props[3]=F,this.props[4]=q,this.props[5]=tt,this.props[6]=it,this.props[7]=ct,this.props[8]=dt,this.props[9]=bt,this.props[10]=Dt,this.props[11]=ae,this.props[12]=Vt,this.props[13]=At,this.props[14]=Nt,this.props[15]=ut,this}function C(d,u,R){return R=R||0,d!==0||u!==0||R!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,d,u,R,1):this}function P(d,u,R,F,q,tt,it,ct,dt,bt,Dt,ae,Vt,At,Nt,ut){var Y=this.props;if(d===1&&u===0&&R===0&&F===0&&q===0&&tt===1&&it===0&&ct===0&&dt===0&&bt===0&&Dt===1&&ae===0)return Y[12]=Y[12]*d+Y[15]*Vt,Y[13]=Y[13]*tt+Y[15]*At,Y[14]=Y[14]*Dt+Y[15]*Nt,Y[15]*=ut,this._identityCalculated=!1,this;var me=Y[0],Me=Y[1],ge=Y[2],ne=Y[3],ve=Y[4],_e=Y[5],Ut=Y[6],Fe=Y[7],Ie=Y[8],Zt=Y[9],Le=Y[10],Jt=Y[11],Ke=Y[12],ds=Y[13],ps=Y[14],fs=Y[15];return Y[0]=me*d+Me*q+ge*dt+ne*Vt,Y[1]=me*u+Me*tt+ge*bt+ne*At,Y[2]=me*R+Me*it+ge*Dt+ne*Nt,Y[3]=me*F+Me*ct+ge*ae+ne*ut,Y[4]=ve*d+_e*q+Ut*dt+Fe*Vt,Y[5]=ve*u+_e*tt+Ut*bt+Fe*At,Y[6]=ve*R+_e*it+Ut*Dt+Fe*Nt,Y[7]=ve*F+_e*ct+Ut*ae+Fe*ut,Y[8]=Ie*d+Zt*q+Le*dt+Jt*Vt,Y[9]=Ie*u+Zt*tt+Le*bt+Jt*At,Y[10]=Ie*R+Zt*it+Le*Dt+Jt*Nt,Y[11]=Ie*F+Zt*ct+Le*ae+Jt*ut,Y[12]=Ke*d+ds*q+ps*dt+fs*Vt,Y[13]=Ke*u+ds*tt+ps*bt+fs*At,Y[14]=Ke*R+ds*it+ps*Dt+fs*Nt,Y[15]=Ke*F+ds*ct+ps*ae+fs*ut,this._identityCalculated=!1,this}function L(d){var u=d.props;return this.transform(u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7],u[8],u[9],u[10],u[11],u[12],u[13],u[14],u[15])}function S(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function w(d){for(var u=0;u<16;){if(d.props[u]!==this.props[u])return!1;u+=1}return!0}function m(d){var u;for(u=0;u<16;u+=1)d.props[u]=this.props[u];return d}function y(d){var u;for(u=0;u<16;u+=1)this.props[u]=d[u]}function k(d,u,R){return{x:d*this.props[0]+u*this.props[4]+R*this.props[8]+this.props[12],y:d*this.props[1]+u*this.props[5]+R*this.props[9]+this.props[13],z:d*this.props[2]+u*this.props[6]+R*this.props[10]+this.props[14]}}function M(d,u,R){return d*this.props[0]+u*this.props[4]+R*this.props[8]+this.props[12]}function z(d,u,R){return d*this.props[1]+u*this.props[5]+R*this.props[9]+this.props[13]}function D(d,u,R){return d*this.props[2]+u*this.props[6]+R*this.props[10]+this.props[14]}function j(){var d=this.props[0]*this.props[5]-this.props[1]*this.props[4],u=this.props[5]/d,R=-this.props[1]/d,F=-this.props[4]/d,q=this.props[0]/d,tt=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/d,it=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/d,ct=new Tt;return ct.props[0]=u,ct.props[1]=R,ct.props[4]=F,ct.props[5]=q,ct.props[12]=tt,ct.props[13]=it,ct}function et(d){var u=this.getInverseMatrix();return u.applyToPointArray(d[0],d[1],d[2]||0)}function K(d){var u,R=d.length,F=[];for(u=0;u<R;u+=1)F[u]=et(d[u]);return F}function H(d,u,R){var F=ot("float32",6);if(this.isIdentity())F[0]=d[0],F[1]=d[1],F[2]=u[0],F[3]=u[1],F[4]=R[0],F[5]=R[1];else{var q=this.props[0],tt=this.props[1],it=this.props[4],ct=this.props[5],dt=this.props[12],bt=this.props[13];F[0]=d[0]*q+d[1]*it+dt,F[1]=d[0]*tt+d[1]*ct+bt,F[2]=u[0]*q+u[1]*it+dt,F[3]=u[0]*tt+u[1]*ct+bt,F[4]=R[0]*q+R[1]*it+dt,F[5]=R[0]*tt+R[1]*ct+bt}return F}function at(d,u,R){var F;return this.isIdentity()?F=[d,u,R]:F=[d*this.props[0]+u*this.props[4]+R*this.props[8]+this.props[12],d*this.props[1]+u*this.props[5]+R*this.props[9]+this.props[13],d*this.props[2]+u*this.props[6]+R*this.props[10]+this.props[14]],F}function G(d,u){if(this.isIdentity())return d+","+u;var R=this.props;return Math.round((d*R[0]+u*R[4]+R[12])*100)/100+","+Math.round((d*R[1]+u*R[5]+R[13])*100)/100}function N(){for(var d=0,u=this.props,R="matrix3d(",F=1e4;d<16;)R+=a(u[d]*F)/F,R+=d===15?")":",",d+=1;return R}function b(d){var u=1e4;return d<1e-6&&d>0||d>-1e-6&&d<0?a(d*u)/u:d}function T(){var d=this.props,u=b(d[0]),R=b(d[1]),F=b(d[4]),q=b(d[5]),tt=b(d[12]),it=b(d[13]);return"matrix("+u+","+R+","+F+","+q+","+tt+","+it+")"}return function(){this.reset=l,this.rotate=o,this.rotateX=p,this.rotateY=_,this.rotateZ=f,this.skew=A,this.skewFromAxis=O,this.shear=x,this.scale=v,this.setTransform=E,this.translate=C,this.transform=P,this.multiply=L,this.applyToPoint=k,this.applyToX=M,this.applyToY=z,this.applyToZ=D,this.applyToPointArray=at,this.applyToTriplePoints=H,this.applyToPointStringified=G,this.toCSS=N,this.to2dCSS=T,this.clone=m,this.cloneFromProps=y,this.equals=w,this.inversePoints=K,this.inversePoint=et,this.getInverseMatrix=j,this._t=this.transform,this.isIdentity=S,this._identity=!0,this._identityCalculated=!1,this.props=ot("float32",16),this.reset()}})();function Ws(t){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ws(t)}var ft={},rs="__[STANDALONE]__",Or="__[ANIMATIONDATA]__",Rr="";function Vn(t){$(t)}function Dr(){rs===!0?yt.searchAnimations(Or,rs,Rr):yt.searchAnimations()}function Un(t){xn(t)}function Bn(t){$n(t)}function Nn(t){return rs===!0&&(t.animationData=JSON.parse(Or)),yt.loadAnimation(t)}function jn(t){if(typeof t=="string")switch(t){case"high":Zi(200);break;default:case"medium":Zi(50);break;case"low":Zi(10);break}else!isNaN(t)&&t>1&&Zi(t);bi()>=50?St(!1):St(!0)}function Hn(){return typeof navigator<"u"}function Wn(t,e){t==="expressions"&&Sn(e)}function qn(t){switch(t){case"propertyFactory":return W;case"shapePropertyFactory":return ss;case"matrix":return Tt;default:return null}}ft.play=yt.play,ft.pause=yt.pause,ft.setLocationHref=Vn,ft.togglePause=yt.togglePause,ft.setSpeed=yt.setSpeed,ft.setDirection=yt.setDirection,ft.stop=yt.stop,ft.searchAnimations=Dr,ft.registerAnimation=yt.registerAnimation,ft.loadAnimation=Nn,ft.setSubframeRendering=Un,ft.resize=yt.resize,ft.goToAndStop=yt.goToAndStop,ft.destroy=yt.destroy,ft.setQuality=jn,ft.inBrowser=Hn,ft.installPlugin=Wn,ft.freeze=yt.freeze,ft.unfreeze=yt.unfreeze,ft.setVolume=yt.setVolume,ft.mute=yt.mute,ft.unmute=yt.unmute,ft.getRegisteredAnimations=yt.getRegisteredAnimations,ft.useWebWorker=h,ft.setIDPrefix=Bn,ft.__getFactory=qn,ft.version="5.13.0";function Gn(){document.readyState==="complete"&&(clearInterval(Xn),Dr())}function Yn(t){for(var e=Vr.split("&"),s=0;s<e.length;s+=1){var a=e[s].split("=");if(decodeURIComponent(a[0])==t)return decodeURIComponent(a[1])}return null}var Vr="";if(rs){var Ur=document.getElementsByTagName("script"),Kn=Ur.length-1,Br=Ur[Kn]||{src:""};Vr=Br.src?Br.src.replace(/^[^\?]+\??/,""):"",Rr=Yn("renderer")}var Xn=setInterval(Gn,100);try{!((typeof Gi>"u"?"undefined":Ws(Gi))==="object"&&typeof Fs<"u")&&!(typeof define=="function"&&define.amd)&&(window.bodymovin=ft)}catch{}var $e=(function(){var t={},e={};t.registerModifier=s,t.getModifier=a;function s(l,o){e[l]||(e[l]=o)}function a(l,o,p){return new e[l](o,p)}return t})();function qt(){}qt.prototype.initModifierProperties=function(){},qt.prototype.addShapeToModifier=function(){},qt.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:ai.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},qt.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=n,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},qt.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},B([$t],qt);function Xt(){}B([qt],Xt),Xt.prototype.initModifierProperties=function(t,e){this.s=W.getProp(t,e.s,0,.01,this),this.e=W.getProp(t,e.e,0,.01,this),this.o=W.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},Xt.prototype.addShapeToModifier=function(t){t.pathsData=[]},Xt.prototype.calculateShapeEdges=function(t,e,s,a,l){var o=[];e<=1?o.push({s:t,e}):t>=1?o.push({s:t-1,e:e-1}):(o.push({s:t,e:1}),o.push({s:0,e:e-1}));var p=[],_,f=o.length,x;for(_=0;_<f;_+=1)if(x=o[_],!(x.e*l<a||x.s*l>a+s)){var A,O;x.s*l<=a?A=0:A=(x.s*l-a)/s,x.e*l>=a+s?O=1:O=(x.e*l-a)/s,p.push([A,O])}return p.length||p.push([0,0]),p},Xt.prototype.releasePathsData=function(t){var e,s=t.length;for(e=0;e<s;e+=1)Mr.release(t[e]);return t.length=0,t},Xt.prototype.processShapes=function(t){var e,s;if(this._mdf||t){var a=this.o.v%360/360;if(a<0&&(a+=1),this.s.v>1?e=1+a:this.s.v<0?e=0+a:e=this.s.v+a,this.e.v>1?s=1+a:this.e.v<0?s=0+a:s=this.e.v+a,e>s){var l=e;e=s,s=l}e=Math.round(e*1e4)*1e-4,s=Math.round(s*1e4)*1e-4,this.sValue=e,this.eValue=s}else e=this.sValue,s=this.eValue;var o,p,_=this.shapes.length,f,x,A,O,v,E=0;if(s===e)for(p=0;p<_;p+=1)this.shapes[p].localShapeCollection.releaseShapes(),this.shapes[p].shape._mdf=!0,this.shapes[p].shape.paths=this.shapes[p].localShapeCollection,this._mdf&&(this.shapes[p].pathsData.length=0);else if(s===1&&e===0||s===0&&e===1){if(this._mdf)for(p=0;p<_;p+=1)this.shapes[p].pathsData.length=0,this.shapes[p].shape._mdf=!0}else{var C=[],P,L;for(p=0;p<_;p+=1)if(P=this.shapes[p],!P.shape._mdf&&!this._mdf&&!t&&this.m!==2)P.shape.paths=P.localShapeCollection;else{if(o=P.shape.paths,x=o._length,v=0,!P.shape._mdf&&P.pathsData.length)v=P.totalShapeLength;else{for(A=this.releasePathsData(P.pathsData),f=0;f<x;f+=1)O=se.getSegmentsLength(o.shapes[f]),A.push(O),v+=O.totalLength;P.totalShapeLength=v,P.pathsData=A}E+=v,P.shape._mdf=!0}var S=e,w=s,m=0,y;for(p=_-1;p>=0;p-=1)if(P=this.shapes[p],P.shape._mdf){for(L=P.localShapeCollection,L.releaseShapes(),this.m===2&&_>1?(y=this.calculateShapeEdges(e,s,P.totalShapeLength,m,E),m+=P.totalShapeLength):y=[[S,w]],x=y.length,f=0;f<x;f+=1){S=y[f][0],w=y[f][1],C.length=0,w<=1?C.push({s:P.totalShapeLength*S,e:P.totalShapeLength*w}):S>=1?C.push({s:P.totalShapeLength*(S-1),e:P.totalShapeLength*(w-1)}):(C.push({s:P.totalShapeLength*S,e:P.totalShapeLength}),C.push({s:0,e:P.totalShapeLength*(w-1)}));var k=this.addShapes(P,C[0]);if(C[0].s!==C[0].e){if(C.length>1){var M=P.shape.paths.shapes[P.shape.paths._length-1];if(M.c){var z=k.pop();this.addPaths(k,L),k=this.addShapes(P,C[1],z)}else this.addPaths(k,L),k=this.addShapes(P,C[1])}this.addPaths(k,L)}}P.shape.paths=L}}},Xt.prototype.addPaths=function(t,e){var s,a=t.length;for(s=0;s<a;s+=1)e.addShape(t[s])},Xt.prototype.addSegment=function(t,e,s,a,l,o,p){l.setXYAt(e[0],e[1],"o",o),l.setXYAt(s[0],s[1],"i",o+1),p&&l.setXYAt(t[0],t[1],"v",o),l.setXYAt(a[0],a[1],"v",o+1)},Xt.prototype.addSegmentFromArray=function(t,e,s,a){e.setXYAt(t[1],t[5],"o",s),e.setXYAt(t[2],t[6],"i",s+1),a&&e.setXYAt(t[0],t[4],"v",s),e.setXYAt(t[3],t[7],"v",s+1)},Xt.prototype.addShapes=function(t,e,s){var a=t.pathsData,l=t.shape.paths.shapes,o,p=t.shape.paths._length,_,f,x=0,A,O,v,E,C=[],P,L=!0;for(s?(O=s._length,P=s._length):(s=Pt.newElement(),O=0,P=0),C.push(s),o=0;o<p;o+=1){for(v=a[o].lengths,s.c=l[o].c,f=l[o].c?v.length:v.length+1,_=1;_<f;_+=1)if(A=v[_-1],x+A.addedLength<e.s)x+=A.addedLength,s.c=!1;else if(x>e.e){s.c=!1;break}else e.s<=x&&e.e>=x+A.addedLength?(this.addSegment(l[o].v[_-1],l[o].o[_-1],l[o].i[_],l[o].v[_],s,O,L),L=!1):(E=se.getNewSegment(l[o].v[_-1],l[o].v[_],l[o].o[_-1],l[o].i[_],(e.s-x)/A.addedLength,(e.e-x)/A.addedLength,v[_-1]),this.addSegmentFromArray(E,s,O,L),L=!1,s.c=!1),x+=A.addedLength,O+=1;if(l[o].c&&v.length){if(A=v[_-1],x<=e.e){var S=v[_-1].addedLength;e.s<=x&&e.e>=x+S?(this.addSegment(l[o].v[_-1],l[o].o[_-1],l[o].i[0],l[o].v[0],s,O,L),L=!1):(E=se.getNewSegment(l[o].v[_-1],l[o].v[0],l[o].o[_-1],l[o].i[0],(e.s-x)/S,(e.e-x)/S,v[_-1]),this.addSegmentFromArray(E,s,O,L),L=!1,s.c=!1)}else s.c=!1;x+=A.addedLength,O+=1}if(s._length&&(s.setXYAt(s.v[P][0],s.v[P][1],"i",P),s.setXYAt(s.v[s._length-1][0],s.v[s._length-1][1],"o",s._length-1)),x>e.e)break;o<p-1&&(s=Pt.newElement(),L=!0,C.push(s),O=0)}return C};function Si(){}B([qt],Si),Si.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=W.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},Si.prototype.processPath=function(t,e){var s=e/100,a=[0,0],l=t._length,o=0;for(o=0;o<l;o+=1)a[0]+=t.v[o][0],a[1]+=t.v[o][1];a[0]/=l,a[1]/=l;var p=Pt.newElement();p.c=t.c;var _,f,x,A,O,v;for(o=0;o<l;o+=1)_=t.v[o][0]+(a[0]-t.v[o][0])*s,f=t.v[o][1]+(a[1]-t.v[o][1])*s,x=t.o[o][0]+(a[0]-t.o[o][0])*-s,A=t.o[o][1]+(a[1]-t.o[o][1])*-s,O=t.i[o][0]+(a[0]-t.i[o][0])*-s,v=t.i[o][1]+(a[1]-t.i[o][1])*-s,p.setTripleAt(_,f,x,A,O,v,o);return p},Si.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.amount.v;if(p!==0){var _,f;for(s=0;s<a;s+=1){if(_=this.shapes[s],f=_.localShapeCollection,!(!_.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),_.shape._mdf=!0,e=_.shape.paths.shapes,o=_.shape.paths._length,l=0;l<o;l+=1)f.addShape(this.processPath(e[l],p));_.shape.paths=_.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var qs=(function(){var t=[0,0];function e(f){var x=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||x,this.a&&f.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&f.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&f.skewFromAxis(-this.sk.v,this.sa.v),this.r?f.rotate(-this.r.v):f.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?f.translate(this.px.v,this.py.v,-this.pz.v):f.translate(this.px.v,this.py.v,0):f.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function s(f){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||f){var x;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var A,O;if(x=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(A=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/x,0),O=this.p.getValueAtTime(this.p.keyframes[0].t/x,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(A=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/x,0),O=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/x,0)):(A=this.p.pv,O=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/x,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){A=[],O=[];var v=this.px,E=this.py;v._caching.lastFrame+v.offsetTime<=v.keyframes[0].t?(A[0]=v.getValueAtTime((v.keyframes[0].t+.01)/x,0),A[1]=E.getValueAtTime((E.keyframes[0].t+.01)/x,0),O[0]=v.getValueAtTime(v.keyframes[0].t/x,0),O[1]=E.getValueAtTime(E.keyframes[0].t/x,0)):v._caching.lastFrame+v.offsetTime>=v.keyframes[v.keyframes.length-1].t?(A[0]=v.getValueAtTime(v.keyframes[v.keyframes.length-1].t/x,0),A[1]=E.getValueAtTime(E.keyframes[E.keyframes.length-1].t/x,0),O[0]=v.getValueAtTime((v.keyframes[v.keyframes.length-1].t-.01)/x,0),O[1]=E.getValueAtTime((E.keyframes[E.keyframes.length-1].t-.01)/x,0)):(A=[v.pv,E.pv],O[0]=v.getValueAtTime((v._caching.lastFrame+v.offsetTime-.01)/x,v.offsetTime),O[1]=E.getValueAtTime((E._caching.lastFrame+E.offsetTime-.01)/x,E.offsetTime))}else O=t,A=O;this.v.rotate(-Math.atan2(A[1]-O[1],A[0]-O[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function a(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function l(){}function o(f){this._addDynamicProperty(f),this.elem.addDynamicProperty(f),this._isDirty=!0}function p(f,x,A){if(this.elem=f,this.frameId=-1,this.propType="transform",this.data=x,this.v=new Tt,this.pre=new Tt,this.appliedTransformations=0,this.initDynamicPropertyContainer(A||f),x.p&&x.p.s?(this.px=W.getProp(f,x.p.x,0,0,this),this.py=W.getProp(f,x.p.y,0,0,this),x.p.z&&(this.pz=W.getProp(f,x.p.z,0,0,this))):this.p=W.getProp(f,x.p||{k:[0,0,0]},1,0,this),x.rx){if(this.rx=W.getProp(f,x.rx,0,mt,this),this.ry=W.getProp(f,x.ry,0,mt,this),this.rz=W.getProp(f,x.rz,0,mt,this),x.or.k[0].ti){var O,v=x.or.k.length;for(O=0;O<v;O+=1)x.or.k[O].to=null,x.or.k[O].ti=null}this.or=W.getProp(f,x.or,1,mt,this),this.or.sh=!0}else this.r=W.getProp(f,x.r||{k:0},0,mt,this);x.sk&&(this.sk=W.getProp(f,x.sk,0,mt,this),this.sa=W.getProp(f,x.sa,0,mt,this)),this.a=W.getProp(f,x.a||{k:[0,0,0]},1,0,this),this.s=W.getProp(f,x.s||{k:[100,100,100]},1,.01,this),x.o?this.o=W.getProp(f,x.o,0,.01,f):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}p.prototype={applyToMatrix:e,getValue:s,precalculateMatrix:a,autoOrient:l},B([$t],p),p.prototype.addDynamicProperty=o,p.prototype._addDynamicProperty=$t.prototype.addDynamicProperty;function _(f,x,A){return new p(f,x,A)}return{getTransformProperty:_}})();function re(){}B([qt],re),re.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=W.getProp(t,e.c,0,null,this),this.o=W.getProp(t,e.o,0,null,this),this.tr=qs.getTransformProperty(t,e.tr,this),this.so=W.getProp(t,e.tr.so,0,.01,this),this.eo=W.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Tt,this.rMatrix=new Tt,this.sMatrix=new Tt,this.tMatrix=new Tt,this.matrix=new Tt},re.prototype.applyTransforms=function(t,e,s,a,l,o){var p=o?-1:1,_=a.s.v[0]+(1-a.s.v[0])*(1-l),f=a.s.v[1]+(1-a.s.v[1])*(1-l);t.translate(a.p.v[0]*p*l,a.p.v[1]*p*l,a.p.v[2]),e.translate(-a.a.v[0],-a.a.v[1],a.a.v[2]),e.rotate(-a.r.v*p*l),e.translate(a.a.v[0],a.a.v[1],a.a.v[2]),s.translate(-a.a.v[0],-a.a.v[1],a.a.v[2]),s.scale(o?1/_:_,o?1/f:f),s.translate(a.a.v[0],a.a.v[1],a.a.v[2])},re.prototype.init=function(t,e,s,a){for(this.elem=t,this.arr=e,this.pos=s,this.elemsData=a,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[s]);s>0;)s-=1,this._elements.unshift(e[s]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},re.prototype.resetElements=function(t){var e,s=t.length;for(e=0;e<s;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},re.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},re.prototype.changeGroupRender=function(t,e){var s,a=t.length;for(s=0;s<a;s+=1)t[s]._render=e,t[s].ty==="gr"&&this.changeGroupRender(t[s].it,e)},re.prototype.processShapes=function(t){var e,s,a,l,o,p=!1;if(this._mdf||t){var _=Math.ceil(this.c.v);if(this._groups.length<_){for(;this._groups.length<_;){var f={it:this.cloneElements(this._elements),ty:"gr"};f.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,f),this._groups.splice(0,0,f),this._currentCopies+=1}this.elem.reloadShapes(),p=!0}o=0;var x;for(a=0;a<=this._groups.length-1;a+=1){if(x=o<_,this._groups[a]._render=x,this.changeGroupRender(this._groups[a].it,x),!x){var A=this.elemsData[a].it,O=A[A.length-1];O.transform.op.v!==0?(O.transform.op._mdf=!0,O.transform.op.v=0):O.transform.op._mdf=!1}o+=1}this._currentCopies=_;var v=this.o.v,E=v%1,C=v>0?Math.floor(v):Math.ceil(v),P=this.pMatrix.props,L=this.rMatrix.props,S=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var w=0;if(v>0){for(;w<C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),w+=1;E&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,E,!1),w+=E)}else if(v<0){for(;w>C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),w-=1;E&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-E,!0),w-=E)}a=this.data.m===1?0:this._currentCopies-1,l=this.data.m===1?1:-1,o=this._currentCopies;for(var m,y;o;){if(e=this.elemsData[a].it,s=e[e.length-1].transform.mProps.v.props,y=s.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(a/(this._currentCopies-1)),w!==0){for((a!==0&&l===1||a!==this._currentCopies-1&&l===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(L[0],L[1],L[2],L[3],L[4],L[5],L[6],L[7],L[8],L[9],L[10],L[11],L[12],L[13],L[14],L[15]),this.matrix.transform(S[0],S[1],S[2],S[3],S[4],S[5],S[6],S[7],S[8],S[9],S[10],S[11],S[12],S[13],S[14],S[15]),this.matrix.transform(P[0],P[1],P[2],P[3],P[4],P[5],P[6],P[7],P[8],P[9],P[10],P[11],P[12],P[13],P[14],P[15]),m=0;m<y;m+=1)s[m]=this.matrix.props[m];this.matrix.reset()}else for(this.matrix.reset(),m=0;m<y;m+=1)s[m]=this.matrix.props[m];w+=1,o-=1,a+=l}}else for(o=this._currentCopies,a=0,l=1;o;)e=this.elemsData[a].it,s=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,o-=1,a+=l;return p},re.prototype.addShape=function(){};function $i(){}B([qt],$i),$i.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=W.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},$i.prototype.processPath=function(t,e){var s=Pt.newElement();s.c=t.c;var a,l=t._length,o,p,_,f,x,A,O=0,v,E,C,P,L,S;for(a=0;a<l;a+=1)o=t.v[a],_=t.o[a],p=t.i[a],o[0]===_[0]&&o[1]===_[1]&&o[0]===p[0]&&o[1]===p[1]?(a===0||a===l-1)&&!t.c?(s.setTripleAt(o[0],o[1],_[0],_[1],p[0],p[1],O),O+=1):(a===0?f=t.v[l-1]:f=t.v[a-1],x=Math.sqrt(Math.pow(o[0]-f[0],2)+Math.pow(o[1]-f[1],2)),A=x?Math.min(x/2,e)/x:0,L=o[0]+(f[0]-o[0])*A,v=L,S=o[1]-(o[1]-f[1])*A,E=S,C=v-(v-o[0])*J,P=E-(E-o[1])*J,s.setTripleAt(v,E,C,P,L,S,O),O+=1,a===l-1?f=t.v[0]:f=t.v[a+1],x=Math.sqrt(Math.pow(o[0]-f[0],2)+Math.pow(o[1]-f[1],2)),A=x?Math.min(x/2,e)/x:0,C=o[0]+(f[0]-o[0])*A,v=C,P=o[1]+(f[1]-o[1])*A,E=P,L=v-(v-o[0])*J,S=E-(E-o[1])*J,s.setTripleAt(v,E,C,P,L,S,O),O+=1):(s.setTripleAt(t.v[a][0],t.v[a][1],t.o[a][0],t.o[a][1],t.i[a][0],t.i[a][1],O),O+=1);return s},$i.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.rd.v;if(p!==0){var _,f;for(s=0;s<a;s+=1){if(_=this.shapes[s],f=_.localShapeCollection,!(!_.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),_.shape._mdf=!0,e=_.shape.paths.shapes,o=_.shape.paths._length,l=0;l<o;l+=1)f.addShape(this.processPath(e[l],p));_.shape.paths=_.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function as(t,e){return Math.abs(t-e)*1e5<=Math.min(Math.abs(t),Math.abs(e))}function Gs(t){return Math.abs(t)<=1e-5}function Nr(t,e,s){return t*(1-s)+e*s}function Ae(t,e,s){return[Nr(t[0],e[0],s),Nr(t[1],e[1],s)]}function Zn(t,e,s){if(t===0)return[];var a=e*e-4*t*s;if(a<0)return[];var l=-e/(2*t);if(a===0)return[l];var o=Math.sqrt(a)/(2*t);return[l-o,l+o]}function jr(t,e,s,a){return[-t+3*e-3*s+a,3*t-6*e+3*s,-3*t+3*e,t]}function Hr(t){return new gt(t,t,t,t,!1)}function gt(t,e,s,a,l){l&&oi(t,e)&&(e=Ae(t,a,1/3)),l&&oi(s,a)&&(s=Ae(t,a,2/3));var o=jr(t[0],e[0],s[0],a[0]),p=jr(t[1],e[1],s[1],a[1]);this.a=[o[0],p[0]],this.b=[o[1],p[1]],this.c=[o[2],p[2]],this.d=[o[3],p[3]],this.points=[t,e,s,a]}gt.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},gt.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},gt.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},gt.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},gt.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(Gs(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,s=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(s<0)return[];var a=Math.sqrt(s);return Gs(a)?a>0&&a<1?[e]:[]:[e-a,e+a].filter(function(l){return l>0&&l<1})},gt.prototype.split=function(t){if(t<=0)return[Hr(this.points[0]),this];if(t>=1)return[this,Hr(this.points[this.points.length-1])];var e=Ae(this.points[0],this.points[1],t),s=Ae(this.points[1],this.points[2],t),a=Ae(this.points[2],this.points[3],t),l=Ae(e,s,t),o=Ae(s,a,t),p=Ae(l,o,t);return[new gt(this.points[0],e,l,p,!0),new gt(p,o,a,this.points[3],!0)]};function Wr(t,e){var s=t.points[0][e],a=t.points[t.points.length-1][e];if(s>a){var l=a;a=s,s=l}for(var o=Zn(3*t.a[e],2*t.b[e],t.c[e]),p=0;p<o.length;p+=1)if(o[p]>0&&o[p]<1){var _=t.point(o[p])[e];_<s?s=_:_>a&&(a=_)}return{min:s,max:a}}gt.prototype.bounds=function(){return{x:Wr(this,0),y:Wr(this,1)}},gt.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}};function ns(t,e,s){var a=t.boundingBox();return{cx:a.cx,cy:a.cy,width:a.width,height:a.height,bez:t,t:(e+s)/2,t1:e,t2:s}}function qr(t){var e=t.bez.split(.5);return[ns(e[0],t.t1,t.t),ns(e[1],t.t,t.t2)]}function Jn(t,e){return Math.abs(t.cx-e.cx)*2<t.width+e.width&&Math.abs(t.cy-e.cy)*2<t.height+e.height}function Ai(t,e,s,a,l,o){if(Jn(t,e)){if(s>=o||t.width<=a&&t.height<=a&&e.width<=a&&e.height<=a){l.push([t.t,e.t]);return}var p=qr(t),_=qr(e);Ai(p[0],_[0],s+1,a,l,o),Ai(p[0],_[1],s+1,a,l,o),Ai(p[1],_[0],s+1,a,l,o),Ai(p[1],_[1],s+1,a,l,o)}}gt.prototype.intersections=function(t,e,s){e===void 0&&(e=2),s===void 0&&(s=7);var a=[];return Ai(ns(this,0,1),ns(t,0,1),0,e,a,s),a},gt.shapeSegment=function(t,e){var s=(e+1)%t.length();return new gt(t.v[e],t.o[e],t.i[s],t.v[s],!0)},gt.shapeSegmentInverted=function(t,e){var s=(e+1)%t.length();return new gt(t.v[s],t.i[s],t.o[e],t.v[e],!0)};function Ys(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function os(t,e,s,a){var l=[t[0],t[1],1],o=[e[0],e[1],1],p=[s[0],s[1],1],_=[a[0],a[1],1],f=Ys(Ys(l,o),Ys(p,_));return Gs(f[2])?null:[f[0]/f[2],f[1]/f[2]]}function ni(t,e,s){return[t[0]+Math.cos(e)*s,t[1]-Math.sin(e)*s]}function Ks(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function oi(t,e){return as(t[0],e[0])&&as(t[1],e[1])}function Ei(){}B([qt],Ei),Ei.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=W.getProp(t,e.s,0,null,this),this.frequency=W.getProp(t,e.r,0,null,this),this.pointsType=W.getProp(t,e.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function Gr(t,e,s,a,l,o,p){var _=s-Math.PI/2,f=s+Math.PI/2,x=e[0]+Math.cos(s)*a*l,A=e[1]-Math.sin(s)*a*l;t.setTripleAt(x,A,x+Math.cos(_)*o,A-Math.sin(_)*o,x+Math.cos(f)*p,A-Math.sin(f)*p,t.length())}function Qn(t,e){var s=[e[0]-t[0],e[1]-t[1]],a=-Math.PI*.5,l=[Math.cos(a)*s[0]-Math.sin(a)*s[1],Math.sin(a)*s[0]+Math.cos(a)*s[1]];return l}function to(t,e){var s=e===0?t.length()-1:e-1,a=(e+1)%t.length(),l=t.v[s],o=t.v[a],p=Qn(l,o);return Math.atan2(0,1)-Math.atan2(p[1],p[0])}function Yr(t,e,s,a,l,o,p){var _=to(e,s),f=e.v[s%e._length],x=e.v[s===0?e._length-1:s-1],A=e.v[(s+1)%e._length],O=o===2?Math.sqrt(Math.pow(f[0]-x[0],2)+Math.pow(f[1]-x[1],2)):0,v=o===2?Math.sqrt(Math.pow(f[0]-A[0],2)+Math.pow(f[1]-A[1],2)):0;Gr(t,e.v[s%e._length],_,p,a,v/((l+1)*2),O/((l+1)*2),o)}function eo(t,e,s,a,l,o){for(var p=0;p<a;p+=1){var _=(p+1)/(a+1),f=l===2?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,x=e.normalAngle(_),A=e.point(_);Gr(t,A,x,o,s,f/((a+1)*2),f/((a+1)*2),l),o=-o}return o}Ei.prototype.processPath=function(t,e,s,a){var l=t._length,o=Pt.newElement();if(o.c=t.c,t.c||(l-=1),l===0)return o;var p=-1,_=gt.shapeSegment(t,0);Yr(o,t,0,e,s,a,p);for(var f=0;f<l;f+=1)p=eo(o,_,e,s,a,-p),f===l-1&&!t.c?_=null:_=gt.shapeSegment(t,(f+1)%l),Yr(o,t,f+1,e,s,a,p);return o},Ei.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.amplitude.v,_=Math.max(0,Math.round(this.frequency.v)),f=this.pointsType.v;if(p!==0){var x,A;for(s=0;s<a;s+=1){if(x=this.shapes[s],A=x.localShapeCollection,!(!x.shape._mdf&&!this._mdf&&!t))for(A.releaseShapes(),x.shape._mdf=!0,e=x.shape.paths.shapes,o=x.shape.paths._length,l=0;l<o;l+=1)A.addShape(this.processPath(e[l],p,_,f));x.shape.paths=x.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Xs(t,e,s){var a=Math.atan2(e[0]-t[0],e[1]-t[1]);return[ni(t,a,s),ni(e,a,s)]}function li(t,e){var s,a,l,o,p,_,f;f=Xs(t.points[0],t.points[1],e),s=f[0],a=f[1],f=Xs(t.points[1],t.points[2],e),l=f[0],o=f[1],f=Xs(t.points[2],t.points[3],e),p=f[0],_=f[1];var x=os(s,a,l,o);x===null&&(x=a);var A=os(p,_,l,o);return A===null&&(A=p),new gt(s,x,A,_)}function Kr(t,e,s,a,l){var o=e.points[3],p=s.points[0];if(a===3||oi(o,p))return o;if(a===2){var _=-e.tangentAngle(1),f=-s.tangentAngle(0)+Math.PI,x=os(o,ni(o,_+Math.PI/2,100),p,ni(p,_+Math.PI/2,100)),A=x?Ks(x,o):Ks(o,p)/2,O=ni(o,_,2*A*J);return t.setXYAt(O[0],O[1],"o",t.length()-1),O=ni(p,f,2*A*J),t.setTripleAt(p[0],p[1],p[0],p[1],O[0],O[1],t.length()),p}var v=oi(o,e.points[2])?e.points[0]:e.points[2],E=oi(p,s.points[1])?s.points[3]:s.points[1],C=os(v,o,p,E);return C&&Ks(C,o)<l?(t.setTripleAt(C[0],C[1],C[0],C[1],C[0],C[1],t.length()),C):o}function Xr(t,e){var s=t.intersections(e);return s.length&&as(s[0][0],1)&&s.shift(),s.length?s[0]:null}function Zr(t,e){var s=t.slice(),a=e.slice(),l=Xr(t[t.length-1],e[0]);return l&&(s[t.length-1]=t[t.length-1].split(l[0])[0],a[0]=e[0].split(l[1])[1]),t.length>1&&e.length>1&&(l=Xr(t[0],e[e.length-1]),l)?[[t[0].split(l[0])[0]],[e[e.length-1].split(l[1])[1]]]:[s,a]}function io(t){for(var e,s=1;s<t.length;s+=1)e=Zr(t[s-1],t[s]),t[s-1]=e[0],t[s]=e[1];return t.length>1&&(e=Zr(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function Jr(t,e){var s=t.inflectionPoints(),a,l,o,p;if(s.length===0)return[li(t,e)];if(s.length===1||as(s[1],1))return o=t.split(s[0]),a=o[0],l=o[1],[li(a,e),li(l,e)];o=t.split(s[0]),a=o[0];var _=(s[1]-s[0])/(1-s[0]);return o=o[1].split(_),p=o[0],l=o[1],[li(a,e),li(p,e),li(l,e)]}function Pi(){}B([qt],Pi),Pi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=W.getProp(t,e.a,0,null,this),this.miterLimit=W.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=this.amount.effectsSequence.length!==0},Pi.prototype.processPath=function(t,e,s,a){var l=Pt.newElement();l.c=t.c;var o=t.length();t.c||(o-=1);var p,_,f,x=[];for(p=0;p<o;p+=1)f=gt.shapeSegment(t,p),x.push(Jr(f,e));if(!t.c)for(p=o-1;p>=0;p-=1)f=gt.shapeSegmentInverted(t,p),x.push(Jr(f,e));x=io(x);var A=null,O=null;for(p=0;p<x.length;p+=1){var v=x[p];for(O&&(A=Kr(l,O,v[0],s,a)),O=v[v.length-1],_=0;_<v.length;_+=1)f=v[_],A&&oi(f.points[0],A)?l.setXYAt(f.points[1][0],f.points[1][1],"o",l.length()-1):l.setTripleAt(f.points[0][0],f.points[0][1],f.points[1][0],f.points[1][1],f.points[0][0],f.points[0][1],l.length()),l.setTripleAt(f.points[3][0],f.points[3][1],f.points[3][0],f.points[3][1],f.points[2][0],f.points[2][1],l.length()),A=f.points[3]}return x.length&&Kr(l,O,x[0][0],s,a),l},Pi.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.amount.v,_=this.miterLimit.v,f=this.lineJoin;if(p!==0){var x,A;for(s=0;s<a;s+=1){if(x=this.shapes[s],A=x.localShapeCollection,!(!x.shape._mdf&&!this._mdf&&!t))for(A.releaseShapes(),x.shape._mdf=!0,e=x.shape.paths.shapes,o=x.shape.paths._length,l=0;l<o;l+=1)A.addShape(this.processPath(e[l],p,f,_));x.shape.paths=x.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Qr(t){for(var e=t.fStyle?t.fStyle.split(" "):[],s="normal",a="normal",l=e.length,o,p=0;p<l;p+=1)switch(o=e[p].toLowerCase(),o){case"italic":a="italic";break;case"bold":s="700";break;case"black":s="900";break;case"medium":s="500";break;case"regular":case"normal":s="400";break;case"light":case"thin":s="200";break;default:break}return{style:a,weight:t.fWeight||s}}var qe=(function(){var t=5e3,e={w:0,size:0,shapes:[],data:{shapes:[]}},s=[];s=s.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var a=127988,l=917631,o=917601,p=917626,_=65039,f=8205,x=127462,A=127487,O=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function v(b){var T=b.split(","),d,u=T.length,R=[];for(d=0;d<u;d+=1)T[d]!=="sans-serif"&&T[d]!=="monospace"&&R.push(T[d]);return R.join(",")}function E(b,T){var d=U("span");d.setAttribute("aria-hidden",!0),d.style.fontFamily=T;var u=U("span");u.innerText="giItT1WQy@!-/#",d.style.position="absolute",d.style.left="-10000px",d.style.top="-10000px",d.style.fontSize="300px",d.style.fontVariant="normal",d.style.fontStyle="normal",d.style.fontWeight="normal",d.style.letterSpacing="0",d.appendChild(u),document.body.appendChild(d);var R=u.offsetWidth;return u.style.fontFamily=v(b)+", "+T,{node:u,w:R,parent:d}}function C(){var b,T=this.fonts.length,d,u,R=T;for(b=0;b<T;b+=1)this.fonts[b].loaded?R-=1:this.fonts[b].fOrigin==="n"||this.fonts[b].origin===0?this.fonts[b].loaded=!0:(d=this.fonts[b].monoCase.node,u=this.fonts[b].monoCase.w,d.offsetWidth!==u?(R-=1,this.fonts[b].loaded=!0):(d=this.fonts[b].sansCase.node,u=this.fonts[b].sansCase.w,d.offsetWidth!==u&&(R-=1,this.fonts[b].loaded=!0)),this.fonts[b].loaded&&(this.fonts[b].sansCase.parent.parentNode.removeChild(this.fonts[b].sansCase.parent),this.fonts[b].monoCase.parent.parentNode.removeChild(this.fonts[b].monoCase.parent)));R!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function P(b,T){var d=document.body&&T?"svg":"canvas",u,R=Qr(b);if(d==="svg"){var F=rt("text");F.style.fontSize="100px",F.setAttribute("font-family",b.fFamily),F.setAttribute("font-style",R.style),F.setAttribute("font-weight",R.weight),F.textContent="1",b.fClass?(F.style.fontFamily="inherit",F.setAttribute("class",b.fClass)):F.style.fontFamily=b.fFamily,T.appendChild(F),u=F}else{var q=new OffscreenCanvas(500,500).getContext("2d");q.font=R.style+" "+R.weight+" 100px "+b.fFamily,u=q}function tt(it){return d==="svg"?(u.textContent=it,u.getComputedTextLength()):u.measureText(it).width}return{measureText:tt}}function L(b,T){if(!b){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=b.list;return}if(!document.body){this.isLoaded=!0,b.list.forEach(function(Dt){Dt.helper=P(Dt),Dt.cache={}}),this.fonts=b.list;return}var d=b.list,u,R=d.length,F=R;for(u=0;u<R;u+=1){var q=!0,tt,it;if(d[u].loaded=!1,d[u].monoCase=E(d[u].fFamily,"monospace"),d[u].sansCase=E(d[u].fFamily,"sans-serif"),!d[u].fPath)d[u].loaded=!0,F-=1;else if(d[u].fOrigin==="p"||d[u].origin===3){if(tt=document.querySelectorAll('style[f-forigin="p"][f-family="'+d[u].fFamily+'"], style[f-origin="3"][f-family="'+d[u].fFamily+'"]'),tt.length>0&&(q=!1),q){var ct=U("style");ct.setAttribute("f-forigin",d[u].fOrigin),ct.setAttribute("f-origin",d[u].origin),ct.setAttribute("f-family",d[u].fFamily),ct.type="text/css",ct.innerText="@font-face {font-family: "+d[u].fFamily+"; font-style: normal; src: url('"+d[u].fPath+"');}",T.appendChild(ct)}}else if(d[u].fOrigin==="g"||d[u].origin===1){for(tt=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),it=0;it<tt.length;it+=1)tt[it].href.indexOf(d[u].fPath)!==-1&&(q=!1);if(q){var dt=U("link");dt.setAttribute("f-forigin",d[u].fOrigin),dt.setAttribute("f-origin",d[u].origin),dt.type="text/css",dt.rel="stylesheet",dt.href=d[u].fPath,document.body.appendChild(dt)}}else if(d[u].fOrigin==="t"||d[u].origin===2){for(tt=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),it=0;it<tt.length;it+=1)d[u].fPath===tt[it].src&&(q=!1);if(q){var bt=U("link");bt.setAttribute("f-forigin",d[u].fOrigin),bt.setAttribute("f-origin",d[u].origin),bt.setAttribute("rel","stylesheet"),bt.setAttribute("href",d[u].fPath),T.appendChild(bt)}}d[u].helper=P(d[u],T),d[u].cache={},this.fonts.push(d[u])}F===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function S(b){if(b){this.chars||(this.chars=[]);var T,d=b.length,u,R=this.chars.length,F;for(T=0;T<d;T+=1){for(u=0,F=!1;u<R;)this.chars[u].style===b[T].style&&this.chars[u].fFamily===b[T].fFamily&&this.chars[u].ch===b[T].ch&&(F=!0),u+=1;F||(this.chars.push(b[T]),R+=1)}}}function w(b,T,d){for(var u=0,R=this.chars.length;u<R;){if(this.chars[u].ch===b&&this.chars[u].style===T&&this.chars[u].fFamily===d)return this.chars[u];u+=1}return(typeof b=="string"&&b.charCodeAt(0)!==13||!b)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",b,T,d)),e}function m(b,T,d){var u=this.getFontByName(T),R=b;if(!u.cache[R]){var F=u.helper;if(b===" "){var q=F.measureText("|"+b+"|"),tt=F.measureText("||");u.cache[R]=(q-tt)/100}else u.cache[R]=F.measureText(b)/100}return u.cache[R]*d}function y(b){for(var T=0,d=this.fonts.length;T<d;){if(this.fonts[T].fName===b)return this.fonts[T];T+=1}return this.fonts[0]}function k(b){var T=0,d=b.charCodeAt(0);if(d>=55296&&d<=56319){var u=b.charCodeAt(1);u>=56320&&u<=57343&&(T=(d-55296)*1024+u-56320+65536)}return T}function M(b,T){var d=b.toString(16)+T.toString(16);return O.indexOf(d)!==-1}function z(b){return b===f}function D(b){return b===_}function j(b){var T=k(b);return T>=x&&T<=A}function et(b){return j(b.substr(0,2))&&j(b.substr(2,2))}function K(b){return s.indexOf(b)!==-1}function H(b,T){var d=k(b.substr(T,2));if(d!==a)return!1;var u=0;for(T+=2;u<5;){if(d=k(b.substr(T,2)),d<o||d>p)return!1;u+=1,T+=2}return k(b.substr(T,2))===l}function at(){this.isLoaded=!0}var G=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};G.isModifier=M,G.isZeroWidthJoiner=z,G.isFlagEmoji=et,G.isRegionalCode=j,G.isCombinedCharacter=K,G.isRegionalFlag=H,G.isVariationSelector=D,G.BLACK_FLAG_CODE_POINT=a;var N={addChars:S,addFonts:L,getCharData:w,getFontByName:y,measureText:m,checkLoadedFonts:C,setIsLoaded:at};return G.prototype=N,G})();function ta(t){this.animationData=t}ta.prototype.getProp=function(t){return this.animationData.slots&&this.animationData.slots[t.sid]?Object.assign(t,this.animationData.slots[t.sid].p):t};function so(t){return new ta(t)}function ls(){}ls.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,s=this.renderableComponents.length;for(e=0;e<s;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var Zs=(function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}})();function ro(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function ao(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function no(t,e,s){this.p=W.getProp(e,t.v,1,0,s)}function oo(t,e,s){this.p=W.getProp(e,t.v,1,0,s)}function lo(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function ho(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function co(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function po(){this.p={}}function ea(t,e){var s=t.ef||[];this.effectElements=[];var a,l=s.length,o;for(a=0;a<l;a+=1)o=new Ti(s[a],e),this.effectElements.push(o)}function Ti(t,e){this.init(t,e)}B([$t],Ti),Ti.prototype.getValue=Ti.prototype.iterateDynamicProperties,Ti.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var s,a=this.data.ef.length,l,o=this.data.ef;for(s=0;s<a;s+=1){switch(l=null,o[s].ty){case 0:l=new ro(o[s],e,this);break;case 1:l=new ao(o[s],e,this);break;case 2:l=new no(o[s],e,this);break;case 3:l=new oo(o[s],e,this);break;case 4:case 7:l=new co(o[s],e,this);break;case 10:l=new lo(o[s],e,this);break;case 11:l=new ho(o[s],e,this);break;case 5:l=new ea(o[s],e,this);break;default:l=new po(o[s],e,this);break}l&&this.effectElements.push(l)}};function Ee(){}Ee.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,s=this.data.masksProperties.length;e<s;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){var e=Er();if(e){var s=e("layer"),a=e("effects"),l=e("shape"),o=e("text"),p=e("comp");this.layerInterface=s(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var _=a.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(_),this.data.ty===0||this.data.xt?this.compInterface=p(this):this.data.ty===4?(this.layerInterface.shapeInterface=l(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=o(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var e=Zs(this.data.bm),s=this.baseElement||this.layerElement;s.style["mix-blend-mode"]=e},initBaseData:function(e,s,a){this.globalData=s,this.comp=a,this.data=e,this.layerId=Ot(),this.data.sr||(this.data.sr=1),this.effectsManager=new ea(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function Pe(){}Pe.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,s){var a,l=this.dynamicProperties.length;for(a=0;a<l;a+=1)(s||this._isParent&&this.dynamicProperties[a].propType==="transform")&&(this.dynamicProperties[a].getValue(),this.dynamicProperties[a]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function Te(t,e,s){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,s)}Te.prototype.prepareFrame=function(){},B([ls,Ee,Pe],Te),Te.prototype.getBaseElement=function(){return null},Te.prototype.renderFrame=function(){},Te.prototype.destroy=function(){},Te.prototype.initExpressions=function(){var t=Er();if(t){var e=t("footage");this.layerInterface=e(this)}},Te.prototype.getFootageData=function(){return this.footageData};function Rt(t,e,s){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,s),this._isPlaying=!1,this._canPlay=!1;var a=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(a),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?W.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=W.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}Rt.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var s=this._volume*this._volumeMultiplier;this._previousVolume!==s&&(this._previousVolume=s,this.audio.volume(s))},B([ls,Ee,Pe],Rt),Rt.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},Rt.prototype.show=function(){},Rt.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},Rt.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},Rt.prototype.resume=function(){this._canPlay=!0},Rt.prototype.setRate=function(t){this.audio.rate(t)},Rt.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},Rt.prototype.getBaseElement=function(){return null},Rt.prototype.destroy=function(){},Rt.prototype.sourceRectAtTime=function(){},Rt.prototype.initExpressions=function(){};function Ct(){}Ct.prototype.checkLayers=function(t){var e,s=this.layers.length,a;for(this.completeLayers=!0,e=s-1;e>=0;e-=1)this.elements[e]||(a=this.layers[e],a.ip-a.st<=t-this.layers[e].st&&a.op-a.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},Ct.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},Ct.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Ct.prototype.createAudio=function(t){return new Rt(t,this.globalData,this)},Ct.prototype.createFootage=function(t){return new Te(t,this.globalData,this)},Ct.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},Ct.prototype.includeLayers=function(t){this.completeLayers=!1;var e,s=t.length,a,l=this.layers.length;for(e=0;e<s;e+=1)for(a=0;a<l;){if(this.layers[a].id===t[e].id){this.layers[a]=t[e];break}a+=1}},Ct.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},Ct.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Ct.prototype.buildElementParenting=function(t,e,s){for(var a=this.elements,l=this.layers,o=0,p=l.length;o<p;)l[o].ind==e&&(!a[o]||a[o]===!0?(this.buildItem(o),this.addPendingElement(t)):(s.push(a[o]),a[o].setAsParent(),l[o].parent!==void 0?this.buildElementParenting(t,l[o].parent,s):t.setHierarchy(s))),o+=1},Ct.prototype.addPendingElement=function(t){this.pendingElements.push(t)},Ct.prototype.searchExtraCompositions=function(t){var e,s=t.length;for(e=0;e<s;e+=1)if(t[e].xt){var a=this.createComp(t[e]);a.initExpressions(),this.globalData.projectInterface.registerComposition(a)}},Ct.prototype.getElementById=function(t){var e,s=this.elements.length;for(e=0;e<s;e+=1)if(this.elements[e].data.ind===t)return this.elements[e];return null},Ct.prototype.getElementByPath=function(t){var e=t.shift(),s;if(typeof e=="number")s=this.elements[e];else{var a,l=this.elements.length;for(a=0;a<l;a+=1)if(this.elements[a].data.nm===e){s=this.elements[a];break}}return t.length===0?s:s.getElementByPath(t)},Ct.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new qe,this.globalData.slotManager=so(t),this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};var fo={TRANSFORM_EFFECT:"transformEFfect"};function hi(){}hi.prototype={initTransform:function(){var e=new Tt;this.finalTransform={mProp:this.data.ks?qs.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:e,localMat:e,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,s=this.finalTransform.mat,a=0,l=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;a<l;){if(this.hierarchy[a].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}a+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),a=0;a<l;a+=1)s.multiply(this.hierarchy[a].finalTransform.mProp.v)}(!this.localTransforms||this.finalTransform._matMdf)&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var e=0,s=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;e<s;)this.localTransforms[e]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[e]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),e+=1;if(this.finalTransform._localMatMdf){var a=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(a),e=1;e<s;e+=1){var l=this.localTransforms[e].matrix;a.multiply(l)}a.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var o=this.finalTransform.localOpacity;for(e=0;e<s;e+=1)o*=this.localTransforms[e].opacity*.01;this.finalTransform.localOpacity=o}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var e=this.renderableEffectsManager.getEffects(fo.TRANSFORM_EFFECT);if(e.length){this.localTransforms=[],this.finalTransform.localMat=new Tt;var s=0,a=e.length;for(s=0;s<a;s+=1)this.localTransforms.push(e[s])}}},globalToLocal:function(e){var s=[];s.push(this.finalTransform);for(var a=!0,l=this.comp;a;)l.finalTransform?(l.data.hasMask&&s.splice(0,0,l.finalTransform),l=l.comp):a=!1;var o,p=s.length,_;for(o=0;o<p;o+=1)_=s[o].mat.applyToPointArray(0,0,0),e=[e[0]-_[0],e[1]-_[1],0];return e},mHelper:new Tt};function Ge(t,e,s){this.data=t,this.element=e,this.globalData=s,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var a=this.globalData.defs,l,o=this.masksProperties?this.masksProperties.length:0;this.viewData=ht(o),this.solidPath="";var p,_=this.masksProperties,f=0,x=[],A,O,v=Ot(),E,C,P,L,S="clipPath",w="clip-path";for(l=0;l<o;l+=1)if((_[l].mode!=="a"&&_[l].mode!=="n"||_[l].inv||_[l].o.k!==100||_[l].o.x)&&(S="mask",w="mask"),(_[l].mode==="s"||_[l].mode==="i")&&f===0?(E=rt("rect"),E.setAttribute("fill","#ffffff"),E.setAttribute("width",this.element.comp.data.w||0),E.setAttribute("height",this.element.comp.data.h||0),x.push(E)):E=null,p=rt("path"),_[l].mode==="n")this.viewData[l]={op:W.getProp(this.element,_[l].o,0,.01,this.element),prop:ss.getShapeProp(this.element,_[l],3),elem:p,lastPath:""},a.appendChild(p);else{f+=1,p.setAttribute("fill",_[l].mode==="s"?"#000000":"#ffffff"),p.setAttribute("clip-rule","nonzero");var m;if(_[l].x.k!==0?(S="mask",w="mask",L=W.getProp(this.element,_[l].x,0,null,this.element),m=Ot(),C=rt("filter"),C.setAttribute("id",m),P=rt("feMorphology"),P.setAttribute("operator","erode"),P.setAttribute("in","SourceGraphic"),P.setAttribute("radius","0"),C.appendChild(P),a.appendChild(C),p.setAttribute("stroke",_[l].mode==="s"?"#000000":"#ffffff")):(P=null,L=null),this.storedData[l]={elem:p,x:L,expan:P,lastPath:"",lastOperator:"",filterId:m,lastRadius:0},_[l].mode==="i"){O=x.length;var y=rt("g");for(A=0;A<O;A+=1)y.appendChild(x[A]);var k=rt("mask");k.setAttribute("mask-type","alpha"),k.setAttribute("id",v+"_"+f),k.appendChild(p),a.appendChild(k),y.setAttribute("mask","url("+V()+"#"+v+"_"+f+")"),x.length=0,x.push(y)}else x.push(p);_[l].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[l]={elem:p,lastPath:"",op:W.getProp(this.element,_[l].o,0,.01,this.element),prop:ss.getShapeProp(this.element,_[l],3),invRect:E},this.viewData[l].prop.k||this.drawPath(_[l],this.viewData[l].prop.v,this.viewData[l])}for(this.maskElement=rt(S),o=x.length,l=0;l<o;l+=1)this.maskElement.appendChild(x[l]);f>0&&(this.maskElement.setAttribute("id",v),this.element.maskedElement.setAttribute(w,"url("+V()+"#"+v+")"),a.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}Ge.prototype.getMaskProperty=function(t){return this.viewData[t].prop},Ge.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,s,a=this.masksProperties.length;for(s=0;s<a;s+=1)if((this.viewData[s].prop._mdf||t)&&this.drawPath(this.masksProperties[s],this.viewData[s].prop.v,this.viewData[s]),(this.viewData[s].op._mdf||t)&&this.viewData[s].elem.setAttribute("fill-opacity",this.viewData[s].op.v),this.masksProperties[s].mode!=="n"&&(this.viewData[s].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[s].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[s].x&&(this.storedData[s].x._mdf||t))){var l=this.storedData[s].expan;this.storedData[s].x.v<0?(this.storedData[s].lastOperator!=="erode"&&(this.storedData[s].lastOperator="erode",this.storedData[s].elem.setAttribute("filter","url("+V()+"#"+this.storedData[s].filterId+")")),l.setAttribute("radius",-this.storedData[s].x.v)):(this.storedData[s].lastOperator!=="dilate"&&(this.storedData[s].lastOperator="dilate",this.storedData[s].elem.setAttribute("filter",null)),this.storedData[s].elem.setAttribute("stroke-width",this.storedData[s].x.v*2))}},Ge.prototype.getMaskelement=function(){return this.maskElement},Ge.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},Ge.prototype.drawPath=function(t,e,s){var a=" M"+e.v[0][0]+","+e.v[0][1],l,o;for(o=e._length,l=1;l<o;l+=1)a+=" C"+e.o[l-1][0]+","+e.o[l-1][1]+" "+e.i[l][0]+","+e.i[l][1]+" "+e.v[l][0]+","+e.v[l][1];if(e.c&&o>1&&(a+=" C"+e.o[l-1][0]+","+e.o[l-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),s.lastPath!==a){var p="";s.elem&&(e.c&&(p=t.inv?this.solidPath+a:a),s.elem.setAttribute("d",p)),s.lastPath=a}},Ge.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var Ci=(function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=s;function e(a,l){var o=rt("filter");return o.setAttribute("id",a),l!==!0&&(o.setAttribute("filterUnits","objectBoundingBox"),o.setAttribute("x","0%"),o.setAttribute("y","0%"),o.setAttribute("width","100%"),o.setAttribute("height","100%")),o}function s(){var a=rt("feColorMatrix");return a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),a}return t})(),ia=(function(){var t={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),/firefox/i.test(navigator.userAgent)&&(t.svgLumaHidden=!1),t})(),hs={},sa="filter_result_";function Js(t){var e,s="SourceGraphic",a=t.data.ef?t.data.ef.length:0,l=Ot(),o=Ci.createFilter(l,!0),p=0;this.filters=[];var _;for(e=0;e<a;e+=1){_=null;var f=t.data.ef[e].ty;if(hs[f]){var x=hs[f].effect;_=new x(o,t.effectsManager.effectElements[e],t,sa+p,s),s=sa+p,hs[f].countsAsEffect&&(p+=1)}_&&this.filters.push(_)}p&&(t.globalData.defs.appendChild(o),t.layerElement.setAttribute("filter","url("+V()+"#"+l+")")),this.filters.length&&t.addRenderableComponent(this)}Js.prototype.renderFrame=function(t){var e,s=this.filters.length;for(e=0;e<s;e+=1)this.filters[e].renderFrame(t)},Js.prototype.getEffects=function(t){var e,s=this.filters.length,a=[];for(e=0;e<s;e+=1)this.filters[e].type===t&&a.push(this.filters[e]);return a};function El(t,e,s){hs[t]={effect:e,countsAsEffect:s}}function Mi(){}Mi.prototype={initRendererElement:function(){this.layerElement=rt("g")},createContainerElements:function(){this.matteElement=rt("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null;if(this.data.td){this.matteMasks={};var s=rt("g");s.setAttribute("id",this.layerId),s.appendChild(this.layerElement),e=s,this.globalData.defs.appendChild(s)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var a=rt("clipPath"),l=rt("path");l.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var o=Ot();if(a.setAttribute("id",o),a.appendChild(l),this.globalData.defs.appendChild(a),this.checkMasks()){var p=rt("g");p.setAttribute("clip-path","url("+V()+"#"+o+")"),p.appendChild(this.layerElement),this.transformedElement=p,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+V()+"#"+o+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new Ge(this.data,this,this.globalData),this.renderableEffectsManager=new Js(this),this.searchEffectTransforms()},getMatte:function(e){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[e]){var s=this.layerId+"_"+e,a,l,o,p;if(e===1||e===3){var _=rt("mask");_.setAttribute("id",s),_.setAttribute("mask-type",e===3?"luminance":"alpha"),o=rt("use"),o.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),_.appendChild(o),this.globalData.defs.appendChild(_),!ia.maskType&&e===1&&(_.setAttribute("mask-type","luminance"),a=Ot(),l=Ci.createFilter(a),this.globalData.defs.appendChild(l),l.appendChild(Ci.createAlphaToLuminanceFilter()),p=rt("g"),p.appendChild(o),_.appendChild(p),p.setAttribute("filter","url("+V()+"#"+a+")"))}else if(e===2){var f=rt("mask");f.setAttribute("id",s),f.setAttribute("mask-type","alpha");var x=rt("g");f.appendChild(x),a=Ot(),l=Ci.createFilter(a);var A=rt("feComponentTransfer");A.setAttribute("in","SourceGraphic"),l.appendChild(A);var O=rt("feFuncA");O.setAttribute("type","table"),O.setAttribute("tableValues","1.0 0.0"),A.appendChild(O),this.globalData.defs.appendChild(l);var v=rt("rect");v.setAttribute("width",this.comp.data.w),v.setAttribute("height",this.comp.data.h),v.setAttribute("x","0"),v.setAttribute("y","0"),v.setAttribute("fill","#ffffff"),v.setAttribute("opacity","0"),x.setAttribute("filter","url("+V()+"#"+a+")"),x.appendChild(v),o=rt("use"),o.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),x.appendChild(o),ia.maskType||(f.setAttribute("mask-type","luminance"),l.appendChild(Ci.createAlphaToLuminanceFilter()),p=rt("g"),x.appendChild(v),p.appendChild(this.layerElement),x.appendChild(p)),this.globalData.defs.appendChild(f)}this.matteMasks[e]=s}return this.matteMasks[e]},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+V()+"#"+e+")")}};function ci(){}ci.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function Fi(){}(function(){var t={initElement:function(s,a,l){this.initFrame(),this.initBaseData(s,a,l),this.initTransform(s,a,l),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var s=this.baseElement||this.layerElement;s.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var s=this.baseElement||this.layerElement;s.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(s){this._mdf=!1,this.prepareRenderableFrame(s),this.prepareProperties(s,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};B([ls,X(t)],Fi)})();function Ii(t,e,s){this.assetData=e.getAssetData(t.refId),this.assetData&&this.assetData.sid&&(this.assetData=e.slotManager.getProp(this.assetData)),this.initElement(t,e,s),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}B([Ee,hi,Mi,ci,Pe,Fi],Ii),Ii.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=rt("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},Ii.prototype.sourceRectAtTime=function(){return this.sourceRect};function uo(t,e){this.elem=t,this.pos=e}function ra(){}ra.prototype={addShapeToModifiers:function(e){var s,a=this.shapeModifiers.length;for(s=0;s<a;s+=1)this.shapeModifiers[s].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var s=0,a=this.shapeModifiers.length;s<a;)if(this.shapeModifiers[s].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,s=this.shapes.length;for(e=0;e<s;e+=1)this.shapes[e].sh.reset();s=this.shapeModifiers.length;var a;for(e=s-1;e>=0&&(a=this.shapeModifiers[e].processShapes(this._isFirstFrame),!a);e-=1);}},searchProcessedElement:function(e){for(var s=this.processedElements,a=0,l=s.length;a<l;){if(s[a].elem===e)return s[a].pos;a+=1}return 0},addProcessedElement:function(e,s){for(var a=this.processedElements,l=a.length;l;)if(l-=1,a[l].elem===e){a[l].pos=s;return}a.push(new uo(e,s))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};var aa={1:"butt",2:"round",3:"square"},na={1:"miter",2:"round",3:"bevel"};function oa(t,e,s){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=s,this.lvl=e,this._isAnimated=!!s.k;for(var a=0,l=t.length;a<l;){if(t[a].mProps.dynamicProperties.length){this._isAnimated=!0;break}a+=1}}oa.prototype.setAsAnimated=function(){this._isAnimated=!0};function la(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=rt("path"),this.msElem=null}la.prototype.reset=function(){this.d="",this._mdf=!1};function cs(t,e,s,a){this.elem=t,this.frameId=-1,this.dataProps=ht(e.length),this.renderer=s,this.k=!1,this.dashStr="",this.dashArray=ot("float32",e.length?e.length-1:0),this.dashoffset=ot("float32",1),this.initDynamicPropertyContainer(a);var l,o=e.length||0,p;for(l=0;l<o;l+=1)p=W.getProp(t,e[l].v,0,0,this),this.k=p.k||this.k,this.dataProps[l]={n:e[l].n,p};this.k||this.getValue(!0),this._isAnimated=this.k}cs.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,s=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<s;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},B([$t],cs);function ha(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=W.getProp(t,e.o,0,.01,this),this.w=W.getProp(t,e.w,0,null,this),this.d=new cs(t,e.d||{},"svg",this),this.c=W.getProp(t,e.c,1,255,this),this.style=s,this._isAnimated=!!this._isAnimated}B([$t],ha);function ca(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=W.getProp(t,e.o,0,.01,this),this.c=W.getProp(t,e.c,1,255,this),this.style=s}B([$t],ca);function da(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=s}B([$t],da);function Li(t,e,s){this.data=e,this.c=ot("uint8c",e.p*4);var a=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=ot("float32",a),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=a,this.initDynamicPropertyContainer(s),this.prop=W.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}Li.prototype.comparePoints=function(t,e){for(var s=0,a=this.o.length/2,l;s<a;){if(l=Math.abs(t[s*4]-t[e*4+s*2]),l>.01)return!1;s+=1}return!0},Li.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},Li.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,s=this.data.p*4,a,l;for(e=0;e<s;e+=1)a=e%4===0?100:255,l=Math.round(this.prop.v[e]*a),this.c[e]!==l&&(this.c[e]=l,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=this.data.p*4;e<s;e+=1)a=e%2===0?100:1,l=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==l&&(this.o[e-this.data.p*4]=l,this._omdf=!t);this._mdf=!t}},B([$t],Li);function di(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,s)}di.prototype.initGradientData=function(t,e,s){this.o=W.getProp(t,e.o,0,.01,this),this.s=W.getProp(t,e.s,1,null,this),this.e=W.getProp(t,e.e,1,null,this),this.h=W.getProp(t,e.h||{k:0},0,.01,this),this.a=W.getProp(t,e.a||{k:0},0,mt,this),this.g=new Li(t,e.g,this),this.style=s,this.stops=[],this.setGradientData(s.pElem,e),this.setGradientOpacity(e,s),this._isAnimated=!!this._isAnimated},di.prototype.setGradientData=function(t,e){var s=Ot(),a=rt(e.t===1?"linearGradient":"radialGradient");a.setAttribute("id",s),a.setAttribute("spreadMethod","pad"),a.setAttribute("gradientUnits","userSpaceOnUse");var l=[],o,p,_;for(_=e.g.p*4,p=0;p<_;p+=4)o=rt("stop"),a.appendChild(o),l.push(o);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+V()+"#"+s+")"),this.gf=a,this.cst=l},di.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var s,a,l,o=rt("mask"),p=rt("path");o.appendChild(p);var _=Ot(),f=Ot();o.setAttribute("id",f);var x=rt(t.t===1?"linearGradient":"radialGradient");x.setAttribute("id",_),x.setAttribute("spreadMethod","pad"),x.setAttribute("gradientUnits","userSpaceOnUse"),l=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var A=this.stops;for(a=t.g.p*4;a<l;a+=2)s=rt("stop"),s.setAttribute("stop-color","rgb(255,255,255)"),x.appendChild(s),A.push(s);p.setAttribute(t.ty==="gf"?"fill":"stroke","url("+V()+"#"+_+")"),t.ty==="gs"&&(p.setAttribute("stroke-linecap",aa[t.lc||2]),p.setAttribute("stroke-linejoin",na[t.lj||2]),t.lj===1&&p.setAttribute("stroke-miterlimit",t.ml)),this.of=x,this.ms=o,this.ost=A,this.maskId=f,e.msElem=p}},B([$t],di);function pa(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=W.getProp(t,e.w,0,null,this),this.d=new cs(t,e.d||{},"svg",this),this.initGradientData(t,e,s),this._isAnimated=!!this._isAnimated}B([di,$t],pa);function mo(){this.it=[],this.prevViewData=[],this.gr=rt("g")}function go(t,e,s){this.transform={mProps:t,op:e,container:s},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var fa=function(e,s,a,l){if(s===0)return"";var o=e.o,p=e.i,_=e.v,f,x=" M"+l.applyToPointStringified(_[0][0],_[0][1]);for(f=1;f<s;f+=1)x+=" C"+l.applyToPointStringified(o[f-1][0],o[f-1][1])+" "+l.applyToPointStringified(p[f][0],p[f][1])+" "+l.applyToPointStringified(_[f][0],_[f][1]);return a&&s&&(x+=" C"+l.applyToPointStringified(o[f-1][0],o[f-1][1])+" "+l.applyToPointStringified(p[0][0],p[0][1])+" "+l.applyToPointStringified(_[0][0],_[0][1]),x+="z"),x},vo=(function(){var t=new Tt,e=new Tt,s={createRenderFunction:a};function a(O){switch(O.ty){case"fl":return _;case"gf":return x;case"gs":return f;case"st":return A;case"sh":case"el":case"rc":case"sr":return p;case"tr":return l;case"no":return o;default:return null}}function l(O,v,E){(E||v.transform.op._mdf)&&v.transform.container.setAttribute("opacity",v.transform.op.v),(E||v.transform.mProps._mdf)&&v.transform.container.setAttribute("transform",v.transform.mProps.v.to2dCSS())}function o(){}function p(O,v,E){var C,P,L,S,w,m,y=v.styles.length,k=v.lvl,M,z,D,j;for(m=0;m<y;m+=1){if(S=v.sh._mdf||E,v.styles[m].lvl<k){for(z=e.reset(),D=k-v.styles[m].lvl,j=v.transformers.length-1;!S&&D>0;)S=v.transformers[j].mProps._mdf||S,D-=1,j-=1;if(S)for(D=k-v.styles[m].lvl,j=v.transformers.length-1;D>0;)z.multiply(v.transformers[j].mProps.v),D-=1,j-=1}else z=t;if(M=v.sh.paths,P=M._length,S){for(L="",C=0;C<P;C+=1)w=M.shapes[C],w&&w._length&&(L+=fa(w,w._length,w.c,z));v.caches[m]=L}else L=v.caches[m];v.styles[m].d+=O.hd===!0?"":L,v.styles[m]._mdf=S||v.styles[m]._mdf}}function _(O,v,E){var C=v.style;(v.c._mdf||E)&&C.pElem.setAttribute("fill","rgb("+ie(v.c.v[0])+","+ie(v.c.v[1])+","+ie(v.c.v[2])+")"),(v.o._mdf||E)&&C.pElem.setAttribute("fill-opacity",v.o.v)}function f(O,v,E){x(O,v,E),A(O,v,E)}function x(O,v,E){var C=v.gf,P=v.g._hasOpacity,L=v.s.v,S=v.e.v;if(v.o._mdf||E){var w=O.ty==="gf"?"fill-opacity":"stroke-opacity";v.style.pElem.setAttribute(w,v.o.v)}if(v.s._mdf||E){var m=O.t===1?"x1":"cx",y=m==="x1"?"y1":"cy";C.setAttribute(m,L[0]),C.setAttribute(y,L[1]),P&&!v.g._collapsable&&(v.of.setAttribute(m,L[0]),v.of.setAttribute(y,L[1]))}var k,M,z,D;if(v.g._cmdf||E){k=v.cst;var j=v.g.c;for(z=k.length,M=0;M<z;M+=1)D=k[M],D.setAttribute("offset",j[M*4]+"%"),D.setAttribute("stop-color","rgb("+j[M*4+1]+","+j[M*4+2]+","+j[M*4+3]+")")}if(P&&(v.g._omdf||E)){var et=v.g.o;for(v.g._collapsable?k=v.cst:k=v.ost,z=k.length,M=0;M<z;M+=1)D=k[M],v.g._collapsable||D.setAttribute("offset",et[M*2]+"%"),D.setAttribute("stop-opacity",et[M*2+1])}if(O.t===1)(v.e._mdf||E)&&(C.setAttribute("x2",S[0]),C.setAttribute("y2",S[1]),P&&!v.g._collapsable&&(v.of.setAttribute("x2",S[0]),v.of.setAttribute("y2",S[1])));else{var K;if((v.s._mdf||v.e._mdf||E)&&(K=Math.sqrt(Math.pow(L[0]-S[0],2)+Math.pow(L[1]-S[1],2)),C.setAttribute("r",K),P&&!v.g._collapsable&&v.of.setAttribute("r",K)),v.s._mdf||v.e._mdf||v.h._mdf||v.a._mdf||E){K||(K=Math.sqrt(Math.pow(L[0]-S[0],2)+Math.pow(L[1]-S[1],2)));var H=Math.atan2(S[1]-L[1],S[0]-L[0]),at=v.h.v;at>=1?at=.99:at<=-1&&(at=-.99);var G=K*at,N=Math.cos(H+v.a.v)*G+L[0],b=Math.sin(H+v.a.v)*G+L[1];C.setAttribute("fx",N),C.setAttribute("fy",b),P&&!v.g._collapsable&&(v.of.setAttribute("fx",N),v.of.setAttribute("fy",b))}}}function A(O,v,E){var C=v.style,P=v.d;P&&(P._mdf||E)&&P.dashStr&&(C.pElem.setAttribute("stroke-dasharray",P.dashStr),C.pElem.setAttribute("stroke-dashoffset",P.dashoffset[0])),v.c&&(v.c._mdf||E)&&C.pElem.setAttribute("stroke","rgb("+ie(v.c.v[0])+","+ie(v.c.v[1])+","+ie(v.c.v[2])+")"),(v.o._mdf||E)&&C.pElem.setAttribute("stroke-opacity",v.o.v),(v.w._mdf||E)&&(C.pElem.setAttribute("stroke-width",v.w.v),C.msElem&&C.msElem.setAttribute("stroke-width",v.w.v))}return s})();function _t(t,e,s){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,s),this.prevViewData=[]}B([Ee,hi,Mi,ra,ci,Pe,Fi],_t),_t.prototype.initSecondaryElement=function(){},_t.prototype.identityMatrix=new Tt,_t.prototype.buildExpressionInterface=function(){},_t.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},_t.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,s,a,l=this.stylesList.length,o,p=[],_=!1;for(a=0;a<l;a+=1){for(o=this.stylesList[a],_=!1,p.length=0,t=0;t<e;t+=1)s=this.shapes[t],s.styles.indexOf(o)!==-1&&(p.push(s),_=s._isAnimated||_);p.length>1&&_&&this.setShapesAsAnimated(p)}},_t.prototype.setShapesAsAnimated=function(t){var e,s=t.length;for(e=0;e<s;e+=1)t[e].setAsAnimated()},_t.prototype.createStyleElement=function(t,e){var s,a=new la(t,e),l=a.pElem;if(t.ty==="st")s=new ha(this,t,a);else if(t.ty==="fl")s=new ca(this,t,a);else if(t.ty==="gf"||t.ty==="gs"){var o=t.ty==="gf"?di:pa;s=new o(this,t,a),this.globalData.defs.appendChild(s.gf),s.maskId&&(this.globalData.defs.appendChild(s.ms),this.globalData.defs.appendChild(s.of),l.setAttribute("mask","url("+V()+"#"+s.maskId+")"))}else t.ty==="no"&&(s=new da(this,t,a));return(t.ty==="st"||t.ty==="gs")&&(l.setAttribute("stroke-linecap",aa[t.lc||2]),l.setAttribute("stroke-linejoin",na[t.lj||2]),l.setAttribute("fill-opacity","0"),t.lj===1&&l.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&l.setAttribute("fill-rule","evenodd"),t.ln&&l.setAttribute("id",t.ln),t.cl&&l.setAttribute("class",t.cl),t.bm&&(l.style["mix-blend-mode"]=Zs(t.bm)),this.stylesList.push(a),this.addToAnimatedContents(t,s),s},_t.prototype.createGroupElement=function(t){var e=new mo;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=Zs(t.bm)),e},_t.prototype.createTransformElement=function(t,e){var s=qs.getTransformProperty(this,t,this),a=new go(s,s.o,e);return this.addToAnimatedContents(t,a),a},_t.prototype.createShapeElement=function(t,e,s){var a=4;t.ty==="rc"?a=5:t.ty==="el"?a=6:t.ty==="sr"&&(a=7);var l=ss.getShapeProp(this,t,a,this),o=new oa(e,s,l);return this.shapes.push(o),this.addShapeToModifiers(o),this.addToAnimatedContents(t,o),o},_t.prototype.addToAnimatedContents=function(t,e){for(var s=0,a=this.animatedContents.length;s<a;){if(this.animatedContents[s].element===e)return;s+=1}this.animatedContents.push({fn:vo.createRenderFunction(t),element:e,data:t})},_t.prototype.setElementStyles=function(t){var e=t.styles,s,a=this.stylesList.length;for(s=0;s<a;s+=1)e.indexOf(this.stylesList[s])===-1&&!this.stylesList[s].closed&&e.push(this.stylesList[s])},_t.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},_t.prototype.searchShapes=function(t,e,s,a,l,o,p){var _=[].concat(o),f,x=t.length-1,A,O,v=[],E=[],C,P,L;for(f=x;f>=0;f-=1){if(L=this.searchProcessedElement(t[f]),L?e[f]=s[L-1]:t[f]._render=p,t[f].ty==="fl"||t[f].ty==="st"||t[f].ty==="gf"||t[f].ty==="gs"||t[f].ty==="no")L?e[f].style.closed=t[f].hd:e[f]=this.createStyleElement(t[f],l),t[f]._render&&e[f].style.pElem.parentNode!==a&&a.appendChild(e[f].style.pElem),v.push(e[f].style);else if(t[f].ty==="gr"){if(!L)e[f]=this.createGroupElement(t[f]);else for(O=e[f].it.length,A=0;A<O;A+=1)e[f].prevViewData[A]=e[f].it[A];this.searchShapes(t[f].it,e[f].it,e[f].prevViewData,e[f].gr,l+1,_,p),t[f]._render&&e[f].gr.parentNode!==a&&a.appendChild(e[f].gr)}else t[f].ty==="tr"?(L||(e[f]=this.createTransformElement(t[f],a)),C=e[f].transform,_.push(C)):t[f].ty==="sh"||t[f].ty==="rc"||t[f].ty==="el"||t[f].ty==="sr"?(L||(e[f]=this.createShapeElement(t[f],_,l)),this.setElementStyles(e[f])):t[f].ty==="tm"||t[f].ty==="rd"||t[f].ty==="ms"||t[f].ty==="pb"||t[f].ty==="zz"||t[f].ty==="op"?(L?(P=e[f],P.closed=!1):(P=$e.getModifier(t[f].ty),P.init(this,t[f]),e[f]=P,this.shapeModifiers.push(P)),E.push(P)):t[f].ty==="rp"&&(L?(P=e[f],P.closed=!0):(P=$e.getModifier(t[f].ty),e[f]=P,P.init(this,t,f,e),this.shapeModifiers.push(P),p=!1),E.push(P));this.addProcessedElement(t[f],f+1)}for(x=v.length,f=0;f<x;f+=1)v[f].closed=!0;for(x=E.length,f=0;f<x;f+=1)E[f].closed=!0},_t.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},_t.prototype.renderShape=function(){var t,e=this.animatedContents.length,s;for(t=0;t<e;t+=1)s=this.animatedContents[t],(this._isFirstFrame||s.element._isAnimated)&&s.data!==!0&&s.fn(s.data,s.element,this._isFirstFrame)},_t.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function Qs(t,e,s,a,l,o){this.o=t,this.sw=e,this.sc=s,this.fc=a,this.m=l,this.p=o,this._mdf={o:!0,sw:!!e,sc:!!s,fc:!!a,m:!0,p:!0}}Qs.prototype.update=function(t,e,s,a,l,o){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var p=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,p=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,p=!0),this.sc!==s&&(this.sc=s,this._mdf.sc=!0,p=!0),this.fc!==a&&(this.fc=a,this._mdf.fc=!0,p=!0),this.m!==l&&(this.m=l,this._mdf.m=!0,p=!0),o.length&&(this.p[0]!==o[0]||this.p[1]!==o[1]||this.p[4]!==o[4]||this.p[5]!==o[5]||this.p[12]!==o[12]||this.p[13]!==o[13])&&(this.p=o,this._mdf.p=!0,p=!0),p};function zt(t,e){this._frameId=n,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,e.d&&e.d.sid&&(e.d=t.globalData.slotManager.getProp(e.d)),this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}zt.prototype.defaultBoxWidth=[0,0],zt.prototype.copyData=function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},zt.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},zt.prototype.searchProperty=function(){return this.searchKeyframes()},zt.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},zt.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},zt.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,s=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var a,l=this.effectsSequence.length,o=t||this.data.d.k[this.keysIndex].s;for(a=0;a<l;a+=1)s!==this.keysIndex?o=this.effectsSequence[a](o,o.t):o=this.effectsSequence[a](this.currentData,o.t);e!==o&&this.setCurrentData(o),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},zt.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,s=0,a=t.length;s<=a-1&&!(s===a-1||t[s+1].t>e);)s+=1;return this.keysIndex!==s&&(this.keysIndex=s),this.data.d.k[this.keysIndex].s},zt.prototype.buildFinalText=function(t){for(var e=[],s=0,a=t.length,l,o,p=!1,_=!1,f="";s<a;)p=_,_=!1,l=t.charCodeAt(s),f=t.charAt(s),qe.isCombinedCharacter(l)?p=!0:l>=55296&&l<=56319?qe.isRegionalFlag(t,s)?f=t.substr(s,14):(o=t.charCodeAt(s+1),o>=56320&&o<=57343&&(qe.isModifier(l,o)?(f=t.substr(s,2),p=!0):qe.isFlagEmoji(t.substr(s,4))?f=t.substr(s,4):f=t.substr(s,2))):l>56319?(o=t.charCodeAt(s+1),qe.isVariationSelector(l)&&(p=!0)):qe.isZeroWidthJoiner(l)&&(p=!0,_=!0),p?(e[e.length-1]+=f,p=!1):e.push(f),s+=f.length;return e},zt.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,s=this.data,a=[],l,o,p,_=0,f,x=s.m.g,A=0,O=0,v=0,E=[],C=0,P=0,L,S,w=e.getFontByName(t.f),m,y=0,k=Qr(w);t.fWeight=k.weight,t.fStyle=k.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),o=t.finalText.length,t.finalLineHeight=t.lh;var M=t.tr/1e3*t.finalSize,z;if(t.sz)for(var D=!0,j=t.sz[0],et=t.sz[1],K,H;D;){H=this.buildFinalText(t.t),K=0,C=0,o=H.length,M=t.tr/1e3*t.finalSize;var at=-1;for(l=0;l<o;l+=1)z=H[l].charCodeAt(0),p=!1,H[l]===" "?at=l:(z===13||z===3)&&(C=0,p=!0,K+=t.finalLineHeight||t.finalSize*1.2),e.chars?(m=e.getCharData(H[l],w.fStyle,w.fFamily),y=p?0:m.w*t.finalSize/100):y=e.measureText(H[l],t.f,t.finalSize),C+y>j&&H[l]!==" "?(at===-1?o+=1:l=at,K+=t.finalLineHeight||t.finalSize*1.2,H.splice(l,at===l?1:0,"\r"),at=-1,C=0):(C+=y,C+=M);K+=w.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&et<K?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=H,o=t.finalText.length,D=!1)}C=-M,y=0;var G=0,N;for(l=0;l<o;l+=1)if(p=!1,N=t.finalText[l],z=N.charCodeAt(0),z===13||z===3?(G=0,E.push(C),P=C>P?C:P,C=-2*M,f="",p=!0,v+=1):f=N,e.chars?(m=e.getCharData(N,w.fStyle,e.getFontByName(t.f).fFamily),y=p?0:m.w*t.finalSize/100):y=e.measureText(f,t.f,t.finalSize),N===" "?G+=y+M:(C+=y+M+G,G=0),a.push({l:y,an:y,add:A,n:p,anIndexes:[],val:f,line:v,animatorJustifyOffset:0}),x==2){if(A+=y,f===""||f===" "||l===o-1){for((f===""||f===" ")&&(A-=y);O<=l;)a[O].an=A,a[O].ind=_,a[O].extra=y,O+=1;_+=1,A=0}}else if(x==3){if(A+=y,f===""||l===o-1){for(f===""&&(A-=y);O<=l;)a[O].an=A,a[O].ind=_,a[O].extra=y,O+=1;A=0,_+=1}}else a[_].ind=_,a[_].extra=0,_+=1;if(t.l=a,P=C>P?C:P,E.push(C),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=P,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=E;var b=s.a,T,d;S=b.length;var u,R,F=[];for(L=0;L<S;L+=1){for(T=b[L],T.a.sc&&(t.strokeColorAnim=!0),T.a.sw&&(t.strokeWidthAnim=!0),(T.a.fc||T.a.fh||T.a.fs||T.a.fb)&&(t.fillColorAnim=!0),R=0,u=T.s.b,l=0;l<o;l+=1)d=a[l],d.anIndexes[L]=R,(u==1&&d.val!==""||u==2&&d.val!==""&&d.val!==" "||u==3&&(d.n||d.val==" "||l==o-1)||u==4&&(d.n||l==o-1))&&(T.s.rn===1&&F.push(R),R+=1);s.a[L].s.totalChars=R;var q=-1,tt;if(T.s.rn===1)for(l=0;l<o;l+=1)d=a[l],q!=d.anIndexes[L]&&(q=d.anIndexes[L],tt=F.splice(Math.floor(Math.random()*F.length),1)[0]),d.anIndexes[L]=tt}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=w.ascent*t.finalSize/100},zt.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var s=this.copyData({},this.data.d.k[e].s);s=this.copyData(s,t),this.data.d.k[e].s=s,this.recalculate(e),this.setCurrentData(s),this.elem.addDynamicProperty(this)},zt.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},zt.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},zt.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var _o=(function(){var t=Math.max,e=Math.min,s=Math.floor;function a(o,p){this._currentTextLength=-1,this.k=!1,this.data=p,this.elem=o,this.comp=o.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(o),this.s=W.getProp(o,p.s||{k:0},0,0,this),"e"in p?this.e=W.getProp(o,p.e,0,0,this):this.e={v:100},this.o=W.getProp(o,p.o||{k:0},0,0,this),this.xe=W.getProp(o,p.xe||{k:0},0,0,this),this.ne=W.getProp(o,p.ne||{k:0},0,0,this),this.sm=W.getProp(o,p.sm||{k:100},0,0,this),this.a=W.getProp(o,p.a,0,.01,this),this.dynamicProperties.length||this.getValue()}a.prototype={getMult:function(p){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var _=0,f=0,x=1,A=1;this.ne.v>0?_=this.ne.v/100:f=-this.ne.v/100,this.xe.v>0?x=1-this.xe.v/100:A=1+this.xe.v/100;var O=ki.getBezierEasing(_,f,x,A).get,v=0,E=this.finalS,C=this.finalE,P=this.data.sh;if(P===2)C===E?v=p>=C?1:0:v=t(0,e(.5/(C-E)+(p-E)/(C-E),1)),v=O(v);else if(P===3)C===E?v=p>=C?0:1:v=1-t(0,e(.5/(C-E)+(p-E)/(C-E),1)),v=O(v);else if(P===4)C===E?v=0:(v=t(0,e(.5/(C-E)+(p-E)/(C-E),1)),v<.5?v*=2:v=1-2*(v-.5)),v=O(v);else if(P===5){if(C===E)v=0;else{var L=C-E;p=e(t(0,p+.5-E),C-E);var S=-L/2+p,w=L/2;v=Math.sqrt(1-S*S/(w*w))}v=O(v)}else P===6?(C===E?v=0:(p=e(t(0,p+.5-E),C-E),v=(1+Math.cos(Math.PI+Math.PI*2*p/(C-E)))/2),v=O(v)):(p>=s(E)&&(p-E<0?v=t(0,e(e(C,1)-(E-p),1)):v=t(0,e(C-p,1))),v=O(v));if(this.sm.v!==100){var m=this.sm.v*.01;m===0&&(m=1e-8);var y=.5-m*.5;v<y?v=0:(v=(v-y)/m,v>1&&(v=1))}return v*this.a.v},getValue:function(p){this.iterateDynamicProperties(),this._mdf=p||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,p&&this.data.r===2&&(this.e.v=this._currentTextLength);var _=this.data.r===2?1:100/this.data.totalChars,f=this.o.v/_,x=this.s.v/_+f,A=this.e.v/_+f;if(x>A){var O=x;x=A,A=O}this.finalS=x,this.finalE=A}},B([$t],a);function l(o,p,_){return new a(o,p,_)}return{getTextSelectorProp:l}})();function yo(t,e,s){var a={propType:!1},l=W.getProp,o=e.a;this.a={r:o.r?l(t,o.r,0,mt,s):a,rx:o.rx?l(t,o.rx,0,mt,s):a,ry:o.ry?l(t,o.ry,0,mt,s):a,sk:o.sk?l(t,o.sk,0,mt,s):a,sa:o.sa?l(t,o.sa,0,mt,s):a,s:o.s?l(t,o.s,1,.01,s):a,a:o.a?l(t,o.a,1,0,s):a,o:o.o?l(t,o.o,0,.01,s):a,p:o.p?l(t,o.p,1,0,s):a,sw:o.sw?l(t,o.sw,0,0,s):a,sc:o.sc?l(t,o.sc,1,0,s):a,fc:o.fc?l(t,o.fc,1,0,s):a,fh:o.fh?l(t,o.fh,0,0,s):a,fs:o.fs?l(t,o.fs,0,.01,s):a,fb:o.fb?l(t,o.fb,0,.01,s):a,t:o.t?l(t,o.t,0,0,s):a},this.s=_o.getTextSelectorProp(t,e.s,s),this.s.t=e.s.t}function Ye(t,e,s){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=s,this._animatorsData=ht(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(s)}Ye.prototype.searchProperties=function(){var t,e=this._textData.a.length,s,a=W.getProp;for(t=0;t<e;t+=1)s=this._textData.a[t],this._animatorsData[t]=new yo(this._elem,s,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:a(this._elem,this._textData.p.a,0,0,this),f:a(this._elem,this._textData.p.f,0,0,this),l:a(this._elem,this._textData.p.l,0,0,this),r:a(this._elem,this._textData.p.r,0,0,this),p:a(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=a(this._elem,this._textData.m.a,1,0,this)},Ye.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var s=this._moreOptions.alignment.v,a=this._animatorsData,l=this._textData,o=this.mHelper,p=this._renderType,_=this.renderedLetters.length,f,x,A,O,v=t.l,E,C,P,L,S,w,m,y,k,M,z,D,j,et,K;if(this._hasMaskedPath){if(K=this._pathData.m,!this._pathData.n||this._pathData._mdf){var H=K.v;this._pathData.r.v&&(H=H.reverse()),E={tLength:0,segments:[]},O=H._length-1;var at;for(D=0,A=0;A<O;A+=1)at=se.buildBezierData(H.v[A],H.v[A+1],[H.o[A][0]-H.v[A][0],H.o[A][1]-H.v[A][1]],[H.i[A+1][0]-H.v[A+1][0],H.i[A+1][1]-H.v[A+1][1]]),E.tLength+=at.segmentLength,E.segments.push(at),D+=at.segmentLength;A=O,K.v.c&&(at=se.buildBezierData(H.v[A],H.v[0],[H.o[A][0]-H.v[A][0],H.o[A][1]-H.v[A][1]],[H.i[0][0]-H.v[0][0],H.i[0][1]-H.v[0][1]]),E.tLength+=at.segmentLength,E.segments.push(at),D+=at.segmentLength),this._pathData.pi=E}if(E=this._pathData.pi,C=this._pathData.f.v,m=0,w=1,L=0,S=!0,M=E.segments,C<0&&K.v.c)for(E.tLength<Math.abs(C)&&(C=-Math.abs(C)%E.tLength),m=M.length-1,k=M[m].points,w=k.length-1;C<0;)C+=k[w].partialLength,w-=1,w<0&&(m-=1,k=M[m].points,w=k.length-1);k=M[m].points,y=k[w-1],P=k[w],z=P.partialLength}O=v.length,f=0,x=0;var G=t.finalSize*1.2*.714,N=!0,b,T,d,u,R;u=a.length;var F,q=-1,tt,it,ct,dt=C,bt=m,Dt=w,ae=-1,Vt,At,Nt,ut,Y,me,Me,ge,ne="",ve=this.defaultPropsArray,_e;if(t.j===2||t.j===1){var Ut=0,Fe=0,Ie=t.j===2?-.5:-1,Zt=0,Le=!0;for(A=0;A<O;A+=1)if(v[A].n){for(Ut&&(Ut+=Fe);Zt<A;)v[Zt].animatorJustifyOffset=Ut,Zt+=1;Ut=0,Le=!0}else{for(d=0;d<u;d+=1)b=a[d].a,b.t.propType&&(Le&&t.j===2&&(Fe+=b.t.v*Ie),T=a[d].s,F=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),F.length?Ut+=b.t.v*F[0]*Ie:Ut+=b.t.v*F*Ie);Le=!1}for(Ut&&(Ut+=Fe);Zt<A;)v[Zt].animatorJustifyOffset=Ut,Zt+=1}for(A=0;A<O;A+=1){if(o.reset(),Vt=1,v[A].n)f=0,x+=t.yOffset,x+=N?1:0,C=dt,N=!1,this._hasMaskedPath&&(m=bt,w=Dt,k=M[m].points,y=k[w-1],P=k[w],z=P.partialLength,L=0),ne="",ge="",me="",_e="",ve=this.defaultPropsArray;else{if(this._hasMaskedPath){if(ae!==v[A].line){switch(t.j){case 1:C+=D-t.lineWidths[v[A].line];break;case 2:C+=(D-t.lineWidths[v[A].line])/2;break;default:break}ae=v[A].line}q!==v[A].ind&&(v[q]&&(C+=v[q].extra),C+=v[A].an/2,q=v[A].ind),C+=s[0]*v[A].an*.005;var Jt=0;for(d=0;d<u;d+=1)b=a[d].a,b.p.propType&&(T=a[d].s,F=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),F.length?Jt+=b.p.v[0]*F[0]:Jt+=b.p.v[0]*F),b.a.propType&&(T=a[d].s,F=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),F.length?Jt+=b.a.v[0]*F[0]:Jt+=b.a.v[0]*F);for(S=!0,this._pathData.a.v&&(C=v[0].an*.5+(D-this._pathData.f.v-v[0].an*.5-v[v.length-1].an*.5)*q/(O-1),C+=this._pathData.f.v);S;)L+z>=C+Jt||!k?(j=(C+Jt-L)/P.partialLength,it=y.point[0]+(P.point[0]-y.point[0])*j,ct=y.point[1]+(P.point[1]-y.point[1])*j,o.translate(-s[0]*v[A].an*.005,-(s[1]*G)*.01),S=!1):k&&(L+=P.partialLength,w+=1,w>=k.length&&(w=0,m+=1,M[m]?k=M[m].points:K.v.c?(w=0,m=0,k=M[m].points):(L-=P.partialLength,k=null)),k&&(y=P,P=k[w],z=P.partialLength));tt=v[A].an/2-v[A].add,o.translate(-tt,0,0)}else tt=v[A].an/2-v[A].add,o.translate(-tt,0,0),o.translate(-s[0]*v[A].an*.005,-s[1]*G*.01,0);for(d=0;d<u;d+=1)b=a[d].a,b.t.propType&&(T=a[d].s,F=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),(f!==0||t.j!==0)&&(this._hasMaskedPath?F.length?C+=b.t.v*F[0]:C+=b.t.v*F:F.length?f+=b.t.v*F[0]:f+=b.t.v*F));for(t.strokeWidthAnim&&(Nt=t.sw||0),t.strokeColorAnim&&(t.sc?At=[t.sc[0],t.sc[1],t.sc[2]]:At=[0,0,0]),t.fillColorAnim&&t.fc&&(ut=[t.fc[0],t.fc[1],t.fc[2]]),d=0;d<u;d+=1)b=a[d].a,b.a.propType&&(T=a[d].s,F=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),F.length?o.translate(-b.a.v[0]*F[0],-b.a.v[1]*F[1],b.a.v[2]*F[2]):o.translate(-b.a.v[0]*F,-b.a.v[1]*F,b.a.v[2]*F));for(d=0;d<u;d+=1)b=a[d].a,b.s.propType&&(T=a[d].s,F=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),F.length?o.scale(1+(b.s.v[0]-1)*F[0],1+(b.s.v[1]-1)*F[1],1):o.scale(1+(b.s.v[0]-1)*F,1+(b.s.v[1]-1)*F,1));for(d=0;d<u;d+=1){if(b=a[d].a,T=a[d].s,F=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),b.sk.propType&&(F.length?o.skewFromAxis(-b.sk.v*F[0],b.sa.v*F[1]):o.skewFromAxis(-b.sk.v*F,b.sa.v*F)),b.r.propType&&(F.length?o.rotateZ(-b.r.v*F[2]):o.rotateZ(-b.r.v*F)),b.ry.propType&&(F.length?o.rotateY(b.ry.v*F[1]):o.rotateY(b.ry.v*F)),b.rx.propType&&(F.length?o.rotateX(b.rx.v*F[0]):o.rotateX(b.rx.v*F)),b.o.propType&&(F.length?Vt+=(b.o.v*F[0]-Vt)*F[0]:Vt+=(b.o.v*F-Vt)*F),t.strokeWidthAnim&&b.sw.propType&&(F.length?Nt+=b.sw.v*F[0]:Nt+=b.sw.v*F),t.strokeColorAnim&&b.sc.propType)for(Y=0;Y<3;Y+=1)F.length?At[Y]+=(b.sc.v[Y]-At[Y])*F[0]:At[Y]+=(b.sc.v[Y]-At[Y])*F;if(t.fillColorAnim&&t.fc){if(b.fc.propType)for(Y=0;Y<3;Y+=1)F.length?ut[Y]+=(b.fc.v[Y]-ut[Y])*F[0]:ut[Y]+=(b.fc.v[Y]-ut[Y])*F;b.fh.propType&&(F.length?ut=Ar(ut,b.fh.v*F[0]):ut=Ar(ut,b.fh.v*F)),b.fs.propType&&(F.length?ut=Sr(ut,b.fs.v*F[0]):ut=Sr(ut,b.fs.v*F)),b.fb.propType&&(F.length?ut=$r(ut,b.fb.v*F[0]):ut=$r(ut,b.fb.v*F))}}for(d=0;d<u;d+=1)b=a[d].a,b.p.propType&&(T=a[d].s,F=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),this._hasMaskedPath?F.length?o.translate(0,b.p.v[1]*F[0],-b.p.v[2]*F[1]):o.translate(0,b.p.v[1]*F,-b.p.v[2]*F):F.length?o.translate(b.p.v[0]*F[0],b.p.v[1]*F[1],-b.p.v[2]*F[2]):o.translate(b.p.v[0]*F,b.p.v[1]*F,-b.p.v[2]*F));if(t.strokeWidthAnim&&(me=Nt<0?0:Nt),t.strokeColorAnim&&(Me="rgb("+Math.round(At[0]*255)+","+Math.round(At[1]*255)+","+Math.round(At[2]*255)+")"),t.fillColorAnim&&t.fc&&(ge="rgb("+Math.round(ut[0]*255)+","+Math.round(ut[1]*255)+","+Math.round(ut[2]*255)+")"),this._hasMaskedPath){if(o.translate(0,-t.ls),o.translate(0,s[1]*G*.01+x,0),this._pathData.p.v){et=(P.point[1]-y.point[1])/(P.point[0]-y.point[0]);var Ke=Math.atan(et)*180/Math.PI;P.point[0]<y.point[0]&&(Ke+=180),o.rotate(-Ke*Math.PI/180)}o.translate(it,ct,0),C-=s[0]*v[A].an*.005,v[A+1]&&q!==v[A+1].ind&&(C+=v[A].an/2,C+=t.tr*.001*t.finalSize)}else{switch(o.translate(f,x,0),t.ps&&o.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:o.translate(v[A].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[v[A].line]),0,0);break;case 2:o.translate(v[A].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[v[A].line])/2,0,0);break;default:break}o.translate(0,-t.ls),o.translate(tt,0,0),o.translate(s[0]*v[A].an*.005,s[1]*G*.01,0),f+=v[A].l+t.tr*.001*t.finalSize}p==="html"?ne=o.toCSS():p==="svg"?ne=o.to2dCSS():ve=[o.props[0],o.props[1],o.props[2],o.props[3],o.props[4],o.props[5],o.props[6],o.props[7],o.props[8],o.props[9],o.props[10],o.props[11],o.props[12],o.props[13],o.props[14],o.props[15]],_e=Vt}_<=A?(R=new Qs(_e,me,Me,ge,ne,ve),this.renderedLetters.push(R),_+=1,this.lettersChangedFlag=!0):(R=this.renderedLetters[A],this.lettersChangedFlag=R.update(_e,me,Me,ge,ne,ve)||this.lettersChangedFlag)}}},Ye.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},Ye.prototype.mHelper=new Tt,Ye.prototype.defaultPropsArray=[],B([$t],Ye);function Gt(){}Gt.prototype.initElement=function(t,e,s){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,s),this.textProperty=new zt(this,t.t,this.dynamicProperties),this.textAnimator=new Ye(t.t,this.renderType,this),this.initTransform(t,e,s),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Gt.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},Gt.prototype.createPathShape=function(t,e){var s,a=e.length,l,o="";for(s=0;s<a;s+=1)e[s].ty==="sh"&&(l=e[s].ks.k,o+=fa(l,l.i.length,!0,t));return o},Gt.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},Gt.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},Gt.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},Gt.prototype.applyTextPropertiesToMatrix=function(t,e,s,a,l){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s])/2,0,0);break;default:break}e.translate(a,l,0)},Gt.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},Gt.prototype.emptyProp=new Qs,Gt.prototype.destroy=function(){},Gt.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var bo={shapes:[]};function fe(t,e,s){this.textSpans=[],this.renderType="svg",this.initElement(t,e,s)}B([Ee,hi,Mi,ci,Pe,Fi,Gt],fe),fe.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=rt("text"))},fe.prototype.buildTextContents=function(t){for(var e=0,s=t.length,a=[],l="";e<s;)t[e]==="\r"||t[e]===""?(a.push(l),l=""):l+=t[e],e+=1;return a.push(l),a},fe.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var s=t.shapes[0];if(s.it){var a=s.it[s.it.length-1];a.s&&(a.s.k[0]=e,a.s.k[1]=e)}}return t},fe.prototype.buildNewText=function(){this.addDynamicProperty(this);var t,e,s=this.textProperty.currentData;this.renderedLetters=ht(s?s.l.length:0),s.fc?this.layerElement.setAttribute("fill",this.buildColor(s.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),s.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(s.sc)),this.layerElement.setAttribute("stroke-width",s.sw)),this.layerElement.setAttribute("font-size",s.finalSize);var a=this.globalData.fontManager.getFontByName(s.f);if(a.fClass)this.layerElement.setAttribute("class",a.fClass);else{this.layerElement.setAttribute("font-family",a.fFamily);var l=s.fWeight,o=s.fStyle;this.layerElement.setAttribute("font-style",o),this.layerElement.setAttribute("font-weight",l)}this.layerElement.setAttribute("aria-label",s.t);var p=s.l||[],_=!!this.globalData.fontManager.chars;e=p.length;var f,x=this.mHelper,A="",O=this.data.singleShape,v=0,E=0,C=!0,P=s.tr*.001*s.finalSize;if(O&&!_&&!s.sz){var L=this.textContainer,S="start";switch(s.j){case 1:S="end";break;case 2:S="middle";break;default:S="start";break}L.setAttribute("text-anchor",S),L.setAttribute("letter-spacing",P);var w=this.buildTextContents(s.finalText);for(e=w.length,E=s.ps?s.ps[1]+s.ascent:0,t=0;t<e;t+=1)f=this.textSpans[t].span||rt("tspan"),f.textContent=w[t],f.setAttribute("x",0),f.setAttribute("y",E),f.style.display="inherit",L.appendChild(f),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=f,E+=s.finalLineHeight;this.layerElement.appendChild(L)}else{var m=this.textSpans.length,y;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!_||!O||t===0){if(f=m>t?this.textSpans[t].span:rt(_?"g":"text"),m<=t){if(f.setAttribute("stroke-linecap","butt"),f.setAttribute("stroke-linejoin","round"),f.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=f,_){var k=rt("g");f.appendChild(k),this.textSpans[t].childSpan=k}this.textSpans[t].span=f,this.layerElement.appendChild(f)}f.style.display="inherit"}if(x.reset(),O&&(p[t].n&&(v=-P,E+=s.yOffset,E+=C?1:0,C=!1),this.applyTextPropertiesToMatrix(s,x,p[t].line,v,E),v+=p[t].l||0,v+=P),_){y=this.globalData.fontManager.getCharData(s.finalText[t],a.fStyle,this.globalData.fontManager.getFontByName(s.f).fFamily);var M;if(y.t===1)M=new zi(y.data,this.globalData,this);else{var z=bo;y.data&&y.data.shapes&&(z=this.buildShapeData(y.data,s.finalSize)),M=new _t(z,this.globalData,this)}if(this.textSpans[t].glyph){var D=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(D.layerElement),D.destroy()}this.textSpans[t].glyph=M,M._debug=!0,M.prepareFrame(0),M.renderFrame(),this.textSpans[t].childSpan.appendChild(M.layerElement),y.t===1&&this.textSpans[t].childSpan.setAttribute("transform","scale("+s.finalSize/100+","+s.finalSize/100+")")}else O&&f.setAttribute("transform","translate("+x.props[12]+","+x.props[13]+")"),f.textContent=p[t].val,f.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}O&&f&&f.setAttribute("d",A)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},fe.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},fe.prototype.getValue=function(){var t,e=this.textSpans.length,s;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<e;t+=1)s=this.textSpans[t].glyph,s&&(s.prepareFrame(this.comp.renderedFrame-this.data.st),s._mdf&&(this._mdf=!0))},fe.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,s=this.textAnimator.renderedLetters,a=this.textProperty.currentData.l;e=a.length;var l,o,p;for(t=0;t<e;t+=1)a[t].n||(l=s[t],o=this.textSpans[t].span,p=this.textSpans[t].glyph,p&&p.renderFrame(),l._mdf.m&&o.setAttribute("transform",l.m),l._mdf.o&&o.setAttribute("opacity",l.o),l._mdf.sw&&o.setAttribute("stroke-width",l.sw),l._mdf.sc&&o.setAttribute("stroke",l.sc),l._mdf.fc&&o.setAttribute("fill",l.fc))}};function tr(t,e,s){this.initElement(t,e,s)}B([Ii],tr),tr.prototype.createContent=function(){var t=rt("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function Ce(t,e,s){this.initFrame(),this.initBaseData(t,e,s),this.initFrame(),this.initTransform(t,e,s),this.initHierarchy()}Ce.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},Ce.prototype.renderFrame=function(){},Ce.prototype.getBaseElement=function(){return null},Ce.prototype.destroy=function(){},Ce.prototype.sourceRectAtTime=function(){},Ce.prototype.hide=function(){},B([Ee,hi,ci,Pe],Ce);function wt(){}B([Ct],wt),wt.prototype.createNull=function(t){return new Ce(t,this.globalData,this)},wt.prototype.createShape=function(t){return new _t(t,this.globalData,this)},wt.prototype.createText=function(t){return new fe(t,this.globalData,this)},wt.prototype.createImage=function(t){return new Ii(t,this.globalData,this)},wt.prototype.createSolid=function(t){return new tr(t,this.globalData,this)},wt.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var s=rt("clipPath"),a=rt("rect");a.setAttribute("width",t.w),a.setAttribute("height",t.h),a.setAttribute("x",0),a.setAttribute("y",0);var l=Ot();s.setAttribute("id",l),s.appendChild(a),this.layerElement.setAttribute("clip-path","url("+V()+"#"+l+")"),e.appendChild(s),this.layers=t.layers,this.elements=ht(t.layers.length)},wt.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},wt.prototype.updateContainerSize=function(){},wt.prototype.findIndexByInd=function(t){var e=0,s=this.layers.length;for(e=0;e<s;e+=1)if(this.layers[e].ind===t)return e;return-1},wt.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var s=this.createItem(this.layers[t]);if(e[t]=s,Xi()&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(s),s.initExpressions()),this.appendElementInPos(s,t),this.layers[t].tt){var a="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(a===-1)return;if(!this.elements[a]||this.elements[a]===!0)this.buildItem(a),this.addPendingElement(s);else{var l=e[a],o=l.getMatte(this.layers[t].tt);s.setMatte(o)}}}},wt.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,s=this.elements.length;e<s;){if(this.elements[e]===t){var a="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,l=this.elements[a],o=l.getMatte(this.layers[e].tt);t.setMatte(o);break}e+=1}}},wt.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=s-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<s;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},wt.prototype.appendElementInPos=function(t,e){var s=t.getBaseElement();if(s){for(var a=0,l;a<e;)this.elements[a]&&this.elements[a]!==!0&&this.elements[a].getBaseElement()&&(l=this.elements[a].getBaseElement()),a+=1;l?this.layerElement.insertBefore(s,l):this.layerElement.appendChild(s)}},wt.prototype.hide=function(){this.layerElement.style.display="none"},wt.prototype.show=function(){this.layerElement.style.display="block"};function ue(){}B([Ee,hi,ci,Pe,Fi],ue),ue.prototype.initElement=function(t,e,s){this.initFrame(),this.initBaseData(t,e,s),this.initTransform(t,e,s),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},ue.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var s,a=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),s=a-1;s>=0;s-=1)(this.completeLayers||this.elements[s])&&(this.elements[s].prepareFrame(this.renderedFrame-this.layers[s].st),this.elements[s]._mdf&&(this._mdf=!0))}},ue.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ue.prototype.setElements=function(t){this.elements=t},ue.prototype.getElements=function(){return this.elements},ue.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ue.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function zi(t,e,s){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?ht(this.layers.length):[],this.initElement(t,e,s),this.tm=t.tm?W.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}B([wt,ue,Mi],zi),zi.prototype.createComp=function(t){return new zi(t,this.globalData,this)};function er(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=rt("svg");var s="";if(e&&e.title){var a=rt("title"),l=Ot();a.setAttribute("id",l),a.textContent=e.title,this.svgElement.appendChild(a),s+=l}if(e&&e.description){var o=rt("desc"),p=Ot();o.setAttribute("id",p),o.textContent=e.description,this.svgElement.appendChild(o),s+=" "+p}s&&this.svgElement.setAttribute("aria-labelledby",s);var _=rt("defs");this.svgElement.appendChild(_);var f=rt("g");this.svgElement.appendChild(f),this.layerElement=f,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:_,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}return B([wt],er),er.prototype.createComp=function(t){return new zi(t,this.globalData,this)},Tn("svg",er),$e.registerModifier("tm",Xt),$e.registerModifier("pb",Si),$e.registerModifier("rp",re),$e.registerModifier("rd",$i),$e.registerModifier("zz",Ei),$e.registerModifier("op",Pi),ft}))});var Mt="ecoflow-energy-card",Qt="ecoflow-house-card",te="ecoflow-space-card",ze="ecoflow_iot",ye="/ecoflow_iot";function be(c,i){return c&&(i?.hassUrl?i.hassUrl(c):c)}var us=globalThis,ms=us.ShadowRoot&&(us.ShadyCSS===void 0||us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ir=Symbol(),ma=new WeakMap,Oi=class{constructor(i,r,n){if(this._$cssResult$=!0,n!==ir)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=r}get styleSheet(){let i=this.o,r=this.t;if(ms&&i===void 0){let n=r!==void 0&&r.length===1;n&&(i=ma.get(r)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),n&&ma.set(r,i))}return i}toString(){return this.cssText}},ga=c=>new Oi(typeof c=="string"?c:c+"",void 0,ir),jt=(c,...i)=>{let r=c.length===1?c[0]:i.reduce((n,h,g)=>n+($=>{if($._$cssResult$===!0)return $.cssText;if(typeof $=="number")return $;throw Error("Value passed to 'css' function must be a 'css' function result: "+$+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(h)+c[g+1],c[0]);return new Oi(r,c,ir)},va=(c,i)=>{if(ms)c.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of i){let n=document.createElement("style"),h=us.litNonce;h!==void 0&&n.setAttribute("nonce",h),n.textContent=r.cssText,c.appendChild(n)}},sr=ms?c=>c:c=>c instanceof CSSStyleSheet?(i=>{let r="";for(let n of i.cssRules)r+=n.cssText;return ga(r)})(c):c;var{is:To,defineProperty:Co,getOwnPropertyDescriptor:Mo,getOwnPropertyNames:Fo,getOwnPropertySymbols:Io,getPrototypeOf:Lo}=Object,gs=globalThis,_a=gs.trustedTypes,zo=_a?_a.emptyScript:"",Oo=gs.reactiveElementPolyfillSupport,Ri=(c,i)=>c,rr={toAttribute(c,i){switch(i){case Boolean:c=c?zo:null;break;case Object:case Array:c=c==null?c:JSON.stringify(c)}return c},fromAttribute(c,i){let r=c;switch(i){case Boolean:r=c!==null;break;case Number:r=c===null?null:Number(c);break;case Object:case Array:try{r=JSON.parse(c)}catch{r=null}}return r}},ba=(c,i)=>!To(c,i),ya={attribute:!0,type:String,converter:rr,reflect:!1,useDefault:!1,hasChanged:ba};Symbol.metadata??=Symbol("metadata"),gs.litPropertyMetadata??=new WeakMap;var we=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,r=ya){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(i,r),!r.noAccessor){let n=Symbol(),h=this.getPropertyDescriptor(i,n,r);h!==void 0&&Co(this.prototype,i,h)}}static getPropertyDescriptor(i,r,n){let{get:h,set:g}=Mo(this.prototype,i)??{get(){return this[r]},set($){this[r]=$}};return{get:h,set($){let V=h?.call(this);g?.call(this,$),this.requestUpdate(i,V,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??ya}static _$Ei(){if(this.hasOwnProperty(Ri("elementProperties")))return;let i=Lo(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Ri("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ri("properties"))){let r=this.properties,n=[...Fo(r),...Io(r)];for(let h of n)this.createProperty(h,r[h])}let i=this[Symbol.metadata];if(i!==null){let r=litPropertyMetadata.get(i);if(r!==void 0)for(let[n,h]of r)this.elementProperties.set(n,h)}this._$Eh=new Map;for(let[r,n]of this.elementProperties){let h=this._$Eu(r,n);h!==void 0&&this._$Eh.set(h,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let r=[];if(Array.isArray(i)){let n=new Set(i.flat(1/0).reverse());for(let h of n)r.unshift(sr(h))}else i!==void 0&&r.push(sr(i));return r}static _$Eu(i,r){let n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(i=>i(this))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){let i=new Map,r=this.constructor.elementProperties;for(let n of r.keys())this.hasOwnProperty(n)&&(i.set(n,this[n]),delete this[n]);i.size>0&&(this._$Ep=i)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return va(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(i=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach(i=>i.hostDisconnected?.())}attributeChangedCallback(i,r,n){this._$AK(i,n)}_$ET(i,r){let n=this.constructor.elementProperties.get(i),h=this.constructor._$Eu(i,n);if(h!==void 0&&n.reflect===!0){let g=(n.converter?.toAttribute!==void 0?n.converter:rr).toAttribute(r,n.type);this._$Em=i,g==null?this.removeAttribute(h):this.setAttribute(h,g),this._$Em=null}}_$AK(i,r){let n=this.constructor,h=n._$Eh.get(i);if(h!==void 0&&this._$Em!==h){let g=n.getPropertyOptions(h),$=typeof g.converter=="function"?{fromAttribute:g.converter}:g.converter?.fromAttribute!==void 0?g.converter:rr;this._$Em=h;let V=$.fromAttribute(r,g.type);this[h]=V??this._$Ej?.get(h)??V,this._$Em=null}}requestUpdate(i,r,n,h=!1,g){if(i!==void 0){let $=this.constructor;if(h===!1&&(g=this[i]),n??=$.getPropertyOptions(i),!((n.hasChanged??ba)(g,r)||n.useDefault&&n.reflect&&g===this._$Ej?.get(i)&&!this.hasAttribute($._$Eu(i,n))))return;this.C(i,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,r,{useDefault:n,reflect:h,wrapped:g},$){n&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,$??r??this[i]),g!==!0||$!==void 0)||(this._$AL.has(i)||(this.hasUpdated||n||(r=void 0),this._$AL.set(i,r)),h===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[h,g]of this._$Ep)this[h]=g;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[h,g]of n){let{wrapped:$}=g,V=this[h];$!==!0||this._$AL.has(h)||V===void 0||this.C(h,void 0,g,V)}}let i=!1,r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw i=!1,this._$EM(),n}i&&this._$AE(r)}willUpdate(i){}_$AE(i){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(i){}firstUpdated(i){}};we.elementStyles=[],we.shadowRootOptions={mode:"open"},we[Ri("elementProperties")]=new Map,we[Ri("finalized")]=new Map,Oo?.({ReactiveElement:we}),(gs.reactiveElementVersions??=[]).push("2.1.2");var dr=globalThis,wa=c=>c,vs=dr.trustedTypes,xa=vs?vs.createPolicy("lit-html",{createHTML:c=>c}):void 0,Pa="$lit$",Oe=`lit$${Math.random().toFixed(9).slice(2)}$`,Ta="?"+Oe,Ro=`<${Ta}>`,Je=document,Vi=()=>Je.createComment(""),Ui=c=>c===null||typeof c!="object"&&typeof c!="function",pr=Array.isArray,Do=c=>pr(c)||typeof c?.[Symbol.iterator]=="function",ar=`[ 	
\f\r]`,Di=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ka=/-->/g,Sa=/>/g,Xe=RegExp(`>|${ar}(?:([^\\s"'>=/]+)(${ar}*=${ar}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$a=/'/g,Aa=/"/g,Ca=/^(?:script|style|textarea|title)$/i,fr=c=>(i,...r)=>({_$litType$:c,strings:i,values:r}),I=fr(1),Ht=fr(2),Ll=fr(3),Qe=Symbol.for("lit-noChange"),xt=Symbol.for("lit-nothing"),Ea=new WeakMap,Ze=Je.createTreeWalker(Je,129);function Ma(c,i){if(!pr(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return xa!==void 0?xa.createHTML(i):i}var Vo=(c,i)=>{let r=c.length-1,n=[],h,g=i===2?"<svg>":i===3?"<math>":"",$=Di;for(let V=0;V<r;V++){let U=c[V],B,Z,X=-1,nt=0;for(;nt<U.length&&($.lastIndex=nt,Z=$.exec(U),Z!==null);)nt=$.lastIndex,$===Di?Z[1]==="!--"?$=ka:Z[1]!==void 0?$=Sa:Z[2]!==void 0?(Ca.test(Z[2])&&(h=RegExp("</"+Z[2],"g")),$=Xe):Z[3]!==void 0&&($=Xe):$===Xe?Z[0]===">"?($=h??Di,X=-1):Z[1]===void 0?X=-2:(X=$.lastIndex-Z[2].length,B=Z[1],$=Z[3]===void 0?Xe:Z[3]==='"'?Aa:$a):$===Aa||$===$a?$=Xe:$===ka||$===Sa?$=Di:($=Xe,h=void 0);let ot=$===Xe&&c[V+1].startsWith("/>")?" ":"";g+=$===Di?U+Ro:X>=0?(n.push(B),U.slice(0,X)+Pa+U.slice(X)+Oe+ot):U+Oe+(X===-2?V:ot)}return[Ma(c,g+(c[r]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),n]},Bi=class c{constructor({strings:i,_$litType$:r},n){let h;this.parts=[];let g=0,$=0,V=i.length-1,U=this.parts,[B,Z]=Vo(i,r);if(this.el=c.createElement(B,n),Ze.currentNode=this.el.content,r===2||r===3){let X=this.el.content.firstChild;X.replaceWith(...X.childNodes)}for(;(h=Ze.nextNode())!==null&&U.length<V;){if(h.nodeType===1){if(h.hasAttributes())for(let X of h.getAttributeNames())if(X.endsWith(Pa)){let nt=Z[$++],ot=h.getAttribute(X).split(Oe),ht=/([.?@])?(.*)/.exec(nt);U.push({type:1,index:g,name:ht[2],strings:ot,ctor:ht[1]==="."?or:ht[1]==="?"?lr:ht[1]==="@"?hr:fi}),h.removeAttribute(X)}else X.startsWith(Oe)&&(U.push({type:6,index:g}),h.removeAttribute(X));if(Ca.test(h.tagName)){let X=h.textContent.split(Oe),nt=X.length-1;if(nt>0){h.textContent=vs?vs.emptyScript:"";for(let ot=0;ot<nt;ot++)h.append(X[ot],Vi()),Ze.nextNode(),U.push({type:2,index:++g});h.append(X[nt],Vi())}}}else if(h.nodeType===8)if(h.data===Ta)U.push({type:2,index:g});else{let X=-1;for(;(X=h.data.indexOf(Oe,X+1))!==-1;)U.push({type:7,index:g}),X+=Oe.length-1}g++}}static createElement(i,r){let n=Je.createElement("template");return n.innerHTML=i,n}};function pi(c,i,r=c,n){if(i===Qe)return i;let h=n!==void 0?r._$Co?.[n]:r._$Cl,g=Ui(i)?void 0:i._$litDirective$;return h?.constructor!==g&&(h?._$AO?.(!1),g===void 0?h=void 0:(h=new g(c),h._$AT(c,r,n)),n!==void 0?(r._$Co??=[])[n]=h:r._$Cl=h),h!==void 0&&(i=pi(c,h._$AS(c,i.values),h,n)),i}var nr=class{constructor(i,r){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){let{el:{content:r},parts:n}=this._$AD,h=(i?.creationScope??Je).importNode(r,!0);Ze.currentNode=h;let g=Ze.nextNode(),$=0,V=0,U=n[0];for(;U!==void 0;){if($===U.index){let B;U.type===2?B=new Ni(g,g.nextSibling,this,i):U.type===1?B=new U.ctor(g,U.name,U.strings,this,i):U.type===6&&(B=new cr(g,this,i)),this._$AV.push(B),U=n[++V]}$!==U?.index&&(g=Ze.nextNode(),$++)}return Ze.currentNode=Je,h}p(i){let r=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(i,n,r),r+=n.strings.length-2):n._$AI(i[r])),r++}},Ni=class c{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,r,n,h){this.type=2,this._$AH=xt,this._$AN=void 0,this._$AA=i,this._$AB=r,this._$AM=n,this.options=h,this._$Cv=h?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode,r=this._$AM;return r!==void 0&&i?.nodeType===11&&(i=r.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,r=this){i=pi(this,i,r),Ui(i)?i===xt||i==null||i===""?(this._$AH!==xt&&this._$AR(),this._$AH=xt):i!==this._$AH&&i!==Qe&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Do(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==xt&&Ui(this._$AH)?this._$AA.nextSibling.data=i:this.T(Je.createTextNode(i)),this._$AH=i}$(i){let{values:r,_$litType$:n}=i,h=typeof n=="number"?this._$AC(i):(n.el===void 0&&(n.el=Bi.createElement(Ma(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===h)this._$AH.p(r);else{let g=new nr(h,this),$=g.u(this.options);g.p(r),this.T($),this._$AH=g}}_$AC(i){let r=Ea.get(i.strings);return r===void 0&&Ea.set(i.strings,r=new Bi(i)),r}k(i){pr(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,n,h=0;for(let g of i)h===r.length?r.push(n=new c(this.O(Vi()),this.O(Vi()),this,this.options)):n=r[h],n._$AI(g),h++;h<r.length&&(this._$AR(n&&n._$AB.nextSibling,h),r.length=h)}_$AR(i=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);i!==this._$AB;){let n=wa(i).nextSibling;wa(i).remove(),i=n}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},fi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,r,n,h,g){this.type=1,this._$AH=xt,this._$AN=void 0,this.element=i,this.name=r,this._$AM=h,this.options=g,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=xt}_$AI(i,r=this,n,h){let g=this.strings,$=!1;if(g===void 0)i=pi(this,i,r,0),$=!Ui(i)||i!==this._$AH&&i!==Qe,$&&(this._$AH=i);else{let V=i,U,B;for(i=g[0],U=0;U<g.length-1;U++)B=pi(this,V[n+U],r,U),B===Qe&&(B=this._$AH[U]),$||=!Ui(B)||B!==this._$AH[U],B===xt?i=xt:i!==xt&&(i+=(B??"")+g[U+1]),this._$AH[U]=B}$&&!h&&this.j(i)}j(i){i===xt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},or=class extends fi{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===xt?void 0:i}},lr=class extends fi{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==xt)}},hr=class extends fi{constructor(i,r,n,h,g){super(i,r,n,h,g),this.type=5}_$AI(i,r=this){if((i=pi(this,i,r,0)??xt)===Qe)return;let n=this._$AH,h=i===xt&&n!==xt||i.capture!==n.capture||i.once!==n.once||i.passive!==n.passive,g=i!==xt&&(n===xt||h);h&&this.element.removeEventListener(this.name,this,n),g&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},cr=class{constructor(i,r,n){this.element=i,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(i){pi(this,i)}};var Uo=dr.litHtmlPolyfillSupport;Uo?.(Bi,Ni),(dr.litHtmlVersions??=[]).push("3.3.3");var Fa=(c,i,r)=>{let n=r?.renderBefore??i,h=n._$litPart$;if(h===void 0){let g=r?.renderBefore??null;n._$litPart$=h=new Ni(i.insertBefore(Vi(),g),g,void 0,r??{})}return h._$AI(c),h};var ur=globalThis,kt=class extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Fa(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Qe}};kt._$litElement$=!0,kt.finalized=!0,ur.litElementHydrateSupport?.({LitElement:kt});var Bo=ur.litElementPolyfillSupport;Bo?.({LitElement:kt});(ur.litElementVersions??=[]).push("4.2.2");var _s=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function ui(c){return _s.some(i=>i.key===c)?`${ye}/devices/${c}.png`:null}function ti(c){return typeof c=="string"&&c.includes(`${ye}/`)&&c.endsWith(".png")?`${c.slice(0,-4)}.webp`:null}function Ia(c){let i=No(c);return i?ui(i):null}function No(c){if(!c)return null;let i=_s.find(r=>r.match&&r.match.test(c));return i?i.key:null}var jo={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","sys_load","sys_grid_power","load_from_pv","load_from_grid","load_from_bat","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power","soh","bat_temp","chg_rem_time","dsg_rem_time","full_energy","cycles","calendar_soh"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function Ho(c){return Object.values(c.entities||{}).filter(i=>i.platform===ze)}function Wo(c){if(c.translation_key)return c.translation_key;let i=c.entity_id.split(".")[1],r=i.lastIndexOf("_");return r>=0?i.slice(r+1):i}function oe(c){let i=new Map;for(let n of Ho(c))n.device_id&&(i.has(n.device_id)||i.set(n.device_id,[]),i.get(n.device_id).push(n));let r=[];for(let[n,h]of i)h.some(g=>Wo(g)==="pv_total")&&r.push({deviceId:n,device:c.devices?.[n],ents:h});return r}function le(c,i){let r={};for(let n of i){let[h]=n.entity_id.split("."),g=n.translation_key;g&&(jo[h]||[]).includes(g)&&(r[`${h}.${g}`]=n.entity_id)}if(!r["sensor.cms_batt_soc"])for(let n of i){if(!n.entity_id.startsWith("sensor."))continue;let h=c.states?.[n.entity_id];if(h?.attributes?.device_class==="battery"&&h?.attributes?.unit_of_measurement==="%"){r["sensor.cms_batt_soc"]=n.entity_id;break}}return r}async function Hi(c){if(!c?.callWS)return{};try{return await c.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function La(c){let i=await Hi(c),r=Object.keys(i);if(!r.length)return[];let n=[];try{n=await c.callWS({type:"config_entries/get"})||[]}catch{n=[]}let h=new Map(n.map(g=>[g.entry_id,g]));return r.map(g=>({id:g,title:h.get(g)?.title||h.get(g)?.domain||g,domain:h.get(g)?.domain||""}))}function ys(c,i){let r=i===void 0?Object.keys(c||{}):i,n={};for(let h of r){let g=c?.[h]?.wh_hours;if(g)for(let[$,V]of Object.entries(g)){let U=Number(V);Number.isFinite(U)&&(n[$]=(n[$]||0)+U)}}return n}function Wi(c,i=new Date){let r=i.getFullYear(),n=i.getMonth(),h=i.getDate(),g={};for(let[$,V]of Object.entries(c||{})){let U=new Date($);Number.isNaN(U.getTime())||U.getFullYear()===r&&U.getMonth()===n&&U.getDate()===h&&(g[U.getHours()]=(g[U.getHours()]||0)+V)}return g}function qi(c,i=new Date){let r=Wi(c,i),n=Object.keys(r);return n.length?n.reduce((h,g)=>h+r[g],0):null}async function qo(c){if(!c?.callWS)return null;try{return await c.callWS({type:"energy/get_prefs"})||null}catch{return null}}function Go(c){let i={solar:[],gridFrom:[],gridTo:[],batIn:[],batOut:[]};for(let r of c?.energy_sources||[])if(r.type==="solar"&&r.stat_energy_from&&i.solar.push(r.stat_energy_from),r.type==="battery"&&(r.stat_energy_to&&i.batIn.push(r.stat_energy_to),r.stat_energy_from&&i.batOut.push(r.stat_energy_from)),r.type==="grid"){for(let n of r.flow_from||[])n.stat_energy_from&&i.gridFrom.push(n.stat_energy_from);for(let n of r.flow_to||[])n.stat_energy_to&&i.gridTo.push(n.stat_energy_to)}return i}async function Yo(c){try{let i=await c.callWS({type:"recorder/list_statistic_ids"})||[],r={};for(let n of i)r[n.statistic_id]=n.statistics_unit_of_measurement||n.unit_of_measurement||n.display_unit_of_measurement||"";return r}catch{return{}}}function Ko(c,i){let r=(i||"").toLowerCase();return r==="wh"?c/1e3:r==="mwh"?c*1e3:c}async function ji(c,i,r){if(!c?.callWS||!i.length)return 0;let n=new Date,h=new Date(n.getFullYear(),n.getMonth(),n.getDate());try{let g=await c.callWS({type:"recorder/statistics_during_period",start_time:h.toISOString(),statistic_ids:i,period:"hour",types:["change"]}),$=0;for(let V of i){let U=0;for(let B of g?.[V]||[]){let Z=Number(B.change);Number.isFinite(Z)&&(U+=Z)}$+=Ko(U,r[V])}return $}catch{return 0}}async function za(c){let i=await qo(c);if(!i)return null;let r=Go(i),n=await Yo(c),[h,g,$,V,U]=await Promise.all([ji(c,r.solar,n),ji(c,r.gridFrom,n),ji(c,r.gridTo,n),ji(c,r.batIn,n),ji(c,r.batOut,n)]),B=h+g+U-$-V,Z=B>0?Math.max(0,Math.min(100,Math.round((1-g/B)*100))):null;return{solar:h,gridImport:g,gridExport:$,batIn:V,batOut:U,consumption:B,independence:Z}}async function bs(c,i,r,n){if(!c?.callWS||!i)return null;let h=new Date,$={type:"recorder/statistics_during_period",start_time:(r instanceof Date?r:new Date(h.getFullYear(),h.getMonth(),h.getDate())).toISOString(),statistic_ids:[i],period:"hour",types:["change"]};n instanceof Date&&($.end_time=n.toISOString());try{let U=(await c.callWS($))?.[i];if(!Array.isArray(U))return null;let B={};for(let Z of U){let X=new Date(Z.start),nt=Number(Z.change);Number.isNaN(X.getTime())||!Number.isFinite(nt)||(B[X.getHours()]=(B[X.getHours()]||0)+nt)}return B}catch{return null}}function pt(c){return typeof c=="string"&&/\{[{%]/.test(c)}function vt(c){return typeof c=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(c)}function lt(c){let i=Number(c?.state);return Number.isFinite(i)?i:null}function xe(c){return c==null||!Number.isFinite(c)?null:Math.abs(c)>=1e3?`${(c/1e3).toFixed(2)} kW`:`${Math.round(c)} W`}function he(c){return c==null||!Number.isFinite(c)?{n:"\u2013",u:"W"}:Math.abs(c)>=1e3?{n:(c/1e3).toFixed(2),u:"kW"}:{n:String(Math.round(c)),u:"W"}}function ws(c){return{n:c!=null&&Number.isFinite(c)?c.toFixed(1):"\u2013",u:"kWh"}}function mr(c,i=1){return c==null||!Number.isFinite(c)?null:Math.abs(c)>=1e3?`${(c/1e3).toFixed(i)} kWh`:`${Math.round(c)} Wh`}function Oa(c){if(c==null||!Number.isFinite(c))return null;let i=Math.round(c);if(i<60)return`${i} min`;let r=Math.floor(i/60);if(r<24){let g=i%60;return g?`${r} h ${g} min`:`${r} h`}let n=Math.floor(r/24),h=r%24;return h?`${n} d ${h} h`:`${n} d`}var Ra=!1;async function Yt(){if(!Ra){Ra=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var Da={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off",confirm_action:"Are you sure?"},house:{home:"Home",grid:"Grid",from_grid:"From grid",to_grid:"To grid",idle:"Idle",not_setup:"Card not set up \u2014 add the EcoFlow IoT integration",page:{appearance:"Appearance",display:"What to show",battery:"Battery",entities:"Entities"},short:{show_flows:"Flows",show_grid:"Grid",show_solar:"Solar",show_home:"Home",show_battery:"Battery"},mode:{auto:"Automatic",day:"Day",night:"Night"},toggle:{show_flows:"Animate energy flows",show_grid:"Show grid power",show_solar:"Show solar power",show_home:"Show home consumption",show_battery:"Show battery"},editor:{style:"House style",style_n:"House {n}",mode:"Day / night",battery:"Battery",battery_hint:"Pick the device render that matches your setup. Shown in front of the house.",custom:"Custom house image",custom_light:"Light / day image",custom_dark:"Dark / night image",custom_remove:"Remove",uploading:"Uploading\u2026",custom_hint:"Upload your own house render to use instead of the built-in styles. The dark image is shown at night (auto/night mode); upload only the light one to use it for both. For a perfect fit, match the built-in 2340\xD71680 layout \u2014 download the full set below to trace over.",download_zip:"Download all house images (.zip)",preparing:"Preparing download\u2026",entities:"Entities",entities_hint:"Override the auto-detected sensors that drive the scene. Leave empty to use the integration's defaults."},battery:{bk621:"Stream Ultra",bk620:"Stream AC / Microinverter",re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + gateway",re305_or_re306_battery:"PowerOcean battery",re305_or_re306_device:"PowerOcean + inverter",re305_device:"PowerOcean (E7 battery)",re306_dpu_combo:"Delta Pro Ultra (DPU)",re306_device:"PowerOcean DPU",re306_dpu_battery:"PowerOcean DPU (stacked)",po_space_re305_battery:"Battery stack",po_space_battery:"Battery + inverter",po_space_battery_system_battery:"Single battery",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Battery (JT303)",jt321_space_battery:"Battery (JT321)",dc303_space_battery:"Battery (DC303)"}},battery:{title:"Battery",idle:"Idle",health:"Health",calendar_health:"Calendar health",temperature:"Temperature",time_to_full:"Time to full",time_to_empty:"Time to empty",capacity:"Capacity",cycles:"Cycles"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today.",stats_default:"Default (Solar, Grid)",stats_count:"{n} tiles",stats_default_hint:"The card shows live Solar and Grid power. Customize to show any entities you like instead, each with its own tap action.",stats_customize:"Customize tiles",stats_hint:"Add the entities to show as stat tiles. Set a name and icon, and choose what happens on tap (more-info by default).",stats_add:"Add tile",stats_reset:"Reset to default",stats_remove:"Remove",stats_move_up:"Move up",stats_move_down:"Move down",stat_n:"Tile {n}",stat_field_entity:"Entity",stat_field_name:"Name",stat_field_icon:"Icon",stat_field_tap_action:"Tap action"},page:{appearance:"Appearance",entities:"Entities",stats:"Stat tiles",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",sys_grid_power:"Grid power (whole system)",sys_load:"Home consumption",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}},space:{page:{appearance:"Appearance",weather:"Weather",overlays:"Floating overlays",tiles:"Bottom tiles",tabs:"Sidebar tabs"},n_items:"{n} configured",weather_hint:"Pick a weather entity to show the temperature and humidity in the top bar. Leave empty to hide it.",weather_entity:"Weather entity",overlays_hint:"Floating values over the house. Drag a chip on the preview to position it, or fine-tune with X/Y below. Bind each to an auto-detected sensor, any entity, or a template.",add_overlay:"Add overlay",tiles_hint:"The cards along the bottom. Each shows a value from a sensor, entity, or template.",add_tile:"Add tile",tabs_hint:"The sidebar buttons. The first is always Home (the scene above); each other tab embeds an existing Lovelace view by its path.",rail_labels:"Show labels under icons",rail_align:"Align items",f_rail_size:"Sidebar size (\xD7)",align:{start:"Top",center:"Center",end:"Bottom"},add_tab:"Add tab",home_tab:"Home",path_hint:"Lovelace view path, e.g. solar or dashboard-name/solar",f_label:"Label",f_icon:"Icon (mdi:\u2026)",f_unit:"Unit",f_anchor:"Anchor",f_color:"Value color (optional)",f_icon_color:"Icon color (optional)",f_dot:"Status dot color (optional)",f_low:"Night low (text, entity or template)",f_slot:"Sensor",f_secondary:"Secondary line (text, entity or template)",f_path:"View path",f_co2_value:"CO\u2082 saved (text, entity or template)",f_co2_trees:"Trees equivalent (optional)",co2_title:"CO\u2082 chip",co2_hint:"An optional chip in the centre of the top bar, as in the app.",f_preset:"Preset",f_size:"Size (\xD7)",f_weather_size:"Weather size (\xD7)",f_clock_size:"Clock size (\xD7)",f_tiles_size:"Tile size (\xD7)",clock_title:"Clock",clock_show:"Show clock (top center)",clock_date:"Show date",preset_none:"None (custom)",preset_hint:"Auto-bound and styled. Set Preset to \u201CNone (custom)\u201D to choose your own entity or template.",today:"Today",preset:{solar:"Solar power",grid:"Grid power",battery:"Battery power",solar_today:"Solar produced today",usage:"Consumption today",energy_independence:"Energy independence"},src_auto:"Auto",src_entity:"Entity",src_template:"Template",anchor:{center:"Center","top-left":"Top left","top-center":"Top center","top-right":"Top right","bottom-left":"Bottom left","bottom-center":"Bottom center","bottom-right":"Bottom right"},remove:"Remove",embed_missing:"Lovelace view not found \u2014 check the path in the editor.",embed_empty:"No view path set for this tab.",clear_color:"Clear colour"}};var Va={card:{no_device:"Kein EcoFlow Stream-Ger\xE4t gefunden. Richten Sie zuerst die EcoFlow IoT-Integration ein.",device:"EcoFlow Stream",solar:"Solar",grid:"Netz",grid_import:"Bezug",grid_export:"Einspeisung",grid_idle:"Netz inaktiv",battery:"Batterie",charging:"L\xE4dt",discharging:"Entl\xE4dt",today:"Solar heute",produced:"erzeugt",forecast:"Prognose",of_forecast:"{pct}% der Prognose",exceeded:"Prognose erreicht",reserve:"Reserve",charge_limit:"Laden \u2264",discharge_limit:"Entladen \u2265",ac1:"AC 1",ac2:"AC 2",off:"Aus",confirm_action:"Sind Sie sicher?"},house:{home:"Hausnetz",grid:"Netz",from_grid:"Vom Netz",to_grid:"Ins Netz",idle:"Bereit",not_setup:"Karte nicht eingerichtet \u2013 richten Sie die EcoFlow IoT-Integration ein",page:{appearance:"Darstellung",display:"Anzeige",battery:"Batterie",entities:"Entit\xE4ten"},short:{show_flows:"Fl\xFCsse",show_grid:"Netz",show_solar:"Solar",show_home:"Haus",show_battery:"Batterie"},mode:{auto:"Automatisch",day:"Tag",night:"Nacht"},toggle:{show_flows:"Energiefl\xFCsse animieren",show_grid:"Netzleistung anzeigen",show_solar:"Solarleistung anzeigen",show_home:"Hausverbrauch anzeigen",show_battery:"Batterie anzeigen"},editor:{style:"Haus-Stil",style_n:"Haus {n}",mode:"Tag / Nacht",battery:"Batterie",battery_hint:"W\xE4hle das Ger\xE4te-Render, das zu deinem Aufbau passt. Es wird vor dem Haus angezeigt.",custom:"Eigenes Hausbild",custom_light:"Helles / Tag-Bild",custom_dark:"Dunkles / Nacht-Bild",custom_remove:"Entfernen",uploading:"Wird hochgeladen \u2026",custom_hint:"Lade dein eigenes Haus-Render hoch, um es statt der mitgelieferten Stile zu verwenden. Das dunkle Bild wird nachts angezeigt (Auto-/Nacht-Modus); lade nur das helle hoch, um es f\xFCr beide zu nutzen. F\xFCr eine perfekte Passung das mitgelieferte Format 2340\xD71680 \xFCbernehmen \u2013 lade unten den kompletten Satz zum Nachzeichnen herunter.",download_zip:"Alle Hausbilder herunterladen (.zip)",preparing:"Download wird vorbereitet \u2026",entities:"Entit\xE4ten",entities_hint:"\xDCberschreiben Sie die automatisch erkannten Sensoren, die die Darstellung steuern. Leer lassen, um die Standardwerte der Integration zu verwenden."},battery:{bk621:"Stream Ultra",bk620:"Stream AC / Microinverter",re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + Gateway",re305_or_re306_battery:"PowerOcean Batterie",re305_or_re306_device:"PowerOcean + Wechselrichter",re305_device:"PowerOcean (E7-Batterie)",re306_dpu_combo:"Delta Pro Ultra (DPU)",re306_device:"PowerOcean DPU",re306_dpu_battery:"PowerOcean DPU (gestapelt)",po_space_re305_battery:"Batteriestapel",po_space_battery:"Batterie + Wechselrichter",po_space_battery_system_battery:"Einzelbatterie",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Batterie (JT303)",jt321_space_battery:"Batterie (JT321)",dc303_space_battery:"Batterie (DC303)"}},battery:{title:"Batterie",idle:"Inaktiv",health:"Zustand",calendar_health:"Kalenderzustand",temperature:"Temperatur",time_to_full:"Zeit bis voll",time_to_empty:"Zeit bis leer",capacity:"Kapazit\xE4t",cycles:"Zyklen"},confirm:{title:"Steckdose ausschalten?",ac_off:"{name} ausschalten? Alles, was daran angeschlossen ist, verliert die Stromversorgung.",cancel:"Abbrechen",turn_off:"Ausschalten"},panels:{title:"Solarmodule",panel:"Modul {n}",total:"Gesamt",none:"F\xFCr dieses Ger\xE4t sind keine Daten je Solarmodul verf\xFCgbar."},editor:{device:"EcoFlow-Ger\xE4t",automatic:"Automatisch",image:"Ger\xE4tebild",entity:"Entit\xE4t",value_template:"Wert / Vorlage",mode_auto:"Auto",mode_entity:"Entit\xE4t",mode_custom:"Benutzerdefiniert",auto_value:"Automatisch erkannt: {value}",not_found:"nicht gefunden",overridden:"{n} \xFCberschrieben",shown:"Angezeigt",nothing_shown:"Nichts angezeigt",panel:"Modul {n}",panel_name:"Modulname",panel_entity:"Leistungssensor",panel_hidden:"Auf der Karte ausgeblendet.",panels_hint:"Benennen Sie ein Modul um, weisen Sie ihm einen anderen Sensor zu oder blenden Sie es aus der Aufschl\xFCsselung aus. Mit dem Schalter zeigen oder verbergen Sie jedes Modul.",panels_count:"{n} Module",panels_hidden:"{n} ausgeblendet",loading:"L\xE4dt\u2026",forecast_hint:"W\xE4hlen Sie, welche Solarprognose-Anbieter verwendet werden \u2014 dieselben, die im Energie-Dashboard von Home Assistant eingerichtet sind (Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule).",forecast_none:"Keine Solarprognose konfiguriert. F\xFCgen Sie unter Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule eine Prognose hinzu, dann erscheint sie hier.",forecast_none_short:"Nicht konfiguriert",forecast_selected:"{n} von {total} Anbietern",none:"Nicht festgelegt",collection_key:"Energie-Sammlungsschl\xFCssel",collection_hint:"Optional. Um einem in einer Energie-Zeitraumauswahl-Karte gew\xE4hlten Datum zu folgen (Energie-Datumsauswahl), geben Sie hier denselben Sammlungsschl\xFCssel ein wie auf jener Karte \u2014 er beginnt mit \u201Eenergy_\u201C; verwenden Sie \u201Eenergy\u201C f\xFCr eine Auswahl, die auf ihrem Standardschl\xFCssel belassen wurde. Leer lassen, um immer heute anzuzeigen.",stats_default:"Standard (Solar, Netz)",stats_count:"{n} Kacheln",stats_default_hint:"Die Karte zeigt die aktuelle Solar- und Netzleistung. Passen Sie sie an, um stattdessen beliebige Entit\xE4ten anzuzeigen \u2014 jede mit eigener Tipp-Aktion.",stats_customize:"Kacheln anpassen",stats_hint:"F\xFCgen Sie die Entit\xE4ten hinzu, die als Kacheln angezeigt werden sollen. Legen Sie Name und Symbol fest und w\xE4hlen Sie, was beim Tippen passiert (standardm\xE4\xDFig Info-Dialog).",stats_add:"Kachel hinzuf\xFCgen",stats_reset:"Auf Standard zur\xFCcksetzen",stats_remove:"Entfernen",stats_move_up:"Nach oben",stats_move_down:"Nach unten",stat_n:"Kachel {n}",stat_field_entity:"Entit\xE4t",stat_field_name:"Name",stat_field_icon:"Symbol",stat_field_tap_action:"Tipp-Aktion"},page:{appearance:"Darstellung",entities:"Entit\xE4ten",stats:"Kacheln",panels:"Solarmodule",forecast:"Solarprognose",advanced:"Erweitert"},toggle:{show_image:"Ger\xE4tebild anzeigen",show_today:"Heutige Erzeugung anzeigen",show_grid:"Netzleistung anzeigen",show_ac:"AC-Steckdosen anzeigen",show_panels:"F\xFCr Aufschl\xFCsselung je Modul auf Solarleistung tippen",show_forecast:"Heutige Erzeugung mit der Prognose vergleichen"},short:{show_image:"Bild",show_today:"Heute",show_grid:"Netz",show_ac:"AC-Steckdosen",show_panels:"Module",show_forecast:"Prognose"},slot:{sensor:{cms_batt_soc:"Batteriestand",bat_power:"Batterieleistung (Lade-/Entladegeschwindigkeit)",pv_total:"Solarleistung",grid_power:"Netzleistung",sys_grid_power:"Netzleistung (Gesamtsystem)",sys_load:"Hausverbrauch",solar_energy:"Solarenergie (Quelle f\xFCr Tagessumme)",pv1_power:"Solarmodul 1",pv2_power:"Solarmodul 2",pv3_power:"Solarmodul 3",pv4_power:"Solarmodul 4",schuko1_power:"AC-Steckdose 1 Leistung",schuko2_power:"AC-Steckdose 2 Leistung",forecast_today:"Prognose-Entit\xE4t (erwartete Erzeugung heute)"},number:{max_charge_soc:"Ladelimit",min_discharge_soc:"Entladelimit",backup_reserve:"Notstromreserve"},switch:{ac1:"AC-Steckdose 1",ac2:"AC-Steckdose 2"}},space:{page:{appearance:"Darstellung",weather:"Wetter",overlays:"Schwebende Overlays",tiles:"Kacheln unten",tabs:"Seitenleisten-Tabs"},n_items:"{n} konfiguriert",weather_hint:"W\xE4hle eine Wetter-Entit\xE4t, um Temperatur und Luftfeuchte in der Kopfzeile zu zeigen. Leer lassen zum Ausblenden.",weather_entity:"Wetter-Entit\xE4t",overlays_hint:"Schwebende Werte \xFCber dem Haus. Ziehe einen Chip in der Vorschau zum Positionieren oder nutze X/Y unten. Binde jeden an einen erkannten Sensor, eine Entit\xE4t oder ein Template.",add_overlay:"Overlay hinzuf\xFCgen",tiles_hint:"Die Kacheln am unteren Rand. Jede zeigt einen Wert aus Sensor, Entit\xE4t oder Template.",add_tile:"Kachel hinzuf\xFCgen",tabs_hint:"Die Seitenleisten-Buttons. Der erste ist immer Home (die Szene oben); jeder weitere Tab bettet eine vorhandene Lovelace-Ansicht per Pfad ein.",rail_labels:"Beschriftungen unter Symbolen anzeigen",rail_align:"Ausrichtung",f_rail_size:"Seitenleisten-Gr\xF6\xDFe (\xD7)",align:{start:"Oben",center:"Mitte",end:"Unten"},add_tab:"Tab hinzuf\xFCgen",home_tab:"Home",path_hint:"Lovelace-Ansichtspfad, z. B. solar oder dashboard-name/solar",f_label:"Bezeichnung",f_icon:"Symbol (mdi:\u2026)",f_unit:"Einheit",f_anchor:"Anker",f_color:"Wertfarbe (optional)",f_icon_color:"Symbolfarbe (optional)",f_dot:"Statuspunkt-Farbe (optional)",f_low:"Nacht-Tiefstwert (Text, Entit\xE4t oder Template)",f_slot:"Sensor",f_secondary:"Zweite Zeile (Text, Entit\xE4t oder Template)",f_path:"Ansichtspfad",f_co2_value:"CO\u2082 eingespart (Text, Entit\xE4t oder Template)",f_co2_trees:"Baum-\xC4quivalent (optional)",co2_title:"CO\u2082-Chip",co2_hint:"Ein optionaler Chip in der Mitte der Kopfzeile, wie in der App.",f_preset:"Vorlage",f_size:"Gr\xF6\xDFe (\xD7)",f_weather_size:"Wetter-Gr\xF6\xDFe (\xD7)",f_clock_size:"Uhr-Gr\xF6\xDFe (\xD7)",f_tiles_size:"Kachel-Gr\xF6\xDFe (\xD7)",clock_title:"Uhr",clock_show:"Uhr anzeigen (oben mittig)",clock_date:"Datum anzeigen",preset_none:"Keine (benutzerdefiniert)",preset_hint:"Automatisch verkn\xFCpft und gestylt. Setze die Vorlage auf \u201EKeine\u201C, um eine eigene Entit\xE4t oder ein Template zu w\xE4hlen.",today:"Heute",preset:{solar:"Solarleistung",grid:"Netzleistung",battery:"Batterieleistung",solar_today:"Heute erzeugter Solarstrom",usage:"Verbrauch heute",energy_independence:"Energieunabh\xE4ngigkeit"},src_auto:"Auto",src_entity:"Entit\xE4t",src_template:"Template",anchor:{center:"Mitte","top-left":"Oben links","top-center":"Oben mittig","top-right":"Oben rechts","bottom-left":"Unten links","bottom-center":"Unten mittig","bottom-right":"Unten rechts"},remove:"Entfernen",embed_missing:"Lovelace-Ansicht nicht gefunden \u2014 Pfad im Editor pr\xFCfen.",embed_empty:"F\xFCr diesen Tab ist kein Ansichtspfad gesetzt.",clear_color:"Farbe entfernen"}};var gr={en:Da,de:Va};function Jo(c){return(c?.locale?.language||c?.language||"en").split("-")[0]}function Ua(c,i){let r=i.split(".").reduce((n,h)=>n?.[h],c);return typeof r=="string"?r:void 0}function Ft(c,i,r={}){let n=gr[Jo(c)]||gr.en,h=Ua(n,i)??Ua(gr.en,i)??i;for(let[g,$]of Object.entries(r))h=h.replace(`{${g}}`,$);return h}var Ba=jt`
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
`;function vr(c){let i=[];for(let r=1;r<=4;r++){let n=c._config.panels?.[r]||{};if(n.hidden)continue;let h=`sensor.pv${r}_power`,g=c._state(h);g&&i.push({i:r,watts:lt(g),id:c._entityId(h),name:n.name||null})}return i}function xs(c){let i=(g,$)=>Ft(c.hass,g,$),r=vr(c);if(!r.length)return I`<div class="empty">${i("panels.none")}</div>`;let n=Math.max(1,...r.map(g=>g.watts||0)),h=r.reduce((g,$)=>g+($.watts||0),0);return I`<div class="panels">
    ${r.map(g=>I`<div
        class="panel-row clickable"
        @click=${()=>c._moreInfoId(g.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${g.name||i("panels.panel",{n:g.i})}
          </span>
          <span class="panel-val">${xe(g.watts)??"\u2013"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,(g.watts||0)/n*100)}%"
          ></div>
        </div>
      </div>`)}
    <div class="panel-total">
      <span>${i("panels.total")}</span>
      <span>${xe(h)??"\u2013"}</span>
    </div>
  </div>`}var ks=1e3,_r=340,Et={l:46,r:14,t:16,b:28};function Ss(c,{actual:i,forecast:r,totalWh:n,forecastWh:h,currentHour:g,showForecast:$,title:V}){let U=(J,St)=>Ft(c.hass,J,St),B=ks-Et.l-Et.r,Z=_r-Et.t-Et.b,X=B/24,nt=J=>Et.l+J/24*B,ot=0;for(let J=0;J<24;J++)ot=Math.max(ot,(i[J]||0)/1e3),$&&(ot=Math.max(ot,(r[J]||0)/1e3));let ht=Qo(ot>0?ot:.1),de=J=>Et.t+Z-J/ht*Z,Bt=X*.66,Kt=[];for(let J=0;J<24;J++){let St=(i[J]||0)/1e3;if(St<=0)continue;let Se=nt(J+.5)-Bt/2,Ue=de(St),Be=J===g?"fc-actual fc-current":"fc-actual";Kt.push(Ht`<rect class=${Be} x=${Se.toFixed(1)} y=${Ue.toFixed(1)}
        width=${Bt.toFixed(1)} height=${(Et.t+Z-Ue).toFixed(1)} rx="2"></rect>`)}let ee=null;if($){let J=[];for(let St=0;St<=24;St++)J.push(`${nt(St).toFixed(1)},${de((r[St]||0)/1e3).toFixed(1)}`);ee=Ht`<polyline class="fc-line" points=${J.join(" ")}></polyline>`}let Wt=[],Yi=4;for(let J=0;J<=Yi;J++){let St=ht/Yi*J,Se=de(St);Wt.push(Ht`<line class="fc-grid" x1=${Et.l} y1=${Se.toFixed(1)} x2=${ks-Et.r} y2=${Se.toFixed(1)}></line>`),Wt.push(Ht`<text class="fc-axis fc-axis-y" x=${Et.l-6} y=${(Se+4).toFixed(1)}>${tl(St)}</text>`)}let yi=[];for(let J=0;J<=24;J+=4)yi.push(Ht`<text class="fc-axis fc-axis-x" x=${nt(J).toFixed(1)} y=${_r-8}>${J}:00</text>`);let Lt=$&&h>0&&n!=null?Math.round(n/h*100):null,ii=J=>{c._fcTip!==J&&(c._fcTip=J,c.requestUpdate())},ie=()=>{c._fcTip!=null&&(c._fcTip=null,c.requestUpdate())},Us=[];for(let J=0;J<24;J++)Us.push(Ht`<rect class="fc-hit" x=${nt(J).toFixed(1)} y=${Et.t} width=${X.toFixed(1)} height=${Z}
        @pointerenter=${()=>ii(J)} @pointermove=${()=>ii(J)}
        @pointerdown=${()=>ii(J)}></rect>`);let Ve=c._fcTip,si=Ve!=null&&Ve>=0&&Ve<24,xr=si?Ht`<rect class="fc-band" x=${nt(Ve).toFixed(1)} y=${Et.t} width=${X.toFixed(1)} height=${Z}></rect>`:null,Ki=si?mt(Ve):null;function mt(J){let St=((i[J]||0)/1e3).toFixed(2),Se=((r[J]||0)/1e3).toFixed(2),Ue=184,Be=$?84:60,Ne=nt(J+.5)-Ue/2;Ne=Math.max(Et.l,Math.min(ks-Et.r-Ue,Ne));let je=Et.t+6,ri=Ne+12;return Ht`<g class="fc-tip" pointer-events="none">
      <rect class="fc-tip-box" x=${Ne.toFixed(1)} y=${je} width=${Ue} height=${Be} rx="7"></rect>
      <text class="fc-tip-time" x=${ri} y=${je+24}>${Na(J)}:00 – ${Na((J+1)%24)}:00</text>
      <text class="fc-tip-line" x=${ri} y=${je+46}>${U("card.produced")}: <tspan class="v">${St} kWh</tspan></text>
      ${$?Ht`<text class="fc-tip-line" x=${ri} y=${je+68}>${U("card.forecast")}: <tspan class="v">${Se} kWh</tspan></text>`:null}
    </g>`}return I`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${V||U("card.today")}</span>
      <span class="fc-graph-total"
        >${(n!=null?n/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    ${Lt!=null?I`<div class="fc-progress" title=${U("card.of_forecast",{pct:Lt})}>
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
      viewBox="0 0 ${ks} ${_r}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      @pointerleave=${ie}
      @pointercancel=${ie}
    >
      ${Wt}${yi}
      <text class="fc-axis fc-unit" x=${Et.l-6} y=${Et.t-4}>kWh</text>
      ${xr}${Kt}${ee}${Us}${Ki}
    </svg>
    ${$?I`<div class="fc-graph-legend">
          <span class="lg lg-actual">${U("card.produced")}</span>
          <span class="lg lg-fc">${U("card.forecast")}</span>
        </div>`:""}
  </div>`}function Qo(c){let i=Math.pow(10,Math.floor(Math.log10(c))),r=c/i;return(r<=1?1:r<=2?2:r<=5?5:10)*i}function tl(c){return c>=10?Math.round(c).toString():c.toFixed(1).replace(/\.0$/,"")}function Na(c){return String(c).padStart(2,"0")}var el=300*1e3,$s=class extends kt{static styles=Ba;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._battDir="",this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),Yt(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},el)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let i of Object.values(this._tmplUnsub||{}))typeof i=="function"&&i();this._tmplUnsub={}}setConfig(i){this._config=i||{}}static getConfigElement(){return document.createElement(`${Mt}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(i,r){return Ft(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=oe(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_state(i){let r=this._config.entities?.[i];if(r){if(pt(r)){let h=this._templateResults?.[r];return{state:h===void 0?"unknown":String(h),attributes:{}}}return vt(r)?this.hass.states[r]:{state:r,attributes:{}}}let n=this._map?.[i];return n?this.hass.states[n]:void 0}_entityId(i){let r=this._config.entities?.[i];return r&&vt(r)&&!pt(r)?r:this._map?.[i]}updated(i){super.updated(i),(i.has("hass")||i.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let i=this._entityId("sensor.solar_energy");if(!i||!this.hass)return;let{start:r,end:n}=this._dataRange(),h=await bs(this.hass,i,r,n);this._hourly=h||{},this._todayWh=h?Object.values(h).reduce((g,$)=>g+($||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await Hi(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let i=new Date;return{start:new Date(i.getFullYear(),i.getMonth(),i.getDate()),end:i,ref:i}}_bindEnergyCollection(){let i=this._config.collection_key,r=i?`_${i}`:null;if(r!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=r,this._period=null),!r||this._collUnsub||!this.hass?.connection)return;let n=this.hass.connection[r];if(!n||typeof n.subscribe!="function")return;let h=()=>{this._period={start:n.start,end:n.end},this._refreshData()};this._collUnsub=n.subscribe(()=>h()),h()}_mergedForecast(){return ys(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let i=qi(this._mergedForecast(),this._dataRange().ref);return i!=null?i/1e3:null}_isToday(){let i=this._dataRange().ref,r=new Date;return i.getFullYear()===r.getFullYear()&&i.getMonth()===r.getMonth()&&i.getDate()===r.getDate()}_periodLabel(){return this._isToday()?this._t("card.today"):this._dataRange().ref.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let i=[...Object.values(this._config.entities||{}),this._config.title].filter(r=>pt(r));for(let r of i)if(!this._tmplUnsub[r]){this._tmplUnsub[r]=!0;try{this._tmplUnsub[r]=await this.hass.connection.subscribeMessage(n=>{this._templateResults[r]=n.result,this.requestUpdate()},{type:"render_template",template:r})}catch{this._templateResults[r]="error",this.requestUpdate()}}for(let r of Object.keys(this._tmplUnsub))if(!i.includes(r)){let n=this._tmplUnsub[r];typeof n=="function"&&n(),delete this._tmplUnsub[r],delete this._templateResults[r]}}_moreInfo(i){this._moreInfoId(this._entityId(i))}_moreInfoId(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}render(){if(!this.hass)return I``;let i=this._device;return i?(this._map=le(this.hass,i.ents),this._isToday()?I`<ha-card>
      ${this._renderHead(i)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),xs(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),this._forecastGraph(),"large"):""}
      ${this._dialog==="battery"?this._dialogFrame(this._t("battery.title"),this._renderBatteryDetail()):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`:I`<ha-card>${this._forecastGraph()}</ha-card>`):I`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(i,r,n="medium"){return I`<ha-adaptive-dialog
      open
      width=${n}
      header-title=${i}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${r}</div>
    </ha-adaptive-dialog>`}_imageSrc(i){let r=i?.device?.model;return be(this._config.image_url||(this._config.image?ui(this._config.image):Ia(r)),this.hass)}_renderHead(i){let r=this._config.title,n=r&&pt(r)?String(this._templateResults?.[r]??""):r,h=i.device?.model,g=n||i.device?.name_by_user||i.device?.name||h||this._t("card.device"),$=this._imageSrc(i);return I`<div class="head">
      <div class="head-left">
        <div class="name">${g}</div>
        ${h&&h!==g?I`<div class="subtitle">${h}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle($,g)}
    </div>`}_renderBatteryCircle(i,r){let n=this._state("sensor.cms_batt_soc"),h=this._show("show_image")&&i;if(!n&&!h)return"";let g=lt(n),$=lt(this._state("sensor.bat_power")),V=this._state("binary_sensor.battery_charging")?.state==="on"||$!=null&&$>1,U=!V&&$!=null&&$<-1,B=V?"charge":U?"discharge":g!=null&&g<=15?"low":"",Z=V?"charge":U?"discharge":"";Z&&(this._battDir=Z);let X=Z||this._battDir,nt=!!Z,ot=2*Math.PI*44,ht=g!=null?Math.max(0,Math.min(100,g)):0,de=[{v:lt(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:lt(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:lt(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(Bt=>Bt.v!=null);return I`<div
      class="batt-circle clickable ${Z}"
      @click=${()=>this._dialog="battery"}
    >
      ${n?I`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${B}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${ot.toFixed(1)};stroke-dashoffset:${(ot*(1-ht/100)).toFixed(1)}"
            ></circle>
            ${X?Ht`<circle
                  class="ring-spin ${X} ${nt?"show":""}"
                  cx="50"
                  cy="50"
                  r="44"
                  stroke-dasharray="16 261"
                ></circle>`:""}
            ${de.map(Bt=>{let Kt=Math.max(0,Math.min(100,Bt.v))/100*2*Math.PI,ee=Math.sin(Kt),Wt=Math.cos(Kt);return Ht`<line
                class="ring-tick ${Bt.cls}"
                x1=${(50+39.5*ee).toFixed(1)}
                y1=${(50-39.5*Wt).toFixed(1)}
                x2=${(50+48.5*ee).toFixed(1)}
                y2=${(50-48.5*Wt).toFixed(1)}
              ><title>${Bt.label} ${Math.round(Bt.v)}%</title></line>`})}
          </svg>`:""}
      ${n&&X?I`<div class="batt-particles ${X} ${nt?"show":""}">
            ${Array.from({length:12},(Bt,Kt)=>{let ee=Kt*30,Wt=Kt*5%12/12*1.6;return I`<span
                class="particle"
                style="--angle:${ee}deg;animation-delay:${Wt.toFixed(2)}s"
              ></span>`})}
          </div>`:""}
      ${h?I`<picture
            >${ti(i)?I`<source
                  srcset=${ti(i)}
                  type="image/webp"
                />`:""}<img class="device-img" src="${i}" alt="${r}"
          /></picture>`:n?I`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${n}
            ></ha-state-icon>`:I`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${n&&(V||U)&&$!=null?I`<span class="batt-speed ${Z}">
            <ha-icon
              icon=${V?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${xe(Math.abs($))}
          </span>`:""}
      ${n?I`<span class="batt-badge"
            >${g!=null?Math.round(g):"\u2013"}%</span
          >`:""}
    </div>`}_renderBatteryDetail(){let i=this._device,r=this._show("show_image")&&this._imageSrc(i),n=i?.device?.name||i?.device?.model||this._t("card.device"),h=lt(this._state("sensor.cms_batt_soc")),g=lt(this._state("sensor.bat_power")),$=this._state("binary_sensor.battery_charging")?.state==="on"||g!=null&&g>1,V=!$&&g!=null&&g<-1,U=$?"charge":V?"discharge":"",B=$?"mdi:flash":V?"mdi:battery-arrow-down":"mdi:battery",Z=$?this._t("card.charging"):V?this._t("card.discharging"):this._t("battery.idle"),X=($||V)&&g!=null?xe(Math.abs(g)):null,nt=[{slot:"sensor.soh",icon:"mdi:heart-pulse",label:this._t("battery.health")},{slot:"sensor.calendar_soh",icon:"mdi:calendar-heart",label:this._t("battery.calendar_health")},{slot:"sensor.bat_temp",icon:"mdi:thermometer",label:this._t("battery.temperature")},...$?[{slot:"sensor.chg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_full")}]:[],...V?[{slot:"sensor.dsg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_empty")}]:[],{slot:"sensor.full_energy",icon:"mdi:battery-high",label:this._t("battery.capacity")},{slot:"sensor.cycles",icon:"mdi:battery-sync",label:this._t("battery.cycles")}].map(ot=>({...ot,value:this._battTileValue(ot.slot)})).filter(ot=>ot.value!=null);return I`<div class="batt-detail">
      <div class="batt-hero">
        ${r?I`<picture
              >${ti(r)?I`<source srcset=${ti(r)} type="image/webp" />`:""}<img class="batt-hero-img" src=${r} alt=${n}
            /></picture>`:I`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${h!=null?Math.round(h):"\u2013"}<span class="batt-hero-u">%</span></span
          >
          <span class="batt-hero-status ${U}">
            <ha-icon icon=${B}></ha-icon>${Z}${X?` \xB7 ${X}`:""}
          </span>
        </div>
      </div>
      ${nt.length?I`<div class="batt-grid">
            ${nt.map(ot=>{let ht=this._entityId(ot.slot);return I`<div
                class="batt-tile ${ht?"clickable":""}"
                @click=${ht?()=>this._moreInfoId(ht):null}
              >
                <ha-icon icon=${ot.icon}></ha-icon>
                <div class="batt-tile-text">
                  <span class="batt-tile-val">${ot.value}</span>
                  <span class="batt-tile-label">${ot.label}</span>
                </div>
              </div>`})}
          </div>`:""}
    </div>`}_battTileValue(i){let r=this._state(i),n=lt(r);if(n==null)return null;let h=r.attributes?.unit_of_measurement||"";return h==="W"?xe(n):h==="Wh"?mr(n):h==="kWh"?mr(n*1e3):h==="min"?Oa(n):h==="%"?`${Math.round(n)}%`:h?`${Math.round(n)} ${h}`:String(Math.round(n))}_renderAc(){let i=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(r=>({...r,swState:this._state(r.sw),pwState:this._state(r.pw)})).filter(r=>r.swState||r.pwState);return i.length?I`<div class="ac">
      ${i.map(r=>{let n=r.swState?.state==="on",h=lt(r.pwState);return I`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(r.pw)||this._entityId(r.sw))}
        >
          <ha-icon class="ac-icon ${n?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${r.label}</span>
            <span class="ac-power">
              ${r.swState&&!n?this._t("card.off"):h!=null?this._metric(he(h)):r.pwState?"\u2014":""}
            </span>
          </div>
          ${r.swState?I`<ha-switch
                .checked=${n}
                @click=${g=>g.stopPropagation()}
                @change=${()=>this._toggleSwitch(r.sw,r.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(i,r){let n=this._entityId(i),h=n?this.hass.states[n]:null;!n||!h||(h.state==="on"?this._confirmAc={slot:i,label:r}:this.hass.callService("switch","turn_on",{entity_id:n}))}_renderConfirmAc(){let{label:i}=this._confirmAc,r=()=>this._confirmAc=null;return I`<ha-adaptive-dialog
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
            @click=${()=>{let n=this._entityId(this._confirmAc.slot);n&&this.hass.callService("switch","turn_off",{entity_id:n}),this._confirmAc=null}}
          >
            ${this._t("confirm.turn_off")}
          </button>
        </div>
      </div>
    </ha-adaptive-dialog>`}_metric(i){return I`<span class="metric"
      ><span class="metric-num">${i.n}</span
      ><span class="metric-unit">${i.u}</span></span
    >`}_renderStats(){if(Array.isArray(this._config.stats))return I`<div class="stats custom">
        ${this._config.stats.map($=>this._renderCustomStat($))}
      </div>`;let i=lt(this._state("sensor.pv_total")),r=vr(this),n=this._show("show_panels")&&r.length>0,h=this._state("sensor.grid_power"),g=lt(h);return I`<div class="stats">
      <div
        class="stat solar ${n?"clickable":""}"
        @click=${n?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${n?I`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${this._metric(he(i))}</div>
        ${n?I`<div class="stat-sub">
              ${r.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(g):I`<div></div>`}
    </div>`}_renderGrid(i){let r=i!=null&&i>1,n=i!=null&&i<-1,h=r?"import":n?"export":"",g=r?this._t("card.grid_import"):n?this._t("card.grid_export"):this._t("card.grid_idle");return I`<div
      class="stat grid ${h} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${n?"mdi:transmission-tower-export":r?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${this._metric(he(i!=null?Math.abs(i):null))}
      </div>
      <div class="stat-sub">${g}</div>
    </div>`}_renderCustomStat(i){if(!i||!i.entity&&!i.name)return I``;let r=i.entity?this.hass.states[i.entity]:void 0,n=i.name||r?.attributes?.friendly_name||i.entity||"",h=i.tap_action,g=!h||h.action!=="none";return I`<div
      class="stat ${g?"clickable":""}"
      @click=${g?()=>this._handleAction(h,i.entity):null}
    >
      <div class="stat-head">
        ${i.icon?I`<ha-icon icon=${i.icon}></ha-icon>`:r?I`<ha-state-icon
                .hass=${this.hass}
                .stateObj=${r}
              ></ha-state-icon>`:I`<ha-icon icon="mdi:gauge"></ha-icon>`}
        ${n}
      </div>
      <div class="stat-value">${this._metric(this._statValue(r))}</div>
    </div>`}_statValue(i){let r=i?.state;if(r==null||r==="unavailable"||r==="unknown")return{n:"\u2013",u:""};let n=lt(i),h=i.attributes?.unit_of_measurement||"";return n==null?{n:r,u:""}:h==="W"?he(n):{n:Number.isInteger(n)?String(n):n.toFixed(1),u:h}}_handleAction(i,r){let n=i||{action:"more-info"},h=n.action||"more-info";if(h!=="none"){if(n.confirmation){let g=n.confirmation.text||this._t("card.confirm_action")||"Are you sure?";if(!window.confirm(g))return}switch(h){case"more-info":this._moreInfoId(n.entity||r);return;case"toggle":{let g=n.entity||r;g&&this.hass.callService("homeassistant","toggle",{entity_id:g});return}case"navigate":n.navigation_path&&(history.pushState(null,"",n.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0})));return;case"url":n.url_path&&window.open(n.url_path,n.new_tab===!1?"_self":"_blank");return;case"perform-action":case"call-service":{let g=n.perform_action||n.service,[$,V]=(g||"").split(".",2);$&&V&&this.hass.callService($,V,n.data||n.service_data||{},n.target);return}default:this._moreInfoId(n.entity||r)}}}_forecastGraph(){let i=this._dataRange().ref,r=this._mergedForecast();return Ss(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:Wi(r,i),totalWh:this._todayWh,forecastWh:qi(r,i),currentHour:this._isToday()?new Date().getHours():null,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})}_renderToday(){let i=this._todayWh!=null?this._todayWh/1e3:null,r=Object.keys(this._forecasts||{}).length>0,n=this._show("show_forecast")&&r?this._forecastTodayKWh():null,h=n!=null&&n>0,g=h&&i!=null?Math.min(100,Math.round(i/n*100)):null,$=g!=null&&g>=100;return I`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(ws(i))}</span>
      </div>
      ${h?I`<div class="fc-bar">
              <div
                class="fc-fill ${$?"met":""}"
                style="width:${g}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${i!=null?i.toFixed(1):"\u2013"}</b> /
                ${n.toFixed(1)} kWh
              </span>
              <span>
                ${$?this._t("card.exceeded"):this._t("card.of_forecast",{pct:g??0})}
              </span>
            </div>`:""}
    </div>`}};function ja(c,i){if(!i)return null;let r=c?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${i}/${r}icon.png`}var il=[{name:"device",selector:{device:{integration:ze}}}],Ha={appearance:[["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},Wa={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},qa=new Set,Ga=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"stats",icon:"mdi:chart-box-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],sl=4,As=class extends kt{static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),Yt()}setConfig(i){this._config=i||{}}_t(i,r){return Ft(this.hass,i,r)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,La(this.hass).then(i=>{this._providers=i}))}render(){if(!this.hass)return I``;let i=Ga.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_defaults(){let i=oe(this.hass),r=this._config.device&&i.find(n=>n.deviceId===this._config.device)||i[0];return r?le(this.hass,r.ents):{}}_renderRoot(){return I`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${il}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${Ga.map(i=>I`<button
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
      </div>`}_summary(i){if(i==="panels"){let $=this._detectedPanels(),V=$.filter(B=>this._config.panels?.[B]?.hidden).length,U=this._t("editor.panels_count",{n:$.length});return V&&(U+=` \xB7 ${this._t("editor.panels_hidden",{n:V})}`),U}if(i==="forecast"){let $=this._providers;if($===void 0)return this._t("editor.automatic");if(!$.length)return this._t("editor.forecast_none_short");let V=this._config.forecast_config_entries,U=V===void 0?$.length:V.length;return this._t("editor.forecast_selected",{n:U,total:$.length})}if(i==="stats"){let $=this._config.stats;return Array.isArray($)?this._t("editor.stats_count",{n:$.length}):this._t("editor.stats_default")}if(i==="advanced")return this._config.collection_key||this._t("editor.none");let r=(Wa[i]||[]).filter(([$])=>this._config.entities?.[$]).length,n=r?` \xB7 ${this._t("editor.overridden",{n:r})}`:"",h=Ha[i]||[];if(!h.length)return r?this._t("editor.overridden",{n:r}):this._t("editor.automatic");let g=h.filter(([$,V])=>this._config[$]??V);return g.length?g.map(([$])=>this._t(`short.${$}`)).join(", ")+n:`${this._t("editor.nothing_shown")}${n}`}_renderSubpage(i){return I`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${i.id}`)}</span>
      </div>
      ${(Ha[i.id]||[]).map(([r,n,h])=>this._renderToggle(r,n,h))}
      ${i.id==="appearance"?this._renderImagePicker():i.id==="stats"?this._renderStatsPage():i.id==="panels"?this._renderPanelsPage():i.id==="forecast"?this._renderForecastPage():i.id==="advanced"?this._renderAdvancedPage():(Wa[i.id]||[]).map(([r,n])=>this._renderSlot(r,n))}`}_renderImagePicker(){let i=this._config.image,r=this._config.image_url,n=this._config.show_image??!0;return I`<div class="section">
        <ha-icon icon="mdi:image-multiple-outline"></ha-icon>${this._t("editor.image")}
      </div>
      <div class=${n?"img-grid":"img-grid dim"}>
        <button
          class="img-opt ${!i&&!r?"on":""}"
          title=${this._t("editor.automatic")}
          @click=${()=>this._setImage(null)}
        >
          <span class="img-auto"><ha-icon icon="mdi:auto-fix"></ha-icon></span>
          <span class="img-label">${this._t("editor.automatic")}</span>
        </button>
        ${_s.map(h=>I`<button
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
      </div>`}_setImage(i){let r={...this._config,type:`custom:${Mt}`};delete r.image_url,i?r.image=i:delete r.image,this._dispatch(r)}_renderAdvancedPage(){return I`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${i=>{i.stopPropagation(),this._setCollectionKey(i.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(i){let r={...this._config,type:`custom:${Mt}`};i?r.collection_key=i:delete r.collection_key,this._dispatch(r)}_renderStatsPage(){let i=this._config.stats;return Array.isArray(i)?I`<div class="hint top-hint">${this._t("editor.stats_hint")}</div>
      ${i.map((r,n)=>this._renderStatBlock(r,n,i.length))}
      <div class="stats-actions">
        <button class="add-btn" @click=${()=>this._addStat()}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("editor.stats_add")}
        </button>
        <button class="text-btn" @click=${()=>this._resetStats()}>
          ${this._t("editor.stats_reset")}
        </button>
      </div>`:I`<div class="hint top-hint">
          ${this._t("editor.stats_default_hint")}
        </div>
        <button class="filled-btn" @click=${()=>this._seedDefaultStats()}>
          ${this._t("editor.stats_customize")}
        </button>`}_renderStatBlock(i,r,n){let h=[{name:"entity",selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"tap_action",selector:{ui_action:{}}}],g=i.name||i.entity||this._t("editor.stat_n",{n:r+1});return I`<div class="panel-block">
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
          .disabled=${r===n-1}
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
    </div>`}_seedDefaultStats(){let i=this._defaults(),r=n=>{let h=this._config.entities?.[n];return h&&vt(h)&&!pt(h)?h:i[n]||""};this._setStats([{entity:r("sensor.pv_total"),name:this._t("card.solar"),icon:"mdi:solar-power-variant"},{entity:r("sensor.grid_power"),name:this._t("card.grid"),icon:"mdi:transmission-tower"}])}_updateStat(i,r){let n=[...this._config.stats||[]],h={};for(let[g,$]of Object.entries(r))$===""||$==null||(h[g]=$);n[i]=h,this._setStats(n)}_addStat(){this._setStats([...this._config.stats||[],{}])}_removeStat(i){let r=[...this._config.stats||[]];r.splice(i,1),this._setStats(r)}_moveStat(i,r){let n=[...this._config.stats||[]],h=i+r;h<0||h>=n.length||([n[i],n[h]]=[n[h],n[i]],this._setStats(n))}_setStats(i){this._dispatch({...this._config,stats:i,type:`custom:${Mt}`})}_resetStats(){let i={...this._config,type:`custom:${Mt}`};delete i.stats,this._dispatch(i)}_renderForecastPage(){let i=this._providers;if(i===void 0)return I`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!i.length)return I`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let r=this._config.show_forecast??!0,n=this._config.forecast_config_entries,h=g=>n===void 0?!0:n.includes(g);return I`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${r?"":"dim"}>
        ${i.map(g=>I`<div class="row">
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
      </div>`}_renderBrand(i){let r=ja(this.hass,i);return I`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${r?I`<img
            class="brand"
            src=${r}
            @error=${n=>{n.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(i,r){let n=(this._providers||[]).map($=>$.id),h=this._config.forecast_config_entries??n.slice();h=r?[...new Set([...h,i])]:h.filter($=>$!==i);let g={...this._config,type:`custom:${Mt}`};h.length===n.length&&n.every($=>h.includes($))?delete g.forecast_config_entries:g.forecast_config_entries=h,this._dispatch(g)}_detectedPanels(){let i=this._defaults(),r=[];for(let n=1;n<=sl;n++)(i[`sensor.pv${n}_power`]||this._config.entities?.[`sensor.pv${n}_power`])&&r.push(n);return r.length?r:[1,2,3,4]}_renderPanelsPage(){return I`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(i=>this._renderPanelConfig(i))}`}_renderPanelConfig(i){let r=this._config.panels?.[i]||{},n=!!r.hidden,h=`sensor.pv${i}_power`;return I`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${r.name||this._t("editor.panel",{n:i})}</span
        >
        <ha-switch
          .checked=${!n}
          @change=${g=>this._dispatch(this._withPanel(i,{hidden:!g.target.checked}))}
        ></ha-switch>
      </div>
      ${n?I`<div class="hint">${this._t("editor.panel_hidden")}</div>`:I`<ha-form
              .hass=${this.hass}
              .data=${{value:r.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${g=>{g.stopPropagation(),this._dispatch(this._withPanel(i,{name:g.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(h,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(i,r){let n={...this._config.panels||{}},h={...n[i]||{}};for(let[$,V]of Object.entries(r))V===""||V==null||V===!1?delete h[$]:h[$]=V;Object.keys(h).length?n[i]=h:delete n[i];let g={...this._config,panels:n,type:`custom:${Mt}`};return Object.keys(n).length||delete g.panels,g}_renderToggle(i,r,n){return I`<div class="row">
      <ha-icon icon=${n}></ha-icon>
      <span class="row-label">${this._t(`toggle.${i}`)}</span>
      <ha-switch
        .checked=${this._config[i]??r}
        @change=${h=>this._toggleDisplay(i,r,h.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(i,r){return this._modes[i]?this._modes[i]:r?vt(r)&&!pt(r)?"entity":"custom":qa.has(i)?"entity":"auto"}_renderModeChips(i,r){let n=qa.has(i)?["entity","custom"]:["auto","entity","custom"];return I`<div class="modes">
      ${n.map(h=>I`<button
          class="mode ${r===h?"on":""}"
          @click=${()=>{this._modes={...this._modes,[i]:h},h==="auto"&&this._setOverride(i,"")}}
        >
          ${this._t(`editor.mode_${h}`)}
        </button>`)}
    </div>`}_renderSlot(i,r,n){let h=this._config.entities?.[i]||"",g=this._slotMode(i,h),$=this._defaults()[i];return I`<div class="section">
        <ha-icon icon=${r}></ha-icon>${n||this._t(`slot.${i}`)}
      </div>
      ${this._renderModeChips(i,g)}
      ${g==="auto"?I`<div class="hint">
            ${this._t("editor.auto_value",{value:$||this._t("editor.not_found")})}
          </div>`:g==="entity"?I`<ha-form
              .hass=${this.hass}
              .data=${{value:vt(h)&&!pt(h)?h:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${V=>{V.stopPropagation(),this._setOverride(i,V.detail.value.value||"")}}
            ></ha-form>`:I`<ha-form
              .hass=${this.hass}
              .data=${{value:vt(h)&&!pt(h)?"":h}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${V=>{V.stopPropagation(),this._setOverride(i,V.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(i,r){let n={...this._config.entities||{}};r?n[i]=r:delete n[i];let h={...this._config,entities:n,type:`custom:${Mt}`};return Object.keys(n).length||delete h.entities,h}_setOverride(i,r){this._dispatch(this._withOverride(i,r))}_toggleDisplay(i,r,n){let h={...this._config,type:`custom:${Mt}`};n===r?delete h[i]:h[i]=n,this._dispatch(h)}_valueChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${Mt}`};r.device||delete r.device,this._dispatch(r)}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return jt`
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
    `}};var ei=["1","2","3","4","5","6","7","8","9"],It="1",Es=["auto","day","night"],Re="auto";function Ya(c,i){if(c==="day"||c==="night")return c;let r=i?.states?.["sun.sun"];return r?r.state==="below_horizon"?"night":"day":i?.themes?.darkMode?"night":"day"}function rl(c,i,r){let n=ei.includes(c)?c:It;return be(`${ye}/houses/${Ya(i,r)}_${n}.webp`,r)}function yr(c){return!!(c?.house_image||c?.house_image_dark)}function mi(c,i){let r=c?.house_image,n=c?.house_image_dark;if(r||n){let h=Ya(c?.house_mode,i);return be(h==="night"?n||r:r||n,i)}return rl(c?.house,c?.house_mode,i)}function Ps(c,i){let r=ei.includes(c)?c:It;return be(`${ye}/houses/day_${r}.webp`,i)}function Ka(c){let i=[];for(let r of["day","night"])for(let n of ei)i.push({name:`${r}_${n}.webp`,url:be(`${ye}/houses/${r}_${n}.webp`,c)});return i}var gi=["bk621","bk620","re_space_system_battery","re_space_system_battery_gateway","re305_device","re306_dpu_combo","re305_or_re306_battery","re305_or_re306_device","re306_device","re306_dpu_battery","po_space_re305_battery","po_space_battery","po_space_battery_system_battery","po_space_battery_ats","po_space_battery_shp32","po_space_battery_system_dpu","jt303_space_battery","jt321_space_battery","dc303_space_battery"],ce="re_space_system_battery";function De(c,i){let r=gi.includes(c)?c:ce;return be(`${ye}/batteries/${r}.webp`,i)}var al=new Set(["re_space_system_battery","re_space_system_battery_gateway","bk621","re305_device","re306_dpu_combo"]);function Ts(c){return al.has(c||ce)}function Cs(c){let i=gi.includes(c)?c:ce;return i==="bk621"?"bk621":i==="bk620"?"bk620":i==="re305_device"?"re305":i==="re306_dpu_combo"?"re306":"re_space"}function Ms(c){let i=parseInt(c,10)||1;return i===8?3:i>=9?6:Math.min(7,Math.max(1,i))}function br(c){let i=parseInt(c,10)||1;return i===8?3:i>=9?9:Math.min(7,Math.max(1,i))}function Xa(c,i){return be(`${ye}/flows/${c}.json`,i)}var nl={8:3,9:6};function Za(c){return`re_space_solar_${nl[c]||Math.min(7,Math.max(1,c||1))}`}var ke={grid_in:"re_space_gridin",grid_out:"re_space_gridout",home:"re_space_home",bat_in:"jt303_space_battery_input",bat_out:"jt303_space_battery_output",bat_chg:"re_space_bat_chg",bat_dsg:"re_space_bat_dsg",bat_soc:"re_space_bat_soc"};var tn=Po(Ja(),1);var st=1;function _i(c){let i=Number.isFinite(c.grid)?c.grid:0,r=Number.isFinite(c.load)?c.load:0,n=Number.isFinite(c.solar)?c.solar:0,h=Number.isFinite(c.bat)?c.bat:0,g=Number.isFinite(c.loadFromGrid),$=g?Math.max(0,c.loadFromGrid):Math.max(0,Math.min(i,r)),V=Number.isFinite(c.loadFromPv)||Number.isFinite(c.loadFromBat)?(c.loadFromPv||0)+(c.loadFromBat||0):Math.max(0,r-$),U=Math.max(0,h),B=Math.max(0,n-Math.max(0,c.loadFromPv||0)),Z=g?Math.max(0,U-B):Math.max(0,i-$);return{...c,gridToHome:$,deviceToHome:V,chargeFromGrid:Z}}var Qa={re_space:{layers:[{key:"solar",zone:"bg",file:c=>Za(c.route),active:c=>c.solar>st},{key:"grid_in",zone:"bg",file:()=>ke.grid_in,active:c=>c.grid>st},{key:"grid_out",zone:"bg",file:()=>ke.grid_out,active:c=>c.grid<-st},{key:"home",zone:"bg",file:()=>ke.home,active:c=>c.load>st},{key:"bat_in",zone:"bg",file:()=>ke.bat_in,active:c=>c.bat>st},{key:"bat_out",zone:"bg",file:()=>ke.bat_out,active:c=>c.bat<-st},{key:"bat_soc",zone:"on",file:()=>ke.bat_soc,mode:"seek",seek:c=>c.soc,active:c=>c.soc!=null},{key:"bat_chg",zone:"on",file:()=>ke.bat_chg,active:c=>c.bat>st},{key:"bat_dsg",zone:"on",file:()=>ke.bat_dsg,active:c=>c.bat<-st}]},bk621:{layers:[{key:"solar",zone:"bg",file:c=>`bk621/house_solar_lottie_${Ms(c.route)}`,active:c=>c.solar>st},{key:"grid_in",zone:"bg",file:()=>"bk621/grid_to_device_lottie",active:c=>c.chargeFromGrid>st},{key:"grid_out",zone:"bg",file:()=>"bk621/device_to_grid_lottie",active:c=>c.grid<-st},{key:"grid_home",zone:"bg",file:()=>"bk621/grid_to_home_lottie",active:c=>c.gridToHome>st},{key:"home",zone:"bg",file:c=>`bk621/house_device_home_lottie_${Ms(c.route)}`,active:c=>c.deviceToHome>st},{key:"bat_soc",zone:"on",file:()=>"bk621/house_soc_lottie",mode:"seek",seek:c=>c.soc,active:c=>c.soc!=null},{key:"bat_chg",zone:"on",file:()=>"bk621/house_soc_charging_lottie",active:c=>c.bat>st},{key:"bat_dsg",zone:"on",file:()=>"bk621/house_soc_discharging_lottie",active:c=>c.bat<-st}]},bk620:{layers:[{key:"solar",zone:"bg",file:c=>`bk620/house_solar_lottie_${Ms(c.route)}`,active:c=>c.solar>st},{key:"grid_out",zone:"bg",file:()=>"bk621/device_to_grid_lottie",active:c=>c.grid<-st},{key:"grid_home",zone:"bg",file:()=>"bk621/grid_to_home_lottie",active:c=>c.gridToHome>st},{key:"home",zone:"bg",file:()=>"bk620/house_device_home_lottie",active:c=>c.deviceToHome>st}]},re305:{layers:[{key:"solar",zone:"bg",file:c=>`re305/Space_Style${br(c.route)}_Solar_OceanPro_Com`,active:c=>c.solar>st},{key:"grid_in",zone:"bg",file:()=>"re305/Space_Com_GridIn_OceanProOceanPanel_Com",active:c=>c.grid>st},{key:"grid_out",zone:"bg",file:()=>"re305/Space_Com_GridOut_OceanProAdvanced_Com",active:c=>c.grid<-st},{key:"home",zone:"bg",file:()=>"re305/Space_Com_DeviceToHome_OceanPro_Com",active:c=>c.load>st},{key:"bat_in",zone:"bg",file:()=>"re305/OceanPro_E7_Bat_In_Lottie",active:c=>c.bat>st},{key:"bat_out",zone:"bg",file:()=>"re305/OceanPro_E7_Bat_Out_Lottie",active:c=>c.bat<-st},{key:"bat_soc",zone:"on",file:()=>"re305/OceanPro_E7_BatSoc_Lottie",mode:"seek",seek:c=>c.soc,active:c=>c.soc!=null},{key:"bat_chg",zone:"on",file:()=>"re305/OceanPro_E7_Bat_Charging_Lottie",active:c=>c.bat>st},{key:"bat_dsg",zone:"on",file:()=>"re305/OceanPro_E7_Bat_Discharging_Lottie",active:c=>c.bat<-st},{key:"bat_backup",zone:"on",file:()=>"re305/OceanPro_E7_Bat_Backup_Ratio_Lottie",mode:"seek",seek:c=>c.backup,active:c=>c.backup>0&&c.backup<100}]},re306:{layers:[{key:"solar",zone:"bg",file:c=>`re305/Space_Style${br(c.route)}_Solar_OceanPro_Com`,active:c=>c.solar>st},{key:"grid_in",zone:"bg",file:()=>"re305/Space_Com_GridIn_OceanProOceanPanel_Com",active:c=>c.grid>st},{key:"grid_out",zone:"bg",file:()=>"re305/Space_Com_GridOut_OceanProAdvanced_Com",active:c=>c.grid<-st},{key:"home",zone:"bg",file:()=>"re305/Space_Com_DeviceToHome_OceanPro_Com",active:c=>c.load>st},{key:"bat_in",zone:"bg",file:()=>"re306/OceanPro_Panel_DpuBat_In_Lottie",active:c=>c.bat>st},{key:"bat_out",zone:"bg",file:()=>"re306/OceanPro_Panel_DpuBat_Out_Lottie",active:c=>c.bat<-st},{key:"bat_soc",zone:"on",file:()=>"re306/OceanPro_Panel_DpuBatSoc_Lottie",mode:"seek",seek:c=>c.soc,active:c=>c.soc!=null},{key:"bat_chg",zone:"on",file:()=>"re306/OceanPro_Panel_DpuBat_Charging_Lottie",active:c=>c.bat>st},{key:"bat_dsg",zone:"on",file:()=>"re306/OceanPro_Panel_DpuBat_Discharging_Lottie",active:c=>c.bat<-st}]}},vi=class{constructor(){this._anims={}}sync(i,{hass:r,theme:n,showFlows:h,batOverlays:g,states:$}){if(!i)return;let V=(Qa[n]||Qa.re_space).layers,U=new Set;for(let B of V){let Z=i.querySelector(`[data-flow="${B.key}"]`);if(!Z)continue;U.add(B.key);let X=h&&B.active($)&&(B.zone!=="on"||g);this._setFlow(r,Z,B,X,$)}for(let B of i.querySelectorAll("[data-flow]"))U.has(B.dataset.flow)||(this._anims[B.dataset.flow]?.anim?.pause(),B.style.opacity="0")}destroy(){for(let i of Object.values(this._anims))i.anim?.destroy();this._anims={}}_setFlow(i,r,n,h,g){let $=n.key,V=n.file(g),U=n.mode||"play",B=this._anims[$];if(h&&(!B||B.file!==V)){B?.anim?.destroy();let Z=tn.default.loadAnimation({container:r,renderer:"svg",loop:U!=="seek",autoplay:!1,path:Xa(V,i),rendererSettings:{preserveAspectRatio:"xMidYMin meet"}});B=this._anims[$]={anim:Z,file:V,ready:!1,mode:U,seek:n.seek},Z.addEventListener("DOMLoaded",()=>{B.ready=!0,this._applyFlow(B,h,g)})}B&&(B.seek=n.seek,this._applyFlow(B,h,g)),r.style.opacity=h?"1":"0"}_applyFlow(i,r,n){if(i.ready){if(i.mode==="seek"){i.anim.goToAndStop(Math.max(0,Math.min(100,i.seek?.(n)??0)),!0);return}r?i.anim.play():i.anim.pause()}}};var en=jt`
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
`;var Is=class extends kt{static styles=en;static get properties(){return{hass:{},_config:{}}}constructor(){super(),this._flows=new vi}connectedCallback(){super.connectedCallback(),Yt()}disconnectedCallback(){super.disconnectedCallback(),this._flows.destroy()}setConfig(i){this._config=i||{}}static getConfigElement(){return document.createElement(`${Qt}-editor`)}static getStubConfig(){return{house:It}}getCardSize(){return 7}_t(i,r){return Ft(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=oe(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_state(i){let r=this._config.entities?.[i];if(r)return vt(r)&&!pt(r)?this.hass.states[r]:{state:r,attributes:{}};let n=this._map?.[i];return n?this.hass.states[n]:void 0}_entityId(i){let r=this._config.entities?.[i];return r&&vt(r)&&!pt(r)?r:this._map?.[i]}_moreInfo(i){let r=this._entityId(i);r&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:r},bubbles:!0,composed:!0}))}_grid(){let i=this._state("sensor.grid_power");return lt(i??this._state("sensor.sys_grid_power"))}_flowStates(){let i=parseInt(this._config.house||It,10)||1;return this._device?_i({grid:this._grid(),solar:lt(this._state("sensor.pv_total")),load:lt(this._state("sensor.sys_load")),bat:lt(this._state("sensor.bat_power")),soc:lt(this._state("sensor.cms_batt_soc")),backup:lt(this._state("number.backup_reserve")),loadFromGrid:lt(this._state("sensor.load_from_grid")),loadFromPv:lt(this._state("sensor.load_from_pv")),loadFromBat:lt(this._state("sensor.load_from_bat")),route:i}):_i({grid:-400,solar:1500,load:700,bat:500,soc:65,backup:20,loadFromPv:700,route:i})}updated(i){super.updated(i),this._flows.sync(this.renderRoot,{hass:this.hass,theme:Cs(this._config.battery),showFlows:this._show("show_flows"),batOverlays:this._show("show_battery")&&Ts(this._config.battery),states:this._flowStates()});let r=!!(this._config?.title&&!pt(this._config.title));this.toggleAttribute("has-title",r)}render(){if(!this.hass)return I``;let i=this._device,r=!i;this._map=i?le(this.hass,i.ents):{};let n=this._config.title&&!pt(this._config.title)?this._config.title:"",h=this._show("show_battery");return I`<ha-card>
      ${n?I`<div class="title">${n}</div>`:""}
      <div class="stage">
        <img
          class="layer house"
          src=${mi(this._config,this.hass)}
          alt=""
        />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="grid_home"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${h?I`<img
              class="layer box"
              src=${De(this._config.battery,this.hass)}
              alt=""
            />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        <div class="layer flow z-box" data-flow="bat_backup"></div>
        ${this._renderLeaders()} ${this._renderStats()}
        ${h?this._renderBattery():""}
        ${r?this._renderSetupWarning():""}
      </div>
    </ha-card>`}_renderSetupWarning(){return I`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`}_renderLeaders(){return I`<div class="leaders">
      ${this._show("show_grid")?I`<span class="leader grid"></span>`:""}
      ${this._show("show_solar")?I`<span class="leader solar"></span>`:""}
      ${this._show("show_home")?I`<span class="leader home"></span>`:""}
    </div>`}_renderStats(){let i=!this._device,r=this._flowStates(),n=[];if(this._show("show_grid")){let h=i||!Number.isFinite(r.loadFromGrid)?null:Math.max(0,r.loadFromGrid),g=!i&&(h!=null?h>st:r.grid>st),$=!i&&!g&&r.grid<-st,V=h??r.grid;n.push({slot:g&&h!=null?"sensor.load_from_grid":"sensor.grid_power",fallback:"sensor.sys_grid_power",anchor:"col-grid",value:i?null:g?V:r.grid!=null?Math.abs(r.grid):null,label:g?this._t("house.from_grid"):$?this._t("house.to_grid"):this._t("house.grid"),cls:g?"import":$?"export":""})}return this._show("show_solar")&&n.push({slot:"sensor.pv_total",anchor:"col-solar",value:i?null:r.solar,label:this._t("card.solar"),cls:!i&&r.solar>st?"solar":""}),this._show("show_home")&&n.push({slot:"sensor.sys_load",anchor:"col-home",value:i?null:r.load,label:this._t("house.home"),cls:!i&&r.load>st?"home":""}),n.length?I`<div class="stats">
      ${n.map(h=>{let g=he(h.value);return I`<div
          class="stat ${h.anchor} ${h.cls} clickable"
          @click=${()=>this._moreInfo(this._entityId(h.slot)?h.slot:h.fallback||h.slot)}
        >
          <div class="stat-value">
            <span class="num">${g.n}</span><span class="unit">${g.u}</span>
          </div>
          <div class="stat-label">${h.label}</div>
        </div>`})}
    </div>`:""}_renderBattery(){let i=lt(this._state("sensor.cms_batt_soc")),r=lt(this._state("sensor.bat_power")),n=r!=null&&r>st,h=r!=null&&r<-st,g=n?"charge":h?"discharge":"",$=n?this._t("card.charging"):h?this._t("card.discharging"):this._t("house.idle"),V=r!=null&&(n||h)?xe(Math.abs(r)):null;return I`<div
      class="battery ${g} clickable"
      @click=${()=>this._moreInfo(this._entityId("sensor.cms_batt_soc")?"sensor.cms_batt_soc":"sensor.bat_power")}
    >
      <div class="battery-line">
        ${V?I`<ha-icon
              icon=${n?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon
            ><span class="battery-power">${V}</span>`:""}
        ${i!=null?I`<span class="battery-soc">${Math.round(i)}%</span>`:""}
      </div>
      <div class="battery-label">${$}</div>
    </div>`}};var ol=(()=>{let c=new Uint32Array(256);for(let i=0;i<256;i++){let r=i;for(let n=0;n<8;n++)r=r&1?3988292384^r>>>1:r>>>1;c[i]=r>>>0}return c})();function ll(c){let i=4294967295;for(let r=0;r<c.length;r++)i=ol[(i^c[r])&255]^i>>>8;return(i^4294967295)>>>0}var sn=33,rn=0;function an(c){let i=new TextEncoder,r=[],n=[],h=0;for(let V of c){let U=i.encode(V.name),B=ll(V.data),Z=V.data.length,X=new DataView(new ArrayBuffer(30));X.setUint32(0,67324752,!0),X.setUint16(4,20,!0),X.setUint16(6,0,!0),X.setUint16(8,0,!0),X.setUint16(10,rn,!0),X.setUint16(12,sn,!0),X.setUint32(14,B,!0),X.setUint32(18,Z,!0),X.setUint32(22,Z,!0),X.setUint16(26,U.length,!0),X.setUint16(28,0,!0),r.push(new Uint8Array(X.buffer),U,V.data);let nt=new DataView(new ArrayBuffer(46));nt.setUint32(0,33639248,!0),nt.setUint16(4,20,!0),nt.setUint16(6,20,!0),nt.setUint16(8,0,!0),nt.setUint16(10,0,!0),nt.setUint16(12,rn,!0),nt.setUint16(14,sn,!0),nt.setUint32(16,B,!0),nt.setUint32(20,Z,!0),nt.setUint32(24,Z,!0),nt.setUint16(28,U.length,!0),nt.setUint16(30,0,!0),nt.setUint16(32,0,!0),nt.setUint16(34,0,!0),nt.setUint16(36,0,!0),nt.setUint32(38,0,!0),nt.setUint32(42,h,!0),n.push(new Uint8Array(nt.buffer),U),h+=30+U.length+Z}let g=n.reduce((V,U)=>V+U.length,0),$=new DataView(new ArrayBuffer(22));return $.setUint32(0,101010256,!0),$.setUint16(8,c.length,!0),$.setUint16(10,c.length,!0),$.setUint32(12,g,!0),$.setUint32(16,h,!0),$.setUint16(20,0,!0),new Blob([...r,...n,new Uint8Array($.buffer)],{type:"application/zip"})}var hl=[{name:"device",selector:{device:{integration:ze}}}],nn=[{id:"appearance",icon:"mdi:palette-outline"},{id:"display",icon:"mdi:eye-outline"},{id:"battery",icon:"mdi:home-battery-outline"},{id:"entities",icon:"mdi:tune-variant"}],on=[["show_flows",!0,"mdi:transit-connection-variant"],["show_grid",!0,"mdi:transmission-tower"],["show_solar",!0,"mdi:solar-power-variant"],["show_home",!0,"mdi:home-lightning-bolt"],["show_battery",!0,"mdi:home-battery"]],ln=[["sensor.sys_grid_power","mdi:transmission-tower"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.sys_load","mdi:home-lightning-bolt"],["sensor.bat_power","mdi:battery-charging"],["sensor.cms_batt_soc","mdi:battery-high"]],cl=[["house_image","light","mdi:white-balance-sunny"],["house_image_dark","dark","mdi:weather-night"]],Ls=class extends kt{static get properties(){return{hass:{},_config:{},_page:{state:!0},_zipping:{state:!0},_uploading:{state:!0}}}constructor(){super(),this._page=null,this._zipping=!1,this._uploading=null}connectedCallback(){super.connectedCallback(),Yt()}setConfig(i){this._config=i||{}}_t(i,r){return Ft(this.hass,i,r)}_defaults(){let i=oe(this.hass),r=this._config.device&&i.find(n=>n.deviceId===this._config.device)||i[0];return r?le(this.hass,r.ents):{}}render(){if(!this.hass)return I``;let i=nn.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_renderRoot(){return I`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${hl}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      <div class="nav">
        ${nn.map(i=>I`<button
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
      </div>`}_summary(i){if(i==="appearance"){if(yr(this._config))return this._t("house.editor.custom");let r=this._config.house||It,n=this._config.house_mode||Re;return`${this._t("house.editor.style_n",{n:r})} \xB7 ${this._t(`house.mode.${n}`)}`}if(i==="display"){let r=on.filter(([n,h])=>this._config[n]??h);return r.length?r.map(([n])=>this._t(`house.short.${n}`)).join(", "):this._t("editor.nothing_shown")}if(i==="battery"){let r=this._config.show_battery??!0,n=this._t(`house.battery.${this._config.battery||ce}`);return r?n:this._t("editor.nothing_shown")}if(i==="entities"){let r=ln.filter(([n])=>this._config.entities?.[n]).length;return r?this._t("editor.overridden",{n:r}):this._t("editor.automatic")}return""}_renderSubpage(i){return I`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`house.page.${i.id}`)}</span>
      </div>
      ${i.id==="appearance"?this._renderAppearancePage():i.id==="display"?on.map(([r,n,h])=>this._renderToggle(r,n,h)):i.id==="battery"?this._renderBatteryPage():this._renderEntitiesPage()}`}_renderAppearancePage(){let i=this._config.house||It,r=yr(this._config),n=this._config.house_mode||Re;return I`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="house-grid">
        ${ei.map(h=>I`<button
            class="house-opt ${!r&&i===h?"on":""}"
            title=${this._t("house.editor.style_n",{n:h})}
            @click=${()=>this._selectHouse(h)}
          >
            <img src=${Ps(h,this.hass)} loading="lazy" alt=${h} />
            <span class="house-label">${this._t("house.editor.style_n",{n:h})}</span>
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${Es.map(h=>I`<button
            class="mode ${n===h?"on":""}"
            @click=${()=>this._set("house_mode",h,Re)}
          >
            ${this._t(`house.mode.${h}`)}
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:image-edit-outline"></ha-icon>${this._t("house.editor.custom")}
      </div>
      <div class="hint">${this._t("house.editor.custom_hint")}</div>
      ${cl.map(([h,g,$])=>this._renderUploadSlot(h,g,$))}
      <button
        class="link-btn"
        ?disabled=${this._zipping}
        @click=${this._downloadHouses}
      >
        <ha-icon icon=${this._zipping?"mdi:progress-download":"mdi:download"}></ha-icon>
        <span
          >${this._zipping?this._t("house.editor.preparing"):this._t("house.editor.download_zip")}</span
        >
      </button>`}_renderUploadSlot(i,r,n){let h=this._config[i]||"",g=this._uploading===i,$=this._t(`house.editor.custom_${r}`);return I`<div class="upload-slot">
      <div class="upload-slot-label">
        <ha-icon icon=${n}></ha-icon><span>${$}</span>
      </div>
      ${h?I`<div class="custom-img">
            <img src=${h} alt="" />
            <button class="link-btn danger" @click=${()=>this._set(i,"","")}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
              <span>${this._t("house.editor.custom_remove")}</span>
            </button>
          </div>`:I`<label class="upload ${g?"busy":""}">
            <ha-icon icon=${g?"mdi:progress-upload":"mdi:image-plus"}></ha-icon>
            <span>${g?this._t("house.editor.uploading"):$}</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              ?disabled=${this._uploading}
              @change=${V=>this._pickCustomImage(V,i)}
            />
          </label>`}
    </div>`}_renderBatteryPage(){let i=this._config.battery||ce,r=this._config.show_battery??!0;return I`<div class="hint top-hint">${this._t("house.editor.battery_hint")}</div>
      <div class=${r?"batt-grid":"batt-grid dim"}>
        ${gi.map(n=>I`<button
            class="batt-opt ${i===n?"on":""}"
            title=${this._t(`house.battery.${n}`)}
            @click=${()=>this._set("battery",n,ce)}
          >
            <span
              class="batt-thumb"
              style=${`background-image:url(${De(n,this.hass)})`}
            ></span>
            <span class="batt-label">${this._t(`house.battery.${n}`)}</span>
          </button>`)}
      </div>`}_renderEntitiesPage(){return I`<div class="hint top-hint">${this._t("house.editor.entities_hint")}</div>
      ${ln.map(([i,r])=>this._renderSlot(i,r))}`}_renderToggle(i,r,n){return I`<div class="row">
      <ha-icon icon=${n}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${i}`)}</span>
      <ha-switch
        .checked=${this._config[i]??r}
        @change=${h=>this._set(i,h.target.checked,r)}
      ></ha-switch>
    </div>`}_renderSlot(i,r){let n=this._config.entities?.[i]||"",h=this._defaults()[i],g=vt(n)&&!pt(n)?n:"";return I`<div class="slot">
      <ha-icon icon=${r}></ha-icon>
      <ha-form
        class="slot-form"
        .hass=${this.hass}
        .data=${{value:g}}
        .schema=${[{name:"value",selector:{entity:{}}}]}
        .computeLabel=${()=>`${this._t(`slot.${i}`)}${h?` (${this._t("editor.auto_value",{value:h})})`:""}`}
        @value-changed=${$=>{$.stopPropagation(),this._setOverride(i,$.detail.value.value||"")}}
      ></ha-form>
    </div>`}_deviceChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${Qt}`};r.device||delete r.device,this._dispatch(r)}_set(i,r,n){let h={...this._config,type:`custom:${Qt}`};r===n||r===""||r==null?delete h[i]:h[i]=r,this._dispatch(h)}_selectHouse(i){let r={...this._config,type:`custom:${Qt}`};delete r.house_image,delete r.house_image_dark,i===It?delete r.house:r.house=i,this._dispatch(r)}async _pickCustomImage(i,r){let n=i.target.files?.[0];if(i.target.value="",!(!n||this._uploading)){this._uploading=r;try{let h=new FormData;h.append("file",n);let g=await this.hass.fetchWithAuth("/api/image/upload",{method:"POST",body:h});if(!g.ok)throw new Error(`upload failed: ${g.status}`);let $=await g.json();this._set(r,`/api/image/serve/${$.id}/original`,"")}catch(h){console.error("EcoFlow House card: image upload failed",h)}finally{this._uploading=null}}}async _downloadHouses(){if(!this._zipping){this._zipping=!0;try{let i=await Promise.all(Ka(this.hass).map(async({name:h,url:g})=>{let $=await fetch(g);if(!$.ok)throw new Error(`${g}: ${$.status}`);return{name:h,data:new Uint8Array(await $.arrayBuffer())}})),r=URL.createObjectURL(an(i)),n=document.createElement("a");n.href=r,n.download="ecoflow-house-images.zip",n.click(),URL.revokeObjectURL(r)}catch(i){console.error("EcoFlow House card: failed to build zip",i)}finally{this._zipping=!1}}}_setOverride(i,r){let n={...this._config.entities||{}};r?n[i]=r:delete n[i];let h={...this._config,entities:n,type:`custom:${Qt}`};Object.keys(n).length||delete h.entities,this._dispatch(h)}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return jt`
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
    `}};var hn=jt`
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
  /* Home Assistant Cast (e.g. a Nest Hub) and kiosk-mode (?kiosk / ?hide_header)
     have no top header, so don't reserve room for one — otherwise an empty strip
     is left at the bottom. */
  :host([cast]),
  :host([no-header]) {
    --ef-view: 100vh;
  }
  @supports (height: 100dvh) {
    :host([cast]),
    :host([no-header]) {
      --ef-view: 100dvh;
    }
  }
  ha-card {
    overflow: hidden;
    position: relative;
    isolation: isolate;
    z-index: 0;
    /* Fill the viewport in a panel view, but never exceed the container — so the
       card-editor's short preview pane (and masonry layouts) cap it instead of
       overflowing to full screen height. */
    height: var(--ef-view);
    max-height: 100%;
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
  /* In the card-editor preview, use a fixed, sensible height instead of the
     full viewport so the preview pane isn't overrun. */
  :host([in-preview]) ha-card {
    height: 460px;
    max-height: 460px;
  }
  .shell {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
  }

  /* -- left icon rail (minimal, app-style: just icons, no boxes) --
     The rail FLOATS above the main area: it's absolutely positioned, claims no
     layout width of its own (so the house illustration uses the full card
     width), and overlays the left edge. Its empty vertical space is click-
     through (pointer-events) so only the buttons are interactive. Vertical
     alignment of the items is configurable (start / center / end), labels under
     the icons are an opt-in, and the icon+label size scales with --rail-scale
     (the rail_size config option). */
  .rail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: auto;
    max-width: calc(96px * var(--rail-scale, 1));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: calc(26px * var(--rail-scale, 1));
    padding: 30px 6px;
    box-sizing: border-box;
    z-index: 4;
    pointer-events: none;
  }
  .rail.align-center {
    justify-content: center;
  }
  .rail.align-end {
    justify-content: flex-end;
  }
  .rail.has-labels {
    gap: calc(18px * var(--rail-scale, 1));
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
    width: auto;
    pointer-events: auto;
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
    --mdc-icon-size: calc(27px * var(--rail-scale, 1));
  }
  .rail-label {
    font-size: calc(0.6em * var(--rail-scale, 1));
    line-height: 1.1;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* -- main area (full width; the rail floats over its left edge) -- */
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
    /* Clear the floating rail on the left so a title doesn't sit under it. */
    padding: 12px 20px 0 calc(46px * var(--rail-scale, 1));
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
  .topbar-center {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
  }
  .clock {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.05;
    color: var(--sp-text);
  }
  .clock-time {
    font-size: calc(1.5em * var(--ef-scale, 1));
    font-weight: 600;
    letter-spacing: 0.5px;
    font-variant-numeric: tabular-nums;
  }
  .clock-date {
    font-size: calc(0.62em * var(--ef-scale, 1));
    color: var(--sp-muted);
    font-weight: 500;
    margin-top: 1px;
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
    font-size: calc(1.02em * var(--ef-scale, 1));
    font-weight: 600;
  }
  .w-grp {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
  }
  .w-grp ha-icon {
    --mdc-icon-size: calc(19px * var(--ef-scale, 1));
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
    font-size: calc(clamp(10px, 1.5vw, 13px) * var(--ef-scale, 1));
    color: var(--sp-muted);
    font-weight: 500;
  }
  .ov-ic {
    --mdc-icon-size: calc(14px * var(--ef-scale, 1));
  }
  .ov-dot {
    width: calc(7px * var(--ef-scale, 1));
    height: calc(7px * var(--ef-scale, 1));
    border-radius: 50%;
    margin-left: 2px;
  }
  /* The value block carries the scaled base size; unit/secondary are relative
     to it so they scale together (--ef-scale set per overlay). */
  .ov-value {
    display: inline-flex;
    align-items: baseline;
    gap: 2px;
    line-height: 1.05;
    font-size: calc(clamp(16px, 2.7vw, 26px) * var(--ef-scale, 1));
  }
  .ov-num {
    font-size: 1em;
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
    font-size: 0.7em;
    font-weight: 700;
    color: var(--sp-pos);
    margin-left: 4px;
  }

  /* -- bottom tiles -- */
  /* Smaller by default so the house gets more room; --ef-scale (set on .tiles)
     resizes the whole row together. */
  .tiles {
    flex: 0 0 auto;
    display: flex;
    gap: 12px;
    padding: 6px 18px 14px;
    overflow-x: auto;
    z-index: 3;
  }
  .tile {
    flex: 1 1 0;
    min-width: 116px;
    display: flex;
    flex-direction: column;
    gap: calc(5px * var(--ef-scale, 1));
    border: 1px solid var(--sp-tile-border);
    text-align: left;
    background: var(--sp-tile);
    color: var(--sp-text);
    border-radius: 14px;
    padding: calc(10px * var(--ef-scale, 1)) calc(13px * var(--ef-scale, 1));
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
    font-size: calc(0.82em * var(--ef-scale, 1));
    color: var(--sp-muted);
    line-height: 1.2;
  }
  .tile-head ha-icon {
    --mdc-icon-size: calc(18px * var(--ef-scale, 1));
    color: var(--sp-muted);
    flex: none;
  }
  .tile-value {
    display: flex;
    align-items: baseline;
    gap: 4px;
    font-size: calc(clamp(17px, 2.2vw, 25px) * var(--ef-scale, 1));
  }
  .tile-num {
    font-size: 1em;
    font-weight: 800;
    line-height: 1;
  }
  .tile-unit {
    font-size: 0.5em;
    font-weight: 600;
    color: var(--sp-muted);
  }
  .tile-secondary {
    font-size: calc(0.72em * var(--ef-scale, 1));
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
    --primary-background-color: #14171b;
    --secondary-text-color: var(--sp-muted);
    --disabled-text-color: #6b7178;
    /* Opaque surfaces — these vars also drive any dialog (more-info, etc.)
       opened from an embedded card, so a translucent value here would make
       those dialogs see-through. */
    --card-background-color: #1c2026;
    --ha-card-background: #1c2026;
    --mdc-theme-surface: #22262d;
    --dialog-background-color: #22262d;
    --mdc-dialog-scrim-color: rgba(0, 0, 0, 0.6);
    --secondary-background-color: #2a2f37;
    --divider-color: rgba(255, 255, 255, 0.1);
    --state-icon-color: var(--sp-text);
    --paper-item-icon-color: var(--sp-muted);
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

  /* -- "Solar today" dialog (same forecast/production graph as the Energy
     card; theme vars resolve to the normal HA theme inside the dialog) -- */
  .dlg-body {
    padding: 4px 4px 8px;
  }
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

  /* per-array solar production (shared views/panels.js) */
  .dlg-section {
    margin: 18px 4px 6px;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .empty {
    padding: 16px 8px;
    color: var(--secondary-text-color);
    text-align: center;
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
  .panel-row.clickable {
    cursor: pointer;
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
`;var dn="sensor.grid_power",pn="sensor.sys_grid_power",fn="sensor.pv_total",dl="sensor.sys_load",un="sensor.bat_power",mn="sensor.cms_batt_soc",pl="sensor.load_from_grid",fl="sensor.load_from_pv",ul="sensor.load_from_bat",ml="number.backup_reserve",cn={center:"translate(-50%, -50%)","top-left":"translate(0, 0)","top-center":"translate(-50%, 0)","top-right":"translate(-100%, 0)","bottom-left":"translate(0, -100%)","bottom-center":"translate(-50%, -100%)","bottom-right":"translate(-100%, -100%)"},gn="var(--energy-solar-color, #ff9800)",vn="var(--energy-grid-consumption-color, #488fc2)",gl="var(--energy-grid-return-color, #8353d1)",_n="var(--energy-battery-in-color, #3ddc84)",vl="var(--energy-battery-out-color, #f06292)",zs={solar:{labelKey:"card.solar",icon:"mdi:solar-power-variant",slot:fn,format:"power",color:c=>c>st?gn:null},grid:{labelKey:"house.grid",icon:"mdi:transmission-tower",slot:dn,slotFallback:pn,format:"power-abs",color:c=>c>st?vn:c<-st?gl:null},battery:{labelKey:"card.battery",icon:"mdi:home-battery",slot:un,format:"power-abs",color:c=>c>st?_n:c<-st?vl:null,secondarySlot:mn,secondaryUnit:"%"}},Os={solar_today:{labelKey:"space.preset.solar_today",icon:"mdi:solar-power",color:gn,energyKey:"solar",format:"energy",secondaryKey:"space.today"},usage:{labelKey:"space.preset.usage",icon:"mdi:home-lightning-bolt",color:vn,energyKey:"consumption",format:"energy",secondaryKey:"space.today"},energy_independence:{labelKey:"space.preset.energy_independence",icon:"mdi:leaf",color:_n,energyKey:"independence",format:"percent"}},Rs=class extends kt{static styles=hn;static get properties(){return{hass:{},_config:{},_tab:{state:!0},_dialog:{state:!0}}}constructor(){super(),this._tab=0,this._flows=new vi,this._tmplUnsub={},this._tmplResults={},this._embed={path:null,status:null,els:[]},this._energy=void 0,this._energyTimer=null,this._clock="",this._clockTimer=null,this._dialog=null,this._solarHourly={},this._solarTotalWh=void 0,this._solarForecasts={},this._fcTip=null}connectedCallback(){super.connectedCallback(),Yt(),this._reflectKiosk(),this._refreshEnergy(),this._energyTimer=setInterval(()=>this._refreshEnergy(),300*1e3),this._clock=this._formatClock(),this._clockTimer=setInterval(()=>{let i=this._formatClock();i!==this._clock&&(this._clock=i,this.requestUpdate())},1e3)}disconnectedCallback(){super.disconnectedCallback(),this._flows.destroy();for(let i of Object.values(this._tmplUnsub))typeof i=="function"&&i();this._tmplUnsub={},this._energyTimer&&clearInterval(this._energyTimer),this._energyTimer=null,this._clockTimer&&clearInterval(this._clockTimer),this._clockTimer=null}_reflectCast(){let i=!1;try{let r=this.hass?.hassUrl?.("/");r&&(i=new URL(r,location.href).origin!==location.origin)}catch{}this.toggleAttribute("cast",i)}_reflectKiosk(){let i=!1;try{let r=n=>/[?&#](kiosk|hide_header)(?:=(?!false)[^&#]*)?(?:[&#]|$)/i.test(n);i=r(location.search)||r(location.hash)}catch{}this.toggleAttribute("no-header",i)}_formatClock(){let i=new Date;try{return i.toLocaleTimeString(this.hass?.locale?.language||void 0,{hour:"2-digit",minute:"2-digit"})}catch{return i.toTimeString().slice(0,5)}}firstUpdated(){let i=this;for(let r=0;r<8&&i;r++){let n=i.getRootNode?.()?.host;if(n&&/^hui-(card-preview|dialog-edit-card)/.test(n.localName||"")){this.toggleAttribute("in-preview",!0);break}i=n}}async _refreshEnergy(){if(!this.hass||!(this._config.tiles||[]).some(n=>Os[n.preset]&&!pt(n.template)&&!(n.entity&&vt(n.entity))&&!n.slot))return;let r=await za(this.hass);this._energy=r,this.requestUpdate()}setConfig(i){this._config=i||{}}static getConfigElement(){return document.createElement(`${te}-editor`)}static getStubConfig(){return{tabs:[{id:"home",icon:"mdi:home",label:"Home"}],overlays:[{id:"solar",preset:"solar",x:30,y:27,anchor:"center"},{id:"grid",preset:"grid",x:22,y:62,anchor:"center"},{id:"battery",preset:"battery",x:52,y:62,anchor:"center"}],tiles:[{id:"solar",preset:"solar_today"},{id:"usage",preset:"usage"},{id:"independence",preset:"energy_independence"}],house:It}}getCardSize(){return 12}_t(i,r){return Ft(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=oe(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_slotEntity(i){return this._map?.[i]}_state(i){return this._slotState(i)}_entityId(i){return this._slotEntity(i)}_moreInfoId(i){this._moreInfo(i)}_slotState(i){let r=this._slotEntity(i);return r?this.hass.states[r]:void 0}_grid(){let i=this._slotState(dn);return lt(i??this._slotState(pn))}_flowStates(){let i=parseInt(this._config.house||It,10)||1;return this._device?_i({grid:this._grid(),solar:lt(this._slotState(fn)),load:lt(this._slotState(dl)),bat:lt(this._slotState(un)),soc:lt(this._slotState(mn)),backup:lt(this._slotState(ml)),loadFromGrid:lt(this._slotState(pl)),loadFromPv:lt(this._slotState(fl)),loadFromBat:lt(this._slotState(ul)),route:i}):_i({grid:-400,solar:1500,load:700,bat:500,soc:65,backup:20,loadFromPv:700,route:i})}_moreInfo(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}async _openSolar(){this._dialog="solar",this._solarTotalWh===void 0&&await this._refreshSolar()}async _refreshSolar(){let i=this._slotEntity("sensor.solar_energy"),r=new Date,n=new Date(r.getFullYear(),r.getMonth(),r.getDate()),h=i?await bs(this.hass,i,n):null;this._solarHourly=h||{},this._solarTotalWh=h?Object.values(h).reduce((g,$)=>g+($||0),0):null,this._solarForecasts=await Hi(this.hass),this.requestUpdate()}_renderSolarDialog(){let i=new Date,r=ys(this._solarForecasts||{}),n=Ss(this,{actual:this._solarHourly||{},forecast:Wi(r,i),totalWh:this._solarTotalWh,forecastWh:qi(r,i),currentHour:i.getHours(),showForecast:Object.keys(r).length>0,title:this._t("card.today")});return I`<ha-adaptive-dialog
      open
      width="large"
      header-title=${this._t("card.solar")}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">
        ${n}
        <div class="dlg-section">${this._t("panels.title")}</div>
        ${xs(this)}
      </div>
    </ha-adaptive-dialog>`}async _syncTemplates(){if(!this.hass?.connection)return;let i=[];for(let r of this._config.overlays||[])pt(r.template)&&i.push(r.template),pt(r.secondary)&&i.push(r.secondary);for(let r of this._config.tiles||[])pt(r.template)&&i.push(r.template),pt(r.secondary)&&i.push(r.secondary);for(let r of i)if(!this._tmplUnsub[r]){this._tmplUnsub[r]=!0;try{this._tmplUnsub[r]=await this.hass.connection.subscribeMessage(n=>{this._tmplResults[r]=n.result,this.requestUpdate()},{type:"render_template",template:r})}catch{this._tmplResults[r]="\u26A0",this.requestUpdate()}}for(let r of Object.keys(this._tmplUnsub))if(!i.includes(r)){let n=this._tmplUnsub[r];typeof n=="function"&&n(),delete this._tmplUnsub[r],delete this._tmplResults[r]}}_entityDisplay(i,r){let n=i.attributes?.unit_of_measurement||"";if(!r.attribute&&typeof this.hass.formatEntityState=="function")try{let $=this.hass.formatEntityState(i);if($!=null&&$!==""){let V=$;return n&&$.endsWith(n)&&(V=$.slice(0,$.length-n.length).trim()),{num:V,unit:r.unit??(V===$?"":n)}}}catch{}let h=r.attribute?i.attributes?.[r.attribute]:i.state,g=h==null||h===""?"\u2013":String(h);return{num:g,unit:g==="\u2013"?"":r.unit??(r.attribute?"":n)}}_fmt(i,r){let n=Number(r);return i==="power"?he(n):i==="power-abs"?he(Math.abs(n)):i==="energy"?ws(n):i==="percent"?{n:Number.isFinite(n)?String(Math.round(n)):"\u2013",u:"%"}:{n:r==null||r===""?"\u2013":String(r),u:""}}_overlayView(i){let r=i.preset?zs[i.preset]:null,n={label:i.label??(r?this._t(r.labelKey):""),icon:i.icon??r?.icon,num:"",unit:"",color:i.color||null,entityId:i.tap_entity||null,secondary:"",dot:i.dot};if(pt(i.template)){let h=this._tmplResults[i.template];n.num=h==null?"\u2026":String(h),n.unit=h==null?"":i.unit||""}else{let h=i.entity&&vt(i.entity)&&i.entity||i.slot&&this._slotEntity(i.slot)||r?.slot&&this._slotEntity(r.slot)||r?.slotFallback&&this._slotEntity(r.slotFallback)||null,g=h?this.hass.states[h]:null;if(g){if(r?.format){let $=i.attribute?g.attributes?.[i.attribute]:g.state,V=this._fmt(r.format,$);n.num=V.n,n.unit=i.unit??V.u,!n.color&&r.color&&(n.color=r.color(Number($)))}else{let $=this._entityDisplay(g,i);n.num=$.num,n.unit=$.unit}if(n.entityId=i.tap_entity||h,r?.secondarySlot){let $=this._slotEntity(r.secondarySlot),V=$?this.hass.states[$]:null,U=V?Number(V.state):NaN;Number.isFinite(U)&&(n.secondary=`${Math.round(U)}${r.secondaryUnit||""}`)}}else n.entityId=i.tap_entity||h}return i.secondary&&(n.secondary=this._resolveValue(i.secondary)),n}_tileView(i){let r=i.preset?Os[i.preset]:null,n={label:i.label??(r?this._t(r.labelKey):""),icon:i.icon??r?.icon,color:i.color||r?.color||null,num:"\u2013",unit:"",entityId:i.tap_entity||null,secondary:""},h=pt(i.template)||i.entity&&vt(i.entity)||i.slot;if(r&&!h){let g=this._energy?this._energy[r.energyKey]:null;if(g!=null){let $=this._fmt(r.format,g);n.num=$.n,n.unit=i.unit??$.u}}else if(pt(i.template)){let g=this._tmplResults[i.template];n.num=g==null?"\u2026":String(g),n.unit=g==null?"":i.unit||""}else{let g=i.entity&&vt(i.entity)&&i.entity||i.slot&&this._slotEntity(i.slot)||null,$=g?this.hass.states[g]:null;if($){if(r?.format){let V=i.attribute?$.attributes?.[i.attribute]:$.state,U=this._fmt(r.format,V);n.num=U.n,n.unit=i.unit??U.u}else{let V=this._entityDisplay($,i);n.num=V.num,n.unit=V.unit}n.entityId=i.tap_entity||g}}return n.secondary=i.secondary?this._resolveValue(i.secondary):r?.secondaryKey?this._t(r.secondaryKey):"",n}_resolveValue(i){if(!i)return"";if(pt(i)){let r=this._tmplResults[i];return r==null?"\u2026":String(r)}if(vt(i)){let r=this.hass.states[i];if(!r)return"";if(typeof this.hass.formatEntityState=="function")try{return this.hass.formatEntityState(r)}catch{}let n=r.attributes?.unit_of_measurement;return n?`${r.state} ${n}`:r.state}return i}updated(i){super.updated(i),this._syncTemplates(),i.has("hass")&&this._reflectCast(),this._reflectKiosk(),this._activeTab().id==="home"?this._flows.sync(this.renderRoot,{hass:this.hass,theme:Cs(this._config.battery),showFlows:this._show("show_flows"),batOverlays:this._show("show_battery")&&Ts(this._config.battery),states:this._flowStates()}):this._syncEmbed()}_activeTab(){let i=this._tabs();return i[this._tab]||i[0]}_tabs(){let i=this._config.tabs&&this._config.tabs.length?[...this._config.tabs]:[{id:"home",icon:"mdi:home",label:"Home"}];return i[0]={...i[0],id:"home",icon:i[0].icon||"mdi:home"},i}async _syncEmbed(){let i=this.renderRoot?.querySelector(".embed-host");if(!i)return;let n=this._activeTab()?.path||"";if(n&&n===this._embed.path&&this._embed.els.length){if(i.childElementCount===0)for(let h of this._embed.els)i.appendChild(h);for(let h of this._embed.els)h.hass=this.hass;return}if(this._embed={path:n,status:"loading",els:[]},i.innerHTML="",!n){this._embed.status="empty";return}try{let h=await this._fetchView(n);if(!h){this._embed.status="missing",i.innerHTML="",this.requestUpdate();return}let g=await window.loadCardHelpers?.();if(!g)throw new Error("card helpers unavailable");let $=[...h.cards||[]];for(let U of h.sections||[])$.push(...U.cards||[]);let V=[];for(let U of $)try{let B=g.createCardElement(U);B.hass=this.hass,i.appendChild(B),V.push(B)}catch{}if(this._activeTab()?.path!==n){i.innerHTML="";return}this._embed={path:n,status:"ready",els:V}}catch{this._embed.status="error",this.requestUpdate()}}async _fetchView(i){let r=String(i).split("/").filter(Boolean),n=r.length>1?r[0]:null,h=r.length>1?r.slice(1).join("/"):r[0],$=(await this.hass.connection.sendMessagePromise({type:"lovelace/config",url_path:n}))?.views||[],V=$.find(U=>U.path===h);return!V&&/^\d+$/.test(h)&&(V=$[Number(h)]),V}render(){if(!this.hass)return I``;let i=this._device;this._map=i?le(this.hass,i.ents):{};let r=this._tabs(),n=r[this._tab]||r[0],h=this._config.rail_labels??!1,g=this._config.rail_align||"start",$=this._config.rail_size||1;return I`<ha-card>
      <div class="shell" style=${`--rail-scale:${$}`}>
        <nav class="rail align-${g} ${h?"has-labels":""}">
          ${r.map((V,U)=>I`<button
              class="rail-btn ${U===this._tab?"on":""}"
              title=${V.label||""}
              @click=${()=>this._tab=U}
            >
              <ha-icon icon=${V.icon||"mdi:view-dashboard-outline"}></ha-icon>
              ${h&&V.label?I`<span class="rail-label">${V.label}</span>`:""}
            </button>`)}
        </nav>
        <div class="main">
          ${n.id==="home"?this._renderHome():this._renderEmbed()}
        </div>
      </div>
      ${this._dialog==="solar"?this._renderSolarDialog():""}
    </ha-card>`}_needsDevice(){let i=r=>!r.entity&&!pt(r.template)&&(r.slot||zs[r.preset]);return(this._config.overlays||[]).some(i)}_renderHome(){let i=this._show("show_battery"),r=!this._device&&this._needsDevice();return I`<div class="stage-wrap">
      ${this._renderTopBar()}
      <div class="stage">
        <img class="layer house" src=${mi(this._config,this.hass)} alt="" />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="grid_home"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${i?I`<img
              class="layer box"
              src=${De(this._config.battery,this.hass)}
              alt=""
            />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        <div class="layer flow z-box" data-flow="bat_backup"></div>
        ${this._renderOverlays()}
        ${r?this._renderSetupWarning():""}
      </div>
      ${this._renderTiles()}
    </div>`}_renderTopBar(){let i=this._config.title&&!pt(this._config.title)?this._config.title:"";return I`<div class="topbar">
      <div class="topbar-left">
        ${i?I`<div class="topbar-title">${i}</div>`:""}
      </div>
      ${this._renderClock()} ${this._renderWeather()}
    </div>`}_renderClock(){if(!(this._config.clock??!1))return I`<span class="topbar-center"></span>`;let i=this._config.clock_size||1;return I`<div class="topbar-center">
      <div class="clock" style=${`--ef-scale:${i}`}>
        <span class="clock-time">${this._clock||this._formatClock()}</span>
        ${this._config.clock_date?I`<span class="clock-date">${this._formatDate()}</span>`:""}
      </div>
    </div>`}_formatDate(){try{return new Date().toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}catch{return""}}_renderWeather(){let i=this._config.weather?.entity,r=i?this.hass.states[i]:null;if(!r)return I`<div class="topbar-right"></div>`;let n=r.attributes||{},h=n.temperature_unit||this.hass.config?.unit_system?.temperature||"\xB0",g=this._resolveValue(this._config.weather?.low),$="";if(g!=="")$=g;else if(Array.isArray(n.forecast)&&n.forecast.length){let U=n.forecast[0].templow??n.forecast[0].temperature;U!=null&&($=`${Math.round(U)} ${h}`)}let V=this._config.weather_size||1;return I`<div class="topbar-right">
      <button
        class="weather"
        style=${`--ef-scale:${V}`}
        @click=${()=>this._moreInfo(i)}
        title=${r.state}
      >
        ${n.temperature!=null?I`<span class="w-grp"
              ><ha-icon icon="mdi:thermometer"></ha-icon
              ><span>${Math.round(n.temperature)} ${h}</span></span
            >`:""}
        ${n.humidity!=null?I`<span class="w-grp"
              ><ha-icon icon="mdi:water-percent"></ha-icon
              ><span>${Math.round(n.humidity)} %</span></span
            >`:""}
        ${$?I`<span class="w-grp moon"
              ><ha-icon icon="mdi:weather-night"></ha-icon
              ><span>${$}</span></span
            >`:""}
      </button>
    </div>`}_renderOverlays(){let i=this._config.overlays||[];return i.length?I`<div class="overlays">
      ${i.map(r=>{let n=this._overlayView(r),h=`left:${r.x??50}%;top:${r.y??50}%;transform:${cn[r.anchor]||cn.center};--ef-scale:${r.size||1};${n.color?`--ef-ov-color:${n.color};`:""}`,g=r.preset==="solar"?()=>this._openSolar():()=>this._moreInfo(n.entityId);return I`<button
          class="overlay ${n.entityId||r.preset==="solar"?"clickable":""}"
          style=${h}
          @click=${g}
        >
          ${n.label?I`<span class="ov-label"
                >${n.icon?I`<ha-icon class="ov-ic" icon=${n.icon}></ha-icon>`:""}
                <span>${n.label}</span>
                ${r.dot?I`<span class="ov-dot" style=${`background:${r.dot}`}></span>`:""}</span
              >`:""}
          ${n.num!==""?I`<span class="ov-value"
                ><span class="ov-num">${n.num}</span
                >${n.unit?I`<span class="ov-unit">${n.unit}</span>`:""}
                ${n.secondary?I`<span class="ov-sec">· ${n.secondary}</span>`:""}</span
              >`:""}
        </button>`})}
    </div>`:""}_renderTiles(){let i=this._config.tiles||[];if(!i.length)return"";let r=this._config.tiles_size||1;return I`<div class="tiles" style=${`--ef-scale:${r}`}>
      ${i.map(n=>{let h=this._tileView(n),g=h.secondary.startsWith("+")?"pos":h.secondary.startsWith("-")?"neg":"",$=n.preset==="solar_today"?()=>this._openSolar():()=>this._moreInfo(h.entityId);return I`<button
          class="tile ${h.entityId||n.preset==="solar_today"?"clickable":""}"
          @click=${$}
        >
          <div class="tile-head">
            <span class="tile-label">${h.label||""}</span>
            ${h.icon?I`<ha-icon
                  icon=${h.icon}
                  style=${h.color?`color:${h.color}`:""}
                ></ha-icon>`:""}
          </div>
          <div class="tile-value">
            <span class="tile-num">${h.num||"\u2013"}</span
            >${h.unit?I`<span class="tile-unit">${h.unit}</span>`:""}
          </div>
          ${h.secondary?I`<div class="tile-secondary ${g}">${h.secondary}</div>`:""}
        </button>`})}
    </div>`}_renderSetupWarning(){return I`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`}_renderEmbed(){let i=this._embed.status;return I`<div class="embed">
      ${i==="missing"||i==="error"?I`<div class="embed-msg">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <span>${this._t("space.embed_missing")}</span>
          </div>`:i==="empty"?I`<div class="embed-msg">
              <ha-icon icon="mdi:link-variant-off"></ha-icon>
              <span>${this._t("space.embed_empty")}</span>
            </div>`:""}
      <div class="embed-host"></div>
    </div>`}};var _l=[{name:"device",selector:{device:{integration:ze}}}],yn=[{id:"appearance",icon:"mdi:palette-outline"},{id:"weather",icon:"mdi:weather-partly-cloudy"},{id:"overlays",icon:"mdi:label-multiple-outline"},{id:"tiles",icon:"mdi:card-text-outline"},{id:"tabs",icon:"mdi:dock-left"}],Ds=["sensor.pv_total","sensor.sys_load","sensor.grid_power","sensor.bat_power","sensor.cms_batt_soc"],yl=["center","top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],bl=[["show_flows",!0,"mdi:transit-connection-variant"],["show_battery",!0,"mdi:home-battery"]],wl=0,wr=c=>`${c}_${Date.now().toString(36)}_${wl++}`;function xl(c){if(typeof c!="string")return;let i=c.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(i){let r=i[1];return r.length===3&&(r=r.split("").map(n=>n+n).join("")),[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16)]}if(i=c.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i),i)return[+i[1],+i[2],+i[3]]}var Vs=class extends kt{static get properties(){return{hass:{},_config:{},_page:{state:!0},_sel:{state:!0}}}constructor(){super(),this._config={},this._page=null,this._sel=null,this._modes={},this._drag=null}connectedCallback(){super.connectedCallback(),Yt()}setConfig(i){this._config=i||{}}_t(i,r){return Ft(this.hass,i,r)}render(){if(!this.hass)return I``;let i=yn.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_renderRoot(){return I`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${_l}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      <div class="nav">
        ${yn.map(i=>I`<button class="nav-row" @click=${()=>this._page=i.id}>
            <ha-icon class="nav-icon" icon=${i.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`space.page.${i.id}`)}</span>
              <span class="nav-secondary">${this._summary(i.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(i){if(i==="appearance"){let r=this._config.house||It,n=this._config.house_mode||Re;return`${this._t("house.editor.style_n",{n:r})} \xB7 ${this._t(`house.mode.${n}`)}`}return i==="weather"?this._config.weather?.entity||this._t("editor.automatic"):i==="overlays"?this._t("space.n_items",{n:(this._config.overlays||[]).length}):i==="tiles"?this._t("space.n_items",{n:(this._config.tiles||[]).length}):i==="tabs"?this._t("space.n_items",{n:this._tabs().length}):""}_renderSubpage(i){return I`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`space.page.${i.id}`)}</span>
      </div>
      ${i.id==="appearance"?this._renderAppearance():i.id==="weather"?this._renderWeather():i.id==="overlays"?this._renderOverlays():i.id==="tiles"?this._renderTiles():this._renderTabs()}`}_renderAppearance(){let i=this._config.house||It,r=this._config.house_mode||Re,n=this._config.battery||ce;return I`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="grid">
        ${ei.map(h=>I`<button
            class="opt ${i===h?"on":""}"
            @click=${()=>this._set("house",h,It)}
          >
            <img src=${Ps(h,this.hass)} loading="lazy" alt=${h} />
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${Es.map(h=>I`<button
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
        ${gi.map(h=>I`<button
            class="opt ${n===h?"on":""}"
            title=${this._t(`house.battery.${h}`)}
            @click=${()=>this._set("battery",h,ce)}
          >
            <span
              class="batt-thumb"
              style=${`background-image:url(${De(h,this.hass)})`}
            ></span>
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:eye-outline"></ha-icon>${this._t("house.page.display")}
      </div>
      ${bl.map(([h,g,$])=>this._renderToggle(h,g,$))}`}_renderToggle(i,r,n){return I`<div class="row">
      <ha-icon icon=${n}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${i}`)}</span>
      <ha-switch
        .checked=${this._config[i]??r}
        @change=${h=>this._set(i,h.target.checked,r)}
      ></ha-switch>
    </div>`}_renderWeather(){let i=this._config.weather?.entity||"";return I`<div class="hint top-hint">${this._t("space.weather_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:i}}
        .schema=${[{name:"value",selector:{entity:{domain:"weather"}}}]}
        .computeLabel=${()=>this._t("space.weather_entity")}
        @value-changed=${r=>{r.stopPropagation(),this._setWeather("entity",r.detail.value.value||"")}}
      ></ha-form>
      ${this._textField(this._t("space.f_low"),this._config.weather?.low||"",r=>this._setWeather("low",r))}
      ${this._scaleField(this._t("space.f_weather_size"),this._config.weather_size,r=>this._set("weather_size",r,1))}

      <div class="section">
        <ha-icon icon="mdi:clock-outline"></ha-icon>${this._t("space.clock_title")}
      </div>
      <div class="row">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <span class="row-label">${this._t("space.clock_show")}</span>
        <ha-switch
          .checked=${this._config.clock??!1}
          @change=${r=>this._set("clock",r.target.checked,!1)}
        ></ha-switch>
      </div>
      ${this._config.clock?I`<div class="row">
              <ha-icon icon="mdi:calendar-outline"></ha-icon>
              <span class="row-label">${this._t("space.clock_date")}</span>
              <ha-switch
                .checked=${this._config.clock_date??!1}
                @change=${r=>this._set("clock_date",r.target.checked,!1)}
              ></ha-switch>
            </div>
            ${this._scaleField(this._t("space.f_clock_size"),this._config.clock_size,r=>this._set("clock_size",r,1))}`:""}`}_setWeather(i,r){let n={...this._config.weather||{}};r?n[i]=r:delete n[i];let h={...this._config,weather:n,type:`custom:${te}`};Object.keys(n).length||delete h.weather,this._dispatch(h)}_renderOverlays(){let i=this._config.overlays||[];return I`<div class="hint top-hint">${this._t("space.overlays_hint")}</div>
      <div
        class="preview"
        @pointermove=${this._onDragMove}
        @pointerup=${this._onDragEnd}
        @pointerleave=${this._onDragEnd}
      >
        <img class="preview-img" src=${mi(this._config,this.hass)} alt="" />
        ${i.map(r=>I`<button
            class="chip ${this._sel===r.id?"sel":""}"
            style=${`left:${r.x??50}%;top:${r.y??50}%`}
            @pointerdown=${n=>this._onDragStart(n,r.id)}
            @click=${()=>this._sel=r.id}
          >
            ${r.icon?I`<ha-icon icon=${r.icon}></ha-icon>`:""}
            <span>${r.label||r.id}</span>
          </button>`)}
      </div>

      ${i.map((r,n)=>this._renderOverlayEditor(r,n))}

      <button class="add-btn" @click=${this._addOverlay}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_overlay")}</span>
      </button>`}_renderOverlayEditor(i,r){let n=this._sel===i.id,h=this._sourceMode(i);return I`<div class="item ${n?"open":""}">
      <div class="item-head" @click=${()=>this._sel=n?null:i.id}>
        ${i.icon?I`<ha-icon icon=${i.icon}></ha-icon>`:I`<ha-icon icon="mdi:label-outline"></ha-icon>`}
        <span class="item-title">${i.label||i.id}</span>
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?I`<div class="item-body">
            ${this._renderPresetField("overlays",i,r,zs)}
            ${this._textField(this._t("space.f_label"),i.label||"",g=>this._updateItem("overlays",r,{label:g}))}
            ${this._iconField(this._t("space.f_icon"),i.icon,g=>this._updateItem("overlays",r,{icon:g}))}
            ${i.preset?"":this._renderSourceField("overlays",i,r,h)}
            ${this._textField(this._t("space.f_unit"),i.unit??"",g=>this._updateItem("overlays",r,{unit:g||void 0}))}
            ${this._textField(this._t("space.f_secondary"),i.secondary||"",g=>this._updateItem("overlays",r,{secondary:g||void 0}))}
            ${this._colorField(this._t("space.f_dot"),i.dot,g=>this._updateItem("overlays",r,{dot:g}))}
            ${this._selectField(this._t("space.f_anchor"),yl,i.anchor||"center",g=>this._updateItem("overlays",r,{anchor:g}),g=>this._t(`space.anchor.${g}`))}
            <div class="xy">
              ${this._numField("X %",i.x??50,g=>this._updateItem("overlays",r,{x:g}))}
              ${this._numField("Y %",i.y??50,g=>this._updateItem("overlays",r,{y:g}))}
            </div>
            ${this._colorField(this._t("space.f_color"),i.color,g=>this._updateItem("overlays",r,{color:g}))}
            ${this._scaleField(this._t("space.f_size"),i.size,g=>this._updateItem("overlays",r,{size:g===1?void 0:g}))}
            <button class="del-btn" @click=${()=>this._removeItem("overlays",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_renderPresetField(i,r,n,h){let g=["",...Object.keys(h)];return I`${this._selectField(this._t("space.f_preset"),g,r.preset||"",$=>{let V={preset:$||void 0};$&&(V.slot=void 0,V.entity=void 0,V.template=void 0),this._updateItem(i,n,V)},$=>$?this._t(`space.preset.${$}`):this._t("space.preset_none"))}
      ${r.preset?I`<div class="hint">${this._t("space.preset_hint")}</div>`:""}`}_sourceMode(i){return this._modes[i.id]?this._modes[i.id]:pt(i.template)?"template":i.entity?"entity":"auto"}_renderSourceField(i,r,n,h){return I`<div class="src-modes">
        ${["auto","entity","template"].map(g=>I`<button
            class="mode ${h===g?"on":""}"
            @click=${()=>{this._modes={...this._modes,[r.id]:g};let $={slot:void 0,entity:void 0,template:void 0};this._updateItem(i,n,$)}}
          >
            ${this._t(`space.src_${g}`)}
          </button>`)}
      </div>
      ${h==="auto"?this._selectField(this._t("space.f_slot"),Ds,r.slot||Ds[0],g=>this._updateItem(i,n,{slot:g}),g=>this._t(`slot.${g}`)):h==="entity"?I`<ha-form
              .hass=${this.hass}
              .data=${{value:vt(r.entity)?r.entity:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${g=>{g.stopPropagation(),this._updateItem(i,n,{entity:g.detail.value.value||void 0})}}
            ></ha-form>`:I`<ha-form
              .hass=${this.hass}
              .data=${{value:pt(r.template)?r.template:""}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${g=>{g.stopPropagation(),this._updateItem(i,n,{template:g.detail.value.value||void 0})}}
            ></ha-form>`}`}_addOverlay(){let i=[...this._config.overlays||[]],r=wr("ov");i.push({id:r,label:"Overlay",x:50,y:50,anchor:"center",slot:Ds[0]}),this._setList("overlays",i),this._sel=r}_renderTiles(){let i=this._config.tiles||[];return I`<div class="hint top-hint">${this._t("space.tiles_hint")}</div>
      ${this._scaleField(this._t("space.f_tiles_size"),this._config.tiles_size,r=>this._set("tiles_size",r,1))}
      ${i.map((r,n)=>this._renderTileEditor(r,n))}
      <button class="add-btn" @click=${this._addTile}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tile")}</span>
      </button>`}_renderTileEditor(i,r){let n=this._sel===i.id,h=this._sourceMode(i);return I`<div class="item ${n?"open":""}">
      <div class="item-head" @click=${()=>this._sel=n?null:i.id}>
        ${i.icon?I`<ha-icon icon=${i.icon}></ha-icon>`:I`<ha-icon icon="mdi:card-outline"></ha-icon>`}
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
      ${n?I`<div class="item-body">
            ${this._renderPresetField("tiles",i,r,Os)}
            ${this._textField(this._t("space.f_label"),i.label||"",g=>this._updateItem("tiles",r,{label:g}))}
            ${this._iconField(this._t("space.f_icon"),i.icon,g=>this._updateItem("tiles",r,{icon:g}))}
            ${this._colorField(this._t("space.f_icon_color"),i.color,g=>this._updateItem("tiles",r,{color:g}))}
            ${i.preset?"":this._renderSourceField("tiles",i,r,h)}
            ${this._textField(this._t("space.f_unit"),i.unit??"",g=>this._updateItem("tiles",r,{unit:g||void 0}))}
            ${this._textField(this._t("space.f_secondary"),i.secondary||"",g=>this._updateItem("tiles",r,{secondary:g||void 0}))}
            <button class="del-btn" @click=${()=>this._removeItem("tiles",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_addTile(){let i=[...this._config.tiles||[]],r=wr("tile");i.push({id:r,label:"Tile",slot:Ds[0]}),this._setList("tiles",i),this._sel=r}_tabs(){return this._config.tabs&&this._config.tabs.length?this._config.tabs:[{id:"home",icon:"mdi:home",label:"Home"}]}_renderTabs(){let i=this._tabs();return I`<div class="row">
        <ha-icon icon="mdi:label-outline"></ha-icon>
        <span class="row-label">${this._t("space.rail_labels")}</span>
        <ha-switch
          .checked=${this._config.rail_labels??!1}
          @change=${r=>this._set("rail_labels",r.target.checked,!1)}
        ></ha-switch>
      </div>
      ${this._selectField(this._t("space.rail_align"),["start","center","end"],this._config.rail_align||"start",r=>this._set("rail_align",r,"start"),r=>this._t(`space.align.${r}`))}
      ${this._scaleField(this._t("space.f_rail_size"),this._config.rail_size,r=>this._set("rail_size",r,1))}
      <div class="hint top-hint" style="margin-top:14px">${this._t("space.tabs_hint")}</div>
      ${i.map((r,n)=>n===0?this._renderHomeTab(r):this._renderTabEditor(r,n))}
      <button class="add-btn" @click=${this._addTab}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tab")}</span>
      </button>`}_renderHomeTab(i){return I`<div class="item">
      <div class="item-head static">
        <ha-icon icon=${i.icon||"mdi:home"}></ha-icon>
        <span class="item-title">${i.label||this._t("house.home")}</span>
        <span class="badge">${this._t("space.home_tab")}</span>
      </div>
    </div>`}_renderTabEditor(i,r){let n=this._sel===`tab${r}`;return I`<div class="item ${n?"open":""}">
      <div class="item-head" @click=${()=>this._sel=n?null:`tab${r}`}>
        <ha-icon icon=${i.icon||"mdi:view-dashboard-outline"}></ha-icon>
        <span class="item-title">${i.label||i.path||`Tab ${r}`}</span>
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?I`<div class="item-body">
            ${this._textField(this._t("space.f_label"),i.label||"",h=>this._updateItem("tabs",r,{label:h}))}
            ${this._iconField(this._t("space.f_icon"),i.icon,h=>this._updateItem("tabs",r,{icon:h}))}
            ${this._textField(this._t("space.f_path"),i.path||"",h=>this._updateItem("tabs",r,{path:h}),this._t("space.path_hint"))}
            <button class="del-btn" @click=${()=>this._removeItem("tabs",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_addTab(){let i=[...this._tabs()];i.push({id:wr("tab"),icon:"mdi:view-dashboard-outline",label:"View",path:""}),this._setList("tabs",i),this._sel=`tab${i.length-1}`}_textField(i,r,n,h){return I`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:r??""}}
      .schema=${[{name:"value",selector:{text:{}}}]}
      .computeLabel=${()=>i}
      .computeHelper=${()=>h||""}
      @value-changed=${g=>{g.stopPropagation(),n(g.detail.value.value??"")}}
    ></ha-form>`}_iconField(i,r,n){return I`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:r??""}}
      .schema=${[{name:"value",selector:{icon:{}}}]}
      .computeLabel=${()=>i}
      @value-changed=${h=>{h.stopPropagation(),n(h.detail.value.value||void 0)}}
    ></ha-form>`}_colorField(i,r,n){return I`<div class="color-field">
      <ha-form
        class="field"
        .hass=${this.hass}
        .data=${{value:xl(r)}}
        .schema=${[{name:"value",selector:{color_rgb:{}}}]}
        .computeLabel=${()=>i}
        @value-changed=${h=>{h.stopPropagation();let g=h.detail.value.value;n(Array.isArray(g)?`rgb(${g[0]}, ${g[1]}, ${g[2]})`:void 0)}}
      ></ha-form>
      ${r?I`<button
            class="color-clear"
            title=${this._t("space.clear_color")}
            @click=${()=>n(void 0)}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>`:""}
    </div>`}_numField(i,r,n){return I`<ha-form
      class="field num"
      .hass=${this.hass}
      .data=${{value:r}}
      .schema=${[{name:"value",selector:{number:{min:0,max:100,mode:"box"}}}]}
      .computeLabel=${()=>i}
      @value-changed=${h=>{let g=Number(h.detail.value.value);Number.isFinite(g)&&n(Math.max(0,Math.min(100,Math.round(g))))}}
    ></ha-form>`}_scaleField(i,r,n){return I`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:r??1}}
      .schema=${[{name:"value",selector:{number:{min:.5,max:3,step:.1,mode:"slider"}}}]}
      .computeLabel=${()=>i}
      @value-changed=${h=>{h.stopPropagation();let g=Number(h.detail.value.value);n(Number.isFinite(g)?g:1)}}
    ></ha-form>`}_selectField(i,r,n,h,g){let $=r.map(V=>({value:V,label:g?g(V):V||"\u2014"}));return I`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:n}}
      .schema=${[{name:"value",selector:{select:{options:$,mode:"dropdown"}}}]}
      .computeLabel=${()=>i}
      @value-changed=${V=>{V.stopPropagation(),h(V.detail.value.value??"")}}
    ></ha-form>`}_onDragStart(i,r){i.preventDefault(),this._sel=r;let n=this.renderRoot.querySelector(".preview");this._drag={id:r,rect:n.getBoundingClientRect()},n.setPointerCapture?.(i.pointerId)}_onDragMove(i){if(!this._drag)return;let{rect:r,id:n}=this._drag,h=Math.max(0,Math.min(100,(i.clientX-r.left)/r.width*100)),g=Math.max(0,Math.min(100,(i.clientY-r.top)/r.height*100)),V=(this._config.overlays||[]).findIndex(U=>U.id===n);V<0||this._updateItem("overlays",V,{x:Math.round(h),y:Math.round(g)})}_onDragEnd(){this._drag=null}_deviceChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${te}`};r.device||delete r.device,this._dispatch(r)}_set(i,r,n){let h={...this._config,type:`custom:${te}`};r===n||r===""||r==null?delete h[i]:h[i]=r,this._dispatch(h)}_setList(i,r){let n={...this._config,type:`custom:${te}`};!r||!r.length?delete n[i]:n[i]=r,this._dispatch(n)}_updateItem(i,r,n){let h=[...i==="tabs"?this._tabs():this._config[i]||[]];if(!h[r])return;let g={...h[r],...n};for(let $ of Object.keys(g))g[$]===void 0&&delete g[$];h[r]=g,this._setList(i,h)}_removeItem(i,r){let n=[...i==="tabs"?this._tabs():this._config[i]||[]];n.splice(r,1),this._setList(i,n),this._sel=null}_moveItem(i,r,n){let h=[...this._config[i]||[]],g=r+n;g<0||g>=h.length||([h[r],h[g]]=[h[g],h[r]],this._setList(i,h))}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return jt`
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
      .color-field {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .color-field .field {
        flex: 1;
        min-width: 0;
      }
      .color-clear {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border: none;
        border-radius: 50%;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
      }
      .color-clear:hover {
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
      }
      .color-clear ha-icon {
        --mdc-icon-size: 18px;
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
    `}};customElements.define(Mt,$s);customElements.define(`${Mt}-editor`,As);customElements.define(Qt,Is);customElements.define(`${Qt}-editor`,Ls);customElements.define(te,Rs);customElements.define(`${te}-editor`,Vs);window.customCards=window.customCards||[];window.customCards.push({type:Mt,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:Qt,name:"EcoFlow House Card",description:"Whole-home energy-flow illustration: a house with the battery box and animated grid, solar, home and battery flows.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:te,name:"EcoFlow Space Card",description:"Full-screen whole-home dashboard: the house illustration with configurable floating overlays, a weather widget, stat tiles and a sidebar that embeds other Lovelace views.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
