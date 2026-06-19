var m="ecoflow-energy-card",Y="ecoflow_iot",At="/ecoflow_iot";var G=globalThis,K=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),St=new WeakMap,N=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(K&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=St.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&St.set(e,t))}return t}toString(){return this.cssText}},Et=r=>new N(typeof r=="string"?r:r+"",void 0,st),R=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,o,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new N(e,r,st)},Ct=(r,t)=>{if(K)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),o=G.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,r.appendChild(s)}},ot=K?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Et(e)})(r):r;var{is:ne,defineProperty:ae,getOwnPropertyDescriptor:ce,getOwnPropertyNames:le,getOwnPropertySymbols:de,getPrototypeOf:he}=Object,q=globalThis,Pt=q.trustedTypes,pe=Pt?Pt.emptyScript:"",ue=q.reactiveElementPolyfillSupport,H=(r,t)=>r,it={toAttribute(r,t){switch(t){case Boolean:r=r?pe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Tt=(r,t)=>!ne(r,t),Mt={attribute:!0,type:String,converter:it,reflect:!1,useDefault:!1,hasChanged:Tt};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&ae(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){let{get:o,set:i}=ce(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){let c=o?.call(this);i?.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let t=he(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let e=this.properties,s=[...le(e),...de(e)];for(let o of s)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let o of s)e.unshift(ot(o))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ct(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:it).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let i=s.getPropertyOptions(o),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:it;this._$Em=o;let c=n.fromAttribute(e,i.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(t,e,s,o=!1,i){if(t!==void 0){let n=this.constructor;if(o===!1&&(i=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??Tt)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:i},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[o,i]of s){let{wrapped:n}=i,c=this[o];n!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,i,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[H("elementProperties")]=new Map,x[H("finalized")]=new Map,ue?.({ReactiveElement:x}),(q.reactiveElementVersions??=[]).push("2.1.2");var ht=globalThis,Ot=r=>r,V=ht.trustedTypes,Ft=V?V.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ht="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+A,fe=`<${Lt}>`,M=document,I=()=>M.createComment(""),j=r=>r===null||typeof r!="object"&&typeof r!="function",pt=Array.isArray,ge=r=>pt(r)||typeof r?.[Symbol.iterator]=="function",rt=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,zt=/>/g,C=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Nt=/"/g,It=/^(?:script|style|textarea|title)$/i,ut=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),l=ut(1),z=ut(2),ze=ut(3),T=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Rt=new WeakMap,P=M.createTreeWalker(M,129);function jt(r,t){if(!pt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ft!==void 0?Ft.createHTML(t):t}var me=(r,t)=>{let e=r.length-1,s=[],o,i=t===2?"<svg>":t===3?"<math>":"",n=L;for(let c=0;c<e;c++){let a=r[c],d,h,p=-1,f=0;for(;f<a.length&&(n.lastIndex=f,h=n.exec(a),h!==null);)f=n.lastIndex,n===L?h[1]==="!--"?n=Ut:h[1]!==void 0?n=zt:h[2]!==void 0?(It.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=C):h[3]!==void 0&&(n=C):n===C?h[0]===">"?(n=o??L,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?C:h[3]==='"'?Nt:Dt):n===Nt||n===Dt?n=C:n===Ut||n===zt?n=L:(n=C,o=void 0);let y=n===C&&r[c+1].startsWith("/>")?" ":"";i+=n===L?a+fe:p>=0?(s.push(d),a.slice(0,p)+Ht+a.slice(p)+A+y):a+A+(p===-2?c:y)}return[jt(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},W=class r{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let i=0,n=0,c=t.length-1,a=this.parts,[d,h]=me(t,e);if(this.el=r.createElement(d,s),P.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=P.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(Ht)){let f=h[n++],y=o.getAttribute(p).split(A),E=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:E[2],strings:y,ctor:E[1]==="."?at:E[1]==="?"?ct:E[1]==="@"?lt:U}),o.removeAttribute(p)}else p.startsWith(A)&&(a.push({type:6,index:i}),o.removeAttribute(p));if(It.test(o.tagName)){let p=o.textContent.split(A),f=p.length-1;if(f>0){o.textContent=V?V.emptyScript:"";for(let y=0;y<f;y++)o.append(p[y],I()),P.nextNode(),a.push({type:2,index:++i});o.append(p[f],I())}}}else if(o.nodeType===8)if(o.data===Lt)a.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(A,p+1))!==-1;)a.push({type:7,index:i}),p+=A.length-1}i++}}static createElement(t,e){let s=M.createElement("template");return s.innerHTML=t,s}};function F(r,t,e=r,s){if(t===T)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl,i=j(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=F(r,o._$AS(r,t.values),o,s)),t}var nt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??M).importNode(e,!0);P.currentNode=o;let i=P.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new B(i,i.nextSibling,this,t):a.type===1?d=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(d=new dt(i,this,t)),this._$AV.push(d),a=s[++c]}n!==a?.index&&(i=P.nextNode(),n++)}return P.currentNode=M,o}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},B=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),j(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ge(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=W.createElement(jt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{let i=new nt(o,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new W(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,o=0;for(let i of t)o===e.length?e.push(s=new r(this.O(I()),this.O(I()),this,this.options)):s=e[o],s._$AI(i),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Ot(t).nextSibling;Ot(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,o){let i=this.strings,n=!1;if(i===void 0)t=F(this,t,e,0),n=!j(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{let c=t,a,d;for(t=i[0],a=0;a<i.length-1;a++)d=F(this,c[s+a],e,a),d===T&&(d=this._$AH[a]),n||=!j(d)||d!==this._$AH[a],d===g?t=g:t!==g&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}n&&!o&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},ct=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},lt=class extends U{constructor(t,e,s,o,i){super(t,e,s,o,i),this.type=5}_$AI(t,e=this){if((t=F(this,t,e,0)??g)===T)return;let s=this._$AH,o=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==g&&(s===g||o);o&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},dt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}};var _e=ht.litHtmlPolyfillSupport;_e?.(W,B),(ht.litHtmlVersions??=[]).push("3.3.3");var Wt=(r,t,e)=>{let s=e?.renderBefore??t,o=s._$litPart$;if(o===void 0){let i=e?.renderBefore??null;s._$litPart$=o=new B(t.insertBefore(I(),i),i,void 0,e??{})}return o._$AI(r),o};var ft=globalThis,$=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};$._$litElement$=!0,$.finalized=!0,ft.litElementHydrateSupport?.({LitElement:$});var ve=ft.litElementPolyfillSupport;ve?.({LitElement:$});(ft.litElementVersions??=[]).push("4.2.2");var ye=[[/stream/i,"stream-ultra.png"]];function Bt(r){if(!r)return null;for(let[t,e]of ye)if(t.test(r))return`${At}/devices/${e}`;return null}var be={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function $e(r){return Object.values(r.entities||{}).filter(t=>t.platform===Y)}function xe(r){if(r.translation_key)return r.translation_key;let t=r.entity_id.split(".")[1],e=t.lastIndexOf("_");return e>=0?t.slice(e+1):t}function X(r){let t=new Map;for(let s of $e(r))s.device_id&&(t.has(s.device_id)||t.set(s.device_id,[]),t.get(s.device_id).push(s));let e=[];for(let[s,o]of t)o.some(i=>xe(i)==="pv_total")&&e.push({deviceId:s,device:r.devices?.[s],ents:o});return e}function J(r,t){let e={};for(let s of t){let[o]=s.entity_id.split("."),i=s.translation_key;i&&(be[o]||[]).includes(i)&&(e[`${o}.${i}`]=s.entity_id)}if(!e["sensor.cms_batt_soc"])for(let s of t){if(!s.entity_id.startsWith("sensor."))continue;let o=r.states?.[s.entity_id];if(o?.attributes?.device_class==="battery"&&o?.attributes?.unit_of_measurement==="%"){e["sensor.cms_batt_soc"]=s.entity_id;break}}return e}async function gt(r){if(!r?.callWS)return{};try{return await r.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function Yt(r){let t=await gt(r),e=Object.keys(t);if(!e.length)return[];let s=[];try{s=await r.callWS({type:"config_entries/get"})||[]}catch{s=[]}let o=new Map(s.map(i=>[i.entry_id,i]));return e.map(i=>({id:i,title:o.get(i)?.title||o.get(i)?.domain||i,domain:o.get(i)?.domain||""}))}function Gt(r,t){let e=t===void 0?Object.keys(r||{}):t,s={};for(let o of e){let i=r?.[o]?.wh_hours;if(i)for(let[n,c]of Object.entries(i)){let a=Number(c);Number.isFinite(a)&&(s[n]=(s[n]||0)+a)}}return s}function mt(r,t=new Date){let e=t.getFullYear(),s=t.getMonth(),o=t.getDate(),i={};for(let[n,c]of Object.entries(r||{})){let a=new Date(n);Number.isNaN(a.getTime())||a.getFullYear()===e&&a.getMonth()===s&&a.getDate()===o&&(i[a.getHours()]=(i[a.getHours()]||0)+c)}return i}function Kt(r,t=new Date){let e=mt(r,t),s=Object.keys(e);return s.length?s.reduce((o,i)=>o+e[i],0):null}async function qt(r,t,e,s){if(!r?.callWS||!t)return null;let o=new Date,n={type:"recorder/statistics_during_period",start_time:(e instanceof Date?e:new Date(o.getFullYear(),o.getMonth(),o.getDate())).toISOString(),statistic_ids:[t],period:"hour",types:["change"]};s instanceof Date&&(n.end_time=s.toISOString());try{let a=(await r.callWS(n))?.[t];if(!Array.isArray(a))return null;let d={};for(let h of a){let p=new Date(h.start),f=Number(h.change);Number.isNaN(p.getTime())||!Number.isFinite(f)||(d[p.getHours()]=(d[p.getHours()]||0)+f)}return d}catch{return null}}function w(r){return typeof r=="string"&&/\{[{%]/.test(r)}function O(r){return typeof r=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(r)}function b(r){let t=Number(r?.state);return Number.isFinite(t)?t:null}function k(r){return r==null||!Number.isFinite(r)?null:Math.abs(r)>=1e3?`${(r/1e3).toFixed(2)} kW`:`${Math.round(r)} W`}var Vt=!1;async function Z(){if(!Vt){Vt=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var Xt={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today."},page:{appearance:"Appearance",entities:"Entities",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_battery:"Show battery bar",battery_value_left:"Battery level beside the bar",show_battery_limits:"Show charge / discharge / reserve limits",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_battery:"Battery",battery_value_left:"Level left",show_battery_limits:"Limits",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}}};var _t={en:Xt};function ke(r){return(r?.locale?.language||r?.language||"en").split("-")[0]}function Jt(r,t){let e=t.split(".").reduce((s,o)=>s?.[o],r);return typeof e=="string"?e:void 0}function S(r,t,e={}){let s=_t[ke(r)]||_t.en,o=Jt(s,t)??Jt(_t.en,t)??t;for(let[i,n]of Object.entries(e))o=o.replace(`{${i}}`,n);return o}var Zt=R`
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
  }
  .head-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
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
  /* default: battery value to the left of the bar */
  .battery.value-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .battery.value-left .batt-value {
    flex: 0 0 auto;
  }
  .battery.value-left .batt-track {
    flex: 1;
    min-width: 0;
  }
  .batt-value {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .batt-value ha-icon,
  .batt-value ha-state-icon {
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
    height: 12px;
    border-radius: 6px;
    background: var(--divider-color);
    margin: 10px 0 4px;
    overflow: hidden;
    position: relative;
  }
  .fill {
    height: 100%;
    border-radius: 6px;
    background: var(--state-sensor-battery-high-color, #43a047);
    transition: width 0.4s ease;
    position: relative;
    z-index: 1;
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
  /* limit zones (behind the fill) and marker lines (on top) */
  .zone {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
  .zone.floor {
    left: 0;
    background: repeating-linear-gradient(
      45deg,
      rgba(127, 127, 127, 0.4) 0 4px,
      transparent 4px 8px
    );
  }
  .zone.cap {
    background: rgba(127, 127, 127, 0.28);
  }
  .mark {
    position: absolute;
    top: -2px;
    bottom: -2px;
    width: 2px;
    margin-left: -1px;
    z-index: 2;
    border-radius: 1px;
  }
  .mark.charge {
    background: var(--energy-solar-color, #ff9800);
  }
  .mark.discharge {
    background: var(--error-color, #db4437);
  }
  .mark.reserve {
    background: var(--primary-text-color);
    opacity: 0.7;
  }
  /* limit labels floating above their position on the bar; close ones are
   * grouped into a cluster so they sit next to each other */
  .batt-flags {
    position: relative;
    height: 19px;
    margin-top: 8px;
  }
  .flag-cluster {
    position: absolute;
    bottom: 0;
    display: inline-flex;
    gap: 6px;
    white-space: nowrap;
  }
  .flag {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-size: 0.78em;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    padding: 2px 4px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.15s ease;
  }
  .flag:hover {
    background: var(--secondary-background-color);
  }
  .flag ha-icon {
    --mdc-icon-size: 14px;
  }
  .flag.charge {
    color: var(--energy-solar-color, #ff9800);
  }
  .flag.discharge {
    color: var(--error-color, #db4437);
  }
  .flag.reserve {
    color: var(--primary-text-color);
  }

  /* AC sockets (stacked, compact, in the header's left column) */
  .ac {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 12px;
  }
  .ac-socket {
    display: flex;
    align-items: center;
    gap: 9px;
    background: var(--secondary-background-color);
    border-radius: 10px;
    padding: 5px 10px;
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
    font-size: 0.76em;
    line-height: 1.2;
  }
  .ac-power {
    font-weight: 700;
    font-size: 0.95em;
    color: var(--primary-text-color);
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
`;function vt(r){let t=[];for(let e=1;e<=4;e++){let s=r._config.panels?.[e]||{};if(s.hidden)continue;let o=`sensor.pv${e}_power`,i=r._state(o);i&&t.push({i:e,watts:b(i),id:r._entityId(o),name:s.name||null})}return t}function Qt(r){let t=(i,n)=>S(r.hass,i,n),e=vt(r);if(!e.length)return l`<div class="empty">${t("panels.none")}</div>`;let s=Math.max(1,...e.map(i=>i.watts||0)),o=e.reduce((i,n)=>i+(n.watts||0),0);return l`<div class="panels">
    ${e.map(i=>l`<div
        class="panel-row clickable"
        @click=${()=>r._moreInfoId(i.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${i.name||t("panels.panel",{n:i.i})}
          </span>
          <span class="panel-val">${k(i.watts)??"\u2013"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,(i.watts||0)/s*100)}%"
          ></div>
        </div>
      </div>`)}
    <div class="panel-total">
      <span>${t("panels.total")}</span>
      <span>${k(o)??"\u2013"}</span>
    </div>
  </div>`}var yt=1e3,bt=340,v={l:46,r:14,t:16,b:28};function te(r,{actual:t,forecast:e,totalWh:s,showForecast:o,title:i}){let n=(u,_)=>S(r.hass,u,_),c=yt-v.l-v.r,a=bt-v.t-v.b,d=u=>v.l+u/24*c,h=0;for(let u=0;u<24;u++)h=Math.max(h,(t[u]||0)/1e3),o&&(h=Math.max(h,(e[u]||0)/1e3));let p=Ae(h>0?h:.1),f=u=>v.t+a-u/p*a,y=c/24*.66,E=[];for(let u=0;u<24;u++){let _=(t[u]||0)/1e3;if(_<=0)continue;let D=d(u+.5)-y/2,kt=f(_);E.push(z`<rect class="fc-actual" x=${D.toFixed(1)} y=${kt.toFixed(1)}
        width=${y.toFixed(1)} height=${(v.t+a-kt).toFixed(1)} rx="2"></rect>`)}let $t=null;if(o){let u=[];for(let _=0;_<=24;_++)u.push(`${d(_).toFixed(1)},${f((e[_]||0)/1e3).toFixed(1)}`);$t=z`<polyline class="fc-line" points=${u.join(" ")}></polyline>`}let et=[],xt=4;for(let u=0;u<=xt;u++){let _=p/xt*u,D=f(_);et.push(z`<line class="fc-grid" x1=${v.l} y1=${D.toFixed(1)} x2=${yt-v.r} y2=${D.toFixed(1)}></line>`),et.push(z`<text class="fc-axis fc-axis-y" x=${v.l-6} y=${(D+4).toFixed(1)}>${Se(_)}</text>`)}let wt=[];for(let u=0;u<=24;u+=4)wt.push(z`<text class="fc-axis fc-axis-x" x=${d(u).toFixed(1)} y=${bt-8}>${u}:00</text>`);return l`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${i||n("card.today")}</span>
      <span class="fc-graph-total"
        >${(s!=null?s/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    <svg class="chart" viewBox="0 0 ${yt} ${bt}" preserveAspectRatio="xMidYMid meet" role="img">
      ${et}${wt}
      <text class="fc-axis fc-unit" x=${v.l-6} y=${v.t-4}>kWh</text>
      ${E}${$t}
    </svg>
    ${o?l`<div class="fc-graph-legend">
          <span class="lg lg-actual">${n("card.produced")}</span>
          <span class="lg lg-fc">${n("card.forecast")}</span>
        </div>`:""}
  </div>`}function Ae(r){let t=Math.pow(10,Math.floor(Math.log10(r))),e=r/t;return(e<=1?1:e<=2?2:e<=5?5:10)*t}function Se(r){return r>=10?Math.round(r).toString():r.toFixed(1).replace(/\.0$/,"")}var Ee=300*1e3,Q=class extends ${static styles=Zt;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),Z(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},Ee)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let t of Object.values(this._tmplUnsub||{}))typeof t=="function"&&t();this._tmplUnsub={}}setConfig(t){this._config=t||{}}static getConfigElement(){return document.createElement(`${m}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(t,e){return S(this.hass,t,e)}_show(t,e=!0){return this._config[t]??e}get _device(){let t=X(this.hass);return t.length?this._config.device&&t.find(e=>e.deviceId===this._config.device)||t[0]:null}_state(t){let e=this._config.entities?.[t];if(e){if(w(e)){let o=this._templateResults?.[e];return{state:o===void 0?"unknown":String(o),attributes:{}}}return O(e)?this.hass.states[e]:{state:e,attributes:{}}}let s=this._map?.[t];return s?this.hass.states[s]:void 0}_entityId(t){let e=this._config.entities?.[t];return e&&O(e)&&!w(e)?e:this._map?.[t]}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let t=this._entityId("sensor.solar_energy");if(!t||!this.hass)return;let{start:e,end:s}=this._dataRange(),o=await qt(this.hass,t,e,s);this._hourly=o||{},this._todayWh=o?Object.values(o).reduce((i,n)=>i+(n||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await gt(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let t=new Date;return{start:new Date(t.getFullYear(),t.getMonth(),t.getDate()),end:t,ref:t}}_bindEnergyCollection(){let t=this._config.collection_key,e=t?`_${t}`:null;if(e!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=e,this._period=null),!e||this._collUnsub||!this.hass?.connection)return;let s=this.hass.connection[e];if(!s||typeof s.subscribe!="function")return;let o=()=>{this._period={start:s.start,end:s.end},this._refreshData()};this._collUnsub=s.subscribe(()=>o()),o()}_mergedForecast(){return Gt(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let t=Kt(this._mergedForecast(),this._dataRange().ref);return t!=null?t/1e3:null}_periodLabel(){let t=this._dataRange().ref,e=new Date;return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()?this._t("card.today"):t.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let t=[...Object.values(this._config.entities||{}),this._config.title].filter(e=>w(e));for(let e of t)if(!this._tmplUnsub[e]){this._tmplUnsub[e]=!0;try{this._tmplUnsub[e]=await this.hass.connection.subscribeMessage(s=>{this._templateResults[e]=s.result,this.requestUpdate()},{type:"render_template",template:e})}catch{this._templateResults[e]="error",this.requestUpdate()}}for(let e of Object.keys(this._tmplUnsub))if(!t.includes(e)){let s=this._tmplUnsub[e];typeof s=="function"&&s(),delete this._tmplUnsub[e],delete this._templateResults[e]}}_moreInfo(t){this._moreInfoId(this._entityId(t))}_moreInfoId(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}render(){if(!this.hass)return l``;let t=this._device;return t?(this._map=J(this.hass,t.ents),l`<ha-card>
      ${this._renderHead(t)}
      ${this._show("show_battery")?this._renderBattery():""}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),Qt(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),te(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:mt(this._mergedForecast(),this._dataRange().ref),totalWh:this._todayWh,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`):l`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(t,e){return l`<ha-dialog
      open
      header-title=${t}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${e}</div>
    </ha-dialog>`}_renderHead(t){let e=this._config.title,s=e&&w(e)?String(this._templateResults?.[e]??""):e,o=t.device?.model,i=s||t.device?.name_by_user||t.device?.name||o||this._t("card.device"),n=this._config.image_url||Bt(o);return l`<div class="head">
      <div class="head-left">
        <div class="name">${i}</div>
        ${o&&o!==i?l`<div class="subtitle">${o}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._show("show_image")&&n?l`<img class="device-img" src="${n}" alt="${i}" />`:""}
    </div>`}_renderBattery(){let t=this._state("sensor.cms_batt_soc");if(!t)return"";let e=b(t),s=b(this._state("sensor.bat_power")),o=this._state("binary_sensor.battery_charging")?.state==="on"||s!=null&&s>1,i=!o&&s!=null&&s<-1,n=this._show("show_battery_limits"),c=n?b(this._state("number.max_charge_soc")):null,a=n?b(this._state("number.min_discharge_soc")):null,d=n?b(this._state("number.backup_reserve")):null,h=this._show("battery_value_left"),p=l`<div
      class="batt-value clickable"
      @click=${()=>this._moreInfo("sensor.cms_batt_soc")}
    >
      <ha-state-icon .hass=${this.hass} .stateObj=${t}></ha-state-icon>
      <span class="soc">${e!=null?Math.round(e):"\u2013"}%</span>
      ${o&&s!=null?l`<span class="chip charge"
            ><ha-icon icon="mdi:flash"></ha-icon>${k(Math.abs(s))}</span
          >`:i&&s!=null?l`<span class="chip discharge"
              ><ha-icon icon="mdi:battery-arrow-down"></ha-icon>${k(Math.abs(s))}</span
            >`:""}
    </div>`,f=l`<div class="batt-track">
      ${n?this._renderFlags(d,c,a):""}
      <div class="bar">
        ${a!=null&&a>0?l`<div class="zone floor" style="width:${a}%"></div>`:""}
        ${c!=null&&c<100?l`<div
              class="zone cap"
              style="left:${c}%;width:${100-c}%"
            ></div>`:""}
        <div
          class="fill ${o?"charging":""} ${e!=null&&e<=15?"low":""}"
          style="width:${e??0}%"
        ></div>
        ${a!=null?l`<div class="mark discharge" style="left:${a}%"></div>`:""}
        ${c!=null?l`<div class="mark charge" style="left:${c}%"></div>`:""}
        ${d!=null?l`<div class="mark reserve" style="left:${d}%"></div>`:""}
      </div>
    </div>`;return l`<div class="battery ${h?"value-left":""}">
      ${p}${f}
    </div>`}_renderFlags(t,e,s){let o=[];if(s!=null&&o.push({cls:"discharge",icon:"mdi:arrow-down-bold",value:s,label:this._t("card.discharge_limit"),slot:"number.min_discharge_soc"}),t!=null&&o.push({cls:"reserve",icon:"mdi:shield-home",value:t,label:this._t("card.reserve"),slot:"number.backup_reserve"}),e!=null&&o.push({cls:"charge",icon:"mdi:arrow-up-bold",value:e,label:this._t("card.charge_limit"),slot:"number.max_charge_soc"}),!o.length)return"";o.sort((c,a)=>c.value-a.value);let i=15,n=[];for(let c of o){let a=n[n.length-1],d=a&&a.items[a.items.length-1];d&&c.value-d.value<i?a.items.push(c):n.push({items:[c]})}return l`<div class="batt-flags">
      ${n.map(c=>{let a=Math.max(0,Math.min(100,c.items.reduce((h,p)=>h+p.value,0)/c.items.length)),d=a<=12?"0":a>=88?"-100%":"-50%";return l`<span
          class="flag-cluster"
          style="left:${a}%;transform:translateX(${d})"
        >
          ${c.items.map(h=>l`<span
              class="flag ${h.cls} clickable"
              title="${h.label} ${Math.round(h.value)}%"
              @click=${()=>this._moreInfo(h.slot)}
              ><ha-icon icon=${h.icon}></ha-icon>${Math.round(h.value)}%</span
            >`)}
        </span>`})}
    </div>`}_renderAc(){let t=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(e=>({...e,swState:this._state(e.sw),pwState:this._state(e.pw)})).filter(e=>e.swState||e.pwState);return t.length?l`<div class="ac">
      ${t.map(e=>{let s=e.swState?.state==="on",o=b(e.pwState);return l`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(e.pw)||this._entityId(e.sw))}
        >
          <ha-icon class="ac-icon ${s?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${e.label}</span>
            <span class="ac-power">
              ${e.swState&&!s?this._t("card.off"):k(o)??(e.pwState?"\u2014":"")}
            </span>
          </div>
          ${e.swState?l`<ha-switch
                .checked=${s}
                @click=${i=>i.stopPropagation()}
                @change=${()=>this._toggleSwitch(e.sw,e.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(t,e){let s=this._entityId(t),o=s?this.hass.states[s]:null;!s||!o||(o.state==="on"?this._confirmAc={slot:t,label:e}:this.hass.callService("switch","turn_on",{entity_id:s}))}_renderConfirmAc(){let{label:t}=this._confirmAc,e=()=>this._confirmAc=null;return l`<ha-dialog
      open
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
            @click=${()=>{let s=this._entityId(this._confirmAc.slot);s&&this.hass.callService("switch","turn_off",{entity_id:s}),this._confirmAc=null}}
          >
            ${this._t("confirm.turn_off")}
          </button>
        </div>
      </div>
    </ha-dialog>`}_renderStats(){let t=b(this._state("sensor.pv_total")),e=vt(this),s=this._show("show_panels")&&e.length>0,o=this._state("sensor.grid_power"),i=b(o);return l`<div class="stats">
      <div
        class="stat solar ${s?"clickable":""}"
        @click=${s?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${s?l`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${k(t)??"\u2013"}</div>
        ${s?l`<div class="stat-sub">
              ${e.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(i):l`<div></div>`}
    </div>`}_renderGrid(t){let e=t!=null&&t>1,s=t!=null&&t<-1,o=e?"import":s?"export":"",i=e?this._t("card.grid_import"):s?this._t("card.grid_export"):this._t("card.grid_idle");return l`<div
      class="stat grid ${o} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${s?"mdi:transmission-tower-export":e?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${t!=null?k(Math.abs(t)):"\u2013"}
      </div>
      <div class="stat-sub">${i}</div>
    </div>`}_renderToday(){let t=this._todayWh!=null?this._todayWh/1e3:null,e=Object.keys(this._forecasts||{}).length>0,s=this._show("show_forecast")&&e?this._forecastTodayKWh():null,o=s!=null&&s>0,i=o&&t!=null?Math.min(100,Math.round(t/s*100)):null,n=i!=null&&i>=100;return l`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
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
                style="width:${i}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${t!=null?t.toFixed(1):"\u2013"}</b> /
                ${s.toFixed(1)} kWh
              </span>
              <span>
                ${n?this._t("card.exceeded"):this._t("card.of_forecast",{pct:i??0})}
              </span>
            </div>`:""}
    </div>`}};function ee(r,t){if(!t)return null;let e=r?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${t}/${e}icon.png`}var Ce=[{name:"device",selector:{device:{integration:Y}}}],se={appearance:[["show_image",!0,"mdi:image-outline"],["show_battery",!0,"mdi:battery-high"],["battery_value_left",!0,"mdi:format-horizontal-align-left"],["show_battery_limits",!0,"mdi:battery-lock"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},oe={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["number.max_charge_soc","mdi:arrow-up-bold"],["number.min_discharge_soc","mdi:arrow-down-bold"],["number.backup_reserve","mdi:shield-home"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},ie=new Set,re=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],Pe=4,tt=class extends ${static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),Z()}setConfig(t){this._config=t||{}}_t(t,e){return S(this.hass,t,e)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,Yt(this.hass).then(t=>{this._providers=t}))}render(){if(!this.hass)return l``;let t=re.find(e=>e.id===this._page);return t?this._renderSubpage(t):this._renderRoot()}_defaults(){let t=X(this.hass),e=this._config.device&&t.find(s=>s.deviceId===this._config.device)||t[0];return e?J(this.hass,e.ents):{}}_renderRoot(){return l`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Ce}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${re.map(t=>l`<button
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
      </div>`}_summary(t){if(t==="panels"){let n=this._detectedPanels(),c=n.filter(d=>this._config.panels?.[d]?.hidden).length,a=this._t("editor.panels_count",{n:n.length});return c&&(a+=` \xB7 ${this._t("editor.panels_hidden",{n:c})}`),a}if(t==="forecast"){let n=this._providers;if(n===void 0)return this._t("editor.automatic");if(!n.length)return this._t("editor.forecast_none_short");let c=this._config.forecast_config_entries,a=c===void 0?n.length:c.length;return this._t("editor.forecast_selected",{n:a,total:n.length})}if(t==="advanced")return this._config.collection_key||this._t("editor.none");let e=(oe[t]||[]).filter(([n])=>this._config.entities?.[n]).length,s=e?` \xB7 ${this._t("editor.overridden",{n:e})}`:"",o=se[t]||[];if(!o.length)return e?this._t("editor.overridden",{n:e}):this._t("editor.automatic");let i=o.filter(([n,c])=>this._config[n]??c);return i.length?i.map(([n])=>this._t(`short.${n}`)).join(", ")+s:`${this._t("editor.nothing_shown")}${s}`}_renderSubpage(t){return l`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${t.id}`)}</span>
      </div>
      ${(se[t.id]||[]).map(([e,s,o])=>this._renderToggle(e,s,o))}
      ${t.id==="panels"?this._renderPanelsPage():t.id==="forecast"?this._renderForecastPage():t.id==="advanced"?this._renderAdvancedPage():(oe[t.id]||[]).map(([e,s])=>this._renderSlot(e,s))}`}_renderAdvancedPage(){return l`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${t=>{t.stopPropagation(),this._setCollectionKey(t.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(t){let e={...this._config,type:`custom:${m}`};t?e.collection_key=t:delete e.collection_key,this._dispatch(e)}_renderForecastPage(){let t=this._providers;if(t===void 0)return l`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!t.length)return l`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let e=this._config.show_forecast??!0,s=this._config.forecast_config_entries,o=i=>s===void 0?!0:s.includes(i);return l`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${e?"":"dim"}>
        ${t.map(i=>l`<div class="row">
            ${this._renderBrand(i.domain)}
            <span class="row-label"
              >${i.title}<span class="row-sub">${i.domain}</span></span
            >
            <ha-switch
              .checked=${o(i.id)}
              .disabled=${!e}
              @change=${n=>this._toggleProvider(i.id,n.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(t){let e=ee(this.hass,t);return l`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${e?l`<img
            class="brand"
            src=${e}
            @error=${s=>{s.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(t,e){let s=(this._providers||[]).map(n=>n.id),o=this._config.forecast_config_entries??s.slice();o=e?[...new Set([...o,t])]:o.filter(n=>n!==t);let i={...this._config,type:`custom:${m}`};o.length===s.length&&s.every(n=>o.includes(n))?delete i.forecast_config_entries:i.forecast_config_entries=o,this._dispatch(i)}_detectedPanels(){let t=this._defaults(),e=[];for(let s=1;s<=Pe;s++)(t[`sensor.pv${s}_power`]||this._config.entities?.[`sensor.pv${s}_power`])&&e.push(s);return e.length?e:[1,2,3,4]}_renderPanelsPage(){return l`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(t=>this._renderPanelConfig(t))}`}_renderPanelConfig(t){let e=this._config.panels?.[t]||{},s=!!e.hidden,o=`sensor.pv${t}_power`;return l`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${e.name||this._t("editor.panel",{n:t})}</span
        >
        <ha-switch
          .checked=${!s}
          @change=${i=>this._dispatch(this._withPanel(t,{hidden:!i.target.checked}))}
        ></ha-switch>
      </div>
      ${s?l`<div class="hint">${this._t("editor.panel_hidden")}</div>`:l`<ha-form
              .hass=${this.hass}
              .data=${{value:e.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${i=>{i.stopPropagation(),this._dispatch(this._withPanel(t,{name:i.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(o,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(t,e){let s={...this._config.panels||{}},o={...s[t]||{}};for(let[n,c]of Object.entries(e))c===""||c==null||c===!1?delete o[n]:o[n]=c;Object.keys(o).length?s[t]=o:delete s[t];let i={...this._config,panels:s,type:`custom:${m}`};return Object.keys(s).length||delete i.panels,i}_renderToggle(t,e,s){return l`<div class="row">
      <ha-icon icon=${s}></ha-icon>
      <span class="row-label">${this._t(`toggle.${t}`)}</span>
      <ha-switch
        .checked=${this._config[t]??e}
        @change=${o=>this._toggleDisplay(t,e,o.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(t,e){return this._modes[t]?this._modes[t]:e?O(e)&&!w(e)?"entity":"custom":ie.has(t)?"entity":"auto"}_renderModeChips(t,e){let s=ie.has(t)?["entity","custom"]:["auto","entity","custom"];return l`<div class="modes">
      ${s.map(o=>l`<button
          class="mode ${e===o?"on":""}"
          @click=${()=>{this._modes={...this._modes,[t]:o},o==="auto"&&this._setOverride(t,"")}}
        >
          ${this._t(`editor.mode_${o}`)}
        </button>`)}
    </div>`}_renderSlot(t,e,s){let o=this._config.entities?.[t]||"",i=this._slotMode(t,o),n=this._defaults()[t];return l`<div class="section">
        <ha-icon icon=${e}></ha-icon>${s||this._t(`slot.${t}`)}
      </div>
      ${this._renderModeChips(t,i)}
      ${i==="auto"?l`<div class="hint">
            ${this._t("editor.auto_value",{value:n||this._t("editor.not_found")})}
          </div>`:i==="entity"?l`<ha-form
              .hass=${this.hass}
              .data=${{value:O(o)&&!w(o)?o:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${c=>{c.stopPropagation(),this._setOverride(t,c.detail.value.value||"")}}
            ></ha-form>`:l`<ha-form
              .hass=${this.hass}
              .data=${{value:O(o)&&!w(o)?"":o}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${c=>{c.stopPropagation(),this._setOverride(t,c.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(t,e){let s={...this._config.entities||{}};e?s[t]=e:delete s[t];let o={...this._config,entities:s,type:`custom:${m}`};return Object.keys(s).length||delete o.entities,o}_setOverride(t,e){this._dispatch(this._withOverride(t,e))}_toggleDisplay(t,e,s){let o={...this._config,type:`custom:${m}`};s===e?delete o[t]:o[t]=s,this._dispatch(o)}_valueChanged(t){t.stopPropagation();let e={...this._config,...t.detail.value,type:`custom:${m}`};e.device||delete e.device,this._dispatch(e)}_dispatch(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}static get styles(){return R`
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
    `}};customElements.define(m,Q);customElements.define(`${m}-editor`,tt);window.customCards=window.customCards||[];window.customCards.push({type:m,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
