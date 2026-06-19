var _="ecoflow-energy-card",G="ecoflow_iot",St="/ecoflow_iot";var q=globalThis,Y=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),At=new WeakMap,R=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Y&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=At.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&At.set(e,t))}return t}toString(){return this.cssText}},Et=i=>new R(typeof i=="string"?i:i+"",void 0,st),z=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new R(e,i,st)},kt=(i,t)=>{if(Y)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),o=q.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},ot=Y?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Et(e)})(i):i;var{is:re,defineProperty:ne,getOwnPropertyDescriptor:ae,getOwnPropertyNames:ce,getOwnPropertySymbols:le,getPrototypeOf:de}=Object,V=globalThis,Ct=V.trustedTypes,he=Ct?Ct.emptyScript:"",pe=V.reactiveElementPolyfillSupport,D=(i,t)=>i,it={toAttribute(i,t){switch(t){case Boolean:i=i?he:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Tt=(i,t)=>!re(i,t),Pt={attribute:!0,type:String,converter:it,reflect:!1,useDefault:!1,hasChanged:Tt};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&ne(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){let{get:o,set:r}=ae(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){let c=o?.call(this);r?.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pt}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let t=de(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let e=this.properties,s=[...ce(e),...le(e)];for(let o of s)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let o of s)e.unshift(ot(o))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:it).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let r=s.getPropertyOptions(o),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:it;this._$Em=o;let c=n.fromAttribute(e,r.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(t,e,s,o=!1,r){if(t!==void 0){let n=this.constructor;if(o===!1&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??Tt)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[o,r]of s){let{wrapped:n}=r,c=this[o];n!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[D("elementProperties")]=new Map,b[D("finalized")]=new Map,pe?.({ReactiveElement:b}),(V.reactiveElementVersions??=[]).push("2.1.2");var ht=globalThis,Mt=i=>i,K=ht.trustedTypes,Ot=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,zt="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Dt="?"+w,ue=`<${Dt}>`,P=document,j=()=>P.createComment(""),L=i=>i===null||typeof i!="object"&&typeof i!="function",pt=Array.isArray,fe=i=>pt(i)||typeof i?.[Symbol.iterator]=="function",rt=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ft=/-->/g,Nt=/>/g,k=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,Ht=/"/g,Wt=/^(?:script|style|textarea|title)$/i,ut=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),l=ut(1),U=ut(2),Ne=ut(3),T=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Rt=new WeakMap,C=P.createTreeWalker(P,129);function jt(i,t){if(!pt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}var ge=(i,t)=>{let e=i.length-1,s=[],o,r=t===2?"<svg>":t===3?"<math>":"",n=W;for(let c=0;c<e;c++){let a=i[c],d,u,h=-1,g=0;for(;g<a.length&&(n.lastIndex=g,u=n.exec(a),u!==null);)g=n.lastIndex,n===W?u[1]==="!--"?n=Ft:u[1]!==void 0?n=Nt:u[2]!==void 0?(Wt.test(u[2])&&(o=RegExp("</"+u[2],"g")),n=k):u[3]!==void 0&&(n=k):n===k?u[0]===">"?(n=o??W,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?k:u[3]==='"'?Ht:Ut):n===Ht||n===Ut?n=k:n===Ft||n===Nt?n=W:(n=k,o=void 0);let y=n===k&&i[c+1].startsWith("/>")?" ":"";r+=n===W?a+ue:h>=0?(s.push(d),a.slice(0,h)+zt+a.slice(h)+w+y):a+w+(h===-2?c:y)}return[jt(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},I=class i{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let r=0,n=0,c=t.length-1,a=this.parts,[d,u]=ge(t,e);if(this.el=i.createElement(d,s),C.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=C.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(zt)){let g=u[n++],y=o.getAttribute(h).split(w),E=/([.?@])?(.*)/.exec(g);a.push({type:1,index:r,name:E[2],strings:y,ctor:E[1]==="."?at:E[1]==="?"?ct:E[1]==="@"?lt:N}),o.removeAttribute(h)}else h.startsWith(w)&&(a.push({type:6,index:r}),o.removeAttribute(h));if(Wt.test(o.tagName)){let h=o.textContent.split(w),g=h.length-1;if(g>0){o.textContent=K?K.emptyScript:"";for(let y=0;y<g;y++)o.append(h[y],j()),C.nextNode(),a.push({type:2,index:++r});o.append(h[g],j())}}}else if(o.nodeType===8)if(o.data===Dt)a.push({type:2,index:r});else{let h=-1;for(;(h=o.data.indexOf(w,h+1))!==-1;)a.push({type:7,index:r}),h+=w.length-1}r++}}static createElement(t,e){let s=P.createElement("template");return s.innerHTML=t,s}};function F(i,t,e=i,s){if(t===T)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl,r=L(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(i),o._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=F(i,o._$AS(i,t.values),o,s)),t}var nt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??P).importNode(e,!0);C.currentNode=o;let r=C.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new B(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new dt(r,this,t)),this._$AV.push(d),a=s[++c]}n!==a?.index&&(r=C.nextNode(),n++)}return C.currentNode=P,o}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},B=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),L(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(jt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{let r=new nt(o,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new I(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,o=0;for(let r of t)o===e.length?e.push(s=new i(this.O(j()),this.O(j()),this,this.options)):s=e[o],s._$AI(r),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Mt(t).nextSibling;Mt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,o){let r=this.strings,n=!1;if(r===void 0)t=F(this,t,e,0),n=!L(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{let c=t,a,d;for(t=r[0],a=0;a<r.length-1;a++)d=F(this,c[s+a],e,a),d===T&&(d=this._$AH[a]),n||=!L(d)||d!==this._$AH[a],d===f?t=f:t!==f&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!o&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},ct=class extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},lt=class extends N{constructor(t,e,s,o,r){super(t,e,s,o,r),this.type=5}_$AI(t,e=this){if((t=F(this,t,e,0)??f)===T)return;let s=this._$AH,o=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},dt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}};var me=ht.litHtmlPolyfillSupport;me?.(I,B),(ht.litHtmlVersions??=[]).push("3.3.3");var Lt=(i,t,e)=>{let s=e?.renderBefore??t,o=s._$litPart$;if(o===void 0){let r=e?.renderBefore??null;s._$litPart$=o=new B(t.insertBefore(j(),r),r,void 0,e??{})}return o._$AI(i),o};var ft=globalThis,$=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};$._$litElement$=!0,$.finalized=!0,ft.litElementHydrateSupport?.({LitElement:$});var _e=ft.litElementPolyfillSupport;_e?.({LitElement:$});(ft.litElementVersions??=[]).push("4.2.2");var ve=[[/stream/i,"stream-ultra.png"]];function It(i){if(!i)return null;for(let[t,e]of ve)if(t.test(i))return`${St}/devices/${e}`;return null}var ye={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power"],binary_sensor:["battery_charging"]};function $e(i){return Object.values(i.entities||{}).filter(t=>t.platform===G)}function be(i){if(i.translation_key)return i.translation_key;let t=i.entity_id.split(".")[1],e=t.lastIndexOf("_");return e>=0?t.slice(e+1):t}function X(i){let t=new Map;for(let s of $e(i))s.device_id&&(t.has(s.device_id)||t.set(s.device_id,[]),t.get(s.device_id).push(s));let e=[];for(let[s,o]of t)o.some(r=>be(r)==="pv_total")&&e.push({deviceId:s,device:i.devices?.[s],ents:o});return e}function J(i,t){let e={};for(let s of t){let[o]=s.entity_id.split("."),r=s.translation_key;r&&(ye[o]||[]).includes(r)&&(e[`${o}.${r}`]=s.entity_id)}if(!e["sensor.cms_batt_soc"])for(let s of t){if(!s.entity_id.startsWith("sensor."))continue;let o=i.states?.[s.entity_id];if(o?.attributes?.device_class==="battery"&&o?.attributes?.unit_of_measurement==="%"){e["sensor.cms_batt_soc"]=s.entity_id;break}}return e}async function gt(i){if(!i?.callWS)return{};try{return await i.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function Bt(i){let t=await gt(i),e=Object.keys(t);if(!e.length)return[];let s=[];try{s=await i.callWS({type:"config_entries/get"})||[]}catch{s=[]}let o=new Map(s.map(r=>[r.entry_id,r]));return e.map(r=>({id:r,title:o.get(r)?.title||o.get(r)?.domain||r,domain:o.get(r)?.domain||""}))}function Gt(i,t){let e=t===void 0?Object.keys(i||{}):t,s={};for(let o of e){let r=i?.[o]?.wh_hours;if(r)for(let[n,c]of Object.entries(r)){let a=Number(c);Number.isFinite(a)&&(s[n]=(s[n]||0)+a)}}return s}function mt(i,t=new Date){let e=t.getFullYear(),s=t.getMonth(),o=t.getDate(),r={};for(let[n,c]of Object.entries(i||{})){let a=new Date(n);Number.isNaN(a.getTime())||a.getFullYear()===e&&a.getMonth()===s&&a.getDate()===o&&(r[a.getHours()]=(r[a.getHours()]||0)+c)}return r}function qt(i,t=new Date){let e=mt(i,t),s=Object.keys(e);return s.length?s.reduce((o,r)=>o+e[r],0):null}async function Yt(i,t){if(!i?.callWS||!t)return null;let e=new Date,s=new Date(e.getFullYear(),e.getMonth(),e.getDate());try{let r=(await i.callWS({type:"recorder/statistics_during_period",start_time:s.toISOString(),statistic_ids:[t],period:"hour",types:["change"]}))?.[t];if(!Array.isArray(r))return null;let n={};for(let c of r){let a=new Date(c.start),d=Number(c.change);Number.isNaN(a.getTime())||!Number.isFinite(d)||(n[a.getHours()]=(n[a.getHours()]||0)+d)}return n}catch{return null}}function x(i){return typeof i=="string"&&/\{[{%]/.test(i)}function M(i){return typeof i=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(i)}function O(i){let t=Number(i?.state);return Number.isFinite(t)?t:null}function S(i){return i==null||!Number.isFinite(i)?null:Math.abs(i)>=1e3?`${(i/1e3).toFixed(2)} kW`:`${Math.round(i)} W`}var Vt=!1;async function Z(){if(!Vt){Vt=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var Kt={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers"},page:{appearance:"Appearance",entities:"Entities",panels:"Solar panels",forecast:"Solar forecast"},toggle:{show_image:"Show device image",show_battery:"Show battery bar",show_today:"Show today's production",show_grid:"Show grid power",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_battery:"Battery",show_today:"Today",show_grid:"Grid",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",pv_total:"Solar power",grid_power:"Grid power",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",forecast_today:"Forecast entity (expected production today)"}}};var _t={en:Kt};function we(i){return(i?.locale?.language||i?.language||"en").split("-")[0]}function Xt(i,t){let e=t.split(".").reduce((s,o)=>s?.[o],i);return typeof e=="string"?e:void 0}function A(i,t,e={}){let s=_t[we(i)]||_t.en,o=Xt(s,t)??Xt(_t.en,t)??t;for(let[r,n]of Object.entries(e))o=o.replace(`{${r}}`,n);return o}async function Jt(i,t){if(!i?.callWS||!t)return null;let e=new Date,s=new Date(e.getFullYear(),e.getMonth(),e.getDate());try{let r=(await i.callWS({type:"recorder/statistics_during_period",start_time:s.toISOString(),statistic_ids:[t],period:"day",types:["change"]}))?.[t];if(!Array.isArray(r)||!r.length)return null;let n=0,c=!1;for(let a of r){let d=Number(a.change);Number.isFinite(d)&&(n+=d,c=!0)}return c?n:null}catch{return null}}var Zt=z`
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

  /* header: name + device image */
  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    min-height: 132px;
  }
  .head-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .name {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.15;
  }
  .subtitle {
    color: var(--secondary-text-color);
    font-size: 0.95em;
  }
  .device-img {
    max-width: 46%;
    max-height: 150px;
    object-fit: contain;
    margin: -10px -6px 0 0;
    filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.28));
  }

  /* battery */
  .battery {
    margin-top: 6px;
  }
  .batt-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .batt-row ha-icon,
  .batt-row ha-state-icon {
    --mdc-icon-size: 26px;
    color: var(--state-icon-color, var(--primary-text-color));
  }
  .soc {
    font-size: 1.9em;
    font-weight: 700;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    padding: 4px 10px;
    border-radius: 14px;
    font-weight: 600;
    font-size: 0.9em;
  }
  .chip ha-icon {
    --mdc-icon-size: 16px;
  }
  .chip.charge {
    color: var(--energy-solar-color, #ff9800);
    background: color-mix(
      in srgb,
      var(--energy-solar-color, #ff9800) 18%,
      transparent
    );
  }
  .chip.discharge {
    color: var(--state-sensor-battery-high-color, #43a047);
    background: color-mix(
      in srgb,
      var(--state-sensor-battery-high-color, #43a047) 18%,
      transparent
    );
  }
  .bar {
    height: 8px;
    border-radius: 4px;
    background: var(--divider-color);
    margin: 10px 0 4px;
    overflow: hidden;
    position: relative;
  }
  .fill {
    height: 100%;
    border-radius: 4px;
    background: var(--state-sensor-battery-high-color, #43a047);
    transition: width 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .fill.low {
    background: var(--error-color, #db4437);
  }
  .fill.charging::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 45%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 100%
    );
    animation: sweep 1.6s linear infinite;
  }
  @keyframes sweep {
    from {
      transform: translateX(-110%);
    }
    to {
      transform: translateX(330%);
    }
  }
  .reserve {
    position: absolute;
    top: -2px;
    bottom: -2px;
    width: 2px;
    background: var(--primary-text-color);
    opacity: 0.55;
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
    padding: 12px 14px;
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
    font-size: 1.5em;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .stat-sub {
    font-size: 0.82em;
    color: var(--secondary-text-color);
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
    --mdc-icon-size: 20px;
    color: var(--energy-solar-color, #ff9800);
    align-self: center;
  }
  .today-label {
    color: var(--secondary-text-color);
    font-size: 0.9em;
  }
  .today-value {
    margin-left: auto;
    font-size: 1.6em;
    font-weight: 800;
    color: var(--energy-solar-color, #ff9800);
  }
  .today-unit {
    font-size: 0.6em;
    font-weight: 600;
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
`;function vt(i){let t=[];for(let e=1;e<=4;e++){let s=i._config.panels?.[e]||{};if(s.hidden)continue;let o=`sensor.pv${e}_power`,r=i._state(o);r&&t.push({i:e,watts:O(r),id:i._entityId(o),name:s.name||null})}return t}function Qt(i){let t=(r,n)=>A(i.hass,r,n),e=vt(i);if(!e.length)return l`<div class="empty">${t("panels.none")}</div>`;let s=Math.max(1,...e.map(r=>r.watts||0)),o=e.reduce((r,n)=>r+(n.watts||0),0);return l`<div class="panels">
    ${e.map(r=>l`<div
        class="panel-row clickable"
        @click=${()=>i._moreInfoId(r.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${r.name||t("panels.panel",{n:r.i})}
          </span>
          <span class="panel-val">${S(r.watts)??"\u2013"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,(r.watts||0)/s*100)}%"
          ></div>
        </div>
      </div>`)}
    <div class="panel-total">
      <span>${t("panels.total")}</span>
      <span>${S(o)??"\u2013"}</span>
    </div>
  </div>`}var yt=1e3,$t=340,v={l:46,r:14,t:16,b:28};function te(i,{actual:t,forecast:e,totalWh:s,showForecast:o}){let r=(p,m)=>A(i.hass,p,m),n=yt-v.l-v.r,c=$t-v.t-v.b,a=p=>v.l+p/24*n,d=0;for(let p=0;p<24;p++)d=Math.max(d,(t[p]||0)/1e3),o&&(d=Math.max(d,(e[p]||0)/1e3));let u=Se(d>0?d:.1),h=p=>v.t+c-p/u*c,g=n/24*.66,y=[];for(let p=0;p<24;p++){let m=(t[p]||0)/1e3;if(m<=0)continue;let H=a(p+.5)-g/2,wt=h(m);y.push(U`<rect class="fc-actual" x=${H.toFixed(1)} y=${wt.toFixed(1)}
        width=${g.toFixed(1)} height=${(v.t+c-wt).toFixed(1)} rx="2"></rect>`)}let E=null;if(o){let p=[];for(let m=0;m<=24;m++)p.push(`${a(m).toFixed(1)},${h((e[m]||0)/1e3).toFixed(1)}`);E=U`<polyline class="fc-line" points=${p.join(" ")}></polyline>`}let et=[],bt=4;for(let p=0;p<=bt;p++){let m=u/bt*p,H=h(m);et.push(U`<line class="fc-grid" x1=${v.l} y1=${H.toFixed(1)} x2=${yt-v.r} y2=${H.toFixed(1)}></line>`),et.push(U`<text class="fc-axis fc-axis-y" x=${v.l-6} y=${(H+4).toFixed(1)}>${Ae(m)}</text>`)}let xt=[];for(let p=0;p<=24;p+=4)xt.push(U`<text class="fc-axis fc-axis-x" x=${a(p).toFixed(1)} y=${$t-8}>${p}:00</text>`);return l`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${r("card.today")}</span>
      <span class="fc-graph-total"
        >${(s!=null?s/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    <svg class="chart" viewBox="0 0 ${yt} ${$t}" preserveAspectRatio="xMidYMid meet" role="img">
      ${et}${xt}
      <text class="fc-axis fc-unit" x=${v.l-6} y=${v.t-4}>kWh</text>
      ${y}${E}
    </svg>
    ${o?l`<div class="fc-graph-legend">
          <span class="lg lg-actual">${r("card.produced")}</span>
          <span class="lg lg-fc">${r("card.forecast")}</span>
        </div>`:""}
  </div>`}function Se(i){let t=Math.pow(10,Math.floor(Math.log10(i))),e=i/t;return(e<=1?1:e<=2?2:e<=5?5:10)*t}function Ae(i){return i>=10?Math.round(i).toString():i.toFixed(1).replace(/\.0$/,"")}var Ee=300*1e3,Q=class extends ${static styles=Zt;static get properties(){return{hass:{},_config:{},_dialog:{state:!0}}}constructor(){super(),this._dialog=null,this._todayWh=void 0,this._forecasts={},this._forecastsFetched=!1,this._hourly=null}connectedCallback(){super.connectedCallback(),Z(),this._statsTimer=setInterval(()=>{this._refreshToday(),this._refreshForecast()},Ee)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer);for(let t of Object.values(this._tmplUnsub||{}))typeof t=="function"&&t();this._tmplUnsub={}}setConfig(t){this._config=t||{}}static getConfigElement(){return document.createElement(`${_}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(t,e){return A(this.hass,t,e)}_show(t,e=!0){return this._config[t]??e}get _device(){let t=X(this.hass);return t.length?this._config.device&&t.find(e=>e.deviceId===this._config.device)||t[0]:null}_state(t){let e=this._config.entities?.[t];if(e){if(x(e)){let o=this._templateResults?.[e];return{state:o===void 0?"unknown":String(o),attributes:{}}}return M(e)?this.hass.states[e]:{state:e,attributes:{}}}let s=this._map?.[t];return s?this.hass.states[s]:void 0}_entityId(t){let e=this._config.entities?.[t];return e&&M(e)&&!x(e)?e:this._map?.[t]}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&(this._syncTemplates(),this._todayWh===void 0&&this._refreshToday(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshToday(){let t=this._entityId("sensor.solar_energy");if(!t||!this.hass)return;let e=await Jt(this.hass,t);e!==this._todayWh&&(this._todayWh=e,this.requestUpdate())}async _refreshForecast(){this.hass&&(this._forecasts=await gt(this.hass),this.requestUpdate())}_mergedForecast(){return Gt(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let t=qt(this._mergedForecast());return t!=null?t/1e3:null}async _openToday(){this._dialog="today";let t=this._entityId("sensor.solar_energy");if(t&&this.hass){let e=await Yt(this.hass,t);e&&(this._hourly=e,this.requestUpdate())}}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let t=[...Object.values(this._config.entities||{}),this._config.title].filter(e=>x(e));for(let e of t)if(!this._tmplUnsub[e]){this._tmplUnsub[e]=!0;try{this._tmplUnsub[e]=await this.hass.connection.subscribeMessage(s=>{this._templateResults[e]=s.result,this.requestUpdate()},{type:"render_template",template:e})}catch{this._templateResults[e]="error",this.requestUpdate()}}for(let e of Object.keys(this._tmplUnsub))if(!t.includes(e)){let s=this._tmplUnsub[e];typeof s=="function"&&s(),delete this._tmplUnsub[e],delete this._templateResults[e]}}_moreInfo(t){this._moreInfoId(this._entityId(t))}_moreInfoId(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}render(){if(!this.hass)return l``;let t=this._device;return t?(this._map=J(this.hass,t.ents),l`<ha-card>
      ${this._renderHead(t)}
      ${this._show("show_battery")?this._renderBattery():""}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),Qt(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._t("card.today"),te(this,{actual:this._hourly||{},forecast:mt(this._mergedForecast()),totalWh:this._todayWh,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})):""}
    </ha-card>`):l`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(t,e){return l`<ha-dialog
      open
      header-title=${t}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${e}</div>
    </ha-dialog>`}_renderHead(t){let e=this._config.title,s=e&&x(e)?String(this._templateResults?.[e]??""):e,o=t.device?.model,r=s||t.device?.name_by_user||t.device?.name||o||this._t("card.device"),n=this._config.image_url||It(o);return l`<div class="head">
      <div class="head-left">
        <div class="name">${r}</div>
        ${o&&o!==r?l`<div class="subtitle">${o}</div>`:""}
      </div>
      ${this._show("show_image")&&n?l`<img class="device-img" src="${n}" alt="${r}" />`:""}
    </div>`}_renderBattery(){let t=this._state("sensor.cms_batt_soc");if(!t)return"";let e=O(t),s=O(this._state("sensor.bat_power")),o=this._state("binary_sensor.battery_charging")?.state==="on"||s!=null&&s>1,r=!o&&s!=null&&s<-1;return l`<div class="battery">
      <div
        class="batt-row clickable"
        @click=${()=>this._moreInfo("sensor.cms_batt_soc")}
      >
        <ha-state-icon .hass=${this.hass} .stateObj=${t}></ha-state-icon>
        <span class="soc">${e!=null?Math.round(e):"\u2013"}%</span>
        ${o&&s!=null?l`<span class="chip charge"
              ><ha-icon icon="mdi:flash"></ha-icon>${S(Math.abs(s))}</span
            >`:r&&s!=null?l`<span class="chip discharge"
                ><ha-icon icon="mdi:battery-arrow-down"></ha-icon>${S(Math.abs(s))}</span
              >`:""}
      </div>
      <div class="bar">
        <div
          class="fill ${o?"charging":""} ${e!=null&&e<=15?"low":""}"
          style="width:${e??0}%"
        ></div>
      </div>
    </div>`}_renderStats(){let t=O(this._state("sensor.pv_total")),e=vt(this),s=this._show("show_panels")&&e.length>0,o=this._state("sensor.grid_power"),r=O(o);return l`<div class="stats">
      <div
        class="stat solar ${s?"clickable":""}"
        @click=${s?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${s?l`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${S(t)??"\u2013"}</div>
        ${s?l`<div class="stat-sub">
              ${e.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(r):l`<div></div>`}
    </div>`}_renderGrid(t){let e=t!=null&&t>1,s=t!=null&&t<-1,o=e?"import":s?"export":"",r=e?this._t("card.grid_import"):s?this._t("card.grid_export"):this._t("card.grid_idle");return l`<div
      class="stat grid ${o} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${s?"mdi:transmission-tower-export":e?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${t!=null?S(Math.abs(t)):"\u2013"}
      </div>
      <div class="stat-sub">${r}</div>
    </div>`}_renderToday(){let t=this._todayWh!=null?this._todayWh/1e3:null,e=Object.keys(this._forecasts||{}).length>0,s=this._show("show_forecast")&&e?this._forecastTodayKWh():null,o=s!=null&&s>0,r=o&&t!=null?Math.min(100,Math.round(t/s*100)):null,n=r!=null&&r>=100;return l`<div class="today clickable" @click=${()=>this._openToday()}>
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._t("card.today")}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">
          ${t!=null?t.toFixed(1):"\u2013"}<span class="today-unit"
            >&nbsp;kWh</span
          >
        </span>
      </div>
      ${o?l`<div class="fc-bar">
              <div
                class="fc-fill ${n?"met":""}"
                style="width:${r}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${t!=null?t.toFixed(1):"\u2013"}</b> /
                ${s.toFixed(1)} kWh
              </span>
              <span>
                ${n?this._t("card.exceeded"):this._t("card.of_forecast",{pct:r??0})}
              </span>
            </div>`:""}
    </div>`}};var ke=[{name:"device",selector:{device:{integration:G}}}],ee={appearance:[["show_image",!0,"mdi:image-outline"],["show_battery",!0,"mdi:battery-high"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},se={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"]]},oe=new Set,ie=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"}],Ce=4,tt=class extends ${static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),Z()}setConfig(t){this._config=t||{}}_t(t,e){return A(this.hass,t,e)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,Bt(this.hass).then(t=>{this._providers=t}))}render(){if(!this.hass)return l``;let t=ie.find(e=>e.id===this._page);return t?this._renderSubpage(t):this._renderRoot()}_defaults(){let t=X(this.hass),e=this._config.device&&t.find(s=>s.deviceId===this._config.device)||t[0];return e?J(this.hass,e.ents):{}}_renderRoot(){return l`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ke}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${ie.map(t=>l`<button
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
      </div>`}_summary(t){if(t==="panels"){let n=this._detectedPanels(),c=n.filter(d=>this._config.panels?.[d]?.hidden).length,a=this._t("editor.panels_count",{n:n.length});return c&&(a+=` \xB7 ${this._t("editor.panels_hidden",{n:c})}`),a}if(t==="forecast"){let n=this._providers;if(n===void 0)return this._t("editor.automatic");if(!n.length)return this._t("editor.forecast_none_short");let c=this._config.forecast_config_entries,a=c===void 0?n.length:c.length;return this._t("editor.forecast_selected",{n:a,total:n.length})}let e=(se[t]||[]).filter(([n])=>this._config.entities?.[n]).length,s=e?` \xB7 ${this._t("editor.overridden",{n:e})}`:"",o=ee[t]||[];if(!o.length)return e?this._t("editor.overridden",{n:e}):this._t("editor.automatic");let r=o.filter(([n,c])=>this._config[n]??c);return r.length?r.map(([n])=>this._t(`short.${n}`)).join(", ")+s:`${this._t("editor.nothing_shown")}${s}`}_renderSubpage(t){return l`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${t.id}`)}</span>
      </div>
      ${(ee[t.id]||[]).map(([e,s,o])=>this._renderToggle(e,s,o))}
      ${t.id==="panels"?this._renderPanelsPage():t.id==="forecast"?this._renderForecastPage():(se[t.id]||[]).map(([e,s])=>this._renderSlot(e,s))}`}_renderForecastPage(){let t=this._providers;if(t===void 0)return l`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!t.length)return l`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let e=this._config.forecast_config_entries,s=o=>e===void 0?!0:e.includes(o);return l`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      ${t.map(o=>l`<div class="row">
          <ha-icon icon="mdi:weather-sunny"></ha-icon>
          <span class="row-label"
            >${o.title}<span class="row-sub">${o.domain}</span></span
          >
          <ha-switch
            .checked=${s(o.id)}
            @change=${r=>this._toggleProvider(o.id,r.target.checked)}
          ></ha-switch>
        </div>`)}`}_toggleProvider(t,e){let s=(this._providers||[]).map(n=>n.id),o=this._config.forecast_config_entries??s.slice();o=e?[...new Set([...o,t])]:o.filter(n=>n!==t);let r={...this._config,type:`custom:${_}`};o.length===s.length&&s.every(n=>o.includes(n))?delete r.forecast_config_entries:r.forecast_config_entries=o,this._dispatch(r)}_detectedPanels(){let t=this._defaults(),e=[];for(let s=1;s<=Ce;s++)(t[`sensor.pv${s}_power`]||this._config.entities?.[`sensor.pv${s}_power`])&&e.push(s);return e.length?e:[1,2,3,4]}_renderPanelsPage(){return l`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(t=>this._renderPanelConfig(t))}`}_renderPanelConfig(t){let e=this._config.panels?.[t]||{},s=!!e.hidden,o=`sensor.pv${t}_power`;return l`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${e.name||this._t("editor.panel",{n:t})}</span
        >
        <ha-switch
          .checked=${!s}
          @change=${r=>this._dispatch(this._withPanel(t,{hidden:!r.target.checked}))}
        ></ha-switch>
      </div>
      ${s?l`<div class="hint">${this._t("editor.panel_hidden")}</div>`:l`<ha-form
              .hass=${this.hass}
              .data=${{value:e.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${r=>{r.stopPropagation(),this._dispatch(this._withPanel(t,{name:r.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(o,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(t,e){let s={...this._config.panels||{}},o={...s[t]||{}};for(let[n,c]of Object.entries(e))c===""||c==null||c===!1?delete o[n]:o[n]=c;Object.keys(o).length?s[t]=o:delete s[t];let r={...this._config,panels:s,type:`custom:${_}`};return Object.keys(s).length||delete r.panels,r}_renderToggle(t,e,s){return l`<div class="row">
      <ha-icon icon=${s}></ha-icon>
      <span class="row-label">${this._t(`toggle.${t}`)}</span>
      <ha-switch
        .checked=${this._config[t]??e}
        @change=${o=>this._toggleDisplay(t,e,o.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(t,e){return this._modes[t]?this._modes[t]:e?M(e)&&!x(e)?"entity":"custom":oe.has(t)?"entity":"auto"}_renderModeChips(t,e){let s=oe.has(t)?["entity","custom"]:["auto","entity","custom"];return l`<div class="modes">
      ${s.map(o=>l`<button
          class="mode ${e===o?"on":""}"
          @click=${()=>{this._modes={...this._modes,[t]:o},o==="auto"&&this._setOverride(t,"")}}
        >
          ${this._t(`editor.mode_${o}`)}
        </button>`)}
    </div>`}_renderSlot(t,e,s){let o=this._config.entities?.[t]||"",r=this._slotMode(t,o),n=this._defaults()[t];return l`<div class="section">
        <ha-icon icon=${e}></ha-icon>${s||this._t(`slot.${t}`)}
      </div>
      ${this._renderModeChips(t,r)}
      ${r==="auto"?l`<div class="hint">
            ${this._t("editor.auto_value",{value:n||this._t("editor.not_found")})}
          </div>`:r==="entity"?l`<ha-form
              .hass=${this.hass}
              .data=${{value:M(o)&&!x(o)?o:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${c=>{c.stopPropagation(),this._setOverride(t,c.detail.value.value||"")}}
            ></ha-form>`:l`<ha-form
              .hass=${this.hass}
              .data=${{value:M(o)&&!x(o)?"":o}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${c=>{c.stopPropagation(),this._setOverride(t,c.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(t,e){let s={...this._config.entities||{}};e?s[t]=e:delete s[t];let o={...this._config,entities:s,type:`custom:${_}`};return Object.keys(s).length||delete o.entities,o}_setOverride(t,e){this._dispatch(this._withOverride(t,e))}_toggleDisplay(t,e,s){let o={...this._config,type:`custom:${_}`};s===e?delete o[t]:o[t]=s,this._dispatch(o)}_valueChanged(t){t.stopPropagation();let e={...this._config,...t.detail.value,type:`custom:${_}`};e.device||delete e.device,this._dispatch(e)}_dispatch(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}static get styles(){return z`
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
    `}};customElements.define(_,Q);customElements.define(`${_}-editor`,tt);window.customCards=window.customCards||[];window.customCards.push({type:_,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
