var v="ecoflow-energy-card",Z="ecoflow_iot",ct="/ecoflow_iot";var X=globalThis,J=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol(),zt=new WeakMap,W=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(J&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=zt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&zt.set(e,t))}return t}toString(){return this.cssText}},Ft=o=>new W(typeof o=="string"?o:o+"",void 0,lt),j=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new W(e,o,lt)},Tt=(o,t)=>{if(J)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=X.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},dt=J?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Ft(e)})(o):o;var{is:me,defineProperty:ge,getOwnPropertyDescriptor:fe,getOwnPropertyNames:_e,getOwnPropertySymbols:ve,getPrototypeOf:be}=Object,Q=globalThis,Dt=Q.trustedTypes,ye=Dt?Dt.emptyScript:"",xe=Q.reactiveElementPolyfillSupport,B=(o,t)=>o,ht={toAttribute(o,t){switch(t){case Boolean:o=o?ye:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Ot=(o,t)=>!me(o,t),Ut={attribute:!0,type:String,converter:ht,reflect:!1,useDefault:!1,hasChanged:Ot};Symbol.metadata??=Symbol("metadata"),Q.litPropertyMetadata??=new WeakMap;var w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ge(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=fe(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let l=s?.call(this);r?.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ut}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;let t=be(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){let e=this.properties,i=[..._e(e),...ve(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(dt(s))}else t!==void 0&&e.push(dt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:ht).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ht;this._$Em=s;let l=n.fromAttribute(e,r.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let n=this.constructor;if(s===!1&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??Ot)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:n}=r,l=this[s];n!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,r,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[B("elementProperties")]=new Map,w[B("finalized")]=new Map,xe?.({ReactiveElement:w}),(Q.reactiveElementVersions??=[]).push("2.1.2");var vt=globalThis,Nt=o=>o,tt=vt.trustedTypes,It=tt?tt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Bt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,Kt="?"+S,$e=`<${Kt}>`,M=document,G=()=>M.createComment(""),V=o=>o===null||typeof o!="object"&&typeof o!="function",bt=Array.isArray,we=o=>bt(o)||typeof o?.[Symbol.iterator]=="function",pt=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,Ht=/>/g,C=RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Wt=/"/g,Gt=/^(?:script|style|textarea|title)$/i,yt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),a=yt(1),A=yt(2),Be=yt(3),z=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),jt=new WeakMap,P=M.createTreeWalker(M,129);function Vt(o,t){if(!bt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return It!==void 0?It.createHTML(t):t}var ke=(o,t)=>{let e=o.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",n=K;for(let l=0;l<e;l++){let c=o[l],p,h,d=-1,g=0;for(;g<c.length&&(n.lastIndex=g,h=n.exec(c),h!==null);)g=n.lastIndex,n===K?h[1]==="!--"?n=Rt:h[1]!==void 0?n=Ht:h[2]!==void 0?(Gt.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=C):h[3]!==void 0&&(n=C):n===C?h[0]===">"?(n=s??K,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,p=h[1],n=h[3]===void 0?C:h[3]==='"'?Wt:Lt):n===Wt||n===Lt?n=C:n===Rt||n===Ht?n=K:(n=C,s=void 0);let m=n===C&&o[l+1].startsWith("/>")?" ":"";r+=n===K?c+$e:d>=0?(i.push(p),c.slice(0,d)+Bt+c.slice(d)+S+m):c+S+(d===-2?l:m)}return[Vt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Y=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,l=t.length-1,c=this.parts,[p,h]=ke(t,e);if(this.el=o.createElement(p,i),P.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=P.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Bt)){let g=h[n++],m=s.getAttribute(d).split(S),f=/([.?@])?(.*)/.exec(g);c.push({type:1,index:r,name:f[2],strings:m,ctor:f[1]==="."?mt:f[1]==="?"?gt:f[1]==="@"?ft:N}),s.removeAttribute(d)}else d.startsWith(S)&&(c.push({type:6,index:r}),s.removeAttribute(d));if(Gt.test(s.tagName)){let d=s.textContent.split(S),g=d.length-1;if(g>0){s.textContent=tt?tt.emptyScript:"";for(let m=0;m<g;m++)s.append(d[m],G()),P.nextNode(),c.push({type:2,index:++r});s.append(d[g],G())}}}else if(s.nodeType===8)if(s.data===Kt)c.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(S,d+1))!==-1;)c.push({type:7,index:r}),d+=S.length-1}r++}}static createElement(t,e){let i=M.createElement("template");return i.innerHTML=t,i}};function O(o,t,e=o,i){if(t===z)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=V(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=O(o,s._$AS(o,t.values),s,i)),t}var ut=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);P.currentNode=s;let r=P.nextNode(),n=0,l=0,c=i[0];for(;c!==void 0;){if(n===c.index){let p;c.type===2?p=new q(r,r.nextSibling,this,t):c.type===1?p=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(p=new _t(r,this,t)),this._$AV.push(p),c=i[++l]}n!==c?.index&&(r=P.nextNode(),n++)}return P.currentNode=M,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},q=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),V(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):we(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Y.createElement(Vt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new ut(s,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=jt.get(t.strings);return e===void 0&&jt.set(t.strings,e=new Y(t)),e}k(t){bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new o(this.O(G()),this.O(G()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Nt(t).nextSibling;Nt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(r===void 0)t=O(this,t,e,0),n=!V(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{let l=t,c,p;for(t=r[0],c=0;c<r.length-1;c++)p=O(this,l[i+c],e,c),p===z&&(p=this._$AH[c]),n||=!V(p)||p!==this._$AH[c],p===_?t=_:t!==_&&(t+=(p??"")+r[c+1]),this._$AH[c]=p}n&&!s&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},mt=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},gt=class extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},ft=class extends N{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??_)===z)return;let i=this._$AH,s=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},_t=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}};var Se=vt.litHtmlPolyfillSupport;Se?.(Y,q),(vt.litHtmlVersions??=[]).push("3.3.3");var Yt=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new q(t.insertBefore(G(),r),r,void 0,e??{})}return s._$AI(o),s};var xt=globalThis,$=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};$._$litElement$=!0,$.finalized=!0,xt.litElementHydrateSupport?.({LitElement:$});var Ae=xt.litElementPolyfillSupport;Ae?.({LitElement:$});(xt.litElementVersions??=[]).push("4.2.2");var et=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function I(o){return et.some(t=>t.key===o)?`${ct}/devices/${o}.png`:null}function F(o){return typeof o=="string"&&o.startsWith(ct)&&o.endsWith(".png")?`${o.slice(0,-4)}.webp`:null}function qt(o){let t=Ee(o);return t?I(t):null}function Ee(o){if(!o)return null;let t=et.find(e=>e.match&&e.match.test(o));return t?t.key:null}var Ce={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power","soh","bat_temp","chg_rem_time","dsg_rem_time","full_energy","cycles","calendar_soh"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function Pe(o){return Object.values(o.entities||{}).filter(t=>t.platform===Z)}function Me(o){if(o.translation_key)return o.translation_key;let t=o.entity_id.split(".")[1],e=t.lastIndexOf("_");return e>=0?t.slice(e+1):t}function it(o){let t=new Map;for(let i of Pe(o))i.device_id&&(t.has(i.device_id)||t.set(i.device_id,[]),t.get(i.device_id).push(i));let e=[];for(let[i,s]of t)s.some(r=>Me(r)==="pv_total")&&e.push({deviceId:i,device:o.devices?.[i],ents:s});return e}function st(o,t){let e={};for(let i of t){let[s]=i.entity_id.split("."),r=i.translation_key;r&&(Ce[s]||[]).includes(r)&&(e[`${s}.${r}`]=i.entity_id)}if(!e["sensor.cms_batt_soc"])for(let i of t){if(!i.entity_id.startsWith("sensor."))continue;let s=o.states?.[i.entity_id];if(s?.attributes?.device_class==="battery"&&s?.attributes?.unit_of_measurement==="%"){e["sensor.cms_batt_soc"]=i.entity_id;break}}return e}async function $t(o){if(!o?.callWS)return{};try{return await o.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function Zt(o){let t=await $t(o),e=Object.keys(t);if(!e.length)return[];let i=[];try{i=await o.callWS({type:"config_entries/get"})||[]}catch{i=[]}let s=new Map(i.map(r=>[r.entry_id,r]));return e.map(r=>({id:r,title:s.get(r)?.title||s.get(r)?.domain||r,domain:s.get(r)?.domain||""}))}function Xt(o,t){let e=t===void 0?Object.keys(o||{}):t,i={};for(let s of e){let r=o?.[s]?.wh_hours;if(r)for(let[n,l]of Object.entries(r)){let c=Number(l);Number.isFinite(c)&&(i[n]=(i[n]||0)+c)}}return i}function wt(o,t=new Date){let e=t.getFullYear(),i=t.getMonth(),s=t.getDate(),r={};for(let[n,l]of Object.entries(o||{})){let c=new Date(n);Number.isNaN(c.getTime())||c.getFullYear()===e&&c.getMonth()===i&&c.getDate()===s&&(r[c.getHours()]=(r[c.getHours()]||0)+l)}return r}function Jt(o,t=new Date){let e=wt(o,t),i=Object.keys(e);return i.length?i.reduce((s,r)=>s+e[r],0):null}async function Qt(o,t,e,i){if(!o?.callWS||!t)return null;let s=new Date,n={type:"recorder/statistics_during_period",start_time:(e instanceof Date?e:new Date(s.getFullYear(),s.getMonth(),s.getDate())).toISOString(),statistic_ids:[t],period:"hour",types:["change"]};i instanceof Date&&(n.end_time=i.toISOString());try{let c=(await o.callWS(n))?.[t];if(!Array.isArray(c))return null;let p={};for(let h of c){let d=new Date(h.start),g=Number(h.change);Number.isNaN(d.getTime())||!Number.isFinite(g)||(p[d.getHours()]=(p[d.getHours()]||0)+g)}return p}catch{return null}}function k(o){return typeof o=="string"&&/\{[{%]/.test(o)}function T(o){return typeof o=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(o)}function b(o){let t=Number(o?.state);return Number.isFinite(t)?t:null}function D(o){return o==null||!Number.isFinite(o)?null:Math.abs(o)>=1e3?`${(o/1e3).toFixed(2)} kW`:`${Math.round(o)} W`}function ot(o){return o==null||!Number.isFinite(o)?{n:"\u2013",u:"W"}:Math.abs(o)>=1e3?{n:(o/1e3).toFixed(2),u:"kW"}:{n:String(Math.round(o)),u:"W"}}function te(o){return{n:o!=null&&Number.isFinite(o)?o.toFixed(1):"\u2013",u:"kWh"}}function kt(o,t=1){return o==null||!Number.isFinite(o)?null:Math.abs(o)>=1e3?`${(o/1e3).toFixed(t)} kWh`:`${Math.round(o)} Wh`}function ee(o){if(o==null||!Number.isFinite(o))return null;let t=Math.round(o);if(t<60)return`${t} min`;let e=Math.floor(t/60);if(e<24){let r=t%60;return r?`${e} h ${r} min`:`${e} h`}let i=Math.floor(e/24),s=e%24;return s?`${i} d ${s} h`:`${i} d`}var ie=!1;async function rt(){if(!ie){ie=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var se={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off"},battery:{title:"Battery",idle:"Idle",health:"Health",calendar_health:"Calendar health",temperature:"Temperature",time_to_full:"Time to full",time_to_empty:"Time to empty",capacity:"Capacity",cycles:"Cycles"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today."},page:{appearance:"Appearance",entities:"Entities",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}}};var oe={card:{no_device:"Kein EcoFlow Stream-Ger\xE4t gefunden. Richten Sie zuerst die EcoFlow IoT-Integration ein.",device:"EcoFlow Stream",solar:"Solar",grid:"Netz",grid_import:"Bezug",grid_export:"Einspeisung",grid_idle:"Netz inaktiv",battery:"Batterie",charging:"L\xE4dt",discharging:"Entl\xE4dt",today:"Solar heute",produced:"erzeugt",forecast:"Prognose",of_forecast:"{pct}% der Prognose",exceeded:"Prognose erreicht",reserve:"Reserve",charge_limit:"Laden \u2264",discharge_limit:"Entladen \u2265",ac1:"AC 1",ac2:"AC 2",off:"Aus"},battery:{title:"Batterie",idle:"Inaktiv",health:"Zustand",calendar_health:"Kalenderzustand",temperature:"Temperatur",time_to_full:"Zeit bis voll",time_to_empty:"Zeit bis leer",capacity:"Kapazit\xE4t",cycles:"Zyklen"},confirm:{title:"Steckdose ausschalten?",ac_off:"{name} ausschalten? Alles, was daran angeschlossen ist, verliert die Stromversorgung.",cancel:"Abbrechen",turn_off:"Ausschalten"},panels:{title:"Solarmodule",panel:"Modul {n}",total:"Gesamt",none:"F\xFCr dieses Ger\xE4t sind keine Daten je Solarmodul verf\xFCgbar."},editor:{device:"EcoFlow-Ger\xE4t",automatic:"Automatisch",image:"Ger\xE4tebild",entity:"Entit\xE4t",value_template:"Wert / Vorlage",mode_auto:"Auto",mode_entity:"Entit\xE4t",mode_custom:"Benutzerdefiniert",auto_value:"Automatisch erkannt: {value}",not_found:"nicht gefunden",overridden:"{n} \xFCberschrieben",shown:"Angezeigt",nothing_shown:"Nichts angezeigt",panel:"Modul {n}",panel_name:"Modulname",panel_entity:"Leistungssensor",panel_hidden:"Auf der Karte ausgeblendet.",panels_hint:"Benennen Sie ein Modul um, weisen Sie ihm einen anderen Sensor zu oder blenden Sie es aus der Aufschl\xFCsselung aus. Mit dem Schalter zeigen oder verbergen Sie jedes Modul.",panels_count:"{n} Module",panels_hidden:"{n} ausgeblendet",loading:"L\xE4dt\u2026",forecast_hint:"W\xE4hlen Sie, welche Solarprognose-Anbieter verwendet werden \u2014 dieselben, die im Energie-Dashboard von Home Assistant eingerichtet sind (Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule).",forecast_none:"Keine Solarprognose konfiguriert. F\xFCgen Sie unter Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule eine Prognose hinzu, dann erscheint sie hier.",forecast_none_short:"Nicht konfiguriert",forecast_selected:"{n} von {total} Anbietern",none:"Nicht festgelegt",collection_key:"Energie-Sammlungsschl\xFCssel",collection_hint:"Optional. Um einem in einer Energie-Zeitraumauswahl-Karte gew\xE4hlten Datum zu folgen (Energie-Datumsauswahl), geben Sie hier denselben Sammlungsschl\xFCssel ein wie auf jener Karte \u2014 er beginnt mit \u201Eenergy_\u201C; verwenden Sie \u201Eenergy\u201C f\xFCr eine Auswahl, die auf ihrem Standardschl\xFCssel belassen wurde. Leer lassen, um immer heute anzuzeigen."},page:{appearance:"Darstellung",entities:"Entit\xE4ten",panels:"Solarmodule",forecast:"Solarprognose",advanced:"Erweitert"},toggle:{show_image:"Ger\xE4tebild anzeigen",show_today:"Heutige Erzeugung anzeigen",show_grid:"Netzleistung anzeigen",show_ac:"AC-Steckdosen anzeigen",show_panels:"F\xFCr Aufschl\xFCsselung je Modul auf Solarleistung tippen",show_forecast:"Heutige Erzeugung mit der Prognose vergleichen"},short:{show_image:"Bild",show_today:"Heute",show_grid:"Netz",show_ac:"AC-Steckdosen",show_panels:"Module",show_forecast:"Prognose"},slot:{sensor:{cms_batt_soc:"Batteriestand",bat_power:"Batterieleistung (Lade-/Entladegeschwindigkeit)",pv_total:"Solarleistung",grid_power:"Netzleistung",solar_energy:"Solarenergie (Quelle f\xFCr Tagessumme)",pv1_power:"Solarmodul 1",pv2_power:"Solarmodul 2",pv3_power:"Solarmodul 3",pv4_power:"Solarmodul 4",schuko1_power:"AC-Steckdose 1 Leistung",schuko2_power:"AC-Steckdose 2 Leistung",forecast_today:"Prognose-Entit\xE4t (erwartete Erzeugung heute)"},number:{max_charge_soc:"Ladelimit",min_discharge_soc:"Entladelimit",backup_reserve:"Notstromreserve"},switch:{ac1:"AC-Steckdose 1",ac2:"AC-Steckdose 2"}}};var St={en:se,de:oe};function Te(o){return(o?.locale?.language||o?.language||"en").split("-")[0]}function re(o,t){let e=t.split(".").reduce((i,s)=>i?.[s],o);return typeof e=="string"?e:void 0}function E(o,t,e={}){let i=St[Te(o)]||St.en,s=re(i,t)??re(St.en,t)??t;for(let[r,n]of Object.entries(e))s=s.replace(`{${r}}`,n);return s}var ne=j`
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
  .batt-circle.charge {
    animation: battery-glow 1.8s ease-in-out infinite;
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--state-sensor-battery-high-color, #43a047) 36%, transparent);
  }
  .batt-circle.discharge {
    animation: battery-discharge-glow 1.8s ease-in-out infinite;
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--info-color, #2196f3) 36%, transparent);
  }
  @keyframes battery-glow {
    0%,
    100% {
      box-shadow:
        0 0 0 0 color-mix(in srgb, var(--state-sensor-battery-high-color, #43a047) 20%, transparent),
        0 0 16px color-mix(in srgb, var(--state-sensor-battery-high-color, #43a047) 28%, transparent);
    }
    50% {
      box-shadow:
        0 0 0 7px color-mix(in srgb, var(--state-sensor-battery-high-color, #43a047) 11%, transparent),
        0 0 26px color-mix(in srgb, var(--state-sensor-battery-high-color, #43a047) 48%, transparent);
    }
  }
  @keyframes battery-discharge-glow {
    0%,
    100% {
      box-shadow:
        0 0 0 0 color-mix(in srgb, var(--info-color, #2196f3) 20%, transparent),
        0 0 16px color-mix(in srgb, var(--info-color, #2196f3) 28%, transparent);
    }
    50% {
      box-shadow:
        0 0 0 7px color-mix(in srgb, var(--info-color, #2196f3) 11%, transparent),
        0 0 26px color-mix(in srgb, var(--info-color, #2196f3) 48%, transparent);
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
    transition: stroke-dashoffset 0.5s ease, stroke 0.3s ease;
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
  /* a spark that travels around the ring while charging / discharging */
  .ring-spin {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }
  .ring-spin.charge {
    stroke: var(--state-sensor-battery-high-color, #43a047);
    animation: ring-spin 1.5s linear infinite;
  }
  .ring-spin.discharge {
    stroke: var(--info-color, #2196f3);
    animation: ring-spin 1.9s linear infinite reverse;
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
  .stat-head ha-icon {
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
`;function At(o){let t=[];for(let e=1;e<=4;e++){let i=o._config.panels?.[e]||{};if(i.hidden)continue;let s=`sensor.pv${e}_power`,r=o._state(s);r&&t.push({i:e,watts:b(r),id:o._entityId(s),name:i.name||null})}return t}function ae(o){let t=(r,n)=>E(o.hass,r,n),e=At(o);if(!e.length)return a`<div class="empty">${t("panels.none")}</div>`;let i=Math.max(1,...e.map(r=>r.watts||0)),s=e.reduce((r,n)=>r+(n.watts||0),0);return a`<div class="panels">
    ${e.map(r=>a`<div
        class="panel-row clickable"
        @click=${()=>o._moreInfoId(r.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${r.name||t("panels.panel",{n:r.i})}
          </span>
          <span class="panel-val">${D(r.watts)??"\u2013"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,(r.watts||0)/i*100)}%"
          ></div>
        </div>
      </div>`)}
    <div class="panel-total">
      <span>${t("panels.total")}</span>
      <span>${D(s)??"\u2013"}</span>
    </div>
  </div>`}var Et=1e3,Ct=340,x={l:46,r:14,t:16,b:28};function ce(o,{actual:t,forecast:e,totalWh:i,showForecast:s,title:r}){let n=(u,y)=>E(o.hass,u,y),l=Et-x.l-x.r,c=Ct-x.t-x.b,p=u=>x.l+u/24*l,h=0;for(let u=0;u<24;u++)h=Math.max(h,(t[u]||0)/1e3),s&&(h=Math.max(h,(e[u]||0)/1e3));let d=De(h>0?h:.1),g=u=>x.t+c-u/d*c,m=l/24*.66,f=[];for(let u=0;u<24;u++){let y=(t[u]||0)/1e3;if(y<=0)continue;let L=p(u+.5)-m/2,Mt=g(y);f.push(A`<rect class="fc-actual" x=${L.toFixed(1)} y=${Mt.toFixed(1)}
        width=${m.toFixed(1)} height=${(x.t+c-Mt).toFixed(1)} rx="2"></rect>`)}let R=null;if(s){let u=[];for(let y=0;y<=24;y++)u.push(`${p(y).toFixed(1)},${g((e[y]||0)/1e3).toFixed(1)}`);R=A`<polyline class="fc-line" points=${u.join(" ")}></polyline>`}let U=[],H=4;for(let u=0;u<=H;u++){let y=d/H*u,L=g(y);U.push(A`<line class="fc-grid" x1=${x.l} y1=${L.toFixed(1)} x2=${Et-x.r} y2=${L.toFixed(1)}></line>`),U.push(A`<text class="fc-axis fc-axis-y" x=${x.l-6} y=${(L+4).toFixed(1)}>${Ue(y)}</text>`)}let Pt=[];for(let u=0;u<=24;u+=4)Pt.push(A`<text class="fc-axis fc-axis-x" x=${p(u).toFixed(1)} y=${Ct-8}>${u}:00</text>`);return a`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${r||n("card.today")}</span>
      <span class="fc-graph-total"
        >${(i!=null?i/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    <svg class="chart" viewBox="0 0 ${Et} ${Ct}" preserveAspectRatio="xMidYMid meet" role="img">
      ${U}${Pt}
      <text class="fc-axis fc-unit" x=${x.l-6} y=${x.t-4}>kWh</text>
      ${f}${R}
    </svg>
    ${s?a`<div class="fc-graph-legend">
          <span class="lg lg-actual">${n("card.produced")}</span>
          <span class="lg lg-fc">${n("card.forecast")}</span>
        </div>`:""}
  </div>`}function De(o){let t=Math.pow(10,Math.floor(Math.log10(o))),e=o/t;return(e<=1?1:e<=2?2:e<=5?5:10)*t}function Ue(o){return o>=10?Math.round(o).toString():o.toFixed(1).replace(/\.0$/,"")}var Oe=300*1e3,nt=class extends ${static styles=ne;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),rt(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},Oe)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let t of Object.values(this._tmplUnsub||{}))typeof t=="function"&&t();this._tmplUnsub={}}setConfig(t){this._config=t||{}}static getConfigElement(){return document.createElement(`${v}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(t,e){return E(this.hass,t,e)}_show(t,e=!0){return this._config[t]??e}get _device(){let t=it(this.hass);return t.length?this._config.device&&t.find(e=>e.deviceId===this._config.device)||t[0]:null}_state(t){let e=this._config.entities?.[t];if(e){if(k(e)){let s=this._templateResults?.[e];return{state:s===void 0?"unknown":String(s),attributes:{}}}return T(e)?this.hass.states[e]:{state:e,attributes:{}}}let i=this._map?.[t];return i?this.hass.states[i]:void 0}_entityId(t){let e=this._config.entities?.[t];return e&&T(e)&&!k(e)?e:this._map?.[t]}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let t=this._entityId("sensor.solar_energy");if(!t||!this.hass)return;let{start:e,end:i}=this._dataRange(),s=await Qt(this.hass,t,e,i);this._hourly=s||{},this._todayWh=s?Object.values(s).reduce((r,n)=>r+(n||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await $t(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let t=new Date;return{start:new Date(t.getFullYear(),t.getMonth(),t.getDate()),end:t,ref:t}}_bindEnergyCollection(){let t=this._config.collection_key,e=t?`_${t}`:null;if(e!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=e,this._period=null),!e||this._collUnsub||!this.hass?.connection)return;let i=this.hass.connection[e];if(!i||typeof i.subscribe!="function")return;let s=()=>{this._period={start:i.start,end:i.end},this._refreshData()};this._collUnsub=i.subscribe(()=>s()),s()}_mergedForecast(){return Xt(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let t=Jt(this._mergedForecast(),this._dataRange().ref);return t!=null?t/1e3:null}_periodLabel(){let t=this._dataRange().ref,e=new Date;return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()?this._t("card.today"):t.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let t=[...Object.values(this._config.entities||{}),this._config.title].filter(e=>k(e));for(let e of t)if(!this._tmplUnsub[e]){this._tmplUnsub[e]=!0;try{this._tmplUnsub[e]=await this.hass.connection.subscribeMessage(i=>{this._templateResults[e]=i.result,this.requestUpdate()},{type:"render_template",template:e})}catch{this._templateResults[e]="error",this.requestUpdate()}}for(let e of Object.keys(this._tmplUnsub))if(!t.includes(e)){let i=this._tmplUnsub[e];typeof i=="function"&&i(),delete this._tmplUnsub[e],delete this._templateResults[e]}}_moreInfo(t){this._moreInfoId(this._entityId(t))}_moreInfoId(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}render(){if(!this.hass)return a``;let t=this._device;return t?(this._map=st(this.hass,t.ents),a`<ha-card>
      ${this._renderHead(t)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),ae(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),ce(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:wt(this._mergedForecast(),this._dataRange().ref),totalWh:this._todayWh,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0}),"large"):""}
      ${this._dialog==="battery"?this._dialogFrame(this._t("battery.title"),this._renderBatteryDetail()):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`):a`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(t,e,i="medium"){return a`<ha-adaptive-dialog
      open
      width=${i}
      header-title=${t}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${e}</div>
    </ha-adaptive-dialog>`}_imageSrc(t){let e=t?.device?.model;return this._config.image_url||(this._config.image?I(this._config.image):qt(e))}_renderHead(t){let e=this._config.title,i=e&&k(e)?String(this._templateResults?.[e]??""):e,s=t.device?.model,r=i||t.device?.name_by_user||t.device?.name||s||this._t("card.device"),n=this._imageSrc(t);return a`<div class="head">
      <div class="head-left">
        <div class="name">${r}</div>
        ${s&&s!==r?a`<div class="subtitle">${s}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle(n,r)}
    </div>`}_renderBatteryCircle(t,e){let i=this._state("sensor.cms_batt_soc"),s=this._show("show_image")&&t;if(!i&&!s)return"";let r=b(i),n=b(this._state("sensor.bat_power")),l=this._state("binary_sensor.battery_charging")?.state==="on"||n!=null&&n>1,c=!l&&n!=null&&n<-1,p=l?"charge":c?"discharge":r!=null&&r<=15?"low":"",h=l?"charge":c?"discharge":"",d=2*Math.PI*44,g=r!=null?Math.max(0,Math.min(100,r)):0,m=[{v:b(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:b(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:b(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(f=>f.v!=null);return a`<div
      class="batt-circle clickable ${h}"
      @click=${()=>this._dialog="battery"}
    >
      ${i?a`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${p}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${d.toFixed(1)};stroke-dashoffset:${(d*(1-g/100)).toFixed(1)}"
            ></circle>
            ${h?a`<circle
                  class="ring-spin ${h}"
                  cx="50"
                  cy="50"
                  r="44"
                  stroke-dasharray="16 261"
                ></circle>`:""}
            ${m.map(f=>{let R=Math.max(0,Math.min(100,f.v))/100*2*Math.PI,U=Math.sin(R),H=Math.cos(R);return A`<line
                class="ring-tick ${f.cls}"
                x1=${(50+39.5*U).toFixed(1)}
                y1=${(50-39.5*H).toFixed(1)}
                x2=${(50+48.5*U).toFixed(1)}
                y2=${(50-48.5*H).toFixed(1)}
              ><title>${f.label} ${Math.round(f.v)}%</title></line>`})}
          </svg>`:""}
      ${s?a`<picture
            >${F(t)?a`<source
                  srcset=${F(t)}
                  type="image/webp"
                />`:""}<img class="device-img" src="${t}" alt="${e}"
          /></picture>`:i?a`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${i}
            ></ha-state-icon>`:a`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${i&&(l||c)&&n!=null?a`<span class="batt-speed ${h}">
            <ha-icon
              icon=${l?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${D(Math.abs(n))}
          </span>`:""}
      ${i?a`<span class="batt-badge"
            >${r!=null?Math.round(r):"\u2013"}%</span
          >`:""}
    </div>`}_renderBatteryDetail(){let t=this._device,e=this._show("show_image")&&this._imageSrc(t),i=t?.device?.name||t?.device?.model||this._t("card.device"),s=b(this._state("sensor.cms_batt_soc")),r=b(this._state("sensor.bat_power")),n=this._state("binary_sensor.battery_charging")?.state==="on"||r!=null&&r>1,l=!n&&r!=null&&r<-1,c=n?"charge":l?"discharge":"",p=n?"mdi:flash":l?"mdi:battery-arrow-down":"mdi:battery",h=n?this._t("card.charging"):l?this._t("card.discharging"):this._t("battery.idle"),d=(n||l)&&r!=null?D(Math.abs(r)):null,g=[{slot:"sensor.soh",icon:"mdi:heart-pulse",label:this._t("battery.health")},{slot:"sensor.calendar_soh",icon:"mdi:calendar-heart",label:this._t("battery.calendar_health")},{slot:"sensor.bat_temp",icon:"mdi:thermometer",label:this._t("battery.temperature")},...n?[{slot:"sensor.chg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_full")}]:[],...l?[{slot:"sensor.dsg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_empty")}]:[],{slot:"sensor.full_energy",icon:"mdi:battery-high",label:this._t("battery.capacity")},{slot:"sensor.cycles",icon:"mdi:battery-sync",label:this._t("battery.cycles")}].map(m=>({...m,value:this._battTileValue(m.slot)})).filter(m=>m.value!=null);return a`<div class="batt-detail">
      <div class="batt-hero">
        ${e?a`<picture
              >${F(e)?a`<source srcset=${F(e)} type="image/webp" />`:""}<img class="batt-hero-img" src=${e} alt=${i}
            /></picture>`:a`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${s!=null?Math.round(s):"\u2013"}<span class="batt-hero-u">%</span></span
          >
          <span class="batt-hero-status ${c}">
            <ha-icon icon=${p}></ha-icon>${h}${d?` \xB7 ${d}`:""}
          </span>
        </div>
      </div>
      ${g.length?a`<div class="batt-grid">
            ${g.map(m=>{let f=this._entityId(m.slot);return a`<div
                class="batt-tile ${f?"clickable":""}"
                @click=${f?()=>this._moreInfoId(f):null}
              >
                <ha-icon icon=${m.icon}></ha-icon>
                <div class="batt-tile-text">
                  <span class="batt-tile-val">${m.value}</span>
                  <span class="batt-tile-label">${m.label}</span>
                </div>
              </div>`})}
          </div>`:""}
    </div>`}_battTileValue(t){let e=this._state(t),i=b(e);if(i==null)return null;let s=e.attributes?.unit_of_measurement||"";return s==="W"?D(i):s==="Wh"?kt(i):s==="kWh"?kt(i*1e3):s==="min"?ee(i):s==="%"?`${Math.round(i)}%`:s?`${Math.round(i)} ${s}`:String(Math.round(i))}_renderAc(){let t=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(e=>({...e,swState:this._state(e.sw),pwState:this._state(e.pw)})).filter(e=>e.swState||e.pwState);return t.length?a`<div class="ac">
      ${t.map(e=>{let i=e.swState?.state==="on",s=b(e.pwState);return a`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(e.pw)||this._entityId(e.sw))}
        >
          <ha-icon class="ac-icon ${i?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${e.label}</span>
            <span class="ac-power">
              ${e.swState&&!i?this._t("card.off"):s!=null?this._metric(ot(s)):e.pwState?"\u2014":""}
            </span>
          </div>
          ${e.swState?a`<ha-switch
                .checked=${i}
                @click=${r=>r.stopPropagation()}
                @change=${()=>this._toggleSwitch(e.sw,e.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(t,e){let i=this._entityId(t),s=i?this.hass.states[i]:null;!i||!s||(s.state==="on"?this._confirmAc={slot:t,label:e}:this.hass.callService("switch","turn_on",{entity_id:i}))}_renderConfirmAc(){let{label:t}=this._confirmAc,e=()=>this._confirmAc=null;return a`<ha-adaptive-dialog
      open
      width="small"
      header-title=${this._t("confirm.title")}
      @closed=${e}
    >
      <div class="confirm-body">
        <div class="confirm-text">
          ${this._t("confirm.ac_off",{name:t})}
        </div>
        <div class="confirm-actions">
          <button class="text-btn" @click=${e}>
            ${this._t("confirm.cancel")}
          </button>
          <button
            class="filled-btn danger"
            @click=${()=>{let i=this._entityId(this._confirmAc.slot);i&&this.hass.callService("switch","turn_off",{entity_id:i}),this._confirmAc=null}}
          >
            ${this._t("confirm.turn_off")}
          </button>
        </div>
      </div>
    </ha-adaptive-dialog>`}_metric(t){return a`<span class="metric"
      ><span class="metric-num">${t.n}</span
      ><span class="metric-unit">${t.u}</span></span
    >`}_renderStats(){let t=b(this._state("sensor.pv_total")),e=At(this),i=this._show("show_panels")&&e.length>0,s=this._state("sensor.grid_power"),r=b(s);return a`<div class="stats">
      <div
        class="stat solar ${i?"clickable":""}"
        @click=${i?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${i?a`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${this._metric(ot(t))}</div>
        ${i?a`<div class="stat-sub">
              ${e.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(r):a`<div></div>`}
    </div>`}_renderGrid(t){let e=t!=null&&t>1,i=t!=null&&t<-1,s=e?"import":i?"export":"",r=e?this._t("card.grid_import"):i?this._t("card.grid_export"):this._t("card.grid_idle");return a`<div
      class="stat grid ${s} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${i?"mdi:transmission-tower-export":e?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${this._metric(ot(t!=null?Math.abs(t):null))}
      </div>
      <div class="stat-sub">${r}</div>
    </div>`}_renderToday(){let t=this._todayWh!=null?this._todayWh/1e3:null,e=Object.keys(this._forecasts||{}).length>0,i=this._show("show_forecast")&&e?this._forecastTodayKWh():null,s=i!=null&&i>0,r=s&&t!=null?Math.min(100,Math.round(t/i*100)):null,n=r!=null&&r>=100;return a`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(te(t))}</span>
      </div>
      ${s?a`<div class="fc-bar">
              <div
                class="fc-fill ${n?"met":""}"
                style="width:${r}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${t!=null?t.toFixed(1):"\u2013"}</b> /
                ${i.toFixed(1)} kWh
              </span>
              <span>
                ${n?this._t("card.exceeded"):this._t("card.of_forecast",{pct:r??0})}
              </span>
            </div>`:""}
    </div>`}};function le(o,t){if(!t)return null;let e=o?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${t}/${e}icon.png`}var Ne=[{name:"device",selector:{device:{integration:Z}}}],de={appearance:[["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},he={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},pe=new Set,ue=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],Ie=4,at=class extends ${static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),rt()}setConfig(t){this._config=t||{}}_t(t,e){return E(this.hass,t,e)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,Zt(this.hass).then(t=>{this._providers=t}))}render(){if(!this.hass)return a``;let t=ue.find(e=>e.id===this._page);return t?this._renderSubpage(t):this._renderRoot()}_defaults(){let t=it(this.hass),e=this._config.device&&t.find(i=>i.deviceId===this._config.device)||t[0];return e?st(this.hass,e.ents):{}}_renderRoot(){return a`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Ne}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${ue.map(t=>a`<button
            class="nav-row"
            @click=${()=>this._page=t.id}
          >
            <ha-icon class="nav-icon" icon=${t.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`page.${t.id}`)}</span>
              <span class="nav-secondary">${this._summary(t.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`)}
      </div>`}_summary(t){if(t==="panels"){let n=this._detectedPanels(),l=n.filter(p=>this._config.panels?.[p]?.hidden).length,c=this._t("editor.panels_count",{n:n.length});return l&&(c+=` \xB7 ${this._t("editor.panels_hidden",{n:l})}`),c}if(t==="forecast"){let n=this._providers;if(n===void 0)return this._t("editor.automatic");if(!n.length)return this._t("editor.forecast_none_short");let l=this._config.forecast_config_entries,c=l===void 0?n.length:l.length;return this._t("editor.forecast_selected",{n:c,total:n.length})}if(t==="advanced")return this._config.collection_key||this._t("editor.none");let e=(he[t]||[]).filter(([n])=>this._config.entities?.[n]).length,i=e?` \xB7 ${this._t("editor.overridden",{n:e})}`:"",s=de[t]||[];if(!s.length)return e?this._t("editor.overridden",{n:e}):this._t("editor.automatic");let r=s.filter(([n,l])=>this._config[n]??l);return r.length?r.map(([n])=>this._t(`short.${n}`)).join(", ")+i:`${this._t("editor.nothing_shown")}${i}`}_renderSubpage(t){return a`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${t.id}`)}</span>
      </div>
      ${(de[t.id]||[]).map(([e,i,s])=>this._renderToggle(e,i,s))}
      ${t.id==="appearance"?this._renderImagePicker():t.id==="panels"?this._renderPanelsPage():t.id==="forecast"?this._renderForecastPage():t.id==="advanced"?this._renderAdvancedPage():(he[t.id]||[]).map(([e,i])=>this._renderSlot(e,i))}`}_renderImagePicker(){let t=this._config.image,e=this._config.image_url,i=this._config.show_image??!0;return a`<div class="section">
        <ha-icon icon="mdi:image-multiple-outline"></ha-icon>${this._t("editor.image")}
      </div>
      <div class=${i?"img-grid":"img-grid dim"}>
        <button
          class="img-opt ${!t&&!e?"on":""}"
          title=${this._t("editor.automatic")}
          @click=${()=>this._setImage(null)}
        >
          <span class="img-auto"><ha-icon icon="mdi:auto-fix"></ha-icon></span>
          <span class="img-label">${this._t("editor.automatic")}</span>
        </button>
        ${et.map(s=>a`<button
            class="img-opt ${t===s.key?"on":""}"
            title=${s.name}
            @click=${()=>this._setImage(s.key)}
          >
            <picture
              ><source
                srcset=${F(I(s.key))}
                type="image/webp"
              /><img
                src=${I(s.key)}
                loading="lazy"
                alt=${s.name} /></picture
            >
            <span class="img-label">${s.name}</span>
          </button>`)}
      </div>`}_setImage(t){let e={...this._config,type:`custom:${v}`};delete e.image_url,t?e.image=t:delete e.image,this._dispatch(e)}_renderAdvancedPage(){return a`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${t=>{t.stopPropagation(),this._setCollectionKey(t.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(t){let e={...this._config,type:`custom:${v}`};t?e.collection_key=t:delete e.collection_key,this._dispatch(e)}_renderForecastPage(){let t=this._providers;if(t===void 0)return a`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!t.length)return a`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let e=this._config.show_forecast??!0,i=this._config.forecast_config_entries,s=r=>i===void 0?!0:i.includes(r);return a`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${e?"":"dim"}>
        ${t.map(r=>a`<div class="row">
            ${this._renderBrand(r.domain)}
            <span class="row-label"
              >${r.title}<span class="row-sub">${r.domain}</span></span
            >
            <ha-switch
              .checked=${s(r.id)}
              .disabled=${!e}
              @change=${n=>this._toggleProvider(r.id,n.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(t){let e=le(this.hass,t);return a`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${e?a`<img
            class="brand"
            src=${e}
            @error=${i=>{i.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(t,e){let i=(this._providers||[]).map(n=>n.id),s=this._config.forecast_config_entries??i.slice();s=e?[...new Set([...s,t])]:s.filter(n=>n!==t);let r={...this._config,type:`custom:${v}`};s.length===i.length&&i.every(n=>s.includes(n))?delete r.forecast_config_entries:r.forecast_config_entries=s,this._dispatch(r)}_detectedPanels(){let t=this._defaults(),e=[];for(let i=1;i<=Ie;i++)(t[`sensor.pv${i}_power`]||this._config.entities?.[`sensor.pv${i}_power`])&&e.push(i);return e.length?e:[1,2,3,4]}_renderPanelsPage(){return a`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(t=>this._renderPanelConfig(t))}`}_renderPanelConfig(t){let e=this._config.panels?.[t]||{},i=!!e.hidden,s=`sensor.pv${t}_power`;return a`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${e.name||this._t("editor.panel",{n:t})}</span
        >
        <ha-switch
          .checked=${!i}
          @change=${r=>this._dispatch(this._withPanel(t,{hidden:!r.target.checked}))}
        ></ha-switch>
      </div>
      ${i?a`<div class="hint">${this._t("editor.panel_hidden")}</div>`:a`<ha-form
              .hass=${this.hass}
              .data=${{value:e.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${r=>{r.stopPropagation(),this._dispatch(this._withPanel(t,{name:r.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(s,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(t,e){let i={...this._config.panels||{}},s={...i[t]||{}};for(let[n,l]of Object.entries(e))l===""||l==null||l===!1?delete s[n]:s[n]=l;Object.keys(s).length?i[t]=s:delete i[t];let r={...this._config,panels:i,type:`custom:${v}`};return Object.keys(i).length||delete r.panels,r}_renderToggle(t,e,i){return a`<div class="row">
      <ha-icon icon=${i}></ha-icon>
      <span class="row-label">${this._t(`toggle.${t}`)}</span>
      <ha-switch
        .checked=${this._config[t]??e}
        @change=${s=>this._toggleDisplay(t,e,s.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(t,e){return this._modes[t]?this._modes[t]:e?T(e)&&!k(e)?"entity":"custom":pe.has(t)?"entity":"auto"}_renderModeChips(t,e){let i=pe.has(t)?["entity","custom"]:["auto","entity","custom"];return a`<div class="modes">
      ${i.map(s=>a`<button
          class="mode ${e===s?"on":""}"
          @click=${()=>{this._modes={...this._modes,[t]:s},s==="auto"&&this._setOverride(t,"")}}
        >
          ${this._t(`editor.mode_${s}`)}
        </button>`)}
    </div>`}_renderSlot(t,e,i){let s=this._config.entities?.[t]||"",r=this._slotMode(t,s),n=this._defaults()[t];return a`<div class="section">
        <ha-icon icon=${e}></ha-icon>${i||this._t(`slot.${t}`)}
      </div>
      ${this._renderModeChips(t,r)}
      ${r==="auto"?a`<div class="hint">
            ${this._t("editor.auto_value",{value:n||this._t("editor.not_found")})}
          </div>`:r==="entity"?a`<ha-form
              .hass=${this.hass}
              .data=${{value:T(s)&&!k(s)?s:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${l=>{l.stopPropagation(),this._setOverride(t,l.detail.value.value||"")}}
            ></ha-form>`:a`<ha-form
              .hass=${this.hass}
              .data=${{value:T(s)&&!k(s)?"":s}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${l=>{l.stopPropagation(),this._setOverride(t,l.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(t,e){let i={...this._config.entities||{}};e?i[t]=e:delete i[t];let s={...this._config,entities:i,type:`custom:${v}`};return Object.keys(i).length||delete s.entities,s}_setOverride(t,e){this._dispatch(this._withOverride(t,e))}_toggleDisplay(t,e,i){let s={...this._config,type:`custom:${v}`};i===e?delete s[t]:s[t]=i,this._dispatch(s)}_valueChanged(t){t.stopPropagation();let e={...this._config,...t.detail.value,type:`custom:${v}`};e.device||delete e.device,this._dispatch(e)}_dispatch(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}static get styles(){return j`
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
    `}};customElements.define(v,nt);customElements.define(`${v}-editor`,at);window.customCards=window.customCards||[];window.customCards.push({type:v,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
/*! Bundled license information:

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
