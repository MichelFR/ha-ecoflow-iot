var Yo=Object.create;var Fa=Object.defineProperty;var Ko=Object.getOwnPropertyDescriptor;var Xo=Object.getOwnPropertyNames;var Zo=Object.getPrototypeOf,Jo=Object.prototype.hasOwnProperty;var Qo=(h,i)=>()=>(i||h((i={exports:{}}).exports,i),i.exports);var tl=(h,i,r,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let c of Xo(i))!Jo.call(h,c)&&c!==r&&Fa(h,c,{get:()=>i[c],enumerable:!(n=Ko(i,c))||n.enumerable});return h};var el=(h,i,r)=>(r=h!=null?Yo(Zo(h)):{},tl(i||!h||!h.__esModule?Fa(r,"default",{value:h,enumerable:!0}):r,h));var Ja=Qo((Zi,Es)=>{typeof document<"u"&&typeof navigator<"u"&&(function(h,i){typeof Zi=="object"&&typeof Es<"u"?Es.exports=i():typeof define=="function"&&define.amd?define(i):(h=typeof globalThis<"u"?globalThis:h||self,h.lottie=i())})(Zi,(function(){"use strict";var h="http://www.w3.org/2000/svg",i="",r=!1,n=-999999,c=function(e){r=!!e},f=function(){return r},x=function(e){i=e},R=function(){return i};function U(t){return document.createElement(t)}function B(t,e){var s,a=t.length,l;for(s=0;s<a;s+=1){l=t[s].prototype;for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e.prototype[o]=l[o])}}function q(t,e){return Object.getOwnPropertyDescriptor(t,e)}function X(t){function e(){}return e.prototype=t,e}var rt=(function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(s){this.audios.push(s)},pause:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].pause()},resume:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].resume()},setRate:function(s){var a,l=this.audios.length;for(a=0;a<l;a+=1)this.audios[a].setRate(s)},createAudio:function(s){return this.audioFactory?this.audioFactory(s):window.Howl?new window.Howl({src:[s]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(s){this.audioFactory=s},setVolume:function(s){this._volume=s,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var s,a=this.audios.length;for(s=0;s<a;s+=1)this.audios[s].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}})(),ot=(function(){function t(s,a){var l=0,o=[],p;switch(s){case"int16":case"uint8c":p=1;break;default:p=1.1;break}for(l=0;l<a;l+=1)o.push(p);return o}function e(s,a){return s==="float32"?new Float32Array(a):s==="int16"?new Int16Array(a):s==="uint8c"?new Uint8ClampedArray(a):t(s,a)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t})();function ct(t){return Array.apply(null,{length:t})}function pe(t){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(t)}var Nt=!0,Qt=null,re=null,Ht="",is=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Ai=!1,zt=Math.pow,ei=Math.sqrt,ae=Math.floor,Qs=Math.max,Ve=Math.min,ii={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,s=t.length;for(e=0;e<s;e+=1)ii[t[e]]=Math[t[e]]})();function Ur(){return{}}ii.random=Math.random,ii.abs=function(t){var e=pe(t);if(e==="object"&&t.length){var s=ct(t.length),a,l=t.length;for(a=0;a<l;a+=1)s[a]=Math.abs(t[a]);return s}return Math.abs(t)};var ss=150,vt=Math.PI/180,J=.5519;function $t(t){Ai=!!t}function ke(t){return Ai?Math.round(t):t}function Ue(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function Be(t,e,s,a){this.type=t,this.currentTime=e,this.totalTime=s,this.direction=a<0?-1:1}function Ne(t,e){this.type=t,this.direction=e<0?-1:1}function je(t,e,s,a){this.type=t,this.currentLoop=s,this.totalLoops=e,this.direction=a<0?-1:1}function si(t,e,s){this.type=t,this.firstFrame=e,this.totalFrames=s}function Br(t,e){this.type=t,this.target=e}function qn(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function Yn(t){this.type="configError",this.nativeError=t}function Ql(t,e){this.type=t,this.nativeError=e}var Rt=(function(){var t=0;return function(){return t+=1,Ht+"__lottie_element_"+t}})();function tr(t,e,s){var a,l,o,p,_,u,k,A;switch(p=Math.floor(t*6),_=t*6-p,u=s*(1-e),k=s*(1-_*e),A=s*(1-(1-_)*e),p%6){case 0:a=s,l=A,o=u;break;case 1:a=k,l=s,o=u;break;case 2:a=u,l=s,o=A;break;case 3:a=u,l=k,o=s;break;case 4:a=A,l=u,o=s;break;case 5:a=s,l=u,o=k;break;default:break}return[a,l,o]}function er(t,e,s){var a=Math.max(t,e,s),l=Math.min(t,e,s),o=a-l,p,_=a===0?0:o/a,u=a/255;switch(a){case l:p=0;break;case t:p=e-s+o*(e<s?6:0),p/=6*o;break;case e:p=s-t+o*2,p/=6*o;break;case s:p=t-e+o*4,p/=6*o;break;default:break}return[p,_,u]}function Nr(t,e){var s=er(t[0]*255,t[1]*255,t[2]*255);return s[1]+=e,s[1]>1?s[1]=1:s[1]<=0&&(s[1]=0),tr(s[0],s[1],s[2])}function jr(t,e){var s=er(t[0]*255,t[1]*255,t[2]*255);return s[2]+=e,s[2]>1?s[2]=1:s[2]<0&&(s[2]=0),tr(s[0],s[1],s[2])}function Hr(t,e){var s=er(t[0]*255,t[1]*255,t[2]*255);return s[0]+=e/360,s[0]>1?s[0]-=1:s[0]<0&&(s[0]+=1),tr(s[0],s[1],s[2])}var th=(function(){var t=[],e,s;for(e=0;e<256;e+=1)s=e.toString(16),t[e]=s.length===1?"0"+s:s;return function(a,l,o){return a<0&&(a=0),l<0&&(l=0),o<0&&(o=0),"#"+t[a]+t[l]+t[o]}})(),Kn=function(e){Nt=!!e},Xn=function(){return Nt},Zn=function(e){Qt=e},rs=function(){return Qt},eh=function(e){re=e},Wr=function(){return re},as=function(e){ss=e},Ei=function(){return ss},Jn=function(e){Ht=e},ih=function(){return Ht};function at(t){return document.createElementNS(h,t)}function ir(t){"@babel/helpers - typeof";return ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ir(t)}var Pi=(function(){var t=1,e=[],s,a,l={onmessage:function(){},postMessage:function(E){s({data:E})}},o={postMessage:function(E){l.onmessage({data:E})}};function p(v){if(window.Worker&&window.Blob&&f()){var E=new Blob(["var _workerSelf = self; self.onmessage = ",v.toString()],{type:"text/javascript"}),C=URL.createObjectURL(E);return new Worker(C)}return s=v,l}function _(){a||(a=p(function(E){function C(){function L(N,b){var T,d,m=N.length,D,I,G,tt;for(d=0;d<m;d+=1)if(T=N[d],"ks"in T&&!T.completed){if(T.completed=!0,T.hasMask){var st=T.masksProperties;for(I=st.length,D=0;D<I;D+=1)if(st[D].pt.k.i)S(st[D].pt.k);else for(tt=st[D].pt.k.length,G=0;G<tt;G+=1)st[D].pt.k[G].s&&S(st[D].pt.k[G].s[0]),st[D].pt.k[G].e&&S(st[D].pt.k[G].e[0])}T.ty===0?(T.layers=g(T.refId,b),L(T.layers,b)):T.ty===4?y(T.shapes):T.ty===5&&nt(T)}}function $(N,b){if(N){var T=0,d=N.length;for(T=0;T<d;T+=1)N[T].t===1&&(N[T].data.layers=g(N[T].data.refId,b),L(N[T].data.layers,b))}}function w(N,b){for(var T=0,d=b.length;T<d;){if(b[T].id===N)return b[T];T+=1}return null}function g(N,b){var T=w(N,b);return T?T.layers.__used?JSON.parse(JSON.stringify(T.layers)):(T.layers.__used=!0,T.layers):null}function y(N){var b,T=N.length,d,m;for(b=T-1;b>=0;b-=1)if(N[b].ty==="sh")if(N[b].ks.k.i)S(N[b].ks.k);else for(m=N[b].ks.k.length,d=0;d<m;d+=1)N[b].ks.k[d].s&&S(N[b].ks.k[d].s[0]),N[b].ks.k[d].e&&S(N[b].ks.k[d].e[0]);else N[b].ty==="gr"&&y(N[b].it)}function S(N){var b,T=N.i.length;for(b=0;b<T;b+=1)N.i[b][0]+=N.v[b][0],N.i[b][1]+=N.v[b][1],N.o[b][0]+=N.v[b][0],N.o[b][1]+=N.v[b][1]}function M(N,b){var T=b?b.split("."):[100,100,100];return N[0]>T[0]?!0:T[0]>N[0]?!1:N[1]>T[1]?!0:T[1]>N[1]?!1:N[2]>T[2]?!0:T[2]>N[2]?!1:null}var z=(function(){var N=[4,4,14];function b(d){var m=d.t.d;d.t.d={k:[{s:m,t:0}]}}function T(d){var m,D=d.length;for(m=0;m<D;m+=1)d[m].ty===5&&b(d[m])}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var m,D=d.assets.length;for(m=0;m<D;m+=1)d.assets[m].layers&&T(d.assets[m].layers)}}})(),V=(function(){var N=[4,7,99];return function(b){if(b.chars&&!M(N,b.v)){var T,d=b.chars.length;for(T=0;T<d;T+=1){var m=b.chars[T];m.data&&m.data.shapes&&(y(m.data.shapes),m.data.ip=0,m.data.op=99999,m.data.st=0,m.data.sr=1,m.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},b.chars[T].t||(m.data.shapes.push({ty:"no"}),m.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}})(),j=(function(){var N=[5,7,15];function b(d){var m=d.t.p;typeof m.a=="number"&&(m.a={a:0,k:m.a}),typeof m.p=="number"&&(m.p={a:0,k:m.p}),typeof m.r=="number"&&(m.r={a:0,k:m.r})}function T(d){var m,D=d.length;for(m=0;m<D;m+=1)d[m].ty===5&&b(d[m])}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var m,D=d.assets.length;for(m=0;m<D;m+=1)d.assets[m].layers&&T(d.assets[m].layers)}}})(),it=(function(){var N=[4,1,9];function b(d){var m,D=d.length,I,G;for(m=0;m<D;m+=1)if(d[m].ty==="gr")b(d[m].it);else if(d[m].ty==="fl"||d[m].ty==="st")if(d[m].c.k&&d[m].c.k[0].i)for(G=d[m].c.k.length,I=0;I<G;I+=1)d[m].c.k[I].s&&(d[m].c.k[I].s[0]/=255,d[m].c.k[I].s[1]/=255,d[m].c.k[I].s[2]/=255,d[m].c.k[I].s[3]/=255),d[m].c.k[I].e&&(d[m].c.k[I].e[0]/=255,d[m].c.k[I].e[1]/=255,d[m].c.k[I].e[2]/=255,d[m].c.k[I].e[3]/=255);else d[m].c.k[0]/=255,d[m].c.k[1]/=255,d[m].c.k[2]/=255,d[m].c.k[3]/=255}function T(d){var m,D=d.length;for(m=0;m<D;m+=1)d[m].ty===4&&b(d[m].shapes)}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var m,D=d.assets.length;for(m=0;m<D;m+=1)d.assets[m].layers&&T(d.assets[m].layers)}}})(),Z=(function(){var N=[4,4,18];function b(d){var m,D=d.length,I,G;for(m=D-1;m>=0;m-=1)if(d[m].ty==="sh")if(d[m].ks.k.i)d[m].ks.k.c=d[m].closed;else for(G=d[m].ks.k.length,I=0;I<G;I+=1)d[m].ks.k[I].s&&(d[m].ks.k[I].s[0].c=d[m].closed),d[m].ks.k[I].e&&(d[m].ks.k[I].e[0].c=d[m].closed);else d[m].ty==="gr"&&b(d[m].it)}function T(d){var m,D,I=d.length,G,tt,st,dt;for(D=0;D<I;D+=1){if(m=d[D],m.hasMask){var pt=m.masksProperties;for(tt=pt.length,G=0;G<tt;G+=1)if(pt[G].pt.k.i)pt[G].pt.k.c=pt[G].cl;else for(dt=pt[G].pt.k.length,st=0;st<dt;st+=1)pt[G].pt.k[st].s&&(pt[G].pt.k[st].s[0].c=pt[G].cl),pt[G].pt.k[st].e&&(pt[G].pt.k[st].e[0].c=pt[G].cl)}m.ty===4&&b(m.shapes)}}return function(d){if(M(N,d.v)&&(T(d.layers),d.assets)){var m,D=d.assets.length;for(m=0;m<D;m+=1)d.assets[m].layers&&T(d.assets[m].layers)}}})();function H(N){N.__complete||(it(N),z(N),V(N),j(N),Z(N),L(N.layers,N.assets),$(N.chars,N.assets),N.__complete=!0)}function nt(N){N.t.a.length===0&&"m"in N.t.p}var Y={};return Y.completeData=H,Y.checkColors=it,Y.checkChars=V,Y.checkPathProperties=j,Y.checkShapes=Z,Y.completeLayers=L,Y}if(o.dataManager||(o.dataManager=C()),o.assetLoader||(o.assetLoader=(function(){function L(w){var g=w.getResponseHeader("content-type");return g&&w.responseType==="json"&&g.indexOf("json")!==-1||w.response&&ir(w.response)==="object"?w.response:w.response&&typeof w.response=="string"?JSON.parse(w.response):w.responseText?JSON.parse(w.responseText):null}function $(w,g,y,S){var M,z=new XMLHttpRequest;try{z.responseType="json"}catch{}z.onreadystatechange=function(){if(z.readyState===4)if(z.status===200)M=L(z),y(M);else try{M=L(z),y(M)}catch(V){S&&S(V)}};try{z.open(["G","E","T"].join(""),w,!0)}catch{z.open(["G","E","T"].join(""),g+"/"+w,!0)}z.send()}return{load:$}})()),E.data.type==="loadAnimation")o.assetLoader.load(E.data.path,E.data.fullPath,function(L){o.dataManager.completeData(L),o.postMessage({id:E.data.id,payload:L,status:"success"})},function(){o.postMessage({id:E.data.id,status:"error"})});else if(E.data.type==="complete"){var P=E.data.animation;o.dataManager.completeData(P),o.postMessage({id:E.data.id,payload:P,status:"success"})}else E.data.type==="loadData"&&o.assetLoader.load(E.data.path,E.data.fullPath,function(L){o.postMessage({id:E.data.id,payload:L,status:"success"})},function(){o.postMessage({id:E.data.id,status:"error"})})}),a.onmessage=function(v){var E=v.data,C=E.id,P=e[C];e[C]=null,E.status==="success"?P.onComplete(E.payload):P.onError&&P.onError()})}function u(v,E){t+=1;var C="processId_"+t;return e[C]={onComplete:v,onError:E},C}function k(v,E,C){_();var P=u(E,C);a.postMessage({type:"loadAnimation",path:v,fullPath:window.location.origin+window.location.pathname,id:P})}function A(v,E,C){_();var P=u(E,C);a.postMessage({type:"loadData",path:v,fullPath:window.location.origin+window.location.pathname,id:P})}function O(v,E,C){_();var P=u(E,C);a.postMessage({type:"complete",animation:v,id:P})}return{loadAnimation:k,loadData:A,completeAnimation:O}})(),Qn=(function(){var t=(function(){var $=U("canvas");$.width=1,$.height=1;var w=$.getContext("2d");return w.fillStyle="rgba(0,0,0,0)",w.fillRect(0,0,1,1),$})();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function s(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function a($,w,g){var y="";if($.e)y=$.p;else if(w){var S=$.p;S.indexOf("images/")!==-1&&(S=S.split("/")[1]),y=w+S}else y=g,y+=$.u?$.u:"",y+=$.p;return y}function l($){var w=0,g=setInterval(function(){var y=$.getBBox();(y.width||w>500)&&(this._imageLoaded(),clearInterval(g)),w+=1}.bind(this),50)}function o($){var w=a($,this.assetsPath,this.path),g=at("image");is?this.testImageLoaded(g):g.addEventListener("load",this._imageLoaded,!1),g.addEventListener("error",function(){y.img=t,this._imageLoaded()}.bind(this),!1),g.setAttributeNS("http://www.w3.org/1999/xlink","href",w),this._elementHelper.append?this._elementHelper.append(g):this._elementHelper.appendChild(g);var y={img:g,assetData:$};return y}function p($){var w=a($,this.assetsPath,this.path),g=U("img");g.crossOrigin="anonymous",g.addEventListener("load",this._imageLoaded,!1),g.addEventListener("error",function(){y.img=t,this._imageLoaded()}.bind(this),!1),g.src=w;var y={img:g,assetData:$};return y}function _($){var w={assetData:$},g=a($,this.assetsPath,this.path);return Pi.loadData(g,function(y){w.img=y,this._footageLoaded()}.bind(this),function(){w.img={},this._footageLoaded()}.bind(this)),w}function u($,w){this.imagesLoadedCb=w;var g,y=$.length;for(g=0;g<y;g+=1)$[g].layers||(!$[g].t||$[g].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData($[g]))):$[g].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData($[g]))))}function k($){this.path=$||""}function A($){this.assetsPath=$||""}function O($){for(var w=0,g=this.images.length;w<g;){if(this.images[w].assetData===$)return this.images[w].img;w+=1}return null}function v(){this.imagesLoadedCb=null,this.images.length=0}function E(){return this.totalImages===this.loadedAssets}function C(){return this.totalFootages===this.loadedFootagesCount}function P($,w){$==="svg"?(this._elementHelper=w,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function L(){this._imageLoaded=e.bind(this),this._footageLoaded=s.bind(this),this.testImageLoaded=l.bind(this),this.createFootageData=_.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return L.prototype={loadAssets:u,setAssetsPath:A,setPath:k,loadedImages:E,loadedFootages:C,destroy:v,getAsset:O,createImgData:p,createImageData:o,imageLoaded:e,footageLoaded:s,setCacheType:P},L})();function Gr(){}Gr.prototype={triggerEvent:function(e,s){if(this._cbs[e])for(var a=this._cbs[e],l=0;l<a.length;l+=1)a[l](s)},addEventListener:function(e,s){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(s),function(){this.removeEventListener(e,s)}.bind(this)},removeEventListener:function(e,s){if(!s)this._cbs[e]=null;else if(this._cbs[e]){for(var a=0,l=this._cbs[e].length;a<l;)this._cbs[e][a]===s&&(this._cbs[e].splice(a,1),a-=1,l-=1),a+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var to=(function(){function t(e){for(var s=e.split(`\r
`),a={},l,o=0,p=0;p<s.length;p+=1)l=s[p].split(":"),l.length===2&&(a[l[0]]=l[1].trim(),o+=1);if(o===0)throw new Error;return a}return function(e){for(var s=[],a=0;a<e.length;a+=1){var l=e[a],o={time:l.tm,duration:l.dr};try{o.payload=JSON.parse(e[a].cm)}catch{try{o.payload=t(e[a].cm)}catch{o.payload={name:e[a].cm}}}s.push(o)}return s}})(),eo=(function(){function t(e){this.compositions.push(e)}return function(){function e(s){for(var a=0,l=this.compositions.length;a<l;){if(this.compositions[a].data&&this.compositions[a].data.nm===s)return this.compositions[a].prepareFrame&&this.compositions[a].data.xt&&this.compositions[a].prepareFrame(this.currentFrame),this.compositions[a].compInterface;a+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}})(),Ti={},io=function(e,s){Ti[e]=s};function so(t){return Ti[t]}function ro(){if(Ti.canvas)return"canvas";for(var t in Ti)if(Ti[t])return t;return""}function ns(t){"@babel/helpers - typeof";return ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ns(t)}var Q=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Rt(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=Xn(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=eo(),this.imagePreloader=new Qn,this.audioController=rt(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new Be("drawnFrame",0,0,0),this.expressionsPlugin=rs()};B([Gr],Q),Q.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var s=so(e);this.renderer=new s(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),Pi.loadAnimation(t.path,this.configAnimation,this.onSetupError))},Q.prototype.onSetupError=function(){this.trigger("data_failed")},Q.prototype.setupAnimation=function(t){Pi.completeAnimation(t,this.configAnimation)},Q.prototype.setData=function(t,e){e&&ns(e)!=="object"&&(e=JSON.parse(e));var s={wrapper:t,animationData:e},a=t.attributes;s.path=a.getNamedItem("data-animation-path")?a.getNamedItem("data-animation-path").value:a.getNamedItem("data-bm-path")?a.getNamedItem("data-bm-path").value:a.getNamedItem("bm-path")?a.getNamedItem("bm-path").value:"",s.animType=a.getNamedItem("data-anim-type")?a.getNamedItem("data-anim-type").value:a.getNamedItem("data-bm-type")?a.getNamedItem("data-bm-type").value:a.getNamedItem("bm-type")?a.getNamedItem("bm-type").value:a.getNamedItem("data-bm-renderer")?a.getNamedItem("data-bm-renderer").value:a.getNamedItem("bm-renderer")?a.getNamedItem("bm-renderer").value:ro()||"canvas";var l=a.getNamedItem("data-anim-loop")?a.getNamedItem("data-anim-loop").value:a.getNamedItem("data-bm-loop")?a.getNamedItem("data-bm-loop").value:a.getNamedItem("bm-loop")?a.getNamedItem("bm-loop").value:"";l==="false"?s.loop=!1:l==="true"?s.loop=!0:l!==""&&(s.loop=parseInt(l,10));var o=a.getNamedItem("data-anim-autoplay")?a.getNamedItem("data-anim-autoplay").value:a.getNamedItem("data-bm-autoplay")?a.getNamedItem("data-bm-autoplay").value:a.getNamedItem("bm-autoplay")?a.getNamedItem("bm-autoplay").value:!0;s.autoplay=o!=="false",s.name=a.getNamedItem("data-name")?a.getNamedItem("data-name").value:a.getNamedItem("data-bm-name")?a.getNamedItem("data-bm-name").value:a.getNamedItem("bm-name")?a.getNamedItem("bm-name").value:"";var p=a.getNamedItem("data-anim-prerender")?a.getNamedItem("data-anim-prerender").value:a.getNamedItem("data-bm-prerender")?a.getNamedItem("data-bm-prerender").value:a.getNamedItem("bm-prerender")?a.getNamedItem("bm-prerender").value:"";p==="false"&&(s.prerender=!1),s.path?this.setParams(s):this.trigger("destroy")},Q.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,s,a=e.length,l=t.layers,o,p=l.length;for(o=0;o<p;o+=1)for(s=0;s<a;){if(e[s].id===l[o].id){e[s]=l[o];break}s+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(a=t.assets.length,s=0;s<a;s+=1)this.animationData.assets.push(t.assets[s]);this.animationData.__complete=!1,Pi.completeAnimation(this.animationData,this.onSegmentComplete)},Q.prototype.onSegmentComplete=function(t){this.animationData=t;var e=rs();e&&e.initExpressions(this),this.loadNextSegment()},Q.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var s=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,Pi.loadData(s,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},Q.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},Q.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},Q.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},Q.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=to(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},Q.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},Q.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=rs();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},Q.prototype.resize=function(t,e){var s=typeof t=="number"?t:void 0,a=typeof e=="number"?e:void 0;this.renderer.updateContainerSize(s,a)},Q.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},Q.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},Q.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},Q.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},Q.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},Q.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},Q.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},Q.prototype.getMarkerData=function(t){for(var e,s=0;s<this.markers.length;s+=1)if(e=this.markers[s],e.payload&&e.payload.name===t)return e;return null},Q.prototype.goToAndStop=function(t,e,s){if(!(s&&this.name!==s)){var a=Number(t);if(isNaN(a)){var l=this.getMarkerData(t);l&&this.goToAndStop(l.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},Q.prototype.goToAndPlay=function(t,e,s){if(!(s&&this.name!==s)){var a=Number(t);if(isNaN(a)){var l=this.getMarkerData(t);l&&(l.duration?this.playSegments([l.time,l.time+l.duration],!0):this.goToAndStop(l.time,!0))}else this.goToAndStop(a,e,s);this.play()}},Q.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,s=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(s=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(s=!0,e=0)):this.setCurrentRawFrameValue(e),s&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},Q.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},Q.prototype.setSegment=function(t,e){var s=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?s=t:this.currentRawFrame+this.firstFrame>e&&(s=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,s!==-1&&this.goToAndStop(s,!0)},Q.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),ns(t[0])==="object"){var s,a=t.length;for(s=0;s<a;s+=1)this.segments.push(t[s])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},Q.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},Q.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},Q.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},Q.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},Q.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},Q.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},Q.prototype.setLoop=function(t){this.loop=t},Q.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},Q.prototype.getVolume=function(){return this.audioController.getVolume()},Q.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},Q.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},Q.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},Q.prototype.getPath=function(){return this.path},Q.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var s=t.p;s.indexOf("images/")!==-1&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},Q.prototype.getAssetData=function(t){for(var e=0,s=this.assets.length;e<s;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},Q.prototype.hide=function(){this.renderer.hide()},Q.prototype.show=function(){this.renderer.show()},Q.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},Q.prototype.updateDocumentData=function(t,e,s){try{var a=this.renderer.getElementByPath(t);a.updateDocumentData(e,s)}catch{}},Q.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new Be(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new je(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new Ne(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new si(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new Br(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new Be(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new je(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new Ne(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new si(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new Br(t,this))},Q.prototype.triggerRenderFrameError=function(t){var e=new qn(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},Q.prototype.triggerConfigError=function(t){var e=new Yn(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var bt=(function(){var t={},e=[],s=0,a=0,l=0,o=!0,p=!1;function _(b){for(var T=0,d=b.target;T<a;)e[T].animation===d&&(e.splice(T,1),T-=1,a-=1,d.isPaused||O()),T+=1}function u(b,T){if(!b)return null;for(var d=0;d<a;){if(e[d].elem===b&&e[d].elem!==null)return e[d].animation;d+=1}var m=new Q;return v(m,b),m.setData(b,T),m}function k(){var b,T=e.length,d=[];for(b=0;b<T;b+=1)d.push(e[b].animation);return d}function A(){l+=1,it()}function O(){l-=1}function v(b,T){b.addEventListener("destroy",_),b.addEventListener("_active",A),b.addEventListener("_idle",O),e.push({elem:T,animation:b}),a+=1}function E(b){var T=new Q;return v(T,null),T.setParams(b),T}function C(b,T){var d;for(d=0;d<a;d+=1)e[d].animation.setSpeed(b,T)}function P(b,T){var d;for(d=0;d<a;d+=1)e[d].animation.setDirection(b,T)}function L(b){var T;for(T=0;T<a;T+=1)e[T].animation.play(b)}function $(b){var T=b-s,d;for(d=0;d<a;d+=1)e[d].animation.advanceTime(T);s=b,l&&!p?window.requestAnimationFrame($):o=!0}function w(b){s=b,window.requestAnimationFrame($)}function g(b){var T;for(T=0;T<a;T+=1)e[T].animation.pause(b)}function y(b,T,d){var m;for(m=0;m<a;m+=1)e[m].animation.goToAndStop(b,T,d)}function S(b){var T;for(T=0;T<a;T+=1)e[T].animation.stop(b)}function M(b){var T;for(T=0;T<a;T+=1)e[T].animation.togglePause(b)}function z(b){var T;for(T=a-1;T>=0;T-=1)e[T].animation.destroy(b)}function V(b,T,d){var m=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),D,I=m.length;for(D=0;D<I;D+=1)d&&m[D].setAttribute("data-bm-type",d),u(m[D],b);if(T&&I===0){d||(d="svg");var G=document.getElementsByTagName("body")[0];G.innerText="";var tt=U("div");tt.style.width="100%",tt.style.height="100%",tt.setAttribute("data-bm-type",d),G.appendChild(tt),u(tt,b)}}function j(){var b;for(b=0;b<a;b+=1)e[b].animation.resize()}function it(){!p&&l&&o&&(window.requestAnimationFrame(w),o=!1)}function Z(){p=!0}function H(){p=!1,it()}function nt(b,T){var d;for(d=0;d<a;d+=1)e[d].animation.setVolume(b,T)}function Y(b){var T;for(T=0;T<a;T+=1)e[T].animation.mute(b)}function N(b){var T;for(T=0;T<a;T+=1)e[T].animation.unmute(b)}return t.registerAnimation=u,t.loadAnimation=E,t.setSpeed=C,t.setDirection=P,t.play=L,t.pause=g,t.stop=S,t.togglePause=M,t.searchAnimations=V,t.resize=j,t.goToAndStop=y,t.destroy=z,t.freeze=Z,t.unfreeze=H,t.setVolume=nt,t.mute=Y,t.unmute=N,t.getRegisteredAnimations=k,t})(),Ci=(function(){var t={};t.getBezierEasing=s;var e={};function s(w,g,y,S,M){var z=M||("bez_"+w+"_"+g+"_"+y+"_"+S).replace(/\./g,"p");if(e[z])return e[z];var V=new $([w,g,y,S]);return e[z]=V,V}var a=4,l=.001,o=1e-7,p=10,_=11,u=1/(_-1),k=typeof Float32Array=="function";function A(w,g){return 1-3*g+3*w}function O(w,g){return 3*g-6*w}function v(w){return 3*w}function E(w,g,y){return((A(g,y)*w+O(g,y))*w+v(g))*w}function C(w,g,y){return 3*A(g,y)*w*w+2*O(g,y)*w+v(g)}function P(w,g,y,S,M){var z,V,j=0;do V=g+(y-g)/2,z=E(V,S,M)-w,z>0?y=V:g=V;while(Math.abs(z)>o&&++j<p);return V}function L(w,g,y,S){for(var M=0;M<a;++M){var z=C(g,y,S);if(z===0)return g;var V=E(g,y,S)-w;g-=V/z}return g}function $(w){this._p=w,this._mSampleValues=k?new Float32Array(_):new Array(_),this._precomputed=!1,this.get=this.get.bind(this)}return $.prototype={get:function(g){var y=this._p[0],S=this._p[1],M=this._p[2],z=this._p[3];return this._precomputed||this._precompute(),y===S&&M===z?g:g===0?0:g===1?1:E(this._getTForX(g),S,z)},_precompute:function(){var g=this._p[0],y=this._p[1],S=this._p[2],M=this._p[3];this._precomputed=!0,(g!==y||S!==M)&&this._calcSampleValues()},_calcSampleValues:function(){for(var g=this._p[0],y=this._p[2],S=0;S<_;++S)this._mSampleValues[S]=E(S*u,g,y)},_getTForX:function(g){for(var y=this._p[0],S=this._p[2],M=this._mSampleValues,z=0,V=1,j=_-1;V!==j&&M[V]<=g;++V)z+=u;--V;var it=(g-M[V])/(M[V+1]-M[V]),Z=z+it*u,H=C(Z,y,S);return H>=l?L(g,Z,y,S):H===0?Z:P(g,z,z+u,y,S)}},t})(),qr=(function(){function t(e){return e.concat(ct(e.length))}return{double:t}})(),os=(function(){return function(t,e,s){var a=0,l=t,o=ct(l),p={newElement:_,release:u};function _(){var k;return a?(a-=1,k=o[a]):k=e(),k}function u(k){a===l&&(o=qr.double(o),l*=2),s&&s(k),o[a]=k,a+=1}return p}})(),Yr=(function(){function t(){return{addedLength:0,percents:ot("float32",Ei()),lengths:ot("float32",Ei())}}return os(8,t)})(),Kr=(function(){function t(){return{lengths:[],totalLength:0}}function e(s){var a,l=s.lengths.length;for(a=0;a<l;a+=1)Yr.release(s.lengths[a]);s.lengths.length=0}return os(8,t,e)})();function ao(){var t=Math;function e(v,E,C,P,L,$){var w=v*P+E*L+C*$-L*P-$*v-C*E;return w>-.001&&w<.001}function s(v,E,C,P,L,$,w,g,y){if(C===0&&$===0&&y===0)return e(v,E,P,L,w,g);var S=t.sqrt(t.pow(P-v,2)+t.pow(L-E,2)+t.pow($-C,2)),M=t.sqrt(t.pow(w-v,2)+t.pow(g-E,2)+t.pow(y-C,2)),z=t.sqrt(t.pow(w-P,2)+t.pow(g-L,2)+t.pow(y-$,2)),V;return S>M?S>z?V=S-M-z:V=z-M-S:z>M?V=z-M-S:V=M-S-z,V>-1e-4&&V<1e-4}var a=(function(){return function(v,E,C,P){var L=Ei(),$,w,g,y,S,M=0,z,V=[],j=[],it=Yr.newElement();for(g=C.length,$=0;$<L;$+=1){for(S=$/(L-1),z=0,w=0;w<g;w+=1)y=zt(1-S,3)*v[w]+3*zt(1-S,2)*S*C[w]+3*(1-S)*zt(S,2)*P[w]+zt(S,3)*E[w],V[w]=y,j[w]!==null&&(z+=zt(V[w]-j[w],2)),j[w]=V[w];z&&(z=ei(z),M+=z),it.percents[$]=S,it.lengths[$]=M}return it.addedLength=M,it}})();function l(v){var E=Kr.newElement(),C=v.c,P=v.v,L=v.o,$=v.i,w,g=v._length,y=E.lengths,S=0;for(w=0;w<g-1;w+=1)y[w]=a(P[w],P[w+1],L[w],$[w+1]),S+=y[w].addedLength;return C&&g&&(y[w]=a(P[w],P[0],L[w],$[0]),S+=y[w].addedLength),E.totalLength=S,E}function o(v){this.segmentLength=0,this.points=new Array(v)}function p(v,E){this.partialLength=v,this.point=E}var _=(function(){var v={};return function(E,C,P,L){var $=(E[0]+"_"+E[1]+"_"+C[0]+"_"+C[1]+"_"+P[0]+"_"+P[1]+"_"+L[0]+"_"+L[1]).replace(/\./g,"p");if(!v[$]){var w=Ei(),g,y,S,M,z,V=0,j,it,Z=null;E.length===2&&(E[0]!==C[0]||E[1]!==C[1])&&e(E[0],E[1],C[0],C[1],E[0]+P[0],E[1]+P[1])&&e(E[0],E[1],C[0],C[1],C[0]+L[0],C[1]+L[1])&&(w=2);var H=new o(w);for(S=P.length,g=0;g<w;g+=1){for(it=ct(S),z=g/(w-1),j=0,y=0;y<S;y+=1)M=zt(1-z,3)*E[y]+3*zt(1-z,2)*z*(E[y]+P[y])+3*(1-z)*zt(z,2)*(C[y]+L[y])+zt(z,3)*C[y],it[y]=M,Z!==null&&(j+=zt(it[y]-Z[y],2));j=ei(j),V+=j,H.points[g]=new p(j,it),Z=it}H.segmentLength=V,v[$]=H}return v[$]}})();function u(v,E){var C=E.percents,P=E.lengths,L=C.length,$=ae((L-1)*v),w=v*E.addedLength,g=0;if($===L-1||$===0||w===P[$])return C[$];for(var y=P[$]>w?-1:1,S=!0;S;)if(P[$]<=w&&P[$+1]>w?(g=(w-P[$])/(P[$+1]-P[$]),S=!1):$+=y,$<0||$>=L-1){if($===L-1)return C[$];S=!1}return C[$]+(C[$+1]-C[$])*g}function k(v,E,C,P,L,$){var w=u(L,$),g=1-w,y=t.round((g*g*g*v[0]+(w*g*g+g*w*g+g*g*w)*C[0]+(w*w*g+g*w*w+w*g*w)*P[0]+w*w*w*E[0])*1e3)/1e3,S=t.round((g*g*g*v[1]+(w*g*g+g*w*g+g*g*w)*C[1]+(w*w*g+g*w*w+w*g*w)*P[1]+w*w*w*E[1])*1e3)/1e3;return[y,S]}var A=ot("float32",8);function O(v,E,C,P,L,$,w){L<0?L=0:L>1&&(L=1);var g=u(L,w);$=$>1?1:$;var y=u($,w),S,M=v.length,z=1-g,V=1-y,j=z*z*z,it=g*z*z*3,Z=g*g*z*3,H=g*g*g,nt=z*z*V,Y=g*z*V+z*g*V+z*z*y,N=g*g*V+z*g*y+g*z*y,b=g*g*y,T=z*V*V,d=g*V*V+z*y*V+z*V*y,m=g*y*V+z*y*y+g*V*y,D=g*y*y,I=V*V*V,G=y*V*V+V*y*V+V*V*y,tt=y*y*V+V*y*y+y*V*y,st=y*y*y;for(S=0;S<M;S+=1)A[S*4]=t.round((j*v[S]+it*C[S]+Z*P[S]+H*E[S])*1e3)/1e3,A[S*4+1]=t.round((nt*v[S]+Y*C[S]+N*P[S]+b*E[S])*1e3)/1e3,A[S*4+2]=t.round((T*v[S]+d*C[S]+m*P[S]+D*E[S])*1e3)/1e3,A[S*4+3]=t.round((I*v[S]+G*C[S]+tt*P[S]+st*E[S])*1e3)/1e3;return A}return{getSegmentsLength:l,getNewSegment:O,getPointInSegment:k,buildBezierData:_,pointOnLine2D:e,pointOnLine3D:s}}var ne=ao(),He=n,Xr=Math.abs;function Zr(t,e){var s=this.offsetTime,a;this.propType==="multidimensional"&&(a=ot("float32",this.pv.length));for(var l=e.lastIndex,o=l,p=this.keyframes.length-1,_=!0,u,k,A;_;){if(u=this.keyframes[o],k=this.keyframes[o+1],o===p-1&&t>=k.t-s){u.h&&(u=k),l=0;break}if(k.t-s>t){l=o;break}o<p-1?o+=1:(l=0,_=!1)}A=this.keyframesMetadata[o]||{};var O,v,E,C,P,L,$=k.t-s,w=u.t-s,g;if(u.to){A.bezierData||(A.bezierData=ne.buildBezierData(u.s,k.s||u.e,u.to,u.ti));var y=A.bezierData;if(t>=$||t<w){var S=t>=$?y.points.length-1:0;for(v=y.points[S].point.length,O=0;O<v;O+=1)a[O]=y.points[S].point[O]}else{A.__fnct?L=A.__fnct:(L=Ci.getBezierEasing(u.o.x,u.o.y,u.i.x,u.i.y,u.n).get,A.__fnct=L),E=L((t-w)/($-w));var M=y.segmentLength*E,z,V=e.lastFrame<t&&e._lastKeyframeIndex===o?e._lastAddedLength:0;for(P=e.lastFrame<t&&e._lastKeyframeIndex===o?e._lastPoint:0,_=!0,C=y.points.length;_;){if(V+=y.points[P].partialLength,M===0||E===0||P===y.points.length-1){for(v=y.points[P].point.length,O=0;O<v;O+=1)a[O]=y.points[P].point[O];break}else if(M>=V&&M<V+y.points[P+1].partialLength){for(z=(M-V)/y.points[P+1].partialLength,v=y.points[P].point.length,O=0;O<v;O+=1)a[O]=y.points[P].point[O]+(y.points[P+1].point[O]-y.points[P].point[O])*z;break}P<C-1?P+=1:_=!1}e._lastPoint=P,e._lastAddedLength=V-y.points[P].partialLength,e._lastKeyframeIndex=o}}else{var j,it,Z,H,nt;if(p=u.s.length,g=k.s||u.e,this.sh&&u.h!==1)if(t>=$)a[0]=g[0],a[1]=g[1],a[2]=g[2];else if(t<=w)a[0]=u.s[0],a[1]=u.s[1],a[2]=u.s[2];else{var Y=Jr(u.s),N=Jr(g),b=(t-w)/($-w);oo(a,no(Y,N,b))}else for(o=0;o<p;o+=1)u.h!==1&&(t>=$?E=1:t<w?E=0:(u.o.x.constructor===Array?(A.__fnct||(A.__fnct=[]),A.__fnct[o]?L=A.__fnct[o]:(j=u.o.x[o]===void 0?u.o.x[0]:u.o.x[o],it=u.o.y[o]===void 0?u.o.y[0]:u.o.y[o],Z=u.i.x[o]===void 0?u.i.x[0]:u.i.x[o],H=u.i.y[o]===void 0?u.i.y[0]:u.i.y[o],L=Ci.getBezierEasing(j,it,Z,H).get,A.__fnct[o]=L)):A.__fnct?L=A.__fnct:(j=u.o.x,it=u.o.y,Z=u.i.x,H=u.i.y,L=Ci.getBezierEasing(j,it,Z,H).get,u.keyframeMetadata=L),E=L((t-w)/($-w)))),g=k.s||u.e,nt=u.h===1?u.s[o]:u.s[o]+(g[o]-u.s[o])*E,this.propType==="multidimensional"?a[o]=nt:a=nt}return e.lastIndex=l,a}function no(t,e,s){var a=[],l=t[0],o=t[1],p=t[2],_=t[3],u=e[0],k=e[1],A=e[2],O=e[3],v,E,C,P,L;return E=l*u+o*k+p*A+_*O,E<0&&(E=-E,u=-u,k=-k,A=-A,O=-O),1-E>1e-6?(v=Math.acos(E),C=Math.sin(v),P=Math.sin((1-s)*v)/C,L=Math.sin(s*v)/C):(P=1-s,L=s),a[0]=P*l+L*u,a[1]=P*o+L*k,a[2]=P*p+L*A,a[3]=P*_+L*O,a}function oo(t,e){var s=e[0],a=e[1],l=e[2],o=e[3],p=Math.atan2(2*a*o-2*s*l,1-2*a*a-2*l*l),_=Math.asin(2*s*a+2*l*o),u=Math.atan2(2*s*o-2*a*l,1-2*s*s-2*l*l);t[0]=p/vt,t[1]=_/vt,t[2]=u/vt}function Jr(t){var e=t[0]*vt,s=t[1]*vt,a=t[2]*vt,l=Math.cos(e/2),o=Math.cos(s/2),p=Math.cos(a/2),_=Math.sin(e/2),u=Math.sin(s/2),k=Math.sin(a/2),A=l*o*p-_*u*k,O=_*u*p+l*o*k,v=_*o*p+l*u*k,E=l*u*p-_*o*k;return[O,v,E,A]}function Qr(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==He&&(this._caching.lastFrame>=s&&t>=s||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var a=this.interpolateValue(t,this._caching);this.pv=a}return this._caching.lastFrame=t,this.pv}function ls(t){var e;if(this.propType==="unidimensional")e=t*this.mult,Xr(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var s=0,a=this.v.length;s<a;)e=t[s]*this.mult,Xr(this.v[s]-e)>1e-5&&(this.v[s]=e,this._mdf=!0),s+=1}function hs(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,s=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)s=this.effectsSequence[t](s);this.setVValue(s),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function cs(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function lo(t,e,s,a){this.propType="unidimensional",this.mult=s||1,this.data=e,this.v=s?e.k*s:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=a,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=hs,this.setVValue=ls,this.addEffect=cs}function ho(t,e,s,a){this.propType="multidimensional",this.mult=s||1,this.data=e,this._mdf=!1,this.elem=t,this.container=a,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var l,o=e.k.length;for(this.v=ot("float32",o),this.pv=ot("float32",o),this.vel=ot("float32",o),l=0;l<o;l+=1)this.v[l]=e.k[l]*this.mult,this.pv[l]=e.k[l];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=hs,this.setVValue=ls,this.addEffect=cs}function co(t,e,s,a){this.propType="unidimensional",this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:He,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=s||1,this.elem=t,this.container=a,this.comp=t.comp,this.v=He,this.pv=He,this._isFirstFrame=!0,this.getValue=hs,this.setVValue=ls,this.interpolateValue=Zr,this.effectsSequence=[Qr.bind(this)],this.addEffect=cs}function po(t,e,s,a){this.propType="multidimensional";var l,o=e.k.length,p,_,u,k;for(l=0;l<o-1;l+=1)e.k[l].to&&e.k[l].s&&e.k[l+1]&&e.k[l+1].s&&(p=e.k[l].s,_=e.k[l+1].s,u=e.k[l].to,k=e.k[l].ti,(p.length===2&&!(p[0]===_[0]&&p[1]===_[1])&&ne.pointOnLine2D(p[0],p[1],_[0],_[1],p[0]+u[0],p[1]+u[1])&&ne.pointOnLine2D(p[0],p[1],_[0],_[1],_[0]+k[0],_[1]+k[1])||p.length===3&&!(p[0]===_[0]&&p[1]===_[1]&&p[2]===_[2])&&ne.pointOnLine3D(p[0],p[1],p[2],_[0],_[1],_[2],p[0]+u[0],p[1]+u[1],p[2]+u[2])&&ne.pointOnLine3D(p[0],p[1],p[2],_[0],_[1],_[2],_[0]+k[0],_[1]+k[1],_[2]+k[2]))&&(e.k[l].to=null,e.k[l].ti=null),p[0]===_[0]&&p[1]===_[1]&&u[0]===0&&u[1]===0&&k[0]===0&&k[1]===0&&(p.length===2||p[2]===_[2]&&u[2]===0&&k[2]===0)&&(e.k[l].to=null,e.k[l].ti=null));this.effectsSequence=[Qr.bind(this)],this.data=e,this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=s||1,this.elem=t,this.container=a,this.comp=t.comp,this.getValue=hs,this.setVValue=ls,this.interpolateValue=Zr,this.frameId=-1;var A=e.k[0].s.length;for(this.v=ot("float32",A),this.pv=ot("float32",A),l=0;l<A;l+=1)this.v[l]=He,this.pv[l]=He;this._caching={lastFrame:He,lastIndex:0,value:ot("float32",A)},this.addEffect=cs}var W=(function(){function t(s,a,l,o,p){a.sid&&(a=s.globalData.slotManager.getProp(a));var _;if(!a.k.length)_=new lo(s,a,o,p);else if(typeof a.k[0]=="number")_=new ho(s,a,o,p);else switch(l){case 0:_=new co(s,a,o,p);break;case 1:_=new po(s,a,o,p);break;default:break}return _.effectsSequence.length&&p.addDynamicProperty(_),_}var e={getProp:t};return e})();function At(){}At.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,s=this.dynamicProperties.length;for(e=0;e<s;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var We=(function(){function t(){return ot("float32",2)}return os(8,t)})();function fe(){this.c=!1,this._length=0,this._maxLength=8,this.v=ct(this._maxLength),this.o=ct(this._maxLength),this.i=ct(this._maxLength)}fe.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var s=0;s<e;)this.v[s]=We.newElement(),this.o[s]=We.newElement(),this.i[s]=We.newElement(),s+=1},fe.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},fe.prototype.doubleArrayLength=function(){this.v=this.v.concat(ct(this._maxLength)),this.i=this.i.concat(ct(this._maxLength)),this.o=this.o.concat(ct(this._maxLength)),this._maxLength*=2},fe.prototype.setXYAt=function(t,e,s,a,l){var o;switch(this._length=Math.max(this._length,a+1),this._length>=this._maxLength&&this.doubleArrayLength(),s){case"v":o=this.v;break;case"i":o=this.i;break;case"o":o=this.o;break;default:o=[];break}(!o[a]||o[a]&&!l)&&(o[a]=We.newElement()),o[a][0]=t,o[a][1]=e},fe.prototype.setTripleAt=function(t,e,s,a,l,o,p,_){this.setXYAt(t,e,"v",p,_),this.setXYAt(s,a,"o",p,_),this.setXYAt(l,o,"i",p,_)},fe.prototype.reverse=function(){var t=new fe;t.setPathData(this.c,this._length);var e=this.v,s=this.o,a=this.i,l=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],a[0][0],a[0][1],s[0][0],s[0][1],0,!1),l=1);var o=this._length-1,p=this._length,_;for(_=l;_<p;_+=1)t.setTripleAt(e[o][0],e[o][1],a[o][0],a[o][1],s[o][0],s[o][1],_,!1),o-=1;return t},fe.prototype.length=function(){return this._length};var Ct=(function(){function t(){return new fe}function e(l){var o=l._length,p;for(p=0;p<o;p+=1)We.release(l.v[p]),We.release(l.i[p]),We.release(l.o[p]),l.v[p]=null,l.i[p]=null,l.o[p]=null;l._length=0,l.c=!1}function s(l){var o=a.newElement(),p,_=l._length===void 0?l.v.length:l._length;for(o.setLength(_),o.c=l.c,p=0;p<_;p+=1)o.setTripleAt(l.v[p][0],l.v[p][1],l.o[p][0],l.o[p][1],l.i[p][0],l.i[p][1],p);return o}var a=os(4,t,e);return a.clone=s,a})();function sr(){this._length=0,this._maxLength=4,this.shapes=ct(this._maxLength)}sr.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(ct(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},sr.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)Ct.release(this.shapes[t]);this._length=0};var ri=(function(){var t={newShapeCollection:l,release:o},e=0,s=4,a=ct(s);function l(){var p;return e?(e-=1,p=a[e]):p=new sr,p}function o(p){var _,u=p._length;for(_=0;_<u;_+=1)Ct.release(p.shapes[_]);p._length=0,e===s&&(a=qr.double(a),s*=2),a[e]=p,e+=1}return t})(),ds=(function(){var t=-999999;function e($,w,g){var y=g.lastIndex,S,M,z,V,j,it,Z,H,nt,Y=this.keyframes;if($<Y[0].t-this.offsetTime)S=Y[0].s[0],z=!0,y=0;else if($>=Y[Y.length-1].t-this.offsetTime)S=Y[Y.length-1].s?Y[Y.length-1].s[0]:Y[Y.length-2].e[0],z=!0;else{for(var N=y,b=Y.length-1,T=!0,d,m,D;T&&(d=Y[N],m=Y[N+1],!(m.t-this.offsetTime>$));)N<b-1?N+=1:T=!1;if(D=this.keyframesMetadata[N]||{},z=d.h===1,y=N,!z){if($>=m.t-this.offsetTime)H=1;else if($<d.t-this.offsetTime)H=0;else{var I;D.__fnct?I=D.__fnct:(I=Ci.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y).get,D.__fnct=I),H=I(($-(d.t-this.offsetTime))/(m.t-this.offsetTime-(d.t-this.offsetTime)))}M=m.s?m.s[0]:d.e[0]}S=d.s[0]}for(it=w._length,Z=S.i[0].length,g.lastIndex=y,V=0;V<it;V+=1)for(j=0;j<Z;j+=1)nt=z?S.i[V][j]:S.i[V][j]+(M.i[V][j]-S.i[V][j])*H,w.i[V][j]=nt,nt=z?S.o[V][j]:S.o[V][j]+(M.o[V][j]-S.o[V][j])*H,w.o[V][j]=nt,nt=z?S.v[V][j]:S.v[V][j]+(M.v[V][j]-S.v[V][j])*H,w.v[V][j]=nt}function s(){var $=this.comp.renderedFrame-this.offsetTime,w=this.keyframes[0].t-this.offsetTime,g=this.keyframes[this.keyframes.length-1].t-this.offsetTime,y=this._caching.lastFrame;return y!==t&&(y<w&&$<w||y>g&&$>g)||(this._caching.lastIndex=y<$?this._caching.lastIndex:0,this.interpolateShape($,this.pv,this._caching)),this._caching.lastFrame=$,this.pv}function a(){this.paths=this.localShapeCollection}function l($,w){if($._length!==w._length||$.c!==w.c)return!1;var g,y=$._length;for(g=0;g<y;g+=1)if($.v[g][0]!==w.v[g][0]||$.v[g][1]!==w.v[g][1]||$.o[g][0]!==w.o[g][0]||$.o[g][1]!==w.o[g][1]||$.i[g][0]!==w.i[g][0]||$.i[g][1]!==w.i[g][1])return!1;return!0}function o($){l(this.v,$)||(this.v=Ct.clone($),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function p(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var $;this.kf?$=this.pv:this.data.ks?$=this.data.ks.k:$=this.data.pt.k;var w,g=this.effectsSequence.length;for(w=0;w<g;w+=1)$=this.effectsSequence[w]($);this.setVValue($),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function _($,w,g){this.propType="shape",this.comp=$.comp,this.container=$,this.elem=$,this.data=w,this.k=!1,this.kf=!1,this._mdf=!1;var y=g===3?w.pt.k:w.ks.k;this.v=Ct.clone(y),this.pv=Ct.clone(this.v),this.localShapeCollection=ri.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=a,this.effectsSequence=[]}function u($){this.effectsSequence.push($),this.container.addDynamicProperty(this)}_.prototype.interpolateShape=e,_.prototype.getValue=p,_.prototype.setVValue=o,_.prototype.addEffect=u;function k($,w,g){this.propType="shape",this.comp=$.comp,this.elem=$,this.container=$,this.offsetTime=$.data.st,this.keyframes=g===3?w.pt.k:w.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var y=this.keyframes[0].s[0].i.length;this.v=Ct.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,y),this.pv=Ct.clone(this.v),this.localShapeCollection=ri.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=a,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[s.bind(this)]}k.prototype.getValue=p,k.prototype.interpolateShape=e,k.prototype.setVValue=o,k.prototype.addEffect=u;var A=(function(){var $=J;function w(g,y){this.v=Ct.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=ri.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=y.d,this.elem=g,this.comp=g.comp,this.frameId=-1,this.initDynamicPropertyContainer(g),this.p=W.getProp(g,y.p,1,0,this),this.s=W.getProp(g,y.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return w.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var y=this.p.v[0],S=this.p.v[1],M=this.s.v[0]/2,z=this.s.v[1]/2,V=this.d!==3,j=this.v;j.v[0][0]=y,j.v[0][1]=S-z,j.v[1][0]=V?y+M:y-M,j.v[1][1]=S,j.v[2][0]=y,j.v[2][1]=S+z,j.v[3][0]=V?y-M:y+M,j.v[3][1]=S,j.i[0][0]=V?y-M*$:y+M*$,j.i[0][1]=S-z,j.i[1][0]=V?y+M:y-M,j.i[1][1]=S-z*$,j.i[2][0]=V?y+M*$:y-M*$,j.i[2][1]=S+z,j.i[3][0]=V?y-M:y+M,j.i[3][1]=S+z*$,j.o[0][0]=V?y+M*$:y-M*$,j.o[0][1]=S-z,j.o[1][0]=V?y+M:y-M,j.o[1][1]=S+z*$,j.o[2][0]=V?y-M*$:y+M*$,j.o[2][1]=S+z,j.o[3][0]=V?y-M:y+M,j.o[3][1]=S-z*$}},B([At],w),w})(),O=(function(){function $(w,g){this.v=Ct.newElement(),this.v.setPathData(!0,0),this.elem=w,this.comp=w.comp,this.data=g,this.frameId=-1,this.d=g.d,this.initDynamicPropertyContainer(w),g.sy===1?(this.ir=W.getProp(w,g.ir,0,0,this),this.is=W.getProp(w,g.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=W.getProp(w,g.pt,0,0,this),this.p=W.getProp(w,g.p,1,0,this),this.r=W.getProp(w,g.r,0,vt,this),this.or=W.getProp(w,g.or,0,0,this),this.os=W.getProp(w,g.os,0,.01,this),this.localShapeCollection=ri.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return $.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var g=Math.floor(this.pt.v)*2,y=Math.PI*2/g,S=!0,M=this.or.v,z=this.ir.v,V=this.os.v,j=this.is.v,it=2*Math.PI*M/(g*2),Z=2*Math.PI*z/(g*2),H,nt,Y,N,b=-Math.PI/2;b+=this.r.v;var T=this.data.d===3?-1:1;for(this.v._length=0,H=0;H<g;H+=1){nt=S?M:z,Y=S?V:j,N=S?it:Z;var d=nt*Math.cos(b),m=nt*Math.sin(b),D=d===0&&m===0?0:m/Math.sqrt(d*d+m*m),I=d===0&&m===0?0:-d/Math.sqrt(d*d+m*m);d+=+this.p.v[0],m+=+this.p.v[1],this.v.setTripleAt(d,m,d-D*N*Y*T,m-I*N*Y*T,d+D*N*Y*T,m+I*N*Y*T,H,!0),S=!S,b+=y*T}},convertPolygonToPath:function(){var g=Math.floor(this.pt.v),y=Math.PI*2/g,S=this.or.v,M=this.os.v,z=2*Math.PI*S/(g*4),V,j=-Math.PI*.5,it=this.data.d===3?-1:1;for(j+=this.r.v,this.v._length=0,V=0;V<g;V+=1){var Z=S*Math.cos(j),H=S*Math.sin(j),nt=Z===0&&H===0?0:H/Math.sqrt(Z*Z+H*H),Y=Z===0&&H===0?0:-Z/Math.sqrt(Z*Z+H*H);Z+=+this.p.v[0],H+=+this.p.v[1],this.v.setTripleAt(Z,H,Z-nt*z*M*it,H-Y*z*M*it,Z+nt*z*M*it,H+Y*z*M*it,V,!0),j+=y*it}this.paths.length=0,this.paths[0]=this.v}},B([At],$),$})(),v=(function(){function $(w,g){this.v=Ct.newElement(),this.v.c=!0,this.localShapeCollection=ri.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=w,this.comp=w.comp,this.frameId=-1,this.d=g.d,this.initDynamicPropertyContainer(w),this.p=W.getProp(w,g.p,1,0,this),this.s=W.getProp(w,g.s,1,0,this),this.r=W.getProp(w,g.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return $.prototype={convertRectToPath:function(){var g=this.p.v[0],y=this.p.v[1],S=this.s.v[0]/2,M=this.s.v[1]/2,z=Ve(S,M,this.r.v),V=z*(1-J);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(g+S,y-M+z,g+S,y-M+z,g+S,y-M+V,0,!0),this.v.setTripleAt(g+S,y+M-z,g+S,y+M-V,g+S,y+M-z,1,!0),z!==0?(this.v.setTripleAt(g+S-z,y+M,g+S-z,y+M,g+S-V,y+M,2,!0),this.v.setTripleAt(g-S+z,y+M,g-S+V,y+M,g-S+z,y+M,3,!0),this.v.setTripleAt(g-S,y+M-z,g-S,y+M-z,g-S,y+M-V,4,!0),this.v.setTripleAt(g-S,y-M+z,g-S,y-M+V,g-S,y-M+z,5,!0),this.v.setTripleAt(g-S+z,y-M,g-S+z,y-M,g-S+V,y-M,6,!0),this.v.setTripleAt(g+S-z,y-M,g+S-V,y-M,g+S-z,y-M,7,!0)):(this.v.setTripleAt(g-S,y+M,g-S+V,y+M,g-S,y+M,2),this.v.setTripleAt(g-S,y-M,g-S,y-M+V,g-S,y-M,3))):(this.v.setTripleAt(g+S,y-M+z,g+S,y-M+V,g+S,y-M+z,0,!0),z!==0?(this.v.setTripleAt(g+S-z,y-M,g+S-z,y-M,g+S-V,y-M,1,!0),this.v.setTripleAt(g-S+z,y-M,g-S+V,y-M,g-S+z,y-M,2,!0),this.v.setTripleAt(g-S,y-M+z,g-S,y-M+z,g-S,y-M+V,3,!0),this.v.setTripleAt(g-S,y+M-z,g-S,y+M-V,g-S,y+M-z,4,!0),this.v.setTripleAt(g-S+z,y+M,g-S+z,y+M,g-S+V,y+M,5,!0),this.v.setTripleAt(g+S-z,y+M,g+S-V,y+M,g+S-z,y+M,6,!0),this.v.setTripleAt(g+S,y+M-z,g+S,y+M-z,g+S,y+M-V,7,!0)):(this.v.setTripleAt(g-S,y-M,g-S+V,y-M,g-S,y-M,1,!0),this.v.setTripleAt(g-S,y+M,g-S,y+M-V,g-S,y+M,2,!0),this.v.setTripleAt(g+S,y+M,g+S-V,y+M,g+S,y+M,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:a},B([At],$),$})();function E($,w,g){var y;if(g===3||g===4){var S=g===3?w.pt:w.ks,M=S.k;M.length?y=new k($,w,g):y=new _($,w,g)}else g===5?y=new v($,w):g===6?y=new A($,w):g===7&&(y=new O($,w));return y.k&&$.addDynamicProperty(y),y}function C(){return _}function P(){return k}var L={};return L.getShapeProp=E,L.getConstructorFunction=C,L.getKeyframedConstructorFunction=P,L})();var Mt=(function(){var t=Math.cos,e=Math.sin,s=Math.tan,a=Math.round;function l(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function o(d){if(d===0)return this;var m=t(d),D=e(d);return this._t(m,-D,0,0,D,m,0,0,0,0,1,0,0,0,0,1)}function p(d){if(d===0)return this;var m=t(d),D=e(d);return this._t(1,0,0,0,0,m,-D,0,0,D,m,0,0,0,0,1)}function _(d){if(d===0)return this;var m=t(d),D=e(d);return this._t(m,0,D,0,0,1,0,0,-D,0,m,0,0,0,0,1)}function u(d){if(d===0)return this;var m=t(d),D=e(d);return this._t(m,-D,0,0,D,m,0,0,0,0,1,0,0,0,0,1)}function k(d,m){return this._t(1,m,d,1,0,0)}function A(d,m){return this.shear(s(d),s(m))}function O(d,m){var D=t(m),I=e(m);return this._t(D,I,0,0,-I,D,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,s(d),1,0,0,0,0,1,0,0,0,0,1)._t(D,-I,0,0,I,D,0,0,0,0,1,0,0,0,0,1)}function v(d,m,D){return!D&&D!==0&&(D=1),d===1&&m===1&&D===1?this:this._t(d,0,0,0,0,m,0,0,0,0,D,0,0,0,0,1)}function E(d,m,D,I,G,tt,st,dt,pt,wt,Vt,le,Ut,Et,jt,mt){return this.props[0]=d,this.props[1]=m,this.props[2]=D,this.props[3]=I,this.props[4]=G,this.props[5]=tt,this.props[6]=st,this.props[7]=dt,this.props[8]=pt,this.props[9]=wt,this.props[10]=Vt,this.props[11]=le,this.props[12]=Ut,this.props[13]=Et,this.props[14]=jt,this.props[15]=mt,this}function C(d,m,D){return D=D||0,d!==0||m!==0||D!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,d,m,D,1):this}function P(d,m,D,I,G,tt,st,dt,pt,wt,Vt,le,Ut,Et,jt,mt){var K=this.props;if(d===1&&m===0&&D===0&&I===0&&G===0&&tt===1&&st===0&&dt===0&&pt===0&&wt===0&&Vt===1&&le===0)return K[12]=K[12]*d+K[15]*Ut,K[13]=K[13]*tt+K[15]*Et,K[14]=K[14]*Vt+K[15]*jt,K[15]*=mt,this._identityCalculated=!1,this;var ge=K[0],Ce=K[1],ve=K[2],he=K[3],_e=K[4],ye=K[5],Bt=K[6],Me=K[7],Fe=K[8],ee=K[9],Ie=K[10],ie=K[11],Ke=K[12],ys=K[13],bs=K[14],ws=K[15];return K[0]=ge*d+Ce*G+ve*pt+he*Ut,K[1]=ge*m+Ce*tt+ve*wt+he*Et,K[2]=ge*D+Ce*st+ve*Vt+he*jt,K[3]=ge*I+Ce*dt+ve*le+he*mt,K[4]=_e*d+ye*G+Bt*pt+Me*Ut,K[5]=_e*m+ye*tt+Bt*wt+Me*Et,K[6]=_e*D+ye*st+Bt*Vt+Me*jt,K[7]=_e*I+ye*dt+Bt*le+Me*mt,K[8]=Fe*d+ee*G+Ie*pt+ie*Ut,K[9]=Fe*m+ee*tt+Ie*wt+ie*Et,K[10]=Fe*D+ee*st+Ie*Vt+ie*jt,K[11]=Fe*I+ee*dt+Ie*le+ie*mt,K[12]=Ke*d+ys*G+bs*pt+ws*Ut,K[13]=Ke*m+ys*tt+bs*wt+ws*Et,K[14]=Ke*D+ys*st+bs*Vt+ws*jt,K[15]=Ke*I+ys*dt+bs*le+ws*mt,this._identityCalculated=!1,this}function L(d){var m=d.props;return this.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15])}function $(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function w(d){for(var m=0;m<16;){if(d.props[m]!==this.props[m])return!1;m+=1}return!0}function g(d){var m;for(m=0;m<16;m+=1)d.props[m]=this.props[m];return d}function y(d){var m;for(m=0;m<16;m+=1)this.props[m]=d[m]}function S(d,m,D){return{x:d*this.props[0]+m*this.props[4]+D*this.props[8]+this.props[12],y:d*this.props[1]+m*this.props[5]+D*this.props[9]+this.props[13],z:d*this.props[2]+m*this.props[6]+D*this.props[10]+this.props[14]}}function M(d,m,D){return d*this.props[0]+m*this.props[4]+D*this.props[8]+this.props[12]}function z(d,m,D){return d*this.props[1]+m*this.props[5]+D*this.props[9]+this.props[13]}function V(d,m,D){return d*this.props[2]+m*this.props[6]+D*this.props[10]+this.props[14]}function j(){var d=this.props[0]*this.props[5]-this.props[1]*this.props[4],m=this.props[5]/d,D=-this.props[1]/d,I=-this.props[4]/d,G=this.props[0]/d,tt=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/d,st=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/d,dt=new Mt;return dt.props[0]=m,dt.props[1]=D,dt.props[4]=I,dt.props[5]=G,dt.props[12]=tt,dt.props[13]=st,dt}function it(d){var m=this.getInverseMatrix();return m.applyToPointArray(d[0],d[1],d[2]||0)}function Z(d){var m,D=d.length,I=[];for(m=0;m<D;m+=1)I[m]=it(d[m]);return I}function H(d,m,D){var I=ot("float32",6);if(this.isIdentity())I[0]=d[0],I[1]=d[1],I[2]=m[0],I[3]=m[1],I[4]=D[0],I[5]=D[1];else{var G=this.props[0],tt=this.props[1],st=this.props[4],dt=this.props[5],pt=this.props[12],wt=this.props[13];I[0]=d[0]*G+d[1]*st+pt,I[1]=d[0]*tt+d[1]*dt+wt,I[2]=m[0]*G+m[1]*st+pt,I[3]=m[0]*tt+m[1]*dt+wt,I[4]=D[0]*G+D[1]*st+pt,I[5]=D[0]*tt+D[1]*dt+wt}return I}function nt(d,m,D){var I;return this.isIdentity()?I=[d,m,D]:I=[d*this.props[0]+m*this.props[4]+D*this.props[8]+this.props[12],d*this.props[1]+m*this.props[5]+D*this.props[9]+this.props[13],d*this.props[2]+m*this.props[6]+D*this.props[10]+this.props[14]],I}function Y(d,m){if(this.isIdentity())return d+","+m;var D=this.props;return Math.round((d*D[0]+m*D[4]+D[12])*100)/100+","+Math.round((d*D[1]+m*D[5]+D[13])*100)/100}function N(){for(var d=0,m=this.props,D="matrix3d(",I=1e4;d<16;)D+=a(m[d]*I)/I,D+=d===15?")":",",d+=1;return D}function b(d){var m=1e4;return d<1e-6&&d>0||d>-1e-6&&d<0?a(d*m)/m:d}function T(){var d=this.props,m=b(d[0]),D=b(d[1]),I=b(d[4]),G=b(d[5]),tt=b(d[12]),st=b(d[13]);return"matrix("+m+","+D+","+I+","+G+","+tt+","+st+")"}return function(){this.reset=l,this.rotate=o,this.rotateX=p,this.rotateY=_,this.rotateZ=u,this.skew=A,this.skewFromAxis=O,this.shear=k,this.scale=v,this.setTransform=E,this.translate=C,this.transform=P,this.multiply=L,this.applyToPoint=S,this.applyToX=M,this.applyToY=z,this.applyToZ=V,this.applyToPointArray=nt,this.applyToTriplePoints=H,this.applyToPointStringified=Y,this.toCSS=N,this.to2dCSS=T,this.clone=g,this.cloneFromProps=y,this.equals=w,this.inversePoints=Z,this.inversePoint=it,this.getInverseMatrix=j,this._t=this.transform,this.isIdentity=$,this._identity=!0,this._identityCalculated=!1,this.props=ot("float32",16),this.reset()}})();function rr(t){"@babel/helpers - typeof";return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rr(t)}var ut={},ps="__[STANDALONE]__",ta="__[ANIMATIONDATA]__",ea="";function fo(t){x(t)}function ia(){ps===!0?bt.searchAnimations(ta,ps,ea):bt.searchAnimations()}function uo(t){Kn(t)}function mo(t){Jn(t)}function go(t){return ps===!0&&(t.animationData=JSON.parse(ta)),bt.loadAnimation(t)}function vo(t){if(typeof t=="string")switch(t){case"high":as(200);break;default:case"medium":as(50);break;case"low":as(10);break}else!isNaN(t)&&t>1&&as(t);Ei()>=50?$t(!1):$t(!0)}function _o(){return typeof navigator<"u"}function yo(t,e){t==="expressions"&&Zn(e)}function bo(t){switch(t){case"propertyFactory":return W;case"shapePropertyFactory":return ds;case"matrix":return Mt;default:return null}}ut.play=bt.play,ut.pause=bt.pause,ut.setLocationHref=fo,ut.togglePause=bt.togglePause,ut.setSpeed=bt.setSpeed,ut.setDirection=bt.setDirection,ut.stop=bt.stop,ut.searchAnimations=ia,ut.registerAnimation=bt.registerAnimation,ut.loadAnimation=go,ut.setSubframeRendering=uo,ut.resize=bt.resize,ut.goToAndStop=bt.goToAndStop,ut.destroy=bt.destroy,ut.setQuality=vo,ut.inBrowser=_o,ut.installPlugin=yo,ut.freeze=bt.freeze,ut.unfreeze=bt.unfreeze,ut.setVolume=bt.setVolume,ut.mute=bt.mute,ut.unmute=bt.unmute,ut.getRegisteredAnimations=bt.getRegisteredAnimations,ut.useWebWorker=c,ut.setIDPrefix=mo,ut.__getFactory=bo,ut.version="5.13.0";function wo(){document.readyState==="complete"&&(clearInterval(So),ia())}function xo(t){for(var e=sa.split("&"),s=0;s<e.length;s+=1){var a=e[s].split("=");if(decodeURIComponent(a[0])==t)return decodeURIComponent(a[1])}return null}var sa="";if(ps){var ra=document.getElementsByTagName("script"),ko=ra.length-1,aa=ra[ko]||{src:""};sa=aa.src?aa.src.replace(/^[^\?]+\??/,""):"",ea=xo("renderer")}var So=setInterval(wo,100);try{!((typeof Zi>"u"?"undefined":rr(Zi))==="object"&&typeof Es<"u")&&!(typeof define=="function"&&define.amd)&&(window.bodymovin=ut)}catch{}var Se=(function(){var t={},e={};t.registerModifier=s,t.getModifier=a;function s(l,o){e[l]||(e[l]=o)}function a(l,o,p){return new e[l](o,p)}return t})();function Wt(){}Wt.prototype.initModifierProperties=function(){},Wt.prototype.addShapeToModifier=function(){},Wt.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:ri.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},Wt.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=n,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},Wt.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},B([At],Wt);function te(){}B([Wt],te),te.prototype.initModifierProperties=function(t,e){this.s=W.getProp(t,e.s,0,.01,this),this.e=W.getProp(t,e.e,0,.01,this),this.o=W.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},te.prototype.addShapeToModifier=function(t){t.pathsData=[]},te.prototype.calculateShapeEdges=function(t,e,s,a,l){var o=[];e<=1?o.push({s:t,e}):t>=1?o.push({s:t-1,e:e-1}):(o.push({s:t,e:1}),o.push({s:0,e:e-1}));var p=[],_,u=o.length,k;for(_=0;_<u;_+=1)if(k=o[_],!(k.e*l<a||k.s*l>a+s)){var A,O;k.s*l<=a?A=0:A=(k.s*l-a)/s,k.e*l>=a+s?O=1:O=(k.e*l-a)/s,p.push([A,O])}return p.length||p.push([0,0]),p},te.prototype.releasePathsData=function(t){var e,s=t.length;for(e=0;e<s;e+=1)Kr.release(t[e]);return t.length=0,t},te.prototype.processShapes=function(t){var e,s;if(this._mdf||t){var a=this.o.v%360/360;if(a<0&&(a+=1),this.s.v>1?e=1+a:this.s.v<0?e=0+a:e=this.s.v+a,this.e.v>1?s=1+a:this.e.v<0?s=0+a:s=this.e.v+a,e>s){var l=e;e=s,s=l}e=Math.round(e*1e4)*1e-4,s=Math.round(s*1e4)*1e-4,this.sValue=e,this.eValue=s}else e=this.sValue,s=this.eValue;var o,p,_=this.shapes.length,u,k,A,O,v,E=0;if(s===e)for(p=0;p<_;p+=1)this.shapes[p].localShapeCollection.releaseShapes(),this.shapes[p].shape._mdf=!0,this.shapes[p].shape.paths=this.shapes[p].localShapeCollection,this._mdf&&(this.shapes[p].pathsData.length=0);else if(s===1&&e===0||s===0&&e===1){if(this._mdf)for(p=0;p<_;p+=1)this.shapes[p].pathsData.length=0,this.shapes[p].shape._mdf=!0}else{var C=[],P,L;for(p=0;p<_;p+=1)if(P=this.shapes[p],!P.shape._mdf&&!this._mdf&&!t&&this.m!==2)P.shape.paths=P.localShapeCollection;else{if(o=P.shape.paths,k=o._length,v=0,!P.shape._mdf&&P.pathsData.length)v=P.totalShapeLength;else{for(A=this.releasePathsData(P.pathsData),u=0;u<k;u+=1)O=ne.getSegmentsLength(o.shapes[u]),A.push(O),v+=O.totalLength;P.totalShapeLength=v,P.pathsData=A}E+=v,P.shape._mdf=!0}var $=e,w=s,g=0,y;for(p=_-1;p>=0;p-=1)if(P=this.shapes[p],P.shape._mdf){for(L=P.localShapeCollection,L.releaseShapes(),this.m===2&&_>1?(y=this.calculateShapeEdges(e,s,P.totalShapeLength,g,E),g+=P.totalShapeLength):y=[[$,w]],k=y.length,u=0;u<k;u+=1){$=y[u][0],w=y[u][1],C.length=0,w<=1?C.push({s:P.totalShapeLength*$,e:P.totalShapeLength*w}):$>=1?C.push({s:P.totalShapeLength*($-1),e:P.totalShapeLength*(w-1)}):(C.push({s:P.totalShapeLength*$,e:P.totalShapeLength}),C.push({s:0,e:P.totalShapeLength*(w-1)}));var S=this.addShapes(P,C[0]);if(C[0].s!==C[0].e){if(C.length>1){var M=P.shape.paths.shapes[P.shape.paths._length-1];if(M.c){var z=S.pop();this.addPaths(S,L),S=this.addShapes(P,C[1],z)}else this.addPaths(S,L),S=this.addShapes(P,C[1])}this.addPaths(S,L)}}P.shape.paths=L}}},te.prototype.addPaths=function(t,e){var s,a=t.length;for(s=0;s<a;s+=1)e.addShape(t[s])},te.prototype.addSegment=function(t,e,s,a,l,o,p){l.setXYAt(e[0],e[1],"o",o),l.setXYAt(s[0],s[1],"i",o+1),p&&l.setXYAt(t[0],t[1],"v",o),l.setXYAt(a[0],a[1],"v",o+1)},te.prototype.addSegmentFromArray=function(t,e,s,a){e.setXYAt(t[1],t[5],"o",s),e.setXYAt(t[2],t[6],"i",s+1),a&&e.setXYAt(t[0],t[4],"v",s),e.setXYAt(t[3],t[7],"v",s+1)},te.prototype.addShapes=function(t,e,s){var a=t.pathsData,l=t.shape.paths.shapes,o,p=t.shape.paths._length,_,u,k=0,A,O,v,E,C=[],P,L=!0;for(s?(O=s._length,P=s._length):(s=Ct.newElement(),O=0,P=0),C.push(s),o=0;o<p;o+=1){for(v=a[o].lengths,s.c=l[o].c,u=l[o].c?v.length:v.length+1,_=1;_<u;_+=1)if(A=v[_-1],k+A.addedLength<e.s)k+=A.addedLength,s.c=!1;else if(k>e.e){s.c=!1;break}else e.s<=k&&e.e>=k+A.addedLength?(this.addSegment(l[o].v[_-1],l[o].o[_-1],l[o].i[_],l[o].v[_],s,O,L),L=!1):(E=ne.getNewSegment(l[o].v[_-1],l[o].v[_],l[o].o[_-1],l[o].i[_],(e.s-k)/A.addedLength,(e.e-k)/A.addedLength,v[_-1]),this.addSegmentFromArray(E,s,O,L),L=!1,s.c=!1),k+=A.addedLength,O+=1;if(l[o].c&&v.length){if(A=v[_-1],k<=e.e){var $=v[_-1].addedLength;e.s<=k&&e.e>=k+$?(this.addSegment(l[o].v[_-1],l[o].o[_-1],l[o].i[0],l[o].v[0],s,O,L),L=!1):(E=ne.getNewSegment(l[o].v[_-1],l[o].v[0],l[o].o[_-1],l[o].i[0],(e.s-k)/$,(e.e-k)/$,v[_-1]),this.addSegmentFromArray(E,s,O,L),L=!1,s.c=!1)}else s.c=!1;k+=A.addedLength,O+=1}if(s._length&&(s.setXYAt(s.v[P][0],s.v[P][1],"i",P),s.setXYAt(s.v[s._length-1][0],s.v[s._length-1][1],"o",s._length-1)),k>e.e)break;o<p-1&&(s=Ct.newElement(),L=!0,C.push(s),O=0)}return C};function Mi(){}B([Wt],Mi),Mi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=W.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},Mi.prototype.processPath=function(t,e){var s=e/100,a=[0,0],l=t._length,o=0;for(o=0;o<l;o+=1)a[0]+=t.v[o][0],a[1]+=t.v[o][1];a[0]/=l,a[1]/=l;var p=Ct.newElement();p.c=t.c;var _,u,k,A,O,v;for(o=0;o<l;o+=1)_=t.v[o][0]+(a[0]-t.v[o][0])*s,u=t.v[o][1]+(a[1]-t.v[o][1])*s,k=t.o[o][0]+(a[0]-t.o[o][0])*-s,A=t.o[o][1]+(a[1]-t.o[o][1])*-s,O=t.i[o][0]+(a[0]-t.i[o][0])*-s,v=t.i[o][1]+(a[1]-t.i[o][1])*-s,p.setTripleAt(_,u,k,A,O,v,o);return p},Mi.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.amount.v;if(p!==0){var _,u;for(s=0;s<a;s+=1){if(_=this.shapes[s],u=_.localShapeCollection,!(!_.shape._mdf&&!this._mdf&&!t))for(u.releaseShapes(),_.shape._mdf=!0,e=_.shape.paths.shapes,o=_.shape.paths._length,l=0;l<o;l+=1)u.addShape(this.processPath(e[l],p));_.shape.paths=_.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var ar=(function(){var t=[0,0];function e(u){var k=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||k,this.a&&u.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&u.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&u.skewFromAxis(-this.sk.v,this.sa.v),this.r?u.rotate(-this.r.v):u.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?u.translate(this.px.v,this.py.v,-this.pz.v):u.translate(this.px.v,this.py.v,0):u.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function s(u){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||u){var k;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var A,O;if(k=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(A=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/k,0),O=this.p.getValueAtTime(this.p.keyframes[0].t/k,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(A=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/k,0),O=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/k,0)):(A=this.p.pv,O=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/k,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){A=[],O=[];var v=this.px,E=this.py;v._caching.lastFrame+v.offsetTime<=v.keyframes[0].t?(A[0]=v.getValueAtTime((v.keyframes[0].t+.01)/k,0),A[1]=E.getValueAtTime((E.keyframes[0].t+.01)/k,0),O[0]=v.getValueAtTime(v.keyframes[0].t/k,0),O[1]=E.getValueAtTime(E.keyframes[0].t/k,0)):v._caching.lastFrame+v.offsetTime>=v.keyframes[v.keyframes.length-1].t?(A[0]=v.getValueAtTime(v.keyframes[v.keyframes.length-1].t/k,0),A[1]=E.getValueAtTime(E.keyframes[E.keyframes.length-1].t/k,0),O[0]=v.getValueAtTime((v.keyframes[v.keyframes.length-1].t-.01)/k,0),O[1]=E.getValueAtTime((E.keyframes[E.keyframes.length-1].t-.01)/k,0)):(A=[v.pv,E.pv],O[0]=v.getValueAtTime((v._caching.lastFrame+v.offsetTime-.01)/k,v.offsetTime),O[1]=E.getValueAtTime((E._caching.lastFrame+E.offsetTime-.01)/k,E.offsetTime))}else O=t,A=O;this.v.rotate(-Math.atan2(A[1]-O[1],A[0]-O[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function a(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function l(){}function o(u){this._addDynamicProperty(u),this.elem.addDynamicProperty(u),this._isDirty=!0}function p(u,k,A){if(this.elem=u,this.frameId=-1,this.propType="transform",this.data=k,this.v=new Mt,this.pre=new Mt,this.appliedTransformations=0,this.initDynamicPropertyContainer(A||u),k.p&&k.p.s?(this.px=W.getProp(u,k.p.x,0,0,this),this.py=W.getProp(u,k.p.y,0,0,this),k.p.z&&(this.pz=W.getProp(u,k.p.z,0,0,this))):this.p=W.getProp(u,k.p||{k:[0,0,0]},1,0,this),k.rx){if(this.rx=W.getProp(u,k.rx,0,vt,this),this.ry=W.getProp(u,k.ry,0,vt,this),this.rz=W.getProp(u,k.rz,0,vt,this),k.or.k[0].ti){var O,v=k.or.k.length;for(O=0;O<v;O+=1)k.or.k[O].to=null,k.or.k[O].ti=null}this.or=W.getProp(u,k.or,1,vt,this),this.or.sh=!0}else this.r=W.getProp(u,k.r||{k:0},0,vt,this);k.sk&&(this.sk=W.getProp(u,k.sk,0,vt,this),this.sa=W.getProp(u,k.sa,0,vt,this)),this.a=W.getProp(u,k.a||{k:[0,0,0]},1,0,this),this.s=W.getProp(u,k.s||{k:[100,100,100]},1,.01,this),k.o?this.o=W.getProp(u,k.o,0,.01,u):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}p.prototype={applyToMatrix:e,getValue:s,precalculateMatrix:a,autoOrient:l},B([At],p),p.prototype.addDynamicProperty=o,p.prototype._addDynamicProperty=At.prototype.addDynamicProperty;function _(u,k,A){return new p(u,k,A)}return{getTransformProperty:_}})();function oe(){}B([Wt],oe),oe.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=W.getProp(t,e.c,0,null,this),this.o=W.getProp(t,e.o,0,null,this),this.tr=ar.getTransformProperty(t,e.tr,this),this.so=W.getProp(t,e.tr.so,0,.01,this),this.eo=W.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Mt,this.rMatrix=new Mt,this.sMatrix=new Mt,this.tMatrix=new Mt,this.matrix=new Mt},oe.prototype.applyTransforms=function(t,e,s,a,l,o){var p=o?-1:1,_=a.s.v[0]+(1-a.s.v[0])*(1-l),u=a.s.v[1]+(1-a.s.v[1])*(1-l);t.translate(a.p.v[0]*p*l,a.p.v[1]*p*l,a.p.v[2]),e.translate(-a.a.v[0],-a.a.v[1],a.a.v[2]),e.rotate(-a.r.v*p*l),e.translate(a.a.v[0],a.a.v[1],a.a.v[2]),s.translate(-a.a.v[0],-a.a.v[1],a.a.v[2]),s.scale(o?1/_:_,o?1/u:u),s.translate(a.a.v[0],a.a.v[1],a.a.v[2])},oe.prototype.init=function(t,e,s,a){for(this.elem=t,this.arr=e,this.pos=s,this.elemsData=a,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[s]);s>0;)s-=1,this._elements.unshift(e[s]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},oe.prototype.resetElements=function(t){var e,s=t.length;for(e=0;e<s;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},oe.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},oe.prototype.changeGroupRender=function(t,e){var s,a=t.length;for(s=0;s<a;s+=1)t[s]._render=e,t[s].ty==="gr"&&this.changeGroupRender(t[s].it,e)},oe.prototype.processShapes=function(t){var e,s,a,l,o,p=!1;if(this._mdf||t){var _=Math.ceil(this.c.v);if(this._groups.length<_){for(;this._groups.length<_;){var u={it:this.cloneElements(this._elements),ty:"gr"};u.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,u),this._groups.splice(0,0,u),this._currentCopies+=1}this.elem.reloadShapes(),p=!0}o=0;var k;for(a=0;a<=this._groups.length-1;a+=1){if(k=o<_,this._groups[a]._render=k,this.changeGroupRender(this._groups[a].it,k),!k){var A=this.elemsData[a].it,O=A[A.length-1];O.transform.op.v!==0?(O.transform.op._mdf=!0,O.transform.op.v=0):O.transform.op._mdf=!1}o+=1}this._currentCopies=_;var v=this.o.v,E=v%1,C=v>0?Math.floor(v):Math.ceil(v),P=this.pMatrix.props,L=this.rMatrix.props,$=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var w=0;if(v>0){for(;w<C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),w+=1;E&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,E,!1),w+=E)}else if(v<0){for(;w>C;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),w-=1;E&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-E,!0),w-=E)}a=this.data.m===1?0:this._currentCopies-1,l=this.data.m===1?1:-1,o=this._currentCopies;for(var g,y;o;){if(e=this.elemsData[a].it,s=e[e.length-1].transform.mProps.v.props,y=s.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(a/(this._currentCopies-1)),w!==0){for((a!==0&&l===1||a!==this._currentCopies-1&&l===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(L[0],L[1],L[2],L[3],L[4],L[5],L[6],L[7],L[8],L[9],L[10],L[11],L[12],L[13],L[14],L[15]),this.matrix.transform($[0],$[1],$[2],$[3],$[4],$[5],$[6],$[7],$[8],$[9],$[10],$[11],$[12],$[13],$[14],$[15]),this.matrix.transform(P[0],P[1],P[2],P[3],P[4],P[5],P[6],P[7],P[8],P[9],P[10],P[11],P[12],P[13],P[14],P[15]),g=0;g<y;g+=1)s[g]=this.matrix.props[g];this.matrix.reset()}else for(this.matrix.reset(),g=0;g<y;g+=1)s[g]=this.matrix.props[g];w+=1,o-=1,a+=l}}else for(o=this._currentCopies,a=0,l=1;o;)e=this.elemsData[a].it,s=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,o-=1,a+=l;return p},oe.prototype.addShape=function(){};function Fi(){}B([Wt],Fi),Fi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=W.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},Fi.prototype.processPath=function(t,e){var s=Ct.newElement();s.c=t.c;var a,l=t._length,o,p,_,u,k,A,O=0,v,E,C,P,L,$;for(a=0;a<l;a+=1)o=t.v[a],_=t.o[a],p=t.i[a],o[0]===_[0]&&o[1]===_[1]&&o[0]===p[0]&&o[1]===p[1]?(a===0||a===l-1)&&!t.c?(s.setTripleAt(o[0],o[1],_[0],_[1],p[0],p[1],O),O+=1):(a===0?u=t.v[l-1]:u=t.v[a-1],k=Math.sqrt(Math.pow(o[0]-u[0],2)+Math.pow(o[1]-u[1],2)),A=k?Math.min(k/2,e)/k:0,L=o[0]+(u[0]-o[0])*A,v=L,$=o[1]-(o[1]-u[1])*A,E=$,C=v-(v-o[0])*J,P=E-(E-o[1])*J,s.setTripleAt(v,E,C,P,L,$,O),O+=1,a===l-1?u=t.v[0]:u=t.v[a+1],k=Math.sqrt(Math.pow(o[0]-u[0],2)+Math.pow(o[1]-u[1],2)),A=k?Math.min(k/2,e)/k:0,C=o[0]+(u[0]-o[0])*A,v=C,P=o[1]+(u[1]-o[1])*A,E=P,L=v-(v-o[0])*J,$=E-(E-o[1])*J,s.setTripleAt(v,E,C,P,L,$,O),O+=1):(s.setTripleAt(t.v[a][0],t.v[a][1],t.o[a][0],t.o[a][1],t.i[a][0],t.i[a][1],O),O+=1);return s},Fi.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.rd.v;if(p!==0){var _,u;for(s=0;s<a;s+=1){if(_=this.shapes[s],u=_.localShapeCollection,!(!_.shape._mdf&&!this._mdf&&!t))for(u.releaseShapes(),_.shape._mdf=!0,e=_.shape.paths.shapes,o=_.shape.paths._length,l=0;l<o;l+=1)u.addShape(this.processPath(e[l],p));_.shape.paths=_.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function fs(t,e){return Math.abs(t-e)*1e5<=Math.min(Math.abs(t),Math.abs(e))}function nr(t){return Math.abs(t)<=1e-5}function na(t,e,s){return t*(1-s)+e*s}function $e(t,e,s){return[na(t[0],e[0],s),na(t[1],e[1],s)]}function $o(t,e,s){if(t===0)return[];var a=e*e-4*t*s;if(a<0)return[];var l=-e/(2*t);if(a===0)return[l];var o=Math.sqrt(a)/(2*t);return[l-o,l+o]}function oa(t,e,s,a){return[-t+3*e-3*s+a,3*t-6*e+3*s,-3*t+3*e,t]}function la(t){return new _t(t,t,t,t,!1)}function _t(t,e,s,a,l){l&&ni(t,e)&&(e=$e(t,a,1/3)),l&&ni(s,a)&&(s=$e(t,a,2/3));var o=oa(t[0],e[0],s[0],a[0]),p=oa(t[1],e[1],s[1],a[1]);this.a=[o[0],p[0]],this.b=[o[1],p[1]],this.c=[o[2],p[2]],this.d=[o[3],p[3]],this.points=[t,e,s,a]}_t.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},_t.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},_t.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},_t.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},_t.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(nr(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,s=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(s<0)return[];var a=Math.sqrt(s);return nr(a)?a>0&&a<1?[e]:[]:[e-a,e+a].filter(function(l){return l>0&&l<1})},_t.prototype.split=function(t){if(t<=0)return[la(this.points[0]),this];if(t>=1)return[this,la(this.points[this.points.length-1])];var e=$e(this.points[0],this.points[1],t),s=$e(this.points[1],this.points[2],t),a=$e(this.points[2],this.points[3],t),l=$e(e,s,t),o=$e(s,a,t),p=$e(l,o,t);return[new _t(this.points[0],e,l,p,!0),new _t(p,o,a,this.points[3],!0)]};function ha(t,e){var s=t.points[0][e],a=t.points[t.points.length-1][e];if(s>a){var l=a;a=s,s=l}for(var o=$o(3*t.a[e],2*t.b[e],t.c[e]),p=0;p<o.length;p+=1)if(o[p]>0&&o[p]<1){var _=t.point(o[p])[e];_<s?s=_:_>a&&(a=_)}return{min:s,max:a}}_t.prototype.bounds=function(){return{x:ha(this,0),y:ha(this,1)}},_t.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}};function us(t,e,s){var a=t.boundingBox();return{cx:a.cx,cy:a.cy,width:a.width,height:a.height,bez:t,t:(e+s)/2,t1:e,t2:s}}function ca(t){var e=t.bez.split(.5);return[us(e[0],t.t1,t.t),us(e[1],t.t,t.t2)]}function Ao(t,e){return Math.abs(t.cx-e.cx)*2<t.width+e.width&&Math.abs(t.cy-e.cy)*2<t.height+e.height}function Ii(t,e,s,a,l,o){if(Ao(t,e)){if(s>=o||t.width<=a&&t.height<=a&&e.width<=a&&e.height<=a){l.push([t.t,e.t]);return}var p=ca(t),_=ca(e);Ii(p[0],_[0],s+1,a,l,o),Ii(p[0],_[1],s+1,a,l,o),Ii(p[1],_[0],s+1,a,l,o),Ii(p[1],_[1],s+1,a,l,o)}}_t.prototype.intersections=function(t,e,s){e===void 0&&(e=2),s===void 0&&(s=7);var a=[];return Ii(us(this,0,1),us(t,0,1),0,e,a,s),a},_t.shapeSegment=function(t,e){var s=(e+1)%t.length();return new _t(t.v[e],t.o[e],t.i[s],t.v[s],!0)},_t.shapeSegmentInverted=function(t,e){var s=(e+1)%t.length();return new _t(t.v[s],t.i[s],t.o[e],t.v[e],!0)};function or(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function ms(t,e,s,a){var l=[t[0],t[1],1],o=[e[0],e[1],1],p=[s[0],s[1],1],_=[a[0],a[1],1],u=or(or(l,o),or(p,_));return nr(u[2])?null:[u[0]/u[2],u[1]/u[2]]}function ai(t,e,s){return[t[0]+Math.cos(e)*s,t[1]-Math.sin(e)*s]}function lr(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function ni(t,e){return fs(t[0],e[0])&&fs(t[1],e[1])}function Li(){}B([Wt],Li),Li.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=W.getProp(t,e.s,0,null,this),this.frequency=W.getProp(t,e.r,0,null,this),this.pointsType=W.getProp(t,e.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function da(t,e,s,a,l,o,p){var _=s-Math.PI/2,u=s+Math.PI/2,k=e[0]+Math.cos(s)*a*l,A=e[1]-Math.sin(s)*a*l;t.setTripleAt(k,A,k+Math.cos(_)*o,A-Math.sin(_)*o,k+Math.cos(u)*p,A-Math.sin(u)*p,t.length())}function Eo(t,e){var s=[e[0]-t[0],e[1]-t[1]],a=-Math.PI*.5,l=[Math.cos(a)*s[0]-Math.sin(a)*s[1],Math.sin(a)*s[0]+Math.cos(a)*s[1]];return l}function Po(t,e){var s=e===0?t.length()-1:e-1,a=(e+1)%t.length(),l=t.v[s],o=t.v[a],p=Eo(l,o);return Math.atan2(0,1)-Math.atan2(p[1],p[0])}function pa(t,e,s,a,l,o,p){var _=Po(e,s),u=e.v[s%e._length],k=e.v[s===0?e._length-1:s-1],A=e.v[(s+1)%e._length],O=o===2?Math.sqrt(Math.pow(u[0]-k[0],2)+Math.pow(u[1]-k[1],2)):0,v=o===2?Math.sqrt(Math.pow(u[0]-A[0],2)+Math.pow(u[1]-A[1],2)):0;da(t,e.v[s%e._length],_,p,a,v/((l+1)*2),O/((l+1)*2),o)}function To(t,e,s,a,l,o){for(var p=0;p<a;p+=1){var _=(p+1)/(a+1),u=l===2?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,k=e.normalAngle(_),A=e.point(_);da(t,A,k,o,s,u/((a+1)*2),u/((a+1)*2),l),o=-o}return o}Li.prototype.processPath=function(t,e,s,a){var l=t._length,o=Ct.newElement();if(o.c=t.c,t.c||(l-=1),l===0)return o;var p=-1,_=_t.shapeSegment(t,0);pa(o,t,0,e,s,a,p);for(var u=0;u<l;u+=1)p=To(o,_,e,s,a,-p),u===l-1&&!t.c?_=null:_=_t.shapeSegment(t,(u+1)%l),pa(o,t,u+1,e,s,a,p);return o},Li.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.amplitude.v,_=Math.max(0,Math.round(this.frequency.v)),u=this.pointsType.v;if(p!==0){var k,A;for(s=0;s<a;s+=1){if(k=this.shapes[s],A=k.localShapeCollection,!(!k.shape._mdf&&!this._mdf&&!t))for(A.releaseShapes(),k.shape._mdf=!0,e=k.shape.paths.shapes,o=k.shape.paths._length,l=0;l<o;l+=1)A.addShape(this.processPath(e[l],p,_,u));k.shape.paths=k.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function hr(t,e,s){var a=Math.atan2(e[0]-t[0],e[1]-t[1]);return[ai(t,a,s),ai(e,a,s)]}function oi(t,e){var s,a,l,o,p,_,u;u=hr(t.points[0],t.points[1],e),s=u[0],a=u[1],u=hr(t.points[1],t.points[2],e),l=u[0],o=u[1],u=hr(t.points[2],t.points[3],e),p=u[0],_=u[1];var k=ms(s,a,l,o);k===null&&(k=a);var A=ms(p,_,l,o);return A===null&&(A=p),new _t(s,k,A,_)}function fa(t,e,s,a,l){var o=e.points[3],p=s.points[0];if(a===3||ni(o,p))return o;if(a===2){var _=-e.tangentAngle(1),u=-s.tangentAngle(0)+Math.PI,k=ms(o,ai(o,_+Math.PI/2,100),p,ai(p,_+Math.PI/2,100)),A=k?lr(k,o):lr(o,p)/2,O=ai(o,_,2*A*J);return t.setXYAt(O[0],O[1],"o",t.length()-1),O=ai(p,u,2*A*J),t.setTripleAt(p[0],p[1],p[0],p[1],O[0],O[1],t.length()),p}var v=ni(o,e.points[2])?e.points[0]:e.points[2],E=ni(p,s.points[1])?s.points[3]:s.points[1],C=ms(v,o,p,E);return C&&lr(C,o)<l?(t.setTripleAt(C[0],C[1],C[0],C[1],C[0],C[1],t.length()),C):o}function ua(t,e){var s=t.intersections(e);return s.length&&fs(s[0][0],1)&&s.shift(),s.length?s[0]:null}function ma(t,e){var s=t.slice(),a=e.slice(),l=ua(t[t.length-1],e[0]);return l&&(s[t.length-1]=t[t.length-1].split(l[0])[0],a[0]=e[0].split(l[1])[1]),t.length>1&&e.length>1&&(l=ua(t[0],e[e.length-1]),l)?[[t[0].split(l[0])[0]],[e[e.length-1].split(l[1])[1]]]:[s,a]}function Co(t){for(var e,s=1;s<t.length;s+=1)e=ma(t[s-1],t[s]),t[s-1]=e[0],t[s]=e[1];return t.length>1&&(e=ma(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function ga(t,e){var s=t.inflectionPoints(),a,l,o,p;if(s.length===0)return[oi(t,e)];if(s.length===1||fs(s[1],1))return o=t.split(s[0]),a=o[0],l=o[1],[oi(a,e),oi(l,e)];o=t.split(s[0]),a=o[0];var _=(s[1]-s[0])/(1-s[0]);return o=o[1].split(_),p=o[0],l=o[1],[oi(a,e),oi(p,e),oi(l,e)]}function zi(){}B([Wt],zi),zi.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=W.getProp(t,e.a,0,null,this),this.miterLimit=W.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=this.amount.effectsSequence.length!==0},zi.prototype.processPath=function(t,e,s,a){var l=Ct.newElement();l.c=t.c;var o=t.length();t.c||(o-=1);var p,_,u,k=[];for(p=0;p<o;p+=1)u=_t.shapeSegment(t,p),k.push(ga(u,e));if(!t.c)for(p=o-1;p>=0;p-=1)u=_t.shapeSegmentInverted(t,p),k.push(ga(u,e));k=Co(k);var A=null,O=null;for(p=0;p<k.length;p+=1){var v=k[p];for(O&&(A=fa(l,O,v[0],s,a)),O=v[v.length-1],_=0;_<v.length;_+=1)u=v[_],A&&ni(u.points[0],A)?l.setXYAt(u.points[1][0],u.points[1][1],"o",l.length()-1):l.setTripleAt(u.points[0][0],u.points[0][1],u.points[1][0],u.points[1][1],u.points[0][0],u.points[0][1],l.length()),l.setTripleAt(u.points[3][0],u.points[3][1],u.points[3][0],u.points[3][1],u.points[2][0],u.points[2][1],l.length()),A=u.points[3]}return k.length&&fa(l,O,k[0][0],s,a),l},zi.prototype.processShapes=function(t){var e,s,a=this.shapes.length,l,o,p=this.amount.v,_=this.miterLimit.v,u=this.lineJoin;if(p!==0){var k,A;for(s=0;s<a;s+=1){if(k=this.shapes[s],A=k.localShapeCollection,!(!k.shape._mdf&&!this._mdf&&!t))for(A.releaseShapes(),k.shape._mdf=!0,e=k.shape.paths.shapes,o=k.shape.paths._length,l=0;l<o;l+=1)A.addShape(this.processPath(e[l],p,u,_));k.shape.paths=k.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function va(t){for(var e=t.fStyle?t.fStyle.split(" "):[],s="normal",a="normal",l=e.length,o,p=0;p<l;p+=1)switch(o=e[p].toLowerCase(),o){case"italic":a="italic";break;case"bold":s="700";break;case"black":s="900";break;case"medium":s="500";break;case"regular":case"normal":s="400";break;case"light":case"thin":s="200";break;default:break}return{style:a,weight:t.fWeight||s}}var Ge=(function(){var t=5e3,e={w:0,size:0,shapes:[],data:{shapes:[]}},s=[];s=s.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var a=127988,l=917631,o=917601,p=917626,_=65039,u=8205,k=127462,A=127487,O=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function v(b){var T=b.split(","),d,m=T.length,D=[];for(d=0;d<m;d+=1)T[d]!=="sans-serif"&&T[d]!=="monospace"&&D.push(T[d]);return D.join(",")}function E(b,T){var d=U("span");d.setAttribute("aria-hidden",!0),d.style.fontFamily=T;var m=U("span");m.innerText="giItT1WQy@!-/#",d.style.position="absolute",d.style.left="-10000px",d.style.top="-10000px",d.style.fontSize="300px",d.style.fontVariant="normal",d.style.fontStyle="normal",d.style.fontWeight="normal",d.style.letterSpacing="0",d.appendChild(m),document.body.appendChild(d);var D=m.offsetWidth;return m.style.fontFamily=v(b)+", "+T,{node:m,w:D,parent:d}}function C(){var b,T=this.fonts.length,d,m,D=T;for(b=0;b<T;b+=1)this.fonts[b].loaded?D-=1:this.fonts[b].fOrigin==="n"||this.fonts[b].origin===0?this.fonts[b].loaded=!0:(d=this.fonts[b].monoCase.node,m=this.fonts[b].monoCase.w,d.offsetWidth!==m?(D-=1,this.fonts[b].loaded=!0):(d=this.fonts[b].sansCase.node,m=this.fonts[b].sansCase.w,d.offsetWidth!==m&&(D-=1,this.fonts[b].loaded=!0)),this.fonts[b].loaded&&(this.fonts[b].sansCase.parent.parentNode.removeChild(this.fonts[b].sansCase.parent),this.fonts[b].monoCase.parent.parentNode.removeChild(this.fonts[b].monoCase.parent)));D!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function P(b,T){var d=document.body&&T?"svg":"canvas",m,D=va(b);if(d==="svg"){var I=at("text");I.style.fontSize="100px",I.setAttribute("font-family",b.fFamily),I.setAttribute("font-style",D.style),I.setAttribute("font-weight",D.weight),I.textContent="1",b.fClass?(I.style.fontFamily="inherit",I.setAttribute("class",b.fClass)):I.style.fontFamily=b.fFamily,T.appendChild(I),m=I}else{var G=new OffscreenCanvas(500,500).getContext("2d");G.font=D.style+" "+D.weight+" 100px "+b.fFamily,m=G}function tt(st){return d==="svg"?(m.textContent=st,m.getComputedTextLength()):m.measureText(st).width}return{measureText:tt}}function L(b,T){if(!b){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=b.list;return}if(!document.body){this.isLoaded=!0,b.list.forEach(function(Vt){Vt.helper=P(Vt),Vt.cache={}}),this.fonts=b.list;return}var d=b.list,m,D=d.length,I=D;for(m=0;m<D;m+=1){var G=!0,tt,st;if(d[m].loaded=!1,d[m].monoCase=E(d[m].fFamily,"monospace"),d[m].sansCase=E(d[m].fFamily,"sans-serif"),!d[m].fPath)d[m].loaded=!0,I-=1;else if(d[m].fOrigin==="p"||d[m].origin===3){if(tt=document.querySelectorAll('style[f-forigin="p"][f-family="'+d[m].fFamily+'"], style[f-origin="3"][f-family="'+d[m].fFamily+'"]'),tt.length>0&&(G=!1),G){var dt=U("style");dt.setAttribute("f-forigin",d[m].fOrigin),dt.setAttribute("f-origin",d[m].origin),dt.setAttribute("f-family",d[m].fFamily),dt.type="text/css",dt.innerText="@font-face {font-family: "+d[m].fFamily+"; font-style: normal; src: url('"+d[m].fPath+"');}",T.appendChild(dt)}}else if(d[m].fOrigin==="g"||d[m].origin===1){for(tt=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),st=0;st<tt.length;st+=1)tt[st].href.indexOf(d[m].fPath)!==-1&&(G=!1);if(G){var pt=U("link");pt.setAttribute("f-forigin",d[m].fOrigin),pt.setAttribute("f-origin",d[m].origin),pt.type="text/css",pt.rel="stylesheet",pt.href=d[m].fPath,document.body.appendChild(pt)}}else if(d[m].fOrigin==="t"||d[m].origin===2){for(tt=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),st=0;st<tt.length;st+=1)d[m].fPath===tt[st].src&&(G=!1);if(G){var wt=U("link");wt.setAttribute("f-forigin",d[m].fOrigin),wt.setAttribute("f-origin",d[m].origin),wt.setAttribute("rel","stylesheet"),wt.setAttribute("href",d[m].fPath),T.appendChild(wt)}}d[m].helper=P(d[m],T),d[m].cache={},this.fonts.push(d[m])}I===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function $(b){if(b){this.chars||(this.chars=[]);var T,d=b.length,m,D=this.chars.length,I;for(T=0;T<d;T+=1){for(m=0,I=!1;m<D;)this.chars[m].style===b[T].style&&this.chars[m].fFamily===b[T].fFamily&&this.chars[m].ch===b[T].ch&&(I=!0),m+=1;I||(this.chars.push(b[T]),D+=1)}}}function w(b,T,d){for(var m=0,D=this.chars.length;m<D;){if(this.chars[m].ch===b&&this.chars[m].style===T&&this.chars[m].fFamily===d)return this.chars[m];m+=1}return(typeof b=="string"&&b.charCodeAt(0)!==13||!b)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",b,T,d)),e}function g(b,T,d){var m=this.getFontByName(T),D=b;if(!m.cache[D]){var I=m.helper;if(b===" "){var G=I.measureText("|"+b+"|"),tt=I.measureText("||");m.cache[D]=(G-tt)/100}else m.cache[D]=I.measureText(b)/100}return m.cache[D]*d}function y(b){for(var T=0,d=this.fonts.length;T<d;){if(this.fonts[T].fName===b)return this.fonts[T];T+=1}return this.fonts[0]}function S(b){var T=0,d=b.charCodeAt(0);if(d>=55296&&d<=56319){var m=b.charCodeAt(1);m>=56320&&m<=57343&&(T=(d-55296)*1024+m-56320+65536)}return T}function M(b,T){var d=b.toString(16)+T.toString(16);return O.indexOf(d)!==-1}function z(b){return b===u}function V(b){return b===_}function j(b){var T=S(b);return T>=k&&T<=A}function it(b){return j(b.substr(0,2))&&j(b.substr(2,2))}function Z(b){return s.indexOf(b)!==-1}function H(b,T){var d=S(b.substr(T,2));if(d!==a)return!1;var m=0;for(T+=2;m<5;){if(d=S(b.substr(T,2)),d<o||d>p)return!1;m+=1,T+=2}return S(b.substr(T,2))===l}function nt(){this.isLoaded=!0}var Y=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};Y.isModifier=M,Y.isZeroWidthJoiner=z,Y.isFlagEmoji=it,Y.isRegionalCode=j,Y.isCombinedCharacter=Z,Y.isRegionalFlag=H,Y.isVariationSelector=V,Y.BLACK_FLAG_CODE_POINT=a;var N={addChars:$,addFonts:L,getCharData:w,getFontByName:y,measureText:g,checkLoadedFonts:C,setIsLoaded:nt};return Y.prototype=N,Y})();function _a(t){this.animationData=t}_a.prototype.getProp=function(t){return this.animationData.slots&&this.animationData.slots[t.sid]?Object.assign(t,this.animationData.slots[t.sid].p):t};function Mo(t){return new _a(t)}function gs(){}gs.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,s=this.renderableComponents.length;for(e=0;e<s;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var cr=(function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}})();function Fo(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function Io(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function Lo(t,e,s){this.p=W.getProp(e,t.v,1,0,s)}function zo(t,e,s){this.p=W.getProp(e,t.v,1,0,s)}function Oo(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function Ro(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function Do(t,e,s){this.p=W.getProp(e,t.v,0,0,s)}function Vo(){this.p={}}function ya(t,e){var s=t.ef||[];this.effectElements=[];var a,l=s.length,o;for(a=0;a<l;a+=1)o=new Oi(s[a],e),this.effectElements.push(o)}function Oi(t,e){this.init(t,e)}B([At],Oi),Oi.prototype.getValue=Oi.prototype.iterateDynamicProperties,Oi.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var s,a=this.data.ef.length,l,o=this.data.ef;for(s=0;s<a;s+=1){switch(l=null,o[s].ty){case 0:l=new Fo(o[s],e,this);break;case 1:l=new Io(o[s],e,this);break;case 2:l=new Lo(o[s],e,this);break;case 3:l=new zo(o[s],e,this);break;case 4:case 7:l=new Do(o[s],e,this);break;case 10:l=new Oo(o[s],e,this);break;case 11:l=new Ro(o[s],e,this);break;case 5:l=new ya(o[s],e,this);break;default:l=new Vo(o[s],e,this);break}l&&this.effectElements.push(l)}};function Ae(){}Ae.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,s=this.data.masksProperties.length;e<s;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){var e=Wr();if(e){var s=e("layer"),a=e("effects"),l=e("shape"),o=e("text"),p=e("comp");this.layerInterface=s(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var _=a.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(_),this.data.ty===0||this.data.xt?this.compInterface=p(this):this.data.ty===4?(this.layerInterface.shapeInterface=l(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=o(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var e=cr(this.data.bm),s=this.baseElement||this.layerElement;s.style["mix-blend-mode"]=e},initBaseData:function(e,s,a){this.globalData=s,this.comp=a,this.data=e,this.layerId=Rt(),this.data.sr||(this.data.sr=1),this.effectsManager=new ya(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function Ee(){}Ee.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,s){var a,l=this.dynamicProperties.length;for(a=0;a<l;a+=1)(s||this._isParent&&this.dynamicProperties[a].propType==="transform")&&(this.dynamicProperties[a].getValue(),this.dynamicProperties[a]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function Pe(t,e,s){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,s)}Pe.prototype.prepareFrame=function(){},B([gs,Ae,Ee],Pe),Pe.prototype.getBaseElement=function(){return null},Pe.prototype.renderFrame=function(){},Pe.prototype.destroy=function(){},Pe.prototype.initExpressions=function(){var t=Wr();if(t){var e=t("footage");this.layerInterface=e(this)}},Pe.prototype.getFootageData=function(){return this.footageData};function Dt(t,e,s){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,s),this._isPlaying=!1,this._canPlay=!1;var a=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(a),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?W.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=W.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}Dt.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var s=this._volume*this._volumeMultiplier;this._previousVolume!==s&&(this._previousVolume=s,this.audio.volume(s))},B([gs,Ae,Ee],Dt),Dt.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},Dt.prototype.show=function(){},Dt.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},Dt.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},Dt.prototype.resume=function(){this._canPlay=!0},Dt.prototype.setRate=function(t){this.audio.rate(t)},Dt.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},Dt.prototype.getBaseElement=function(){return null},Dt.prototype.destroy=function(){},Dt.prototype.sourceRectAtTime=function(){},Dt.prototype.initExpressions=function(){};function Ft(){}Ft.prototype.checkLayers=function(t){var e,s=this.layers.length,a;for(this.completeLayers=!0,e=s-1;e>=0;e-=1)this.elements[e]||(a=this.layers[e],a.ip-a.st<=t-this.layers[e].st&&a.op-a.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},Ft.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},Ft.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Ft.prototype.createAudio=function(t){return new Dt(t,this.globalData,this)},Ft.prototype.createFootage=function(t){return new Pe(t,this.globalData,this)},Ft.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},Ft.prototype.includeLayers=function(t){this.completeLayers=!1;var e,s=t.length,a,l=this.layers.length;for(e=0;e<s;e+=1)for(a=0;a<l;){if(this.layers[a].id===t[e].id){this.layers[a]=t[e];break}a+=1}},Ft.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},Ft.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Ft.prototype.buildElementParenting=function(t,e,s){for(var a=this.elements,l=this.layers,o=0,p=l.length;o<p;)l[o].ind==e&&(!a[o]||a[o]===!0?(this.buildItem(o),this.addPendingElement(t)):(s.push(a[o]),a[o].setAsParent(),l[o].parent!==void 0?this.buildElementParenting(t,l[o].parent,s):t.setHierarchy(s))),o+=1},Ft.prototype.addPendingElement=function(t){this.pendingElements.push(t)},Ft.prototype.searchExtraCompositions=function(t){var e,s=t.length;for(e=0;e<s;e+=1)if(t[e].xt){var a=this.createComp(t[e]);a.initExpressions(),this.globalData.projectInterface.registerComposition(a)}},Ft.prototype.getElementById=function(t){var e,s=this.elements.length;for(e=0;e<s;e+=1)if(this.elements[e].data.ind===t)return this.elements[e];return null},Ft.prototype.getElementByPath=function(t){var e=t.shift(),s;if(typeof e=="number")s=this.elements[e];else{var a,l=this.elements.length;for(a=0;a<l;a+=1)if(this.elements[a].data.nm===e){s=this.elements[a];break}}return t.length===0?s:s.getElementByPath(t)},Ft.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new Ge,this.globalData.slotManager=Mo(t),this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};var Uo={TRANSFORM_EFFECT:"transformEFfect"};function li(){}li.prototype={initTransform:function(){var e=new Mt;this.finalTransform={mProp:this.data.ks?ar.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:e,localMat:e,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,s=this.finalTransform.mat,a=0,l=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;a<l;){if(this.hierarchy[a].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}a+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),a=0;a<l;a+=1)s.multiply(this.hierarchy[a].finalTransform.mProp.v)}(!this.localTransforms||this.finalTransform._matMdf)&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var e=0,s=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;e<s;)this.localTransforms[e]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[e]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),e+=1;if(this.finalTransform._localMatMdf){var a=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(a),e=1;e<s;e+=1){var l=this.localTransforms[e].matrix;a.multiply(l)}a.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var o=this.finalTransform.localOpacity;for(e=0;e<s;e+=1)o*=this.localTransforms[e].opacity*.01;this.finalTransform.localOpacity=o}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var e=this.renderableEffectsManager.getEffects(Uo.TRANSFORM_EFFECT);if(e.length){this.localTransforms=[],this.finalTransform.localMat=new Mt;var s=0,a=e.length;for(s=0;s<a;s+=1)this.localTransforms.push(e[s])}}},globalToLocal:function(e){var s=[];s.push(this.finalTransform);for(var a=!0,l=this.comp;a;)l.finalTransform?(l.data.hasMask&&s.splice(0,0,l.finalTransform),l=l.comp):a=!1;var o,p=s.length,_;for(o=0;o<p;o+=1)_=s[o].mat.applyToPointArray(0,0,0),e=[e[0]-_[0],e[1]-_[1],0];return e},mHelper:new Mt};function qe(t,e,s){this.data=t,this.element=e,this.globalData=s,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var a=this.globalData.defs,l,o=this.masksProperties?this.masksProperties.length:0;this.viewData=ct(o),this.solidPath="";var p,_=this.masksProperties,u=0,k=[],A,O,v=Rt(),E,C,P,L,$="clipPath",w="clip-path";for(l=0;l<o;l+=1)if((_[l].mode!=="a"&&_[l].mode!=="n"||_[l].inv||_[l].o.k!==100||_[l].o.x)&&($="mask",w="mask"),(_[l].mode==="s"||_[l].mode==="i")&&u===0?(E=at("rect"),E.setAttribute("fill","#ffffff"),E.setAttribute("width",this.element.comp.data.w||0),E.setAttribute("height",this.element.comp.data.h||0),k.push(E)):E=null,p=at("path"),_[l].mode==="n")this.viewData[l]={op:W.getProp(this.element,_[l].o,0,.01,this.element),prop:ds.getShapeProp(this.element,_[l],3),elem:p,lastPath:""},a.appendChild(p);else{u+=1,p.setAttribute("fill",_[l].mode==="s"?"#000000":"#ffffff"),p.setAttribute("clip-rule","nonzero");var g;if(_[l].x.k!==0?($="mask",w="mask",L=W.getProp(this.element,_[l].x,0,null,this.element),g=Rt(),C=at("filter"),C.setAttribute("id",g),P=at("feMorphology"),P.setAttribute("operator","erode"),P.setAttribute("in","SourceGraphic"),P.setAttribute("radius","0"),C.appendChild(P),a.appendChild(C),p.setAttribute("stroke",_[l].mode==="s"?"#000000":"#ffffff")):(P=null,L=null),this.storedData[l]={elem:p,x:L,expan:P,lastPath:"",lastOperator:"",filterId:g,lastRadius:0},_[l].mode==="i"){O=k.length;var y=at("g");for(A=0;A<O;A+=1)y.appendChild(k[A]);var S=at("mask");S.setAttribute("mask-type","alpha"),S.setAttribute("id",v+"_"+u),S.appendChild(p),a.appendChild(S),y.setAttribute("mask","url("+R()+"#"+v+"_"+u+")"),k.length=0,k.push(y)}else k.push(p);_[l].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[l]={elem:p,lastPath:"",op:W.getProp(this.element,_[l].o,0,.01,this.element),prop:ds.getShapeProp(this.element,_[l],3),invRect:E},this.viewData[l].prop.k||this.drawPath(_[l],this.viewData[l].prop.v,this.viewData[l])}for(this.maskElement=at($),o=k.length,l=0;l<o;l+=1)this.maskElement.appendChild(k[l]);u>0&&(this.maskElement.setAttribute("id",v),this.element.maskedElement.setAttribute(w,"url("+R()+"#"+v+")"),a.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}qe.prototype.getMaskProperty=function(t){return this.viewData[t].prop},qe.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,s,a=this.masksProperties.length;for(s=0;s<a;s+=1)if((this.viewData[s].prop._mdf||t)&&this.drawPath(this.masksProperties[s],this.viewData[s].prop.v,this.viewData[s]),(this.viewData[s].op._mdf||t)&&this.viewData[s].elem.setAttribute("fill-opacity",this.viewData[s].op.v),this.masksProperties[s].mode!=="n"&&(this.viewData[s].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[s].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[s].x&&(this.storedData[s].x._mdf||t))){var l=this.storedData[s].expan;this.storedData[s].x.v<0?(this.storedData[s].lastOperator!=="erode"&&(this.storedData[s].lastOperator="erode",this.storedData[s].elem.setAttribute("filter","url("+R()+"#"+this.storedData[s].filterId+")")),l.setAttribute("radius",-this.storedData[s].x.v)):(this.storedData[s].lastOperator!=="dilate"&&(this.storedData[s].lastOperator="dilate",this.storedData[s].elem.setAttribute("filter",null)),this.storedData[s].elem.setAttribute("stroke-width",this.storedData[s].x.v*2))}},qe.prototype.getMaskelement=function(){return this.maskElement},qe.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},qe.prototype.drawPath=function(t,e,s){var a=" M"+e.v[0][0]+","+e.v[0][1],l,o;for(o=e._length,l=1;l<o;l+=1)a+=" C"+e.o[l-1][0]+","+e.o[l-1][1]+" "+e.i[l][0]+","+e.i[l][1]+" "+e.v[l][0]+","+e.v[l][1];if(e.c&&o>1&&(a+=" C"+e.o[l-1][0]+","+e.o[l-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),s.lastPath!==a){var p="";s.elem&&(e.c&&(p=t.inv?this.solidPath+a:a),s.elem.setAttribute("d",p)),s.lastPath=a}},qe.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var Ri=(function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=s;function e(a,l){var o=at("filter");return o.setAttribute("id",a),l!==!0&&(o.setAttribute("filterUnits","objectBoundingBox"),o.setAttribute("x","0%"),o.setAttribute("y","0%"),o.setAttribute("width","100%"),o.setAttribute("height","100%")),o}function s(){var a=at("feColorMatrix");return a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),a}return t})(),ba=(function(){var t={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),/firefox/i.test(navigator.userAgent)&&(t.svgLumaHidden=!1),t})(),vs={},wa="filter_result_";function dr(t){var e,s="SourceGraphic",a=t.data.ef?t.data.ef.length:0,l=Rt(),o=Ri.createFilter(l,!0),p=0;this.filters=[];var _;for(e=0;e<a;e+=1){_=null;var u=t.data.ef[e].ty;if(vs[u]){var k=vs[u].effect;_=new k(o,t.effectsManager.effectElements[e],t,wa+p,s),s=wa+p,vs[u].countsAsEffect&&(p+=1)}_&&this.filters.push(_)}p&&(t.globalData.defs.appendChild(o),t.layerElement.setAttribute("filter","url("+R()+"#"+l+")")),this.filters.length&&t.addRenderableComponent(this)}dr.prototype.renderFrame=function(t){var e,s=this.filters.length;for(e=0;e<s;e+=1)this.filters[e].renderFrame(t)},dr.prototype.getEffects=function(t){var e,s=this.filters.length,a=[];for(e=0;e<s;e+=1)this.filters[e].type===t&&a.push(this.filters[e]);return a};function sh(t,e,s){vs[t]={effect:e,countsAsEffect:s}}function Di(){}Di.prototype={initRendererElement:function(){this.layerElement=at("g")},createContainerElements:function(){this.matteElement=at("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null;if(this.data.td){this.matteMasks={};var s=at("g");s.setAttribute("id",this.layerId),s.appendChild(this.layerElement),e=s,this.globalData.defs.appendChild(s)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var a=at("clipPath"),l=at("path");l.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var o=Rt();if(a.setAttribute("id",o),a.appendChild(l),this.globalData.defs.appendChild(a),this.checkMasks()){var p=at("g");p.setAttribute("clip-path","url("+R()+"#"+o+")"),p.appendChild(this.layerElement),this.transformedElement=p,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+R()+"#"+o+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new qe(this.data,this,this.globalData),this.renderableEffectsManager=new dr(this),this.searchEffectTransforms()},getMatte:function(e){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[e]){var s=this.layerId+"_"+e,a,l,o,p;if(e===1||e===3){var _=at("mask");_.setAttribute("id",s),_.setAttribute("mask-type",e===3?"luminance":"alpha"),o=at("use"),o.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),_.appendChild(o),this.globalData.defs.appendChild(_),!ba.maskType&&e===1&&(_.setAttribute("mask-type","luminance"),a=Rt(),l=Ri.createFilter(a),this.globalData.defs.appendChild(l),l.appendChild(Ri.createAlphaToLuminanceFilter()),p=at("g"),p.appendChild(o),_.appendChild(p),p.setAttribute("filter","url("+R()+"#"+a+")"))}else if(e===2){var u=at("mask");u.setAttribute("id",s),u.setAttribute("mask-type","alpha");var k=at("g");u.appendChild(k),a=Rt(),l=Ri.createFilter(a);var A=at("feComponentTransfer");A.setAttribute("in","SourceGraphic"),l.appendChild(A);var O=at("feFuncA");O.setAttribute("type","table"),O.setAttribute("tableValues","1.0 0.0"),A.appendChild(O),this.globalData.defs.appendChild(l);var v=at("rect");v.setAttribute("width",this.comp.data.w),v.setAttribute("height",this.comp.data.h),v.setAttribute("x","0"),v.setAttribute("y","0"),v.setAttribute("fill","#ffffff"),v.setAttribute("opacity","0"),k.setAttribute("filter","url("+R()+"#"+a+")"),k.appendChild(v),o=at("use"),o.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),k.appendChild(o),ba.maskType||(u.setAttribute("mask-type","luminance"),l.appendChild(Ri.createAlphaToLuminanceFilter()),p=at("g"),k.appendChild(v),p.appendChild(this.layerElement),k.appendChild(p)),this.globalData.defs.appendChild(u)}this.matteMasks[e]=s}return this.matteMasks[e]},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+R()+"#"+e+")")}};function hi(){}hi.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function Vi(){}(function(){var t={initElement:function(s,a,l){this.initFrame(),this.initBaseData(s,a,l),this.initTransform(s,a,l),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var s=this.baseElement||this.layerElement;s.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var s=this.baseElement||this.layerElement;s.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(s){this._mdf=!1,this.prepareRenderableFrame(s),this.prepareProperties(s,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};B([gs,X(t)],Vi)})();function Ui(t,e,s){this.assetData=e.getAssetData(t.refId),this.assetData&&this.assetData.sid&&(this.assetData=e.slotManager.getProp(this.assetData)),this.initElement(t,e,s),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}B([Ae,li,Di,hi,Ee,Vi],Ui),Ui.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=at("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},Ui.prototype.sourceRectAtTime=function(){return this.sourceRect};function Bo(t,e){this.elem=t,this.pos=e}function xa(){}xa.prototype={addShapeToModifiers:function(e){var s,a=this.shapeModifiers.length;for(s=0;s<a;s+=1)this.shapeModifiers[s].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var s=0,a=this.shapeModifiers.length;s<a;)if(this.shapeModifiers[s].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,s=this.shapes.length;for(e=0;e<s;e+=1)this.shapes[e].sh.reset();s=this.shapeModifiers.length;var a;for(e=s-1;e>=0&&(a=this.shapeModifiers[e].processShapes(this._isFirstFrame),!a);e-=1);}},searchProcessedElement:function(e){for(var s=this.processedElements,a=0,l=s.length;a<l;){if(s[a].elem===e)return s[a].pos;a+=1}return 0},addProcessedElement:function(e,s){for(var a=this.processedElements,l=a.length;l;)if(l-=1,a[l].elem===e){a[l].pos=s;return}a.push(new Bo(e,s))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};var ka={1:"butt",2:"round",3:"square"},Sa={1:"miter",2:"round",3:"bevel"};function $a(t,e,s){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=s,this.lvl=e,this._isAnimated=!!s.k;for(var a=0,l=t.length;a<l;){if(t[a].mProps.dynamicProperties.length){this._isAnimated=!0;break}a+=1}}$a.prototype.setAsAnimated=function(){this._isAnimated=!0};function Aa(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=at("path"),this.msElem=null}Aa.prototype.reset=function(){this.d="",this._mdf=!1};function _s(t,e,s,a){this.elem=t,this.frameId=-1,this.dataProps=ct(e.length),this.renderer=s,this.k=!1,this.dashStr="",this.dashArray=ot("float32",e.length?e.length-1:0),this.dashoffset=ot("float32",1),this.initDynamicPropertyContainer(a);var l,o=e.length||0,p;for(l=0;l<o;l+=1)p=W.getProp(t,e[l].v,0,0,this),this.k=p.k||this.k,this.dataProps[l]={n:e[l].n,p};this.k||this.getValue(!0),this._isAnimated=this.k}_s.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,s=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<s;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},B([At],_s);function Ea(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=W.getProp(t,e.o,0,.01,this),this.w=W.getProp(t,e.w,0,null,this),this.d=new _s(t,e.d||{},"svg",this),this.c=W.getProp(t,e.c,1,255,this),this.style=s,this._isAnimated=!!this._isAnimated}B([At],Ea);function Pa(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=W.getProp(t,e.o,0,.01,this),this.c=W.getProp(t,e.c,1,255,this),this.style=s}B([At],Pa);function Ta(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=s}B([At],Ta);function Bi(t,e,s){this.data=e,this.c=ot("uint8c",e.p*4);var a=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=ot("float32",a),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=a,this.initDynamicPropertyContainer(s),this.prop=W.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}Bi.prototype.comparePoints=function(t,e){for(var s=0,a=this.o.length/2,l;s<a;){if(l=Math.abs(t[s*4]-t[e*4+s*2]),l>.01)return!1;s+=1}return!0},Bi.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},Bi.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,s=this.data.p*4,a,l;for(e=0;e<s;e+=1)a=e%4===0?100:255,l=Math.round(this.prop.v[e]*a),this.c[e]!==l&&(this.c[e]=l,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=this.data.p*4;e<s;e+=1)a=e%2===0?100:1,l=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==l&&(this.o[e-this.data.p*4]=l,this._omdf=!t);this._mdf=!t}},B([At],Bi);function ci(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,s)}ci.prototype.initGradientData=function(t,e,s){this.o=W.getProp(t,e.o,0,.01,this),this.s=W.getProp(t,e.s,1,null,this),this.e=W.getProp(t,e.e,1,null,this),this.h=W.getProp(t,e.h||{k:0},0,.01,this),this.a=W.getProp(t,e.a||{k:0},0,vt,this),this.g=new Bi(t,e.g,this),this.style=s,this.stops=[],this.setGradientData(s.pElem,e),this.setGradientOpacity(e,s),this._isAnimated=!!this._isAnimated},ci.prototype.setGradientData=function(t,e){var s=Rt(),a=at(e.t===1?"linearGradient":"radialGradient");a.setAttribute("id",s),a.setAttribute("spreadMethod","pad"),a.setAttribute("gradientUnits","userSpaceOnUse");var l=[],o,p,_;for(_=e.g.p*4,p=0;p<_;p+=4)o=at("stop"),a.appendChild(o),l.push(o);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+R()+"#"+s+")"),this.gf=a,this.cst=l},ci.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var s,a,l,o=at("mask"),p=at("path");o.appendChild(p);var _=Rt(),u=Rt();o.setAttribute("id",u);var k=at(t.t===1?"linearGradient":"radialGradient");k.setAttribute("id",_),k.setAttribute("spreadMethod","pad"),k.setAttribute("gradientUnits","userSpaceOnUse"),l=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var A=this.stops;for(a=t.g.p*4;a<l;a+=2)s=at("stop"),s.setAttribute("stop-color","rgb(255,255,255)"),k.appendChild(s),A.push(s);p.setAttribute(t.ty==="gf"?"fill":"stroke","url("+R()+"#"+_+")"),t.ty==="gs"&&(p.setAttribute("stroke-linecap",ka[t.lc||2]),p.setAttribute("stroke-linejoin",Sa[t.lj||2]),t.lj===1&&p.setAttribute("stroke-miterlimit",t.ml)),this.of=k,this.ms=o,this.ost=A,this.maskId=u,e.msElem=p}},B([At],ci);function Ca(t,e,s){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=W.getProp(t,e.w,0,null,this),this.d=new _s(t,e.d||{},"svg",this),this.initGradientData(t,e,s),this._isAnimated=!!this._isAnimated}B([ci,At],Ca);function No(){this.it=[],this.prevViewData=[],this.gr=at("g")}function jo(t,e,s){this.transform={mProps:t,op:e,container:s},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var Ma=function(e,s,a,l){if(s===0)return"";var o=e.o,p=e.i,_=e.v,u,k=" M"+l.applyToPointStringified(_[0][0],_[0][1]);for(u=1;u<s;u+=1)k+=" C"+l.applyToPointStringified(o[u-1][0],o[u-1][1])+" "+l.applyToPointStringified(p[u][0],p[u][1])+" "+l.applyToPointStringified(_[u][0],_[u][1]);return a&&s&&(k+=" C"+l.applyToPointStringified(o[u-1][0],o[u-1][1])+" "+l.applyToPointStringified(p[0][0],p[0][1])+" "+l.applyToPointStringified(_[0][0],_[0][1]),k+="z"),k},Ho=(function(){var t=new Mt,e=new Mt,s={createRenderFunction:a};function a(O){switch(O.ty){case"fl":return _;case"gf":return k;case"gs":return u;case"st":return A;case"sh":case"el":case"rc":case"sr":return p;case"tr":return l;case"no":return o;default:return null}}function l(O,v,E){(E||v.transform.op._mdf)&&v.transform.container.setAttribute("opacity",v.transform.op.v),(E||v.transform.mProps._mdf)&&v.transform.container.setAttribute("transform",v.transform.mProps.v.to2dCSS())}function o(){}function p(O,v,E){var C,P,L,$,w,g,y=v.styles.length,S=v.lvl,M,z,V,j;for(g=0;g<y;g+=1){if($=v.sh._mdf||E,v.styles[g].lvl<S){for(z=e.reset(),V=S-v.styles[g].lvl,j=v.transformers.length-1;!$&&V>0;)$=v.transformers[j].mProps._mdf||$,V-=1,j-=1;if($)for(V=S-v.styles[g].lvl,j=v.transformers.length-1;V>0;)z.multiply(v.transformers[j].mProps.v),V-=1,j-=1}else z=t;if(M=v.sh.paths,P=M._length,$){for(L="",C=0;C<P;C+=1)w=M.shapes[C],w&&w._length&&(L+=Ma(w,w._length,w.c,z));v.caches[g]=L}else L=v.caches[g];v.styles[g].d+=O.hd===!0?"":L,v.styles[g]._mdf=$||v.styles[g]._mdf}}function _(O,v,E){var C=v.style;(v.c._mdf||E)&&C.pElem.setAttribute("fill","rgb("+ae(v.c.v[0])+","+ae(v.c.v[1])+","+ae(v.c.v[2])+")"),(v.o._mdf||E)&&C.pElem.setAttribute("fill-opacity",v.o.v)}function u(O,v,E){k(O,v,E),A(O,v,E)}function k(O,v,E){var C=v.gf,P=v.g._hasOpacity,L=v.s.v,$=v.e.v;if(v.o._mdf||E){var w=O.ty==="gf"?"fill-opacity":"stroke-opacity";v.style.pElem.setAttribute(w,v.o.v)}if(v.s._mdf||E){var g=O.t===1?"x1":"cx",y=g==="x1"?"y1":"cy";C.setAttribute(g,L[0]),C.setAttribute(y,L[1]),P&&!v.g._collapsable&&(v.of.setAttribute(g,L[0]),v.of.setAttribute(y,L[1]))}var S,M,z,V;if(v.g._cmdf||E){S=v.cst;var j=v.g.c;for(z=S.length,M=0;M<z;M+=1)V=S[M],V.setAttribute("offset",j[M*4]+"%"),V.setAttribute("stop-color","rgb("+j[M*4+1]+","+j[M*4+2]+","+j[M*4+3]+")")}if(P&&(v.g._omdf||E)){var it=v.g.o;for(v.g._collapsable?S=v.cst:S=v.ost,z=S.length,M=0;M<z;M+=1)V=S[M],v.g._collapsable||V.setAttribute("offset",it[M*2]+"%"),V.setAttribute("stop-opacity",it[M*2+1])}if(O.t===1)(v.e._mdf||E)&&(C.setAttribute("x2",$[0]),C.setAttribute("y2",$[1]),P&&!v.g._collapsable&&(v.of.setAttribute("x2",$[0]),v.of.setAttribute("y2",$[1])));else{var Z;if((v.s._mdf||v.e._mdf||E)&&(Z=Math.sqrt(Math.pow(L[0]-$[0],2)+Math.pow(L[1]-$[1],2)),C.setAttribute("r",Z),P&&!v.g._collapsable&&v.of.setAttribute("r",Z)),v.s._mdf||v.e._mdf||v.h._mdf||v.a._mdf||E){Z||(Z=Math.sqrt(Math.pow(L[0]-$[0],2)+Math.pow(L[1]-$[1],2)));var H=Math.atan2($[1]-L[1],$[0]-L[0]),nt=v.h.v;nt>=1?nt=.99:nt<=-1&&(nt=-.99);var Y=Z*nt,N=Math.cos(H+v.a.v)*Y+L[0],b=Math.sin(H+v.a.v)*Y+L[1];C.setAttribute("fx",N),C.setAttribute("fy",b),P&&!v.g._collapsable&&(v.of.setAttribute("fx",N),v.of.setAttribute("fy",b))}}}function A(O,v,E){var C=v.style,P=v.d;P&&(P._mdf||E)&&P.dashStr&&(C.pElem.setAttribute("stroke-dasharray",P.dashStr),C.pElem.setAttribute("stroke-dashoffset",P.dashoffset[0])),v.c&&(v.c._mdf||E)&&C.pElem.setAttribute("stroke","rgb("+ae(v.c.v[0])+","+ae(v.c.v[1])+","+ae(v.c.v[2])+")"),(v.o._mdf||E)&&C.pElem.setAttribute("stroke-opacity",v.o.v),(v.w._mdf||E)&&(C.pElem.setAttribute("stroke-width",v.w.v),C.msElem&&C.msElem.setAttribute("stroke-width",v.w.v))}return s})();function yt(t,e,s){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,s),this.prevViewData=[]}B([Ae,li,Di,xa,hi,Ee,Vi],yt),yt.prototype.initSecondaryElement=function(){},yt.prototype.identityMatrix=new Mt,yt.prototype.buildExpressionInterface=function(){},yt.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},yt.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,s,a,l=this.stylesList.length,o,p=[],_=!1;for(a=0;a<l;a+=1){for(o=this.stylesList[a],_=!1,p.length=0,t=0;t<e;t+=1)s=this.shapes[t],s.styles.indexOf(o)!==-1&&(p.push(s),_=s._isAnimated||_);p.length>1&&_&&this.setShapesAsAnimated(p)}},yt.prototype.setShapesAsAnimated=function(t){var e,s=t.length;for(e=0;e<s;e+=1)t[e].setAsAnimated()},yt.prototype.createStyleElement=function(t,e){var s,a=new Aa(t,e),l=a.pElem;if(t.ty==="st")s=new Ea(this,t,a);else if(t.ty==="fl")s=new Pa(this,t,a);else if(t.ty==="gf"||t.ty==="gs"){var o=t.ty==="gf"?ci:Ca;s=new o(this,t,a),this.globalData.defs.appendChild(s.gf),s.maskId&&(this.globalData.defs.appendChild(s.ms),this.globalData.defs.appendChild(s.of),l.setAttribute("mask","url("+R()+"#"+s.maskId+")"))}else t.ty==="no"&&(s=new Ta(this,t,a));return(t.ty==="st"||t.ty==="gs")&&(l.setAttribute("stroke-linecap",ka[t.lc||2]),l.setAttribute("stroke-linejoin",Sa[t.lj||2]),l.setAttribute("fill-opacity","0"),t.lj===1&&l.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&l.setAttribute("fill-rule","evenodd"),t.ln&&l.setAttribute("id",t.ln),t.cl&&l.setAttribute("class",t.cl),t.bm&&(l.style["mix-blend-mode"]=cr(t.bm)),this.stylesList.push(a),this.addToAnimatedContents(t,s),s},yt.prototype.createGroupElement=function(t){var e=new No;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=cr(t.bm)),e},yt.prototype.createTransformElement=function(t,e){var s=ar.getTransformProperty(this,t,this),a=new jo(s,s.o,e);return this.addToAnimatedContents(t,a),a},yt.prototype.createShapeElement=function(t,e,s){var a=4;t.ty==="rc"?a=5:t.ty==="el"?a=6:t.ty==="sr"&&(a=7);var l=ds.getShapeProp(this,t,a,this),o=new $a(e,s,l);return this.shapes.push(o),this.addShapeToModifiers(o),this.addToAnimatedContents(t,o),o},yt.prototype.addToAnimatedContents=function(t,e){for(var s=0,a=this.animatedContents.length;s<a;){if(this.animatedContents[s].element===e)return;s+=1}this.animatedContents.push({fn:Ho.createRenderFunction(t),element:e,data:t})},yt.prototype.setElementStyles=function(t){var e=t.styles,s,a=this.stylesList.length;for(s=0;s<a;s+=1)e.indexOf(this.stylesList[s])===-1&&!this.stylesList[s].closed&&e.push(this.stylesList[s])},yt.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},yt.prototype.searchShapes=function(t,e,s,a,l,o,p){var _=[].concat(o),u,k=t.length-1,A,O,v=[],E=[],C,P,L;for(u=k;u>=0;u-=1){if(L=this.searchProcessedElement(t[u]),L?e[u]=s[L-1]:t[u]._render=p,t[u].ty==="fl"||t[u].ty==="st"||t[u].ty==="gf"||t[u].ty==="gs"||t[u].ty==="no")L?e[u].style.closed=t[u].hd:e[u]=this.createStyleElement(t[u],l),t[u]._render&&e[u].style.pElem.parentNode!==a&&a.appendChild(e[u].style.pElem),v.push(e[u].style);else if(t[u].ty==="gr"){if(!L)e[u]=this.createGroupElement(t[u]);else for(O=e[u].it.length,A=0;A<O;A+=1)e[u].prevViewData[A]=e[u].it[A];this.searchShapes(t[u].it,e[u].it,e[u].prevViewData,e[u].gr,l+1,_,p),t[u]._render&&e[u].gr.parentNode!==a&&a.appendChild(e[u].gr)}else t[u].ty==="tr"?(L||(e[u]=this.createTransformElement(t[u],a)),C=e[u].transform,_.push(C)):t[u].ty==="sh"||t[u].ty==="rc"||t[u].ty==="el"||t[u].ty==="sr"?(L||(e[u]=this.createShapeElement(t[u],_,l)),this.setElementStyles(e[u])):t[u].ty==="tm"||t[u].ty==="rd"||t[u].ty==="ms"||t[u].ty==="pb"||t[u].ty==="zz"||t[u].ty==="op"?(L?(P=e[u],P.closed=!1):(P=Se.getModifier(t[u].ty),P.init(this,t[u]),e[u]=P,this.shapeModifiers.push(P)),E.push(P)):t[u].ty==="rp"&&(L?(P=e[u],P.closed=!0):(P=Se.getModifier(t[u].ty),e[u]=P,P.init(this,t,u,e),this.shapeModifiers.push(P),p=!1),E.push(P));this.addProcessedElement(t[u],u+1)}for(k=v.length,u=0;u<k;u+=1)v[u].closed=!0;for(k=E.length,u=0;u<k;u+=1)E[u].closed=!0},yt.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},yt.prototype.renderShape=function(){var t,e=this.animatedContents.length,s;for(t=0;t<e;t+=1)s=this.animatedContents[t],(this._isFirstFrame||s.element._isAnimated)&&s.data!==!0&&s.fn(s.data,s.element,this._isFirstFrame)},yt.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function pr(t,e,s,a,l,o){this.o=t,this.sw=e,this.sc=s,this.fc=a,this.m=l,this.p=o,this._mdf={o:!0,sw:!!e,sc:!!s,fc:!!a,m:!0,p:!0}}pr.prototype.update=function(t,e,s,a,l,o){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var p=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,p=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,p=!0),this.sc!==s&&(this.sc=s,this._mdf.sc=!0,p=!0),this.fc!==a&&(this.fc=a,this._mdf.fc=!0,p=!0),this.m!==l&&(this.m=l,this._mdf.m=!0,p=!0),o.length&&(this.p[0]!==o[0]||this.p[1]!==o[1]||this.p[4]!==o[4]||this.p[5]!==o[5]||this.p[12]!==o[12]||this.p[13]!==o[13])&&(this.p=o,this._mdf.p=!0,p=!0),p};function Ot(t,e){this._frameId=n,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,e.d&&e.d.sid&&(e.d=t.globalData.slotManager.getProp(e.d)),this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}Ot.prototype.defaultBoxWidth=[0,0],Ot.prototype.copyData=function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},Ot.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},Ot.prototype.searchProperty=function(){return this.searchKeyframes()},Ot.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},Ot.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},Ot.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,s=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var a,l=this.effectsSequence.length,o=t||this.data.d.k[this.keysIndex].s;for(a=0;a<l;a+=1)s!==this.keysIndex?o=this.effectsSequence[a](o,o.t):o=this.effectsSequence[a](this.currentData,o.t);e!==o&&this.setCurrentData(o),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},Ot.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,s=0,a=t.length;s<=a-1&&!(s===a-1||t[s+1].t>e);)s+=1;return this.keysIndex!==s&&(this.keysIndex=s),this.data.d.k[this.keysIndex].s},Ot.prototype.buildFinalText=function(t){for(var e=[],s=0,a=t.length,l,o,p=!1,_=!1,u="";s<a;)p=_,_=!1,l=t.charCodeAt(s),u=t.charAt(s),Ge.isCombinedCharacter(l)?p=!0:l>=55296&&l<=56319?Ge.isRegionalFlag(t,s)?u=t.substr(s,14):(o=t.charCodeAt(s+1),o>=56320&&o<=57343&&(Ge.isModifier(l,o)?(u=t.substr(s,2),p=!0):Ge.isFlagEmoji(t.substr(s,4))?u=t.substr(s,4):u=t.substr(s,2))):l>56319?(o=t.charCodeAt(s+1),Ge.isVariationSelector(l)&&(p=!0)):Ge.isZeroWidthJoiner(l)&&(p=!0,_=!0),p?(e[e.length-1]+=u,p=!1):e.push(u),s+=u.length;return e},Ot.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,s=this.data,a=[],l,o,p,_=0,u,k=s.m.g,A=0,O=0,v=0,E=[],C=0,P=0,L,$,w=e.getFontByName(t.f),g,y=0,S=va(w);t.fWeight=S.weight,t.fStyle=S.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),o=t.finalText.length,t.finalLineHeight=t.lh;var M=t.tr/1e3*t.finalSize,z;if(t.sz)for(var V=!0,j=t.sz[0],it=t.sz[1],Z,H;V;){H=this.buildFinalText(t.t),Z=0,C=0,o=H.length,M=t.tr/1e3*t.finalSize;var nt=-1;for(l=0;l<o;l+=1)z=H[l].charCodeAt(0),p=!1,H[l]===" "?nt=l:(z===13||z===3)&&(C=0,p=!0,Z+=t.finalLineHeight||t.finalSize*1.2),e.chars?(g=e.getCharData(H[l],w.fStyle,w.fFamily),y=p?0:g.w*t.finalSize/100):y=e.measureText(H[l],t.f,t.finalSize),C+y>j&&H[l]!==" "?(nt===-1?o+=1:l=nt,Z+=t.finalLineHeight||t.finalSize*1.2,H.splice(l,nt===l?1:0,"\r"),nt=-1,C=0):(C+=y,C+=M);Z+=w.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&it<Z?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=H,o=t.finalText.length,V=!1)}C=-M,y=0;var Y=0,N;for(l=0;l<o;l+=1)if(p=!1,N=t.finalText[l],z=N.charCodeAt(0),z===13||z===3?(Y=0,E.push(C),P=C>P?C:P,C=-2*M,u="",p=!0,v+=1):u=N,e.chars?(g=e.getCharData(N,w.fStyle,e.getFontByName(t.f).fFamily),y=p?0:g.w*t.finalSize/100):y=e.measureText(u,t.f,t.finalSize),N===" "?Y+=y+M:(C+=y+M+Y,Y=0),a.push({l:y,an:y,add:A,n:p,anIndexes:[],val:u,line:v,animatorJustifyOffset:0}),k==2){if(A+=y,u===""||u===" "||l===o-1){for((u===""||u===" ")&&(A-=y);O<=l;)a[O].an=A,a[O].ind=_,a[O].extra=y,O+=1;_+=1,A=0}}else if(k==3){if(A+=y,u===""||l===o-1){for(u===""&&(A-=y);O<=l;)a[O].an=A,a[O].ind=_,a[O].extra=y,O+=1;A=0,_+=1}}else a[_].ind=_,a[_].extra=0,_+=1;if(t.l=a,P=C>P?C:P,E.push(C),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=P,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=E;var b=s.a,T,d;$=b.length;var m,D,I=[];for(L=0;L<$;L+=1){for(T=b[L],T.a.sc&&(t.strokeColorAnim=!0),T.a.sw&&(t.strokeWidthAnim=!0),(T.a.fc||T.a.fh||T.a.fs||T.a.fb)&&(t.fillColorAnim=!0),D=0,m=T.s.b,l=0;l<o;l+=1)d=a[l],d.anIndexes[L]=D,(m==1&&d.val!==""||m==2&&d.val!==""&&d.val!==" "||m==3&&(d.n||d.val==" "||l==o-1)||m==4&&(d.n||l==o-1))&&(T.s.rn===1&&I.push(D),D+=1);s.a[L].s.totalChars=D;var G=-1,tt;if(T.s.rn===1)for(l=0;l<o;l+=1)d=a[l],G!=d.anIndexes[L]&&(G=d.anIndexes[L],tt=I.splice(Math.floor(Math.random()*I.length),1)[0]),d.anIndexes[L]=tt}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=w.ascent*t.finalSize/100},Ot.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var s=this.copyData({},this.data.d.k[e].s);s=this.copyData(s,t),this.data.d.k[e].s=s,this.recalculate(e),this.setCurrentData(s),this.elem.addDynamicProperty(this)},Ot.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},Ot.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},Ot.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var Wo=(function(){var t=Math.max,e=Math.min,s=Math.floor;function a(o,p){this._currentTextLength=-1,this.k=!1,this.data=p,this.elem=o,this.comp=o.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(o),this.s=W.getProp(o,p.s||{k:0},0,0,this),"e"in p?this.e=W.getProp(o,p.e,0,0,this):this.e={v:100},this.o=W.getProp(o,p.o||{k:0},0,0,this),this.xe=W.getProp(o,p.xe||{k:0},0,0,this),this.ne=W.getProp(o,p.ne||{k:0},0,0,this),this.sm=W.getProp(o,p.sm||{k:100},0,0,this),this.a=W.getProp(o,p.a,0,.01,this),this.dynamicProperties.length||this.getValue()}a.prototype={getMult:function(p){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var _=0,u=0,k=1,A=1;this.ne.v>0?_=this.ne.v/100:u=-this.ne.v/100,this.xe.v>0?k=1-this.xe.v/100:A=1+this.xe.v/100;var O=Ci.getBezierEasing(_,u,k,A).get,v=0,E=this.finalS,C=this.finalE,P=this.data.sh;if(P===2)C===E?v=p>=C?1:0:v=t(0,e(.5/(C-E)+(p-E)/(C-E),1)),v=O(v);else if(P===3)C===E?v=p>=C?0:1:v=1-t(0,e(.5/(C-E)+(p-E)/(C-E),1)),v=O(v);else if(P===4)C===E?v=0:(v=t(0,e(.5/(C-E)+(p-E)/(C-E),1)),v<.5?v*=2:v=1-2*(v-.5)),v=O(v);else if(P===5){if(C===E)v=0;else{var L=C-E;p=e(t(0,p+.5-E),C-E);var $=-L/2+p,w=L/2;v=Math.sqrt(1-$*$/(w*w))}v=O(v)}else P===6?(C===E?v=0:(p=e(t(0,p+.5-E),C-E),v=(1+Math.cos(Math.PI+Math.PI*2*p/(C-E)))/2),v=O(v)):(p>=s(E)&&(p-E<0?v=t(0,e(e(C,1)-(E-p),1)):v=t(0,e(C-p,1))),v=O(v));if(this.sm.v!==100){var g=this.sm.v*.01;g===0&&(g=1e-8);var y=.5-g*.5;v<y?v=0:(v=(v-y)/g,v>1&&(v=1))}return v*this.a.v},getValue:function(p){this.iterateDynamicProperties(),this._mdf=p||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,p&&this.data.r===2&&(this.e.v=this._currentTextLength);var _=this.data.r===2?1:100/this.data.totalChars,u=this.o.v/_,k=this.s.v/_+u,A=this.e.v/_+u;if(k>A){var O=k;k=A,A=O}this.finalS=k,this.finalE=A}},B([At],a);function l(o,p,_){return new a(o,p,_)}return{getTextSelectorProp:l}})();function Go(t,e,s){var a={propType:!1},l=W.getProp,o=e.a;this.a={r:o.r?l(t,o.r,0,vt,s):a,rx:o.rx?l(t,o.rx,0,vt,s):a,ry:o.ry?l(t,o.ry,0,vt,s):a,sk:o.sk?l(t,o.sk,0,vt,s):a,sa:o.sa?l(t,o.sa,0,vt,s):a,s:o.s?l(t,o.s,1,.01,s):a,a:o.a?l(t,o.a,1,0,s):a,o:o.o?l(t,o.o,0,.01,s):a,p:o.p?l(t,o.p,1,0,s):a,sw:o.sw?l(t,o.sw,0,0,s):a,sc:o.sc?l(t,o.sc,1,0,s):a,fc:o.fc?l(t,o.fc,1,0,s):a,fh:o.fh?l(t,o.fh,0,0,s):a,fs:o.fs?l(t,o.fs,0,.01,s):a,fb:o.fb?l(t,o.fb,0,.01,s):a,t:o.t?l(t,o.t,0,0,s):a},this.s=Wo.getTextSelectorProp(t,e.s,s),this.s.t=e.s.t}function Ye(t,e,s){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=s,this._animatorsData=ct(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(s)}Ye.prototype.searchProperties=function(){var t,e=this._textData.a.length,s,a=W.getProp;for(t=0;t<e;t+=1)s=this._textData.a[t],this._animatorsData[t]=new Go(this._elem,s,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:a(this._elem,this._textData.p.a,0,0,this),f:a(this._elem,this._textData.p.f,0,0,this),l:a(this._elem,this._textData.p.l,0,0,this),r:a(this._elem,this._textData.p.r,0,0,this),p:a(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=a(this._elem,this._textData.m.a,1,0,this)},Ye.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var s=this._moreOptions.alignment.v,a=this._animatorsData,l=this._textData,o=this.mHelper,p=this._renderType,_=this.renderedLetters.length,u,k,A,O,v=t.l,E,C,P,L,$,w,g,y,S,M,z,V,j,it,Z;if(this._hasMaskedPath){if(Z=this._pathData.m,!this._pathData.n||this._pathData._mdf){var H=Z.v;this._pathData.r.v&&(H=H.reverse()),E={tLength:0,segments:[]},O=H._length-1;var nt;for(V=0,A=0;A<O;A+=1)nt=ne.buildBezierData(H.v[A],H.v[A+1],[H.o[A][0]-H.v[A][0],H.o[A][1]-H.v[A][1]],[H.i[A+1][0]-H.v[A+1][0],H.i[A+1][1]-H.v[A+1][1]]),E.tLength+=nt.segmentLength,E.segments.push(nt),V+=nt.segmentLength;A=O,Z.v.c&&(nt=ne.buildBezierData(H.v[A],H.v[0],[H.o[A][0]-H.v[A][0],H.o[A][1]-H.v[A][1]],[H.i[0][0]-H.v[0][0],H.i[0][1]-H.v[0][1]]),E.tLength+=nt.segmentLength,E.segments.push(nt),V+=nt.segmentLength),this._pathData.pi=E}if(E=this._pathData.pi,C=this._pathData.f.v,g=0,w=1,L=0,$=!0,M=E.segments,C<0&&Z.v.c)for(E.tLength<Math.abs(C)&&(C=-Math.abs(C)%E.tLength),g=M.length-1,S=M[g].points,w=S.length-1;C<0;)C+=S[w].partialLength,w-=1,w<0&&(g-=1,S=M[g].points,w=S.length-1);S=M[g].points,y=S[w-1],P=S[w],z=P.partialLength}O=v.length,u=0,k=0;var Y=t.finalSize*1.2*.714,N=!0,b,T,d,m,D;m=a.length;var I,G=-1,tt,st,dt,pt=C,wt=g,Vt=w,le=-1,Ut,Et,jt,mt,K,ge,Ce,ve,he="",_e=this.defaultPropsArray,ye;if(t.j===2||t.j===1){var Bt=0,Me=0,Fe=t.j===2?-.5:-1,ee=0,Ie=!0;for(A=0;A<O;A+=1)if(v[A].n){for(Bt&&(Bt+=Me);ee<A;)v[ee].animatorJustifyOffset=Bt,ee+=1;Bt=0,Ie=!0}else{for(d=0;d<m;d+=1)b=a[d].a,b.t.propType&&(Ie&&t.j===2&&(Me+=b.t.v*Fe),T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?Bt+=b.t.v*I[0]*Fe:Bt+=b.t.v*I*Fe);Ie=!1}for(Bt&&(Bt+=Me);ee<A;)v[ee].animatorJustifyOffset=Bt,ee+=1}for(A=0;A<O;A+=1){if(o.reset(),Ut=1,v[A].n)u=0,k+=t.yOffset,k+=N?1:0,C=pt,N=!1,this._hasMaskedPath&&(g=wt,w=Vt,S=M[g].points,y=S[w-1],P=S[w],z=P.partialLength,L=0),he="",ve="",ge="",ye="",_e=this.defaultPropsArray;else{if(this._hasMaskedPath){if(le!==v[A].line){switch(t.j){case 1:C+=V-t.lineWidths[v[A].line];break;case 2:C+=(V-t.lineWidths[v[A].line])/2;break;default:break}le=v[A].line}G!==v[A].ind&&(v[G]&&(C+=v[G].extra),C+=v[A].an/2,G=v[A].ind),C+=s[0]*v[A].an*.005;var ie=0;for(d=0;d<m;d+=1)b=a[d].a,b.p.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?ie+=b.p.v[0]*I[0]:ie+=b.p.v[0]*I),b.a.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?ie+=b.a.v[0]*I[0]:ie+=b.a.v[0]*I);for($=!0,this._pathData.a.v&&(C=v[0].an*.5+(V-this._pathData.f.v-v[0].an*.5-v[v.length-1].an*.5)*G/(O-1),C+=this._pathData.f.v);$;)L+z>=C+ie||!S?(j=(C+ie-L)/P.partialLength,st=y.point[0]+(P.point[0]-y.point[0])*j,dt=y.point[1]+(P.point[1]-y.point[1])*j,o.translate(-s[0]*v[A].an*.005,-(s[1]*Y)*.01),$=!1):S&&(L+=P.partialLength,w+=1,w>=S.length&&(w=0,g+=1,M[g]?S=M[g].points:Z.v.c?(w=0,g=0,S=M[g].points):(L-=P.partialLength,S=null)),S&&(y=P,P=S[w],z=P.partialLength));tt=v[A].an/2-v[A].add,o.translate(-tt,0,0)}else tt=v[A].an/2-v[A].add,o.translate(-tt,0,0),o.translate(-s[0]*v[A].an*.005,-s[1]*Y*.01,0);for(d=0;d<m;d+=1)b=a[d].a,b.t.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),(u!==0||t.j!==0)&&(this._hasMaskedPath?I.length?C+=b.t.v*I[0]:C+=b.t.v*I:I.length?u+=b.t.v*I[0]:u+=b.t.v*I));for(t.strokeWidthAnim&&(jt=t.sw||0),t.strokeColorAnim&&(t.sc?Et=[t.sc[0],t.sc[1],t.sc[2]]:Et=[0,0,0]),t.fillColorAnim&&t.fc&&(mt=[t.fc[0],t.fc[1],t.fc[2]]),d=0;d<m;d+=1)b=a[d].a,b.a.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?o.translate(-b.a.v[0]*I[0],-b.a.v[1]*I[1],b.a.v[2]*I[2]):o.translate(-b.a.v[0]*I,-b.a.v[1]*I,b.a.v[2]*I));for(d=0;d<m;d+=1)b=a[d].a,b.s.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),I.length?o.scale(1+(b.s.v[0]-1)*I[0],1+(b.s.v[1]-1)*I[1],1):o.scale(1+(b.s.v[0]-1)*I,1+(b.s.v[1]-1)*I,1));for(d=0;d<m;d+=1){if(b=a[d].a,T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),b.sk.propType&&(I.length?o.skewFromAxis(-b.sk.v*I[0],b.sa.v*I[1]):o.skewFromAxis(-b.sk.v*I,b.sa.v*I)),b.r.propType&&(I.length?o.rotateZ(-b.r.v*I[2]):o.rotateZ(-b.r.v*I)),b.ry.propType&&(I.length?o.rotateY(b.ry.v*I[1]):o.rotateY(b.ry.v*I)),b.rx.propType&&(I.length?o.rotateX(b.rx.v*I[0]):o.rotateX(b.rx.v*I)),b.o.propType&&(I.length?Ut+=(b.o.v*I[0]-Ut)*I[0]:Ut+=(b.o.v*I-Ut)*I),t.strokeWidthAnim&&b.sw.propType&&(I.length?jt+=b.sw.v*I[0]:jt+=b.sw.v*I),t.strokeColorAnim&&b.sc.propType)for(K=0;K<3;K+=1)I.length?Et[K]+=(b.sc.v[K]-Et[K])*I[0]:Et[K]+=(b.sc.v[K]-Et[K])*I;if(t.fillColorAnim&&t.fc){if(b.fc.propType)for(K=0;K<3;K+=1)I.length?mt[K]+=(b.fc.v[K]-mt[K])*I[0]:mt[K]+=(b.fc.v[K]-mt[K])*I;b.fh.propType&&(I.length?mt=Hr(mt,b.fh.v*I[0]):mt=Hr(mt,b.fh.v*I)),b.fs.propType&&(I.length?mt=Nr(mt,b.fs.v*I[0]):mt=Nr(mt,b.fs.v*I)),b.fb.propType&&(I.length?mt=jr(mt,b.fb.v*I[0]):mt=jr(mt,b.fb.v*I))}}for(d=0;d<m;d+=1)b=a[d].a,b.p.propType&&(T=a[d].s,I=T.getMult(v[A].anIndexes[d],l.a[d].s.totalChars),this._hasMaskedPath?I.length?o.translate(0,b.p.v[1]*I[0],-b.p.v[2]*I[1]):o.translate(0,b.p.v[1]*I,-b.p.v[2]*I):I.length?o.translate(b.p.v[0]*I[0],b.p.v[1]*I[1],-b.p.v[2]*I[2]):o.translate(b.p.v[0]*I,b.p.v[1]*I,-b.p.v[2]*I));if(t.strokeWidthAnim&&(ge=jt<0?0:jt),t.strokeColorAnim&&(Ce="rgb("+Math.round(Et[0]*255)+","+Math.round(Et[1]*255)+","+Math.round(Et[2]*255)+")"),t.fillColorAnim&&t.fc&&(ve="rgb("+Math.round(mt[0]*255)+","+Math.round(mt[1]*255)+","+Math.round(mt[2]*255)+")"),this._hasMaskedPath){if(o.translate(0,-t.ls),o.translate(0,s[1]*Y*.01+k,0),this._pathData.p.v){it=(P.point[1]-y.point[1])/(P.point[0]-y.point[0]);var Ke=Math.atan(it)*180/Math.PI;P.point[0]<y.point[0]&&(Ke+=180),o.rotate(-Ke*Math.PI/180)}o.translate(st,dt,0),C-=s[0]*v[A].an*.005,v[A+1]&&G!==v[A+1].ind&&(C+=v[A].an/2,C+=t.tr*.001*t.finalSize)}else{switch(o.translate(u,k,0),t.ps&&o.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:o.translate(v[A].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[v[A].line]),0,0);break;case 2:o.translate(v[A].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[v[A].line])/2,0,0);break;default:break}o.translate(0,-t.ls),o.translate(tt,0,0),o.translate(s[0]*v[A].an*.005,s[1]*Y*.01,0),u+=v[A].l+t.tr*.001*t.finalSize}p==="html"?he=o.toCSS():p==="svg"?he=o.to2dCSS():_e=[o.props[0],o.props[1],o.props[2],o.props[3],o.props[4],o.props[5],o.props[6],o.props[7],o.props[8],o.props[9],o.props[10],o.props[11],o.props[12],o.props[13],o.props[14],o.props[15]],ye=Ut}_<=A?(D=new pr(ye,ge,Ce,ve,he,_e),this.renderedLetters.push(D),_+=1,this.lettersChangedFlag=!0):(D=this.renderedLetters[A],this.lettersChangedFlag=D.update(ye,ge,Ce,ve,he,_e)||this.lettersChangedFlag)}}},Ye.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},Ye.prototype.mHelper=new Mt,Ye.prototype.defaultPropsArray=[],B([At],Ye);function Gt(){}Gt.prototype.initElement=function(t,e,s){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,s),this.textProperty=new Ot(this,t.t,this.dynamicProperties),this.textAnimator=new Ye(t.t,this.renderType,this),this.initTransform(t,e,s),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Gt.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},Gt.prototype.createPathShape=function(t,e){var s,a=e.length,l,o="";for(s=0;s<a;s+=1)e[s].ty==="sh"&&(l=e[s].ks.k,o+=Ma(l,l.i.length,!0,t));return o},Gt.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},Gt.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},Gt.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},Gt.prototype.applyTextPropertiesToMatrix=function(t,e,s,a,l){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s])/2,0,0);break;default:break}e.translate(a,l,0)},Gt.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},Gt.prototype.emptyProp=new pr,Gt.prototype.destroy=function(){},Gt.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var qo={shapes:[]};function ue(t,e,s){this.textSpans=[],this.renderType="svg",this.initElement(t,e,s)}B([Ae,li,Di,hi,Ee,Vi,Gt],ue),ue.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=at("text"))},ue.prototype.buildTextContents=function(t){for(var e=0,s=t.length,a=[],l="";e<s;)t[e]==="\r"||t[e]===""?(a.push(l),l=""):l+=t[e],e+=1;return a.push(l),a},ue.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var s=t.shapes[0];if(s.it){var a=s.it[s.it.length-1];a.s&&(a.s.k[0]=e,a.s.k[1]=e)}}return t},ue.prototype.buildNewText=function(){this.addDynamicProperty(this);var t,e,s=this.textProperty.currentData;this.renderedLetters=ct(s?s.l.length:0),s.fc?this.layerElement.setAttribute("fill",this.buildColor(s.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),s.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(s.sc)),this.layerElement.setAttribute("stroke-width",s.sw)),this.layerElement.setAttribute("font-size",s.finalSize);var a=this.globalData.fontManager.getFontByName(s.f);if(a.fClass)this.layerElement.setAttribute("class",a.fClass);else{this.layerElement.setAttribute("font-family",a.fFamily);var l=s.fWeight,o=s.fStyle;this.layerElement.setAttribute("font-style",o),this.layerElement.setAttribute("font-weight",l)}this.layerElement.setAttribute("aria-label",s.t);var p=s.l||[],_=!!this.globalData.fontManager.chars;e=p.length;var u,k=this.mHelper,A="",O=this.data.singleShape,v=0,E=0,C=!0,P=s.tr*.001*s.finalSize;if(O&&!_&&!s.sz){var L=this.textContainer,$="start";switch(s.j){case 1:$="end";break;case 2:$="middle";break;default:$="start";break}L.setAttribute("text-anchor",$),L.setAttribute("letter-spacing",P);var w=this.buildTextContents(s.finalText);for(e=w.length,E=s.ps?s.ps[1]+s.ascent:0,t=0;t<e;t+=1)u=this.textSpans[t].span||at("tspan"),u.textContent=w[t],u.setAttribute("x",0),u.setAttribute("y",E),u.style.display="inherit",L.appendChild(u),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=u,E+=s.finalLineHeight;this.layerElement.appendChild(L)}else{var g=this.textSpans.length,y;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!_||!O||t===0){if(u=g>t?this.textSpans[t].span:at(_?"g":"text"),g<=t){if(u.setAttribute("stroke-linecap","butt"),u.setAttribute("stroke-linejoin","round"),u.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=u,_){var S=at("g");u.appendChild(S),this.textSpans[t].childSpan=S}this.textSpans[t].span=u,this.layerElement.appendChild(u)}u.style.display="inherit"}if(k.reset(),O&&(p[t].n&&(v=-P,E+=s.yOffset,E+=C?1:0,C=!1),this.applyTextPropertiesToMatrix(s,k,p[t].line,v,E),v+=p[t].l||0,v+=P),_){y=this.globalData.fontManager.getCharData(s.finalText[t],a.fStyle,this.globalData.fontManager.getFontByName(s.f).fFamily);var M;if(y.t===1)M=new Ni(y.data,this.globalData,this);else{var z=qo;y.data&&y.data.shapes&&(z=this.buildShapeData(y.data,s.finalSize)),M=new yt(z,this.globalData,this)}if(this.textSpans[t].glyph){var V=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(V.layerElement),V.destroy()}this.textSpans[t].glyph=M,M._debug=!0,M.prepareFrame(0),M.renderFrame(),this.textSpans[t].childSpan.appendChild(M.layerElement),y.t===1&&this.textSpans[t].childSpan.setAttribute("transform","scale("+s.finalSize/100+","+s.finalSize/100+")")}else O&&u.setAttribute("transform","translate("+k.props[12]+","+k.props[13]+")"),u.textContent=p[t].val,u.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}O&&u&&u.setAttribute("d",A)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},ue.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},ue.prototype.getValue=function(){var t,e=this.textSpans.length,s;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<e;t+=1)s=this.textSpans[t].glyph,s&&(s.prepareFrame(this.comp.renderedFrame-this.data.st),s._mdf&&(this._mdf=!0))},ue.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,s=this.textAnimator.renderedLetters,a=this.textProperty.currentData.l;e=a.length;var l,o,p;for(t=0;t<e;t+=1)a[t].n||(l=s[t],o=this.textSpans[t].span,p=this.textSpans[t].glyph,p&&p.renderFrame(),l._mdf.m&&o.setAttribute("transform",l.m),l._mdf.o&&o.setAttribute("opacity",l.o),l._mdf.sw&&o.setAttribute("stroke-width",l.sw),l._mdf.sc&&o.setAttribute("stroke",l.sc),l._mdf.fc&&o.setAttribute("fill",l.fc))}};function fr(t,e,s){this.initElement(t,e,s)}B([Ui],fr),fr.prototype.createContent=function(){var t=at("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function Te(t,e,s){this.initFrame(),this.initBaseData(t,e,s),this.initFrame(),this.initTransform(t,e,s),this.initHierarchy()}Te.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},Te.prototype.renderFrame=function(){},Te.prototype.getBaseElement=function(){return null},Te.prototype.destroy=function(){},Te.prototype.sourceRectAtTime=function(){},Te.prototype.hide=function(){},B([Ae,li,hi,Ee],Te);function xt(){}B([Ft],xt),xt.prototype.createNull=function(t){return new Te(t,this.globalData,this)},xt.prototype.createShape=function(t){return new yt(t,this.globalData,this)},xt.prototype.createText=function(t){return new ue(t,this.globalData,this)},xt.prototype.createImage=function(t){return new Ui(t,this.globalData,this)},xt.prototype.createSolid=function(t){return new fr(t,this.globalData,this)},xt.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var s=at("clipPath"),a=at("rect");a.setAttribute("width",t.w),a.setAttribute("height",t.h),a.setAttribute("x",0),a.setAttribute("y",0);var l=Rt();s.setAttribute("id",l),s.appendChild(a),this.layerElement.setAttribute("clip-path","url("+R()+"#"+l+")"),e.appendChild(s),this.layers=t.layers,this.elements=ct(t.layers.length)},xt.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},xt.prototype.updateContainerSize=function(){},xt.prototype.findIndexByInd=function(t){var e=0,s=this.layers.length;for(e=0;e<s;e+=1)if(this.layers[e].ind===t)return e;return-1},xt.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var s=this.createItem(this.layers[t]);if(e[t]=s,rs()&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(s),s.initExpressions()),this.appendElementInPos(s,t),this.layers[t].tt){var a="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(a===-1)return;if(!this.elements[a]||this.elements[a]===!0)this.buildItem(a),this.addPendingElement(s);else{var l=e[a],o=l.getMatte(this.layers[t].tt);s.setMatte(o)}}}},xt.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,s=this.elements.length;e<s;){if(this.elements[e]===t){var a="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,l=this.elements[a],o=l.getMatte(this.layers[e].tt);t.setMatte(o);break}e+=1}}},xt.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=s-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<s;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},xt.prototype.appendElementInPos=function(t,e){var s=t.getBaseElement();if(s){for(var a=0,l;a<e;)this.elements[a]&&this.elements[a]!==!0&&this.elements[a].getBaseElement()&&(l=this.elements[a].getBaseElement()),a+=1;l?this.layerElement.insertBefore(s,l):this.layerElement.appendChild(s)}},xt.prototype.hide=function(){this.layerElement.style.display="none"},xt.prototype.show=function(){this.layerElement.style.display="block"};function me(){}B([Ae,li,hi,Ee,Vi],me),me.prototype.initElement=function(t,e,s){this.initFrame(),this.initBaseData(t,e,s),this.initTransform(t,e,s),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},me.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var s,a=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),s=a-1;s>=0;s-=1)(this.completeLayers||this.elements[s])&&(this.elements[s].prepareFrame(this.renderedFrame-this.layers[s].st),this.elements[s]._mdf&&(this._mdf=!0))}},me.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},me.prototype.setElements=function(t){this.elements=t},me.prototype.getElements=function(){return this.elements},me.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},me.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function Ni(t,e,s){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?ct(this.layers.length):[],this.initElement(t,e,s),this.tm=t.tm?W.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}B([xt,me,Di],Ni),Ni.prototype.createComp=function(t){return new Ni(t,this.globalData,this)};function ur(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=at("svg");var s="";if(e&&e.title){var a=at("title"),l=Rt();a.setAttribute("id",l),a.textContent=e.title,this.svgElement.appendChild(a),s+=l}if(e&&e.description){var o=at("desc"),p=Rt();o.setAttribute("id",p),o.textContent=e.description,this.svgElement.appendChild(o),s+=" "+p}s&&this.svgElement.setAttribute("aria-labelledby",s);var _=at("defs");this.svgElement.appendChild(_);var u=at("g");this.svgElement.appendChild(u),this.layerElement=u,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||e.runExpressions===void 0||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:_,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}return B([xt],ur),ur.prototype.createComp=function(t){return new Ni(t,this.globalData,this)},io("svg",ur),Se.registerModifier("tm",te),Se.registerModifier("pb",Mi),Se.registerModifier("rp",oe),Se.registerModifier("rd",Fi),Se.registerModifier("zz",Li),Se.registerModifier("op",zi),ut}))});var It="ecoflow-energy-card",qt="ecoflow-house-card",Yt="ecoflow-space-card",Le="ecoflow_iot",ze="/ecoflow_iot";function be(h,i){return h&&(i?.hassUrl?i.hassUrl(h):h)}var xs=globalThis,ks=xs.ShadowRoot&&(xs.ShadyCSS===void 0||xs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mr=Symbol(),Ia=new WeakMap,ji=class{constructor(i,r,n){if(this._$cssResult$=!0,n!==mr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=r}get styleSheet(){let i=this.o,r=this.t;if(ks&&i===void 0){let n=r!==void 0&&r.length===1;n&&(i=Ia.get(r)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),n&&Ia.set(r,i))}return i}toString(){return this.cssText}},La=h=>new ji(typeof h=="string"?h:h+"",void 0,mr),Pt=(h,...i)=>{let r=h.length===1?h[0]:i.reduce((n,c,f)=>n+(x=>{if(x._$cssResult$===!0)return x.cssText;if(typeof x=="number")return x;throw Error("Value passed to 'css' function must be a 'css' function result: "+x+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(c)+h[f+1],h[0]);return new ji(r,h,mr)},za=(h,i)=>{if(ks)h.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of i){let n=document.createElement("style"),c=xs.litNonce;c!==void 0&&n.setAttribute("nonce",c),n.textContent=r.cssText,h.appendChild(n)}},gr=ks?h=>h:h=>h instanceof CSSStyleSheet?(i=>{let r="";for(let n of i.cssRules)r+=n.cssText;return La(r)})(h):h;var{is:il,defineProperty:sl,getOwnPropertyDescriptor:rl,getOwnPropertyNames:al,getOwnPropertySymbols:nl,getPrototypeOf:ol}=Object,Ss=globalThis,Oa=Ss.trustedTypes,ll=Oa?Oa.emptyScript:"",hl=Ss.reactiveElementPolyfillSupport,Hi=(h,i)=>h,vr={toAttribute(h,i){switch(i){case Boolean:h=h?ll:null;break;case Object:case Array:h=h==null?h:JSON.stringify(h)}return h},fromAttribute(h,i){let r=h;switch(i){case Boolean:r=h!==null;break;case Number:r=h===null?null:Number(h);break;case Object:case Array:try{r=JSON.parse(h)}catch{r=null}}return r}},Da=(h,i)=>!il(h,i),Ra={attribute:!0,type:String,converter:vr,reflect:!1,useDefault:!1,hasChanged:Da};Symbol.metadata??=Symbol("metadata"),Ss.litPropertyMetadata??=new WeakMap;var we=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,r=Ra){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(i,r),!r.noAccessor){let n=Symbol(),c=this.getPropertyDescriptor(i,n,r);c!==void 0&&sl(this.prototype,i,c)}}static getPropertyDescriptor(i,r,n){let{get:c,set:f}=rl(this.prototype,i)??{get(){return this[r]},set(x){this[r]=x}};return{get:c,set(x){let R=c?.call(this);f?.call(this,x),this.requestUpdate(i,R,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Ra}static _$Ei(){if(this.hasOwnProperty(Hi("elementProperties")))return;let i=ol(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Hi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Hi("properties"))){let r=this.properties,n=[...al(r),...nl(r)];for(let c of n)this.createProperty(c,r[c])}let i=this[Symbol.metadata];if(i!==null){let r=litPropertyMetadata.get(i);if(r!==void 0)for(let[n,c]of r)this.elementProperties.set(n,c)}this._$Eh=new Map;for(let[r,n]of this.elementProperties){let c=this._$Eu(r,n);c!==void 0&&this._$Eh.set(c,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let r=[];if(Array.isArray(i)){let n=new Set(i.flat(1/0).reverse());for(let c of n)r.unshift(gr(c))}else i!==void 0&&r.push(gr(i));return r}static _$Eu(i,r){let n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(i=>i(this))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){let i=new Map,r=this.constructor.elementProperties;for(let n of r.keys())this.hasOwnProperty(n)&&(i.set(n,this[n]),delete this[n]);i.size>0&&(this._$Ep=i)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return za(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(i=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach(i=>i.hostDisconnected?.())}attributeChangedCallback(i,r,n){this._$AK(i,n)}_$ET(i,r){let n=this.constructor.elementProperties.get(i),c=this.constructor._$Eu(i,n);if(c!==void 0&&n.reflect===!0){let f=(n.converter?.toAttribute!==void 0?n.converter:vr).toAttribute(r,n.type);this._$Em=i,f==null?this.removeAttribute(c):this.setAttribute(c,f),this._$Em=null}}_$AK(i,r){let n=this.constructor,c=n._$Eh.get(i);if(c!==void 0&&this._$Em!==c){let f=n.getPropertyOptions(c),x=typeof f.converter=="function"?{fromAttribute:f.converter}:f.converter?.fromAttribute!==void 0?f.converter:vr;this._$Em=c;let R=x.fromAttribute(r,f.type);this[c]=R??this._$Ej?.get(c)??R,this._$Em=null}}requestUpdate(i,r,n,c=!1,f){if(i!==void 0){let x=this.constructor;if(c===!1&&(f=this[i]),n??=x.getPropertyOptions(i),!((n.hasChanged??Da)(f,r)||n.useDefault&&n.reflect&&f===this._$Ej?.get(i)&&!this.hasAttribute(x._$Eu(i,n))))return;this.C(i,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,r,{useDefault:n,reflect:c,wrapped:f},x){n&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,x??r??this[i]),f!==!0||x!==void 0)||(this._$AL.has(i)||(this.hasUpdated||n||(r=void 0),this._$AL.set(i,r)),c===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[c,f]of this._$Ep)this[c]=f;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[c,f]of n){let{wrapped:x}=f,R=this[c];x!==!0||this._$AL.has(c)||R===void 0||this.C(c,void 0,f,R)}}let i=!1,r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw i=!1,this._$EM(),n}i&&this._$AE(r)}willUpdate(i){}_$AE(i){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(i){}firstUpdated(i){}};we.elementStyles=[],we.shadowRootOptions={mode:"open"},we[Hi("elementProperties")]=new Map,we[Hi("finalized")]=new Map,hl?.({ReactiveElement:we}),(Ss.reactiveElementVersions??=[]).push("2.1.2");var Sr=globalThis,Va=h=>h,$s=Sr.trustedTypes,Ua=$s?$s.createPolicy("lit-html",{createHTML:h=>h}):void 0,Ga="$lit$",Oe=`lit$${Math.random().toFixed(9).slice(2)}$`,qa="?"+Oe,cl=`<${qa}>`,Je=document,Gi=()=>Je.createComment(""),qi=h=>h===null||typeof h!="object"&&typeof h!="function",$r=Array.isArray,dl=h=>$r(h)||typeof h?.[Symbol.iterator]=="function",_r=`[ 	
\f\r]`,Wi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ba=/-->/g,Na=/>/g,Xe=RegExp(`>|${_r}(?:([^\\s"'>=/]+)(${_r}*=${_r}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ja=/'/g,Ha=/"/g,Ya=/^(?:script|style|textarea|title)$/i,Ar=h=>(i,...r)=>({_$litType$:h,strings:i,values:r}),F=Ar(1),Kt=Ar(2),ch=Ar(3),Qe=Symbol.for("lit-noChange"),kt=Symbol.for("lit-nothing"),Wa=new WeakMap,Ze=Je.createTreeWalker(Je,129);function Ka(h,i){if(!$r(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ua!==void 0?Ua.createHTML(i):i}var pl=(h,i)=>{let r=h.length-1,n=[],c,f=i===2?"<svg>":i===3?"<math>":"",x=Wi;for(let R=0;R<r;R++){let U=h[R],B,q,X=-1,rt=0;for(;rt<U.length&&(x.lastIndex=rt,q=x.exec(U),q!==null);)rt=x.lastIndex,x===Wi?q[1]==="!--"?x=Ba:q[1]!==void 0?x=Na:q[2]!==void 0?(Ya.test(q[2])&&(c=RegExp("</"+q[2],"g")),x=Xe):q[3]!==void 0&&(x=Xe):x===Xe?q[0]===">"?(x=c??Wi,X=-1):q[1]===void 0?X=-2:(X=x.lastIndex-q[2].length,B=q[1],x=q[3]===void 0?Xe:q[3]==='"'?Ha:ja):x===Ha||x===ja?x=Xe:x===Ba||x===Na?x=Wi:(x=Xe,c=void 0);let ot=x===Xe&&h[R+1].startsWith("/>")?" ":"";f+=x===Wi?U+cl:X>=0?(n.push(B),U.slice(0,X)+Ga+U.slice(X)+Oe+ot):U+Oe+(X===-2?R:ot)}return[Ka(h,f+(h[r]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),n]},Yi=class h{constructor({strings:i,_$litType$:r},n){let c;this.parts=[];let f=0,x=0,R=i.length-1,U=this.parts,[B,q]=pl(i,r);if(this.el=h.createElement(B,n),Ze.currentNode=this.el.content,r===2||r===3){let X=this.el.content.firstChild;X.replaceWith(...X.childNodes)}for(;(c=Ze.nextNode())!==null&&U.length<R;){if(c.nodeType===1){if(c.hasAttributes())for(let X of c.getAttributeNames())if(X.endsWith(Ga)){let rt=q[x++],ot=c.getAttribute(X).split(Oe),ct=/([.?@])?(.*)/.exec(rt);U.push({type:1,index:f,name:ct[2],strings:ot,ctor:ct[1]==="."?br:ct[1]==="?"?wr:ct[1]==="@"?xr:pi}),c.removeAttribute(X)}else X.startsWith(Oe)&&(U.push({type:6,index:f}),c.removeAttribute(X));if(Ya.test(c.tagName)){let X=c.textContent.split(Oe),rt=X.length-1;if(rt>0){c.textContent=$s?$s.emptyScript:"";for(let ot=0;ot<rt;ot++)c.append(X[ot],Gi()),Ze.nextNode(),U.push({type:2,index:++f});c.append(X[rt],Gi())}}}else if(c.nodeType===8)if(c.data===qa)U.push({type:2,index:f});else{let X=-1;for(;(X=c.data.indexOf(Oe,X+1))!==-1;)U.push({type:7,index:f}),X+=Oe.length-1}f++}}static createElement(i,r){let n=Je.createElement("template");return n.innerHTML=i,n}};function di(h,i,r=h,n){if(i===Qe)return i;let c=n!==void 0?r._$Co?.[n]:r._$Cl,f=qi(i)?void 0:i._$litDirective$;return c?.constructor!==f&&(c?._$AO?.(!1),f===void 0?c=void 0:(c=new f(h),c._$AT(h,r,n)),n!==void 0?(r._$Co??=[])[n]=c:r._$Cl=c),c!==void 0&&(i=di(h,c._$AS(h,i.values),c,n)),i}var yr=class{constructor(i,r){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){let{el:{content:r},parts:n}=this._$AD,c=(i?.creationScope??Je).importNode(r,!0);Ze.currentNode=c;let f=Ze.nextNode(),x=0,R=0,U=n[0];for(;U!==void 0;){if(x===U.index){let B;U.type===2?B=new Ki(f,f.nextSibling,this,i):U.type===1?B=new U.ctor(f,U.name,U.strings,this,i):U.type===6&&(B=new kr(f,this,i)),this._$AV.push(B),U=n[++R]}x!==U?.index&&(f=Ze.nextNode(),x++)}return Ze.currentNode=Je,c}p(i){let r=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(i,n,r),r+=n.strings.length-2):n._$AI(i[r])),r++}},Ki=class h{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,r,n,c){this.type=2,this._$AH=kt,this._$AN=void 0,this._$AA=i,this._$AB=r,this._$AM=n,this.options=c,this._$Cv=c?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode,r=this._$AM;return r!==void 0&&i?.nodeType===11&&(i=r.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,r=this){i=di(this,i,r),qi(i)?i===kt||i==null||i===""?(this._$AH!==kt&&this._$AR(),this._$AH=kt):i!==this._$AH&&i!==Qe&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):dl(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==kt&&qi(this._$AH)?this._$AA.nextSibling.data=i:this.T(Je.createTextNode(i)),this._$AH=i}$(i){let{values:r,_$litType$:n}=i,c=typeof n=="number"?this._$AC(i):(n.el===void 0&&(n.el=Yi.createElement(Ka(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===c)this._$AH.p(r);else{let f=new yr(c,this),x=f.u(this.options);f.p(r),this.T(x),this._$AH=f}}_$AC(i){let r=Wa.get(i.strings);return r===void 0&&Wa.set(i.strings,r=new Yi(i)),r}k(i){$r(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,n,c=0;for(let f of i)c===r.length?r.push(n=new h(this.O(Gi()),this.O(Gi()),this,this.options)):n=r[c],n._$AI(f),c++;c<r.length&&(this._$AR(n&&n._$AB.nextSibling,c),r.length=c)}_$AR(i=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);i!==this._$AB;){let n=Va(i).nextSibling;Va(i).remove(),i=n}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},pi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,r,n,c,f){this.type=1,this._$AH=kt,this._$AN=void 0,this.element=i,this.name=r,this._$AM=c,this.options=f,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=kt}_$AI(i,r=this,n,c){let f=this.strings,x=!1;if(f===void 0)i=di(this,i,r,0),x=!qi(i)||i!==this._$AH&&i!==Qe,x&&(this._$AH=i);else{let R=i,U,B;for(i=f[0],U=0;U<f.length-1;U++)B=di(this,R[n+U],r,U),B===Qe&&(B=this._$AH[U]),x||=!qi(B)||B!==this._$AH[U],B===kt?i=kt:i!==kt&&(i+=(B??"")+f[U+1]),this._$AH[U]=B}x&&!c&&this.j(i)}j(i){i===kt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},br=class extends pi{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===kt?void 0:i}},wr=class extends pi{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==kt)}},xr=class extends pi{constructor(i,r,n,c,f){super(i,r,n,c,f),this.type=5}_$AI(i,r=this){if((i=di(this,i,r,0)??kt)===Qe)return;let n=this._$AH,c=i===kt&&n!==kt||i.capture!==n.capture||i.once!==n.once||i.passive!==n.passive,f=i!==kt&&(n===kt||c);c&&this.element.removeEventListener(this.name,this,n),f&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},kr=class{constructor(i,r,n){this.element=i,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(i){di(this,i)}};var fl=Sr.litHtmlPolyfillSupport;fl?.(Yi,Ki),(Sr.litHtmlVersions??=[]).push("3.3.3");var Xa=(h,i,r)=>{let n=r?.renderBefore??i,c=n._$litPart$;if(c===void 0){let f=r?.renderBefore??null;n._$litPart$=c=new Ki(i.insertBefore(Gi(),f),f,void 0,r??{})}return c._$AI(h),c};var Er=globalThis,St=class extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Xa(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Qe}};St._$litElement$=!0,St.finalized=!0,Er.litElementHydrateSupport?.({LitElement:St});var ul=Er.litElementPolyfillSupport;ul?.({LitElement:St});(Er.litElementVersions??=[]).push("4.2.2");var As=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function Xi(h){return As.some(i=>i.key===h)?`${ze}/devices/${h}.webp`:null}function Za(h){let i=ml(h);return i?Xi(i):null}function ml(h){if(!h)return null;let i=As.find(r=>r.match&&r.match.test(h));return i?i.key:null}var on=el(Ja(),1);var Ji=["1","2","3","4","5","6","7","8","9"],Lt="1",Qa=["auto","day","night"],Re="auto";function tn(h,i){if(h==="day"||h==="night")return h;let r=i?.states?.["sun.sun"];return r?r.state==="below_horizon"?"night":"day":i?.themes?.darkMode?"night":"day"}function gl(h,i,r){let n=Ji.includes(h)?h:Lt;return be(`${ze}/houses/${tn(i,r)}_${n}.webp`,r)}function Pr(h){return!!(h?.house_image||h?.house_image_dark)}function fi(h,i){let r=h?.house_image,n=h?.house_image_dark;if(r||n){let c=tn(h?.house_mode,i);return be(c==="night"?n||r:r||n,i)}return gl(h?.house,h?.house_mode,i)}function en(h,i){let r=Ji.includes(h)?h:Lt;return be(`${ze}/houses/day_${r}.webp`,i)}function sn(h){let i=[];for(let r of["day","night"])for(let n of Ji)i.push({name:`${r}_${n}.webp`,url:be(`${ze}/houses/${r}_${n}.webp`,h)});return i}var Ps=["bk621","bk620","re_space_system_battery","re_space_system_battery_gateway","re305_device","re306_dpu_combo","re305_or_re306_battery","re305_or_re306_device","re306_device","re306_dpu_battery","po_space_re305_battery","po_space_battery","po_space_battery_system_battery","po_space_battery_ats","po_space_battery_shp32","po_space_battery_system_dpu","jt303_space_battery","jt321_space_battery","dc303_space_battery"],ce="re_space_system_battery";function ui(h,i){let r=Ps.includes(h)?h:ce;return be(`${ze}/batteries/${r}.webp`,i)}var vl=new Set(["re_space_system_battery","re_space_system_battery_gateway","bk621","re305_device","re306_dpu_combo"]);function Ts(h){return vl.has(h||ce)}function Cs(h){let i=Ps.includes(h)?h:ce;return i==="bk621"?"bk621":i==="bk620"?"bk620":i==="re305_device"?"re305":i==="re306_dpu_combo"?"re306":"re_space"}function Ms(h){let i=parseInt(h,10)||1;return i===8?3:i>=9?6:Math.min(7,Math.max(1,i))}function Tr(h){let i=parseInt(h,10)||1;return i===8?3:i>=9?9:Math.min(7,Math.max(1,i))}function rn(h,i){return be(`${ze}/flows/${h}.json`,i)}var _l={8:3,9:6};function an(h){return`re_space_solar_${_l[h]||Math.min(7,Math.max(1,h||1))}`}var xe={grid_in:"re_space_gridin",grid_out:"re_space_gridout",home:"re_space_home",bat_in:"jt303_space_battery_input",bat_out:"jt303_space_battery_output",bat_chg:"re_space_bat_chg",bat_dsg:"re_space_bat_dsg",bat_soc:"re_space_bat_soc"};var et=1;function De(h){let i=Number.isFinite(h.grid)?h.grid:0,r=Number.isFinite(h.load)?h.load:0,n=Number.isFinite(h.solar)?h.solar:0,c=Number.isFinite(h.bat)?h.bat:0,f=Number.isFinite(h.loadFromGrid),x=f?Math.max(0,h.loadFromGrid):Math.max(0,Math.min(i,r)),R=Number.isFinite(h.loadFromPv)||Number.isFinite(h.loadFromBat)?(h.loadFromPv||0)+(h.loadFromBat||0):Math.max(0,r-x),U=Math.max(0,c),B=Math.max(0,-c),q=Math.max(0,n-Math.max(0,h.loadFromPv||0)),X=f?Math.max(0,U-q):Math.max(0,i-x),rt=f?Math.max(0,q-U)+Math.max(0,B-Math.max(0,h.loadFromBat||0)):Math.max(0,-i);return{...h,gridToHome:x,deviceToHome:R,chargeFromGrid:X,exportToGrid:rt}}var nn={re_space:{layers:[{key:"solar",zone:"bg",file:h=>an(h.route),active:h=>h.solar>et},{key:"grid_in",zone:"bg",file:()=>xe.grid_in,active:h=>h.grid>et},{key:"grid_out",zone:"bg",file:()=>xe.grid_out,active:h=>h.grid<-et},{key:"home",zone:"bg",file:()=>xe.home,active:h=>h.load>et},{key:"bat_in",zone:"bg",file:()=>xe.bat_in,active:h=>h.bat>et},{key:"bat_out",zone:"bg",file:()=>xe.bat_out,active:h=>h.bat<-et},{key:"bat_soc",zone:"on",file:()=>xe.bat_soc,mode:"seek",seek:h=>h.soc,active:h=>h.soc!=null},{key:"bat_chg",zone:"on",file:()=>xe.bat_chg,active:h=>h.bat>et},{key:"bat_dsg",zone:"on",file:()=>xe.bat_dsg,active:h=>h.bat<-et}]},bk621:{layers:[{key:"solar",zone:"bg",file:h=>`bk621/house_solar_lottie_${Ms(h.route)}`,active:h=>h.solar>et},{key:"grid_in",zone:"bg",file:()=>"bk621/grid_to_device_lottie",active:h=>h.chargeFromGrid>et},{key:"grid_out",zone:"bg",file:()=>"bk621/device_to_grid_lottie",active:h=>h.exportToGrid>et},{key:"grid_home",zone:"bg",file:()=>"bk621/grid_to_home_lottie",active:h=>h.gridToHome>et},{key:"home",zone:"bg",file:h=>`bk621/house_device_home_lottie_${Ms(h.route)}`,active:h=>h.deviceToHome>et},{key:"bat_soc",zone:"on",file:()=>"bk621/house_soc_lottie",mode:"seek",seek:h=>h.soc,active:h=>h.soc!=null},{key:"bat_chg",zone:"on",file:()=>"bk621/house_soc_charging_lottie",active:h=>h.bat>et},{key:"bat_dsg",zone:"on",file:()=>"bk621/house_soc_discharging_lottie",active:h=>h.bat<-et}]},bk620:{layers:[{key:"solar",zone:"bg",file:h=>`bk620/house_solar_lottie_${Ms(h.route)}`,active:h=>h.solar>et},{key:"grid_out",zone:"bg",file:()=>"bk621/device_to_grid_lottie",active:h=>h.exportToGrid>et},{key:"grid_home",zone:"bg",file:()=>"bk621/grid_to_home_lottie",active:h=>h.gridToHome>et},{key:"home",zone:"bg",file:()=>"bk620/house_device_home_lottie",active:h=>h.deviceToHome>et}]},re305:{layers:[{key:"solar",zone:"bg",file:h=>`re305/Space_Style${Tr(h.route)}_Solar_OceanPro_Com`,active:h=>h.solar>et},{key:"grid_in",zone:"bg",file:()=>"re305/Space_Com_GridIn_OceanProOceanPanel_Com",active:h=>h.grid>et},{key:"grid_out",zone:"bg",file:()=>"re305/Space_Com_GridOut_OceanProAdvanced_Com",active:h=>h.grid<-et},{key:"home",zone:"bg",file:()=>"re305/Space_Com_DeviceToHome_OceanPro_Com",active:h=>h.load>et},{key:"bat_in",zone:"bg",file:()=>"re305/OceanPro_E7_Bat_In_Lottie",active:h=>h.bat>et},{key:"bat_out",zone:"bg",file:()=>"re305/OceanPro_E7_Bat_Out_Lottie",active:h=>h.bat<-et},{key:"bat_soc",zone:"on",file:()=>"re305/OceanPro_E7_BatSoc_Lottie",mode:"seek",seek:h=>h.soc,active:h=>h.soc!=null},{key:"bat_chg",zone:"on",file:()=>"re305/OceanPro_E7_Bat_Charging_Lottie",active:h=>h.bat>et},{key:"bat_dsg",zone:"on",file:()=>"re305/OceanPro_E7_Bat_Discharging_Lottie",active:h=>h.bat<-et},{key:"bat_backup",zone:"on",file:()=>"re305/OceanPro_E7_Bat_Backup_Ratio_Lottie",mode:"seek",seek:h=>h.backup,active:h=>h.backup>0&&h.backup<100}]},re306:{layers:[{key:"solar",zone:"bg",file:h=>`re305/Space_Style${Tr(h.route)}_Solar_OceanPro_Com`,active:h=>h.solar>et},{key:"grid_in",zone:"bg",file:()=>"re305/Space_Com_GridIn_OceanProOceanPanel_Com",active:h=>h.grid>et},{key:"grid_out",zone:"bg",file:()=>"re305/Space_Com_GridOut_OceanProAdvanced_Com",active:h=>h.grid<-et},{key:"home",zone:"bg",file:()=>"re305/Space_Com_DeviceToHome_OceanPro_Com",active:h=>h.load>et},{key:"bat_in",zone:"bg",file:()=>"re306/OceanPro_Panel_DpuBat_In_Lottie",active:h=>h.bat>et},{key:"bat_out",zone:"bg",file:()=>"re306/OceanPro_Panel_DpuBat_Out_Lottie",active:h=>h.bat<-et},{key:"bat_soc",zone:"on",file:()=>"re306/OceanPro_Panel_DpuBatSoc_Lottie",mode:"seek",seek:h=>h.soc,active:h=>h.soc!=null},{key:"bat_chg",zone:"on",file:()=>"re306/OceanPro_Panel_DpuBat_Charging_Lottie",active:h=>h.bat>et},{key:"bat_dsg",zone:"on",file:()=>"re306/OceanPro_Panel_DpuBat_Discharging_Lottie",active:h=>h.bat<-et}]}},mi=class{constructor(){this._anims={},this._stageVisible=!0,this._pageVisible=typeof document>"u"||!document.hidden,this._reducedMotion=!1,this._observer=null,this._observed=null,this._onPageVis=null,this._motionMq=null,this._onMotion=null}sync(i,{hass:r,theme:n,showFlows:c,batOverlays:f,states:x}){if(!i)return;let R=(nn[n]||nn.re_space).layers,U=new Set;for(let B of R){let q=i.querySelector(`[data-flow="${B.key}"]`);if(!q)continue;this._watch(q.parentElement),U.add(B.key);let X=c&&B.active(x)&&(B.zone!=="on"||f);this._setFlow(r,q,B,X,x)}for(let B of i.querySelectorAll("[data-flow]")){if(U.has(B.dataset.flow))continue;let q=this._anims[B.dataset.flow];q&&(q.active=!1,q.anim?.pause()),B.style.opacity="0"}}destroy(){for(let i of Object.values(this._anims))i.anim?.destroy();this._anims={},this._observer?.disconnect(),this._observer=null,this._observed=null,this._onPageVis&&(document.removeEventListener("visibilitychange",this._onPageVis),this._onPageVis=null),this._motionMq&&this._onMotion&&this._motionMq.removeEventListener?.("change",this._onMotion),this._motionMq=null,this._onMotion=null,this._stageVisible=!0}_watch(i){this._onPageVis||(this._pageVisible=!document.hidden,this._onPageVis=()=>{this._pageVisible=!document.hidden,this._applyAll()},document.addEventListener("visibilitychange",this._onPageVis),this._motionMq=window.matchMedia?.("(prefers-reduced-motion: reduce)"),this._motionMq&&(this._reducedMotion=this._motionMq.matches,this._onMotion=r=>{this._reducedMotion=r.matches,this._applyAll()},this._motionMq.addEventListener?.("change",this._onMotion))),!(!i||i===this._observed)&&(typeof IntersectionObserver>"u"||(this._observer?.disconnect(),this._observer=new IntersectionObserver(r=>{this._stageVisible=r[r.length-1].isIntersecting,this._applyAll()}),this._observer.observe(i),this._observed=i))}_canRender(){return this._stageVisible&&this._pageVisible}_applyAll(){for(let i of Object.values(this._anims))this._applyFlow(i)}_setFlow(i,r,n,c,f){let x=n.key,R=n.file(f),U=n.mode||"play",B=this._anims[x];if(c&&(!B||B.file!==R||B.anim?.wrapper!==r)){B?.anim?.destroy();let q=on.default.loadAnimation({container:r,renderer:"svg",loop:U!=="seek",autoplay:!1,path:rn(R,i),rendererSettings:{preserveAspectRatio:"xMidYMin meet"}});q.setSubframe(!1),B=this._anims[x]={anim:q,file:R,ready:!1,mode:U,seek:n.seek},q.addEventListener("DOMLoaded",()=>{B.ready=!0,this._applyFlow(B)})}B&&(B.seek=n.seek,B.active=c,B.states=f,this._applyFlow(B)),r.style.opacity=c?"1":"0"}_applyFlow(i){if(i.ready){if(i.mode==="seek"){if(!this._canRender())return;let r=Math.max(0,Math.min(100,i.seek?.(i.states)??0));if(r===i.lastSeek)return;i.lastSeek=r,i.anim.goToAndStop(r,!0);return}i.active&&this._canRender()&&!this._reducedMotion?i.anim.play():i.anim.pause()}}};var ln={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off",confirm_action:"Are you sure?",feed_in_off:"Grid feed-in is off"},house:{home:"Home",grid:"Grid",from_grid:"From grid",to_grid:"To grid",idle:"Idle",not_setup:"Card not set up \u2014 add the EcoFlow IoT integration",page:{appearance:"Appearance",display:"What to show",battery:"Battery",entities:"Entities",panels:"Solar panels"},short:{oled:"OLED",show_flows:"Flows",show_grid:"Grid",show_solar:"Solar",show_home:"Home",show_battery:"Battery"},mode:{auto:"Automatic",day:"Day",night:"Night"},toggle:{oled:"OLED mode (pure black background)",show_flows:"Animate energy flows",show_grid:"Show grid power",show_solar:"Show solar power",show_home:"Show home consumption",show_battery:"Show battery"},editor:{style:"House style",style_n:"House {n}",mode:"Day / night",battery:"Battery",battery_hint:"Pick the device render that matches your setup. Shown in front of the house.",custom:"Custom house image",custom_light:"Light / day image",custom_dark:"Dark / night image",custom_remove:"Remove",uploading:"Uploading\u2026",custom_hint:"Upload your own house render to use instead of the built-in styles. The dark image is shown at night (auto/night mode); upload only the light one to use it for both. For a perfect fit, match the built-in 2340\xD71680 layout \u2014 download the full set below to trace over.",download_zip:"Download all house images (.zip)",preparing:"Preparing download\u2026",entities:"Entities",entities_hint:"Override the auto-detected sensors that drive the scene. Leave empty to use the integration's defaults."},battery:{bk621:"Stream Ultra",bk620:"Stream AC / Microinverter",re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + gateway",re305_or_re306_battery:"PowerOcean battery",re305_or_re306_device:"PowerOcean + inverter",re305_device:"PowerOcean (E7 battery)",re306_dpu_combo:"Delta Pro Ultra (DPU)",re306_device:"PowerOcean DPU",re306_dpu_battery:"PowerOcean DPU (stacked)",po_space_re305_battery:"Battery stack",po_space_battery:"Battery + inverter",po_space_battery_system_battery:"Single battery",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Battery (JT303)",jt321_space_battery:"Battery (JT321)",dc303_space_battery:"Battery (DC303)"}},battery:{title:"Battery",idle:"Idle",health:"Health",calendar_health:"Calendar health",temperature:"Temperature",time_to_full:"Time to full",time_to_empty:"Time to empty",capacity:"Capacity",cycles:"Cycles"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",grid_source:"Grid value",grid_source_app:"Real grid value (like the EcoFlow app)",grid_source_device:"EcoFlow grid sensor (to grid)",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_max:"Max output",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_hint_max:"Rename a panel, set its maximum output (scales its bar in the solar dialog), or hide it from the breakdown.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today.",stats_default:"Default (Solar, Grid)",stats_count:"{n} tiles",stats_default_hint:"The card shows live Solar and Grid power. Customize to show any entities you like instead, each with its own tap action.",stats_customize:"Customize tiles",stats_hint:"Add the entities to show as stat tiles. Set a name and icon, and choose what happens on tap (more-info by default).",stats_add:"Add tile",stats_reset:"Reset to default",stats_remove:"Remove",stats_move_up:"Move up",stats_move_down:"Move down",stat_n:"Tile {n}",stat_field_entity:"Entity",stat_field_name:"Name",stat_field_icon:"Icon",stat_field_tap_action:"Tap action"},page:{appearance:"Appearance",entities:"Entities",stats:"Stat tiles",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{oled:"OLED mode (pure black background)",show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{oled:"OLED",show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",sys_grid_power:"Grid power (whole system)",sys_load:"Home consumption",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}},space:{page:{appearance:"Appearance",weather:"Weather",clock:"Clock & date",overlays:"Floating overlays",tiles:"Bottom tiles",tabs:"Sidebar",panels:"Solar panels"},n_items:"{n} configured",weather_hint:"Pick a weather entity to show the temperature and humidity in the top bar. Leave empty to hide it.",weather_entity:"Weather entity",overlays_hint:"Floating values over the house. Drag a chip on the preview to position it, or fine-tune with X/Y below. Bind each to an auto-detected sensor, any entity, or a template.",add_overlay:"Add overlay",tiles_hint:"The cards along the bottom. Each shows a value from a sensor, entity, or template.",add_tile:"Add tile",tabs_hint:"The sidebar buttons. The first is always Home (the scene above); each other tab embeds an existing Lovelace view by its path.",rail_show:"Show sidebar",rail_style:"Style",rail_tabs:"Tabs",rail_labels:"Show labels under icons",rail_align:"Align items",f_rail_size:"Sidebar size (\xD7)",n_views:"Home + {n} views",align:{start:"Top",center:"Center",end:"Bottom"},add_tab:"Add tab",home_tab:"Home",path_hint:"Lovelace view path, e.g. solar or dashboard-name/solar",f_label:"Label",f_icon:"Icon (mdi:\u2026)",f_unit:"Unit",f_anchor:"Anchor",f_color:"Value color (optional)",f_icon_color:"Icon color (optional)",f_dot:"Status dot color (optional)",f_temp_color:"Temperature icon color",f_humidity_color:"Humidity icon color",f_slot:"Sensor",f_secondary:"Secondary line (text, entity or template)",f_path:"View path",f_preset:"Preset",f_size:"Size (\xD7)",f_weather_size:"Weather size (\xD7)",f_clock_size:"Clock size (\xD7)",f_tiles_size:"Tile size (\xD7)",clock_hint:"An optional clock in the center of the top bar, with an optional date line below it.",clock_show:"Show clock (top center)",clock_date:"Show date",on:"On",off:"Off",preset_none:"None (custom)",preset_hint:"Auto-bound and styled. Set Preset to \u201CNone (custom)\u201D to choose your own entity or template.",today:"Today",preset:{solar:"Solar power",grid:"Grid power",battery:"Battery power",solar_today:"Solar produced today",usage:"Consumption today",energy_independence:"Energy independence"},src_auto:"Auto",src_entity:"Entity",src_template:"Template",anchor:{center:"Center","top-left":"Top left","top-center":"Top center","top-right":"Top right","bottom-left":"Bottom left","bottom-center":"Bottom center","bottom-right":"Bottom right"},remove:"Remove",duplicate:"Duplicate",item_overlay:"Overlay",item_tile:"Tile",embed_missing:"Lovelace view not found \u2014 check the path in the editor.",embed_empty:"No view path set for this tab.",clear_color:"Clear colour"}};var hn={card:{no_device:"Kein EcoFlow Stream-Ger\xE4t gefunden. Richten Sie zuerst die EcoFlow IoT-Integration ein.",device:"EcoFlow Stream",solar:"Solar",grid:"Netz",grid_import:"Bezug",grid_export:"Einspeisung",grid_idle:"Netz inaktiv",battery:"Batterie",charging:"L\xE4dt",discharging:"Entl\xE4dt",today:"Solar heute",produced:"erzeugt",forecast:"Prognose",of_forecast:"{pct}% der Prognose",exceeded:"Prognose erreicht",reserve:"Reserve",charge_limit:"Laden \u2264",discharge_limit:"Entladen \u2265",ac1:"AC 1",ac2:"AC 2",off:"Aus",confirm_action:"Sind Sie sicher?",feed_in_off:"Netzeinspeisung ist aus"},house:{home:"Hausnetz",grid:"Netz",from_grid:"Vom Netz",to_grid:"Ins Netz",idle:"Bereit",not_setup:"Karte nicht eingerichtet \u2013 richten Sie die EcoFlow IoT-Integration ein",page:{appearance:"Darstellung",display:"Anzeige",battery:"Batterie",entities:"Entit\xE4ten",panels:"Solarmodule"},short:{oled:"OLED",show_flows:"Fl\xFCsse",show_grid:"Netz",show_solar:"Solar",show_home:"Haus",show_battery:"Batterie"},mode:{auto:"Automatisch",day:"Tag",night:"Nacht"},toggle:{oled:"OLED-Modus (tiefschwarzer Hintergrund)",show_flows:"Energiefl\xFCsse animieren",show_grid:"Netzleistung anzeigen",show_solar:"Solarleistung anzeigen",show_home:"Hausverbrauch anzeigen",show_battery:"Batterie anzeigen"},editor:{style:"Haus-Stil",style_n:"Haus {n}",mode:"Tag / Nacht",battery:"Batterie",battery_hint:"W\xE4hle das Ger\xE4te-Render, das zu deinem Aufbau passt. Es wird vor dem Haus angezeigt.",custom:"Eigenes Hausbild",custom_light:"Helles / Tag-Bild",custom_dark:"Dunkles / Nacht-Bild",custom_remove:"Entfernen",uploading:"Wird hochgeladen \u2026",custom_hint:"Lade dein eigenes Haus-Render hoch, um es statt der mitgelieferten Stile zu verwenden. Das dunkle Bild wird nachts angezeigt (Auto-/Nacht-Modus); lade nur das helle hoch, um es f\xFCr beide zu nutzen. F\xFCr eine perfekte Passung das mitgelieferte Format 2340\xD71680 \xFCbernehmen \u2013 lade unten den kompletten Satz zum Nachzeichnen herunter.",download_zip:"Alle Hausbilder herunterladen (.zip)",preparing:"Download wird vorbereitet \u2026",entities:"Entit\xE4ten",entities_hint:"\xDCberschreiben Sie die automatisch erkannten Sensoren, die die Darstellung steuern. Leer lassen, um die Standardwerte der Integration zu verwenden."},battery:{bk621:"Stream Ultra",bk620:"Stream AC / Microinverter",re_space_system_battery:"Stream",re_space_system_battery_gateway:"Stream + Gateway",re305_or_re306_battery:"PowerOcean Batterie",re305_or_re306_device:"PowerOcean + Wechselrichter",re305_device:"PowerOcean (E7-Batterie)",re306_dpu_combo:"Delta Pro Ultra (DPU)",re306_device:"PowerOcean DPU",re306_dpu_battery:"PowerOcean DPU (gestapelt)",po_space_re305_battery:"Batteriestapel",po_space_battery:"Batterie + Wechselrichter",po_space_battery_system_battery:"Einzelbatterie",po_space_battery_ats:"PowerOcean (ATS)",po_space_battery_shp32:"Smart Home Panel",po_space_battery_system_dpu:"Delta Pro Ultra",jt303_space_battery:"Batterie (JT303)",jt321_space_battery:"Batterie (JT321)",dc303_space_battery:"Batterie (DC303)"}},battery:{title:"Batterie",idle:"Inaktiv",health:"Zustand",calendar_health:"Kalenderzustand",temperature:"Temperatur",time_to_full:"Zeit bis voll",time_to_empty:"Zeit bis leer",capacity:"Kapazit\xE4t",cycles:"Zyklen"},confirm:{title:"Steckdose ausschalten?",ac_off:"{name} ausschalten? Alles, was daran angeschlossen ist, verliert die Stromversorgung.",cancel:"Abbrechen",turn_off:"Ausschalten"},panels:{title:"Solarmodule",panel:"Modul {n}",total:"Gesamt",none:"F\xFCr dieses Ger\xE4t sind keine Daten je Solarmodul verf\xFCgbar."},editor:{device:"EcoFlow-Ger\xE4t",automatic:"Automatisch",grid_source:"Netzwert",grid_source_app:"Realer Netzwert (wie in der EcoFlow-App)",grid_source_device:"EcoFlow-Netzsensor (to grid)",image:"Ger\xE4tebild",entity:"Entit\xE4t",value_template:"Wert / Vorlage",mode_auto:"Auto",mode_entity:"Entit\xE4t",mode_custom:"Benutzerdefiniert",auto_value:"Automatisch erkannt: {value}",not_found:"nicht gefunden",overridden:"{n} \xFCberschrieben",shown:"Angezeigt",nothing_shown:"Nichts angezeigt",panel:"Modul {n}",panel_name:"Modulname",panel_max:"Maximale Leistung",panel_entity:"Leistungssensor",panel_hidden:"Auf der Karte ausgeblendet.",panels_hint:"Benennen Sie ein Modul um, weisen Sie ihm einen anderen Sensor zu oder blenden Sie es aus der Aufschl\xFCsselung aus. Mit dem Schalter zeigen oder verbergen Sie jedes Modul.",panels_hint_max:"Modul umbenennen, die maximale Leistung setzen (skaliert den Balken im Solar-Dialog) oder aus der Aufschl\xFCsselung ausblenden.",panels_count:"{n} Module",panels_hidden:"{n} ausgeblendet",loading:"L\xE4dt\u2026",forecast_hint:"W\xE4hlen Sie, welche Solarprognose-Anbieter verwendet werden \u2014 dieselben, die im Energie-Dashboard von Home Assistant eingerichtet sind (Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule).",forecast_none:"Keine Solarprognose konfiguriert. F\xFCgen Sie unter Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule eine Prognose hinzu, dann erscheint sie hier.",forecast_none_short:"Nicht konfiguriert",forecast_selected:"{n} von {total} Anbietern",none:"Nicht festgelegt",collection_key:"Energie-Sammlungsschl\xFCssel",collection_hint:"Optional. Um einem in einer Energie-Zeitraumauswahl-Karte gew\xE4hlten Datum zu folgen (Energie-Datumsauswahl), geben Sie hier denselben Sammlungsschl\xFCssel ein wie auf jener Karte \u2014 er beginnt mit \u201Eenergy_\u201C; verwenden Sie \u201Eenergy\u201C f\xFCr eine Auswahl, die auf ihrem Standardschl\xFCssel belassen wurde. Leer lassen, um immer heute anzuzeigen.",stats_default:"Standard (Solar, Netz)",stats_count:"{n} Kacheln",stats_default_hint:"Die Karte zeigt die aktuelle Solar- und Netzleistung. Passen Sie sie an, um stattdessen beliebige Entit\xE4ten anzuzeigen \u2014 jede mit eigener Tipp-Aktion.",stats_customize:"Kacheln anpassen",stats_hint:"F\xFCgen Sie die Entit\xE4ten hinzu, die als Kacheln angezeigt werden sollen. Legen Sie Name und Symbol fest und w\xE4hlen Sie, was beim Tippen passiert (standardm\xE4\xDFig Info-Dialog).",stats_add:"Kachel hinzuf\xFCgen",stats_reset:"Auf Standard zur\xFCcksetzen",stats_remove:"Entfernen",stats_move_up:"Nach oben",stats_move_down:"Nach unten",stat_n:"Kachel {n}",stat_field_entity:"Entit\xE4t",stat_field_name:"Name",stat_field_icon:"Symbol",stat_field_tap_action:"Tipp-Aktion"},page:{appearance:"Darstellung",entities:"Entit\xE4ten",stats:"Kacheln",panels:"Solarmodule",forecast:"Solarprognose",advanced:"Erweitert"},toggle:{oled:"OLED-Modus (tiefschwarzer Hintergrund)",show_image:"Ger\xE4tebild anzeigen",show_today:"Heutige Erzeugung anzeigen",show_grid:"Netzleistung anzeigen",show_ac:"AC-Steckdosen anzeigen",show_panels:"F\xFCr Aufschl\xFCsselung je Modul auf Solarleistung tippen",show_forecast:"Heutige Erzeugung mit der Prognose vergleichen"},short:{oled:"OLED",show_image:"Bild",show_today:"Heute",show_grid:"Netz",show_ac:"AC-Steckdosen",show_panels:"Module",show_forecast:"Prognose"},slot:{sensor:{cms_batt_soc:"Batteriestand",bat_power:"Batterieleistung (Lade-/Entladegeschwindigkeit)",pv_total:"Solarleistung",grid_power:"Netzleistung",sys_grid_power:"Netzleistung (Gesamtsystem)",sys_load:"Hausverbrauch",solar_energy:"Solarenergie (Quelle f\xFCr Tagessumme)",pv1_power:"Solarmodul 1",pv2_power:"Solarmodul 2",pv3_power:"Solarmodul 3",pv4_power:"Solarmodul 4",schuko1_power:"AC-Steckdose 1 Leistung",schuko2_power:"AC-Steckdose 2 Leistung"},number:{max_charge_soc:"Ladelimit",min_discharge_soc:"Entladelimit",backup_reserve:"Notstromreserve"},switch:{ac1:"AC-Steckdose 1",ac2:"AC-Steckdose 2"}},space:{page:{appearance:"Darstellung",weather:"Wetter",clock:"Uhr & Datum",overlays:"Schwebende Overlays",tiles:"Kacheln unten",tabs:"Seitenleiste",panels:"Solarmodule"},n_items:"{n} konfiguriert",weather_hint:"W\xE4hle eine Wetter-Entit\xE4t, um Temperatur und Luftfeuchte in der Kopfzeile zu zeigen. Leer lassen zum Ausblenden.",weather_entity:"Wetter-Entit\xE4t",overlays_hint:"Schwebende Werte \xFCber dem Haus. Ziehe einen Chip in der Vorschau zum Positionieren oder nutze X/Y unten. Binde jeden an einen erkannten Sensor, eine Entit\xE4t oder ein Template.",add_overlay:"Overlay hinzuf\xFCgen",tiles_hint:"Die Kacheln am unteren Rand. Jede zeigt einen Wert aus Sensor, Entit\xE4t oder Template.",add_tile:"Kachel hinzuf\xFCgen",tabs_hint:"Die Seitenleisten-Buttons. Der erste ist immer Home (die Szene oben); jeder weitere Tab bettet eine vorhandene Lovelace-Ansicht per Pfad ein.",rail_show:"Seitenleiste anzeigen",rail_style:"Stil",rail_tabs:"Tabs",rail_labels:"Beschriftungen unter Symbolen anzeigen",rail_align:"Ausrichtung",f_rail_size:"Seitenleisten-Gr\xF6\xDFe (\xD7)",n_views:"Home + {n} Ansichten",align:{start:"Oben",center:"Mitte",end:"Unten"},add_tab:"Tab hinzuf\xFCgen",home_tab:"Home",path_hint:"Lovelace-Ansichtspfad, z. B. solar oder dashboard-name/solar",f_label:"Bezeichnung",f_icon:"Symbol (mdi:\u2026)",f_unit:"Einheit",f_anchor:"Anker",f_color:"Wertfarbe (optional)",f_icon_color:"Symbolfarbe (optional)",f_dot:"Statuspunkt-Farbe (optional)",f_temp_color:"Symbolfarbe Temperatur",f_humidity_color:"Symbolfarbe Luftfeuchte",f_slot:"Sensor",f_secondary:"Zweite Zeile (Text, Entit\xE4t oder Template)",f_path:"Ansichtspfad",f_preset:"Vorlage",f_size:"Gr\xF6\xDFe (\xD7)",f_weather_size:"Wetter-Gr\xF6\xDFe (\xD7)",f_clock_size:"Uhr-Gr\xF6\xDFe (\xD7)",f_tiles_size:"Kachel-Gr\xF6\xDFe (\xD7)",clock_hint:"Eine optionale Uhr in der Mitte der oberen Leiste, mit optionaler Datumszeile darunter.",clock_show:"Uhr anzeigen (oben mittig)",clock_date:"Datum anzeigen",on:"Ein",off:"Aus",preset_none:"Keine (benutzerdefiniert)",preset_hint:"Automatisch verkn\xFCpft und gestylt. Setze die Vorlage auf \u201EKeine\u201C, um eine eigene Entit\xE4t oder ein Template zu w\xE4hlen.",today:"Heute",preset:{solar:"Solarleistung",grid:"Netzleistung",battery:"Batterieleistung",solar_today:"Heute erzeugter Solarstrom",usage:"Verbrauch heute",energy_independence:"Energieunabh\xE4ngigkeit"},src_auto:"Auto",src_entity:"Entit\xE4t",src_template:"Template",anchor:{center:"Mitte","top-left":"Oben links","top-center":"Oben mittig","top-right":"Oben rechts","bottom-left":"Unten links","bottom-center":"Unten mittig","bottom-right":"Unten rechts"},remove:"Entfernen",duplicate:"Duplizieren",item_overlay:"Overlay",item_tile:"Kachel",embed_missing:"Lovelace-Ansicht nicht gefunden \u2014 Pfad im Editor pr\xFCfen.",embed_empty:"F\xFCr diesen Tab ist kein Ansichtspfad gesetzt.",clear_color:"Farbe entfernen"}};var Cr={en:ln,de:hn};function wl(h){return(h?.locale?.language||h?.language||"en").split("-")[0]}function cn(h,i){let r=i.split(".").reduce((n,c)=>n?.[c],h);return typeof r=="string"?r:void 0}function ft(h,i,r={}){let n=Cr[wl(h)]||Cr.en,c=cn(n,i)??cn(Cr.en,i)??i;for(let[f,x]of Object.entries(r))c=c.replace(`{${f}}`,x);return c}function gi(h,i=!1){let r=Number.isFinite(h.grid)?h.grid:null;if(i)return{value:r==null?null:Math.abs(r),importing:r!=null&&r>et,exporting:r!=null&&r<-et,fromSplit:!1};let n=Number.isFinite(h.loadFromGrid)?Math.max(0,h.loadFromGrid):null,c=n!=null?n>et:r!=null&&r>et,f=!c&&h.exportToGrid>et;return{value:c?n??r:f?h.exportToGrid:n!=null?0:r!=null?Math.abs(r):null,importing:c,exporting:f,fromSplit:n!=null}}var xl="color:var(--warning-color,#f5a623);--mdc-icon-size:15px;cursor:pointer;vertical-align:middle;margin-left:2px;";function vi(h){let i=h._map?.["switch.feed_in"],r=i?h.hass?.states?.[i]:void 0;if(!r||r.state!=="off")return"";let n=c=>{c.stopPropagation(),h.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))};return F`<ha-icon
    icon="mdi:transmission-tower-off"
    style=${xl}
    title=${ft(h.hass,"card.feed_in_off")}
    @click=${n}
  ></ha-icon>`}var kl={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","sys_load","sys_grid_power","load_from_pv","load_from_grid","load_from_bat","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power","soh","bat_temp","chg_rem_time","dsg_rem_time","full_energy","cycles","calendar_soh"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2","feed_in"]};function Sl(h){return Object.values(h.entities||{}).filter(i=>i.platform===Le)}function $l(h){if(h.translation_key)return h.translation_key;let i=h.entity_id.split(".")[1],r=i.lastIndexOf("_");return r>=0?i.slice(r+1):i}var dn=new WeakMap;function Xt(h){let i=h.entities;if(!i)return[];let r=dn.get(i);if(r&&r.devReg===h.devices)return r.devices;let n=new Map;for(let f of Sl(h))f.device_id&&(n.has(f.device_id)||n.set(f.device_id,[]),n.get(f.device_id).push(f));let c=[];for(let[f,x]of n)x.some(R=>$l(R)==="pv_total")&&c.push({deviceId:f,device:h.devices?.[f],ents:x});return dn.set(i,{devReg:h.devices,devices:c}),c}function ti(h,i,r){if(!h||!i||h.entities!==i.entities||h.devices!==i.devices||h.locale!==i.locale||h.language!==i.language||h.themes!==i.themes)return!0;for(let n of r)if(n&&h.states[n]!==i.states[n])return!0;return!1}var pn=new WeakMap;function Zt(h,i){let r=pn.get(i);if(r)return r;let n={};for(let c of i){let[f]=c.entity_id.split("."),x=c.translation_key;x&&(kl[f]||[]).includes(x)&&(n[`${f}.${x}`]=c.entity_id)}if(!n["sensor.cms_batt_soc"])for(let c of i){if(!c.entity_id.startsWith("sensor."))continue;let f=h.states?.[c.entity_id];if(f?.attributes?.device_class==="battery"&&f?.attributes?.unit_of_measurement==="%"){n["sensor.cms_batt_soc"]=c.entity_id;break}}return pn.set(i,n),n}async function ts(h){if(!h?.callWS)return{};try{return await h.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function un(h){let i=await ts(h),r=Object.keys(i);if(!r.length)return[];let n=[];try{n=await h.callWS({type:"config_entries/get"})||[]}catch{n=[]}let c=new Map(n.map(f=>[f.entry_id,f]));return r.map(f=>({id:f,title:c.get(f)?.title||c.get(f)?.domain||f,domain:c.get(f)?.domain||""}))}function Fs(h,i){let r=i===void 0?Object.keys(h||{}):i,n={};for(let c of r){let f=h?.[c]?.wh_hours;if(f)for(let[x,R]of Object.entries(f)){let U=Number(R);Number.isFinite(U)&&(n[x]=(n[x]||0)+U)}}return n}function es(h,i=new Date){let r=i.getFullYear(),n=i.getMonth(),c=i.getDate(),f={};for(let[x,R]of Object.entries(h||{})){let U=new Date(x);Number.isNaN(U.getTime())||U.getFullYear()===r&&U.getMonth()===n&&U.getDate()===c&&(f[U.getHours()]=(f[U.getHours()]||0)+R)}return f}function Is(h,i=new Date){let r=es(h,i),n=Object.keys(r);return n.length?n.reduce((c,f)=>c+r[f],0):null}async function Al(h){if(!h?.callWS)return null;try{return await h.callWS({type:"energy/get_prefs"})||null}catch{return null}}function El(h){let i={solar:[],gridFrom:[],gridTo:[],batIn:[],batOut:[]};for(let r of h?.energy_sources||[])if(r.type==="solar"&&r.stat_energy_from&&i.solar.push(r.stat_energy_from),r.type==="battery"&&(r.stat_energy_to&&i.batIn.push(r.stat_energy_to),r.stat_energy_from&&i.batOut.push(r.stat_energy_from)),r.type==="grid"){for(let n of r.flow_from||[])n.stat_energy_from&&i.gridFrom.push(n.stat_energy_from);for(let n of r.flow_to||[])n.stat_energy_to&&i.gridTo.push(n.stat_energy_to)}return i}var fn=new WeakMap;async function Pl(h,i){let r=h.connection,n=[...i].sort().join("|"),c=r&&fn.get(r);if(c&&c.key===n)return c.map;let f;try{f=await h.callWS({type:"recorder/get_statistics_metadata",statistic_ids:i})}catch{try{f=await h.callWS({type:"recorder/list_statistic_ids"})}catch{return{}}}let x={};for(let R of f||[])x[R.statistic_id]=R.statistics_unit_of_measurement||R.unit_of_measurement||R.display_unit_of_measurement||"";return r&&fn.set(r,{key:n,map:x}),x}function Tl(h,i){let r=(i||"").toLowerCase();return r==="wh"?h/1e3:r==="mwh"?h*1e3:h}async function Qi(h,i,r){if(!h?.callWS||!i.length)return 0;let n=new Date,c=new Date(n.getFullYear(),n.getMonth(),n.getDate());try{let f=await h.callWS({type:"recorder/statistics_during_period",start_time:c.toISOString(),statistic_ids:i,period:"hour",types:["change"]}),x=0;for(let R of i){let U=0;for(let B of f?.[R]||[]){let q=Number(B.change);Number.isFinite(q)&&(U+=q)}x+=Tl(U,r[R])}return x}catch{return 0}}async function mn(h){let i=await Al(h);if(!i)return null;let r=El(i),n=await Pl(h,[...r.solar,...r.gridFrom,...r.gridTo,...r.batIn,...r.batOut]),[c,f,x,R,U]=await Promise.all([Qi(h,r.solar,n),Qi(h,r.gridFrom,n),Qi(h,r.gridTo,n),Qi(h,r.batIn,n),Qi(h,r.batOut,n)]),B=c+f+U-x-R,q=r.gridFrom.length&&B>0?Math.max(0,Math.min(100,Math.round((1-f/B)*100))):null;return{solar:c,gridImport:f,gridExport:x,batIn:R,batOut:U,consumption:B,independence:q}}async function Ls(h,i,r,n){if(!h?.callWS||!i)return null;let c=new Date,x={type:"recorder/statistics_during_period",start_time:(r instanceof Date?r:new Date(c.getFullYear(),c.getMonth(),c.getDate())).toISOString(),statistic_ids:[i],period:"hour",types:["change"]};n instanceof Date&&(x.end_time=n.toISOString());try{let U=(await h.callWS(x))?.[i];if(!Array.isArray(U))return null;let B={};for(let q of U){let X=new Date(q.start),rt=Number(q.change);Number.isNaN(X.getTime())||!Number.isFinite(rt)||(B[X.getHours()]=(B[X.getHours()]||0)+rt)}return B}catch{return null}}function ht(h){return typeof h=="string"&&/\{[{%]/.test(h)}function gt(h){return typeof h=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(h)}function lt(h){let i=Number(h?.state);return Number.isFinite(i)?i:null}function se(h){return h==null||!Number.isFinite(h)?null:Math.abs(Math.round(h))>=1e3?`${(h/1e3).toFixed(2)} kW`:`${Math.round(h)} W`}function de(h){return h==null||!Number.isFinite(h)?{n:"\u2013",u:"W"}:Math.abs(Math.round(h))>=1e3?{n:(h/1e3).toFixed(2),u:"kW"}:{n:String(Math.round(h)),u:"W"}}function zs(h){return{n:h!=null&&Number.isFinite(h)?h.toFixed(1):"\u2013",u:"kWh"}}function Mr(h,i=1){return h==null||!Number.isFinite(h)?null:Math.abs(h)>=1e3?`${(h/1e3).toFixed(i)} kWh`:`${Math.round(h)} Wh`}function gn(h){if(h==null||!Number.isFinite(h))return null;let i=Math.round(h);if(i<60)return`${i} min`;let r=Math.floor(i/60);if(r<24){let f=i%60;return f?`${r} h ${f} min`:`${r} h`}let n=Math.floor(r/24),c=r%24;return c?`${n} d ${c} h`:`${n} d`}var vn=!1;async function Jt(){if(!vn){vn=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var _n=Pt`
  ha-card {
    padding: 20px;
  }
  /* OLED mode: pure black card with the theme palette remapped for contrast.
     The vars sit on :host so every surface in the shadow tree (pills, dialog,
     graph) inherits them. */
  :host([oled]) {
    --card-background-color: #000;
    --ha-card-background: #000;
    --primary-text-color: #f2f4f6;
    --secondary-text-color: #9aa3ad;
    --secondary-background-color: #15181c;
    --divider-color: rgba(255, 255, 255, 0.12);
  }
  :host([oled]) ha-card {
    background: #000;
    border-color: rgba(255, 255, 255, 0.12);
  }
  .empty {
    padding: 8px;
    color: var(--secondary-text-color);
  }
  .clickable {
    cursor: pointer;
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
    .batt-particles .particle,
    .ring-spin {
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
     in/out (.show) and transitions colour rather than popping on state change.
     Its own overlay <svg> is what rotates: animating the HTML-level element
     runs on the compositor, while rotating a circle inside the ring SVG would
     repaint the whole SVG every frame on mobile. */
  .ring-spin {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.55s ease;
    will-change: transform;
  }
  .ring-spin circle {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    transition: stroke 0.55s ease;
  }
  .ring-spin.show {
    opacity: 1;
  }
  .ring-spin.charge {
    animation: ring-spin 1.5s linear infinite;
  }
  .ring-spin.charge circle {
    stroke: var(--state-sensor-battery-high-color, #43a047);
  }
  .ring-spin.discharge {
    animation: ring-spin 1.9s linear infinite reverse;
  }
  .ring-spin.discharge circle {
    stroke: var(--info-color, #2196f3);
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
  .dlg-section {
    margin: 18px 4px 6px;
    font-weight: 700;
    color: var(--primary-text-color);
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
  .panel-total.clickable {
    cursor: pointer;
  }
  .panel-max {
    color: var(--secondary-text-color);
    font-weight: 400;
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
    animation: fc-pulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 0 3px var(--energy-solar-color, #ff9800));
  }
  /* opacity-only: a scaleY pulse would re-rasterize the drop-shadow every frame */
  @keyframes fc-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
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
`;function Fr(h){let i=[];for(let r=1;r<=4;r++){let n=h._config.panels?.[r]||{};if(n.hidden)continue;let c=`sensor.pv${r}_power`,f=h._state(c);f&&i.push({i:r,watts:lt(f),id:h._entityId(c),name:n.name||null,max:Number(n.max)>0?Number(n.max):null})}return i}function yn(h){let i=(U,B)=>ft(h.hass,U,B),r=Fr(h);if(!r.length)return F`<div class="empty">${i("panels.none")}</div>`;let n=Math.max(1,...r.map(U=>U.watts||0)),c=h._entityId("sensor.pv_total"),f=lt(h._state("sensor.pv_total")),x=f??r.reduce((U,B)=>U+(B.watts||0),0),R=r.every(U=>U.max)?r.reduce((U,B)=>U+B.max,0):null;return F`<div class="panels">
    ${r.map(U=>F`<div
        class="panel-row clickable"
        @click=${()=>h._moreInfoId(U.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${U.name||i("panels.panel",{n:U.i})}
          </span>
          <span class="panel-val"
            >${se(U.watts)??"\u2013"}${U.max?F`<span class="panel-max"> / ${se(U.max)}</span>`:""}</span
          >
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,Math.min(100,(U.watts||0)/(U.max||n)*100))}%"
          ></div>
        </div>
      </div>`)}
    <div
      class="panel-total ${c?"clickable":""}"
      @click=${c?()=>h._moreInfoId(c):null}
    >
      <span>${i("panels.total")}</span>
      <span
        >${se(x)??"\u2013"}${R?F`<span class="panel-max"> / ${se(R)}</span>`:""}</span
      >
    </div>
  </div>`}var Os=1e3,Ir=340,Tt={l:46,r:14,t:16,b:28};function Rs(h,{actual:i,forecast:r,totalWh:n,forecastWh:c,currentHour:f,showForecast:x,title:R}){let U=(J,$t)=>ft(h.hass,J,$t),B=Os-Tt.l-Tt.r,q=Ir-Tt.t-Tt.b,X=B/24,rt=J=>Tt.l+J/24*B,ot=0;for(let J=0;J<24;J++)ot=Math.max(ot,(i[J]||0)/1e3),x&&(ot=Math.max(ot,(r[J]||0)/1e3));let ct=Cl(ot>0?ot:.1),pe=J=>Tt.t+q-J/ct*q,Nt=X*.66,Qt=[];for(let J=0;J<24;J++){let $t=(i[J]||0)/1e3;if($t<=0)continue;let ke=rt(J+.5)-Nt/2,Ue=pe($t),Be=J===f?"fc-actual fc-current":"fc-actual";Qt.push(Kt`<rect class=${Be} x=${ke.toFixed(1)} y=${Ue.toFixed(1)}
        width=${Nt.toFixed(1)} height=${(Tt.t+q-Ue).toFixed(1)} rx="2"></rect>`)}let re=null;if(x){let J=[];for(let $t=0;$t<=24;$t++)J.push(`${rt($t).toFixed(1)},${pe((r[$t]||0)/1e3).toFixed(1)}`);re=Kt`<polyline class="fc-line" points=${J.join(" ")}></polyline>`}let Ht=[],is=4;for(let J=0;J<=is;J++){let $t=ct/is*J,ke=pe($t);Ht.push(Kt`<line class="fc-grid" x1=${Tt.l} y1=${ke.toFixed(1)} x2=${Os-Tt.r} y2=${ke.toFixed(1)}></line>`),Ht.push(Kt`<text class="fc-axis fc-axis-y" x=${Tt.l-6} y=${(ke+4).toFixed(1)}>${Ml($t)}</text>`)}let Ai=[];for(let J=0;J<=24;J+=4)Ai.push(Kt`<text class="fc-axis fc-axis-x" x=${rt(J).toFixed(1)} y=${Ir-8}>${J}:00</text>`);let zt=x&&c>0&&n!=null?Math.round(n/c*100):null,ei=J=>{h._fcTip!==J&&(h._fcTip=J,h.requestUpdate())},ae=()=>{h._fcTip!=null&&(h._fcTip=null,h.requestUpdate())},Qs=[];for(let J=0;J<24;J++)Qs.push(Kt`<rect class="fc-hit" x=${rt(J).toFixed(1)} y=${Tt.t} width=${X.toFixed(1)} height=${q}
        @pointerenter=${()=>ei(J)} @pointermove=${()=>ei(J)}
        @pointerdown=${()=>ei(J)}></rect>`);let Ve=h._fcTip,ii=Ve!=null&&Ve>=0&&Ve<24,Ur=ii?Kt`<rect class="fc-band" x=${rt(Ve).toFixed(1)} y=${Tt.t} width=${X.toFixed(1)} height=${q}></rect>`:null,ss=ii?vt(Ve):null;function vt(J){let $t=((i[J]||0)/1e3).toFixed(2),ke=((r[J]||0)/1e3).toFixed(2),Ue=184,Be=x?84:60,Ne=rt(J+.5)-Ue/2;Ne=Math.max(Tt.l,Math.min(Os-Tt.r-Ue,Ne));let je=Tt.t+6,si=Ne+12;return Kt`<g class="fc-tip" pointer-events="none">
      <rect class="fc-tip-box" x=${Ne.toFixed(1)} y=${je} width=${Ue} height=${Be} rx="7"></rect>
      <text class="fc-tip-time" x=${si} y=${je+24}>${bn(J)}:00 – ${bn((J+1)%24)}:00</text>
      <text class="fc-tip-line" x=${si} y=${je+46}>${U("card.produced")}: <tspan class="v">${$t} kWh</tspan></text>
      ${x?Kt`<text class="fc-tip-line" x=${si} y=${je+68}>${U("card.forecast")}: <tspan class="v">${ke} kWh</tspan></text>`:null}
    </g>`}return F`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${R||U("card.today")}</span>
      <span class="fc-graph-total"
        >${(n!=null?n/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    ${zt!=null?F`<div class="fc-progress" title=${U("card.of_forecast",{pct:zt})}>
          <div class="fc-progress-track">
            <div
              class="fc-progress-fill"
              style="width:${Math.min(100,zt)}%"
            ></div>
          </div>
          <span class="fc-progress-label">${U("card.of_forecast",{pct:zt})}</span>
        </div>`:""}
    <svg
      class="chart"
      viewBox="0 0 ${Os} ${Ir}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      @pointerleave=${ae}
      @pointercancel=${ae}
    >
      ${Ht}${Ai}
      <text class="fc-axis fc-unit" x=${Tt.l-6} y=${Tt.t-4}>kWh</text>
      ${Ur}${Qt}${re}${Qs}${ss}
    </svg>
    ${x?F`<div class="fc-graph-legend">
          <span class="lg lg-actual">${U("card.produced")}</span>
          <span class="lg lg-fc">${U("card.forecast")}</span>
        </div>`:""}
  </div>`}function Cl(h){let i=Math.pow(10,Math.floor(Math.log10(h))),r=h/i;return(r<=1?1:r<=2?2:r<=5?5:10)*i}function Ml(h){return h>=10?Math.round(h).toString():h.toFixed(1).replace(/\.0$/,"")}function bn(h){return String(h).padStart(2,"0")}async function _i(h){h._dialog="solar",clearInterval(h._solarTimer),h._solarTimer=setInterval(()=>{if(h._dialog!=="solar"||!h.isConnected){clearInterval(h._solarTimer),h._solarTimer=null;return}wn(h)},300*1e3),await wn(h)}async function wn(h){let i=h._entityId("sensor.solar_energy"),r=new Date,n=new Date(r.getFullYear(),r.getMonth(),r.getDate()),c=i?await Ls(h.hass,i,n):null;h._solarHourly=c||{},h._solarTotalWh=c?Object.values(c).reduce((f,x)=>f+(x||0),0):null,h._solarForecasts=await ts(h.hass),h.requestUpdate()}function Fl(h,i){let r=h._solarForecasts||{},n=`${i.getFullYear()}-${i.getMonth()}-${i.getDate()}`,c=h._solarFcMemo;if(c&&c.src===r&&c.day===n)return c;let f=Fs(r);return h._solarFcMemo={src:r,day:n,merged:f,hourly:es(f,i),dayWh:Is(f,i)},h._solarFcMemo}function yi(h){let i=(x,R)=>ft(h.hass,x,R),r=new Date,n=Fl(h,r),c=n.merged,f=Rs(h,{actual:h._solarHourly||{},forecast:n.hourly,totalWh:h._solarTotalWh,forecastWh:n.dayWh,currentHour:r.getHours(),showForecast:Object.keys(c).length>0,title:i("card.today")});return F`<ha-adaptive-dialog
    open
    width="large"
    header-title=${i("card.solar")}
    @closed=${()=>{h._dialog=null,clearInterval(h._solarTimer),h._solarTimer=null}}
  >
    <div class="dlg-body">
      ${f}
      <div class="dlg-section">${i("panels.title")}</div>
      ${yn(h)}
    </div>
  </ha-adaptive-dialog>`}var Il=300*1e3,Ds=class extends St{static styles=_n;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._solarHourly={},this._solarTotalWh=void 0,this._solarForecasts={},this._battDir="",this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),Jt(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},Il)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let i of Object.values(this._tmplUnsub||{}))typeof i=="function"&&i();this._tmplUnsub={}}setConfig(i){this._config=i||{},this.toggleAttribute("oled",!!this._config.oled)}static getConfigElement(){return document.createElement(`${It}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(i,r){return ft(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=Xt(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_state(i){let r=this._config.entities?.[i];if(r){if(ht(r)){let c=this._templateResults?.[r];return{state:c===void 0?"unknown":String(c),attributes:{}}}return gt(r)?this.hass.states[r]:{state:r,attributes:{}}}let n=this._map?.[i];return n?this.hass.states[n]:void 0}_entityId(i){let r=this._config.entities?.[i];return r&&gt(r)&&!ht(r)?r:this._map?.[i]}shouldUpdate(i){if(!(i.size===1&&i.has("hass")))return!0;if(!this._map)return ti(i.get("hass"),this.hass,[]);let r=Object.values(this._map);for(let n of Object.values(this._config?.entities||{}))gt(n)&&!ht(n)&&r.push(n);for(let n of Array.isArray(this._config?.stats)?this._config.stats:[])n?.entity&&r.push(n.entity);return ti(i.get("hass"),this.hass,r)}updated(i){super.updated(i),(i.has("hass")||i.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let i=this._entityId("sensor.solar_energy");if(!i||!this.hass)return;let r=this._dataGen=(this._dataGen||0)+1,{start:n,end:c}=this._dataRange(),f=await Ls(this.hass,i,n,c);r===this._dataGen&&(this._hourly=f||{},this._todayWh=f?Object.values(f).reduce((x,R)=>x+(R||0),0):null,this.requestUpdate())}async _refreshForecast(){this.hass&&(this._forecasts=await ts(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let i=new Date;return{start:new Date(i.getFullYear(),i.getMonth(),i.getDate()),end:i,ref:i}}_bindEnergyCollection(){let i=this._config.collection_key,r=i?`_${i}`:null;if(r!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=r,this._period=null),!r||this._collUnsub||!this.hass?.connection)return;let n=this.hass.connection[r];if(!n||typeof n.subscribe!="function")return;let c=()=>{this._period={start:n.start,end:n.end},this._refreshData()};this._collUnsub=n.subscribe(()=>c()),c()}_forecastForRef(i){let r=this._forecasts,n=this._config.forecast_config_entries,c=`${i.getFullYear()}-${i.getMonth()}-${i.getDate()}`,f=this._fcMemo;if(f&&f.src===r&&f.entries===n&&f.day===c)return f;let x=Fs(r,n);return this._fcMemo={src:r,entries:n,day:c,merged:x,hourly:es(x,i),dayWh:Is(x,i)},this._fcMemo}_forecastTodayKWh(){if(this._rangeDays()>1)return null;let i=this._forecastForRef(this._dataRange().ref).dayWh;return i!=null?i/1e3:null}_rangeDays(){let{start:i,end:r}=this._dataRange(),n=new Date(i.getFullYear(),i.getMonth(),i.getDate()),c=new Date(r.getFullYear(),r.getMonth(),r.getDate());return Math.round((c-n)/864e5)+1}_isToday(){if(this._rangeDays()>1)return!1;let i=this._dataRange().ref,r=new Date;return i.getFullYear()===r.getFullYear()&&i.getMonth()===r.getMonth()&&i.getDate()===r.getDate()}_periodLabel(){if(this._isToday())return this._t("card.today");let i=this.hass?.locale?.language||void 0,r={weekday:"short",day:"numeric",month:"short"},{start:n,end:c}=this._dataRange();if(this._rangeDays()>1){let f={day:"numeric",month:"short"};return`${n.toLocaleDateString(i,f)} \u2013 ${c.toLocaleDateString(i,f)}`}return this._dataRange().ref.toLocaleDateString(i,r)}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let i=[...Object.values(this._config.entities||{}),this._config.title].filter(r=>ht(r));for(let r of i)if(!this._tmplUnsub[r]){this._tmplUnsub[r]=!0;try{let n=await this.hass.connection.subscribeMessage(c=>{this._templateResults[r]=c.result,this.requestUpdate()},{type:"render_template",template:r});!this.isConnected||this._tmplUnsub[r]!==!0?(n(),delete this._tmplUnsub[r]):this._tmplUnsub[r]=n}catch{this._templateResults[r]="error",this.requestUpdate()}}for(let r of Object.keys(this._tmplUnsub))if(!i.includes(r)){let n=this._tmplUnsub[r];typeof n=="function"&&n(),delete this._tmplUnsub[r],delete this._templateResults[r]}}_moreInfo(i){this._moreInfoId(this._entityId(i))}_moreInfoId(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}render(){if(!this.hass)return F``;let i=this._device;return i?(this._map=Zt(this.hass,i.ents),this._isToday()?F`<ha-card>
      ${this._renderHead(i)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="solar"?yi(this):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),this._forecastGraph(),"large"):""}
      ${this._dialog==="battery"?this._dialogFrame(this._t("battery.title"),this._renderBatteryDetail()):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`:F`<ha-card>${this._forecastGraph()}</ha-card>`):F`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(i,r,n="medium"){return F`<ha-adaptive-dialog
      open
      width=${n}
      header-title=${i}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${r}</div>
    </ha-adaptive-dialog>`}_imageSrc(i){let r=i?.device?.model;return be(this._config.image_url||(this._config.image?Xi(this._config.image):Za(r)),this.hass)}_renderHead(i){let r=this._config.title,n=r&&ht(r)?String(this._templateResults?.[r]??""):r,c=i.device?.model,f=n||i.device?.name_by_user||i.device?.name||c||this._t("card.device"),x=this._imageSrc(i);return F`<div class="head">
      <div class="head-left">
        <div class="name">${f}</div>
        ${c&&c!==f?F`<div class="subtitle">${c}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle(x,f)}
    </div>`}_renderBatteryCircle(i,r){let n=this._state("sensor.cms_batt_soc"),c=this._show("show_image")&&i;if(!n&&!c)return"";let f=lt(n),x=lt(this._state("sensor.bat_power")),R=this._state("binary_sensor.battery_charging")?.state==="on"||x!=null&&x>1,U=!R&&x!=null&&x<-1,B=R?"charge":U?"discharge":f!=null&&f<=15?"low":"",q=R?"charge":U?"discharge":"";q&&(this._battDir=q);let X=q||this._battDir,rt=!!q,ot=2*Math.PI*44,ct=f!=null?Math.max(0,Math.min(100,f)):0,pe=[{v:lt(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:lt(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:lt(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(Nt=>Nt.v!=null);return F`<div
      class="batt-circle clickable ${q}"
      @click=${()=>this._dialog="battery"}
    >
      ${n?F`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${B}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${ot.toFixed(1)};stroke-dashoffset:${(ot*(1-ct/100)).toFixed(1)}"
            ></circle>
            ${pe.map(Nt=>{let Qt=Math.max(0,Math.min(100,Nt.v))/100*2*Math.PI,re=Math.sin(Qt),Ht=Math.cos(Qt);return Kt`<line
                class="ring-tick ${Nt.cls}"
                x1=${(50+39.5*re).toFixed(1)}
                y1=${(50-39.5*Ht).toFixed(1)}
                x2=${(50+48.5*re).toFixed(1)}
                y2=${(50-48.5*Ht).toFixed(1)}
              ><title>${Nt.label} ${Math.round(Nt.v)}%</title></line>`})}
          </svg>`:""}
      ${n&&X?F`<svg
            class="ring-spin ${X} ${rt?"show":""}"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="44" stroke-dasharray="16 261"></circle>
          </svg>`:""}
      ${n&&X?F`<div class="batt-particles ${X} ${rt?"show":""}">
            ${Array.from({length:12},(Nt,Qt)=>{let re=Qt*30,Ht=Qt*5%12/12*1.6;return F`<span
                class="particle"
                style="--angle:${re}deg;animation-delay:${Ht.toFixed(2)}s"
              ></span>`})}
          </div>`:""}
      ${c?F`<img class="device-img" src="${i}" alt="${r}" />`:n?F`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${n}
            ></ha-state-icon>`:F`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${n&&(R||U)&&x!=null?F`<span class="batt-speed ${q}">
            <ha-icon
              icon=${R?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${se(Math.abs(x))}
          </span>`:""}
      ${n?F`<span class="batt-badge"
            >${f!=null?Math.round(f):"\u2013"}%</span
          >`:""}
    </div>`}_renderBatteryDetail(){let i=this._device,r=this._show("show_image")&&this._imageSrc(i),n=i?.device?.name||i?.device?.model||this._t("card.device"),c=lt(this._state("sensor.cms_batt_soc")),f=lt(this._state("sensor.bat_power")),x=this._state("binary_sensor.battery_charging")?.state==="on"||f!=null&&f>1,R=!x&&f!=null&&f<-1,U=x?"charge":R?"discharge":"",B=x?"mdi:flash":R?"mdi:battery-arrow-down":"mdi:battery",q=x?this._t("card.charging"):R?this._t("card.discharging"):this._t("battery.idle"),X=(x||R)&&f!=null?se(Math.abs(f)):null,rt=[{slot:"sensor.soh",icon:"mdi:heart-pulse",label:this._t("battery.health")},{slot:"sensor.calendar_soh",icon:"mdi:calendar-heart",label:this._t("battery.calendar_health")},{slot:"sensor.bat_temp",icon:"mdi:thermometer",label:this._t("battery.temperature")},...x?[{slot:"sensor.chg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_full")}]:[],...R?[{slot:"sensor.dsg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_empty")}]:[],{slot:"sensor.full_energy",icon:"mdi:battery-high",label:this._t("battery.capacity")},{slot:"sensor.cycles",icon:"mdi:battery-sync",label:this._t("battery.cycles")}].map(ot=>({...ot,value:this._battTileValue(ot.slot)})).filter(ot=>ot.value!=null);return F`<div class="batt-detail">
      <div class="batt-hero">
        ${r?F`<img class="batt-hero-img" src=${r} alt=${n} />`:F`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${c!=null?Math.round(c):"\u2013"}<span class="batt-hero-u">%</span></span
          >
          <span class="batt-hero-status ${U}">
            <ha-icon icon=${B}></ha-icon>${q}${X?` \xB7 ${X}`:""}
          </span>
        </div>
      </div>
      ${rt.length?F`<div class="batt-grid">
            ${rt.map(ot=>{let ct=this._entityId(ot.slot);return F`<div
                class="batt-tile ${ct?"clickable":""}"
                @click=${ct?()=>this._moreInfoId(ct):null}
              >
                <ha-icon icon=${ot.icon}></ha-icon>
                <div class="batt-tile-text">
                  <span class="batt-tile-val">${ot.value}</span>
                  <span class="batt-tile-label">${ot.label}</span>
                </div>
              </div>`})}
          </div>`:""}
    </div>`}_battTileValue(i){let r=this._state(i),n=lt(r);if(n==null)return null;let c=r.attributes?.unit_of_measurement||"";return c==="W"?se(n):c==="Wh"?Mr(n):c==="kWh"?Mr(n*1e3):c==="min"?gn(n):c==="%"?`${Math.round(n)}%`:c?`${Math.round(n)} ${c}`:String(Math.round(n))}_renderAc(){let i=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(r=>({...r,swState:this._state(r.sw),pwState:this._state(r.pw)})).filter(r=>r.swState||r.pwState);return i.length?F`<div class="ac">
      ${i.map(r=>{let n=r.swState?.state==="on",c=lt(r.pwState);return F`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(r.pw)||this._entityId(r.sw))}
        >
          <ha-icon class="ac-icon ${n?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${r.label}</span>
            <span class="ac-power">
              ${r.swState&&!n?this._t("card.off"):c!=null?this._metric(de(c)):r.pwState?"\u2014":""}
            </span>
          </div>
          ${r.swState?F`<ha-switch
                .checked=${n}
                @click=${f=>f.stopPropagation()}
                @change=${f=>this._toggleSwitch(r.sw,r.label,f.target)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(i,r,n){let c=this._entityId(i),f=c?this.hass.states[c]:null;!c||!f||(n&&(n.checked=f.state==="on"),f.state==="on"?this._confirmAc={slot:i,label:r}:this.hass.callService("switch","turn_on",{entity_id:c}))}_renderConfirmAc(){let{label:i}=this._confirmAc,r=()=>this._confirmAc=null;return F`<ha-adaptive-dialog
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
    </ha-adaptive-dialog>`}_metric(i){return F`<span class="metric"
      ><span class="metric-num">${i.n}</span
      ><span class="metric-unit">${i.u}</span></span
    >`}_renderStats(){if(Array.isArray(this._config.stats))return F`<div class="stats custom">
        ${this._config.stats.map(c=>this._renderCustomStat(c))}
      </div>`;let i=lt(this._state("sensor.pv_total")),r=Fr(this),n=this._show("show_panels")&&r.length>0;return F`<div class="stats">
      <div
        class="stat solar ${n?"clickable":""}"
        @click=${n?()=>_i(this):null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${n?F`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${this._metric(de(i))}</div>
        ${n?F`<div class="stat-sub">
              ${r.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(this._gridReading()):F`<div></div>`}
    </div>`}_gridReading(){let i=this._config.grid_source==="device",r=!!this._config.entities?.["sensor.grid_power"],n=De({grid:lt(this._state("sensor.grid_power")),solar:lt(this._state("sensor.pv_total")),load:lt(this._state("sensor.sys_load")),bat:lt(this._state("sensor.bat_power")),loadFromGrid:i?null:lt(this._state("sensor.load_from_grid")),loadFromPv:i?null:lt(this._state("sensor.load_from_pv")),loadFromBat:i?null:lt(this._state("sensor.load_from_bat"))}),c=gi(n,r);return{...c,slot:c.importing&&c.fromSplit?"sensor.load_from_grid":"sensor.grid_power"}}_renderGrid(i){let r=i.importing?"import":i.exporting?"export":"",n=i.importing?this._t("card.grid_import"):i.exporting?this._t("card.grid_export"):this._t("card.grid_idle"),c=i.exporting?"mdi:transmission-tower-export":i.importing?"mdi:transmission-tower-import":"mdi:transmission-tower";return F`<div
      class="stat grid ${r} clickable"
      @click=${()=>this._moreInfo(i.slot)}
    >
      <div class="stat-head"><ha-icon icon=${c}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${this._metric(de(i.value))}${vi(this)}
      </div>
      <div class="stat-sub">${n}</div>
    </div>`}_renderCustomStat(i){if(!i||!i.entity&&!i.name)return F``;let r=i.entity?this.hass.states[i.entity]:void 0,n=i.name||r?.attributes?.friendly_name||i.entity||"",c=i.tap_action,f=!c||c.action!=="none";return F`<div
      class="stat ${f?"clickable":""}"
      @click=${f?()=>this._handleAction(c,i.entity):null}
    >
      <div class="stat-head">
        ${i.icon?F`<ha-icon icon=${i.icon}></ha-icon>`:r?F`<ha-state-icon
                .hass=${this.hass}
                .stateObj=${r}
              ></ha-state-icon>`:F`<ha-icon icon="mdi:gauge"></ha-icon>`}
        ${n}
      </div>
      <div class="stat-value">${this._metric(this._statValue(r))}</div>
    </div>`}_statValue(i){let r=i?.state;if(r==null||r==="unavailable"||r==="unknown")return{n:"\u2013",u:""};let n=lt(i),c=i.attributes?.unit_of_measurement||"";return n==null?{n:r,u:""}:c==="W"?de(n):{n:Number.isInteger(n)?String(n):n.toFixed(1),u:c}}_handleAction(i,r){let n=i||{action:"more-info"},c=n.action||"more-info";if(c!=="none"){if(n.confirmation){let f=n.confirmation.text||this._t("card.confirm_action")||"Are you sure?";if(!window.confirm(f))return}switch(c){case"more-info":this._moreInfoId(n.entity||r);return;case"toggle":{let f=n.entity||r;f&&this.hass.callService("homeassistant","toggle",{entity_id:f});return}case"navigate":n.navigation_path&&(history.pushState(null,"",n.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0})));return;case"url":n.url_path&&window.open(n.url_path,n.new_tab===!1?"_self":"_blank");return;case"perform-action":case"call-service":{let f=n.perform_action||n.service,[x,R]=(f||"").split(".",2);x&&R&&this.hass.callService(x,R,n.data||n.service_data||{},n.target);return}default:this._moreInfoId(n.entity||r)}}}_forecastGraph(){let i=this._dataRange().ref,r=this._forecastForRef(i),n=this._rangeDays()>1;return Rs(this,{title:this._periodLabel(),actual:n?{}:this._hourly||{},forecast:n?{}:r.hourly,totalWh:this._todayWh,forecastWh:n?null:r.dayWh,currentHour:this._isToday()?new Date().getHours():null,showForecast:!n&&this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})}_renderToday(){let i=this._todayWh!=null?this._todayWh/1e3:null,r=Object.keys(this._forecasts||{}).length>0,n=this._show("show_forecast")&&r?this._forecastTodayKWh():null,c=n!=null&&n>0,f=c&&i!=null?Math.min(100,Math.round(i/n*100)):null,x=f!=null&&f>=100;return F`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(zs(i))}</span>
      </div>
      ${c?F`<div class="fc-bar">
              <div
                class="fc-fill ${x?"met":""}"
                style="width:${f}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${i!=null?i.toFixed(1):"\u2013"}</b> /
                ${n.toFixed(1)} kWh
              </span>
              <span>
                ${x?this._t("card.exceeded"):this._t("card.of_forecast",{pct:f??0})}
              </span>
            </div>`:""}
    </div>`}};function bi(h,i,r,n){return F`<div class="nav">
    ${i.map(c=>F`<button
        class="nav-row"
        @click=${()=>h._page=c.id}
      >
        <ha-icon class="nav-icon" icon=${c.icon}></ha-icon>
        <span class="nav-labels">
          <span class="nav-label">${r(c.id)}</span>
          <span class="nav-secondary">${n(c.id)}</span>
        </span>
        <ha-icon icon="mdi:chevron-right"></ha-icon>
      </button>`)}
  </div>`}function wi(h,i){return F`<div class="subpage-head">
    <button class="back" @click=${()=>h._page=null}>
      <ha-icon icon="mdi:chevron-left"></ha-icon>
    </button>
    <span class="subpage-title">${i}</span>
  </div>`}function xi(h,i,r,n,c){return F`<div class="row">
    <ha-icon icon=${c}></ha-icon>
    <span class="row-label">${i}</span>
    <ha-switch
      .checked=${h._config[r]??n}
      @change=${f=>h._set(r,f.target.checked,n)}
    ></ha-switch>
  </div>`}function ki(h,i,r,n,c,f){let x=r.map(R=>({value:R,label:f?f(R):R||"\u2014"}));return F`<ha-form
    class="field"
    .hass=${h.hass}
    .data=${{value:n}}
    .schema=${[{name:"value",selector:{select:{options:x,mode:"dropdown"}}}]}
    .computeLabel=${()=>i}
    @value-changed=${R=>{R.stopPropagation(),c(R.detail.value.value??"")}}
  ></ha-form>`}function Si(h){return ki(h,ft(h.hass,"editor.grid_source"),["app","device"],h._config.grid_source||"app",i=>h._set("grid_source",i,"app"),i=>ft(h.hass,`editor.grid_source_${i}`))}function Vs(h,i,r){return F`<div class="house-grid">
    ${Ji.map(n=>{let c=ft(h.hass,"house.editor.style_n",{n});return F`<button
        class="house-opt ${i===n?"on":""}"
        title=${c}
        @click=${()=>r(n)}
      >
        <img src=${en(n,h.hass)} loading="lazy" alt=${n} />
        <span class="pick-label">${c}</span>
      </button>`})}
  </div>`}function Us(h,i,r){return F`<div class="modes">
    ${Qa.map(n=>F`<button
        class="mode ${i===n?"on":""}"
        @click=${()=>r(n)}
      >
        ${ft(h.hass,`house.mode.${n}`)}
      </button>`)}
  </div>`}function Bs(h,i,r,n=!1){return F`<div class=${n?"batt-grid dim":"batt-grid"}>
    ${Ps.map(c=>{let f=ft(h.hass,`house.battery.${c}`);return F`<button
        class="batt-opt ${i===c?"on":""}"
        title=${f}
        @click=${()=>r(c)}
      >
        <span
          class="batt-thumb"
          style=${`background-image:url(${ui(c,h.hass)})`}
        ></span>
        <span class="pick-label">${f}</span>
      </button>`})}
  </div>`}var $i=Pt`
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
  .hint {
    color: var(--secondary-text-color);
    font-size: 0.85em;
    margin: 4px 4px 10px;
  }
  .top-hint {
    margin: 0 4px 10px;
  }
  .dim {
    opacity: 0.45;
    pointer-events: none;
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
  .field {
    width: 100%;
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
  .batt-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
    gap: 8px;
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
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-position: center 58%;
    background-size: 200%;
  }
  .pick-label {
    font-size: 0.72em;
    color: var(--secondary-text-color);
    text-align: center;
    line-height: 1.15;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  /* per-panel blocks (shared views/panels-editor.js) */
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
  .panel-block ha-form {
    display: block;
    margin-bottom: 12px;
  }
`;function xn(h,i){if(!i)return null;let r=h?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${i}/${r}icon.png`}var Ll=4;function zl(h){let i=Xt(h.hass),r=h._config.device&&i.find(n=>n.deviceId===h._config.device)||i[0];return r?Zt(h.hass,r.ents):{}}function kn(h){let i=zl(h),r=[];for(let n=1;n<=Ll;n++)i[`sensor.pv${n}_power`]&&r.push(n);return r.length?r:[1,2,3,4]}function Ns(h){let i=(f,x)=>ft(h.hass,f,x),r=kn(h),n=r.filter(f=>h._config.panels?.[f]?.hidden).length,c=i("editor.panels_count",{n:r.length});return n&&(c+=` \xB7 ${i("editor.panels_hidden",{n})}`),c}function Lr(h,i,r){return F`<ha-form
    .hass=${h.hass}
    .data=${{value:i.max??null}}
    .schema=${[{name:"value",selector:{number:{min:0,step:10,unit_of_measurement:"W",mode:"box"}}}]}
    .computeLabel=${()=>ft(h.hass,"editor.panel_max")}
    @value-changed=${n=>{n.stopPropagation(),r(Number(n.detail.value.value)||null)}}
  ></ha-form>`}function js(h,i){let r=(n,c)=>ft(h.hass,n,c);return F`<div class="hint top-hint">${r("editor.panels_hint_max")}</div>
    ${kn(h).map(n=>Ol(h,i,n,r))}`}function Ol(h,i,r,n){let c=h._config.panels?.[r]||{},f=!!c.hidden,x=R=>h._dispatch(Rl(h,i,r,R));return F`<div class="panel-block">
    <div class="panel-title-row">
      <ha-icon icon="mdi:solar-panel"></ha-icon>
      <span class="panel-title">${c.name||n("editor.panel",{n:r})}</span>
      <ha-switch
        .checked=${!f}
        @change=${R=>x({hidden:!R.target.checked})}
      ></ha-switch>
    </div>
    ${f?F`<div class="hint">${n("editor.panel_hidden")}</div>`:F`<ha-form
            .hass=${h.hass}
            .data=${{value:c.name||""}}
            .schema=${[{name:"value",selector:{text:{}}}]}
            .computeLabel=${()=>n("editor.panel_name")}
            @value-changed=${R=>{R.stopPropagation(),x({name:R.detail.value.value||""})}}
          ></ha-form>
          ${Lr(h,c,R=>x({max:R}))}`}
  </div>`}function Rl(h,i,r,n){let c={...h._config.panels||{}},f={...c[r]||{}};for(let[R,U]of Object.entries(n))U===""||U==null||U===!1?delete f[R]:f[R]=U;Object.keys(f).length?c[r]=f:delete c[r];let x={...h._config,panels:c,type:`custom:${i}`};return Object.keys(c).length||delete x.panels,x}var Dl=[{name:"device",selector:{device:{integration:Le}}}],Sn={appearance:[["oled",!1,"mdi:brightness-2"],["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},$n={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},An=new Set,En=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"stats",icon:"mdi:chart-box-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],Vl=4,Hs=class extends St{static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._config={},this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),Jt()}setConfig(i){this._config=i||{}}_t(i,r){return ft(this.hass,i,r)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,un(this.hass).then(i=>{this._providers=i}))}render(){if(!this.hass)return F``;let i=En.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_defaults(){let i=Xt(this.hass),r=this._config.device&&i.find(n=>n.deviceId===this._config.device)||i[0];return r?Zt(this.hass,r.ents):{}}_renderRoot(){return F`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Dl}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      ${bi(this,En,i=>this._t(`page.${i}`),i=>this._summary(i))}`}_summary(i){if(i==="panels"){let x=this._detectedPanels(),R=x.filter(B=>this._config.panels?.[B]?.hidden).length,U=this._t("editor.panels_count",{n:x.length});return R&&(U+=` \xB7 ${this._t("editor.panels_hidden",{n:R})}`),U}if(i==="forecast"){let x=this._providers;if(x===void 0)return this._t("editor.automatic");if(!x.length)return this._t("editor.forecast_none_short");let R=this._config.forecast_config_entries,U=R===void 0?x.length:R.length;return this._t("editor.forecast_selected",{n:U,total:x.length})}if(i==="stats"){let x=this._config.stats;return Array.isArray(x)?this._t("editor.stats_count",{n:x.length}):this._t("editor.stats_default")}if(i==="advanced")return this._config.collection_key||this._t("editor.none");let r=($n[i]||[]).filter(([x])=>this._config.entities?.[x]).length,n=r?` \xB7 ${this._t("editor.overridden",{n:r})}`:"",c=Sn[i]||[];if(!c.length)return r?this._t("editor.overridden",{n:r}):this._t("editor.automatic");let f=c.filter(([x,R])=>this._config[x]??R);return f.length?f.map(([x])=>this._t(`short.${x}`)).join(", ")+n:`${this._t("editor.nothing_shown")}${n}`}_renderSubpage(i){return F`${wi(this,this._t(`page.${i.id}`))}
      ${(Sn[i.id]||[]).map(([r,n,c])=>xi(this,this._t(`toggle.${r}`),r,n,c))}
      ${i.id==="appearance"?F`${Si(this)}${this._renderImagePicker()}`:i.id==="stats"?this._renderStatsPage():i.id==="panels"?this._renderPanelsPage():i.id==="forecast"?this._renderForecastPage():i.id==="advanced"?this._renderAdvancedPage():($n[i.id]||[]).map(([r,n])=>this._renderSlot(r,n))}`}_renderImagePicker(){let i=this._config.image,r=this._config.image_url,n=this._config.show_image??!0;return F`<div class="section">
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
        ${As.map(c=>F`<button
            class="img-opt ${i===c.key?"on":""}"
            title=${c.name}
            @click=${()=>this._setImage(c.key)}
          >
            <img src=${Xi(c.key)} loading="lazy" alt=${c.name} />
            <span class="img-label">${c.name}</span>
          </button>`)}
      </div>`}_setImage(i){let r={...this._config,type:`custom:${It}`};delete r.image_url,i?r.image=i:delete r.image,this._dispatch(r)}_renderAdvancedPage(){return F`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${i=>{i.stopPropagation(),this._setCollectionKey(i.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(i){let r={...this._config,type:`custom:${It}`};i?r.collection_key=i:delete r.collection_key,this._dispatch(r)}_renderStatsPage(){let i=this._config.stats;return Array.isArray(i)?F`<div class="hint top-hint">${this._t("editor.stats_hint")}</div>
      ${i.map((r,n)=>this._renderStatBlock(r,n,i.length))}
      <div class="stats-actions">
        <button class="add-btn" @click=${()=>this._addStat()}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("editor.stats_add")}
        </button>
        <button class="text-btn" @click=${()=>this._resetStats()}>
          ${this._t("editor.stats_reset")}
        </button>
      </div>`:F`<div class="hint top-hint">
          ${this._t("editor.stats_default_hint")}
        </div>
        <button class="filled-btn" @click=${()=>this._seedDefaultStats()}>
          ${this._t("editor.stats_customize")}
        </button>`}_renderStatBlock(i,r,n){let c=[{name:"entity",selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"tap_action",selector:{ui_action:{}}}],f=i.name||i.entity||this._t("editor.stat_n",{n:r+1});return F`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon=${i.icon||"mdi:chart-box-outline"}></ha-icon>
        <span class="panel-title">${f}</span>
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
        .schema=${c}
        .computeLabel=${x=>this._t(`editor.stat_field_${x.name}`)}
        @value-changed=${x=>{x.stopPropagation(),this._updateStat(r,x.detail.value)}}
      ></ha-form>
    </div>`}_seedDefaultStats(){let i=this._defaults(),r=n=>{let c=this._config.entities?.[n];return c&&gt(c)&&!ht(c)?c:i[n]||""};this._setStats([{entity:r("sensor.pv_total"),name:this._t("card.solar"),icon:"mdi:solar-power-variant"},{entity:r("sensor.grid_power"),name:this._t("card.grid"),icon:"mdi:transmission-tower"}])}_updateStat(i,r){let n=[...this._config.stats||[]],c={};for(let[f,x]of Object.entries(r))x===""||x==null||(c[f]=x);n[i]=c,this._setStats(n)}_addStat(){this._setStats([...this._config.stats||[],{}])}_removeStat(i){let r=[...this._config.stats||[]];r.splice(i,1),this._setStats(r)}_moveStat(i,r){let n=[...this._config.stats||[]],c=i+r;c<0||c>=n.length||([n[i],n[c]]=[n[c],n[i]],this._setStats(n))}_setStats(i){this._dispatch({...this._config,stats:i,type:`custom:${It}`})}_resetStats(){let i={...this._config,type:`custom:${It}`};delete i.stats,this._dispatch(i)}_renderForecastPage(){let i=this._providers;if(i===void 0)return F`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!i.length)return F`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let r=this._config.show_forecast??!0,n=this._config.forecast_config_entries,c=f=>n===void 0?!0:n.includes(f);return F`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${r?"":"dim"}>
        ${i.map(f=>F`<div class="row">
            ${this._renderBrand(f.domain)}
            <span class="row-label"
              >${f.title}<span class="row-sub">${f.domain}</span></span
            >
            <ha-switch
              .checked=${c(f.id)}
              .disabled=${!r}
              @change=${x=>this._toggleProvider(f.id,x.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(i){let r=xn(this.hass,i);return F`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${r?F`<img
            class="brand"
            src=${r}
            @error=${n=>{n.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(i,r){let n=(this._providers||[]).map(x=>x.id),c=this._config.forecast_config_entries??n.slice();c=r?[...new Set([...c,i])]:c.filter(x=>x!==i);let f={...this._config,type:`custom:${It}`};c.length===n.length&&n.every(x=>c.includes(x))?delete f.forecast_config_entries:f.forecast_config_entries=c,this._dispatch(f)}_detectedPanels(){let i=this._defaults(),r=[];for(let n=1;n<=Vl;n++)(i[`sensor.pv${n}_power`]||this._config.entities?.[`sensor.pv${n}_power`])&&r.push(n);return r.length?r:[1,2,3,4]}_renderPanelsPage(){return F`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(i=>this._renderPanelConfig(i))}`}_renderPanelConfig(i){let r=this._config.panels?.[i]||{},n=!!r.hidden,c=`sensor.pv${i}_power`;return F`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${r.name||this._t("editor.panel",{n:i})}</span
        >
        <ha-switch
          .checked=${!n}
          @change=${f=>this._dispatch(this._withPanel(i,{hidden:!f.target.checked}))}
        ></ha-switch>
      </div>
      ${n?F`<div class="hint">${this._t("editor.panel_hidden")}</div>`:F`<ha-form
              .hass=${this.hass}
              .data=${{value:r.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${f=>{f.stopPropagation(),this._dispatch(this._withPanel(i,{name:f.detail.value.value||""}))}}
            ></ha-form>
            ${Lr(this,r,f=>this._dispatch(this._withPanel(i,{max:f})))}
            ${this._renderSlot(c,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(i,r){let n={...this._config.panels||{}},c={...n[i]||{}};for(let[x,R]of Object.entries(r))R===""||R==null||R===!1?delete c[x]:c[x]=R;Object.keys(c).length?n[i]=c:delete n[i];let f={...this._config,panels:n,type:`custom:${It}`};return Object.keys(n).length||delete f.panels,f}_slotMode(i,r){return this._modes[i]?this._modes[i]:r?gt(r)&&!ht(r)?"entity":"custom":An.has(i)?"entity":"auto"}_renderModeChips(i,r){let n=An.has(i)?["entity","custom"]:["auto","entity","custom"];return F`<div class="modes">
      ${n.map(c=>F`<button
          class="mode ${r===c?"on":""}"
          @click=${()=>{this._modes={...this._modes,[i]:c},c==="auto"&&this._setOverride(i,"")}}
        >
          ${this._t(`editor.mode_${c}`)}
        </button>`)}
    </div>`}_renderSlot(i,r,n){let c=this._config.entities?.[i]||"",f=this._slotMode(i,c),x=this._defaults()[i];return F`<div class="section">
        <ha-icon icon=${r}></ha-icon>${n||this._t(`slot.${i}`)}
      </div>
      ${this._renderModeChips(i,f)}
      ${f==="auto"?F`<div class="hint">
            ${this._t("editor.auto_value",{value:x||this._t("editor.not_found")})}
          </div>`:f==="entity"?F`<ha-form
              .hass=${this.hass}
              .data=${{value:gt(c)&&!ht(c)?c:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${R=>{R.stopPropagation(),this._setOverride(i,R.detail.value.value||"")}}
            ></ha-form>`:F`<ha-form
              .hass=${this.hass}
              .data=${{value:gt(c)&&!ht(c)?"":c}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${R=>{R.stopPropagation(),this._setOverride(i,R.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(i,r){let n={...this._config.entities||{}};r?n[i]=r:delete n[i];let c={...this._config,entities:n,type:`custom:${It}`};return Object.keys(n).length||delete c.entities,c}_setOverride(i,r){this._dispatch(this._withOverride(i,r))}_set(i,r,n){let c={...this._config,type:`custom:${It}`};r===n||r===""||r==null?delete c[i]:c[i]=r,this._dispatch(c)}_valueChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${It}`};r.device||delete r.device,this._dispatch(r)}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return[$i,Pt`
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
      .modes {
        margin-bottom: 10px;
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
      `]}};var Pn=Pt`
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
    animation: fc-pulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 0 3px var(--energy-solar-color, #ff9800));
  }
  /* opacity-only: a scaleY pulse would re-rasterize the drop-shadow every frame */
  @keyframes fc-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
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
  .panel-total.clickable {
    cursor: pointer;
  }
  .panel-max {
    color: var(--secondary-text-color);
    font-weight: 400;
  }
`;var Tn=Pt`
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
  /* OLED mode: pure black card with the theme palette remapped for contrast.
     The vars sit on :host so overlays, dialog and gradients (which all read
     the theme vars) inherit them. */
  :host([oled]) {
    --card-background-color: #000;
    --ha-card-background: #000;
    --primary-text-color: #f2f4f6;
    --secondary-text-color: #9aa3ad;
    --secondary-background-color: #15181c;
    --divider-color: rgba(255, 255, 255, 0.12);
  }
  :host([oled]) ha-card {
    background: #000;
    border-color: rgba(255, 255, 255, 0.12);
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
`;var Ws=class extends St{static styles=[Tn,Pn];static get properties(){return{hass:{},_config:{},_dialog:{state:!0}}}constructor(){super(),this._flows=new mi,this._dialog=null,this._solarHourly={},this._solarTotalWh=void 0,this._solarForecasts={},this._fcTip=null}connectedCallback(){super.connectedCallback(),Jt(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this._flows.destroy()}setConfig(i){this._config=i||{},this.toggleAttribute("oled",!!this._config.oled)}static getConfigElement(){return document.createElement(`${qt}-editor`)}static getStubConfig(){return{house:Lt}}getCardSize(){return 7}_t(i,r){return ft(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=Xt(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_state(i){let r=this._config.entities?.[i];if(r)return gt(r)&&!ht(r)?this.hass.states[r]:{state:r,attributes:{}};let n=this._map?.[i];return n?this.hass.states[n]:void 0}_entityId(i){let r=this._config.entities?.[i];return r&&gt(r)&&!ht(r)?r:this._map?.[i]}_moreInfo(i){this._moreInfoId(this._entityId(i))}_moreInfoId(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}_openSolar(){_i(this)}_grid(){let i=this._state("sensor.grid_power");if(i!=null)return lt(i);let r=lt(this._state("sensor.sys_grid_power"));return r==null?r:-r}_flowStates(){let i=parseInt(this._config.house||Lt,10)||1;if(!this._device)return De({grid:-400,solar:1500,load:700,bat:500,soc:65,backup:20,loadFromPv:700,route:i});let r=this._config.grid_source==="device";return De({grid:this._grid(),solar:lt(this._state("sensor.pv_total")),load:lt(this._state("sensor.sys_load")),bat:lt(this._state("sensor.bat_power")),soc:lt(this._state("sensor.cms_batt_soc")),backup:lt(this._state("number.backup_reserve")),loadFromGrid:r?null:lt(this._state("sensor.load_from_grid")),loadFromPv:r?null:lt(this._state("sensor.load_from_pv")),loadFromBat:r?null:lt(this._state("sensor.load_from_bat")),route:i})}shouldUpdate(i){if(!(i.size===1&&i.has("hass"))||!this._map)return!0;let r=Object.values(this._map);for(let c of Object.values(this._config?.entities||{}))gt(c)&&!ht(c)&&r.push(c);let n=this._config?.house_mode;return n!=="day"&&n!=="night"&&r.push("sun.sun"),ti(i.get("hass"),this.hass,r)}updated(i){super.updated(i),this._flows.sync(this.renderRoot,{hass:this.hass,theme:Cs(this._config.battery),showFlows:this._show("show_flows"),batOverlays:this._show("show_battery")&&Ts(this._config.battery),states:this._flowStates()});let r=!!(this._config?.title&&!ht(this._config.title));this.toggleAttribute("has-title",r)}render(){if(!this.hass)return F``;let i=this._device,r=!i;this._map=i?Zt(this.hass,i.ents):{};let n=this._config.title&&!ht(this._config.title)?this._config.title:"",c=this._show("show_battery");return F`<ha-card>
      ${n?F`<div class="title">${n}</div>`:""}
      <div class="stage">
        <img
          class="layer house"
          src=${fi(this._config,this.hass)}
          alt=""
        />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="grid_home"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${c?F`<img
              class="layer box"
              src=${ui(this._config.battery,this.hass)}
              alt=""
            />`:""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        <div class="layer flow z-box" data-flow="bat_backup"></div>
        ${this._renderLeaders()} ${this._renderStats()}
        ${c?this._renderBattery():""}
        ${r?this._renderSetupWarning():""}
      </div>
      ${this._dialog==="solar"?yi(this):""}
    </ha-card>`}_renderSetupWarning(){return F`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`}_renderLeaders(){return F`<div class="leaders">
      ${this._show("show_grid")?F`<span class="leader grid"></span>`:""}
      ${this._show("show_solar")?F`<span class="leader solar"></span>`:""}
      ${this._show("show_home")?F`<span class="leader home"></span>`:""}
    </div>`}_renderStats(){let i=!this._device,r=this._flowStates(),n=[];if(this._show("show_grid")){let c=!!this._config.entities?.["sensor.grid_power"],f=i?{value:null,importing:!1,exporting:!1,fromSplit:!1}:gi(r,c);n.push({slot:f.importing&&f.fromSplit?"sensor.load_from_grid":"sensor.grid_power",fallback:"sensor.sys_grid_power",anchor:"col-grid",value:f.value,badge:i?"":vi(this),label:f.importing?this._t("house.from_grid"):f.exporting?this._t("house.to_grid"):this._t("house.grid"),cls:f.importing?"import":f.exporting?"export":""})}return this._show("show_solar")&&n.push({slot:"sensor.pv_total",anchor:"col-solar",value:i?null:r.solar,label:this._t("card.solar"),cls:!i&&r.solar>et?"solar":"",onTap:()=>this._openSolar()}),this._show("show_home")&&n.push({slot:"sensor.sys_load",anchor:"col-home",value:i?null:r.load,label:this._t("house.home"),cls:!i&&r.load>et?"home":""}),n.length?F`<div class="stats">
      ${n.map(c=>{let f=de(c.value);return F`<div
          class="stat ${c.anchor} ${c.cls} clickable"
          @click=${c.onTap||(()=>this._moreInfo(this._entityId(c.slot)?c.slot:c.fallback||c.slot))}
        >
          <div class="stat-value">
            <span class="num">${f.n}</span><span class="unit">${f.u}</span>${c.badge||""}
          </div>
          <div class="stat-label">${c.label}</div>
        </div>`})}
    </div>`:""}_renderBattery(){let i=lt(this._state("sensor.cms_batt_soc")),r=lt(this._state("sensor.bat_power")),n=r!=null&&r>et,c=r!=null&&r<-et,f=n?"charge":c?"discharge":"",x=n?this._t("card.charging"):c?this._t("card.discharging"):this._t("house.idle"),R=r!=null&&(n||c)?se(Math.abs(r)):null;return F`<div
      class="battery ${f} clickable"
      @click=${()=>this._moreInfo(this._entityId("sensor.cms_batt_soc")?"sensor.cms_batt_soc":"sensor.bat_power")}
    >
      <div class="battery-line">
        ${R?F`<ha-icon
              icon=${n?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon
            ><span class="battery-power">${R}</span>`:""}
        ${i!=null?F`<span class="battery-soc">${Math.round(i)}%</span>`:""}
      </div>
      <div class="battery-label">${x}</div>
    </div>`}};var Ul=(()=>{let h=new Uint32Array(256);for(let i=0;i<256;i++){let r=i;for(let n=0;n<8;n++)r=r&1?3988292384^r>>>1:r>>>1;h[i]=r>>>0}return h})();function Bl(h){let i=4294967295;for(let r=0;r<h.length;r++)i=Ul[(i^h[r])&255]^i>>>8;return(i^4294967295)>>>0}var Cn=33,Mn=0;function Fn(h){let i=new TextEncoder,r=[],n=[],c=0;for(let R of h){let U=i.encode(R.name),B=Bl(R.data),q=R.data.length,X=new DataView(new ArrayBuffer(30));X.setUint32(0,67324752,!0),X.setUint16(4,20,!0),X.setUint16(6,0,!0),X.setUint16(8,0,!0),X.setUint16(10,Mn,!0),X.setUint16(12,Cn,!0),X.setUint32(14,B,!0),X.setUint32(18,q,!0),X.setUint32(22,q,!0),X.setUint16(26,U.length,!0),X.setUint16(28,0,!0),r.push(new Uint8Array(X.buffer),U,R.data);let rt=new DataView(new ArrayBuffer(46));rt.setUint32(0,33639248,!0),rt.setUint16(4,20,!0),rt.setUint16(6,20,!0),rt.setUint16(8,0,!0),rt.setUint16(10,0,!0),rt.setUint16(12,Mn,!0),rt.setUint16(14,Cn,!0),rt.setUint32(16,B,!0),rt.setUint32(20,q,!0),rt.setUint32(24,q,!0),rt.setUint16(28,U.length,!0),rt.setUint16(30,0,!0),rt.setUint16(32,0,!0),rt.setUint16(34,0,!0),rt.setUint16(36,0,!0),rt.setUint32(38,0,!0),rt.setUint32(42,c,!0),n.push(new Uint8Array(rt.buffer),U),c+=30+U.length+q}let f=n.reduce((R,U)=>R+U.length,0),x=new DataView(new ArrayBuffer(22));return x.setUint32(0,101010256,!0),x.setUint16(8,h.length,!0),x.setUint16(10,h.length,!0),x.setUint32(12,f,!0),x.setUint32(16,c,!0),x.setUint16(20,0,!0),new Blob([...r,...n,new Uint8Array(x.buffer)],{type:"application/zip"})}var Nl=[{name:"device",selector:{device:{integration:Le}}}],In=[{id:"appearance",icon:"mdi:palette-outline"},{id:"display",icon:"mdi:eye-outline"},{id:"battery",icon:"mdi:home-battery-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"entities",icon:"mdi:tune-variant"}],Ln=[["oled",!1,"mdi:brightness-2"],["show_flows",!0,"mdi:transit-connection-variant"],["show_grid",!0,"mdi:transmission-tower"],["show_solar",!0,"mdi:solar-power-variant"],["show_home",!0,"mdi:home-lightning-bolt"],["show_battery",!0,"mdi:home-battery"]],zn=[["sensor.sys_grid_power","mdi:transmission-tower"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.sys_load","mdi:home-lightning-bolt"],["sensor.bat_power","mdi:battery-charging"],["sensor.cms_batt_soc","mdi:battery-high"]],jl=[["house_image","light","mdi:white-balance-sunny"],["house_image_dark","dark","mdi:weather-night"]],Gs=class extends St{static get properties(){return{hass:{},_config:{},_page:{state:!0},_zipping:{state:!0},_uploading:{state:!0}}}constructor(){super(),this._config={},this._page=null,this._zipping=!1,this._uploading=null}connectedCallback(){super.connectedCallback(),Jt()}setConfig(i){this._config=i||{}}_t(i,r){return ft(this.hass,i,r)}_defaults(){let i=Xt(this.hass),r=this._config.device&&i.find(n=>n.deviceId===this._config.device)||i[0];return r?Zt(this.hass,r.ents):{}}render(){if(!this.hass)return F``;let i=In.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_renderRoot(){return F`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Nl}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      ${bi(this,In,i=>this._t(`house.page.${i}`),i=>this._summary(i))}`}_summary(i){if(i==="appearance"){if(Pr(this._config))return this._t("house.editor.custom");let r=this._config.house||Lt,n=this._config.house_mode||Re;return`${this._t("house.editor.style_n",{n:r})} \xB7 ${this._t(`house.mode.${n}`)}`}if(i==="display"){let r=Ln.filter(([n,c])=>this._config[n]??c);return r.length?r.map(([n])=>this._t(`house.short.${n}`)).join(", "):this._t("editor.nothing_shown")}if(i==="battery"){let r=this._config.show_battery??!0,n=this._t(`house.battery.${this._config.battery||ce}`);return r?n:this._t("editor.nothing_shown")}if(i==="panels")return Ns(this);if(i==="entities"){let r=zn.filter(([n])=>this._config.entities?.[n]).length;return r?this._t("editor.overridden",{n:r}):this._t("editor.automatic")}return""}_renderSubpage(i){return F`${wi(this,this._t(`house.page.${i.id}`))}
      ${i.id==="appearance"?this._renderAppearancePage():i.id==="display"?F`${Ln.map(([r,n,c])=>xi(this,this._t(`house.toggle.${r}`),r,n,c))}${Si(this)}`:i.id==="battery"?this._renderBatteryPage():i.id==="panels"?js(this,qt):this._renderEntitiesPage()}`}_renderAppearancePage(){let i=this._config.house||Lt,r=Pr(this._config),n=this._config.house_mode||Re;return F`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      ${Vs(this,r?null:i,c=>this._selectHouse(c))}

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      ${Us(this,n,c=>this._set("house_mode",c,Re))}

      <div class="section">
        <ha-icon icon="mdi:image-edit-outline"></ha-icon>${this._t("house.editor.custom")}
      </div>
      <div class="hint">${this._t("house.editor.custom_hint")}</div>
      ${jl.map(([c,f,x])=>this._renderUploadSlot(c,f,x))}
      <button
        class="link-btn"
        ?disabled=${this._zipping}
        @click=${this._downloadHouses}
      >
        <ha-icon icon=${this._zipping?"mdi:progress-download":"mdi:download"}></ha-icon>
        <span
          >${this._zipping?this._t("house.editor.preparing"):this._t("house.editor.download_zip")}</span
        >
      </button>`}_renderUploadSlot(i,r,n){let c=this._config[i]||"",f=this._uploading===i,x=this._t(`house.editor.custom_${r}`);return F`<div class="upload-slot">
      <div class="upload-slot-label">
        <ha-icon icon=${n}></ha-icon><span>${x}</span>
      </div>
      ${c?F`<div class="custom-img">
            <img src=${c} alt="" />
            <button class="link-btn danger" @click=${()=>this._set(i,"","")}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
              <span>${this._t("house.editor.custom_remove")}</span>
            </button>
          </div>`:F`<label class="upload ${f?"busy":""}">
            <ha-icon icon=${f?"mdi:progress-upload":"mdi:image-plus"}></ha-icon>
            <span>${f?this._t("house.editor.uploading"):x}</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              ?disabled=${this._uploading}
              @change=${R=>this._pickCustomImage(R,i)}
            />
          </label>`}
    </div>`}_renderBatteryPage(){let i=this._config.battery||ce,r=this._config.show_battery??!0;return F`<div class="hint top-hint">${this._t("house.editor.battery_hint")}</div>
      ${Bs(this,i,n=>this._set("battery",n,ce),!r)}`}_renderEntitiesPage(){return F`<div class="hint top-hint">${this._t("house.editor.entities_hint")}</div>
      ${zn.map(([i,r])=>this._renderSlot(i,r))}`}_renderSlot(i,r){let n=this._config.entities?.[i]||"",c=this._defaults()[i],f=gt(n)&&!ht(n)?n:"";return F`<div class="slot">
      <ha-icon icon=${r}></ha-icon>
      <ha-form
        class="slot-form"
        .hass=${this.hass}
        .data=${{value:f}}
        .schema=${[{name:"value",selector:{entity:{}}}]}
        .computeLabel=${()=>`${this._t(`slot.${i}`)}${c?` (${this._t("editor.auto_value",{value:c})})`:""}`}
        @value-changed=${x=>{x.stopPropagation(),this._setOverride(i,x.detail.value.value||"")}}
      ></ha-form>
    </div>`}_deviceChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${qt}`};r.device||delete r.device,this._dispatch(r)}_set(i,r,n){let c={...this._config,type:`custom:${qt}`};r===n||r===""||r==null?delete c[i]:c[i]=r,this._dispatch(c)}_selectHouse(i){let r={...this._config,type:`custom:${qt}`};delete r.house_image,delete r.house_image_dark,i===Lt?delete r.house:r.house=i,this._dispatch(r)}async _pickCustomImage(i,r){let n=i.target.files?.[0];if(i.target.value="",!(!n||this._uploading)){this._uploading=r;try{let c=new FormData;c.append("file",n);let f=await this.hass.fetchWithAuth("/api/image/upload",{method:"POST",body:c});if(!f.ok)throw new Error(`upload failed: ${f.status}`);let x=await f.json();this._set(r,`/api/image/serve/${x.id}/original`,"")}catch(c){console.error("EcoFlow House card: image upload failed",c)}finally{this._uploading=null}}}async _downloadHouses(){if(!this._zipping){this._zipping=!0;try{let i=await Promise.all(sn(this.hass).map(async({name:c,url:f})=>{let x=await fetch(f);if(!x.ok)throw new Error(`${f}: ${x.status}`);return{name:c,data:new Uint8Array(await x.arrayBuffer())}})),r=URL.createObjectURL(Fn(i)),n=document.createElement("a");n.href=r,n.download="ecoflow-house-images.zip",n.click(),URL.revokeObjectURL(r)}catch(i){console.error("EcoFlow House card: failed to build zip",i)}finally{this._zipping=!1}}}_setOverride(i,r){let n={...this._config.entities||{}};r?n[i]=r:delete n[i];let c={...this._config,entities:n,type:`custom:${qt}`};Object.keys(n).length||delete c.entities,this._dispatch(c)}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return[$i,Pt`
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
      `]}};var On=Pt`
  :host {
    display: block;
    --ef-view: calc(100vh - var(--header-height, 56px));
    --rail-w: 60px;
    /* App-style dark palette (self-contained so light HA themes still match). */
    --sp-text: #f1f4f7;
    --sp-muted: #9aa3ad;
    --sp-pill: rgba(8, 10, 12, 0.78);
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
  /* OLED mode: replace the app-style gradient backdrop with pure black (the
     text palette is already light). Embedded tabs go black too, with near-black
     card surfaces for contrast. */
  :host([oled]) ha-card {
    background: #000;
  }
  :host([oled]) .embed {
    --primary-background-color: #000;
    --card-background-color: #101215;
    --ha-card-background: #101215;
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
    /* No backdrop blur: the pills sit on the animating flow lotties, so a
       backdrop-filter would be re-blurred every frame — a constant GPU cost on
       mobile. The slightly more opaque pill keeps the text readable instead. */
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
    animation: fc-pulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 0 3px var(--energy-solar-color, #ff9800));
  }
  /* opacity-only: a scaleY pulse would re-rasterize the drop-shadow every frame */
  @keyframes fc-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
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
  .panel-total.clickable {
    cursor: pointer;
  }
  .panel-max {
    color: var(--secondary-text-color);
    font-weight: 400;
  }
`;var zr="sensor.grid_power",Or="sensor.sys_grid_power",Vn="sensor.pv_total",Hl="sensor.sys_load",Un="sensor.bat_power",Bn="sensor.cms_batt_soc",Rn="sensor.load_from_grid",Wl="sensor.load_from_pv",Gl="sensor.load_from_bat",ql="number.backup_reserve",Dn={center:"translate(-50%, -50%)","top-left":"translate(0, 0)","top-center":"translate(-50%, 0)","top-right":"translate(-100%, 0)","bottom-left":"translate(0, -100%)","bottom-center":"translate(-50%, -100%)","bottom-right":"translate(-100%, -100%)"},Nn="var(--energy-solar-color, #ff9800)",Rr="var(--energy-grid-consumption-color, #488fc2)",jn="var(--energy-grid-return-color, #8353d1)",Hn="var(--energy-battery-in-color, #3ddc84)",Yl="var(--energy-battery-out-color, #f06292)",Dr="#f44336",Vr="#2196f3",qs={solar:{labelKey:"card.solar",icon:"mdi:solar-power-variant",slot:Vn,format:"power",color:h=>h>et?Nn:null},grid:{labelKey:"house.grid",icon:"mdi:transmission-tower",slot:zr,slotFallback:Or,format:"power-abs",color:h=>h>et?Rr:h<-et?jn:null},battery:{labelKey:"card.battery",icon:"mdi:home-battery",slot:Un,format:"power-abs",color:h=>h>et?Hn:h<-et?Yl:null,secondarySlot:Bn,secondaryUnit:"%"}},Ys={solar_today:{labelKey:"space.preset.solar_today",icon:"mdi:solar-power",color:Nn,energyKey:"solar",format:"energy",secondaryKey:"space.today"},usage:{labelKey:"space.preset.usage",icon:"mdi:home-lightning-bolt",color:Rr,energyKey:"consumption",format:"energy",secondaryKey:"space.today"},energy_independence:{labelKey:"space.preset.energy_independence",icon:"mdi:leaf",color:Hn,energyKey:"independence",format:"percent"}},Ks=class extends St{static styles=On;static get properties(){return{hass:{},_config:{},_tab:{state:!0},_dialog:{state:!0}}}constructor(){super(),this._tab=0,this._flows=new mi,this._tmplUnsub={},this._tmplResults={},this._embed={path:null,status:null,els:[]},this._energy=void 0,this._energyTimer=null,this._clock="",this._clockTimer=null,this._dialog=null,this._solarHourly={},this._solarTotalWh=void 0,this._solarForecasts={},this._fcTip=null}connectedCallback(){super.connectedCallback(),Jt(),this._reflectKiosk(),this._refreshEnergy(),this._energyTimer=setInterval(()=>this._refreshEnergy(),300*1e3),this._syncClockTimer(),this.requestUpdate()}_syncClockTimer(){let i=this.isConnected&&(this._config?.clock??!1);i&&!this._clockTimer?(this._clock=this._formatClock(),this._clockTimer=setInterval(()=>{let r=this._formatClock();r!==this._clock&&(this._clock=r,this.requestUpdate())},1e3)):!i&&this._clockTimer&&(clearInterval(this._clockTimer),this._clockTimer=null)}disconnectedCallback(){super.disconnectedCallback(),this._flows.destroy();for(let i of Object.values(this._tmplUnsub))typeof i=="function"&&i();this._tmplUnsub={},this._energyTimer&&clearInterval(this._energyTimer),this._energyTimer=null,this._clockTimer&&clearInterval(this._clockTimer),this._clockTimer=null}_reflectCast(){let i=!1;try{let r=this.hass?.hassUrl?.("/");r&&(i=new URL(r,location.href).origin!==location.origin)}catch{}this.toggleAttribute("cast",i)}_reflectKiosk(){let i=!1;try{let r=n=>/[?&#](kiosk|hide_header)(?:=(?!false)[^&#]*)?(?:[&#]|$)/i.test(n);i=r(location.search)||r(location.hash)}catch{}this.toggleAttribute("no-header",i)}_formatClock(){let i=new Date,r=this.hass?.locale?.language||void 0;try{return(!this._clockFmt||this._clockFmtLang!==r)&&(this._clockFmt=new Intl.DateTimeFormat(r,{hour:"2-digit",minute:"2-digit"}),this._clockFmtLang=r),this._clockFmt.format(i)}catch{return i.toTimeString().slice(0,5)}}firstUpdated(){let i=this;for(let r=0;r<8&&i;r++){let n=i.getRootNode?.()?.host;if(n&&/^hui-(card-preview|dialog-edit-card)/.test(n.localName||"")){this.toggleAttribute("in-preview",!0);break}i=n}}async _refreshEnergy(){if(!this.hass||!(this._config.tiles||[]).some(n=>Ys[n.preset]&&!ht(n.template)&&!(n.entity&&gt(n.entity))&&!n.slot))return;let r=await mn(this.hass);this._energy=r,this.requestUpdate()}setConfig(i){this._config=i||{},this.toggleAttribute("oled",!!this._config.oled),this._syncClockTimer()}static getConfigElement(){return document.createElement(`${Yt}-editor`)}static getStubConfig(){return{tabs:[{id:"home",icon:"mdi:home",label:"Home"}],overlays:[{id:"solar",preset:"solar",x:30,y:27,anchor:"center"},{id:"grid",preset:"grid",x:22,y:62,anchor:"center"},{id:"battery",preset:"battery",x:52,y:62,anchor:"center"}],tiles:[{id:"solar",preset:"solar_today"},{id:"usage",preset:"usage"},{id:"independence",preset:"energy_independence"}],house:Lt}}getCardSize(){return 12}_t(i,r){return ft(this.hass,i,r)}_show(i,r=!0){return this._config[i]??r}get _device(){let i=Xt(this.hass);return i.length?this._config.device&&i.find(r=>r.deviceId===this._config.device)||i[0]:null}_slotEntity(i){return this._map?.[i]}_state(i){return this._slotState(i)}_entityId(i){return this._slotEntity(i)}_moreInfoId(i){this._moreInfo(i)}_slotState(i){let r=this._slotEntity(i);return r?this.hass.states[r]:void 0}_grid(){let i=this._slotState(zr);if(i!=null)return lt(i);let r=lt(this._slotState(Or));return r==null?r:-r}_flowStates(){let i=parseInt(this._config.house||Lt,10)||1;if(!this._device)return De({grid:-400,solar:1500,load:700,bat:500,soc:65,backup:20,loadFromPv:700,route:i});let r=this._config.grid_source==="device";return De({grid:this._grid(),solar:lt(this._slotState(Vn)),load:lt(this._slotState(Hl)),bat:lt(this._slotState(Un)),soc:lt(this._slotState(Bn)),backup:lt(this._slotState(ql)),loadFromGrid:r?null:lt(this._slotState(Rn)),loadFromPv:r?null:lt(this._slotState(Wl)),loadFromBat:r?null:lt(this._slotState(Gl)),route:i})}_moreInfo(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}_openSolar(){_i(this)}async _syncTemplates(){if(!this.hass?.connection)return;let i=[];for(let r of this._config.overlays||[])ht(r.template)&&i.push(r.template),ht(r.secondary)&&i.push(r.secondary);for(let r of this._config.tiles||[])ht(r.template)&&i.push(r.template),ht(r.secondary)&&i.push(r.secondary);for(let r of i)if(!this._tmplUnsub[r]){this._tmplUnsub[r]=!0;try{let n=await this.hass.connection.subscribeMessage(c=>{this._tmplResults[r]=c.result,this.requestUpdate()},{type:"render_template",template:r});!this.isConnected||this._tmplUnsub[r]!==!0?(n(),delete this._tmplUnsub[r]):this._tmplUnsub[r]=n}catch{this._tmplResults[r]="\u26A0",this.requestUpdate()}}for(let r of Object.keys(this._tmplUnsub))if(!i.includes(r)){let n=this._tmplUnsub[r];typeof n=="function"&&n(),delete this._tmplUnsub[r],delete this._tmplResults[r]}}_entityDisplay(i,r){let n=i.attributes?.unit_of_measurement||"";if(!r.attribute&&typeof this.hass.formatEntityState=="function")try{let x=this.hass.formatEntityState(i);if(x!=null&&x!==""){let R=x;return n&&x.endsWith(n)&&(R=x.slice(0,x.length-n.length).trim()),{num:R,unit:r.unit??(R===x?"":n)}}}catch{}let c=r.attribute?i.attributes?.[r.attribute]:i.state,f=c==null||c===""?"\u2013":String(c);return{num:f,unit:f==="\u2013"?"":r.unit??(r.attribute?"":n)}}_fmt(i,r){let n=Number(r);return i==="power"?de(n):i==="power-abs"?de(Math.abs(n)):i==="energy"?zs(n):i==="percent"?{n:Number.isFinite(n)?String(Math.round(n)):"\u2013",u:"%"}:{n:r==null||r===""?"\u2013":String(r),u:""}}_overlayView(i){let r=i.preset?qs[i.preset]:null,n={label:i.label??(r?this._t(r.labelKey):""),icon:i.icon??r?.icon,num:"",unit:"",color:i.color||null,entityId:i.tap_entity||null,secondary:"",dot:i.dot};if(i.preset==="grid"&&!ht(i.template)&&!(i.entity&&gt(i.entity))&&!i.slot){let c=this._flowStates(),f=gi(c),x=this._fmt("power-abs",f.value??0);return n.num=x.n,n.unit=i.unit??x.u,n.label=i.label??(f.importing?this._t("house.from_grid"):f.exporting?this._t("house.to_grid"):this._t("house.grid")),n.color||(n.color=f.importing?Rr:f.exporting?jn:null),n.entityId=i.tap_entity||(f.importing&&f.fromSplit?this._slotEntity(Rn):null)||this._slotEntity(zr)||this._slotEntity(Or),i.secondary&&(n.secondary=this._resolveValue(i.secondary)),n}if(ht(i.template)){let c=this._tmplResults[i.template];n.num=c==null?"\u2026":String(c),n.unit=c==null?"":i.unit||""}else{let c=i.entity&&gt(i.entity)&&i.entity||i.slot&&this._slotEntity(i.slot)||r?.slot&&this._slotEntity(r.slot)||r?.slotFallback&&this._slotEntity(r.slotFallback)||null,f=c?this.hass.states[c]:null;if(f){if(r?.format){let x=i.attribute?f.attributes?.[i.attribute]:f.state,R=this._fmt(r.format,x);n.num=R.n,n.unit=i.unit??R.u,!n.color&&r.color&&(n.color=r.color(Number(x)))}else{let x=this._entityDisplay(f,i);n.num=x.num,n.unit=x.unit}if(n.entityId=i.tap_entity||c,r?.secondarySlot){let x=this._slotEntity(r.secondarySlot),R=x?this.hass.states[x]:null,U=R?Number(R.state):NaN;Number.isFinite(U)&&(n.secondary=`${Math.round(U)}${r.secondaryUnit||""}`)}}else n.entityId=i.tap_entity||c}return i.secondary&&(n.secondary=this._resolveValue(i.secondary)),n}_tileView(i){let r=i.preset?Ys[i.preset]:null,n={label:i.label??(r?this._t(r.labelKey):""),icon:i.icon??r?.icon,color:i.color||r?.color||null,num:"\u2013",unit:"",entityId:i.tap_entity||null,secondary:""},c=ht(i.template)||i.entity&&gt(i.entity)||i.slot;if(r&&!c){let f=this._energy?this._energy[r.energyKey]:null;if(f!=null){let x=this._fmt(r.format,f);n.num=x.n,n.unit=i.unit??x.u}}else if(ht(i.template)){let f=this._tmplResults[i.template];n.num=f==null?"\u2026":String(f),n.unit=f==null?"":i.unit||""}else{let f=i.entity&&gt(i.entity)&&i.entity||i.slot&&this._slotEntity(i.slot)||null,x=f?this.hass.states[f]:null;if(x){if(r?.format){let R=i.attribute?x.attributes?.[i.attribute]:x.state,U=this._fmt(r.format,R);n.num=U.n,n.unit=i.unit??U.u}else{let R=this._entityDisplay(x,i);n.num=R.num,n.unit=R.unit}n.entityId=i.tap_entity||f}}return n.secondary=i.secondary?this._resolveValue(i.secondary):r?.secondaryKey?this._t(r.secondaryKey):"",n}_resolveValue(i){if(!i)return"";if(ht(i)){let r=this._tmplResults[i];return r==null?"\u2026":String(r)}if(gt(i)){let r=this.hass.states[i];if(!r)return"";if(typeof this.hass.formatEntityState=="function")try{return this.hass.formatEntityState(r)}catch{}let n=r.attributes?.unit_of_measurement;return n?`${r.state} ${n}`:r.state}return i}shouldUpdate(i){if(!(i.size===1&&i.has("hass"))||!this._config||this._activeTab().id!=="home"||!this._map)return!0;let r=Object.values(this._map),n=f=>{f&&gt(f)&&!ht(f)&&r.push(f)};for(let f of this._config.overlays||[])n(f.entity),n(f.secondary);for(let f of this._config.tiles||[])n(f.entity),n(f.secondary);n(this._config.weather?.entity);let c=this._config.house_mode;return c!=="day"&&c!=="night"&&r.push("sun.sun"),ti(i.get("hass"),this.hass,r)}updated(i){super.updated(i),this._syncTemplates(),i.has("hass")&&this._reflectCast(),this._reflectKiosk(),this._activeTab().id==="home"?this._flows.sync(this.renderRoot,{hass:this.hass,theme:Cs(this._config.battery),showFlows:this._show("show_flows"),batOverlays:this._show("show_battery")&&Ts(this._config.battery),states:this._flowStates()}):this._syncEmbed()}_activeTab(){let i=this._tabs();return(this._config.show_rail??!0)&&i[this._tab]||i[0]}_tabs(){let i=this._config.tabs&&this._config.tabs.length?[...this._config.tabs]:[{id:"home",icon:"mdi:home",label:"Home"}];return i[0]={...i[0],id:"home",icon:i[0].icon||"mdi:home"},i}async _syncEmbed(){let i=this.renderRoot?.querySelector(".embed-host");if(!i)return;let n=this._activeTab()?.path||"";if(n===this._embed.path){if(this._embed.status==="ready"){if(i.childElementCount===0)for(let f of this._embed.els)i.appendChild(f);for(let f of this._embed.els)f.hass=this.hass}return}let c=this._embedGen=(this._embedGen||0)+1;if(this._embed={path:n,status:"loading",els:[]},i.innerHTML="",!n){this._embed.status="empty";return}try{let f=await this._fetchView(n);if(c!==this._embedGen)return;if(!f){this._embed.status="missing",this.requestUpdate();return}let x=await window.loadCardHelpers?.();if(c!==this._embedGen)return;if(!x)throw new Error("card helpers unavailable");let R=[...f.cards||[]];for(let B of f.sections||[])R.push(...B.cards||[]);let U=[];for(let B of R)try{let q=x.createCardElement(B);q.hass=this.hass,i.appendChild(q),U.push(q)}catch{}this._embed={path:n,status:"ready",els:U},this.requestUpdate()}catch{if(c!==this._embedGen)return;this._embed.status="error",this.requestUpdate()}}async _fetchView(i){let r=String(i).split("/").filter(Boolean),n=r.length>1?r[0]:null,c=r.length>1?r.slice(1).join("/"):r[0],x=(await this.hass.connection.sendMessagePromise({type:"lovelace/config",url_path:n}))?.views||[],R=x.find(U=>U.path===c);return!R&&/^\d+$/.test(c)&&(R=x[Number(c)]),R}render(){if(!this.hass)return F``;let i=this._device;this._map=i?Zt(this.hass,i.ents):{};let r=this._tabs(),n=this._config.show_rail??!0,c=this._activeTab(),f=this._config.rail_labels??!1,x=this._config.rail_align||"start",R=this._config.rail_size||1;return F`<ha-card>
      <div class="shell" style=${`--rail-scale:${R}`}>
        ${n?F`<nav class="rail align-${x} ${f?"has-labels":""}">
              ${r.map((U,B)=>F`<button
                  class="rail-btn ${B===this._tab?"on":""}"
                  title=${U.label||""}
                  @click=${()=>this._tab=B}
                >
                  <ha-icon icon=${U.icon||"mdi:view-dashboard-outline"}></ha-icon>
                  ${f&&U.label?F`<span class="rail-label">${U.label}</span>`:""}
                </button>`)}
            </nav>`:""}
        <div class="main">
          ${c.id==="home"?this._renderHome():this._renderEmbed()}
        </div>
      </div>
      ${this._dialog==="solar"?yi(this):""}
    </ha-card>`}_needsDevice(){let i=r=>!r.entity&&!ht(r.template)&&(r.slot||qs[r.preset]);return(this._config.overlays||[]).some(i)}_renderHome(){let i=this._show("show_battery"),r=!this._device&&this._needsDevice();return F`<div class="stage-wrap">
      ${this._renderTopBar()}
      <div class="stage">
        <img class="layer house" src=${fi(this._config,this.hass)} alt="" />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="grid_home"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${i?F`<img
              class="layer box"
              src=${ui(this._config.battery,this.hass)}
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
    </div>`}_renderTopBar(){let i=this._config.title&&!ht(this._config.title)?this._config.title:"";return F`<div class="topbar">
      <div class="topbar-left">
        ${i?F`<div class="topbar-title">${i}</div>`:""}
      </div>
      ${this._renderClock()} ${this._renderWeather()}
    </div>`}_renderClock(){if(!(this._config.clock??!1))return F`<span class="topbar-center"></span>`;let i=this._config.clock_size||1;return F`<div class="topbar-center">
      <div class="clock" style=${`--ef-scale:${i}`}>
        <span class="clock-time">${this._clock||this._formatClock()}</span>
        ${this._config.clock_date?F`<span class="clock-date">${this._formatDate()}</span>`:""}
      </div>
    </div>`}_formatDate(){try{return new Date().toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}catch{return""}}_renderWeather(){let i=this._config.weather?.entity,r=i?this.hass.states[i]:null;if(!r)return F`<div class="topbar-right"></div>`;let n=r.attributes||{},c=n.temperature_unit||this.hass.config?.unit_system?.temperature||"\xB0",f=this._config.weather_size||1;return F`<div class="topbar-right">
      <button
        class="weather"
        style=${`--ef-scale:${f}`}
        @click=${()=>this._moreInfo(i)}
        title=${r.state}
      >
        ${n.temperature!=null?F`<span class="w-grp"
              ><ha-icon
                icon="mdi:thermometer"
                style=${`color:${this._config.weather?.temp_color||Dr}`}
              ></ha-icon
              ><span>${Math.round(n.temperature)} ${c}</span></span
            >`:""}
        ${n.humidity!=null?F`<span class="w-grp"
              ><ha-icon
                icon="mdi:water-percent"
                style=${`color:${this._config.weather?.humidity_color||Vr}`}
              ></ha-icon
              ><span>${Math.round(n.humidity)} %</span></span
            >`:""}
      </button>
    </div>`}_renderOverlays(){let i=this._config.overlays||[];return i.length?F`<div class="overlays">
      ${i.map(r=>{let n=this._overlayView(r),c=`left:${r.x??50}%;top:${r.y??50}%;transform:${Dn[r.anchor]||Dn.center};--ef-scale:${r.size||1};${n.color?`--ef-ov-color:${n.color};`:""}`,f=r.preset==="solar"?()=>this._openSolar():()=>this._moreInfo(n.entityId);return F`<button
          class="overlay ${n.entityId||r.preset==="solar"?"clickable":""}"
          style=${c}
          @click=${f}
        >
          ${n.label?F`<span class="ov-label"
                >${n.icon?F`<ha-icon class="ov-ic" icon=${n.icon}></ha-icon>`:""}
                <span>${n.label}</span>
                ${r.dot?F`<span class="ov-dot" style=${`background:${r.dot}`}></span>`:""}</span
              >`:""}
          ${n.num!==""?F`<span class="ov-value"
                ><span class="ov-num">${n.num}</span
                >${n.unit?F`<span class="ov-unit">${n.unit}</span>`:""}${r.preset==="grid"?vi(this):""}
                ${n.secondary?F`<span class="ov-sec">· ${n.secondary}</span>`:""}</span
              >`:""}
        </button>`})}
    </div>`:""}_renderTiles(){let i=this._config.tiles||[];if(!i.length)return"";let r=this._config.tiles_size||1;return F`<div class="tiles" style=${`--ef-scale:${r}`}>
      ${i.map(n=>{let c=this._tileView(n),f=c.secondary.startsWith("+")?"pos":c.secondary.startsWith("-")?"neg":"",x=n.preset==="solar_today"?()=>this._openSolar():()=>this._moreInfo(c.entityId);return F`<button
          class="tile ${c.entityId||n.preset==="solar_today"?"clickable":""}"
          @click=${x}
        >
          <div class="tile-head">
            <span class="tile-label">${c.label||""}</span>
            ${c.icon?F`<ha-icon
                  icon=${c.icon}
                  style=${c.color?`color:${c.color}`:""}
                ></ha-icon>`:""}
          </div>
          <div class="tile-value">
            <span class="tile-num">${c.num||"\u2013"}</span
            >${c.unit?F`<span class="tile-unit">${c.unit}</span>`:""}
          </div>
          ${c.secondary?F`<div class="tile-secondary ${f}">${c.secondary}</div>`:""}
        </button>`})}
    </div>`}_renderSetupWarning(){return F`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`}_renderEmbed(){let i=this._embed.status;return F`<div class="embed">
      ${i==="missing"||i==="error"?F`<div class="embed-msg">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <span>${this._t("space.embed_missing")}</span>
          </div>`:i==="empty"?F`<div class="embed-msg">
              <ha-icon icon="mdi:link-variant-off"></ha-icon>
              <span>${this._t("space.embed_empty")}</span>
            </div>`:""}
      <div class="embed-host"></div>
    </div>`}};var Kl=[{name:"device",selector:{device:{integration:Le}}}],Wn=[{id:"appearance",icon:"mdi:palette-outline"},{id:"weather",icon:"mdi:weather-partly-cloudy"},{id:"clock",icon:"mdi:clock-outline"},{id:"overlays",icon:"mdi:label-multiple-outline"},{id:"tiles",icon:"mdi:card-text-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"tabs",icon:"mdi:dock-left"}],Xs=["sensor.pv_total","sensor.sys_load","sensor.grid_power","sensor.bat_power","sensor.cms_batt_soc"],Xl=["center","top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],Zl=[["oled",!1,"mdi:brightness-2"],["show_flows",!0,"mdi:transit-connection-variant"],["show_battery",!0,"mdi:home-battery"]],Jl=0,Zs=h=>`${h}_${Date.now().toString(36)}_${Jl++}`;function Gn(h){if(typeof h!="string")return;let i=h.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(i){let r=i[1];return r.length===3&&(r=r.split("").map(n=>n+n).join("")),[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16)]}if(i=h.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i),i)return[+i[1],+i[2],+i[3]]}var Js=class extends St{static get properties(){return{hass:{},_config:{},_page:{state:!0},_sel:{state:!0}}}constructor(){super(),this._config={},this._page=null,this._sel=null,this._modes={},this._drag=null}connectedCallback(){super.connectedCallback(),Jt()}setConfig(i){this._config=i||{}}_t(i,r){return ft(this.hass,i,r)}render(){if(!this.hass)return F``;let i=Wn.find(r=>r.id===this._page);return i?this._renderSubpage(i):this._renderRoot()}_renderRoot(){return F`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Kl}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      ${bi(this,Wn,i=>this._t(`space.page.${i}`),i=>this._summary(i))}`}_summary(i){if(i==="appearance"){let r=this._config.house||Lt,n=this._config.house_mode||Re;return`${this._t("house.editor.style_n",{n:r})} \xB7 ${this._t(`house.mode.${n}`)}`}if(i==="weather")return this._config.weather?.entity||this._t("editor.automatic");if(i==="clock")return this._t(this._config.clock?"space.on":"space.off");if(i==="overlays")return this._t("space.n_items",{n:(this._config.overlays||[]).length});if(i==="tiles")return this._t("space.n_items",{n:(this._config.tiles||[]).length});if(i==="panels")return Ns(this);if(i==="tabs"){if(!(this._config.show_rail??!0))return this._t("space.off");let r=this._tabs().length-1;return r?this._t("space.n_views",{n:r}):this._t("space.home_tab")}return""}_renderSubpage(i){return F`${wi(this,this._t(`space.page.${i.id}`))}
      ${i.id==="appearance"?this._renderAppearance():i.id==="weather"?this._renderWeather():i.id==="clock"?this._renderClock():i.id==="overlays"?this._renderOverlays():i.id==="tiles"?this._renderTiles():i.id==="panels"?js(this,Yt):this._renderTabs()}`}_renderAppearance(){let i=this._config.house||Lt,r=this._config.house_mode||Re,n=this._config.battery||ce;return F`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      ${Vs(this,i,c=>this._set("house",c,Lt))}

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      ${Us(this,r,c=>this._set("house_mode",c,Re))}

      <div class="section">
        <ha-icon icon="mdi:home-battery-outline"></ha-icon>${this._t("house.editor.battery")}
      </div>
      ${Bs(this,n,c=>this._set("battery",c,ce))}

      <div class="section">
        <ha-icon icon="mdi:eye-outline"></ha-icon>${this._t("house.page.display")}
      </div>
      ${Zl.map(([c,f,x])=>xi(this,this._t(`house.toggle.${c}`),c,f,x))}
      ${Si(this)}`}_renderWeather(){let i=this._config.weather?.entity||"";return F`<div class="hint top-hint">${this._t("space.weather_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:i}}
        .schema=${[{name:"value",selector:{entity:{domain:"weather"}}}]}
        .computeLabel=${()=>this._t("space.weather_entity")}
        @value-changed=${r=>{r.stopPropagation(),this._setWeather("entity",r.detail.value.value||"")}}
      ></ha-form>
      ${this._colorField(this._t("space.f_temp_color"),this._config.weather?.temp_color,r=>this._setWeather("temp_color",r),Dr)}
      ${this._colorField(this._t("space.f_humidity_color"),this._config.weather?.humidity_color,r=>this._setWeather("humidity_color",r),Vr)}
      ${this._scaleField(this._t("space.f_weather_size"),this._config.weather_size,r=>this._set("weather_size",r,1))}`}_renderClock(){return F`<div class="hint top-hint">${this._t("space.clock_hint")}</div>
      <div class="row">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <span class="row-label">${this._t("space.clock_show")}</span>
        <ha-switch
          .checked=${this._config.clock??!1}
          @change=${i=>this._set("clock",i.target.checked,!1)}
        ></ha-switch>
      </div>
      ${this._config.clock?F`<div class="row">
              <ha-icon icon="mdi:calendar-outline"></ha-icon>
              <span class="row-label">${this._t("space.clock_date")}</span>
              <ha-switch
                .checked=${this._config.clock_date??!1}
                @change=${i=>this._set("clock_date",i.target.checked,!1)}
              ></ha-switch>
            </div>
            ${this._scaleField(this._t("space.f_clock_size"),this._config.clock_size,i=>this._set("clock_size",i,1))}`:""}`}_setWeather(i,r){let n={...this._config.weather||{}};r?n[i]=r:delete n[i];let c={...this._config,weather:n,type:`custom:${Yt}`};Object.keys(n).length||delete c.weather,this._dispatch(c)}_itemTitle(i,r){return i.label?i.label:i.preset?this._t(`space.preset.${i.preset}`):gt(i.entity)?i.entity:i.slot?this._t(`slot.${i.slot}`):this._t(r)}_renderOverlays(){let i=this._config.overlays||[];return F`<div class="hint top-hint">${this._t("space.overlays_hint")}</div>
      <div
        class="preview"
        @pointermove=${this._onDragMove}
        @pointerup=${this._onDragEnd}
        @pointerleave=${this._onDragEnd}
      >
        <img class="preview-img" src=${fi(this._config,this.hass)} alt="" />
        ${i.map(r=>F`<button
            class="chip ${this._sel===r.id?"sel":""}"
            style=${`left:${r.x??50}%;top:${r.y??50}%`}
            @pointerdown=${n=>this._onDragStart(n,r.id)}
            @click=${()=>this._sel=r.id}
          >
            ${r.icon?F`<ha-icon icon=${r.icon}></ha-icon>`:""}
            <span>${this._itemTitle(r,"space.item_overlay")}</span>
          </button>`)}
      </div>

      ${i.map((r,n)=>this._renderOverlayEditor(r,n))}

      <button class="add-btn" @click=${this._addOverlay}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_overlay")}</span>
      </button>`}_renderOverlayEditor(i,r){let n=this._sel===i.id,c=this._sourceMode(i);return F`<div class="item ${n?"open":""}">
      <div class="item-head" @click=${()=>this._sel=n?null:i.id}>
        ${i.icon?F`<ha-icon icon=${i.icon}></ha-icon>`:F`<ha-icon icon="mdi:label-outline"></ha-icon>`}
        <span class="item-title">${this._itemTitle(i,"space.item_overlay")}</span>
        ${this._renderReorder("overlays",r)}
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?F`<div class="item-body">
            ${this._renderPresetField("overlays",i,r,qs)}
            ${this._textField(this._t("space.f_label"),i.label||"",f=>this._updateItem("overlays",r,{label:f}))}
            ${this._iconField(this._t("space.f_icon"),i.icon,f=>this._updateItem("overlays",r,{icon:f}))}
            ${i.preset?"":this._renderSourceField("overlays",i,r,c)}
            ${this._textField(this._t("space.f_unit"),i.unit??"",f=>this._updateItem("overlays",r,{unit:f||void 0}))}
            ${this._textField(this._t("space.f_secondary"),i.secondary||"",f=>this._updateItem("overlays",r,{secondary:f||void 0}))}
            ${this._colorField(this._t("space.f_dot"),i.dot,f=>this._updateItem("overlays",r,{dot:f}))}
            ${ki(this,this._t("space.f_anchor"),Xl,i.anchor||"center",f=>this._updateItem("overlays",r,{anchor:f}),f=>this._t(`space.anchor.${f}`))}
            <div class="xy">
              ${this._numField("X %",i.x??50,f=>this._updateItem("overlays",r,{x:f}))}
              ${this._numField("Y %",i.y??50,f=>this._updateItem("overlays",r,{y:f}))}
            </div>
            ${this._colorField(this._t("space.f_color"),i.color,f=>this._updateItem("overlays",r,{color:f}))}
            ${this._scaleField(this._t("space.f_size"),i.size,f=>this._updateItem("overlays",r,{size:f===1?void 0:f}))}
            ${this._renderItemActions("overlays",r)}
          </div>`:""}
    </div>`}_renderPresetField(i,r,n,c){let f=["",...Object.keys(c)];return F`${ki(this,this._t("space.f_preset"),f,r.preset||"",x=>{let R={preset:x||void 0};x&&(R.slot=void 0,R.entity=void 0,R.template=void 0),this._updateItem(i,n,R)},x=>x?this._t(`space.preset.${x}`):this._t("space.preset_none"))}
      ${r.preset?F`<div class="hint">${this._t("space.preset_hint")}</div>`:""}`}_sourceMode(i){return this._modes[i.id]?this._modes[i.id]:ht(i.template)?"template":i.entity?"entity":"auto"}_renderSourceField(i,r,n,c){return F`<div class="src-modes">
        ${["auto","entity","template"].map(f=>F`<button
            class="mode ${c===f?"on":""}"
            @click=${()=>{this._modes={...this._modes,[r.id]:f};let x={slot:void 0,entity:void 0,template:void 0};this._updateItem(i,n,x)}}
          >
            ${this._t(`space.src_${f}`)}
          </button>`)}
      </div>
      ${c==="auto"?ki(this,this._t("space.f_slot"),Xs,r.slot||Xs[0],f=>this._updateItem(i,n,{slot:f}),f=>this._t(`slot.${f}`)):c==="entity"?F`<ha-form
              .hass=${this.hass}
              .data=${{value:gt(r.entity)?r.entity:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${f=>{f.stopPropagation(),this._updateItem(i,n,{entity:f.detail.value.value||void 0})}}
            ></ha-form>`:F`<ha-form
              .hass=${this.hass}
              .data=${{value:ht(r.template)?r.template:""}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${f=>{f.stopPropagation(),this._updateItem(i,n,{template:f.detail.value.value||void 0})}}
            ></ha-form>`}`}_addOverlay(){let i=[...this._config.overlays||[]],r=Zs("ov");i.push({id:r,x:50,y:50,anchor:"center",slot:Xs[0]}),this._setList("overlays",i),this._sel=r}_renderTiles(){let i=this._config.tiles||[];return F`<div class="hint top-hint">${this._t("space.tiles_hint")}</div>
      ${this._scaleField(this._t("space.f_tiles_size"),this._config.tiles_size,r=>this._set("tiles_size",r,1))}
      ${i.map((r,n)=>this._renderTileEditor(r,n))}
      <button class="add-btn" @click=${this._addTile}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tile")}</span>
      </button>`}_renderTileEditor(i,r){let n=this._sel===i.id,c=this._sourceMode(i);return F`<div class="item ${n?"open":""}">
      <div class="item-head" @click=${()=>this._sel=n?null:i.id}>
        ${i.icon?F`<ha-icon icon=${i.icon}></ha-icon>`:F`<ha-icon icon="mdi:card-outline"></ha-icon>`}
        <span class="item-title">${this._itemTitle(i,"space.item_tile")}</span>
        ${this._renderReorder("tiles",r)}
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?F`<div class="item-body">
            ${this._renderPresetField("tiles",i,r,Ys)}
            ${this._textField(this._t("space.f_label"),i.label||"",f=>this._updateItem("tiles",r,{label:f}))}
            ${this._iconField(this._t("space.f_icon"),i.icon,f=>this._updateItem("tiles",r,{icon:f}))}
            ${this._colorField(this._t("space.f_icon_color"),i.color,f=>this._updateItem("tiles",r,{color:f}))}
            ${i.preset?"":this._renderSourceField("tiles",i,r,c)}
            ${this._textField(this._t("space.f_unit"),i.unit??"",f=>this._updateItem("tiles",r,{unit:f||void 0}))}
            ${this._textField(this._t("space.f_secondary"),i.secondary||"",f=>this._updateItem("tiles",r,{secondary:f||void 0}))}
            ${this._renderItemActions("tiles",r)}
          </div>`:""}
    </div>`}_addTile(){let i=[...this._config.tiles||[]],r=Zs("tile");i.push({id:r,slot:Xs[0]}),this._setList("tiles",i),this._sel=r}_tabs(){return this._config.tabs&&this._config.tabs.length?this._config.tabs:[{id:"home",icon:"mdi:home",label:"Home"}]}_renderTabs(){let i=this._tabs(),r=this._config.show_rail??!0;return F`<div class="row">
        <ha-icon icon="mdi:dock-left"></ha-icon>
        <span class="row-label">${this._t("space.rail_show")}</span>
        <ha-switch
          .checked=${r}
          @change=${n=>this._set("show_rail",n.target.checked,!0)}
        ></ha-switch>
      </div>
      ${r?this._renderRailSettings(i):""}`}_renderRailSettings(i){return F`<div class="section">
        <ha-icon icon="mdi:tune-variant"></ha-icon>${this._t("space.rail_style")}
      </div>
      <div class="row">
        <ha-icon icon="mdi:label-outline"></ha-icon>
        <span class="row-label">${this._t("space.rail_labels")}</span>
        <ha-switch
          .checked=${this._config.rail_labels??!1}
          @change=${r=>this._set("rail_labels",r.target.checked,!1)}
        ></ha-switch>
      </div>
      ${ki(this,this._t("space.rail_align"),["start","center","end"],this._config.rail_align||"start",r=>this._set("rail_align",r,"start"),r=>this._t(`space.align.${r}`))}
      ${this._scaleField(this._t("space.f_rail_size"),this._config.rail_size,r=>this._set("rail_size",r,1))}
      <div class="section">
        <ha-icon icon="mdi:tab"></ha-icon>${this._t("space.rail_tabs")}
      </div>
      <div class="hint top-hint">${this._t("space.tabs_hint")}</div>
      ${i.map((r,n)=>n===0?this._renderHomeTab(r):this._renderTabEditor(r,n))}
      <button class="add-btn" @click=${this._addTab}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tab")}</span>
      </button>`}_renderHomeTab(i){return F`<div class="item">
      <div class="item-head static">
        <ha-icon icon=${i.icon||"mdi:home"}></ha-icon>
        <span class="item-title">${i.label||this._t("house.home")}</span>
        <span class="badge">${this._t("space.home_tab")}</span>
      </div>
    </div>`}_renderTabEditor(i,r){let n=this._sel===`tab${r}`;return F`<div class="item ${n?"open":""}">
      <div class="item-head" @click=${()=>this._sel=n?null:`tab${r}`}>
        <ha-icon icon=${i.icon||"mdi:view-dashboard-outline"}></ha-icon>
        <span class="item-title">${i.label||i.path||`Tab ${r}`}</span>
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?F`<div class="item-body">
            ${this._textField(this._t("space.f_label"),i.label||"",c=>this._updateItem("tabs",r,{label:c}))}
            ${this._iconField(this._t("space.f_icon"),i.icon,c=>this._updateItem("tabs",r,{icon:c}))}
            ${this._textField(this._t("space.f_path"),i.path||"",c=>this._updateItem("tabs",r,{path:c}),this._t("space.path_hint"))}
            <button class="del-btn" @click=${()=>this._removeItem("tabs",r)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`:""}
    </div>`}_addTab(){let i=[...this._tabs()];i.push({id:Zs("tab"),icon:"mdi:view-dashboard-outline",label:"View",path:""}),this._setList("tabs",i),this._sel=`tab${i.length-1}`}_renderReorder(i,r){return F`<span class="reorder">
      <button @click=${n=>{n.stopPropagation(),this._moveItem(i,r,-1)}}>
        <ha-icon icon="mdi:arrow-up"></ha-icon>
      </button>
      <button @click=${n=>{n.stopPropagation(),this._moveItem(i,r,1)}}>
        <ha-icon icon="mdi:arrow-down"></ha-icon>
      </button>
    </span>`}_renderItemActions(i,r){return F`<div class="item-actions">
      <button class="dup-btn" @click=${()=>this._duplicateItem(i,r)}>
        <ha-icon icon="mdi:content-copy"></ha-icon><span>${this._t("space.duplicate")}</span>
      </button>
      <button class="del-btn" @click=${()=>this._removeItem(i,r)}>
        <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
      </button>
    </div>`}_duplicateItem(i,r){let n=[...this._config[i]||[]];if(!n[r])return;let c={...n[r],id:Zs(i==="overlays"?"ov":"tile")};i==="overlays"&&(c.x=Math.min(100,(c.x??50)+4),c.y=Math.min(100,(c.y??50)+4)),n.splice(r+1,0,c),this._setList(i,n),this._sel=c.id}_textField(i,r,n,c){return F`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:r??""}}
      .schema=${[{name:"value",selector:{text:{}}}]}
      .computeLabel=${()=>i}
      .computeHelper=${()=>c||""}
      @value-changed=${f=>{f.stopPropagation(),n(f.detail.value.value??"")}}
    ></ha-form>`}_iconField(i,r,n){return F`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:r??""}}
      .schema=${[{name:"value",selector:{icon:{}}}]}
      .computeLabel=${()=>i}
      @value-changed=${c=>{c.stopPropagation(),n(c.detail.value.value||void 0)}}
    ></ha-form>`}_colorField(i,r,n,c){return F`<div class="color-field">
      <ha-form
        class="field"
        .hass=${this.hass}
        .data=${{value:Gn(r)??Gn(c)}}
        .schema=${[{name:"value",selector:{color_rgb:{}}}]}
        .computeLabel=${()=>i}
        @value-changed=${f=>{f.stopPropagation();let x=f.detail.value.value;n(Array.isArray(x)?`rgb(${x[0]}, ${x[1]}, ${x[2]})`:void 0)}}
      ></ha-form>
      ${r?F`<button
            class="color-clear"
            title=${this._t("space.clear_color")}
            @click=${()=>n(void 0)}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>`:""}
    </div>`}_numField(i,r,n){return F`<ha-form
      class="field num"
      .hass=${this.hass}
      .data=${{value:r}}
      .schema=${[{name:"value",selector:{number:{min:0,max:100,mode:"box"}}}]}
      .computeLabel=${()=>i}
      @value-changed=${c=>{let f=Number(c.detail.value.value);Number.isFinite(f)&&n(Math.max(0,Math.min(100,Math.round(f))))}}
    ></ha-form>`}_scaleField(i,r,n){return F`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{value:r??1}}
      .schema=${[{name:"value",selector:{number:{min:.5,max:3,step:.1,mode:"slider"}}}]}
      .computeLabel=${()=>i}
      @value-changed=${c=>{c.stopPropagation();let f=Number(c.detail.value.value);n(Number.isFinite(f)?f:1)}}
    ></ha-form>`}_onDragStart(i,r){i.preventDefault(),this._sel=r;let n=this.renderRoot.querySelector(".preview");this._drag={id:r,rect:n.getBoundingClientRect()},n.setPointerCapture?.(i.pointerId)}_onDragMove(i){if(!this._drag)return;let{rect:r,id:n}=this._drag,c=Math.max(0,Math.min(100,(i.clientX-r.left)/r.width*100)),f=Math.max(0,Math.min(100,(i.clientY-r.top)/r.height*100)),R=(this._config.overlays||[]).findIndex(U=>U.id===n);R<0||this._updateItem("overlays",R,{x:Math.round(c),y:Math.round(f)})}_onDragEnd(){this._drag=null}_deviceChanged(i){i.stopPropagation();let r={...this._config,...i.detail.value,type:`custom:${Yt}`};r.device||delete r.device,this._dispatch(r)}_set(i,r,n){let c={...this._config,type:`custom:${Yt}`};r===n||r===""||r==null?delete c[i]:c[i]=r,this._dispatch(c)}_setList(i,r){let n={...this._config,type:`custom:${Yt}`};!r||!r.length?delete n[i]:n[i]=r,this._dispatch(n)}_updateItem(i,r,n){let c=[...i==="tabs"?this._tabs():this._config[i]||[]];if(!c[r])return;let f={...c[r],...n};for(let x of Object.keys(f))f[x]===void 0&&delete f[x];c[r]=f,this._setList(i,c)}_removeItem(i,r){let n=[...i==="tabs"?this._tabs():this._config[i]||[]];n.splice(r,1),this._setList(i,n),this._sel=null}_moveItem(i,r,n){let c=[...this._config[i]||[]],f=r+n;f<0||f>=c.length||([c[r],c[f]]=[c[f],c[r]],this._setList(i,c))}_dispatch(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static get styles(){return[$i,Pt`
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
      .item-actions {
        display: flex;
        gap: 16px;
      }
      .add-btn,
      .dup-btn,
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
      .dup-btn {
        color: var(--primary-color);
      }
      .del-btn {
        color: var(--error-color, #db4437);
        align-self: flex-start;
      }
      .add-btn ha-icon,
      .dup-btn ha-icon,
      .del-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      `]}};customElements.define(It,Ds);customElements.define(`${It}-editor`,Hs);customElements.define(qt,Ws);customElements.define(`${qt}-editor`,Gs);customElements.define(Yt,Ks);customElements.define(`${Yt}-editor`,Js);window.customCards=window.customCards||[];window.customCards.push({type:It,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:qt,name:"EcoFlow House Card",description:"Whole-home energy-flow illustration: a house with the battery box and animated grid, solar, home and battery flows.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"},{type:Yt,name:"EcoFlow Space Card",description:"Full-screen whole-home dashboard: the house illustration with configurable floating overlays, a weather widget, stat tiles and a sidebar that embeds other Lovelace views.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
