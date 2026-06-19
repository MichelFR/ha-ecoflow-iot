var f="ecoflow-energy-card",D="ecoflow_iot",ht="/ecoflow_iot";var W=globalThis,j=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),pt=new WeakMap,M=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(j&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&pt.set(e,t))}return t}toString(){return this.cssText}},ut=o=>new M(typeof o=="string"?o:o+"",void 0,J),O=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new M(e,o,J)},ft=(o,t)=>{if(j)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=W.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},X=j?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ut(e)})(o):o;var{is:jt,defineProperty:Ft,getOwnPropertyDescriptor:Bt,getOwnPropertyNames:Gt,getOwnPropertySymbols:Vt,getPrototypeOf:qt}=Object,F=globalThis,mt=F.trustedTypes,Kt=mt?mt.emptyScript:"",Yt=F.reactiveElementPolyfillSupport,U=(o,t)=>o,Z={toAttribute(o,t){switch(t){case Boolean:o=o?Kt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},gt=(o,t)=>!jt(o,t),_t={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:gt};Symbol.metadata??=Symbol("metadata"),F.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ft(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=Bt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let l=i?.call(this);r?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_t}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let t=qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let e=this.properties,s=[...Gt(e),...Vt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ft(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:Z).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Z;this._$Em=i;let l=n.fromAttribute(e,r.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let n=this.constructor;if(i===!1&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??gt)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,r,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[U("elementProperties")]=new Map,g[U("finalized")]=new Map,Yt?.({ReactiveElement:g}),(F.reactiveElementVersions??=[]).push("2.1.2");var rt=globalThis,vt=o=>o,B=rt.trustedTypes,yt=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,St="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Et="?"+$,Jt=`<${Et}>`,S=document,N=()=>S.createComment(""),z=o=>o===null||typeof o!="object"&&typeof o!="function",nt=Array.isArray,Xt=o=>nt(o)||typeof o?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,bt=/>/g,w=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xt=/'/g,wt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,at=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),c=at(1),fe=at(2),me=at(3),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),At=new WeakMap,A=S.createTreeWalker(S,129);function kt(o,t){if(!nt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}var Zt=(o,t)=>{let e=o.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",n=R;for(let l=0;l<e;l++){let a=o[l],h,u,d=-1,_=0;for(;_<a.length&&(n.lastIndex=_,u=n.exec(a),u!==null);)_=n.lastIndex,n===R?u[1]==="!--"?n=$t:u[1]!==void 0?n=bt:u[2]!==void 0?(Ct.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=w):u[3]!==void 0&&(n=w):n===w?u[0]===">"?(n=i??R,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,h=u[1],n=u[3]===void 0?w:u[3]==='"'?wt:xt):n===wt||n===xt?n=w:n===$t||n===bt?n=R:(n=w,i=void 0);let y=n===w&&o[l+1].startsWith("/>")?" ":"";r+=n===R?a+Jt:d>=0?(s.push(h),a.slice(0,d)+St+a.slice(d)+$+y):a+$+(d===-2?l:y)}return[kt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},I=class o{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0,l=t.length-1,a=this.parts,[h,u]=Zt(t,e);if(this.el=o.createElement(h,s),A.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=A.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(St)){let _=u[n++],y=i.getAttribute(d).split($),L=/([.?@])?(.*)/.exec(_);a.push({type:1,index:r,name:L[2],strings:y,ctor:L[1]==="."?et:L[1]==="?"?st:L[1]==="@"?it:T}),i.removeAttribute(d)}else d.startsWith($)&&(a.push({type:6,index:r}),i.removeAttribute(d));if(Ct.test(i.tagName)){let d=i.textContent.split($),_=d.length-1;if(_>0){i.textContent=B?B.emptyScript:"";for(let y=0;y<_;y++)i.append(d[y],N()),A.nextNode(),a.push({type:2,index:++r});i.append(d[_],N())}}}else if(i.nodeType===8)if(i.data===Et)a.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf($,d+1))!==-1;)a.push({type:7,index:r}),d+=$.length-1}r++}}static createElement(t,e){let s=S.createElement("template");return s.innerHTML=t,s}};function k(o,t,e=o,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,r=z(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=k(o,i._$AS(o,t.values),i,s)),t}var tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??S).importNode(e,!0);A.currentNode=i;let r=A.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new H(r,r.nextSibling,this,t):a.type===1?h=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(h=new ot(r,this,t)),this._$AV.push(h),a=s[++l]}n!==a?.index&&(r=A.nextNode(),n++)}return A.currentNode=S,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},H=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),z(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(kt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new tt(i,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=At.get(t.strings);return e===void 0&&At.set(t.strings,e=new I(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new o(this.O(N()),this.O(N()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=vt(t).nextSibling;vt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let r=this.strings,n=!1;if(r===void 0)t=k(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{let l=t,a,h;for(t=r[0],a=0;a<r.length-1;a++)h=k(this,l[s+a],e,a),h===E&&(h=this._$AH[a]),n||=!z(h)||h!==this._$AH[a],h===p?t=p:t!==p&&(t+=(h??"")+r[a+1]),this._$AH[a]=h}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},et=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},st=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},it=class extends T{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??p)===E)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ot=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}};var Qt=rt.litHtmlPolyfillSupport;Qt?.(I,H),(rt.litHtmlVersions??=[]).push("3.3.3");var Tt=(o,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let r=e?.renderBefore??null;s._$litPart$=i=new H(t.insertBefore(N(),r),r,void 0,e??{})}return i._$AI(o),i};var ct=globalThis,m=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};m._$litElement$=!0,m.finalized=!0,ct.litElementHydrateSupport?.({LitElement:m});var te=ct.litElementPolyfillSupport;te?.({LitElement:m});(ct.litElementVersions??=[]).push("4.2.2");var ee=[[/stream/i,"stream-ultra.png"]];function Pt(o){if(!o)return null;for(let[t,e]of ee)if(t.test(o))return`${ht}/devices/${e}`;return null}var se={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power"],binary_sensor:["battery_charging"]};function ie(o){return Object.values(o.entities||{}).filter(t=>t.platform===D)}function oe(o){if(o.translation_key)return o.translation_key;let t=o.entity_id.split(".")[1],e=t.lastIndexOf("_");return e>=0?t.slice(e+1):t}function G(o){let t=new Map;for(let s of ie(o))s.device_id&&(t.has(s.device_id)||t.set(s.device_id,[]),t.get(s.device_id).push(s));let e=[];for(let[s,i]of t)i.some(r=>oe(r)==="pv_total")&&e.push({deviceId:s,device:o.devices?.[s],ents:i});return e}function V(o,t){let e={};for(let s of t){let[i]=s.entity_id.split("."),r=s.translation_key;r&&(se[i]||[]).includes(r)&&(e[`${i}.${r}`]=s.entity_id)}if(!e["sensor.cms_batt_soc"])for(let s of t){if(!s.entity_id.startsWith("sensor."))continue;let i=o.states?.[s.entity_id];if(i?.attributes?.device_class==="battery"&&i?.attributes?.unit_of_measurement==="%"){e["sensor.cms_batt_soc"]=s.entity_id;break}}return e}function v(o){return typeof o=="string"&&/\{[{%]/.test(o)}function C(o){return typeof o=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(o)}function b(o){let t=Number(o?.state);return Number.isFinite(t)?t:null}function x(o){return o==null||!Number.isFinite(o)?null:Math.abs(o)>=1e3?`${(o/1e3).toFixed(2)} kW`:`${Math.round(o)} W`}function Mt(o){let t=Number(o?.state);if(!Number.isFinite(t))return null;let e=(o?.attributes?.unit_of_measurement||"").toLowerCase();return e==="wh"?t/1e3:e==="mwh"?t*1e3:t}var Ot=!1;async function q(){if(!Ot){Ot=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var Ut={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown"},page:{appearance:"Appearance",entities:"Entities",forecast:"Solar forecast"},toggle:{show_image:"Show device image",show_battery:"Show battery bar",show_today:"Show today's production",show_grid:"Show grid power",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_battery:"Battery",show_today:"Today",show_grid:"Grid",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",pv_total:"Solar power",grid_power:"Grid power",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",forecast_today:"Forecast entity (expected production today)"}}};var lt={en:Ut};function ne(o){return(o?.locale?.language||o?.language||"en").split("-")[0]}function Rt(o,t){let e=t.split(".").reduce((s,i)=>s?.[i],o);return typeof e=="string"?e:void 0}function P(o,t,e={}){let s=lt[ne(o)]||lt.en,i=Rt(s,t)??Rt(lt.en,t)??t;for(let[r,n]of Object.entries(e))i=i.replace(`{${r}}`,n);return i}async function Nt(o,t){if(!o?.callWS||!t)return null;let e=new Date,s=new Date(e.getFullYear(),e.getMonth(),e.getDate());try{let r=(await o.callWS({type:"recorder/statistics_during_period",start_time:s.toISOString(),statistic_ids:[t],period:"day",types:["change"]}))?.[t];if(!Array.isArray(r)||!r.length)return null;let n=0,l=!1;for(let a of r){let h=Number(a.change);Number.isFinite(h)&&(n+=h,l=!0)}return l?n:null}catch{return null}}var zt=O`
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
  }
  .today-head {
    display: flex;
    align-items: baseline;
    gap: 8px;
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
`;function dt(o){let t=[];for(let e=1;e<=4;e++){let s=`sensor.pv${e}_power`,i=o._state(s);i&&t.push({i:e,watts:b(i),id:o._entityId(s)})}return t}function It(o){let t=(r,n)=>P(o.hass,r,n),e=dt(o);if(!e.length)return c`<div class="empty">${t("panels.none")}</div>`;let s=Math.max(1,...e.map(r=>r.watts||0)),i=e.reduce((r,n)=>r+(n.watts||0),0);return c`<div class="panels">
    ${e.map(r=>c`<div
        class="panel-row clickable"
        @click=${()=>o._moreInfoId(r.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${t("panels.panel",{n:r.i})}
          </span>
          <span class="panel-val">${x(r.watts)??"\u2013"}</span>
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
      <span>${x(i)??"\u2013"}</span>
    </div>
  </div>`}var ae=300*1e3,K=class extends m{static styles=zt;static get properties(){return{hass:{},_config:{},_dialog:{state:!0}}}constructor(){super(),this._dialog=null,this._todayWh=void 0}connectedCallback(){super.connectedCallback(),q(),this._statsTimer=setInterval(()=>this._refreshToday(),ae)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer);for(let t of Object.values(this._tmplUnsub||{}))typeof t=="function"&&t();this._tmplUnsub={}}setConfig(t){this._config=t||{}}static getConfigElement(){return document.createElement(`${f}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(t,e){return P(this.hass,t,e)}get _device(){let t=G(this.hass);return t.length?this._config.device&&t.find(e=>e.deviceId===this._config.device)||t[0]:null}_state(t){let e=this._config.entities?.[t];if(e){if(v(e)){let i=this._templateResults?.[e];return{state:i===void 0?"unknown":String(i),attributes:{}}}return C(e)?this.hass.states[e]:{state:e,attributes:{}}}let s=this._map?.[t];return s?this.hass.states[s]:void 0}_entityId(t){let e=this._config.entities?.[t];return e&&C(e)&&!v(e)?e:this._map?.[t]}_show(t,e=!0){return this._config[t]??e}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&(this._syncTemplates(),this._todayWh===void 0&&this._refreshToday())}async _refreshToday(){let t=this._entityId("sensor.solar_energy");if(!t||!this.hass)return;let e=await Nt(this.hass,t);e!==this._todayWh&&(this._todayWh=e,this.requestUpdate())}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let t=[...Object.values(this._config.entities||{}),this._config.title].filter(e=>v(e));for(let e of t)if(!this._tmplUnsub[e]){this._tmplUnsub[e]=!0;try{this._tmplUnsub[e]=await this.hass.connection.subscribeMessage(s=>{this._templateResults[e]=s.result,this.requestUpdate()},{type:"render_template",template:e})}catch{this._templateResults[e]="error",this.requestUpdate()}}for(let e of Object.keys(this._tmplUnsub))if(!t.includes(e)){let s=this._tmplUnsub[e];typeof s=="function"&&s(),delete this._tmplUnsub[e],delete this._templateResults[e]}}_moreInfo(t){this._moreInfoId(this._entityId(t))}_moreInfoId(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}render(){if(!this.hass)return c``;let t=this._device;return t?(this._map=V(this.hass,t.ents),c`<ha-card>
      ${this._renderHead(t)} ${this._show("show_battery")?this._renderBattery():""}
      ${this._renderStats()} ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?c`<ha-dialog
            open
            header-title=${this._t("panels.title")}
            @closed=${()=>this._dialog=null}
          >
            <div class="dlg-body">${It(this)}</div>
          </ha-dialog>`:""}
    </ha-card>`):c`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_renderHead(t){let e=this._config.title,s=e&&v(e)?String(this._templateResults?.[e]??""):e,i=t.device?.model,r=s||t.device?.name_by_user||t.device?.name||i||this._t("card.device"),n=this._config.image_url||Pt(i);return c`<div class="head">
      <div class="head-left">
        <div class="name">${r}</div>
        ${i&&i!==r?c`<div class="subtitle">${i}</div>`:""}
      </div>
      ${this._show("show_image")&&n?c`<img class="device-img" src="${n}" alt="${r}" />`:""}
    </div>`}_renderBattery(){let t=this._state("sensor.cms_batt_soc");if(!t)return"";let e=b(t),s=b(this._state("sensor.bat_power")),i=this._state("binary_sensor.battery_charging")?.state==="on"||s!=null&&s>1,r=!i&&s!=null&&s<-1,n=b(this.hass.states[this._reserveEntityId()]);return c`<div class="battery">
      <div
        class="batt-row clickable"
        @click=${()=>this._moreInfo("sensor.cms_batt_soc")}
      >
        <ha-state-icon
          .hass=${this.hass}
          .stateObj=${t}
        ></ha-state-icon>
        <span class="soc">${e!=null?Math.round(e):"\u2013"}%</span>
        ${i&&s!=null?c`<span class="chip charge"
              ><ha-icon icon="mdi:flash"></ha-icon>${x(Math.abs(s))}</span
            >`:r&&s!=null?c`<span class="chip discharge"
                ><ha-icon icon="mdi:battery-arrow-down"></ha-icon>${x(Math.abs(s))}</span
              >`:""}
      </div>
      <div class="bar">
        <div
          class="fill ${i?"charging":""} ${e!=null&&e<=15?"low":""}"
          style="width:${e??0}%"
        ></div>
        ${n!=null&&n>0&&n<100?c`<div class="reserve" style="left:${n}%"></div>`:""}
      </div>
    </div>`}_reserveEntityId(){return this._entityId("number.backup_reserve")||""}_renderStats(){let t=b(this._state("sensor.pv_total")),e=dt(this),s=this._show("show_panels")&&e.length>0,i=this._state("sensor.grid_power"),r=b(i);return c`<div class="stats">
      <div
        class="stat solar ${s?"clickable":""}"
        @click=${s?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${s?c`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${x(t)??"\u2013"}</div>
        ${s?c`<div class="stat-sub">
              ${e.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(i,r):c`<div></div>`}
    </div>`}_renderGrid(t,e){let s=e!=null&&e>1,i=e!=null&&e<-1,r=s?"import":i?"export":"",n=s?this._t("card.grid_import"):i?this._t("card.grid_export"):this._t("card.grid_idle");return c`<div
      class="stat grid ${r} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head">
        <ha-icon icon=${i?"mdi:transmission-tower-export":s?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}
      </div>
      <div class="stat-value">
        ${e!=null?x(Math.abs(e)):"\u2013"}
      </div>
      <div class="stat-sub">${n}</div>
    </div>`}_renderToday(){let t=this._todayWh,e=t!=null?t/1e3:null,s=this._show("show_forecast")?this._state("sensor.forecast_today"):void 0,i=s?Mt(s):null,r=i!=null&&i>0,n=r&&e!=null?Math.min(100,Math.round(e/i*100)):null,l=n!=null&&n>=100;return c`<div class="today">
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._t("card.today")}</span>
        <span
          class="today-value clickable"
          @click=${()=>this._moreInfo("sensor.solar_energy")}
        >
          ${e!=null?e.toFixed(1):"\u2013"}<span class="today-unit"
            >&nbsp;kWh</span
          >
        </span>
      </div>
      ${r?c`<div class="fc-bar">
              <div class="fc-fill ${l?"met":""}" style="width:${n}%"></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${e!=null?e.toFixed(1):"\u2013"}</b> /
                ${i.toFixed(1)} kWh
              </span>
              <span>
                ${l?this._t("card.exceeded"):this._t("card.of_forecast",{pct:n??0})}
              </span>
            </div>`:""}
    </div>`}};var ce=[{name:"device",selector:{device:{integration:D}}}],Ht={appearance:[["show_image",!0,"mdi:image-outline"],["show_battery",!0,"mdi:battery-high"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},Lt={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["sensor.pv1_power","mdi:solar-panel"],["sensor.pv2_power","mdi:solar-panel"],["sensor.pv3_power","mdi:solar-panel"],["sensor.pv4_power","mdi:solar-panel"]],forecast:[["sensor.forecast_today","mdi:weather-sunny"]]},Dt=new Set(["sensor.forecast_today"]),Wt=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"forecast",icon:"mdi:weather-partly-cloudy"}],Y=class extends m{static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0}}}constructor(){super(),this._page=null,this._modes={}}connectedCallback(){super.connectedCallback(),q()}setConfig(t){this._config=t||{}}_t(t,e){return P(this.hass,t,e)}render(){if(!this.hass)return c``;let t=Wt.find(e=>e.id===this._page);return t?this._renderSubpage(t):this._renderRoot()}_defaults(){let t=G(this.hass),e=this._config.device&&t.find(s=>s.deviceId===this._config.device)||t[0];return e?V(this.hass,e.ents):{}}_renderRoot(){return c`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ce}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${Wt.map(t=>c`<button
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
      </div>`}_summary(t){let e=(Lt[t]||[]).filter(([n])=>this._config.entities?.[n]).length,s=e?` \xB7 ${this._t("editor.overridden",{n:e})}`:"",i=Ht[t]||[];if(!i.length)return e?this._t("editor.overridden",{n:e}):this._t("editor.automatic");let r=i.filter(([n,l])=>this._config[n]??l);return r.length?r.map(([n])=>this._t(`short.${n}`)).join(", ")+s:`${this._t("editor.nothing_shown")}${s}`}_renderSubpage(t){return c`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${t.id}`)}</span>
      </div>
      ${(Ht[t.id]||[]).map(([e,s,i])=>this._renderToggle(e,s,i))}
      ${(Lt[t.id]||[]).map(([e,s])=>this._renderSlot(e,s))}`}_renderToggle(t,e,s){return c`<div class="row">
      <ha-icon icon=${s}></ha-icon>
      <span class="row-label">${this._t(`toggle.${t}`)}</span>
      <ha-switch
        .checked=${this._config[t]??e}
        @change=${i=>this._toggleDisplay(t,e,i.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(t,e){return this._modes[t]?this._modes[t]:e?C(e)&&!v(e)?"entity":"custom":Dt.has(t)?"entity":"auto"}_renderModeChips(t,e){let s=Dt.has(t)?["entity","custom"]:["auto","entity","custom"];return c`<div class="modes">
      ${s.map(i=>c`<button
          class="mode ${e===i?"on":""}"
          @click=${()=>{this._modes={...this._modes,[t]:i},i==="auto"&&this._setOverride(t,"")}}
        >
          ${this._t(`editor.mode_${i}`)}
        </button>`)}
    </div>`}_renderSlot(t,e){let s=this._config.entities?.[t]||"",i=this._slotMode(t,s),r=this._defaults()[t];return c`<div class="section">
        <ha-icon icon=${e}></ha-icon>${this._t(`slot.${t}`)}
      </div>
      ${this._renderModeChips(t,i)}
      ${i==="auto"?c`<div class="hint">
            ${this._t("editor.auto_value",{value:r||this._t("editor.not_found")})}
          </div>`:i==="entity"?c`<ha-form
              .hass=${this.hass}
              .data=${{value:C(s)&&!v(s)?s:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${n=>{n.stopPropagation(),this._setOverride(t,n.detail.value.value||"")}}
            ></ha-form>`:c`<ha-form
              .hass=${this.hass}
              .data=${{value:C(s)&&!v(s)?"":s}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${n=>{n.stopPropagation(),this._setOverride(t,n.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(t,e){let s={...this._config.entities||{}};e?s[t]=e:delete s[t];let i={...this._config,entities:s,type:`custom:${f}`};return Object.keys(s).length||delete i.entities,i}_setOverride(t,e){this._dispatch(this._withOverride(t,e))}_toggleDisplay(t,e,s){let i={...this._config,type:`custom:${f}`};s===e?delete i[t]:i[t]=s,this._dispatch(i)}_valueChanged(t){t.stopPropagation();let e={...this._config,...t.detail.value,type:`custom:${f}`};e.device||delete e.device,this._dispatch(e)}_dispatch(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}static get styles(){return O`
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
      ha-form {
        display: block;
        margin-bottom: 12px;
      }
    `}};customElements.define(f,K);customElements.define(`${f}-editor`,Y);window.customCards=window.customCards||[];window.customCards.push({type:f,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
