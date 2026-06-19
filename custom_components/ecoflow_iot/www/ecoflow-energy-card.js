var _="ecoflow-energy-card",q="ecoflow_iot",Et="/ecoflow_iot";var X=globalThis,J=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),Ct=new WeakMap,I=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(J&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ct.set(e,t))}return t}toString(){return this.cssText}},Pt=r=>new I(typeof r=="string"?r:r+"",void 0,nt),j=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new I(e,r,nt)},Mt=(r,t)=>{if(J)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=X.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},at=J?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Pt(e)})(r):r;var{is:ce,defineProperty:le,getOwnPropertyDescriptor:de,getOwnPropertyNames:he,getOwnPropertySymbols:pe,getPrototypeOf:ue}=Object,Z=globalThis,Tt=Z.trustedTypes,fe=Tt?Tt.emptyScript:"",me=Z.reactiveElementPolyfillSupport,L=(r,t)=>r,ct={toAttribute(r,t){switch(t){case Boolean:r=r?fe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Ut=(r,t)=>!ce(r,t),Ft={attribute:!0,type:String,converter:ct,reflect:!1,useDefault:!1,hasChanged:Ut};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;var w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ft){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&le(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=de(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ft}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;let t=ue(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){let e=this.properties,s=[...he(e),...pe(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(at(i))}else t!==void 0&&e.push(at(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:ct).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ct;this._$Em=i;let l=n.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){let n=this.constructor;if(i===!1&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??Ut)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[L("elementProperties")]=new Map,w[L("finalized")]=new Map,me?.({ReactiveElement:w}),(Z.reactiveElementVersions??=[]).push("2.1.2");var mt=globalThis,Ot=r=>r,Q=mt.trustedTypes,Dt=Q?Q.createPolicy("lit-html",{createHTML:r=>r}):void 0,jt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+A,ge=`<${Lt}>`,T=document,B=()=>T.createComment(""),K=r=>r===null||typeof r!="object"&&typeof r!="function",gt=Array.isArray,_e=r=>gt(r)||typeof r?.[Symbol.iterator]=="function",lt=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nt=/-->/g,Rt=/>/g,P=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Ht=/"/g,Wt=/^(?:script|style|textarea|title)$/i,_t=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=_t(1),S=_t(2),Re=_t(3),F=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),It=new WeakMap,M=T.createTreeWalker(T,129);function Bt(r,t){if(!gt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dt!==void 0?Dt.createHTML(t):t}var ve=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=W;for(let l=0;l<e;l++){let a=r[l],h,p,d=-1,f=0;for(;f<a.length&&(n.lastIndex=f,p=n.exec(a),p!==null);)f=n.lastIndex,n===W?p[1]==="!--"?n=Nt:p[1]!==void 0?n=Rt:p[2]!==void 0?(Wt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=P):p[3]!==void 0&&(n=P):n===P?p[0]===">"?(n=i??W,d=-1):p[1]===void 0?d=-2:(d=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?P:p[3]==='"'?Ht:zt):n===Ht||n===zt?n=P:n===Nt||n===Rt?n=W:(n=P,i=void 0);let v=n===P&&r[l+1].startsWith("/>")?" ":"";o+=n===W?a+ge:d>=0?(s.push(h),a.slice(0,d)+jt+a.slice(d)+A+v):a+A+(d===-2?l:v)}return[Bt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},G=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[h,p]=ve(t,e);if(this.el=r.createElement(h,s),M.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=M.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(jt)){let f=p[n++],v=i.getAttribute(d).split(A),g=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:g[2],strings:v,ctor:g[1]==="."?ht:g[1]==="?"?pt:g[1]==="@"?ut:N}),i.removeAttribute(d)}else d.startsWith(A)&&(a.push({type:6,index:o}),i.removeAttribute(d));if(Wt.test(i.tagName)){let d=i.textContent.split(A),f=d.length-1;if(f>0){i.textContent=Q?Q.emptyScript:"";for(let v=0;v<f;v++)i.append(d[v],B()),M.nextNode(),a.push({type:2,index:++o});i.append(d[f],B())}}}else if(i.nodeType===8)if(i.data===Lt)a.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(A,d+1))!==-1;)a.push({type:7,index:o}),d+=A.length-1}o++}}static createElement(t,e){let s=T.createElement("template");return s.innerHTML=t,s}};function D(r,t,e=r,s){if(t===F)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=K(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=D(r,i._$AS(r,t.values),i,s)),t}var dt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);M.currentNode=i;let o=M.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new V(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new ft(o,this,t)),this._$AV.push(h),a=s[++l]}n!==a?.index&&(o=M.nextNode(),n++)}return M.currentNode=T,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},V=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),K(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==F&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_e(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&K(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=G.createElement(Bt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new dt(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new G(t)),e}k(t){gt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(B()),this.O(B()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Ot(t).nextSibling;Ot(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=D(this,t,e,0),n=!K(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{let l=t,a,h;for(t=o[0],a=0;a<o.length-1;a++)h=D(this,l[s+a],e,a),h===F&&(h=this._$AH[a]),n||=!K(h)||h!==this._$AH[a],h===m?t=m:t!==m&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ht=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},pt=class extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},ut=class extends N{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??m)===F)return;let s=this._$AH,i=t===m&&s!==m||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==m&&(s===m||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ft=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var ye=mt.litHtmlPolyfillSupport;ye?.(G,V),(mt.litHtmlVersions??=[]).push("3.3.3");var Kt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new V(t.insertBefore(B(),o),o,void 0,e??{})}return i._$AI(r),i};var vt=globalThis,$=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};$._$litElement$=!0,$.finalized=!0,vt.litElementHydrateSupport?.({LitElement:$});var be=vt.litElementPolyfillSupport;be?.({LitElement:$});(vt.litElementVersions??=[]).push("4.2.2");var tt=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function Y(r){return tt.some(t=>t.key===r)?`${Et}/devices/${r}.png`:null}function Gt(r){let t=xe(r);return t?Y(t):null}function xe(r){if(!r)return null;let t=tt.find(e=>e.match&&e.match.test(r));return t?t.key:null}var $e={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function we(r){return Object.values(r.entities||{}).filter(t=>t.platform===q)}function ke(r){if(r.translation_key)return r.translation_key;let t=r.entity_id.split(".")[1],e=t.lastIndexOf("_");return e>=0?t.slice(e+1):t}function et(r){let t=new Map;for(let s of we(r))s.device_id&&(t.has(s.device_id)||t.set(s.device_id,[]),t.get(s.device_id).push(s));let e=[];for(let[s,i]of t)i.some(o=>ke(o)==="pv_total")&&e.push({deviceId:s,device:r.devices?.[s],ents:i});return e}function st(r,t){let e={};for(let s of t){let[i]=s.entity_id.split("."),o=s.translation_key;o&&($e[i]||[]).includes(o)&&(e[`${i}.${o}`]=s.entity_id)}if(!e["sensor.cms_batt_soc"])for(let s of t){if(!s.entity_id.startsWith("sensor."))continue;let i=r.states?.[s.entity_id];if(i?.attributes?.device_class==="battery"&&i?.attributes?.unit_of_measurement==="%"){e["sensor.cms_batt_soc"]=s.entity_id;break}}return e}async function yt(r){if(!r?.callWS)return{};try{return await r.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function Vt(r){let t=await yt(r),e=Object.keys(t);if(!e.length)return[];let s=[];try{s=await r.callWS({type:"config_entries/get"})||[]}catch{s=[]}let i=new Map(s.map(o=>[o.entry_id,o]));return e.map(o=>({id:o,title:i.get(o)?.title||i.get(o)?.domain||o,domain:i.get(o)?.domain||""}))}function Yt(r,t){let e=t===void 0?Object.keys(r||{}):t,s={};for(let i of e){let o=r?.[i]?.wh_hours;if(o)for(let[n,l]of Object.entries(o)){let a=Number(l);Number.isFinite(a)&&(s[n]=(s[n]||0)+a)}}return s}function bt(r,t=new Date){let e=t.getFullYear(),s=t.getMonth(),i=t.getDate(),o={};for(let[n,l]of Object.entries(r||{})){let a=new Date(n);Number.isNaN(a.getTime())||a.getFullYear()===e&&a.getMonth()===s&&a.getDate()===i&&(o[a.getHours()]=(o[a.getHours()]||0)+l)}return o}function qt(r,t=new Date){let e=bt(r,t),s=Object.keys(e);return s.length?s.reduce((i,o)=>i+e[o],0):null}async function Xt(r,t,e,s){if(!r?.callWS||!t)return null;let i=new Date,n={type:"recorder/statistics_during_period",start_time:(e instanceof Date?e:new Date(i.getFullYear(),i.getMonth(),i.getDate())).toISOString(),statistic_ids:[t],period:"hour",types:["change"]};s instanceof Date&&(n.end_time=s.toISOString());try{let a=(await r.callWS(n))?.[t];if(!Array.isArray(a))return null;let h={};for(let p of a){let d=new Date(p.start),f=Number(p.change);Number.isNaN(d.getTime())||!Number.isFinite(f)||(h[d.getHours()]=(h[d.getHours()]||0)+f)}return h}catch{return null}}function k(r){return typeof r=="string"&&/\{[{%]/.test(r)}function U(r){return typeof r=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(r)}function x(r){let t=Number(r?.state);return Number.isFinite(t)?t:null}function E(r){return r==null||!Number.isFinite(r)?null:Math.abs(r)>=1e3?`${(r/1e3).toFixed(2)} kW`:`${Math.round(r)} W`}var Jt=!1;async function it(){if(!Jt){Jt=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var Zt={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today."},page:{appearance:"Appearance",entities:"Entities",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}}};var xt={en:Zt};function Se(r){return(r?.locale?.language||r?.language||"en").split("-")[0]}function Qt(r,t){let e=t.split(".").reduce((s,i)=>s?.[i],r);return typeof e=="string"?e:void 0}function C(r,t,e={}){let s=xt[Se(r)]||xt.en,i=Qt(s,t)??Qt(xt.en,t)??t;for(let[o,n]of Object.entries(e))i=i.replace(`{${o}}`,n);return i}var te=j`
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
    font-size: 1.5em;
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
    stroke: var(--energy-solar-color, #ff9800);
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
    stroke: var(--energy-solar-color, #ff9800);
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
    stroke: var(--energy-solar-color, #ff9800);
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
    color: var(--energy-solar-color, #ff9800);
  }
  .batt-speed.discharge {
    color: var(--info-color, #2196f3);
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
`;function $t(r){let t=[];for(let e=1;e<=4;e++){let s=r._config.panels?.[e]||{};if(s.hidden)continue;let i=`sensor.pv${e}_power`,o=r._state(i);o&&t.push({i:e,watts:x(o),id:r._entityId(i),name:s.name||null})}return t}function ee(r){let t=(o,n)=>C(r.hass,o,n),e=$t(r);if(!e.length)return c`<div class="empty">${t("panels.none")}</div>`;let s=Math.max(1,...e.map(o=>o.watts||0)),i=e.reduce((o,n)=>o+(n.watts||0),0);return c`<div class="panels">
    ${e.map(o=>c`<div
        class="panel-row clickable"
        @click=${()=>r._moreInfoId(o.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${o.name||t("panels.panel",{n:o.i})}
          </span>
          <span class="panel-val">${E(o.watts)??"\u2013"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2,(o.watts||0)/s*100)}%"
          ></div>
        </div>
      </div>`)}
    <div class="panel-total">
      <span>${t("panels.total")}</span>
      <span>${E(i)??"\u2013"}</span>
    </div>
  </div>`}var wt=1e3,kt=340,b={l:46,r:14,t:16,b:28};function se(r,{actual:t,forecast:e,totalWh:s,showForecast:i,title:o}){let n=(u,y)=>C(r.hass,u,y),l=wt-b.l-b.r,a=kt-b.t-b.b,h=u=>b.l+u/24*l,p=0;for(let u=0;u<24;u++)p=Math.max(p,(t[u]||0)/1e3),i&&(p=Math.max(p,(e[u]||0)/1e3));let d=Ee(p>0?p:.1),f=u=>b.t+a-u/d*a,v=l/24*.66,g=[];for(let u=0;u<24;u++){let y=(t[u]||0)/1e3;if(y<=0)continue;let H=h(u+.5)-v/2,St=f(y);g.push(S`<rect class="fc-actual" x=${H.toFixed(1)} y=${St.toFixed(1)}
        width=${v.toFixed(1)} height=${(b.t+a-St).toFixed(1)} rx="2"></rect>`)}let R=null;if(i){let u=[];for(let y=0;y<=24;y++)u.push(`${h(y).toFixed(1)},${f((e[y]||0)/1e3).toFixed(1)}`);R=S`<polyline class="fc-line" points=${u.join(" ")}></polyline>`}let O=[],z=4;for(let u=0;u<=z;u++){let y=d/z*u,H=f(y);O.push(S`<line class="fc-grid" x1=${b.l} y1=${H.toFixed(1)} x2=${wt-b.r} y2=${H.toFixed(1)}></line>`),O.push(S`<text class="fc-axis fc-axis-y" x=${b.l-6} y=${(H+4).toFixed(1)}>${Ce(y)}</text>`)}let At=[];for(let u=0;u<=24;u+=4)At.push(S`<text class="fc-axis fc-axis-x" x=${h(u).toFixed(1)} y=${kt-8}>${u}:00</text>`);return c`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${o||n("card.today")}</span>
      <span class="fc-graph-total"
        >${(s!=null?s/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    <svg class="chart" viewBox="0 0 ${wt} ${kt}" preserveAspectRatio="xMidYMid meet" role="img">
      ${O}${At}
      <text class="fc-axis fc-unit" x=${b.l-6} y=${b.t-4}>kWh</text>
      ${g}${R}
    </svg>
    ${i?c`<div class="fc-graph-legend">
          <span class="lg lg-actual">${n("card.produced")}</span>
          <span class="lg lg-fc">${n("card.forecast")}</span>
        </div>`:""}
  </div>`}function Ee(r){let t=Math.pow(10,Math.floor(Math.log10(r))),e=r/t;return(e<=1?1:e<=2?2:e<=5?5:10)*t}function Ce(r){return r>=10?Math.round(r).toString():r.toFixed(1).replace(/\.0$/,"")}var Pe=300*1e3,ot=class extends ${static styles=te;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),it(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},Pe)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let t of Object.values(this._tmplUnsub||{}))typeof t=="function"&&t();this._tmplUnsub={}}setConfig(t){this._config=t||{}}static getConfigElement(){return document.createElement(`${_}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(t,e){return C(this.hass,t,e)}_show(t,e=!0){return this._config[t]??e}get _device(){let t=et(this.hass);return t.length?this._config.device&&t.find(e=>e.deviceId===this._config.device)||t[0]:null}_state(t){let e=this._config.entities?.[t];if(e){if(k(e)){let i=this._templateResults?.[e];return{state:i===void 0?"unknown":String(i),attributes:{}}}return U(e)?this.hass.states[e]:{state:e,attributes:{}}}let s=this._map?.[t];return s?this.hass.states[s]:void 0}_entityId(t){let e=this._config.entities?.[t];return e&&U(e)&&!k(e)?e:this._map?.[t]}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let t=this._entityId("sensor.solar_energy");if(!t||!this.hass)return;let{start:e,end:s}=this._dataRange(),i=await Xt(this.hass,t,e,s);this._hourly=i||{},this._todayWh=i?Object.values(i).reduce((o,n)=>o+(n||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await yt(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let t=new Date;return{start:new Date(t.getFullYear(),t.getMonth(),t.getDate()),end:t,ref:t}}_bindEnergyCollection(){let t=this._config.collection_key,e=t?`_${t}`:null;if(e!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=e,this._period=null),!e||this._collUnsub||!this.hass?.connection)return;let s=this.hass.connection[e];if(!s||typeof s.subscribe!="function")return;let i=()=>{this._period={start:s.start,end:s.end},this._refreshData()};this._collUnsub=s.subscribe(()=>i()),i()}_mergedForecast(){return Yt(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let t=qt(this._mergedForecast(),this._dataRange().ref);return t!=null?t/1e3:null}_periodLabel(){let t=this._dataRange().ref,e=new Date;return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()?this._t("card.today"):t.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let t=[...Object.values(this._config.entities||{}),this._config.title].filter(e=>k(e));for(let e of t)if(!this._tmplUnsub[e]){this._tmplUnsub[e]=!0;try{this._tmplUnsub[e]=await this.hass.connection.subscribeMessage(s=>{this._templateResults[e]=s.result,this.requestUpdate()},{type:"render_template",template:e})}catch{this._templateResults[e]="error",this.requestUpdate()}}for(let e of Object.keys(this._tmplUnsub))if(!t.includes(e)){let s=this._tmplUnsub[e];typeof s=="function"&&s(),delete this._tmplUnsub[e],delete this._templateResults[e]}}_moreInfo(t){this._moreInfoId(this._entityId(t))}_moreInfoId(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}render(){if(!this.hass)return c``;let t=this._device;return t?(this._map=st(this.hass,t.ents),c`<ha-card>
      ${this._renderHead(t)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),ee(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),se(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:bt(this._mergedForecast(),this._dataRange().ref),totalWh:this._todayWh,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`):c`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(t,e){return c`<ha-dialog
      open
      header-title=${t}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${e}</div>
    </ha-dialog>`}_renderHead(t){let e=this._config.title,s=e&&k(e)?String(this._templateResults?.[e]??""):e,i=t.device?.model,o=s||t.device?.name_by_user||t.device?.name||i||this._t("card.device"),n=this._config.image_url||(this._config.image?Y(this._config.image):Gt(i));return c`<div class="head">
      <div class="head-left">
        <div class="name">${o}</div>
        ${i&&i!==o?c`<div class="subtitle">${i}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle(n,o)}
    </div>`}_renderBatteryCircle(t,e){let s=this._state("sensor.cms_batt_soc"),i=this._show("show_image")&&t;if(!s&&!i)return"";let o=x(s),n=x(this._state("sensor.bat_power")),l=this._state("binary_sensor.battery_charging")?.state==="on"||n!=null&&n>1,a=!l&&n!=null&&n<-1,h=l?"charge":a?"discharge":o!=null&&o<=15?"low":"",p=l?"charge":a?"discharge":"",d=2*Math.PI*44,f=o!=null?Math.max(0,Math.min(100,o)):0,v=[{v:x(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:x(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:x(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(g=>g.v!=null);return c`<div
      class="batt-circle clickable"
      @click=${()=>this._moreInfo("sensor.cms_batt_soc")}
    >
      ${s?c`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${h}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${d.toFixed(1)};stroke-dashoffset:${(d*(1-f/100)).toFixed(1)}"
            ></circle>
            ${p?c`<circle
                  class="ring-spin ${p}"
                  cx="50"
                  cy="50"
                  r="44"
                  stroke-dasharray="16 261"
                ></circle>`:""}
            ${v.map(g=>{let R=Math.max(0,Math.min(100,g.v))/100*2*Math.PI,O=Math.sin(R),z=Math.cos(R);return S`<line
                class="ring-tick ${g.cls}"
                x1=${(50+39.5*O).toFixed(1)}
                y1=${(50-39.5*z).toFixed(1)}
                x2=${(50+48.5*O).toFixed(1)}
                y2=${(50-48.5*z).toFixed(1)}
              ><title>${g.label} ${Math.round(g.v)}%</title></line>`})}
          </svg>`:""}
      ${i?c`<img class="device-img" src="${t}" alt="${e}" />`:s?c`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${s}
            ></ha-state-icon>`:c`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${s&&(l||a)&&n!=null?c`<span class="batt-speed ${p}">
            <ha-icon
              icon=${l?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${E(Math.abs(n))}
          </span>`:""}
      ${s?c`<span class="batt-badge"
            >${o!=null?Math.round(o):"\u2013"}%</span
          >`:""}
    </div>`}_renderAc(){let t=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(e=>({...e,swState:this._state(e.sw),pwState:this._state(e.pw)})).filter(e=>e.swState||e.pwState);return t.length?c`<div class="ac">
      ${t.map(e=>{let s=e.swState?.state==="on",i=x(e.pwState);return c`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(e.pw)||this._entityId(e.sw))}
        >
          <ha-icon class="ac-icon ${s?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${e.label}</span>
            <span class="ac-power">
              ${e.swState&&!s?this._t("card.off"):E(i)??(e.pwState?"\u2014":"")}
            </span>
          </div>
          ${e.swState?c`<ha-switch
                .checked=${s}
                @click=${o=>o.stopPropagation()}
                @change=${()=>this._toggleSwitch(e.sw,e.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(t,e){let s=this._entityId(t),i=s?this.hass.states[s]:null;!s||!i||(i.state==="on"?this._confirmAc={slot:t,label:e}:this.hass.callService("switch","turn_on",{entity_id:s}))}_renderConfirmAc(){let{label:t}=this._confirmAc,e=()=>this._confirmAc=null;return c`<ha-dialog
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
    </ha-dialog>`}_renderStats(){let t=x(this._state("sensor.pv_total")),e=$t(this),s=this._show("show_panels")&&e.length>0,i=this._state("sensor.grid_power"),o=x(i);return c`<div class="stats">
      <div
        class="stat solar ${s?"clickable":""}"
        @click=${s?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${s?c`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${E(t)??"\u2013"}</div>
        ${s?c`<div class="stat-sub">
              ${e.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(o):c`<div></div>`}
    </div>`}_renderGrid(t){let e=t!=null&&t>1,s=t!=null&&t<-1,i=e?"import":s?"export":"",o=e?this._t("card.grid_import"):s?this._t("card.grid_export"):this._t("card.grid_idle");return c`<div
      class="stat grid ${i} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${s?"mdi:transmission-tower-export":e?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${t!=null?E(Math.abs(t)):"\u2013"}
      </div>
      <div class="stat-sub">${o}</div>
    </div>`}_renderToday(){let t=this._todayWh!=null?this._todayWh/1e3:null,e=Object.keys(this._forecasts||{}).length>0,s=this._show("show_forecast")&&e?this._forecastTodayKWh():null,i=s!=null&&s>0,o=i&&t!=null?Math.min(100,Math.round(t/s*100)):null,n=o!=null&&o>=100;return c`<div
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
      ${i?c`<div class="fc-bar">
              <div
                class="fc-fill ${n?"met":""}"
                style="width:${o}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${t!=null?t.toFixed(1):"\u2013"}</b> /
                ${s.toFixed(1)} kWh
              </span>
              <span>
                ${n?this._t("card.exceeded"):this._t("card.of_forecast",{pct:o??0})}
              </span>
            </div>`:""}
    </div>`}};function ie(r,t){if(!t)return null;let e=r?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${t}/${e}icon.png`}var Me=[{name:"device",selector:{device:{integration:q}}}],oe={appearance:[["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},re={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},ne=new Set,ae=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],Te=4,rt=class extends ${static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),it()}setConfig(t){this._config=t||{}}_t(t,e){return C(this.hass,t,e)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,Vt(this.hass).then(t=>{this._providers=t}))}render(){if(!this.hass)return c``;let t=ae.find(e=>e.id===this._page);return t?this._renderSubpage(t):this._renderRoot()}_defaults(){let t=et(this.hass),e=this._config.device&&t.find(s=>s.deviceId===this._config.device)||t[0];return e?st(this.hass,e.ents):{}}_renderRoot(){return c`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Me}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${ae.map(t=>c`<button
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
      </div>`}_summary(t){if(t==="panels"){let n=this._detectedPanels(),l=n.filter(h=>this._config.panels?.[h]?.hidden).length,a=this._t("editor.panels_count",{n:n.length});return l&&(a+=` \xB7 ${this._t("editor.panels_hidden",{n:l})}`),a}if(t==="forecast"){let n=this._providers;if(n===void 0)return this._t("editor.automatic");if(!n.length)return this._t("editor.forecast_none_short");let l=this._config.forecast_config_entries,a=l===void 0?n.length:l.length;return this._t("editor.forecast_selected",{n:a,total:n.length})}if(t==="advanced")return this._config.collection_key||this._t("editor.none");let e=(re[t]||[]).filter(([n])=>this._config.entities?.[n]).length,s=e?` \xB7 ${this._t("editor.overridden",{n:e})}`:"",i=oe[t]||[];if(!i.length)return e?this._t("editor.overridden",{n:e}):this._t("editor.automatic");let o=i.filter(([n,l])=>this._config[n]??l);return o.length?o.map(([n])=>this._t(`short.${n}`)).join(", ")+s:`${this._t("editor.nothing_shown")}${s}`}_renderSubpage(t){return c`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${t.id}`)}</span>
      </div>
      ${(oe[t.id]||[]).map(([e,s,i])=>this._renderToggle(e,s,i))}
      ${t.id==="appearance"?this._renderImagePicker():t.id==="panels"?this._renderPanelsPage():t.id==="forecast"?this._renderForecastPage():t.id==="advanced"?this._renderAdvancedPage():(re[t.id]||[]).map(([e,s])=>this._renderSlot(e,s))}`}_renderImagePicker(){let t=this._config.image,e=this._config.image_url,s=this._config.show_image??!0;return c`<div class="section">
        <ha-icon icon="mdi:image-multiple-outline"></ha-icon>${this._t("editor.image")}
      </div>
      <div class=${s?"img-grid":"img-grid dim"}>
        <button
          class="img-opt ${!t&&!e?"on":""}"
          title=${this._t("editor.automatic")}
          @click=${()=>this._setImage(null)}
        >
          <span class="img-auto"><ha-icon icon="mdi:auto-fix"></ha-icon></span>
          <span class="img-label">${this._t("editor.automatic")}</span>
        </button>
        ${tt.map(i=>c`<button
            class="img-opt ${t===i.key?"on":""}"
            title=${i.name}
            @click=${()=>this._setImage(i.key)}
          >
            <img src=${Y(i.key)} loading="lazy" alt=${i.name} />
            <span class="img-label">${i.name}</span>
          </button>`)}
      </div>`}_setImage(t){let e={...this._config,type:`custom:${_}`};delete e.image_url,t?e.image=t:delete e.image,this._dispatch(e)}_renderAdvancedPage(){return c`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${t=>{t.stopPropagation(),this._setCollectionKey(t.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(t){let e={...this._config,type:`custom:${_}`};t?e.collection_key=t:delete e.collection_key,this._dispatch(e)}_renderForecastPage(){let t=this._providers;if(t===void 0)return c`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!t.length)return c`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let e=this._config.show_forecast??!0,s=this._config.forecast_config_entries,i=o=>s===void 0?!0:s.includes(o);return c`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${e?"":"dim"}>
        ${t.map(o=>c`<div class="row">
            ${this._renderBrand(o.domain)}
            <span class="row-label"
              >${o.title}<span class="row-sub">${o.domain}</span></span
            >
            <ha-switch
              .checked=${i(o.id)}
              .disabled=${!e}
              @change=${n=>this._toggleProvider(o.id,n.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(t){let e=ie(this.hass,t);return c`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${e?c`<img
            class="brand"
            src=${e}
            @error=${s=>{s.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(t,e){let s=(this._providers||[]).map(n=>n.id),i=this._config.forecast_config_entries??s.slice();i=e?[...new Set([...i,t])]:i.filter(n=>n!==t);let o={...this._config,type:`custom:${_}`};i.length===s.length&&s.every(n=>i.includes(n))?delete o.forecast_config_entries:o.forecast_config_entries=i,this._dispatch(o)}_detectedPanels(){let t=this._defaults(),e=[];for(let s=1;s<=Te;s++)(t[`sensor.pv${s}_power`]||this._config.entities?.[`sensor.pv${s}_power`])&&e.push(s);return e.length?e:[1,2,3,4]}_renderPanelsPage(){return c`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(t=>this._renderPanelConfig(t))}`}_renderPanelConfig(t){let e=this._config.panels?.[t]||{},s=!!e.hidden,i=`sensor.pv${t}_power`;return c`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon="mdi:solar-panel"></ha-icon>
        <span class="panel-title"
          >${e.name||this._t("editor.panel",{n:t})}</span
        >
        <ha-switch
          .checked=${!s}
          @change=${o=>this._dispatch(this._withPanel(t,{hidden:!o.target.checked}))}
        ></ha-switch>
      </div>
      ${s?c`<div class="hint">${this._t("editor.panel_hidden")}</div>`:c`<ha-form
              .hass=${this.hass}
              .data=${{value:e.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${o=>{o.stopPropagation(),this._dispatch(this._withPanel(t,{name:o.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(i,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(t,e){let s={...this._config.panels||{}},i={...s[t]||{}};for(let[n,l]of Object.entries(e))l===""||l==null||l===!1?delete i[n]:i[n]=l;Object.keys(i).length?s[t]=i:delete s[t];let o={...this._config,panels:s,type:`custom:${_}`};return Object.keys(s).length||delete o.panels,o}_renderToggle(t,e,s){return c`<div class="row">
      <ha-icon icon=${s}></ha-icon>
      <span class="row-label">${this._t(`toggle.${t}`)}</span>
      <ha-switch
        .checked=${this._config[t]??e}
        @change=${i=>this._toggleDisplay(t,e,i.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(t,e){return this._modes[t]?this._modes[t]:e?U(e)&&!k(e)?"entity":"custom":ne.has(t)?"entity":"auto"}_renderModeChips(t,e){let s=ne.has(t)?["entity","custom"]:["auto","entity","custom"];return c`<div class="modes">
      ${s.map(i=>c`<button
          class="mode ${e===i?"on":""}"
          @click=${()=>{this._modes={...this._modes,[t]:i},i==="auto"&&this._setOverride(t,"")}}
        >
          ${this._t(`editor.mode_${i}`)}
        </button>`)}
    </div>`}_renderSlot(t,e,s){let i=this._config.entities?.[t]||"",o=this._slotMode(t,i),n=this._defaults()[t];return c`<div class="section">
        <ha-icon icon=${e}></ha-icon>${s||this._t(`slot.${t}`)}
      </div>
      ${this._renderModeChips(t,o)}
      ${o==="auto"?c`<div class="hint">
            ${this._t("editor.auto_value",{value:n||this._t("editor.not_found")})}
          </div>`:o==="entity"?c`<ha-form
              .hass=${this.hass}
              .data=${{value:U(i)&&!k(i)?i:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${l=>{l.stopPropagation(),this._setOverride(t,l.detail.value.value||"")}}
            ></ha-form>`:c`<ha-form
              .hass=${this.hass}
              .data=${{value:U(i)&&!k(i)?"":i}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${l=>{l.stopPropagation(),this._setOverride(t,l.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(t,e){let s={...this._config.entities||{}};e?s[t]=e:delete s[t];let i={...this._config,entities:s,type:`custom:${_}`};return Object.keys(s).length||delete i.entities,i}_setOverride(t,e){this._dispatch(this._withOverride(t,e))}_toggleDisplay(t,e,s){let i={...this._config,type:`custom:${_}`};s===e?delete i[t]:i[t]=s,this._dispatch(i)}_valueChanged(t){t.stopPropagation();let e={...this._config,...t.detail.value,type:`custom:${_}`};e.device||delete e.device,this._dispatch(e)}_dispatch(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}static get styles(){return j`
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
    `}};customElements.define(_,ot);customElements.define(`${_}-editor`,rt);window.customCards=window.customCards||[];window.customCards.push({type:_,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
