var Yn=Object.create;var qr=Object.defineProperty;var Kn=Object.getOwnPropertyDescriptor;var Xn=Object.getOwnPropertyNames;var Zn=Object.getPrototypeOf,Jn=Object.prototype.hasOwnProperty;var Qn=(b,r)=>()=>(r||b((r={exports:{}}).exports,r),r.exports);var to=(b,r,o,l)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of Xn(r))!Jn.call(b,u)&&u!==o&&qr(b,u,{get:()=>r[u],enumerable:!(l=Kn(r,u))||l.enumerable});return b};var eo=(b,r,o)=>(o=b!=null?Yn(Zn(b)):{},to(r||!b||!b.__esModule?qr(o,"default",{value:b,enumerable:!0}):o,b));var Ta=Qn((zi,fs)=>{typeof document<"u"&&typeof navigator<"u"&&(function(b,r){typeof zi=="object"&&typeof fs<"u"?fs.exports=r():typeof define=="function"&&define.amd?define(r):(b=typeof globalThis<"u"?globalThis:b||self,b.lottie=r())})(zi,(function(){"use strict";var b="http://www.w3.org/2000/svg",r="",o=!1,l=-999999,u=function(e){o=!!e},E=function(){return o},I=function(e){r=e},U=function(){return r};function B(t){return document.createElement(t)}function W(t,e){var i,s=t.length,n;for(i=0;i<s;i+=1){n=t[i].prototype;for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e.prototype[a]=n[a])}}function nt(t,e){return Object.getOwnPropertyDescriptor(t,e)}function X(t){function e(){}return e.prototype=t,e}var rt=(function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(i){this.audios.push(i)},pause:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].pause()},resume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].resume()},setRate:function(i){var s,n=this.audios.length;for(s=0;s<n;s+=1)this.audios[s].setRate(i)},createAudio:function(i){return this.audioFactory?this.audioFactory(i):window.Howl?new window.Howl({src:[i]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(i){this.audioFactory=i},setVolume:function(i){this._volume=i,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}})(),at=(function(){function t(i,s){var n=0,a=[],c;switch(i){case"int16":case"uint8c":c=1;break;default:c=1.1;break}for(n=0;n<s;n+=1)a.push(c);return a}function e(i,s){return i==="float32"?new Float32Array(s):i==="int16"?new Int16Array(s):i==="uint8c"?new Uint8ClampedArray(s):t(i,s)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t})();function ot(t){return Array.apply(null,{length:t})}function se(t){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se(t)}var Vt=!0,qt=null,Zt=null,Ut="",Ri=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),fi=!1,Ct=Math.pow,Xe=Math.sqrt,Jt=Math.floor,gs=Math.max,Ie=Math.min,Ze={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,i=t.length;for(e=0;e<i;e+=1)Ze[t[e]]=Math[t[e]]})();function tr(){return{}}Ze.random=Math.random,Ze.abs=function(t){var e=se(t);if(e==="object"&&t.length){var i=ot(t.length),s,n=t.length;for(s=0;s<n;s+=1)i[s]=Math.abs(t[s]);return i}return Math.abs(t)};var Vi=150,dt=Math.PI/180,Z=.5519;function bt(t){fi=!!t}function ye(t){return fi?Math.round(t):t}function Le(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function ze(t,e,i,s){this.type=t,this.currentTime=e,this.totalTime=i,this.direction=s<0?-1:1}function Oe(t,e){this.type=t,this.direction=e<0?-1:1}function Re(t,e,i,s){this.type=t,this.currentLoop=i,this.totalLoops=e,this.direction=s<0?-1:1}function Je(t,e,i){this.type=t,this.firstFrame=e,this.totalFrames=i}function er(t,e){this.type=t,this.target=e}function Ga(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function Ya(t){this.type="configError",this.nativeError=t}function zo(t,e){this.type=t,this.nativeError=e}var Mt=(function(){var t=0;return function(){return t+=1,Ut+"__lottie_element_"+t}})();function vs(t,e,i){var s,n,a,c,g,f,w,S;switch(c=Math.floor(t*6),g=t*6-c,f=i*(1-e),w=i*(1-g*e),S=i*(1-(1-g)*e),c%6){case 0:s=i,n=S,a=f;break;case 1:s=w,n=i,a=f;break;case 2:s=f,n=i,a=S;break;case 3:s=f,n=w,a=i;break;case 4:s=S,n=f,a=i;break;case 5:s=i,n=f,a=w;break;default:break}return[s,n,a]}function ys(t,e,i){var s=Math.max(t,e,i),n=Math.min(t,e,i),a=s-n,c,g=s===0?0:a/s,f=s/255;switch(s){case n:c=0;break;case t:c=e-i+a*(e<i?6:0),c/=6*a;break;case e:c=i-t+a*2,c/=6*a;break;case i:c=t-e+a*4,c/=6*a;break;default:break}return[c,g,f]}function ir(t,e){var i=ys(t[0]*255,t[1]*255,t[2]*255);return i[1]+=e,i[1]>1?i[1]=1:i[1]<=0&&(i[1]=0),vs(i[0],i[1],i[2])}function sr(t,e){var i=ys(t[0]*255,t[1]*255,t[2]*255);return i[2]+=e,i[2]>1?i[2]=1:i[2]<0&&(i[2]=0),vs(i[0],i[1],i[2])}function rr(t,e){var i=ys(t[0]*255,t[1]*255,t[2]*255);return i[0]+=e/360,i[0]>1?i[0]-=1:i[0]<0&&(i[0]+=1),vs(i[0],i[1],i[2])}var Oo=(function(){var t=[],e,i;for(e=0;e<256;e+=1)i=e.toString(16),t[e]=i.length===1?"0"+i:i;return function(s,n,a){return s<0&&(s=0),n<0&&(n=0),a<0&&(a=0),"#"+t[s]+t[n]+t[a]}})(),Ka=function(e){Vt=!!e},Xa=function(){return Vt},Za=function(e){qt=e},Di=function(){return qt},Ro=function(e){Zt=e},ar=function(){return Zt},Ni=function(e){Vi=e},pi=function(){return Vi},Ja=function(e){Ut=e},Vo=function(){return Ut};function it(t){return document.createElementNS(b,t)}function _s(t){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_s(t)}var di=(function(){var t=1,e=[],i,s,n={onmessage:function(){},postMessage:function(A){i({data:A})}},a={postMessage:function(A){n.onmessage({data:A})}};function c(m){if(window.Worker&&window.Blob&&E()){var A=new Blob(["var _workerSelf = self; self.onmessage = ",m.toString()],{type:"text/javascript"}),C=URL.createObjectURL(A);return new Worker(C)}return i=m,n}function g(){s||(s=c(function(A){function C(){function F(D,y){var $,h,p=D.length,O,M,q,Q;for(h=0;h<p;h+=1)if($=D[h],"ks"in $&&!$.completed){if($.completed=!0,$.hasMask){var et=$.masksProperties;for(M=et.length,O=0;O<M;O+=1)if(et[O].pt.k.i)x(et[O].pt.k);else for(Q=et[O].pt.k.length,q=0;q<Q;q+=1)et[O].pt.k[q].s&&x(et[O].pt.k[q].s[0]),et[O].pt.k[q].e&&x(et[O].pt.k[q].e[0])}$.ty===0?($.layers=d($.refId,y),F($.layers,y)):$.ty===4?v($.shapes):$.ty===5&&st($)}}function k(D,y){if(D){var $=0,h=D.length;for($=0;$<h;$+=1)D[$].t===1&&(D[$].data.layers=d(D[$].data.refId,y),F(D[$].data.layers,y))}}function _(D,y){for(var $=0,h=y.length;$<h;){if(y[$].id===D)return y[$];$+=1}return null}function d(D,y){var $=_(D,y);return $?$.layers.__used?JSON.parse(JSON.stringify($.layers)):($.layers.__used=!0,$.layers):null}function v(D){var y,$=D.length,h,p;for(y=$-1;y>=0;y-=1)if(D[y].ty==="sh")if(D[y].ks.k.i)x(D[y].ks.k);else for(p=D[y].ks.k.length,h=0;h<p;h+=1)D[y].ks.k[h].s&&x(D[y].ks.k[h].s[0]),D[y].ks.k[h].e&&x(D[y].ks.k[h].e[0]);else D[y].ty==="gr"&&v(D[y].it)}function x(D){var y,$=D.i.length;for(y=0;y<$;y+=1)D.i[y][0]+=D.v[y][0],D.i[y][1]+=D.v[y][1],D.o[y][0]+=D.v[y][0],D.o[y][1]+=D.v[y][1]}function T(D,y){var $=y?y.split("."):[100,100,100];return D[0]>$[0]?!0:$[0]>D[0]?!1:D[1]>$[1]?!0:$[1]>D[1]?!1:D[2]>$[2]?!0:$[2]>D[2]?!1:null}var L=(function(){var D=[4,4,14];function y(h){var p=h.t.d;h.t.d={k:[{s:p,t:0}]}}function $(h){var p,O=h.length;for(p=0;p<O;p+=1)h[p].ty===5&&y(h[p])}return function(h){if(T(D,h.v)&&($(h.layers),h.assets)){var p,O=h.assets.length;for(p=0;p<O;p+=1)h.assets[p].layers&&$(h.assets[p].layers)}}})(),R=(function(){var D=[4,7,99];return function(y){if(y.chars&&!T(D,y.v)){var $,h=y.chars.length;for($=0;$<h;$+=1){var p=y.chars[$];p.data&&p.data.shapes&&(v(p.data.shapes),p.data.ip=0,p.data.op=99999,p.data.st=0,p.data.sr=1,p.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},y.chars[$].t||(p.data.shapes.push({ty:"no"}),p.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}})(),N=(function(){var D=[5,7,15];function y(h){var p=h.t.p;typeof p.a=="number"&&(p.a={a:0,k:p.a}),typeof p.p=="number"&&(p.p={a:0,k:p.p}),typeof p.r=="number"&&(p.r={a:0,k:p.r})}function $(h){var p,O=h.length;for(p=0;p<O;p+=1)h[p].ty===5&&y(h[p])}return function(h){if(T(D,h.v)&&($(h.layers),h.assets)){var p,O=h.assets.length;for(p=0;p<O;p+=1)h.assets[p].layers&&$(h.assets[p].layers)}}})(),tt=(function(){var D=[4,1,9];function y(h){var p,O=h.length,M,q;for(p=0;p<O;p+=1)if(h[p].ty==="gr")y(h[p].it);else if(h[p].ty==="fl"||h[p].ty==="st")if(h[p].c.k&&h[p].c.k[0].i)for(q=h[p].c.k.length,M=0;M<q;M+=1)h[p].c.k[M].s&&(h[p].c.k[M].s[0]/=255,h[p].c.k[M].s[1]/=255,h[p].c.k[M].s[2]/=255,h[p].c.k[M].s[3]/=255),h[p].c.k[M].e&&(h[p].c.k[M].e[0]/=255,h[p].c.k[M].e[1]/=255,h[p].c.k[M].e[2]/=255,h[p].c.k[M].e[3]/=255);else h[p].c.k[0]/=255,h[p].c.k[1]/=255,h[p].c.k[2]/=255,h[p].c.k[3]/=255}function $(h){var p,O=h.length;for(p=0;p<O;p+=1)h[p].ty===4&&y(h[p].shapes)}return function(h){if(T(D,h.v)&&($(h.layers),h.assets)){var p,O=h.assets.length;for(p=0;p<O;p+=1)h.assets[p].layers&&$(h.assets[p].layers)}}})(),K=(function(){var D=[4,4,18];function y(h){var p,O=h.length,M,q;for(p=O-1;p>=0;p-=1)if(h[p].ty==="sh")if(h[p].ks.k.i)h[p].ks.k.c=h[p].closed;else for(q=h[p].ks.k.length,M=0;M<q;M+=1)h[p].ks.k[M].s&&(h[p].ks.k[M].s[0].c=h[p].closed),h[p].ks.k[M].e&&(h[p].ks.k[M].e[0].c=h[p].closed);else h[p].ty==="gr"&&y(h[p].it)}function $(h){var p,O,M=h.length,q,Q,et,lt;for(O=0;O<M;O+=1){if(p=h[O],p.hasMask){var ht=p.masksProperties;for(Q=ht.length,q=0;q<Q;q+=1)if(ht[q].pt.k.i)ht[q].pt.k.c=ht[q].cl;else for(lt=ht[q].pt.k.length,et=0;et<lt;et+=1)ht[q].pt.k[et].s&&(ht[q].pt.k[et].s[0].c=ht[q].cl),ht[q].pt.k[et].e&&(ht[q].pt.k[et].e[0].c=ht[q].cl)}p.ty===4&&y(p.shapes)}}return function(h){if(T(D,h.v)&&($(h.layers),h.assets)){var p,O=h.assets.length;for(p=0;p<O;p+=1)h.assets[p].layers&&$(h.assets[p].layers)}}})();function j(D){D.__complete||(tt(D),L(D),R(D),N(D),K(D),F(D.layers,D.assets),k(D.chars,D.assets),D.__complete=!0)}function st(D){D.t.a.length===0&&"m"in D.t.p}var G={};return G.completeData=j,G.checkColors=tt,G.checkChars=R,G.checkPathProperties=N,G.checkShapes=K,G.completeLayers=F,G}if(a.dataManager||(a.dataManager=C()),a.assetLoader||(a.assetLoader=(function(){function F(_){var d=_.getResponseHeader("content-type");return d&&_.responseType==="json"&&d.indexOf("json")!==-1||_.response&&_s(_.response)==="object"?_.response:_.response&&typeof _.response=="string"?JSON.parse(_.response):_.responseText?JSON.parse(_.responseText):null}function k(_,d,v,x){var T,L=new XMLHttpRequest;try{L.responseType="json"}catch{}L.onreadystatechange=function(){if(L.readyState===4)if(L.status===200)T=F(L),v(T);else try{T=F(L),v(T)}catch(R){x&&x(R)}};try{L.open(["G","E","T"].join(""),_,!0)}catch{L.open(["G","E","T"].join(""),d+"/"+_,!0)}L.send()}return{load:k}})()),A.data.type==="loadAnimation")a.assetLoader.load(A.data.path,A.data.fullPath,function(F){a.dataManager.completeData(F),a.postMessage({id:A.data.id,payload:F,status:"success"})},function(){a.postMessage({id:A.data.id,status:"error"})});else if(A.data.type==="complete"){var P=A.data.animation;a.dataManager.completeData(P),a.postMessage({id:A.data.id,payload:P,status:"success"})}else A.data.type==="loadData"&&a.assetLoader.load(A.data.path,A.data.fullPath,function(F){a.postMessage({id:A.data.id,payload:F,status:"success"})},function(){a.postMessage({id:A.data.id,status:"error"})})}),s.onmessage=function(m){var A=m.data,C=A.id,P=e[C];e[C]=null,A.status==="success"?P.onComplete(A.payload):P.onError&&P.onError()})}function f(m,A){t+=1;var C="processId_"+t;return e[C]={onComplete:m,onError:A},C}function w(m,A,C){g();var P=f(A,C);s.postMessage({type:"loadAnimation",path:m,fullPath:window.location.origin+window.location.pathname,id:P})}function S(m,A,C){g();var P=f(A,C);s.postMessage({type:"loadData",path:m,fullPath:window.location.origin+window.location.pathname,id:P})}function z(m,A,C){g();var P=f(A,C);s.postMessage({type:"complete",animation:m,id:P})}return{loadAnimation:w,loadData:S,completeAnimation:z}})(),Qa=(function(){var t=(function(){var k=B("canvas");k.width=1,k.height=1;var _=k.getContext("2d");return _.fillStyle="rgba(0,0,0,0)",_.fillRect(0,0,1,1),k})();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function s(k,_,d){var v="";if(k.e)v=k.p;else if(_){var x=k.p;x.indexOf("images/")!==-1&&(x=x.split("/")[1]),v=_+x}else v=d,v+=k.u?k.u:"",v+=k.p;return v}function n(k){var _=0,d=setInterval(function(){var v=k.getBBox();(v.width||_>500)&&(this._imageLoaded(),clearInterval(d)),_+=1}.bind(this),50)}function a(k){var _=s(k,this.assetsPath,this.path),d=it("image");Ri?this.testImageLoaded(d):d.addEventListener("load",this._imageLoaded,!1),d.addEventListener("error",function(){v.img=t,this._imageLoaded()}.bind(this),!1),d.setAttributeNS("http://www.w3.org/1999/xlink","href",_),this._elementHelper.append?this._elementHelper.append(d):this._elementHelper.appendChild(d);var v={img:d,assetData:k};return v}function c(k){var _=s(k,this.assetsPath,this.path),d=B("img");d.crossOrigin="anonymous",d.addEventListener("load",this._imageLoaded,!1),d.addEventListener("error",function(){v.img=t,this._imageLoaded()}.bind(this),!1),d.src=_;var v={img:d,assetData:k};return v}function g(k){var _={assetData:k},d=s(k,this.assetsPath,this.path);return di.loadData(d,function(v){_.img=v,this._footageLoaded()}.bind(this),function(){_.img={},this._footageLoaded()}.bind(this)),_}function f(k,_){this.imagesLoadedCb=_;var d,v=k.length;for(d=0;d<v;d+=1)k[d].layers||(!k[d].t||k[d].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(k[d]))):k[d].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(k[d]))))}function w(k){this.path=k||""}function S(k){this.assetsPath=k||""}function z(k){for(var _=0,d=this.images.length;_<d;){if(this.images[_].assetData===k)return this.images[_].img;_+=1}return null}function m(){this.imagesLoadedCb=null,this.images.length=0}function A(){return this.totalImages===this.loadedAssets}function C(){return this.totalFootages===this.loadedFootagesCount}function P(k,_){k==="svg"?(this._elementHelper=_,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function F(){this._imageLoaded=e.bind(this),this._footageLoaded=i.bind(this),this.testImageLoaded=n.bind(this),this.createFootageData=g.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return F.prototype={loadAssets:f,setAssetsPath:S,setPath:w,loadedImages:A,loadedFootages:C,destroy:m,getAsset:z,createImgData:c,createImageData:a,imageLoaded:e,footageLoaded:i,setCacheType:P},F})();function nr(){}nr.prototype={triggerEvent:function(e,i){if(this._cbs[e])for(var s=this._cbs[e],n=0;n<s.length;n+=1)s[n](i)},addEventListener:function(e,i){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(i),function(){this.removeEventListener(e,i)}.bind(this)},removeEventListener:function(e,i){if(!i)this._cbs[e]=null;else if(this._cbs[e]){for(var s=0,n=this._cbs[e].length;s<n;)this._cbs[e][s]===i&&(this._cbs[e].splice(s,1),s-=1,n-=1),s+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var tn=(function(){function t(e){for(var i=e.split(`\r
`),s={},n,a=0,c=0;c<i.length;c+=1)n=i[c].split(":"),n.length===2&&(s[n[0]]=n[1].trim(),a+=1);if(a===0)throw new Error;return s}return function(e){for(var i=[],s=0;s<e.length;s+=1){var n=e[s],a={time:n.tm,duration:n.dr};try{a.payload=JSON.parse(e[s].cm)}catch{try{a.payload=t(e[s].cm)}catch{a.payload={name:e[s].cm}}}i.push(a)}return i}})(),en=(function(){function t(e){this.compositions.push(e)}return function(){function e(i){for(var s=0,n=this.compositions.length;s<n;){if(this.compositions[s].data&&this.compositions[s].data.nm===i)return this.compositions[s].prepareFrame&&this.compositions[s].data.xt&&this.compositions[s].prepareFrame(this.currentFrame),this.compositions[s].compInterface;s+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}})(),ui={},sn=function(e,i){ui[e]=i};function rn(t){return ui[t]}function an(){if(ui.canvas)return"canvas";for(var t in ui)if(ui[t])return t;return""}function Bi(t){"@babel/helpers - typeof";return Bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bi(t)}var J=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Mt(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=Xa(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=en(),this.imagePreloader=new Qa,this.audioController=rt(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new ze("drawnFrame",0,0,0),this.expressionsPlugin=Di()};W([nr],J),J.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var i=rn(e);this.renderer=new i(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),di.loadAnimation(t.path,this.configAnimation,this.onSetupError))},J.prototype.onSetupError=function(){this.trigger("data_failed")},J.prototype.setupAnimation=function(t){di.completeAnimation(t,this.configAnimation)},J.prototype.setData=function(t,e){e&&Bi(e)!=="object"&&(e=JSON.parse(e));var i={wrapper:t,animationData:e},s=t.attributes;i.path=s.getNamedItem("data-animation-path")?s.getNamedItem("data-animation-path").value:s.getNamedItem("data-bm-path")?s.getNamedItem("data-bm-path").value:s.getNamedItem("bm-path")?s.getNamedItem("bm-path").value:"",i.animType=s.getNamedItem("data-anim-type")?s.getNamedItem("data-anim-type").value:s.getNamedItem("data-bm-type")?s.getNamedItem("data-bm-type").value:s.getNamedItem("bm-type")?s.getNamedItem("bm-type").value:s.getNamedItem("data-bm-renderer")?s.getNamedItem("data-bm-renderer").value:s.getNamedItem("bm-renderer")?s.getNamedItem("bm-renderer").value:an()||"canvas";var n=s.getNamedItem("data-anim-loop")?s.getNamedItem("data-anim-loop").value:s.getNamedItem("data-bm-loop")?s.getNamedItem("data-bm-loop").value:s.getNamedItem("bm-loop")?s.getNamedItem("bm-loop").value:"";n==="false"?i.loop=!1:n==="true"?i.loop=!0:n!==""&&(i.loop=parseInt(n,10));var a=s.getNamedItem("data-anim-autoplay")?s.getNamedItem("data-anim-autoplay").value:s.getNamedItem("data-bm-autoplay")?s.getNamedItem("data-bm-autoplay").value:s.getNamedItem("bm-autoplay")?s.getNamedItem("bm-autoplay").value:!0;i.autoplay=a!=="false",i.name=s.getNamedItem("data-name")?s.getNamedItem("data-name").value:s.getNamedItem("data-bm-name")?s.getNamedItem("data-bm-name").value:s.getNamedItem("bm-name")?s.getNamedItem("bm-name").value:"";var c=s.getNamedItem("data-anim-prerender")?s.getNamedItem("data-anim-prerender").value:s.getNamedItem("data-bm-prerender")?s.getNamedItem("data-bm-prerender").value:s.getNamedItem("bm-prerender")?s.getNamedItem("bm-prerender").value:"";c==="false"&&(i.prerender=!1),i.path?this.setParams(i):this.trigger("destroy")},J.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,i,s=e.length,n=t.layers,a,c=n.length;for(a=0;a<c;a+=1)for(i=0;i<s;){if(e[i].id===n[a].id){e[i]=n[a];break}i+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,i=0;i<s;i+=1)this.animationData.assets.push(t.assets[i]);this.animationData.__complete=!1,di.completeAnimation(this.animationData,this.onSegmentComplete)},J.prototype.onSegmentComplete=function(t){this.animationData=t;var e=Di();e&&e.initExpressions(this),this.loadNextSegment()},J.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var i=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,di.loadData(i,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},J.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},J.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},J.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},J.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=tn(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},J.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},J.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=Di();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},J.prototype.resize=function(t,e){var i=typeof t=="number"?t:void 0,s=typeof e=="number"?e:void 0;this.renderer.updateContainerSize(i,s)},J.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},J.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},J.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},J.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},J.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},J.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},J.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},J.prototype.getMarkerData=function(t){for(var e,i=0;i<this.markers.length;i+=1)if(e=this.markers[i],e.payload&&e.payload.name===t)return e;return null},J.prototype.goToAndStop=function(t,e,i){if(!(i&&this.name!==i)){var s=Number(t);if(isNaN(s)){var n=this.getMarkerData(t);n&&this.goToAndStop(n.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},J.prototype.goToAndPlay=function(t,e,i){if(!(i&&this.name!==i)){var s=Number(t);if(isNaN(s)){var n=this.getMarkerData(t);n&&(n.duration?this.playSegments([n.time,n.time+n.duration],!0):this.goToAndStop(n.time,!0))}else this.goToAndStop(s,e,i);this.play()}},J.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,i=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(i=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(i=!0,e=0)):this.setCurrentRawFrameValue(e),i&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},J.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},J.prototype.setSegment=function(t,e){var i=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?i=t:this.currentRawFrame+this.firstFrame>e&&(i=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,i!==-1&&this.goToAndStop(i,!0)},J.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),Bi(t[0])==="object"){var i,s=t.length;for(i=0;i<s;i+=1)this.segments.push(t[i])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},J.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},J.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},J.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},J.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},J.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},J.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},J.prototype.setLoop=function(t){this.loop=t},J.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},J.prototype.getVolume=function(){return this.audioController.getVolume()},J.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},J.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},J.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},J.prototype.getPath=function(){return this.path},J.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var i=t.p;i.indexOf("images/")!==-1&&(i=i.split("/")[1]),e=this.assetsPath+i}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},J.prototype.getAssetData=function(t){for(var e=0,i=this.assets.length;e<i;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},J.prototype.hide=function(){this.renderer.hide()},J.prototype.show=function(){this.renderer.show()},J.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},J.prototype.updateDocumentData=function(t,e,i){try{var s=this.renderer.getElementByPath(t);s.updateDocumentData(e,i)}catch{}},J.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new ze(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new Re(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new Oe(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new Je(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new er(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new ze(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new Re(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new Oe(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new Je(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new er(t,this))},J.prototype.triggerRenderFrameError=function(t){var e=new Ga(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},J.prototype.triggerConfigError=function(t){var e=new Ya(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var gt=(function(){var t={},e=[],i=0,s=0,n=0,a=!0,c=!1;function g(y){for(var $=0,h=y.target;$<s;)e[$].animation===h&&(e.splice($,1),$-=1,s-=1,h.isPaused||z()),$+=1}function f(y,$){if(!y)return null;for(var h=0;h<s;){if(e[h].elem===y&&e[h].elem!==null)return e[h].animation;h+=1}var p=new J;return m(p,y),p.setData(y,$),p}function w(){var y,$=e.length,h=[];for(y=0;y<$;y+=1)h.push(e[y].animation);return h}function S(){n+=1,tt()}function z(){n-=1}function m(y,$){y.addEventListener("destroy",g),y.addEventListener("_active",S),y.addEventListener("_idle",z),e.push({elem:$,animation:y}),s+=1}function A(y){var $=new J;return m($,null),$.setParams(y),$}function C(y,$){var h;for(h=0;h<s;h+=1)e[h].animation.setSpeed(y,$)}function P(y,$){var h;for(h=0;h<s;h+=1)e[h].animation.setDirection(y,$)}function F(y){var $;for($=0;$<s;$+=1)e[$].animation.play(y)}function k(y){var $=y-i,h;for(h=0;h<s;h+=1)e[h].animation.advanceTime($);i=y,n&&!c?window.requestAnimationFrame(k):a=!0}function _(y){i=y,window.requestAnimationFrame(k)}function d(y){var $;for($=0;$<s;$+=1)e[$].animation.pause(y)}function v(y,$,h){var p;for(p=0;p<s;p+=1)e[p].animation.goToAndStop(y,$,h)}function x(y){var $;for($=0;$<s;$+=1)e[$].animation.stop(y)}function T(y){var $;for($=0;$<s;$+=1)e[$].animation.togglePause(y)}function L(y){var $;for($=s-1;$>=0;$-=1)e[$].animation.destroy(y)}function R(y,$,h){var p=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),O,M=p.length;for(O=0;O<M;O+=1)h&&p[O].setAttribute("data-bm-type",h),f(p[O],y);if($&&M===0){h||(h="svg");var q=document.getElementsByTagName("body")[0];q.innerText="";var Q=B("div");Q.style.width="100%",Q.style.height="100%",Q.setAttribute("data-bm-type",h),q.appendChild(Q),f(Q,y)}}function N(){var y;for(y=0;y<s;y+=1)e[y].animation.resize()}function tt(){!c&&n&&a&&(window.requestAnimationFrame(_),a=!1)}function K(){c=!0}function j(){c=!1,tt()}function st(y,$){var h;for(h=0;h<s;h+=1)e[h].animation.setVolume(y,$)}function G(y){var $;for($=0;$<s;$+=1)e[$].animation.mute(y)}function D(y){var $;for($=0;$<s;$+=1)e[$].animation.unmute(y)}return t.registerAnimation=f,t.loadAnimation=A,t.setSpeed=C,t.setDirection=P,t.play=F,t.pause=d,t.stop=x,t.togglePause=T,t.searchAnimations=R,t.resize=N,t.goToAndStop=v,t.destroy=L,t.freeze=K,t.unfreeze=j,t.setVolume=st,t.mute=G,t.unmute=D,t.getRegisteredAnimations=w,t})(),mi=(function(){var t={};t.getBezierEasing=i;var e={};function i(_,d,v,x,T){var L=T||("bez_"+_+"_"+d+"_"+v+"_"+x).replace(/\./g,"p");if(e[L])return e[L];var R=new k([_,d,v,x]);return e[L]=R,R}var s=4,n=.001,a=1e-7,c=10,g=11,f=1/(g-1),w=typeof Float32Array=="function";function S(_,d){return 1-3*d+3*_}function z(_,d){return 3*d-6*_}function m(_){return 3*_}function A(_,d,v){return((S(d,v)*_+z(d,v))*_+m(d))*_}function C(_,d,v){return 3*S(d,v)*_*_+2*z(d,v)*_+m(d)}function P(_,d,v,x,T){var L,R,N=0;do R=d+(v-d)/2,L=A(R,x,T)-_,L>0?v=R:d=R;while(Math.abs(L)>a&&++N<c);return R}function F(_,d,v,x){for(var T=0;T<s;++T){var L=C(d,v,x);if(L===0)return d;var R=A(d,v,x)-_;d-=R/L}return d}function k(_){this._p=_,this._mSampleValues=w?new Float32Array(g):new Array(g),this._precomputed=!1,this.get=this.get.bind(this)}return k.prototype={get:function(d){var v=this._p[0],x=this._p[1],T=this._p[2],L=this._p[3];return this._precomputed||this._precompute(),v===x&&T===L?d:d===0?0:d===1?1:A(this._getTForX(d),x,L)},_precompute:function(){var d=this._p[0],v=this._p[1],x=this._p[2],T=this._p[3];this._precomputed=!0,(d!==v||x!==T)&&this._calcSampleValues()},_calcSampleValues:function(){for(var d=this._p[0],v=this._p[2],x=0;x<g;++x)this._mSampleValues[x]=A(x*f,d,v)},_getTForX:function(d){for(var v=this._p[0],x=this._p[2],T=this._mSampleValues,L=0,R=1,N=g-1;R!==N&&T[R]<=d;++R)L+=f;--R;var tt=(d-T[R])/(T[R+1]-T[R]),K=L+tt*f,j=C(K,v,x);return j>=n?F(d,K,v,x):j===0?K:P(d,L,L+f,v,x)}},t})(),or=(function(){function t(e){return e.concat(ot(e.length))}return{double:t}})(),Ui=(function(){return function(t,e,i){var s=0,n=t,a=ot(n),c={newElement:g,release:f};function g(){var w;return s?(s-=1,w=a[s]):w=e(),w}function f(w){s===n&&(a=or.double(a),n*=2),i&&i(w),a[s]=w,s+=1}return c}})(),lr=(function(){function t(){return{addedLength:0,percents:at("float32",pi()),lengths:at("float32",pi())}}return Ui(8,t)})(),hr=(function(){function t(){return{lengths:[],totalLength:0}}function e(i){var s,n=i.lengths.length;for(s=0;s<n;s+=1)lr.release(i.lengths[s]);i.lengths.length=0}return Ui(8,t,e)})();function nn(){var t=Math;function e(m,A,C,P,F,k){var _=m*P+A*F+C*k-F*P-k*m-C*A;return _>-.001&&_<.001}function i(m,A,C,P,F,k,_,d,v){if(C===0&&k===0&&v===0)return e(m,A,P,F,_,d);var x=t.sqrt(t.pow(P-m,2)+t.pow(F-A,2)+t.pow(k-C,2)),T=t.sqrt(t.pow(_-m,2)+t.pow(d-A,2)+t.pow(v-C,2)),L=t.sqrt(t.pow(_-P,2)+t.pow(d-F,2)+t.pow(v-k,2)),R;return x>T?x>L?R=x-T-L:R=L-T-x:L>T?R=L-T-x:R=T-x-L,R>-1e-4&&R<1e-4}var s=(function(){return function(m,A,C,P){var F=pi(),k,_,d,v,x,T=0,L,R=[],N=[],tt=lr.newElement();for(d=C.length,k=0;k<F;k+=1){for(x=k/(F-1),L=0,_=0;_<d;_+=1)v=Ct(1-x,3)*m[_]+3*Ct(1-x,2)*x*C[_]+3*(1-x)*Ct(x,2)*P[_]+Ct(x,3)*A[_],R[_]=v,N[_]!==null&&(L+=Ct(R[_]-N[_],2)),N[_]=R[_];L&&(L=Xe(L),T+=L),tt.percents[k]=x,tt.lengths[k]=T}return tt.addedLength=T,tt}})();function n(m){var A=hr.newElement(),C=m.c,P=m.v,F=m.o,k=m.i,_,d=m._length,v=A.lengths,x=0;for(_=0;_<d-1;_+=1)v[_]=s(P[_],P[_+1],F[_],k[_+1]),x+=v[_].addedLength;return C&&d&&(v[_]=s(P[_],P[0],F[_],k[0]),x+=v[_].addedLength),A.totalLength=x,A}function a(m){this.segmentLength=0,this.points=new Array(m)}function c(m,A){this.partialLength=m,this.point=A}var g=(function(){var m={};return function(A,C,P,F){var k=(A[0]+"_"+A[1]+"_"+C[0]+"_"+C[1]+"_"+P[0]+"_"+P[1]+"_"+F[0]+"_"+F[1]).replace(/\./g,"p");if(!m[k]){var _=pi(),d,v,x,T,L,R=0,N,tt,K=null;A.length===2&&(A[0]!==C[0]||A[1]!==C[1])&&e(A[0],A[1],C[0],C[1],A[0]+P[0],A[1]+P[1])&&e(A[0],A[1],C[0],C[1],C[0]+F[0],C[1]+F[1])&&(_=2);var j=new a(_);for(x=P.length,d=0;d<_;d+=1){for(tt=ot(x),L=d/(_-1),N=0,v=0;v<x;v+=1)T=Ct(1-L,3)*A[v]+3*Ct(1-L,2)*L*(A[v]+P[v])+3*(1-L)*Ct(L,2)*(C[v]+F[v])+Ct(L,3)*C[v],tt[v]=T,K!==null&&(N+=Ct(tt[v]-K[v],2));N=Xe(N),R+=N,j.points[d]=new c(N,tt),K=tt}j.segmentLength=R,m[k]=j}return m[k]}})();function f(m,A){var C=A.percents,P=A.lengths,F=C.length,k=Jt((F-1)*m),_=m*A.addedLength,d=0;if(k===F-1||k===0||_===P[k])return C[k];for(var v=P[k]>_?-1:1,x=!0;x;)if(P[k]<=_&&P[k+1]>_?(d=(_-P[k])/(P[k+1]-P[k]),x=!1):k+=v,k<0||k>=F-1){if(k===F-1)return C[k];x=!1}return C[k]+(C[k+1]-C[k])*d}function w(m,A,C,P,F,k){var _=f(F,k),d=1-_,v=t.round((d*d*d*m[0]+(_*d*d+d*_*d+d*d*_)*C[0]+(_*_*d+d*_*_+_*d*_)*P[0]+_*_*_*A[0])*1e3)/1e3,x=t.round((d*d*d*m[1]+(_*d*d+d*_*d+d*d*_)*C[1]+(_*_*d+d*_*_+_*d*_)*P[1]+_*_*_*A[1])*1e3)/1e3;return[v,x]}var S=at("float32",8);function z(m,A,C,P,F,k,_){F<0?F=0:F>1&&(F=1);var d=f(F,_);k=k>1?1:k;var v=f(k,_),x,T=m.length,L=1-d,R=1-v,N=L*L*L,tt=d*L*L*3,K=d*d*L*3,j=d*d*d,st=L*L*R,G=d*L*R+L*d*R+L*L*v,D=d*d*R+L*d*v+d*L*v,y=d*d*v,$=L*R*R,h=d*R*R+L*v*R+L*R*v,p=d*v*R+L*v*v+d*R*v,O=d*v*v,M=R*R*R,q=v*R*R+R*v*R+R*R*v,Q=v*v*R+R*v*v+v*R*v,et=v*v*v;for(x=0;x<T;x+=1)S[x*4]=t.round((N*m[x]+tt*C[x]+K*P[x]+j*A[x])*1e3)/1e3,S[x*4+1]=t.round((st*m[x]+G*C[x]+D*P[x]+y*A[x])*1e3)/1e3,S[x*4+2]=t.round(($*m[x]+h*C[x]+p*P[x]+O*A[x])*1e3)/1e3,S[x*4+3]=t.round((M*m[x]+q*C[x]+Q*P[x]+et*A[x])*1e3)/1e3;return S}return{getSegmentsLength:n,getNewSegment:z,getPointInSegment:w,buildBezierData:g,pointOnLine2D:e,pointOnLine3D:i}}var Qt=nn(),Ve=l,cr=Math.abs;function fr(t,e){var i=this.offsetTime,s;this.propType==="multidimensional"&&(s=at("float32",this.pv.length));for(var n=e.lastIndex,a=n,c=this.keyframes.length-1,g=!0,f,w,S;g;){if(f=this.keyframes[a],w=this.keyframes[a+1],a===c-1&&t>=w.t-i){f.h&&(f=w),n=0;break}if(w.t-i>t){n=a;break}a<c-1?a+=1:(n=0,g=!1)}S=this.keyframesMetadata[a]||{};var z,m,A,C,P,F,k=w.t-i,_=f.t-i,d;if(f.to){S.bezierData||(S.bezierData=Qt.buildBezierData(f.s,w.s||f.e,f.to,f.ti));var v=S.bezierData;if(t>=k||t<_){var x=t>=k?v.points.length-1:0;for(m=v.points[x].point.length,z=0;z<m;z+=1)s[z]=v.points[x].point[z]}else{S.__fnct?F=S.__fnct:(F=mi.getBezierEasing(f.o.x,f.o.y,f.i.x,f.i.y,f.n).get,S.__fnct=F),A=F((t-_)/(k-_));var T=v.segmentLength*A,L,R=e.lastFrame<t&&e._lastKeyframeIndex===a?e._lastAddedLength:0;for(P=e.lastFrame<t&&e._lastKeyframeIndex===a?e._lastPoint:0,g=!0,C=v.points.length;g;){if(R+=v.points[P].partialLength,T===0||A===0||P===v.points.length-1){for(m=v.points[P].point.length,z=0;z<m;z+=1)s[z]=v.points[P].point[z];break}else if(T>=R&&T<R+v.points[P+1].partialLength){for(L=(T-R)/v.points[P+1].partialLength,m=v.points[P].point.length,z=0;z<m;z+=1)s[z]=v.points[P].point[z]+(v.points[P+1].point[z]-v.points[P].point[z])*L;break}P<C-1?P+=1:g=!1}e._lastPoint=P,e._lastAddedLength=R-v.points[P].partialLength,e._lastKeyframeIndex=a}}else{var N,tt,K,j,st;if(c=f.s.length,d=w.s||f.e,this.sh&&f.h!==1)if(t>=k)s[0]=d[0],s[1]=d[1],s[2]=d[2];else if(t<=_)s[0]=f.s[0],s[1]=f.s[1],s[2]=f.s[2];else{var G=pr(f.s),D=pr(d),y=(t-_)/(k-_);ln(s,on(G,D,y))}else for(a=0;a<c;a+=1)f.h!==1&&(t>=k?A=1:t<_?A=0:(f.o.x.constructor===Array?(S.__fnct||(S.__fnct=[]),S.__fnct[a]?F=S.__fnct[a]:(N=f.o.x[a]===void 0?f.o.x[0]:f.o.x[a],tt=f.o.y[a]===void 0?f.o.y[0]:f.o.y[a],K=f.i.x[a]===void 0?f.i.x[0]:f.i.x[a],j=f.i.y[a]===void 0?f.i.y[0]:f.i.y[a],F=mi.getBezierEasing(N,tt,K,j).get,S.__fnct[a]=F)):S.__fnct?F=S.__fnct:(N=f.o.x,tt=f.o.y,K=f.i.x,j=f.i.y,F=mi.getBezierEasing(N,tt,K,j).get,f.keyframeMetadata=F),A=F((t-_)/(k-_)))),d=w.s||f.e,st=f.h===1?f.s[a]:f.s[a]+(d[a]-f.s[a])*A,this.propType==="multidimensional"?s[a]=st:s=st}return e.lastIndex=n,s}function on(t,e,i){var s=[],n=t[0],a=t[1],c=t[2],g=t[3],f=e[0],w=e[1],S=e[2],z=e[3],m,A,C,P,F;return A=n*f+a*w+c*S+g*z,A<0&&(A=-A,f=-f,w=-w,S=-S,z=-z),1-A>1e-6?(m=Math.acos(A),C=Math.sin(m),P=Math.sin((1-i)*m)/C,F=Math.sin(i*m)/C):(P=1-i,F=i),s[0]=P*n+F*f,s[1]=P*a+F*w,s[2]=P*c+F*S,s[3]=P*g+F*z,s}function ln(t,e){var i=e[0],s=e[1],n=e[2],a=e[3],c=Math.atan2(2*s*a-2*i*n,1-2*s*s-2*n*n),g=Math.asin(2*i*s+2*n*a),f=Math.atan2(2*i*a-2*s*n,1-2*i*i-2*n*n);t[0]=c/dt,t[1]=g/dt,t[2]=f/dt}function pr(t){var e=t[0]*dt,i=t[1]*dt,s=t[2]*dt,n=Math.cos(e/2),a=Math.cos(i/2),c=Math.cos(s/2),g=Math.sin(e/2),f=Math.sin(i/2),w=Math.sin(s/2),S=n*a*c-g*f*w,z=g*f*c+n*a*w,m=g*a*c+n*f*w,A=n*f*c-g*a*w;return[z,m,A,S]}function dr(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==Ve&&(this._caching.lastFrame>=i&&t>=i||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var s=this.interpolateValue(t,this._caching);this.pv=s}return this._caching.lastFrame=t,this.pv}function ji(t){var e;if(this.propType==="unidimensional")e=t*this.mult,cr(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var i=0,s=this.v.length;i<s;)e=t[i]*this.mult,cr(this.v[i]-e)>1e-5&&(this.v[i]=e,this._mdf=!0),i+=1}function Hi(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,i=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)i=this.effectsSequence[t](i);this.setVValue(i),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function Wi(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function hn(t,e,i,s){this.propType="unidimensional",this.mult=i||1,this.data=e,this.v=i?e.k*i:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=Hi,this.setVValue=ji,this.addEffect=Wi}function cn(t,e,i,s){this.propType="multidimensional",this.mult=i||1,this.data=e,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var n,a=e.k.length;for(this.v=at("float32",a),this.pv=at("float32",a),this.vel=at("float32",a),n=0;n<a;n+=1)this.v[n]=e.k[n]*this.mult,this.pv[n]=e.k[n];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=Hi,this.setVValue=ji,this.addEffect=Wi}function fn(t,e,i,s){this.propType="unidimensional",this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:Ve,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=i||1,this.elem=t,this.container=s,this.comp=t.comp,this.v=Ve,this.pv=Ve,this._isFirstFrame=!0,this.getValue=Hi,this.setVValue=ji,this.interpolateValue=fr,this.effectsSequence=[dr.bind(this)],this.addEffect=Wi}function pn(t,e,i,s){this.propType="multidimensional";var n,a=e.k.length,c,g,f,w;for(n=0;n<a-1;n+=1)e.k[n].to&&e.k[n].s&&e.k[n+1]&&e.k[n+1].s&&(c=e.k[n].s,g=e.k[n+1].s,f=e.k[n].to,w=e.k[n].ti,(c.length===2&&!(c[0]===g[0]&&c[1]===g[1])&&Qt.pointOnLine2D(c[0],c[1],g[0],g[1],c[0]+f[0],c[1]+f[1])&&Qt.pointOnLine2D(c[0],c[1],g[0],g[1],g[0]+w[0],g[1]+w[1])||c.length===3&&!(c[0]===g[0]&&c[1]===g[1]&&c[2]===g[2])&&Qt.pointOnLine3D(c[0],c[1],c[2],g[0],g[1],g[2],c[0]+f[0],c[1]+f[1],c[2]+f[2])&&Qt.pointOnLine3D(c[0],c[1],c[2],g[0],g[1],g[2],g[0]+w[0],g[1]+w[1],g[2]+w[2]))&&(e.k[n].to=null,e.k[n].ti=null),c[0]===g[0]&&c[1]===g[1]&&f[0]===0&&f[1]===0&&w[0]===0&&w[1]===0&&(c.length===2||c[2]===g[2]&&f[2]===0&&w[2]===0)&&(e.k[n].to=null,e.k[n].ti=null));this.effectsSequence=[dr.bind(this)],this.data=e,this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=i||1,this.elem=t,this.container=s,this.comp=t.comp,this.getValue=Hi,this.setVValue=ji,this.interpolateValue=fr,this.frameId=-1;var S=e.k[0].s.length;for(this.v=at("float32",S),this.pv=at("float32",S),n=0;n<S;n+=1)this.v[n]=Ve,this.pv[n]=Ve;this._caching={lastFrame:Ve,lastIndex:0,value:at("float32",S)},this.addEffect=Wi}var H=(function(){function t(i,s,n,a,c){s.sid&&(s=i.globalData.slotManager.getProp(s));var g;if(!s.k.length)g=new hn(i,s,a,c);else if(typeof s.k[0]=="number")g=new cn(i,s,a,c);else switch(n){case 0:g=new fn(i,s,a,c);break;case 1:g=new pn(i,s,a,c);break;default:break}return g.effectsSequence.length&&c.addDynamicProperty(g),g}var e={getProp:t};return e})();function wt(){}wt.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,i=this.dynamicProperties.length;for(e=0;e<i;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var De=(function(){function t(){return at("float32",2)}return Ui(8,t)})();function re(){this.c=!1,this._length=0,this._maxLength=8,this.v=ot(this._maxLength),this.o=ot(this._maxLength),this.i=ot(this._maxLength)}re.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var i=0;i<e;)this.v[i]=De.newElement(),this.o[i]=De.newElement(),this.i[i]=De.newElement(),i+=1},re.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},re.prototype.doubleArrayLength=function(){this.v=this.v.concat(ot(this._maxLength)),this.i=this.i.concat(ot(this._maxLength)),this.o=this.o.concat(ot(this._maxLength)),this._maxLength*=2},re.prototype.setXYAt=function(t,e,i,s,n){var a;switch(this._length=Math.max(this._length,s+1),this._length>=this._maxLength&&this.doubleArrayLength(),i){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o;break;default:a=[];break}(!a[s]||a[s]&&!n)&&(a[s]=De.newElement()),a[s][0]=t,a[s][1]=e},re.prototype.setTripleAt=function(t,e,i,s,n,a,c,g){this.setXYAt(t,e,"v",c,g),this.setXYAt(i,s,"o",c,g),this.setXYAt(n,a,"i",c,g)},re.prototype.reverse=function(){var t=new re;t.setPathData(this.c,this._length);var e=this.v,i=this.o,s=this.i,n=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],s[0][0],s[0][1],i[0][0],i[0][1],0,!1),n=1);var a=this._length-1,c=this._length,g;for(g=n;g<c;g+=1)t.setTripleAt(e[a][0],e[a][1],s[a][0],s[a][1],i[a][0],i[a][1],g,!1),a-=1;return t},re.prototype.length=function(){return this._length};var At=(function(){function t(){return new re}function e(n){var a=n._length,c;for(c=0;c<a;c+=1)De.release(n.v[c]),De.release(n.i[c]),De.release(n.o[c]),n.v[c]=null,n.i[c]=null,n.o[c]=null;n._length=0,n.c=!1}function i(n){var a=s.newElement(),c,g=n._length===void 0?n.v.length:n._length;for(a.setLength(g),a.c=n.c,c=0;c<g;c+=1)a.setTripleAt(n.v[c][0],n.v[c][1],n.o[c][0],n.o[c][1],n.i[c][0],n.i[c][1],c);return a}var s=Ui(4,t,e);return s.clone=i,s})();function bs(){this._length=0,this._maxLength=4,this.shapes=ot(this._maxLength)}bs.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(ot(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},bs.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)At.release(this.shapes[t]);this._length=0};var Qe=(function(){var t={newShapeCollection:n,release:a},e=0,i=4,s=ot(i);function n(){var c;return e?(e-=1,c=s[e]):c=new bs,c}function a(c){var g,f=c._length;for(g=0;g<f;g+=1)At.release(c.shapes[g]);c._length=0,e===i&&(s=or.double(s),i*=2),s[e]=c,e+=1}return t})(),qi=(function(){var t=-999999;function e(k,_,d){var v=d.lastIndex,x,T,L,R,N,tt,K,j,st,G=this.keyframes;if(k<G[0].t-this.offsetTime)x=G[0].s[0],L=!0,v=0;else if(k>=G[G.length-1].t-this.offsetTime)x=G[G.length-1].s?G[G.length-1].s[0]:G[G.length-2].e[0],L=!0;else{for(var D=v,y=G.length-1,$=!0,h,p,O;$&&(h=G[D],p=G[D+1],!(p.t-this.offsetTime>k));)D<y-1?D+=1:$=!1;if(O=this.keyframesMetadata[D]||{},L=h.h===1,v=D,!L){if(k>=p.t-this.offsetTime)j=1;else if(k<h.t-this.offsetTime)j=0;else{var M;O.__fnct?M=O.__fnct:(M=mi.getBezierEasing(h.o.x,h.o.y,h.i.x,h.i.y).get,O.__fnct=M),j=M((k-(h.t-this.offsetTime))/(p.t-this.offsetTime-(h.t-this.offsetTime)))}T=p.s?p.s[0]:h.e[0]}x=h.s[0]}for(tt=_._length,K=x.i[0].length,d.lastIndex=v,R=0;R<tt;R+=1)for(N=0;N<K;N+=1)st=L?x.i[R][N]:x.i[R][N]+(T.i[R][N]-x.i[R][N])*j,_.i[R][N]=st,st=L?x.o[R][N]:x.o[R][N]+(T.o[R][N]-x.o[R][N])*j,_.o[R][N]=st,st=L?x.v[R][N]:x.v[R][N]+(T.v[R][N]-x.v[R][N])*j,_.v[R][N]=st}function i(){var k=this.comp.renderedFrame-this.offsetTime,_=this.keyframes[0].t-this.offsetTime,d=this.keyframes[this.keyframes.length-1].t-this.offsetTime,v=this._caching.lastFrame;return v!==t&&(v<_&&k<_||v>d&&k>d)||(this._caching.lastIndex=v<k?this._caching.lastIndex:0,this.interpolateShape(k,this.pv,this._caching)),this._caching.lastFrame=k,this.pv}function s(){this.paths=this.localShapeCollection}function n(k,_){if(k._length!==_._length||k.c!==_.c)return!1;var d,v=k._length;for(d=0;d<v;d+=1)if(k.v[d][0]!==_.v[d][0]||k.v[d][1]!==_.v[d][1]||k.o[d][0]!==_.o[d][0]||k.o[d][1]!==_.o[d][1]||k.i[d][0]!==_.i[d][0]||k.i[d][1]!==_.i[d][1])return!1;return!0}function a(k){n(this.v,k)||(this.v=At.clone(k),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function c(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var k;this.kf?k=this.pv:this.data.ks?k=this.data.ks.k:k=this.data.pt.k;var _,d=this.effectsSequence.length;for(_=0;_<d;_+=1)k=this.effectsSequence[_](k);this.setVValue(k),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function g(k,_,d){this.propType="shape",this.comp=k.comp,this.container=k,this.elem=k,this.data=_,this.k=!1,this.kf=!1,this._mdf=!1;var v=d===3?_.pt.k:_.ks.k;this.v=At.clone(v),this.pv=At.clone(this.v),this.localShapeCollection=Qe.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=s,this.effectsSequence=[]}function f(k){this.effectsSequence.push(k),this.container.addDynamicProperty(this)}g.prototype.interpolateShape=e,g.prototype.getValue=c,g.prototype.setVValue=a,g.prototype.addEffect=f;function w(k,_,d){this.propType="shape",this.comp=k.comp,this.elem=k,this.container=k,this.offsetTime=k.data.st,this.keyframes=d===3?_.pt.k:_.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var v=this.keyframes[0].s[0].i.length;this.v=At.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,v),this.pv=At.clone(this.v),this.localShapeCollection=Qe.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=s,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[i.bind(this)]}w.prototype.getValue=c,w.prototype.interpolateShape=e,w.prototype.setVValue=a,w.prototype.addEffect=f;var S=(function(){var k=Z;function _(d,v){this.v=At.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=Qe.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=v.d,this.elem=d,this.comp=d.comp,this.frameId=-1,this.initDynamicPropertyContainer(d),this.p=H.getProp(d,v.p,1,0,this),this.s=H.getProp(d,v.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return _.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var v=this.p.v[0],x=this.p.v[1],T=this.s.v[0]/2,L=this.s.v[1]/2,R=this.d!==3,N=this.v;N.v[0][0]=v,N.v[0][1]=x-L,N.v[1][0]=R?v+T:v-T,N.v[1][1]=x,N.v[2][0]=v,N.v[2][1]=x+L,N.v[3][0]=R?v-T:v+T,N.v[3][1]=x,N.i[0][0]=R?v-T*k:v+T*k,N.i[0][1]=x-L,N.i[1][0]=R?v+T:v-T,N.i[1][1]=x-L*k,N.i[2][0]=R?v+T*k:v-T*k,N.i[2][1]=x+L,N.i[3][0]=R?v-T:v+T,N.i[3][1]=x+L*k,N.o[0][0]=R?v+T*k:v-T*k,N.o[0][1]=x-L,N.o[1][0]=R?v+T:v-T,N.o[1][1]=x+L*k,N.o[2][0]=R?v-T*k:v+T*k,N.o[2][1]=x+L,N.o[3][0]=R?v-T:v+T,N.o[3][1]=x-L*k}},W([wt],_),_})(),z=(function(){function k(_,d){this.v=At.newElement(),this.v.setPathData(!0,0),this.elem=_,this.comp=_.comp,this.data=d,this.frameId=-1,this.d=d.d,this.initDynamicPropertyContainer(_),d.sy===1?(this.ir=H.getProp(_,d.ir,0,0,this),this.is=H.getProp(_,d.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=H.getProp(_,d.pt,0,0,this),this.p=H.getProp(_,d.p,1,0,this),this.r=H.getProp(_,d.r,0,dt,this),this.or=H.getProp(_,d.or,0,0,this),this.os=H.getProp(_,d.os,0,.01,this),this.localShapeCollection=Qe.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return k.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var d=Math.floor(this.pt.v)*2,v=Math.PI*2/d,x=!0,T=this.or.v,L=this.ir.v,R=this.os.v,N=this.is.v,tt=2*Math.PI*T/(d*2),K=2*Math.PI*L/(d*2),j,st,G,D,y=-Math.PI/2;y+=this.r.v;var $=this.data.d===3?-1:1;for(this.v._length=0,j=0;j<d;j+=1){st=x?T:L,G=x?R:N,D=x?tt:K;var h=st*Math.cos(y),p=st*Math.sin(y),O=h===0&&p===0?0:p/Math.sqrt(h*h+p*p),M=h===0&&p===0?0:-h/Math.sqrt(h*h+p*p);h+=+this.p.v[0],p+=+this.p.v[1],this.v.setTripleAt(h,p,h-O*D*G*$,p-M*D*G*$,h+O*D*G*$,p+M*D*G*$,j,!0),x=!x,y+=v*$}},convertPolygonToPath:function(){var d=Math.floor(this.pt.v),v=Math.PI*2/d,x=this.or.v,T=this.os.v,L=2*Math.PI*x/(d*4),R,N=-Math.PI*.5,tt=this.data.d===3?-1:1;for(N+=this.r.v,this.v._length=0,R=0;R<d;R+=1){var K=x*Math.cos(N),j=x*Math.sin(N),st=K===0&&j===0?0:j/Math.sqrt(K*K+j*j),G=K===0&&j===0?0:-K/Math.sqrt(K*K+j*j);K+=+this.p.v[0],j+=+this.p.v[1],this.v.setTripleAt(K,j,K-st*L*T*tt,j-G*L*T*tt,K+st*L*T*tt,j+G*L*T*tt,R,!0),N+=v*tt}this.paths.length=0,this.paths[0]=this.v}},W([wt],k),k})(),m=(function(){function k(_,d){this.v=At.newElement(),this.v.c=!0,this.localShapeCollection=Qe.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=_,this.comp=_.comp,this.frameId=-1,this.d=d.d,this.initDynamicPropertyContainer(_),this.p=H.getProp(_,d.p,1,0,this),this.s=H.getProp(_,d.s,1,0,this),this.r=H.getProp(_,d.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return k.prototype={convertRectToPath:function(){var d=this.p.v[0],v=this.p.v[1],x=this.s.v[0]/2,T=this.s.v[1]/2,L=Ie(x,T,this.r.v),R=L*(1-Z);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(d+x,v-T+L,d+x,v-T+L,d+x,v-T+R,0,!0),this.v.setTripleAt(d+x,v+T-L,d+x,v+T-R,d+x,v+T-L,1,!0),L!==0?(this.v.setTripleAt(d+x-L,v+T,d+x-L,v+T,d+x-R,v+T,2,!0),this.v.setTripleAt(d-x+L,v+T,d-x+R,v+T,d-x+L,v+T,3,!0),this.v.setTripleAt(d-x,v+T-L,d-x,v+T-L,d-x,v+T-R,4,!0),this.v.setTripleAt(d-x,v-T+L,d-x,v-T+R,d-x,v-T+L,5,!0),this.v.setTripleAt(d-x+L,v-T,d-x+L,v-T,d-x+R,v-T,6,!0),this.v.setTripleAt(d+x-L,v-T,d+x-R,v-T,d+x-L,v-T,7,!0)):(this.v.setTripleAt(d-x,v+T,d-x+R,v+T,d-x,v+T,2),this.v.setTripleAt(d-x,v-T,d-x,v-T+R,d-x,v-T,3))):(this.v.setTripleAt(d+x,v-T+L,d+x,v-T+R,d+x,v-T+L,0,!0),L!==0?(this.v.setTripleAt(d+x-L,v-T,d+x-L,v-T,d+x-R,v-T,1,!0),this.v.setTripleAt(d-x+L,v-T,d-x+R,v-T,d-x+L,v-T,2,!0),this.v.setTripleAt(d-x,v-T+L,d-x,v-T+L,d-x,v-T+R,3,!0),this.v.setTripleAt(d-x,v+T-L,d-x,v+T-R,d-x,v+T-L,4,!0),this.v.setTripleAt(d-x+L,v+T,d-x+L,v+T,d-x+R,v+T,5,!0),this.v.setTripleAt(d+x-L,v+T,d+x-R,v+T,d+x-L,v+T,6,!0),this.v.setTripleAt(d+x,v+T-L,d+x,v+T-L,d+x,v+T-R,7,!0)):(this.v.setTripleAt(d-x,v-T,d-x+R,v-T,d-x,v-T,1,!0),this.v.setTripleAt(d-x,v+T,d-x,v+T-R,d-x,v+T,2,!0),this.v.setTripleAt(d+x,v+T,d+x-R,v+T,d+x,v+T,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:s},W([wt],k),k})();function A(k,_,d){var v;if(d===3||d===4){var x=d===3?_.pt:_.ks,T=x.k;T.length?v=new w(k,_,d):v=new g(k,_,d)}else d===5?v=new m(k,_):d===6?v=new S(k,_):d===7&&(v=new z(k,_));return v.k&&k.addDynamicProperty(v),v}function C(){return g}function P(){return w}var F={};return F.getShapeProp=A,F.getConstructorFunction=C,F.getKeyframedConstructorFunction=P,F})();var Et=(function(){var t=Math.cos,e=Math.sin,i=Math.tan,s=Math.round;function n(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function a(h){if(h===0)return this;var p=t(h),O=e(h);return this._t(p,-O,0,0,O,p,0,0,0,0,1,0,0,0,0,1)}function c(h){if(h===0)return this;var p=t(h),O=e(h);return this._t(1,0,0,0,0,p,-O,0,0,O,p,0,0,0,0,1)}function g(h){if(h===0)return this;var p=t(h),O=e(h);return this._t(p,0,O,0,0,1,0,0,-O,0,p,0,0,0,0,1)}function f(h){if(h===0)return this;var p=t(h),O=e(h);return this._t(p,-O,0,0,O,p,0,0,0,0,1,0,0,0,0,1)}function w(h,p){return this._t(1,p,h,1,0,0)}function S(h,p){return this.shear(i(h),i(p))}function z(h,p){var O=t(p),M=e(p);return this._t(O,M,0,0,-M,O,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,i(h),1,0,0,0,0,1,0,0,0,0,1)._t(O,-M,0,0,M,O,0,0,0,0,1,0,0,0,0,1)}function m(h,p,O){return!O&&O!==0&&(O=1),h===1&&p===1&&O===1?this:this._t(h,0,0,0,0,p,0,0,0,0,O,0,0,0,0,1)}function A(h,p,O,M,q,Q,et,lt,ht,vt,It,ee,Lt,xt,Dt,ft){return this.props[0]=h,this.props[1]=p,this.props[2]=O,this.props[3]=M,this.props[4]=q,this.props[5]=Q,this.props[6]=et,this.props[7]=lt,this.props[8]=ht,this.props[9]=vt,this.props[10]=It,this.props[11]=ee,this.props[12]=Lt,this.props[13]=xt,this.props[14]=Dt,this.props[15]=ft,this}function C(h,p,O){return O=O||0,h!==0||p!==0||O!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,h,p,O,1):this}function P(h,p,O,M,q,Q,et,lt,ht,vt,It,ee,Lt,xt,Dt,ft){var Y=this.props;if(h===1&&p===0&&O===0&&M===0&&q===0&&Q===1&&et===0&&lt===0&&ht===0&&vt===0&&It===1&&ee===0)return Y[12]=Y[12]*h+Y[15]*Lt,Y[13]=Y[13]*Q+Y[15]*xt,Y[14]=Y[14]*It+Y[15]*Dt,Y[15]*=ft,this._identityCalculated=!1,this;var oe=Y[0],Ae=Y[1],le=Y[2],ie=Y[3],he=Y[4],ce=Y[5],zt=Y[6],Ee=Y[7],Pe=Y[8],Yt=Y[9],$e=Y[10],Kt=Y[11],je=Y[12],ts=Y[13],es=Y[14],is=Y[15];return Y[0]=oe*h+Ae*q+le*ht+ie*Lt,Y[1]=oe*p+Ae*Q+le*vt+ie*xt,Y[2]=oe*O+Ae*et+le*It+ie*Dt,Y[3]=oe*M+Ae*lt+le*ee+ie*ft,Y[4]=he*h+ce*q+zt*ht+Ee*Lt,Y[5]=he*p+ce*Q+zt*vt+Ee*xt,Y[6]=he*O+ce*et+zt*It+Ee*Dt,Y[7]=he*M+ce*lt+zt*ee+Ee*ft,Y[8]=Pe*h+Yt*q+$e*ht+Kt*Lt,Y[9]=Pe*p+Yt*Q+$e*vt+Kt*xt,Y[10]=Pe*O+Yt*et+$e*It+Kt*Dt,Y[11]=Pe*M+Yt*lt+$e*ee+Kt*ft,Y[12]=je*h+ts*q+es*ht+is*Lt,Y[13]=je*p+ts*Q+es*vt+is*xt,Y[14]=je*O+ts*et+es*It+is*Dt,Y[15]=je*M+ts*lt+es*ee+is*ft,this._identityCalculated=!1,this}function F(h){var p=h.props;return this.transform(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14],p[15])}function k(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function _(h){for(var p=0;p<16;){if(h.props[p]!==this.props[p])return!1;p+=1}return!0}function d(h){var p;for(p=0;p<16;p+=1)h.props[p]=this.props[p];return h}function v(h){var p;for(p=0;p<16;p+=1)this.props[p]=h[p]}function x(h,p,O){return{x:h*this.props[0]+p*this.props[4]+O*this.props[8]+this.props[12],y:h*this.props[1]+p*this.props[5]+O*this.props[9]+this.props[13],z:h*this.props[2]+p*this.props[6]+O*this.props[10]+this.props[14]}}function T(h,p,O){return h*this.props[0]+p*this.props[4]+O*this.props[8]+this.props[12]}function L(h,p,O){return h*this.props[1]+p*this.props[5]+O*this.props[9]+this.props[13]}function R(h,p,O){return h*this.props[2]+p*this.props[6]+O*this.props[10]+this.props[14]}function N(){var h=this.props[0]*this.props[5]-this.props[1]*this.props[4],p=this.props[5]/h,O=-this.props[1]/h,M=-this.props[4]/h,q=this.props[0]/h,Q=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/h,et=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/h,lt=new Et;return lt.props[0]=p,lt.props[1]=O,lt.props[4]=M,lt.props[5]=q,lt.props[12]=Q,lt.props[13]=et,lt}function tt(h){var p=this.getInverseMatrix();return p.applyToPointArray(h[0],h[1],h[2]||0)}function K(h){var p,O=h.length,M=[];for(p=0;p<O;p+=1)M[p]=tt(h[p]);return M}function j(h,p,O){var M=at("float32",6);if(this.isIdentity())M[0]=h[0],M[1]=h[1],M[2]=p[0],M[3]=p[1],M[4]=O[0],M[5]=O[1];else{var q=this.props[0],Q=this.props[1],et=this.props[4],lt=this.props[5],ht=this.props[12],vt=this.props[13];M[0]=h[0]*q+h[1]*et+ht,M[1]=h[0]*Q+h[1]*lt+vt,M[2]=p[0]*q+p[1]*et+ht,M[3]=p[0]*Q+p[1]*lt+vt,M[4]=O[0]*q+O[1]*et+ht,M[5]=O[0]*Q+O[1]*lt+vt}return M}function st(h,p,O){var M;return this.isIdentity()?M=[h,p,O]:M=[h*this.props[0]+p*this.props[4]+O*this.props[8]+this.props[12],h*this.props[1]+p*this.props[5]+O*this.props[9]+this.props[13],h*this.props[2]+p*this.props[6]+O*this.props[10]+this.props[14]],M}function G(h,p){if(this.isIdentity())return h+","+p;var O=this.props;return Math.round((h*O[0]+p*O[4]+O[12])*100)/100+","+Math.round((h*O[1]+p*O[5]+O[13])*100)/100}function D(){for(var h=0,p=this.props,O="matrix3d(",M=1e4;h<16;)O+=s(p[h]*M)/M,O+=h===15?")":",",h+=1;return O}function y(h){var p=1e4;return h<1e-6&&h>0||h>-1e-6&&h<0?s(h*p)/p:h}function $(){var h=this.props,p=y(h[0]),O=y(h[1]),M=y(h[4]),q=y(h[5]),Q=y(h[12]),et=y(h[13]);return"matrix("+p+","+O+","+M+","+q+","+Q+","+et+")"}return function(){this.reset=n,this.rotate=a,this.rotateX=c,this.rotateY=g,this.rotateZ=f,this.skew=S,this.skewFromAxis=z,this.shear=w,this.scale=m,this.setTransform=A,this.translate=C,this.transform=P,this.multiply=F,this.applyToPoint=x,this.applyToX=T,this.applyToY=L,this.applyToZ=R,this.applyToPointArray=st,this.applyToTriplePoints=j,this.applyToPointStringified=G,this.toCSS=D,this.to2dCSS=$,this.clone=d,this.cloneFromProps=v,this.equals=_,this.inversePoints=K,this.inversePoint=tt,this.getInverseMatrix=N,this._t=this.transform,this.isIdentity=k,this._identity=!0,this._identityCalculated=!1,this.props=at("float32",16),this.reset()}})();function ws(t){"@babel/helpers - typeof";return ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ws(t)}var ct={},Gi="__[STANDALONE]__",ur="__[ANIMATIONDATA]__",mr="";function dn(t){I(t)}function gr(){Gi===!0?gt.searchAnimations(ur,Gi,mr):gt.searchAnimations()}function un(t){Ka(t)}function mn(t){Ja(t)}function gn(t){return Gi===!0&&(t.animationData=JSON.parse(ur)),gt.loadAnimation(t)}function vn(t){if(typeof t=="string")switch(t){case"high":Ni(200);break;default:case"medium":Ni(50);break;case"low":Ni(10);break}else!isNaN(t)&&t>1&&Ni(t);pi()>=50?bt(!1):bt(!0)}function yn(){return typeof navigator<"u"}function _n(t,e){t==="expressions"&&Za(e)}function bn(t){switch(t){case"propertyFactory":return H;case"shapePropertyFactory":return qi;case"matrix":return Et;default:return null}}ct.play=gt.play,ct.pause=gt.pause,ct.setLocationHref=dn,ct.togglePause=gt.togglePause,ct.setSpeed=gt.setSpeed,ct.setDirection=gt.setDirection,ct.stop=gt.stop,ct.searchAnimations=gr,ct.registerAnimation=gt.registerAnimation,ct.loadAnimation=gn,ct.setSubframeRendering=un,ct.resize=gt.resize,ct.goToAndStop=gt.goToAndStop,ct.destroy=gt.destroy,ct.setQuality=vn,ct.inBrowser=yn,ct.installPlugin=_n,ct.freeze=gt.freeze,ct.unfreeze=gt.unfreeze,ct.setVolume=gt.setVolume,ct.mute=gt.mute,ct.unmute=gt.unmute,ct.getRegisteredAnimations=gt.getRegisteredAnimations,ct.useWebWorker=u,ct.setIDPrefix=mn,ct.__getFactory=bn,ct.version="5.13.0";function wn(){document.readyState==="complete"&&(clearInterval(Sn),gr())}function xn(t){for(var e=vr.split("&"),i=0;i<e.length;i+=1){var s=e[i].split("=");if(decodeURIComponent(s[0])==t)return decodeURIComponent(s[1])}return null}var vr="";if(Gi){var yr=document.getElementsByTagName("script"),kn=yr.length-1,_r=yr[kn]||{src:""};vr=_r.src?_r.src.replace(/^[^\?]+\??/,""):"",mr=xn("renderer")}var Sn=setInterval(wn,100);try{!((typeof zi>"u"?"undefined":ws(zi))==="object"&&typeof fs<"u")&&!(typeof define=="function"&&define.amd)&&(window.bodymovin=ct)}catch{}var _e=(function(){var t={},e={};t.registerModifier=i,t.getModifier=s;function i(n,a){e[n]||(e[n]=a)}function s(n,a,c){return new e[n](a,c)}return t})();function jt(){}jt.prototype.initModifierProperties=function(){},jt.prototype.addShapeToModifier=function(){},jt.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:Qe.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},jt.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=l,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},jt.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},W([wt],jt);function Gt(){}W([jt],Gt),Gt.prototype.initModifierProperties=function(t,e){this.s=H.getProp(t,e.s,0,.01,this),this.e=H.getProp(t,e.e,0,.01,this),this.o=H.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},Gt.prototype.addShapeToModifier=function(t){t.pathsData=[]},Gt.prototype.calculateShapeEdges=function(t,e,i,s,n){var a=[];e<=1?a.push({s:t,e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var c=[],g,f=a.length,w;for(g=0;g<f;g+=1)if(w=a[g],!(w.e*n<s||w.s*n>s+i)){var S,z;w.s*n<=s?S=0:S=(w.s*n-s)/i,w.e*n>=s+i?z=1:z=(w.e*n-s)/i,c.push([S,z])}return c.length||c.push([0,0]),c},Gt.prototype.releasePathsData=function(t){var e,i=t.length;for(e=0;e<i;e+=1)hr.release(t[e]);return t.length=0,t},Gt.prototype.processShapes=function(t){var e,i;if(this._mdf||t){var s=this.o.v%360/360;if(s<0&&(s+=1),this.s.v>1?e=1+s:this.s.v<0?e=0+s:e=this.s.v+s,this.e.v>1?i=1+s:this.e.v<0?i=0+s:i=this.e.v+s,e>i){var n=e;e=i,i=n}e=Math.round(e*1e4)*1e-4,i=Math.round(i*1e4)*1e-4,this.sValue=e,this.eValue=i}else e=this.sValue,i=this.eValue;var a,c,g=this.shapes.length,f,w,S,z,m,A=0;if(i===e)for(c=0;c<g;c+=1)this.shapes[c].localShapeCollection.releaseShapes(),this.shapes[c].shape._mdf=!0,this.shapes[c].shape.paths=this.shapes[c].localShapeCollection,this._mdf&&(this.shapes[c].pathsData.length=0);else if(i===1&&e===0||i===0&&e===1){if(this._mdf)for(c=0;c<g;c+=1)this.shapes[c].pathsData.length=0,this.shapes[c].shape._mdf=!0}else{var C=[],P,F;for(c=0;c<g;c+=1)if(P=this.shapes[c],!P.shape._mdf&&!this._mdf&&!t&&this.m!==2)P.shape.paths=P.localShapeCollection;else{if(a=P.shape.paths,w=a._length,m=0,!P.shape._mdf&&P.pathsData.length)m=P.totalShapeLength;else{for(S=this.releasePathsData(P.pathsData),f=0;f<w;f+=1)z=Qt.getSegmentsLength(a.shapes[f]),S.push(z),m+=z.totalLength;P.totalShapeLength=m,P.pathsData=S}A+=m,P.shape._mdf=!0}var k=e,_=i,d=0,v;for(c=g-1;c>=0;c-=1)if(P=this.shapes[c],P.shape._mdf){for(F=P.localShapeCollection,F.releaseShapes(),this.m===2&&g>1?(v=this.calculateShapeEdges(e,i,P.totalShapeLength,d,A),d+=P.totalShapeLength):v=[[k,_]],w=v.length,f=0;f<w;f+=1){k=v[f][0],_=v[f][1],C.length=0,_<=1?C.push({s:P.totalShapeLength*k,e:P.totalShapeLength*_}):k>=1?C.push({s:P.totalShapeLength*(k-1),e:P.totalShapeLength*(_-1)}):(C.push({s:P.totalShapeLength*k,e:P.totalShapeLength}),C.push({s:0,e:P.totalShapeLength*(_-1)}));var x=this.addShapes(P,C[0]);if(C[0].s!==C[0].e){if(C.length>1){var T=P.shape.paths.shapes[P.shape.paths._length-1];if(T.c){var L=x.pop();this.addPaths(x,F),x=this.addShapes(P,C[1],L)}else this.addPaths(x,F),x=this.addShapes(P,C[1])}this.addPaths(x,F)}}P.shape.paths=F}}},Gt.prototype.addPaths=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)e.addShape(t[i])},Gt.prototype.addSegment=function(t,e,i,s,n,a,c){n.setXYAt(e[0],e[1],"o",a),n.setXYAt(i[0],i[1],"i",a+1),c&&n.setXYAt(t[0],t[1],"v",a),n.setXYAt(s[0],s[1],"v",a+1)},Gt.prototype.addSegmentFromArray=function(t,e,i,s){e.setXYAt(t[1],t[5],"o",i),e.setXYAt(t[2],t[6],"i",i+1),s&&e.setXYAt(t[0],t[4],"v",i),e.setXYAt(t[3],t[7],"v",i+1)},Gt.prototype.addShapes=function(t,e,i){var s=t.pathsData,n=t.shape.paths.shapes,a,c=t.shape.paths._length,g,f,w=0,S,z,m,A,C=[],P,F=!0;for(i?(z=i._length,P=i._length):(i=At.newElement(),z=0,P=0),C.push(i),a=0;a<c;a+=1){for(m=s[a].lengths,i.c=n[a].c,f=n[a].c?m.length:m.length+1,g=1;g<f;g+=1)if(S=m[g-1],w+S.addedLength<e.s)w+=S.addedLength,i.c=!1;else if(w>e.e){i.c=!1;break}else e.s<=w&&e.e>=w+S.addedLength?(this.addSegment(n[a].v[g-1],n[a].o[g-1],n[a].i[g],n[a].v[g],i,z,F),F=!1):(A=Qt.getNewSegment(n[a].v[g-1],n[a].v[g],n[a].o[g-1],n[a].i[g],(e.s-w)/S.addedLength,(e.e-w)/S.addedLength,m[g-1]),this.addSegmentFromArray(A,i,z,F),F=!1,i.c=!1),w+=S.addedLength,z+=1;if(n[a].c&&m.length){if(S=m[g-1],w<=e.e){var k=m[g-1].addedLength;e.s<=w&&e.e>=w+k?(this.addSegment(n[a].v[g-1],n[a].o[g-1],n[a].i[0],n[a].v[0],i,z,F),F=!1):(A=Qt.getNewSegment(n[a].v[g-1],n[a].v[0],n[a].o[g-1],n[a].i[0],(e.s-w)/k,(e.e-w)/k,m[g-1]),this.addSegmentFromArray(A,i,z,F),F=!1,i.c=!1)}else i.c=!1;w+=S.addedLength,z+=1}if(i._length&&(i.setXYAt(i.v[P][0],i.v[P][1],"i",P),i.setXYAt(i.v[i._length-1][0],i.v[i._length-1][1],"o",i._length-1)),w>e.e)break;a<c-1&&(i=At.newElement(),F=!0,C.push(i),z=0)}return C};function gi(){}W([jt],gi),gi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=H.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},gi.prototype.processPath=function(t,e){var i=e/100,s=[0,0],n=t._length,a=0;for(a=0;a<n;a+=1)s[0]+=t.v[a][0],s[1]+=t.v[a][1];s[0]/=n,s[1]/=n;var c=At.newElement();c.c=t.c;var g,f,w,S,z,m;for(a=0;a<n;a+=1)g=t.v[a][0]+(s[0]-t.v[a][0])*i,f=t.v[a][1]+(s[1]-t.v[a][1])*i,w=t.o[a][0]+(s[0]-t.o[a][0])*-i,S=t.o[a][1]+(s[1]-t.o[a][1])*-i,z=t.i[a][0]+(s[0]-t.i[a][0])*-i,m=t.i[a][1]+(s[1]-t.i[a][1])*-i,c.setTripleAt(g,f,w,S,z,m,a);return c},gi.prototype.processShapes=function(t){var e,i,s=this.shapes.length,n,a,c=this.amount.v;if(c!==0){var g,f;for(i=0;i<s;i+=1){if(g=this.shapes[i],f=g.localShapeCollection,!(!g.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),g.shape._mdf=!0,e=g.shape.paths.shapes,a=g.shape.paths._length,n=0;n<a;n+=1)f.addShape(this.processPath(e[n],c));g.shape.paths=g.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var xs=(function(){var t=[0,0];function e(f){var w=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||w,this.a&&f.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&f.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&f.skewFromAxis(-this.sk.v,this.sa.v),this.r?f.rotate(-this.r.v):f.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?f.translate(this.px.v,this.py.v,-this.pz.v):f.translate(this.px.v,this.py.v,0):f.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function i(f){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||f){var w;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var S,z;if(w=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(S=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/w,0),z=this.p.getValueAtTime(this.p.keyframes[0].t/w,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(S=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/w,0),z=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/w,0)):(S=this.p.pv,z=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/w,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){S=[],z=[];var m=this.px,A=this.py;m._caching.lastFrame+m.offsetTime<=m.keyframes[0].t?(S[0]=m.getValueAtTime((m.keyframes[0].t+.01)/w,0),S[1]=A.getValueAtTime((A.keyframes[0].t+.01)/w,0),z[0]=m.getValueAtTime(m.keyframes[0].t/w,0),z[1]=A.getValueAtTime(A.keyframes[0].t/w,0)):m._caching.lastFrame+m.offsetTime>=m.keyframes[m.keyframes.length-1].t?(S[0]=m.getValueAtTime(m.keyframes[m.keyframes.length-1].t/w,0),S[1]=A.getValueAtTime(A.keyframes[A.keyframes.length-1].t/w,0),z[0]=m.getValueAtTime((m.keyframes[m.keyframes.length-1].t-.01)/w,0),z[1]=A.getValueAtTime((A.keyframes[A.keyframes.length-1].t-.01)/w,0)):(S=[m.pv,A.pv],z[0]=m.getValueAtTime((m._caching.lastFrame+m.offsetTime-.01)/w,m.offsetTime),z[1]=A.getValueAtTime((A._caching.lastFrame+A.offsetTime-.01)/w,A.offsetTime))}else z=t,S=z;this.v.rotate(-Math.atan2(S[1]-z[1],S[0]-z[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function s(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function n(){}function a(f){this._addDynamicProperty(f),this.elem.addDynamicProperty(f),this._isDirty=!0}function c(f,w,S){if(this.elem=f,this.frameId=-1,this.propType="transform",this.data=w,this.v=new Et,this.pre=new Et,this.appliedTransformations=0,this.initDynamicPropertyContainer(S||f),w.p&&w.p.s?(this.px=H.getProp(f,w.p.x,0,0,this),this.py=H.getProp(f,w.p.y,0,0,this),w.p.z&&(this.pz=H.getProp(f,w.p.z,0,0,this))):this.p=H.getProp(f,w.p||{k:[0,0,0]},1,0,this),w.rx){if(this.rx=H.getProp(f,w.rx,0,dt,this),this.ry=H.getProp(f,w.ry,0,dt,this),this.rz=H.getProp(f,w.rz,0,dt,this),w.or.k[0].ti){var z,m=w.or.k.length;for(z=0;z<m;z+=1)w.or.k[z].to=null,w.or.k[z].ti=null}this.or=H.getProp(f,w.or,1,dt,this),this.or.sh=!0}else this.r=H.getProp(f,w.r||{k:0},0,dt,this);w.sk&&(this.sk=H.getProp(f,w.sk,0,dt,this),this.sa=H.getProp(f,w.sa,0,dt,this)),this.a=H.getProp(f,w.a||{k:[0,0,0]},1,0,this),this.s=H.getProp(f,w.s||{k:[100,100,100]},1,.01,this),w.o?this.o=H.getProp(f,w.o,0,.01,f):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}c.prototype={applyToMatrix:e,getValue:i,precalculateMatrix:s,autoOrient:n},W([wt],c),c.prototype.addDynamicProperty=a,c.prototype._addDynamicProperty=wt.prototype.addDynamicProperty;function g(f,w,S){return new c(f,w,S)}return{getTransformProperty:g}})();function te(){}W([jt],te),te.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=H.getProp(t,e.c,0,null,this),this.o=H.getProp(t,e.o,0,null,this),this.tr=xs.getTransformProperty(t,e.tr,this),this.so=H.getProp(t,e.tr.so,0,.01,this),this.eo=H.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Et,this.rMatrix=new Et,this.sMatrix=new Et,this.tMatrix=new Et,this.matrix=new Et},te.prototype.applyTransforms=function(t,e,i,s,n,a){var c=a?-1:1,g=s.s.v[0]+(1-s.s.v[0])*(1-n),f=s.s.v[1]+(1-s.s.v[1])*(1-n);t.translate(s.p.v[0]*c*n,s.p.v[1]*c*n,s.p.v[2]),e.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),e.rotate(-s.r.v*c*n),e.translate(s.a.v[0],s.a.v[1],s.a.v[2]),i.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),i.scale(a?1/g:g,a?1/f:f),i.translate(s.a.v[0],s.a.v[1],s.a.v[2])},te.prototype.init=function(t,e,i,s){for(this.elem=t,this.arr=e,this.pos=i,this.elemsData=s,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[i]);i>0;)i-=1,this._elements.unshift(e[i]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},te.prototype.resetElements=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},te.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},te.prototype.changeGroupRender=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)t[i]._render=e,t[i].ty==="gr"&&this.changeGroupRender(t[i].it,e)},te.prototype.processShapes=function(t){var e,i,s,n,a,c=!1;if(this._mdf||t){var g=Math.ceil(this.c.v);if(this._groups.length<g){for(;this._groups.length<g;){var f={it:this.cloneElements(this._elements),ty:"gr"};f.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,f),this._groups.splice(0,0,f),this._currentCopies+=1}this.elem.reloadShapes(),c=!0}a=0;var w;for(s=0;s<=this._groups.length-1;s+=1){if(w=a<g,this._groups[s]._render=w,this.changeGroupRender(this._groups[s].it,w),!w){var S=this.elemsData[s].it,z=S[S.length-1];z.transform.op.v!==0?(z.transform.op._mdf=!0,z.transform.op.v=0):z.transform.op._mdf=!1}a+=1}this._currentCopies=g;var m=this.o.v,A=m%1,C=m>0?Math.floor(m):Math.ceil(m),P=this.pMatrix.props,F=this.rMatrix.props,k=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var _=0;if(m>0){for(;_<C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),_+=1;A&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,A,!1),_+=A)}else if(m<0){for(;_>C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),_-=1;A&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-A,!0),_-=A)}s=this.data.m===1?0:this._currentCopies-1,n=this.data.m===1?1:-1,a=this._currentCopies;for(var d,v;a;){if(e=this.elemsData[s].it,i=e[e.length-1].transform.mProps.v.props,v=i.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(s/(this._currentCopies-1)),_!==0){for((s!==0&&n===1||s!==this._currentCopies-1&&n===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(F[0],F[1],F[2],F[3],F[4],F[5],F[6],F[7],F[8],F[9],F[10],F[11],F[12],F[13],F[14],F[15]),this.matrix.transform(k[0],k[1],k[2],k[3],k[4],k[5],k[6],k[7],k[8],k[9],k[10],k[11],k[12],k[13],k[14],k[15]),this.matrix.transform(P[0],P[1],P[2],P[3],P[4],P[5],P[6],P[7],P[8],P[9],P[10],P[11],P[12],P[13],P[14],P[15]),d=0;d<v;d+=1)i[d]=this.matrix.props[d];this.matrix.reset()}else for(this.matrix.reset(),d=0;d<v;d+=1)i[d]=this.matrix.props[d];_+=1,a-=1,s+=n}}else for(a=this._currentCopies,s=0,n=1;a;)e=this.elemsData[s].it,i=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,s+=n;return c},te.prototype.addShape=function(){};function vi(){}W([jt],vi),vi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=H.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},vi.prototype.processPath=function(t,e){var i=At.newElement();i.c=t.c;var s,n=t._length,a,c,g,f,w,S,z=0,m,A,C,P,F,k;for(s=0;s<n;s+=1)a=t.v[s],g=t.o[s],c=t.i[s],a[0]===g[0]&&a[1]===g[1]&&a[0]===c[0]&&a[1]===c[1]?(s===0||s===n-1)&&!t.c?(i.setTripleAt(a[0],a[1],g[0],g[1],c[0],c[1],z),z+=1):(s===0?f=t.v[n-1]:f=t.v[s-1],w=Math.sqrt(Math.pow(a[0]-f[0],2)+Math.pow(a[1]-f[1],2)),S=w?Math.min(w/2,e)/w:0,F=a[0]+(f[0]-a[0])*S,m=F,k=a[1]-(a[1]-f[1])*S,A=k,C=m-(m-a[0])*Z,P=A-(A-a[1])*Z,i.setTripleAt(m,A,C,P,F,k,z),z+=1,s===n-1?f=t.v[0]:f=t.v[s+1],w=Math.sqrt(Math.pow(a[0]-f[0],2)+Math.pow(a[1]-f[1],2)),S=w?Math.min(w/2,e)/w:0,C=a[0]+(f[0]-a[0])*S,m=C,P=a[1]+(f[1]-a[1])*S,A=P,F=m-(m-a[0])*Z,k=A-(A-a[1])*Z,i.setTripleAt(m,A,C,P,F,k,z),z+=1):(i.setTripleAt(t.v[s][0],t.v[s][1],t.o[s][0],t.o[s][1],t.i[s][0],t.i[s][1],z),z+=1);return i},vi.prototype.processShapes=function(t){var e,i,s=this.shapes.length,n,a,c=this.rd.v;if(c!==0){var g,f;for(i=0;i<s;i+=1){if(g=this.shapes[i],f=g.localShapeCollection,!(!g.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),g.shape._mdf=!0,e=g.shape.paths.shapes,a=g.shape.paths._length,n=0;n<a;n+=1)f.addShape(this.processPath(e[n],c));g.shape.paths=g.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Yi(t,e){return Math.abs(t-e)*1e5<=Math.min(Math.abs(t),Math.abs(e))}function ks(t){return Math.abs(t)<=1e-5}function br(t,e,i){return t*(1-i)+e*i}function be(t,e,i){return[br(t[0],e[0],i),br(t[1],e[1],i)]}function An(t,e,i){if(t===0)return[];var s=e*e-4*t*i;if(s<0)return[];var n=-e/(2*t);if(s===0)return[n];var a=Math.sqrt(s)/(2*t);return[n-a,n+a]}function wr(t,e,i,s){return[-t+3*e-3*i+s,3*t-6*e+3*i,-3*t+3*e,t]}function xr(t){return new ut(t,t,t,t,!1)}function ut(t,e,i,s,n){n&&ei(t,e)&&(e=be(t,s,1/3)),n&&ei(i,s)&&(i=be(t,s,2/3));var a=wr(t[0],e[0],i[0],s[0]),c=wr(t[1],e[1],i[1],s[1]);this.a=[a[0],c[0]],this.b=[a[1],c[1]],this.c=[a[2],c[2]],this.d=[a[3],c[3]],this.points=[t,e,i,s]}ut.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},ut.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},ut.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},ut.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},ut.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(ks(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,i=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(i<0)return[];var s=Math.sqrt(i);return ks(s)?s>0&&s<1?[e]:[]:[e-s,e+s].filter(function(n){return n>0&&n<1})},ut.prototype.split=function(t){if(t<=0)return[xr(this.points[0]),this];if(t>=1)return[this,xr(this.points[this.points.length-1])];var e=be(this.points[0],this.points[1],t),i=be(this.points[1],this.points[2],t),s=be(this.points[2],this.points[3],t),n=be(e,i,t),a=be(i,s,t),c=be(n,a,t);return[new ut(this.points[0],e,n,c,!0),new ut(c,a,s,this.points[3],!0)]};function kr(t,e){var i=t.points[0][e],s=t.points[t.points.length-1][e];if(i>s){var n=s;s=i,i=n}for(var a=An(3*t.a[e],2*t.b[e],t.c[e]),c=0;c<a.length;c+=1)if(a[c]>0&&a[c]<1){var g=t.point(a[c])[e];g<i?i=g:g>s&&(s=g)}return{min:i,max:s}}ut.prototype.bounds=function(){return{x:kr(this,0),y:kr(this,1)}},ut.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}};function Ki(t,e,i){var s=t.boundingBox();return{cx:s.cx,cy:s.cy,width:s.width,height:s.height,bez:t,t:(e+i)/2,t1:e,t2:i}}function Sr(t){var e=t.bez.split(.5);return[Ki(e[0],t.t1,t.t),Ki(e[1],t.t,t.t2)]}function En(t,e){return Math.abs(t.cx-e.cx)*2<t.width+e.width&&Math.abs(t.cy-e.cy)*2<t.height+e.height}function yi(t,e,i,s,n,a){if(En(t,e)){if(i>=a||t.width<=s&&t.height<=s&&e.width<=s&&e.height<=s){n.push([t.t,e.t]);return}var c=Sr(t),g=Sr(e);yi(c[0],g[0],i+1,s,n,a),yi(c[0],g[1],i+1,s,n,a),yi(c[1],g[0],i+1,s,n,a),yi(c[1],g[1],i+1,s,n,a)}}ut.prototype.intersections=function(t,e,i){e===void 0&&(e=2),i===void 0&&(i=7);var s=[];return yi(Ki(this,0,1),Ki(t,0,1),0,e,s,i),s},ut.shapeSegment=function(t,e){var i=(e+1)%t.length();return new ut(t.v[e],t.o[e],t.i[i],t.v[i],!0)},ut.shapeSegmentInverted=function(t,e){var i=(e+1)%t.length();return new ut(t.v[i],t.i[i],t.o[e],t.v[e],!0)};function Ss(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function Xi(t,e,i,s){var n=[t[0],t[1],1],a=[e[0],e[1],1],c=[i[0],i[1],1],g=[s[0],s[1],1],f=Ss(Ss(n,a),Ss(c,g));return ks(f[2])?null:[f[0]/f[2],f[1]/f[2]]}function ti(t,e,i){return[t[0]+Math.cos(e)*i,t[1]-Math.sin(e)*i]}function As(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function ei(t,e){return Yi(t[0],e[0])&&Yi(t[1],e[1])}function _i(){}W([jt],_i),_i.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=H.getProp(t,e.s,0,null,this),this.frequency=H.getProp(t,e.r,0,null,this),this.pointsType=H.getProp(t,e.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function Ar(t,e,i,s,n,a,c){var g=i-Math.PI/2,f=i+Math.PI/2,w=e[0]+Math.cos(i)*s*n,S=e[1]-Math.sin(i)*s*n;t.setTripleAt(w,S,w+Math.cos(g)*a,S-Math.sin(g)*a,w+Math.cos(f)*c,S-Math.sin(f)*c,t.length())}function Pn(t,e){var i=[e[0]-t[0],e[1]-t[1]],s=-Math.PI*.5,n=[Math.cos(s)*i[0]-Math.sin(s)*i[1],Math.sin(s)*i[0]+Math.cos(s)*i[1]];return n}function $n(t,e){var i=e===0?t.length()-1:e-1,s=(e+1)%t.length(),n=t.v[i],a=t.v[s],c=Pn(n,a);return Math.atan2(0,1)-Math.atan2(c[1],c[0])}function Er(t,e,i,s,n,a,c){var g=$n(e,i),f=e.v[i%e._length],w=e.v[i===0?e._length-1:i-1],S=e.v[(i+1)%e._length],z=a===2?Math.sqrt(Math.pow(f[0]-w[0],2)+Math.pow(f[1]-w[1],2)):0,m=a===2?Math.sqrt(Math.pow(f[0]-S[0],2)+Math.pow(f[1]-S[1],2)):0;Ar(t,e.v[i%e._length],g,c,s,m/((n+1)*2),z/((n+1)*2),a)}function Cn(t,e,i,s,n,a){for(var c=0;c<s;c+=1){var g=(c+1)/(s+1),f=n===2?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,w=e.normalAngle(g),S=e.point(g);Ar(t,S,w,a,i,f/((s+1)*2),f/((s+1)*2),n),a=-a}return a}_i.prototype.processPath=function(t,e,i,s){var n=t._length,a=At.newElement();if(a.c=t.c,t.c||(n-=1),n===0)return a;var c=-1,g=ut.shapeSegment(t,0);Er(a,t,0,e,i,s,c);for(var f=0;f<n;f+=1)c=Cn(a,g,e,i,s,-c),f===n-1&&!t.c?g=null:g=ut.shapeSegment(t,(f+1)%n),Er(a,t,f+1,e,i,s,c);return a},_i.prototype.processShapes=function(t){var e,i,s=this.shapes.length,n,a,c=this.amplitude.v,g=Math.max(0,Math.round(this.frequency.v)),f=this.pointsType.v;if(c!==0){var w,S;for(i=0;i<s;i+=1){if(w=this.shapes[i],S=w.localShapeCollection,!(!w.shape._mdf&&!this._mdf&&!t))for(S.releaseShapes(),w.shape._mdf=!0,e=w.shape.paths.shapes,a=w.shape.paths._length,n=0;n<a;n+=1)S.addShape(this.processPath(e[n],c,g,f));w.shape.paths=w.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Es(t,e,i){var s=Math.atan2(e[0]-t[0],e[1]-t[1]);return[ti(t,s,i),ti(e,s,i)]}function ii(t,e){var i,s,n,a,c,g,f;f=Es(t.points[0],t.points[1],e),i=f[0],s=f[1],f=Es(t.points[1],t.points[2],e),n=f[0],a=f[1],f=Es(t.points[2],t.points[3],e),c=f[0],g=f[1];var w=Xi(i,s,n,a);w===null&&(w=s);var S=Xi(c,g,n,a);return S===null&&(S=c),new ut(i,w,S,g)}function Pr(t,e,i,s,n){var a=e.points[3],c=i.points[0];if(s===3||ei(a,c))return a;if(s===2){var g=-e.tangentAngle(1),f=-i.tangentAngle(0)+Math.PI,w=Xi(a,ti(a,g+Math.PI/2,100),c,ti(c,g+Math.PI/2,100)),S=w?As(w,a):As(a,c)/2,z=ti(a,g,2*S*Z);return t.setXYAt(z[0],z[1],"o",t.length()-1),z=ti(c,f,2*S*Z),t.setTripleAt(c[0],c[1],c[0],c[1],z[0],z[1],t.length()),c}var m=ei(a,e.points[2])?e.points[0]:e.points[2],A=ei(c,i.points[1])?i.points[3]:i.points[1],C=Xi(m,a,c,A);return C&&As(C,a)<n?(t.setTripleAt(C[0],C[1],C[0],C[1],C[0],C[1],t.length()),C):a}function $r(t,e){var i=t.intersections(e);return i.length&&Yi(i[0][0],1)&&i.shift(),i.length?i[0]:null}function Cr(t,e){var i=t.slice(),s=e.slice(),n=$r(t[t.length-1],e[0]);return n&&(i[t.length-1]=t[t.length-1].split(n[0])[0],s[0]=e[0].split(n[1])[1]),t.length>1&&e.length>1&&(n=$r(t[0],e[e.length-1]),n)?[[t[0].split(n[0])[0]],[e[e.length-1].split(n[1])[1]]]:[i,s]}function Tn(t){for(var e,i=1;i<t.length;i+=1)e=Cr(t[i-1],t[i]),t[i-1]=e[0],t[i]=e[1];return t.length>1&&(e=Cr(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function Tr(t,e){var i=t.inflectionPoints(),s,n,a,c;if(i.length===0)return[ii(t,e)];if(i.length===1||Yi(i[1],1))return a=t.split(i[0]),s=a[0],n=a[1],[ii(s,e),ii(n,e)];a=t.split(i[0]),s=a[0];var g=(i[1]-i[0])/(1-i[0]);return a=a[1].split(g),c=a[0],n=a[1],[ii(s,e),ii(c,e),ii(n,e)]}function bi(){}W([jt],bi),bi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=H.getProp(t,e.a,0,null,this),this.miterLimit=H.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=this.amount.effectsSequence.length!==0},bi.prototype.processPath=function(t,e,i,s){var n=At.newElement();n.c=t.c;var a=t.length();t.c||(a-=1);var c,g,f,w=[];for(c=0;c<a;c+=1)f=ut.shapeSegment(t,c),w.push(Tr(f,e));if(!t.c)for(c=a-1;c>=0;c-=1)f=ut.shapeSegmentInverted(t,c),w.push(Tr(f,e));w=Tn(w);var S=null,z=null;for(c=0;c<w.length;c+=1){var m=w[c];for(z&&(S=Pr(n,z,m[0],i,s)),z=m[m.length-1],g=0;g<m.length;g+=1)f=m[g],S&&ei(f.points[0],S)?n.setXYAt(f.points[1][0],f.points[1][1],"o",n.length()-1):n.setTripleAt(f.points[0][0],f.points[0][1],f.points[1][0],f.points[1][1],f.points[0][0],f.points[0][1],n.length()),n.setTripleAt(f.points[3][0],f.points[3][1],f.points[3][0],f.points[3][1],f.points[2][0],f.points[2][1],n.length()),S=f.points[3]}return w.length&&Pr(n,z,w[0][0],i,s),n},bi.prototype.processShapes=function(t){var e,i,s=this.shapes.length,n,a,c=this.amount.v,g=this.miterLimit.v,f=this.lineJoin;if(c!==0){var w,S;for(i=0;i<s;i+=1){if(w=this.shapes[i],S=w.localShapeCollection,!(!w.shape._mdf&&!this._mdf&&!t))for(S.releaseShapes(),w.shape._mdf=!0,e=w.shape.paths.shapes,a=w.shape.paths._length,n=0;n<a;n+=1)S.addShape(this.processPath(e[n],c,f,g));w.shape.paths=w.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Mr(t){for(var e=t.fStyle?t.fStyle.split(" "):[],i="normal",s="normal",n=e.length,a,c=0;c<n;c+=1)switch(a=e[c].toLowerCase(),a){case"italic":s="italic";break;case"bold":i="700";break;case"black":i="900";break;case"medium":i="500";break;case"regular":case"normal":i="400";break;case"light":case"thin":i="200";break;default:break}return{style:s,weight:t.fWeight||i}}var Ne=(function(){var t=5e3,e={w:0,size:0,shapes:[],data:{shapes:[]}},i=[];i=i.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var s=127988,n=917631,a=917601,c=917626,g=65039,f=8205,w=127462,S=127487,z=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function m(y){var $=y.split(","),h,p=$.length,O=[];for(h=0;h<p;h+=1)$[h]!=="sans-serif"&&$[h]!=="monospace"&&O.push($[h]);return O.join(",")}function A(y,$){var h=B("span");h.setAttribute("aria-hidden",!0),h.style.fontFamily=$;var p=B("span");p.innerText="giItT1WQy@!-/#",h.style.position="absolute",h.style.left="-10000px",h.style.top="-10000px",h.style.fontSize="300px",h.style.fontVariant="normal",h.style.fontStyle="normal",h.style.fontWeight="normal",h.style.letterSpacing="0",h.appendChild(p),document.body.appendChild(h);var O=p.offsetWidth;return p.style.fontFamily=m(y)+", "+$,{node:p,w:O,parent:h}}function C(){var y,$=this.fonts.length,h,p,O=$;for(y=0;y<$;y+=1)this.fonts[y].loaded?O-=1:this.fonts[y].fOrigin==="n"||this.fonts[y].origin===0?this.fonts[y].loaded=!0:(h=this.fonts[y].monoCase.node,p=this.fonts[y].monoCase.w,h.offsetWidth!==p?(O-=1,this.fonts[y].loaded=!0):(h=this.fonts[y].sansCase.node,p=this.fonts[y].sansCase.w,h.offsetWidth!==p&&(O-=1,this.fonts[y].loaded=!0)),this.fonts[y].loaded&&(this.fonts[y].sansCase.parent.parentNode.removeChild(this.fonts[y].sansCase.parent),this.fonts[y].monoCase.parent.parentNode.removeChild(this.fonts[y].monoCase.parent)));O!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function P(y,$){var h=document.body&&$?"svg":"canvas",p,O=Mr(y);if(h==="svg"){var M=it("text");M.style.fontSize="100px",M.setAttribute("font-family",y.fFamily),M.setAttribute("font-style",O.style),M.setAttribute("font-weight",O.weight),M.textContent="1",y.fClass?(M.style.fontFamily="inherit",M.setAttribute("class",y.fClass)):M.style.fontFamily=y.fFamily,$.appendChild(M),p=M}else{var q=new OffscreenCanvas(500,500).getContext("2d");q.font=O.style+" "+O.weight+" 100px "+y.fFamily,p=q}function Q(et){return h==="svg"?(p.textContent=et,p.getComputedTextLength()):p.measureText(et).width}return{measureText:Q}}function F(y,$){if(!y){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=y.list;return}if(!document.body){this.isLoaded=!0,y.list.forEach(function(It){It.helper=P(It),It.cache={}}),this.fonts=y.list;return}var h=y.list,p,O=h.length,M=O;for(p=0;p<O;p+=1){var q=!0,Q,et;if(h[p].loaded=!1,h[p].monoCase=A(h[p].fFamily,"monospace"),h[p].sansCase=A(h[p].fFamily,"sans-serif"),!h[p].fPath)h[p].loaded=!0,M-=1;else if(h[p].fOrigin==="p"||h[p].origin===3){if(Q=document.querySelectorAll('style[f-forigin="p"][f-family="'+h[p].fFamily+'"], style[f-origin="3"][f-family="'+h[p].fFamily+'"]'),Q.length>0&&(q=!1),q){var lt=B("style");lt.setAttribute("f-forigin",h[p].fOrigin),lt.setAttribute("f-origin",h[p].origin),lt.setAttribute("f-family",h[p].fFamily),lt.type="text/css",lt.innerText="@font-face {font-family: "+h[p].fFamily+"; font-style: normal; src: url('"+h[p].fPath+"');}",$.appendChild(lt)}}else if(h[p].fOrigin==="g"||h[p].origin===1){for(Q=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),et=0;et<Q.length;et+=1)Q[et].href.indexOf(h[p].fPath)!==-1&&(q=!1);if(q){var ht=B("link");ht.setAttribute("f-forigin",h[p].fOrigin),ht.setAttribute("f-origin",h[p].origin),ht.type="text/css",ht.rel="stylesheet",ht.href=h[p].fPath,document.body.appendChild(ht)}}else if(h[p].fOrigin==="t"||h[p].origin===2){for(Q=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),et=0;et<Q.length;et+=1)h[p].fPath===Q[et].src&&(q=!1);if(q){var vt=B("link");vt.setAttribute("f-forigin",h[p].fOrigin),vt.setAttribute("f-origin",h[p].origin),vt.setAttribute("rel","stylesheet"),vt.setAttribute("href",h[p].fPath),$.appendChild(vt)}}h[p].helper=P(h[p],$),h[p].cache={},this.fonts.push(h[p])}M===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function k(y){if(y){this.chars||(this.chars=[]);var $,h=y.length,p,O=this.chars.length,M;for($=0;$<h;$+=1){for(p=0,M=!1;p<O;)this.chars[p].style===y[$].style&&this.chars[p].fFamily===y[$].fFamily&&this.chars[p].ch===y[$].ch&&(M=!0),p+=1;M||(this.chars.push(y[$]),O+=1)}}}function _(y,$,h){for(var p=0,O=this.chars.length;p<O;){if(this.chars[p].ch===y&&this.chars[p].style===$&&this.chars[p].fFamily===h)return this.chars[p];p+=1}return(typeof y=="string"&&y.charCodeAt(0)!==13||!y)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",y,$,h)),e}function d(y,$,h){var p=this.getFontByName($),O=y;if(!p.cache[O]){var M=p.helper;if(y===" "){var q=M.measureText("|"+y+"|"),Q=M.measureText("||");p.cache[O]=(q-Q)/100}else p.cache[O]=M.measureText(y)/100}return p.cache[O]*h}function v(y){for(var $=0,h=this.fonts.length;$<h;){if(this.fonts[$].fName===y)return this.fonts[$];$+=1}return this.fonts[0]}function x(y){var $=0,h=y.charCodeAt(0);if(h>=55296&&h<=56319){var p=y.charCodeAt(1);p>=56320&&p<=57343&&($=(h-55296)*1024+p-56320+65536)}return $}function T(y,$){var h=y.toString(16)+$.toString(16);return z.indexOf(h)!==-1}function L(y){return y===f}function R(y){return y===g}function N(y){var $=x(y);return $>=w&&$<=S}function tt(y){return N(y.substr(0,2))&&N(y.substr(2,2))}function K(y){return i.indexOf(y)!==-1}function j(y,$){var h=x(y.substr($,2));if(h!==s)return!1;var p=0;for($+=2;p<5;){if(h=x(y.substr($,2)),h<a||h>c)return!1;p+=1,$+=2}return x(y.substr($,2))===n}function st(){this.isLoaded=!0}var G=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};G.isModifier=T,G.isZeroWidthJoiner=L,G.isFlagEmoji=tt,G.isRegionalCode=N,G.isCombinedCharacter=K,G.isRegionalFlag=j,G.isVariationSelector=R,G.BLACK_FLAG_CODE_POINT=s;var D={addChars:k,addFonts:F,getCharData:_,getFontByName:v,measureText:d,checkLoadedFonts:C,setIsLoaded:st};return G.prototype=D,G})();function Fr(t){this.animationData=t}Fr.prototype.getProp=function(t){return this.animationData.slots&&this.animationData.slots[t.sid]?Object.assign(t,this.animationData.slots[t.sid].p):t};function Mn(t){return new Fr(t)}function Zi(){}Zi.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,i=this.renderableComponents.length;for(e=0;e<i;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var Ps=(function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}})();function Fn(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function In(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function Ln(t,e,i){this.p=H.getProp(e,t.v,1,0,i)}function zn(t,e,i){this.p=H.getProp(e,t.v,1,0,i)}function On(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function Rn(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function Vn(t,e,i){this.p=H.getProp(e,t.v,0,0,i)}function Dn(){this.p={}}function Ir(t,e){var i=t.ef||[];this.effectElements=[];var s,n=i.length,a;for(s=0;s<n;s+=1)a=new wi(i[s],e),this.effectElements.push(a)}function wi(t,e){this.init(t,e)}W([wt],wi),wi.prototype.getValue=wi.prototype.iterateDynamicProperties,wi.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var i,s=this.data.ef.length,n,a=this.data.ef;for(i=0;i<s;i+=1){switch(n=null,a[i].ty){case 0:n=new Fn(a[i],e,this);break;case 1:n=new In(a[i],e,this);break;case 2:n=new Ln(a[i],e,this);break;case 3:n=new zn(a[i],e,this);break;case 4:case 7:n=new Vn(a[i],e,this);break;case 10:n=new On(a[i],e,this);break;case 11:n=new Rn(a[i],e,this);break;case 5:n=new Ir(a[i],e,this);break;default:n=new Dn(a[i],e,this);break}n&&this.effectElements.push(n)}};function we(){}we.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,i=this.data.masksProperties.length;e<i;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){var e=ar();if(e){var i=e("layer"),s=e("effects"),n=e("shape"),a=e("text"),c=e("comp");this.layerInterface=i(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var g=s.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(g),this.data.ty===0||this.data.xt?this.compInterface=c(this):this.data.ty===4?(this.layerInterface.shapeInterface=n(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=a(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var e=Ps(this.data.bm),i=this.baseElement||this.layerElement;i.style["mix-blend-mode"]=e},initBaseData:function(e,i,s){this.globalData=i,this.comp=s,this.data=e,this.layerId=Mt(),this.data.sr||(this.data.sr=1),this.effectsManager=new Ir(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function xe(){}xe.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,i){var s,n=this.dynamicProperties.length;for(s=0;s<n;s+=1)(i||this._isParent&&this.dynamicProperties[s].propType==="transform")&&(this.dynamicProperties[s].getValue(),this.dynamicProperties[s]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function ke(t,e,i){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,i)}ke.prototype.prepareFrame=function(){},W([Zi,we,xe],ke),ke.prototype.getBaseElement=function(){return null},ke.prototype.renderFrame=function(){},ke.prototype.destroy=function(){},ke.prototype.initExpressions=function(){var t=ar();if(t){var e=t("footage");this.layerInterface=e(this)}},ke.prototype.getFootageData=function(){return this.footageData};function Ft(t,e,i){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,i),this._isPlaying=!1,this._canPlay=!1;var s=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(s),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?H.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=H.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}Ft.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var i=this._volume*this._volumeMultiplier;this._previousVolume!==i&&(this._previousVolume=i,this.audio.volume(i))},W([Zi,we,xe],Ft),Ft.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},Ft.prototype.show=function(){},Ft.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},Ft.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},Ft.prototype.resume=function(){this._canPlay=!0},Ft.prototype.setRate=function(t){this.audio.rate(t)},Ft.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},Ft.prototype.getBaseElement=function(){return null},Ft.prototype.destroy=function(){},Ft.prototype.sourceRectAtTime=function(){},Ft.prototype.initExpressions=function(){};function Pt(){}Pt.prototype.checkLayers=function(t){var e,i=this.layers.length,s;for(this.completeLayers=!0,e=i-1;e>=0;e-=1)this.elements[e]||(s=this.layers[e],s.ip-s.st<=t-this.layers[e].st&&s.op-s.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},Pt.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},Pt.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Pt.prototype.createAudio=function(t){return new Ft(t,this.globalData,this)},Pt.prototype.createFootage=function(t){return new ke(t,this.globalData,this)},Pt.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},Pt.prototype.includeLayers=function(t){this.completeLayers=!1;var e,i=t.length,s,n=this.layers.length;for(e=0;e<i;e+=1)for(s=0;s<n;){if(this.layers[s].id===t[e].id){this.layers[s]=t[e];break}s+=1}},Pt.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},Pt.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Pt.prototype.buildElementParenting=function(t,e,i){for(var s=this.elements,n=this.layers,a=0,c=n.length;a<c;)n[a].ind==e&&(!s[a]||s[a]===!0?(this.buildItem(a),this.addPendingElement(t)):(i.push(s[a]),s[a].setAsParent(),n[a].parent!==void 0?this.buildElementParenting(t,n[a].parent,i):t.setHierarchy(i))),a+=1},Pt.prototype.addPendingElement=function(t){this.pendingElements.push(t)},Pt.prototype.searchExtraCompositions=function(t){var e,i=t.length;for(e=0;e<i;e+=1)if(t[e].xt){var s=this.createComp(t[e]);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},Pt.prototype.getElementById=function(t){var e,i=this.elements.length;for(e=0;e<i;e+=1)if(this.elements[e].data.ind===t)return this.elements[e];return null},Pt.prototype.getElementByPath=function(t){var e=t.shift(),i;if(typeof e=="number")i=this.elements[e];else{var s,n=this.elements.length;for(s=0;s<n;s+=1)if(this.elements[s].data.nm===e){i=this.elements[s];break}}return t.length===0?i:i.getElementByPath(t)},Pt.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new Ne,this.globalData.slotManager=Mn(t),this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};var Nn={TRANSFORM_EFFECT:"transformEFfect"};function si(){}si.prototype={initTransform:function(){var e=new Et;this.finalTransform={mProp:this.data.ks?xs.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:e,localMat:e,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,i=this.finalTransform.mat,s=0,n=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;s<n;){if(this.hierarchy[s].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}s+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,i.cloneFromProps(e),s=0;s<n;s+=1)i.multiply(this.hierarchy[s].finalTransform.mProp.v)}(!this.localTransforms||this.finalTransform._matMdf)&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var e=0,i=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;e<i;)this.localTransforms[e]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[e]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),e+=1;if(this.finalTransform._localMatMdf){var s=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(s),e=1;e<i;e+=1){var n=this.localTransforms[e].matrix;s.multiply(n)}s.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var a=this.finalTransform.localOpacity;for(e=0;e<i;e+=1)a*=this.localTransforms[e].opacity*.01;this.finalTransform.localOpacity=a}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var e=this.renderableEffectsManager.getEffects(Nn.TRANSFORM_EFFECT);if(e.length){this.localTransforms=[],this.finalTransform.localMat=new Et;var i=0,s=e.length;for(i=0;i<s;i+=1)this.localTransforms.push(e[i])}}},globalToLocal:function(e){var i=[];i.push(this.finalTransform);for(var s=!0,n=this.comp;s;)n.finalTransform?(n.data.hasMask&&i.splice(0,0,n.finalTransform),n=n.comp):s=!1;var a,c=i.length,g;for(a=0;a<c;a+=1)g=i[a].mat.applyToPointArray(0,0,0),e=[e[0]-g[0],e[1]-g[1],0];return e},mHelper:new Et};function Be(t,e,i){this.data=t,this.element=e,this.globalData=i,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var s=this.globalData.defs,n,a=this.masksProperties?this.masksProperties.length:0;this.viewData=ot(a),this.solidPath="";var c,g=this.masksProperties,f=0,w=[],S,z,m=Mt(),A,C,P,F,k="clipPath",_="clip-path";for(n=0;n<a;n+=1)if((g[n].mode!=="a"&&g[n].mode!=="n"||g[n].inv||g[n].o.k!==100||g[n].o.x)&&(k="mask",_="mask"),(g[n].mode==="s"||g[n].mode==="i")&&f===0?(A=it("rect"),A.setAttribute("fill","#ffffff"),A.setAttribute("width",this.element.comp.data.w||0),A.setAttribute("height",this.element.comp.data.h||0),w.push(A)):A=null,c=it("path"),g[n].mode==="n")this.viewData[n]={op:H.getProp(this.element,g[n].o,0,.01,this.element),prop:qi.getShapeProp(this.element,g[n],3),elem:c,lastPath:""},s.appendChild(c);else{f+=1,c.setAttribute("fill",g[n].mode==="s"?"#000000":"#ffffff"),c.setAttribute("clip-rule","nonzero");var d;if(g[n].x.k!==0?(k="mask",_="mask",F=H.getProp(this.element,g[n].x,0,null,this.element),d=Mt(),C=it("filter"),C.setAttribute("id",d),P=it("feMorphology"),P.setAttribute("operator","erode"),P.setAttribute("in","SourceGraphic"),P.setAttribute("radius","0"),C.appendChild(P),s.appendChild(C),c.setAttribute("stroke",g[n].mode==="s"?"#000000":"#ffffff")):(P=null,F=null),this.storedData[n]={elem:c,x:F,expan:P,lastPath:"",lastOperator:"",filterId:d,lastRadius:0},g[n].mode==="i"){z=w.length;var v=it("g");for(S=0;S<z;S+=1)v.appendChild(w[S]);var x=it("mask");x.setAttribute("mask-type","alpha"),x.setAttribute("id",m+"_"+f),x.appendChild(c),s.appendChild(x),v.setAttribute("mask","url("+U()+"#"+m+"_"+f+")"),w.length=0,w.push(v)}else w.push(c);g[n].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[n]={elem:c,lastPath:"",op:H.getProp(this.element,g[n].o,0,.01,this.element),prop:qi.getShapeProp(this.element,g[n],3),invRect:A},this.viewData[n].prop.k||this.drawPath(g[n],this.viewData[n].prop.v,this.viewData[n])}for(this.maskElement=it(k),a=w.length,n=0;n<a;n+=1)this.maskElement.appendChild(w[n]);f>0&&(this.maskElement.setAttribute("id",m),this.element.maskedElement.setAttribute(_,"url("+U()+"#"+m+")"),s.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}Be.prototype.getMaskProperty=function(t){return this.viewData[t].prop},Be.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,i,s=this.masksProperties.length;for(i=0;i<s;i+=1)if((this.viewData[i].prop._mdf||t)&&this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]),(this.viewData[i].op._mdf||t)&&this.viewData[i].elem.setAttribute("fill-opacity",this.viewData[i].op.v),this.masksProperties[i].mode!=="n"&&(this.viewData[i].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[i].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[i].x&&(this.storedData[i].x._mdf||t))){var n=this.storedData[i].expan;this.storedData[i].x.v<0?(this.storedData[i].lastOperator!=="erode"&&(this.storedData[i].lastOperator="erode",this.storedData[i].elem.setAttribute("filter","url("+U()+"#"+this.storedData[i].filterId+")")),n.setAttribute("radius",-this.storedData[i].x.v)):(this.storedData[i].lastOperator!=="dilate"&&(this.storedData[i].lastOperator="dilate",this.storedData[i].elem.setAttribute("filter",null)),this.storedData[i].elem.setAttribute("stroke-width",this.storedData[i].x.v*2))}},Be.prototype.getMaskelement=function(){return this.maskElement},Be.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},Be.prototype.drawPath=function(t,e,i){var s=" M"+e.v[0][0]+","+e.v[0][1],n,a;for(a=e._length,n=1;n<a;n+=1)s+=" C"+e.o[n-1][0]+","+e.o[n-1][1]+" "+e.i[n][0]+","+e.i[n][1]+" "+e.v[n][0]+","+e.v[n][1];if(e.c&&a>1&&(s+=" C"+e.o[n-1][0]+","+e.o[n-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),i.lastPath!==s){var c="";i.elem&&(e.c&&(c=t.inv?this.solidPath+s:s),i.elem.setAttribute("d",c)),i.lastPath=s}},Be.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var xi=(function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=i;function e(s,n){var a=it("filter");return a.setAttribute("id",s),n!==!0&&(a.setAttribute("filterUnits","objectBoundingBox"),a.setAttribute("x","0%"),a.setAttribute("y","0%"),a.setAttribute("width","100%"),a.setAttribute("height","100%")),a}function i(){var s=it("feColorMatrix");return s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),s}return t})(),Lr=(function(){var t={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),/firefox/i.test(navigator.userAgent)&&(t.svgLumaHidden=!1),t})(),Ji={},zr="filter_result_";function $s(t){var e,i="SourceGraphic",s=t.data.ef?t.data.ef.length:0,n=Mt(),a=xi.createFilter(n,!0),c=0;this.filters=[];var g;for(e=0;e<s;e+=1){g=null;var f=t.data.ef[e].ty;if(Ji[f]){var w=Ji[f].effect;g=new w(a,t.effectsManager.effectElements[e],t,zr+c,i),i=zr+c,Ji[f].countsAsEffect&&(c+=1)}g&&this.filters.push(g)}c&&(t.globalData.defs.appendChild(a),t.layerElement.setAttribute("filter","url("+U()+"#"+n+")")),this.filters.length&&t.addRenderableComponent(this)}$s.prototype.renderFrame=function(t){var e,i=this.filters.length;for(e=0;e<i;e+=1)this.filters[e].renderFrame(t)},$s.prototype.getEffects=function(t){var e,i=this.filters.length,s=[];for(e=0;e<i;e+=1)this.filters[e].type===t&&s.push(this.filters[e]);return s};function Do(t,e,i){Ji[t]={effect:e,countsAsEffect:i}}function ki(){}ki.prototype={initRendererElement:function(){this.layerElement=it("g")},createContainerElements:function(){this.matteElement=it("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null;if(this.data.td){this.matteMasks={};var i=it("g");i.setAttribute("id",this.layerId),i.appendChild(this.layerElement),e=i,this.globalData.defs.appendChild(i)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var s=it("clipPath"),n=it("path");n.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var a=Mt();if(s.setAttribute("id",a),s.appendChild(n),this.globalData.defs.appendChild(s),this.checkMasks()){var c=it("g");c.setAttribute("clip-path","url("+U()+"#"+a+")"),c.appendChild(this.layerElement),this.transformedElement=c,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+U()+"#"+a+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new Be(this.data,this,this.globalData),this.renderableEffectsManager=new $s(this),this.searchEffectTransforms()},getMatte:function(e){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[e]){var i=this.layerId+"_"+e,s,n,a,c;if(e===1||e===3){var g=it("mask");g.setAttribute("id",i),g.setAttribute("mask-type",e===3?"luminance":"alpha"),a=it("use"),a.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),g.appendChild(a),this.globalData.defs.appendChild(g),!Lr.maskType&&e===1&&(g.setAttribute("mask-type","luminance"),s=Mt(),n=xi.createFilter(s),this.globalData.defs.appendChild(n),n.appendChild(xi.createAlphaToLuminanceFilter()),c=it("g"),c.appendChild(a),g.appendChild(c),c.setAttribute("filter","url("+U()+"#"+s+")"))}else if(e===2){var f=it("mask");f.setAttribute("id",i),f.setAttribute("mask-type","alpha");var w=it("g");f.appendChild(w),s=Mt(),n=xi.createFilter(s);var S=it("feComponentTransfer");S.setAttribute("in","SourceGraphic"),n.appendChild(S);var z=it("feFuncA");z.setAttribute("type","table"),z.setAttribute("tableValues","1.0 0.0"),S.appendChild(z),this.globalData.defs.appendChild(n);var m=it("rect");m.setAttribute("width",this.comp.data.w),m.setAttribute("height",this.comp.data.h),m.setAttribute("x","0"),m.setAttribute("y","0"),m.setAttribute("fill","#ffffff"),m.setAttribute("opacity","0"),w.setAttribute("filter","url("+U()+"#"+s+")"),w.appendChild(m),a=it("use"),a.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),w.appendChild(a),Lr.maskType||(f.setAttribute("mask-type","luminance"),n.appendChild(xi.createAlphaToLuminanceFilter()),c=it("g"),w.appendChild(m),c.appendChild(this.layerElement),w.appendChild(c)),this.globalData.defs.appendChild(f)}this.matteMasks[e]=i}return this.matteMasks[e]},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+U()+"#"+e+")")}};function ri(){}ri.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function Si(){}(function(){var t={initElement:function(i,s,n){this.initFrame(),this.initBaseData(i,s,n),this.initTransform(i,s,n),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var i=this.baseElement||this.layerElement;i.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var i=this.baseElement||this.layerElement;i.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(i){this._mdf=!1,this.prepareRenderableFrame(i),this.prepareProperties(i,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};W([Zi,X(t)],Si)})();function Ai(t,e,i){this.assetData=e.getAssetData(t.refId),this.assetData&&this.assetData.sid&&(this.assetData=e.slotManager.getProp(this.assetData)),this.initElement(t,e,i),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}W([we,si,ki,ri,xe,Si],Ai),Ai.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=it("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},Ai.prototype.sourceRectAtTime=function(){return this.sourceRect};function Bn(t,e){this.elem=t,this.pos=e}function Or(){}Or.prototype={addShapeToModifiers:function(e){var i,s=this.shapeModifiers.length;for(i=0;i<s;i+=1)this.shapeModifiers[i].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var i=0,s=this.shapeModifiers.length;i<s;)if(this.shapeModifiers[i].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,i=this.shapes.length;for(e=0;e<i;e+=1)this.shapes[e].sh.reset();i=this.shapeModifiers.length;var s;for(e=i-1;e>=0&&(s=this.shapeModifiers[e].processShapes(this._isFirstFrame),!s);e-=1);}},searchProcessedElement:function(e){for(var i=this.processedElements,s=0,n=i.length;s<n;){if(i[s].elem===e)return i[s].pos;s+=1}return 0},addProcessedElement:function(e,i){for(var s=this.processedElements,n=s.length;n;)if(n-=1,s[n].elem===e){s[n].pos=i;return}s.push(new Bn(e,i))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};var Rr={1:"butt",2:"round",3:"square"},Vr={1:"miter",2:"round",3:"bevel"};function Dr(t,e,i){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=i,this.lvl=e,this._isAnimated=!!i.k;for(var s=0,n=t.length;s<n;){if(t[s].mProps.dynamicProperties.length){this._isAnimated=!0;break}s+=1}}Dr.prototype.setAsAnimated=function(){this._isAnimated=!0};function Nr(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=it("path"),this.msElem=null}Nr.prototype.reset=function(){this.d="",this._mdf=!1};function Qi(t,e,i,s){this.elem=t,this.frameId=-1,this.dataProps=ot(e.length),this.renderer=i,this.k=!1,this.dashStr="",this.dashArray=at("float32",e.length?e.length-1:0),this.dashoffset=at("float32",1),this.initDynamicPropertyContainer(s);var n,a=e.length||0,c;for(n=0;n<a;n+=1)c=H.getProp(t,e[n].v,0,0,this),this.k=c.k||this.k,this.dataProps[n]={n:e[n].n,p:c};this.k||this.getValue(!0),this._isAnimated=this.k}Qi.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,i=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<i;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},W([wt],Qi);function Br(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=H.getProp(t,e.o,0,.01,this),this.w=H.getProp(t,e.w,0,null,this),this.d=new Qi(t,e.d||{},"svg",this),this.c=H.getProp(t,e.c,1,255,this),this.style=i,this._isAnimated=!!this._isAnimated}W([wt],Br);function Ur(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=H.getProp(t,e.o,0,.01,this),this.c=H.getProp(t,e.c,1,255,this),this.style=i}W([wt],Ur);function jr(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=i}W([wt],jr);function Ei(t,e,i){this.data=e,this.c=at("uint8c",e.p*4);var s=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=at("float32",s),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=s,this.initDynamicPropertyContainer(i),this.prop=H.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}Ei.prototype.comparePoints=function(t,e){for(var i=0,s=this.o.length/2,n;i<s;){if(n=Math.abs(t[i*4]-t[e*4+i*2]),n>.01)return!1;i+=1}return!0},Ei.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},Ei.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,i=this.data.p*4,s,n;for(e=0;e<i;e+=1)s=e%4===0?100:255,n=Math.round(this.prop.v[e]*s),this.c[e]!==n&&(this.c[e]=n,this._cmdf=!t);if(this.o.length)for(i=this.prop.v.length,e=this.data.p*4;e<i;e+=1)s=e%2===0?100:1,n=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==n&&(this.o[e-this.data.p*4]=n,this._omdf=!t);this._mdf=!t}},W([wt],Ei);function ai(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,i)}ai.prototype.initGradientData=function(t,e,i){this.o=H.getProp(t,e.o,0,.01,this),this.s=H.getProp(t,e.s,1,null,this),this.e=H.getProp(t,e.e,1,null,this),this.h=H.getProp(t,e.h||{k:0},0,.01,this),this.a=H.getProp(t,e.a||{k:0},0,dt,this),this.g=new Ei(t,e.g,this),this.style=i,this.stops=[],this.setGradientData(i.pElem,e),this.setGradientOpacity(e,i),this._isAnimated=!!this._isAnimated},ai.prototype.setGradientData=function(t,e){var i=Mt(),s=it(e.t===1?"linearGradient":"radialGradient");s.setAttribute("id",i),s.setAttribute("spreadMethod","pad"),s.setAttribute("gradientUnits","userSpaceOnUse");var n=[],a,c,g;for(g=e.g.p*4,c=0;c<g;c+=4)a=it("stop"),s.appendChild(a),n.push(a);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+U()+"#"+i+")"),this.gf=s,this.cst=n},ai.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var i,s,n,a=it("mask"),c=it("path");a.appendChild(c);var g=Mt(),f=Mt();a.setAttribute("id",f);var w=it(t.t===1?"linearGradient":"radialGradient");w.setAttribute("id",g),w.setAttribute("spreadMethod","pad"),w.setAttribute("gradientUnits","userSpaceOnUse"),n=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var S=this.stops;for(s=t.g.p*4;s<n;s+=2)i=it("stop"),i.setAttribute("stop-color","rgb(255,255,255)"),w.appendChild(i),S.push(i);c.setAttribute(t.ty==="gf"?"fill":"stroke","url("+U()+"#"+g+")"),t.ty==="gs"&&(c.setAttribute("stroke-linecap",Rr[t.lc||2]),c.setAttribute("stroke-linejoin",Vr[t.lj||2]),t.lj===1&&c.setAttribute("stroke-miterlimit",t.ml)),this.of=w,this.ms=a,this.ost=S,this.maskId=f,e.msElem=c}},W([wt],ai);function Hr(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=H.getProp(t,e.w,0,null,this),this.d=new Qi(t,e.d||{},"svg",this),this.initGradientData(t,e,i),this._isAnimated=!!this._isAnimated}W([ai,wt],Hr);function Un(){this.it=[],this.prevViewData=[],this.gr=it("g")}function jn(t,e,i){this.transform={mProps:t,op:e,container:i},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var Wr=function(e,i,s,n){if(i===0)return"";var a=e.o,c=e.i,g=e.v,f,w=" M"+n.applyToPointStringified(g[0][0],g[0][1]);for(f=1;f<i;f+=1)w+=" C"+n.applyToPointStringified(a[f-1][0],a[f-1][1])+" "+n.applyToPointStringified(c[f][0],c[f][1])+" "+n.applyToPointStringified(g[f][0],g[f][1]);return s&&i&&(w+=" C"+n.applyToPointStringified(a[f-1][0],a[f-1][1])+" "+n.applyToPointStringified(c[0][0],c[0][1])+" "+n.applyToPointStringified(g[0][0],g[0][1]),w+="z"),w},Hn=(function(){var t=new Et,e=new Et,i={createRenderFunction:s};function s(z){switch(z.ty){case"fl":return g;case"gf":return w;case"gs":return f;case"st":return S;case"sh":case"el":case"rc":case"sr":return c;case"tr":return n;case"no":return a;default:return null}}function n(z,m,A){(A||m.transform.op._mdf)&&m.transform.container.setAttribute("opacity",m.transform.op.v),(A||m.transform.mProps._mdf)&&m.transform.container.setAttribute("transform",m.transform.mProps.v.to2dCSS())}function a(){}function c(z,m,A){var C,P,F,k,_,d,v=m.styles.length,x=m.lvl,T,L,R,N;for(d=0;d<v;d+=1){if(k=m.sh._mdf||A,m.styles[d].lvl<x){for(L=e.reset(),R=x-m.styles[d].lvl,N=m.transformers.length-1;!k&&R>0;)k=m.transformers[N].mProps._mdf||k,R-=1,N-=1;if(k)for(R=x-m.styles[d].lvl,N=m.transformers.length-1;R>0;)L.multiply(m.transformers[N].mProps.v),R-=1,N-=1}else L=t;if(T=m.sh.paths,P=T._length,k){for(F="",C=0;C<P;C+=1)_=T.shapes[C],_&&_._length&&(F+=Wr(_,_._length,_.c,L));m.caches[d]=F}else F=m.caches[d];m.styles[d].d+=z.hd===!0?"":F,m.styles[d]._mdf=k||m.styles[d]._mdf}}function g(z,m,A){var C=m.style;(m.c._mdf||A)&&C.pElem.setAttribute("fill","rgb("+Jt(m.c.v[0])+","+Jt(m.c.v[1])+","+Jt(m.c.v[2])+")"),(m.o._mdf||A)&&C.pElem.setAttribute("fill-opacity",m.o.v)}function f(z,m,A){w(z,m,A),S(z,m,A)}function w(z,m,A){var C=m.gf,P=m.g._hasOpacity,F=m.s.v,k=m.e.v;if(m.o._mdf||A){var _=z.ty==="gf"?"fill-opacity":"stroke-opacity";m.style.pElem.setAttribute(_,m.o.v)}if(m.s._mdf||A){var d=z.t===1?"x1":"cx",v=d==="x1"?"y1":"cy";C.setAttribute(d,F[0]),C.setAttribute(v,F[1]),P&&!m.g._collapsable&&(m.of.setAttribute(d,F[0]),m.of.setAttribute(v,F[1]))}var x,T,L,R;if(m.g._cmdf||A){x=m.cst;var N=m.g.c;for(L=x.length,T=0;T<L;T+=1)R=x[T],R.setAttribute("offset",N[T*4]+"%"),R.setAttribute("stop-color","rgb("+N[T*4+1]+","+N[T*4+2]+","+N[T*4+3]+")")}if(P&&(m.g._omdf||A)){var tt=m.g.o;for(m.g._collapsable?x=m.cst:x=m.ost,L=x.length,T=0;T<L;T+=1)R=x[T],m.g._collapsable||R.setAttribute("offset",tt[T*2]+"%"),R.setAttribute("stop-opacity",tt[T*2+1])}if(z.t===1)(m.e._mdf||A)&&(C.setAttribute("x2",k[0]),C.setAttribute("y2",k[1]),P&&!m.g._collapsable&&(m.of.setAttribute("x2",k[0]),m.of.setAttribute("y2",k[1])));else{var K;if((m.s._mdf||m.e._mdf||A)&&(K=Math.sqrt(Math.pow(F[0]-k[0],2)+Math.pow(F[1]-k[1],2)),C.setAttribute("r",K),P&&!m.g._collapsable&&m.of.setAttribute("r",K)),m.s._mdf||m.e._mdf||m.h._mdf||m.a._mdf||A){K||(K=Math.sqrt(Math.pow(F[0]-k[0],2)+Math.pow(F[1]-k[1],2)));var j=Math.atan2(k[1]-F[1],k[0]-F[0]),st=m.h.v;st>=1?st=.99:st<=-1&&(st=-.99);var G=K*st,D=Math.cos(j+m.a.v)*G+F[0],y=Math.sin(j+m.a.v)*G+F[1];C.setAttribute("fx",D),C.setAttribute("fy",y),P&&!m.g._collapsable&&(m.of.setAttribute("fx",D),m.of.setAttribute("fy",y))}}}function S(z,m,A){var C=m.style,P=m.d;P&&(P._mdf||A)&&P.dashStr&&(C.pElem.setAttribute("stroke-dasharray",P.dashStr),C.pElem.setAttribute("stroke-dashoffset",P.dashoffset[0])),m.c&&(m.c._mdf||A)&&C.pElem.setAttribute("stroke","rgb("+Jt(m.c.v[0])+","+Jt(m.c.v[1])+","+Jt(m.c.v[2])+")"),(m.o._mdf||A)&&C.pElem.setAttribute("stroke-opacity",m.o.v),(m.w._mdf||A)&&(C.pElem.setAttribute("stroke-width",m.w.v),C.msElem&&C.msElem.setAttribute("stroke-width",m.w.v))}return i})();function mt(t,e,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,i),this.prevViewData=[]}W([we,si,ki,Or,ri,xe,Si],mt),mt.prototype.initSecondaryElement=function(){},mt.prototype.identityMatrix=new Et,mt.prototype.buildExpressionInterface=function(){},mt.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},mt.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,i,s,n=this.stylesList.length,a,c=[],g=!1;for(s=0;s<n;s+=1){for(a=this.stylesList[s],g=!1,c.length=0,t=0;t<e;t+=1)i=this.shapes[t],i.styles.indexOf(a)!==-1&&(c.push(i),g=i._isAnimated||g);c.length>1&&g&&this.setShapesAsAnimated(c)}},mt.prototype.setShapesAsAnimated=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e].setAsAnimated()},mt.prototype.createStyleElement=function(t,e){var i,s=new Nr(t,e),n=s.pElem;if(t.ty==="st")i=new Br(this,t,s);else if(t.ty==="fl")i=new Ur(this,t,s);else if(t.ty==="gf"||t.ty==="gs"){var a=t.ty==="gf"?ai:Hr;i=new a(this,t,s),this.globalData.defs.appendChild(i.gf),i.maskId&&(this.globalData.defs.appendChild(i.ms),this.globalData.defs.appendChild(i.of),n.setAttribute("mask","url("+U()+"#"+i.maskId+")"))}else t.ty==="no"&&(i=new jr(this,t,s));return(t.ty==="st"||t.ty==="gs")&&(n.setAttribute("stroke-linecap",Rr[t.lc||2]),n.setAttribute("stroke-linejoin",Vr[t.lj||2]),n.setAttribute("fill-opacity","0"),t.lj===1&&n.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&n.setAttribute("fill-rule","evenodd"),t.ln&&n.setAttribute("id",t.ln),t.cl&&n.setAttribute("class",t.cl),t.bm&&(n.style["mix-blend-mode"]=Ps(t.bm)),this.stylesList.push(s),this.addToAnimatedContents(t,i),i},mt.prototype.createGroupElement=function(t){var e=new Un;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=Ps(t.bm)),e},mt.prototype.createTransformElement=function(t,e){var i=xs.getTransformProperty(this,t,this),s=new jn(i,i.o,e);return this.addToAnimatedContents(t,s),s},mt.prototype.createShapeElement=function(t,e,i){var s=4;t.ty==="rc"?s=5:t.ty==="el"?s=6:t.ty==="sr"&&(s=7);var n=qi.getShapeProp(this,t,s,this),a=new Dr(e,i,n);return this.shapes.push(a),this.addShapeToModifiers(a),this.addToAnimatedContents(t,a),a},mt.prototype.addToAnimatedContents=function(t,e){for(var i=0,s=this.animatedContents.length;i<s;){if(this.animatedContents[i].element===e)return;i+=1}this.animatedContents.push({fn:Hn.createRenderFunction(t),element:e,data:t})},mt.prototype.setElementStyles=function(t){var e=t.styles,i,s=this.stylesList.length;for(i=0;i<s;i+=1)e.indexOf(this.stylesList[i])===-1&&!this.stylesList[i].closed&&e.push(this.stylesList[i])},mt.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},mt.prototype.searchShapes=function(t,e,i,s,n,a,c){var g=[].concat(a),f,w=t.length-1,S,z,m=[],A=[],C,P,F;for(f=w;f>=0;f-=1){if(F=this.searchProcessedElement(t[f]),F?e[f]=i[F-1]:t[f]._render=c,t[f].ty==="fl"||t[f].ty==="st"||t[f].ty==="gf"||t[f].ty==="gs"||t[f].ty==="no")F?e[f].style.closed=t[f].hd:e[f]=this.createStyleElement(t[f],n),t[f]._render&&e[f].style.pElem.parentNode!==s&&s.appendChild(e[f].style.pElem),m.push(e[f].style);else if(t[f].ty==="gr"){if(!F)e[f]=this.createGroupElement(t[f]);else for(z=e[f].it.length,S=0;S<z;S+=1)e[f].prevViewData[S]=e[f].it[S];this.searchShapes(t[f].it,e[f].it,e[f].prevViewData,e[f].gr,n+1,g,c),t[f]._render&&e[f].gr.parentNode!==s&&s.appendChild(e[f].gr)}else t[f].ty==="tr"?(F||(e[f]=this.createTransformElement(t[f],s)),C=e[f].transform,g.push(C)):t[f].ty==="sh"||t[f].ty==="rc"||t[f].ty==="el"||t[f].ty==="sr"?(F||(e[f]=this.createShapeElement(t[f],g,n)),this.setElementStyles(e[f])):t[f].ty==="tm"||t[f].ty==="rd"||t[f].ty==="ms"||t[f].ty==="pb"||t[f].ty==="zz"||t[f].ty==="op"?(F?(P=e[f],P.closed=!1):(P=_e.getModifier(t[f].ty),P.init(this,t[f]),e[f]=P,this.shapeModifiers.push(P)),A.push(P)):t[f].ty==="rp"&&(F?(P=e[f],P.closed=!0):(P=_e.getModifier(t[f].ty),e[f]=P,P.init(this,t,f,e),this.shapeModifiers.push(P),c=!1),A.push(P));this.addProcessedElement(t[f],f+1)}for(w=m.length,f=0;f<w;f+=1)m[f].closed=!0;for(w=A.length,f=0;f<w;f+=1)A[f].closed=!0},mt.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},mt.prototype.renderShape=function(){var t,e=this.animatedContents.length,i;for(t=0;t<e;t+=1)i=this.animatedContents[t],(this._isFirstFrame||i.element._isAnimated)&&i.data!==!0&&i.fn(i.data,i.element,this._isFirstFrame)},mt.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function Cs(t,e,i,s,n,a){this.o=t,this.sw=e,this.sc=i,this.fc=s,this.m=n,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!i,fc:!!s,m:!0,p:!0}}Cs.prototype.update=function(t,e,i,s,n,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var c=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,c=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,c=!0),this.sc!==i&&(this.sc=i,this._mdf.sc=!0,c=!0),this.fc!==s&&(this.fc=s,this._mdf.fc=!0,c=!0),this.m!==n&&(this.m=n,this._mdf.m=!0,c=!0),a.length&&(this.p[0]!==a[0]||this.p[1]!==a[1]||this.p[4]!==a[4]||this.p[5]!==a[5]||this.p[12]!==a[12]||this.p[13]!==a[13])&&(this.p=a,this._mdf.p=!0,c=!0),c};function Tt(t,e){this._frameId=l,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,e.d&&e.d.sid&&(e.d=t.globalData.slotManager.getProp(e.d)),this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}Tt.prototype.defaultBoxWidth=[0,0],Tt.prototype.copyData=function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Tt.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},Tt.prototype.searchProperty=function(){return this.searchKeyframes()},Tt.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},Tt.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},Tt.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,i=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var s,n=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(s=0;s<n;s+=1)i!==this.keysIndex?a=this.effectsSequence[s](a,a.t):a=this.effectsSequence[s](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},Tt.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,i=0,s=t.length;i<=s-1&&!(i===s-1||t[i+1].t>e);)i+=1;return this.keysIndex!==i&&(this.keysIndex=i),this.data.d.k[this.keysIndex].s},Tt.prototype.buildFinalText=function(t){for(var e=[],i=0,s=t.length,n,a,c=!1,g=!1,f="";i<s;)c=g,g=!1,n=t.charCodeAt(i),f=t.charAt(i),Ne.isCombinedCharacter(n)?c=!0:n>=55296&&n<=56319?Ne.isRegionalFlag(t,i)?f=t.substr(i,14):(a=t.charCodeAt(i+1),a>=56320&&a<=57343&&(Ne.isModifier(n,a)?(f=t.substr(i,2),c=!0):Ne.isFlagEmoji(t.substr(i,4))?f=t.substr(i,4):f=t.substr(i,2))):n>56319?(a=t.charCodeAt(i+1),Ne.isVariationSelector(n)&&(c=!0)):Ne.isZeroWidthJoiner(n)&&(c=!0,g=!0),c?(e[e.length-1]+=f,c=!1):e.push(f),i+=f.length;return e},Tt.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,i=this.data,s=[],n,a,c,g=0,f,w=i.m.g,S=0,z=0,m=0,A=[],C=0,P=0,F,k,_=e.getFontByName(t.f),d,v=0,x=Mr(_);t.fWeight=x.weight,t.fStyle=x.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),a=t.finalText.length,t.finalLineHeight=t.lh;var T=t.tr/1e3*t.finalSize,L;if(t.sz)for(var R=!0,N=t.sz[0],tt=t.sz[1],K,j;R;){j=this.buildFinalText(t.t),K=0,C=0,a=j.length,T=t.tr/1e3*t.finalSize;var st=-1;for(n=0;n<a;n+=1)L=j[n].charCodeAt(0),c=!1,j[n]===" "?st=n:(L===13||L===3)&&(C=0,c=!0,K+=t.finalLineHeight||t.finalSize*1.2),e.chars?(d=e.getCharData(j[n],_.fStyle,_.fFamily),v=c?0:d.w*t.finalSize/100):v=e.measureText(j[n],t.f,t.finalSize),C+v>N&&j[n]!==" "?(st===-1?a+=1:n=st,K+=t.finalLineHeight||t.finalSize*1.2,j.splice(n,st===n?1:0,"\r"),st=-1,C=0):(C+=v,C+=T);K+=_.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&tt<K?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=j,a=t.finalText.length,R=!1)}C=-T,v=0;var G=0,D;for(n=0;n<a;n+=1)if(c=!1,D=t.finalText[n],L=D.charCodeAt(0),L===13||L===3?(G=0,A.push(C),P=C>P?C:P,C=-2*T,f="",c=!0,m+=1):f=D,e.chars?(d=e.getCharData(D,_.fStyle,e.getFontByName(t.f).fFamily),v=c?0:d.w*t.finalSize/100):v=e.measureText(f,t.f,t.finalSize),D===" "?G+=v+T:(C+=v+T+G,G=0),s.push({l:v,an:v,add:S,n:c,anIndexes:[],val:f,line:m,animatorJustifyOffset:0}),w==2){if(S+=v,f===""||f===" "||n===a-1){for((f===""||f===" ")&&(S-=v);z<=n;)s[z].an=S,s[z].ind=g,s[z].extra=v,z+=1;g+=1,S=0}}else if(w==3){if(S+=v,f===""||n===a-1){for(f===""&&(S-=v);z<=n;)s[z].an=S,s[z].ind=g,s[z].extra=v,z+=1;S=0,g+=1}}else s[g].ind=g,s[g].extra=0,g+=1;if(t.l=s,P=C>P?C:P,A.push(C),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=P,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=A;var y=i.a,$,h;k=y.length;var p,O,M=[];for(F=0;F<k;F+=1){for($=y[F],$.a.sc&&(t.strokeColorAnim=!0),$.a.sw&&(t.strokeWidthAnim=!0),($.a.fc||$.a.fh||$.a.fs||$.a.fb)&&(t.fillColorAnim=!0),O=0,p=$.s.b,n=0;n<a;n+=1)h=s[n],h.anIndexes[F]=O,(p==1&&h.val!==""||p==2&&h.val!==""&&h.val!==" "||p==3&&(h.n||h.val==" "||n==a-1)||p==4&&(h.n||n==a-1))&&($.s.rn===1&&M.push(O),O+=1);i.a[F].s.totalChars=O;var q=-1,Q;if($.s.rn===1)for(n=0;n<a;n+=1)h=s[n],q!=h.anIndexes[F]&&(q=h.anIndexes[F],Q=M.splice(Math.floor(Math.random()*M.length),1)[0]),h.anIndexes[F]=Q}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=_.ascent*t.finalSize/100},Tt.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var i=this.copyData({},this.data.d.k[e].s);i=this.copyData(i,t),this.data.d.k[e].s=i,this.recalculate(e),this.setCurrentData(i),this.elem.addDynamicProperty(this)},Tt.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},Tt.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},Tt.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var Wn=(function(){var t=Math.max,e=Math.min,i=Math.floor;function s(a,c){this._currentTextLength=-1,this.k=!1,this.data=c,this.elem=a,this.comp=a.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(a),this.s=H.getProp(a,c.s||{k:0},0,0,this),"e"in c?this.e=H.getProp(a,c.e,0,0,this):this.e={v:100},this.o=H.getProp(a,c.o||{k:0},0,0,this),this.xe=H.getProp(a,c.xe||{k:0},0,0,this),this.ne=H.getProp(a,c.ne||{k:0},0,0,this),this.sm=H.getProp(a,c.sm||{k:100},0,0,this),this.a=H.getProp(a,c.a,0,.01,this),this.dynamicProperties.length||this.getValue()}s.prototype={getMult:function(c){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var g=0,f=0,w=1,S=1;this.ne.v>0?g=this.ne.v/100:f=-this.ne.v/100,this.xe.v>0?w=1-this.xe.v/100:S=1+this.xe.v/100;var z=mi.getBezierEasing(g,f,w,S).get,m=0,A=this.finalS,C=this.finalE,P=this.data.sh;if(P===2)C===A?m=c>=C?1:0:m=t(0,e(.5/(C-A)+(c-A)/(C-A),1)),m=z(m);else if(P===3)C===A?m=c>=C?0:1:m=1-t(0,e(.5/(C-A)+(c-A)/(C-A),1)),m=z(m);else if(P===4)C===A?m=0:(m=t(0,e(.5/(C-A)+(c-A)/(C-A),1)),m<.5?m*=2:m=1-2*(m-.5)),m=z(m);else if(P===5){if(C===A)m=0;else{var F=C-A;c=e(t(0,c+.5-A),C-A);var k=-F/2+c,_=F/2;m=Math.sqrt(1-k*k/(_*_))}m=z(m)}else P===6?(C===A?m=0:(c=e(t(0,c+.5-A),C-A),m=(1+Math.cos(Math.PI+Math.PI*2*c/(C-A)))/2),m=z(m)):(c>=i(A)&&(c-A<0?m=t(0,e(e(C,1)-(A-c),1)):m=t(0,e(C-c,1))),m=z(m));if(this.sm.v!==100){var d=this.sm.v*.01;d===0&&(d=1e-8);var v=.5-d*.5;m<v?m=0:(m=(m-v)/d,m>1&&(m=1))}return m*this.a.v},getValue:function(c){this.iterateDynamicProperties(),this._mdf=c||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,c&&this.data.r===2&&(this.e.v=this._currentTextLength);var g=this.data.r===2?1:100/this.data.totalChars,f=this.o.v/g,w=this.s.v/g+f,S=this.e.v/g+f;if(w>S){var z=w;w=S,S=z}this.finalS=w,this.finalE=S}},W([wt],s);function n(a,c,g){return new s(a,c,g)}return{getTextSelectorProp:n}})();function qn(t,e,i){var s={propType:!1},n=H.getProp,a=e.a;this.a={r:a.r?n(t,a.r,0,dt,i):s,rx:a.rx?n(t,a.rx,0,dt,i):s,ry:a.ry?n(t,a.ry,0,dt,i):s,sk:a.sk?n(t,a.sk,0,dt,i):s,sa:a.sa?n(t,a.sa,0,dt,i):s,s:a.s?n(t,a.s,1,.01,i):s,a:a.a?n(t,a.a,1,0,i):s,o:a.o?n(t,a.o,0,.01,i):s,p:a.p?n(t,a.p,1,0,i):s,sw:a.sw?n(t,a.sw,0,0,i):s,sc:a.sc?n(t,a.sc,1,0,i):s,fc:a.fc?n(t,a.fc,1,0,i):s,fh:a.fh?n(t,a.fh,0,0,i):s,fs:a.fs?n(t,a.fs,0,.01,i):s,fb:a.fb?n(t,a.fb,0,.01,i):s,t:a.t?n(t,a.t,0,0,i):s},this.s=Wn.getTextSelectorProp(t,e.s,i),this.s.t=e.s.t}function Ue(t,e,i){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=i,this._animatorsData=ot(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(i)}Ue.prototype.searchProperties=function(){var t,e=this._textData.a.length,i,s=H.getProp;for(t=0;t<e;t+=1)i=this._textData.a[t],this._animatorsData[t]=new qn(this._elem,i,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:s(this._elem,this._textData.p.a,0,0,this),f:s(this._elem,this._textData.p.f,0,0,this),l:s(this._elem,this._textData.p.l,0,0,this),r:s(this._elem,this._textData.p.r,0,0,this),p:s(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=s(this._elem,this._textData.m.a,1,0,this)},Ue.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var i=this._moreOptions.alignment.v,s=this._animatorsData,n=this._textData,a=this.mHelper,c=this._renderType,g=this.renderedLetters.length,f,w,S,z,m=t.l,A,C,P,F,k,_,d,v,x,T,L,R,N,tt,K;if(this._hasMaskedPath){if(K=this._pathData.m,!this._pathData.n||this._pathData._mdf){var j=K.v;this._pathData.r.v&&(j=j.reverse()),A={tLength:0,segments:[]},z=j._length-1;var st;for(R=0,S=0;S<z;S+=1)st=Qt.buildBezierData(j.v[S],j.v[S+1],[j.o[S][0]-j.v[S][0],j.o[S][1]-j.v[S][1]],[j.i[S+1][0]-j.v[S+1][0],j.i[S+1][1]-j.v[S+1][1]]),A.tLength+=st.segmentLength,A.segments.push(st),R+=st.segmentLength;S=z,K.v.c&&(st=Qt.buildBezierData(j.v[S],j.v[0],[j.o[S][0]-j.v[S][0],j.o[S][1]-j.v[S][1]],[j.i[0][0]-j.v[0][0],j.i[0][1]-j.v[0][1]]),A.tLength+=st.segmentLength,A.segments.push(st),R+=st.segmentLength),this._pathData.pi=A}if(A=this._pathData.pi,C=this._pathData.f.v,d=0,_=1,F=0,k=!0,T=A.segments,C<0&&K.v.c)for(A.tLength<Math.abs(C)&&(C=-Math.abs(C)%A.tLength),d=T.length-1,x=T[d].points,_=x.length-1;C<0;)C+=x[_].partialLength,_-=1,_<0&&(d-=1,x=T[d].points,_=x.length-1);x=T[d].points,v=x[_-1],P=x[_],L=P.partialLength}z=m.length,f=0,w=0;var G=t.finalSize*1.2*.714,D=!0,y,$,h,p,O;p=s.length;var M,q=-1,Q,et,lt,ht=C,vt=d,It=_,ee=-1,Lt,xt,Dt,ft,Y,oe,Ae,le,ie="",he=this.defaultPropsArray,ce;if(t.j===2||t.j===1){var zt=0,Ee=0,Pe=t.j===2?-.5:-1,Yt=0,$e=!0;for(S=0;S<z;S+=1)if(m[S].n){for(zt&&(zt+=Ee);Yt<S;)m[Yt].animatorJustifyOffset=zt,Yt+=1;zt=0,$e=!0}else{for(h=0;h<p;h+=1)y=s[h].a,y.t.propType&&($e&&t.j===2&&(Ee+=y.t.v*Pe),$=s[h].s,M=$.getMult(m[S].anIndexes[h],n.a[h].s.totalChars),M.length?zt+=y.t.v*M[0]*Pe:zt+=y.t.v*M*Pe);$e=!1}for(zt&&(zt+=Ee);Yt<S;)m[Yt].animatorJustifyOffset=zt,Yt+=1}for(S=0;S<z;S+=1){if(a.reset(),Lt=1,m[S].n)f=0,w+=t.yOffset,w+=D?1:0,C=ht,D=!1,this._hasMaskedPath&&(d=vt,_=It,x=T[d].points,v=x[_-1],P=x[_],L=P.partialLength,F=0),ie="",le="",oe="",ce="",he=this.defaultPropsArray;else{if(this._hasMaskedPath){if(ee!==m[S].line){switch(t.j){case 1:C+=R-t.lineWidths[m[S].line];break;case 2:C+=(R-t.lineWidths[m[S].line])/2;break;default:break}ee=m[S].line}q!==m[S].ind&&(m[q]&&(C+=m[q].extra),C+=m[S].an/2,q=m[S].ind),C+=i[0]*m[S].an*.005;var Kt=0;for(h=0;h<p;h+=1)y=s[h].a,y.p.propType&&($=s[h].s,M=$.getMult(m[S].anIndexes[h],n.a[h].s.totalChars),M.length?Kt+=y.p.v[0]*M[0]:Kt+=y.p.v[0]*M),y.a.propType&&($=s[h].s,M=$.getMult(m[S].anIndexes[h],n.a[h].s.totalChars),M.length?Kt+=y.a.v[0]*M[0]:Kt+=y.a.v[0]*M);for(k=!0,this._pathData.a.v&&(C=m[0].an*.5+(R-this._pathData.f.v-m[0].an*.5-m[m.length-1].an*.5)*q/(z-1),C+=this._pathData.f.v);k;)F+L>=C+Kt||!x?(N=(C+Kt-F)/P.partialLength,et=v.point[0]+(P.point[0]-v.point[0])*N,lt=v.point[1]+(P.point[1]-v.point[1])*N,a.translate(-i[0]*m[S].an*.005,-(i[1]*G)*.01),k=!1):x&&(F+=P.partialLength,_+=1,_>=x.length&&(_=0,d+=1,T[d]?x=T[d].points:K.v.c?(_=0,d=0,x=T[d].points):(F-=P.partialLength,x=null)),x&&(v=P,P=x[_],L=P.partialLength));Q=m[S].an/2-m[S].add,a.translate(-Q,0,0)}else Q=m[S].an/2-m[S].add,a.translate(-Q,0,0),a.translate(-i[0]*m[S].an*.005,-i[1]*G*.01,0);for(h=0;h<p;h+=1)y=s[h].a,y.t.propType&&($=s[h].s,M=$.getMult(m[S].anIndexes[h],n.a[h].s.totalChars),(f!==0||t.j!==0)&&(this._hasMaskedPath?M.length?C+=y.t.v*M[0]:C+=y.t.v*M:M.length?f+=y.t.v*M[0]:f+=y.t.v*M));for(t.strokeWidthAnim&&(Dt=t.sw||0),t.strokeColorAnim&&(t.sc?xt=[t.sc[0],t.sc[1],t.sc[2]]:xt=[0,0,0]),t.fillColorAnim&&t.fc&&(ft=[t.fc[0],t.fc[1],t.fc[2]]),h=0;h<p;h+=1)y=s[h].a,y.a.propType&&($=s[h].s,M=$.getMult(m[S].anIndexes[h],n.a[h].s.totalChars),M.length?a.translate(-y.a.v[0]*M[0],-y.a.v[1]*M[1],y.a.v[2]*M[2]):a.translate(-y.a.v[0]*M,-y.a.v[1]*M,y.a.v[2]*M));for(h=0;h<p;h+=1)y=s[h].a,y.s.propType&&($=s[h].s,M=$.getMult(m[S].anIndexes[h],n.a[h].s.totalChars),M.length?a.scale(1+(y.s.v[0]-1)*M[0],1+(y.s.v[1]-1)*M[1],1):a.scale(1+(y.s.v[0]-1)*M,1+(y.s.v[1]-1)*M,1));for(h=0;h<p;h+=1){if(y=s[h].a,$=s[h].s,M=$.getMult(m[S].anIndexes[h],n.a[h].s.totalChars),y.sk.propType&&(M.length?a.skewFromAxis(-y.sk.v*M[0],y.sa.v*M[1]):a.skewFromAxis(-y.sk.v*M,y.sa.v*M)),y.r.propType&&(M.length?a.rotateZ(-y.r.v*M[2]):a.rotateZ(-y.r.v*M)),y.ry.propType&&(M.length?a.rotateY(y.ry.v*M[1]):a.rotateY(y.ry.v*M)),y.rx.propType&&(M.length?a.rotateX(y.rx.v*M[0]):a.rotateX(y.rx.v*M)),y.o.propType&&(M.length?Lt+=(y.o.v*M[0]-Lt)*M[0]:Lt+=(y.o.v*M-Lt)*M),t.strokeWidthAnim&&y.sw.propType&&(M.length?Dt+=y.sw.v*M[0]:Dt+=y.sw.v*M),t.strokeColorAnim&&y.sc.propType)for(Y=0;Y<3;Y+=1)M.length?xt[Y]+=(y.sc.v[Y]-xt[Y])*M[0]:xt[Y]+=(y.sc.v[Y]-xt[Y])*M;if(t.fillColorAnim&&t.fc){if(y.fc.propType)for(Y=0;Y<3;Y+=1)M.length?ft[Y]+=(y.fc.v[Y]-ft[Y])*M[0]:ft[Y]+=(y.fc.v[Y]-ft[Y])*M;y.fh.propType&&(M.length?ft=rr(ft,y.fh.v*M[0]):ft=rr(ft,y.fh.v*M)),y.fs.propType&&(M.length?ft=ir(ft,y.fs.v*M[0]):ft=ir(ft,y.fs.v*M)),y.fb.propType&&(M.length?ft=sr(ft,y.fb.v*M[0]):ft=sr(ft,y.fb.v*M))}}for(h=0;h<p;h+=1)y=s[h].a,y.p.propType&&($=s[h].s,M=$.getMult(m[S].anIndexes[h],n.a[h].s.totalChars),this._hasMaskedPath?M.length?a.translate(0,y.p.v[1]*M[0],-y.p.v[2]*M[1]):a.translate(0,y.p.v[1]*M,-y.p.v[2]*M):M.length?a.translate(y.p.v[0]*M[0],y.p.v[1]*M[1],-y.p.v[2]*M[2]):a.translate(y.p.v[0]*M,y.p.v[1]*M,-y.p.v[2]*M));if(t.strokeWidthAnim&&(oe=Dt<0?0:Dt),t.strokeColorAnim&&(Ae="rgb("+Math.round(xt[0]*255)+","+Math.round(xt[1]*255)+","+Math.round(xt[2]*255)+")"),t.fillColorAnim&&t.fc&&(le="rgb("+Math.round(ft[0]*255)+","+Math.round(ft[1]*255)+","+Math.round(ft[2]*255)+")"),this._hasMaskedPath){if(a.translate(0,-t.ls),a.translate(0,i[1]*G*.01+w,0),this._pathData.p.v){tt=(P.point[1]-v.point[1])/(P.point[0]-v.point[0]);var je=Math.atan(tt)*180/Math.PI;P.point[0]<v.point[0]&&(je+=180),a.rotate(-je*Math.PI/180)}a.translate(et,lt,0),C-=i[0]*m[S].an*.005,m[S+1]&&q!==m[S+1].ind&&(C+=m[S].an/2,C+=t.tr*.001*t.finalSize)}else{switch(a.translate(f,w,0),t.ps&&a.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:a.translate(m[S].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[m[S].line]),0,0);break;case 2:a.translate(m[S].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[m[S].line])/2,0,0);break;default:break}a.translate(0,-t.ls),a.translate(Q,0,0),a.translate(i[0]*m[S].an*.005,i[1]*G*.01,0),f+=m[S].l+t.tr*.001*t.finalSize}c==="html"?ie=a.toCSS():c==="svg"?ie=a.to2dCSS():he=[a.props[0],a.props[1],a.props[2],a.props[3],a.props[4],a.props[5],a.props[6],a.props[7],a.props[8],a.props[9],a.props[10],a.props[11],a.props[12],a.props[13],a.props[14],a.props[15]],ce=Lt}g<=S?(O=new Cs(ce,oe,Ae,le,ie,he),this.renderedLetters.push(O),g+=1,this.lettersChangedFlag=!0):(O=this.renderedLetters[S],this.lettersChangedFlag=O.update(ce,oe,Ae,le,ie,he)||this.lettersChangedFlag)}}},Ue.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},Ue.prototype.mHelper=new Et,Ue.prototype.defaultPropsArray=[],W([wt],Ue);function Ht(){}Ht.prototype.initElement=function(t,e,i){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,i),this.textProperty=new Tt(this,t.t,this.dynamicProperties),this.textAnimator=new Ue(t.t,this.renderType,this),this.initTransform(t,e,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Ht.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},Ht.prototype.createPathShape=function(t,e){var i,s=e.length,n,a="";for(i=0;i<s;i+=1)e[i].ty==="sh"&&(n=e[i].ks.k,a+=Wr(n,n.i.length,!0,t));return a},Ht.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},Ht.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},Ht.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},Ht.prototype.applyTextPropertiesToMatrix=function(t,e,i,s,n){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i])/2,0,0);break;default:break}e.translate(s,n,0)},Ht.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},Ht.prototype.emptyProp=new Cs,Ht.prototype.destroy=function(){},Ht.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var Gn={shapes:[]};function ae(t,e,i){this.textSpans=[],this.renderType="svg",this.initElement(t,e,i)}W([we,si,ki,ri,xe,Si,Ht],ae),ae.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=it("text"))},ae.prototype.buildTextContents=function(t){for(var e=0,i=t.length,s=[],n="";e<i;)t[e]==="\r"||t[e]===""?(s.push(n),n=""):n+=t[e],e+=1;return s.push(n),s},ae.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var i=t.shapes[0];if(i.it){var s=i.it[i.it.length-1];s.s&&(s.s.k[0]=e,s.s.k[1]=e)}}return t},ae.prototype.buildNewText=function(){this.addDynamicProperty(this);var t,e,i=this.textProperty.currentData;this.renderedLetters=ot(i?i.l.length:0),i.fc?this.layerElement.setAttribute("fill",this.buildColor(i.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),i.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(i.sc)),this.layerElement.setAttribute("stroke-width",i.sw)),this.layerElement.setAttribute("font-size",i.finalSize);var s=this.globalData.fontManager.getFontByName(i.f);if(s.fClass)this.layerElement.setAttribute("class",s.fClass);else{this.layerElement.setAttribute("font-family",s.fFamily);var n=i.fWeight,a=i.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",n)}this.layerElement.setAttribute("aria-label",i.t);var c=i.l||[],g=!!this.globalData.fontManager.chars;e=c.length;var f,w=this.mHelper,S="",z=this.data.singleShape,m=0,A=0,C=!0,P=i.tr*.001*i.finalSize;if(z&&!g&&!i.sz){var F=this.textContainer,k="start";switch(i.j){case 1:k="end";break;case 2:k="middle";break;default:k="start";break}F.setAttribute("text-anchor",k),F.setAttribute("letter-spacing",P);var _=this.buildTextContents(i.finalText);for(e=_.length,A=i.ps?i.ps[1]+i.ascent:0,t=0;t<e;t+=1)f=this.textSpans[t].span||it("tspan"),f.textContent=_[t],f.setAttribute("x",0),f.setAttribute("y",A),f.style.display="inherit",F.appendChild(f),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=f,A+=i.finalLineHeight;this.layerElement.appendChild(F)}else{var d=this.textSpans.length,v;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!g||!z||t===0){if(f=d>t?this.textSpans[t].span:it(g?"g":"text"),d<=t){if(f.setAttribute("stroke-linecap","butt"),f.setAttribute("stroke-linejoin","round"),f.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=f,g){var x=it("g");f.appendChild(x),this.textSpans[t].childSpan=x}this.textSpans[t].span=f,this.layerElement.appendChild(f)}f.style.display="inherit"}if(w.reset(),z&&(c[t].n&&(m=-P,A+=i.yOffset,A+=C?1:0,C=!1),this.applyTextPropertiesToMatrix(i,w,c[t].line,m,A),m+=c[t].l||0,m+=P),g){v=this.globalData.fontManager.getCharData(i.finalText[t],s.fStyle,this.globalData.fontManager.getFontByName(i.f).fFamily);var T;if(v.t===1)T=new Pi(v.data,this.globalData,this);else{var L=Gn;v.data&&v.data.shapes&&(L=this.buildShapeData(v.data,i.finalSize)),T=new mt(L,this.globalData,this)}if(this.textSpans[t].glyph){var R=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(R.layerElement),R.destroy()}this.textSpans[t].glyph=T,T._debug=!0,T.prepareFrame(0),T.renderFrame(),this.textSpans[t].childSpan.appendChild(T.layerElement),v.t===1&&this.textSpans[t].childSpan.setAttribute("transform","scale("+i.finalSize/100+","+i.finalSize/100+")")}else z&&f.setAttribute("transform","translate("+w.props[12]+","+w.props[13]+")"),f.textContent=c[t].val,f.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}z&&f&&f.setAttribute("d",S)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},ae.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},ae.prototype.getValue=function(){var t,e=this.textSpans.length,i;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<e;t+=1)i=this.textSpans[t].glyph,i&&(i.prepareFrame(this.comp.renderedFrame-this.data.st),i._mdf&&(this._mdf=!0))},ae.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,i=this.textAnimator.renderedLetters,s=this.textProperty.currentData.l;e=s.length;var n,a,c;for(t=0;t<e;t+=1)s[t].n||(n=i[t],a=this.textSpans[t].span,c=this.textSpans[t].glyph,c&&c.renderFrame(),n._mdf.m&&a.setAttribute("transform",n.m),n._mdf.o&&a.setAttribute("opacity",n.o),n._mdf.sw&&a.setAttribute("stroke-width",n.sw),n._mdf.sc&&a.setAttribute("stroke",n.sc),n._mdf.fc&&a.setAttribute("fill",n.fc))}};function Ts(t,e,i){this.initElement(t,e,i)}W([Ai],Ts),Ts.prototype.createContent=function(){var t=it("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function Se(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initFrame(),this.initTransform(t,e,i),this.initHierarchy()}Se.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},Se.prototype.renderFrame=function(){},Se.prototype.getBaseElement=function(){return null},Se.prototype.destroy=function(){},Se.prototype.sourceRectAtTime=function(){},Se.prototype.hide=function(){},W([we,si,ri,xe],Se);function yt(){}W([Pt],yt),yt.prototype.createNull=function(t){return new Se(t,this.globalData,this)},yt.prototype.createShape=function(t){return new mt(t,this.globalData,this)},yt.prototype.createText=function(t){return new ae(t,this.globalData,this)},yt.prototype.createImage=function(t){return new Ai(t,this.globalData,this)},yt.prototype.createSolid=function(t){return new Ts(t,this.globalData,this)},yt.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var i=it("clipPath"),s=it("rect");s.setAttribute("width",t.w),s.setAttribute("height",t.h),s.setAttribute("x",0),s.setAttribute("y",0);var n=Mt();i.setAttribute("id",n),i.appendChild(s),this.layerElement.setAttribute("clip-path","url("+U()+"#"+n+")"),e.appendChild(i),this.layers=t.layers,this.elements=ot(t.layers.length)},yt.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},yt.prototype.updateContainerSize=function(){},yt.prototype.findIndexByInd=function(t){var e=0,i=this.layers.length;for(e=0;e<i;e+=1)if(this.layers[e].ind===t)return e;return-1},yt.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var i=this.createItem(this.layers[t]);if(e[t]=i,Di()&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(i),i.initExpressions()),this.appendElementInPos(i,t),this.layers[t].tt){var s="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(s===-1)return;if(!this.elements[s]||this.elements[s]===!0)this.buildItem(s),this.addPendingElement(i);else{var n=e[s],a=n.getMatte(this.layers[t].tt);i.setMatte(a)}}}},yt.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,i=this.elements.length;e<i;){if(this.elements[e]===t){var s="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,n=this.elements[s],a=n.getMatte(this.layers[e].tt);t.setMatte(a);break}e+=1}}},yt.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,i=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=i-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<i;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},yt.prototype.appendElementInPos=function(t,e){var i=t.getBaseElement();if(i){for(var s=0,n;s<e;)this.elements[s]&&this.elements[s]!==!0&&this.elements[s].getBaseElement()&&(n=this.elements[s].getBaseElement()),s+=1;n?this.layerElement.insertBefore(i,n):this.layerElement.appendChild(i)}},yt.prototype.hide=function(){this.layerElement.style.display="none"},yt.prototype.show=function(){this.layerElement.style.display="block"};function ne(){}W([we,si,ri,xe,Si],ne),ne.prototype.initElement=function(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initTransform(t,e,i),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},ne.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var i,s=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),i=s-1;i>=0;i-=1)(this.completeLayers||this.elements[i])&&(this.elements[i].prepareFrame(this.renderedFrame-this.layers[i].st),this.elements[i]._mdf&&(this._mdf=!0))}},ne.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ne.prototype.setElements=function(t){this.elements=t},ne.prototype.getElements=function(){return this.elements},ne.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ne.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function Pi(t,e,i){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?ot(this.layers.length):[],this.initElement(t,e,i),this.tm=t.tm?H.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}W([yt,ne,ki],Pi),Pi.prototype.createComp=function(t){return new Pi(t,this.globalData,this)};function Ms(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=it("svg");var i="";if(e&&e.title){var s=it("title"),n=Mt();s.setAttribute("id",n),s.textContent=e.title,this.svgElement.appendChild(s),i+=n}if(e&&e.description){var a=it("desc"),c=Mt();a.setAttribute("id",c),a.textContent=e.description,this.svgElement.appendChild(a),i+=" "+c}i&&this.svgElement.setAttribute("aria-labelledby",i);var g=it("defs");this.svgElement.appendChild(g);var f=it("g");this.svgElement.appendChild(f),this.layerElement=f,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:g,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}return W([yt],Ms),Ms.prototype.createComp=function(t){return new Pi(t,this.globalData,this)},sn("svg",Ms),_e.registerModifier("tm",Gt),_e.registerModifier("pb",gi),_e.registerModifier("rp",te),_e.registerModifier("rd",vi),_e.registerModifier("zz",_i),_e.registerModifier("op",bi),ct}))});var $t="ecoflow-energy-card",Xt="ecoflow-house-card",ni="ecoflow_iot",fe="/ecoflow_iot";function pe(b,r){return b&&(r?.hassUrl?r.hassUrl(b):b)}var ss=globalThis,rs=ss.ShadowRoot&&(ss.ShadyCSS===void 0||ss.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fs=Symbol(),Gr=new WeakMap,$i=class{constructor(r,o,l){if(this._$cssResult$=!0,l!==Fs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=o}get styleSheet(){let r=this.o,o=this.t;if(rs&&r===void 0){let l=o!==void 0&&o.length===1;l&&(r=Gr.get(o)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),l&&Gr.set(o,r))}return r}toString(){return this.cssText}},Yr=b=>new $i(typeof b=="string"?b:b+"",void 0,Fs),de=(b,...r)=>{let o=b.length===1?b[0]:r.reduce((l,u,E)=>l+(I=>{if(I._$cssResult$===!0)return I.cssText;if(typeof I=="number")return I;throw Error("Value passed to 'css' function must be a 'css' function result: "+I+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(u)+b[E+1],b[0]);return new $i(o,b,Fs)},Kr=(b,r)=>{if(rs)b.adoptedStyleSheets=r.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of r){let l=document.createElement("style"),u=ss.litNonce;u!==void 0&&l.setAttribute("nonce",u),l.textContent=o.cssText,b.appendChild(l)}},Is=rs?b=>b:b=>b instanceof CSSStyleSheet?(r=>{let o="";for(let l of r.cssRules)o+=l.cssText;return Yr(o)})(b):b;var{is:io,defineProperty:so,getOwnPropertyDescriptor:ro,getOwnPropertyNames:ao,getOwnPropertySymbols:no,getPrototypeOf:oo}=Object,as=globalThis,Xr=as.trustedTypes,lo=Xr?Xr.emptyScript:"",ho=as.reactiveElementPolyfillSupport,Ci=(b,r)=>b,Ls={toAttribute(b,r){switch(r){case Boolean:b=b?lo:null;break;case Object:case Array:b=b==null?b:JSON.stringify(b)}return b},fromAttribute(b,r){let o=b;switch(r){case Boolean:o=b!==null;break;case Number:o=b===null?null:Number(b);break;case Object:case Array:try{o=JSON.parse(b)}catch{o=null}}return o}},Jr=(b,r)=>!io(b,r),Zr={attribute:!0,type:String,converter:Ls,reflect:!1,useDefault:!1,hasChanged:Jr};Symbol.metadata??=Symbol("metadata"),as.litPropertyMetadata??=new WeakMap;var ue=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,o=Zr){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(r,o),!o.noAccessor){let l=Symbol(),u=this.getPropertyDescriptor(r,l,o);u!==void 0&&so(this.prototype,r,u)}}static getPropertyDescriptor(r,o,l){let{get:u,set:E}=ro(this.prototype,r)??{get(){return this[o]},set(I){this[o]=I}};return{get:u,set(I){let U=u?.call(this);E?.call(this,I),this.requestUpdate(r,U,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Zr}static _$Ei(){if(this.hasOwnProperty(Ci("elementProperties")))return;let r=oo(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Ci("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ci("properties"))){let o=this.properties,l=[...ao(o),...no(o)];for(let u of l)this.createProperty(u,o[u])}let r=this[Symbol.metadata];if(r!==null){let o=litPropertyMetadata.get(r);if(o!==void 0)for(let[l,u]of o)this.elementProperties.set(l,u)}this._$Eh=new Map;for(let[o,l]of this.elementProperties){let u=this._$Eu(o,l);u!==void 0&&this._$Eh.set(u,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){let o=[];if(Array.isArray(r)){let l=new Set(r.flat(1/0).reverse());for(let u of l)o.unshift(Is(u))}else r!==void 0&&o.push(Is(r));return o}static _$Eu(r,o){let l=o.attribute;return l===!1?void 0:typeof l=="string"?l:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){let r=new Map,o=this.constructor.elementProperties;for(let l of o.keys())this.hasOwnProperty(l)&&(r.set(l,this[l]),delete this[l]);r.size>0&&(this._$Ep=r)}createRenderRoot(){let r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kr(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,o,l){this._$AK(r,l)}_$ET(r,o){let l=this.constructor.elementProperties.get(r),u=this.constructor._$Eu(r,l);if(u!==void 0&&l.reflect===!0){let E=(l.converter?.toAttribute!==void 0?l.converter:Ls).toAttribute(o,l.type);this._$Em=r,E==null?this.removeAttribute(u):this.setAttribute(u,E),this._$Em=null}}_$AK(r,o){let l=this.constructor,u=l._$Eh.get(r);if(u!==void 0&&this._$Em!==u){let E=l.getPropertyOptions(u),I=typeof E.converter=="function"?{fromAttribute:E.converter}:E.converter?.fromAttribute!==void 0?E.converter:Ls;this._$Em=u;let U=I.fromAttribute(o,E.type);this[u]=U??this._$Ej?.get(u)??U,this._$Em=null}}requestUpdate(r,o,l,u=!1,E){if(r!==void 0){let I=this.constructor;if(u===!1&&(E=this[r]),l??=I.getPropertyOptions(r),!((l.hasChanged??Jr)(E,o)||l.useDefault&&l.reflect&&E===this._$Ej?.get(r)&&!this.hasAttribute(I._$Eu(r,l))))return;this.C(r,o,l)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,o,{useDefault:l,reflect:u,wrapped:E},I){l&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,I??o??this[r]),E!==!0||I!==void 0)||(this._$AL.has(r)||(this.hasUpdated||l||(o=void 0),this._$AL.set(r,o)),u===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[u,E]of this._$Ep)this[u]=E;this._$Ep=void 0}let l=this.constructor.elementProperties;if(l.size>0)for(let[u,E]of l){let{wrapped:I}=E,U=this[u];I!==!0||this._$AL.has(u)||U===void 0||this.C(u,void 0,E,U)}}let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),this._$EO?.forEach(l=>l.hostUpdate?.()),this.update(o)):this._$EM()}catch(l){throw r=!1,this._$EM(),l}r&&this._$AE(o)}willUpdate(r){}_$AE(r){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(o=>this._$ET(o,this[o])),this._$EM()}updated(r){}firstUpdated(r){}};ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},ue[Ci("elementProperties")]=new Map,ue[Ci("finalized")]=new Map,ho?.({ReactiveElement:ue}),(as.reactiveElementVersions??=[]).push("2.1.2");var Bs=globalThis,Qr=b=>b,ns=Bs.trustedTypes,ta=ns?ns.createPolicy("lit-html",{createHTML:b=>b}):void 0,na="$lit$",Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,oa="?"+Ce,co=`<${oa}>`,qe=document,Mi=()=>qe.createComment(""),Fi=b=>b===null||typeof b!="object"&&typeof b!="function",Us=Array.isArray,fo=b=>Us(b)||typeof b?.[Symbol.iterator]=="function",zs=`[ 	
\f\r]`,Ti=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ea=/-->/g,ia=/>/g,He=RegExp(`>|${zs}(?:([^\\s"'>=/]+)(${zs}*=${zs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sa=/'/g,ra=/"/g,la=/^(?:script|style|textarea|title)$/i,js=b=>(r,...o)=>({_$litType$:b,strings:r,values:o}),V=js(1),Nt=js(2),qo=js(3),Ge=Symbol.for("lit-noChange"),_t=Symbol.for("lit-nothing"),aa=new WeakMap,We=qe.createTreeWalker(qe,129);function ha(b,r){if(!Us(b)||!b.hasOwnProperty("raw"))throw Error("invalid template strings array");return ta!==void 0?ta.createHTML(r):r}var po=(b,r)=>{let o=b.length-1,l=[],u,E=r===2?"<svg>":r===3?"<math>":"",I=Ti;for(let U=0;U<o;U++){let B=b[U],W,nt,X=-1,rt=0;for(;rt<B.length&&(I.lastIndex=rt,nt=I.exec(B),nt!==null);)rt=I.lastIndex,I===Ti?nt[1]==="!--"?I=ea:nt[1]!==void 0?I=ia:nt[2]!==void 0?(la.test(nt[2])&&(u=RegExp("</"+nt[2],"g")),I=He):nt[3]!==void 0&&(I=He):I===He?nt[0]===">"?(I=u??Ti,X=-1):nt[1]===void 0?X=-2:(X=I.lastIndex-nt[2].length,W=nt[1],I=nt[3]===void 0?He:nt[3]==='"'?ra:sa):I===ra||I===sa?I=He:I===ea||I===ia?I=Ti:(I=He,u=void 0);let at=I===He&&b[U+1].startsWith("/>")?" ":"";E+=I===Ti?B+co:X>=0?(l.push(W),B.slice(0,X)+na+B.slice(X)+Ce+at):B+Ce+(X===-2?U:at)}return[ha(b,E+(b[o]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),l]},Ii=class b{constructor({strings:r,_$litType$:o},l){let u;this.parts=[];let E=0,I=0,U=r.length-1,B=this.parts,[W,nt]=po(r,o);if(this.el=b.createElement(W,l),We.currentNode=this.el.content,o===2||o===3){let X=this.el.content.firstChild;X.replaceWith(...X.childNodes)}for(;(u=We.nextNode())!==null&&B.length<U;){if(u.nodeType===1){if(u.hasAttributes())for(let X of u.getAttributeNames())if(X.endsWith(na)){let rt=nt[I++],at=u.getAttribute(X).split(Ce),ot=/([.?@])?(.*)/.exec(rt);B.push({type:1,index:E,name:ot[2],strings:at,ctor:ot[1]==="."?Rs:ot[1]==="?"?Vs:ot[1]==="@"?Ds:li}),u.removeAttribute(X)}else X.startsWith(Ce)&&(B.push({type:6,index:E}),u.removeAttribute(X));if(la.test(u.tagName)){let X=u.textContent.split(Ce),rt=X.length-1;if(rt>0){u.textContent=ns?ns.emptyScript:"";for(let at=0;at<rt;at++)u.append(X[at],Mi()),We.nextNode(),B.push({type:2,index:++E});u.append(X[rt],Mi())}}}else if(u.nodeType===8)if(u.data===oa)B.push({type:2,index:E});else{let X=-1;for(;(X=u.data.indexOf(Ce,X+1))!==-1;)B.push({type:7,index:E}),X+=Ce.length-1}E++}}static createElement(r,o){let l=qe.createElement("template");return l.innerHTML=r,l}};function oi(b,r,o=b,l){if(r===Ge)return r;let u=l!==void 0?o._$Co?.[l]:o._$Cl,E=Fi(r)?void 0:r._$litDirective$;return u?.constructor!==E&&(u?._$AO?.(!1),E===void 0?u=void 0:(u=new E(b),u._$AT(b,o,l)),l!==void 0?(o._$Co??=[])[l]=u:o._$Cl=u),u!==void 0&&(r=oi(b,u._$AS(b,r.values),u,l)),r}var Os=class{constructor(r,o){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){let{el:{content:o},parts:l}=this._$AD,u=(r?.creationScope??qe).importNode(o,!0);We.currentNode=u;let E=We.nextNode(),I=0,U=0,B=l[0];for(;B!==void 0;){if(I===B.index){let W;B.type===2?W=new Li(E,E.nextSibling,this,r):B.type===1?W=new B.ctor(E,B.name,B.strings,this,r):B.type===6&&(W=new Ns(E,this,r)),this._$AV.push(W),B=l[++U]}I!==B?.index&&(E=We.nextNode(),I++)}return We.currentNode=qe,u}p(r){let o=0;for(let l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(r,l,o),o+=l.strings.length-2):l._$AI(r[o])),o++}},Li=class b{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,o,l,u){this.type=2,this._$AH=_t,this._$AN=void 0,this._$AA=r,this._$AB=o,this._$AM=l,this.options=u,this._$Cv=u?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode,o=this._$AM;return o!==void 0&&r?.nodeType===11&&(r=o.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,o=this){r=oi(this,r,o),Fi(r)?r===_t||r==null||r===""?(this._$AH!==_t&&this._$AR(),this._$AH=_t):r!==this._$AH&&r!==Ge&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):fo(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==_t&&Fi(this._$AH)?this._$AA.nextSibling.data=r:this.T(qe.createTextNode(r)),this._$AH=r}$(r){let{values:o,_$litType$:l}=r,u=typeof l=="number"?this._$AC(r):(l.el===void 0&&(l.el=Ii.createElement(ha(l.h,l.h[0]),this.options)),l);if(this._$AH?._$AD===u)this._$AH.p(o);else{let E=new Os(u,this),I=E.u(this.options);E.p(o),this.T(I),this._$AH=E}}_$AC(r){let o=aa.get(r.strings);return o===void 0&&aa.set(r.strings,o=new Ii(r)),o}k(r){Us(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,l,u=0;for(let E of r)u===o.length?o.push(l=new b(this.O(Mi()),this.O(Mi()),this,this.options)):l=o[u],l._$AI(E),u++;u<o.length&&(this._$AR(l&&l._$AB.nextSibling,u),o.length=u)}_$AR(r=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);r!==this._$AB;){let l=Qr(r).nextSibling;Qr(r).remove(),r=l}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}},li=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,o,l,u,E){this.type=1,this._$AH=_t,this._$AN=void 0,this.element=r,this.name=o,this._$AM=u,this.options=E,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=_t}_$AI(r,o=this,l,u){let E=this.strings,I=!1;if(E===void 0)r=oi(this,r,o,0),I=!Fi(r)||r!==this._$AH&&r!==Ge,I&&(this._$AH=r);else{let U=r,B,W;for(r=E[0],B=0;B<E.length-1;B++)W=oi(this,U[l+B],o,B),W===Ge&&(W=this._$AH[B]),I||=!Fi(W)||W!==this._$AH[B],W===_t?r=_t:r!==_t&&(r+=(W??"")+E[B+1]),this._$AH[B]=W}I&&!u&&this.j(r)}j(r){r===_t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}},Rs=class extends li{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===_t?void 0:r}},Vs=class extends li{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==_t)}},Ds=class extends li{constructor(r,o,l,u,E){super(r,o,l,u,E),this.type=5}_$AI(r,o=this){if((r=oi(this,r,o,0)??_t)===Ge)return;let l=this._$AH,u=r===_t&&l!==_t||r.capture!==l.capture||r.once!==l.once||r.passive!==l.passive,E=r!==_t&&(l===_t||u);u&&this.element.removeEventListener(this.name,this,l),E&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}},Ns=class{constructor(r,o,l){this.element=r,this.type=6,this._$AN=void 0,this._$AM=o,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(r){oi(this,r)}};var uo=Bs.litHtmlPolyfillSupport;uo?.(Ii,Li),(Bs.litHtmlVersions??=[]).push("3.3.3");var ca=(b,r,o)=>{let l=o?.renderBefore??r,u=l._$litPart$;if(u===void 0){let E=o?.renderBefore??null;l._$litPart$=u=new Li(r.insertBefore(Mi(),E),E,void 0,o??{})}return u._$AI(b),u};var Hs=globalThis,Ot=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=ca(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ge}};Ot._$litElement$=!0,Ot.finalized=!0,Hs.litElementHydrateSupport?.({LitElement:Ot});var mo=Hs.litElementPolyfillSupport;mo?.({LitElement:Ot});(Hs.litElementVersions??=[]).push("4.2.2");var os=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function hi(b){return os.some(r=>r.key===b)?`${fe}/devices/${b}.png`:null}function Ye(b){return typeof b=="string"&&b.includes(`${fe}/`)&&b.endsWith(".png")?`${b.slice(0,-4)}.webp`:null}function fa(b){let r=go(b);return r?hi(r):null}function go(b){if(!b)return null;let r=os.find(o=>o.match&&o.match.test(b));return r?r.key:null}var vo={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","sys_load","sys_grid_power","load_from_pv","load_from_grid","load_from_bat","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power","soh","bat_temp","chg_rem_time","dsg_rem_time","full_energy","cycles","calendar_soh"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function yo(b){return Object.values(b.entities||{}).filter(r=>r.platform===ni)}function _o(b){if(b.translation_key)return b.translation_key;let r=b.entity_id.split(".")[1],o=r.lastIndexOf("_");return o>=0?r.slice(o+1):r}function Te(b){let r=new Map;for(let l of yo(b))l.device_id&&(r.has(l.device_id)||r.set(l.device_id,[]),r.get(l.device_id).push(l));let o=[];for(let[l,u]of r)u.some(E=>_o(E)==="pv_total")&&o.push({deviceId:l,device:b.devices?.[l],ents:u});return o}function Me(b,r){let o={};for(let l of r){let[u]=l.entity_id.split("."),E=l.translation_key;E&&(vo[u]||[]).includes(E)&&(o[`${u}.${E}`]=l.entity_id)}if(!o["sensor.cms_batt_soc"])for(let l of r){if(!l.entity_id.startsWith("sensor."))continue;let u=b.states?.[l.entity_id];if(u?.attributes?.device_class==="battery"&&u?.attributes?.unit_of_measurement==="%"){o["sensor.cms_batt_soc"]=l.entity_id;break}}return o}async function Ws(b){if(!b?.callWS)return{};try{return await b.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function pa(b){let r=await Ws(b),o=Object.keys(r);if(!o.length)return[];let l=[];try{l=await b.callWS({type:"config_entries/get"})||[]}catch{l=[]}let u=new Map(l.map(E=>[E.entry_id,E]));return o.map(E=>({id:E,title:u.get(E)?.title||u.get(E)?.domain||E,domain:u.get(E)?.domain||""}))}function da(b,r){let o=r===void 0?Object.keys(b||{}):r,l={};for(let u of o){let E=b?.[u]?.wh_hours;if(E)for(let[I,U]of Object.entries(E)){let B=Number(U);Number.isFinite(B)&&(l[I]=(l[I]||0)+B)}}return l}function qs(b,r=new Date){let o=r.getFullYear(),l=r.getMonth(),u=r.getDate(),E={};for(let[I,U]of Object.entries(b||{})){let B=new Date(I);Number.isNaN(B.getTime())||B.getFullYear()===o&&B.getMonth()===l&&B.getDate()===u&&(E[B.getHours()]=(E[B.getHours()]||0)+U)}return E}function Gs(b,r=new Date){let o=qs(b,r),l=Object.keys(o);return l.length?l.reduce((u,E)=>u+o[E],0):null}async function ua(b,r,o,l){if(!b?.callWS||!r)return null;let u=new Date,I={type:"recorder/statistics_during_period",start_time:(o instanceof Date?o:new Date(u.getFullYear(),u.getMonth(),u.getDate())).toISOString(),statistic_ids:[r],period:"hour",types:["change"]};l instanceof Date&&(I.end_time=l.toISOString());try{let B=(await b.callWS(I))?.[r];if(!Array.isArray(B))return null;let W={};for(let nt of B){let X=new Date(nt.start),rt=Number(nt.change);Number.isNaN(X.getTime())||!Number.isFinite(rt)||(W[X.getHours()]=(W[X.getHours()]||0)+rt)}return W}catch{return null}}function kt(b){return typeof b=="string"&&/\{[{%]/.test(b)}function Bt(b){return typeof b=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(b)}function pt(b){let r=Number(b?.state);return Number.isFinite(r)?r:null}function me(b){return b==null||!Number.isFinite(b)?null:Math.abs(b)>=1e3?`${(b/1e3).toFixed(2)} kW`:`${Math.round(b)} W`}function Ke(b){return b==null||!Number.isFinite(b)?{n:"\u2013",u:"W"}:Math.abs(b)>=1e3?{n:(b/1e3).toFixed(2),u:"kW"}:{n:String(Math.round(b)),u:"W"}}function ma(b){return{n:b!=null&&Number.isFinite(b)?b.toFixed(1):"\u2013",u:"kWh"}}function Ys(b,r=1){return b==null||!Number.isFinite(b)?null:Math.abs(b)>=1e3?`${(b/1e3).toFixed(r)} kWh`:`${Math.round(b)} Wh`}function ga(b){if(b==null||!Number.isFinite(b))return null;let r=Math.round(b);if(r<60)return`${r} min`;let o=Math.floor(r/60);if(o<24){let E=r%60;return E?`${o} h ${E} min`:`${o} h`}let l=Math.floor(o/24),u=o%24;return u?`${l} d ${u} h`:`${l} d`}var va=!1;async function Fe(){if(!va){va=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var ya={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off",confirm_action:"Are you sure?"},house:{home:"Home",grid:"Grid",from_grid:"From grid",to_grid:"To grid",idle:"Idle",not_setup:"Card not set up \u2014 add the EcoFlow IoT integration",page:{appearance:"Appearance",display:"What to show",battery:"Battery",entities:"Entities"},short:{show_flows:"Flows",show_grid:"Grid",show_solar:"Solar",show_home:"Home",show_battery:"Battery"},mode:{auto:"Automatic",day:"Day",night:"Night"},toggle:{show_flows:"Animate energy flows",show_grid:"Show grid power",show_solar:"Show solar power",show_home:"Show home consumption",show_battery:"Show battery"},editor:{style:"House style",style_n:"House {n}",mode:"Day / night",battery:"Battery",battery_hint:"Pick the device render that matches your setup. Shown in front of the house.",custom:"Custom house image",custom_light:"Light / day image",custom_dark:"Dark / night image",custom_remove:"Remove",uploading:"Uploading\u2026",custom_hint:"Upload your own house render to use instead of the built-in styles. The dark image is shown at night (auto/night mode); upload only the light one to use it for both. For a perfect fit, match the built-in 2340\xD71680 layout \u2014 download the full set below to trace over.",download_zip:"Download all house images (.zip)",preparing:"Preparing download\u2026",entities:"Entities",entities_hint:"Override the auto-detected sensors that drive the scene. Leave empty to use the integration's defaults."},battery:{re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + gateway",re305_or_re306_battery:"Stream Ultra",re305_or_re306_device:"Stream Ultra + inverter",re305_device:"Stream Ultra + battery",re306_device:"Stream Ultra (single)",re306_dpu_battery:"Stream Ultra (stacked)",po_space_re305_battery:"Battery stack",po_space_battery:"Battery + inverter",po_space_battery_system_battery:"Single battery",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Battery (JT303)",jt321_space_battery:"Battery (JT321)",dc303_space_battery:"Battery (DC303)"}},battery:{title:"Battery",idle:"Idle",health:"Health",calendar_health:"Calendar health",temperature:"Temperature",time_to_full:"Time to full",time_to_empty:"Time to empty",capacity:"Capacity",cycles:"Cycles"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today.",stats_default:"Default (Solar, Grid)",stats_count:"{n} tiles",stats_default_hint:"The card shows live Solar and Grid power. Customize to show any entities you like instead, each with its own tap action.",stats_customize:"Customize tiles",stats_hint:"Add the entities to show as stat tiles. Set a name and icon, and choose what happens on tap (more-info by default).",stats_add:"Add tile",stats_reset:"Reset to default",stats_remove:"Remove",stats_move_up:"Move up",stats_move_down:"Move down",stat_n:"Tile {n}",stat_field_entity:"Entity",stat_field_name:"Name",stat_field_icon:"Icon",stat_field_tap_action:"Tap action"},page:{appearance:"Appearance",entities:"Entities",stats:"Stat tiles",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",sys_grid_power:"Grid power (whole system)",sys_load:"Home consumption",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}}};var _a={card:{no_device:"Kein EcoFlow Stream-Ger\xE4t gefunden. Richten Sie zuerst die EcoFlow IoT-Integration ein.",device:"EcoFlow Stream",solar:"Solar",grid:"Netz",grid_import:"Bezug",grid_export:"Einspeisung",grid_idle:"Netz inaktiv",battery:"Batterie",charging:"L\xE4dt",discharging:"Entl\xE4dt",today:"Solar heute",produced:"erzeugt",forecast:"Prognose",of_forecast:"{pct}% der Prognose",exceeded:"Prognose erreicht",reserve:"Reserve",charge_limit:"Laden \u2264",discharge_limit:"Entladen \u2265",ac1:"AC 1",ac2:"AC 2",off:"Aus",confirm_action:"Sind Sie sicher?"},house:{home:"Hausnetz",grid:"Netz",from_grid:"Vom Netz",to_grid:"Ins Netz",idle:"Bereit",not_setup:"Karte nicht eingerichtet \u2013 richten Sie die EcoFlow IoT-Integration ein",page:{appearance:"Darstellung",display:"Anzeige",battery:"Batterie",entities:"Entit\xE4ten"},short:{show_flows:"Fl\xFCsse",show_grid:"Netz",show_solar:"Solar",show_home:"Haus",show_battery:"Batterie"},mode:{auto:"Automatisch",day:"Tag",night:"Nacht"},toggle:{show_flows:"Energiefl\xFCsse animieren",show_grid:"Netzleistung anzeigen",show_solar:"Solarleistung anzeigen",show_home:"Hausverbrauch anzeigen",show_battery:"Batterie anzeigen"},editor:{style:"Haus-Stil",style_n:"Haus {n}",mode:"Tag / Nacht",battery:"Batterie",battery_hint:"W\xE4hle das Ger\xE4te-Render, das zu deinem Aufbau passt. Es wird vor dem Haus angezeigt.",custom:"Eigenes Hausbild",custom_light:"Helles / Tag-Bild",custom_dark:"Dunkles / Nacht-Bild",custom_remove:"Entfernen",uploading:"Wird hochgeladen \u2026",custom_hint:"Lade dein eigenes Haus-Render hoch, um es statt der mitgelieferten Stile zu verwenden. Das dunkle Bild wird nachts angezeigt (Auto-/Nacht-Modus); lade nur das helle hoch, um es f\xFCr beide zu nutzen. F\xFCr eine perfekte Passung das mitgelieferte Format 2340\xD71680 \xFCbernehmen \u2013 lade unten den kompletten Satz zum Nachzeichnen herunter.",download_zip:"Alle Hausbilder herunterladen (.zip)",preparing:"Download wird vorbereitet \u2026",entities:"Entit\xE4ten",entities_hint:"\xDCberschreiben Sie die automatisch erkannten Sensoren, die die Darstellung steuern. Leer lassen, um die Standardwerte der Integration zu verwenden."},battery:{re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + Gateway",re305_or_re306_battery:"Stream Ultra",re305_or_re306_device:"Stream Ultra + Wechselrichter",re305_device:"Stream Ultra + Batterie",re306_device:"Stream Ultra (einzeln)",re306_dpu_battery:"Stream Ultra (gestapelt)",po_space_re305_battery:"Batteriestapel",po_space_battery:"Batterie + Wechselrichter",po_space_battery_system_battery:"Einzelbatterie",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Batterie (JT303)",jt321_space_battery:"Batterie (JT321)",dc303_space_battery:"Batterie (DC303)"}},battery:{title:"Batterie",idle:"Inaktiv",health:"Zustand",calendar_health:"Kalenderzustand",temperature:"Temperatur",time_to_full:"Zeit bis voll",time_to_empty:"Zeit bis leer",capacity:"Kapazit\xE4t",cycles:"Zyklen"},confirm:{title:"Steckdose ausschalten?",ac_off:"{name} ausschalten? Alles, was daran angeschlossen ist, verliert die Stromversorgung.",cancel:"Abbrechen",turn_off:"Ausschalten"},panels:{title:"Solarmodule",panel:"Modul {n}",total:"Gesamt",none:"F\xFCr dieses Ger\xE4t sind keine Daten je Solarmodul verf\xFCgbar."},editor:{device:"EcoFlow-Ger\xE4t",automatic:"Automatisch",image:"Ger\xE4tebild",entity:"Entit\xE4t",value_template:"Wert / Vorlage",mode_auto:"Auto",mode_entity:"Entit\xE4t",mode_custom:"Benutzerdefiniert",auto_value:"Automatisch erkannt: {value}",not_found:"nicht gefunden",overridden:"{n} \xFCberschrieben",shown:"Angezeigt",nothing_shown:"Nichts angezeigt",panel:"Modul {n}",panel_name:"Modulname",panel_entity:"Leistungssensor",panel_hidden:"Auf der Karte ausgeblendet.",panels_hint:"Benennen Sie ein Modul um, weisen Sie ihm einen anderen Sensor zu oder blenden Sie es aus der Aufschl\xFCsselung aus. Mit dem Schalter zeigen oder verbergen Sie jedes Modul.",panels_count:"{n} Module",panels_hidden:"{n} ausgeblendet",loading:"L\xE4dt\u2026",forecast_hint:"W\xE4hlen Sie, welche Solarprognose-Anbieter verwendet werden \u2014 dieselben, die im Energie-Dashboard von Home Assistant eingerichtet sind (Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule).",forecast_none:"Keine Solarprognose konfiguriert. F\xFCgen Sie unter Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule eine Prognose hinzu, dann erscheint sie hier.",forecast_none_short:"Nicht konfiguriert",forecast_selected:"{n} von {total} Anbietern",none:"Nicht festgelegt",collection_key:"Energie-Sammlungsschl\xFCssel",collection_hint:"Optional. Um einem in einer Energie-Zeitraumauswahl-Karte gew\xE4hlten Datum zu folgen (Energie-Datumsauswahl), geben Sie hier denselben Sammlungsschl\xFCssel ein wie auf jener Karte \u2014 er beginnt mit \u201Eenergy_\u201C; verwenden Sie \u201Eenergy\u201C f\xFCr eine Auswahl, die auf ihrem Standardschl\xFCssel belassen wurde. Leer lassen, um immer heute anzuzeigen.",stats_default:"Standard (Solar, Netz)",stats_count:"{n} Kacheln",stats_default_hint:"Die Karte zeigt die aktuelle Solar- und Netzleistung. Passen Sie sie an, um stattdessen beliebige Entit\xE4ten anzuzeigen \u2014 jede mit eigener Tipp-Aktion.",stats_customize:"Kacheln anpassen",stats_hint:"F\xFCgen Sie die Entit\xE4ten hinzu, die als Kacheln angezeigt werden sollen. Legen Sie Name und Symbol fest und w\xE4hlen Sie, was beim Tippen passiert (standardm\xE4\xDFig Info-Dialog).",stats_add:"Kachel hinzuf\xFCgen",stats_reset:"Auf Standard zur\xFCcksetzen",stats_remove:"Entfernen",stats_move_up:"Nach oben",stats_move_down:"Nach unten",stat_n:"Kachel {n}",stat_field_entity:"Entit\xE4t",stat_field_name:"Name",stat_field_icon:"Symbol",stat_field_tap_action:"Tipp-Aktion"},page:{appearance:"Darstellung",entities:"Entit\xE4ten",stats:"Kacheln",panels:"Solarmodule",forecast:"Solarprognose",advanced:"Erweitert"},toggle:{show_image:"Ger\xE4tebild anzeigen",show_today:"Heutige Erzeugung anzeigen",show_grid:"Netzleistung anzeigen",show_ac:"AC-Steckdosen anzeigen",show_panels:"F\xFCr Aufschl\xFCsselung je Modul auf Solarleistung tippen",show_forecast:"Heutige Erzeugung mit der Prognose vergleichen"},short:{show_image:"Bild",show_today:"Heute",show_grid:"Netz",show_ac:"AC-Steckdosen",show_panels:"Module",show_forecast:"Prognose"},slot:{sensor:{cms_batt_soc:"Batteriestand",bat_power:"Batterieleistung (Lade-/Entladegeschwindigkeit)",pv_total:"Solarleistung",grid_power:"Netzleistung",sys_grid_power:"Netzleistung (Gesamtsystem)",sys_load:"Hausverbrauch",solar_energy:"Solarenergie (Quelle f\xFCr Tagessumme)",pv1_power:"Solarmodul 1",pv2_power:"Solarmodul 2",pv3_power:"Solarmodul 3",pv4_power:"Solarmodul 4",schuko1_power:"AC-Steckdose 1 Leistung",schuko2_power:"AC-Steckdose 2 Leistung",forecast_today:"Prognose-Entit\xE4t (erwartete Erzeugung heute)"},number:{max_charge_soc:"Ladelimit",min_discharge_soc:"Entladelimit",backup_reserve:"Notstromreserve"},switch:{ac1:"AC-Steckdose 1",ac2:"AC-Steckdose 2"}}};var Ks={en:ya,de:_a};function xo(b){return(b?.locale?.language||b?.language||"en").split("-")[0]}function ba(b,r){let o=r.split(".").reduce((l,u)=>l?.[u],b);return typeof o=="string"?o:void 0}function Wt(b,r,o={}){let l=Ks[xo(b)]||Ks.en,u=ba(l,r)??ba(Ks.en,r)??r;for(let[E,I]of Object.entries(o))u=u.replace(`{${E}}`,I);return u}var wa=de`
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
`;function Xs(b){let r=[];for(let o=1;o<=4;o++){let l=b._config.panels?.[o]||{};if(l.hidden)continue;let u=`sensor.pv${o}_power`,E=b._state(u);E&&r.push({i:o,watts:pt(E),id:b._entityId(u),name:l.name||null})}return r}function xa(b){let r=(E,I)=>Wt(b.hass,E,I),o=Xs(b);if(!o.length)return V`<div class="empty">${r("panels.none")}</div>`;let l=Math.max(1,...o.map(E=>E.watts||0)),u=o.reduce((E,I)=>E+(I.watts||0),0);return V`<div class="panels">
    ${o.map(E=>V`<div
        class="panel-row clickable"
        @click=${()=>b._moreInfoId(E.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${E.name||r("panels.panel",{n:E.i})}
          </span>
          <span class="panel-val">${me(E.watts)??"\u2013"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,(E.watts||0)/l*100)}%"
          ></div>
        </div>
      </div>`)}
    <div class="panel-total">
      <span>${r("panels.total")}</span>
      <span>${me(u)??"\u2013"}</span>
    </div>
  </div>`}var ls=1e3,Zs=340,St={l:46,r:14,t:16,b:28};function Sa(b,{actual:r,forecast:o,totalWh:l,forecastWh:u,currentHour:E,showForecast:I,title:U}){let B=(Z,bt)=>Wt(b.hass,Z,bt),W=ls-St.l-St.r,nt=Zs-St.t-St.b,X=W/24,rt=Z=>St.l+Z/24*W,at=0;for(let Z=0;Z<24;Z++)at=Math.max(at,(r[Z]||0)/1e3),I&&(at=Math.max(at,(o[Z]||0)/1e3));let ot=ko(at>0?at:.1),se=Z=>St.t+nt-Z/ot*nt,Vt=X*.66,qt=[];for(let Z=0;Z<24;Z++){let bt=(r[Z]||0)/1e3;if(bt<=0)continue;let ye=rt(Z+.5)-Vt/2,Le=se(bt),ze=Z===E?"fc-actual fc-current":"fc-actual";qt.push(Nt`<rect class=${ze} x=${ye.toFixed(1)} y=${Le.toFixed(1)}
        width=${Vt.toFixed(1)} height=${(St.t+nt-Le).toFixed(1)} rx="2"></rect>`)}let Zt=null;if(I){let Z=[];for(let bt=0;bt<=24;bt++)Z.push(`${rt(bt).toFixed(1)},${se((o[bt]||0)/1e3).toFixed(1)}`);Zt=Nt`<polyline class="fc-line" points=${Z.join(" ")}></polyline>`}let Ut=[],Ri=4;for(let Z=0;Z<=Ri;Z++){let bt=ot/Ri*Z,ye=se(bt);Ut.push(Nt`<line class="fc-grid" x1=${St.l} y1=${ye.toFixed(1)} x2=${ls-St.r} y2=${ye.toFixed(1)}></line>`),Ut.push(Nt`<text class="fc-axis fc-axis-y" x=${St.l-6} y=${(ye+4).toFixed(1)}>${So(bt)}</text>`)}let fi=[];for(let Z=0;Z<=24;Z+=4)fi.push(Nt`<text class="fc-axis fc-axis-x" x=${rt(Z).toFixed(1)} y=${Zs-8}>${Z}:00</text>`);let Ct=I&&u>0&&l!=null?Math.round(l/u*100):null,Xe=Z=>{b._fcTip!==Z&&(b._fcTip=Z,b.requestUpdate())},Jt=()=>{b._fcTip!=null&&(b._fcTip=null,b.requestUpdate())},gs=[];for(let Z=0;Z<24;Z++)gs.push(Nt`<rect class="fc-hit" x=${rt(Z).toFixed(1)} y=${St.t} width=${X.toFixed(1)} height=${nt}
        @pointerenter=${()=>Xe(Z)} @pointermove=${()=>Xe(Z)}
        @pointerdown=${()=>Xe(Z)}></rect>`);let Ie=b._fcTip,Ze=Ie!=null&&Ie>=0&&Ie<24,tr=Ze?Nt`<rect class="fc-band" x=${rt(Ie).toFixed(1)} y=${St.t} width=${X.toFixed(1)} height=${nt}></rect>`:null,Vi=Ze?dt(Ie):null;function dt(Z){let bt=((r[Z]||0)/1e3).toFixed(2),ye=((o[Z]||0)/1e3).toFixed(2),Le=184,ze=I?84:60,Oe=rt(Z+.5)-Le/2;Oe=Math.max(St.l,Math.min(ls-St.r-Le,Oe));let Re=St.t+6,Je=Oe+12;return Nt`<g class="fc-tip" pointer-events="none">
      <rect class="fc-tip-box" x=${Oe.toFixed(1)} y=${Re} width=${Le} height=${ze} rx="7"></rect>
      <text class="fc-tip-time" x=${Je} y=${Re+24}>${ka(Z)}:00 – ${ka((Z+1)%24)}:00</text>
      <text class="fc-tip-line" x=${Je} y=${Re+46}>${B("card.produced")}: <tspan class="v">${bt} kWh</tspan></text>
      ${I?Nt`<text class="fc-tip-line" x=${Je} y=${Re+68}>${B("card.forecast")}: <tspan class="v">${ye} kWh</tspan></text>`:null}
    </g>`}return V`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${U||B("card.today")}</span>
      <span class="fc-graph-total"
        >${(l!=null?l/1e3:0).toFixed(2)} kWh</span
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
      viewBox="0 0 ${ls} ${Zs}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      @pointerleave=${Jt}
      @pointercancel=${Jt}
    >
      ${Ut}${fi}
      <text class="fc-axis fc-unit" x=${St.l-6} y=${St.t-4}>kWh</text>
      ${tr}${qt}${Zt}${gs}${Vi}
    </svg>
    ${I?V`<div class="fc-graph-legend">
          <span class="lg lg-actual">${B("card.produced")}</span>
          <span class="lg lg-fc">${B("card.forecast")}</span>
        </div>`:""}
  </div>`}function ko(b){let r=Math.pow(10,Math.floor(Math.log10(b))),o=b/r;return(o<=1?1:o<=2?2:o<=5?5:10)*r}function So(b){return b>=10?Math.round(b).toString():b.toFixed(1).replace(/\.0$/,"")}function ka(b){return String(b).padStart(2,"0")}var Ao=300*1e3,hs=class extends Ot{static styles=wa;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._battDir="",this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),Fe(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},Ao)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let r of Object.values(this._tmplUnsub||{}))typeof r=="function"&&r();this._tmplUnsub={}}setConfig(r){this._config=r||{}}static getConfigElement(){return document.createElement(`${$t}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(r,o){return Wt(this.hass,r,o)}_show(r,o=!0){return this._config[r]??o}get _device(){let r=Te(this.hass);return r.length?this._config.device&&r.find(o=>o.deviceId===this._config.device)||r[0]:null}_state(r){let o=this._config.entities?.[r];if(o){if(kt(o)){let u=this._templateResults?.[o];return{state:u===void 0?"unknown":String(u),attributes:{}}}return Bt(o)?this.hass.states[o]:{state:o,attributes:{}}}let l=this._map?.[r];return l?this.hass.states[l]:void 0}_entityId(r){let o=this._config.entities?.[r];return o&&Bt(o)&&!kt(o)?o:this._map?.[r]}updated(r){super.updated(r),(r.has("hass")||r.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let r=this._entityId("sensor.solar_energy");if(!r||!this.hass)return;let{start:o,end:l}=this._dataRange(),u=await ua(this.hass,r,o,l);this._hourly=u||{},this._todayWh=u?Object.values(u).reduce((E,I)=>E+(I||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await Ws(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let r=new Date;return{start:new Date(r.getFullYear(),r.getMonth(),r.getDate()),end:r,ref:r}}_bindEnergyCollection(){let r=this._config.collection_key,o=r?`_${r}`:null;if(o!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=o,this._period=null),!o||this._collUnsub||!this.hass?.connection)return;let l=this.hass.connection[o];if(!l||typeof l.subscribe!="function")return;let u=()=>{this._period={start:l.start,end:l.end},this._refreshData()};this._collUnsub=l.subscribe(()=>u()),u()}_mergedForecast(){return da(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let r=Gs(this._mergedForecast(),this._dataRange().ref);return r!=null?r/1e3:null}_isToday(){let r=this._dataRange().ref,o=new Date;return r.getFullYear()===o.getFullYear()&&r.getMonth()===o.getMonth()&&r.getDate()===o.getDate()}_periodLabel(){return this._isToday()?this._t("card.today"):this._dataRange().ref.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let r=[...Object.values(this._config.entities||{}),this._config.title].filter(o=>kt(o));for(let o of r)if(!this._tmplUnsub[o]){this._tmplUnsub[o]=!0;try{this._tmplUnsub[o]=await this.hass.connection.subscribeMessage(l=>{this._templateResults[o]=l.result,this.requestUpdate()},{type:"render_template",template:o})}catch{this._templateResults[o]="error",this.requestUpdate()}}for(let o of Object.keys(this._tmplUnsub))if(!r.includes(o)){let l=this._tmplUnsub[o];typeof l=="function"&&l(),delete this._tmplUnsub[o],delete this._templateResults[o]}}_moreInfo(r){this._moreInfoId(this._entityId(r))}_moreInfoId(r){r&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:r},bubbles:!0,composed:!0}))}render(){if(!this.hass)return V``;let r=this._device;return r?(this._map=Me(this.hass,r.ents),this._isToday()?V`<ha-card>
      ${this._renderHead(r)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),xa(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),this._forecastGraph(),"large"):""}
      ${this._dialog==="battery"?this._dialogFrame(this._t("battery.title"),this._renderBatteryDetail()):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`:V`<ha-card>${this._forecastGraph()}</ha-card>`):V`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(r,o,l="medium"){return V`<ha-adaptive-dialog
      open
      width=${l}
      header-title=${r}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${o}</div>
    </ha-adaptive-dialog>`}_imageSrc(r){let o=r?.device?.model;return pe(this._config.image_url||(this._config.image?hi(this._config.image):fa(o)),this.hass)}_renderHead(r){let o=this._config.title,l=o&&kt(o)?String(this._templateResults?.[o]??""):o,u=r.device?.model,E=l||r.device?.name_by_user||r.device?.name||u||this._t("card.device"),I=this._imageSrc(r);return V`<div class="head">
      <div class="head-left">
        <div class="name">${E}</div>
        ${u&&u!==E?V`<div class="subtitle">${u}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle(I,E)}
    </div>`}_renderBatteryCircle(r,o){let l=this._state("sensor.cms_batt_soc"),u=this._show("show_image")&&r;if(!l&&!u)return"";let E=pt(l),I=pt(this._state("sensor.bat_power")),U=this._state("binary_sensor.battery_charging")?.state==="on"||I!=null&&I>1,B=!U&&I!=null&&I<-1,W=U?"charge":B?"discharge":E!=null&&E<=15?"low":"",nt=U?"charge":B?"discharge":"";nt&&(this._battDir=nt);let X=nt||this._battDir,rt=!!nt,at=2*Math.PI*44,ot=E!=null?Math.max(0,Math.min(100,E)):0,se=[{v:pt(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:pt(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:pt(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(Vt=>Vt.v!=null);return V`<div
      class="batt-circle clickable ${nt}"
      @click=${()=>this._dialog="battery"}
    >
      ${l?V`<svg class="batt-ring" viewBox="0 0 100 100">
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
      ${l&&X?V`<div class="batt-particles ${X} ${rt?"show":""}">
            ${Array.from({length:12},(Vt,qt)=>{let Zt=qt*30,Ut=qt*5%12/12*1.6;return V`<span
                class="particle"
                style="--angle:${Zt}deg;animation-delay:${Ut.toFixed(2)}s"
              ></span>`})}
          </div>`:""}
      ${u?V`<picture
            >${Ye(r)?V`<source
                  srcset=${Ye(r)}
                  type="image/webp"
                />`:""}<img class="device-img" src="${r}" alt="${o}"
          /></picture>`:l?V`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${l}
            ></ha-state-icon>`:V`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${l&&(U||B)&&I!=null?V`<span class="batt-speed ${nt}">
            <ha-icon
              icon=${U?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${me(Math.abs(I))}
          </span>`:""}
      ${l?V`<span class="batt-badge"
            >${E!=null?Math.round(E):"\u2013"}%</span
          >`:""}
    </div>`}_renderBatteryDetail(){let r=this._device,o=this._show("show_image")&&this._imageSrc(r),l=r?.device?.name||r?.device?.model||this._t("card.device"),u=pt(this._state("sensor.cms_batt_soc")),E=pt(this._state("sensor.bat_power")),I=this._state("binary_sensor.battery_charging")?.state==="on"||E!=null&&E>1,U=!I&&E!=null&&E<-1,B=I?"charge":U?"discharge":"",W=I?"mdi:flash":U?"mdi:battery-arrow-down":"mdi:battery",nt=I?this._t("card.charging"):U?this._t("card.discharging"):this._t("battery.idle"),X=(I||U)&&E!=null?me(Math.abs(E)):null,rt=[{slot:"sensor.soh",icon:"mdi:heart-pulse",label:this._t("battery.health")},{slot:"sensor.calendar_soh",icon:"mdi:calendar-heart",label:this._t("battery.calendar_health")},{slot:"sensor.bat_temp",icon:"mdi:thermometer",label:this._t("battery.temperature")},...I?[{slot:"sensor.chg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_full")}]:[],...U?[{slot:"sensor.dsg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_empty")}]:[],{slot:"sensor.full_energy",icon:"mdi:battery-high",label:this._t("battery.capacity")},{slot:"sensor.cycles",icon:"mdi:battery-sync",label:this._t("battery.cycles")}].map(at=>({...at,value:this._battTileValue(at.slot)})).filter(at=>at.value!=null);return V`<div class="batt-detail">
      <div class="batt-hero">
        ${o?V`<picture
              >${Ye(o)?V`<source srcset=${Ye(o)} type="image/webp" />`:""}<img class="batt-hero-img" src=${o} alt=${l}
            /></picture>`:V`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${u!=null?Math.round(u):"\u2013"}<span class="batt-hero-u">%</span></span
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
    </div>`}_battTileValue(r){let o=this._state(r),l=pt(o);if(l==null)return null;let u=o.attributes?.unit_of_measurement||"";return u==="W"?me(l):u==="Wh"?Ys(l):u==="kWh"?Ys(l*1e3):u==="min"?ga(l):u==="%"?`${Math.round(l)}%`:u?`${Math.round(l)} ${u}`:String(Math.round(l))}_renderAc(){let r=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(o=>({...o,swState:this._state(o.sw),pwState:this._state(o.pw)})).filter(o=>o.swState||o.pwState);return r.length?V`<div class="ac">
      ${r.map(o=>{let l=o.swState?.state==="on",u=pt(o.pwState);return V`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(o.pw)||this._entityId(o.sw))}
        >
          <ha-icon class="ac-icon ${l?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${o.label}</span>
            <span class="ac-power">
              ${o.swState&&!l?this._t("card.off"):u!=null?this._metric(Ke(u)):o.pwState?"\u2014":""}
            </span>
          </div>
          ${o.swState?V`<ha-switch
                .checked=${l}
                @click=${E=>E.stopPropagation()}
                @change=${()=>this._toggleSwitch(o.sw,o.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(r,o){let l=this._entityId(r),u=l?this.hass.states[l]:null;!l||!u||(u.state==="on"?this._confirmAc={slot:r,label:o}:this.hass.callService("switch","turn_on",{entity_id:l}))}_renderConfirmAc(){let{label:r}=this._confirmAc,o=()=>this._confirmAc=null;return V`<ha-adaptive-dialog
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
            @click=${()=>{let l=this._entityId(this._confirmAc.slot);l&&this.hass.callService("switch","turn_off",{entity_id:l}),this._confirmAc=null}}
          >
            ${this._t("confirm.turn_off")}
          </button>
        </div>
      </div>
    </ha-adaptive-dialog>`}_metric(r){return V`<span class="metric"
      ><span class="metric-num">${r.n}</span
      ><span class="metric-unit">${r.u}</span></span
    >`}_renderStats(){if(Array.isArray(this._config.stats))return V`<div class="stats custom">
        ${this._config.stats.map(I=>this._renderCustomStat(I))}
      </div>`;let r=pt(this._state("sensor.pv_total")),o=Xs(this),l=this._show("show_panels")&&o.length>0,u=this._state("sensor.grid_power"),E=pt(u);return V`<div class="stats">
      <div
        class="stat solar ${l?"clickable":""}"
        @click=${l?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${l?V`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${this._metric(Ke(r))}</div>
        ${l?V`<div class="stat-sub">
              ${o.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(E):V`<div></div>`}
    </div>`}_renderGrid(r){let o=r!=null&&r>1,l=r!=null&&r<-1,u=o?"import":l?"export":"",E=o?this._t("card.grid_import"):l?this._t("card.grid_export"):this._t("card.grid_idle");return V`<div
      class="stat grid ${u} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${l?"mdi:transmission-tower-export":o?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${this._metric(Ke(r!=null?Math.abs(r):null))}
      </div>
      <div class="stat-sub">${E}</div>
    </div>`}_renderCustomStat(r){if(!r||!r.entity&&!r.name)return V``;let o=r.entity?this.hass.states[r.entity]:void 0,l=r.name||o?.attributes?.friendly_name||r.entity||"",u=r.tap_action,E=!u||u.action!=="none";return V`<div
      class="stat ${E?"clickable":""}"
      @click=${E?()=>this._handleAction(u,r.entity):null}
    >
      <div class="stat-head">
        ${r.icon?V`<ha-icon icon=${r.icon}></ha-icon>`:o?V`<ha-state-icon
                .hass=${this.hass}
                .stateObj=${o}
              ></ha-state-icon>`:V`<ha-icon icon="mdi:gauge"></ha-icon>`}
        ${l}
      </div>
      <div class="stat-value">${this._metric(this._statValue(o))}</div>
    </div>`}_statValue(r){let o=r?.state;if(o==null||o==="unavailable"||o==="unknown")return{n:"\u2013",u:""};let l=pt(r),u=r.attributes?.unit_of_measurement||"";return l==null?{n:o,u:""}:u==="W"?Ke(l):{n:Number.isInteger(l)?String(l):l.toFixed(1),u}}_handleAction(r,o){let l=r||{action:"more-info"},u=l.action||"more-info";if(u!=="none"){if(l.confirmation){let E=l.confirmation.text||this._t("card.confirm_action")||"Are you sure?";if(!window.confirm(E))return}switch(u){case"more-info":this._moreInfoId(l.entity||o);return;case"toggle":{let E=l.entity||o;E&&this.hass.callService("homeassistant","toggle",{entity_id:E});return}case"navigate":l.navigation_path&&(history.pushState(null,"",l.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0})));return;case"url":l.url_path&&window.open(l.url_path,l.new_tab===!1?"_self":"_blank");return;case"perform-action":case"call-service":{let E=l.perform_action||l.service,[I,U]=(E||"").split(".",2);I&&U&&this.hass.callService(I,U,l.data||l.service_data||{},l.target);return}default:this._moreInfoId(l.entity||o)}}}_forecastGraph(){let r=this._dataRange().ref,o=this._mergedForecast();return Sa(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:qs(o,r),totalWh:this._todayWh,forecastWh:Gs(o,r),currentHour:this._isToday()?new Date().getHours():null,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})}_renderToday(){let r=this._todayWh!=null?this._todayWh/1e3:null,o=Object.keys(this._forecasts||{}).length>0,l=this._show("show_forecast")&&o?this._forecastTodayKWh():null,u=l!=null&&l>0,E=u&&r!=null?Math.min(100,Math.round(r/l*100)):null,I=E!=null&&E>=100;return V`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(ma(r))}</span>
      </div>
      ${u?V`<div class="fc-bar">
              <div
                class="fc-fill ${I?"met":""}"
                style="width:${E}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${r!=null?r.toFixed(1):"\u2013"}</b> /
                ${l.toFixed(1)} kWh
              </span>
              <span>
                ${I?this._t("card.exceeded"):this._t("card.of_forecast",{pct:E??0})}
              </span>
            </div>`:""}
    </div>`}};function Aa(b,r){if(!r)return null;let o=b?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${r}/${o}icon.png`}var Eo=[{name:"device",selector:{device:{integration:ni}}}],Ea={appearance:[["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},Pa={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},$a=new Set,Ca=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"stats",icon:"mdi:chart-box-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],Po=4,cs=class extends Ot{static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),Fe()}setConfig(r){this._config=r||{}}_t(r,o){return Wt(this.hass,r,o)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,pa(this.hass).then(r=>{this._providers=r}))}render(){if(!this.hass)return V``;let r=Ca.find(o=>o.id===this._page);return r?this._renderSubpage(r):this._renderRoot()}_defaults(){let r=Te(this.hass),o=this._config.device&&r.find(l=>l.deviceId===this._config.device)||r[0];return o?Me(this.hass,o.ents):{}}_renderRoot(){return V`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Eo}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${Ca.map(r=>V`<button
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
      </div>`}_summary(r){if(r==="panels"){let I=this._detectedPanels(),U=I.filter(W=>this._config.panels?.[W]?.hidden).length,B=this._t("editor.panels_count",{n:I.length});return U&&(B+=` \xB7 ${this._t("editor.panels_hidden",{n:U})}`),B}if(r==="forecast"){let I=this._providers;if(I===void 0)return this._t("editor.automatic");if(!I.length)return this._t("editor.forecast_none_short");let U=this._config.forecast_config_entries,B=U===void 0?I.length:U.length;return this._t("editor.forecast_selected",{n:B,total:I.length})}if(r==="stats"){let I=this._config.stats;return Array.isArray(I)?this._t("editor.stats_count",{n:I.length}):this._t("editor.stats_default")}if(r==="advanced")return this._config.collection_key||this._t("editor.none");let o=(Pa[r]||[]).filter(([I])=>this._config.entities?.[I]).length,l=o?` \xB7 ${this._t("editor.overridden",{n:o})}`:"",u=Ea[r]||[];if(!u.length)return o?this._t("editor.overridden",{n:o}):this._t("editor.automatic");let E=u.filter(([I,U])=>this._config[I]??U);return E.length?E.map(([I])=>this._t(`short.${I}`)).join(", ")+l:`${this._t("editor.nothing_shown")}${l}`}_renderSubpage(r){return V`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${r.id}`)}</span>
      </div>
      ${(Ea[r.id]||[]).map(([o,l,u])=>this._renderToggle(o,l,u))}
      ${r.id==="appearance"?this._renderImagePicker():r.id==="stats"?this._renderStatsPage():r.id==="panels"?this._renderPanelsPage():r.id==="forecast"?this._renderForecastPage():r.id==="advanced"?this._renderAdvancedPage():(Pa[r.id]||[]).map(([o,l])=>this._renderSlot(o,l))}`}_renderImagePicker(){let r=this._config.image,o=this._config.image_url,l=this._config.show_image??!0;return V`<div class="section">
        <ha-icon icon="mdi:image-multiple-outline"></ha-icon>${this._t("editor.image")}
      </div>
      <div class=${l?"img-grid":"img-grid dim"}>
        <button
          class="img-opt ${!r&&!o?"on":""}"
          title=${this._t("editor.automatic")}
          @click=${()=>this._setImage(null)}
        >
          <span class="img-auto"><ha-icon icon="mdi:auto-fix"></ha-icon></span>
          <span class="img-label">${this._t("editor.automatic")}</span>
        </button>
        ${os.map(u=>V`<button
            class="img-opt ${r===u.key?"on":""}"
            title=${u.name}
            @click=${()=>this._setImage(u.key)}
          >
            <picture
              ><source
                srcset=${Ye(hi(u.key))}
                type="image/webp"
              /><img
                src=${hi(u.key)}
                loading="lazy"
                alt=${u.name} /></picture
            >
            <span class="img-label">${u.name}</span>
          </button>`)}
      </div>`}_setImage(r){let o={...this._config,type:`custom:${$t}`};delete o.image_url,r?o.image=r:delete o.image,this._dispatch(o)}_renderAdvancedPage(){return V`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${r=>{r.stopPropagation(),this._setCollectionKey(r.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(r){let o={...this._config,type:`custom:${$t}`};r?o.collection_key=r:delete o.collection_key,this._dispatch(o)}_renderStatsPage(){let r=this._config.stats;return Array.isArray(r)?V`<div class="hint top-hint">${this._t("editor.stats_hint")}</div>
      ${r.map((o,l)=>this._renderStatBlock(o,l,r.length))}
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
        </button>`}_renderStatBlock(r,o,l){let u=[{name:"entity",selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"tap_action",selector:{ui_action:{}}}],E=r.name||r.entity||this._t("editor.stat_n",{n:o+1});return V`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon=${r.icon||"mdi:chart-box-outline"}></ha-icon>
        <span class="panel-title">${E}</span>
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
          .disabled=${o===l-1}
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
        .schema=${u}
        .computeLabel=${I=>this._t(`editor.stat_field_${I.name}`)}
        @value-changed=${I=>{I.stopPropagation(),this._updateStat(o,I.detail.value)}}
      ></ha-form>
    </div>`}_seedDefaultStats(){let r=this._defaults(),o=l=>{let u=this._config.entities?.[l];return u&&Bt(u)&&!kt(u)?u:r[l]||""};this._setStats([{entity:o("sensor.pv_total"),name:this._t("card.solar"),icon:"mdi:solar-power-variant"},{entity:o("sensor.grid_power"),name:this._t("card.grid"),icon:"mdi:transmission-tower"}])}_updateStat(r,o){let l=[...this._config.stats||[]],u={};for(let[E,I]of Object.entries(o))I===""||I==null||(u[E]=I);l[r]=u,this._setStats(l)}_addStat(){this._setStats([...this._config.stats||[],{}])}_removeStat(r){let o=[...this._config.stats||[]];o.splice(r,1),this._setStats(o)}_moveStat(r,o){let l=[...this._config.stats||[]],u=r+o;u<0||u>=l.length||([l[r],l[u]]=[l[u],l[r]],this._setStats(l))}_setStats(r){this._dispatch({...this._config,stats:r,type:`custom:${$t}`})}_resetStats(){let r={...this._config,type:`custom:${$t}`};delete r.stats,this._dispatch(r)}_renderForecastPage(){let r=this._providers;if(r===void 0)return V`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!r.length)return V`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let o=this._config.show_forecast??!0,l=this._config.forecast_config_entries,u=E=>l===void 0?!0:l.includes(E);return V`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${o?"":"dim"}>
        ${r.map(E=>V`<div class="row">
            ${this._renderBrand(E.domain)}
            <span class="row-label"
              >${E.title}<span class="row-sub">${E.domain}</span></span
            >
            <ha-switch
              .checked=${u(E.id)}
              .disabled=${!o}
              @change=${I=>this._toggleProvider(E.id,I.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(r){let o=Aa(this.hass,r);return V`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${o?V`<img
            class="brand"
            src=${o}
            @error=${l=>{l.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(r,o){let l=(this._providers||[]).map(I=>I.id),u=this._config.forecast_config_entries??l.slice();u=o?[...new Set([...u,r])]:u.filter(I=>I!==r);let E={...this._config,type:`custom:${$t}`};u.length===l.length&&l.every(I=>u.includes(I))?delete E.forecast_config_entries:E.forecast_config_entries=u,this._dispatch(E)}_detectedPanels(){let r=this._defaults(),o=[];for(let l=1;l<=Po;l++)(r[`sensor.pv${l}_power`]||this._config.entities?.[`sensor.pv${l}_power`])&&o.push(l);return o.length?o:[1,2,3,4]}_renderPanelsPage(){return V`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(r=>this._renderPanelConfig(r))}`}_renderPanelConfig(r){let o=this._config.panels?.[r]||{},l=!!o.hidden,u=`sensor.pv${r}_power`;return V`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${o.name||this._t("editor.panel",{n:r})}</span
        >
        <ha-switch
          .checked=${!l}
          @change=${E=>this._dispatch(this._withPanel(r,{hidden:!E.target.checked}))}
        ></ha-switch>
      </div>
      ${l?V`<div class="hint">${this._t("editor.panel_hidden")}</div>`:V`<ha-form
              .hass=${this.hass}
              .data=${{value:o.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${E=>{E.stopPropagation(),this._dispatch(this._withPanel(r,{name:E.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(u,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(r,o){let l={...this._config.panels||{}},u={...l[r]||{}};for(let[I,U]of Object.entries(o))U===""||U==null||U===!1?delete u[I]:u[I]=U;Object.keys(u).length?l[r]=u:delete l[r];let E={...this._config,panels:l,type:`custom:${$t}`};return Object.keys(l).length||delete E.panels,E}_renderToggle(r,o,l){return V`<div class="row">
      <ha-icon icon=${l}></ha-icon>
      <span class="row-label">${this._t(`toggle.${r}`)}</span>
      <ha-switch
        .checked=${this._config[r]??o}
        @change=${u=>this._toggleDisplay(r,o,u.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(r,o){return this._modes[r]?this._modes[r]:o?Bt(o)&&!kt(o)?"entity":"custom":$a.has(r)?"entity":"auto"}_renderModeChips(r,o){let l=$a.has(r)?["entity","custom"]:["auto","entity","custom"];return V`<div class="modes">
      ${l.map(u=>V`<button
          class="mode ${o===u?"on":""}"
          @click=${()=>{this._modes={...this._modes,[r]:u},u==="auto"&&this._setOverride(r,"")}}
        >
          ${this._t(`editor.mode_${u}`)}
        </button>`)}
    </div>`}_renderSlot(r,o,l){let u=this._config.entities?.[r]||"",E=this._slotMode(r,u),I=this._defaults()[r];return V`<div class="section">
        <ha-icon icon=${o}></ha-icon>${l||this._t(`slot.${r}`)}
      </div>
      ${this._renderModeChips(r,E)}
      ${E==="auto"?V`<div class="hint">
            ${this._t("editor.auto_value",{value:I||this._t("editor.not_found")})}
          </div>`:E==="entity"?V`<ha-form
              .hass=${this.hass}
              .data=${{value:Bt(u)&&!kt(u)?u:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${U=>{U.stopPropagation(),this._setOverride(r,U.detail.value.value||"")}}
            ></ha-form>`:V`<ha-form
              .hass=${this.hass}
              .data=${{value:Bt(u)&&!kt(u)?"":u}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${U=>{U.stopPropagation(),this._setOverride(r,U.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(r,o){let l={...this._config.entities||{}};o?l[r]=o:delete l[r];let u={...this._config,entities:l,type:`custom:${$t}`};return Object.keys(l).length||delete u.entities,u}_setOverride(r,o){this._dispatch(this._withOverride(r,o))}_toggleDisplay(r,o,l){let u={...this._config,type:`custom:${$t}`};l===o?delete u[r]:u[r]=l,this._dispatch(u)}_valueChanged(r){r.stopPropagation();let o={...this._config,...r.detail.value,type:`custom:${$t}`};o.device||delete o.device,this._dispatch(o)}_dispatch(r){this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}static get styles(){return de`
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
    `}};var Na=eo(Ta(),1);var Oi=["1","2","3","4","5","6","7","8","9"],ge="1",Ma=["auto","day","night"],ps="auto";function Fa(b,r){if(b==="day"||b==="night")return b;let o=r?.states?.["sun.sun"];return o?o.state==="below_horizon"?"night":"day":r?.themes?.darkMode?"night":"day"}function $o(b,r,o){let l=Oi.includes(b)?b:ge;return pe(`${fe}/houses/${Fa(r,o)}_${l}.webp`,o)}function Js(b){return!!(b?.house_image||b?.house_image_dark)}function Ia(b,r){let o=b?.house_image,l=b?.house_image_dark;if(o||l){let u=Fa(b?.house_mode,r);return pe(u==="night"?l||o:o||l,r)}return $o(b?.house,b?.house_mode,r)}function La(b,r){let o=Oi.includes(b)?b:ge;return pe(`${fe}/houses/day_${o}.webp`,r)}function za(b){let r=[];for(let o of["day","night"])for(let l of Oi)r.push({name:`${o}_${l}.webp`,url:pe(`${fe}/houses/${o}_${l}.webp`,b)});return r}var Qs=["re_space_system_battery","re_space_system_battery_gateway","re305_or_re306_battery","re305_or_re306_device","re305_device","re306_device","re306_dpu_battery","po_space_re305_battery","po_space_battery","po_space_battery_system_battery","po_space_battery_ats","po_space_battery_shp32","po_space_battery_system_dpu","jt303_space_battery","jt321_space_battery","dc303_space_battery"],ci="re_space_system_battery";function ds(b,r){let o=Qs.includes(b)?b:ci;return pe(`${fe}/batteries/${o}.webp`,r)}var Co=new Set(["re_space_system_battery","re_space_system_battery_gateway"]);function Oa(b){return Co.has(b||ci)}function Ra(b,r){return pe(`${fe}/flows/${b}.json`,r)}var To={8:3,9:6};function Va(b){return`re_space_solar_${To[b]||Math.min(7,Math.max(1,b||1))}`}var ve={grid_in:"re_space_gridin",grid_out:"re_space_gridout",home:"re_space_home",bat_in:"jt303_space_battery_input",bat_out:"jt303_space_battery_output",bat_chg:"re_space_bat_chg",bat_dsg:"re_space_bat_dsg",bat_soc:"re_space_bat_soc"};var Da=de`
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
`;var Rt=1,us=class extends Ot{static styles=Da;static get properties(){return{hass:{},_config:{}}}constructor(){super(),this._flowAnims={}}connectedCallback(){super.connectedCallback(),Fe()}disconnectedCallback(){super.disconnectedCallback();for(let r of Object.values(this._flowAnims))r.anim?.destroy();this._flowAnims={}}setConfig(r){this._config=r||{}}static getConfigElement(){return document.createElement(`${Xt}-editor`)}static getStubConfig(){return{house:ge}}getCardSize(){return 7}_t(r,o){return Wt(this.hass,r,o)}_show(r,o=!0){return this._config[r]??o}get _device(){let r=Te(this.hass);return r.length?this._config.device&&r.find(o=>o.deviceId===this._config.device)||r[0]:null}_state(r){let o=this._config.entities?.[r];if(o)return Bt(o)&&!kt(o)?this.hass.states[o]:{state:o,attributes:{}};let l=this._map?.[r];return l?this.hass.states[l]:void 0}_entityId(r){let o=this._config.entities?.[r];return o&&Bt(o)&&!kt(o)?o:this._map?.[r]}_moreInfo(r){let o=this._entityId(r);o&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:o},bubbles:!0,composed:!0}))}_grid(){let r=this._state("sensor.grid_power");return pt(r??this._state("sensor.sys_grid_power"))}_flowStates(){let r=parseInt(this._config.house||ge,10)||1;if(!this._device)return{grid:-400,solar:1500,load:700,bat:500,soc:65,route:r};let o=this._grid(),l=pt(this._state("sensor.pv_total")),u=pt(this._state("sensor.sys_load")),E=pt(this._state("sensor.bat_power")),I=pt(this._state("sensor.cms_batt_soc"));return{grid:o,solar:l,load:u,bat:E,soc:I,route:r}}_flowDefs(){return[{key:"solar",file:r=>Va(r.route),active:r=>r.solar>Rt},{key:"grid_in",file:()=>ve.grid_in,active:r=>r.grid>Rt},{key:"grid_out",file:()=>ve.grid_out,active:r=>r.grid<-Rt},{key:"home",file:()=>ve.home,active:r=>r.load>Rt},{key:"bat_in",file:()=>ve.bat_in,active:r=>r.bat>Rt,bat:!0},{key:"bat_out",file:()=>ve.bat_out,active:r=>r.bat<-Rt,bat:!0},{key:"bat_soc",file:()=>ve.bat_soc,active:r=>r.soc!=null,mode:"soc",bat:!0},{key:"bat_chg",file:()=>ve.bat_chg,active:r=>r.bat>Rt,bat:!0},{key:"bat_dsg",file:()=>ve.bat_dsg,active:r=>r.bat<-Rt,bat:!0}]}updated(r){super.updated(r),this._syncFlows();let o=!!(this._config?.title&&!kt(this._config.title));this.toggleAttribute("has-title",o)}_syncFlows(){if(!this.renderRoot)return;let r=this._show("show_flows"),o=this._show("show_battery")&&Oa(this._config.battery),l=this._flowStates();for(let u of this._flowDefs()){let E=this.renderRoot.querySelector(`[data-flow="${u.key}"]`);if(!E)continue;let I=r&&u.active(l)&&(!u.bat||o);this._setFlow(E,u,I,l)}}_setFlow(r,o,l,u){let E=o.key,I=o.file(u),U=o.mode||"play",B=this._flowAnims[E];if(l&&(!B||B.file!==I)){B?.anim?.destroy();let W=Na.default.loadAnimation({container:r,renderer:"svg",loop:U!=="soc",autoplay:!1,path:Ra(I,this.hass),rendererSettings:{preserveAspectRatio:"xMidYMin meet"}});B=this._flowAnims[E]={anim:W,file:I,ready:!1,mode:U},W.addEventListener("DOMLoaded",()=>{B.ready=!0,this._applyFlow(B,l,this._flowStates())})}B&&this._applyFlow(B,l,u),r.style.opacity=l?"1":"0"}_applyFlow(r,o,l){if(r.ready){if(r.mode==="soc"){r.anim.goToAndStop(Math.max(0,Math.min(100,l.soc??0)),!0);return}o?r.anim.play():r.anim.pause()}}render(){if(!this.hass)return V``;let r=this._device,o=!r;this._map=r?Me(this.hass,r.ents):{};let l=this._config.title&&!kt(this._config.title)?this._config.title:"",u=this._show("show_battery");return V`<ha-card>
      ${l?V`<div class="title">${l}</div>`:""}
      <div class="stage">
        <img
          class="layer house"
          src=${Ia(this._config,this.hass)}
          alt=""
        />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${u?V`<img
              class="layer box"
              src=${ds(this._config.battery,this.hass)}
              alt=""
            />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        ${this._renderLeaders()} ${this._renderStats()}
        ${u?this._renderBattery():""}
        ${o?this._renderSetupWarning():""}
      </div>
    </ha-card>`}_renderSetupWarning(){return V`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`}_renderLeaders(){return V`<div class="leaders">
      ${this._show("show_grid")?V`<span class="leader grid"></span>`:""}
      ${this._show("show_solar")?V`<span class="leader solar"></span>`:""}
      ${this._show("show_home")?V`<span class="leader home"></span>`:""}
    </div>`}_renderStats(){let r=!this._device,o=this._flowStates(),l=[];if(this._show("show_grid")){let u=!r&&o.grid>Rt,E=!r&&o.grid<-Rt;l.push({slot:"sensor.grid_power",fallback:"sensor.sys_grid_power",anchor:"col-grid",value:r?null:o.grid!=null?Math.abs(o.grid):null,label:u?this._t("house.from_grid"):E?this._t("house.to_grid"):this._t("house.grid"),cls:u?"import":E?"export":""})}return this._show("show_solar")&&l.push({slot:"sensor.pv_total",anchor:"col-solar",value:r?null:o.solar,label:this._t("card.solar"),cls:!r&&o.solar>Rt?"solar":""}),this._show("show_home")&&l.push({slot:"sensor.sys_load",anchor:"col-home",value:r?null:o.load,label:this._t("house.home"),cls:!r&&o.load>Rt?"home":""}),l.length?V`<div class="stats">
      ${l.map(u=>{let E=Ke(u.value);return V`<div
          class="stat ${u.anchor} ${u.cls} clickable"
          @click=${()=>this._moreInfo(this._entityId(u.slot)?u.slot:u.fallback||u.slot)}
        >
          <div class="stat-value">
            <span class="num">${E.n}</span><span class="unit">${E.u}</span>
          </div>
          <div class="stat-label">${u.label}</div>
        </div>`})}
    </div>`:""}_renderBattery(){let r=pt(this._state("sensor.cms_batt_soc")),o=pt(this._state("sensor.bat_power")),l=o!=null&&o>Rt,u=o!=null&&o<-Rt,E=l?"charge":u?"discharge":"",I=l?this._t("card.charging"):u?this._t("card.discharging"):this._t("house.idle"),U=o!=null&&(l||u)?me(Math.abs(o)):null;return V`<div
      class="battery ${E} clickable"
      @click=${()=>this._moreInfo(this._entityId("sensor.cms_batt_soc")?"sensor.cms_batt_soc":"sensor.bat_power")}
    >
      <div class="battery-line">
        ${U?V`<ha-icon
              icon=${l?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon
            ><span class="battery-power">${U}</span>`:""}
        ${r!=null?V`<span class="battery-soc">${Math.round(r)}%</span>`:""}
      </div>
      <div class="battery-label">${I}</div>
    </div>`}};var Mo=(()=>{let b=new Uint32Array(256);for(let r=0;r<256;r++){let o=r;for(let l=0;l<8;l++)o=o&1?3988292384^o>>>1:o>>>1;b[r]=o>>>0}return b})();function Fo(b){let r=4294967295;for(let o=0;o<b.length;o++)r=Mo[(r^b[o])&255]^r>>>8;return(r^4294967295)>>>0}var Ba=33,Ua=0;function ja(b){let r=new TextEncoder,o=[],l=[],u=0;for(let U of b){let B=r.encode(U.name),W=Fo(U.data),nt=U.data.length,X=new DataView(new ArrayBuffer(30));X.setUint32(0,67324752,!0),X.setUint16(4,20,!0),X.setUint16(6,0,!0),X.setUint16(8,0,!0),X.setUint16(10,Ua,!0),X.setUint16(12,Ba,!0),X.setUint32(14,W,!0),X.setUint32(18,nt,!0),X.setUint32(22,nt,!0),X.setUint16(26,B.length,!0),X.setUint16(28,0,!0),o.push(new Uint8Array(X.buffer),B,U.data);let rt=new DataView(new ArrayBuffer(46));rt.setUint32(0,33639248,!0),rt.setUint16(4,20,!0),rt.setUint16(6,20,!0),rt.setUint16(8,0,!0),rt.setUint16(10,0,!0),rt.setUint16(12,Ua,!0),rt.setUint16(14,Ba,!0),rt.setUint32(16,W,!0),rt.setUint32(20,nt,!0),rt.setUint32(24,nt,!0),rt.setUint16(28,B.length,!0),rt.setUint16(30,0,!0),rt.setUint16(32,0,!0),rt.setUint16(34,0,!0),rt.setUint16(36,0,!0),rt.setUint32(38,0,!0),rt.setUint32(42,u,!0),l.push(new Uint8Array(rt.buffer),B),u+=30+B.length+nt}let E=l.reduce((U,B)=>U+B.length,0),I=new DataView(new ArrayBuffer(22));return I.setUint32(0,101010256,!0),I.setUint16(8,b.length,!0),I.setUint16(10,b.length,!0),I.setUint32(12,E,!0),I.setUint32(16,u,!0),I.setUint16(20,0,!0),new Blob([...o,...l,new Uint8Array(I.buffer)],{type:"application/zip"})}var Io=[{name:"device",selector:{device:{integration:ni}}}],Ha=[{id:"appearance",icon:"mdi:palette-outline"},{id:"display",icon:"mdi:eye-outline"},{id:"battery",icon:"mdi:home-battery-outline"},{id:"entities",icon:"mdi:tune-variant"}],Wa=[["show_flows",!0,"mdi:transit-connection-variant"],["show_grid",!0,"mdi:transmission-tower"],["show_solar",!0,"mdi:solar-power-variant"],["show_home",!0,"mdi:home-lightning-bolt"],["show_battery",!0,"mdi:home-battery"]],qa=[["sensor.sys_grid_power","mdi:transmission-tower"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.sys_load","mdi:home-lightning-bolt"],["sensor.bat_power","mdi:battery-charging"],["sensor.cms_batt_soc","mdi:battery-high"]],Lo=[["house_image","light","mdi:white-balance-sunny"],["house_image_dark","dark","mdi:weather-night"]],ms=class extends Ot{static get properties(){return{hass:{},_config:{},_page:{state:!0},_zipping:{state:!0},_uploading:{state:!0}}}constructor(){super(),this._page=null,this._zipping=!1,this._uploading=null}connectedCallback(){super.connectedCallback(),Fe()}setConfig(r){this._config=r||{}}_t(r,o){return Wt(this.hass,r,o)}_defaults(){let r=Te(this.hass),o=this._config.device&&r.find(l=>l.deviceId===this._config.device)||r[0];return o?Me(this.hass,o.ents):{}}render(){if(!this.hass)return V``;let r=Ha.find(o=>o.id===this._page);return r?this._renderSubpage(r):this._renderRoot()}_renderRoot(){return V`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Io}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      <div class="nav">
        ${Ha.map(r=>V`<button
            class="nav-row"
            @click=${()=>this._page=r.id}
          >
            <ha-icon class="nav-icon" icon=${r.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`house.page.${r.id}`)}</span>
              <span class="nav-secondary">${this._summary(r.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(r){if(r==="appearance"){if(Js(this._config))return this._t("house.editor.custom");let o=this._config.house||ge,l=this._config.house_mode||ps;return`${this._t("house.editor.style_n",{n:o})} \xB7 ${this._t(`house.mode.${l}`)}`}if(r==="display"){let o=Wa.filter(([l,u])=>this._config[l]??u);return o.length?o.map(([l])=>this._t(`house.short.${l}`)).join(", "):this._t("editor.nothing_shown")}if(r==="battery"){let o=this._config.show_battery??!0,l=this._t(`house.battery.${this._config.battery||ci}`);return o?l:this._t("editor.nothing_shown")}if(r==="entities"){let o=qa.filter(([l])=>this._config.entities?.[l]).length;return o?this._t("editor.overridden",{n:o}):this._t("editor.automatic")}return""}_renderSubpage(r){return V`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`house.page.${r.id}`)}</span>
      </div>
      ${r.id==="appearance"?this._renderAppearancePage():r.id==="display"?Wa.map(([o,l,u])=>this._renderToggle(o,l,u)):r.id==="battery"?this._renderBatteryPage():this._renderEntitiesPage()}`}_renderAppearancePage(){let r=this._config.house||ge,o=Js(this._config),l=this._config.house_mode||ps;return V`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="house-grid">
        ${Oi.map(u=>V`<button
            class="house-opt ${!o&&r===u?"on":""}"
            title=${this._t("house.editor.style_n",{n:u})}
            @click=${()=>this._selectHouse(u)}
          >
            <img src=${La(u,this.hass)} loading="lazy" alt=${u} />
            <span class="house-label">${this._t("house.editor.style_n",{n:u})}</span>
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${Ma.map(u=>V`<button
            class="mode ${l===u?"on":""}"
            @click=${()=>this._set("house_mode",u,ps)}
          >
            ${this._t(`house.mode.${u}`)}
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:image-edit-outline"></ha-icon>${this._t("house.editor.custom")}
      </div>
      <div class="hint">${this._t("house.editor.custom_hint")}</div>
      ${Lo.map(([u,E,I])=>this._renderUploadSlot(u,E,I))}
      <button
        class="link-btn"
        ?disabled=${this._zipping}
        @click=${this._downloadHouses}
      >
        <ha-icon icon=${this._zipping?"mdi:progress-download":"mdi:download"}></ha-icon>
        <span
          >${this._zipping?this._t("house.editor.preparing"):this._t("house.editor.download_zip")}</span
        >
      </button>`}_renderUploadSlot(r,o,l){let u=this._config[r]||"",E=this._uploading===r,I=this._t(`house.editor.custom_${o}`);return V`<div class="upload-slot">
      <div class="upload-slot-label">
        <ha-icon icon=${l}></ha-icon><span>${I}</span>
      </div>
      ${u?V`<div class="custom-img">
            <img src=${u} alt="" />
            <button class="link-btn danger" @click=${()=>this._set(r,"","")}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
              <span>${this._t("house.editor.custom_remove")}</span>
            </button>
          </div>`:V`<label class="upload ${E?"busy":""}">
            <ha-icon icon=${E?"mdi:progress-upload":"mdi:image-plus"}></ha-icon>
            <span>${E?this._t("house.editor.uploading"):I}</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              ?disabled=${this._uploading}
              @change=${U=>this._pickCustomImage(U,r)}
            />
          </label>`}
    </div>`}_renderBatteryPage(){let r=this._config.battery||ci,o=this._config.show_battery??!0;return V`<div class="hint top-hint">${this._t("house.editor.battery_hint")}</div>
      <div class=${o?"batt-grid":"batt-grid dim"}>
        ${Qs.map(l=>V`<button
            class="batt-opt ${r===l?"on":""}"
            title=${this._t(`house.battery.${l}`)}
            @click=${()=>this._set("battery",l,ci)}
          >
            <span
              class="batt-thumb"
              style=${`background-image:url(${ds(l,this.hass)})`}
            ></span>
            <span class="batt-label">${this._t(`house.battery.${l}`)}</span>
          </button>`)}
      </div>`}_renderEntitiesPage(){return V`<div class="hint top-hint">${this._t("house.editor.entities_hint")}</div>
      ${qa.map(([r,o])=>this._renderSlot(r,o))}`}_renderToggle(r,o,l){return V`<div class="row">
      <ha-icon icon=${l}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${r}`)}</span>
      <ha-switch
        .checked=${this._config[r]??o}
        @change=${u=>this._set(r,u.target.checked,o)}
      ></ha-switch>
    </div>`}_renderSlot(r,o){let l=this._config.entities?.[r]||"",u=this._defaults()[r],E=Bt(l)&&!kt(l)?l:"";return V`<div class="slot">
      <ha-icon icon=${o}></ha-icon>
      <ha-form
        class="slot-form"
        .hass=${this.hass}
        .data=${{value:E}}
        .schema=${[{name:"value",selector:{entity:{}}}]}
        .computeLabel=${()=>`${this._t(`slot.${r}`)}${u?` (${this._t("editor.auto_value",{value:u})})`:""}`}
        @value-changed=${I=>{I.stopPropagation(),this._setOverride(r,I.detail.value.value||"")}}
      ></ha-form>
    </div>`}_deviceChanged(r){r.stopPropagation();let o={...this._config,...r.detail.value,type:`custom:${Xt}`};o.device||delete o.device,this._dispatch(o)}_set(r,o,l){let u={...this._config,type:`custom:${Xt}`};o===l||o===""||o==null?delete u[r]:u[r]=o,this._dispatch(u)}_selectHouse(r){let o={...this._config,type:`custom:${Xt}`};delete o.house_image,delete o.house_image_dark,r===ge?delete o.house:o.house=r,this._dispatch(o)}async _pickCustomImage(r,o){let l=r.target.files?.[0];if(r.target.value="",!(!l||this._uploading)){this._uploading=o;try{let u=new FormData;u.append("file",l);let E=await this.hass.fetchWithAuth("/api/image/upload",{method:"POST",body:u});if(!E.ok)throw new Error(`upload failed: ${E.status}`);let I=await E.json();this._set(o,`/api/image/serve/${I.id}/original`,"")}catch(u){console.error("EcoFlow House card: image upload failed",u)}finally{this._uploading=null}}}async _downloadHouses(){if(!this._zipping){this._zipping=!0;try{let r=await Promise.all(za(this.hass).map(async({name:u,url:E})=>{let I=await fetch(E);if(!I.ok)throw new Error(`${E}: ${I.status}`);return{name:u,data:new Uint8Array(await I.arrayBuffer())}})),o=URL.createObjectURL(ja(r)),l=document.createElement("a");l.href=o,l.download="ecoflow-house-images.zip",l.click(),URL.revokeObjectURL(o)}catch(r){console.error("EcoFlow House card: failed to build zip",r)}finally{this._zipping=!1}}}_setOverride(r,o){let l={...this._config.entities||{}};o?l[r]=o:delete l[r];let u={...this._config,entities:l,type:`custom:${Xt}`};Object.keys(l).length||delete u.entities,this._dispatch(u)}_dispatch(r){this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}static get styles(){return de`
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
    `}};customElements.define($t,hs);customElements.define(`${$t}-editor`,cs);customElements.define(Xt,us);customElements.define(`${Xt}-editor`,ms);window.customCards=window.customCards||[];window.customCards.push({type:$t,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:Xt,name:"EcoFlow House Card",description:"Whole-home energy-flow illustration: a house with the battery box and animated grid, solar, home and battery flows.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
