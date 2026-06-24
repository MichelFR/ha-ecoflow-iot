var za=Object.create;var jr=Object.defineProperty;var Oa=Object.getOwnPropertyDescriptor;var Ra=Object.getOwnPropertyNames;var Va=Object.getPrototypeOf,Na=Object.prototype.hasOwnProperty;var Da=(A,r)=>()=>(r||A((r={exports:{}}).exports,r),r.exports);var ja=(A,r,o,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let v of Ra(r))!Na.call(A,v)&&v!==o&&jr(A,v,{get:()=>r[v],enumerable:!(c=Oa(r,v))||c.enumerable});return A};var Ba=(A,r,o)=>(o=A!=null?za(Va(A)):{},ja(r||!A||!A.__esModule?jr(o,"default",{value:A,enumerable:!0}):o,A));var En=Da((Ii,hs)=>{typeof document<"u"&&typeof navigator<"u"&&(function(A,r){typeof Ii=="object"&&typeof hs<"u"?hs.exports=r():typeof define=="function"&&define.amd?define(r):(A=typeof globalThis<"u"?globalThis:A||self,A.lottie=r())})(Ii,(function(){"use strict";var A="http://www.w3.org/2000/svg",r="",o=!1,c=-999999,v=function(e){o=!!e},T=function(){return o},R=function(e){r=e},B=function(){return r};function j(t){return document.createElement(t)}function q(t,e){var i,s=t.length,a;for(i=0;i<s;i+=1){a=t[i].prototype;for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e.prototype[n]=a[n])}}function nt(t,e){return Object.getOwnPropertyDescriptor(t,e)}function rt(t){function e(){}return e.prototype=t,e}var ft=(function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(i){this.audios.push(i)},pause:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].pause()},resume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].resume()},setRate:function(i){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].setRate(i)},createAudio:function(i){return this.audioFactory?this.audioFactory(i):window.Howl?new window.Howl({src:[i]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(i){this.audioFactory=i},setVolume:function(i){this._volume=i,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}})(),st=(function(){function t(i,s){var a=0,n=[],l;switch(i){case"int16":case"uint8c":l=1;break;default:l=1.1;break}for(a=0;a<s;a+=1)n.push(l);return n}function e(i,s){return i==="float32"?new Float32Array(s):i==="int16"?new Int16Array(s):i==="uint8c"?new Uint8ClampedArray(s):t(i,s)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t})();function at(t){return Array.apply(null,{length:t})}function se(t){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se(t)}var Vt=!0,qt=null,Xt=null,Bt="",Li=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),li=!1,$t=Math.pow,Ke=Math.sqrt,Zt=Math.floor,ps=Math.max,Fe=Math.min,Xe={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,i=t.length;for(e=0;e<i;e+=1)Xe[t[e]]=Math[t[e]]})();function Ks(){return{}}Xe.random=Math.random,Xe.abs=function(t){var e=se(t);if(e==="object"&&t.length){var i=at(t.length),s,a=t.length;for(s=0;s<a;s+=1)i[s]=Math.abs(t[s]);return i}return Math.abs(t)};var zi=150,dt=Math.PI/180,X=.5519;function bt(t){li=!!t}function me(t){return li?Math.round(t):t}function Ie(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function Le(t,e,i,s){this.type=t,this.currentTime=e,this.totalTime=i,this.direction=s<0?-1:1}function ze(t,e){this.type=t,this.direction=e<0?-1:1}function Oe(t,e,i,s){this.type=t,this.currentLoop=i,this.totalLoops=e,this.direction=s<0?-1:1}function Ze(t,e,i){this.type=t,this.firstFrame=e,this.totalFrames=i}function Xs(t,e){this.type=t,this.target=e}function zn(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function On(t){this.type="configError",this.nativeError=t}function bo(t,e){this.type=t,this.nativeError=e}var Mt=(function(){var t=0;return function(){return t+=1,Bt+"__lottie_element_"+t}})();function ds(t,e,i){var s,a,n,l,m,f,b,k;switch(l=Math.floor(t*6),m=t*6-l,f=i*(1-e),b=i*(1-m*e),k=i*(1-(1-m)*e),l%6){case 0:s=i,a=k,n=f;break;case 1:s=b,a=i,n=f;break;case 2:s=f,a=i,n=k;break;case 3:s=f,a=b,n=i;break;case 4:s=k,a=f,n=i;break;case 5:s=i,a=f,n=b;break;default:break}return[s,a,n]}function us(t,e,i){var s=Math.max(t,e,i),a=Math.min(t,e,i),n=s-a,l,m=s===0?0:n/s,f=s/255;switch(s){case a:l=0;break;case t:l=e-i+n*(e<i?6:0),l/=6*n;break;case e:l=i-t+n*2,l/=6*n;break;case i:l=t-e+n*4,l/=6*n;break;default:break}return[l,m,f]}function Zs(t,e){var i=us(t[0]*255,t[1]*255,t[2]*255);return i[1]+=e,i[1]>1?i[1]=1:i[1]<=0&&(i[1]=0),ds(i[0],i[1],i[2])}function Js(t,e){var i=us(t[0]*255,t[1]*255,t[2]*255);return i[2]+=e,i[2]>1?i[2]=1:i[2]<0&&(i[2]=0),ds(i[0],i[1],i[2])}function Qs(t,e){var i=us(t[0]*255,t[1]*255,t[2]*255);return i[0]+=e/360,i[0]>1?i[0]-=1:i[0]<0&&(i[0]+=1),ds(i[0],i[1],i[2])}var wo=(function(){var t=[],e,i;for(e=0;e<256;e+=1)i=e.toString(16),t[e]=i.length===1?"0"+i:i;return function(s,a,n){return s<0&&(s=0),a<0&&(a=0),n<0&&(n=0),"#"+t[s]+t[a]+t[n]}})(),Rn=function(e){Vt=!!e},Vn=function(){return Vt},Nn=function(e){qt=e},Oi=function(){return qt},xo=function(e){Xt=e},tr=function(){return Xt},Ri=function(e){zi=e},ci=function(){return zi},Dn=function(e){Bt=e},ko=function(){return Bt};function et(t){return document.createElementNS(A,t)}function ms(t){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ms(t)}var fi=(function(){var t=1,e=[],i,s,a={onmessage:function(){},postMessage:function(S){i({data:S})}},n={postMessage:function(S){a.onmessage({data:S})}};function l(u){if(window.Worker&&window.Blob&&T()){var S=new Blob(["var _workerSelf = self; self.onmessage = ",u.toString()],{type:"text/javascript"}),C=URL.createObjectURL(S);return new Worker(C)}return i=u,a}function m(){s||(s=l(function(S){function C(){function F(V,y){var P,h,p=V.length,z,M,H,J;for(h=0;h<p;h+=1)if(P=V[h],"ks"in P&&!P.completed){if(P.completed=!0,P.hasMask){var tt=P.masksProperties;for(M=tt.length,z=0;z<M;z+=1)if(tt[z].pt.k.i)w(tt[z].pt.k);else for(J=tt[z].pt.k.length,H=0;H<J;H+=1)tt[z].pt.k[H].s&&w(tt[z].pt.k[H].s[0]),tt[z].pt.k[H].e&&w(tt[z].pt.k[H].e[0])}P.ty===0?(P.layers=d(P.refId,y),F(P.layers,y)):P.ty===4?g(P.shapes):P.ty===5&&it(P)}}function x(V,y){if(V){var P=0,h=V.length;for(P=0;P<h;P+=1)V[P].t===1&&(V[P].data.layers=d(V[P].data.refId,y),F(V[P].data.layers,y))}}function _(V,y){for(var P=0,h=y.length;P<h;){if(y[P].id===V)return y[P];P+=1}return null}function d(V,y){var P=_(V,y);return P?P.layers.__used?JSON.parse(JSON.stringify(P.layers)):(P.layers.__used=!0,P.layers):null}function g(V){var y,P=V.length,h,p;for(y=P-1;y>=0;y-=1)if(V[y].ty==="sh")if(V[y].ks.k.i)w(V[y].ks.k);else for(p=V[y].ks.k.length,h=0;h<p;h+=1)V[y].ks.k[h].s&&w(V[y].ks.k[h].s[0]),V[y].ks.k[h].e&&w(V[y].ks.k[h].e[0]);else V[y].ty==="gr"&&g(V[y].it)}function w(V){var y,P=V.i.length;for(y=0;y<P;y+=1)V.i[y][0]+=V.v[y][0],V.i[y][1]+=V.v[y][1],V.o[y][0]+=V.v[y][0],V.o[y][1]+=V.v[y][1]}function $(V,y){var P=y?y.split("."):[100,100,100];return V[0]>P[0]?!0:P[0]>V[0]?!1:V[1]>P[1]?!0:P[1]>V[1]?!1:V[2]>P[2]?!0:P[2]>V[2]?!1:null}var I=(function(){var V=[4,4,14];function y(h){var p=h.t.d;h.t.d={k:[{s:p,t:0}]}}function P(h){var p,z=h.length;for(p=0;p<z;p+=1)h[p].ty===5&&y(h[p])}return function(h){if($(V,h.v)&&(P(h.layers),h.assets)){var p,z=h.assets.length;for(p=0;p<z;p+=1)h.assets[p].layers&&P(h.assets[p].layers)}}})(),O=(function(){var V=[4,7,99];return function(y){if(y.chars&&!$(V,y.v)){var P,h=y.chars.length;for(P=0;P<h;P+=1){var p=y.chars[P];p.data&&p.data.shapes&&(g(p.data.shapes),p.data.ip=0,p.data.op=99999,p.data.st=0,p.data.sr=1,p.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},y.chars[P].t||(p.data.shapes.push({ty:"no"}),p.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}})(),N=(function(){var V=[5,7,15];function y(h){var p=h.t.p;typeof p.a=="number"&&(p.a={a:0,k:p.a}),typeof p.p=="number"&&(p.p={a:0,k:p.p}),typeof p.r=="number"&&(p.r={a:0,k:p.r})}function P(h){var p,z=h.length;for(p=0;p<z;p+=1)h[p].ty===5&&y(h[p])}return function(h){if($(V,h.v)&&(P(h.layers),h.assets)){var p,z=h.assets.length;for(p=0;p<z;p+=1)h.assets[p].layers&&P(h.assets[p].layers)}}})(),Q=(function(){var V=[4,1,9];function y(h){var p,z=h.length,M,H;for(p=0;p<z;p+=1)if(h[p].ty==="gr")y(h[p].it);else if(h[p].ty==="fl"||h[p].ty==="st")if(h[p].c.k&&h[p].c.k[0].i)for(H=h[p].c.k.length,M=0;M<H;M+=1)h[p].c.k[M].s&&(h[p].c.k[M].s[0]/=255,h[p].c.k[M].s[1]/=255,h[p].c.k[M].s[2]/=255,h[p].c.k[M].s[3]/=255),h[p].c.k[M].e&&(h[p].c.k[M].e[0]/=255,h[p].c.k[M].e[1]/=255,h[p].c.k[M].e[2]/=255,h[p].c.k[M].e[3]/=255);else h[p].c.k[0]/=255,h[p].c.k[1]/=255,h[p].c.k[2]/=255,h[p].c.k[3]/=255}function P(h){var p,z=h.length;for(p=0;p<z;p+=1)h[p].ty===4&&y(h[p].shapes)}return function(h){if($(V,h.v)&&(P(h.layers),h.assets)){var p,z=h.assets.length;for(p=0;p<z;p+=1)h.assets[p].layers&&P(h.assets[p].layers)}}})(),K=(function(){var V=[4,4,18];function y(h){var p,z=h.length,M,H;for(p=z-1;p>=0;p-=1)if(h[p].ty==="sh")if(h[p].ks.k.i)h[p].ks.k.c=h[p].closed;else for(H=h[p].ks.k.length,M=0;M<H;M+=1)h[p].ks.k[M].s&&(h[p].ks.k[M].s[0].c=h[p].closed),h[p].ks.k[M].e&&(h[p].ks.k[M].e[0].c=h[p].closed);else h[p].ty==="gr"&&y(h[p].it)}function P(h){var p,z,M=h.length,H,J,tt,ot;for(z=0;z<M;z+=1){if(p=h[z],p.hasMask){var ht=p.masksProperties;for(J=ht.length,H=0;H<J;H+=1)if(ht[H].pt.k.i)ht[H].pt.k.c=ht[H].cl;else for(ot=ht[H].pt.k.length,tt=0;tt<ot;tt+=1)ht[H].pt.k[tt].s&&(ht[H].pt.k[tt].s[0].c=ht[H].cl),ht[H].pt.k[tt].e&&(ht[H].pt.k[tt].e[0].c=ht[H].cl)}p.ty===4&&y(p.shapes)}}return function(h){if($(V,h.v)&&(P(h.layers),h.assets)){var p,z=h.assets.length;for(p=0;p<z;p+=1)h.assets[p].layers&&P(h.assets[p].layers)}}})();function W(V){V.__complete||(Q(V),I(V),O(V),N(V),K(V),F(V.layers,V.assets),x(V.chars,V.assets),V.__complete=!0)}function it(V){V.t.a.length===0&&"m"in V.t.p}var G={};return G.completeData=W,G.checkColors=Q,G.checkChars=O,G.checkPathProperties=N,G.checkShapes=K,G.completeLayers=F,G}if(n.dataManager||(n.dataManager=C()),n.assetLoader||(n.assetLoader=(function(){function F(_){var d=_.getResponseHeader("content-type");return d&&_.responseType==="json"&&d.indexOf("json")!==-1||_.response&&ms(_.response)==="object"?_.response:_.response&&typeof _.response=="string"?JSON.parse(_.response):_.responseText?JSON.parse(_.responseText):null}function x(_,d,g,w){var $,I=new XMLHttpRequest;try{I.responseType="json"}catch{}I.onreadystatechange=function(){if(I.readyState===4)if(I.status===200)$=F(I),g($);else try{$=F(I),g($)}catch(O){w&&w(O)}};try{I.open(["G","E","T"].join(""),_,!0)}catch{I.open(["G","E","T"].join(""),d+"/"+_,!0)}I.send()}return{load:x}})()),S.data.type==="loadAnimation")n.assetLoader.load(S.data.path,S.data.fullPath,function(F){n.dataManager.completeData(F),n.postMessage({id:S.data.id,payload:F,status:"success"})},function(){n.postMessage({id:S.data.id,status:"error"})});else if(S.data.type==="complete"){var E=S.data.animation;n.dataManager.completeData(E),n.postMessage({id:S.data.id,payload:E,status:"success"})}else S.data.type==="loadData"&&n.assetLoader.load(S.data.path,S.data.fullPath,function(F){n.postMessage({id:S.data.id,payload:F,status:"success"})},function(){n.postMessage({id:S.data.id,status:"error"})})}),s.onmessage=function(u){var S=u.data,C=S.id,E=e[C];e[C]=null,S.status==="success"?E.onComplete(S.payload):E.onError&&E.onError()})}function f(u,S){t+=1;var C="processId_"+t;return e[C]={onComplete:u,onError:S},C}function b(u,S,C){m();var E=f(S,C);s.postMessage({type:"loadAnimation",path:u,fullPath:window.location.origin+window.location.pathname,id:E})}function k(u,S,C){m();var E=f(S,C);s.postMessage({type:"loadData",path:u,fullPath:window.location.origin+window.location.pathname,id:E})}function L(u,S,C){m();var E=f(S,C);s.postMessage({type:"complete",animation:u,id:E})}return{loadAnimation:b,loadData:k,completeAnimation:L}})(),jn=(function(){var t=(function(){var x=j("canvas");x.width=1,x.height=1;var _=x.getContext("2d");return _.fillStyle="rgba(0,0,0,0)",_.fillRect(0,0,1,1),x})();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function s(x,_,d){var g="";if(x.e)g=x.p;else if(_){var w=x.p;w.indexOf("images/")!==-1&&(w=w.split("/")[1]),g=_+w}else g=d,g+=x.u?x.u:"",g+=x.p;return g}function a(x){var _=0,d=setInterval(function(){var g=x.getBBox();(g.width||_>500)&&(this._imageLoaded(),clearInterval(d)),_+=1}.bind(this),50)}function n(x){var _=s(x,this.assetsPath,this.path),d=et("image");Li?this.testImageLoaded(d):d.addEventListener("load",this._imageLoaded,!1),d.addEventListener("error",function(){g.img=t,this._imageLoaded()}.bind(this),!1),d.setAttributeNS("http://www.w3.org/1999/xlink","href",_),this._elementHelper.append?this._elementHelper.append(d):this._elementHelper.appendChild(d);var g={img:d,assetData:x};return g}function l(x){var _=s(x,this.assetsPath,this.path),d=j("img");d.crossOrigin="anonymous",d.addEventListener("load",this._imageLoaded,!1),d.addEventListener("error",function(){g.img=t,this._imageLoaded()}.bind(this),!1),d.src=_;var g={img:d,assetData:x};return g}function m(x){var _={assetData:x},d=s(x,this.assetsPath,this.path);return fi.loadData(d,function(g){_.img=g,this._footageLoaded()}.bind(this),function(){_.img={},this._footageLoaded()}.bind(this)),_}function f(x,_){this.imagesLoadedCb=_;var d,g=x.length;for(d=0;d<g;d+=1)x[d].layers||(!x[d].t||x[d].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(x[d]))):x[d].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(x[d]))))}function b(x){this.path=x||""}function k(x){this.assetsPath=x||""}function L(x){for(var _=0,d=this.images.length;_<d;){if(this.images[_].assetData===x)return this.images[_].img;_+=1}return null}function u(){this.imagesLoadedCb=null,this.images.length=0}function S(){return this.totalImages===this.loadedAssets}function C(){return this.totalFootages===this.loadedFootagesCount}function E(x,_){x==="svg"?(this._elementHelper=_,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function F(){this._imageLoaded=e.bind(this),this._footageLoaded=i.bind(this),this.testImageLoaded=a.bind(this),this.createFootageData=m.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return F.prototype={loadAssets:f,setAssetsPath:k,setPath:b,loadedImages:S,loadedFootages:C,destroy:u,getAsset:L,createImgData:l,createImageData:n,imageLoaded:e,footageLoaded:i,setCacheType:E},F})();function er(){}er.prototype={triggerEvent:function(e,i){if(this._cbs[e])for(var s=this._cbs[e],a=0;a<s.length;a+=1)s[a](i)},addEventListener:function(e,i){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(i),function(){this.removeEventListener(e,i)}.bind(this)},removeEventListener:function(e,i){if(!i)this._cbs[e]=null;else if(this._cbs[e]){for(var s=0,a=this._cbs[e].length;s<a;)this._cbs[e][s]===i&&(this._cbs[e].splice(s,1),s-=1,a-=1),s+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var Bn=(function(){function t(e){for(var i=e.split(`\r
`),s={},a,n=0,l=0;l<i.length;l+=1)a=i[l].split(":"),a.length===2&&(s[a[0]]=a[1].trim(),n+=1);if(n===0)throw new Error;return s}return function(e){for(var i=[],s=0;s<e.length;s+=1){var a=e[s],n={time:a.tm,duration:a.dr};try{n.payload=JSON.parse(e[s].cm)}catch{try{n.payload=t(e[s].cm)}catch{n.payload={name:e[s].cm}}}i.push(n)}return i}})(),Wn=(function(){function t(e){this.compositions.push(e)}return function(){function e(i){for(var s=0,a=this.compositions.length;s<a;){if(this.compositions[s].data&&this.compositions[s].data.nm===i)return this.compositions[s].prepareFrame&&this.compositions[s].data.xt&&this.compositions[s].prepareFrame(this.currentFrame),this.compositions[s].compInterface;s+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}})(),pi={},Un=function(e,i){pi[e]=i};function Hn(t){return pi[t]}function qn(){if(pi.canvas)return"canvas";for(var t in pi)if(pi[t])return t;return""}function Vi(t){"@babel/helpers - typeof";return Vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vi(t)}var Z=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Mt(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=Vn(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=Wn(),this.imagePreloader=new jn,this.audioController=ft(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new Le("drawnFrame",0,0,0),this.expressionsPlugin=Oi()};q([er],Z),Z.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var i=Hn(e);this.renderer=new i(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),fi.loadAnimation(t.path,this.configAnimation,this.onSetupError))},Z.prototype.onSetupError=function(){this.trigger("data_failed")},Z.prototype.setupAnimation=function(t){fi.completeAnimation(t,this.configAnimation)},Z.prototype.setData=function(t,e){e&&Vi(e)!=="object"&&(e=JSON.parse(e));var i={wrapper:t,animationData:e},s=t.attributes;i.path=s.getNamedItem("data-animation-path")?s.getNamedItem("data-animation-path").value:s.getNamedItem("data-bm-path")?s.getNamedItem("data-bm-path").value:s.getNamedItem("bm-path")?s.getNamedItem("bm-path").value:"",i.animType=s.getNamedItem("data-anim-type")?s.getNamedItem("data-anim-type").value:s.getNamedItem("data-bm-type")?s.getNamedItem("data-bm-type").value:s.getNamedItem("bm-type")?s.getNamedItem("bm-type").value:s.getNamedItem("data-bm-renderer")?s.getNamedItem("data-bm-renderer").value:s.getNamedItem("bm-renderer")?s.getNamedItem("bm-renderer").value:qn()||"canvas";var a=s.getNamedItem("data-anim-loop")?s.getNamedItem("data-anim-loop").value:s.getNamedItem("data-bm-loop")?s.getNamedItem("data-bm-loop").value:s.getNamedItem("bm-loop")?s.getNamedItem("bm-loop").value:"";a==="false"?i.loop=!1:a==="true"?i.loop=!0:a!==""&&(i.loop=parseInt(a,10));var n=s.getNamedItem("data-anim-autoplay")?s.getNamedItem("data-anim-autoplay").value:s.getNamedItem("data-bm-autoplay")?s.getNamedItem("data-bm-autoplay").value:s.getNamedItem("bm-autoplay")?s.getNamedItem("bm-autoplay").value:!0;i.autoplay=n!=="false",i.name=s.getNamedItem("data-name")?s.getNamedItem("data-name").value:s.getNamedItem("data-bm-name")?s.getNamedItem("data-bm-name").value:s.getNamedItem("bm-name")?s.getNamedItem("bm-name").value:"";var l=s.getNamedItem("data-anim-prerender")?s.getNamedItem("data-anim-prerender").value:s.getNamedItem("data-bm-prerender")?s.getNamedItem("data-bm-prerender").value:s.getNamedItem("bm-prerender")?s.getNamedItem("bm-prerender").value:"";l==="false"&&(i.prerender=!1),i.path?this.setParams(i):this.trigger("destroy")},Z.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,i,s=e.length,a=t.layers,n,l=a.length;for(n=0;n<l;n+=1)for(i=0;i<s;){if(e[i].id===a[n].id){e[i]=a[n];break}i+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,i=0;i<s;i+=1)this.animationData.assets.push(t.assets[i]);this.animationData.__complete=!1,fi.completeAnimation(this.animationData,this.onSegmentComplete)},Z.prototype.onSegmentComplete=function(t){this.animationData=t;var e=Oi();e&&e.initExpressions(this),this.loadNextSegment()},Z.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var i=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,fi.loadData(i,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},Z.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},Z.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},Z.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},Z.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=Bn(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},Z.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},Z.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=Oi();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},Z.prototype.resize=function(t,e){var i=typeof t=="number"?t:void 0,s=typeof e=="number"?e:void 0;this.renderer.updateContainerSize(i,s)},Z.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},Z.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},Z.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},Z.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},Z.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},Z.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},Z.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},Z.prototype.getMarkerData=function(t){for(var e,i=0;i<this.markers.length;i+=1)if(e=this.markers[i],e.payload&&e.payload.name===t)return e;return null},Z.prototype.goToAndStop=function(t,e,i){if(!(i&&this.name!==i)){var s=Number(t);if(isNaN(s)){var a=this.getMarkerData(t);a&&this.goToAndStop(a.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},Z.prototype.goToAndPlay=function(t,e,i){if(!(i&&this.name!==i)){var s=Number(t);if(isNaN(s)){var a=this.getMarkerData(t);a&&(a.duration?this.playSegments([a.time,a.time+a.duration],!0):this.goToAndStop(a.time,!0))}else this.goToAndStop(s,e,i);this.play()}},Z.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,i=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(i=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(i=!0,e=0)):this.setCurrentRawFrameValue(e),i&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},Z.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},Z.prototype.setSegment=function(t,e){var i=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?i=t:this.currentRawFrame+this.firstFrame>e&&(i=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,i!==-1&&this.goToAndStop(i,!0)},Z.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),Vi(t[0])==="object"){var i,s=t.length;for(i=0;i<s;i+=1)this.segments.push(t[i])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},Z.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},Z.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},Z.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},Z.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},Z.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},Z.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},Z.prototype.setLoop=function(t){this.loop=t},Z.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},Z.prototype.getVolume=function(){return this.audioController.getVolume()},Z.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},Z.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},Z.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},Z.prototype.getPath=function(){return this.path},Z.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var i=t.p;i.indexOf("images/")!==-1&&(i=i.split("/")[1]),e=this.assetsPath+i}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},Z.prototype.getAssetData=function(t){for(var e=0,i=this.assets.length;e<i;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},Z.prototype.hide=function(){this.renderer.hide()},Z.prototype.show=function(){this.renderer.show()},Z.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},Z.prototype.updateDocumentData=function(t,e,i){try{var s=this.renderer.getElementByPath(t);s.updateDocumentData(e,i)}catch{}},Z.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new Le(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new Oe(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new ze(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new Ze(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new Xs(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new Le(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new Oe(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new ze(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new Ze(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new Xs(t,this))},Z.prototype.triggerRenderFrameError=function(t){var e=new zn(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},Z.prototype.triggerConfigError=function(t){var e=new On(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var gt=(function(){var t={},e=[],i=0,s=0,a=0,n=!0,l=!1;function m(y){for(var P=0,h=y.target;P<s;)e[P].animation===h&&(e.splice(P,1),P-=1,s-=1,h.isPaused||L()),P+=1}function f(y,P){if(!y)return null;for(var h=0;h<s;){if(e[h].elem===y&&e[h].elem!==null)return e[h].animation;h+=1}var p=new Z;return u(p,y),p.setData(y,P),p}function b(){var y,P=e.length,h=[];for(y=0;y<P;y+=1)h.push(e[y].animation);return h}function k(){a+=1,Q()}function L(){a-=1}function u(y,P){y.addEventListener("destroy",m),y.addEventListener("_active",k),y.addEventListener("_idle",L),e.push({elem:P,animation:y}),s+=1}function S(y){var P=new Z;return u(P,null),P.setParams(y),P}function C(y,P){var h;for(h=0;h<s;h+=1)e[h].animation.setSpeed(y,P)}function E(y,P){var h;for(h=0;h<s;h+=1)e[h].animation.setDirection(y,P)}function F(y){var P;for(P=0;P<s;P+=1)e[P].animation.play(y)}function x(y){var P=y-i,h;for(h=0;h<s;h+=1)e[h].animation.advanceTime(P);i=y,a&&!l?window.requestAnimationFrame(x):n=!0}function _(y){i=y,window.requestAnimationFrame(x)}function d(y){var P;for(P=0;P<s;P+=1)e[P].animation.pause(y)}function g(y,P,h){var p;for(p=0;p<s;p+=1)e[p].animation.goToAndStop(y,P,h)}function w(y){var P;for(P=0;P<s;P+=1)e[P].animation.stop(y)}function $(y){var P;for(P=0;P<s;P+=1)e[P].animation.togglePause(y)}function I(y){var P;for(P=s-1;P>=0;P-=1)e[P].animation.destroy(y)}function O(y,P,h){var p=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),z,M=p.length;for(z=0;z<M;z+=1)h&&p[z].setAttribute("data-bm-type",h),f(p[z],y);if(P&&M===0){h||(h="svg");var H=document.getElementsByTagName("body")[0];H.innerText="";var J=j("div");J.style.width="100%",J.style.height="100%",J.setAttribute("data-bm-type",h),H.appendChild(J),f(J,y)}}function N(){var y;for(y=0;y<s;y+=1)e[y].animation.resize()}function Q(){!l&&a&&n&&(window.requestAnimationFrame(_),n=!1)}function K(){l=!0}function W(){l=!1,Q()}function it(y,P){var h;for(h=0;h<s;h+=1)e[h].animation.setVolume(y,P)}function G(y){var P;for(P=0;P<s;P+=1)e[P].animation.mute(y)}function V(y){var P;for(P=0;P<s;P+=1)e[P].animation.unmute(y)}return t.registerAnimation=f,t.loadAnimation=S,t.setSpeed=C,t.setDirection=E,t.play=F,t.pause=d,t.stop=w,t.togglePause=$,t.searchAnimations=O,t.resize=N,t.goToAndStop=g,t.destroy=I,t.freeze=K,t.unfreeze=W,t.setVolume=it,t.mute=G,t.unmute=V,t.getRegisteredAnimations=b,t})(),di=(function(){var t={};t.getBezierEasing=i;var e={};function i(_,d,g,w,$){var I=$||("bez_"+_+"_"+d+"_"+g+"_"+w).replace(/\./g,"p");if(e[I])return e[I];var O=new x([_,d,g,w]);return e[I]=O,O}var s=4,a=.001,n=1e-7,l=10,m=11,f=1/(m-1),b=typeof Float32Array=="function";function k(_,d){return 1-3*d+3*_}function L(_,d){return 3*d-6*_}function u(_){return 3*_}function S(_,d,g){return((k(d,g)*_+L(d,g))*_+u(d))*_}function C(_,d,g){return 3*k(d,g)*_*_+2*L(d,g)*_+u(d)}function E(_,d,g,w,$){var I,O,N=0;do O=d+(g-d)/2,I=S(O,w,$)-_,I>0?g=O:d=O;while(Math.abs(I)>n&&++N<l);return O}function F(_,d,g,w){for(var $=0;$<s;++$){var I=C(d,g,w);if(I===0)return d;var O=S(d,g,w)-_;d-=O/I}return d}function x(_){this._p=_,this._mSampleValues=b?new Float32Array(m):new Array(m),this._precomputed=!1,this.get=this.get.bind(this)}return x.prototype={get:function(d){var g=this._p[0],w=this._p[1],$=this._p[2],I=this._p[3];return this._precomputed||this._precompute(),g===w&&$===I?d:d===0?0:d===1?1:S(this._getTForX(d),w,I)},_precompute:function(){var d=this._p[0],g=this._p[1],w=this._p[2],$=this._p[3];this._precomputed=!0,(d!==g||w!==$)&&this._calcSampleValues()},_calcSampleValues:function(){for(var d=this._p[0],g=this._p[2],w=0;w<m;++w)this._mSampleValues[w]=S(w*f,d,g)},_getTForX:function(d){for(var g=this._p[0],w=this._p[2],$=this._mSampleValues,I=0,O=1,N=m-1;O!==N&&$[O]<=d;++O)I+=f;--O;var Q=(d-$[O])/($[O+1]-$[O]),K=I+Q*f,W=C(K,g,w);return W>=a?F(d,K,g,w):W===0?K:E(d,I,I+f,g,w)}},t})(),ir=(function(){function t(e){return e.concat(at(e.length))}return{double:t}})(),Ni=(function(){return function(t,e,i){var s=0,a=t,n=at(a),l={newElement:m,release:f};function m(){var b;return s?(s-=1,b=n[s]):b=e(),b}function f(b){s===a&&(n=ir.double(n),a*=2),i&&i(b),n[s]=b,s+=1}return l}})(),sr=(function(){function t(){return{addedLength:0,percents:st("float32",ci()),lengths:st("float32",ci())}}return Ni(8,t)})(),rr=(function(){function t(){return{lengths:[],totalLength:0}}function e(i){var s,a=i.lengths.length;for(s=0;s<a;s+=1)sr.release(i.lengths[s]);i.lengths.length=0}return Ni(8,t,e)})();function Gn(){var t=Math;function e(u,S,C,E,F,x){var _=u*E+S*F+C*x-F*E-x*u-C*S;return _>-.001&&_<.001}function i(u,S,C,E,F,x,_,d,g){if(C===0&&x===0&&g===0)return e(u,S,E,F,_,d);var w=t.sqrt(t.pow(E-u,2)+t.pow(F-S,2)+t.pow(x-C,2)),$=t.sqrt(t.pow(_-u,2)+t.pow(d-S,2)+t.pow(g-C,2)),I=t.sqrt(t.pow(_-E,2)+t.pow(d-F,2)+t.pow(g-x,2)),O;return w>$?w>I?O=w-$-I:O=I-$-w:I>$?O=I-$-w:O=$-w-I,O>-1e-4&&O<1e-4}var s=(function(){return function(u,S,C,E){var F=ci(),x,_,d,g,w,$=0,I,O=[],N=[],Q=sr.newElement();for(d=C.length,x=0;x<F;x+=1){for(w=x/(F-1),I=0,_=0;_<d;_+=1)g=$t(1-w,3)*u[_]+3*$t(1-w,2)*w*C[_]+3*(1-w)*$t(w,2)*E[_]+$t(w,3)*S[_],O[_]=g,N[_]!==null&&(I+=$t(O[_]-N[_],2)),N[_]=O[_];I&&(I=Ke(I),$+=I),Q.percents[x]=w,Q.lengths[x]=$}return Q.addedLength=$,Q}})();function a(u){var S=rr.newElement(),C=u.c,E=u.v,F=u.o,x=u.i,_,d=u._length,g=S.lengths,w=0;for(_=0;_<d-1;_+=1)g[_]=s(E[_],E[_+1],F[_],x[_+1]),w+=g[_].addedLength;return C&&d&&(g[_]=s(E[_],E[0],F[_],x[0]),w+=g[_].addedLength),S.totalLength=w,S}function n(u){this.segmentLength=0,this.points=new Array(u)}function l(u,S){this.partialLength=u,this.point=S}var m=(function(){var u={};return function(S,C,E,F){var x=(S[0]+"_"+S[1]+"_"+C[0]+"_"+C[1]+"_"+E[0]+"_"+E[1]+"_"+F[0]+"_"+F[1]).replace(/\./g,"p");if(!u[x]){var _=ci(),d,g,w,$,I,O=0,N,Q,K=null;S.length===2&&(S[0]!==C[0]||S[1]!==C[1])&&e(S[0],S[1],C[0],C[1],S[0]+E[0],S[1]+E[1])&&e(S[0],S[1],C[0],C[1],C[0]+F[0],C[1]+F[1])&&(_=2);var W=new n(_);for(w=E.length,d=0;d<_;d+=1){for(Q=at(w),I=d/(_-1),N=0,g=0;g<w;g+=1)$=$t(1-I,3)*S[g]+3*$t(1-I,2)*I*(S[g]+E[g])+3*(1-I)*$t(I,2)*(C[g]+F[g])+$t(I,3)*C[g],Q[g]=$,K!==null&&(N+=$t(Q[g]-K[g],2));N=Ke(N),O+=N,W.points[d]=new l(N,Q),K=Q}W.segmentLength=O,u[x]=W}return u[x]}})();function f(u,S){var C=S.percents,E=S.lengths,F=C.length,x=Zt((F-1)*u),_=u*S.addedLength,d=0;if(x===F-1||x===0||_===E[x])return C[x];for(var g=E[x]>_?-1:1,w=!0;w;)if(E[x]<=_&&E[x+1]>_?(d=(_-E[x])/(E[x+1]-E[x]),w=!1):x+=g,x<0||x>=F-1){if(x===F-1)return C[x];w=!1}return C[x]+(C[x+1]-C[x])*d}function b(u,S,C,E,F,x){var _=f(F,x),d=1-_,g=t.round((d*d*d*u[0]+(_*d*d+d*_*d+d*d*_)*C[0]+(_*_*d+d*_*_+_*d*_)*E[0]+_*_*_*S[0])*1e3)/1e3,w=t.round((d*d*d*u[1]+(_*d*d+d*_*d+d*d*_)*C[1]+(_*_*d+d*_*_+_*d*_)*E[1]+_*_*_*S[1])*1e3)/1e3;return[g,w]}var k=st("float32",8);function L(u,S,C,E,F,x,_){F<0?F=0:F>1&&(F=1);var d=f(F,_);x=x>1?1:x;var g=f(x,_),w,$=u.length,I=1-d,O=1-g,N=I*I*I,Q=d*I*I*3,K=d*d*I*3,W=d*d*d,it=I*I*O,G=d*I*O+I*d*O+I*I*g,V=d*d*O+I*d*g+d*I*g,y=d*d*g,P=I*O*O,h=d*O*O+I*g*O+I*O*g,p=d*g*O+I*g*g+d*O*g,z=d*g*g,M=O*O*O,H=g*O*O+O*g*O+O*O*g,J=g*g*O+O*g*g+g*O*g,tt=g*g*g;for(w=0;w<$;w+=1)k[w*4]=t.round((N*u[w]+Q*C[w]+K*E[w]+W*S[w])*1e3)/1e3,k[w*4+1]=t.round((it*u[w]+G*C[w]+V*E[w]+y*S[w])*1e3)/1e3,k[w*4+2]=t.round((P*u[w]+h*C[w]+p*E[w]+z*S[w])*1e3)/1e3,k[w*4+3]=t.round((M*u[w]+H*C[w]+J*E[w]+tt*S[w])*1e3)/1e3;return k}return{getSegmentsLength:a,getNewSegment:L,getPointInSegment:b,buildBezierData:m,pointOnLine2D:e,pointOnLine3D:i}}var Jt=Gn(),Re=c,nr=Math.abs;function ar(t,e){var i=this.offsetTime,s;this.propType==="multidimensional"&&(s=st("float32",this.pv.length));for(var a=e.lastIndex,n=a,l=this.keyframes.length-1,m=!0,f,b,k;m;){if(f=this.keyframes[n],b=this.keyframes[n+1],n===l-1&&t>=b.t-i){f.h&&(f=b),a=0;break}if(b.t-i>t){a=n;break}n<l-1?n+=1:(a=0,m=!1)}k=this.keyframesMetadata[n]||{};var L,u,S,C,E,F,x=b.t-i,_=f.t-i,d;if(f.to){k.bezierData||(k.bezierData=Jt.buildBezierData(f.s,b.s||f.e,f.to,f.ti));var g=k.bezierData;if(t>=x||t<_){var w=t>=x?g.points.length-1:0;for(u=g.points[w].point.length,L=0;L<u;L+=1)s[L]=g.points[w].point[L]}else{k.__fnct?F=k.__fnct:(F=di.getBezierEasing(f.o.x,f.o.y,f.i.x,f.i.y,f.n).get,k.__fnct=F),S=F((t-_)/(x-_));var $=g.segmentLength*S,I,O=e.lastFrame<t&&e._lastKeyframeIndex===n?e._lastAddedLength:0;for(E=e.lastFrame<t&&e._lastKeyframeIndex===n?e._lastPoint:0,m=!0,C=g.points.length;m;){if(O+=g.points[E].partialLength,$===0||S===0||E===g.points.length-1){for(u=g.points[E].point.length,L=0;L<u;L+=1)s[L]=g.points[E].point[L];break}else if($>=O&&$<O+g.points[E+1].partialLength){for(I=($-O)/g.points[E+1].partialLength,u=g.points[E].point.length,L=0;L<u;L+=1)s[L]=g.points[E].point[L]+(g.points[E+1].point[L]-g.points[E].point[L])*I;break}E<C-1?E+=1:m=!1}e._lastPoint=E,e._lastAddedLength=O-g.points[E].partialLength,e._lastKeyframeIndex=n}}else{var N,Q,K,W,it;if(l=f.s.length,d=b.s||f.e,this.sh&&f.h!==1)if(t>=x)s[0]=d[0],s[1]=d[1],s[2]=d[2];else if(t<=_)s[0]=f.s[0],s[1]=f.s[1],s[2]=f.s[2];else{var G=or(f.s),V=or(d),y=(t-_)/(x-_);Kn(s,Yn(G,V,y))}else for(n=0;n<l;n+=1)f.h!==1&&(t>=x?S=1:t<_?S=0:(f.o.x.constructor===Array?(k.__fnct||(k.__fnct=[]),k.__fnct[n]?F=k.__fnct[n]:(N=f.o.x[n]===void 0?f.o.x[0]:f.o.x[n],Q=f.o.y[n]===void 0?f.o.y[0]:f.o.y[n],K=f.i.x[n]===void 0?f.i.x[0]:f.i.x[n],W=f.i.y[n]===void 0?f.i.y[0]:f.i.y[n],F=di.getBezierEasing(N,Q,K,W).get,k.__fnct[n]=F)):k.__fnct?F=k.__fnct:(N=f.o.x,Q=f.o.y,K=f.i.x,W=f.i.y,F=di.getBezierEasing(N,Q,K,W).get,f.keyframeMetadata=F),S=F((t-_)/(x-_)))),d=b.s||f.e,it=f.h===1?f.s[n]:f.s[n]+(d[n]-f.s[n])*S,this.propType==="multidimensional"?s[n]=it:s=it}return e.lastIndex=a,s}function Yn(t,e,i){var s=[],a=t[0],n=t[1],l=t[2],m=t[3],f=e[0],b=e[1],k=e[2],L=e[3],u,S,C,E,F;return S=a*f+n*b+l*k+m*L,S<0&&(S=-S,f=-f,b=-b,k=-k,L=-L),1-S>1e-6?(u=Math.acos(S),C=Math.sin(u),E=Math.sin((1-i)*u)/C,F=Math.sin(i*u)/C):(E=1-i,F=i),s[0]=E*a+F*f,s[1]=E*n+F*b,s[2]=E*l+F*k,s[3]=E*m+F*L,s}function Kn(t,e){var i=e[0],s=e[1],a=e[2],n=e[3],l=Math.atan2(2*s*n-2*i*a,1-2*s*s-2*a*a),m=Math.asin(2*i*s+2*a*n),f=Math.atan2(2*i*n-2*s*a,1-2*i*i-2*a*a);t[0]=l/dt,t[1]=m/dt,t[2]=f/dt}function or(t){var e=t[0]*dt,i=t[1]*dt,s=t[2]*dt,a=Math.cos(e/2),n=Math.cos(i/2),l=Math.cos(s/2),m=Math.sin(e/2),f=Math.sin(i/2),b=Math.sin(s/2),k=a*n*l-m*f*b,L=m*f*l+a*n*b,u=m*n*l+a*f*b,S=a*f*l-m*n*b;return[L,u,S,k]}function hr(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==Re&&(this._caching.lastFrame>=i&&t>=i||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var s=this.interpolateValue(t,this._caching);this.pv=s}return this._caching.lastFrame=t,this.pv}function Di(t){var e;if(this.propType==="unidimensional")e=t*this.mult,nr(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var i=0,s=this.v.length;i<s;)e=t[i]*this.mult,nr(this.v[i]-e)>1e-5&&(this.v[i]=e,this._mdf=!0),i+=1}function ji(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,i=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)i=this.effectsSequence[t](i);this.setVValue(i),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function Bi(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function Xn(t,e,i,s){this.propType="unidimensional",this.mult=i||1,this.data=e,this.v=i?e.k*i:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=ji,this.setVValue=Di,this.addEffect=Bi}function Zn(t,e,i,s){this.propType="multidimensional",this.mult=i||1,this.data=e,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var a,n=e.k.length;for(this.v=st("float32",n),this.pv=st("float32",n),this.vel=st("float32",n),a=0;a<n;a+=1)this.v[a]=e.k[a]*this.mult,this.pv[a]=e.k[a];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=ji,this.setVValue=Di,this.addEffect=Bi}function Jn(t,e,i,s){this.propType="unidimensional",this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:Re,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=i||1,this.elem=t,this.container=s,this.comp=t.comp,this.v=Re,this.pv=Re,this._isFirstFrame=!0,this.getValue=ji,this.setVValue=Di,this.interpolateValue=ar,this.effectsSequence=[hr.bind(this)],this.addEffect=Bi}function Qn(t,e,i,s){this.propType="multidimensional";var a,n=e.k.length,l,m,f,b;for(a=0;a<n-1;a+=1)e.k[a].to&&e.k[a].s&&e.k[a+1]&&e.k[a+1].s&&(l=e.k[a].s,m=e.k[a+1].s,f=e.k[a].to,b=e.k[a].ti,(l.length===2&&!(l[0]===m[0]&&l[1]===m[1])&&Jt.pointOnLine2D(l[0],l[1],m[0],m[1],l[0]+f[0],l[1]+f[1])&&Jt.pointOnLine2D(l[0],l[1],m[0],m[1],m[0]+b[0],m[1]+b[1])||l.length===3&&!(l[0]===m[0]&&l[1]===m[1]&&l[2]===m[2])&&Jt.pointOnLine3D(l[0],l[1],l[2],m[0],m[1],m[2],l[0]+f[0],l[1]+f[1],l[2]+f[2])&&Jt.pointOnLine3D(l[0],l[1],l[2],m[0],m[1],m[2],m[0]+b[0],m[1]+b[1],m[2]+b[2]))&&(e.k[a].to=null,e.k[a].ti=null),l[0]===m[0]&&l[1]===m[1]&&f[0]===0&&f[1]===0&&b[0]===0&&b[1]===0&&(l.length===2||l[2]===m[2]&&f[2]===0&&b[2]===0)&&(e.k[a].to=null,e.k[a].ti=null));this.effectsSequence=[hr.bind(this)],this.data=e,this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=i||1,this.elem=t,this.container=s,this.comp=t.comp,this.getValue=ji,this.setVValue=Di,this.interpolateValue=ar,this.frameId=-1;var k=e.k[0].s.length;for(this.v=st("float32",k),this.pv=st("float32",k),a=0;a<k;a+=1)this.v[a]=Re,this.pv[a]=Re;this._caching={lastFrame:Re,lastIndex:0,value:st("float32",k)},this.addEffect=Bi}var U=(function(){function t(i,s,a,n,l){s.sid&&(s=i.globalData.slotManager.getProp(s));var m;if(!s.k.length)m=new Xn(i,s,n,l);else if(typeof s.k[0]=="number")m=new Zn(i,s,n,l);else switch(a){case 0:m=new Jn(i,s,n,l);break;case 1:m=new Qn(i,s,n,l);break;default:break}return m.effectsSequence.length&&l.addDynamicProperty(m),m}var e={getProp:t};return e})();function wt(){}wt.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,i=this.dynamicProperties.length;for(e=0;e<i;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var Ve=(function(){function t(){return st("float32",2)}return Ni(8,t)})();function re(){this.c=!1,this._length=0,this._maxLength=8,this.v=at(this._maxLength),this.o=at(this._maxLength),this.i=at(this._maxLength)}re.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var i=0;i<e;)this.v[i]=Ve.newElement(),this.o[i]=Ve.newElement(),this.i[i]=Ve.newElement(),i+=1},re.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},re.prototype.doubleArrayLength=function(){this.v=this.v.concat(at(this._maxLength)),this.i=this.i.concat(at(this._maxLength)),this.o=this.o.concat(at(this._maxLength)),this._maxLength*=2},re.prototype.setXYAt=function(t,e,i,s,a){var n;switch(this._length=Math.max(this._length,s+1),this._length>=this._maxLength&&this.doubleArrayLength(),i){case"v":n=this.v;break;case"i":n=this.i;break;case"o":n=this.o;break;default:n=[];break}(!n[s]||n[s]&&!a)&&(n[s]=Ve.newElement()),n[s][0]=t,n[s][1]=e},re.prototype.setTripleAt=function(t,e,i,s,a,n,l,m){this.setXYAt(t,e,"v",l,m),this.setXYAt(i,s,"o",l,m),this.setXYAt(a,n,"i",l,m)},re.prototype.reverse=function(){var t=new re;t.setPathData(this.c,this._length);var e=this.v,i=this.o,s=this.i,a=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],s[0][0],s[0][1],i[0][0],i[0][1],0,!1),a=1);var n=this._length-1,l=this._length,m;for(m=a;m<l;m+=1)t.setTripleAt(e[n][0],e[n][1],s[n][0],s[n][1],i[n][0],i[n][1],m,!1),n-=1;return t},re.prototype.length=function(){return this._length};var St=(function(){function t(){return new re}function e(a){var n=a._length,l;for(l=0;l<n;l+=1)Ve.release(a.v[l]),Ve.release(a.i[l]),Ve.release(a.o[l]),a.v[l]=null,a.i[l]=null,a.o[l]=null;a._length=0,a.c=!1}function i(a){var n=s.newElement(),l,m=a._length===void 0?a.v.length:a._length;for(n.setLength(m),n.c=a.c,l=0;l<m;l+=1)n.setTripleAt(a.v[l][0],a.v[l][1],a.o[l][0],a.o[l][1],a.i[l][0],a.i[l][1],l);return n}var s=Ni(4,t,e);return s.clone=i,s})();function gs(){this._length=0,this._maxLength=4,this.shapes=at(this._maxLength)}gs.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(at(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},gs.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)St.release(this.shapes[t]);this._length=0};var Je=(function(){var t={newShapeCollection:a,release:n},e=0,i=4,s=at(i);function a(){var l;return e?(e-=1,l=s[e]):l=new gs,l}function n(l){var m,f=l._length;for(m=0;m<f;m+=1)St.release(l.shapes[m]);l._length=0,e===i&&(s=ir.double(s),i*=2),s[e]=l,e+=1}return t})(),Wi=(function(){var t=-999999;function e(x,_,d){var g=d.lastIndex,w,$,I,O,N,Q,K,W,it,G=this.keyframes;if(x<G[0].t-this.offsetTime)w=G[0].s[0],I=!0,g=0;else if(x>=G[G.length-1].t-this.offsetTime)w=G[G.length-1].s?G[G.length-1].s[0]:G[G.length-2].e[0],I=!0;else{for(var V=g,y=G.length-1,P=!0,h,p,z;P&&(h=G[V],p=G[V+1],!(p.t-this.offsetTime>x));)V<y-1?V+=1:P=!1;if(z=this.keyframesMetadata[V]||{},I=h.h===1,g=V,!I){if(x>=p.t-this.offsetTime)W=1;else if(x<h.t-this.offsetTime)W=0;else{var M;z.__fnct?M=z.__fnct:(M=di.getBezierEasing(h.o.x,h.o.y,h.i.x,h.i.y).get,z.__fnct=M),W=M((x-(h.t-this.offsetTime))/(p.t-this.offsetTime-(h.t-this.offsetTime)))}$=p.s?p.s[0]:h.e[0]}w=h.s[0]}for(Q=_._length,K=w.i[0].length,d.lastIndex=g,O=0;O<Q;O+=1)for(N=0;N<K;N+=1)it=I?w.i[O][N]:w.i[O][N]+($.i[O][N]-w.i[O][N])*W,_.i[O][N]=it,it=I?w.o[O][N]:w.o[O][N]+($.o[O][N]-w.o[O][N])*W,_.o[O][N]=it,it=I?w.v[O][N]:w.v[O][N]+($.v[O][N]-w.v[O][N])*W,_.v[O][N]=it}function i(){var x=this.comp.renderedFrame-this.offsetTime,_=this.keyframes[0].t-this.offsetTime,d=this.keyframes[this.keyframes.length-1].t-this.offsetTime,g=this._caching.lastFrame;return g!==t&&(g<_&&x<_||g>d&&x>d)||(this._caching.lastIndex=g<x?this._caching.lastIndex:0,this.interpolateShape(x,this.pv,this._caching)),this._caching.lastFrame=x,this.pv}function s(){this.paths=this.localShapeCollection}function a(x,_){if(x._length!==_._length||x.c!==_.c)return!1;var d,g=x._length;for(d=0;d<g;d+=1)if(x.v[d][0]!==_.v[d][0]||x.v[d][1]!==_.v[d][1]||x.o[d][0]!==_.o[d][0]||x.o[d][1]!==_.o[d][1]||x.i[d][0]!==_.i[d][0]||x.i[d][1]!==_.i[d][1])return!1;return!0}function n(x){a(this.v,x)||(this.v=St.clone(x),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function l(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var x;this.kf?x=this.pv:this.data.ks?x=this.data.ks.k:x=this.data.pt.k;var _,d=this.effectsSequence.length;for(_=0;_<d;_+=1)x=this.effectsSequence[_](x);this.setVValue(x),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function m(x,_,d){this.propType="shape",this.comp=x.comp,this.container=x,this.elem=x,this.data=_,this.k=!1,this.kf=!1,this._mdf=!1;var g=d===3?_.pt.k:_.ks.k;this.v=St.clone(g),this.pv=St.clone(this.v),this.localShapeCollection=Je.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=s,this.effectsSequence=[]}function f(x){this.effectsSequence.push(x),this.container.addDynamicProperty(this)}m.prototype.interpolateShape=e,m.prototype.getValue=l,m.prototype.setVValue=n,m.prototype.addEffect=f;function b(x,_,d){this.propType="shape",this.comp=x.comp,this.elem=x,this.container=x,this.offsetTime=x.data.st,this.keyframes=d===3?_.pt.k:_.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var g=this.keyframes[0].s[0].i.length;this.v=St.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,g),this.pv=St.clone(this.v),this.localShapeCollection=Je.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=s,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[i.bind(this)]}b.prototype.getValue=l,b.prototype.interpolateShape=e,b.prototype.setVValue=n,b.prototype.addEffect=f;var k=(function(){var x=X;function _(d,g){this.v=St.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=Je.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=g.d,this.elem=d,this.comp=d.comp,this.frameId=-1,this.initDynamicPropertyContainer(d),this.p=U.getProp(d,g.p,1,0,this),this.s=U.getProp(d,g.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return _.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var g=this.p.v[0],w=this.p.v[1],$=this.s.v[0]/2,I=this.s.v[1]/2,O=this.d!==3,N=this.v;N.v[0][0]=g,N.v[0][1]=w-I,N.v[1][0]=O?g+$:g-$,N.v[1][1]=w,N.v[2][0]=g,N.v[2][1]=w+I,N.v[3][0]=O?g-$:g+$,N.v[3][1]=w,N.i[0][0]=O?g-$*x:g+$*x,N.i[0][1]=w-I,N.i[1][0]=O?g+$:g-$,N.i[1][1]=w-I*x,N.i[2][0]=O?g+$*x:g-$*x,N.i[2][1]=w+I,N.i[3][0]=O?g-$:g+$,N.i[3][1]=w+I*x,N.o[0][0]=O?g+$*x:g-$*x,N.o[0][1]=w-I,N.o[1][0]=O?g+$:g-$,N.o[1][1]=w+I*x,N.o[2][0]=O?g-$*x:g+$*x,N.o[2][1]=w+I,N.o[3][0]=O?g-$:g+$,N.o[3][1]=w-I*x}},q([wt],_),_})(),L=(function(){function x(_,d){this.v=St.newElement(),this.v.setPathData(!0,0),this.elem=_,this.comp=_.comp,this.data=d,this.frameId=-1,this.d=d.d,this.initDynamicPropertyContainer(_),d.sy===1?(this.ir=U.getProp(_,d.ir,0,0,this),this.is=U.getProp(_,d.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=U.getProp(_,d.pt,0,0,this),this.p=U.getProp(_,d.p,1,0,this),this.r=U.getProp(_,d.r,0,dt,this),this.or=U.getProp(_,d.or,0,0,this),this.os=U.getProp(_,d.os,0,.01,this),this.localShapeCollection=Je.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return x.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var d=Math.floor(this.pt.v)*2,g=Math.PI*2/d,w=!0,$=this.or.v,I=this.ir.v,O=this.os.v,N=this.is.v,Q=2*Math.PI*$/(d*2),K=2*Math.PI*I/(d*2),W,it,G,V,y=-Math.PI/2;y+=this.r.v;var P=this.data.d===3?-1:1;for(this.v._length=0,W=0;W<d;W+=1){it=w?$:I,G=w?O:N,V=w?Q:K;var h=it*Math.cos(y),p=it*Math.sin(y),z=h===0&&p===0?0:p/Math.sqrt(h*h+p*p),M=h===0&&p===0?0:-h/Math.sqrt(h*h+p*p);h+=+this.p.v[0],p+=+this.p.v[1],this.v.setTripleAt(h,p,h-z*V*G*P,p-M*V*G*P,h+z*V*G*P,p+M*V*G*P,W,!0),w=!w,y+=g*P}},convertPolygonToPath:function(){var d=Math.floor(this.pt.v),g=Math.PI*2/d,w=this.or.v,$=this.os.v,I=2*Math.PI*w/(d*4),O,N=-Math.PI*.5,Q=this.data.d===3?-1:1;for(N+=this.r.v,this.v._length=0,O=0;O<d;O+=1){var K=w*Math.cos(N),W=w*Math.sin(N),it=K===0&&W===0?0:W/Math.sqrt(K*K+W*W),G=K===0&&W===0?0:-K/Math.sqrt(K*K+W*W);K+=+this.p.v[0],W+=+this.p.v[1],this.v.setTripleAt(K,W,K-it*I*$*Q,W-G*I*$*Q,K+it*I*$*Q,W+G*I*$*Q,O,!0),N+=g*Q}this.paths.length=0,this.paths[0]=this.v}},q([wt],x),x})(),u=(function(){function x(_,d){this.v=St.newElement(),this.v.c=!0,this.localShapeCollection=Je.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=_,this.comp=_.comp,this.frameId=-1,this.d=d.d,this.initDynamicPropertyContainer(_),this.p=U.getProp(_,d.p,1,0,this),this.s=U.getProp(_,d.s,1,0,this),this.r=U.getProp(_,d.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return x.prototype={convertRectToPath:function(){var d=this.p.v[0],g=this.p.v[1],w=this.s.v[0]/2,$=this.s.v[1]/2,I=Fe(w,$,this.r.v),O=I*(1-X);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(d+w,g-$+I,d+w,g-$+I,d+w,g-$+O,0,!0),this.v.setTripleAt(d+w,g+$-I,d+w,g+$-O,d+w,g+$-I,1,!0),I!==0?(this.v.setTripleAt(d+w-I,g+$,d+w-I,g+$,d+w-O,g+$,2,!0),this.v.setTripleAt(d-w+I,g+$,d-w+O,g+$,d-w+I,g+$,3,!0),this.v.setTripleAt(d-w,g+$-I,d-w,g+$-I,d-w,g+$-O,4,!0),this.v.setTripleAt(d-w,g-$+I,d-w,g-$+O,d-w,g-$+I,5,!0),this.v.setTripleAt(d-w+I,g-$,d-w+I,g-$,d-w+O,g-$,6,!0),this.v.setTripleAt(d+w-I,g-$,d+w-O,g-$,d+w-I,g-$,7,!0)):(this.v.setTripleAt(d-w,g+$,d-w+O,g+$,d-w,g+$,2),this.v.setTripleAt(d-w,g-$,d-w,g-$+O,d-w,g-$,3))):(this.v.setTripleAt(d+w,g-$+I,d+w,g-$+O,d+w,g-$+I,0,!0),I!==0?(this.v.setTripleAt(d+w-I,g-$,d+w-I,g-$,d+w-O,g-$,1,!0),this.v.setTripleAt(d-w+I,g-$,d-w+O,g-$,d-w+I,g-$,2,!0),this.v.setTripleAt(d-w,g-$+I,d-w,g-$+I,d-w,g-$+O,3,!0),this.v.setTripleAt(d-w,g+$-I,d-w,g+$-O,d-w,g+$-I,4,!0),this.v.setTripleAt(d-w+I,g+$,d-w+I,g+$,d-w+O,g+$,5,!0),this.v.setTripleAt(d+w-I,g+$,d+w-O,g+$,d+w-I,g+$,6,!0),this.v.setTripleAt(d+w,g+$-I,d+w,g+$-I,d+w,g+$-O,7,!0)):(this.v.setTripleAt(d-w,g-$,d-w+O,g-$,d-w,g-$,1,!0),this.v.setTripleAt(d-w,g+$,d-w,g+$-O,d-w,g+$,2,!0),this.v.setTripleAt(d+w,g+$,d+w-O,g+$,d+w,g+$,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:s},q([wt],x),x})();function S(x,_,d){var g;if(d===3||d===4){var w=d===3?_.pt:_.ks,$=w.k;$.length?g=new b(x,_,d):g=new m(x,_,d)}else d===5?g=new u(x,_):d===6?g=new k(x,_):d===7&&(g=new L(x,_));return g.k&&x.addDynamicProperty(g),g}function C(){return m}function E(){return b}var F={};return F.getShapeProp=S,F.getConstructorFunction=C,F.getKeyframedConstructorFunction=E,F})();var At=(function(){var t=Math.cos,e=Math.sin,i=Math.tan,s=Math.round;function a(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function n(h){if(h===0)return this;var p=t(h),z=e(h);return this._t(p,-z,0,0,z,p,0,0,0,0,1,0,0,0,0,1)}function l(h){if(h===0)return this;var p=t(h),z=e(h);return this._t(1,0,0,0,0,p,-z,0,0,z,p,0,0,0,0,1)}function m(h){if(h===0)return this;var p=t(h),z=e(h);return this._t(p,0,z,0,0,1,0,0,-z,0,p,0,0,0,0,1)}function f(h){if(h===0)return this;var p=t(h),z=e(h);return this._t(p,-z,0,0,z,p,0,0,0,0,1,0,0,0,0,1)}function b(h,p){return this._t(1,p,h,1,0,0)}function k(h,p){return this.shear(i(h),i(p))}function L(h,p){var z=t(p),M=e(p);return this._t(z,M,0,0,-M,z,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,i(h),1,0,0,0,0,1,0,0,0,0,1)._t(z,-M,0,0,M,z,0,0,0,0,1,0,0,0,0,1)}function u(h,p,z){return!z&&z!==0&&(z=1),h===1&&p===1&&z===1?this:this._t(h,0,0,0,0,p,0,0,0,0,z,0,0,0,0,1)}function S(h,p,z,M,H,J,tt,ot,ht,vt,It,te,Lt,xt,Nt,ct){return this.props[0]=h,this.props[1]=p,this.props[2]=z,this.props[3]=M,this.props[4]=H,this.props[5]=J,this.props[6]=tt,this.props[7]=ot,this.props[8]=ht,this.props[9]=vt,this.props[10]=It,this.props[11]=te,this.props[12]=Lt,this.props[13]=xt,this.props[14]=Nt,this.props[15]=ct,this}function C(h,p,z){return z=z||0,h!==0||p!==0||z!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,h,p,z,1):this}function E(h,p,z,M,H,J,tt,ot,ht,vt,It,te,Lt,xt,Nt,ct){var Y=this.props;if(h===1&&p===0&&z===0&&M===0&&H===0&&J===1&&tt===0&&ot===0&&ht===0&&vt===0&&It===1&&te===0)return Y[12]=Y[12]*h+Y[15]*Lt,Y[13]=Y[13]*J+Y[15]*xt,Y[14]=Y[14]*It+Y[15]*Nt,Y[15]*=ct,this._identityCalculated=!1,this;var oe=Y[0],xe=Y[1],he=Y[2],ee=Y[3],le=Y[4],ce=Y[5],zt=Y[6],ke=Y[7],Se=Y[8],Yt=Y[9],Ae=Y[10],Kt=Y[11],Be=Y[12],Zi=Y[13],Ji=Y[14],Qi=Y[15];return Y[0]=oe*h+xe*H+he*ht+ee*Lt,Y[1]=oe*p+xe*J+he*vt+ee*xt,Y[2]=oe*z+xe*tt+he*It+ee*Nt,Y[3]=oe*M+xe*ot+he*te+ee*ct,Y[4]=le*h+ce*H+zt*ht+ke*Lt,Y[5]=le*p+ce*J+zt*vt+ke*xt,Y[6]=le*z+ce*tt+zt*It+ke*Nt,Y[7]=le*M+ce*ot+zt*te+ke*ct,Y[8]=Se*h+Yt*H+Ae*ht+Kt*Lt,Y[9]=Se*p+Yt*J+Ae*vt+Kt*xt,Y[10]=Se*z+Yt*tt+Ae*It+Kt*Nt,Y[11]=Se*M+Yt*ot+Ae*te+Kt*ct,Y[12]=Be*h+Zi*H+Ji*ht+Qi*Lt,Y[13]=Be*p+Zi*J+Ji*vt+Qi*xt,Y[14]=Be*z+Zi*tt+Ji*It+Qi*Nt,Y[15]=Be*M+Zi*ot+Ji*te+Qi*ct,this._identityCalculated=!1,this}function F(h){var p=h.props;return this.transform(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14],p[15])}function x(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function _(h){for(var p=0;p<16;){if(h.props[p]!==this.props[p])return!1;p+=1}return!0}function d(h){var p;for(p=0;p<16;p+=1)h.props[p]=this.props[p];return h}function g(h){var p;for(p=0;p<16;p+=1)this.props[p]=h[p]}function w(h,p,z){return{x:h*this.props[0]+p*this.props[4]+z*this.props[8]+this.props[12],y:h*this.props[1]+p*this.props[5]+z*this.props[9]+this.props[13],z:h*this.props[2]+p*this.props[6]+z*this.props[10]+this.props[14]}}function $(h,p,z){return h*this.props[0]+p*this.props[4]+z*this.props[8]+this.props[12]}function I(h,p,z){return h*this.props[1]+p*this.props[5]+z*this.props[9]+this.props[13]}function O(h,p,z){return h*this.props[2]+p*this.props[6]+z*this.props[10]+this.props[14]}function N(){var h=this.props[0]*this.props[5]-this.props[1]*this.props[4],p=this.props[5]/h,z=-this.props[1]/h,M=-this.props[4]/h,H=this.props[0]/h,J=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/h,tt=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/h,ot=new At;return ot.props[0]=p,ot.props[1]=z,ot.props[4]=M,ot.props[5]=H,ot.props[12]=J,ot.props[13]=tt,ot}function Q(h){var p=this.getInverseMatrix();return p.applyToPointArray(h[0],h[1],h[2]||0)}function K(h){var p,z=h.length,M=[];for(p=0;p<z;p+=1)M[p]=Q(h[p]);return M}function W(h,p,z){var M=st("float32",6);if(this.isIdentity())M[0]=h[0],M[1]=h[1],M[2]=p[0],M[3]=p[1],M[4]=z[0],M[5]=z[1];else{var H=this.props[0],J=this.props[1],tt=this.props[4],ot=this.props[5],ht=this.props[12],vt=this.props[13];M[0]=h[0]*H+h[1]*tt+ht,M[1]=h[0]*J+h[1]*ot+vt,M[2]=p[0]*H+p[1]*tt+ht,M[3]=p[0]*J+p[1]*ot+vt,M[4]=z[0]*H+z[1]*tt+ht,M[5]=z[0]*J+z[1]*ot+vt}return M}function it(h,p,z){var M;return this.isIdentity()?M=[h,p,z]:M=[h*this.props[0]+p*this.props[4]+z*this.props[8]+this.props[12],h*this.props[1]+p*this.props[5]+z*this.props[9]+this.props[13],h*this.props[2]+p*this.props[6]+z*this.props[10]+this.props[14]],M}function G(h,p){if(this.isIdentity())return h+","+p;var z=this.props;return Math.round((h*z[0]+p*z[4]+z[12])*100)/100+","+Math.round((h*z[1]+p*z[5]+z[13])*100)/100}function V(){for(var h=0,p=this.props,z="matrix3d(",M=1e4;h<16;)z+=s(p[h]*M)/M,z+=h===15?")":",",h+=1;return z}function y(h){var p=1e4;return h<1e-6&&h>0||h>-1e-6&&h<0?s(h*p)/p:h}function P(){var h=this.props,p=y(h[0]),z=y(h[1]),M=y(h[4]),H=y(h[5]),J=y(h[12]),tt=y(h[13]);return"matrix("+p+","+z+","+M+","+H+","+J+","+tt+")"}return function(){this.reset=a,this.rotate=n,this.rotateX=l,this.rotateY=m,this.rotateZ=f,this.skew=k,this.skewFromAxis=L,this.shear=b,this.scale=u,this.setTransform=S,this.translate=C,this.transform=E,this.multiply=F,this.applyToPoint=w,this.applyToX=$,this.applyToY=I,this.applyToZ=O,this.applyToPointArray=it,this.applyToTriplePoints=W,this.applyToPointStringified=G,this.toCSS=V,this.to2dCSS=P,this.clone=d,this.cloneFromProps=g,this.equals=_,this.inversePoints=K,this.inversePoint=Q,this.getInverseMatrix=N,this._t=this.transform,this.isIdentity=x,this._identity=!0,this._identityCalculated=!1,this.props=st("float32",16),this.reset()}})();function vs(t){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vs(t)}var lt={},Ui="__[STANDALONE]__",lr="__[ANIMATIONDATA]__",cr="";function ta(t){R(t)}function fr(){Ui===!0?gt.searchAnimations(lr,Ui,cr):gt.searchAnimations()}function ea(t){Rn(t)}function ia(t){Dn(t)}function sa(t){return Ui===!0&&(t.animationData=JSON.parse(lr)),gt.loadAnimation(t)}function ra(t){if(typeof t=="string")switch(t){case"high":Ri(200);break;default:case"medium":Ri(50);break;case"low":Ri(10);break}else!isNaN(t)&&t>1&&Ri(t);ci()>=50?bt(!1):bt(!0)}function na(){return typeof navigator<"u"}function aa(t,e){t==="expressions"&&Nn(e)}function oa(t){switch(t){case"propertyFactory":return U;case"shapePropertyFactory":return Wi;case"matrix":return At;default:return null}}lt.play=gt.play,lt.pause=gt.pause,lt.setLocationHref=ta,lt.togglePause=gt.togglePause,lt.setSpeed=gt.setSpeed,lt.setDirection=gt.setDirection,lt.stop=gt.stop,lt.searchAnimations=fr,lt.registerAnimation=gt.registerAnimation,lt.loadAnimation=sa,lt.setSubframeRendering=ea,lt.resize=gt.resize,lt.goToAndStop=gt.goToAndStop,lt.destroy=gt.destroy,lt.setQuality=ra,lt.inBrowser=na,lt.installPlugin=aa,lt.freeze=gt.freeze,lt.unfreeze=gt.unfreeze,lt.setVolume=gt.setVolume,lt.mute=gt.mute,lt.unmute=gt.unmute,lt.getRegisteredAnimations=gt.getRegisteredAnimations,lt.useWebWorker=v,lt.setIDPrefix=ia,lt.__getFactory=oa,lt.version="5.13.0";function ha(){document.readyState==="complete"&&(clearInterval(fa),fr())}function la(t){for(var e=pr.split("&"),i=0;i<e.length;i+=1){var s=e[i].split("=");if(decodeURIComponent(s[0])==t)return decodeURIComponent(s[1])}return null}var pr="";if(Ui){var dr=document.getElementsByTagName("script"),ca=dr.length-1,ur=dr[ca]||{src:""};pr=ur.src?ur.src.replace(/^[^\?]+\??/,""):"",cr=la("renderer")}var fa=setInterval(ha,100);try{!((typeof Ii>"u"?"undefined":vs(Ii))==="object"&&typeof hs<"u")&&!(typeof define=="function"&&define.amd)&&(window.bodymovin=lt)}catch{}var ge=(function(){var t={},e={};t.registerModifier=i,t.getModifier=s;function i(a,n){e[a]||(e[a]=n)}function s(a,n,l){return new e[a](n,l)}return t})();function Wt(){}Wt.prototype.initModifierProperties=function(){},Wt.prototype.addShapeToModifier=function(){},Wt.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:Je.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},Wt.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=c,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},Wt.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},q([wt],Wt);function Gt(){}q([Wt],Gt),Gt.prototype.initModifierProperties=function(t,e){this.s=U.getProp(t,e.s,0,.01,this),this.e=U.getProp(t,e.e,0,.01,this),this.o=U.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},Gt.prototype.addShapeToModifier=function(t){t.pathsData=[]},Gt.prototype.calculateShapeEdges=function(t,e,i,s,a){var n=[];e<=1?n.push({s:t,e}):t>=1?n.push({s:t-1,e:e-1}):(n.push({s:t,e:1}),n.push({s:0,e:e-1}));var l=[],m,f=n.length,b;for(m=0;m<f;m+=1)if(b=n[m],!(b.e*a<s||b.s*a>s+i)){var k,L;b.s*a<=s?k=0:k=(b.s*a-s)/i,b.e*a>=s+i?L=1:L=(b.e*a-s)/i,l.push([k,L])}return l.length||l.push([0,0]),l},Gt.prototype.releasePathsData=function(t){var e,i=t.length;for(e=0;e<i;e+=1)rr.release(t[e]);return t.length=0,t},Gt.prototype.processShapes=function(t){var e,i;if(this._mdf||t){var s=this.o.v%360/360;if(s<0&&(s+=1),this.s.v>1?e=1+s:this.s.v<0?e=0+s:e=this.s.v+s,this.e.v>1?i=1+s:this.e.v<0?i=0+s:i=this.e.v+s,e>i){var a=e;e=i,i=a}e=Math.round(e*1e4)*1e-4,i=Math.round(i*1e4)*1e-4,this.sValue=e,this.eValue=i}else e=this.sValue,i=this.eValue;var n,l,m=this.shapes.length,f,b,k,L,u,S=0;if(i===e)for(l=0;l<m;l+=1)this.shapes[l].localShapeCollection.releaseShapes(),this.shapes[l].shape._mdf=!0,this.shapes[l].shape.paths=this.shapes[l].localShapeCollection,this._mdf&&(this.shapes[l].pathsData.length=0);else if(i===1&&e===0||i===0&&e===1){if(this._mdf)for(l=0;l<m;l+=1)this.shapes[l].pathsData.length=0,this.shapes[l].shape._mdf=!0}else{var C=[],E,F;for(l=0;l<m;l+=1)if(E=this.shapes[l],!E.shape._mdf&&!this._mdf&&!t&&this.m!==2)E.shape.paths=E.localShapeCollection;else{if(n=E.shape.paths,b=n._length,u=0,!E.shape._mdf&&E.pathsData.length)u=E.totalShapeLength;else{for(k=this.releasePathsData(E.pathsData),f=0;f<b;f+=1)L=Jt.getSegmentsLength(n.shapes[f]),k.push(L),u+=L.totalLength;E.totalShapeLength=u,E.pathsData=k}S+=u,E.shape._mdf=!0}var x=e,_=i,d=0,g;for(l=m-1;l>=0;l-=1)if(E=this.shapes[l],E.shape._mdf){for(F=E.localShapeCollection,F.releaseShapes(),this.m===2&&m>1?(g=this.calculateShapeEdges(e,i,E.totalShapeLength,d,S),d+=E.totalShapeLength):g=[[x,_]],b=g.length,f=0;f<b;f+=1){x=g[f][0],_=g[f][1],C.length=0,_<=1?C.push({s:E.totalShapeLength*x,e:E.totalShapeLength*_}):x>=1?C.push({s:E.totalShapeLength*(x-1),e:E.totalShapeLength*(_-1)}):(C.push({s:E.totalShapeLength*x,e:E.totalShapeLength}),C.push({s:0,e:E.totalShapeLength*(_-1)}));var w=this.addShapes(E,C[0]);if(C[0].s!==C[0].e){if(C.length>1){var $=E.shape.paths.shapes[E.shape.paths._length-1];if($.c){var I=w.pop();this.addPaths(w,F),w=this.addShapes(E,C[1],I)}else this.addPaths(w,F),w=this.addShapes(E,C[1])}this.addPaths(w,F)}}E.shape.paths=F}}},Gt.prototype.addPaths=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)e.addShape(t[i])},Gt.prototype.addSegment=function(t,e,i,s,a,n,l){a.setXYAt(e[0],e[1],"o",n),a.setXYAt(i[0],i[1],"i",n+1),l&&a.setXYAt(t[0],t[1],"v",n),a.setXYAt(s[0],s[1],"v",n+1)},Gt.prototype.addSegmentFromArray=function(t,e,i,s){e.setXYAt(t[1],t[5],"o",i),e.setXYAt(t[2],t[6],"i",i+1),s&&e.setXYAt(t[0],t[4],"v",i),e.setXYAt(t[3],t[7],"v",i+1)},Gt.prototype.addShapes=function(t,e,i){var s=t.pathsData,a=t.shape.paths.shapes,n,l=t.shape.paths._length,m,f,b=0,k,L,u,S,C=[],E,F=!0;for(i?(L=i._length,E=i._length):(i=St.newElement(),L=0,E=0),C.push(i),n=0;n<l;n+=1){for(u=s[n].lengths,i.c=a[n].c,f=a[n].c?u.length:u.length+1,m=1;m<f;m+=1)if(k=u[m-1],b+k.addedLength<e.s)b+=k.addedLength,i.c=!1;else if(b>e.e){i.c=!1;break}else e.s<=b&&e.e>=b+k.addedLength?(this.addSegment(a[n].v[m-1],a[n].o[m-1],a[n].i[m],a[n].v[m],i,L,F),F=!1):(S=Jt.getNewSegment(a[n].v[m-1],a[n].v[m],a[n].o[m-1],a[n].i[m],(e.s-b)/k.addedLength,(e.e-b)/k.addedLength,u[m-1]),this.addSegmentFromArray(S,i,L,F),F=!1,i.c=!1),b+=k.addedLength,L+=1;if(a[n].c&&u.length){if(k=u[m-1],b<=e.e){var x=u[m-1].addedLength;e.s<=b&&e.e>=b+x?(this.addSegment(a[n].v[m-1],a[n].o[m-1],a[n].i[0],a[n].v[0],i,L,F),F=!1):(S=Jt.getNewSegment(a[n].v[m-1],a[n].v[0],a[n].o[m-1],a[n].i[0],(e.s-b)/x,(e.e-b)/x,u[m-1]),this.addSegmentFromArray(S,i,L,F),F=!1,i.c=!1)}else i.c=!1;b+=k.addedLength,L+=1}if(i._length&&(i.setXYAt(i.v[E][0],i.v[E][1],"i",E),i.setXYAt(i.v[i._length-1][0],i.v[i._length-1][1],"o",i._length-1)),b>e.e)break;n<l-1&&(i=St.newElement(),F=!0,C.push(i),L=0)}return C};function ui(){}q([Wt],ui),ui.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=U.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},ui.prototype.processPath=function(t,e){var i=e/100,s=[0,0],a=t._length,n=0;for(n=0;n<a;n+=1)s[0]+=t.v[n][0],s[1]+=t.v[n][1];s[0]/=a,s[1]/=a;var l=St.newElement();l.c=t.c;var m,f,b,k,L,u;for(n=0;n<a;n+=1)m=t.v[n][0]+(s[0]-t.v[n][0])*i,f=t.v[n][1]+(s[1]-t.v[n][1])*i,b=t.o[n][0]+(s[0]-t.o[n][0])*-i,k=t.o[n][1]+(s[1]-t.o[n][1])*-i,L=t.i[n][0]+(s[0]-t.i[n][0])*-i,u=t.i[n][1]+(s[1]-t.i[n][1])*-i,l.setTripleAt(m,f,b,k,L,u,n);return l},ui.prototype.processShapes=function(t){var e,i,s=this.shapes.length,a,n,l=this.amount.v;if(l!==0){var m,f;for(i=0;i<s;i+=1){if(m=this.shapes[i],f=m.localShapeCollection,!(!m.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),m.shape._mdf=!0,e=m.shape.paths.shapes,n=m.shape.paths._length,a=0;a<n;a+=1)f.addShape(this.processPath(e[a],l));m.shape.paths=m.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var ys=(function(){var t=[0,0];function e(f){var b=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||b,this.a&&f.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&f.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&f.skewFromAxis(-this.sk.v,this.sa.v),this.r?f.rotate(-this.r.v):f.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?f.translate(this.px.v,this.py.v,-this.pz.v):f.translate(this.px.v,this.py.v,0):f.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function i(f){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||f){var b;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var k,L;if(b=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(k=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/b,0),L=this.p.getValueAtTime(this.p.keyframes[0].t/b,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(k=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/b,0),L=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/b,0)):(k=this.p.pv,L=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/b,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){k=[],L=[];var u=this.px,S=this.py;u._caching.lastFrame+u.offsetTime<=u.keyframes[0].t?(k[0]=u.getValueAtTime((u.keyframes[0].t+.01)/b,0),k[1]=S.getValueAtTime((S.keyframes[0].t+.01)/b,0),L[0]=u.getValueAtTime(u.keyframes[0].t/b,0),L[1]=S.getValueAtTime(S.keyframes[0].t/b,0)):u._caching.lastFrame+u.offsetTime>=u.keyframes[u.keyframes.length-1].t?(k[0]=u.getValueAtTime(u.keyframes[u.keyframes.length-1].t/b,0),k[1]=S.getValueAtTime(S.keyframes[S.keyframes.length-1].t/b,0),L[0]=u.getValueAtTime((u.keyframes[u.keyframes.length-1].t-.01)/b,0),L[1]=S.getValueAtTime((S.keyframes[S.keyframes.length-1].t-.01)/b,0)):(k=[u.pv,S.pv],L[0]=u.getValueAtTime((u._caching.lastFrame+u.offsetTime-.01)/b,u.offsetTime),L[1]=S.getValueAtTime((S._caching.lastFrame+S.offsetTime-.01)/b,S.offsetTime))}else L=t,k=L;this.v.rotate(-Math.atan2(k[1]-L[1],k[0]-L[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function s(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function a(){}function n(f){this._addDynamicProperty(f),this.elem.addDynamicProperty(f),this._isDirty=!0}function l(f,b,k){if(this.elem=f,this.frameId=-1,this.propType="transform",this.data=b,this.v=new At,this.pre=new At,this.appliedTransformations=0,this.initDynamicPropertyContainer(k||f),b.p&&b.p.s?(this.px=U.getProp(f,b.p.x,0,0,this),this.py=U.getProp(f,b.p.y,0,0,this),b.p.z&&(this.pz=U.getProp(f,b.p.z,0,0,this))):this.p=U.getProp(f,b.p||{k:[0,0,0]},1,0,this),b.rx){if(this.rx=U.getProp(f,b.rx,0,dt,this),this.ry=U.getProp(f,b.ry,0,dt,this),this.rz=U.getProp(f,b.rz,0,dt,this),b.or.k[0].ti){var L,u=b.or.k.length;for(L=0;L<u;L+=1)b.or.k[L].to=null,b.or.k[L].ti=null}this.or=U.getProp(f,b.or,1,dt,this),this.or.sh=!0}else this.r=U.getProp(f,b.r||{k:0},0,dt,this);b.sk&&(this.sk=U.getProp(f,b.sk,0,dt,this),this.sa=U.getProp(f,b.sa,0,dt,this)),this.a=U.getProp(f,b.a||{k:[0,0,0]},1,0,this),this.s=U.getProp(f,b.s||{k:[100,100,100]},1,.01,this),b.o?this.o=U.getProp(f,b.o,0,.01,f):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}l.prototype={applyToMatrix:e,getValue:i,precalculateMatrix:s,autoOrient:a},q([wt],l),l.prototype.addDynamicProperty=n,l.prototype._addDynamicProperty=wt.prototype.addDynamicProperty;function m(f,b,k){return new l(f,b,k)}return{getTransformProperty:m}})();function Qt(){}q([Wt],Qt),Qt.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=U.getProp(t,e.c,0,null,this),this.o=U.getProp(t,e.o,0,null,this),this.tr=ys.getTransformProperty(t,e.tr,this),this.so=U.getProp(t,e.tr.so,0,.01,this),this.eo=U.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new At,this.rMatrix=new At,this.sMatrix=new At,this.tMatrix=new At,this.matrix=new At},Qt.prototype.applyTransforms=function(t,e,i,s,a,n){var l=n?-1:1,m=s.s.v[0]+(1-s.s.v[0])*(1-a),f=s.s.v[1]+(1-s.s.v[1])*(1-a);t.translate(s.p.v[0]*l*a,s.p.v[1]*l*a,s.p.v[2]),e.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),e.rotate(-s.r.v*l*a),e.translate(s.a.v[0],s.a.v[1],s.a.v[2]),i.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),i.scale(n?1/m:m,n?1/f:f),i.translate(s.a.v[0],s.a.v[1],s.a.v[2])},Qt.prototype.init=function(t,e,i,s){for(this.elem=t,this.arr=e,this.pos=i,this.elemsData=s,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[i]);i>0;)i-=1,this._elements.unshift(e[i]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},Qt.prototype.resetElements=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},Qt.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},Qt.prototype.changeGroupRender=function(t,e){var i,s=t.length;for(i=0;i<s;i+=1)t[i]._render=e,t[i].ty==="gr"&&this.changeGroupRender(t[i].it,e)},Qt.prototype.processShapes=function(t){var e,i,s,a,n,l=!1;if(this._mdf||t){var m=Math.ceil(this.c.v);if(this._groups.length<m){for(;this._groups.length<m;){var f={it:this.cloneElements(this._elements),ty:"gr"};f.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,f),this._groups.splice(0,0,f),this._currentCopies+=1}this.elem.reloadShapes(),l=!0}n=0;var b;for(s=0;s<=this._groups.length-1;s+=1){if(b=n<m,this._groups[s]._render=b,this.changeGroupRender(this._groups[s].it,b),!b){var k=this.elemsData[s].it,L=k[k.length-1];L.transform.op.v!==0?(L.transform.op._mdf=!0,L.transform.op.v=0):L.transform.op._mdf=!1}n+=1}this._currentCopies=m;var u=this.o.v,S=u%1,C=u>0?Math.floor(u):Math.ceil(u),E=this.pMatrix.props,F=this.rMatrix.props,x=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var _=0;if(u>0){for(;_<C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),_+=1;S&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,S,!1),_+=S)}else if(u<0){for(;_>C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),_-=1;S&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-S,!0),_-=S)}s=this.data.m===1?0:this._currentCopies-1,a=this.data.m===1?1:-1,n=this._currentCopies;for(var d,g;n;){if(e=this.elemsData[s].it,i=e[e.length-1].transform.mProps.v.props,g=i.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(s/(this._currentCopies-1)),_!==0){for((s!==0&&a===1||s!==this._currentCopies-1&&a===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(F[0],F[1],F[2],F[3],F[4],F[5],F[6],F[7],F[8],F[9],F[10],F[11],F[12],F[13],F[14],F[15]),this.matrix.transform(x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9],x[10],x[11],x[12],x[13],x[14],x[15]),this.matrix.transform(E[0],E[1],E[2],E[3],E[4],E[5],E[6],E[7],E[8],E[9],E[10],E[11],E[12],E[13],E[14],E[15]),d=0;d<g;d+=1)i[d]=this.matrix.props[d];this.matrix.reset()}else for(this.matrix.reset(),d=0;d<g;d+=1)i[d]=this.matrix.props[d];_+=1,n-=1,s+=a}}else for(n=this._currentCopies,s=0,a=1;n;)e=this.elemsData[s].it,i=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,n-=1,s+=a;return l},Qt.prototype.addShape=function(){};function mi(){}q([Wt],mi),mi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=U.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},mi.prototype.processPath=function(t,e){var i=St.newElement();i.c=t.c;var s,a=t._length,n,l,m,f,b,k,L=0,u,S,C,E,F,x;for(s=0;s<a;s+=1)n=t.v[s],m=t.o[s],l=t.i[s],n[0]===m[0]&&n[1]===m[1]&&n[0]===l[0]&&n[1]===l[1]?(s===0||s===a-1)&&!t.c?(i.setTripleAt(n[0],n[1],m[0],m[1],l[0],l[1],L),L+=1):(s===0?f=t.v[a-1]:f=t.v[s-1],b=Math.sqrt(Math.pow(n[0]-f[0],2)+Math.pow(n[1]-f[1],2)),k=b?Math.min(b/2,e)/b:0,F=n[0]+(f[0]-n[0])*k,u=F,x=n[1]-(n[1]-f[1])*k,S=x,C=u-(u-n[0])*X,E=S-(S-n[1])*X,i.setTripleAt(u,S,C,E,F,x,L),L+=1,s===a-1?f=t.v[0]:f=t.v[s+1],b=Math.sqrt(Math.pow(n[0]-f[0],2)+Math.pow(n[1]-f[1],2)),k=b?Math.min(b/2,e)/b:0,C=n[0]+(f[0]-n[0])*k,u=C,E=n[1]+(f[1]-n[1])*k,S=E,F=u-(u-n[0])*X,x=S-(S-n[1])*X,i.setTripleAt(u,S,C,E,F,x,L),L+=1):(i.setTripleAt(t.v[s][0],t.v[s][1],t.o[s][0],t.o[s][1],t.i[s][0],t.i[s][1],L),L+=1);return i},mi.prototype.processShapes=function(t){var e,i,s=this.shapes.length,a,n,l=this.rd.v;if(l!==0){var m,f;for(i=0;i<s;i+=1){if(m=this.shapes[i],f=m.localShapeCollection,!(!m.shape._mdf&&!this._mdf&&!t))for(f.releaseShapes(),m.shape._mdf=!0,e=m.shape.paths.shapes,n=m.shape.paths._length,a=0;a<n;a+=1)f.addShape(this.processPath(e[a],l));m.shape.paths=m.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Hi(t,e){return Math.abs(t-e)*1e5<=Math.min(Math.abs(t),Math.abs(e))}function _s(t){return Math.abs(t)<=1e-5}function mr(t,e,i){return t*(1-i)+e*i}function ve(t,e,i){return[mr(t[0],e[0],i),mr(t[1],e[1],i)]}function pa(t,e,i){if(t===0)return[];var s=e*e-4*t*i;if(s<0)return[];var a=-e/(2*t);if(s===0)return[a];var n=Math.sqrt(s)/(2*t);return[a-n,a+n]}function gr(t,e,i,s){return[-t+3*e-3*i+s,3*t-6*e+3*i,-3*t+3*e,t]}function vr(t){return new ut(t,t,t,t,!1)}function ut(t,e,i,s,a){a&&ti(t,e)&&(e=ve(t,s,1/3)),a&&ti(i,s)&&(i=ve(t,s,2/3));var n=gr(t[0],e[0],i[0],s[0]),l=gr(t[1],e[1],i[1],s[1]);this.a=[n[0],l[0]],this.b=[n[1],l[1]],this.c=[n[2],l[2]],this.d=[n[3],l[3]],this.points=[t,e,i,s]}ut.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},ut.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},ut.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},ut.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},ut.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(_s(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,i=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(i<0)return[];var s=Math.sqrt(i);return _s(s)?s>0&&s<1?[e]:[]:[e-s,e+s].filter(function(a){return a>0&&a<1})},ut.prototype.split=function(t){if(t<=0)return[vr(this.points[0]),this];if(t>=1)return[this,vr(this.points[this.points.length-1])];var e=ve(this.points[0],this.points[1],t),i=ve(this.points[1],this.points[2],t),s=ve(this.points[2],this.points[3],t),a=ve(e,i,t),n=ve(i,s,t),l=ve(a,n,t);return[new ut(this.points[0],e,a,l,!0),new ut(l,n,s,this.points[3],!0)]};function yr(t,e){var i=t.points[0][e],s=t.points[t.points.length-1][e];if(i>s){var a=s;s=i,i=a}for(var n=pa(3*t.a[e],2*t.b[e],t.c[e]),l=0;l<n.length;l+=1)if(n[l]>0&&n[l]<1){var m=t.point(n[l])[e];m<i?i=m:m>s&&(s=m)}return{min:i,max:s}}ut.prototype.bounds=function(){return{x:yr(this,0),y:yr(this,1)}},ut.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}};function qi(t,e,i){var s=t.boundingBox();return{cx:s.cx,cy:s.cy,width:s.width,height:s.height,bez:t,t:(e+i)/2,t1:e,t2:i}}function _r(t){var e=t.bez.split(.5);return[qi(e[0],t.t1,t.t),qi(e[1],t.t,t.t2)]}function da(t,e){return Math.abs(t.cx-e.cx)*2<t.width+e.width&&Math.abs(t.cy-e.cy)*2<t.height+e.height}function gi(t,e,i,s,a,n){if(da(t,e)){if(i>=n||t.width<=s&&t.height<=s&&e.width<=s&&e.height<=s){a.push([t.t,e.t]);return}var l=_r(t),m=_r(e);gi(l[0],m[0],i+1,s,a,n),gi(l[0],m[1],i+1,s,a,n),gi(l[1],m[0],i+1,s,a,n),gi(l[1],m[1],i+1,s,a,n)}}ut.prototype.intersections=function(t,e,i){e===void 0&&(e=2),i===void 0&&(i=7);var s=[];return gi(qi(this,0,1),qi(t,0,1),0,e,s,i),s},ut.shapeSegment=function(t,e){var i=(e+1)%t.length();return new ut(t.v[e],t.o[e],t.i[i],t.v[i],!0)},ut.shapeSegmentInverted=function(t,e){var i=(e+1)%t.length();return new ut(t.v[i],t.i[i],t.o[e],t.v[e],!0)};function bs(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function Gi(t,e,i,s){var a=[t[0],t[1],1],n=[e[0],e[1],1],l=[i[0],i[1],1],m=[s[0],s[1],1],f=bs(bs(a,n),bs(l,m));return _s(f[2])?null:[f[0]/f[2],f[1]/f[2]]}function Qe(t,e,i){return[t[0]+Math.cos(e)*i,t[1]-Math.sin(e)*i]}function ws(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function ti(t,e){return Hi(t[0],e[0])&&Hi(t[1],e[1])}function vi(){}q([Wt],vi),vi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=U.getProp(t,e.s,0,null,this),this.frequency=U.getProp(t,e.r,0,null,this),this.pointsType=U.getProp(t,e.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function br(t,e,i,s,a,n,l){var m=i-Math.PI/2,f=i+Math.PI/2,b=e[0]+Math.cos(i)*s*a,k=e[1]-Math.sin(i)*s*a;t.setTripleAt(b,k,b+Math.cos(m)*n,k-Math.sin(m)*n,b+Math.cos(f)*l,k-Math.sin(f)*l,t.length())}function ua(t,e){var i=[e[0]-t[0],e[1]-t[1]],s=-Math.PI*.5,a=[Math.cos(s)*i[0]-Math.sin(s)*i[1],Math.sin(s)*i[0]+Math.cos(s)*i[1]];return a}function ma(t,e){var i=e===0?t.length()-1:e-1,s=(e+1)%t.length(),a=t.v[i],n=t.v[s],l=ua(a,n);return Math.atan2(0,1)-Math.atan2(l[1],l[0])}function wr(t,e,i,s,a,n,l){var m=ma(e,i),f=e.v[i%e._length],b=e.v[i===0?e._length-1:i-1],k=e.v[(i+1)%e._length],L=n===2?Math.sqrt(Math.pow(f[0]-b[0],2)+Math.pow(f[1]-b[1],2)):0,u=n===2?Math.sqrt(Math.pow(f[0]-k[0],2)+Math.pow(f[1]-k[1],2)):0;br(t,e.v[i%e._length],m,l,s,u/((a+1)*2),L/((a+1)*2),n)}function ga(t,e,i,s,a,n){for(var l=0;l<s;l+=1){var m=(l+1)/(s+1),f=a===2?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,b=e.normalAngle(m),k=e.point(m);br(t,k,b,n,i,f/((s+1)*2),f/((s+1)*2),a),n=-n}return n}vi.prototype.processPath=function(t,e,i,s){var a=t._length,n=St.newElement();if(n.c=t.c,t.c||(a-=1),a===0)return n;var l=-1,m=ut.shapeSegment(t,0);wr(n,t,0,e,i,s,l);for(var f=0;f<a;f+=1)l=ga(n,m,e,i,s,-l),f===a-1&&!t.c?m=null:m=ut.shapeSegment(t,(f+1)%a),wr(n,t,f+1,e,i,s,l);return n},vi.prototype.processShapes=function(t){var e,i,s=this.shapes.length,a,n,l=this.amplitude.v,m=Math.max(0,Math.round(this.frequency.v)),f=this.pointsType.v;if(l!==0){var b,k;for(i=0;i<s;i+=1){if(b=this.shapes[i],k=b.localShapeCollection,!(!b.shape._mdf&&!this._mdf&&!t))for(k.releaseShapes(),b.shape._mdf=!0,e=b.shape.paths.shapes,n=b.shape.paths._length,a=0;a<n;a+=1)k.addShape(this.processPath(e[a],l,m,f));b.shape.paths=b.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function xs(t,e,i){var s=Math.atan2(e[0]-t[0],e[1]-t[1]);return[Qe(t,s,i),Qe(e,s,i)]}function ei(t,e){var i,s,a,n,l,m,f;f=xs(t.points[0],t.points[1],e),i=f[0],s=f[1],f=xs(t.points[1],t.points[2],e),a=f[0],n=f[1],f=xs(t.points[2],t.points[3],e),l=f[0],m=f[1];var b=Gi(i,s,a,n);b===null&&(b=s);var k=Gi(l,m,a,n);return k===null&&(k=l),new ut(i,b,k,m)}function xr(t,e,i,s,a){var n=e.points[3],l=i.points[0];if(s===3||ti(n,l))return n;if(s===2){var m=-e.tangentAngle(1),f=-i.tangentAngle(0)+Math.PI,b=Gi(n,Qe(n,m+Math.PI/2,100),l,Qe(l,m+Math.PI/2,100)),k=b?ws(b,n):ws(n,l)/2,L=Qe(n,m,2*k*X);return t.setXYAt(L[0],L[1],"o",t.length()-1),L=Qe(l,f,2*k*X),t.setTripleAt(l[0],l[1],l[0],l[1],L[0],L[1],t.length()),l}var u=ti(n,e.points[2])?e.points[0]:e.points[2],S=ti(l,i.points[1])?i.points[3]:i.points[1],C=Gi(u,n,l,S);return C&&ws(C,n)<a?(t.setTripleAt(C[0],C[1],C[0],C[1],C[0],C[1],t.length()),C):n}function kr(t,e){var i=t.intersections(e);return i.length&&Hi(i[0][0],1)&&i.shift(),i.length?i[0]:null}function Sr(t,e){var i=t.slice(),s=e.slice(),a=kr(t[t.length-1],e[0]);return a&&(i[t.length-1]=t[t.length-1].split(a[0])[0],s[0]=e[0].split(a[1])[1]),t.length>1&&e.length>1&&(a=kr(t[0],e[e.length-1]),a)?[[t[0].split(a[0])[0]],[e[e.length-1].split(a[1])[1]]]:[i,s]}function va(t){for(var e,i=1;i<t.length;i+=1)e=Sr(t[i-1],t[i]),t[i-1]=e[0],t[i]=e[1];return t.length>1&&(e=Sr(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function Ar(t,e){var i=t.inflectionPoints(),s,a,n,l;if(i.length===0)return[ei(t,e)];if(i.length===1||Hi(i[1],1))return n=t.split(i[0]),s=n[0],a=n[1],[ei(s,e),ei(a,e)];n=t.split(i[0]),s=n[0];var m=(i[1]-i[0])/(1-i[0]);return n=n[1].split(m),l=n[0],a=n[1],[ei(s,e),ei(l,e),ei(a,e)]}function yi(){}q([Wt],yi),yi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=U.getProp(t,e.a,0,null,this),this.miterLimit=U.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=this.amount.effectsSequence.length!==0},yi.prototype.processPath=function(t,e,i,s){var a=St.newElement();a.c=t.c;var n=t.length();t.c||(n-=1);var l,m,f,b=[];for(l=0;l<n;l+=1)f=ut.shapeSegment(t,l),b.push(Ar(f,e));if(!t.c)for(l=n-1;l>=0;l-=1)f=ut.shapeSegmentInverted(t,l),b.push(Ar(f,e));b=va(b);var k=null,L=null;for(l=0;l<b.length;l+=1){var u=b[l];for(L&&(k=xr(a,L,u[0],i,s)),L=u[u.length-1],m=0;m<u.length;m+=1)f=u[m],k&&ti(f.points[0],k)?a.setXYAt(f.points[1][0],f.points[1][1],"o",a.length()-1):a.setTripleAt(f.points[0][0],f.points[0][1],f.points[1][0],f.points[1][1],f.points[0][0],f.points[0][1],a.length()),a.setTripleAt(f.points[3][0],f.points[3][1],f.points[3][0],f.points[3][1],f.points[2][0],f.points[2][1],a.length()),k=f.points[3]}return b.length&&xr(a,L,b[0][0],i,s),a},yi.prototype.processShapes=function(t){var e,i,s=this.shapes.length,a,n,l=this.amount.v,m=this.miterLimit.v,f=this.lineJoin;if(l!==0){var b,k;for(i=0;i<s;i+=1){if(b=this.shapes[i],k=b.localShapeCollection,!(!b.shape._mdf&&!this._mdf&&!t))for(k.releaseShapes(),b.shape._mdf=!0,e=b.shape.paths.shapes,n=b.shape.paths._length,a=0;a<n;a+=1)k.addShape(this.processPath(e[a],l,f,m));b.shape.paths=b.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function Er(t){for(var e=t.fStyle?t.fStyle.split(" "):[],i="normal",s="normal",a=e.length,n,l=0;l<a;l+=1)switch(n=e[l].toLowerCase(),n){case"italic":s="italic";break;case"bold":i="700";break;case"black":i="900";break;case"medium":i="500";break;case"regular":case"normal":i="400";break;case"light":case"thin":i="200";break;default:break}return{style:s,weight:t.fWeight||i}}var Ne=(function(){var t=5e3,e={w:0,size:0,shapes:[],data:{shapes:[]}},i=[];i=i.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var s=127988,a=917631,n=917601,l=917626,m=65039,f=8205,b=127462,k=127487,L=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function u(y){var P=y.split(","),h,p=P.length,z=[];for(h=0;h<p;h+=1)P[h]!=="sans-serif"&&P[h]!=="monospace"&&z.push(P[h]);return z.join(",")}function S(y,P){var h=j("span");h.setAttribute("aria-hidden",!0),h.style.fontFamily=P;var p=j("span");p.innerText="giItT1WQy@!-/#",h.style.position="absolute",h.style.left="-10000px",h.style.top="-10000px",h.style.fontSize="300px",h.style.fontVariant="normal",h.style.fontStyle="normal",h.style.fontWeight="normal",h.style.letterSpacing="0",h.appendChild(p),document.body.appendChild(h);var z=p.offsetWidth;return p.style.fontFamily=u(y)+", "+P,{node:p,w:z,parent:h}}function C(){var y,P=this.fonts.length,h,p,z=P;for(y=0;y<P;y+=1)this.fonts[y].loaded?z-=1:this.fonts[y].fOrigin==="n"||this.fonts[y].origin===0?this.fonts[y].loaded=!0:(h=this.fonts[y].monoCase.node,p=this.fonts[y].monoCase.w,h.offsetWidth!==p?(z-=1,this.fonts[y].loaded=!0):(h=this.fonts[y].sansCase.node,p=this.fonts[y].sansCase.w,h.offsetWidth!==p&&(z-=1,this.fonts[y].loaded=!0)),this.fonts[y].loaded&&(this.fonts[y].sansCase.parent.parentNode.removeChild(this.fonts[y].sansCase.parent),this.fonts[y].monoCase.parent.parentNode.removeChild(this.fonts[y].monoCase.parent)));z!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function E(y,P){var h=document.body&&P?"svg":"canvas",p,z=Er(y);if(h==="svg"){var M=et("text");M.style.fontSize="100px",M.setAttribute("font-family",y.fFamily),M.setAttribute("font-style",z.style),M.setAttribute("font-weight",z.weight),M.textContent="1",y.fClass?(M.style.fontFamily="inherit",M.setAttribute("class",y.fClass)):M.style.fontFamily=y.fFamily,P.appendChild(M),p=M}else{var H=new OffscreenCanvas(500,500).getContext("2d");H.font=z.style+" "+z.weight+" 100px "+y.fFamily,p=H}function J(tt){return h==="svg"?(p.textContent=tt,p.getComputedTextLength()):p.measureText(tt).width}return{measureText:J}}function F(y,P){if(!y){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=y.list;return}if(!document.body){this.isLoaded=!0,y.list.forEach(function(It){It.helper=E(It),It.cache={}}),this.fonts=y.list;return}var h=y.list,p,z=h.length,M=z;for(p=0;p<z;p+=1){var H=!0,J,tt;if(h[p].loaded=!1,h[p].monoCase=S(h[p].fFamily,"monospace"),h[p].sansCase=S(h[p].fFamily,"sans-serif"),!h[p].fPath)h[p].loaded=!0,M-=1;else if(h[p].fOrigin==="p"||h[p].origin===3){if(J=document.querySelectorAll('style[f-forigin="p"][f-family="'+h[p].fFamily+'"], style[f-origin="3"][f-family="'+h[p].fFamily+'"]'),J.length>0&&(H=!1),H){var ot=j("style");ot.setAttribute("f-forigin",h[p].fOrigin),ot.setAttribute("f-origin",h[p].origin),ot.setAttribute("f-family",h[p].fFamily),ot.type="text/css",ot.innerText="@font-face {font-family: "+h[p].fFamily+"; font-style: normal; src: url('"+h[p].fPath+"');}",P.appendChild(ot)}}else if(h[p].fOrigin==="g"||h[p].origin===1){for(J=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),tt=0;tt<J.length;tt+=1)J[tt].href.indexOf(h[p].fPath)!==-1&&(H=!1);if(H){var ht=j("link");ht.setAttribute("f-forigin",h[p].fOrigin),ht.setAttribute("f-origin",h[p].origin),ht.type="text/css",ht.rel="stylesheet",ht.href=h[p].fPath,document.body.appendChild(ht)}}else if(h[p].fOrigin==="t"||h[p].origin===2){for(J=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),tt=0;tt<J.length;tt+=1)h[p].fPath===J[tt].src&&(H=!1);if(H){var vt=j("link");vt.setAttribute("f-forigin",h[p].fOrigin),vt.setAttribute("f-origin",h[p].origin),vt.setAttribute("rel","stylesheet"),vt.setAttribute("href",h[p].fPath),P.appendChild(vt)}}h[p].helper=E(h[p],P),h[p].cache={},this.fonts.push(h[p])}M===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function x(y){if(y){this.chars||(this.chars=[]);var P,h=y.length,p,z=this.chars.length,M;for(P=0;P<h;P+=1){for(p=0,M=!1;p<z;)this.chars[p].style===y[P].style&&this.chars[p].fFamily===y[P].fFamily&&this.chars[p].ch===y[P].ch&&(M=!0),p+=1;M||(this.chars.push(y[P]),z+=1)}}}function _(y,P,h){for(var p=0,z=this.chars.length;p<z;){if(this.chars[p].ch===y&&this.chars[p].style===P&&this.chars[p].fFamily===h)return this.chars[p];p+=1}return(typeof y=="string"&&y.charCodeAt(0)!==13||!y)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",y,P,h)),e}function d(y,P,h){var p=this.getFontByName(P),z=y;if(!p.cache[z]){var M=p.helper;if(y===" "){var H=M.measureText("|"+y+"|"),J=M.measureText("||");p.cache[z]=(H-J)/100}else p.cache[z]=M.measureText(y)/100}return p.cache[z]*h}function g(y){for(var P=0,h=this.fonts.length;P<h;){if(this.fonts[P].fName===y)return this.fonts[P];P+=1}return this.fonts[0]}function w(y){var P=0,h=y.charCodeAt(0);if(h>=55296&&h<=56319){var p=y.charCodeAt(1);p>=56320&&p<=57343&&(P=(h-55296)*1024+p-56320+65536)}return P}function $(y,P){var h=y.toString(16)+P.toString(16);return L.indexOf(h)!==-1}function I(y){return y===f}function O(y){return y===m}function N(y){var P=w(y);return P>=b&&P<=k}function Q(y){return N(y.substr(0,2))&&N(y.substr(2,2))}function K(y){return i.indexOf(y)!==-1}function W(y,P){var h=w(y.substr(P,2));if(h!==s)return!1;var p=0;for(P+=2;p<5;){if(h=w(y.substr(P,2)),h<n||h>l)return!1;p+=1,P+=2}return w(y.substr(P,2))===a}function it(){this.isLoaded=!0}var G=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};G.isModifier=$,G.isZeroWidthJoiner=I,G.isFlagEmoji=Q,G.isRegionalCode=N,G.isCombinedCharacter=K,G.isRegionalFlag=W,G.isVariationSelector=O,G.BLACK_FLAG_CODE_POINT=s;var V={addChars:x,addFonts:F,getCharData:_,getFontByName:g,measureText:d,checkLoadedFonts:C,setIsLoaded:it};return G.prototype=V,G})();function Pr(t){this.animationData=t}Pr.prototype.getProp=function(t){return this.animationData.slots&&this.animationData.slots[t.sid]?Object.assign(t,this.animationData.slots[t.sid].p):t};function ya(t){return new Pr(t)}function Yi(){}Yi.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,i=this.renderableComponents.length;for(e=0;e<i;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var ks=(function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}})();function _a(t,e,i){this.p=U.getProp(e,t.v,0,0,i)}function ba(t,e,i){this.p=U.getProp(e,t.v,0,0,i)}function wa(t,e,i){this.p=U.getProp(e,t.v,1,0,i)}function xa(t,e,i){this.p=U.getProp(e,t.v,1,0,i)}function ka(t,e,i){this.p=U.getProp(e,t.v,0,0,i)}function Sa(t,e,i){this.p=U.getProp(e,t.v,0,0,i)}function Aa(t,e,i){this.p=U.getProp(e,t.v,0,0,i)}function Ea(){this.p={}}function Cr(t,e){var i=t.ef||[];this.effectElements=[];var s,a=i.length,n;for(s=0;s<a;s+=1)n=new _i(i[s],e),this.effectElements.push(n)}function _i(t,e){this.init(t,e)}q([wt],_i),_i.prototype.getValue=_i.prototype.iterateDynamicProperties,_i.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var i,s=this.data.ef.length,a,n=this.data.ef;for(i=0;i<s;i+=1){switch(a=null,n[i].ty){case 0:a=new _a(n[i],e,this);break;case 1:a=new ba(n[i],e,this);break;case 2:a=new wa(n[i],e,this);break;case 3:a=new xa(n[i],e,this);break;case 4:case 7:a=new Aa(n[i],e,this);break;case 10:a=new ka(n[i],e,this);break;case 11:a=new Sa(n[i],e,this);break;case 5:a=new Cr(n[i],e,this);break;default:a=new Ea(n[i],e,this);break}a&&this.effectElements.push(a)}};function ye(){}ye.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,i=this.data.masksProperties.length;e<i;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){var e=tr();if(e){var i=e("layer"),s=e("effects"),a=e("shape"),n=e("text"),l=e("comp");this.layerInterface=i(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var m=s.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(m),this.data.ty===0||this.data.xt?this.compInterface=l(this):this.data.ty===4?(this.layerInterface.shapeInterface=a(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=n(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var e=ks(this.data.bm),i=this.baseElement||this.layerElement;i.style["mix-blend-mode"]=e},initBaseData:function(e,i,s){this.globalData=i,this.comp=s,this.data=e,this.layerId=Mt(),this.data.sr||(this.data.sr=1),this.effectsManager=new Cr(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function _e(){}_e.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,i){var s,a=this.dynamicProperties.length;for(s=0;s<a;s+=1)(i||this._isParent&&this.dynamicProperties[s].propType==="transform")&&(this.dynamicProperties[s].getValue(),this.dynamicProperties[s]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function be(t,e,i){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,i)}be.prototype.prepareFrame=function(){},q([Yi,ye,_e],be),be.prototype.getBaseElement=function(){return null},be.prototype.renderFrame=function(){},be.prototype.destroy=function(){},be.prototype.initExpressions=function(){var t=tr();if(t){var e=t("footage");this.layerInterface=e(this)}},be.prototype.getFootageData=function(){return this.footageData};function Ft(t,e,i){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,i),this._isPlaying=!1,this._canPlay=!1;var s=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(s),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?U.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=U.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}Ft.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var i=this._volume*this._volumeMultiplier;this._previousVolume!==i&&(this._previousVolume=i,this.audio.volume(i))},q([Yi,ye,_e],Ft),Ft.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},Ft.prototype.show=function(){},Ft.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},Ft.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},Ft.prototype.resume=function(){this._canPlay=!0},Ft.prototype.setRate=function(t){this.audio.rate(t)},Ft.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},Ft.prototype.getBaseElement=function(){return null},Ft.prototype.destroy=function(){},Ft.prototype.sourceRectAtTime=function(){},Ft.prototype.initExpressions=function(){};function Et(){}Et.prototype.checkLayers=function(t){var e,i=this.layers.length,s;for(this.completeLayers=!0,e=i-1;e>=0;e-=1)this.elements[e]||(s=this.layers[e],s.ip-s.st<=t-this.layers[e].st&&s.op-s.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},Et.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},Et.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Et.prototype.createAudio=function(t){return new Ft(t,this.globalData,this)},Et.prototype.createFootage=function(t){return new be(t,this.globalData,this)},Et.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},Et.prototype.includeLayers=function(t){this.completeLayers=!1;var e,i=t.length,s,a=this.layers.length;for(e=0;e<i;e+=1)for(s=0;s<a;){if(this.layers[s].id===t[e].id){this.layers[s]=t[e];break}s+=1}},Et.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},Et.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Et.prototype.buildElementParenting=function(t,e,i){for(var s=this.elements,a=this.layers,n=0,l=a.length;n<l;)a[n].ind==e&&(!s[n]||s[n]===!0?(this.buildItem(n),this.addPendingElement(t)):(i.push(s[n]),s[n].setAsParent(),a[n].parent!==void 0?this.buildElementParenting(t,a[n].parent,i):t.setHierarchy(i))),n+=1},Et.prototype.addPendingElement=function(t){this.pendingElements.push(t)},Et.prototype.searchExtraCompositions=function(t){var e,i=t.length;for(e=0;e<i;e+=1)if(t[e].xt){var s=this.createComp(t[e]);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},Et.prototype.getElementById=function(t){var e,i=this.elements.length;for(e=0;e<i;e+=1)if(this.elements[e].data.ind===t)return this.elements[e];return null},Et.prototype.getElementByPath=function(t){var e=t.shift(),i;if(typeof e=="number")i=this.elements[e];else{var s,a=this.elements.length;for(s=0;s<a;s+=1)if(this.elements[s].data.nm===e){i=this.elements[s];break}}return t.length===0?i:i.getElementByPath(t)},Et.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new Ne,this.globalData.slotManager=ya(t),this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};var Pa={TRANSFORM_EFFECT:"transformEFfect"};function ii(){}ii.prototype={initTransform:function(){var e=new At;this.finalTransform={mProp:this.data.ks?ys.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:e,localMat:e,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,i=this.finalTransform.mat,s=0,a=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;s<a;){if(this.hierarchy[s].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}s+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,i.cloneFromProps(e),s=0;s<a;s+=1)i.multiply(this.hierarchy[s].finalTransform.mProp.v)}(!this.localTransforms||this.finalTransform._matMdf)&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var e=0,i=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;e<i;)this.localTransforms[e]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[e]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),e+=1;if(this.finalTransform._localMatMdf){var s=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(s),e=1;e<i;e+=1){var a=this.localTransforms[e].matrix;s.multiply(a)}s.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var n=this.finalTransform.localOpacity;for(e=0;e<i;e+=1)n*=this.localTransforms[e].opacity*.01;this.finalTransform.localOpacity=n}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var e=this.renderableEffectsManager.getEffects(Pa.TRANSFORM_EFFECT);if(e.length){this.localTransforms=[],this.finalTransform.localMat=new At;var i=0,s=e.length;for(i=0;i<s;i+=1)this.localTransforms.push(e[i])}}},globalToLocal:function(e){var i=[];i.push(this.finalTransform);for(var s=!0,a=this.comp;s;)a.finalTransform?(a.data.hasMask&&i.splice(0,0,a.finalTransform),a=a.comp):s=!1;var n,l=i.length,m;for(n=0;n<l;n+=1)m=i[n].mat.applyToPointArray(0,0,0),e=[e[0]-m[0],e[1]-m[1],0];return e},mHelper:new At};function De(t,e,i){this.data=t,this.element=e,this.globalData=i,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var s=this.globalData.defs,a,n=this.masksProperties?this.masksProperties.length:0;this.viewData=at(n),this.solidPath="";var l,m=this.masksProperties,f=0,b=[],k,L,u=Mt(),S,C,E,F,x="clipPath",_="clip-path";for(a=0;a<n;a+=1)if((m[a].mode!=="a"&&m[a].mode!=="n"||m[a].inv||m[a].o.k!==100||m[a].o.x)&&(x="mask",_="mask"),(m[a].mode==="s"||m[a].mode==="i")&&f===0?(S=et("rect"),S.setAttribute("fill","#ffffff"),S.setAttribute("width",this.element.comp.data.w||0),S.setAttribute("height",this.element.comp.data.h||0),b.push(S)):S=null,l=et("path"),m[a].mode==="n")this.viewData[a]={op:U.getProp(this.element,m[a].o,0,.01,this.element),prop:Wi.getShapeProp(this.element,m[a],3),elem:l,lastPath:""},s.appendChild(l);else{f+=1,l.setAttribute("fill",m[a].mode==="s"?"#000000":"#ffffff"),l.setAttribute("clip-rule","nonzero");var d;if(m[a].x.k!==0?(x="mask",_="mask",F=U.getProp(this.element,m[a].x,0,null,this.element),d=Mt(),C=et("filter"),C.setAttribute("id",d),E=et("feMorphology"),E.setAttribute("operator","erode"),E.setAttribute("in","SourceGraphic"),E.setAttribute("radius","0"),C.appendChild(E),s.appendChild(C),l.setAttribute("stroke",m[a].mode==="s"?"#000000":"#ffffff")):(E=null,F=null),this.storedData[a]={elem:l,x:F,expan:E,lastPath:"",lastOperator:"",filterId:d,lastRadius:0},m[a].mode==="i"){L=b.length;var g=et("g");for(k=0;k<L;k+=1)g.appendChild(b[k]);var w=et("mask");w.setAttribute("mask-type","alpha"),w.setAttribute("id",u+"_"+f),w.appendChild(l),s.appendChild(w),g.setAttribute("mask","url("+B()+"#"+u+"_"+f+")"),b.length=0,b.push(g)}else b.push(l);m[a].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[a]={elem:l,lastPath:"",op:U.getProp(this.element,m[a].o,0,.01,this.element),prop:Wi.getShapeProp(this.element,m[a],3),invRect:S},this.viewData[a].prop.k||this.drawPath(m[a],this.viewData[a].prop.v,this.viewData[a])}for(this.maskElement=et(x),n=b.length,a=0;a<n;a+=1)this.maskElement.appendChild(b[a]);f>0&&(this.maskElement.setAttribute("id",u),this.element.maskedElement.setAttribute(_,"url("+B()+"#"+u+")"),s.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}De.prototype.getMaskProperty=function(t){return this.viewData[t].prop},De.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,i,s=this.masksProperties.length;for(i=0;i<s;i+=1)if((this.viewData[i].prop._mdf||t)&&this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]),(this.viewData[i].op._mdf||t)&&this.viewData[i].elem.setAttribute("fill-opacity",this.viewData[i].op.v),this.masksProperties[i].mode!=="n"&&(this.viewData[i].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[i].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[i].x&&(this.storedData[i].x._mdf||t))){var a=this.storedData[i].expan;this.storedData[i].x.v<0?(this.storedData[i].lastOperator!=="erode"&&(this.storedData[i].lastOperator="erode",this.storedData[i].elem.setAttribute("filter","url("+B()+"#"+this.storedData[i].filterId+")")),a.setAttribute("radius",-this.storedData[i].x.v)):(this.storedData[i].lastOperator!=="dilate"&&(this.storedData[i].lastOperator="dilate",this.storedData[i].elem.setAttribute("filter",null)),this.storedData[i].elem.setAttribute("stroke-width",this.storedData[i].x.v*2))}},De.prototype.getMaskelement=function(){return this.maskElement},De.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},De.prototype.drawPath=function(t,e,i){var s=" M"+e.v[0][0]+","+e.v[0][1],a,n;for(n=e._length,a=1;a<n;a+=1)s+=" C"+e.o[a-1][0]+","+e.o[a-1][1]+" "+e.i[a][0]+","+e.i[a][1]+" "+e.v[a][0]+","+e.v[a][1];if(e.c&&n>1&&(s+=" C"+e.o[a-1][0]+","+e.o[a-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),i.lastPath!==s){var l="";i.elem&&(e.c&&(l=t.inv?this.solidPath+s:s),i.elem.setAttribute("d",l)),i.lastPath=s}},De.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var bi=(function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=i;function e(s,a){var n=et("filter");return n.setAttribute("id",s),a!==!0&&(n.setAttribute("filterUnits","objectBoundingBox"),n.setAttribute("x","0%"),n.setAttribute("y","0%"),n.setAttribute("width","100%"),n.setAttribute("height","100%")),n}function i(){var s=et("feColorMatrix");return s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),s}return t})(),$r=(function(){var t={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),/firefox/i.test(navigator.userAgent)&&(t.svgLumaHidden=!1),t})(),Ki={},Tr="filter_result_";function Ss(t){var e,i="SourceGraphic",s=t.data.ef?t.data.ef.length:0,a=Mt(),n=bi.createFilter(a,!0),l=0;this.filters=[];var m;for(e=0;e<s;e+=1){m=null;var f=t.data.ef[e].ty;if(Ki[f]){var b=Ki[f].effect;m=new b(n,t.effectsManager.effectElements[e],t,Tr+l,i),i=Tr+l,Ki[f].countsAsEffect&&(l+=1)}m&&this.filters.push(m)}l&&(t.globalData.defs.appendChild(n),t.layerElement.setAttribute("filter","url("+B()+"#"+a+")")),this.filters.length&&t.addRenderableComponent(this)}Ss.prototype.renderFrame=function(t){var e,i=this.filters.length;for(e=0;e<i;e+=1)this.filters[e].renderFrame(t)},Ss.prototype.getEffects=function(t){var e,i=this.filters.length,s=[];for(e=0;e<i;e+=1)this.filters[e].type===t&&s.push(this.filters[e]);return s};function So(t,e,i){Ki[t]={effect:e,countsAsEffect:i}}function wi(){}wi.prototype={initRendererElement:function(){this.layerElement=et("g")},createContainerElements:function(){this.matteElement=et("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null;if(this.data.td){this.matteMasks={};var i=et("g");i.setAttribute("id",this.layerId),i.appendChild(this.layerElement),e=i,this.globalData.defs.appendChild(i)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var s=et("clipPath"),a=et("path");a.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var n=Mt();if(s.setAttribute("id",n),s.appendChild(a),this.globalData.defs.appendChild(s),this.checkMasks()){var l=et("g");l.setAttribute("clip-path","url("+B()+"#"+n+")"),l.appendChild(this.layerElement),this.transformedElement=l,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+B()+"#"+n+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new De(this.data,this,this.globalData),this.renderableEffectsManager=new Ss(this),this.searchEffectTransforms()},getMatte:function(e){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[e]){var i=this.layerId+"_"+e,s,a,n,l;if(e===1||e===3){var m=et("mask");m.setAttribute("id",i),m.setAttribute("mask-type",e===3?"luminance":"alpha"),n=et("use"),n.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),m.appendChild(n),this.globalData.defs.appendChild(m),!$r.maskType&&e===1&&(m.setAttribute("mask-type","luminance"),s=Mt(),a=bi.createFilter(s),this.globalData.defs.appendChild(a),a.appendChild(bi.createAlphaToLuminanceFilter()),l=et("g"),l.appendChild(n),m.appendChild(l),l.setAttribute("filter","url("+B()+"#"+s+")"))}else if(e===2){var f=et("mask");f.setAttribute("id",i),f.setAttribute("mask-type","alpha");var b=et("g");f.appendChild(b),s=Mt(),a=bi.createFilter(s);var k=et("feComponentTransfer");k.setAttribute("in","SourceGraphic"),a.appendChild(k);var L=et("feFuncA");L.setAttribute("type","table"),L.setAttribute("tableValues","1.0 0.0"),k.appendChild(L),this.globalData.defs.appendChild(a);var u=et("rect");u.setAttribute("width",this.comp.data.w),u.setAttribute("height",this.comp.data.h),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("fill","#ffffff"),u.setAttribute("opacity","0"),b.setAttribute("filter","url("+B()+"#"+s+")"),b.appendChild(u),n=et("use"),n.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),b.appendChild(n),$r.maskType||(f.setAttribute("mask-type","luminance"),a.appendChild(bi.createAlphaToLuminanceFilter()),l=et("g"),b.appendChild(u),l.appendChild(this.layerElement),b.appendChild(l)),this.globalData.defs.appendChild(f)}this.matteMasks[e]=i}return this.matteMasks[e]},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+B()+"#"+e+")")}};function si(){}si.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function xi(){}(function(){var t={initElement:function(i,s,a){this.initFrame(),this.initBaseData(i,s,a),this.initTransform(i,s,a),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var i=this.baseElement||this.layerElement;i.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var i=this.baseElement||this.layerElement;i.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(i){this._mdf=!1,this.prepareRenderableFrame(i),this.prepareProperties(i,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};q([Yi,rt(t)],xi)})();function ki(t,e,i){this.assetData=e.getAssetData(t.refId),this.assetData&&this.assetData.sid&&(this.assetData=e.slotManager.getProp(this.assetData)),this.initElement(t,e,i),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}q([ye,ii,wi,si,_e,xi],ki),ki.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=et("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},ki.prototype.sourceRectAtTime=function(){return this.sourceRect};function Ca(t,e){this.elem=t,this.pos=e}function Mr(){}Mr.prototype={addShapeToModifiers:function(e){var i,s=this.shapeModifiers.length;for(i=0;i<s;i+=1)this.shapeModifiers[i].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var i=0,s=this.shapeModifiers.length;i<s;)if(this.shapeModifiers[i].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,i=this.shapes.length;for(e=0;e<i;e+=1)this.shapes[e].sh.reset();i=this.shapeModifiers.length;var s;for(e=i-1;e>=0&&(s=this.shapeModifiers[e].processShapes(this._isFirstFrame),!s);e-=1);}},searchProcessedElement:function(e){for(var i=this.processedElements,s=0,a=i.length;s<a;){if(i[s].elem===e)return i[s].pos;s+=1}return 0},addProcessedElement:function(e,i){for(var s=this.processedElements,a=s.length;a;)if(a-=1,s[a].elem===e){s[a].pos=i;return}s.push(new Ca(e,i))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};var Fr={1:"butt",2:"round",3:"square"},Ir={1:"miter",2:"round",3:"bevel"};function Lr(t,e,i){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=i,this.lvl=e,this._isAnimated=!!i.k;for(var s=0,a=t.length;s<a;){if(t[s].mProps.dynamicProperties.length){this._isAnimated=!0;break}s+=1}}Lr.prototype.setAsAnimated=function(){this._isAnimated=!0};function zr(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=et("path"),this.msElem=null}zr.prototype.reset=function(){this.d="",this._mdf=!1};function Xi(t,e,i,s){this.elem=t,this.frameId=-1,this.dataProps=at(e.length),this.renderer=i,this.k=!1,this.dashStr="",this.dashArray=st("float32",e.length?e.length-1:0),this.dashoffset=st("float32",1),this.initDynamicPropertyContainer(s);var a,n=e.length||0,l;for(a=0;a<n;a+=1)l=U.getProp(t,e[a].v,0,0,this),this.k=l.k||this.k,this.dataProps[a]={n:e[a].n,p:l};this.k||this.getValue(!0),this._isAnimated=this.k}Xi.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,i=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<i;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},q([wt],Xi);function Or(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=U.getProp(t,e.o,0,.01,this),this.w=U.getProp(t,e.w,0,null,this),this.d=new Xi(t,e.d||{},"svg",this),this.c=U.getProp(t,e.c,1,255,this),this.style=i,this._isAnimated=!!this._isAnimated}q([wt],Or);function Rr(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=U.getProp(t,e.o,0,.01,this),this.c=U.getProp(t,e.c,1,255,this),this.style=i}q([wt],Rr);function Vr(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=i}q([wt],Vr);function Si(t,e,i){this.data=e,this.c=st("uint8c",e.p*4);var s=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=st("float32",s),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=s,this.initDynamicPropertyContainer(i),this.prop=U.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}Si.prototype.comparePoints=function(t,e){for(var i=0,s=this.o.length/2,a;i<s;){if(a=Math.abs(t[i*4]-t[e*4+i*2]),a>.01)return!1;i+=1}return!0},Si.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},Si.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,i=this.data.p*4,s,a;for(e=0;e<i;e+=1)s=e%4===0?100:255,a=Math.round(this.prop.v[e]*s),this.c[e]!==a&&(this.c[e]=a,this._cmdf=!t);if(this.o.length)for(i=this.prop.v.length,e=this.data.p*4;e<i;e+=1)s=e%2===0?100:1,a=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==a&&(this.o[e-this.data.p*4]=a,this._omdf=!t);this._mdf=!t}},q([wt],Si);function ri(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,i)}ri.prototype.initGradientData=function(t,e,i){this.o=U.getProp(t,e.o,0,.01,this),this.s=U.getProp(t,e.s,1,null,this),this.e=U.getProp(t,e.e,1,null,this),this.h=U.getProp(t,e.h||{k:0},0,.01,this),this.a=U.getProp(t,e.a||{k:0},0,dt,this),this.g=new Si(t,e.g,this),this.style=i,this.stops=[],this.setGradientData(i.pElem,e),this.setGradientOpacity(e,i),this._isAnimated=!!this._isAnimated},ri.prototype.setGradientData=function(t,e){var i=Mt(),s=et(e.t===1?"linearGradient":"radialGradient");s.setAttribute("id",i),s.setAttribute("spreadMethod","pad"),s.setAttribute("gradientUnits","userSpaceOnUse");var a=[],n,l,m;for(m=e.g.p*4,l=0;l<m;l+=4)n=et("stop"),s.appendChild(n),a.push(n);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+B()+"#"+i+")"),this.gf=s,this.cst=a},ri.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var i,s,a,n=et("mask"),l=et("path");n.appendChild(l);var m=Mt(),f=Mt();n.setAttribute("id",f);var b=et(t.t===1?"linearGradient":"radialGradient");b.setAttribute("id",m),b.setAttribute("spreadMethod","pad"),b.setAttribute("gradientUnits","userSpaceOnUse"),a=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var k=this.stops;for(s=t.g.p*4;s<a;s+=2)i=et("stop"),i.setAttribute("stop-color","rgb(255,255,255)"),b.appendChild(i),k.push(i);l.setAttribute(t.ty==="gf"?"fill":"stroke","url("+B()+"#"+m+")"),t.ty==="gs"&&(l.setAttribute("stroke-linecap",Fr[t.lc||2]),l.setAttribute("stroke-linejoin",Ir[t.lj||2]),t.lj===1&&l.setAttribute("stroke-miterlimit",t.ml)),this.of=b,this.ms=n,this.ost=k,this.maskId=f,e.msElem=l}},q([wt],ri);function Nr(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=U.getProp(t,e.w,0,null,this),this.d=new Xi(t,e.d||{},"svg",this),this.initGradientData(t,e,i),this._isAnimated=!!this._isAnimated}q([ri,wt],Nr);function $a(){this.it=[],this.prevViewData=[],this.gr=et("g")}function Ta(t,e,i){this.transform={mProps:t,op:e,container:i},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var Dr=function(e,i,s,a){if(i===0)return"";var n=e.o,l=e.i,m=e.v,f,b=" M"+a.applyToPointStringified(m[0][0],m[0][1]);for(f=1;f<i;f+=1)b+=" C"+a.applyToPointStringified(n[f-1][0],n[f-1][1])+" "+a.applyToPointStringified(l[f][0],l[f][1])+" "+a.applyToPointStringified(m[f][0],m[f][1]);return s&&i&&(b+=" C"+a.applyToPointStringified(n[f-1][0],n[f-1][1])+" "+a.applyToPointStringified(l[0][0],l[0][1])+" "+a.applyToPointStringified(m[0][0],m[0][1]),b+="z"),b},Ma=(function(){var t=new At,e=new At,i={createRenderFunction:s};function s(L){switch(L.ty){case"fl":return m;case"gf":return b;case"gs":return f;case"st":return k;case"sh":case"el":case"rc":case"sr":return l;case"tr":return a;case"no":return n;default:return null}}function a(L,u,S){(S||u.transform.op._mdf)&&u.transform.container.setAttribute("opacity",u.transform.op.v),(S||u.transform.mProps._mdf)&&u.transform.container.setAttribute("transform",u.transform.mProps.v.to2dCSS())}function n(){}function l(L,u,S){var C,E,F,x,_,d,g=u.styles.length,w=u.lvl,$,I,O,N;for(d=0;d<g;d+=1){if(x=u.sh._mdf||S,u.styles[d].lvl<w){for(I=e.reset(),O=w-u.styles[d].lvl,N=u.transformers.length-1;!x&&O>0;)x=u.transformers[N].mProps._mdf||x,O-=1,N-=1;if(x)for(O=w-u.styles[d].lvl,N=u.transformers.length-1;O>0;)I.multiply(u.transformers[N].mProps.v),O-=1,N-=1}else I=t;if($=u.sh.paths,E=$._length,x){for(F="",C=0;C<E;C+=1)_=$.shapes[C],_&&_._length&&(F+=Dr(_,_._length,_.c,I));u.caches[d]=F}else F=u.caches[d];u.styles[d].d+=L.hd===!0?"":F,u.styles[d]._mdf=x||u.styles[d]._mdf}}function m(L,u,S){var C=u.style;(u.c._mdf||S)&&C.pElem.setAttribute("fill","rgb("+Zt(u.c.v[0])+","+Zt(u.c.v[1])+","+Zt(u.c.v[2])+")"),(u.o._mdf||S)&&C.pElem.setAttribute("fill-opacity",u.o.v)}function f(L,u,S){b(L,u,S),k(L,u,S)}function b(L,u,S){var C=u.gf,E=u.g._hasOpacity,F=u.s.v,x=u.e.v;if(u.o._mdf||S){var _=L.ty==="gf"?"fill-opacity":"stroke-opacity";u.style.pElem.setAttribute(_,u.o.v)}if(u.s._mdf||S){var d=L.t===1?"x1":"cx",g=d==="x1"?"y1":"cy";C.setAttribute(d,F[0]),C.setAttribute(g,F[1]),E&&!u.g._collapsable&&(u.of.setAttribute(d,F[0]),u.of.setAttribute(g,F[1]))}var w,$,I,O;if(u.g._cmdf||S){w=u.cst;var N=u.g.c;for(I=w.length,$=0;$<I;$+=1)O=w[$],O.setAttribute("offset",N[$*4]+"%"),O.setAttribute("stop-color","rgb("+N[$*4+1]+","+N[$*4+2]+","+N[$*4+3]+")")}if(E&&(u.g._omdf||S)){var Q=u.g.o;for(u.g._collapsable?w=u.cst:w=u.ost,I=w.length,$=0;$<I;$+=1)O=w[$],u.g._collapsable||O.setAttribute("offset",Q[$*2]+"%"),O.setAttribute("stop-opacity",Q[$*2+1])}if(L.t===1)(u.e._mdf||S)&&(C.setAttribute("x2",x[0]),C.setAttribute("y2",x[1]),E&&!u.g._collapsable&&(u.of.setAttribute("x2",x[0]),u.of.setAttribute("y2",x[1])));else{var K;if((u.s._mdf||u.e._mdf||S)&&(K=Math.sqrt(Math.pow(F[0]-x[0],2)+Math.pow(F[1]-x[1],2)),C.setAttribute("r",K),E&&!u.g._collapsable&&u.of.setAttribute("r",K)),u.s._mdf||u.e._mdf||u.h._mdf||u.a._mdf||S){K||(K=Math.sqrt(Math.pow(F[0]-x[0],2)+Math.pow(F[1]-x[1],2)));var W=Math.atan2(x[1]-F[1],x[0]-F[0]),it=u.h.v;it>=1?it=.99:it<=-1&&(it=-.99);var G=K*it,V=Math.cos(W+u.a.v)*G+F[0],y=Math.sin(W+u.a.v)*G+F[1];C.setAttribute("fx",V),C.setAttribute("fy",y),E&&!u.g._collapsable&&(u.of.setAttribute("fx",V),u.of.setAttribute("fy",y))}}}function k(L,u,S){var C=u.style,E=u.d;E&&(E._mdf||S)&&E.dashStr&&(C.pElem.setAttribute("stroke-dasharray",E.dashStr),C.pElem.setAttribute("stroke-dashoffset",E.dashoffset[0])),u.c&&(u.c._mdf||S)&&C.pElem.setAttribute("stroke","rgb("+Zt(u.c.v[0])+","+Zt(u.c.v[1])+","+Zt(u.c.v[2])+")"),(u.o._mdf||S)&&C.pElem.setAttribute("stroke-opacity",u.o.v),(u.w._mdf||S)&&(C.pElem.setAttribute("stroke-width",u.w.v),C.msElem&&C.msElem.setAttribute("stroke-width",u.w.v))}return i})();function mt(t,e,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,i),this.prevViewData=[]}q([ye,ii,wi,Mr,si,_e,xi],mt),mt.prototype.initSecondaryElement=function(){},mt.prototype.identityMatrix=new At,mt.prototype.buildExpressionInterface=function(){},mt.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},mt.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,i,s,a=this.stylesList.length,n,l=[],m=!1;for(s=0;s<a;s+=1){for(n=this.stylesList[s],m=!1,l.length=0,t=0;t<e;t+=1)i=this.shapes[t],i.styles.indexOf(n)!==-1&&(l.push(i),m=i._isAnimated||m);l.length>1&&m&&this.setShapesAsAnimated(l)}},mt.prototype.setShapesAsAnimated=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e].setAsAnimated()},mt.prototype.createStyleElement=function(t,e){var i,s=new zr(t,e),a=s.pElem;if(t.ty==="st")i=new Or(this,t,s);else if(t.ty==="fl")i=new Rr(this,t,s);else if(t.ty==="gf"||t.ty==="gs"){var n=t.ty==="gf"?ri:Nr;i=new n(this,t,s),this.globalData.defs.appendChild(i.gf),i.maskId&&(this.globalData.defs.appendChild(i.ms),this.globalData.defs.appendChild(i.of),a.setAttribute("mask","url("+B()+"#"+i.maskId+")"))}else t.ty==="no"&&(i=new Vr(this,t,s));return(t.ty==="st"||t.ty==="gs")&&(a.setAttribute("stroke-linecap",Fr[t.lc||2]),a.setAttribute("stroke-linejoin",Ir[t.lj||2]),a.setAttribute("fill-opacity","0"),t.lj===1&&a.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&a.setAttribute("fill-rule","evenodd"),t.ln&&a.setAttribute("id",t.ln),t.cl&&a.setAttribute("class",t.cl),t.bm&&(a.style["mix-blend-mode"]=ks(t.bm)),this.stylesList.push(s),this.addToAnimatedContents(t,i),i},mt.prototype.createGroupElement=function(t){var e=new $a;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=ks(t.bm)),e},mt.prototype.createTransformElement=function(t,e){var i=ys.getTransformProperty(this,t,this),s=new Ta(i,i.o,e);return this.addToAnimatedContents(t,s),s},mt.prototype.createShapeElement=function(t,e,i){var s=4;t.ty==="rc"?s=5:t.ty==="el"?s=6:t.ty==="sr"&&(s=7);var a=Wi.getShapeProp(this,t,s,this),n=new Lr(e,i,a);return this.shapes.push(n),this.addShapeToModifiers(n),this.addToAnimatedContents(t,n),n},mt.prototype.addToAnimatedContents=function(t,e){for(var i=0,s=this.animatedContents.length;i<s;){if(this.animatedContents[i].element===e)return;i+=1}this.animatedContents.push({fn:Ma.createRenderFunction(t),element:e,data:t})},mt.prototype.setElementStyles=function(t){var e=t.styles,i,s=this.stylesList.length;for(i=0;i<s;i+=1)e.indexOf(this.stylesList[i])===-1&&!this.stylesList[i].closed&&e.push(this.stylesList[i])},mt.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},mt.prototype.searchShapes=function(t,e,i,s,a,n,l){var m=[].concat(n),f,b=t.length-1,k,L,u=[],S=[],C,E,F;for(f=b;f>=0;f-=1){if(F=this.searchProcessedElement(t[f]),F?e[f]=i[F-1]:t[f]._render=l,t[f].ty==="fl"||t[f].ty==="st"||t[f].ty==="gf"||t[f].ty==="gs"||t[f].ty==="no")F?e[f].style.closed=t[f].hd:e[f]=this.createStyleElement(t[f],a),t[f]._render&&e[f].style.pElem.parentNode!==s&&s.appendChild(e[f].style.pElem),u.push(e[f].style);else if(t[f].ty==="gr"){if(!F)e[f]=this.createGroupElement(t[f]);else for(L=e[f].it.length,k=0;k<L;k+=1)e[f].prevViewData[k]=e[f].it[k];this.searchShapes(t[f].it,e[f].it,e[f].prevViewData,e[f].gr,a+1,m,l),t[f]._render&&e[f].gr.parentNode!==s&&s.appendChild(e[f].gr)}else t[f].ty==="tr"?(F||(e[f]=this.createTransformElement(t[f],s)),C=e[f].transform,m.push(C)):t[f].ty==="sh"||t[f].ty==="rc"||t[f].ty==="el"||t[f].ty==="sr"?(F||(e[f]=this.createShapeElement(t[f],m,a)),this.setElementStyles(e[f])):t[f].ty==="tm"||t[f].ty==="rd"||t[f].ty==="ms"||t[f].ty==="pb"||t[f].ty==="zz"||t[f].ty==="op"?(F?(E=e[f],E.closed=!1):(E=ge.getModifier(t[f].ty),E.init(this,t[f]),e[f]=E,this.shapeModifiers.push(E)),S.push(E)):t[f].ty==="rp"&&(F?(E=e[f],E.closed=!0):(E=ge.getModifier(t[f].ty),e[f]=E,E.init(this,t,f,e),this.shapeModifiers.push(E),l=!1),S.push(E));this.addProcessedElement(t[f],f+1)}for(b=u.length,f=0;f<b;f+=1)u[f].closed=!0;for(b=S.length,f=0;f<b;f+=1)S[f].closed=!0},mt.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},mt.prototype.renderShape=function(){var t,e=this.animatedContents.length,i;for(t=0;t<e;t+=1)i=this.animatedContents[t],(this._isFirstFrame||i.element._isAnimated)&&i.data!==!0&&i.fn(i.data,i.element,this._isFirstFrame)},mt.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function As(t,e,i,s,a,n){this.o=t,this.sw=e,this.sc=i,this.fc=s,this.m=a,this.p=n,this._mdf={o:!0,sw:!!e,sc:!!i,fc:!!s,m:!0,p:!0}}As.prototype.update=function(t,e,i,s,a,n){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var l=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,l=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,l=!0),this.sc!==i&&(this.sc=i,this._mdf.sc=!0,l=!0),this.fc!==s&&(this.fc=s,this._mdf.fc=!0,l=!0),this.m!==a&&(this.m=a,this._mdf.m=!0,l=!0),n.length&&(this.p[0]!==n[0]||this.p[1]!==n[1]||this.p[4]!==n[4]||this.p[5]!==n[5]||this.p[12]!==n[12]||this.p[13]!==n[13])&&(this.p=n,this._mdf.p=!0,l=!0),l};function Tt(t,e){this._frameId=c,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,e.d&&e.d.sid&&(e.d=t.globalData.slotManager.getProp(e.d)),this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}Tt.prototype.defaultBoxWidth=[0,0],Tt.prototype.copyData=function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Tt.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},Tt.prototype.searchProperty=function(){return this.searchKeyframes()},Tt.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},Tt.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},Tt.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,i=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var s,a=this.effectsSequence.length,n=t||this.data.d.k[this.keysIndex].s;for(s=0;s<a;s+=1)i!==this.keysIndex?n=this.effectsSequence[s](n,n.t):n=this.effectsSequence[s](this.currentData,n.t);e!==n&&this.setCurrentData(n),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},Tt.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,i=0,s=t.length;i<=s-1&&!(i===s-1||t[i+1].t>e);)i+=1;return this.keysIndex!==i&&(this.keysIndex=i),this.data.d.k[this.keysIndex].s},Tt.prototype.buildFinalText=function(t){for(var e=[],i=0,s=t.length,a,n,l=!1,m=!1,f="";i<s;)l=m,m=!1,a=t.charCodeAt(i),f=t.charAt(i),Ne.isCombinedCharacter(a)?l=!0:a>=55296&&a<=56319?Ne.isRegionalFlag(t,i)?f=t.substr(i,14):(n=t.charCodeAt(i+1),n>=56320&&n<=57343&&(Ne.isModifier(a,n)?(f=t.substr(i,2),l=!0):Ne.isFlagEmoji(t.substr(i,4))?f=t.substr(i,4):f=t.substr(i,2))):a>56319?(n=t.charCodeAt(i+1),Ne.isVariationSelector(a)&&(l=!0)):Ne.isZeroWidthJoiner(a)&&(l=!0,m=!0),l?(e[e.length-1]+=f,l=!1):e.push(f),i+=f.length;return e},Tt.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,i=this.data,s=[],a,n,l,m=0,f,b=i.m.g,k=0,L=0,u=0,S=[],C=0,E=0,F,x,_=e.getFontByName(t.f),d,g=0,w=Er(_);t.fWeight=w.weight,t.fStyle=w.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),n=t.finalText.length,t.finalLineHeight=t.lh;var $=t.tr/1e3*t.finalSize,I;if(t.sz)for(var O=!0,N=t.sz[0],Q=t.sz[1],K,W;O;){W=this.buildFinalText(t.t),K=0,C=0,n=W.length,$=t.tr/1e3*t.finalSize;var it=-1;for(a=0;a<n;a+=1)I=W[a].charCodeAt(0),l=!1,W[a]===" "?it=a:(I===13||I===3)&&(C=0,l=!0,K+=t.finalLineHeight||t.finalSize*1.2),e.chars?(d=e.getCharData(W[a],_.fStyle,_.fFamily),g=l?0:d.w*t.finalSize/100):g=e.measureText(W[a],t.f,t.finalSize),C+g>N&&W[a]!==" "?(it===-1?n+=1:a=it,K+=t.finalLineHeight||t.finalSize*1.2,W.splice(a,it===a?1:0,"\r"),it=-1,C=0):(C+=g,C+=$);K+=_.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&Q<K?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=W,n=t.finalText.length,O=!1)}C=-$,g=0;var G=0,V;for(a=0;a<n;a+=1)if(l=!1,V=t.finalText[a],I=V.charCodeAt(0),I===13||I===3?(G=0,S.push(C),E=C>E?C:E,C=-2*$,f="",l=!0,u+=1):f=V,e.chars?(d=e.getCharData(V,_.fStyle,e.getFontByName(t.f).fFamily),g=l?0:d.w*t.finalSize/100):g=e.measureText(f,t.f,t.finalSize),V===" "?G+=g+$:(C+=g+$+G,G=0),s.push({l:g,an:g,add:k,n:l,anIndexes:[],val:f,line:u,animatorJustifyOffset:0}),b==2){if(k+=g,f===""||f===" "||a===n-1){for((f===""||f===" ")&&(k-=g);L<=a;)s[L].an=k,s[L].ind=m,s[L].extra=g,L+=1;m+=1,k=0}}else if(b==3){if(k+=g,f===""||a===n-1){for(f===""&&(k-=g);L<=a;)s[L].an=k,s[L].ind=m,s[L].extra=g,L+=1;k=0,m+=1}}else s[m].ind=m,s[m].extra=0,m+=1;if(t.l=s,E=C>E?C:E,S.push(C),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=E,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=S;var y=i.a,P,h;x=y.length;var p,z,M=[];for(F=0;F<x;F+=1){for(P=y[F],P.a.sc&&(t.strokeColorAnim=!0),P.a.sw&&(t.strokeWidthAnim=!0),(P.a.fc||P.a.fh||P.a.fs||P.a.fb)&&(t.fillColorAnim=!0),z=0,p=P.s.b,a=0;a<n;a+=1)h=s[a],h.anIndexes[F]=z,(p==1&&h.val!==""||p==2&&h.val!==""&&h.val!==" "||p==3&&(h.n||h.val==" "||a==n-1)||p==4&&(h.n||a==n-1))&&(P.s.rn===1&&M.push(z),z+=1);i.a[F].s.totalChars=z;var H=-1,J;if(P.s.rn===1)for(a=0;a<n;a+=1)h=s[a],H!=h.anIndexes[F]&&(H=h.anIndexes[F],J=M.splice(Math.floor(Math.random()*M.length),1)[0]),h.anIndexes[F]=J}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=_.ascent*t.finalSize/100},Tt.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var i=this.copyData({},this.data.d.k[e].s);i=this.copyData(i,t),this.data.d.k[e].s=i,this.recalculate(e),this.setCurrentData(i),this.elem.addDynamicProperty(this)},Tt.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},Tt.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},Tt.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var Fa=(function(){var t=Math.max,e=Math.min,i=Math.floor;function s(n,l){this._currentTextLength=-1,this.k=!1,this.data=l,this.elem=n,this.comp=n.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(n),this.s=U.getProp(n,l.s||{k:0},0,0,this),"e"in l?this.e=U.getProp(n,l.e,0,0,this):this.e={v:100},this.o=U.getProp(n,l.o||{k:0},0,0,this),this.xe=U.getProp(n,l.xe||{k:0},0,0,this),this.ne=U.getProp(n,l.ne||{k:0},0,0,this),this.sm=U.getProp(n,l.sm||{k:100},0,0,this),this.a=U.getProp(n,l.a,0,.01,this),this.dynamicProperties.length||this.getValue()}s.prototype={getMult:function(l){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var m=0,f=0,b=1,k=1;this.ne.v>0?m=this.ne.v/100:f=-this.ne.v/100,this.xe.v>0?b=1-this.xe.v/100:k=1+this.xe.v/100;var L=di.getBezierEasing(m,f,b,k).get,u=0,S=this.finalS,C=this.finalE,E=this.data.sh;if(E===2)C===S?u=l>=C?1:0:u=t(0,e(.5/(C-S)+(l-S)/(C-S),1)),u=L(u);else if(E===3)C===S?u=l>=C?0:1:u=1-t(0,e(.5/(C-S)+(l-S)/(C-S),1)),u=L(u);else if(E===4)C===S?u=0:(u=t(0,e(.5/(C-S)+(l-S)/(C-S),1)),u<.5?u*=2:u=1-2*(u-.5)),u=L(u);else if(E===5){if(C===S)u=0;else{var F=C-S;l=e(t(0,l+.5-S),C-S);var x=-F/2+l,_=F/2;u=Math.sqrt(1-x*x/(_*_))}u=L(u)}else E===6?(C===S?u=0:(l=e(t(0,l+.5-S),C-S),u=(1+Math.cos(Math.PI+Math.PI*2*l/(C-S)))/2),u=L(u)):(l>=i(S)&&(l-S<0?u=t(0,e(e(C,1)-(S-l),1)):u=t(0,e(C-l,1))),u=L(u));if(this.sm.v!==100){var d=this.sm.v*.01;d===0&&(d=1e-8);var g=.5-d*.5;u<g?u=0:(u=(u-g)/d,u>1&&(u=1))}return u*this.a.v},getValue:function(l){this.iterateDynamicProperties(),this._mdf=l||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,l&&this.data.r===2&&(this.e.v=this._currentTextLength);var m=this.data.r===2?1:100/this.data.totalChars,f=this.o.v/m,b=this.s.v/m+f,k=this.e.v/m+f;if(b>k){var L=b;b=k,k=L}this.finalS=b,this.finalE=k}},q([wt],s);function a(n,l,m){return new s(n,l,m)}return{getTextSelectorProp:a}})();function Ia(t,e,i){var s={propType:!1},a=U.getProp,n=e.a;this.a={r:n.r?a(t,n.r,0,dt,i):s,rx:n.rx?a(t,n.rx,0,dt,i):s,ry:n.ry?a(t,n.ry,0,dt,i):s,sk:n.sk?a(t,n.sk,0,dt,i):s,sa:n.sa?a(t,n.sa,0,dt,i):s,s:n.s?a(t,n.s,1,.01,i):s,a:n.a?a(t,n.a,1,0,i):s,o:n.o?a(t,n.o,0,.01,i):s,p:n.p?a(t,n.p,1,0,i):s,sw:n.sw?a(t,n.sw,0,0,i):s,sc:n.sc?a(t,n.sc,1,0,i):s,fc:n.fc?a(t,n.fc,1,0,i):s,fh:n.fh?a(t,n.fh,0,0,i):s,fs:n.fs?a(t,n.fs,0,.01,i):s,fb:n.fb?a(t,n.fb,0,.01,i):s,t:n.t?a(t,n.t,0,0,i):s},this.s=Fa.getTextSelectorProp(t,e.s,i),this.s.t=e.s.t}function je(t,e,i){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=i,this._animatorsData=at(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(i)}je.prototype.searchProperties=function(){var t,e=this._textData.a.length,i,s=U.getProp;for(t=0;t<e;t+=1)i=this._textData.a[t],this._animatorsData[t]=new Ia(this._elem,i,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:s(this._elem,this._textData.p.a,0,0,this),f:s(this._elem,this._textData.p.f,0,0,this),l:s(this._elem,this._textData.p.l,0,0,this),r:s(this._elem,this._textData.p.r,0,0,this),p:s(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=s(this._elem,this._textData.m.a,1,0,this)},je.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var i=this._moreOptions.alignment.v,s=this._animatorsData,a=this._textData,n=this.mHelper,l=this._renderType,m=this.renderedLetters.length,f,b,k,L,u=t.l,S,C,E,F,x,_,d,g,w,$,I,O,N,Q,K;if(this._hasMaskedPath){if(K=this._pathData.m,!this._pathData.n||this._pathData._mdf){var W=K.v;this._pathData.r.v&&(W=W.reverse()),S={tLength:0,segments:[]},L=W._length-1;var it;for(O=0,k=0;k<L;k+=1)it=Jt.buildBezierData(W.v[k],W.v[k+1],[W.o[k][0]-W.v[k][0],W.o[k][1]-W.v[k][1]],[W.i[k+1][0]-W.v[k+1][0],W.i[k+1][1]-W.v[k+1][1]]),S.tLength+=it.segmentLength,S.segments.push(it),O+=it.segmentLength;k=L,K.v.c&&(it=Jt.buildBezierData(W.v[k],W.v[0],[W.o[k][0]-W.v[k][0],W.o[k][1]-W.v[k][1]],[W.i[0][0]-W.v[0][0],W.i[0][1]-W.v[0][1]]),S.tLength+=it.segmentLength,S.segments.push(it),O+=it.segmentLength),this._pathData.pi=S}if(S=this._pathData.pi,C=this._pathData.f.v,d=0,_=1,F=0,x=!0,$=S.segments,C<0&&K.v.c)for(S.tLength<Math.abs(C)&&(C=-Math.abs(C)%S.tLength),d=$.length-1,w=$[d].points,_=w.length-1;C<0;)C+=w[_].partialLength,_-=1,_<0&&(d-=1,w=$[d].points,_=w.length-1);w=$[d].points,g=w[_-1],E=w[_],I=E.partialLength}L=u.length,f=0,b=0;var G=t.finalSize*1.2*.714,V=!0,y,P,h,p,z;p=s.length;var M,H=-1,J,tt,ot,ht=C,vt=d,It=_,te=-1,Lt,xt,Nt,ct,Y,oe,xe,he,ee="",le=this.defaultPropsArray,ce;if(t.j===2||t.j===1){var zt=0,ke=0,Se=t.j===2?-.5:-1,Yt=0,Ae=!0;for(k=0;k<L;k+=1)if(u[k].n){for(zt&&(zt+=ke);Yt<k;)u[Yt].animatorJustifyOffset=zt,Yt+=1;zt=0,Ae=!0}else{for(h=0;h<p;h+=1)y=s[h].a,y.t.propType&&(Ae&&t.j===2&&(ke+=y.t.v*Se),P=s[h].s,M=P.getMult(u[k].anIndexes[h],a.a[h].s.totalChars),M.length?zt+=y.t.v*M[0]*Se:zt+=y.t.v*M*Se);Ae=!1}for(zt&&(zt+=ke);Yt<k;)u[Yt].animatorJustifyOffset=zt,Yt+=1}for(k=0;k<L;k+=1){if(n.reset(),Lt=1,u[k].n)f=0,b+=t.yOffset,b+=V?1:0,C=ht,V=!1,this._hasMaskedPath&&(d=vt,_=It,w=$[d].points,g=w[_-1],E=w[_],I=E.partialLength,F=0),ee="",he="",oe="",ce="",le=this.defaultPropsArray;else{if(this._hasMaskedPath){if(te!==u[k].line){switch(t.j){case 1:C+=O-t.lineWidths[u[k].line];break;case 2:C+=(O-t.lineWidths[u[k].line])/2;break;default:break}te=u[k].line}H!==u[k].ind&&(u[H]&&(C+=u[H].extra),C+=u[k].an/2,H=u[k].ind),C+=i[0]*u[k].an*.005;var Kt=0;for(h=0;h<p;h+=1)y=s[h].a,y.p.propType&&(P=s[h].s,M=P.getMult(u[k].anIndexes[h],a.a[h].s.totalChars),M.length?Kt+=y.p.v[0]*M[0]:Kt+=y.p.v[0]*M),y.a.propType&&(P=s[h].s,M=P.getMult(u[k].anIndexes[h],a.a[h].s.totalChars),M.length?Kt+=y.a.v[0]*M[0]:Kt+=y.a.v[0]*M);for(x=!0,this._pathData.a.v&&(C=u[0].an*.5+(O-this._pathData.f.v-u[0].an*.5-u[u.length-1].an*.5)*H/(L-1),C+=this._pathData.f.v);x;)F+I>=C+Kt||!w?(N=(C+Kt-F)/E.partialLength,tt=g.point[0]+(E.point[0]-g.point[0])*N,ot=g.point[1]+(E.point[1]-g.point[1])*N,n.translate(-i[0]*u[k].an*.005,-(i[1]*G)*.01),x=!1):w&&(F+=E.partialLength,_+=1,_>=w.length&&(_=0,d+=1,$[d]?w=$[d].points:K.v.c?(_=0,d=0,w=$[d].points):(F-=E.partialLength,w=null)),w&&(g=E,E=w[_],I=E.partialLength));J=u[k].an/2-u[k].add,n.translate(-J,0,0)}else J=u[k].an/2-u[k].add,n.translate(-J,0,0),n.translate(-i[0]*u[k].an*.005,-i[1]*G*.01,0);for(h=0;h<p;h+=1)y=s[h].a,y.t.propType&&(P=s[h].s,M=P.getMult(u[k].anIndexes[h],a.a[h].s.totalChars),(f!==0||t.j!==0)&&(this._hasMaskedPath?M.length?C+=y.t.v*M[0]:C+=y.t.v*M:M.length?f+=y.t.v*M[0]:f+=y.t.v*M));for(t.strokeWidthAnim&&(Nt=t.sw||0),t.strokeColorAnim&&(t.sc?xt=[t.sc[0],t.sc[1],t.sc[2]]:xt=[0,0,0]),t.fillColorAnim&&t.fc&&(ct=[t.fc[0],t.fc[1],t.fc[2]]),h=0;h<p;h+=1)y=s[h].a,y.a.propType&&(P=s[h].s,M=P.getMult(u[k].anIndexes[h],a.a[h].s.totalChars),M.length?n.translate(-y.a.v[0]*M[0],-y.a.v[1]*M[1],y.a.v[2]*M[2]):n.translate(-y.a.v[0]*M,-y.a.v[1]*M,y.a.v[2]*M));for(h=0;h<p;h+=1)y=s[h].a,y.s.propType&&(P=s[h].s,M=P.getMult(u[k].anIndexes[h],a.a[h].s.totalChars),M.length?n.scale(1+(y.s.v[0]-1)*M[0],1+(y.s.v[1]-1)*M[1],1):n.scale(1+(y.s.v[0]-1)*M,1+(y.s.v[1]-1)*M,1));for(h=0;h<p;h+=1){if(y=s[h].a,P=s[h].s,M=P.getMult(u[k].anIndexes[h],a.a[h].s.totalChars),y.sk.propType&&(M.length?n.skewFromAxis(-y.sk.v*M[0],y.sa.v*M[1]):n.skewFromAxis(-y.sk.v*M,y.sa.v*M)),y.r.propType&&(M.length?n.rotateZ(-y.r.v*M[2]):n.rotateZ(-y.r.v*M)),y.ry.propType&&(M.length?n.rotateY(y.ry.v*M[1]):n.rotateY(y.ry.v*M)),y.rx.propType&&(M.length?n.rotateX(y.rx.v*M[0]):n.rotateX(y.rx.v*M)),y.o.propType&&(M.length?Lt+=(y.o.v*M[0]-Lt)*M[0]:Lt+=(y.o.v*M-Lt)*M),t.strokeWidthAnim&&y.sw.propType&&(M.length?Nt+=y.sw.v*M[0]:Nt+=y.sw.v*M),t.strokeColorAnim&&y.sc.propType)for(Y=0;Y<3;Y+=1)M.length?xt[Y]+=(y.sc.v[Y]-xt[Y])*M[0]:xt[Y]+=(y.sc.v[Y]-xt[Y])*M;if(t.fillColorAnim&&t.fc){if(y.fc.propType)for(Y=0;Y<3;Y+=1)M.length?ct[Y]+=(y.fc.v[Y]-ct[Y])*M[0]:ct[Y]+=(y.fc.v[Y]-ct[Y])*M;y.fh.propType&&(M.length?ct=Qs(ct,y.fh.v*M[0]):ct=Qs(ct,y.fh.v*M)),y.fs.propType&&(M.length?ct=Zs(ct,y.fs.v*M[0]):ct=Zs(ct,y.fs.v*M)),y.fb.propType&&(M.length?ct=Js(ct,y.fb.v*M[0]):ct=Js(ct,y.fb.v*M))}}for(h=0;h<p;h+=1)y=s[h].a,y.p.propType&&(P=s[h].s,M=P.getMult(u[k].anIndexes[h],a.a[h].s.totalChars),this._hasMaskedPath?M.length?n.translate(0,y.p.v[1]*M[0],-y.p.v[2]*M[1]):n.translate(0,y.p.v[1]*M,-y.p.v[2]*M):M.length?n.translate(y.p.v[0]*M[0],y.p.v[1]*M[1],-y.p.v[2]*M[2]):n.translate(y.p.v[0]*M,y.p.v[1]*M,-y.p.v[2]*M));if(t.strokeWidthAnim&&(oe=Nt<0?0:Nt),t.strokeColorAnim&&(xe="rgb("+Math.round(xt[0]*255)+","+Math.round(xt[1]*255)+","+Math.round(xt[2]*255)+")"),t.fillColorAnim&&t.fc&&(he="rgb("+Math.round(ct[0]*255)+","+Math.round(ct[1]*255)+","+Math.round(ct[2]*255)+")"),this._hasMaskedPath){if(n.translate(0,-t.ls),n.translate(0,i[1]*G*.01+b,0),this._pathData.p.v){Q=(E.point[1]-g.point[1])/(E.point[0]-g.point[0]);var Be=Math.atan(Q)*180/Math.PI;E.point[0]<g.point[0]&&(Be+=180),n.rotate(-Be*Math.PI/180)}n.translate(tt,ot,0),C-=i[0]*u[k].an*.005,u[k+1]&&H!==u[k+1].ind&&(C+=u[k].an/2,C+=t.tr*.001*t.finalSize)}else{switch(n.translate(f,b,0),t.ps&&n.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:n.translate(u[k].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[u[k].line]),0,0);break;case 2:n.translate(u[k].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[u[k].line])/2,0,0);break;default:break}n.translate(0,-t.ls),n.translate(J,0,0),n.translate(i[0]*u[k].an*.005,i[1]*G*.01,0),f+=u[k].l+t.tr*.001*t.finalSize}l==="html"?ee=n.toCSS():l==="svg"?ee=n.to2dCSS():le=[n.props[0],n.props[1],n.props[2],n.props[3],n.props[4],n.props[5],n.props[6],n.props[7],n.props[8],n.props[9],n.props[10],n.props[11],n.props[12],n.props[13],n.props[14],n.props[15]],ce=Lt}m<=k?(z=new As(ce,oe,xe,he,ee,le),this.renderedLetters.push(z),m+=1,this.lettersChangedFlag=!0):(z=this.renderedLetters[k],this.lettersChangedFlag=z.update(ce,oe,xe,he,ee,le)||this.lettersChangedFlag)}}},je.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},je.prototype.mHelper=new At,je.prototype.defaultPropsArray=[],q([wt],je);function Ut(){}Ut.prototype.initElement=function(t,e,i){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,i),this.textProperty=new Tt(this,t.t,this.dynamicProperties),this.textAnimator=new je(t.t,this.renderType,this),this.initTransform(t,e,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Ut.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},Ut.prototype.createPathShape=function(t,e){var i,s=e.length,a,n="";for(i=0;i<s;i+=1)e[i].ty==="sh"&&(a=e[i].ks.k,n+=Dr(a,a.i.length,!0,t));return n},Ut.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},Ut.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},Ut.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},Ut.prototype.applyTextPropertiesToMatrix=function(t,e,i,s,a){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i])/2,0,0);break;default:break}e.translate(s,a,0)},Ut.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},Ut.prototype.emptyProp=new As,Ut.prototype.destroy=function(){},Ut.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var La={shapes:[]};function ne(t,e,i){this.textSpans=[],this.renderType="svg",this.initElement(t,e,i)}q([ye,ii,wi,si,_e,xi,Ut],ne),ne.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=et("text"))},ne.prototype.buildTextContents=function(t){for(var e=0,i=t.length,s=[],a="";e<i;)t[e]==="\r"||t[e]===""?(s.push(a),a=""):a+=t[e],e+=1;return s.push(a),s},ne.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var i=t.shapes[0];if(i.it){var s=i.it[i.it.length-1];s.s&&(s.s.k[0]=e,s.s.k[1]=e)}}return t},ne.prototype.buildNewText=function(){this.addDynamicProperty(this);var t,e,i=this.textProperty.currentData;this.renderedLetters=at(i?i.l.length:0),i.fc?this.layerElement.setAttribute("fill",this.buildColor(i.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),i.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(i.sc)),this.layerElement.setAttribute("stroke-width",i.sw)),this.layerElement.setAttribute("font-size",i.finalSize);var s=this.globalData.fontManager.getFontByName(i.f);if(s.fClass)this.layerElement.setAttribute("class",s.fClass);else{this.layerElement.setAttribute("font-family",s.fFamily);var a=i.fWeight,n=i.fStyle;this.layerElement.setAttribute("font-style",n),this.layerElement.setAttribute("font-weight",a)}this.layerElement.setAttribute("aria-label",i.t);var l=i.l||[],m=!!this.globalData.fontManager.chars;e=l.length;var f,b=this.mHelper,k="",L=this.data.singleShape,u=0,S=0,C=!0,E=i.tr*.001*i.finalSize;if(L&&!m&&!i.sz){var F=this.textContainer,x="start";switch(i.j){case 1:x="end";break;case 2:x="middle";break;default:x="start";break}F.setAttribute("text-anchor",x),F.setAttribute("letter-spacing",E);var _=this.buildTextContents(i.finalText);for(e=_.length,S=i.ps?i.ps[1]+i.ascent:0,t=0;t<e;t+=1)f=this.textSpans[t].span||et("tspan"),f.textContent=_[t],f.setAttribute("x",0),f.setAttribute("y",S),f.style.display="inherit",F.appendChild(f),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=f,S+=i.finalLineHeight;this.layerElement.appendChild(F)}else{var d=this.textSpans.length,g;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!m||!L||t===0){if(f=d>t?this.textSpans[t].span:et(m?"g":"text"),d<=t){if(f.setAttribute("stroke-linecap","butt"),f.setAttribute("stroke-linejoin","round"),f.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=f,m){var w=et("g");f.appendChild(w),this.textSpans[t].childSpan=w}this.textSpans[t].span=f,this.layerElement.appendChild(f)}f.style.display="inherit"}if(b.reset(),L&&(l[t].n&&(u=-E,S+=i.yOffset,S+=C?1:0,C=!1),this.applyTextPropertiesToMatrix(i,b,l[t].line,u,S),u+=l[t].l||0,u+=E),m){g=this.globalData.fontManager.getCharData(i.finalText[t],s.fStyle,this.globalData.fontManager.getFontByName(i.f).fFamily);var $;if(g.t===1)$=new Ai(g.data,this.globalData,this);else{var I=La;g.data&&g.data.shapes&&(I=this.buildShapeData(g.data,i.finalSize)),$=new mt(I,this.globalData,this)}if(this.textSpans[t].glyph){var O=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(O.layerElement),O.destroy()}this.textSpans[t].glyph=$,$._debug=!0,$.prepareFrame(0),$.renderFrame(),this.textSpans[t].childSpan.appendChild($.layerElement),g.t===1&&this.textSpans[t].childSpan.setAttribute("transform","scale("+i.finalSize/100+","+i.finalSize/100+")")}else L&&f.setAttribute("transform","translate("+b.props[12]+","+b.props[13]+")"),f.textContent=l[t].val,f.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}L&&f&&f.setAttribute("d",k)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},ne.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},ne.prototype.getValue=function(){var t,e=this.textSpans.length,i;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<e;t+=1)i=this.textSpans[t].glyph,i&&(i.prepareFrame(this.comp.renderedFrame-this.data.st),i._mdf&&(this._mdf=!0))},ne.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,i=this.textAnimator.renderedLetters,s=this.textProperty.currentData.l;e=s.length;var a,n,l;for(t=0;t<e;t+=1)s[t].n||(a=i[t],n=this.textSpans[t].span,l=this.textSpans[t].glyph,l&&l.renderFrame(),a._mdf.m&&n.setAttribute("transform",a.m),a._mdf.o&&n.setAttribute("opacity",a.o),a._mdf.sw&&n.setAttribute("stroke-width",a.sw),a._mdf.sc&&n.setAttribute("stroke",a.sc),a._mdf.fc&&n.setAttribute("fill",a.fc))}};function Es(t,e,i){this.initElement(t,e,i)}q([ki],Es),Es.prototype.createContent=function(){var t=et("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function we(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initFrame(),this.initTransform(t,e,i),this.initHierarchy()}we.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},we.prototype.renderFrame=function(){},we.prototype.getBaseElement=function(){return null},we.prototype.destroy=function(){},we.prototype.sourceRectAtTime=function(){},we.prototype.hide=function(){},q([ye,ii,si,_e],we);function yt(){}q([Et],yt),yt.prototype.createNull=function(t){return new we(t,this.globalData,this)},yt.prototype.createShape=function(t){return new mt(t,this.globalData,this)},yt.prototype.createText=function(t){return new ne(t,this.globalData,this)},yt.prototype.createImage=function(t){return new ki(t,this.globalData,this)},yt.prototype.createSolid=function(t){return new Es(t,this.globalData,this)},yt.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var i=et("clipPath"),s=et("rect");s.setAttribute("width",t.w),s.setAttribute("height",t.h),s.setAttribute("x",0),s.setAttribute("y",0);var a=Mt();i.setAttribute("id",a),i.appendChild(s),this.layerElement.setAttribute("clip-path","url("+B()+"#"+a+")"),e.appendChild(i),this.layers=t.layers,this.elements=at(t.layers.length)},yt.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},yt.prototype.updateContainerSize=function(){},yt.prototype.findIndexByInd=function(t){var e=0,i=this.layers.length;for(e=0;e<i;e+=1)if(this.layers[e].ind===t)return e;return-1},yt.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var i=this.createItem(this.layers[t]);if(e[t]=i,Oi()&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(i),i.initExpressions()),this.appendElementInPos(i,t),this.layers[t].tt){var s="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(s===-1)return;if(!this.elements[s]||this.elements[s]===!0)this.buildItem(s),this.addPendingElement(i);else{var a=e[s],n=a.getMatte(this.layers[t].tt);i.setMatte(n)}}}},yt.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,i=this.elements.length;e<i;){if(this.elements[e]===t){var s="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,a=this.elements[s],n=a.getMatte(this.layers[e].tt);t.setMatte(n);break}e+=1}}},yt.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,i=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=i-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<i;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},yt.prototype.appendElementInPos=function(t,e){var i=t.getBaseElement();if(i){for(var s=0,a;s<e;)this.elements[s]&&this.elements[s]!==!0&&this.elements[s].getBaseElement()&&(a=this.elements[s].getBaseElement()),s+=1;a?this.layerElement.insertBefore(i,a):this.layerElement.appendChild(i)}},yt.prototype.hide=function(){this.layerElement.style.display="none"},yt.prototype.show=function(){this.layerElement.style.display="block"};function ae(){}q([ye,ii,si,_e,xi],ae),ae.prototype.initElement=function(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initTransform(t,e,i),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},ae.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var i,s=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),i=s-1;i>=0;i-=1)(this.completeLayers||this.elements[i])&&(this.elements[i].prepareFrame(this.renderedFrame-this.layers[i].st),this.elements[i]._mdf&&(this._mdf=!0))}},ae.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ae.prototype.setElements=function(t){this.elements=t},ae.prototype.getElements=function(){return this.elements},ae.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ae.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function Ai(t,e,i){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?at(this.layers.length):[],this.initElement(t,e,i),this.tm=t.tm?U.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}q([yt,ae,wi],Ai),Ai.prototype.createComp=function(t){return new Ai(t,this.globalData,this)};function Ps(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=et("svg");var i="";if(e&&e.title){var s=et("title"),a=Mt();s.setAttribute("id",a),s.textContent=e.title,this.svgElement.appendChild(s),i+=a}if(e&&e.description){var n=et("desc"),l=Mt();n.setAttribute("id",l),n.textContent=e.description,this.svgElement.appendChild(n),i+=" "+l}i&&this.svgElement.setAttribute("aria-labelledby",i);var m=et("defs");this.svgElement.appendChild(m);var f=et("g");this.svgElement.appendChild(f),this.layerElement=f,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:m,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}return q([yt],Ps),Ps.prototype.createComp=function(t){return new Ai(t,this.globalData,this)},Un("svg",Ps),ge.registerModifier("tm",Gt),ge.registerModifier("pb",ui),ge.registerModifier("rp",Qt),ge.registerModifier("rd",mi),ge.registerModifier("zz",vi),ge.registerModifier("op",yi),lt}))});var Pt="ecoflow-energy-card",ie="ecoflow-house-card",ni="ecoflow_iot",Ee="/ecoflow_iot";var ts=globalThis,es=ts.ShadowRoot&&(ts.ShadyCSS===void 0||ts.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cs=Symbol(),Br=new WeakMap,Ei=class{constructor(r,o,c){if(this._$cssResult$=!0,c!==Cs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=o}get styleSheet(){let r=this.o,o=this.t;if(es&&r===void 0){let c=o!==void 0&&o.length===1;c&&(r=Br.get(o)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),c&&Br.set(o,r))}return r}toString(){return this.cssText}},Wr=A=>new Ei(typeof A=="string"?A:A+"",void 0,Cs),fe=(A,...r)=>{let o=A.length===1?A[0]:r.reduce((c,v,T)=>c+(R=>{if(R._$cssResult$===!0)return R.cssText;if(typeof R=="number")return R;throw Error("Value passed to 'css' function must be a 'css' function result: "+R+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(v)+A[T+1],A[0]);return new Ei(o,A,Cs)},Ur=(A,r)=>{if(es)A.adoptedStyleSheets=r.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of r){let c=document.createElement("style"),v=ts.litNonce;v!==void 0&&c.setAttribute("nonce",v),c.textContent=o.cssText,A.appendChild(c)}},$s=es?A=>A:A=>A instanceof CSSStyleSheet?(r=>{let o="";for(let c of r.cssRules)o+=c.cssText;return Wr(o)})(A):A;var{is:Wa,defineProperty:Ua,getOwnPropertyDescriptor:Ha,getOwnPropertyNames:qa,getOwnPropertySymbols:Ga,getPrototypeOf:Ya}=Object,is=globalThis,Hr=is.trustedTypes,Ka=Hr?Hr.emptyScript:"",Xa=is.reactiveElementPolyfillSupport,Pi=(A,r)=>A,Ts={toAttribute(A,r){switch(r){case Boolean:A=A?Ka:null;break;case Object:case Array:A=A==null?A:JSON.stringify(A)}return A},fromAttribute(A,r){let o=A;switch(r){case Boolean:o=A!==null;break;case Number:o=A===null?null:Number(A);break;case Object:case Array:try{o=JSON.parse(A)}catch{o=null}}return o}},Gr=(A,r)=>!Wa(A,r),qr={attribute:!0,type:String,converter:Ts,reflect:!1,useDefault:!1,hasChanged:Gr};Symbol.metadata??=Symbol("metadata"),is.litPropertyMetadata??=new WeakMap;var pe=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,o=qr){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(r,o),!o.noAccessor){let c=Symbol(),v=this.getPropertyDescriptor(r,c,o);v!==void 0&&Ua(this.prototype,r,v)}}static getPropertyDescriptor(r,o,c){let{get:v,set:T}=Ha(this.prototype,r)??{get(){return this[o]},set(R){this[o]=R}};return{get:v,set(R){let B=v?.call(this);T?.call(this,R),this.requestUpdate(r,B,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??qr}static _$Ei(){if(this.hasOwnProperty(Pi("elementProperties")))return;let r=Ya(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Pi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pi("properties"))){let o=this.properties,c=[...qa(o),...Ga(o)];for(let v of c)this.createProperty(v,o[v])}let r=this[Symbol.metadata];if(r!==null){let o=litPropertyMetadata.get(r);if(o!==void 0)for(let[c,v]of o)this.elementProperties.set(c,v)}this._$Eh=new Map;for(let[o,c]of this.elementProperties){let v=this._$Eu(o,c);v!==void 0&&this._$Eh.set(v,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){let o=[];if(Array.isArray(r)){let c=new Set(r.flat(1/0).reverse());for(let v of c)o.unshift($s(v))}else r!==void 0&&o.push($s(r));return o}static _$Eu(r,o){let c=o.attribute;return c===!1?void 0:typeof c=="string"?c:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){let r=new Map,o=this.constructor.elementProperties;for(let c of o.keys())this.hasOwnProperty(c)&&(r.set(c,this[c]),delete this[c]);r.size>0&&(this._$Ep=r)}createRenderRoot(){let r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ur(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,o,c){this._$AK(r,c)}_$ET(r,o){let c=this.constructor.elementProperties.get(r),v=this.constructor._$Eu(r,c);if(v!==void 0&&c.reflect===!0){let T=(c.converter?.toAttribute!==void 0?c.converter:Ts).toAttribute(o,c.type);this._$Em=r,T==null?this.removeAttribute(v):this.setAttribute(v,T),this._$Em=null}}_$AK(r,o){let c=this.constructor,v=c._$Eh.get(r);if(v!==void 0&&this._$Em!==v){let T=c.getPropertyOptions(v),R=typeof T.converter=="function"?{fromAttribute:T.converter}:T.converter?.fromAttribute!==void 0?T.converter:Ts;this._$Em=v;let B=R.fromAttribute(o,T.type);this[v]=B??this._$Ej?.get(v)??B,this._$Em=null}}requestUpdate(r,o,c,v=!1,T){if(r!==void 0){let R=this.constructor;if(v===!1&&(T=this[r]),c??=R.getPropertyOptions(r),!((c.hasChanged??Gr)(T,o)||c.useDefault&&c.reflect&&T===this._$Ej?.get(r)&&!this.hasAttribute(R._$Eu(r,c))))return;this.C(r,o,c)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,o,{useDefault:c,reflect:v,wrapped:T},R){c&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,R??o??this[r]),T!==!0||R!==void 0)||(this._$AL.has(r)||(this.hasUpdated||c||(o=void 0),this._$AL.set(r,o)),v===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[v,T]of this._$Ep)this[v]=T;this._$Ep=void 0}let c=this.constructor.elementProperties;if(c.size>0)for(let[v,T]of c){let{wrapped:R}=T,B=this[v];R!==!0||this._$AL.has(v)||B===void 0||this.C(v,void 0,T,B)}}let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),this._$EO?.forEach(c=>c.hostUpdate?.()),this.update(o)):this._$EM()}catch(c){throw r=!1,this._$EM(),c}r&&this._$AE(o)}willUpdate(r){}_$AE(r){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(o=>this._$ET(o,this[o])),this._$EM()}updated(r){}firstUpdated(r){}};pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},pe[Pi("elementProperties")]=new Map,pe[Pi("finalized")]=new Map,Xa?.({ReactiveElement:pe}),(is.reactiveElementVersions??=[]).push("2.1.2");var Rs=globalThis,Yr=A=>A,ss=Rs.trustedTypes,Kr=ss?ss.createPolicy("lit-html",{createHTML:A=>A}):void 0,en="$lit$",Pe=`lit$${Math.random().toFixed(9).slice(2)}$`,sn="?"+Pe,Za=`<${sn}>`,He=document,$i=()=>He.createComment(""),Ti=A=>A===null||typeof A!="object"&&typeof A!="function",Vs=Array.isArray,Ja=A=>Vs(A)||typeof A?.[Symbol.iterator]=="function",Ms=`[ 	
\f\r]`,Ci=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xr=/-->/g,Zr=/>/g,We=RegExp(`>|${Ms}(?:([^\\s"'>=/]+)(${Ms}*=${Ms}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jr=/'/g,Qr=/"/g,rn=/^(?:script|style|textarea|title)$/i,Ns=A=>(r,...o)=>({_$litType$:A,strings:r,values:o}),D=Ns(1),Dt=Ns(2),Mo=Ns(3),qe=Symbol.for("lit-noChange"),_t=Symbol.for("lit-nothing"),tn=new WeakMap,Ue=He.createTreeWalker(He,129);function nn(A,r){if(!Vs(A)||!A.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kr!==void 0?Kr.createHTML(r):r}var Qa=(A,r)=>{let o=A.length-1,c=[],v,T=r===2?"<svg>":r===3?"<math>":"",R=Ci;for(let B=0;B<o;B++){let j=A[B],q,nt,rt=-1,ft=0;for(;ft<j.length&&(R.lastIndex=ft,nt=R.exec(j),nt!==null);)ft=R.lastIndex,R===Ci?nt[1]==="!--"?R=Xr:nt[1]!==void 0?R=Zr:nt[2]!==void 0?(rn.test(nt[2])&&(v=RegExp("</"+nt[2],"g")),R=We):nt[3]!==void 0&&(R=We):R===We?nt[0]===">"?(R=v??Ci,rt=-1):nt[1]===void 0?rt=-2:(rt=R.lastIndex-nt[2].length,q=nt[1],R=nt[3]===void 0?We:nt[3]==='"'?Qr:Jr):R===Qr||R===Jr?R=We:R===Xr||R===Zr?R=Ci:(R=We,v=void 0);let st=R===We&&A[B+1].startsWith("/>")?" ":"";T+=R===Ci?j+Za:rt>=0?(c.push(q),j.slice(0,rt)+en+j.slice(rt)+Pe+st):j+Pe+(rt===-2?B:st)}return[nn(A,T+(A[o]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),c]},Mi=class A{constructor({strings:r,_$litType$:o},c){let v;this.parts=[];let T=0,R=0,B=r.length-1,j=this.parts,[q,nt]=Qa(r,o);if(this.el=A.createElement(q,c),Ue.currentNode=this.el.content,o===2||o===3){let rt=this.el.content.firstChild;rt.replaceWith(...rt.childNodes)}for(;(v=Ue.nextNode())!==null&&j.length<B;){if(v.nodeType===1){if(v.hasAttributes())for(let rt of v.getAttributeNames())if(rt.endsWith(en)){let ft=nt[R++],st=v.getAttribute(rt).split(Pe),at=/([.?@])?(.*)/.exec(ft);j.push({type:1,index:T,name:at[2],strings:st,ctor:at[1]==="."?Is:at[1]==="?"?Ls:at[1]==="@"?zs:oi}),v.removeAttribute(rt)}else rt.startsWith(Pe)&&(j.push({type:6,index:T}),v.removeAttribute(rt));if(rn.test(v.tagName)){let rt=v.textContent.split(Pe),ft=rt.length-1;if(ft>0){v.textContent=ss?ss.emptyScript:"";for(let st=0;st<ft;st++)v.append(rt[st],$i()),Ue.nextNode(),j.push({type:2,index:++T});v.append(rt[ft],$i())}}}else if(v.nodeType===8)if(v.data===sn)j.push({type:2,index:T});else{let rt=-1;for(;(rt=v.data.indexOf(Pe,rt+1))!==-1;)j.push({type:7,index:T}),rt+=Pe.length-1}T++}}static createElement(r,o){let c=He.createElement("template");return c.innerHTML=r,c}};function ai(A,r,o=A,c){if(r===qe)return r;let v=c!==void 0?o._$Co?.[c]:o._$Cl,T=Ti(r)?void 0:r._$litDirective$;return v?.constructor!==T&&(v?._$AO?.(!1),T===void 0?v=void 0:(v=new T(A),v._$AT(A,o,c)),c!==void 0?(o._$Co??=[])[c]=v:o._$Cl=v),v!==void 0&&(r=ai(A,v._$AS(A,r.values),v,c)),r}var Fs=class{constructor(r,o){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){let{el:{content:o},parts:c}=this._$AD,v=(r?.creationScope??He).importNode(o,!0);Ue.currentNode=v;let T=Ue.nextNode(),R=0,B=0,j=c[0];for(;j!==void 0;){if(R===j.index){let q;j.type===2?q=new Fi(T,T.nextSibling,this,r):j.type===1?q=new j.ctor(T,j.name,j.strings,this,r):j.type===6&&(q=new Os(T,this,r)),this._$AV.push(q),j=c[++B]}R!==j?.index&&(T=Ue.nextNode(),R++)}return Ue.currentNode=He,v}p(r){let o=0;for(let c of this._$AV)c!==void 0&&(c.strings!==void 0?(c._$AI(r,c,o),o+=c.strings.length-2):c._$AI(r[o])),o++}},Fi=class A{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,o,c,v){this.type=2,this._$AH=_t,this._$AN=void 0,this._$AA=r,this._$AB=o,this._$AM=c,this.options=v,this._$Cv=v?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode,o=this._$AM;return o!==void 0&&r?.nodeType===11&&(r=o.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,o=this){r=ai(this,r,o),Ti(r)?r===_t||r==null||r===""?(this._$AH!==_t&&this._$AR(),this._$AH=_t):r!==this._$AH&&r!==qe&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Ja(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==_t&&Ti(this._$AH)?this._$AA.nextSibling.data=r:this.T(He.createTextNode(r)),this._$AH=r}$(r){let{values:o,_$litType$:c}=r,v=typeof c=="number"?this._$AC(r):(c.el===void 0&&(c.el=Mi.createElement(nn(c.h,c.h[0]),this.options)),c);if(this._$AH?._$AD===v)this._$AH.p(o);else{let T=new Fs(v,this),R=T.u(this.options);T.p(o),this.T(R),this._$AH=T}}_$AC(r){let o=tn.get(r.strings);return o===void 0&&tn.set(r.strings,o=new Mi(r)),o}k(r){Vs(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,c,v=0;for(let T of r)v===o.length?o.push(c=new A(this.O($i()),this.O($i()),this,this.options)):c=o[v],c._$AI(T),v++;v<o.length&&(this._$AR(c&&c._$AB.nextSibling,v),o.length=v)}_$AR(r=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);r!==this._$AB;){let c=Yr(r).nextSibling;Yr(r).remove(),r=c}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}},oi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,o,c,v,T){this.type=1,this._$AH=_t,this._$AN=void 0,this.element=r,this.name=o,this._$AM=v,this.options=T,c.length>2||c[0]!==""||c[1]!==""?(this._$AH=Array(c.length-1).fill(new String),this.strings=c):this._$AH=_t}_$AI(r,o=this,c,v){let T=this.strings,R=!1;if(T===void 0)r=ai(this,r,o,0),R=!Ti(r)||r!==this._$AH&&r!==qe,R&&(this._$AH=r);else{let B=r,j,q;for(r=T[0],j=0;j<T.length-1;j++)q=ai(this,B[c+j],o,j),q===qe&&(q=this._$AH[j]),R||=!Ti(q)||q!==this._$AH[j],q===_t?r=_t:r!==_t&&(r+=(q??"")+T[j+1]),this._$AH[j]=q}R&&!v&&this.j(r)}j(r){r===_t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}},Is=class extends oi{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===_t?void 0:r}},Ls=class extends oi{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==_t)}},zs=class extends oi{constructor(r,o,c,v,T){super(r,o,c,v,T),this.type=5}_$AI(r,o=this){if((r=ai(this,r,o,0)??_t)===qe)return;let c=this._$AH,v=r===_t&&c!==_t||r.capture!==c.capture||r.once!==c.once||r.passive!==c.passive,T=r!==_t&&(c===_t||v);v&&this.element.removeEventListener(this.name,this,c),T&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}},Os=class{constructor(r,o,c){this.element=r,this.type=6,this._$AN=void 0,this._$AM=o,this.options=c}get _$AU(){return this._$AM._$AU}_$AI(r){ai(this,r)}};var to=Rs.litHtmlPolyfillSupport;to?.(Mi,Fi),(Rs.litHtmlVersions??=[]).push("3.3.3");var an=(A,r,o)=>{let c=o?.renderBefore??r,v=c._$litPart$;if(v===void 0){let T=o?.renderBefore??null;c._$litPart$=v=new Fi(r.insertBefore($i(),T),T,void 0,o??{})}return v._$AI(A),v};var Ds=globalThis,Ot=class extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=an(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qe}};Ot._$litElement$=!0,Ot.finalized=!0,Ds.litElementHydrateSupport?.({LitElement:Ot});var eo=Ds.litElementPolyfillSupport;eo?.({LitElement:Ot});(Ds.litElementVersions??=[]).push("4.2.2");var rs=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function hi(A){return rs.some(r=>r.key===A)?`${Ee}/devices/${A}.png`:null}function Ge(A){return typeof A=="string"&&A.startsWith(Ee)&&A.endsWith(".png")?`${A.slice(0,-4)}.webp`:null}function on(A){let r=io(A);return r?hi(r):null}function io(A){if(!A)return null;let r=rs.find(o=>o.match&&o.match.test(A));return r?r.key:null}var so={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","sys_load","sys_grid_power","load_from_pv","load_from_grid","load_from_bat","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power","soh","bat_temp","chg_rem_time","dsg_rem_time","full_energy","cycles","calendar_soh"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function ro(A){return Object.values(A.entities||{}).filter(r=>r.platform===ni)}function no(A){if(A.translation_key)return A.translation_key;let r=A.entity_id.split(".")[1],o=r.lastIndexOf("_");return o>=0?r.slice(o+1):r}function Ce(A){let r=new Map;for(let c of ro(A))c.device_id&&(r.has(c.device_id)||r.set(c.device_id,[]),r.get(c.device_id).push(c));let o=[];for(let[c,v]of r)v.some(T=>no(T)==="pv_total")&&o.push({deviceId:c,device:A.devices?.[c],ents:v});return o}function $e(A,r){let o={};for(let c of r){let[v]=c.entity_id.split("."),T=c.translation_key;T&&(so[v]||[]).includes(T)&&(o[`${v}.${T}`]=c.entity_id)}if(!o["sensor.cms_batt_soc"])for(let c of r){if(!c.entity_id.startsWith("sensor."))continue;let v=A.states?.[c.entity_id];if(v?.attributes?.device_class==="battery"&&v?.attributes?.unit_of_measurement==="%"){o["sensor.cms_batt_soc"]=c.entity_id;break}}return o}async function js(A){if(!A?.callWS)return{};try{return await A.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function hn(A){let r=await js(A),o=Object.keys(r);if(!o.length)return[];let c=[];try{c=await A.callWS({type:"config_entries/get"})||[]}catch{c=[]}let v=new Map(c.map(T=>[T.entry_id,T]));return o.map(T=>({id:T,title:v.get(T)?.title||v.get(T)?.domain||T,domain:v.get(T)?.domain||""}))}function ln(A,r){let o=r===void 0?Object.keys(A||{}):r,c={};for(let v of o){let T=A?.[v]?.wh_hours;if(T)for(let[R,B]of Object.entries(T)){let j=Number(B);Number.isFinite(j)&&(c[R]=(c[R]||0)+j)}}return c}function Bs(A,r=new Date){let o=r.getFullYear(),c=r.getMonth(),v=r.getDate(),T={};for(let[R,B]of Object.entries(A||{})){let j=new Date(R);Number.isNaN(j.getTime())||j.getFullYear()===o&&j.getMonth()===c&&j.getDate()===v&&(T[j.getHours()]=(T[j.getHours()]||0)+B)}return T}function Ws(A,r=new Date){let o=Bs(A,r),c=Object.keys(o);return c.length?c.reduce((v,T)=>v+o[T],0):null}async function cn(A,r,o,c){if(!A?.callWS||!r)return null;let v=new Date,R={type:"recorder/statistics_during_period",start_time:(o instanceof Date?o:new Date(v.getFullYear(),v.getMonth(),v.getDate())).toISOString(),statistic_ids:[r],period:"hour",types:["change"]};c instanceof Date&&(R.end_time=c.toISOString());try{let j=(await A.callWS(R))?.[r];if(!Array.isArray(j))return null;let q={};for(let nt of j){let rt=new Date(nt.start),ft=Number(nt.change);Number.isNaN(rt.getTime())||!Number.isFinite(ft)||(q[rt.getHours()]=(q[rt.getHours()]||0)+ft)}return q}catch{return null}}function Ct(A){return typeof A=="string"&&/\{[{%]/.test(A)}function jt(A){return typeof A=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(A)}function pt(A){let r=Number(A?.state);return Number.isFinite(r)?r:null}function de(A){return A==null||!Number.isFinite(A)?null:Math.abs(A)>=1e3?`${(A/1e3).toFixed(2)} kW`:`${Math.round(A)} W`}function Ye(A){return A==null||!Number.isFinite(A)?{n:"\u2013",u:"W"}:Math.abs(A)>=1e3?{n:(A/1e3).toFixed(2),u:"kW"}:{n:String(Math.round(A)),u:"W"}}function fn(A){return{n:A!=null&&Number.isFinite(A)?A.toFixed(1):"\u2013",u:"kWh"}}function Us(A,r=1){return A==null||!Number.isFinite(A)?null:Math.abs(A)>=1e3?`${(A/1e3).toFixed(r)} kWh`:`${Math.round(A)} Wh`}function pn(A){if(A==null||!Number.isFinite(A))return null;let r=Math.round(A);if(r<60)return`${r} min`;let o=Math.floor(r/60);if(o<24){let T=r%60;return T?`${o} h ${T} min`:`${o} h`}let c=Math.floor(o/24),v=o%24;return v?`${c} d ${v} h`:`${c} d`}var dn=!1;async function Te(){if(!dn){dn=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var un={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off",confirm_action:"Are you sure?"},house:{home:"Home",grid:"Grid",from_grid:"From grid",to_grid:"To grid",idle:"Idle",mode:{auto:"Automatic",day:"Day",night:"Night"},toggle:{show_flows:"Animate energy flows",show_grid:"Show grid power",show_solar:"Show solar power",show_home:"Show home consumption",show_battery:"Show battery"},editor:{style:"House style",style_n:"House {n}",mode:"Day / night",entities:"Entities",entities_hint:"Override the auto-detected sensors that drive the scene. Leave empty to use the integration's defaults."}},battery:{title:"Battery",idle:"Idle",health:"Health",calendar_health:"Calendar health",temperature:"Temperature",time_to_full:"Time to full",time_to_empty:"Time to empty",capacity:"Capacity",cycles:"Cycles"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today.",stats_default:"Default (Solar, Grid)",stats_count:"{n} tiles",stats_default_hint:"The card shows live Solar and Grid power. Customize to show any entities you like instead, each with its own tap action.",stats_customize:"Customize tiles",stats_hint:"Add the entities to show as stat tiles. Set a name and icon, and choose what happens on tap (more-info by default).",stats_add:"Add tile",stats_reset:"Reset to default",stats_remove:"Remove",stats_move_up:"Move up",stats_move_down:"Move down",stat_n:"Tile {n}",stat_field_entity:"Entity",stat_field_name:"Name",stat_field_icon:"Icon",stat_field_tap_action:"Tap action"},page:{appearance:"Appearance",entities:"Entities",stats:"Stat tiles",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",sys_grid_power:"Grid power (whole system)",sys_load:"Home consumption",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}}};var mn={card:{no_device:"Kein EcoFlow Stream-Ger\xE4t gefunden. Richten Sie zuerst die EcoFlow IoT-Integration ein.",device:"EcoFlow Stream",solar:"Solar",grid:"Netz",grid_import:"Bezug",grid_export:"Einspeisung",grid_idle:"Netz inaktiv",battery:"Batterie",charging:"L\xE4dt",discharging:"Entl\xE4dt",today:"Solar heute",produced:"erzeugt",forecast:"Prognose",of_forecast:"{pct}% der Prognose",exceeded:"Prognose erreicht",reserve:"Reserve",charge_limit:"Laden \u2264",discharge_limit:"Entladen \u2265",ac1:"AC 1",ac2:"AC 2",off:"Aus",confirm_action:"Sind Sie sicher?"},house:{home:"Hausnetz",grid:"Netz",from_grid:"Vom Netz",to_grid:"Ins Netz",idle:"Bereit",mode:{auto:"Automatisch",day:"Tag",night:"Nacht"},toggle:{show_flows:"Energiefl\xFCsse animieren",show_grid:"Netzleistung anzeigen",show_solar:"Solarleistung anzeigen",show_home:"Hausverbrauch anzeigen",show_battery:"Batterie anzeigen"},editor:{style:"Haus-Stil",style_n:"Haus {n}",mode:"Tag / Nacht",entities:"Entit\xE4ten",entities_hint:"\xDCberschreiben Sie die automatisch erkannten Sensoren, die die Darstellung steuern. Leer lassen, um die Standardwerte der Integration zu verwenden."}},battery:{title:"Batterie",idle:"Inaktiv",health:"Zustand",calendar_health:"Kalenderzustand",temperature:"Temperatur",time_to_full:"Zeit bis voll",time_to_empty:"Zeit bis leer",capacity:"Kapazit\xE4t",cycles:"Zyklen"},confirm:{title:"Steckdose ausschalten?",ac_off:"{name} ausschalten? Alles, was daran angeschlossen ist, verliert die Stromversorgung.",cancel:"Abbrechen",turn_off:"Ausschalten"},panels:{title:"Solarmodule",panel:"Modul {n}",total:"Gesamt",none:"F\xFCr dieses Ger\xE4t sind keine Daten je Solarmodul verf\xFCgbar."},editor:{device:"EcoFlow-Ger\xE4t",automatic:"Automatisch",image:"Ger\xE4tebild",entity:"Entit\xE4t",value_template:"Wert / Vorlage",mode_auto:"Auto",mode_entity:"Entit\xE4t",mode_custom:"Benutzerdefiniert",auto_value:"Automatisch erkannt: {value}",not_found:"nicht gefunden",overridden:"{n} \xFCberschrieben",shown:"Angezeigt",nothing_shown:"Nichts angezeigt",panel:"Modul {n}",panel_name:"Modulname",panel_entity:"Leistungssensor",panel_hidden:"Auf der Karte ausgeblendet.",panels_hint:"Benennen Sie ein Modul um, weisen Sie ihm einen anderen Sensor zu oder blenden Sie es aus der Aufschl\xFCsselung aus. Mit dem Schalter zeigen oder verbergen Sie jedes Modul.",panels_count:"{n} Module",panels_hidden:"{n} ausgeblendet",loading:"L\xE4dt\u2026",forecast_hint:"W\xE4hlen Sie, welche Solarprognose-Anbieter verwendet werden \u2014 dieselben, die im Energie-Dashboard von Home Assistant eingerichtet sind (Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule).",forecast_none:"Keine Solarprognose konfiguriert. F\xFCgen Sie unter Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule eine Prognose hinzu, dann erscheint sie hier.",forecast_none_short:"Nicht konfiguriert",forecast_selected:"{n} von {total} Anbietern",none:"Nicht festgelegt",collection_key:"Energie-Sammlungsschl\xFCssel",collection_hint:"Optional. Um einem in einer Energie-Zeitraumauswahl-Karte gew\xE4hlten Datum zu folgen (Energie-Datumsauswahl), geben Sie hier denselben Sammlungsschl\xFCssel ein wie auf jener Karte \u2014 er beginnt mit \u201Eenergy_\u201C; verwenden Sie \u201Eenergy\u201C f\xFCr eine Auswahl, die auf ihrem Standardschl\xFCssel belassen wurde. Leer lassen, um immer heute anzuzeigen.",stats_default:"Standard (Solar, Netz)",stats_count:"{n} Kacheln",stats_default_hint:"Die Karte zeigt die aktuelle Solar- und Netzleistung. Passen Sie sie an, um stattdessen beliebige Entit\xE4ten anzuzeigen \u2014 jede mit eigener Tipp-Aktion.",stats_customize:"Kacheln anpassen",stats_hint:"F\xFCgen Sie die Entit\xE4ten hinzu, die als Kacheln angezeigt werden sollen. Legen Sie Name und Symbol fest und w\xE4hlen Sie, was beim Tippen passiert (standardm\xE4\xDFig Info-Dialog).",stats_add:"Kachel hinzuf\xFCgen",stats_reset:"Auf Standard zur\xFCcksetzen",stats_remove:"Entfernen",stats_move_up:"Nach oben",stats_move_down:"Nach unten",stat_n:"Kachel {n}",stat_field_entity:"Entit\xE4t",stat_field_name:"Name",stat_field_icon:"Symbol",stat_field_tap_action:"Tipp-Aktion"},page:{appearance:"Darstellung",entities:"Entit\xE4ten",stats:"Kacheln",panels:"Solarmodule",forecast:"Solarprognose",advanced:"Erweitert"},toggle:{show_image:"Ger\xE4tebild anzeigen",show_today:"Heutige Erzeugung anzeigen",show_grid:"Netzleistung anzeigen",show_ac:"AC-Steckdosen anzeigen",show_panels:"F\xFCr Aufschl\xFCsselung je Modul auf Solarleistung tippen",show_forecast:"Heutige Erzeugung mit der Prognose vergleichen"},short:{show_image:"Bild",show_today:"Heute",show_grid:"Netz",show_ac:"AC-Steckdosen",show_panels:"Module",show_forecast:"Prognose"},slot:{sensor:{cms_batt_soc:"Batteriestand",bat_power:"Batterieleistung (Lade-/Entladegeschwindigkeit)",pv_total:"Solarleistung",grid_power:"Netzleistung",sys_grid_power:"Netzleistung (Gesamtsystem)",sys_load:"Hausverbrauch",solar_energy:"Solarenergie (Quelle f\xFCr Tagessumme)",pv1_power:"Solarmodul 1",pv2_power:"Solarmodul 2",pv3_power:"Solarmodul 3",pv4_power:"Solarmodul 4",schuko1_power:"AC-Steckdose 1 Leistung",schuko2_power:"AC-Steckdose 2 Leistung",forecast_today:"Prognose-Entit\xE4t (erwartete Erzeugung heute)"},number:{max_charge_soc:"Ladelimit",min_discharge_soc:"Entladelimit",backup_reserve:"Notstromreserve"},switch:{ac1:"AC-Steckdose 1",ac2:"AC-Steckdose 2"}}};var Hs={en:un,de:mn};function ho(A){return(A?.locale?.language||A?.language||"en").split("-")[0]}function gn(A,r){let o=r.split(".").reduce((c,v)=>c?.[v],A);return typeof o=="string"?o:void 0}function Ht(A,r,o={}){let c=Hs[ho(A)]||Hs.en,v=gn(c,r)??gn(Hs.en,r)??r;for(let[T,R]of Object.entries(o))v=v.replace(`{${T}}`,R);return v}var vn=fe`
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
`;function qs(A){let r=[];for(let o=1;o<=4;o++){let c=A._config.panels?.[o]||{};if(c.hidden)continue;let v=`sensor.pv${o}_power`,T=A._state(v);T&&r.push({i:o,watts:pt(T),id:A._entityId(v),name:c.name||null})}return r}function yn(A){let r=(T,R)=>Ht(A.hass,T,R),o=qs(A);if(!o.length)return D`<div class="empty">${r("panels.none")}</div>`;let c=Math.max(1,...o.map(T=>T.watts||0)),v=o.reduce((T,R)=>T+(R.watts||0),0);return D`<div class="panels">
    ${o.map(T=>D`<div
        class="panel-row clickable"
        @click=${()=>A._moreInfoId(T.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${T.name||r("panels.panel",{n:T.i})}
          </span>
          <span class="panel-val">${de(T.watts)??"\u2013"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,(T.watts||0)/c*100)}%"
          ></div>
        </div>
      </div>`)}
    <div class="panel-total">
      <span>${r("panels.total")}</span>
      <span>${de(v)??"\u2013"}</span>
    </div>
  </div>`}var ns=1e3,Gs=340,kt={l:46,r:14,t:16,b:28};function bn(A,{actual:r,forecast:o,totalWh:c,forecastWh:v,currentHour:T,showForecast:R,title:B}){let j=(X,bt)=>Ht(A.hass,X,bt),q=ns-kt.l-kt.r,nt=Gs-kt.t-kt.b,rt=q/24,ft=X=>kt.l+X/24*q,st=0;for(let X=0;X<24;X++)st=Math.max(st,(r[X]||0)/1e3),R&&(st=Math.max(st,(o[X]||0)/1e3));let at=lo(st>0?st:.1),se=X=>kt.t+nt-X/at*nt,Vt=rt*.66,qt=[];for(let X=0;X<24;X++){let bt=(r[X]||0)/1e3;if(bt<=0)continue;let me=ft(X+.5)-Vt/2,Ie=se(bt),Le=X===T?"fc-actual fc-current":"fc-actual";qt.push(Dt`<rect class=${Le} x=${me.toFixed(1)} y=${Ie.toFixed(1)}
        width=${Vt.toFixed(1)} height=${(kt.t+nt-Ie).toFixed(1)} rx="2"></rect>`)}let Xt=null;if(R){let X=[];for(let bt=0;bt<=24;bt++)X.push(`${ft(bt).toFixed(1)},${se((o[bt]||0)/1e3).toFixed(1)}`);Xt=Dt`<polyline class="fc-line" points=${X.join(" ")}></polyline>`}let Bt=[],Li=4;for(let X=0;X<=Li;X++){let bt=at/Li*X,me=se(bt);Bt.push(Dt`<line class="fc-grid" x1=${kt.l} y1=${me.toFixed(1)} x2=${ns-kt.r} y2=${me.toFixed(1)}></line>`),Bt.push(Dt`<text class="fc-axis fc-axis-y" x=${kt.l-6} y=${(me+4).toFixed(1)}>${co(bt)}</text>`)}let li=[];for(let X=0;X<=24;X+=4)li.push(Dt`<text class="fc-axis fc-axis-x" x=${ft(X).toFixed(1)} y=${Gs-8}>${X}:00</text>`);let $t=R&&v>0&&c!=null?Math.round(c/v*100):null,Ke=X=>{A._fcTip!==X&&(A._fcTip=X,A.requestUpdate())},Zt=()=>{A._fcTip!=null&&(A._fcTip=null,A.requestUpdate())},ps=[];for(let X=0;X<24;X++)ps.push(Dt`<rect class="fc-hit" x=${ft(X).toFixed(1)} y=${kt.t} width=${rt.toFixed(1)} height=${nt}
        @pointerenter=${()=>Ke(X)} @pointermove=${()=>Ke(X)}
        @pointerdown=${()=>Ke(X)}></rect>`);let Fe=A._fcTip,Xe=Fe!=null&&Fe>=0&&Fe<24,Ks=Xe?Dt`<rect class="fc-band" x=${ft(Fe).toFixed(1)} y=${kt.t} width=${rt.toFixed(1)} height=${nt}></rect>`:null,zi=Xe?dt(Fe):null;function dt(X){let bt=((r[X]||0)/1e3).toFixed(2),me=((o[X]||0)/1e3).toFixed(2),Ie=184,Le=R?84:60,ze=ft(X+.5)-Ie/2;ze=Math.max(kt.l,Math.min(ns-kt.r-Ie,ze));let Oe=kt.t+6,Ze=ze+12;return Dt`<g class="fc-tip" pointer-events="none">
      <rect class="fc-tip-box" x=${ze.toFixed(1)} y=${Oe} width=${Ie} height=${Le} rx="7"></rect>
      <text class="fc-tip-time" x=${Ze} y=${Oe+24}>${_n(X)}:00 – ${_n((X+1)%24)}:00</text>
      <text class="fc-tip-line" x=${Ze} y=${Oe+46}>${j("card.produced")}: <tspan class="v">${bt} kWh</tspan></text>
      ${R?Dt`<text class="fc-tip-line" x=${Ze} y=${Oe+68}>${j("card.forecast")}: <tspan class="v">${me} kWh</tspan></text>`:null}
    </g>`}return D`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${B||j("card.today")}</span>
      <span class="fc-graph-total"
        >${(c!=null?c/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    ${$t!=null?D`<div class="fc-progress" title=${j("card.of_forecast",{pct:$t})}>
          <div class="fc-progress-track">
            <div
              class="fc-progress-fill"
              style="width:${Math.min(100,$t)}%"
            ></div>
          </div>
          <span class="fc-progress-label">${j("card.of_forecast",{pct:$t})}</span>
        </div>`:""}
    <svg
      class="chart"
      viewBox="0 0 ${ns} ${Gs}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      @pointerleave=${Zt}
      @pointercancel=${Zt}
    >
      ${Bt}${li}
      <text class="fc-axis fc-unit" x=${kt.l-6} y=${kt.t-4}>kWh</text>
      ${Ks}${qt}${Xt}${ps}${zi}
    </svg>
    ${R?D`<div class="fc-graph-legend">
          <span class="lg lg-actual">${j("card.produced")}</span>
          <span class="lg lg-fc">${j("card.forecast")}</span>
        </div>`:""}
  </div>`}function lo(A){let r=Math.pow(10,Math.floor(Math.log10(A))),o=A/r;return(o<=1?1:o<=2?2:o<=5?5:10)*r}function co(A){return A>=10?Math.round(A).toString():A.toFixed(1).replace(/\.0$/,"")}function _n(A){return String(A).padStart(2,"0")}var fo=300*1e3,as=class extends Ot{static styles=vn;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._battDir="",this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),Te(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},fo)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let r of Object.values(this._tmplUnsub||{}))typeof r=="function"&&r();this._tmplUnsub={}}setConfig(r){this._config=r||{}}static getConfigElement(){return document.createElement(`${Pt}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(r,o){return Ht(this.hass,r,o)}_show(r,o=!0){return this._config[r]??o}get _device(){let r=Ce(this.hass);return r.length?this._config.device&&r.find(o=>o.deviceId===this._config.device)||r[0]:null}_state(r){let o=this._config.entities?.[r];if(o){if(Ct(o)){let v=this._templateResults?.[o];return{state:v===void 0?"unknown":String(v),attributes:{}}}return jt(o)?this.hass.states[o]:{state:o,attributes:{}}}let c=this._map?.[r];return c?this.hass.states[c]:void 0}_entityId(r){let o=this._config.entities?.[r];return o&&jt(o)&&!Ct(o)?o:this._map?.[r]}updated(r){super.updated(r),(r.has("hass")||r.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let r=this._entityId("sensor.solar_energy");if(!r||!this.hass)return;let{start:o,end:c}=this._dataRange(),v=await cn(this.hass,r,o,c);this._hourly=v||{},this._todayWh=v?Object.values(v).reduce((T,R)=>T+(R||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await js(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let r=new Date;return{start:new Date(r.getFullYear(),r.getMonth(),r.getDate()),end:r,ref:r}}_bindEnergyCollection(){let r=this._config.collection_key,o=r?`_${r}`:null;if(o!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=o,this._period=null),!o||this._collUnsub||!this.hass?.connection)return;let c=this.hass.connection[o];if(!c||typeof c.subscribe!="function")return;let v=()=>{this._period={start:c.start,end:c.end},this._refreshData()};this._collUnsub=c.subscribe(()=>v()),v()}_mergedForecast(){return ln(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let r=Ws(this._mergedForecast(),this._dataRange().ref);return r!=null?r/1e3:null}_isToday(){let r=this._dataRange().ref,o=new Date;return r.getFullYear()===o.getFullYear()&&r.getMonth()===o.getMonth()&&r.getDate()===o.getDate()}_periodLabel(){return this._isToday()?this._t("card.today"):this._dataRange().ref.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let r=[...Object.values(this._config.entities||{}),this._config.title].filter(o=>Ct(o));for(let o of r)if(!this._tmplUnsub[o]){this._tmplUnsub[o]=!0;try{this._tmplUnsub[o]=await this.hass.connection.subscribeMessage(c=>{this._templateResults[o]=c.result,this.requestUpdate()},{type:"render_template",template:o})}catch{this._templateResults[o]="error",this.requestUpdate()}}for(let o of Object.keys(this._tmplUnsub))if(!r.includes(o)){let c=this._tmplUnsub[o];typeof c=="function"&&c(),delete this._tmplUnsub[o],delete this._templateResults[o]}}_moreInfo(r){this._moreInfoId(this._entityId(r))}_moreInfoId(r){r&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:r},bubbles:!0,composed:!0}))}render(){if(!this.hass)return D``;let r=this._device;return r?(this._map=$e(this.hass,r.ents),this._isToday()?D`<ha-card>
      ${this._renderHead(r)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),yn(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),this._forecastGraph(),"large"):""}
      ${this._dialog==="battery"?this._dialogFrame(this._t("battery.title"),this._renderBatteryDetail()):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`:D`<ha-card>${this._forecastGraph()}</ha-card>`):D`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(r,o,c="medium"){return D`<ha-adaptive-dialog
      open
      width=${c}
      header-title=${r}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${o}</div>
    </ha-adaptive-dialog>`}_imageSrc(r){let o=r?.device?.model;return this._config.image_url||(this._config.image?hi(this._config.image):on(o))}_renderHead(r){let o=this._config.title,c=o&&Ct(o)?String(this._templateResults?.[o]??""):o,v=r.device?.model,T=c||r.device?.name_by_user||r.device?.name||v||this._t("card.device"),R=this._imageSrc(r);return D`<div class="head">
      <div class="head-left">
        <div class="name">${T}</div>
        ${v&&v!==T?D`<div class="subtitle">${v}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle(R,T)}
    </div>`}_renderBatteryCircle(r,o){let c=this._state("sensor.cms_batt_soc"),v=this._show("show_image")&&r;if(!c&&!v)return"";let T=pt(c),R=pt(this._state("sensor.bat_power")),B=this._state("binary_sensor.battery_charging")?.state==="on"||R!=null&&R>1,j=!B&&R!=null&&R<-1,q=B?"charge":j?"discharge":T!=null&&T<=15?"low":"",nt=B?"charge":j?"discharge":"";nt&&(this._battDir=nt);let rt=nt||this._battDir,ft=!!nt,st=2*Math.PI*44,at=T!=null?Math.max(0,Math.min(100,T)):0,se=[{v:pt(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:pt(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:pt(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(Vt=>Vt.v!=null);return D`<div
      class="batt-circle clickable ${nt}"
      @click=${()=>this._dialog="battery"}
    >
      ${c?D`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${q}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${st.toFixed(1)};stroke-dashoffset:${(st*(1-at/100)).toFixed(1)}"
            ></circle>
            ${rt?Dt`<circle
                  class="ring-spin ${rt} ${ft?"show":""}"
                  cx="50"
                  cy="50"
                  r="44"
                  stroke-dasharray="16 261"
                ></circle>`:""}
            ${se.map(Vt=>{let qt=Math.max(0,Math.min(100,Vt.v))/100*2*Math.PI,Xt=Math.sin(qt),Bt=Math.cos(qt);return Dt`<line
                class="ring-tick ${Vt.cls}"
                x1=${(50+39.5*Xt).toFixed(1)}
                y1=${(50-39.5*Bt).toFixed(1)}
                x2=${(50+48.5*Xt).toFixed(1)}
                y2=${(50-48.5*Bt).toFixed(1)}
              ><title>${Vt.label} ${Math.round(Vt.v)}%</title></line>`})}
          </svg>`:""}
      ${c&&rt?D`<div class="batt-particles ${rt} ${ft?"show":""}">
            ${Array.from({length:12},(Vt,qt)=>{let Xt=qt*30,Bt=qt*5%12/12*1.6;return D`<span
                class="particle"
                style="--angle:${Xt}deg;animation-delay:${Bt.toFixed(2)}s"
              ></span>`})}
          </div>`:""}
      ${v?D`<picture
            >${Ge(r)?D`<source
                  srcset=${Ge(r)}
                  type="image/webp"
                />`:""}<img class="device-img" src="${r}" alt="${o}"
          /></picture>`:c?D`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${c}
            ></ha-state-icon>`:D`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${c&&(B||j)&&R!=null?D`<span class="batt-speed ${nt}">
            <ha-icon
              icon=${B?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${de(Math.abs(R))}
          </span>`:""}
      ${c?D`<span class="batt-badge"
            >${T!=null?Math.round(T):"\u2013"}%</span
          >`:""}
    </div>`}_renderBatteryDetail(){let r=this._device,o=this._show("show_image")&&this._imageSrc(r),c=r?.device?.name||r?.device?.model||this._t("card.device"),v=pt(this._state("sensor.cms_batt_soc")),T=pt(this._state("sensor.bat_power")),R=this._state("binary_sensor.battery_charging")?.state==="on"||T!=null&&T>1,B=!R&&T!=null&&T<-1,j=R?"charge":B?"discharge":"",q=R?"mdi:flash":B?"mdi:battery-arrow-down":"mdi:battery",nt=R?this._t("card.charging"):B?this._t("card.discharging"):this._t("battery.idle"),rt=(R||B)&&T!=null?de(Math.abs(T)):null,ft=[{slot:"sensor.soh",icon:"mdi:heart-pulse",label:this._t("battery.health")},{slot:"sensor.calendar_soh",icon:"mdi:calendar-heart",label:this._t("battery.calendar_health")},{slot:"sensor.bat_temp",icon:"mdi:thermometer",label:this._t("battery.temperature")},...R?[{slot:"sensor.chg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_full")}]:[],...B?[{slot:"sensor.dsg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_empty")}]:[],{slot:"sensor.full_energy",icon:"mdi:battery-high",label:this._t("battery.capacity")},{slot:"sensor.cycles",icon:"mdi:battery-sync",label:this._t("battery.cycles")}].map(st=>({...st,value:this._battTileValue(st.slot)})).filter(st=>st.value!=null);return D`<div class="batt-detail">
      <div class="batt-hero">
        ${o?D`<picture
              >${Ge(o)?D`<source srcset=${Ge(o)} type="image/webp" />`:""}<img class="batt-hero-img" src=${o} alt=${c}
            /></picture>`:D`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${v!=null?Math.round(v):"\u2013"}<span class="batt-hero-u">%</span></span
          >
          <span class="batt-hero-status ${j}">
            <ha-icon icon=${q}></ha-icon>${nt}${rt?` \xB7 ${rt}`:""}
          </span>
        </div>
      </div>
      ${ft.length?D`<div class="batt-grid">
            ${ft.map(st=>{let at=this._entityId(st.slot);return D`<div
                class="batt-tile ${at?"clickable":""}"
                @click=${at?()=>this._moreInfoId(at):null}
              >
                <ha-icon icon=${st.icon}></ha-icon>
                <div class="batt-tile-text">
                  <span class="batt-tile-val">${st.value}</span>
                  <span class="batt-tile-label">${st.label}</span>
                </div>
              </div>`})}
          </div>`:""}
    </div>`}_battTileValue(r){let o=this._state(r),c=pt(o);if(c==null)return null;let v=o.attributes?.unit_of_measurement||"";return v==="W"?de(c):v==="Wh"?Us(c):v==="kWh"?Us(c*1e3):v==="min"?pn(c):v==="%"?`${Math.round(c)}%`:v?`${Math.round(c)} ${v}`:String(Math.round(c))}_renderAc(){let r=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(o=>({...o,swState:this._state(o.sw),pwState:this._state(o.pw)})).filter(o=>o.swState||o.pwState);return r.length?D`<div class="ac">
      ${r.map(o=>{let c=o.swState?.state==="on",v=pt(o.pwState);return D`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(o.pw)||this._entityId(o.sw))}
        >
          <ha-icon class="ac-icon ${c?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${o.label}</span>
            <span class="ac-power">
              ${o.swState&&!c?this._t("card.off"):v!=null?this._metric(Ye(v)):o.pwState?"\u2014":""}
            </span>
          </div>
          ${o.swState?D`<ha-switch
                .checked=${c}
                @click=${T=>T.stopPropagation()}
                @change=${()=>this._toggleSwitch(o.sw,o.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(r,o){let c=this._entityId(r),v=c?this.hass.states[c]:null;!c||!v||(v.state==="on"?this._confirmAc={slot:r,label:o}:this.hass.callService("switch","turn_on",{entity_id:c}))}_renderConfirmAc(){let{label:r}=this._confirmAc,o=()=>this._confirmAc=null;return D`<ha-adaptive-dialog
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
    </ha-adaptive-dialog>`}_metric(r){return D`<span class="metric"
      ><span class="metric-num">${r.n}</span
      ><span class="metric-unit">${r.u}</span></span
    >`}_renderStats(){if(Array.isArray(this._config.stats))return D`<div class="stats custom">
        ${this._config.stats.map(R=>this._renderCustomStat(R))}
      </div>`;let r=pt(this._state("sensor.pv_total")),o=qs(this),c=this._show("show_panels")&&o.length>0,v=this._state("sensor.grid_power"),T=pt(v);return D`<div class="stats">
      <div
        class="stat solar ${c?"clickable":""}"
        @click=${c?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${c?D`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${this._metric(Ye(r))}</div>
        ${c?D`<div class="stat-sub">
              ${o.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(T):D`<div></div>`}
    </div>`}_renderGrid(r){let o=r!=null&&r>1,c=r!=null&&r<-1,v=o?"import":c?"export":"",T=o?this._t("card.grid_import"):c?this._t("card.grid_export"):this._t("card.grid_idle");return D`<div
      class="stat grid ${v} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${c?"mdi:transmission-tower-export":o?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${this._metric(Ye(r!=null?Math.abs(r):null))}
      </div>
      <div class="stat-sub">${T}</div>
    </div>`}_renderCustomStat(r){if(!r||!r.entity&&!r.name)return D``;let o=r.entity?this.hass.states[r.entity]:void 0,c=r.name||o?.attributes?.friendly_name||r.entity||"",v=r.tap_action,T=!v||v.action!=="none";return D`<div
      class="stat ${T?"clickable":""}"
      @click=${T?()=>this._handleAction(v,r.entity):null}
    >
      <div class="stat-head">
        ${r.icon?D`<ha-icon icon=${r.icon}></ha-icon>`:o?D`<ha-state-icon
                .hass=${this.hass}
                .stateObj=${o}
              ></ha-state-icon>`:D`<ha-icon icon="mdi:gauge"></ha-icon>`}
        ${c}
      </div>
      <div class="stat-value">${this._metric(this._statValue(o))}</div>
    </div>`}_statValue(r){let o=r?.state;if(o==null||o==="unavailable"||o==="unknown")return{n:"\u2013",u:""};let c=pt(r),v=r.attributes?.unit_of_measurement||"";return c==null?{n:o,u:""}:v==="W"?Ye(c):{n:Number.isInteger(c)?String(c):c.toFixed(1),u:v}}_handleAction(r,o){let c=r||{action:"more-info"},v=c.action||"more-info";if(v!=="none"){if(c.confirmation){let T=c.confirmation.text||this._t("card.confirm_action")||"Are you sure?";if(!window.confirm(T))return}switch(v){case"more-info":this._moreInfoId(c.entity||o);return;case"toggle":{let T=c.entity||o;T&&this.hass.callService("homeassistant","toggle",{entity_id:T});return}case"navigate":c.navigation_path&&(history.pushState(null,"",c.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0})));return;case"url":c.url_path&&window.open(c.url_path,c.new_tab===!1?"_self":"_blank");return;case"perform-action":case"call-service":{let T=c.perform_action||c.service,[R,B]=(T||"").split(".",2);R&&B&&this.hass.callService(R,B,c.data||c.service_data||{},c.target);return}default:this._moreInfoId(c.entity||o)}}}_forecastGraph(){let r=this._dataRange().ref,o=this._mergedForecast();return bn(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:Bs(o,r),totalWh:this._todayWh,forecastWh:Ws(o,r),currentHour:this._isToday()?new Date().getHours():null,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})}_renderToday(){let r=this._todayWh!=null?this._todayWh/1e3:null,o=Object.keys(this._forecasts||{}).length>0,c=this._show("show_forecast")&&o?this._forecastTodayKWh():null,v=c!=null&&c>0,T=v&&r!=null?Math.min(100,Math.round(r/c*100)):null,R=T!=null&&T>=100;return D`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(fn(r))}</span>
      </div>
      ${v?D`<div class="fc-bar">
              <div
                class="fc-fill ${R?"met":""}"
                style="width:${T}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${r!=null?r.toFixed(1):"\u2013"}</b> /
                ${c.toFixed(1)} kWh
              </span>
              <span>
                ${R?this._t("card.exceeded"):this._t("card.of_forecast",{pct:T??0})}
              </span>
            </div>`:""}
    </div>`}};function wn(A,r){if(!r)return null;let o=A?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${r}/${o}icon.png`}var po=[{name:"device",selector:{device:{integration:ni}}}],xn={appearance:[["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},kn={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},Sn=new Set,An=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"stats",icon:"mdi:chart-box-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],uo=4,os=class extends Ot{static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),Te()}setConfig(r){this._config=r||{}}_t(r,o){return Ht(this.hass,r,o)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,hn(this.hass).then(r=>{this._providers=r}))}render(){if(!this.hass)return D``;let r=An.find(o=>o.id===this._page);return r?this._renderSubpage(r):this._renderRoot()}_defaults(){let r=Ce(this.hass),o=this._config.device&&r.find(c=>c.deviceId===this._config.device)||r[0];return o?$e(this.hass,o.ents):{}}_renderRoot(){return D`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${po}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${An.map(r=>D`<button
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
      </div>`}_summary(r){if(r==="panels"){let R=this._detectedPanels(),B=R.filter(q=>this._config.panels?.[q]?.hidden).length,j=this._t("editor.panels_count",{n:R.length});return B&&(j+=` \xB7 ${this._t("editor.panels_hidden",{n:B})}`),j}if(r==="forecast"){let R=this._providers;if(R===void 0)return this._t("editor.automatic");if(!R.length)return this._t("editor.forecast_none_short");let B=this._config.forecast_config_entries,j=B===void 0?R.length:B.length;return this._t("editor.forecast_selected",{n:j,total:R.length})}if(r==="stats"){let R=this._config.stats;return Array.isArray(R)?this._t("editor.stats_count",{n:R.length}):this._t("editor.stats_default")}if(r==="advanced")return this._config.collection_key||this._t("editor.none");let o=(kn[r]||[]).filter(([R])=>this._config.entities?.[R]).length,c=o?` \xB7 ${this._t("editor.overridden",{n:o})}`:"",v=xn[r]||[];if(!v.length)return o?this._t("editor.overridden",{n:o}):this._t("editor.automatic");let T=v.filter(([R,B])=>this._config[R]??B);return T.length?T.map(([R])=>this._t(`short.${R}`)).join(", ")+c:`${this._t("editor.nothing_shown")}${c}`}_renderSubpage(r){return D`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${r.id}`)}</span>
      </div>
      ${(xn[r.id]||[]).map(([o,c,v])=>this._renderToggle(o,c,v))}
      ${r.id==="appearance"?this._renderImagePicker():r.id==="stats"?this._renderStatsPage():r.id==="panels"?this._renderPanelsPage():r.id==="forecast"?this._renderForecastPage():r.id==="advanced"?this._renderAdvancedPage():(kn[r.id]||[]).map(([o,c])=>this._renderSlot(o,c))}`}_renderImagePicker(){let r=this._config.image,o=this._config.image_url,c=this._config.show_image??!0;return D`<div class="section">
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
        ${rs.map(v=>D`<button
            class="img-opt ${r===v.key?"on":""}"
            title=${v.name}
            @click=${()=>this._setImage(v.key)}
          >
            <picture
              ><source
                srcset=${Ge(hi(v.key))}
                type="image/webp"
              /><img
                src=${hi(v.key)}
                loading="lazy"
                alt=${v.name} /></picture
            >
            <span class="img-label">${v.name}</span>
          </button>`)}
      </div>`}_setImage(r){let o={...this._config,type:`custom:${Pt}`};delete o.image_url,r?o.image=r:delete o.image,this._dispatch(o)}_renderAdvancedPage(){return D`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${r=>{r.stopPropagation(),this._setCollectionKey(r.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(r){let o={...this._config,type:`custom:${Pt}`};r?o.collection_key=r:delete o.collection_key,this._dispatch(o)}_renderStatsPage(){let r=this._config.stats;return Array.isArray(r)?D`<div class="hint top-hint">${this._t("editor.stats_hint")}</div>
      ${r.map((o,c)=>this._renderStatBlock(o,c,r.length))}
      <div class="stats-actions">
        <button class="add-btn" @click=${()=>this._addStat()}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("editor.stats_add")}
        </button>
        <button class="text-btn" @click=${()=>this._resetStats()}>
          ${this._t("editor.stats_reset")}
        </button>
      </div>`:D`<div class="hint top-hint">
          ${this._t("editor.stats_default_hint")}
        </div>
        <button class="filled-btn" @click=${()=>this._seedDefaultStats()}>
          ${this._t("editor.stats_customize")}
        </button>`}_renderStatBlock(r,o,c){let v=[{name:"entity",selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"tap_action",selector:{ui_action:{}}}],T=r.name||r.entity||this._t("editor.stat_n",{n:o+1});return D`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon=${r.icon||"mdi:chart-box-outline"}></ha-icon>
        <span class="panel-title">${T}</span>
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
        .schema=${v}
        .computeLabel=${R=>this._t(`editor.stat_field_${R.name}`)}
        @value-changed=${R=>{R.stopPropagation(),this._updateStat(o,R.detail.value)}}
      ></ha-form>
    </div>`}_seedDefaultStats(){let r=this._defaults(),o=c=>{let v=this._config.entities?.[c];return v&&jt(v)&&!Ct(v)?v:r[c]||""};this._setStats([{entity:o("sensor.pv_total"),name:this._t("card.solar"),icon:"mdi:solar-power-variant"},{entity:o("sensor.grid_power"),name:this._t("card.grid"),icon:"mdi:transmission-tower"}])}_updateStat(r,o){let c=[...this._config.stats||[]],v={};for(let[T,R]of Object.entries(o))R===""||R==null||(v[T]=R);c[r]=v,this._setStats(c)}_addStat(){this._setStats([...this._config.stats||[],{}])}_removeStat(r){let o=[...this._config.stats||[]];o.splice(r,1),this._setStats(o)}_moveStat(r,o){let c=[...this._config.stats||[]],v=r+o;v<0||v>=c.length||([c[r],c[v]]=[c[v],c[r]],this._setStats(c))}_setStats(r){this._dispatch({...this._config,stats:r,type:`custom:${Pt}`})}_resetStats(){let r={...this._config,type:`custom:${Pt}`};delete r.stats,this._dispatch(r)}_renderForecastPage(){let r=this._providers;if(r===void 0)return D`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!r.length)return D`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let o=this._config.show_forecast??!0,c=this._config.forecast_config_entries,v=T=>c===void 0?!0:c.includes(T);return D`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${o?"":"dim"}>
        ${r.map(T=>D`<div class="row">
            ${this._renderBrand(T.domain)}
            <span class="row-label"
              >${T.title}<span class="row-sub">${T.domain}</span></span
            >
            <ha-switch
              .checked=${v(T.id)}
              .disabled=${!o}
              @change=${R=>this._toggleProvider(T.id,R.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(r){let o=wn(this.hass,r);return D`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${o?D`<img
            class="brand"
            src=${o}
            @error=${c=>{c.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(r,o){let c=(this._providers||[]).map(R=>R.id),v=this._config.forecast_config_entries??c.slice();v=o?[...new Set([...v,r])]:v.filter(R=>R!==r);let T={...this._config,type:`custom:${Pt}`};v.length===c.length&&c.every(R=>v.includes(R))?delete T.forecast_config_entries:T.forecast_config_entries=v,this._dispatch(T)}_detectedPanels(){let r=this._defaults(),o=[];for(let c=1;c<=uo;c++)(r[`sensor.pv${c}_power`]||this._config.entities?.[`sensor.pv${c}_power`])&&o.push(c);return o.length?o:[1,2,3,4]}_renderPanelsPage(){return D`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(r=>this._renderPanelConfig(r))}`}_renderPanelConfig(r){let o=this._config.panels?.[r]||{},c=!!o.hidden,v=`sensor.pv${r}_power`;return D`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${o.name||this._t("editor.panel",{n:r})}</span
        >
        <ha-switch
          .checked=${!c}
          @change=${T=>this._dispatch(this._withPanel(r,{hidden:!T.target.checked}))}
        ></ha-switch>
      </div>
      ${c?D`<div class="hint">${this._t("editor.panel_hidden")}</div>`:D`<ha-form
              .hass=${this.hass}
              .data=${{value:o.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${T=>{T.stopPropagation(),this._dispatch(this._withPanel(r,{name:T.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(v,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(r,o){let c={...this._config.panels||{}},v={...c[r]||{}};for(let[R,B]of Object.entries(o))B===""||B==null||B===!1?delete v[R]:v[R]=B;Object.keys(v).length?c[r]=v:delete c[r];let T={...this._config,panels:c,type:`custom:${Pt}`};return Object.keys(c).length||delete T.panels,T}_renderToggle(r,o,c){return D`<div class="row">
      <ha-icon icon=${c}></ha-icon>
      <span class="row-label">${this._t(`toggle.${r}`)}</span>
      <ha-switch
        .checked=${this._config[r]??o}
        @change=${v=>this._toggleDisplay(r,o,v.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(r,o){return this._modes[r]?this._modes[r]:o?jt(o)&&!Ct(o)?"entity":"custom":Sn.has(r)?"entity":"auto"}_renderModeChips(r,o){let c=Sn.has(r)?["entity","custom"]:["auto","entity","custom"];return D`<div class="modes">
      ${c.map(v=>D`<button
          class="mode ${o===v?"on":""}"
          @click=${()=>{this._modes={...this._modes,[r]:v},v==="auto"&&this._setOverride(r,"")}}
        >
          ${this._t(`editor.mode_${v}`)}
        </button>`)}
    </div>`}_renderSlot(r,o,c){let v=this._config.entities?.[r]||"",T=this._slotMode(r,v),R=this._defaults()[r];return D`<div class="section">
        <ha-icon icon=${o}></ha-icon>${c||this._t(`slot.${r}`)}
      </div>
      ${this._renderModeChips(r,T)}
      ${T==="auto"?D`<div class="hint">
            ${this._t("editor.auto_value",{value:R||this._t("editor.not_found")})}
          </div>`:T==="entity"?D`<ha-form
              .hass=${this.hass}
              .data=${{value:jt(v)&&!Ct(v)?v:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${B=>{B.stopPropagation(),this._setOverride(r,B.detail.value.value||"")}}
            ></ha-form>`:D`<ha-form
              .hass=${this.hass}
              .data=${{value:jt(v)&&!Ct(v)?"":v}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${B=>{B.stopPropagation(),this._setOverride(r,B.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(r,o){let c={...this._config.entities||{}};o?c[r]=o:delete c[r];let v={...this._config,entities:c,type:`custom:${Pt}`};return Object.keys(c).length||delete v.entities,v}_setOverride(r,o){this._dispatch(this._withOverride(r,o))}_toggleDisplay(r,o,c){let v={...this._config,type:`custom:${Pt}`};c===o?delete v[r]:v[r]=c,this._dispatch(v)}_valueChanged(r){r.stopPropagation();let o={...this._config,...r.detail.value,type:`custom:${Pt}`};o.device||delete o.device,this._dispatch(o)}_dispatch(r){this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}static get styles(){return fe`
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
    `}};var Ln=Ba(En(),1);var ls=["1","2","3","4","5","6","7","8","9"],Me="1",Pn=["auto","day","night"],Ys="auto";function mo(A,r){if(A==="day"||A==="night")return A;let o=r?.states?.["sun.sun"];return o?o.state==="below_horizon"?"night":"day":r?.themes?.darkMode?"night":"day"}function Cn(A,r,o){let c=ls.includes(A)?A:Me;return`${Ee}/houses/${mo(r,o)}_${c}.webp`}function $n(A){let r=ls.includes(A)?A:Me;return`${Ee}/houses/day_${r}.webp`}function Tn(){return`${Ee}/houses/re_space_system_battery.webp`}function Mn(A){return`${Ee}/flows/${A}.json`}var go={8:3,9:6};function Fn(A){return`re_space_solar_${go[A]||Math.min(7,Math.max(1,A||1))}`}var ue={grid_in:"re_space_gridin",grid_out:"re_space_gridout",home:"re_space_home",bat_in:"jt303_space_battery_input",bat_out:"jt303_space_battery_output",bat_chg:"re_space_bat_chg",bat_dsg:"re_space_bat_dsg",bat_soc:"re_space_bat_soc"};var In=fe`
  :host {
    display: block;
  }
  ha-card {
    overflow: hidden;
    position: relative;
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
    z-index: 8;
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
    z-index: 9;
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
    z-index: 9;
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
`;var Rt=1,cs=class extends Ot{static styles=In;static get properties(){return{hass:{},_config:{}}}constructor(){super(),this._flowAnims={}}connectedCallback(){super.connectedCallback(),Te()}disconnectedCallback(){super.disconnectedCallback();for(let r of Object.values(this._flowAnims))r.anim?.destroy();this._flowAnims={}}setConfig(r){this._config=r||{}}static getConfigElement(){return document.createElement(`${ie}-editor`)}static getStubConfig(){return{house:Me}}getCardSize(){return 7}_t(r,o){return Ht(this.hass,r,o)}_show(r,o=!0){return this._config[r]??o}get _device(){let r=Ce(this.hass);return r.length?this._config.device&&r.find(o=>o.deviceId===this._config.device)||r[0]:null}_state(r){let o=this._config.entities?.[r];if(o)return jt(o)&&!Ct(o)?this.hass.states[o]:{state:o,attributes:{}};let c=this._map?.[r];return c?this.hass.states[c]:void 0}_entityId(r){let o=this._config.entities?.[r];return o&&jt(o)&&!Ct(o)?o:this._map?.[r]}_moreInfo(r){let o=this._entityId(r);o&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:o},bubbles:!0,composed:!0}))}_grid(){let r=this._state("sensor.grid_power");return pt(r??this._state("sensor.sys_grid_power"))}_flowStates(){let r=this._grid(),o=pt(this._state("sensor.pv_total")),c=pt(this._state("sensor.sys_load")),v=pt(this._state("sensor.bat_power")),T=pt(this._state("sensor.cms_batt_soc")),R=parseInt(this._config.house||Me,10)||1;return{grid:r,solar:o,load:c,bat:v,soc:T,route:R}}_flowDefs(){return[{key:"solar",file:r=>Fn(r.route),active:r=>r.solar>Rt},{key:"grid_in",file:()=>ue.grid_in,active:r=>r.grid>Rt},{key:"grid_out",file:()=>ue.grid_out,active:r=>r.grid<-Rt},{key:"home",file:()=>ue.home,active:r=>r.load>Rt},{key:"bat_in",file:()=>ue.bat_in,active:r=>r.bat>Rt},{key:"bat_out",file:()=>ue.bat_out,active:r=>r.bat<-Rt},{key:"bat_soc",file:()=>ue.bat_soc,active:r=>r.soc!=null,mode:"soc"},{key:"bat_chg",file:()=>ue.bat_chg,active:r=>r.bat>Rt},{key:"bat_dsg",file:()=>ue.bat_dsg,active:r=>r.bat<-Rt}]}updated(r){super.updated(r),this._syncFlows()}_syncFlows(){if(!this.renderRoot||!this._device)return;let r=this._show("show_flows"),o=this._flowStates();for(let c of this._flowDefs()){let v=this.renderRoot.querySelector(`[data-flow="${c.key}"]`);if(!v)continue;let T=r&&c.active(o);this._setFlow(v,c,T,o)}}_setFlow(r,o,c,v){let T=o.key,R=o.file(v),B=o.mode||"play",j=this._flowAnims[T];if((c||B==="soc")&&(!j||j.file!==R)){j?.anim?.destroy();let q=Ln.default.loadAnimation({container:r,renderer:"svg",loop:B!=="soc",autoplay:!1,path:Mn(R),rendererSettings:{preserveAspectRatio:"xMidYMin meet"}});j=this._flowAnims[T]={anim:q,file:R,ready:!1,mode:B},q.addEventListener("DOMLoaded",()=>{j.ready=!0,this._applyFlow(j,c,this._flowStates())})}j&&this._applyFlow(j,c,v),r.style.opacity=c?"1":"0"}_applyFlow(r,o,c){if(r.ready){if(r.mode==="soc"){r.anim.goToAndStop(Math.max(0,Math.min(100,c.soc??0)),!0);return}o?r.anim.play():r.anim.pause()}}render(){if(!this.hass)return D``;let r=this._device;if(!r)return D`<ha-card
        ><div class="empty">${this._t("card.no_device")}</div></ha-card
      >`;this._map=$e(this.hass,r.ents);let o=this._config.title&&!Ct(this._config.title)?this._config.title:"",c=this._show("show_battery");return D`<ha-card>
      ${o?D`<div class="title">${o}</div>`:""}
      <div class="stage">
        <img
          class="layer house"
          src=${Cn(this._config.house,this._config.house_mode,this.hass)}
          alt=""
        />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${c?D`<img class="layer box" src=${Tn()} alt="" />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        ${this._renderLeaders()} ${this._renderStats()}
        ${c?this._renderBattery():""}
      </div>
    </ha-card>`}_renderLeaders(){return D`<div class="leaders">
      ${this._show("show_grid")?D`<span class="leader grid"></span>`:""}
      ${this._show("show_solar")?D`<span class="leader solar"></span>`:""}
      ${this._show("show_home")?D`<span class="leader home"></span>`:""}
    </div>`}_renderStats(){let r=this._flowStates(),o=[];if(this._show("show_grid")){let c=r.grid>Rt,v=r.grid<-Rt;o.push({slot:"sensor.grid_power",fallback:"sensor.sys_grid_power",anchor:"col-grid",value:r.grid!=null?Math.abs(r.grid):null,label:c?this._t("house.from_grid"):v?this._t("house.to_grid"):this._t("house.grid"),cls:c?"import":v?"export":""})}return this._show("show_solar")&&o.push({slot:"sensor.pv_total",anchor:"col-solar",value:r.solar,label:this._t("card.solar"),cls:r.solar>Rt?"solar":""}),this._show("show_home")&&o.push({slot:"sensor.sys_load",anchor:"col-home",value:r.load,label:this._t("house.home"),cls:r.load>Rt?"home":""}),o.length?D`<div class="stats">
      ${o.map(c=>{let v=Ye(c.value);return D`<div
          class="stat ${c.anchor} ${c.cls} clickable"
          @click=${()=>this._moreInfo(this._entityId(c.slot)?c.slot:c.fallback||c.slot)}
        >
          <div class="stat-value">
            <span class="num">${v.n}</span><span class="unit">${v.u}</span>
          </div>
          <div class="stat-label">${c.label}</div>
        </div>`})}
    </div>`:""}_renderBattery(){let r=pt(this._state("sensor.cms_batt_soc")),o=pt(this._state("sensor.bat_power")),c=o!=null&&o>Rt,v=o!=null&&o<-Rt,T=c?"charge":v?"discharge":"",R=c?this._t("card.charging"):v?this._t("card.discharging"):this._t("house.idle"),B=o!=null&&(c||v)?de(Math.abs(o)):null;return D`<div
      class="battery ${T} clickable"
      @click=${()=>this._moreInfo(this._entityId("sensor.cms_batt_soc")?"sensor.cms_batt_soc":"sensor.bat_power")}
    >
      <div class="battery-line">
        ${B?D`<ha-icon
              icon=${c?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon
            ><span class="battery-power">${B}</span>`:""}
        ${r!=null?D`<span class="battery-soc">${Math.round(r)}%</span>`:""}
      </div>
      <div class="battery-label">${R}</div>
    </div>`}};var vo=[{name:"device",selector:{device:{integration:ni}}}],yo=[["show_flows",!0,"mdi:transit-connection-variant"],["show_grid",!0,"mdi:transmission-tower"],["show_solar",!0,"mdi:solar-power-variant"],["show_home",!0,"mdi:home-lightning-bolt"],["show_battery",!0,"mdi:home-battery"]],_o=[["sensor.sys_grid_power","mdi:transmission-tower"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.sys_load","mdi:home-lightning-bolt"],["sensor.bat_power","mdi:battery-charging"],["sensor.cms_batt_soc","mdi:battery-high"]],fs=class extends Ot{static get properties(){return{hass:{},_config:{},_showEntities:{state:!0}}}constructor(){super(),this._showEntities=!1}connectedCallback(){super.connectedCallback(),Te()}setConfig(r){this._config=r||{}}_t(r,o){return Ht(this.hass,r,o)}_defaults(){let r=Ce(this.hass),o=this._config.device&&r.find(c=>c.deviceId===this._config.device)||r[0];return o?$e(this.hass,o.ents):{}}render(){if(!this.hass)return D``;let r=this._config.house||Me,o=this._config.house_mode||Ys;return D`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${vo}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>

      <div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="house-grid">
        ${ls.map(c=>D`<button
            class="house-opt ${r===c?"on":""}"
            title=${this._t("house.editor.style_n",{n:c})}
            @click=${()=>this._set("house",c,Me)}
          >
            <img src=${$n(c)} loading="lazy" alt=${c} />
            <span class="house-label">${this._t("house.editor.style_n",{n:c})}</span>
          </button>`)}
      </div>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${Pn.map(c=>D`<button
            class="mode ${o===c?"on":""}"
            @click=${()=>this._set("house_mode",c,Ys)}
          >
            ${this._t(`house.mode.${c}`)}
          </button>`)}
      </div>

      ${yo.map(([c,v,T])=>this._renderToggle(c,v,T))}

      <button class="disclosure" @click=${()=>this._showEntities=!this._showEntities}>
        <ha-icon icon="mdi:tune-variant"></ha-icon>
        <span>${this._t("house.editor.entities")}</span>
        <ha-icon icon=${this._showEntities?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </button>
      ${this._showEntities?D`<div class="hint">${this._t("house.editor.entities_hint")}</div>
            ${_o.map(([c,v])=>this._renderSlot(c,v))}`:""}`}_renderToggle(r,o,c){return D`<div class="row">
      <ha-icon icon=${c}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${r}`)}</span>
      <ha-switch
        .checked=${this._config[r]??o}
        @change=${v=>this._set(r,v.target.checked,o)}
      ></ha-switch>
    </div>`}_renderSlot(r,o){let c=this._config.entities?.[r]||"",v=this._defaults()[r],T=jt(c)&&!Ct(c)?c:"";return D`<div class="slot">
      <ha-icon icon=${o}></ha-icon>
      <ha-form
        class="slot-form"
        .hass=${this.hass}
        .data=${{value:T}}
        .schema=${[{name:"value",selector:{entity:{}}}]}
        .computeLabel=${()=>`${this._t(`slot.${r}`)}${v?` (${this._t("editor.auto_value",{value:v})})`:""}`}
        @value-changed=${R=>{R.stopPropagation(),this._setOverride(r,R.detail.value.value||"")}}
      ></ha-form>
    </div>`}_deviceChanged(r){r.stopPropagation();let o={...this._config,...r.detail.value,type:`custom:${ie}`};o.device||delete o.device,this._dispatch(o)}_set(r,o,c){let v={...this._config,type:`custom:${ie}`};o===c||o===""||o==null?delete v[r]:v[r]=o,this._dispatch(v)}_setOverride(r,o){let c={...this._config.entities||{}};o?c[r]=o:delete c[r];let v={...this._config,entities:c,type:`custom:${ie}`};Object.keys(c).length||delete v.entities,this._dispatch(v)}_dispatch(r){this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}static get styles(){return fe`
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
    `}};customElements.define(Pt,as);customElements.define(`${Pt}-editor`,os);customElements.define(ie,cs);customElements.define(`${ie}-editor`,fs);window.customCards=window.customCards||[];window.customCards.push({type:Pt,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:ie,name:"EcoFlow House Card",description:"Whole-home energy-flow illustration: a house with the battery box and animated grid, solar, home and battery flows.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
