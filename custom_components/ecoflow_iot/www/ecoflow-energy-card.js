var Un=Object.create;var Hr=Object.defineProperty;var jn=Object.getOwnPropertyDescriptor;var Hn=Object.getOwnPropertyNames;var Wn=Object.getPrototypeOf,qn=Object.prototype.hasOwnProperty;var Gn=(k,r)=>()=>(r||k((r={exports:{}}).exports,r),r.exports);var Yn=(k,r,o,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let m of Hn(r))!qn.call(k,m)&&m!==o&&Hr(k,m,{get:()=>r[m],enumerable:!(c=jn(r,m))||c.enumerable});return k};var Kn=(k,r,o)=>(o=k!=null?Un(Wn(k)):{},Yn(r||!k||!k.__esModule?Hr(o,"default",{value:k,enumerable:!0}):o,k));var $a=Gn((Ii,cs)=>{typeof document<"u"&&typeof navigator<"u"&&(function(k,r){typeof Ii=="object"&&typeof cs<"u"?cs.exports=r():typeof define=="function"&&define.amd?define(r):(k=typeof globalThis<"u"?globalThis:k||self,k.lottie=r())})(Ii,(function(){"use strict";var k="http://www.w3.org/2000/svg",r="",o=!1,c=-999999,m=function(e){o=!!e},$=function(){return o},F=function(e){r=e},U=function(){return r};function B(t){return document.createElement(t)}function W(t,e){var i,s=t.length,n;for(i=0;i<s;i+=1){n=t[i].prototype;for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e.prototype[a]=n[a])}}function nt(t,e){return Object.getOwnPropertyDescriptor(t,e)}function X(t){function e(){}return e.prototype=t,e}var rt=(function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(i){this.audios.push(i)},pause:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].pause()},resume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].resume()},setRate:function(i){var s,n=this.audios.length;for(s=0;s<n;s+=1)this.audios[s].setRate(i)},createAudio:function(i){return this.audioFactory?this.audioFactory(i):window.Howl?new window.Howl({src:[i]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(i){this.audioFactory=i},setVolume:function(i){this._volume=i,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}})(),at=(function(){function t(i,s){var n=0,a=[],h;switch(i){case"int16":case"uint8c":h=1;break;default:h=1.1;break}for(n=0;n<s;n+=1)a.push(h);return a}function e(i,s){return i==="float32"?new Float32Array(s):i==="int16"?new Int16Array(s):i==="uint8c"?new Uint8ClampedArray(s):t(i,s)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t})();function ot(t){return Array.apply(null,{length:t})}function se(t){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se(t)}var Vt=!0,qt=null,Zt=null,Ut="",Oi=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),hi=!1,Ct=Math.pow,Ke=Math.sqrt,Jt=Math.floor,us=Math.max,Fe=Math.min,Xe={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,i=t.length;for(e=0;e<i;e+=1)Xe[t[e]]=Math[t[e]]})();function Js(){return{}}Xe.random=Math.random,Xe.abs=function(t){var e=se(t);if(e==="object"&&t.length){var i=ot(t.length),s,n=t.length;for(s=0;s<n;s+=1)i[s]=Math.abs(t[s]);return i}return Math.abs(t)};var Ri=150,dt=Math.PI/180,Z=.5519;function bt(t){hi=!!t}function ge(t){return hi?Math.round(t):t}function Ie(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function Le(t,e,i,s){this.type=t,this.currentTime=e,this.totalTime=i,this.direction=s<0?-1:1}function ze(t,e){this.type=t,this.direction=e<0?-1:1}function Oe(t,e,i,s){this.type=t,this.currentLoop=i,this.totalLoops=e,this.direction=s<0?-1:1}function Ze(t,e,i){this.type=t,this.firstFrame=e,this.totalFrames=i}function Qs(t,e){this.type=t,this.target=e}function Ba(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function Ua(t){this.type="configError",this.nativeError=t}function To(t,e){this.type=t,this.nativeError=e}var Mt=(function(){var t=0;return function(){return t+=1,Ut+"__lottie_element_"+t}})();function ms(t,e,i){var s,n,a,h,g,f,b,S;switch(h=Math.floor(t*6),g=t*6-h,f=i*(1-e),b=i*(1-g*e),S=i*(1-(1-g)*e),h%6){case 0:s=i,n=S,a=f;break;case 1:s=b,n=i,a=f;break;case 2:s=f,n=i,a=S;break;case 3:s=f,n=b,a=i;break;case 4:s=S,n=f,a=i;break;case 5:s=i,n=f,a=b;break;default:break}return[s,n,a]}function gs(t,e,i){var s=Math.max(t,e,i),n=Math.min(t,e,i),a=s-n,h,g=s===0?0:a/s,f=s/255;switch(s){case n:h=0;break;case t:h=e-i+a*(e<i?6:0),h/=6*a;break;case e:h=i-t+a*2,h/=6*a;break;case i:h=t-e+a*4,h/=6*a;break;default:break}return[h,g,f]}function tr(t,e){var i=gs(t[0]*255,t[1]*255,t[2]*255);return i[1]+=e,i[1]>1?i[1]=1:i[1]<=0&&(i[1]=0),ms(i[0],i[1],i[2])}function er(t,e){var i=gs(t[0]*255,t[1]*255,t[2]*255);return i[2]+=e,i[2]>1?i[2]=1:i[2]<0&&(i[2]=0),ms(i[0],i[1],i[2])}function ir(t,e){var i=gs(t[0]*255,t[1]*255,t[2]*255);return i[0]+=e/360,i[0]>1?i[0]-=1:i[0]<0&&(i[0]+=1),ms(i[0],i[1],i[2])}var Mo=(function(){var t=[],e,i;for(e=0;e<256;e+=1)i=e.toString(16),t[e]=i.length===1?"0"+i:i;return function(s,n,a){return s<0&&(s=0),n<0&&(n=0),a<0&&(a=0),"#"+t[s]+t[n]+t[a]}})(),ja=function(e){Vt=!!e},Ha=function(){return Vt},Wa=function(e){qt=e},Vi=function(){return qt},Fo=function(e){Zt=e},sr=function(){return Zt},Di=function(e){Ri=e},ci=function(){return Ri},qa=function(e){Ut=e},Io=function(){return Ut};function it(t){return document.createElementNS(k,t)}function vs(t){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vs(t)}var fi=(function(){var t=1,e=[],i,s,n={onmessage:function(){},postMessage:function(A){i({data:A})}},a={postMessage:function(A){n.onmessage({data:A})}};function h(u){if(window.Worker&&window.Blob&&$()){var A=new Blob(["var _workerSelf = self; self.onmessage = ",u.toString()],{type:"text/javascript"}),C=URL.createObjectURL(A);return new Worker(C)}return i=u,n}function g(){s||(s=h(function(A){function C(){function I(D,y){var P,l,p=D.length,O,M,q,Q;for(l=0;l<p;l+=1)if(P=D[l],"ks"in P&&!P.completed){if(P.completed=!0,P.hasMask){var et=P.masksProperties;for(M=et.length,O=0;O<M;O+=1)if(et[O].pt.k.i)w(et[O].pt.k);else for(Q=et[O].pt.k.length,q=0;q<Q;q+=1)et[O].pt.k[q].s&&w(et[O].pt.k[q].s[0]),et[O].pt.k[q].e&&w(et[O].pt.k[q].e[0])}P.ty===0?(P.layers=d(P.refId,y),I(P.layers,y)):P.ty===4?v(P.shapes):P.ty===5&&st(P)}}function x(D,y){if(D){var P=0,l=D.length;for(P=0;P<l;P+=1)D[P].t===1&&(D[P].data.layers=d(D[P].data.refId,y),I(D[P].data.layers,y))}}function _(D,y){for(var P=0,l=y.length;P<l;){if(y[P].id===D)return y[P];P+=1}return null}function d(D,y){var P=_(D,y);return P?P.layers.__used?JSON.parse(JSON.stringify(P.layers)):(P.layers.__used=!0,P.layers):null}function v(D){var y,P=D.length,l,p;for(y=P-1;y>=0;y-=1)if(D[y].ty==="sh")if(D[y].ks.k.i)w(D[y].ks.k);else for(p=D[y].ks.k.length,l=0;l<p;l+=1)D[y].ks.k[l].s&&w(D[y].ks.k[l].s[0]),D[y].ks.k[l].e&&w(D[y].ks.k[l].e[0]);else D[y].ty==="gr"&&v(D[y].it)}function w(D){var y,P=D.i.length;for(y=0;y<P;y+=1)D.i[y][0]+=D.v[y][0],D.i[y][1]+=D.v[y][1],D.o[y][0]+=D.v[y][0],D.o[y][1]+=D.v[y][1]}function T(D,y){var P=y?y.split("."):[100,100,100];return D[0]>P[0]?!0:P[0]>D[0]?!1:D[1]>P[1]?!0:P[1]>D[1]?!1:D[2]>P[2]?!0:P[2]>D[2]?!1:null}var L=(function(){var D=[4,4,14];function y(l){var p=l.t.d;l.t.d={k:[{s:p,t:0}]}}function P(l){var p,O=l.length;for(p=0;p<O;p+=1)l[p].ty===5&&y(l[p])}return function(l){if(T(D,l.v)&&(P(l.layers),l.assets)){var p,O=l.assets.length;for(p=0;p<O;p+=1)l.assets[p].layers&&P(l.assets[p].layers)}}})(),R=(function(){var D=[4,7,99];return function(y){if(y.chars&&!T(D,y.v)){var P,l=y.chars.length;for(P=0;P<l;P+=1){var p=y.chars[P];p.data&&p.data.shapes&&(v(p.data.shapes),p.data.ip=0,p.data.op=99999,p.data.st=0,p.data.sr=1,p.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},y.chars[P].t||(p.data.shapes.push({ty:"no"}),p.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}})(),N=(function(){var D=[5,7,15];function y(l){var p=l.t.p;typeof p.a=="number"&&(p.a={a:0,k:p.a}),typeof p.p=="number"&&(p.p={a:0,k:p.p}),typeof p.r=="number"&&(p.r={a:0,k:p.r})}function P(l){var p,O=l.length;for(p=0;p<O;p+=1)l[p].ty===5&&y(l[p])}return function(l){if(T(D,l.v)&&(P(l.layers),l.assets)){var p,O=l.assets.length;for(p=0;p<O;p+=1)l.assets[p].layers&&P(l.assets[p].layers)}}})(),tt=(function(){var D=[4,1,9];function y(l){var p,O=l.length,M,q;for(p=0;p<O;p+=1)if(l[p].ty==="gr")y(l[p].it);else if(l[p].ty==="fl"||l[p].ty==="st")if(l[p].c.k&&l[p].c.k[0].i)for(q=l[p].c.k.length,M=0;M<q;M+=1)l[p].c.k[M].s&&(l[p].c.k[M].s[0]/=255,l[p].c.k[M].s[1]/=255,l[p].c.k[M].s[2]/=255,l[p].c.k[M].s[3]/=255),l[p].c.k[M].e&&(l[p].c.k[M].e[0]/=255,l[p].c.k[M].e[1]/=255,l[p].c.k[M].e[2]/=255,l[p].c.k[M].e[3]/=255);else l[p].c.k[0]/=255,l[p].c.k[1]/=255,l[p].c.k[2]/=255,l[p].c.k[3]/=255}function P(l){var p,O=l.length;for(p=0;p<O;p+=1)l[p].ty===4&&y(l[p].shapes)}return function(l){if(T(D,l.v)&&(P(l.layers),l.assets)){var p,O=l.assets.length;for(p=0;p<O;p+=1)l.assets[p].layers&&P(l.assets[p].layers)}}})(),K=(function(){var D=[4,4,18];function y(l){var p,O=l.length,M,q;for(p=O-1;p>=0;p-=1)if(l[p].ty==="sh")if(l[p].ks.k.i)l[p].ks.k.c=l[p].closed;else for(q=l[p].ks.k.length,M=0;M<q;M+=1)l[p].ks.k[M].s&&(l[p].ks.k[M].s[0].c=l[p].closed),l[p].ks.k[M].e&&(l[p].ks.k[M].e[0].c=l[p].closed);else l[p].ty==="gr"&&y(l[p].it)}function P(l){var p,O,M=l.length,q,Q,et,lt;for(O=0;O<M;O+=1){if(p=l[O],p.hasMask){var ht=p.masksProperties;for(Q=ht.length,q=0;q<Q;q+=1)if(ht[q].pt.k.i)ht[q].pt.k.c=ht[q].cl;else for(lt=ht[q].pt.k.length,et=0;et<lt;et+=1)ht[q].pt.k[et].s&&(ht[q].pt.k[et].s[0].c=ht[q].cl),ht[q].pt.k[et].e&&(ht[q].pt.k[et].e[0].c=ht[q].cl)}p.ty===4&&y(p.shapes)}}return function(l){if(T(D,l.v)&&(P(l.layers),l.assets)){var p,O=l.assets.length;for(p=0;p<O;p+=1)l.assets[p].layers&&P(l.assets[p].layers)}}})();function j(D){D.__complete||(tt(D),L(D),R(D),N(D),K(D),I(D.layers,D.assets),x(D.chars,D.assets),D.__complete=!0)}function st(D){D.t.a.length===0&&"m"in D.t.p}var G={};return G.completeData=j,G.checkColors=tt,G.checkChars=R,G.checkPathProperties=N,G.checkShapes=K,G.completeLayers=I,G}if(a.dataManager||(a.dataManager=C()),a.assetLoader||(a.assetLoader=(function(){function I(_){var d=_.getResponseHeader("content-type");return d&&_.responseType==="json"&&d.indexOf("json")!==-1||_.response&&vs(_.response)==="object"?_.response:_.response&&typeof _.response=="string"?JSON.parse(_.response):_.responseText?JSON.parse(_.responseText):null}function x(_,d,v,w){var T,L=new XMLHttpRequest;try{L.responseType="json"}catch{}L.onreadystatechange=function(){if(L.readyState===4)if(L.status===200)T=I(L),v(T);else try{T=I(L),v(T)}catch(R){w&&w(R)}};try{L.open(["G","E","T"].join(""),_,!0)}catch{L.open(["G","E","T"].join(""),d+"/"+_,!0)}L.send()}return{load:x}})()),A.data.type==="loadAnimation")a.assetLoader.load(A.data.path,A.data.fullPath,function(I){a.dataManager.completeData(I),a.postMessage({id:A.data.id,payload:I,status:"success"})},function(){a.postMessage({id:A.data.id,status:"error"})});else if(A.data.type==="complete"){var E=A.data.animation;a.dataManager.completeData(E),a.postMessage({id:A.data.id,payload:E,status:"success"})}else A.data.type==="loadData"&&a.assetLoader.load(A.data.path,A.data.fullPath,function(I){a.postMessage({id:A.data.id,payload:I,status:"success"})},function(){a.postMessage({id:A.data.id,status:"error"})})}),s.onmessage=function(u){var A=u.data,C=A.id,E=e[C];e[C]=null,A.status==="success"?E.onComplete(A.payload):E.onError&&E.onError()})}function f(u,A){t+=1;var C="processId_"+t;return e[C]={onComplete:u,onError:A},C}function b(u,A,C){g();var E=f(A,C);s.postMessage({type:"loadAnimation",path:u,fullPath:window.location.origin+window.location.pathname,id:E})}function S(u,A,C){g();var E=f(A,C);s.postMessage({type:"loadData",path:u,fullPath:window.location.origin+window.location.pathname,id:E})}function z(u,A,C){g();var E=f(A,C);s.postMessage({type:"complete",animation:u,id:E})}return{loadAnimation:b,loadData:S,completeAnimation:z}})(),Ga=(function(){var t=(function(){var x=B("canvas");x.width=1,x.height=1;var _=x.getContext("2d");return _.fillStyle="rgba(0,0,0,0)",_.fillRect(0,0,1,1),x})();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function s(x,_,d){var v="";if(x.e)v=x.p;else if(_){var w=x.p;w.indexOf("images/")!==-1&&(w=w.split("/")[1]),v=_+w}else v=d,v+=x.u?x.u:"",v+=x.p;return v}function n(x){var _=0,d=setInterval(function(){var v=x.getBBox();(v.width||_>500)&&(this._imageLoaded(),clearInterval(d)),_+=1}.bind(this),50)}function a(x){var _=s(x,this.assetsPath,this.path),d=it("image");Oi?this.testImageLoaded(d):d.addEventListener("load",this._imageLoaded,!1),d.addEventListener("error",function(){v.img=t,this._imageLoaded()}.bind(this),!1),d.setAttributeNS("http://www.w3.org/1999/xlink","href",_),this._elementHelper.append?this._elementHelper.append(d):this._elementHelper.appendChild(d);var v={img:d,assetData:x};return v}function h(x){var _=s(x,this.assetsPath,this.path),d=B("img");d.crossOrigin="anonymous",d.addEventListener("load",this._imageLoaded,!1),d.addEventListener("error",function(){v.img=t,this._imageLoaded()}.bind(this),!1),d.src=_;var v={img:d,assetData:x};return v}function g(x){var _={assetData:x},d=s(x,this.assetsPath,this.path);return fi.loadData(d,function(v){_.img=v,this._footageLoaded()}.bind(this),function(){_.img={},this._footageLoaded()}.bind(this)),_}function f(x,_){this.imagesLoadedCb=_;var d,v=x.length;for(d=0;d<v;d+=1)x[d].layers||(!x[d].t||x[d].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(x[d]))):x[d].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(x[d]))))}function b(x){this.path=x||""}function S(x){this.assetsPath=x||""}function z(x){for(var _=0,d=this.images.length;_<d;){if(this.images[_].assetData===x)return this.images[_].img;_+=1}return null}function u(){this.imagesLoadedCb=null,this.images.length=0}function A(){return this.totalImages===this.loadedAssets}function C(){return this.totalFootages===this.loadedFootagesCount}function E(x,_){x==="svg"?(this._elementHelper=_,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function I(){this._imageLoaded=e.bind(this),this._footageLoaded=i.bind(this),this.testImageLoaded=n.bind(this),this.createFootageData=g.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return I.prototype={loadAssets:f,setAssetsPath:S,setPath:b,loadedImages:A,loadedFootages:C,destroy:u,getAsset:z,createImgData:h,createImageData:a,imageLoaded:e,footageLoaded:i,setCacheType:E},I})();function rr(){}rr.prototype={triggerEvent:function(e,i){if(this._cbs[e])for(var s=this._cbs[e],n=0;n<s.length;n+=1)s[n](i)},addEventListener:function(e,i){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(i),function(){this.removeEventListener(e,i)}.bind(this)},removeEventListener:function(e,i){if(!i)this._cbs[e]=null;else if(this._cbs[e]){for(var s=0,n=this._cbs[e].length;s<n;)this._cbs[e][s]===i&&(this._cbs[e].splice(s,1),s-=1,n-=1),s+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var Ya=(function(){function t(e){for(var i=e.split(`\r
`),s={},n,a=0,h=0;h<i.length;h+=1)n=i[h].split(":"),n.length===2&&(s[n[0]]=n[1].trim(),a+=1);if(a===0)throw new Error;return s}return function(e){for(var i=[],s=0;s<e.length;s+=1){var n=e[s],a={time:n.tm,duration:n.dr};try{a.payload=JSON.parse(e[s].cm)}catch{try{a.payload=t(e[s].cm)}catch{a.payload={name:e[s].cm}}}i.push(a)}return i}})(),Ka=(function(){function t(e){this.compositions.push(e)}return function(){function e(i){for(var s=0,n=this.compositions.length;s<n;){if(this.compositions[s].data&&this.compositions[s].data.nm===i)return this.compositions[s].prepareFrame&&this.compositions[s].data.xt&&this.compositions[s].prepareFrame(this.currentFrame),this.compositions[s].compInterface;s+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}})(),pi={},Xa=function(e,i){pi[e]=i};function Za(t){return pi[t]}function Ja(){if(pi.canvas)return"canvas";for(var t in pi)if(pi[t])return t;return""}function Ni(t){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ni(t)}var J=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Mt(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=Ha(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=Ka(),this.imagePreloader=new Ga,this.audioController=rt(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new Le("drawnFrame",0,0,0),this.expressionsPlugin=Vi()};W([rr],J),J.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var i=Za(e);this.renderer=new i(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),fi.loadAnimation(t.path,this.configAnimation,this.onSetupError))},J.prototype.onSetupError=function(){this.trigger("data_failed")},J.prototype.setupAnimation=function(t){fi.completeAnimation(t,this.configAnimation)},J.prototype.setData=function(t,e){e&&Ni(e)!=="object"&&(e=JSON.parse(e));var i={wrapper:t,animationData:e},s=t.attributes;i.path=s.getNamedItem("data-animation-path")?s.getNamedItem("data-animation-path").value:s.getNamedItem("data-bm-path")?s.getNamedItem("data-bm-path").value:s.getNamedItem("bm-path")?s.getNamedItem("bm-path").value:"",i.animType=s.getNamedItem("data-anim-type")?s.getNamedItem("data-anim-type").value:s.getNamedItem("data-bm-type")?s.getNamedItem("data-bm-type").value:s.getNamedItem("bm-type")?s.getNamedItem("bm-type").value:s.getNamedItem("data-bm-renderer")?s.getNamedItem("data-bm-renderer").value:s.getNamedItem("bm-renderer")?s.getNamedItem("bm-renderer").value:Ja()||"canvas";var n=s.getNamedItem("data-anim-loop")?s.getNamedItem("data-anim-loop").value:s.getNamedItem("data-bm-loop")?s.getNamedItem("data-bm-loop").value:s.getNamedItem("bm-loop")?s.getNamedItem("bm-loop").value:"";n==="false"?i.loop=!1:n==="true"?i.loop=!0:n!==""&&(i.loop=parseInt(n,10));var a=s.getNamedItem("data-anim-autoplay")?s.getNamedItem("data-anim-autoplay").value:s.getNamedItem("data-bm-autoplay")?s.getNamedItem("data-bm-autoplay").value:s.getNamedItem("bm-autoplay")?s.getNamedItem("bm-autoplay").value:!0;i.autoplay=a!=="false",i.name=s.getNamedItem("data-name")?s.getNamedItem("data-name").value:s.getNamedItem("data-bm-name")?s.getNamedItem("data-bm-name").value:s.getNamedItem("bm-name")?s.getNamedItem("bm-name").value:"";var h=s.getNamedItem("data-anim-prerender")?s.getNamedItem("data-anim-prerender").value:s.getNamedItem("data-bm-prerender")?s.getNamedItem("data-bm-prerender").value:s.getNamedItem("bm-prerender")?s.getNamedItem("bm-prerender").value:"";h==="false"&&(i.prerender=!1),i.path?this.setParams(i):this.trigger("destroy")},J.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,i,s=e.length,n=t.layers,a,h=n.length;for(a=0;a<h;a+=1)for(i=0;i<s;){if(e[i].id===n[a].id){e[i]=n[a];break}i+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,i=0;i<s;i+=1)this.animationData.assets.push(t.assets[i]);this.animationData.__complete=!1,fi.completeAnimation(this.animationData,this.onSegmentComplete)},J.prototype.onSegmentComplete=function(t){this.animationData=t;var e=Vi();e&&e.initExpressions(this),this.loadNextSegment()},J.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var i=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,fi.loadData(i,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},J.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},J.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},J.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},J.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=Ya(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},J.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},J.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=Vi();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},J.prototype.resize=function(t,e){var i=typeof t=="number"?t:void 0,s=typeof e=="number"?e:void 0;this.renderer.updateContainerSize(i,s)},J.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},J.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},J.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},J.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},J.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},J.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},J.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},J.prototype.getMarkerData=function(t){for(var e,i=0;i<this.markers.length;i+=1)if(e=this.markers[i],e.payload&&e.payload.name===t)return e;return null},J.prototype.goToAndStop=function(t,e,i){if(!(i&&this.name!==i)){var s=Number(t);if(isNaN(s)){var n=this.getMarkerData(t);n&&this.goToAndStop(n.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},J.prototype.goToAndPlay=function(t,e,i){if(!(i&&this.name!==i)){var s=Number(t);if(isNaN(s)){var n=this.getMarkerData(t);n&&(n.duration?this.playSegments([n.time,n.time+n.duration],!0):this.goToAndStop(n.time,!0))}else this.goToAndStop(s,e,i);this.play()}},J.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,i=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(i=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(i=!0,e=0)):this.setCurrentRawFrameValue(e),i&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},J.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},J.prototype.setSegment=function(t,e){var i=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?i=t:this.currentRawFrame+this.firstFrame>e&&(i=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,i!==-1&&this.goToAndStop(i,!0)},J.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),Ni(t[0])==="object"){var i,s=t.length;for(i=0;i<s;i+=1)this.segments.push(t[i])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},J.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},J.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},J.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},J.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},J.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},J.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},J.prototype.setLoop=function(t){this.loop=t},J.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},J.prototype.getVolume=function(){return this.audioController.getVolume()},J.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},J.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},J.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},J.prototype.getPath=function(){return this.path},J.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var i=t.p;i.indexOf("images/")!==-1&&(i=i.split("/")[1]),e=this.assetsPath+i}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},J.prototype.getAssetData=function(t){for(var e=0,i=this.assets.length;e<i;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},J.prototype.hide=function(){this.renderer.hide()},J.prototype.show=function(){this.renderer.show()},J.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},J.prototype.updateDocumentData=function(t,e,i){try{var s=this.renderer.getElementByPath(t);s.updateDocumentData(e,i)}catch{}},J.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new Le(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new Oe(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new ze(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new Ze(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new Qs(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new Le(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new Oe(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new ze(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new Ze(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new Qs(t,this))},J.prototype.triggerRenderFrameError=function(t){var e=new Ba(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},J.prototype.triggerConfigError=function(t){var e=new Ua(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var gt=(function(){var t={},e=[],i=0,s=0,n=0,a=!0,h=!1;function g(y){for(var P=0,l=y.target;P<s;)e[P].animation===l&&(e.splice(P,1),P-=1,s-=1,l.isPaused||z()),P+=1}function f(y,P){if(!y)return null;for(var l=0;l<s;){if(e[l].elem===y&&e[l].elem!==null)return e[l].animation;l+=1}var p=new J;return u(p,y),p.setData(y,P),p}function b(){var y,P=e.length,l=[];for(y=0;y<P;y+=1)l.push(e[y].animation);return l}function S(){n+=1,tt()}function z(){n-=1}function u(y,P){y.addEventListener("destroy",g),y.addEventListener("_active",S),y.addEventListener("_idle",z),e.push({elem:P,animation:y}),s+=1}function A(y){var P=new J;return u(P,null),P.setParams(y),P}function C(y,P){var l;for(l=0;l<s;l+=1)e[l].animation.setSpeed(y,P)}function E(y,P){var l;for(l=0;l<s;l+=1)e[l].animation.setDirection(y,P)}function I(y){var P;for(P=0;P<s;P+=1)e[P].animation.play(y)}function x(y){var P=y-i,l;for(l=0;l<s;l+=1)e[l].animation.advanceTime(P);i=y,n&&!h?window.requestAnimationFrame(x):a=!0}function _(y){i=y,window.requestAnimationFrame(x)}function d(y){var P;for(P=0;P<s;P+=1)e[P].animation.pause(y)}function v(y,P,l){var p;for(p=0;p<s;p+=1)e[p].animation.goToAndStop(y,P,l)}function w(y){var P;for(P=0;P<s;P+=1)e[P].animation.stop(y)}function T(y){var P;for(P=0;P<s;P+=1)e[P].animation.togglePause(y)}function L(y){var P;for(P=s-1;P>=0;P-=1)e[P].animation.destroy(y)}function R(y,P,l){var p=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),O,M=p.length;for(O=0;O<M;O+=1)l&&p[O].setAttribute("data-bm-type",l),f(p[O],y);if(P&&M===0){l||(l="svg");var q=document.getElementsByTagName("body")[0];q.innerText="";var Q=B("div");Q.style.width="100%",Q.style.height="100%",Q.setAttribute("data-bm-type",l),q.appendChild(Q),f(Q,y)}}function N(){var y;for(y=0;y<s;y+=1)e[y].animation.resize()}function tt(){!h&&n&&a&&(window.requestAnimationFrame(_),a=!1)}function K(){h=!0}function j(){h=!1,tt()}function st(y,P){var l;for(l=0;l<s;l+=1)e[l].animation.setVolume(y,P)}function G(y){var P;for(P=0;P<s;P+=1)e[P].animation.mute(y)}function D(y){var P;for(P=0;P<s;P+=1)e[P].animation.unmute(y)}return t.registerAnimation=f,t.loadAnimation=A,t.setSpeed=C,t.setDirection=E,t.play=I,t.pause=d,t.stop=w,t.togglePause=T,t.searchAnimations=R,t.resize=N,t.goToAndStop=v,t.destroy=L,t.freeze=K,t.unfreeze=j,t.setVolume=st,t.mute=G,t.unmute=D,t.getRegisteredAnimations=b,t})(),di=(function(){var t={};t.getBezierEasing=i;var e={};function i(_,d,v,w,T){var L=T||("bez_"+_+"_"+d+"_"+v+"_"+w).replace(/\./g,"p");if(e[L])return e[L];var R=new x([_,d,v,w]);return e[L]=R,R}var s=4,n=.001,a=1e-7,h=10,g=11,f=1/(g-1),b=typeof Float32Array=="function";function S(_,d){return 1-3*d+3*_}function z(_,d){return 3*d-6*_}function u(_){return 3*_}function A(_,d,v){return((S(d,v)*_+z(d,v))*_+u(d))*_}function C(_,d,v){return 3*S(d,v)*_*_+2*z(d,v)*_+u(d)}function E(_,d,v,w,T){var L,R,N=0;do R=d+(v-d)/2,L=A(R,w,T)-_,L>0?v=R:d=R;while(Math.abs(L)>a&&++N<h);return R}function I(_,d,v,w){for(var T=0;T<s;++T){var L=C(d,v,w);if(L===0)return d;var R=A(d,v,w)-_;d-=R/L}return d}function x(_){this._p=_,this._mSampleValues=b?new Float32Array(g):new Array(g),this._precomputed=!1,this.get=this.get.bind(this)}return x.prototype={get:function(d){var v=this._p[0],w=this._p[1],T=this._p[2],L=this._p[3];return this._precomputed||this._precompute(),v===w&&T===L?d:d===0?0:d===1?1:A(this._getTForX(d),w,L)},_precompute:function(){var d=this._p[0],v=this._p[1],w=this._p[2],T=this._p[3];this._precomputed=!0,(d!==v||w!==T)&&this._calcSampleValues()},_calcSampleValues:function(){for(var d=this._p[0],v=this._p[2],w=0;w<g;++w)this._mSampleValues[w]=A(w*f,d,v)},_getTForX:function(d){for(var v=this._p[0],w=this._p[2],T=this._mSampleValues,L=0,R=1,N=g-1;R!==N&&T[R]<=d;++R)L+=f;--R;var tt=(d-T[R])/(T[R+1]-T[R]),K=L+tt*f,j=C(K,v,w);return j>=n?I(d,K,v,w):j===0?K:E(d,L,L+f,v,w)}},t})(),ar=(function(){function t(e){return e.concat(ot(e.length))}return{double:t}})(),Bi=(function(){return function(t,e,i){var s=0,n=t,a=ot(n),h={newElement:g,release:f};function g(){var b;return s?(s-=1,b=a[s]):b=e(),b}function f(b){s===n&&(a=ar.double(a),n*=2),i&&i(b),a[s]=b,s+=1}return h}})(),nr=(function(){function t(){return{addedLength:0,percents:at("float32",ci()),lengths:at("float32",ci())}}return Bi(8,t)})(),or=(function(){function t(){return{lengths:[],totalLength:0}}function e(i){var s,n=i.lengths.length;for(s=0;s<n;s+=1)nr.release(i.lengths[s]);i.lengths.length=0}return Bi(8,t,e)})();function Qa(){var t=Math;function e(u,A,C,E,I,x){var _=u*E+A*I+C*x-I*E-x*u-C*A;return _>-.001&&_<.001}function i(u,A,C,E,I,x,_,d,v){if(C===0&&x===0&&v===0)return e(u,A,E,I,_,d);var w=t.sqrt(t.pow(E-u,2)+t.pow(I-A,2)+t.pow(x-C,2)),T=t.sqrt(t.pow(_-u,2)+t.pow(d-A,2)+t.pow(v-C,2)),L=t.sqrt(t.pow(_-E,2)+t.pow(d-I,2)+t.pow(v-x,2)),R;return w>T?w>L?R=w-T-L:R=L-T-w:L>T?R=L-T-w:R=T-w-L,R>-1e-4&&R<1e-4}var s=(function(){return function(u,A,C,E){var I=ci(),x,_,d,v,w,T=0,L,R=[],N=[],tt=nr.newElement();for(d=C.length,x=0;x<I;x+=1){for(w=x/(I-1),L=0,_=0;_<d;_+=1)v=Ct(1-w,3)*u[_]+3*Ct(1-w,2)*w*C[_]+3*(1-w)*Ct(w,2)*E[_]+Ct(w,3)*A[_],R[_]=v,N[_]!==null&&(L+=Ct(R[_]-N[_],2)),N[_]=R[_];L&&(L=Ke(L),T+=L),tt.percents[x]=w,tt.lengths[x]=T}return tt.addedLength=T,tt}})();function n(u){var A=or.newElement(),C=u.c,E=u.v,I=u.o,x=u.i,_,d=u._length,v=A.lengths,w=0;for(_=0;_<d-1;_+=1)v[_]=s(E[_],E[_+1],I[_],x[_+1]),w+=v[_].addedLength;return C&&d&&(v[_]=s(E[_],E[0],I[_],x[0]),w+=v[_].addedLength),A.totalLength=w,A}function a(u){this.segmentLength=0,this.points=new Array(u)}function h(u,A){this.partialLength=u,this.point=A}var g=(function(){var u={};return function(A,C,E,I){var x=(A[0]+"_"+A[1]+"_"+C[0]+"_"+C[1]+"_"+E[0]+"_"+E[1]+"_"+I[0]+"_"+I[1]).replace(/\./g,"p");if(!u[x]){var _=ci(),d,v,w,T,L,R=0,N,tt,K=null;A.length===2&&(A[0]!==C[0]||A[1]!==C[1])&&e(A[0],A[1],C[0],C[1],A[0]+E[0],A[1]+E[1])&&e(A[0],A[1],C[0],C[1],C[0]+I[0],C[1]+I[1])&&(_=2);var j=new a(_);for(w=E.length,d=0;d<_;d+=1){for(tt=ot(w),L=d/(_-1),N=0,v=0;v<w;v+=1)T=Ct(1-L,3)*A[v]+3*Ct(1-L,2)*L*(A[v]+E[v])+3*(1-L)*Ct(L,2)*(C[v]+I[v])+Ct(L,3)*C[v],tt[v]=T,K!==null&&(N+=Ct(tt[v]-K[v],2));N=Ke(N),R+=N,j.points[d]=new h(N,tt),K=tt}j.segmentLength=R,u[x]=j}return u[x]}})();function f(u,A){var C=A.percents,E=A.lengths,I=C.length,x=Jt((I-1)*u),_=u*A.addedLength,d=0;if(x===I-1||x===0||_===E[x])return C[x];for(var v=E[x]>_?-1:1,w=!0;w;)if(E[x]<=_&&E[x+1]>_?(d=(_-E[x])/(E[x+1]-E[x]),w=!1):x+=v,x<0||x>=I-1){if(x===I-1)return C[x];w=!1}return C[x]+(C[x+1]-C[x])*d}function b(u,A,C,E,I,x){var _=f(I,x),d=1-_,v=t.round((d*d*d*u[0]+(_*d*d+d*_*d+d*d*_)*C[0]+(_*_*d+d*_*_+_*d*_)*E[0]+_*_*_*A[0])*1e3)/1e3,w=t.round((d*d*d*u[1]+(_*d*d+d*_*d+d*d*_)*C[1]+(_*_*d+d*_*_+_*d*_)*E[1]+_*_*_*A[1])*1e3)/1e3;return[v,w]}var S=at("float32",8);function z(u,A,C,E,I,x,_){I<0?I=0:I>1&&(I=1);var d=f(I,_);x=x>1?1:x;var v=f(x,_),w,T=u.length,L=1-d,R=1-v,N=L*L*L,tt=d*L*L*3,K=d*d*L*3,j=d*d*d,st=L*L*R,G=d*L*R+L*d*R+L*L*v,D=d*d*R+L*d*v+d*L*v,y=d*d*v,P=L*R*R,l=d*R*R+L*v*R+L*R*v,p=d*v*R+L*v*v+d*R*v,O=d*v*v,M=R*R*R,q=v*R*R+R*v*R+R*R*v,Q=v*v*R+R*v*v+v*R*v,et=v*v*v;for(w=0;w<T;w+=1)S[w*4]=t.round((N*u[w]+tt*C[w]+K*E[w]+j*A[w])*1e3)/1e3,S[w*4+1]=t.round((st*u[w]+G*C[w]+D*E[w]+y*A[w])*1e3)/1e3,S[w*4+2]=t.round((P*u[w]+l*C[w]+p*E[w]+O*A[w])*1e3)/1e3,S[w*4+3]=t.round((M*u[w]+q*C[w]+Q*E[w]+et*A[w])*1e3)/1e3;return S}return{getSegmentsLength:n,getNewSegment:z,getPointInSegment:b,buildBezierData:g,pointOnLine2D:e,pointOnLine3D:i}}var Qt=Qa(),Re=c,lr=Math.abs;function hr(t,e){var i=this.offsetTime,s;this.propType==="multidimensional"&&(s=at("float32",this.pv.length));for(var n=e.lastIndex,a=n,h=this.keyframes.length-1,g=!0,f,b,S;g;){if(f=this.keyframes[a],b=this.keyframes[a+1],a===h-1&&t>=b.t-i){f.h&&(f=b),n=0;break}if(b.t-i>t){n=a;break}a<h-1?a+=1:(n=0,g=!1)}S=this.keyframesMetadata[a]||{};var z,u,A,C,E,I,x=b.t-i,_=f.t-i,d;if(f.to){S.bezierData||(S.bezierData=Qt.buildBezierData(f.s,b.s||f.e,f.to,f.ti));var v=S.bezierData;if(t>=x||t<_){var w=t>=x?v.points.length-1:0;for(u=v.points[w].point.length,z=0;z<u;z+=1)s[z]=v.points[w].point[z]}else{S.__fnct?I=S.__fnct:(I=di.getBezierEasing(f.o.x,f.o.y,f.i.x,f.i.y,f.n).get,S.__fnct=I),A=I((t-_)/(x-_));var T=v.segmentLength*A,L,R=e.lastFrame<t&&e._lastKeyframeIndex===a?e._lastAddedLength:0;for(E=e.lastFrame<t&&e._lastKeyframeIndex===a?e._lastPoint:0,g=!0,C=v.points.length;g;){if(R+=v.points[E].partialLength,T===0||A===0||E===v.points.length-1){for(u=v.points[E].point.length,z=0;z<u;z+=1)s[z]=v.points[E].point[z];break}else if(T>=R&&T<R+v.points[E+1].partialLength){for(L=(T-R)/v.points[E+1].partialLength,u=v.points[E].point.length,z=0;z<u;z+=1)s[z]=v.points[E].point[z]+(v.points[E+1].point[z]-v.points[E].point[z])*L;break}E<C-1?E+=1:g=!1}e._lastPoint=E,e._lastAddedLength=R-v.points[E].partialLength,e._lastKeyframeIndex=a}}else{var N,tt,K,j,st;if(h=f.s.length,d=b.s||f.e,this.sh&&f.h!==1)if(t>=x)s[0]=d[0],s[1]=d[1],s[2]=d[2];else if(t<=_)s[0]=f.s[0],s[1]=f.s[1],s[2]=f.s[2];else{var G=cr(f.s),D=cr(d),y=(t-_)/(x-_);en(s,tn(G,D,y))}else for(a=0;a<h;a+=1)f.h!==1&&(t>=x?A=1:t<_?A=0:(f.o.x.constructor===Array?(S.__fnct||(S.__fnct=[]),S.__fnct[a]?I=S.__fnct[a]:(N=f.o.x[a]===void 0?f.o.x[0]:f.o.x[a],tt=f.o.y[a]===void 0?f.o.y[0]:f.o.y[a],K=f.i.x[a]===void 0?f.i.x[0]:f.i.x[a],j=f.i.y[a]===void 0?f.i.y[0]:f.i.y[a],I=di.getBezierEasing(N,tt,K,j).get,S.__fnct[a]=I)):S.__fnct?I=S.__fnct:(N=f.o.x,tt=f.o.y,K=f.i.x,j=f.i.y,I=di.getBezierEasing(N,tt,K,j).get,f.keyframeMetadata=I),A=I((t-_)/(x-_)))),d=b.s||f.e,st=f.h===1?f.s[a]:f.s[a]+(d[a]-f.s[a])*A,this.propType==="multidimensional"?s[a]=st:s=st}return e.lastIndex=n,s}function tn(t,e,i){var s=[],n=t[0],a=t[1],h=t[2],g=t[3],f=e[0],b=e[1],S=e[2],z=e[3],u,A,C,E,I;return A=n*f+a*b+h*S+g*z,A<0&&(A=-A,f=-f,b=-b,S=-S,z=-z),1-A>1e-6?(u=Math.acos(A),C=Math.sin(u),E=Math.sin((1-i)*u)/C,I=Math.sin(i*u)/C):(E=1-i,I=i),s[0]=E*n+I*f,s[1]=E*a+I*b,s[2]=E*h+I*S,s[3]=E*g+I*z,s}function en(t,e){var i=e[0],s=e[1],n=e[2],a=e[3],h=Math.atan2(2*s*a-2*i*n,1-2*s*s-2*n*n),g=Math.asin(2*i*s+2*n*a),f=Math.atan2(2*i*a-2*s*n,1-2*i*i-2*n*n);t[0]=h/dt,t[1]=g/dt,t[2]=f/dt}function cr(t){var e=t[0]*dt,i=t[1]*dt,s=t[2]*dt,n=Math.cos(e/2),a=Math.cos(i/2),h=Math.cos(s/2),g=Math.sin(e/2),f=Math.sin(i/2),b=Math.sin(s/2),S=n*a*h-g*f*b,z=g*f*h+n*a*b,u=g*a*h+n*f*b,A=n*f*h-g*a*b;return[z,u,A,S]}function fr(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==Re&&(this._caching.lastFrame>=i&&t>=i||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var s=this.interpolateValue(t,this._caching);this.pv=s}return this._caching.lastFrame=t,this.pv}function Ui(t){var e;if(this.propType==="unidimensional")e=t*this.mult,lr(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var i=0,s=this.v.length;i<s;)e=t[i]*this.mult,lr(this.v[i]-e)>1e-5&&(this.v[i]=e,this._mdf=!0),i+=1}function ji(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,i=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)i=this.effectsSequence[t](i);this.setVValue(i),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function Hi(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function sn(t,e,i,s){this.propType="unidimensional",this.mult=i||1,this.data=e,this.v=i?e.k*i:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=ji,this.setVValue=Ui,this.addEffect=Hi}function rn(t,e,i,s){this.propType="multidimensional",this.mult=i||1,this.data=e,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var n,a=e.k.length;for(this.v=at("float32",a),this.pv=at("float32",a),this.vel=at("float32",a),n=0;n<a;n+=1)this.v[n]=e.k[n]*this.mult,this.pv[n]=e.k[n];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=ji,this.setVValue=Ui,this.addEffect=Hi}function an(t,e,i,s){this.propType="unidimensional",this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:Re,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=i||1,this.elem=t,this.container=s,this.comp=t.comp,this.v=Re,this.pv=Re,this._isFirstFrame=!0,this.getValue=ji,this.setVValue=Ui,this.interpolateValue=hr,this.effectsSequence=[fr.bind(this)],this.addEffect=Hi}function nn(t,e,i,s){this.propType="multidimensional";var n,a=e.k.length,h,g,f,b;for(n=0;n<a-1;n+=1)e.k[n].to&&e.k[n].s&&e.k[n+1]&&e.k[n+1].s&&(h=e.k[n].s,g=e.k[n+1].s,f=e.k[n].to,b=e.k[n].ti,(h.length===2&&!(h[0]===g[0]&&h[1]===g[1])&&Qt.pointOnLine2D(h[0],h[1],g[0],g[1],h[0]+f[0],h[1]+f[1])&&Qt.pointOnLine2D(h[0],h[1],g[0],g[1],g[0]+b[0],g[1]+b[1])||h.length===3&&!(h[0]===g[0]&&h[1]===g[1]&&h[2]===g[2])&&Qt.pointOnLine3D(h[0],h[1],h[2],g[0],g[1],g[2],h[0]+f[0],h[1]+f[1],h[2]+f[2])&&Qt.pointOnLine3D(h[0],h[1],h[2],g[0],g[1],g[2],g[0]+b[0],g[1]+b[1],g[2]+b[2]))&&(e.k[n].to=null,e.k[n].ti=null),h[0]===g[0]&&h[1]===g[1]&&f[0]===0&&f[1]===0&&b[0]===0&&b[1]===0&&(h.length===2||h[2]===g[2]&&f[2]===0&&b[2]===0)&&(e.k[n].to=null,e.k[n].ti=null));this.effectsSequence=[fr.bind(this)],this.data=e,this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=i||1,this.elem=t,this.container=s,this.comp=t.comp,this.getValue=ji,this.setVValue=Ui,this.interpolateValue=hr,this.frameId=-1;var S=e.k[0].s.length;for(this.v=at("float32",S),this.pv=at("float32",S),n=0;n<S;n+=1)this.v[n]=Re,this.pv[n]=Re;this._caching={lastFrame:Re,lastIndex:0,value:at("float32",S)},this.addEffect=Hi}var H=(function(){function t(i,s,n,a,h){s.sid&&(s=i.globalData.slotManager.getProp(s));var g;if(!s.k.length)g=new sn(i,s,a,h);else if(typeof s.k[0]=="number")g=new rn(i,s,a,h);else switch(n){case 0:g=new an(i,s,a,h);break;case 1:g=new nn(i,s,a,h);break;default:break}return g.effectsSequence.length&&h.addDynamicProperty(g),g}var e={getProp:t};return e})();function wt(){}wt.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,i=this.dynamicProperties.length;for(e=0;e<i;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var Ve=(function(){function t(){return at("float32",2)}return Bi(8,t)})();function re(){this.c=!1,this._length=0,this._maxLength=8,this.v=ot(this._maxLength),this.o=ot(this._maxLength),this.i=ot(this._maxLength)}re.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var i=0;i<e;)this.v[i]=Ve.newElement(),this.o[i]=Ve.newElement(),this.i[i]=Ve.newElement(),i+=1},re.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},re.prototype.doubleArrayLength=function(){this.v=this.v.concat(ot(this._maxLength)),this.i=this.i.concat(ot(this._maxLength)),this.o=this.o.concat(ot(this._maxLength)),this._maxLength*=2},re.prototype.setXYAt=function(t,e,i,s,n){var a;switch(this._length=Math.max(this._length,s+1),this._length>=this._maxLength&&this.doubleArrayLength(),i){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o;break;default:a=[];break}(!a[s]||a[s]&&!n)&&(a[s]=Ve.newElement()),a[s][0]=t,a[s][1]=e},re.prototype.setTripleAt=function(t,e,i,s,n,a,h,g){this.setXYAt(t,e,"v",h,g),this.setXYAt(i,s,"o",h,g),this.setXYAt(n,a,"i",h,g)},re.prototype.reverse=function(){var t=new re;t.setPathData(this.c,this._length);var e=this.v,i=this.o,s=this.i,n=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],s[0][0],s[0][1],i[0][0],i[0][1],0,!1),n=1);var a=this._length-1,h=this._length,g;for(g=n;g<h;g+=1)t.setTripleAt(e[a][0],e[a][1],s[a][0],s[a][1],i[a][0],i[a][1],g,!1),a-=1;return t},re.prototype.length=function(){return this._length};var St=(function(){function t(){return new re}function e(n){var a=n._length,h;for(h=0;h<a;h+=1)Ve.release(n.v[h]),Ve.release(n.i[h]),Ve.release(n.o[h]),n.v[h]=null,n.i[h]=null,n.o[h]=null;n._length=0,n.c=!1}function i(n){var a=s.newElement(),h,g=n._length===void 0?n.v.length:n._length;for(a.setLength(g),a.c=n.c,h=0;h<g;h+=1)a.setTripleAt(n.v[h][0],n.v[h][1],n.o[h][0],n.o[h][1],n.i[h][0],n.i[h][1],h);return a}var s=Bi(4,t,e);return s.clone=i,s})();function ys(){this._length=0,this._maxLength=4,this.shapes=ot(this._maxLength)}ys.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(ot(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ys.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)St.release(this.shapes[t]);this._length=0};var Je=(function(){var t={newShapeCollection:n,release:a},e=0,i=4,s=ot(i);function n(){var h;return e?(e-=1,h=s[e]):h=new ys,h}function a(h){var g,f=h._length;for(g=0;g<f;g+=1)St.release(h.shapes[g]);h._length=0,e===i&&(s=ar.double(s),i*=2),s[e]=h,e+=1}return t})(),Wi=(function(){var t=-999999;function e(x,_,d){var v=d.lastIndex,w,T,L,R,N,tt,K,j,st,G=this.keyframes;if(x<G[0].t-this.offsetTime)w=G[0].s[0],L=!0,v=0;else if(x>=G[G.length-1].t-this.offsetTime)w=G[G.length-1].s?G[G.length-1].s[0]:G[G.length-2].e[0],L=!0;else{for(var D=v,y=G.length-1,P=!0,l,p,O;P&&(l=G[D],p=G[D+1],!(p.t-this.offsetTime>x));)D<y-1?D+=1:P=!1;if(O=this.keyframesMetadata[D]||{},L=l.h===1,v=D,!L){if(x>=p.t-this.offsetTime)j=1;else if(x<l.t-this.offsetTime)j=0;else{var M;O.__fnct?M=O.__fnct:(M=di.getBezierEasing(l.o.x,l.o.y,l.i.x,l.i.y).get,O.__fnct=M),j=M((x-(l.t-this.offsetTime))/(p.t-this.offsetTime-(l.t-this.offsetTime)))}T=p.s?p.s[0]:l.e[0]}w=l.s[0]}for(tt=_._length,K=w.i[0].length,d.lastIndex=v,R=0;R<tt;R+=1)for(N=0;N<K;N+=1)st=L?w.i[R][N]:w.i[R][N]+(T.i[R][N]-w.i[R][N])*j,_.i[R][N]=st,st=L?w.o[R][N]:w.o[R][N]+(T.o[R][N]-w.o[R][N])*j,_.o[R][N]=st,st=L?w.v[R][N]:w.v[R][N]+(T.v[R][N]-w.v[R][N])*j,_.v[R][N]=st}function i(){var x=this.comp.renderedFrame-this.offsetTime,_=this.keyframes[0].t-this.offsetTime,d=this.keyframes[this.keyframes.length-1].t-this.offsetTime,v=this._caching.lastFrame;return v!==t&&(v<_&&x<_||v>d&&x>d)||(this._caching.lastIndex=v<x?this._caching.lastIndex:0,this.interpolateShape(x,this.pv,this._caching)),this._caching.lastFrame=x,this.pv}function s(){this.paths=this.localShapeCollection}function n(x,_){if(x._length!==_._length||x.c!==_.c)return!1;var d,v=x._length;for(d=0;d<v;d+=1)if(x.v[d][0]!==_.v[d][0]||x.v[d][1]!==_.v[d][1]||x.o[d][0]!==_.o[d][0]||x.o[d][1]!==_.o[d][1]||x.i[d][0]!==_.i[d][0]||x.i[d][1]!==_.i[d][1])return!1;return!0}function a(x){n(this.v,x)||(this.v=St.clone(x),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function h(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var x;this.kf?x=this.pv:this.data.ks?x=this.data.ks.k:x=this.data.pt.k;var _,d=this.effectsSequence.length;for(_=0;_<d;_+=1)x=this.effectsSequence[_](x);this.setVValue(x),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function g(x,_,d){this.propType="shape",this.comp=x.comp,this.container=x,this.elem=x,this.data=_,this.k=!1,this.kf=!1,this._mdf=!1;var v=d===3?_.pt.k:_.ks.k;this.v=St.clone(v),this.pv=St.clone(this.v),this.localShapeCollection=Je.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=s,this.effectsSequence=[]}function f(x){this.effectsSequence.push(x),this.container.addDynamicProperty(this)}g.prototype.interpolateShape=e,g.prototype.getValue=h,g.prototype.setVValue=a,g.prototype.addEffect=f;function b(x,_,d){this.propType="shape",this.comp=x.comp,this.elem=x,this.container=x,this.offsetTime=x.data.st,this.keyframes=d===3?_.pt.k:_.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var v=this.keyframes[0].s[0].i.length;this.v=St.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,v),this.pv=St.clone(this.v),this.localShapeCollection=Je.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=s,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[i.bind(this)]}b.prototype.getValue=h,b.prototype.interpolateShape=e,b.prototype.setVValue=a,b.prototype.addEffect=f;var S=(function(){var x=Z;function _(d,v){this.v=St.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=Je.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=v.d,this.elem=d,this.comp=d.comp,this.frameId=-1,this.initDynamicPropertyContainer(d),this.p=H.getProp(d,v.p,1,0,this),this.s=H.getProp(d,v.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return _.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var v=this.p.v[0],w=this.p.v[1],T=this.s.v[0]/2,L=this.s.v[1]/2,R=this.d!==3,N=this.v;N.v[0][0]=v,N.v[0][1]=w-L,N.v[1][0]=R?v+T:v-T,N.v[1][1]=w,N.v[2][0]=v,N.v[2][1]=w+L,N.v[3][0]=R?v-T:v+T,N.v[3][1]=w,N.i[0][0]=R?v-T*x:v+T*x,N.i[0][1]=w-L,N.i[1][0]=R?v+T:v-T,N.i[1][1]=w-L*x,N.i[2][0]=R?v+T*x:v-T*x,N.i[2][1]=w+L,N.i[3][0]=R?v-T:v+T,N.i[3][1]=w+L*x,N.o[0][0]=R?v+T*x:v-T*x,N.o[0][1]=w-L,N.o[1][0]=R?v+T:v-T,N.o[1][1]=w+L*x,N.o[2][0]=R?v-T*x:v+T*x,N.o[2][1]=w+L,N.o[3][0]=R?v-T:v+T,N.o[3][1]=w-L*x}},W([wt],_),_})(),z=(function(){function x(_,d){this.v=St.newElement(),this.v.setPathData(!0,0),this.elem=_,this.comp=_.comp,this.data=d,this.frameId=-1,this.d=d.d,this.initDynamicPropertyContainer(_),d.sy===1?(this.ir=H.getProp(_,d.ir,0,0,this),this.is=H.getProp(_,d.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=H.getProp(_,d.pt,0,0,this),this.p=H.getProp(_,d.p,1,0,this),this.r=H.getProp(_,d.r,0,dt,this),this.or=H.getProp(_,d.or,0,0,this),this.os=H.getProp(_,d.os,0,.01,this),this.localShapeCollection=Je.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return x.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var d=Math.floor(this.pt.v)*2,v=Math.PI*2/d,w=!0,T=this.or.v,L=this.ir.v,R=this.os.v,N=this.is.v,tt=2*Math.PI*T/(d*2),K=2*Math.PI*L/(d*2),j,st,G,D,y=-Math.PI/2;y+=this.r.v;var P=this.data.d===3?-1:1;for(this.v._length=0,j=0;j<d;j+=1){st=w?T:L,G=w?R:N,D=w?tt:K;var l=st*Math.cos(y),p=st*Math.sin(y),O=l===0&&p===0?0:p/Math.sqrt(l*l+p*p),M=l===0&&p===0?0:-l/Math.sqrt(l*l+p*p);l+=+this.p.v[0],p+=+this.p.v[1],this.v.setTripleAt(l,p,l-O*D*G*P,p-M*D*G*P,l+O*D*G*P,p+M*D*G*P,j,!0),w=!w,y+=v*P}},convertPolygonToPath:function(){var d=Math.floor(this.pt.v),v=Math.PI*2/d,w=this.or.v,T=this.os.v,L=2*Math.PI*w/(d*4),R,N=-Math.PI*.5,tt=this.data.d===3?-1:1;for(N+=this.r.v,this.v._length=0,R=0;R<d;R+=1){var K=w*Math.cos(N),j=w*Math.sin(N),st=K===0&&j===0?0:j/Math.sqrt(K*K+j*j),G=K===0&&j===0?0:-K/Math.sqrt(K*K+j*j);K+=+this.p.v[0],j+=+this.p.v[1],this.v.setTripleAt(K,j,K-st*L*T*tt,j-G*L*T*tt,K+st*L*T*tt,j+G*L*T*tt,R,!0),N+=v*tt}this.paths.length=0,this.paths[0]=this.v}},W([wt],x),x})(),u=(function(){function x(_,d){this.v=St.newElement(),this.v.c=!0,this.localShapeCollection=Je.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=_,this.comp=_.comp,this.frameId=-1,this.d=d.d,this.initDynamicPropertyContainer(_),this.p=H.getProp(_,d.p,1,0,this),this.s=H.getProp(_,d.s,1,0,this),this.r=H.getProp(_,d.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return x.prototype={convertRectToPath:function(){var d=this.p.v[0],v=this.p.v[1],w=this.s.v[0]/2,T=this.s.v[1]/2,L=Fe(w,T,this.r.v),R=L*(1-Z);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(d+w,v-T+L,d+w,v-T+L,d+w,v-T+R,0,!0),this.v.setTripleAt(d+w,v+T-L,d+w,v+T-R,d+w,v+T-L,1,!0),L!==0?(this.v.setTripleAt(d+w-L,v+T,d+w-L,v+T,d+w-R,v+T,2,!0),this.v.setTripleAt(d-w+L,v+T,d-w+R,v+T,d-w+L,v+T,3,!0),this.v.setTripleAt(d-w,v+T-L,d-w,v+T-L,d-w,v+T-R,4,!0),this.v.setTripleAt(d-w,v-T+L,d-w,v-T+R,d-w,v-T+L,5,!0),this.v.setTripleAt(d-w+L,v-T,d-w+L,v-T,d-w+R,v-T,6,!0),this.v.setTripleAt(d+w-L,v-T,d+w-R,v-T,d+w-L,v-T,7,!0)):(this.v.setTripleAt(d-w,v+T,d-w+R,v+T,d-w,v+T,2),this.v.setTripleAt(d-w,v-T,d-w,v-T+R,d-w,v-T,3))):(this.v.setTripleAt(d+w,v-T+L,d+w,v-T+R,d+w,v-T+L,0,!0),L!==0?(this.v.setTripleAt(d+w-L,v-T,d+w-L,v-T,d+w-R,v-T,1,!0),this.v.setTripleAt(d-w+L,v-T,d-w+R,v-T,d-w+L,v-T,2,!0),this.v.setTripleAt(d-w,v-T+L,d-w,v-T+L,d-w,v-T+R,3,!0),this.v.setTripleAt(d-w,v+T-L,d-w,v+T-R,d-w,v+T-L,4,!0),this.v.setTripleAt(d-w+L,v+T,d-w+L,v+T,d-w+R,v+T,5,!0),this.v.setTripleAt(d+w-L,v+T,d+w-R,v+T,d+w-L,v+T,6,!0),this.v.setTripleAt(d+w,v+T-L,d+w,v+T-L,d+w,v+T-R,7,!0)):(this.v.setTripleAt(d-w,v-T,d-w+R,v-T,d-w,v-T,1,!0),this.v.setTripleAt(d-w,v+T,d-w,v+T-R,d-w,v+T,2,!0),this.v.setTripleAt(d+w,v+T,d+w-R,v+T,d+w,v+T,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:s},W([wt],x),x})();function A(x,_,d){var v;if(d===3||d===4){var w=d===3?_.pt:_.ks,T=w.k;T.length?v=new b(x,_,d):v=new g(x,_,d)}else d===5?v=new u(x,_):d===6?v=new S(x,_):d===7&&(v=new z(x,_));return v.k&&x.addDynamicProperty(v),v}function C(){return g}function E(){return b}var I={};return I.getShapeProp=A,I.getConstructorFunction=C,I.getKeyframedConstructorFunction=E,I})();var At=(function(){var t=Math.cos,e=Math.sin,i=Math.tan,s=Math.round;function n(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function a(l){if(l===0)return this;var p=t(l),O=e(l);return this._t(p,-O,0,0,O,p,0,0,0,0,1,0,0,0,0,1)}function h(l){if(l===0)return this;var p=t(l),O=e(l);return this._t(1,0,0,0,0,p,-O,0,0,O,p,0,0,0,0,1)}function g(l){if(l===0)return this;var p=t(l),O=e(l);return this._t(p,0,O,0,0,1,0,0,-O,0,p,0,0,0,0,1)}function f(l){if(l===0)return this;var p=t(l),O=e(l);return this._t(p,-O,0,0,O,p,0,0,0,0,1,0,0,0,0,1)}function b(l,p){return this._t(1,p,l,1,0,0)}function S(l,p){return this.shear(i(l),i(p))}function z(l,p){var O=t(p),M=e(p);return this._t(O,M,0,0,-M,O,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,i(l),1,0,0,0,0,1,0,0,0,0,1)._t(O,-M,0,0,M,O,0,0,0,0,1,0,0,0,0,1)}function u(l,p,O){return!O&&O!==0&&(O=1),l===1&&p===1&&O===1?this:this._t(l,0,0,0,0,p,0,0,0,0,O,0,0,0,0,1)}function A(l,p,O,M,q,Q,et,lt,ht,vt,It,ee,Lt,xt,Dt,ft){return this.props[0]=l,this.props[1]=p,this.props[2]=O,this.props[3]=M,this.props[4]=q,this.props[5]=Q,this.props[6]=et,this.props[7]=lt,this.props[8]=ht,this.props[9]=vt,this.props[10]=It,this.props[11]=ee,this.props[12]=Lt,this.props[13]=xt,this.props[14]=Dt,this.props[15]=ft,this}function C(l,p,O){return O=O||0,l!==0||p!==0||O!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,l,p,O,1):this}function E(l,p,O,M,q,Q,et,lt,ht,vt,It,ee,Lt,xt,Dt,ft){var Y=this.props;if(l===1&&p===0&&O===0&&M===0&&q===0&&Q===1&&et===0&&lt===0&&ht===0&&vt===0&&It===1&&ee===0)return Y[12]=Y[12]*l+Y[15]*Lt,Y[13]=Y[13]*Q+Y[15]*xt,Y[14]=Y[14]*It+Y[15]*Dt,Y[15]*=ft,this._identityCalculated=!1,this;var oe=Y[0],ke=Y[1],le=Y[2],ie=Y[3],he=Y[4],ce=Y[5],zt=Y[6],Se=Y[7],Ae=Y[8],Yt=Y[9],Ee=Y[10],Kt=Y[11],Ue=Y[12],Qi=Y[13],ts=Y[14],es=Y[15];return Y[0]=oe*l+ke*q+le*ht+ie*Lt,Y[1]=oe*p+ke*Q+le*vt+ie*xt,Y[2]=oe*O+ke*et+le*It+ie*Dt,Y[3]=oe*M+ke*lt+le*ee+ie*ft,Y[4]=he*l+ce*q+zt*ht+Se*Lt,Y[5]=he*p+ce*Q+zt*vt+Se*xt,Y[6]=he*O+ce*et+zt*It+Se*Dt,Y[7]=he*M+ce*lt+zt*ee+Se*ft,Y[8]=Ae*l+Yt*q+Ee*ht+Kt*Lt,Y[9]=Ae*p+Yt*Q+Ee*vt+Kt*xt,Y[10]=Ae*O+Yt*et+Ee*It+Kt*Dt,Y[11]=Ae*M+Yt*lt+Ee*ee+Kt*ft,Y[12]=Ue*l+Qi*q+ts*ht+es*Lt,Y[13]=Ue*p+Qi*Q+ts*vt+es*xt,Y[14]=Ue*O+Qi*et+ts*It+es*Dt,Y[15]=Ue*M+Qi*lt+ts*ee+es*ft,this._identityCalculated=!1,this}function I(l){var p=l.props;return this.transform(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14],p[15])}function x(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function _(l){for(var p=0;p<16;){if(l.props[p]!==this.props[p])return!1;p+=1}return!0}function d(l){var p;for(p=0;p<16;p+=1)l.props[p]=this.props[p];return l}function v(l){var p;for(p=0;p<16;p+=1)this.props[p]=l[p]}function w(l,p,O){return{x:l*this.props[0]+p*this.props[4]+O*this.props[8]+this.props[12],y:l*this.props[1]+p*this.props[5]+O*this.props[9]+this.props[13],z:l*this.props[2]+p*this.props[6]+O*this.props[10]+this.props[14]}}function T(l,p,O){return l*this.props[0]+p*this.props[4]+O*this.props[8]+this.props[12]}function L(l,p,O){return l*this.props[1]+p*this.props[5]+O*this.props[9]+this.props[13]}function R(l,p,O){return l*this.props[2]+p*this.props[6]+O*this.props[10]+this.props[14]}function N(){var l=this.props[0]*this.props[5]-this.props[1]*this.props[4],p=this.props[5]/l,O=-this.props[1]/l,M=-this.props[4]/l,q=this.props[0]/l,Q=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/l,et=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/l,lt=new At;return lt.props[0]=p,lt.props[1]=O,lt.props[4]=M,lt.props[5]=q,lt.props[12]=Q,lt.props[13]=et,lt}function tt(l){var p=this.getInverseMatrix();return p.applyToPointArray(l[0],l[1],l[2]||0)}function K(l){var p,O=l.length,M=[];for(p=0;p<O;p+=1)M[p]=tt(l[p]);return M}function j(l,p,O){var M=at("float32",6);if(this.isIdentity())M[0]=l[0],M[1]=l[1],M[2]=p[0],M[3]=p[1],M[4]=O[0],M[5]=O[1];else{var q=this.props[0],Q=this.props[1],et=this.props[4],lt=this.props[5],ht=this.props[12],vt=this.props[13];M[0]=l[0]*q+l[1]*et+ht,M[1]=l[0]*Q+l[1]*lt+vt,M[2]=p[0]*q+p[1]*et+ht,M[3]=p[0]*Q+p[1]*lt+vt,M[4]=O[0]*q+O[1]*et+ht,M[5]=O[0]*Q+O[1]*lt+vt}return M}function st(l,p,O){var M;return this.isIdentity()?M=[l,p,O]:M=[l*this.props[0]+p*this.props[4]+O*this.props[8]+this.props[12],l*this.props[1]+p*this.props[5]+O*this.props[9]+this.props[13],l*this.props[2]+p*this.props[6]+O*this.props[10]+this.props[14]],M}function G(l,p){if(this.isIdentity())return l+","+p;var O=this.props;return Math.round((l*O[0]+p*O[4]+O[12])*100)/100+","+Math.round((l*O[1]+p*O[5]+O[13])*100)/100}function D(){for(var l=0,p=this.props,O="matrix3d(",M=1e4;l<16;)O+=s(p[l]*M)/M,O+=l===15?")":",",l+=1;return O}function y(l){var p=1e4;return l<1e-6&&l>0||l>-1e-6&&l<0?s(l*p)/p:l}function P(){var l=this.props,p=y(l[0]),O=y(l[1]),M=y(l[4]),q=y(l[5]),Q=y(l[12]),et=y(l[13]);return"matrix("+p+","+O+","+M+","+q+","+Q+","+et+")"}return function(){this.reset=n,this.rotate=a,this.rotateX=h,this.rotateY=g,this.rotateZ=f,this.skew=S,this.skewFromAxis=z,this.shear=b,this.scale=u,this.setTransform=A,this.translate=C,this.transform=E,this.multiply=I,this.applyToPoint=w,this.applyToX=T,this.applyToY=L,this.applyToZ=R,this.applyToPointArray=st,this.applyToTriplePoints=j,this.applyToPointStringified=G,this.toCSS=D,this.to2dCSS=P,this.clone=d,this.cloneFromProps=v,this.equals=_,this.inversePoints=K,this.inversePoint=tt,this.getInverseMatrix=N,this._t=this.transform,this.isIdentity=x,this._identity=!0,this._identityCalculated=!1,this.props=at("float32",16),this.reset()}})();function _s(t){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_s(t)}var ct={},qi="__[STANDALONE]__",pr="__[ANIMATIONDATA]__",dr="";function on(t){F(t)}function ur(){qi===!0?gt.searchAnimations(pr,qi,dr):gt.searchAnimations()}function ln(t){ja(t)}function hn(t){qa(t)}function cn(t){return qi===!0&&(t.animationData=JSON.parse(pr)),gt.loadAnimation(t)}function fn(t){if(typeof t=="string")switch(t){case"high":Di(200);break;default:case"medium":Di(50);break;case"low":Di(10);break}else!isNaN(t)&&t>1&&Di(t);ci()>=50?bt(!1):bt(!0)}function pn(){return typeof navigator<"u"}function dn(t,e){t==="expressions"&&Wa(e)}function un(t){switch(t){case"propertyFactory":return H;case"shapePropertyFactory":return Wi;case"matrix":return At;default:return null}}ct.play=gt.play,ct.pause=gt.pause,ct.setLocationHref=on,ct.togglePause=gt.togglePause,ct.setSpeed=gt.setSpeed,ct.setDirection=gt.setDirection,ct.stop=gt.stop,ct.searchAnimations=ur,ct.registerAnimation=gt.registerAnimation,ct.loadAnimation=cn,ct.setSubframeRendering=ln,ct.resize=gt.resize,ct.goToAndStop=gt.goToAndStop,ct.destroy=gt.destroy,ct.setQuality=fn,ct.inBrowser=pn,ct.installPlugin=dn,ct.freeze=gt.freeze,ct.unfreeze=gt.unfreeze,ct.setVolume=gt.setVolume,ct.mute=gt.mute,ct.unmute=gt.unmute,ct.getRegisteredAnimations=gt.getRegisteredAnimations,ct.useWebWorker=m,ct.setIDPrefix=hn,ct.__getFactory=un,ct.version="5.13.0";function mn(){document.readyState==="complete"&&(clearInterval(yn),ur())}function gn(t){for(var e=mr.split("&"),i=0;i<e.length;i+=1){var s=e[i].split("=");if(decodeURIComponent(s[0])==t)return decodeURIComponent(s[1])}return null}var mr="";if(qi){var gr=document.getElementsByTagName("script"),vn=gr.length-1,vr=gr[vn]||{src:""};mr=vr.src?vr.src.replace(/^[^\?]+\??/,""):"",dr=gn("renderer")}var yn=setInterval(mn,100);try{!((typeof Ii>"u"?"undefined":_s(Ii))==="object"&&typeof cs<"u")&&!(typeof define=="function"&&define.amd)&&(window.bodymovin=ct)}catch{}var ve=(function(){var t={},e={};t.registerModifier=i,t.getModifier=s;function i(n,a){e[n]||(e[n]=a)}function s(n,a,h){return new e[n](a,h)}return t})();function jt(){}jt.prototype.initModifierProperties=function(){},jt.prototype.addShapeToModifier=function(){},jt.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:Je.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},jt.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=c,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},jt.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},W([wt],jt);function Gt(){}W([jt],Gt),Gt.prototype.initModifierProperties=function(t,e){this.s=H.getProp(t,e.s,0,.01,this),this.e=H.getProp(t,e.e,0,.01,this),this.o=H.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},Gt.prototype.addShapeToModifier=function(t){t.pathsData=[]},Gt.prototype.calculateShapeEdges=function(t,e,i,s,n){var a=[];e<=1?a.push({s:t,e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var h=[],g,f=a.length,b;for(g=0;g<f;g+=1)if(b=a[g],!(b.e*n<s||b.s*n>s+i)){var S,z;b.s*n<=s?S=0:S=(b.s*n-s)/i,b.e*n>=s+i?z=1:z=(b.e*n-s)/i,h.push([S,z])}return h.length||h.push([0,0]),h},Gt.prototype.releasePathsData=function(t){var e,i=t.length;for(e=0;e<i;e+=1)or.release(t[e]);return t.length=0,t},Gt.prototype.processShapes=function(t){var e,i;if(this._mdf||t){var s=this.o.v%360/360;if(s<0&&(s+=1),this.s.v>1?e=1+s:this.s.v<0?e=0+s:e=this.s.v+s,this.e.v>1?i=1+s:this.e.v<0?i=0+s:i=this.e.v+s,e>i){var n=e;e=i,i=n}e=Math.round(e*1e4)*1e-4,i=Math.round(i*1e4)*1e-4,this.sValue=e,this.eValue=i}else e=this.sValue,i=this.eValue;var a,h,g=this.shapes.length,f,b,S,z,u,A=0;if(i===e)for(h=0;h<g;h+=1)this.shapes[h].localShapeCollection.releaseShapes(),this.shapes[h].shape._mdf=!0,this.shapes[h].shape.paths=this.shapes[h].localShapeCollection,this._mdf&&(this.shapes[h].pathsData.length=0);else if(i===1&&e===0||i===0&&e===1){if(this._mdf)for(h=0;h<g;h+=1)this.shapes[h].pathsData.length=0,this.shapes[h].shape._mdf=!0}else{var C=[],E,I;for(h=0;h<g;h+=1)if(E=this.shapes[h],!E.shape._mdf&&!this._mdf&&!t&&this.m!==2)E.shape.paths=E.localShapeCollection;else{if(a=E.shape.paths,b=a._length,u=0,!E.shape._mdf&&E.pathsData.length)u=E.totalShapeLength;else{for(S=this.releasePathsData(E.pathsData),f=0;f<b;f+=1)z=Qt.getSegmentsLength(a.shapes[f]),S.push(z),u+=z.totalLength;E.totalShapeLength=u,E.pathsData=S}A+=u,E.shape._mdf=!0}var x=e,_=i,d=0,v;for(h=g-1;h>=0;h-=1)if(E=this.shapes[h],E.shape._mdf){for(I=E.localShapeCollection,I.releaseShapes(),this.m===2&&g>1?(v=this.calculateShapeEdges(e,i,E.totalShapeLength,d,A),d+=E.totalShapeLength):v=[[x,_]],b=v.length,f=0;f<b;f+=1){x=v[f][0],_=v[f][1],C.length=0,_<=1?C.push({s:E.totalShapeLength*x,e:E.totalShapeLength*_}):x>=1?C.push({s:E.totalShapeLength*(x-1),e:E.totalShapeLength*(_-1)}):(C.push({s:E.totalShapeLength*x,e:E.totalShapeLength}),C.push({s:0,e:E.totalShapeLength*(_-1)}));var w=this.addShapes(E,C[0]);if(C[0].s!==C[0].e){if(C.length>1){var T=E.shape.paths.shapes[E.shape.paths._length-1];if(T.c){var L=w.pop();this.addPaths(w,I),w=this.addShapes(E,C[1],L)}else this.addPaths(w,I),w=this.addShapes(E,C[1])}this.addPaths(w,I)}}E.shape.paths=I}}},Gt.prototype.addPaths=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)e.addShape(t[i])},Gt.prototype.addSegment=function(t,e,i,s,n,a,h){n.setXYAt(e[0],e[1],"o",a),n.setXYAt(i[0],i[1],"i",a+1),h&&n.setXYAt(t[0],t[1],"v",a),n.setXYAt(s[0],s[1],"v",a+1)},Gt.prototype.addSegmentFromArray=function(t,e,i,s){e.setXYAt(t[1],t[5],"o",i),e.setXYAt(t[2],t[6],"i",i+1),s&&e.setXYAt(t[0],t[4],"v",i),e.setXYAt(t[3],t[7],"v",i+1)},Gt.prototype.addShapes=function(t,e,i){var s=t.pathsData,n=t.shape.paths.shapes,a,h=t.shape.paths._length,g,f,b=0,S,z,u,A,C=[],E,I=!0;for(i?(z=i._length,E=i._length):(i=St.newElement(),z=0,E=0),C.push(i),a=0;a<h;a+=1){for(u=s[a].lengths,i.c=n[a].c,f=n[a].c?u.length:u.length+1,g=1;g<f;g+=1)if(S=u[g-1],b+S.addedLength<e.s)b+=S.addedLength,i.c=!1;else if(b>e.e){i.c=!1;break}else e.s<=b&&e.e>=b+S.addedLength?(this.addSegment(n[a].v[g-1],n[a].o[g-1],n[a].i[g],n[a].v[g],i,z,I),I=!1):(A=Qt.getNewSegment(n[a].v[g-1],n[a].v[g],n[a].o[g-1],n[a].i[g],(e.s-b)/S.addedLength,(e.e-b)/S.addedLength,u[g-1]),this.addSegmentFromArray(A,i,z,I),I=!1,i.c=!1),b+=S.addedLength,z+=1;if(n[a].c&&u.length){if(S=u[g-1],b<=e.e){var x=u[g-1].addedLength;e.s<=b&&e.e>=b+x?(this.addSegment(n[a].v[g-1],n[a].o[g-1],n[a].i[0],n[a].v[0],i,z,I),I=!1):(A=Qt.getNewSegment(n[a].v[g-1],n[a].v[0],n[a].o[g-1],n[a].i[0],(e.s-b)/x,(e.e-b)/x,u[g-1]),this.addSegmentFromArray(A,i,z,I),I=!1,i.c=!1)}else i.c=!1;b+=S.addedLength,z+=1}if(i._length&&(i.setXYAt(i.v[E][0],i.v[E][1],"i",E),i.setXYAt(i.v[i._length-1][0],i.v[i._length-1][1],"o",i._length-1)),b>e.e)break;a<h-1&&(i=St.newElement(),I=!0,C.push(i),z=0)}return C};function ui(){}W([jt],ui),ui.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=H.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},ui.prototype.processPath=function(t,e){var i=e/100,s=[0,0],n=t._length,a=0;for(a=0;a<n;a+=1)s[0]+=t.v[a][0],s[1]+=t.v[a][1];s[0]/=n,s[1]/=n;var h=St.newElement();h.c=t.c;var g,f,b,S,z,u;for(a=0;a<n;a+=1)g=t.v[a][0]+(s[0]-t.v[a][0])*i,f=t.v[a][1]+(s[1]-t.v[a][1])*i,b=t.o[a][0]+(s[0]-t.o[a][0])*-i,S=t.o[a][1]+(s[1]-t.o[a][1])*-i,z=t.i[a][0]+(s[0]-t.i[a][0])*-i,u=t.i[a][1]+(s[1]-t.i[a][1])*-i,h.setTripleAt(g,f,b,S,z,u,a);return h},ui.prototype.processShapes=function(t){var e,i,s=this.shapes.length,n,a,h=this.amount.v;if(h!==0){var g,f;for(i=0;i<s;i+=1){if(g=this.shapes[i],f=g.localShapeCollection,!(!g.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),g.shape._mdf=!0,e=g.shape.paths.shapes,a=g.shape.paths._length,n=0;n<a;n+=1)f.addShape(this.processPath(e[n],h));g.shape.paths=g.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var bs=(function(){var t=[0,0];function e(f){var b=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||b,this.a&&f.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&f.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&f.skewFromAxis(-this.sk.v,this.sa.v),this.r?f.rotate(-this.r.v):f.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?f.translate(this.px.v,this.py.v,-this.pz.v):f.translate(this.px.v,this.py.v,0):f.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function i(f){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||f){var b;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var S,z;if(b=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(S=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/b,0),z=this.p.getValueAtTime(this.p.keyframes[0].t/b,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(S=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/b,0),z=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/b,0)):(S=this.p.pv,z=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/b,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){S=[],z=[];var u=this.px,A=this.py;u._caching.lastFrame+u.offsetTime<=u.keyframes[0].t?(S[0]=u.getValueAtTime((u.keyframes[0].t+.01)/b,0),S[1]=A.getValueAtTime((A.keyframes[0].t+.01)/b,0),z[0]=u.getValueAtTime(u.keyframes[0].t/b,0),z[1]=A.getValueAtTime(A.keyframes[0].t/b,0)):u._caching.lastFrame+u.offsetTime>=u.keyframes[u.keyframes.length-1].t?(S[0]=u.getValueAtTime(u.keyframes[u.keyframes.length-1].t/b,0),S[1]=A.getValueAtTime(A.keyframes[A.keyframes.length-1].t/b,0),z[0]=u.getValueAtTime((u.keyframes[u.keyframes.length-1].t-.01)/b,0),z[1]=A.getValueAtTime((A.keyframes[A.keyframes.length-1].t-.01)/b,0)):(S=[u.pv,A.pv],z[0]=u.getValueAtTime((u._caching.lastFrame+u.offsetTime-.01)/b,u.offsetTime),z[1]=A.getValueAtTime((A._caching.lastFrame+A.offsetTime-.01)/b,A.offsetTime))}else z=t,S=z;this.v.rotate(-Math.atan2(S[1]-z[1],S[0]-z[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function s(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function n(){}function a(f){this._addDynamicProperty(f),this.elem.addDynamicProperty(f),this._isDirty=!0}function h(f,b,S){if(this.elem=f,this.frameId=-1,this.propType="transform",this.data=b,this.v=new At,this.pre=new At,this.appliedTransformations=0,this.initDynamicPropertyContainer(S||f),b.p&&b.p.s?(this.px=H.getProp(f,b.p.x,0,0,this),this.py=H.getProp(f,b.p.y,0,0,this),b.p.z&&(this.pz=H.getProp(f,b.p.z,0,0,this))):this.p=H.getProp(f,b.p||{k:[0,0,0]},1,0,this),b.rx){if(this.rx=H.getProp(f,b.rx,0,dt,this),this.ry=H.getProp(f,b.ry,0,dt,this),this.rz=H.getProp(f,b.rz,0,dt,this),b.or.k[0].ti){var z,u=b.or.k.length;for(z=0;z<u;z+=1)b.or.k[z].to=null,b.or.k[z].ti=null}this.or=H.getProp(f,b.or,1,dt,this),this.or.sh=!0}else this.r=H.getProp(f,b.r||{k:0},0,dt,this);b.sk&&(this.sk=H.getProp(f,b.sk,0,dt,this),this.sa=H.getProp(f,b.sa,0,dt,this)),this.a=H.getProp(f,b.a||{k:[0,0,0]},1,0,this),this.s=H.getProp(f,b.s||{k:[100,100,100]},1,.01,this),b.o?this.o=H.getProp(f,b.o,0,.01,f):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}h.prototype={applyToMatrix:e,getValue:i,precalculateMatrix:s,autoOrient:n},W([wt],h),h.prototype.addDynamicProperty=a,h.prototype._addDynamicProperty=wt.prototype.addDynamicProperty;function g(f,b,S){return new h(f,b,S)}return{getTransformProperty:g}})();function te(){}W([jt],te),te.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=H.getProp(t,e.c,0,null,this),this.o=H.getProp(t,e.o,0,null,this),this.tr=bs.getTransformProperty(t,e.tr,this),this.so=H.getProp(t,e.tr.so,0,.01,this),this.eo=H.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new At,this.rMatrix=new At,this.sMatrix=new At,this.tMatrix=new At,this.matrix=new At},te.prototype.applyTransforms=function(t,e,i,s,n,a){var h=a?-1:1,g=s.s.v[0]+(1-s.s.v[0])*(1-n),f=s.s.v[1]+(1-s.s.v[1])*(1-n);t.translate(s.p.v[0]*h*n,s.p.v[1]*h*n,s.p.v[2]),e.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),e.rotate(-s.r.v*h*n),e.translate(s.a.v[0],s.a.v[1],s.a.v[2]),i.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),i.scale(a?1/g:g,a?1/f:f),i.translate(s.a.v[0],s.a.v[1],s.a.v[2])},te.prototype.init=function(t,e,i,s){for(this.elem=t,this.arr=e,this.pos=i,this.elemsData=s,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[i]);i>0;)i-=1,this._elements.unshift(e[i]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},te.prototype.resetElements=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},te.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},te.prototype.changeGroupRender=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)t[i]._render=e,t[i].ty==="gr"&&this.changeGroupRender(t[i].it,e)},te.prototype.processShapes=function(t){var e,i,s,n,a,h=!1;if(this._mdf||t){var g=Math.ceil(this.c.v);if(this._groups.length<g){for(;this._groups.length<g;){var f={it:this.cloneElements(this._elements),ty:"gr"};f.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,f),this._groups.splice(0,0,f),this._currentCopies+=1}this.elem.reloadShapes(),h=!0}a=0;var b;for(s=0;s<=this._groups.length-1;s+=1){if(b=a<g,this._groups[s]._render=b,this.changeGroupRender(this._groups[s].it,b),!b){var S=this.elemsData[s].it,z=S[S.length-1];z.transform.op.v!==0?(z.transform.op._mdf=!0,z.transform.op.v=0):z.transform.op._mdf=!1}a+=1}this._currentCopies=g;var u=this.o.v,A=u%1,C=u>0?Math.floor(u):Math.ceil(u),E=this.pMatrix.props,I=this.rMatrix.props,x=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var _=0;if(u>0){for(;_<C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),_+=1;A&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,A,!1),_+=A)}else if(u<0){for(;_>C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),_-=1;A&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-A,!0),_-=A)}s=this.data.m===1?0:this._currentCopies-1,n=this.data.m===1?1:-1,a=this._currentCopies;for(var d,v;a;){if(e=this.elemsData[s].it,i=e[e.length-1].transform.mProps.v.props,v=i.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(s/(this._currentCopies-1)),_!==0){for((s!==0&&n===1||s!==this._currentCopies-1&&n===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(I[0],I[1],I[2],I[3],I[4],I[5],I[6],I[7],I[8],I[9],I[10],I[11],I[12],I[13],I[14],I[15]),this.matrix.transform(x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9],x[10],x[11],x[12],x[13],x[14],x[15]),this.matrix.transform(E[0],E[1],E[2],E[3],E[4],E[5],E[6],E[7],E[8],E[9],E[10],E[11],E[12],E[13],E[14],E[15]),d=0;d<v;d+=1)i[d]=this.matrix.props[d];this.matrix.reset()}else for(this.matrix.reset(),d=0;d<v;d+=1)i[d]=this.matrix.props[d];_+=1,a-=1,s+=n}}else for(a=this._currentCopies,s=0,n=1;a;)e=this.elemsData[s].it,i=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,s+=n;return h},te.prototype.addShape=function(){};function mi(){}W([jt],mi),mi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=H.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},mi.prototype.processPath=function(t,e){var i=St.newElement();i.c=t.c;var s,n=t._length,a,h,g,f,b,S,z=0,u,A,C,E,I,x;for(s=0;s<n;s+=1)a=t.v[s],g=t.o[s],h=t.i[s],a[0]===g[0]&&a[1]===g[1]&&a[0]===h[0]&&a[1]===h[1]?(s===0||s===n-1)&&!t.c?(i.setTripleAt(a[0],a[1],g[0],g[1],h[0],h[1],z),z+=1):(s===0?f=t.v[n-1]:f=t.v[s-1],b=Math.sqrt(Math.pow(a[0]-f[0],2)+Math.pow(a[1]-f[1],2)),S=b?Math.min(b/2,e)/b:0,I=a[0]+(f[0]-a[0])*S,u=I,x=a[1]-(a[1]-f[1])*S,A=x,C=u-(u-a[0])*Z,E=A-(A-a[1])*Z,i.setTripleAt(u,A,C,E,I,x,z),z+=1,s===n-1?f=t.v[0]:f=t.v[s+1],b=Math.sqrt(Math.pow(a[0]-f[0],2)+Math.pow(a[1]-f[1],2)),S=b?Math.min(b/2,e)/b:0,C=a[0]+(f[0]-a[0])*S,u=C,E=a[1]+(f[1]-a[1])*S,A=E,I=u-(u-a[0])*Z,x=A-(A-a[1])*Z,i.setTripleAt(u,A,C,E,I,x,z),z+=1):(i.setTripleAt(t.v[s][0],t.v[s][1],t.o[s][0],t.o[s][1],t.i[s][0],t.i[s][1],z),z+=1);return i},mi.prototype.processShapes=function(t){var e,i,s=this.shapes.length,n,a,h=this.rd.v;if(h!==0){var g,f;for(i=0;i<s;i+=1){if(g=this.shapes[i],f=g.localShapeCollection,!(!g.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),g.shape._mdf=!0,e=g.shape.paths.shapes,a=g.shape.paths._length,n=0;n<a;n+=1)f.addShape(this.processPath(e[n],h));g.shape.paths=g.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Gi(t,e){return Math.abs(t-e)*1e5<=Math.min(Math.abs(t),Math.abs(e))}function ws(t){return Math.abs(t)<=1e-5}function yr(t,e,i){return t*(1-i)+e*i}function ye(t,e,i){return[yr(t[0],e[0],i),yr(t[1],e[1],i)]}function _n(t,e,i){if(t===0)return[];var s=e*e-4*t*i;if(s<0)return[];var n=-e/(2*t);if(s===0)return[n];var a=Math.sqrt(s)/(2*t);return[n-a,n+a]}function _r(t,e,i,s){return[-t+3*e-3*i+s,3*t-6*e+3*i,-3*t+3*e,t]}function br(t){return new ut(t,t,t,t,!1)}function ut(t,e,i,s,n){n&&ti(t,e)&&(e=ye(t,s,1/3)),n&&ti(i,s)&&(i=ye(t,s,2/3));var a=_r(t[0],e[0],i[0],s[0]),h=_r(t[1],e[1],i[1],s[1]);this.a=[a[0],h[0]],this.b=[a[1],h[1]],this.c=[a[2],h[2]],this.d=[a[3],h[3]],this.points=[t,e,i,s]}ut.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},ut.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},ut.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},ut.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},ut.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(ws(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,i=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(i<0)return[];var s=Math.sqrt(i);return ws(s)?s>0&&s<1?[e]:[]:[e-s,e+s].filter(function(n){return n>0&&n<1})},ut.prototype.split=function(t){if(t<=0)return[br(this.points[0]),this];if(t>=1)return[this,br(this.points[this.points.length-1])];var e=ye(this.points[0],this.points[1],t),i=ye(this.points[1],this.points[2],t),s=ye(this.points[2],this.points[3],t),n=ye(e,i,t),a=ye(i,s,t),h=ye(n,a,t);return[new ut(this.points[0],e,n,h,!0),new ut(h,a,s,this.points[3],!0)]};function wr(t,e){var i=t.points[0][e],s=t.points[t.points.length-1][e];if(i>s){var n=s;s=i,i=n}for(var a=_n(3*t.a[e],2*t.b[e],t.c[e]),h=0;h<a.length;h+=1)if(a[h]>0&&a[h]<1){var g=t.point(a[h])[e];g<i?i=g:g>s&&(s=g)}return{min:i,max:s}}ut.prototype.bounds=function(){return{x:wr(this,0),y:wr(this,1)}},ut.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}};function Yi(t,e,i){var s=t.boundingBox();return{cx:s.cx,cy:s.cy,width:s.width,height:s.height,bez:t,t:(e+i)/2,t1:e,t2:i}}function xr(t){var e=t.bez.split(.5);return[Yi(e[0],t.t1,t.t),Yi(e[1],t.t,t.t2)]}function bn(t,e){return Math.abs(t.cx-e.cx)*2<t.width+e.width&&Math.abs(t.cy-e.cy)*2<t.height+e.height}function gi(t,e,i,s,n,a){if(bn(t,e)){if(i>=a||t.width<=s&&t.height<=s&&e.width<=s&&e.height<=s){n.push([t.t,e.t]);return}var h=xr(t),g=xr(e);gi(h[0],g[0],i+1,s,n,a),gi(h[0],g[1],i+1,s,n,a),gi(h[1],g[0],i+1,s,n,a),gi(h[1],g[1],i+1,s,n,a)}}ut.prototype.intersections=function(t,e,i){e===void 0&&(e=2),i===void 0&&(i=7);var s=[];return gi(Yi(this,0,1),Yi(t,0,1),0,e,s,i),s},ut.shapeSegment=function(t,e){var i=(e+1)%t.length();return new ut(t.v[e],t.o[e],t.i[i],t.v[i],!0)},ut.shapeSegmentInverted=function(t,e){var i=(e+1)%t.length();return new ut(t.v[i],t.i[i],t.o[e],t.v[e],!0)};function xs(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function Ki(t,e,i,s){var n=[t[0],t[1],1],a=[e[0],e[1],1],h=[i[0],i[1],1],g=[s[0],s[1],1],f=xs(xs(n,a),xs(h,g));return ws(f[2])?null:[f[0]/f[2],f[1]/f[2]]}function Qe(t,e,i){return[t[0]+Math.cos(e)*i,t[1]-Math.sin(e)*i]}function ks(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function ti(t,e){return Gi(t[0],e[0])&&Gi(t[1],e[1])}function vi(){}W([jt],vi),vi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=H.getProp(t,e.s,0,null,this),this.frequency=H.getProp(t,e.r,0,null,this),this.pointsType=H.getProp(t,e.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function kr(t,e,i,s,n,a,h){var g=i-Math.PI/2,f=i+Math.PI/2,b=e[0]+Math.cos(i)*s*n,S=e[1]-Math.sin(i)*s*n;t.setTripleAt(b,S,b+Math.cos(g)*a,S-Math.sin(g)*a,b+Math.cos(f)*h,S-Math.sin(f)*h,t.length())}function wn(t,e){var i=[e[0]-t[0],e[1]-t[1]],s=-Math.PI*.5,n=[Math.cos(s)*i[0]-Math.sin(s)*i[1],Math.sin(s)*i[0]+Math.cos(s)*i[1]];return n}function xn(t,e){var i=e===0?t.length()-1:e-1,s=(e+1)%t.length(),n=t.v[i],a=t.v[s],h=wn(n,a);return Math.atan2(0,1)-Math.atan2(h[1],h[0])}function Sr(t,e,i,s,n,a,h){var g=xn(e,i),f=e.v[i%e._length],b=e.v[i===0?e._length-1:i-1],S=e.v[(i+1)%e._length],z=a===2?Math.sqrt(Math.pow(f[0]-b[0],2)+Math.pow(f[1]-b[1],2)):0,u=a===2?Math.sqrt(Math.pow(f[0]-S[0],2)+Math.pow(f[1]-S[1],2)):0;kr(t,e.v[i%e._length],g,h,s,u/((n+1)*2),z/((n+1)*2),a)}function kn(t,e,i,s,n,a){for(var h=0;h<s;h+=1){var g=(h+1)/(s+1),f=n===2?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,b=e.normalAngle(g),S=e.point(g);kr(t,S,b,a,i,f/((s+1)*2),f/((s+1)*2),n),a=-a}return a}vi.prototype.processPath=function(t,e,i,s){var n=t._length,a=St.newElement();if(a.c=t.c,t.c||(n-=1),n===0)return a;var h=-1,g=ut.shapeSegment(t,0);Sr(a,t,0,e,i,s,h);for(var f=0;f<n;f+=1)h=kn(a,g,e,i,s,-h),f===n-1&&!t.c?g=null:g=ut.shapeSegment(t,(f+1)%n),Sr(a,t,f+1,e,i,s,h);return a},vi.prototype.processShapes=function(t){var e,i,s=this.shapes.length,n,a,h=this.amplitude.v,g=Math.max(0,Math.round(this.frequency.v)),f=this.pointsType.v;if(h!==0){var b,S;for(i=0;i<s;i+=1){if(b=this.shapes[i],S=b.localShapeCollection,!(!b.shape._mdf&&!this._mdf&&!t))for(S.releaseShapes(),b.shape._mdf=!0,e=b.shape.paths.shapes,a=b.shape.paths._length,n=0;n<a;n+=1)S.addShape(this.processPath(e[n],h,g,f));b.shape.paths=b.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Ss(t,e,i){var s=Math.atan2(e[0]-t[0],e[1]-t[1]);return[Qe(t,s,i),Qe(e,s,i)]}function ei(t,e){var i,s,n,a,h,g,f;f=Ss(t.points[0],t.points[1],e),i=f[0],s=f[1],f=Ss(t.points[1],t.points[2],e),n=f[0],a=f[1],f=Ss(t.points[2],t.points[3],e),h=f[0],g=f[1];var b=Ki(i,s,n,a);b===null&&(b=s);var S=Ki(h,g,n,a);return S===null&&(S=h),new ut(i,b,S,g)}function Ar(t,e,i,s,n){var a=e.points[3],h=i.points[0];if(s===3||ti(a,h))return a;if(s===2){var g=-e.tangentAngle(1),f=-i.tangentAngle(0)+Math.PI,b=Ki(a,Qe(a,g+Math.PI/2,100),h,Qe(h,g+Math.PI/2,100)),S=b?ks(b,a):ks(a,h)/2,z=Qe(a,g,2*S*Z);return t.setXYAt(z[0],z[1],"o",t.length()-1),z=Qe(h,f,2*S*Z),t.setTripleAt(h[0],h[1],h[0],h[1],z[0],z[1],t.length()),h}var u=ti(a,e.points[2])?e.points[0]:e.points[2],A=ti(h,i.points[1])?i.points[3]:i.points[1],C=Ki(u,a,h,A);return C&&ks(C,a)<n?(t.setTripleAt(C[0],C[1],C[0],C[1],C[0],C[1],t.length()),C):a}function Er(t,e){var i=t.intersections(e);return i.length&&Gi(i[0][0],1)&&i.shift(),i.length?i[0]:null}function Pr(t,e){var i=t.slice(),s=e.slice(),n=Er(t[t.length-1],e[0]);return n&&(i[t.length-1]=t[t.length-1].split(n[0])[0],s[0]=e[0].split(n[1])[1]),t.length>1&&e.length>1&&(n=Er(t[0],e[e.length-1]),n)?[[t[0].split(n[0])[0]],[e[e.length-1].split(n[1])[1]]]:[i,s]}function Sn(t){for(var e,i=1;i<t.length;i+=1)e=Pr(t[i-1],t[i]),t[i-1]=e[0],t[i]=e[1];return t.length>1&&(e=Pr(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function $r(t,e){var i=t.inflectionPoints(),s,n,a,h;if(i.length===0)return[ei(t,e)];if(i.length===1||Gi(i[1],1))return a=t.split(i[0]),s=a[0],n=a[1],[ei(s,e),ei(n,e)];a=t.split(i[0]),s=a[0];var g=(i[1]-i[0])/(1-i[0]);return a=a[1].split(g),h=a[0],n=a[1],[ei(s,e),ei(h,e),ei(n,e)]}function yi(){}W([jt],yi),yi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=H.getProp(t,e.a,0,null,this),this.miterLimit=H.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=this.amount.effectsSequence.length!==0},yi.prototype.processPath=function(t,e,i,s){var n=St.newElement();n.c=t.c;var a=t.length();t.c||(a-=1);var h,g,f,b=[];for(h=0;h<a;h+=1)f=ut.shapeSegment(t,h),b.push($r(f,e));if(!t.c)for(h=a-1;h>=0;h-=1)f=ut.shapeSegmentInverted(t,h),b.push($r(f,e));b=Sn(b);var S=null,z=null;for(h=0;h<b.length;h+=1){var u=b[h];for(z&&(S=Ar(n,z,u[0],i,s)),z=u[u.length-1],g=0;g<u.length;g+=1)f=u[g],S&&ti(f.points[0],S)?n.setXYAt(f.points[1][0],f.points[1][1],"o",n.length()-1):n.setTripleAt(f.points[0][0],f.points[0][1],f.points[1][0],f.points[1][1],f.points[0][0],f.points[0][1],n.length()),n.setTripleAt(f.points[3][0],f.points[3][1],f.points[3][0],f.points[3][1],f.points[2][0],f.points[2][1],n.length()),S=f.points[3]}return b.length&&Ar(n,z,b[0][0],i,s),n},yi.prototype.processShapes=function(t){var e,i,s=this.shapes.length,n,a,h=this.amount.v,g=this.miterLimit.v,f=this.lineJoin;if(h!==0){var b,S;for(i=0;i<s;i+=1){if(b=this.shapes[i],S=b.localShapeCollection,!(!b.shape._mdf&&!this._mdf&&!t))for(S.releaseShapes(),b.shape._mdf=!0,e=b.shape.paths.shapes,a=b.shape.paths._length,n=0;n<a;n+=1)S.addShape(this.processPath(e[n],h,f,g));b.shape.paths=b.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Cr(t){for(var e=t.fStyle?t.fStyle.split(" "):[],i="normal",s="normal",n=e.length,a,h=0;h<n;h+=1)switch(a=e[h].toLowerCase(),a){case"italic":s="italic";break;case"bold":i="700";break;case"black":i="900";break;case"medium":i="500";break;case"regular":case"normal":i="400";break;case"light":case"thin":i="200";break;default:break}return{style:s,weight:t.fWeight||i}}var De=(function(){var t=5e3,e={w:0,size:0,shapes:[],data:{shapes:[]}},i=[];i=i.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var s=127988,n=917631,a=917601,h=917626,g=65039,f=8205,b=127462,S=127487,z=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function u(y){var P=y.split(","),l,p=P.length,O=[];for(l=0;l<p;l+=1)P[l]!=="sans-serif"&&P[l]!=="monospace"&&O.push(P[l]);return O.join(",")}function A(y,P){var l=B("span");l.setAttribute("aria-hidden",!0),l.style.fontFamily=P;var p=B("span");p.innerText="giItT1WQy@!-/#",l.style.position="absolute",l.style.left="-10000px",l.style.top="-10000px",l.style.fontSize="300px",l.style.fontVariant="normal",l.style.fontStyle="normal",l.style.fontWeight="normal",l.style.letterSpacing="0",l.appendChild(p),document.body.appendChild(l);var O=p.offsetWidth;return p.style.fontFamily=u(y)+", "+P,{node:p,w:O,parent:l}}function C(){var y,P=this.fonts.length,l,p,O=P;for(y=0;y<P;y+=1)this.fonts[y].loaded?O-=1:this.fonts[y].fOrigin==="n"||this.fonts[y].origin===0?this.fonts[y].loaded=!0:(l=this.fonts[y].monoCase.node,p=this.fonts[y].monoCase.w,l.offsetWidth!==p?(O-=1,this.fonts[y].loaded=!0):(l=this.fonts[y].sansCase.node,p=this.fonts[y].sansCase.w,l.offsetWidth!==p&&(O-=1,this.fonts[y].loaded=!0)),this.fonts[y].loaded&&(this.fonts[y].sansCase.parent.parentNode.removeChild(this.fonts[y].sansCase.parent),this.fonts[y].monoCase.parent.parentNode.removeChild(this.fonts[y].monoCase.parent)));O!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function E(y,P){var l=document.body&&P?"svg":"canvas",p,O=Cr(y);if(l==="svg"){var M=it("text");M.style.fontSize="100px",M.setAttribute("font-family",y.fFamily),M.setAttribute("font-style",O.style),M.setAttribute("font-weight",O.weight),M.textContent="1",y.fClass?(M.style.fontFamily="inherit",M.setAttribute("class",y.fClass)):M.style.fontFamily=y.fFamily,P.appendChild(M),p=M}else{var q=new OffscreenCanvas(500,500).getContext("2d");q.font=O.style+" "+O.weight+" 100px "+y.fFamily,p=q}function Q(et){return l==="svg"?(p.textContent=et,p.getComputedTextLength()):p.measureText(et).width}return{measureText:Q}}function I(y,P){if(!y){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=y.list;return}if(!document.body){this.isLoaded=!0,y.list.forEach(function(It){It.helper=E(It),It.cache={}}),this.fonts=y.list;return}var l=y.list,p,O=l.length,M=O;for(p=0;p<O;p+=1){var q=!0,Q,et;if(l[p].loaded=!1,l[p].monoCase=A(l[p].fFamily,"monospace"),l[p].sansCase=A(l[p].fFamily,"sans-serif"),!l[p].fPath)l[p].loaded=!0,M-=1;else if(l[p].fOrigin==="p"||l[p].origin===3){if(Q=document.querySelectorAll('style[f-forigin="p"][f-family="'+l[p].fFamily+'"], style[f-origin="3"][f-family="'+l[p].fFamily+'"]'),Q.length>0&&(q=!1),q){var lt=B("style");lt.setAttribute("f-forigin",l[p].fOrigin),lt.setAttribute("f-origin",l[p].origin),lt.setAttribute("f-family",l[p].fFamily),lt.type="text/css",lt.innerText="@font-face {font-family: "+l[p].fFamily+"; font-style: normal; src: url('"+l[p].fPath+"');}",P.appendChild(lt)}}else if(l[p].fOrigin==="g"||l[p].origin===1){for(Q=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),et=0;et<Q.length;et+=1)Q[et].href.indexOf(l[p].fPath)!==-1&&(q=!1);if(q){var ht=B("link");ht.setAttribute("f-forigin",l[p].fOrigin),ht.setAttribute("f-origin",l[p].origin),ht.type="text/css",ht.rel="stylesheet",ht.href=l[p].fPath,document.body.appendChild(ht)}}else if(l[p].fOrigin==="t"||l[p].origin===2){for(Q=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),et=0;et<Q.length;et+=1)l[p].fPath===Q[et].src&&(q=!1);if(q){var vt=B("link");vt.setAttribute("f-forigin",l[p].fOrigin),vt.setAttribute("f-origin",l[p].origin),vt.setAttribute("rel","stylesheet"),vt.setAttribute("href",l[p].fPath),P.appendChild(vt)}}l[p].helper=E(l[p],P),l[p].cache={},this.fonts.push(l[p])}M===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function x(y){if(y){this.chars||(this.chars=[]);var P,l=y.length,p,O=this.chars.length,M;for(P=0;P<l;P+=1){for(p=0,M=!1;p<O;)this.chars[p].style===y[P].style&&this.chars[p].fFamily===y[P].fFamily&&this.chars[p].ch===y[P].ch&&(M=!0),p+=1;M||(this.chars.push(y[P]),O+=1)}}}function _(y,P,l){for(var p=0,O=this.chars.length;p<O;){if(this.chars[p].ch===y&&this.chars[p].style===P&&this.chars[p].fFamily===l)return this.chars[p];p+=1}return(typeof y=="string"&&y.charCodeAt(0)!==13||!y)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",y,P,l)),e}function d(y,P,l){var p=this.getFontByName(P),O=y;if(!p.cache[O]){var M=p.helper;if(y===" "){var q=M.measureText("|"+y+"|"),Q=M.measureText("||");p.cache[O]=(q-Q)/100}else p.cache[O]=M.measureText(y)/100}return p.cache[O]*l}function v(y){for(var P=0,l=this.fonts.length;P<l;){if(this.fonts[P].fName===y)return this.fonts[P];P+=1}return this.fonts[0]}function w(y){var P=0,l=y.charCodeAt(0);if(l>=55296&&l<=56319){var p=y.charCodeAt(1);p>=56320&&p<=57343&&(P=(l-55296)*1024+p-56320+65536)}return P}function T(y,P){var l=y.toString(16)+P.toString(16);return z.indexOf(l)!==-1}function L(y){return y===f}function R(y){return y===g}function N(y){var P=w(y);return P>=b&&P<=S}function tt(y){return N(y.substr(0,2))&&N(y.substr(2,2))}function K(y){return i.indexOf(y)!==-1}function j(y,P){var l=w(y.substr(P,2));if(l!==s)return!1;var p=0;for(P+=2;p<5;){if(l=w(y.substr(P,2)),l<a||l>h)return!1;p+=1,P+=2}return w(y.substr(P,2))===n}function st(){this.isLoaded=!0}var G=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};G.isModifier=T,G.isZeroWidthJoiner=L,G.isFlagEmoji=tt,G.isRegionalCode=N,G.isCombinedCharacter=K,G.isRegionalFlag=j,G.isVariationSelector=R,G.BLACK_FLAG_CODE_POINT=s;var D={addChars:x,addFonts:I,getCharData:_,getFontByName:v,measureText:d,checkLoadedFonts:C,setIsLoaded:st};return G.prototype=D,G})();function Tr(t){this.animationData=t}Tr.prototype.getProp=function(t){return this.animationData.slots&&this.animationData.slots[t.sid]?Object.assign(t,this.animationData.slots[t.sid].p):t};function An(t){return new Tr(t)}function Xi(){}Xi.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,i=this.renderableComponents.length;for(e=0;e<i;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var As=(function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}})();function En(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function Pn(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function $n(t,e,i){this.p=H.getProp(e,t.v,1,0,i)}function Cn(t,e,i){this.p=H.getProp(e,t.v,1,0,i)}function Tn(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function Mn(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function Fn(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function In(){this.p={}}function Mr(t,e){var i=t.ef||[];this.effectElements=[];var s,n=i.length,a;for(s=0;s<n;s+=1)a=new _i(i[s],e),this.effectElements.push(a)}function _i(t,e){this.init(t,e)}W([wt],_i),_i.prototype.getValue=_i.prototype.iterateDynamicProperties,_i.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var i,s=this.data.ef.length,n,a=this.data.ef;for(i=0;i<s;i+=1){switch(n=null,a[i].ty){case 0:n=new En(a[i],e,this);break;case 1:n=new Pn(a[i],e,this);break;case 2:n=new $n(a[i],e,this);break;case 3:n=new Cn(a[i],e,this);break;case 4:case 7:n=new Fn(a[i],e,this);break;case 10:n=new Tn(a[i],e,this);break;case 11:n=new Mn(a[i],e,this);break;case 5:n=new Mr(a[i],e,this);break;default:n=new In(a[i],e,this);break}n&&this.effectElements.push(n)}};function _e(){}_e.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,i=this.data.masksProperties.length;e<i;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){var e=sr();if(e){var i=e("layer"),s=e("effects"),n=e("shape"),a=e("text"),h=e("comp");this.layerInterface=i(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var g=s.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(g),this.data.ty===0||this.data.xt?this.compInterface=h(this):this.data.ty===4?(this.layerInterface.shapeInterface=n(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=a(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var e=As(this.data.bm),i=this.baseElement||this.layerElement;i.style["mix-blend-mode"]=e},initBaseData:function(e,i,s){this.globalData=i,this.comp=s,this.data=e,this.layerId=Mt(),this.data.sr||(this.data.sr=1),this.effectsManager=new Mr(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function be(){}be.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,i){var s,n=this.dynamicProperties.length;for(s=0;s<n;s+=1)(i||this._isParent&&this.dynamicProperties[s].propType==="transform")&&(this.dynamicProperties[s].getValue(),this.dynamicProperties[s]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function we(t,e,i){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,i)}we.prototype.prepareFrame=function(){},W([Xi,_e,be],we),we.prototype.getBaseElement=function(){return null},we.prototype.renderFrame=function(){},we.prototype.destroy=function(){},we.prototype.initExpressions=function(){var t=sr();if(t){var e=t("footage");this.layerInterface=e(this)}},we.prototype.getFootageData=function(){return this.footageData};function Ft(t,e,i){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,i),this._isPlaying=!1,this._canPlay=!1;var s=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(s),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?H.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=H.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}Ft.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var i=this._volume*this._volumeMultiplier;this._previousVolume!==i&&(this._previousVolume=i,this.audio.volume(i))},W([Xi,_e,be],Ft),Ft.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},Ft.prototype.show=function(){},Ft.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},Ft.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},Ft.prototype.resume=function(){this._canPlay=!0},Ft.prototype.setRate=function(t){this.audio.rate(t)},Ft.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},Ft.prototype.getBaseElement=function(){return null},Ft.prototype.destroy=function(){},Ft.prototype.sourceRectAtTime=function(){},Ft.prototype.initExpressions=function(){};function Et(){}Et.prototype.checkLayers=function(t){var e,i=this.layers.length,s;for(this.completeLayers=!0,e=i-1;e>=0;e-=1)this.elements[e]||(s=this.layers[e],s.ip-s.st<=t-this.layers[e].st&&s.op-s.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},Et.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},Et.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Et.prototype.createAudio=function(t){return new Ft(t,this.globalData,this)},Et.prototype.createFootage=function(t){return new we(t,this.globalData,this)},Et.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},Et.prototype.includeLayers=function(t){this.completeLayers=!1;var e,i=t.length,s,n=this.layers.length;for(e=0;e<i;e+=1)for(s=0;s<n;){if(this.layers[s].id===t[e].id){this.layers[s]=t[e];break}s+=1}},Et.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},Et.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Et.prototype.buildElementParenting=function(t,e,i){for(var s=this.elements,n=this.layers,a=0,h=n.length;a<h;)n[a].ind==e&&(!s[a]||s[a]===!0?(this.buildItem(a),this.addPendingElement(t)):(i.push(s[a]),s[a].setAsParent(),n[a].parent!==void 0?this.buildElementParenting(t,n[a].parent,i):t.setHierarchy(i))),a+=1},Et.prototype.addPendingElement=function(t){this.pendingElements.push(t)},Et.prototype.searchExtraCompositions=function(t){var e,i=t.length;for(e=0;e<i;e+=1)if(t[e].xt){var s=this.createComp(t[e]);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},Et.prototype.getElementById=function(t){var e,i=this.elements.length;for(e=0;e<i;e+=1)if(this.elements[e].data.ind===t)return this.elements[e];return null},Et.prototype.getElementByPath=function(t){var e=t.shift(),i;if(typeof e=="number")i=this.elements[e];else{var s,n=this.elements.length;for(s=0;s<n;s+=1)if(this.elements[s].data.nm===e){i=this.elements[s];break}}return t.length===0?i:i.getElementByPath(t)},Et.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new De,this.globalData.slotManager=An(t),this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};var Ln={TRANSFORM_EFFECT:"transformEFfect"};function ii(){}ii.prototype={initTransform:function(){var e=new At;this.finalTransform={mProp:this.data.ks?bs.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:e,localMat:e,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,i=this.finalTransform.mat,s=0,n=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;s<n;){if(this.hierarchy[s].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}s+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,i.cloneFromProps(e),s=0;s<n;s+=1)i.multiply(this.hierarchy[s].finalTransform.mProp.v)}(!this.localTransforms||this.finalTransform._matMdf)&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var e=0,i=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;e<i;)this.localTransforms[e]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[e]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),e+=1;if(this.finalTransform._localMatMdf){var s=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(s),e=1;e<i;e+=1){var n=this.localTransforms[e].matrix;s.multiply(n)}s.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var a=this.finalTransform.localOpacity;for(e=0;e<i;e+=1)a*=this.localTransforms[e].opacity*.01;this.finalTransform.localOpacity=a}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var e=this.renderableEffectsManager.getEffects(Ln.TRANSFORM_EFFECT);if(e.length){this.localTransforms=[],this.finalTransform.localMat=new At;var i=0,s=e.length;for(i=0;i<s;i+=1)this.localTransforms.push(e[i])}}},globalToLocal:function(e){var i=[];i.push(this.finalTransform);for(var s=!0,n=this.comp;s;)n.finalTransform?(n.data.hasMask&&i.splice(0,0,n.finalTransform),n=n.comp):s=!1;var a,h=i.length,g;for(a=0;a<h;a+=1)g=i[a].mat.applyToPointArray(0,0,0),e=[e[0]-g[0],e[1]-g[1],0];return e},mHelper:new At};function Ne(t,e,i){this.data=t,this.element=e,this.globalData=i,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var s=this.globalData.defs,n,a=this.masksProperties?this.masksProperties.length:0;this.viewData=ot(a),this.solidPath="";var h,g=this.masksProperties,f=0,b=[],S,z,u=Mt(),A,C,E,I,x="clipPath",_="clip-path";for(n=0;n<a;n+=1)if((g[n].mode!=="a"&&g[n].mode!=="n"||g[n].inv||g[n].o.k!==100||g[n].o.x)&&(x="mask",_="mask"),(g[n].mode==="s"||g[n].mode==="i")&&f===0?(A=it("rect"),A.setAttribute("fill","#ffffff"),A.setAttribute("width",this.element.comp.data.w||0),A.setAttribute("height",this.element.comp.data.h||0),b.push(A)):A=null,h=it("path"),g[n].mode==="n")this.viewData[n]={op:H.getProp(this.element,g[n].o,0,.01,this.element),prop:Wi.getShapeProp(this.element,g[n],3),elem:h,lastPath:""},s.appendChild(h);else{f+=1,h.setAttribute("fill",g[n].mode==="s"?"#000000":"#ffffff"),h.setAttribute("clip-rule","nonzero");var d;if(g[n].x.k!==0?(x="mask",_="mask",I=H.getProp(this.element,g[n].x,0,null,this.element),d=Mt(),C=it("filter"),C.setAttribute("id",d),E=it("feMorphology"),E.setAttribute("operator","erode"),E.setAttribute("in","SourceGraphic"),E.setAttribute("radius","0"),C.appendChild(E),s.appendChild(C),h.setAttribute("stroke",g[n].mode==="s"?"#000000":"#ffffff")):(E=null,I=null),this.storedData[n]={elem:h,x:I,expan:E,lastPath:"",lastOperator:"",filterId:d,lastRadius:0},g[n].mode==="i"){z=b.length;var v=it("g");for(S=0;S<z;S+=1)v.appendChild(b[S]);var w=it("mask");w.setAttribute("mask-type","alpha"),w.setAttribute("id",u+"_"+f),w.appendChild(h),s.appendChild(w),v.setAttribute("mask","url("+U()+"#"+u+"_"+f+")"),b.length=0,b.push(v)}else b.push(h);g[n].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[n]={elem:h,lastPath:"",op:H.getProp(this.element,g[n].o,0,.01,this.element),prop:Wi.getShapeProp(this.element,g[n],3),invRect:A},this.viewData[n].prop.k||this.drawPath(g[n],this.viewData[n].prop.v,this.viewData[n])}for(this.maskElement=it(x),a=b.length,n=0;n<a;n+=1)this.maskElement.appendChild(b[n]);f>0&&(this.maskElement.setAttribute("id",u),this.element.maskedElement.setAttribute(_,"url("+U()+"#"+u+")"),s.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}Ne.prototype.getMaskProperty=function(t){return this.viewData[t].prop},Ne.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,i,s=this.masksProperties.length;for(i=0;i<s;i+=1)if((this.viewData[i].prop._mdf||t)&&this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]),(this.viewData[i].op._mdf||t)&&this.viewData[i].elem.setAttribute("fill-opacity",this.viewData[i].op.v),this.masksProperties[i].mode!=="n"&&(this.viewData[i].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[i].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[i].x&&(this.storedData[i].x._mdf||t))){var n=this.storedData[i].expan;this.storedData[i].x.v<0?(this.storedData[i].lastOperator!=="erode"&&(this.storedData[i].lastOperator="erode",this.storedData[i].elem.setAttribute("filter","url("+U()+"#"+this.storedData[i].filterId+")")),n.setAttribute("radius",-this.storedData[i].x.v)):(this.storedData[i].lastOperator!=="dilate"&&(this.storedData[i].lastOperator="dilate",this.storedData[i].elem.setAttribute("filter",null)),this.storedData[i].elem.setAttribute("stroke-width",this.storedData[i].x.v*2))}},Ne.prototype.getMaskelement=function(){return this.maskElement},Ne.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},Ne.prototype.drawPath=function(t,e,i){var s=" M"+e.v[0][0]+","+e.v[0][1],n,a;for(a=e._length,n=1;n<a;n+=1)s+=" C"+e.o[n-1][0]+","+e.o[n-1][1]+" "+e.i[n][0]+","+e.i[n][1]+" "+e.v[n][0]+","+e.v[n][1];if(e.c&&a>1&&(s+=" C"+e.o[n-1][0]+","+e.o[n-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),i.lastPath!==s){var h="";i.elem&&(e.c&&(h=t.inv?this.solidPath+s:s),i.elem.setAttribute("d",h)),i.lastPath=s}},Ne.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var bi=(function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=i;function e(s,n){var a=it("filter");return a.setAttribute("id",s),n!==!0&&(a.setAttribute("filterUnits","objectBoundingBox"),a.setAttribute("x","0%"),a.setAttribute("y","0%"),a.setAttribute("width","100%"),a.setAttribute("height","100%")),a}function i(){var s=it("feColorMatrix");return s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),s}return t})(),Fr=(function(){var t={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),/firefox/i.test(navigator.userAgent)&&(t.svgLumaHidden=!1),t})(),Zi={},Ir="filter_result_";function Es(t){var e,i="SourceGraphic",s=t.data.ef?t.data.ef.length:0,n=Mt(),a=bi.createFilter(n,!0),h=0;this.filters=[];var g;for(e=0;e<s;e+=1){g=null;var f=t.data.ef[e].ty;if(Zi[f]){var b=Zi[f].effect;g=new b(a,t.effectsManager.effectElements[e],t,Ir+h,i),i=Ir+h,Zi[f].countsAsEffect&&(h+=1)}g&&this.filters.push(g)}h&&(t.globalData.defs.appendChild(a),t.layerElement.setAttribute("filter","url("+U()+"#"+n+")")),this.filters.length&&t.addRenderableComponent(this)}Es.prototype.renderFrame=function(t){var e,i=this.filters.length;for(e=0;e<i;e+=1)this.filters[e].renderFrame(t)},Es.prototype.getEffects=function(t){var e,i=this.filters.length,s=[];for(e=0;e<i;e+=1)this.filters[e].type===t&&s.push(this.filters[e]);return s};function Lo(t,e,i){Zi[t]={effect:e,countsAsEffect:i}}function wi(){}wi.prototype={initRendererElement:function(){this.layerElement=it("g")},createContainerElements:function(){this.matteElement=it("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null;if(this.data.td){this.matteMasks={};var i=it("g");i.setAttribute("id",this.layerId),i.appendChild(this.layerElement),e=i,this.globalData.defs.appendChild(i)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var s=it("clipPath"),n=it("path");n.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var a=Mt();if(s.setAttribute("id",a),s.appendChild(n),this.globalData.defs.appendChild(s),this.checkMasks()){var h=it("g");h.setAttribute("clip-path","url("+U()+"#"+a+")"),h.appendChild(this.layerElement),this.transformedElement=h,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+U()+"#"+a+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new Ne(this.data,this,this.globalData),this.renderableEffectsManager=new Es(this),this.searchEffectTransforms()},getMatte:function(e){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[e]){var i=this.layerId+"_"+e,s,n,a,h;if(e===1||e===3){var g=it("mask");g.setAttribute("id",i),g.setAttribute("mask-type",e===3?"luminance":"alpha"),a=it("use"),a.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),g.appendChild(a),this.globalData.defs.appendChild(g),!Fr.maskType&&e===1&&(g.setAttribute("mask-type","luminance"),s=Mt(),n=bi.createFilter(s),this.globalData.defs.appendChild(n),n.appendChild(bi.createAlphaToLuminanceFilter()),h=it("g"),h.appendChild(a),g.appendChild(h),h.setAttribute("filter","url("+U()+"#"+s+")"))}else if(e===2){var f=it("mask");f.setAttribute("id",i),f.setAttribute("mask-type","alpha");var b=it("g");f.appendChild(b),s=Mt(),n=bi.createFilter(s);var S=it("feComponentTransfer");S.setAttribute("in","SourceGraphic"),n.appendChild(S);var z=it("feFuncA");z.setAttribute("type","table"),z.setAttribute("tableValues","1.0 0.0"),S.appendChild(z),this.globalData.defs.appendChild(n);var u=it("rect");u.setAttribute("width",this.comp.data.w),u.setAttribute("height",this.comp.data.h),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("fill","#ffffff"),u.setAttribute("opacity","0"),b.setAttribute("filter","url("+U()+"#"+s+")"),b.appendChild(u),a=it("use"),a.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),b.appendChild(a),Fr.maskType||(f.setAttribute("mask-type","luminance"),n.appendChild(bi.createAlphaToLuminanceFilter()),h=it("g"),b.appendChild(u),h.appendChild(this.layerElement),b.appendChild(h)),this.globalData.defs.appendChild(f)}this.matteMasks[e]=i}return this.matteMasks[e]},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+U()+"#"+e+")")}};function si(){}si.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function xi(){}(function(){var t={initElement:function(i,s,n){this.initFrame(),this.initBaseData(i,s,n),this.initTransform(i,s,n),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var i=this.baseElement||this.layerElement;i.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var i=this.baseElement||this.layerElement;i.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(i){this._mdf=!1,this.prepareRenderableFrame(i),this.prepareProperties(i,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};W([Xi,X(t)],xi)})();function ki(t,e,i){this.assetData=e.getAssetData(t.refId),this.assetData&&this.assetData.sid&&(this.assetData=e.slotManager.getProp(this.assetData)),this.initElement(t,e,i),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}W([_e,ii,wi,si,be,xi],ki),ki.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=it("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},ki.prototype.sourceRectAtTime=function(){return this.sourceRect};function zn(t,e){this.elem=t,this.pos=e}function Lr(){}Lr.prototype={addShapeToModifiers:function(e){var i,s=this.shapeModifiers.length;for(i=0;i<s;i+=1)this.shapeModifiers[i].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var i=0,s=this.shapeModifiers.length;i<s;)if(this.shapeModifiers[i].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,i=this.shapes.length;for(e=0;e<i;e+=1)this.shapes[e].sh.reset();i=this.shapeModifiers.length;var s;for(e=i-1;e>=0&&(s=this.shapeModifiers[e].processShapes(this._isFirstFrame),!s);e-=1);}},searchProcessedElement:function(e){for(var i=this.processedElements,s=0,n=i.length;s<n;){if(i[s].elem===e)return i[s].pos;s+=1}return 0},addProcessedElement:function(e,i){for(var s=this.processedElements,n=s.length;n;)if(n-=1,s[n].elem===e){s[n].pos=i;return}s.push(new zn(e,i))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};var zr={1:"butt",2:"round",3:"square"},Or={1:"miter",2:"round",3:"bevel"};function Rr(t,e,i){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=i,this.lvl=e,this._isAnimated=!!i.k;for(var s=0,n=t.length;s<n;){if(t[s].mProps.dynamicProperties.length){this._isAnimated=!0;break}s+=1}}Rr.prototype.setAsAnimated=function(){this._isAnimated=!0};function Vr(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=it("path"),this.msElem=null}Vr.prototype.reset=function(){this.d="",this._mdf=!1};function Ji(t,e,i,s){this.elem=t,this.frameId=-1,this.dataProps=ot(e.length),this.renderer=i,this.k=!1,this.dashStr="",this.dashArray=at("float32",e.length?e.length-1:0),this.dashoffset=at("float32",1),this.initDynamicPropertyContainer(s);var n,a=e.length||0,h;for(n=0;n<a;n+=1)h=H.getProp(t,e[n].v,0,0,this),this.k=h.k||this.k,this.dataProps[n]={n:e[n].n,p:h};this.k||this.getValue(!0),this._isAnimated=this.k}Ji.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,i=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<i;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},W([wt],Ji);function Dr(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=H.getProp(t,e.o,0,.01,this),this.w=H.getProp(t,e.w,0,null,this),this.d=new Ji(t,e.d||{},"svg",this),this.c=H.getProp(t,e.c,1,255,this),this.style=i,this._isAnimated=!!this._isAnimated}W([wt],Dr);function Nr(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=H.getProp(t,e.o,0,.01,this),this.c=H.getProp(t,e.c,1,255,this),this.style=i}W([wt],Nr);function Br(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=i}W([wt],Br);function Si(t,e,i){this.data=e,this.c=at("uint8c",e.p*4);var s=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=at("float32",s),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=s,this.initDynamicPropertyContainer(i),this.prop=H.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}Si.prototype.comparePoints=function(t,e){for(var i=0,s=this.o.length/2,n;i<s;){if(n=Math.abs(t[i*4]-t[e*4+i*2]),n>.01)return!1;i+=1}return!0},Si.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},Si.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,i=this.data.p*4,s,n;for(e=0;e<i;e+=1)s=e%4===0?100:255,n=Math.round(this.prop.v[e]*s),this.c[e]!==n&&(this.c[e]=n,this._cmdf=!t);if(this.o.length)for(i=this.prop.v.length,e=this.data.p*4;e<i;e+=1)s=e%2===0?100:1,n=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==n&&(this.o[e-this.data.p*4]=n,this._omdf=!t);this._mdf=!t}},W([wt],Si);function ri(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,i)}ri.prototype.initGradientData=function(t,e,i){this.o=H.getProp(t,e.o,0,.01,this),this.s=H.getProp(t,e.s,1,null,this),this.e=H.getProp(t,e.e,1,null,this),this.h=H.getProp(t,e.h||{k:0},0,.01,this),this.a=H.getProp(t,e.a||{k:0},0,dt,this),this.g=new Si(t,e.g,this),this.style=i,this.stops=[],this.setGradientData(i.pElem,e),this.setGradientOpacity(e,i),this._isAnimated=!!this._isAnimated},ri.prototype.setGradientData=function(t,e){var i=Mt(),s=it(e.t===1?"linearGradient":"radialGradient");s.setAttribute("id",i),s.setAttribute("spreadMethod","pad"),s.setAttribute("gradientUnits","userSpaceOnUse");var n=[],a,h,g;for(g=e.g.p*4,h=0;h<g;h+=4)a=it("stop"),s.appendChild(a),n.push(a);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+U()+"#"+i+")"),this.gf=s,this.cst=n},ri.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var i,s,n,a=it("mask"),h=it("path");a.appendChild(h);var g=Mt(),f=Mt();a.setAttribute("id",f);var b=it(t.t===1?"linearGradient":"radialGradient");b.setAttribute("id",g),b.setAttribute("spreadMethod","pad"),b.setAttribute("gradientUnits","userSpaceOnUse"),n=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var S=this.stops;for(s=t.g.p*4;s<n;s+=2)i=it("stop"),i.setAttribute("stop-color","rgb(255,255,255)"),b.appendChild(i),S.push(i);h.setAttribute(t.ty==="gf"?"fill":"stroke","url("+U()+"#"+g+")"),t.ty==="gs"&&(h.setAttribute("stroke-linecap",zr[t.lc||2]),h.setAttribute("stroke-linejoin",Or[t.lj||2]),t.lj===1&&h.setAttribute("stroke-miterlimit",t.ml)),this.of=b,this.ms=a,this.ost=S,this.maskId=f,e.msElem=h}},W([wt],ri);function Ur(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=H.getProp(t,e.w,0,null,this),this.d=new Ji(t,e.d||{},"svg",this),this.initGradientData(t,e,i),this._isAnimated=!!this._isAnimated}W([ri,wt],Ur);function On(){this.it=[],this.prevViewData=[],this.gr=it("g")}function Rn(t,e,i){this.transform={mProps:t,op:e,container:i},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var jr=function(e,i,s,n){if(i===0)return"";var a=e.o,h=e.i,g=e.v,f,b=" M"+n.applyToPointStringified(g[0][0],g[0][1]);for(f=1;f<i;f+=1)b+=" C"+n.applyToPointStringified(a[f-1][0],a[f-1][1])+" "+n.applyToPointStringified(h[f][0],h[f][1])+" "+n.applyToPointStringified(g[f][0],g[f][1]);return s&&i&&(b+=" C"+n.applyToPointStringified(a[f-1][0],a[f-1][1])+" "+n.applyToPointStringified(h[0][0],h[0][1])+" "+n.applyToPointStringified(g[0][0],g[0][1]),b+="z"),b},Vn=(function(){var t=new At,e=new At,i={createRenderFunction:s};function s(z){switch(z.ty){case"fl":return g;case"gf":return b;case"gs":return f;case"st":return S;case"sh":case"el":case"rc":case"sr":return h;case"tr":return n;case"no":return a;default:return null}}function n(z,u,A){(A||u.transform.op._mdf)&&u.transform.container.setAttribute("opacity",u.transform.op.v),(A||u.transform.mProps._mdf)&&u.transform.container.setAttribute("transform",u.transform.mProps.v.to2dCSS())}function a(){}function h(z,u,A){var C,E,I,x,_,d,v=u.styles.length,w=u.lvl,T,L,R,N;for(d=0;d<v;d+=1){if(x=u.sh._mdf||A,u.styles[d].lvl<w){for(L=e.reset(),R=w-u.styles[d].lvl,N=u.transformers.length-1;!x&&R>0;)x=u.transformers[N].mProps._mdf||x,R-=1,N-=1;if(x)for(R=w-u.styles[d].lvl,N=u.transformers.length-1;R>0;)L.multiply(u.transformers[N].mProps.v),R-=1,N-=1}else L=t;if(T=u.sh.paths,E=T._length,x){for(I="",C=0;C<E;C+=1)_=T.shapes[C],_&&_._length&&(I+=jr(_,_._length,_.c,L));u.caches[d]=I}else I=u.caches[d];u.styles[d].d+=z.hd===!0?"":I,u.styles[d]._mdf=x||u.styles[d]._mdf}}function g(z,u,A){var C=u.style;(u.c._mdf||A)&&C.pElem.setAttribute("fill","rgb("+Jt(u.c.v[0])+","+Jt(u.c.v[1])+","+Jt(u.c.v[2])+")"),(u.o._mdf||A)&&C.pElem.setAttribute("fill-opacity",u.o.v)}function f(z,u,A){b(z,u,A),S(z,u,A)}function b(z,u,A){var C=u.gf,E=u.g._hasOpacity,I=u.s.v,x=u.e.v;if(u.o._mdf||A){var _=z.ty==="gf"?"fill-opacity":"stroke-opacity";u.style.pElem.setAttribute(_,u.o.v)}if(u.s._mdf||A){var d=z.t===1?"x1":"cx",v=d==="x1"?"y1":"cy";C.setAttribute(d,I[0]),C.setAttribute(v,I[1]),E&&!u.g._collapsable&&(u.of.setAttribute(d,I[0]),u.of.setAttribute(v,I[1]))}var w,T,L,R;if(u.g._cmdf||A){w=u.cst;var N=u.g.c;for(L=w.length,T=0;T<L;T+=1)R=w[T],R.setAttribute("offset",N[T*4]+"%"),R.setAttribute("stop-color","rgb("+N[T*4+1]+","+N[T*4+2]+","+N[T*4+3]+")")}if(E&&(u.g._omdf||A)){var tt=u.g.o;for(u.g._collapsable?w=u.cst:w=u.ost,L=w.length,T=0;T<L;T+=1)R=w[T],u.g._collapsable||R.setAttribute("offset",tt[T*2]+"%"),R.setAttribute("stop-opacity",tt[T*2+1])}if(z.t===1)(u.e._mdf||A)&&(C.setAttribute("x2",x[0]),C.setAttribute("y2",x[1]),E&&!u.g._collapsable&&(u.of.setAttribute("x2",x[0]),u.of.setAttribute("y2",x[1])));else{var K;if((u.s._mdf||u.e._mdf||A)&&(K=Math.sqrt(Math.pow(I[0]-x[0],2)+Math.pow(I[1]-x[1],2)),C.setAttribute("r",K),E&&!u.g._collapsable&&u.of.setAttribute("r",K)),u.s._mdf||u.e._mdf||u.h._mdf||u.a._mdf||A){K||(K=Math.sqrt(Math.pow(I[0]-x[0],2)+Math.pow(I[1]-x[1],2)));var j=Math.atan2(x[1]-I[1],x[0]-I[0]),st=u.h.v;st>=1?st=.99:st<=-1&&(st=-.99);var G=K*st,D=Math.cos(j+u.a.v)*G+I[0],y=Math.sin(j+u.a.v)*G+I[1];C.setAttribute("fx",D),C.setAttribute("fy",y),E&&!u.g._collapsable&&(u.of.setAttribute("fx",D),u.of.setAttribute("fy",y))}}}function S(z,u,A){var C=u.style,E=u.d;E&&(E._mdf||A)&&E.dashStr&&(C.pElem.setAttribute("stroke-dasharray",E.dashStr),C.pElem.setAttribute("stroke-dashoffset",E.dashoffset[0])),u.c&&(u.c._mdf||A)&&C.pElem.setAttribute("stroke","rgb("+Jt(u.c.v[0])+","+Jt(u.c.v[1])+","+Jt(u.c.v[2])+")"),(u.o._mdf||A)&&C.pElem.setAttribute("stroke-opacity",u.o.v),(u.w._mdf||A)&&(C.pElem.setAttribute("stroke-width",u.w.v),C.msElem&&C.msElem.setAttribute("stroke-width",u.w.v))}return i})();function mt(t,e,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,i),this.prevViewData=[]}W([_e,ii,wi,Lr,si,be,xi],mt),mt.prototype.initSecondaryElement=function(){},mt.prototype.identityMatrix=new At,mt.prototype.buildExpressionInterface=function(){},mt.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},mt.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,i,s,n=this.stylesList.length,a,h=[],g=!1;for(s=0;s<n;s+=1){for(a=this.stylesList[s],g=!1,h.length=0,t=0;t<e;t+=1)i=this.shapes[t],i.styles.indexOf(a)!==-1&&(h.push(i),g=i._isAnimated||g);h.length>1&&g&&this.setShapesAsAnimated(h)}},mt.prototype.setShapesAsAnimated=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e].setAsAnimated()},mt.prototype.createStyleElement=function(t,e){var i,s=new Vr(t,e),n=s.pElem;if(t.ty==="st")i=new Dr(this,t,s);else if(t.ty==="fl")i=new Nr(this,t,s);else if(t.ty==="gf"||t.ty==="gs"){var a=t.ty==="gf"?ri:Ur;i=new a(this,t,s),this.globalData.defs.appendChild(i.gf),i.maskId&&(this.globalData.defs.appendChild(i.ms),this.globalData.defs.appendChild(i.of),n.setAttribute("mask","url("+U()+"#"+i.maskId+")"))}else t.ty==="no"&&(i=new Br(this,t,s));return(t.ty==="st"||t.ty==="gs")&&(n.setAttribute("stroke-linecap",zr[t.lc||2]),n.setAttribute("stroke-linejoin",Or[t.lj||2]),n.setAttribute("fill-opacity","0"),t.lj===1&&n.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&n.setAttribute("fill-rule","evenodd"),t.ln&&n.setAttribute("id",t.ln),t.cl&&n.setAttribute("class",t.cl),t.bm&&(n.style["mix-blend-mode"]=As(t.bm)),this.stylesList.push(s),this.addToAnimatedContents(t,i),i},mt.prototype.createGroupElement=function(t){var e=new On;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=As(t.bm)),e},mt.prototype.createTransformElement=function(t,e){var i=bs.getTransformProperty(this,t,this),s=new Rn(i,i.o,e);return this.addToAnimatedContents(t,s),s},mt.prototype.createShapeElement=function(t,e,i){var s=4;t.ty==="rc"?s=5:t.ty==="el"?s=6:t.ty==="sr"&&(s=7);var n=Wi.getShapeProp(this,t,s,this),a=new Rr(e,i,n);return this.shapes.push(a),this.addShapeToModifiers(a),this.addToAnimatedContents(t,a),a},mt.prototype.addToAnimatedContents=function(t,e){for(var i=0,s=this.animatedContents.length;i<s;){if(this.animatedContents[i].element===e)return;i+=1}this.animatedContents.push({fn:Vn.createRenderFunction(t),element:e,data:t})},mt.prototype.setElementStyles=function(t){var e=t.styles,i,s=this.stylesList.length;for(i=0;i<s;i+=1)e.indexOf(this.stylesList[i])===-1&&!this.stylesList[i].closed&&e.push(this.stylesList[i])},mt.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},mt.prototype.searchShapes=function(t,e,i,s,n,a,h){var g=[].concat(a),f,b=t.length-1,S,z,u=[],A=[],C,E,I;for(f=b;f>=0;f-=1){if(I=this.searchProcessedElement(t[f]),I?e[f]=i[I-1]:t[f]._render=h,t[f].ty==="fl"||t[f].ty==="st"||t[f].ty==="gf"||t[f].ty==="gs"||t[f].ty==="no")I?e[f].style.closed=t[f].hd:e[f]=this.createStyleElement(t[f],n),t[f]._render&&e[f].style.pElem.parentNode!==s&&s.appendChild(e[f].style.pElem),u.push(e[f].style);else if(t[f].ty==="gr"){if(!I)e[f]=this.createGroupElement(t[f]);else for(z=e[f].it.length,S=0;S<z;S+=1)e[f].prevViewData[S]=e[f].it[S];this.searchShapes(t[f].it,e[f].it,e[f].prevViewData,e[f].gr,n+1,g,h),t[f]._render&&e[f].gr.parentNode!==s&&s.appendChild(e[f].gr)}else t[f].ty==="tr"?(I||(e[f]=this.createTransformElement(t[f],s)),C=e[f].transform,g.push(C)):t[f].ty==="sh"||t[f].ty==="rc"||t[f].ty==="el"||t[f].ty==="sr"?(I||(e[f]=this.createShapeElement(t[f],g,n)),this.setElementStyles(e[f])):t[f].ty==="tm"||t[f].ty==="rd"||t[f].ty==="ms"||t[f].ty==="pb"||t[f].ty==="zz"||t[f].ty==="op"?(I?(E=e[f],E.closed=!1):(E=ve.getModifier(t[f].ty),E.init(this,t[f]),e[f]=E,this.shapeModifiers.push(E)),A.push(E)):t[f].ty==="rp"&&(I?(E=e[f],E.closed=!0):(E=ve.getModifier(t[f].ty),e[f]=E,E.init(this,t,f,e),this.shapeModifiers.push(E),h=!1),A.push(E));this.addProcessedElement(t[f],f+1)}for(b=u.length,f=0;f<b;f+=1)u[f].closed=!0;for(b=A.length,f=0;f<b;f+=1)A[f].closed=!0},mt.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},mt.prototype.renderShape=function(){var t,e=this.animatedContents.length,i;for(t=0;t<e;t+=1)i=this.animatedContents[t],(this._isFirstFrame||i.element._isAnimated)&&i.data!==!0&&i.fn(i.data,i.element,this._isFirstFrame)},mt.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function Ps(t,e,i,s,n,a){this.o=t,this.sw=e,this.sc=i,this.fc=s,this.m=n,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!i,fc:!!s,m:!0,p:!0}}Ps.prototype.update=function(t,e,i,s,n,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var h=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,h=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,h=!0),this.sc!==i&&(this.sc=i,this._mdf.sc=!0,h=!0),this.fc!==s&&(this.fc=s,this._mdf.fc=!0,h=!0),this.m!==n&&(this.m=n,this._mdf.m=!0,h=!0),a.length&&(this.p[0]!==a[0]||this.p[1]!==a[1]||this.p[4]!==a[4]||this.p[5]!==a[5]||this.p[12]!==a[12]||this.p[13]!==a[13])&&(this.p=a,this._mdf.p=!0,h=!0),h};function Tt(t,e){this._frameId=c,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,e.d&&e.d.sid&&(e.d=t.globalData.slotManager.getProp(e.d)),this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}Tt.prototype.defaultBoxWidth=[0,0],Tt.prototype.copyData=function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Tt.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},Tt.prototype.searchProperty=function(){return this.searchKeyframes()},Tt.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},Tt.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},Tt.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,i=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var s,n=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(s=0;s<n;s+=1)i!==this.keysIndex?a=this.effectsSequence[s](a,a.t):a=this.effectsSequence[s](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},Tt.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,i=0,s=t.length;i<=s-1&&!(i===s-1||t[i+1].t>e);)i+=1;return this.keysIndex!==i&&(this.keysIndex=i),this.data.d.k[this.keysIndex].s},Tt.prototype.buildFinalText=function(t){for(var e=[],i=0,s=t.length,n,a,h=!1,g=!1,f="";i<s;)h=g,g=!1,n=t.charCodeAt(i),f=t.charAt(i),De.isCombinedCharacter(n)?h=!0:n>=55296&&n<=56319?De.isRegionalFlag(t,i)?f=t.substr(i,14):(a=t.charCodeAt(i+1),a>=56320&&a<=57343&&(De.isModifier(n,a)?(f=t.substr(i,2),h=!0):De.isFlagEmoji(t.substr(i,4))?f=t.substr(i,4):f=t.substr(i,2))):n>56319?(a=t.charCodeAt(i+1),De.isVariationSelector(n)&&(h=!0)):De.isZeroWidthJoiner(n)&&(h=!0,g=!0),h?(e[e.length-1]+=f,h=!1):e.push(f),i+=f.length;return e},Tt.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,i=this.data,s=[],n,a,h,g=0,f,b=i.m.g,S=0,z=0,u=0,A=[],C=0,E=0,I,x,_=e.getFontByName(t.f),d,v=0,w=Cr(_);t.fWeight=w.weight,t.fStyle=w.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),a=t.finalText.length,t.finalLineHeight=t.lh;var T=t.tr/1e3*t.finalSize,L;if(t.sz)for(var R=!0,N=t.sz[0],tt=t.sz[1],K,j;R;){j=this.buildFinalText(t.t),K=0,C=0,a=j.length,T=t.tr/1e3*t.finalSize;var st=-1;for(n=0;n<a;n+=1)L=j[n].charCodeAt(0),h=!1,j[n]===" "?st=n:(L===13||L===3)&&(C=0,h=!0,K+=t.finalLineHeight||t.finalSize*1.2),e.chars?(d=e.getCharData(j[n],_.fStyle,_.fFamily),v=h?0:d.w*t.finalSize/100):v=e.measureText(j[n],t.f,t.finalSize),C+v>N&&j[n]!==" "?(st===-1?a+=1:n=st,K+=t.finalLineHeight||t.finalSize*1.2,j.splice(n,st===n?1:0,"\r"),st=-1,C=0):(C+=v,C+=T);K+=_.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&tt<K?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=j,a=t.finalText.length,R=!1)}C=-T,v=0;var G=0,D;for(n=0;n<a;n+=1)if(h=!1,D=t.finalText[n],L=D.charCodeAt(0),L===13||L===3?(G=0,A.push(C),E=C>E?C:E,C=-2*T,f="",h=!0,u+=1):f=D,e.chars?(d=e.getCharData(D,_.fStyle,e.getFontByName(t.f).fFamily),v=h?0:d.w*t.finalSize/100):v=e.measureText(f,t.f,t.finalSize),D===" "?G+=v+T:(C+=v+T+G,G=0),s.push({l:v,an:v,add:S,n:h,anIndexes:[],val:f,line:u,animatorJustifyOffset:0}),b==2){if(S+=v,f===""||f===" "||n===a-1){for((f===""||f===" ")&&(S-=v);z<=n;)s[z].an=S,s[z].ind=g,s[z].extra=v,z+=1;g+=1,S=0}}else if(b==3){if(S+=v,f===""||n===a-1){for(f===""&&(S-=v);z<=n;)s[z].an=S,s[z].ind=g,s[z].extra=v,z+=1;S=0,g+=1}}else s[g].ind=g,s[g].extra=0,g+=1;if(t.l=s,E=C>E?C:E,A.push(C),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=E,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=A;var y=i.a,P,l;x=y.length;var p,O,M=[];for(I=0;I<x;I+=1){for(P=y[I],P.a.sc&&(t.strokeColorAnim=!0),P.a.sw&&(t.strokeWidthAnim=!0),(P.a.fc||P.a.fh||P.a.fs||P.a.fb)&&(t.fillColorAnim=!0),O=0,p=P.s.b,n=0;n<a;n+=1)l=s[n],l.anIndexes[I]=O,(p==1&&l.val!==""||p==2&&l.val!==""&&l.val!==" "||p==3&&(l.n||l.val==" "||n==a-1)||p==4&&(l.n||n==a-1))&&(P.s.rn===1&&M.push(O),O+=1);i.a[I].s.totalChars=O;var q=-1,Q;if(P.s.rn===1)for(n=0;n<a;n+=1)l=s[n],q!=l.anIndexes[I]&&(q=l.anIndexes[I],Q=M.splice(Math.floor(Math.random()*M.length),1)[0]),l.anIndexes[I]=Q}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=_.ascent*t.finalSize/100},Tt.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var i=this.copyData({},this.data.d.k[e].s);i=this.copyData(i,t),this.data.d.k[e].s=i,this.recalculate(e),this.setCurrentData(i),this.elem.addDynamicProperty(this)},Tt.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},Tt.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},Tt.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var Dn=(function(){var t=Math.max,e=Math.min,i=Math.floor;function s(a,h){this._currentTextLength=-1,this.k=!1,this.data=h,this.elem=a,this.comp=a.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(a),this.s=H.getProp(a,h.s||{k:0},0,0,this),"e"in h?this.e=H.getProp(a,h.e,0,0,this):this.e={v:100},this.o=H.getProp(a,h.o||{k:0},0,0,this),this.xe=H.getProp(a,h.xe||{k:0},0,0,this),this.ne=H.getProp(a,h.ne||{k:0},0,0,this),this.sm=H.getProp(a,h.sm||{k:100},0,0,this),this.a=H.getProp(a,h.a,0,.01,this),this.dynamicProperties.length||this.getValue()}s.prototype={getMult:function(h){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var g=0,f=0,b=1,S=1;this.ne.v>0?g=this.ne.v/100:f=-this.ne.v/100,this.xe.v>0?b=1-this.xe.v/100:S=1+this.xe.v/100;var z=di.getBezierEasing(g,f,b,S).get,u=0,A=this.finalS,C=this.finalE,E=this.data.sh;if(E===2)C===A?u=h>=C?1:0:u=t(0,e(.5/(C-A)+(h-A)/(C-A),1)),u=z(u);else if(E===3)C===A?u=h>=C?0:1:u=1-t(0,e(.5/(C-A)+(h-A)/(C-A),1)),u=z(u);else if(E===4)C===A?u=0:(u=t(0,e(.5/(C-A)+(h-A)/(C-A),1)),u<.5?u*=2:u=1-2*(u-.5)),u=z(u);else if(E===5){if(C===A)u=0;else{var I=C-A;h=e(t(0,h+.5-A),C-A);var x=-I/2+h,_=I/2;u=Math.sqrt(1-x*x/(_*_))}u=z(u)}else E===6?(C===A?u=0:(h=e(t(0,h+.5-A),C-A),u=(1+Math.cos(Math.PI+Math.PI*2*h/(C-A)))/2),u=z(u)):(h>=i(A)&&(h-A<0?u=t(0,e(e(C,1)-(A-h),1)):u=t(0,e(C-h,1))),u=z(u));if(this.sm.v!==100){var d=this.sm.v*.01;d===0&&(d=1e-8);var v=.5-d*.5;u<v?u=0:(u=(u-v)/d,u>1&&(u=1))}return u*this.a.v},getValue:function(h){this.iterateDynamicProperties(),this._mdf=h||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,h&&this.data.r===2&&(this.e.v=this._currentTextLength);var g=this.data.r===2?1:100/this.data.totalChars,f=this.o.v/g,b=this.s.v/g+f,S=this.e.v/g+f;if(b>S){var z=b;b=S,S=z}this.finalS=b,this.finalE=S}},W([wt],s);function n(a,h,g){return new s(a,h,g)}return{getTextSelectorProp:n}})();function Nn(t,e,i){var s={propType:!1},n=H.getProp,a=e.a;this.a={r:a.r?n(t,a.r,0,dt,i):s,rx:a.rx?n(t,a.rx,0,dt,i):s,ry:a.ry?n(t,a.ry,0,dt,i):s,sk:a.sk?n(t,a.sk,0,dt,i):s,sa:a.sa?n(t,a.sa,0,dt,i):s,s:a.s?n(t,a.s,1,.01,i):s,a:a.a?n(t,a.a,1,0,i):s,o:a.o?n(t,a.o,0,.01,i):s,p:a.p?n(t,a.p,1,0,i):s,sw:a.sw?n(t,a.sw,0,0,i):s,sc:a.sc?n(t,a.sc,1,0,i):s,fc:a.fc?n(t,a.fc,1,0,i):s,fh:a.fh?n(t,a.fh,0,0,i):s,fs:a.fs?n(t,a.fs,0,.01,i):s,fb:a.fb?n(t,a.fb,0,.01,i):s,t:a.t?n(t,a.t,0,0,i):s},this.s=Dn.getTextSelectorProp(t,e.s,i),this.s.t=e.s.t}function Be(t,e,i){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=i,this._animatorsData=ot(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(i)}Be.prototype.searchProperties=function(){var t,e=this._textData.a.length,i,s=H.getProp;for(t=0;t<e;t+=1)i=this._textData.a[t],this._animatorsData[t]=new Nn(this._elem,i,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:s(this._elem,this._textData.p.a,0,0,this),f:s(this._elem,this._textData.p.f,0,0,this),l:s(this._elem,this._textData.p.l,0,0,this),r:s(this._elem,this._textData.p.r,0,0,this),p:s(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=s(this._elem,this._textData.m.a,1,0,this)},Be.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var i=this._moreOptions.alignment.v,s=this._animatorsData,n=this._textData,a=this.mHelper,h=this._renderType,g=this.renderedLetters.length,f,b,S,z,u=t.l,A,C,E,I,x,_,d,v,w,T,L,R,N,tt,K;if(this._hasMaskedPath){if(K=this._pathData.m,!this._pathData.n||this._pathData._mdf){var j=K.v;this._pathData.r.v&&(j=j.reverse()),A={tLength:0,segments:[]},z=j._length-1;var st;for(R=0,S=0;S<z;S+=1)st=Qt.buildBezierData(j.v[S],j.v[S+1],[j.o[S][0]-j.v[S][0],j.o[S][1]-j.v[S][1]],[j.i[S+1][0]-j.v[S+1][0],j.i[S+1][1]-j.v[S+1][1]]),A.tLength+=st.segmentLength,A.segments.push(st),R+=st.segmentLength;S=z,K.v.c&&(st=Qt.buildBezierData(j.v[S],j.v[0],[j.o[S][0]-j.v[S][0],j.o[S][1]-j.v[S][1]],[j.i[0][0]-j.v[0][0],j.i[0][1]-j.v[0][1]]),A.tLength+=st.segmentLength,A.segments.push(st),R+=st.segmentLength),this._pathData.pi=A}if(A=this._pathData.pi,C=this._pathData.f.v,d=0,_=1,I=0,x=!0,T=A.segments,C<0&&K.v.c)for(A.tLength<Math.abs(C)&&(C=-Math.abs(C)%A.tLength),d=T.length-1,w=T[d].points,_=w.length-1;C<0;)C+=w[_].partialLength,_-=1,_<0&&(d-=1,w=T[d].points,_=w.length-1);w=T[d].points,v=w[_-1],E=w[_],L=E.partialLength}z=u.length,f=0,b=0;var G=t.finalSize*1.2*.714,D=!0,y,P,l,p,O;p=s.length;var M,q=-1,Q,et,lt,ht=C,vt=d,It=_,ee=-1,Lt,xt,Dt,ft,Y,oe,ke,le,ie="",he=this.defaultPropsArray,ce;if(t.j===2||t.j===1){var zt=0,Se=0,Ae=t.j===2?-.5:-1,Yt=0,Ee=!0;for(S=0;S<z;S+=1)if(u[S].n){for(zt&&(zt+=Se);Yt<S;)u[Yt].animatorJustifyOffset=zt,Yt+=1;zt=0,Ee=!0}else{for(l=0;l<p;l+=1)y=s[l].a,y.t.propType&&(Ee&&t.j===2&&(Se+=y.t.v*Ae),P=s[l].s,M=P.getMult(u[S].anIndexes[l],n.a[l].s.totalChars),M.length?zt+=y.t.v*M[0]*Ae:zt+=y.t.v*M*Ae);Ee=!1}for(zt&&(zt+=Se);Yt<S;)u[Yt].animatorJustifyOffset=zt,Yt+=1}for(S=0;S<z;S+=1){if(a.reset(),Lt=1,u[S].n)f=0,b+=t.yOffset,b+=D?1:0,C=ht,D=!1,this._hasMaskedPath&&(d=vt,_=It,w=T[d].points,v=w[_-1],E=w[_],L=E.partialLength,I=0),ie="",le="",oe="",ce="",he=this.defaultPropsArray;else{if(this._hasMaskedPath){if(ee!==u[S].line){switch(t.j){case 1:C+=R-t.lineWidths[u[S].line];break;case 2:C+=(R-t.lineWidths[u[S].line])/2;break;default:break}ee=u[S].line}q!==u[S].ind&&(u[q]&&(C+=u[q].extra),C+=u[S].an/2,q=u[S].ind),C+=i[0]*u[S].an*.005;var Kt=0;for(l=0;l<p;l+=1)y=s[l].a,y.p.propType&&(P=s[l].s,M=P.getMult(u[S].anIndexes[l],n.a[l].s.totalChars),M.length?Kt+=y.p.v[0]*M[0]:Kt+=y.p.v[0]*M),y.a.propType&&(P=s[l].s,M=P.getMult(u[S].anIndexes[l],n.a[l].s.totalChars),M.length?Kt+=y.a.v[0]*M[0]:Kt+=y.a.v[0]*M);for(x=!0,this._pathData.a.v&&(C=u[0].an*.5+(R-this._pathData.f.v-u[0].an*.5-u[u.length-1].an*.5)*q/(z-1),C+=this._pathData.f.v);x;)I+L>=C+Kt||!w?(N=(C+Kt-I)/E.partialLength,et=v.point[0]+(E.point[0]-v.point[0])*N,lt=v.point[1]+(E.point[1]-v.point[1])*N,a.translate(-i[0]*u[S].an*.005,-(i[1]*G)*.01),x=!1):w&&(I+=E.partialLength,_+=1,_>=w.length&&(_=0,d+=1,T[d]?w=T[d].points:K.v.c?(_=0,d=0,w=T[d].points):(I-=E.partialLength,w=null)),w&&(v=E,E=w[_],L=E.partialLength));Q=u[S].an/2-u[S].add,a.translate(-Q,0,0)}else Q=u[S].an/2-u[S].add,a.translate(-Q,0,0),a.translate(-i[0]*u[S].an*.005,-i[1]*G*.01,0);for(l=0;l<p;l+=1)y=s[l].a,y.t.propType&&(P=s[l].s,M=P.getMult(u[S].anIndexes[l],n.a[l].s.totalChars),(f!==0||t.j!==0)&&(this._hasMaskedPath?M.length?C+=y.t.v*M[0]:C+=y.t.v*M:M.length?f+=y.t.v*M[0]:f+=y.t.v*M));for(t.strokeWidthAnim&&(Dt=t.sw||0),t.strokeColorAnim&&(t.sc?xt=[t.sc[0],t.sc[1],t.sc[2]]:xt=[0,0,0]),t.fillColorAnim&&t.fc&&(ft=[t.fc[0],t.fc[1],t.fc[2]]),l=0;l<p;l+=1)y=s[l].a,y.a.propType&&(P=s[l].s,M=P.getMult(u[S].anIndexes[l],n.a[l].s.totalChars),M.length?a.translate(-y.a.v[0]*M[0],-y.a.v[1]*M[1],y.a.v[2]*M[2]):a.translate(-y.a.v[0]*M,-y.a.v[1]*M,y.a.v[2]*M));for(l=0;l<p;l+=1)y=s[l].a,y.s.propType&&(P=s[l].s,M=P.getMult(u[S].anIndexes[l],n.a[l].s.totalChars),M.length?a.scale(1+(y.s.v[0]-1)*M[0],1+(y.s.v[1]-1)*M[1],1):a.scale(1+(y.s.v[0]-1)*M,1+(y.s.v[1]-1)*M,1));for(l=0;l<p;l+=1){if(y=s[l].a,P=s[l].s,M=P.getMult(u[S].anIndexes[l],n.a[l].s.totalChars),y.sk.propType&&(M.length?a.skewFromAxis(-y.sk.v*M[0],y.sa.v*M[1]):a.skewFromAxis(-y.sk.v*M,y.sa.v*M)),y.r.propType&&(M.length?a.rotateZ(-y.r.v*M[2]):a.rotateZ(-y.r.v*M)),y.ry.propType&&(M.length?a.rotateY(y.ry.v*M[1]):a.rotateY(y.ry.v*M)),y.rx.propType&&(M.length?a.rotateX(y.rx.v*M[0]):a.rotateX(y.rx.v*M)),y.o.propType&&(M.length?Lt+=(y.o.v*M[0]-Lt)*M[0]:Lt+=(y.o.v*M-Lt)*M),t.strokeWidthAnim&&y.sw.propType&&(M.length?Dt+=y.sw.v*M[0]:Dt+=y.sw.v*M),t.strokeColorAnim&&y.sc.propType)for(Y=0;Y<3;Y+=1)M.length?xt[Y]+=(y.sc.v[Y]-xt[Y])*M[0]:xt[Y]+=(y.sc.v[Y]-xt[Y])*M;if(t.fillColorAnim&&t.fc){if(y.fc.propType)for(Y=0;Y<3;Y+=1)M.length?ft[Y]+=(y.fc.v[Y]-ft[Y])*M[0]:ft[Y]+=(y.fc.v[Y]-ft[Y])*M;y.fh.propType&&(M.length?ft=ir(ft,y.fh.v*M[0]):ft=ir(ft,y.fh.v*M)),y.fs.propType&&(M.length?ft=tr(ft,y.fs.v*M[0]):ft=tr(ft,y.fs.v*M)),y.fb.propType&&(M.length?ft=er(ft,y.fb.v*M[0]):ft=er(ft,y.fb.v*M))}}for(l=0;l<p;l+=1)y=s[l].a,y.p.propType&&(P=s[l].s,M=P.getMult(u[S].anIndexes[l],n.a[l].s.totalChars),this._hasMaskedPath?M.length?a.translate(0,y.p.v[1]*M[0],-y.p.v[2]*M[1]):a.translate(0,y.p.v[1]*M,-y.p.v[2]*M):M.length?a.translate(y.p.v[0]*M[0],y.p.v[1]*M[1],-y.p.v[2]*M[2]):a.translate(y.p.v[0]*M,y.p.v[1]*M,-y.p.v[2]*M));if(t.strokeWidthAnim&&(oe=Dt<0?0:Dt),t.strokeColorAnim&&(ke="rgb("+Math.round(xt[0]*255)+","+Math.round(xt[1]*255)+","+Math.round(xt[2]*255)+")"),t.fillColorAnim&&t.fc&&(le="rgb("+Math.round(ft[0]*255)+","+Math.round(ft[1]*255)+","+Math.round(ft[2]*255)+")"),this._hasMaskedPath){if(a.translate(0,-t.ls),a.translate(0,i[1]*G*.01+b,0),this._pathData.p.v){tt=(E.point[1]-v.point[1])/(E.point[0]-v.point[0]);var Ue=Math.atan(tt)*180/Math.PI;E.point[0]<v.point[0]&&(Ue+=180),a.rotate(-Ue*Math.PI/180)}a.translate(et,lt,0),C-=i[0]*u[S].an*.005,u[S+1]&&q!==u[S+1].ind&&(C+=u[S].an/2,C+=t.tr*.001*t.finalSize)}else{switch(a.translate(f,b,0),t.ps&&a.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:a.translate(u[S].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[u[S].line]),0,0);break;case 2:a.translate(u[S].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[u[S].line])/2,0,0);break;default:break}a.translate(0,-t.ls),a.translate(Q,0,0),a.translate(i[0]*u[S].an*.005,i[1]*G*.01,0),f+=u[S].l+t.tr*.001*t.finalSize}h==="html"?ie=a.toCSS():h==="svg"?ie=a.to2dCSS():he=[a.props[0],a.props[1],a.props[2],a.props[3],a.props[4],a.props[5],a.props[6],a.props[7],a.props[8],a.props[9],a.props[10],a.props[11],a.props[12],a.props[13],a.props[14],a.props[15]],ce=Lt}g<=S?(O=new Ps(ce,oe,ke,le,ie,he),this.renderedLetters.push(O),g+=1,this.lettersChangedFlag=!0):(O=this.renderedLetters[S],this.lettersChangedFlag=O.update(ce,oe,ke,le,ie,he)||this.lettersChangedFlag)}}},Be.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},Be.prototype.mHelper=new At,Be.prototype.defaultPropsArray=[],W([wt],Be);function Ht(){}Ht.prototype.initElement=function(t,e,i){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,i),this.textProperty=new Tt(this,t.t,this.dynamicProperties),this.textAnimator=new Be(t.t,this.renderType,this),this.initTransform(t,e,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Ht.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},Ht.prototype.createPathShape=function(t,e){var i,s=e.length,n,a="";for(i=0;i<s;i+=1)e[i].ty==="sh"&&(n=e[i].ks.k,a+=jr(n,n.i.length,!0,t));return a},Ht.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},Ht.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},Ht.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},Ht.prototype.applyTextPropertiesToMatrix=function(t,e,i,s,n){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i])/2,0,0);break;default:break}e.translate(s,n,0)},Ht.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},Ht.prototype.emptyProp=new Ps,Ht.prototype.destroy=function(){},Ht.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var Bn={shapes:[]};function ae(t,e,i){this.textSpans=[],this.renderType="svg",this.initElement(t,e,i)}W([_e,ii,wi,si,be,xi,Ht],ae),ae.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=it("text"))},ae.prototype.buildTextContents=function(t){for(var e=0,i=t.length,s=[],n="";e<i;)t[e]==="\r"||t[e]===""?(s.push(n),n=""):n+=t[e],e+=1;return s.push(n),s},ae.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var i=t.shapes[0];if(i.it){var s=i.it[i.it.length-1];s.s&&(s.s.k[0]=e,s.s.k[1]=e)}}return t},ae.prototype.buildNewText=function(){this.addDynamicProperty(this);var t,e,i=this.textProperty.currentData;this.renderedLetters=ot(i?i.l.length:0),i.fc?this.layerElement.setAttribute("fill",this.buildColor(i.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),i.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(i.sc)),this.layerElement.setAttribute("stroke-width",i.sw)),this.layerElement.setAttribute("font-size",i.finalSize);var s=this.globalData.fontManager.getFontByName(i.f);if(s.fClass)this.layerElement.setAttribute("class",s.fClass);else{this.layerElement.setAttribute("font-family",s.fFamily);var n=i.fWeight,a=i.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",n)}this.layerElement.setAttribute("aria-label",i.t);var h=i.l||[],g=!!this.globalData.fontManager.chars;e=h.length;var f,b=this.mHelper,S="",z=this.data.singleShape,u=0,A=0,C=!0,E=i.tr*.001*i.finalSize;if(z&&!g&&!i.sz){var I=this.textContainer,x="start";switch(i.j){case 1:x="end";break;case 2:x="middle";break;default:x="start";break}I.setAttribute("text-anchor",x),I.setAttribute("letter-spacing",E);var _=this.buildTextContents(i.finalText);for(e=_.length,A=i.ps?i.ps[1]+i.ascent:0,t=0;t<e;t+=1)f=this.textSpans[t].span||it("tspan"),f.textContent=_[t],f.setAttribute("x",0),f.setAttribute("y",A),f.style.display="inherit",I.appendChild(f),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=f,A+=i.finalLineHeight;this.layerElement.appendChild(I)}else{var d=this.textSpans.length,v;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!g||!z||t===0){if(f=d>t?this.textSpans[t].span:it(g?"g":"text"),d<=t){if(f.setAttribute("stroke-linecap","butt"),f.setAttribute("stroke-linejoin","round"),f.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=f,g){var w=it("g");f.appendChild(w),this.textSpans[t].childSpan=w}this.textSpans[t].span=f,this.layerElement.appendChild(f)}f.style.display="inherit"}if(b.reset(),z&&(h[t].n&&(u=-E,A+=i.yOffset,A+=C?1:0,C=!1),this.applyTextPropertiesToMatrix(i,b,h[t].line,u,A),u+=h[t].l||0,u+=E),g){v=this.globalData.fontManager.getCharData(i.finalText[t],s.fStyle,this.globalData.fontManager.getFontByName(i.f).fFamily);var T;if(v.t===1)T=new Ai(v.data,this.globalData,this);else{var L=Bn;v.data&&v.data.shapes&&(L=this.buildShapeData(v.data,i.finalSize)),T=new mt(L,this.globalData,this)}if(this.textSpans[t].glyph){var R=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(R.layerElement),R.destroy()}this.textSpans[t].glyph=T,T._debug=!0,T.prepareFrame(0),T.renderFrame(),this.textSpans[t].childSpan.appendChild(T.layerElement),v.t===1&&this.textSpans[t].childSpan.setAttribute("transform","scale("+i.finalSize/100+","+i.finalSize/100+")")}else z&&f.setAttribute("transform","translate("+b.props[12]+","+b.props[13]+")"),f.textContent=h[t].val,f.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}z&&f&&f.setAttribute("d",S)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},ae.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},ae.prototype.getValue=function(){var t,e=this.textSpans.length,i;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<e;t+=1)i=this.textSpans[t].glyph,i&&(i.prepareFrame(this.comp.renderedFrame-this.data.st),i._mdf&&(this._mdf=!0))},ae.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,i=this.textAnimator.renderedLetters,s=this.textProperty.currentData.l;e=s.length;var n,a,h;for(t=0;t<e;t+=1)s[t].n||(n=i[t],a=this.textSpans[t].span,h=this.textSpans[t].glyph,h&&h.renderFrame(),n._mdf.m&&a.setAttribute("transform",n.m),n._mdf.o&&a.setAttribute("opacity",n.o),n._mdf.sw&&a.setAttribute("stroke-width",n.sw),n._mdf.sc&&a.setAttribute("stroke",n.sc),n._mdf.fc&&a.setAttribute("fill",n.fc))}};function $s(t,e,i){this.initElement(t,e,i)}W([ki],$s),$s.prototype.createContent=function(){var t=it("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function xe(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initFrame(),this.initTransform(t,e,i),this.initHierarchy()}xe.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},xe.prototype.renderFrame=function(){},xe.prototype.getBaseElement=function(){return null},xe.prototype.destroy=function(){},xe.prototype.sourceRectAtTime=function(){},xe.prototype.hide=function(){},W([_e,ii,si,be],xe);function yt(){}W([Et],yt),yt.prototype.createNull=function(t){return new xe(t,this.globalData,this)},yt.prototype.createShape=function(t){return new mt(t,this.globalData,this)},yt.prototype.createText=function(t){return new ae(t,this.globalData,this)},yt.prototype.createImage=function(t){return new ki(t,this.globalData,this)},yt.prototype.createSolid=function(t){return new $s(t,this.globalData,this)},yt.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var i=it("clipPath"),s=it("rect");s.setAttribute("width",t.w),s.setAttribute("height",t.h),s.setAttribute("x",0),s.setAttribute("y",0);var n=Mt();i.setAttribute("id",n),i.appendChild(s),this.layerElement.setAttribute("clip-path","url("+U()+"#"+n+")"),e.appendChild(i),this.layers=t.layers,this.elements=ot(t.layers.length)},yt.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},yt.prototype.updateContainerSize=function(){},yt.prototype.findIndexByInd=function(t){var e=0,i=this.layers.length;for(e=0;e<i;e+=1)if(this.layers[e].ind===t)return e;return-1},yt.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var i=this.createItem(this.layers[t]);if(e[t]=i,Vi()&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(i),i.initExpressions()),this.appendElementInPos(i,t),this.layers[t].tt){var s="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(s===-1)return;if(!this.elements[s]||this.elements[s]===!0)this.buildItem(s),this.addPendingElement(i);else{var n=e[s],a=n.getMatte(this.layers[t].tt);i.setMatte(a)}}}},yt.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,i=this.elements.length;e<i;){if(this.elements[e]===t){var s="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,n=this.elements[s],a=n.getMatte(this.layers[e].tt);t.setMatte(a);break}e+=1}}},yt.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,i=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=i-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<i;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},yt.prototype.appendElementInPos=function(t,e){var i=t.getBaseElement();if(i){for(var s=0,n;s<e;)this.elements[s]&&this.elements[s]!==!0&&this.elements[s].getBaseElement()&&(n=this.elements[s].getBaseElement()),s+=1;n?this.layerElement.insertBefore(i,n):this.layerElement.appendChild(i)}},yt.prototype.hide=function(){this.layerElement.style.display="none"},yt.prototype.show=function(){this.layerElement.style.display="block"};function ne(){}W([_e,ii,si,be,xi],ne),ne.prototype.initElement=function(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initTransform(t,e,i),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},ne.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var i,s=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),i=s-1;i>=0;i-=1)(this.completeLayers||this.elements[i])&&(this.elements[i].prepareFrame(this.renderedFrame-this.layers[i].st),this.elements[i]._mdf&&(this._mdf=!0))}},ne.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ne.prototype.setElements=function(t){this.elements=t},ne.prototype.getElements=function(){return this.elements},ne.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ne.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function Ai(t,e,i){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?ot(this.layers.length):[],this.initElement(t,e,i),this.tm=t.tm?H.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}W([yt,ne,wi],Ai),Ai.prototype.createComp=function(t){return new Ai(t,this.globalData,this)};function Cs(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=it("svg");var i="";if(e&&e.title){var s=it("title"),n=Mt();s.setAttribute("id",n),s.textContent=e.title,this.svgElement.appendChild(s),i+=n}if(e&&e.description){var a=it("desc"),h=Mt();a.setAttribute("id",h),a.textContent=e.description,this.svgElement.appendChild(a),i+=" "+h}i&&this.svgElement.setAttribute("aria-labelledby",i);var g=it("defs");this.svgElement.appendChild(g);var f=it("g");this.svgElement.appendChild(f),this.layerElement=f,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:g,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}return W([yt],Cs),Cs.prototype.createComp=function(t){return new Ai(t,this.globalData,this)},Xa("svg",Cs),ve.registerModifier("tm",Gt),ve.registerModifier("pb",ui),ve.registerModifier("rp",te),ve.registerModifier("rd",mi),ve.registerModifier("zz",vi),ve.registerModifier("op",yi),ct}))});var Pt="ecoflow-energy-card",Xt="ecoflow-house-card",ai="ecoflow_iot",fe="/ecoflow_iot";var is=globalThis,ss=is.ShadowRoot&&(is.ShadyCSS===void 0||is.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ts=Symbol(),Wr=new WeakMap,Ei=class{constructor(r,o,c){if(this._$cssResult$=!0,c!==Ts)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=o}get styleSheet(){let r=this.o,o=this.t;if(ss&&r===void 0){let c=o!==void 0&&o.length===1;c&&(r=Wr.get(o)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),c&&Wr.set(o,r))}return r}toString(){return this.cssText}},qr=k=>new Ei(typeof k=="string"?k:k+"",void 0,Ts),pe=(k,...r)=>{let o=k.length===1?k[0]:r.reduce((c,m,$)=>c+(F=>{if(F._$cssResult$===!0)return F.cssText;if(typeof F=="number")return F;throw Error("Value passed to 'css' function must be a 'css' function result: "+F+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(m)+k[$+1],k[0]);return new Ei(o,k,Ts)},Gr=(k,r)=>{if(ss)k.adoptedStyleSheets=r.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of r){let c=document.createElement("style"),m=is.litNonce;m!==void 0&&c.setAttribute("nonce",m),c.textContent=o.cssText,k.appendChild(c)}},Ms=ss?k=>k:k=>k instanceof CSSStyleSheet?(r=>{let o="";for(let c of r.cssRules)o+=c.cssText;return qr(o)})(k):k;var{is:Xn,defineProperty:Zn,getOwnPropertyDescriptor:Jn,getOwnPropertyNames:Qn,getOwnPropertySymbols:to,getPrototypeOf:eo}=Object,rs=globalThis,Yr=rs.trustedTypes,io=Yr?Yr.emptyScript:"",so=rs.reactiveElementPolyfillSupport,Pi=(k,r)=>k,Fs={toAttribute(k,r){switch(r){case Boolean:k=k?io:null;break;case Object:case Array:k=k==null?k:JSON.stringify(k)}return k},fromAttribute(k,r){let o=k;switch(r){case Boolean:o=k!==null;break;case Number:o=k===null?null:Number(k);break;case Object:case Array:try{o=JSON.parse(k)}catch{o=null}}return o}},Xr=(k,r)=>!Xn(k,r),Kr={attribute:!0,type:String,converter:Fs,reflect:!1,useDefault:!1,hasChanged:Xr};Symbol.metadata??=Symbol("metadata"),rs.litPropertyMetadata??=new WeakMap;var de=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,o=Kr){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(r,o),!o.noAccessor){let c=Symbol(),m=this.getPropertyDescriptor(r,c,o);m!==void 0&&Zn(this.prototype,r,m)}}static getPropertyDescriptor(r,o,c){let{get:m,set:$}=Jn(this.prototype,r)??{get(){return this[o]},set(F){this[o]=F}};return{get:m,set(F){let U=m?.call(this);$?.call(this,F),this.requestUpdate(r,U,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Kr}static _$Ei(){if(this.hasOwnProperty(Pi("elementProperties")))return;let r=eo(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Pi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pi("properties"))){let o=this.properties,c=[...Qn(o),...to(o)];for(let m of c)this.createProperty(m,o[m])}let r=this[Symbol.metadata];if(r!==null){let o=litPropertyMetadata.get(r);if(o!==void 0)for(let[c,m]of o)this.elementProperties.set(c,m)}this._$Eh=new Map;for(let[o,c]of this.elementProperties){let m=this._$Eu(o,c);m!==void 0&&this._$Eh.set(m,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){let o=[];if(Array.isArray(r)){let c=new Set(r.flat(1/0).reverse());for(let m of c)o.unshift(Ms(m))}else r!==void 0&&o.push(Ms(r));return o}static _$Eu(r,o){let c=o.attribute;return c===!1?void 0:typeof c=="string"?c:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){let r=new Map,o=this.constructor.elementProperties;for(let c of o.keys())this.hasOwnProperty(c)&&(r.set(c,this[c]),delete this[c]);r.size>0&&(this._$Ep=r)}createRenderRoot(){let r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gr(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,o,c){this._$AK(r,c)}_$ET(r,o){let c=this.constructor.elementProperties.get(r),m=this.constructor._$Eu(r,c);if(m!==void 0&&c.reflect===!0){let $=(c.converter?.toAttribute!==void 0?c.converter:Fs).toAttribute(o,c.type);this._$Em=r,$==null?this.removeAttribute(m):this.setAttribute(m,$),this._$Em=null}}_$AK(r,o){let c=this.constructor,m=c._$Eh.get(r);if(m!==void 0&&this._$Em!==m){let $=c.getPropertyOptions(m),F=typeof $.converter=="function"?{fromAttribute:$.converter}:$.converter?.fromAttribute!==void 0?$.converter:Fs;this._$Em=m;let U=F.fromAttribute(o,$.type);this[m]=U??this._$Ej?.get(m)??U,this._$Em=null}}requestUpdate(r,o,c,m=!1,$){if(r!==void 0){let F=this.constructor;if(m===!1&&($=this[r]),c??=F.getPropertyOptions(r),!((c.hasChanged??Xr)($,o)||c.useDefault&&c.reflect&&$===this._$Ej?.get(r)&&!this.hasAttribute(F._$Eu(r,c))))return;this.C(r,o,c)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,o,{useDefault:c,reflect:m,wrapped:$},F){c&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,F??o??this[r]),$!==!0||F!==void 0)||(this._$AL.has(r)||(this.hasUpdated||c||(o=void 0),this._$AL.set(r,o)),m===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[m,$]of this._$Ep)this[m]=$;this._$Ep=void 0}let c=this.constructor.elementProperties;if(c.size>0)for(let[m,$]of c){let{wrapped:F}=$,U=this[m];F!==!0||this._$AL.has(m)||U===void 0||this.C(m,void 0,$,U)}}let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),this._$EO?.forEach(c=>c.hostUpdate?.()),this.update(o)):this._$EM()}catch(c){throw r=!1,this._$EM(),c}r&&this._$AE(o)}willUpdate(r){}_$AE(r){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(o=>this._$ET(o,this[o])),this._$EM()}updated(r){}firstUpdated(r){}};de.elementStyles=[],de.shadowRootOptions={mode:"open"},de[Pi("elementProperties")]=new Map,de[Pi("finalized")]=new Map,so?.({ReactiveElement:de}),(rs.reactiveElementVersions??=[]).push("2.1.2");var Ds=globalThis,Zr=k=>k,as=Ds.trustedTypes,Jr=as?as.createPolicy("lit-html",{createHTML:k=>k}):void 0,ra="$lit$",Pe=`lit$${Math.random().toFixed(9).slice(2)}$`,aa="?"+Pe,ro=`<${aa}>`,We=document,Ci=()=>We.createComment(""),Ti=k=>k===null||typeof k!="object"&&typeof k!="function",Ns=Array.isArray,ao=k=>Ns(k)||typeof k?.[Symbol.iterator]=="function",Is=`[ 	
\f\r]`,$i=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qr=/-->/g,ta=/>/g,je=RegExp(`>|${Is}(?:([^\\s"'>=/]+)(${Is}*=${Is}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ea=/'/g,ia=/"/g,na=/^(?:script|style|textarea|title)$/i,Bs=k=>(r,...o)=>({_$litType$:k,strings:r,values:o}),V=Bs(1),Nt=Bs(2),Bo=Bs(3),qe=Symbol.for("lit-noChange"),_t=Symbol.for("lit-nothing"),sa=new WeakMap,He=We.createTreeWalker(We,129);function oa(k,r){if(!Ns(k)||!k.hasOwnProperty("raw"))throw Error("invalid template strings array");return Jr!==void 0?Jr.createHTML(r):r}var no=(k,r)=>{let o=k.length-1,c=[],m,$=r===2?"<svg>":r===3?"<math>":"",F=$i;for(let U=0;U<o;U++){let B=k[U],W,nt,X=-1,rt=0;for(;rt<B.length&&(F.lastIndex=rt,nt=F.exec(B),nt!==null);)rt=F.lastIndex,F===$i?nt[1]==="!--"?F=Qr:nt[1]!==void 0?F=ta:nt[2]!==void 0?(na.test(nt[2])&&(m=RegExp("</"+nt[2],"g")),F=je):nt[3]!==void 0&&(F=je):F===je?nt[0]===">"?(F=m??$i,X=-1):nt[1]===void 0?X=-2:(X=F.lastIndex-nt[2].length,W=nt[1],F=nt[3]===void 0?je:nt[3]==='"'?ia:ea):F===ia||F===ea?F=je:F===Qr||F===ta?F=$i:(F=je,m=void 0);let at=F===je&&k[U+1].startsWith("/>")?" ":"";$+=F===$i?B+ro:X>=0?(c.push(W),B.slice(0,X)+ra+B.slice(X)+Pe+at):B+Pe+(X===-2?U:at)}return[oa(k,$+(k[o]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),c]},Mi=class k{constructor({strings:r,_$litType$:o},c){let m;this.parts=[];let $=0,F=0,U=r.length-1,B=this.parts,[W,nt]=no(r,o);if(this.el=k.createElement(W,c),He.currentNode=this.el.content,o===2||o===3){let X=this.el.content.firstChild;X.replaceWith(...X.childNodes)}for(;(m=He.nextNode())!==null&&B.length<U;){if(m.nodeType===1){if(m.hasAttributes())for(let X of m.getAttributeNames())if(X.endsWith(ra)){let rt=nt[F++],at=m.getAttribute(X).split(Pe),ot=/([.?@])?(.*)/.exec(rt);B.push({type:1,index:$,name:ot[2],strings:at,ctor:ot[1]==="."?zs:ot[1]==="?"?Os:ot[1]==="@"?Rs:oi}),m.removeAttribute(X)}else X.startsWith(Pe)&&(B.push({type:6,index:$}),m.removeAttribute(X));if(na.test(m.tagName)){let X=m.textContent.split(Pe),rt=X.length-1;if(rt>0){m.textContent=as?as.emptyScript:"";for(let at=0;at<rt;at++)m.append(X[at],Ci()),He.nextNode(),B.push({type:2,index:++$});m.append(X[rt],Ci())}}}else if(m.nodeType===8)if(m.data===aa)B.push({type:2,index:$});else{let X=-1;for(;(X=m.data.indexOf(Pe,X+1))!==-1;)B.push({type:7,index:$}),X+=Pe.length-1}$++}}static createElement(r,o){let c=We.createElement("template");return c.innerHTML=r,c}};function ni(k,r,o=k,c){if(r===qe)return r;let m=c!==void 0?o._$Co?.[c]:o._$Cl,$=Ti(r)?void 0:r._$litDirective$;return m?.constructor!==$&&(m?._$AO?.(!1),$===void 0?m=void 0:(m=new $(k),m._$AT(k,o,c)),c!==void 0?(o._$Co??=[])[c]=m:o._$Cl=m),m!==void 0&&(r=ni(k,m._$AS(k,r.values),m,c)),r}var Ls=class{constructor(r,o){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){let{el:{content:o},parts:c}=this._$AD,m=(r?.creationScope??We).importNode(o,!0);He.currentNode=m;let $=He.nextNode(),F=0,U=0,B=c[0];for(;B!==void 0;){if(F===B.index){let W;B.type===2?W=new Fi($,$.nextSibling,this,r):B.type===1?W=new B.ctor($,B.name,B.strings,this,r):B.type===6&&(W=new Vs($,this,r)),this._$AV.push(W),B=c[++U]}F!==B?.index&&($=He.nextNode(),F++)}return He.currentNode=We,m}p(r){let o=0;for(let c of this._$AV)c!==void 0&&(c.strings!==void 0?(c._$AI(r,c,o),o+=c.strings.length-2):c._$AI(r[o])),o++}},Fi=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,o,c,m){this.type=2,this._$AH=_t,this._$AN=void 0,this._$AA=r,this._$AB=o,this._$AM=c,this.options=m,this._$Cv=m?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode,o=this._$AM;return o!==void 0&&r?.nodeType===11&&(r=o.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,o=this){r=ni(this,r,o),Ti(r)?r===_t||r==null||r===""?(this._$AH!==_t&&this._$AR(),this._$AH=_t):r!==this._$AH&&r!==qe&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):ao(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==_t&&Ti(this._$AH)?this._$AA.nextSibling.data=r:this.T(We.createTextNode(r)),this._$AH=r}$(r){let{values:o,_$litType$:c}=r,m=typeof c=="number"?this._$AC(r):(c.el===void 0&&(c.el=Mi.createElement(oa(c.h,c.h[0]),this.options)),c);if(this._$AH?._$AD===m)this._$AH.p(o);else{let $=new Ls(m,this),F=$.u(this.options);$.p(o),this.T(F),this._$AH=$}}_$AC(r){let o=sa.get(r.strings);return o===void 0&&sa.set(r.strings,o=new Mi(r)),o}k(r){Ns(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,c,m=0;for(let $ of r)m===o.length?o.push(c=new k(this.O(Ci()),this.O(Ci()),this,this.options)):c=o[m],c._$AI($),m++;m<o.length&&(this._$AR(c&&c._$AB.nextSibling,m),o.length=m)}_$AR(r=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);r!==this._$AB;){let c=Zr(r).nextSibling;Zr(r).remove(),r=c}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}},oi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,o,c,m,$){this.type=1,this._$AH=_t,this._$AN=void 0,this.element=r,this.name=o,this._$AM=m,this.options=$,c.length>2||c[0]!==""||c[1]!==""?(this._$AH=Array(c.length-1).fill(new String),this.strings=c):this._$AH=_t}_$AI(r,o=this,c,m){let $=this.strings,F=!1;if($===void 0)r=ni(this,r,o,0),F=!Ti(r)||r!==this._$AH&&r!==qe,F&&(this._$AH=r);else{let U=r,B,W;for(r=$[0],B=0;B<$.length-1;B++)W=ni(this,U[c+B],o,B),W===qe&&(W=this._$AH[B]),F||=!Ti(W)||W!==this._$AH[B],W===_t?r=_t:r!==_t&&(r+=(W??"")+$[B+1]),this._$AH[B]=W}F&&!m&&this.j(r)}j(r){r===_t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}},zs=class extends oi{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===_t?void 0:r}},Os=class extends oi{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==_t)}},Rs=class extends oi{constructor(r,o,c,m,$){super(r,o,c,m,$),this.type=5}_$AI(r,o=this){if((r=ni(this,r,o,0)??_t)===qe)return;let c=this._$AH,m=r===_t&&c!==_t||r.capture!==c.capture||r.once!==c.once||r.passive!==c.passive,$=r!==_t&&(c===_t||m);m&&this.element.removeEventListener(this.name,this,c),$&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}},Vs=class{constructor(r,o,c){this.element=r,this.type=6,this._$AN=void 0,this._$AM=o,this.options=c}get _$AU(){return this._$AM._$AU}_$AI(r){ni(this,r)}};var oo=Ds.litHtmlPolyfillSupport;oo?.(Mi,Fi),(Ds.litHtmlVersions??=[]).push("3.3.3");var la=(k,r,o)=>{let c=o?.renderBefore??r,m=c._$litPart$;if(m===void 0){let $=o?.renderBefore??null;c._$litPart$=m=new Fi(r.insertBefore(Ci(),$),$,void 0,o??{})}return m._$AI(k),m};var Us=globalThis,Ot=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=la(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qe}};Ot._$litElement$=!0,Ot.finalized=!0,Us.litElementHydrateSupport?.({LitElement:Ot});var lo=Us.litElementPolyfillSupport;lo?.({LitElement:Ot});(Us.litElementVersions??=[]).push("4.2.2");var ns=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function li(k){return ns.some(r=>r.key===k)?`${fe}/devices/${k}.png`:null}function Ge(k){return typeof k=="string"&&k.startsWith(fe)&&k.endsWith(".png")?`${k.slice(0,-4)}.webp`:null}function ha(k){let r=ho(k);return r?li(r):null}function ho(k){if(!k)return null;let r=ns.find(o=>o.match&&o.match.test(k));return r?r.key:null}var co={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","sys_load","sys_grid_power","load_from_pv","load_from_grid","load_from_bat","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power","soh","bat_temp","chg_rem_time","dsg_rem_time","full_energy","cycles","calendar_soh"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function fo(k){return Object.values(k.entities||{}).filter(r=>r.platform===ai)}function po(k){if(k.translation_key)return k.translation_key;let r=k.entity_id.split(".")[1],o=r.lastIndexOf("_");return o>=0?r.slice(o+1):r}function $e(k){let r=new Map;for(let c of fo(k))c.device_id&&(r.has(c.device_id)||r.set(c.device_id,[]),r.get(c.device_id).push(c));let o=[];for(let[c,m]of r)m.some($=>po($)==="pv_total")&&o.push({deviceId:c,device:k.devices?.[c],ents:m});return o}function Ce(k,r){let o={};for(let c of r){let[m]=c.entity_id.split("."),$=c.translation_key;$&&(co[m]||[]).includes($)&&(o[`${m}.${$}`]=c.entity_id)}if(!o["sensor.cms_batt_soc"])for(let c of r){if(!c.entity_id.startsWith("sensor."))continue;let m=k.states?.[c.entity_id];if(m?.attributes?.device_class==="battery"&&m?.attributes?.unit_of_measurement==="%"){o["sensor.cms_batt_soc"]=c.entity_id;break}}return o}async function js(k){if(!k?.callWS)return{};try{return await k.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function ca(k){let r=await js(k),o=Object.keys(r);if(!o.length)return[];let c=[];try{c=await k.callWS({type:"config_entries/get"})||[]}catch{c=[]}let m=new Map(c.map($=>[$.entry_id,$]));return o.map($=>({id:$,title:m.get($)?.title||m.get($)?.domain||$,domain:m.get($)?.domain||""}))}function fa(k,r){let o=r===void 0?Object.keys(k||{}):r,c={};for(let m of o){let $=k?.[m]?.wh_hours;if($)for(let[F,U]of Object.entries($)){let B=Number(U);Number.isFinite(B)&&(c[F]=(c[F]||0)+B)}}return c}function Hs(k,r=new Date){let o=r.getFullYear(),c=r.getMonth(),m=r.getDate(),$={};for(let[F,U]of Object.entries(k||{})){let B=new Date(F);Number.isNaN(B.getTime())||B.getFullYear()===o&&B.getMonth()===c&&B.getDate()===m&&($[B.getHours()]=($[B.getHours()]||0)+U)}return $}function Ws(k,r=new Date){let o=Hs(k,r),c=Object.keys(o);return c.length?c.reduce((m,$)=>m+o[$],0):null}async function pa(k,r,o,c){if(!k?.callWS||!r)return null;let m=new Date,F={type:"recorder/statistics_during_period",start_time:(o instanceof Date?o:new Date(m.getFullYear(),m.getMonth(),m.getDate())).toISOString(),statistic_ids:[r],period:"hour",types:["change"]};c instanceof Date&&(F.end_time=c.toISOString());try{let B=(await k.callWS(F))?.[r];if(!Array.isArray(B))return null;let W={};for(let nt of B){let X=new Date(nt.start),rt=Number(nt.change);Number.isNaN(X.getTime())||!Number.isFinite(rt)||(W[X.getHours()]=(W[X.getHours()]||0)+rt)}return W}catch{return null}}function $t(k){return typeof k=="string"&&/\{[{%]/.test(k)}function Bt(k){return typeof k=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(k)}function pt(k){let r=Number(k?.state);return Number.isFinite(r)?r:null}function ue(k){return k==null||!Number.isFinite(k)?null:Math.abs(k)>=1e3?`${(k/1e3).toFixed(2)} kW`:`${Math.round(k)} W`}function Ye(k){return k==null||!Number.isFinite(k)?{n:"\u2013",u:"W"}:Math.abs(k)>=1e3?{n:(k/1e3).toFixed(2),u:"kW"}:{n:String(Math.round(k)),u:"W"}}function da(k){return{n:k!=null&&Number.isFinite(k)?k.toFixed(1):"\u2013",u:"kWh"}}function qs(k,r=1){return k==null||!Number.isFinite(k)?null:Math.abs(k)>=1e3?`${(k/1e3).toFixed(r)} kWh`:`${Math.round(k)} Wh`}function ua(k){if(k==null||!Number.isFinite(k))return null;let r=Math.round(k);if(r<60)return`${r} min`;let o=Math.floor(r/60);if(o<24){let $=r%60;return $?`${o} h ${$} min`:`${o} h`}let c=Math.floor(o/24),m=o%24;return m?`${c} d ${m} h`:`${c} d`}var ma=!1;async function Te(){if(!ma){ma=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var ga={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off",confirm_action:"Are you sure?"},house:{home:"Home",grid:"Grid",from_grid:"From grid",to_grid:"To grid",idle:"Idle",mode:{auto:"Automatic",day:"Day",night:"Night"},toggle:{show_flows:"Animate energy flows",show_grid:"Show grid power",show_solar:"Show solar power",show_home:"Show home consumption",show_battery:"Show battery"},editor:{style:"House style",style_n:"House {n}",mode:"Day / night",battery:"Battery",custom:"Custom house image",custom_label:"Upload an image",custom_remove:"Remove custom image",uploading:"Uploading\u2026",custom_hint:"Upload your own house render to use instead of the built-in styles. For a perfect fit, match the built-in 2340\xD71680 layout \u2014 download the full set below to trace over.",download_zip:"Download all house images (.zip)",preparing:"Preparing download\u2026",entities:"Entities",entities_hint:"Override the auto-detected sensors that drive the scene. Leave empty to use the integration's defaults."},battery:{re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + gateway",re305_or_re306_battery:"Stream Ultra",re305_or_re306_device:"Stream Ultra + inverter",re305_device:"Stream Ultra + battery",re306_device:"Stream Ultra (single)",re306_dpu_battery:"Stream Ultra (stacked)",po_space_re305_battery:"Battery stack",po_space_battery:"Battery + inverter",po_space_battery_system_battery:"Single battery",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Battery (JT303)",jt321_space_battery:"Battery (JT321)",dc303_space_battery:"Battery (DC303)"}},battery:{title:"Battery",idle:"Idle",health:"Health",calendar_health:"Calendar health",temperature:"Temperature",time_to_full:"Time to full",time_to_empty:"Time to empty",capacity:"Capacity",cycles:"Cycles"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today.",stats_default:"Default (Solar, Grid)",stats_count:"{n} tiles",stats_default_hint:"The card shows live Solar and Grid power. Customize to show any entities you like instead, each with its own tap action.",stats_customize:"Customize tiles",stats_hint:"Add the entities to show as stat tiles. Set a name and icon, and choose what happens on tap (more-info by default).",stats_add:"Add tile",stats_reset:"Reset to default",stats_remove:"Remove",stats_move_up:"Move up",stats_move_down:"Move down",stat_n:"Tile {n}",stat_field_entity:"Entity",stat_field_name:"Name",stat_field_icon:"Icon",stat_field_tap_action:"Tap action"},page:{appearance:"Appearance",entities:"Entities",stats:"Stat tiles",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",sys_grid_power:"Grid power (whole system)",sys_load:"Home consumption",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}}};var va={card:{no_device:"Kein EcoFlow Stream-Ger\xE4t gefunden. Richten Sie zuerst die EcoFlow IoT-Integration ein.",device:"EcoFlow Stream",solar:"Solar",grid:"Netz",grid_import:"Bezug",grid_export:"Einspeisung",grid_idle:"Netz inaktiv",battery:"Batterie",charging:"L\xE4dt",discharging:"Entl\xE4dt",today:"Solar heute",produced:"erzeugt",forecast:"Prognose",of_forecast:"{pct}% der Prognose",exceeded:"Prognose erreicht",reserve:"Reserve",charge_limit:"Laden \u2264",discharge_limit:"Entladen \u2265",ac1:"AC 1",ac2:"AC 2",off:"Aus",confirm_action:"Sind Sie sicher?"},house:{home:"Hausnetz",grid:"Netz",from_grid:"Vom Netz",to_grid:"Ins Netz",idle:"Bereit",mode:{auto:"Automatisch",day:"Tag",night:"Nacht"},toggle:{show_flows:"Energiefl\xFCsse animieren",show_grid:"Netzleistung anzeigen",show_solar:"Solarleistung anzeigen",show_home:"Hausverbrauch anzeigen",show_battery:"Batterie anzeigen"},editor:{style:"Haus-Stil",style_n:"Haus {n}",mode:"Tag / Nacht",battery:"Batterie",custom:"Eigenes Hausbild",custom_label:"Bild hochladen",custom_remove:"Eigenes Bild entfernen",uploading:"Wird hochgeladen \u2026",custom_hint:"Lade dein eigenes Haus-Render hoch, um es statt der mitgelieferten Stile zu verwenden. F\xFCr eine perfekte Passung das mitgelieferte Format 2340\xD71680 \xFCbernehmen \u2013 lade unten den kompletten Satz zum Nachzeichnen herunter.",download_zip:"Alle Hausbilder herunterladen (.zip)",preparing:"Download wird vorbereitet \u2026",entities:"Entit\xE4ten",entities_hint:"\xDCberschreiben Sie die automatisch erkannten Sensoren, die die Darstellung steuern. Leer lassen, um die Standardwerte der Integration zu verwenden."},battery:{re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + Gateway",re305_or_re306_battery:"Stream Ultra",re305_or_re306_device:"Stream Ultra + Wechselrichter",re305_device:"Stream Ultra + Batterie",re306_device:"Stream Ultra (einzeln)",re306_dpu_battery:"Stream Ultra (gestapelt)",po_space_re305_battery:"Batteriestapel",po_space_battery:"Batterie + Wechselrichter",po_space_battery_system_battery:"Einzelbatterie",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Batterie (JT303)",jt321_space_battery:"Batterie (JT321)",dc303_space_battery:"Batterie (DC303)"}},battery:{title:"Batterie",idle:"Inaktiv",health:"Zustand",calendar_health:"Kalenderzustand",temperature:"Temperatur",time_to_full:"Zeit bis voll",time_to_empty:"Zeit bis leer",capacity:"Kapazit\xE4t",cycles:"Zyklen"},confirm:{title:"Steckdose ausschalten?",ac_off:"{name} ausschalten? Alles, was daran angeschlossen ist, verliert die Stromversorgung.",cancel:"Abbrechen",turn_off:"Ausschalten"},panels:{title:"Solarmodule",panel:"Modul {n}",total:"Gesamt",none:"F\xFCr dieses Ger\xE4t sind keine Daten je Solarmodul verf\xFCgbar."},editor:{device:"EcoFlow-Ger\xE4t",automatic:"Automatisch",image:"Ger\xE4tebild",entity:"Entit\xE4t",value_template:"Wert / Vorlage",mode_auto:"Auto",mode_entity:"Entit\xE4t",mode_custom:"Benutzerdefiniert",auto_value:"Automatisch erkannt: {value}",not_found:"nicht gefunden",overridden:"{n} \xFCberschrieben",shown:"Angezeigt",nothing_shown:"Nichts angezeigt",panel:"Modul {n}",panel_name:"Modulname",panel_entity:"Leistungssensor",panel_hidden:"Auf der Karte ausgeblendet.",panels_hint:"Benennen Sie ein Modul um, weisen Sie ihm einen anderen Sensor zu oder blenden Sie es aus der Aufschl\xFCsselung aus. Mit dem Schalter zeigen oder verbergen Sie jedes Modul.",panels_count:"{n} Module",panels_hidden:"{n} ausgeblendet",loading:"L\xE4dt\u2026",forecast_hint:"W\xE4hlen Sie, welche Solarprognose-Anbieter verwendet werden \u2014 dieselben, die im Energie-Dashboard von Home Assistant eingerichtet sind (Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule).",forecast_none:"Keine Solarprognose konfiguriert. F\xFCgen Sie unter Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule eine Prognose hinzu, dann erscheint sie hier.",forecast_none_short:"Nicht konfiguriert",forecast_selected:"{n} von {total} Anbietern",none:"Nicht festgelegt",collection_key:"Energie-Sammlungsschl\xFCssel",collection_hint:"Optional. Um einem in einer Energie-Zeitraumauswahl-Karte gew\xE4hlten Datum zu folgen (Energie-Datumsauswahl), geben Sie hier denselben Sammlungsschl\xFCssel ein wie auf jener Karte \u2014 er beginnt mit \u201Eenergy_\u201C; verwenden Sie \u201Eenergy\u201C f\xFCr eine Auswahl, die auf ihrem Standardschl\xFCssel belassen wurde. Leer lassen, um immer heute anzuzeigen.",stats_default:"Standard (Solar, Netz)",stats_count:"{n} Kacheln",stats_default_hint:"Die Karte zeigt die aktuelle Solar- und Netzleistung. Passen Sie sie an, um stattdessen beliebige Entit\xE4ten anzuzeigen \u2014 jede mit eigener Tipp-Aktion.",stats_customize:"Kacheln anpassen",stats_hint:"F\xFCgen Sie die Entit\xE4ten hinzu, die als Kacheln angezeigt werden sollen. Legen Sie Name und Symbol fest und w\xE4hlen Sie, was beim Tippen passiert (standardm\xE4\xDFig Info-Dialog).",stats_add:"Kachel hinzuf\xFCgen",stats_reset:"Auf Standard zur\xFCcksetzen",stats_remove:"Entfernen",stats_move_up:"Nach oben",stats_move_down:"Nach unten",stat_n:"Kachel {n}",stat_field_entity:"Entit\xE4t",stat_field_name:"Name",stat_field_icon:"Symbol",stat_field_tap_action:"Tipp-Aktion"},page:{appearance:"Darstellung",entities:"Entit\xE4ten",stats:"Kacheln",panels:"Solarmodule",forecast:"Solarprognose",advanced:"Erweitert"},toggle:{show_image:"Ger\xE4tebild anzeigen",show_today:"Heutige Erzeugung anzeigen",show_grid:"Netzleistung anzeigen",show_ac:"AC-Steckdosen anzeigen",show_panels:"F\xFCr Aufschl\xFCsselung je Modul auf Solarleistung tippen",show_forecast:"Heutige Erzeugung mit der Prognose vergleichen"},short:{show_image:"Bild",show_today:"Heute",show_grid:"Netz",show_ac:"AC-Steckdosen",show_panels:"Module",show_forecast:"Prognose"},slot:{sensor:{cms_batt_soc:"Batteriestand",bat_power:"Batterieleistung (Lade-/Entladegeschwindigkeit)",pv_total:"Solarleistung",grid_power:"Netzleistung",sys_grid_power:"Netzleistung (Gesamtsystem)",sys_load:"Hausverbrauch",solar_energy:"Solarenergie (Quelle f\xFCr Tagessumme)",pv1_power:"Solarmodul 1",pv2_power:"Solarmodul 2",pv3_power:"Solarmodul 3",pv4_power:"Solarmodul 4",schuko1_power:"AC-Steckdose 1 Leistung",schuko2_power:"AC-Steckdose 2 Leistung",forecast_today:"Prognose-Entit\xE4t (erwartete Erzeugung heute)"},number:{max_charge_soc:"Ladelimit",min_discharge_soc:"Entladelimit",backup_reserve:"Notstromreserve"},switch:{ac1:"AC-Steckdose 1",ac2:"AC-Steckdose 2"}}};var Gs={en:ga,de:va};function go(k){return(k?.locale?.language||k?.language||"en").split("-")[0]}function ya(k,r){let o=r.split(".").reduce((c,m)=>c?.[m],k);return typeof o=="string"?o:void 0}function Wt(k,r,o={}){let c=Gs[go(k)]||Gs.en,m=ya(c,r)??ya(Gs.en,r)??r;for(let[$,F]of Object.entries(o))m=m.replace(`{${$}}`,F);return m}var _a=pe`
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
`;function Ys(k){let r=[];for(let o=1;o<=4;o++){let c=k._config.panels?.[o]||{};if(c.hidden)continue;let m=`sensor.pv${o}_power`,$=k._state(m);$&&r.push({i:o,watts:pt($),id:k._entityId(m),name:c.name||null})}return r}function ba(k){let r=($,F)=>Wt(k.hass,$,F),o=Ys(k);if(!o.length)return V`<div class="empty">${r("panels.none")}</div>`;let c=Math.max(1,...o.map($=>$.watts||0)),m=o.reduce(($,F)=>$+(F.watts||0),0);return V`<div class="panels">
    ${o.map($=>V`<div
        class="panel-row clickable"
        @click=${()=>k._moreInfoId($.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${$.name||r("panels.panel",{n:$.i})}
          </span>
          <span class="panel-val">${ue($.watts)??"\u2013"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,($.watts||0)/c*100)}%"
          ></div>
        </div>
      </div>`)}
    <div class="panel-total">
      <span>${r("panels.total")}</span>
      <span>${ue(m)??"\u2013"}</span>
    </div>
  </div>`}var os=1e3,Ks=340,kt={l:46,r:14,t:16,b:28};function xa(k,{actual:r,forecast:o,totalWh:c,forecastWh:m,currentHour:$,showForecast:F,title:U}){let B=(Z,bt)=>Wt(k.hass,Z,bt),W=os-kt.l-kt.r,nt=Ks-kt.t-kt.b,X=W/24,rt=Z=>kt.l+Z/24*W,at=0;for(let Z=0;Z<24;Z++)at=Math.max(at,(r[Z]||0)/1e3),F&&(at=Math.max(at,(o[Z]||0)/1e3));let ot=vo(at>0?at:.1),se=Z=>kt.t+nt-Z/ot*nt,Vt=X*.66,qt=[];for(let Z=0;Z<24;Z++){let bt=(r[Z]||0)/1e3;if(bt<=0)continue;let ge=rt(Z+.5)-Vt/2,Ie=se(bt),Le=Z===$?"fc-actual fc-current":"fc-actual";qt.push(Nt`<rect class=${Le} x=${ge.toFixed(1)} y=${Ie.toFixed(1)}
        width=${Vt.toFixed(1)} height=${(kt.t+nt-Ie).toFixed(1)} rx="2"></rect>`)}let Zt=null;if(F){let Z=[];for(let bt=0;bt<=24;bt++)Z.push(`${rt(bt).toFixed(1)},${se((o[bt]||0)/1e3).toFixed(1)}`);Zt=Nt`<polyline class="fc-line" points=${Z.join(" ")}></polyline>`}let Ut=[],Oi=4;for(let Z=0;Z<=Oi;Z++){let bt=ot/Oi*Z,ge=se(bt);Ut.push(Nt`<line class="fc-grid" x1=${kt.l} y1=${ge.toFixed(1)} x2=${os-kt.r} y2=${ge.toFixed(1)}></line>`),Ut.push(Nt`<text class="fc-axis fc-axis-y" x=${kt.l-6} y=${(ge+4).toFixed(1)}>${yo(bt)}</text>`)}let hi=[];for(let Z=0;Z<=24;Z+=4)hi.push(Nt`<text class="fc-axis fc-axis-x" x=${rt(Z).toFixed(1)} y=${Ks-8}>${Z}:00</text>`);let Ct=F&&m>0&&c!=null?Math.round(c/m*100):null,Ke=Z=>{k._fcTip!==Z&&(k._fcTip=Z,k.requestUpdate())},Jt=()=>{k._fcTip!=null&&(k._fcTip=null,k.requestUpdate())},us=[];for(let Z=0;Z<24;Z++)us.push(Nt`<rect class="fc-hit" x=${rt(Z).toFixed(1)} y=${kt.t} width=${X.toFixed(1)} height=${nt}
        @pointerenter=${()=>Ke(Z)} @pointermove=${()=>Ke(Z)}
        @pointerdown=${()=>Ke(Z)}></rect>`);let Fe=k._fcTip,Xe=Fe!=null&&Fe>=0&&Fe<24,Js=Xe?Nt`<rect class="fc-band" x=${rt(Fe).toFixed(1)} y=${kt.t} width=${X.toFixed(1)} height=${nt}></rect>`:null,Ri=Xe?dt(Fe):null;function dt(Z){let bt=((r[Z]||0)/1e3).toFixed(2),ge=((o[Z]||0)/1e3).toFixed(2),Ie=184,Le=F?84:60,ze=rt(Z+.5)-Ie/2;ze=Math.max(kt.l,Math.min(os-kt.r-Ie,ze));let Oe=kt.t+6,Ze=ze+12;return Nt`<g class="fc-tip" pointer-events="none">
      <rect class="fc-tip-box" x=${ze.toFixed(1)} y=${Oe} width=${Ie} height=${Le} rx="7"></rect>
      <text class="fc-tip-time" x=${Ze} y=${Oe+24}>${wa(Z)}:00 – ${wa((Z+1)%24)}:00</text>
      <text class="fc-tip-line" x=${Ze} y=${Oe+46}>${B("card.produced")}: <tspan class="v">${bt} kWh</tspan></text>
      ${F?Nt`<text class="fc-tip-line" x=${Ze} y=${Oe+68}>${B("card.forecast")}: <tspan class="v">${ge} kWh</tspan></text>`:null}
    </g>`}return V`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${U||B("card.today")}</span>
      <span class="fc-graph-total"
        >${(c!=null?c/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    ${Ct!=null?V`<div class="fc-progress" title=${B("card.of_forecast",{pct:Ct})}>
          <div class="fc-progress-track">
            <div
              class="fc-progress-fill"
              style="width:${Math.min(100,Ct)}%"
            ></div>
          </div>
          <span class="fc-progress-label">${B("card.of_forecast",{pct:Ct})}</span>
        </div>`:""}
    <svg
      class="chart"
      viewBox="0 0 ${os} ${Ks}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      @pointerleave=${Jt}
      @pointercancel=${Jt}
    >
      ${Ut}${hi}
      <text class="fc-axis fc-unit" x=${kt.l-6} y=${kt.t-4}>kWh</text>
      ${Js}${qt}${Zt}${us}${Ri}
    </svg>
    ${F?V`<div class="fc-graph-legend">
          <span class="lg lg-actual">${B("card.produced")}</span>
          <span class="lg lg-fc">${B("card.forecast")}</span>
        </div>`:""}
  </div>`}function vo(k){let r=Math.pow(10,Math.floor(Math.log10(k))),o=k/r;return(o<=1?1:o<=2?2:o<=5?5:10)*r}function yo(k){return k>=10?Math.round(k).toString():k.toFixed(1).replace(/\.0$/,"")}function wa(k){return String(k).padStart(2,"0")}var _o=300*1e3,ls=class extends Ot{static styles=_a;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._battDir="",this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),Te(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},_o)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let r of Object.values(this._tmplUnsub||{}))typeof r=="function"&&r();this._tmplUnsub={}}setConfig(r){this._config=r||{}}static getConfigElement(){return document.createElement(`${Pt}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(r,o){return Wt(this.hass,r,o)}_show(r,o=!0){return this._config[r]??o}get _device(){let r=$e(this.hass);return r.length?this._config.device&&r.find(o=>o.deviceId===this._config.device)||r[0]:null}_state(r){let o=this._config.entities?.[r];if(o){if($t(o)){let m=this._templateResults?.[o];return{state:m===void 0?"unknown":String(m),attributes:{}}}return Bt(o)?this.hass.states[o]:{state:o,attributes:{}}}let c=this._map?.[r];return c?this.hass.states[c]:void 0}_entityId(r){let o=this._config.entities?.[r];return o&&Bt(o)&&!$t(o)?o:this._map?.[r]}updated(r){super.updated(r),(r.has("hass")||r.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let r=this._entityId("sensor.solar_energy");if(!r||!this.hass)return;let{start:o,end:c}=this._dataRange(),m=await pa(this.hass,r,o,c);this._hourly=m||{},this._todayWh=m?Object.values(m).reduce(($,F)=>$+(F||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await js(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let r=new Date;return{start:new Date(r.getFullYear(),r.getMonth(),r.getDate()),end:r,ref:r}}_bindEnergyCollection(){let r=this._config.collection_key,o=r?`_${r}`:null;if(o!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=o,this._period=null),!o||this._collUnsub||!this.hass?.connection)return;let c=this.hass.connection[o];if(!c||typeof c.subscribe!="function")return;let m=()=>{this._period={start:c.start,end:c.end},this._refreshData()};this._collUnsub=c.subscribe(()=>m()),m()}_mergedForecast(){return fa(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let r=Ws(this._mergedForecast(),this._dataRange().ref);return r!=null?r/1e3:null}_isToday(){let r=this._dataRange().ref,o=new Date;return r.getFullYear()===o.getFullYear()&&r.getMonth()===o.getMonth()&&r.getDate()===o.getDate()}_periodLabel(){return this._isToday()?this._t("card.today"):this._dataRange().ref.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let r=[...Object.values(this._config.entities||{}),this._config.title].filter(o=>$t(o));for(let o of r)if(!this._tmplUnsub[o]){this._tmplUnsub[o]=!0;try{this._tmplUnsub[o]=await this.hass.connection.subscribeMessage(c=>{this._templateResults[o]=c.result,this.requestUpdate()},{type:"render_template",template:o})}catch{this._templateResults[o]="error",this.requestUpdate()}}for(let o of Object.keys(this._tmplUnsub))if(!r.includes(o)){let c=this._tmplUnsub[o];typeof c=="function"&&c(),delete this._tmplUnsub[o],delete this._templateResults[o]}}_moreInfo(r){this._moreInfoId(this._entityId(r))}_moreInfoId(r){r&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:r},bubbles:!0,composed:!0}))}render(){if(!this.hass)return V``;let r=this._device;return r?(this._map=Ce(this.hass,r.ents),this._isToday()?V`<ha-card>
      ${this._renderHead(r)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),ba(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),this._forecastGraph(),"large"):""}
      ${this._dialog==="battery"?this._dialogFrame(this._t("battery.title"),this._renderBatteryDetail()):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`:V`<ha-card>${this._forecastGraph()}</ha-card>`):V`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(r,o,c="medium"){return V`<ha-adaptive-dialog
      open
      width=${c}
      header-title=${r}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${o}</div>
    </ha-adaptive-dialog>`}_imageSrc(r){let o=r?.device?.model;return this._config.image_url||(this._config.image?li(this._config.image):ha(o))}_renderHead(r){let o=this._config.title,c=o&&$t(o)?String(this._templateResults?.[o]??""):o,m=r.device?.model,$=c||r.device?.name_by_user||r.device?.name||m||this._t("card.device"),F=this._imageSrc(r);return V`<div class="head">
      <div class="head-left">
        <div class="name">${$}</div>
        ${m&&m!==$?V`<div class="subtitle">${m}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle(F,$)}
    </div>`}_renderBatteryCircle(r,o){let c=this._state("sensor.cms_batt_soc"),m=this._show("show_image")&&r;if(!c&&!m)return"";let $=pt(c),F=pt(this._state("sensor.bat_power")),U=this._state("binary_sensor.battery_charging")?.state==="on"||F!=null&&F>1,B=!U&&F!=null&&F<-1,W=U?"charge":B?"discharge":$!=null&&$<=15?"low":"",nt=U?"charge":B?"discharge":"";nt&&(this._battDir=nt);let X=nt||this._battDir,rt=!!nt,at=2*Math.PI*44,ot=$!=null?Math.max(0,Math.min(100,$)):0,se=[{v:pt(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:pt(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:pt(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(Vt=>Vt.v!=null);return V`<div
      class="batt-circle clickable ${nt}"
      @click=${()=>this._dialog="battery"}
    >
      ${c?V`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${W}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${at.toFixed(1)};stroke-dashoffset:${(at*(1-ot/100)).toFixed(1)}"
            ></circle>
            ${X?Nt`<circle
                  class="ring-spin ${X} ${rt?"show":""}"
                  cx="50"
                  cy="50"
                  r="44"
                  stroke-dasharray="16 261"
                ></circle>`:""}
            ${se.map(Vt=>{let qt=Math.max(0,Math.min(100,Vt.v))/100*2*Math.PI,Zt=Math.sin(qt),Ut=Math.cos(qt);return Nt`<line
                class="ring-tick ${Vt.cls}"
                x1=${(50+39.5*Zt).toFixed(1)}
                y1=${(50-39.5*Ut).toFixed(1)}
                x2=${(50+48.5*Zt).toFixed(1)}
                y2=${(50-48.5*Ut).toFixed(1)}
              ><title>${Vt.label} ${Math.round(Vt.v)}%</title></line>`})}
          </svg>`:""}
      ${c&&X?V`<div class="batt-particles ${X} ${rt?"show":""}">
            ${Array.from({length:12},(Vt,qt)=>{let Zt=qt*30,Ut=qt*5%12/12*1.6;return V`<span
                class="particle"
                style="--angle:${Zt}deg;animation-delay:${Ut.toFixed(2)}s"
              ></span>`})}
          </div>`:""}
      ${m?V`<picture
            >${Ge(r)?V`<source
                  srcset=${Ge(r)}
                  type="image/webp"
                />`:""}<img class="device-img" src="${r}" alt="${o}"
          /></picture>`:c?V`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${c}
            ></ha-state-icon>`:V`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${c&&(U||B)&&F!=null?V`<span class="batt-speed ${nt}">
            <ha-icon
              icon=${U?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${ue(Math.abs(F))}
          </span>`:""}
      ${c?V`<span class="batt-badge"
            >${$!=null?Math.round($):"\u2013"}%</span
          >`:""}
    </div>`}_renderBatteryDetail(){let r=this._device,o=this._show("show_image")&&this._imageSrc(r),c=r?.device?.name||r?.device?.model||this._t("card.device"),m=pt(this._state("sensor.cms_batt_soc")),$=pt(this._state("sensor.bat_power")),F=this._state("binary_sensor.battery_charging")?.state==="on"||$!=null&&$>1,U=!F&&$!=null&&$<-1,B=F?"charge":U?"discharge":"",W=F?"mdi:flash":U?"mdi:battery-arrow-down":"mdi:battery",nt=F?this._t("card.charging"):U?this._t("card.discharging"):this._t("battery.idle"),X=(F||U)&&$!=null?ue(Math.abs($)):null,rt=[{slot:"sensor.soh",icon:"mdi:heart-pulse",label:this._t("battery.health")},{slot:"sensor.calendar_soh",icon:"mdi:calendar-heart",label:this._t("battery.calendar_health")},{slot:"sensor.bat_temp",icon:"mdi:thermometer",label:this._t("battery.temperature")},...F?[{slot:"sensor.chg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_full")}]:[],...U?[{slot:"sensor.dsg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_empty")}]:[],{slot:"sensor.full_energy",icon:"mdi:battery-high",label:this._t("battery.capacity")},{slot:"sensor.cycles",icon:"mdi:battery-sync",label:this._t("battery.cycles")}].map(at=>({...at,value:this._battTileValue(at.slot)})).filter(at=>at.value!=null);return V`<div class="batt-detail">
      <div class="batt-hero">
        ${o?V`<picture
              >${Ge(o)?V`<source srcset=${Ge(o)} type="image/webp" />`:""}<img class="batt-hero-img" src=${o} alt=${c}
            /></picture>`:V`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${m!=null?Math.round(m):"\u2013"}<span class="batt-hero-u">%</span></span
          >
          <span class="batt-hero-status ${B}">
            <ha-icon icon=${W}></ha-icon>${nt}${X?` \xB7 ${X}`:""}
          </span>
        </div>
      </div>
      ${rt.length?V`<div class="batt-grid">
            ${rt.map(at=>{let ot=this._entityId(at.slot);return V`<div
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
    </div>`}_battTileValue(r){let o=this._state(r),c=pt(o);if(c==null)return null;let m=o.attributes?.unit_of_measurement||"";return m==="W"?ue(c):m==="Wh"?qs(c):m==="kWh"?qs(c*1e3):m==="min"?ua(c):m==="%"?`${Math.round(c)}%`:m?`${Math.round(c)} ${m}`:String(Math.round(c))}_renderAc(){let r=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(o=>({...o,swState:this._state(o.sw),pwState:this._state(o.pw)})).filter(o=>o.swState||o.pwState);return r.length?V`<div class="ac">
      ${r.map(o=>{let c=o.swState?.state==="on",m=pt(o.pwState);return V`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(o.pw)||this._entityId(o.sw))}
        >
          <ha-icon class="ac-icon ${c?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${o.label}</span>
            <span class="ac-power">
              ${o.swState&&!c?this._t("card.off"):m!=null?this._metric(Ye(m)):o.pwState?"\u2014":""}
            </span>
          </div>
          ${o.swState?V`<ha-switch
                .checked=${c}
                @click=${$=>$.stopPropagation()}
                @change=${()=>this._toggleSwitch(o.sw,o.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(r,o){let c=this._entityId(r),m=c?this.hass.states[c]:null;!c||!m||(m.state==="on"?this._confirmAc={slot:r,label:o}:this.hass.callService("switch","turn_on",{entity_id:c}))}_renderConfirmAc(){let{label:r}=this._confirmAc,o=()=>this._confirmAc=null;return V`<ha-adaptive-dialog
      open
      width="small"
      header-title=${this._t("confirm.title")}
      @closed=${o}
    >
      <div class="confirm-body">
        <div class="confirm-text">
          ${this._t("confirm.ac_off",{name:r})}
        </div>
        <div class="confirm-actions">
          <button class="text-btn" @click=${o}>
            ${this._t("confirm.cancel")}
          </button>
          <button
            class="filled-btn danger"
            @click=${()=>{let c=this._entityId(this._confirmAc.slot);c&&this.hass.callService("switch","turn_off",{entity_id:c}),this._confirmAc=null}}
          >
            ${this._t("confirm.turn_off")}
          </button>
        </div>
      </div>
    </ha-adaptive-dialog>`}_metric(r){return V`<span class="metric"
      ><span class="metric-num">${r.n}</span
      ><span class="metric-unit">${r.u}</span></span
    >`}_renderStats(){if(Array.isArray(this._config.stats))return V`<div class="stats custom">
        ${this._config.stats.map(F=>this._renderCustomStat(F))}
      </div>`;let r=pt(this._state("sensor.pv_total")),o=Ys(this),c=this._show("show_panels")&&o.length>0,m=this._state("sensor.grid_power"),$=pt(m);return V`<div class="stats">
      <div
        class="stat solar ${c?"clickable":""}"
        @click=${c?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${c?V`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${this._metric(Ye(r))}</div>
        ${c?V`<div class="stat-sub">
              ${o.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid($):V`<div></div>`}
    </div>`}_renderGrid(r){let o=r!=null&&r>1,c=r!=null&&r<-1,m=o?"import":c?"export":"",$=o?this._t("card.grid_import"):c?this._t("card.grid_export"):this._t("card.grid_idle");return V`<div
      class="stat grid ${m} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${c?"mdi:transmission-tower-export":o?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${this._metric(Ye(r!=null?Math.abs(r):null))}
      </div>
      <div class="stat-sub">${$}</div>
    </div>`}_renderCustomStat(r){if(!r||!r.entity&&!r.name)return V``;let o=r.entity?this.hass.states[r.entity]:void 0,c=r.name||o?.attributes?.friendly_name||r.entity||"",m=r.tap_action,$=!m||m.action!=="none";return V`<div
      class="stat ${$?"clickable":""}"
      @click=${$?()=>this._handleAction(m,r.entity):null}
    >
      <div class="stat-head">
        ${r.icon?V`<ha-icon icon=${r.icon}></ha-icon>`:o?V`<ha-state-icon
                .hass=${this.hass}
                .stateObj=${o}
              ></ha-state-icon>`:V`<ha-icon icon="mdi:gauge"></ha-icon>`}
        ${c}
      </div>
      <div class="stat-value">${this._metric(this._statValue(o))}</div>
    </div>`}_statValue(r){let o=r?.state;if(o==null||o==="unavailable"||o==="unknown")return{n:"\u2013",u:""};let c=pt(r),m=r.attributes?.unit_of_measurement||"";return c==null?{n:o,u:""}:m==="W"?Ye(c):{n:Number.isInteger(c)?String(c):c.toFixed(1),u:m}}_handleAction(r,o){let c=r||{action:"more-info"},m=c.action||"more-info";if(m!=="none"){if(c.confirmation){let $=c.confirmation.text||this._t("card.confirm_action")||"Are you sure?";if(!window.confirm($))return}switch(m){case"more-info":this._moreInfoId(c.entity||o);return;case"toggle":{let $=c.entity||o;$&&this.hass.callService("homeassistant","toggle",{entity_id:$});return}case"navigate":c.navigation_path&&(history.pushState(null,"",c.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0})));return;case"url":c.url_path&&window.open(c.url_path,c.new_tab===!1?"_self":"_blank");return;case"perform-action":case"call-service":{let $=c.perform_action||c.service,[F,U]=($||"").split(".",2);F&&U&&this.hass.callService(F,U,c.data||c.service_data||{},c.target);return}default:this._moreInfoId(c.entity||o)}}}_forecastGraph(){let r=this._dataRange().ref,o=this._mergedForecast();return xa(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:Hs(o,r),totalWh:this._todayWh,forecastWh:Ws(o,r),currentHour:this._isToday()?new Date().getHours():null,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})}_renderToday(){let r=this._todayWh!=null?this._todayWh/1e3:null,o=Object.keys(this._forecasts||{}).length>0,c=this._show("show_forecast")&&o?this._forecastTodayKWh():null,m=c!=null&&c>0,$=m&&r!=null?Math.min(100,Math.round(r/c*100)):null,F=$!=null&&$>=100;return V`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(da(r))}</span>
      </div>
      ${m?V`<div class="fc-bar">
              <div
                class="fc-fill ${F?"met":""}"
                style="width:${$}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${r!=null?r.toFixed(1):"\u2013"}</b> /
                ${c.toFixed(1)} kWh
              </span>
              <span>
                ${F?this._t("card.exceeded"):this._t("card.of_forecast",{pct:$??0})}
              </span>
            </div>`:""}
    </div>`}};function ka(k,r){if(!r)return null;let o=k?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${r}/${o}icon.png`}var bo=[{name:"device",selector:{device:{integration:ai}}}],Sa={appearance:[["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},Aa={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},Ea=new Set,Pa=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"stats",icon:"mdi:chart-box-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],wo=4,hs=class extends Ot{static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),Te()}setConfig(r){this._config=r||{}}_t(r,o){return Wt(this.hass,r,o)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,ca(this.hass).then(r=>{this._providers=r}))}render(){if(!this.hass)return V``;let r=Pa.find(o=>o.id===this._page);return r?this._renderSubpage(r):this._renderRoot()}_defaults(){let r=$e(this.hass),o=this._config.device&&r.find(c=>c.deviceId===this._config.device)||r[0];return o?Ce(this.hass,o.ents):{}}_renderRoot(){return V`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${bo}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${Pa.map(r=>V`<button
            class="nav-row"
            @click=${()=>this._page=r.id}
          >
            <ha-icon class="nav-icon" icon=${r.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`page.${r.id}`)}</span>
              <span class="nav-secondary">${this._summary(r.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(r){if(r==="panels"){let F=this._detectedPanels(),U=F.filter(W=>this._config.panels?.[W]?.hidden).length,B=this._t("editor.panels_count",{n:F.length});return U&&(B+=` \xB7 ${this._t("editor.panels_hidden",{n:U})}`),B}if(r==="forecast"){let F=this._providers;if(F===void 0)return this._t("editor.automatic");if(!F.length)return this._t("editor.forecast_none_short");let U=this._config.forecast_config_entries,B=U===void 0?F.length:U.length;return this._t("editor.forecast_selected",{n:B,total:F.length})}if(r==="stats"){let F=this._config.stats;return Array.isArray(F)?this._t("editor.stats_count",{n:F.length}):this._t("editor.stats_default")}if(r==="advanced")return this._config.collection_key||this._t("editor.none");let o=(Aa[r]||[]).filter(([F])=>this._config.entities?.[F]).length,c=o?` \xB7 ${this._t("editor.overridden",{n:o})}`:"",m=Sa[r]||[];if(!m.length)return o?this._t("editor.overridden",{n:o}):this._t("editor.automatic");let $=m.filter(([F,U])=>this._config[F]??U);return $.length?$.map(([F])=>this._t(`short.${F}`)).join(", ")+c:`${this._t("editor.nothing_shown")}${c}`}_renderSubpage(r){return V`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${r.id}`)}</span>
      </div>
      ${(Sa[r.id]||[]).map(([o,c,m])=>this._renderToggle(o,c,m))}
      ${r.id==="appearance"?this._renderImagePicker():r.id==="stats"?this._renderStatsPage():r.id==="panels"?this._renderPanelsPage():r.id==="forecast"?this._renderForecastPage():r.id==="advanced"?this._renderAdvancedPage():(Aa[r.id]||[]).map(([o,c])=>this._renderSlot(o,c))}`}_renderImagePicker(){let r=this._config.image,o=this._config.image_url,c=this._config.show_image??!0;return V`<div class="section">
        <ha-icon icon="mdi:image-multiple-outline"></ha-icon>${this._t("editor.image")}
      </div>
      <div class=${c?"img-grid":"img-grid dim"}>
        <button
          class="img-opt ${!r&&!o?"on":""}"
          title=${this._t("editor.automatic")}
          @click=${()=>this._setImage(null)}
        >
          <span class="img-auto"><ha-icon icon="mdi:auto-fix"></ha-icon></span>
          <span class="img-label">${this._t("editor.automatic")}</span>
        </button>
        ${ns.map(m=>V`<button
            class="img-opt ${r===m.key?"on":""}"
            title=${m.name}
            @click=${()=>this._setImage(m.key)}
          >
            <picture
              ><source
                srcset=${Ge(li(m.key))}
                type="image/webp"
              /><img
                src=${li(m.key)}
                loading="lazy"
                alt=${m.name} /></picture
            >
            <span class="img-label">${m.name}</span>
          </button>`)}
      </div>`}_setImage(r){let o={...this._config,type:`custom:${Pt}`};delete o.image_url,r?o.image=r:delete o.image,this._dispatch(o)}_renderAdvancedPage(){return V`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${r=>{r.stopPropagation(),this._setCollectionKey(r.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(r){let o={...this._config,type:`custom:${Pt}`};r?o.collection_key=r:delete o.collection_key,this._dispatch(o)}_renderStatsPage(){let r=this._config.stats;return Array.isArray(r)?V`<div class="hint top-hint">${this._t("editor.stats_hint")}</div>
      ${r.map((o,c)=>this._renderStatBlock(o,c,r.length))}
      <div class="stats-actions">
        <button class="add-btn" @click=${()=>this._addStat()}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("editor.stats_add")}
        </button>
        <button class="text-btn" @click=${()=>this._resetStats()}>
          ${this._t("editor.stats_reset")}
        </button>
      </div>`:V`<div class="hint top-hint">
          ${this._t("editor.stats_default_hint")}
        </div>
        <button class="filled-btn" @click=${()=>this._seedDefaultStats()}>
          ${this._t("editor.stats_customize")}
        </button>`}_renderStatBlock(r,o,c){let m=[{name:"entity",selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"tap_action",selector:{ui_action:{}}}],$=r.name||r.entity||this._t("editor.stat_n",{n:o+1});return V`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon=${r.icon||"mdi:chart-box-outline"}></ha-icon>
        <span class="panel-title">${$}</span>
        <button
          class="icon-btn"
          .disabled=${o===0}
          title=${this._t("editor.stats_move_up")}
          @click=${()=>this._moveStat(o,-1)}
        >
          <ha-icon icon="mdi:arrow-up"></ha-icon>
        </button>
        <button
          class="icon-btn"
          .disabled=${o===c-1}
          title=${this._t("editor.stats_move_down")}
          @click=${()=>this._moveStat(o,1)}
        >
          <ha-icon icon="mdi:arrow-down"></ha-icon>
        </button>
        <button
          class="icon-btn danger"
          title=${this._t("editor.stats_remove")}
          @click=${()=>this._removeStat(o)}
        >
          <ha-icon icon="mdi:delete-outline"></ha-icon>
        </button>
      </div>
      <ha-form
        .hass=${this.hass}
        .data=${r}
        .schema=${m}
        .computeLabel=${F=>this._t(`editor.stat_field_${F.name}`)}
        @value-changed=${F=>{F.stopPropagation(),this._updateStat(o,F.detail.value)}}
      ></ha-form>
    </div>`}_seedDefaultStats(){let r=this._defaults(),o=c=>{let m=this._config.entities?.[c];return m&&Bt(m)&&!$t(m)?m:r[c]||""};this._setStats([{entity:o("sensor.pv_total"),name:this._t("card.solar"),icon:"mdi:solar-power-variant"},{entity:o("sensor.grid_power"),name:this._t("card.grid"),icon:"mdi:transmission-tower"}])}_updateStat(r,o){let c=[...this._config.stats||[]],m={};for(let[$,F]of Object.entries(o))F===""||F==null||(m[$]=F);c[r]=m,this._setStats(c)}_addStat(){this._setStats([...this._config.stats||[],{}])}_removeStat(r){let o=[...this._config.stats||[]];o.splice(r,1),this._setStats(o)}_moveStat(r,o){let c=[...this._config.stats||[]],m=r+o;m<0||m>=c.length||([c[r],c[m]]=[c[m],c[r]],this._setStats(c))}_setStats(r){this._dispatch({...this._config,stats:r,type:`custom:${Pt}`})}_resetStats(){let r={...this._config,type:`custom:${Pt}`};delete r.stats,this._dispatch(r)}_renderForecastPage(){let r=this._providers;if(r===void 0)return V`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!r.length)return V`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let o=this._config.show_forecast??!0,c=this._config.forecast_config_entries,m=$=>c===void 0?!0:c.includes($);return V`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${o?"":"dim"}>
        ${r.map($=>V`<div class="row">
            ${this._renderBrand($.domain)}
            <span class="row-label"
              >${$.title}<span class="row-sub">${$.domain}</span></span
            >
            <ha-switch
              .checked=${m($.id)}
              .disabled=${!o}
              @change=${F=>this._toggleProvider($.id,F.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(r){let o=ka(this.hass,r);return V`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${o?V`<img
            class="brand"
            src=${o}
            @error=${c=>{c.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(r,o){let c=(this._providers||[]).map(F=>F.id),m=this._config.forecast_config_entries??c.slice();m=o?[...new Set([...m,r])]:m.filter(F=>F!==r);let $={...this._config,type:`custom:${Pt}`};m.length===c.length&&c.every(F=>m.includes(F))?delete $.forecast_config_entries:$.forecast_config_entries=m,this._dispatch($)}_detectedPanels(){let r=this._defaults(),o=[];for(let c=1;c<=wo;c++)(r[`sensor.pv${c}_power`]||this._config.entities?.[`sensor.pv${c}_power`])&&o.push(c);return o.length?o:[1,2,3,4]}_renderPanelsPage(){return V`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(r=>this._renderPanelConfig(r))}`}_renderPanelConfig(r){let o=this._config.panels?.[r]||{},c=!!o.hidden,m=`sensor.pv${r}_power`;return V`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${o.name||this._t("editor.panel",{n:r})}</span
        >
        <ha-switch
          .checked=${!c}
          @change=${$=>this._dispatch(this._withPanel(r,{hidden:!$.target.checked}))}
        ></ha-switch>
      </div>
      ${c?V`<div class="hint">${this._t("editor.panel_hidden")}</div>`:V`<ha-form
              .hass=${this.hass}
              .data=${{value:o.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${$=>{$.stopPropagation(),this._dispatch(this._withPanel(r,{name:$.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(m,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(r,o){let c={...this._config.panels||{}},m={...c[r]||{}};for(let[F,U]of Object.entries(o))U===""||U==null||U===!1?delete m[F]:m[F]=U;Object.keys(m).length?c[r]=m:delete c[r];let $={...this._config,panels:c,type:`custom:${Pt}`};return Object.keys(c).length||delete $.panels,$}_renderToggle(r,o,c){return V`<div class="row">
      <ha-icon icon=${c}></ha-icon>
      <span class="row-label">${this._t(`toggle.${r}`)}</span>
      <ha-switch
        .checked=${this._config[r]??o}
        @change=${m=>this._toggleDisplay(r,o,m.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(r,o){return this._modes[r]?this._modes[r]:o?Bt(o)&&!$t(o)?"entity":"custom":Ea.has(r)?"entity":"auto"}_renderModeChips(r,o){let c=Ea.has(r)?["entity","custom"]:["auto","entity","custom"];return V`<div class="modes">
      ${c.map(m=>V`<button
          class="mode ${o===m?"on":""}"
          @click=${()=>{this._modes={...this._modes,[r]:m},m==="auto"&&this._setOverride(r,"")}}
        >
          ${this._t(`editor.mode_${m}`)}
        </button>`)}
    </div>`}_renderSlot(r,o,c){let m=this._config.entities?.[r]||"",$=this._slotMode(r,m),F=this._defaults()[r];return V`<div class="section">
        <ha-icon icon=${o}></ha-icon>${c||this._t(`slot.${r}`)}
      </div>
      ${this._renderModeChips(r,$)}
      ${$==="auto"?V`<div class="hint">
            ${this._t("editor.auto_value",{value:F||this._t("editor.not_found")})}
          </div>`:$==="entity"?V`<ha-form
              .hass=${this.hass}
              .data=${{value:Bt(m)&&!$t(m)?m:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${U=>{U.stopPropagation(),this._setOverride(r,U.detail.value.value||"")}}
            ></ha-form>`:V`<ha-form
              .hass=${this.hass}
              .data=${{value:Bt(m)&&!$t(m)?"":m}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${U=>{U.stopPropagation(),this._setOverride(r,U.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(r,o){let c={...this._config.entities||{}};o?c[r]=o:delete c[r];let m={...this._config,entities:c,type:`custom:${Pt}`};return Object.keys(c).length||delete m.entities,m}_setOverride(r,o){this._dispatch(this._withOverride(r,o))}_toggleDisplay(r,o,c){let m={...this._config,type:`custom:${Pt}`};c===o?delete m[r]:m[r]=c,this._dispatch(m)}_valueChanged(r){r.stopPropagation();let o={...this._config,...r.detail.value,type:`custom:${Pt}`};o.device||delete o.device,this._dispatch(o)}_dispatch(r){this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}static get styles(){return pe`
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
    `}};var Ra=Kn($a(),1);var Li=["1","2","3","4","5","6","7","8","9"],Me="1",Ca=["auto","day","night"],Xs="auto";function xo(k,r){if(k==="day"||k==="night")return k;let o=r?.states?.["sun.sun"];return o?o.state==="below_horizon"?"night":"day":r?.themes?.darkMode?"night":"day"}function Ta(k,r,o){let c=Li.includes(k)?k:Me;return`${fe}/houses/${xo(r,o)}_${c}.webp`}function Ma(k){let r=Li.includes(k)?k:Me;return`${fe}/houses/day_${r}.webp`}function Fa(){let k=[];for(let r of["day","night"])for(let o of Li)k.push({name:`${r}_${o}.webp`,url:`${fe}/houses/${r}_${o}.webp`});return k}var Zs=["re_space_system_battery","re_space_system_battery_gateway","re305_or_re306_battery","re305_or_re306_device","re305_device","re306_device","re306_dpu_battery","po_space_re305_battery","po_space_battery","po_space_battery_system_battery","po_space_battery_ats","po_space_battery_shp32","po_space_battery_system_dpu","jt303_space_battery","jt321_space_battery","dc303_space_battery"],zi="re_space_system_battery";function fs(k){let r=Zs.includes(k)?k:zi;return`${fe}/batteries/${r}.webp`}var ko=new Set(["re_space_system_battery","re_space_system_battery_gateway"]);function Ia(k){return ko.has(k||zi)}function La(k){return`${fe}/flows/${k}.json`}var So={8:3,9:6};function za(k){return`re_space_solar_${So[k]||Math.min(7,Math.max(1,k||1))}`}var me={grid_in:"re_space_gridin",grid_out:"re_space_gridout",home:"re_space_home",bat_in:"jt303_space_battery_input",bat_out:"jt303_space_battery_output",bat_chg:"re_space_bat_chg",bat_dsg:"re_space_bat_dsg",bat_soc:"re_space_bat_soc"};var Oa=pe`
  :host {
    display: block;
  }
  ha-card {
    overflow: hidden;
    position: relative;
    /* Contain every internal z-index in the card's own stacking context so the
       figures / lines can't paint over Home Assistant's nav. */
    isolation: isolate;
    z-index: 0;
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

  /* The illustration: house render with overlays pinned to the same box. The
     2340×1680 house and 1170×840 overlays share an aspect ratio, so object-fit:
     contain on each lines them up exactly. */
  /* The house render is 2340×1680; the stage is a touch taller so a clear band
     is left at the bottom for the battery readout. The house and every overlay
     are top-aligned (object-position / preserveAspectRatio) so they stay
     mutually aligned and that band stays free of the illustration. */
  .stage {
    position: relative;
    width: 100%;
    aspect-ratio: 2340 / 1920;
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
`;var Rt=1,ps=class extends Ot{static styles=Oa;static get properties(){return{hass:{},_config:{}}}constructor(){super(),this._flowAnims={}}connectedCallback(){super.connectedCallback(),Te()}disconnectedCallback(){super.disconnectedCallback();for(let r of Object.values(this._flowAnims))r.anim?.destroy();this._flowAnims={}}setConfig(r){this._config=r||{}}static getConfigElement(){return document.createElement(`${Xt}-editor`)}static getStubConfig(){return{house:Me}}getCardSize(){return 7}_t(r,o){return Wt(this.hass,r,o)}_show(r,o=!0){return this._config[r]??o}get _device(){let r=$e(this.hass);return r.length?this._config.device&&r.find(o=>o.deviceId===this._config.device)||r[0]:null}_state(r){let o=this._config.entities?.[r];if(o)return Bt(o)&&!$t(o)?this.hass.states[o]:{state:o,attributes:{}};let c=this._map?.[r];return c?this.hass.states[c]:void 0}_entityId(r){let o=this._config.entities?.[r];return o&&Bt(o)&&!$t(o)?o:this._map?.[r]}_moreInfo(r){let o=this._entityId(r);o&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:o},bubbles:!0,composed:!0}))}_grid(){let r=this._state("sensor.grid_power");return pt(r??this._state("sensor.sys_grid_power"))}_flowStates(){let r=this._grid(),o=pt(this._state("sensor.pv_total")),c=pt(this._state("sensor.sys_load")),m=pt(this._state("sensor.bat_power")),$=pt(this._state("sensor.cms_batt_soc")),F=parseInt(this._config.house||Me,10)||1;return{grid:r,solar:o,load:c,bat:m,soc:$,route:F}}_flowDefs(){return[{key:"solar",file:r=>za(r.route),active:r=>r.solar>Rt},{key:"grid_in",file:()=>me.grid_in,active:r=>r.grid>Rt},{key:"grid_out",file:()=>me.grid_out,active:r=>r.grid<-Rt},{key:"home",file:()=>me.home,active:r=>r.load>Rt},{key:"bat_in",file:()=>me.bat_in,active:r=>r.bat>Rt,bat:!0},{key:"bat_out",file:()=>me.bat_out,active:r=>r.bat<-Rt,bat:!0},{key:"bat_soc",file:()=>me.bat_soc,active:r=>r.soc!=null,mode:"soc",bat:!0},{key:"bat_chg",file:()=>me.bat_chg,active:r=>r.bat>Rt,bat:!0},{key:"bat_dsg",file:()=>me.bat_dsg,active:r=>r.bat<-Rt,bat:!0}]}updated(r){super.updated(r),this._syncFlows()}_syncFlows(){if(!this.renderRoot||!this._device)return;let r=this._show("show_flows"),o=this._show("show_battery")&&Ia(this._config.battery),c=this._flowStates();for(let m of this._flowDefs()){let $=this.renderRoot.querySelector(`[data-flow="${m.key}"]`);if(!$)continue;let F=r&&m.active(c)&&(!m.bat||o);this._setFlow($,m,F,c)}}_setFlow(r,o,c,m){let $=o.key,F=o.file(m),U=o.mode||"play",B=this._flowAnims[$];if(c&&(!B||B.file!==F)){B?.anim?.destroy();let W=Ra.default.loadAnimation({container:r,renderer:"svg",loop:U!=="soc",autoplay:!1,path:La(F),rendererSettings:{preserveAspectRatio:"xMidYMin meet"}});B=this._flowAnims[$]={anim:W,file:F,ready:!1,mode:U},W.addEventListener("DOMLoaded",()=>{B.ready=!0,this._applyFlow(B,c,this._flowStates())})}B&&this._applyFlow(B,c,m),r.style.opacity=c?"1":"0"}_applyFlow(r,o,c){if(r.ready){if(r.mode==="soc"){r.anim.goToAndStop(Math.max(0,Math.min(100,c.soc??0)),!0);return}o?r.anim.play():r.anim.pause()}}render(){if(!this.hass)return V``;let r=this._device;if(!r)return V`<ha-card
        ><div class="empty">${this._t("card.no_device")}</div></ha-card
      >`;this._map=Ce(this.hass,r.ents);let o=this._config.title&&!$t(this._config.title)?this._config.title:"",c=this._show("show_battery");return V`<ha-card>
      ${o?V`<div class="title">${o}</div>`:""}
      <div class="stage">
        <img
          class="layer house"
          src=${this._config.house_image||Ta(this._config.house,this._config.house_mode,this.hass)}
          alt=""
        />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${c?V`<img
              class="layer box"
              src=${fs(this._config.battery)}
              alt=""
            />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        ${this._renderLeaders()} ${this._renderStats()}
        ${c?this._renderBattery():""}
      </div>
    </ha-card>`}_renderLeaders(){return V`<div class="leaders">
      ${this._show("show_grid")?V`<span class="leader grid"></span>`:""}
      ${this._show("show_solar")?V`<span class="leader solar"></span>`:""}
      ${this._show("show_home")?V`<span class="leader home"></span>`:""}
    </div>`}_renderStats(){let r=this._flowStates(),o=[];if(this._show("show_grid")){let c=r.grid>Rt,m=r.grid<-Rt;o.push({slot:"sensor.grid_power",fallback:"sensor.sys_grid_power",anchor:"col-grid",value:r.grid!=null?Math.abs(r.grid):null,label:c?this._t("house.from_grid"):m?this._t("house.to_grid"):this._t("house.grid"),cls:c?"import":m?"export":""})}return this._show("show_solar")&&o.push({slot:"sensor.pv_total",anchor:"col-solar",value:r.solar,label:this._t("card.solar"),cls:r.solar>Rt?"solar":""}),this._show("show_home")&&o.push({slot:"sensor.sys_load",anchor:"col-home",value:r.load,label:this._t("house.home"),cls:r.load>Rt?"home":""}),o.length?V`<div class="stats">
      ${o.map(c=>{let m=Ye(c.value);return V`<div
          class="stat ${c.anchor} ${c.cls} clickable"
          @click=${()=>this._moreInfo(this._entityId(c.slot)?c.slot:c.fallback||c.slot)}
        >
          <div class="stat-value">
            <span class="num">${m.n}</span><span class="unit">${m.u}</span>
          </div>
          <div class="stat-label">${c.label}</div>
        </div>`})}
    </div>`:""}_renderBattery(){let r=pt(this._state("sensor.cms_batt_soc")),o=pt(this._state("sensor.bat_power")),c=o!=null&&o>Rt,m=o!=null&&o<-Rt,$=c?"charge":m?"discharge":"",F=c?this._t("card.charging"):m?this._t("card.discharging"):this._t("house.idle"),U=o!=null&&(c||m)?ue(Math.abs(o)):null;return V`<div
      class="battery ${$} clickable"
      @click=${()=>this._moreInfo(this._entityId("sensor.cms_batt_soc")?"sensor.cms_batt_soc":"sensor.bat_power")}
    >
      <div class="battery-line">
        ${U?V`<ha-icon
              icon=${c?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon
            ><span class="battery-power">${U}</span>`:""}
        ${r!=null?V`<span class="battery-soc">${Math.round(r)}%</span>`:""}
      </div>
      <div class="battery-label">${F}</div>
    </div>`}};var Ao=(()=>{let k=new Uint32Array(256);for(let r=0;r<256;r++){let o=r;for(let c=0;c<8;c++)o=o&1?3988292384^o>>>1:o>>>1;k[r]=o>>>0}return k})();function Eo(k){let r=4294967295;for(let o=0;o<k.length;o++)r=Ao[(r^k[o])&255]^r>>>8;return(r^4294967295)>>>0}var Va=33,Da=0;function Na(k){let r=new TextEncoder,o=[],c=[],m=0;for(let U of k){let B=r.encode(U.name),W=Eo(U.data),nt=U.data.length,X=new DataView(new ArrayBuffer(30));X.setUint32(0,67324752,!0),X.setUint16(4,20,!0),X.setUint16(6,0,!0),X.setUint16(8,0,!0),X.setUint16(10,Da,!0),X.setUint16(12,Va,!0),X.setUint32(14,W,!0),X.setUint32(18,nt,!0),X.setUint32(22,nt,!0),X.setUint16(26,B.length,!0),X.setUint16(28,0,!0),o.push(new Uint8Array(X.buffer),B,U.data);let rt=new DataView(new ArrayBuffer(46));rt.setUint32(0,33639248,!0),rt.setUint16(4,20,!0),rt.setUint16(6,20,!0),rt.setUint16(8,0,!0),rt.setUint16(10,0,!0),rt.setUint16(12,Da,!0),rt.setUint16(14,Va,!0),rt.setUint32(16,W,!0),rt.setUint32(20,nt,!0),rt.setUint32(24,nt,!0),rt.setUint16(28,B.length,!0),rt.setUint16(30,0,!0),rt.setUint16(32,0,!0),rt.setUint16(34,0,!0),rt.setUint16(36,0,!0),rt.setUint32(38,0,!0),rt.setUint32(42,m,!0),c.push(new Uint8Array(rt.buffer),B),m+=30+B.length+nt}let $=c.reduce((U,B)=>U+B.length,0),F=new DataView(new ArrayBuffer(22));return F.setUint32(0,101010256,!0),F.setUint16(8,k.length,!0),F.setUint16(10,k.length,!0),F.setUint32(12,$,!0),F.setUint32(16,m,!0),F.setUint16(20,0,!0),new Blob([...o,...c,new Uint8Array(F.buffer)],{type:"application/zip"})}var Po=[{name:"device",selector:{device:{integration:ai}}}],$o=[["show_flows",!0,"mdi:transit-connection-variant"],["show_grid",!0,"mdi:transmission-tower"],["show_solar",!0,"mdi:solar-power-variant"],["show_home",!0,"mdi:home-lightning-bolt"],["show_battery",!0,"mdi:home-battery"]],Co=[["sensor.sys_grid_power","mdi:transmission-tower"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.sys_load","mdi:home-lightning-bolt"],["sensor.bat_power","mdi:battery-charging"],["sensor.cms_batt_soc","mdi:battery-high"]],ds=class extends Ot{static get properties(){return{hass:{},_config:{},_showEntities:{state:!0},_zipping:{state:!0},_uploading:{state:!0}}}constructor(){super(),this._showEntities=!1,this._zipping=!1,this._uploading=!1}connectedCallback(){super.connectedCallback(),Te()}setConfig(r){this._config=r||{}}_t(r,o){return Wt(this.hass,r,o)}_defaults(){let r=$e(this.hass),o=this._config.device&&r.find(c=>c.deviceId===this._config.device)||r[0];return o?Ce(this.hass,o.ents):{}}render(){if(!this.hass)return V``;let r=this._config.house||Me,o=this._config.house_image||"",c=this._config.house_mode||Xs,m=this._config.battery||zi,$=this._config.show_battery??!0;return V`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Po}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>

      <div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="house-grid">
        ${Li.map(F=>V`<button
            class="house-opt ${!o&&r===F?"on":""}"
            title=${this._t("house.editor.style_n",{n:F})}
            @click=${()=>this._selectHouse(F)}
          >
            <img src=${Ma(F)} loading="lazy" alt=${F} />
            <span class="house-label">${this._t("house.editor.style_n",{n:F})}</span>
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:image-edit-outline"></ha-icon>${this._t("house.editor.custom")}
      </div>
      <div class="hint">${this._t("house.editor.custom_hint")}</div>
      ${o?V`<div class="custom-img">
            <img src=${o} alt="" />
            <button class="link-btn danger" @click=${this._clearCustomImage}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
              <span>${this._t("house.editor.custom_remove")}</span>
            </button>
          </div>`:V`<label class="upload ${this._uploading?"busy":""}">
            <ha-icon
              icon=${this._uploading?"mdi:progress-upload":"mdi:image-plus"}
            ></ha-icon>
            <span
              >${this._uploading?this._t("house.editor.uploading"):this._t("house.editor.custom_label")}</span
            >
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              ?disabled=${this._uploading}
              @change=${this._pickCustomImage}
            />
          </label>`}
      <button
        class="link-btn"
        ?disabled=${this._zipping}
        @click=${this._downloadHouses}
      >
        <ha-icon icon=${this._zipping?"mdi:progress-download":"mdi:download"}></ha-icon>
        <span
          >${this._zipping?this._t("house.editor.preparing"):this._t("house.editor.download_zip")}</span
        >
      </button>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${Ca.map(F=>V`<button
            class="mode ${c===F?"on":""}"
            @click=${()=>this._set("house_mode",F,Xs)}
          >
            ${this._t(`house.mode.${F}`)}
          </button>`)}
      </div>

      ${$o.map(([F,U,B])=>this._renderToggle(F,U,B))}

      <div class="section">
        <ha-icon icon="mdi:home-battery-outline"></ha-icon>${this._t("house.editor.battery")}
      </div>
      <div class=${$?"batt-grid":"batt-grid dim"}>
        ${Zs.map(F=>V`<button
            class="batt-opt ${m===F?"on":""}"
            title=${this._t(`house.battery.${F}`)}
            @click=${()=>this._set("battery",F,zi)}
          >
            <span
              class="batt-thumb"
              style=${`background-image:url(${fs(F)})`}
            ></span>
            <span class="batt-label">${this._t(`house.battery.${F}`)}</span>
          </button>`)}
      </div>

      <button class="disclosure" @click=${()=>this._showEntities=!this._showEntities}>
        <ha-icon icon="mdi:tune-variant"></ha-icon>
        <span>${this._t("house.editor.entities")}</span>
        <ha-icon icon=${this._showEntities?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </button>
      ${this._showEntities?V`<div class="hint">${this._t("house.editor.entities_hint")}</div>
            ${Co.map(([F,U])=>this._renderSlot(F,U))}`:""}`}_renderToggle(r,o,c){return V`<div class="row">
      <ha-icon icon=${c}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${r}`)}</span>
      <ha-switch
        .checked=${this._config[r]??o}
        @change=${m=>this._set(r,m.target.checked,o)}
      ></ha-switch>
    </div>`}_renderSlot(r,o){let c=this._config.entities?.[r]||"",m=this._defaults()[r],$=Bt(c)&&!$t(c)?c:"";return V`<div class="slot">
      <ha-icon icon=${o}></ha-icon>
      <ha-form
        class="slot-form"
        .hass=${this.hass}
        .data=${{value:$}}
        .schema=${[{name:"value",selector:{entity:{}}}]}
        .computeLabel=${()=>`${this._t(`slot.${r}`)}${m?` (${this._t("editor.auto_value",{value:m})})`:""}`}
        @value-changed=${F=>{F.stopPropagation(),this._setOverride(r,F.detail.value.value||"")}}
      ></ha-form>
    </div>`}_deviceChanged(r){r.stopPropagation();let o={...this._config,...r.detail.value,type:`custom:${Xt}`};o.device||delete o.device,this._dispatch(o)}_set(r,o,c){let m={...this._config,type:`custom:${Xt}`};o===c||o===""||o==null?delete m[r]:m[r]=o,this._dispatch(m)}_selectHouse(r){let o={...this._config,type:`custom:${Xt}`};delete o.house_image,r===Me?delete o.house:o.house=r,this._dispatch(o)}async _pickCustomImage(r){let o=r.target.files?.[0];if(r.target.value="",!(!o||this._uploading)){this._uploading=!0;try{let c=new FormData;c.append("file",o);let m=await this.hass.fetchWithAuth("/api/image/upload",{method:"POST",body:c});if(!m.ok)throw new Error(`upload failed: ${m.status}`);let $=await m.json();this._set("house_image",`/api/image/serve/${$.id}/original`,"")}catch(c){console.error("EcoFlow House card: image upload failed",c)}finally{this._uploading=!1}}}_clearCustomImage(){this._set("house_image","","")}async _downloadHouses(){if(!this._zipping){this._zipping=!0;try{let r=await Promise.all(Fa().map(async({name:m,url:$})=>{let F=await fetch($);if(!F.ok)throw new Error(`${$}: ${F.status}`);return{name:m,data:new Uint8Array(await F.arrayBuffer())}})),o=URL.createObjectURL(Na(r)),c=document.createElement("a");c.href=o,c.download="ecoflow-house-images.zip",c.click(),URL.revokeObjectURL(o)}catch(r){console.error("EcoFlow House card: failed to build zip",r)}finally{this._zipping=!1}}}_setOverride(r,o){let c={...this._config.entities||{}};o?c[r]=o:delete c[r];let m={...this._config,entities:c,type:`custom:${Xt}`};Object.keys(c).length||delete m.entities,this._dispatch(m)}_dispatch(r){this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}static get styles(){return pe`
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
      .disclosure {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        padding: 14px 4px 4px;
        cursor: pointer;
        font-size: 1em;
      }
      .disclosure span {
        flex: 1;
        text-align: left;
        font-weight: 600;
      }
      .disclosure ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
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
    `}};customElements.define(Pt,ls);customElements.define(`${Pt}-editor`,hs);customElements.define(Xt,ps);customElements.define(`${Xt}-editor`,ds);window.customCards=window.customCards||[];window.customCards.push({type:Pt,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:Xt,name:"EcoFlow House Card",description:"Whole-home energy-flow illustration: a house with the battery box and animated grid, solar, home and battery flows.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
