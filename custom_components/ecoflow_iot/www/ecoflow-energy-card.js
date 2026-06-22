var v="ecoflow-energy-card",ot="ecoflow_iot",bt="/ecoflow_iot";var rt=globalThis,at=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yt=Symbol(),Kt=new WeakMap,G=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(at&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Kt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Kt.set(e,t))}return t}toString(){return this.cssText}},Gt=o=>new G(typeof o=="string"?o:o+"",void 0,yt),V=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new G(e,o,yt)},Vt=(o,t)=>{if(at)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=rt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},xt=at?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Gt(e)})(o):o;var{is:ze,defineProperty:Te,getOwnPropertyDescriptor:Fe,getOwnPropertyNames:De,getOwnPropertySymbols:Ne,getPrototypeOf:Ue}=Object,nt=globalThis,Yt=nt.trustedTypes,Oe=Yt?Yt.emptyScript:"",Ie=nt.reactiveElementPolyfillSupport,Y=(o,t)=>o,$t={toAttribute(o,t){switch(t){case Boolean:o=o?Oe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Zt=(o,t)=>!ze(o,t),qt={attribute:!0,type:String,converter:$t,reflect:!1,useDefault:!1,hasChanged:Zt};Symbol.metadata??=Symbol("metadata"),nt.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Te(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=Fe(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){let l=s?.call(this);r?.call(this,a),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qt}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=Ue(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties,i=[...De(e),...Ne(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(xt(s))}else t!==void 0&&e.push(xt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:$t).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:$t;this._$Em=s;let l=a.fromAttribute(e,r.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let a=this.constructor;if(s===!1&&(r=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??Zt)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:a}=r,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,r,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[Y("elementProperties")]=new Map,A[Y("finalized")]=new Map,Ie?.({ReactiveElement:A}),(nt.reactiveElementVersions??=[]).push("2.1.2");var Pt=globalThis,Xt=o=>o,ct=Pt.trustedTypes,Jt=ct?ct.createPolicy("lit-html",{createHTML:o=>o}):void 0,oe="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,re="?"+P,Re=`<${re}>`,U=document,Z=()=>U.createComment(""),X=o=>o===null||typeof o!="object"&&typeof o!="function",Mt=Array.isArray,He=o=>Mt(o)||typeof o?.[Symbol.iterator]=="function",wt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qt=/-->/g,te=/>/g,D=RegExp(`>|${wt}(?:([^\\s"'>=/]+)(${wt}*=${wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,ie=/"/g,ae=/^(?:script|style|textarea|title)$/i,zt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),n=zt(1),$=zt(2),ni=zt(3),O=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),se=new WeakMap,N=U.createTreeWalker(U,129);function ne(o,t){if(!Mt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Jt!==void 0?Jt.createHTML(t):t}var Le=(o,t)=>{let e=o.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",a=q;for(let l=0;l<e;l++){let c=o[l],u,p,h=-1,m=0;for(;m<c.length&&(a.lastIndex=m,p=a.exec(c),p!==null);)m=a.lastIndex,a===q?p[1]==="!--"?a=Qt:p[1]!==void 0?a=te:p[2]!==void 0?(ae.test(p[2])&&(s=RegExp("</"+p[2],"g")),a=D):p[3]!==void 0&&(a=D):a===D?p[0]===">"?(a=s??q,h=-1):p[1]===void 0?h=-2:(h=a.lastIndex-p[2].length,u=p[1],a=p[3]===void 0?D:p[3]==='"'?ie:ee):a===ie||a===ee?a=D:a===Qt||a===te?a=q:(a=D,s=void 0);let f=a===D&&o[l+1].startsWith("/>")?" ":"";r+=a===q?c+Re:h>=0?(i.push(u),c.slice(0,h)+oe+c.slice(h)+P+f):c+P+(h===-2?l:f)}return[ne(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},J=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,a=0,l=t.length-1,c=this.parts,[u,p]=Le(t,e);if(this.el=o.createElement(u,i),N.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=N.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(oe)){let m=p[a++],f=s.getAttribute(h).split(P),x=/([.?@])?(.*)/.exec(m);c.push({type:1,index:r,name:x[2],strings:f,ctor:x[1]==="."?St:x[1]==="?"?At:x[1]==="@"?Et:W}),s.removeAttribute(h)}else h.startsWith(P)&&(c.push({type:6,index:r}),s.removeAttribute(h));if(ae.test(s.tagName)){let h=s.textContent.split(P),m=h.length-1;if(m>0){s.textContent=ct?ct.emptyScript:"";for(let f=0;f<m;f++)s.append(h[f],Z()),N.nextNode(),c.push({type:2,index:++r});s.append(h[m],Z())}}}else if(s.nodeType===8)if(s.data===re)c.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(P,h+1))!==-1;)c.push({type:7,index:r}),h+=P.length-1}r++}}static createElement(t,e){let i=U.createElement("template");return i.innerHTML=t,i}};function L(o,t,e=o,i){if(t===O)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=X(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=L(o,s._$AS(o,t.values),s,i)),t}var kt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);N.currentNode=s;let r=N.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Q(r,r.nextSibling,this,t):c.type===1?u=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(u=new Ct(r,this,t)),this._$AV.push(u),c=i[++l]}a!==c?.index&&(r=N.nextNode(),a++)}return N.currentNode=U,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Q=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),X(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):He(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&X(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=J.createElement(ne(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new kt(s,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=se.get(t.strings);return e===void 0&&se.set(t.strings,e=new J(t)),e}k(t){Mt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new o(this.O(Z()),this.O(Z()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Xt(t).nextSibling;Xt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,e=this,i,s){let r=this.strings,a=!1;if(r===void 0)t=L(this,t,e,0),a=!X(t)||t!==this._$AH&&t!==O,a&&(this._$AH=t);else{let l=t,c,u;for(t=r[0],c=0;c<r.length-1;c++)u=L(this,l[i+c],e,c),u===O&&(u=this._$AH[c]),a||=!X(u)||u!==this._$AH[c],u===g?t=g:t!==g&&(t+=(u??"")+r[c+1]),this._$AH[c]=u}a&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},St=class extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},At=class extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},Et=class extends W{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=L(this,t,e,0)??g)===O)return;let i=this._$AH,s=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==g&&(i===g||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ct=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}};var We=Pt.litHtmlPolyfillSupport;We?.(J,Q),(Pt.litHtmlVersions??=[]).push("3.3.3");var ce=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new Q(t.insertBefore(Z(),r),r,void 0,e??{})}return s._$AI(o),s};var Tt=globalThis,k=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ce(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};k._$litElement$=!0,k.finalized=!0,Tt.litElementHydrateSupport?.({LitElement:k});var je=Tt.litElementPolyfillSupport;je?.({LitElement:k});(Tt.litElementVersions??=[]).push("4.2.2");var lt=[{key:"delta-2-max",name:"Delta 2 Max",match:/delta 2 max/i},{key:"delta-2",name:"Delta 2",match:/delta 2/i},{key:"delta-3-max-plus",name:"Delta 3 Max Plus",match:/delta 3 max plus/i},{key:"delta-3-max",name:"Delta 3 Max",match:/delta 3 max/i},{key:"delta-pro-ultra",name:"Delta Pro Ultra",match:/delta pro ultra/i},{key:"delta-pro-3",name:"Delta Pro 3",match:/delta pro 3/i},{key:"delta-pro",name:"Delta Pro",match:/delta pro/i},{key:"river-2-pro",name:"River 2 Pro",match:/river 2 pro/i},{key:"stream-microinverter",name:"Stream Microinverter",match:/stream microinverter/i},{key:"stream-ultra",name:"Stream Ultra",match:/stream/i},{key:"stream-ultra-x",name:"Stream Ultra X"},{key:"powerstream",name:"PowerStream",match:/powerstream/i},{key:"glacier",name:"Glacier",match:/glacier/i},{key:"power-kits",name:"Power Kits",match:/power kits/i},{key:"smart-plug",name:"Smart Plug",match:/smart plug/i},{key:"wave",name:"WAVE",match:/wave/i},{key:"smart-home-panel-2",name:"Smart Home Panel 2",match:/smart home panel 2/i},{key:"smart-home-panel",name:"Smart Home Panel",match:/smart home panel/i}];function j(o){return lt.some(t=>t.key===o)?`${bt}/devices/${o}.png`:null}function I(o){return typeof o=="string"&&o.startsWith(bt)&&o.endsWith(".png")?`${o.slice(0,-4)}.webp`:null}function le(o){let t=Be(o);return t?j(t):null}function Be(o){if(!o)return null;let t=lt.find(e=>e.match&&e.match.test(o));return t?t.key:null}var Ke={sensor:["cms_batt_soc","bat_power","pv_total","grid_power","solar_energy","pv1_power","pv2_power","pv3_power","pv4_power","schuko1_power","schuko2_power","soh","bat_temp","chg_rem_time","dsg_rem_time","full_energy","cycles","calendar_soh"],binary_sensor:["battery_charging"],number:["max_charge_soc","min_discharge_soc","backup_reserve"],switch:["ac1","ac2"]};function Ge(o){return Object.values(o.entities||{}).filter(t=>t.platform===ot)}function Ve(o){if(o.translation_key)return o.translation_key;let t=o.entity_id.split(".")[1],e=t.lastIndexOf("_");return e>=0?t.slice(e+1):t}function dt(o){let t=new Map;for(let i of Ge(o))i.device_id&&(t.has(i.device_id)||t.set(i.device_id,[]),t.get(i.device_id).push(i));let e=[];for(let[i,s]of t)s.some(r=>Ve(r)==="pv_total")&&e.push({deviceId:i,device:o.devices?.[i],ents:s});return e}function ht(o,t){let e={};for(let i of t){let[s]=i.entity_id.split("."),r=i.translation_key;r&&(Ke[s]||[]).includes(r)&&(e[`${s}.${r}`]=i.entity_id)}if(!e["sensor.cms_batt_soc"])for(let i of t){if(!i.entity_id.startsWith("sensor."))continue;let s=o.states?.[i.entity_id];if(s?.attributes?.device_class==="battery"&&s?.attributes?.unit_of_measurement==="%"){e["sensor.cms_batt_soc"]=i.entity_id;break}}return e}async function Ft(o){if(!o?.callWS)return{};try{return await o.callWS({type:"energy/solar_forecast"})||{}}catch{return{}}}async function de(o){let t=await Ft(o),e=Object.keys(t);if(!e.length)return[];let i=[];try{i=await o.callWS({type:"config_entries/get"})||[]}catch{i=[]}let s=new Map(i.map(r=>[r.entry_id,r]));return e.map(r=>({id:r,title:s.get(r)?.title||s.get(r)?.domain||r,domain:s.get(r)?.domain||""}))}function he(o,t){let e=t===void 0?Object.keys(o||{}):t,i={};for(let s of e){let r=o?.[s]?.wh_hours;if(r)for(let[a,l]of Object.entries(r)){let c=Number(l);Number.isFinite(c)&&(i[a]=(i[a]||0)+c)}}return i}function Dt(o,t=new Date){let e=t.getFullYear(),i=t.getMonth(),s=t.getDate(),r={};for(let[a,l]of Object.entries(o||{})){let c=new Date(a);Number.isNaN(c.getTime())||c.getFullYear()===e&&c.getMonth()===i&&c.getDate()===s&&(r[c.getHours()]=(r[c.getHours()]||0)+l)}return r}function Nt(o,t=new Date){let e=Dt(o,t),i=Object.keys(e);return i.length?i.reduce((s,r)=>s+e[r],0):null}async function pe(o,t,e,i){if(!o?.callWS||!t)return null;let s=new Date,a={type:"recorder/statistics_during_period",start_time:(e instanceof Date?e:new Date(s.getFullYear(),s.getMonth(),s.getDate())).toISOString(),statistic_ids:[t],period:"hour",types:["change"]};i instanceof Date&&(a.end_time=i.toISOString());try{let c=(await o.callWS(a))?.[t];if(!Array.isArray(c))return null;let u={};for(let p of c){let h=new Date(p.start),m=Number(p.change);Number.isNaN(h.getTime())||!Number.isFinite(m)||(u[h.getHours()]=(u[h.getHours()]||0)+m)}return u}catch{return null}}function S(o){return typeof o=="string"&&/\{[{%]/.test(o)}function M(o){return typeof o=="string"&&/^[a-z_]+\.[a-zA-Z0-9_]+$/.test(o)}function b(o){let t=Number(o?.state);return Number.isFinite(t)?t:null}function R(o){return o==null||!Number.isFinite(o)?null:Math.abs(o)>=1e3?`${(o/1e3).toFixed(2)} kW`:`${Math.round(o)} W`}function tt(o){return o==null||!Number.isFinite(o)?{n:"\u2013",u:"W"}:Math.abs(o)>=1e3?{n:(o/1e3).toFixed(2),u:"kW"}:{n:String(Math.round(o)),u:"W"}}function ue(o){return{n:o!=null&&Number.isFinite(o)?o.toFixed(1):"\u2013",u:"kWh"}}function Ut(o,t=1){return o==null||!Number.isFinite(o)?null:Math.abs(o)>=1e3?`${(o/1e3).toFixed(t)} kWh`:`${Math.round(o)} Wh`}function fe(o){if(o==null||!Number.isFinite(o))return null;let t=Math.round(o);if(t<60)return`${t} min`;let e=Math.floor(t/60);if(e<24){let r=t%60;return r?`${e} h ${r} min`:`${e} h`}let i=Math.floor(e/24),s=e%24;return s?`${i} d ${s} h`:`${i} d`}var me=!1;async function pt(){if(!me){me=!0;try{await(await window.loadCardHelpers?.())?.importMoreInfoControl?.("light")}catch{}}}var ge={card:{no_device:"No EcoFlow Stream device found. Set up the EcoFlow IoT integration first.",device:"EcoFlow Stream",solar:"Solar",grid:"Grid",grid_import:"Importing",grid_export:"Exporting",grid_idle:"Grid idle",battery:"Battery",charging:"Charging",discharging:"Discharging",today:"Solar today",produced:"produced",forecast:"Forecast",of_forecast:"{pct}% of forecast",exceeded:"Forecast reached",reserve:"Reserve",charge_limit:"Charge \u2264",discharge_limit:"Discharge \u2265",ac1:"AC 1",ac2:"AC 2",off:"Off",confirm_action:"Are you sure?"},battery:{title:"Battery",idle:"Idle",health:"Health",calendar_health:"Calendar health",temperature:"Temperature",time_to_full:"Time to full",time_to_empty:"Time to empty",capacity:"Capacity",cycles:"Cycles"},confirm:{title:"Turn off socket?",ac_off:"Turn off {name}? Anything plugged into it will lose power.",cancel:"Cancel",turn_off:"Turn off"},panels:{title:"Solar panels",panel:"Panel {n}",total:"Total",none:"No per-panel solar data is available for this device."},editor:{device:"EcoFlow device",automatic:"Automatic",image:"Device image",entity:"Entity",value_template:"Value / template",mode_auto:"Auto",mode_entity:"Entity",mode_custom:"Custom",auto_value:"Auto-detected: {value}",not_found:"not found",overridden:"{n} overridden",shown:"Shown",nothing_shown:"Nothing shown",panel:"Panel {n}",panel_name:"Panel name",panel_entity:"Power sensor",panel_hidden:"Hidden from the card.",panels_hint:"Rename a panel, point it at a different sensor, or hide it from the breakdown. Use the toggle to show or hide each panel.",panels_count:"{n} panels",panels_hidden:"{n} hidden",loading:"Loading\u2026",forecast_hint:"Choose which solar-forecast providers to use \u2014 the same ones set up in Home Assistant's Energy dashboard (Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels).",forecast_none:"No solar forecast is configured. Add a forecast under Settings \u2192 Dashboards \u2192 Energy \u2192 Solar panels, then it appears here.",forecast_none_short:"Not configured",forecast_selected:"{n} of {total} providers",none:"Not set",collection_key:"Energy collection key",collection_hint:"Optional. To follow a date chosen in an Energy period selector card (Energy date selection), enter the same collection key here as on that card \u2014 it starts with \u201Cenergy_\u201D; use \u201Cenergy\u201D for a selector left on its default key. Leave empty to always show today.",stats_default:"Default (Solar, Grid)",stats_count:"{n} tiles",stats_default_hint:"The card shows live Solar and Grid power. Customize to show any entities you like instead, each with its own tap action.",stats_customize:"Customize tiles",stats_hint:"Add the entities to show as stat tiles. Set a name and icon, and choose what happens on tap (more-info by default).",stats_add:"Add tile",stats_reset:"Reset to default",stats_remove:"Remove",stats_move_up:"Move up",stats_move_down:"Move down",stat_n:"Tile {n}",stat_field_entity:"Entity",stat_field_name:"Name",stat_field_icon:"Icon",stat_field_tap_action:"Tap action"},page:{appearance:"Appearance",entities:"Entities",stats:"Stat tiles",panels:"Solar panels",forecast:"Solar forecast",advanced:"Advanced"},toggle:{show_image:"Show device image",show_today:"Show today's production",show_grid:"Show grid power",show_ac:"Show AC sockets",show_panels:"Tap solar power for per-panel breakdown",show_forecast:"Compare today's production with the forecast"},short:{show_image:"Image",show_today:"Today",show_grid:"Grid",show_ac:"AC sockets",show_panels:"Panels",show_forecast:"Forecast"},slot:{sensor:{cms_batt_soc:"Battery level",bat_power:"Battery power (charge/discharge speed)",pv_total:"Solar power",grid_power:"Grid power",solar_energy:"Solar energy (source for today's total)",pv1_power:"Solar panel 1",pv2_power:"Solar panel 2",pv3_power:"Solar panel 3",pv4_power:"Solar panel 4",schuko1_power:"AC socket 1 power",schuko2_power:"AC socket 2 power",forecast_today:"Forecast entity (expected production today)"},number:{max_charge_soc:"Charge limit",min_discharge_soc:"Discharge limit",backup_reserve:"Backup reserve"},switch:{ac1:"AC socket 1",ac2:"AC socket 2"}}};var _e={card:{no_device:"Kein EcoFlow Stream-Ger\xE4t gefunden. Richten Sie zuerst die EcoFlow IoT-Integration ein.",device:"EcoFlow Stream",solar:"Solar",grid:"Netz",grid_import:"Bezug",grid_export:"Einspeisung",grid_idle:"Netz inaktiv",battery:"Batterie",charging:"L\xE4dt",discharging:"Entl\xE4dt",today:"Solar heute",produced:"erzeugt",forecast:"Prognose",of_forecast:"{pct}% der Prognose",exceeded:"Prognose erreicht",reserve:"Reserve",charge_limit:"Laden \u2264",discharge_limit:"Entladen \u2265",ac1:"AC 1",ac2:"AC 2",off:"Aus",confirm_action:"Sind Sie sicher?"},battery:{title:"Batterie",idle:"Inaktiv",health:"Zustand",calendar_health:"Kalenderzustand",temperature:"Temperatur",time_to_full:"Zeit bis voll",time_to_empty:"Zeit bis leer",capacity:"Kapazit\xE4t",cycles:"Zyklen"},confirm:{title:"Steckdose ausschalten?",ac_off:"{name} ausschalten? Alles, was daran angeschlossen ist, verliert die Stromversorgung.",cancel:"Abbrechen",turn_off:"Ausschalten"},panels:{title:"Solarmodule",panel:"Modul {n}",total:"Gesamt",none:"F\xFCr dieses Ger\xE4t sind keine Daten je Solarmodul verf\xFCgbar."},editor:{device:"EcoFlow-Ger\xE4t",automatic:"Automatisch",image:"Ger\xE4tebild",entity:"Entit\xE4t",value_template:"Wert / Vorlage",mode_auto:"Auto",mode_entity:"Entit\xE4t",mode_custom:"Benutzerdefiniert",auto_value:"Automatisch erkannt: {value}",not_found:"nicht gefunden",overridden:"{n} \xFCberschrieben",shown:"Angezeigt",nothing_shown:"Nichts angezeigt",panel:"Modul {n}",panel_name:"Modulname",panel_entity:"Leistungssensor",panel_hidden:"Auf der Karte ausgeblendet.",panels_hint:"Benennen Sie ein Modul um, weisen Sie ihm einen anderen Sensor zu oder blenden Sie es aus der Aufschl\xFCsselung aus. Mit dem Schalter zeigen oder verbergen Sie jedes Modul.",panels_count:"{n} Module",panels_hidden:"{n} ausgeblendet",loading:"L\xE4dt\u2026",forecast_hint:"W\xE4hlen Sie, welche Solarprognose-Anbieter verwendet werden \u2014 dieselben, die im Energie-Dashboard von Home Assistant eingerichtet sind (Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule).",forecast_none:"Keine Solarprognose konfiguriert. F\xFCgen Sie unter Einstellungen \u2192 Dashboards \u2192 Energie \u2192 Solarmodule eine Prognose hinzu, dann erscheint sie hier.",forecast_none_short:"Nicht konfiguriert",forecast_selected:"{n} von {total} Anbietern",none:"Nicht festgelegt",collection_key:"Energie-Sammlungsschl\xFCssel",collection_hint:"Optional. Um einem in einer Energie-Zeitraumauswahl-Karte gew\xE4hlten Datum zu folgen (Energie-Datumsauswahl), geben Sie hier denselben Sammlungsschl\xFCssel ein wie auf jener Karte \u2014 er beginnt mit \u201Eenergy_\u201C; verwenden Sie \u201Eenergy\u201C f\xFCr eine Auswahl, die auf ihrem Standardschl\xFCssel belassen wurde. Leer lassen, um immer heute anzuzeigen.",stats_default:"Standard (Solar, Netz)",stats_count:"{n} Kacheln",stats_default_hint:"Die Karte zeigt die aktuelle Solar- und Netzleistung. Passen Sie sie an, um stattdessen beliebige Entit\xE4ten anzuzeigen \u2014 jede mit eigener Tipp-Aktion.",stats_customize:"Kacheln anpassen",stats_hint:"F\xFCgen Sie die Entit\xE4ten hinzu, die als Kacheln angezeigt werden sollen. Legen Sie Name und Symbol fest und w\xE4hlen Sie, was beim Tippen passiert (standardm\xE4\xDFig Info-Dialog).",stats_add:"Kachel hinzuf\xFCgen",stats_reset:"Auf Standard zur\xFCcksetzen",stats_remove:"Entfernen",stats_move_up:"Nach oben",stats_move_down:"Nach unten",stat_n:"Kachel {n}",stat_field_entity:"Entit\xE4t",stat_field_name:"Name",stat_field_icon:"Symbol",stat_field_tap_action:"Tipp-Aktion"},page:{appearance:"Darstellung",entities:"Entit\xE4ten",stats:"Kacheln",panels:"Solarmodule",forecast:"Solarprognose",advanced:"Erweitert"},toggle:{show_image:"Ger\xE4tebild anzeigen",show_today:"Heutige Erzeugung anzeigen",show_grid:"Netzleistung anzeigen",show_ac:"AC-Steckdosen anzeigen",show_panels:"F\xFCr Aufschl\xFCsselung je Modul auf Solarleistung tippen",show_forecast:"Heutige Erzeugung mit der Prognose vergleichen"},short:{show_image:"Bild",show_today:"Heute",show_grid:"Netz",show_ac:"AC-Steckdosen",show_panels:"Module",show_forecast:"Prognose"},slot:{sensor:{cms_batt_soc:"Batteriestand",bat_power:"Batterieleistung (Lade-/Entladegeschwindigkeit)",pv_total:"Solarleistung",grid_power:"Netzleistung",solar_energy:"Solarenergie (Quelle f\xFCr Tagessumme)",pv1_power:"Solarmodul 1",pv2_power:"Solarmodul 2",pv3_power:"Solarmodul 3",pv4_power:"Solarmodul 4",schuko1_power:"AC-Steckdose 1 Leistung",schuko2_power:"AC-Steckdose 2 Leistung",forecast_today:"Prognose-Entit\xE4t (erwartete Erzeugung heute)"},number:{max_charge_soc:"Ladelimit",min_discharge_soc:"Entladelimit",backup_reserve:"Notstromreserve"},switch:{ac1:"AC-Steckdose 1",ac2:"AC-Steckdose 2"}}};var Ot={en:ge,de:_e};function Ze(o){return(o?.locale?.language||o?.language||"en").split("-")[0]}function ve(o,t){let e=t.split(".").reduce((i,s)=>i?.[s],o);return typeof e=="string"?e:void 0}function z(o,t,e={}){let i=Ot[Ze(o)]||Ot.en,s=ve(i,t)??ve(Ot.en,t)??t;for(let[r,a]of Object.entries(e))s=s.replace(`{${r}}`,a);return s}var be=V`
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
`;function It(o){let t=[];for(let e=1;e<=4;e++){let i=o._config.panels?.[e]||{};if(i.hidden)continue;let s=`sensor.pv${e}_power`,r=o._state(s);r&&t.push({i:e,watts:b(r),id:o._entityId(s),name:i.name||null})}return t}function ye(o){let t=(r,a)=>z(o.hass,r,a),e=It(o);if(!e.length)return n`<div class="empty">${t("panels.none")}</div>`;let i=Math.max(1,...e.map(r=>r.watts||0)),s=e.reduce((r,a)=>r+(a.watts||0),0);return n`<div class="panels">
    ${e.map(r=>n`<div
        class="panel-row clickable"
        @click=${()=>o._moreInfoId(r.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${r.name||t("panels.panel",{n:r.i})}
          </span>
          <span class="panel-val">${R(r.watts)??"\u2013"}</span>
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
      <span>${R(s)??"\u2013"}</span>
    </div>
  </div>`}var ut=1e3,Rt=340,_={l:46,r:14,t:16,b:28};function $e(o,{actual:t,forecast:e,totalWh:i,forecastWh:s,currentHour:r,showForecast:a,title:l}){let c=(d,y)=>z(o.hass,d,y),u=ut-_.l-_.r,p=Rt-_.t-_.b,h=u/24,m=d=>_.l+d/24*u,f=0;for(let d=0;d<24;d++)f=Math.max(f,(t[d]||0)/1e3),a&&(f=Math.max(f,(e[d]||0)/1e3));let x=Xe(f>0?f:.1),B=d=>_.t+p-d/x*p,w=h*.66,E=[];for(let d=0;d<24;d++){let y=(t[d]||0)/1e3;if(y<=0)continue;let F=m(d+.5)-w/2,H=B(y),_t=d===r?"fc-actual fc-current":"fc-actual";E.push($`<rect class=${_t} x=${F.toFixed(1)} y=${H.toFixed(1)}
        width=${w.toFixed(1)} height=${(_.t+p-H).toFixed(1)} rx="2"></rect>`)}let T=null;if(a){let d=[];for(let y=0;y<=24;y++)d.push(`${m(y).toFixed(1)},${B((e[y]||0)/1e3).toFixed(1)}`);T=$`<polyline class="fc-line" points=${d.join(" ")}></polyline>`}let C=[],Ht=4;for(let d=0;d<=Ht;d++){let y=x/Ht*d,F=B(y);C.push($`<line class="fc-grid" x1=${_.l} y1=${F.toFixed(1)} x2=${ut-_.r} y2=${F.toFixed(1)}></line>`),C.push($`<text class="fc-axis fc-axis-y" x=${_.l-6} y=${(F+4).toFixed(1)}>${Je(y)}</text>`)}let Lt=[];for(let d=0;d<=24;d+=4)Lt.push($`<text class="fc-axis fc-axis-x" x=${m(d).toFixed(1)} y=${Rt-8}>${d}:00</text>`);let et=a&&s>0&&i!=null?Math.round(i/s*100):null,gt=d=>{o._fcTip!==d&&(o._fcTip=d,o.requestUpdate())},Wt=()=>{o._fcTip!=null&&(o._fcTip=null,o.requestUpdate())},jt=[];for(let d=0;d<24;d++)jt.push($`<rect class="fc-hit" x=${m(d).toFixed(1)} y=${_.t} width=${h.toFixed(1)} height=${p}
        @pointerenter=${()=>gt(d)} @pointermove=${()=>gt(d)}
        @pointerdown=${()=>gt(d)}></rect>`);let K=o._fcTip,Bt=K!=null&&K>=0&&K<24,Ce=Bt?$`<rect class="fc-band" x=${m(K).toFixed(1)} y=${_.t} width=${h.toFixed(1)} height=${p}></rect>`:null,Pe=Bt?Me(K):null;function Me(d){let y=((t[d]||0)/1e3).toFixed(2),F=((e[d]||0)/1e3).toFixed(2),H=184,_t=a?84:60,it=m(d+.5)-H/2;it=Math.max(_.l,Math.min(ut-_.r-H,it));let st=_.t+6,vt=it+12;return $`<g class="fc-tip" pointer-events="none">
      <rect class="fc-tip-box" x=${it.toFixed(1)} y=${st} width=${H} height=${_t} rx="7"></rect>
      <text class="fc-tip-time" x=${vt} y=${st+24}>${xe(d)}:00 – ${xe((d+1)%24)}:00</text>
      <text class="fc-tip-line" x=${vt} y=${st+46}>${c("card.produced")}: <tspan class="v">${y} kWh</tspan></text>
      ${a?$`<text class="fc-tip-line" x=${vt} y=${st+68}>${c("card.forecast")}: <tspan class="v">${F} kWh</tspan></text>`:null}
    </g>`}return n`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${l||c("card.today")}</span>
      <span class="fc-graph-total"
        >${(i!=null?i/1e3:0).toFixed(2)} kWh</span
      >
    </div>
    ${et!=null?n`<div class="fc-progress" title=${c("card.of_forecast",{pct:et})}>
          <div class="fc-progress-track">
            <div
              class="fc-progress-fill"
              style="width:${Math.min(100,et)}%"
            ></div>
          </div>
          <span class="fc-progress-label">${c("card.of_forecast",{pct:et})}</span>
        </div>`:""}
    <svg
      class="chart"
      viewBox="0 0 ${ut} ${Rt}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      @pointerleave=${Wt}
      @pointercancel=${Wt}
    >
      ${C}${Lt}
      <text class="fc-axis fc-unit" x=${_.l-6} y=${_.t-4}>kWh</text>
      ${Ce}${E}${T}${jt}${Pe}
    </svg>
    ${a?n`<div class="fc-graph-legend">
          <span class="lg lg-actual">${c("card.produced")}</span>
          <span class="lg lg-fc">${c("card.forecast")}</span>
        </div>`:""}
  </div>`}function Xe(o){let t=Math.pow(10,Math.floor(Math.log10(o))),e=o/t;return(e<=1?1:e<=2?2:e<=5?5:10)*t}function Je(o){return o>=10?Math.round(o).toString():o.toFixed(1).replace(/\.0$/,"")}function xe(o){return String(o).padStart(2,"0")}var Qe=300*1e3,ft=class extends k{static styles=be;static get properties(){return{hass:{},_config:{},_dialog:{state:!0},_confirmAc:{state:!0}}}constructor(){super(),this._dialog=null,this._confirmAc=null,this._battDir="",this._todayWh=void 0,this._hourly={},this._forecasts={},this._forecastsFetched=!1,this._period=null,this._collUnsub=null,this._collProp=void 0}connectedCallback(){super.connectedCallback(),pt(),this._statsTimer=setInterval(()=>{this._refreshData(),this._refreshForecast()},Qe)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._statsTimer),this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=void 0;for(let t of Object.values(this._tmplUnsub||{}))typeof t=="function"&&t();this._tmplUnsub={}}setConfig(t){this._config=t||{}}static getConfigElement(){return document.createElement(`${v}-editor`)}static getStubConfig(){return{}}getCardSize(){return 6}_t(t,e){return z(this.hass,t,e)}_show(t,e=!0){return this._config[t]??e}get _device(){let t=dt(this.hass);return t.length?this._config.device&&t.find(e=>e.deviceId===this._config.device)||t[0]:null}_state(t){let e=this._config.entities?.[t];if(e){if(S(e)){let s=this._templateResults?.[e];return{state:s===void 0?"unknown":String(s),attributes:{}}}return M(e)?this.hass.states[e]:{state:e,attributes:{}}}let i=this._map?.[t];return i?this.hass.states[i]:void 0}_entityId(t){let e=this._config.entities?.[t];return e&&M(e)&&!S(e)?e:this._map?.[t]}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&(this._syncTemplates(),this._bindEnergyCollection(),this._todayWh===void 0&&this._refreshData(),this._forecastsFetched||(this._forecastsFetched=!0,this._refreshForecast()))}async _refreshData(){let t=this._entityId("sensor.solar_energy");if(!t||!this.hass)return;let{start:e,end:i}=this._dataRange(),s=await pe(this.hass,t,e,i);this._hourly=s||{},this._todayWh=s?Object.values(s).reduce((r,a)=>r+(a||0),0):null,this.requestUpdate()}async _refreshForecast(){this.hass&&(this._forecasts=await Ft(this.hass),this.requestUpdate())}_dataRange(){if(this._period?.start instanceof Date)return{start:this._period.start,end:this._period.end instanceof Date?this._period.end:new Date,ref:this._period.start};let t=new Date;return{start:new Date(t.getFullYear(),t.getMonth(),t.getDate()),end:t,ref:t}}_bindEnergyCollection(){let t=this._config.collection_key,e=t?`_${t}`:null;if(e!==this._collProp&&(this._collUnsub&&this._collUnsub(),this._collUnsub=null,this._collProp=e,this._period=null),!e||this._collUnsub||!this.hass?.connection)return;let i=this.hass.connection[e];if(!i||typeof i.subscribe!="function")return;let s=()=>{this._period={start:i.start,end:i.end},this._refreshData()};this._collUnsub=i.subscribe(()=>s()),s()}_mergedForecast(){return he(this._forecasts,this._config.forecast_config_entries)}_forecastTodayKWh(){let t=Nt(this._mergedForecast(),this._dataRange().ref);return t!=null?t/1e3:null}_isToday(){let t=this._dataRange().ref,e=new Date;return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}_periodLabel(){return this._isToday()?this._t("card.today"):this._dataRange().ref.toLocaleDateString(this.hass?.locale?.language||void 0,{weekday:"short",day:"numeric",month:"short"})}async _syncTemplates(){if(!this.hass?.connection)return;this._tmplUnsub=this._tmplUnsub||{},this._templateResults=this._templateResults||{};let t=[...Object.values(this._config.entities||{}),this._config.title].filter(e=>S(e));for(let e of t)if(!this._tmplUnsub[e]){this._tmplUnsub[e]=!0;try{this._tmplUnsub[e]=await this.hass.connection.subscribeMessage(i=>{this._templateResults[e]=i.result,this.requestUpdate()},{type:"render_template",template:e})}catch{this._templateResults[e]="error",this.requestUpdate()}}for(let e of Object.keys(this._tmplUnsub))if(!t.includes(e)){let i=this._tmplUnsub[e];typeof i=="function"&&i(),delete this._tmplUnsub[e],delete this._templateResults[e]}}_moreInfo(t){this._moreInfoId(this._entityId(t))}_moreInfoId(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}render(){if(!this.hass)return n``;let t=this._device;return t?(this._map=ht(this.hass,t.ents),this._isToday()?n`<ha-card>
      ${this._renderHead(t)}
      ${this._renderStats()}
      ${this._show("show_today")?this._renderToday():""}
      ${this._dialog==="panels"?this._dialogFrame(this._t("panels.title"),ye(this)):""}
      ${this._dialog==="today"?this._dialogFrame(this._periodLabel(),this._forecastGraph(),"large"):""}
      ${this._dialog==="battery"?this._dialogFrame(this._t("battery.title"),this._renderBatteryDetail()):""}
      ${this._confirmAc?this._renderConfirmAc():""}
    </ha-card>`:n`<ha-card>${this._forecastGraph()}</ha-card>`):n`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`}_dialogFrame(t,e,i="medium"){return n`<ha-adaptive-dialog
      open
      width=${i}
      header-title=${t}
      @closed=${()=>this._dialog=null}
    >
      <div class="dlg-body">${e}</div>
    </ha-adaptive-dialog>`}_imageSrc(t){let e=t?.device?.model;return this._config.image_url||(this._config.image?j(this._config.image):le(e))}_renderHead(t){let e=this._config.title,i=e&&S(e)?String(this._templateResults?.[e]??""):e,s=t.device?.model,r=i||t.device?.name_by_user||t.device?.name||s||this._t("card.device"),a=this._imageSrc(t);return n`<div class="head">
      <div class="head-left">
        <div class="name">${r}</div>
        ${s&&s!==r?n`<div class="subtitle">${s}</div>`:""}
        ${this._show("show_ac")?this._renderAc():""}
      </div>
      ${this._renderBatteryCircle(a,r)}
    </div>`}_renderBatteryCircle(t,e){let i=this._state("sensor.cms_batt_soc"),s=this._show("show_image")&&t;if(!i&&!s)return"";let r=b(i),a=b(this._state("sensor.bat_power")),l=this._state("binary_sensor.battery_charging")?.state==="on"||a!=null&&a>1,c=!l&&a!=null&&a<-1,u=l?"charge":c?"discharge":r!=null&&r<=15?"low":"",p=l?"charge":c?"discharge":"";p&&(this._battDir=p);let h=p||this._battDir,m=!!p,f=2*Math.PI*44,x=r!=null?Math.max(0,Math.min(100,r)):0,B=[{v:b(this._state("number.min_discharge_soc")),cls:"discharge",label:this._t("card.discharge_limit")},{v:b(this._state("number.backup_reserve")),cls:"reserve",label:this._t("card.reserve")},{v:b(this._state("number.max_charge_soc")),cls:"charge",label:this._t("card.charge_limit")}].filter(w=>w.v!=null);return n`<div
      class="batt-circle clickable ${p}"
      @click=${()=>this._dialog="battery"}
    >
      ${i?n`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${u}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${f.toFixed(1)};stroke-dashoffset:${(f*(1-x/100)).toFixed(1)}"
            ></circle>
            ${h?$`<circle
                  class="ring-spin ${h} ${m?"show":""}"
                  cx="50"
                  cy="50"
                  r="44"
                  stroke-dasharray="16 261"
                ></circle>`:""}
            ${B.map(w=>{let E=Math.max(0,Math.min(100,w.v))/100*2*Math.PI,T=Math.sin(E),C=Math.cos(E);return $`<line
                class="ring-tick ${w.cls}"
                x1=${(50+39.5*T).toFixed(1)}
                y1=${(50-39.5*C).toFixed(1)}
                x2=${(50+48.5*T).toFixed(1)}
                y2=${(50-48.5*C).toFixed(1)}
              ><title>${w.label} ${Math.round(w.v)}%</title></line>`})}
          </svg>`:""}
      ${i&&h?n`<div class="batt-particles ${h} ${m?"show":""}">
            ${Array.from({length:12},(w,E)=>{let T=E*30,C=E*5%12/12*1.6;return n`<span
                class="particle"
                style="--angle:${T}deg;animation-delay:${C.toFixed(2)}s"
              ></span>`})}
          </div>`:""}
      ${s?n`<picture
            >${I(t)?n`<source
                  srcset=${I(t)}
                  type="image/webp"
                />`:""}<img class="device-img" src="${t}" alt="${e}"
          /></picture>`:i?n`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${i}
            ></ha-state-icon>`:n`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${i&&(l||c)&&a!=null?n`<span class="batt-speed ${p}">
            <ha-icon
              icon=${l?"mdi:flash":"mdi:battery-arrow-down"}
            ></ha-icon>${R(Math.abs(a))}
          </span>`:""}
      ${i?n`<span class="batt-badge"
            >${r!=null?Math.round(r):"\u2013"}%</span
          >`:""}
    </div>`}_renderBatteryDetail(){let t=this._device,e=this._show("show_image")&&this._imageSrc(t),i=t?.device?.name||t?.device?.model||this._t("card.device"),s=b(this._state("sensor.cms_batt_soc")),r=b(this._state("sensor.bat_power")),a=this._state("binary_sensor.battery_charging")?.state==="on"||r!=null&&r>1,l=!a&&r!=null&&r<-1,c=a?"charge":l?"discharge":"",u=a?"mdi:flash":l?"mdi:battery-arrow-down":"mdi:battery",p=a?this._t("card.charging"):l?this._t("card.discharging"):this._t("battery.idle"),h=(a||l)&&r!=null?R(Math.abs(r)):null,m=[{slot:"sensor.soh",icon:"mdi:heart-pulse",label:this._t("battery.health")},{slot:"sensor.calendar_soh",icon:"mdi:calendar-heart",label:this._t("battery.calendar_health")},{slot:"sensor.bat_temp",icon:"mdi:thermometer",label:this._t("battery.temperature")},...a?[{slot:"sensor.chg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_full")}]:[],...l?[{slot:"sensor.dsg_rem_time",icon:"mdi:battery-clock",label:this._t("battery.time_to_empty")}]:[],{slot:"sensor.full_energy",icon:"mdi:battery-high",label:this._t("battery.capacity")},{slot:"sensor.cycles",icon:"mdi:battery-sync",label:this._t("battery.cycles")}].map(f=>({...f,value:this._battTileValue(f.slot)})).filter(f=>f.value!=null);return n`<div class="batt-detail">
      <div class="batt-hero">
        ${e?n`<picture
              >${I(e)?n`<source srcset=${I(e)} type="image/webp" />`:""}<img class="batt-hero-img" src=${e} alt=${i}
            /></picture>`:n`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${s!=null?Math.round(s):"\u2013"}<span class="batt-hero-u">%</span></span
          >
          <span class="batt-hero-status ${c}">
            <ha-icon icon=${u}></ha-icon>${p}${h?` \xB7 ${h}`:""}
          </span>
        </div>
      </div>
      ${m.length?n`<div class="batt-grid">
            ${m.map(f=>{let x=this._entityId(f.slot);return n`<div
                class="batt-tile ${x?"clickable":""}"
                @click=${x?()=>this._moreInfoId(x):null}
              >
                <ha-icon icon=${f.icon}></ha-icon>
                <div class="batt-tile-text">
                  <span class="batt-tile-val">${f.value}</span>
                  <span class="batt-tile-label">${f.label}</span>
                </div>
              </div>`})}
          </div>`:""}
    </div>`}_battTileValue(t){let e=this._state(t),i=b(e);if(i==null)return null;let s=e.attributes?.unit_of_measurement||"";return s==="W"?R(i):s==="Wh"?Ut(i):s==="kWh"?Ut(i*1e3):s==="min"?fe(i):s==="%"?`${Math.round(i)}%`:s?`${Math.round(i)} ${s}`:String(Math.round(i))}_renderAc(){let t=[{sw:"switch.ac1",pw:"sensor.schuko1_power",label:this._t("card.ac1")},{sw:"switch.ac2",pw:"sensor.schuko2_power",label:this._t("card.ac2")}].map(e=>({...e,swState:this._state(e.sw),pwState:this._state(e.pw)})).filter(e=>e.swState||e.pwState);return t.length?n`<div class="ac">
      ${t.map(e=>{let i=e.swState?.state==="on",s=b(e.pwState);return n`<div
          class="ac-socket clickable"
          @click=${()=>this._moreInfoId(this._entityId(e.pw)||this._entityId(e.sw))}
        >
          <ha-icon class="ac-icon ${i?"on":""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${e.label}</span>
            <span class="ac-power">
              ${e.swState&&!i?this._t("card.off"):s!=null?this._metric(tt(s)):e.pwState?"\u2014":""}
            </span>
          </div>
          ${e.swState?n`<ha-switch
                .checked=${i}
                @click=${r=>r.stopPropagation()}
                @change=${()=>this._toggleSwitch(e.sw,e.label)}
              ></ha-switch>`:""}
        </div>`})}
    </div>`:""}_toggleSwitch(t,e){let i=this._entityId(t),s=i?this.hass.states[i]:null;!i||!s||(s.state==="on"?this._confirmAc={slot:t,label:e}:this.hass.callService("switch","turn_on",{entity_id:i}))}_renderConfirmAc(){let{label:t}=this._confirmAc,e=()=>this._confirmAc=null;return n`<ha-adaptive-dialog
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
    </ha-adaptive-dialog>`}_metric(t){return n`<span class="metric"
      ><span class="metric-num">${t.n}</span
      ><span class="metric-unit">${t.u}</span></span
    >`}_renderStats(){if(Array.isArray(this._config.stats))return n`<div class="stats custom">
        ${this._config.stats.map(a=>this._renderCustomStat(a))}
      </div>`;let t=b(this._state("sensor.pv_total")),e=It(this),i=this._show("show_panels")&&e.length>0,s=this._state("sensor.grid_power"),r=b(s);return n`<div class="stats">
      <div
        class="stat solar ${i?"clickable":""}"
        @click=${i?()=>this._dialog="panels":null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t("card.solar")}
          ${i?n`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`:""}
        </div>
        <div class="stat-value">${this._metric(tt(t))}</div>
        ${i?n`<div class="stat-sub">
              ${e.length} ${this._t("panels.title").toLowerCase()}
            </div>`:""}
      </div>
      ${this._show("show_grid")?this._renderGrid(r):n`<div></div>`}
    </div>`}_renderGrid(t){let e=t!=null&&t>1,i=t!=null&&t<-1,s=e?"import":i?"export":"",r=e?this._t("card.grid_import"):i?this._t("card.grid_export"):this._t("card.grid_idle");return n`<div
      class="stat grid ${s} clickable"
      @click=${()=>this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${i?"mdi:transmission-tower-export":e?"mdi:transmission-tower-import":"mdi:transmission-tower"}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${this._metric(tt(t!=null?Math.abs(t):null))}
      </div>
      <div class="stat-sub">${r}</div>
    </div>`}_renderCustomStat(t){if(!t||!t.entity&&!t.name)return n``;let e=t.entity?this.hass.states[t.entity]:void 0,i=t.name||e?.attributes?.friendly_name||t.entity||"",s=t.tap_action,r=!s||s.action!=="none";return n`<div
      class="stat ${r?"clickable":""}"
      @click=${r?()=>this._handleAction(s,t.entity):null}
    >
      <div class="stat-head">
        ${t.icon?n`<ha-icon icon=${t.icon}></ha-icon>`:e?n`<ha-state-icon
                .hass=${this.hass}
                .stateObj=${e}
              ></ha-state-icon>`:n`<ha-icon icon="mdi:gauge"></ha-icon>`}
        ${i}
      </div>
      <div class="stat-value">${this._metric(this._statValue(e))}</div>
    </div>`}_statValue(t){let e=t?.state;if(e==null||e==="unavailable"||e==="unknown")return{n:"\u2013",u:""};let i=b(t),s=t.attributes?.unit_of_measurement||"";return i==null?{n:e,u:""}:s==="W"?tt(i):{n:Number.isInteger(i)?String(i):i.toFixed(1),u:s}}_handleAction(t,e){let i=t||{action:"more-info"},s=i.action||"more-info";if(s!=="none"){if(i.confirmation){let r=i.confirmation.text||this._t("card.confirm_action")||"Are you sure?";if(!window.confirm(r))return}switch(s){case"more-info":this._moreInfoId(i.entity||e);return;case"toggle":{let r=i.entity||e;r&&this.hass.callService("homeassistant","toggle",{entity_id:r});return}case"navigate":i.navigation_path&&(history.pushState(null,"",i.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0})));return;case"url":i.url_path&&window.open(i.url_path,i.new_tab===!1?"_self":"_blank");return;case"perform-action":case"call-service":{let r=i.perform_action||i.service,[a,l]=(r||"").split(".",2);a&&l&&this.hass.callService(a,l,i.data||i.service_data||{},i.target);return}default:this._moreInfoId(i.entity||e)}}}_forecastGraph(){let t=this._dataRange().ref,e=this._mergedForecast();return $e(this,{title:this._periodLabel(),actual:this._hourly||{},forecast:Dt(e,t),totalWh:this._todayWh,forecastWh:Nt(e,t),currentHour:this._isToday()?new Date().getHours():null,showForecast:this._show("show_forecast")&&Object.keys(this._forecasts||{}).length>0})}_renderToday(){let t=this._todayWh!=null?this._todayWh/1e3:null,e=Object.keys(this._forecasts||{}).length>0,i=this._show("show_forecast")&&e?this._forecastTodayKWh():null,s=i!=null&&i>0,r=s&&t!=null?Math.min(100,Math.round(t/i*100)):null,a=r!=null&&r>=100;return n`<div
      class="today clickable"
      @click=${()=>this._dialog="today"}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(ue(t))}</span>
      </div>
      ${s?n`<div class="fc-bar">
              <div
                class="fc-fill ${a?"met":""}"
                style="width:${r}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${t!=null?t.toFixed(1):"\u2013"}</b> /
                ${i.toFixed(1)} kWh
              </span>
              <span>
                ${a?this._t("card.exceeded"):this._t("card.of_forecast",{pct:r??0})}
              </span>
            </div>`:""}
    </div>`}};function we(o,t){if(!t)return null;let e=o?.themes?.darkMode?"dark_":"";return`https://brands.home-assistant.io/${t}/${e}icon.png`}var ti=[{name:"device",selector:{device:{integration:ot}}}],ke={appearance:[["show_image",!0,"mdi:image-outline"],["show_today",!0,"mdi:white-balance-sunny"],["show_grid",!0,"mdi:transmission-tower"],["show_ac",!0,"mdi:power-socket-de"],["show_panels",!0,"mdi:solar-panel"]],forecast:[["show_forecast",!0,"mdi:chart-line"]]},Se={entities:[["sensor.cms_batt_soc","mdi:battery-high"],["sensor.bat_power","mdi:battery-charging"],["sensor.pv_total","mdi:solar-power-variant"],["sensor.grid_power","mdi:transmission-tower"],["sensor.solar_energy","mdi:lightning-bolt"],["switch.ac1","mdi:power-socket-de"],["switch.ac2","mdi:power-socket-de"],["sensor.schuko1_power","mdi:flash"],["sensor.schuko2_power","mdi:flash"]]},Ae=new Set,Ee=[{id:"appearance",icon:"mdi:palette-outline"},{id:"entities",icon:"mdi:tune-variant"},{id:"stats",icon:"mdi:chart-box-outline"},{id:"panels",icon:"mdi:solar-panel"},{id:"forecast",icon:"mdi:weather-partly-cloudy"},{id:"advanced",icon:"mdi:cog-outline"}],ei=4,mt=class extends k{static get properties(){return{hass:{},_config:{},_page:{state:!0},_modes:{state:!0},_providers:{state:!0}}}constructor(){super(),this._page=null,this._modes={},this._providers=void 0}connectedCallback(){super.connectedCallback(),pt()}setConfig(t){this._config=t||{}}_t(t,e){return z(this.hass,t,e)}updated(){this.hass&&this._providers===void 0&&!this._loadingProviders&&(this._loadingProviders=!0,de(this.hass).then(t=>{this._providers=t}))}render(){if(!this.hass)return n``;let t=Ee.find(e=>e.id===this._page);return t?this._renderSubpage(t):this._renderRoot()}_defaults(){let t=dt(this.hass),e=this._config.device&&t.find(i=>i.deviceId===this._config.device)||t[0];return e?ht(this.hass,e.ents):{}}_renderRoot(){return n`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ti}
        .computeLabel=${()=>this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${Ee.map(t=>n`<button
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
      </div>`}_summary(t){if(t==="panels"){let a=this._detectedPanels(),l=a.filter(u=>this._config.panels?.[u]?.hidden).length,c=this._t("editor.panels_count",{n:a.length});return l&&(c+=` \xB7 ${this._t("editor.panels_hidden",{n:l})}`),c}if(t==="forecast"){let a=this._providers;if(a===void 0)return this._t("editor.automatic");if(!a.length)return this._t("editor.forecast_none_short");let l=this._config.forecast_config_entries,c=l===void 0?a.length:l.length;return this._t("editor.forecast_selected",{n:c,total:a.length})}if(t==="stats"){let a=this._config.stats;return Array.isArray(a)?this._t("editor.stats_count",{n:a.length}):this._t("editor.stats_default")}if(t==="advanced")return this._config.collection_key||this._t("editor.none");let e=(Se[t]||[]).filter(([a])=>this._config.entities?.[a]).length,i=e?` \xB7 ${this._t("editor.overridden",{n:e})}`:"",s=ke[t]||[];if(!s.length)return e?this._t("editor.overridden",{n:e}):this._t("editor.automatic");let r=s.filter(([a,l])=>this._config[a]??l);return r.length?r.map(([a])=>this._t(`short.${a}`)).join(", ")+i:`${this._t("editor.nothing_shown")}${i}`}_renderSubpage(t){return n`<div class="subpage-head">
        <button class="back" @click=${()=>this._page=null}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${t.id}`)}</span>
      </div>
      ${(ke[t.id]||[]).map(([e,i,s])=>this._renderToggle(e,i,s))}
      ${t.id==="appearance"?this._renderImagePicker():t.id==="stats"?this._renderStatsPage():t.id==="panels"?this._renderPanelsPage():t.id==="forecast"?this._renderForecastPage():t.id==="advanced"?this._renderAdvancedPage():(Se[t.id]||[]).map(([e,i])=>this._renderSlot(e,i))}`}_renderImagePicker(){let t=this._config.image,e=this._config.image_url,i=this._config.show_image??!0;return n`<div class="section">
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
        ${lt.map(s=>n`<button
            class="img-opt ${t===s.key?"on":""}"
            title=${s.name}
            @click=${()=>this._setImage(s.key)}
          >
            <picture
              ><source
                srcset=${I(j(s.key))}
                type="image/webp"
              /><img
                src=${j(s.key)}
                loading="lazy"
                alt=${s.name} /></picture
            >
            <span class="img-label">${s.name}</span>
          </button>`)}
      </div>`}_setImage(t){let e={...this._config,type:`custom:${v}`};delete e.image_url,t?e.image=t:delete e.image,this._dispatch(e)}_renderAdvancedPage(){return n`<div class="hint top-hint">${this._t("editor.collection_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{value:this._config.collection_key||""}}
        .schema=${[{name:"value",selector:{text:{}}}]}
        .computeLabel=${()=>this._t("editor.collection_key")}
        @value-changed=${t=>{t.stopPropagation(),this._setCollectionKey(t.detail.value.value||"")}}
      ></ha-form>`}_setCollectionKey(t){let e={...this._config,type:`custom:${v}`};t?e.collection_key=t:delete e.collection_key,this._dispatch(e)}_renderStatsPage(){let t=this._config.stats;return Array.isArray(t)?n`<div class="hint top-hint">${this._t("editor.stats_hint")}</div>
      ${t.map((e,i)=>this._renderStatBlock(e,i,t.length))}
      <div class="stats-actions">
        <button class="add-btn" @click=${()=>this._addStat()}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("editor.stats_add")}
        </button>
        <button class="text-btn" @click=${()=>this._resetStats()}>
          ${this._t("editor.stats_reset")}
        </button>
      </div>`:n`<div class="hint top-hint">
          ${this._t("editor.stats_default_hint")}
        </div>
        <button class="filled-btn" @click=${()=>this._seedDefaultStats()}>
          ${this._t("editor.stats_customize")}
        </button>`}_renderStatBlock(t,e,i){let s=[{name:"entity",selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"tap_action",selector:{ui_action:{}}}],r=t.name||t.entity||this._t("editor.stat_n",{n:e+1});return n`<div class="panel-block">
      <div class="panel-title-row">
        <ha-icon icon=${t.icon||"mdi:chart-box-outline"}></ha-icon>
        <span class="panel-title">${r}</span>
        <button
          class="icon-btn"
          .disabled=${e===0}
          title=${this._t("editor.stats_move_up")}
          @click=${()=>this._moveStat(e,-1)}
        >
          <ha-icon icon="mdi:arrow-up"></ha-icon>
        </button>
        <button
          class="icon-btn"
          .disabled=${e===i-1}
          title=${this._t("editor.stats_move_down")}
          @click=${()=>this._moveStat(e,1)}
        >
          <ha-icon icon="mdi:arrow-down"></ha-icon>
        </button>
        <button
          class="icon-btn danger"
          title=${this._t("editor.stats_remove")}
          @click=${()=>this._removeStat(e)}
        >
          <ha-icon icon="mdi:delete-outline"></ha-icon>
        </button>
      </div>
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${s}
        .computeLabel=${a=>this._t(`editor.stat_field_${a.name}`)}
        @value-changed=${a=>{a.stopPropagation(),this._updateStat(e,a.detail.value)}}
      ></ha-form>
    </div>`}_seedDefaultStats(){let t=this._defaults(),e=i=>{let s=this._config.entities?.[i];return s&&M(s)&&!S(s)?s:t[i]||""};this._setStats([{entity:e("sensor.pv_total"),name:this._t("card.solar"),icon:"mdi:solar-power-variant"},{entity:e("sensor.grid_power"),name:this._t("card.grid"),icon:"mdi:transmission-tower"}])}_updateStat(t,e){let i=[...this._config.stats||[]],s={};for(let[r,a]of Object.entries(e))a===""||a==null||(s[r]=a);i[t]=s,this._setStats(i)}_addStat(){this._setStats([...this._config.stats||[],{}])}_removeStat(t){let e=[...this._config.stats||[]];e.splice(t,1),this._setStats(e)}_moveStat(t,e){let i=[...this._config.stats||[]],s=t+e;s<0||s>=i.length||([i[t],i[s]]=[i[s],i[t]],this._setStats(i))}_setStats(t){this._dispatch({...this._config,stats:t,type:`custom:${v}`})}_resetStats(){let t={...this._config,type:`custom:${v}`};delete t.stats,this._dispatch(t)}_renderForecastPage(){let t=this._providers;if(t===void 0)return n`<div class="hint top-hint">${this._t("editor.loading")}</div>`;if(!t.length)return n`<div class="hint top-hint">${this._t("editor.forecast_none")}</div>`;let e=this._config.show_forecast??!0,i=this._config.forecast_config_entries,s=r=>i===void 0?!0:i.includes(r);return n`<div class="hint top-hint">${this._t("editor.forecast_hint")}</div>
      <div class=${e?"":"dim"}>
        ${t.map(r=>n`<div class="row">
            ${this._renderBrand(r.domain)}
            <span class="row-label"
              >${r.title}<span class="row-sub">${r.domain}</span></span
            >
            <ha-switch
              .checked=${s(r.id)}
              .disabled=${!e}
              @change=${a=>this._toggleProvider(r.id,a.target.checked)}
            ></ha-switch>
          </div>`)}
      </div>`}_renderBrand(t){let e=we(this.hass,t);return n`<span class="provider-icon">
      <ha-icon icon="mdi:weather-sunny"></ha-icon>
      ${e?n`<img
            class="brand"
            src=${e}
            @error=${i=>{i.target.style.display="none"}}
          />`:""}
    </span>`}_toggleProvider(t,e){let i=(this._providers||[]).map(a=>a.id),s=this._config.forecast_config_entries??i.slice();s=e?[...new Set([...s,t])]:s.filter(a=>a!==t);let r={...this._config,type:`custom:${v}`};s.length===i.length&&i.every(a=>s.includes(a))?delete r.forecast_config_entries:r.forecast_config_entries=s,this._dispatch(r)}_detectedPanels(){let t=this._defaults(),e=[];for(let i=1;i<=ei;i++)(t[`sensor.pv${i}_power`]||this._config.entities?.[`sensor.pv${i}_power`])&&e.push(i);return e.length?e:[1,2,3,4]}_renderPanelsPage(){return n`<div class="hint top-hint">${this._t("editor.panels_hint")}</div>
      ${this._detectedPanels().map(t=>this._renderPanelConfig(t))}`}_renderPanelConfig(t){let e=this._config.panels?.[t]||{},i=!!e.hidden,s=`sensor.pv${t}_power`;return n`<div class="panel-block">
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
      ${i?n`<div class="hint">${this._t("editor.panel_hidden")}</div>`:n`<ha-form
              .hass=${this.hass}
              .data=${{value:e.name||""}}
              .schema=${[{name:"value",selector:{text:{}}}]}
              .computeLabel=${()=>this._t("editor.panel_name")}
              @value-changed=${r=>{r.stopPropagation(),this._dispatch(this._withPanel(t,{name:r.detail.value.value||""}))}}
            ></ha-form>
            ${this._renderSlot(s,"mdi:flash",this._t("editor.panel_entity"))}`}
    </div>`}_withPanel(t,e){let i={...this._config.panels||{}},s={...i[t]||{}};for(let[a,l]of Object.entries(e))l===""||l==null||l===!1?delete s[a]:s[a]=l;Object.keys(s).length?i[t]=s:delete i[t];let r={...this._config,panels:i,type:`custom:${v}`};return Object.keys(i).length||delete r.panels,r}_renderToggle(t,e,i){return n`<div class="row">
      <ha-icon icon=${i}></ha-icon>
      <span class="row-label">${this._t(`toggle.${t}`)}</span>
      <ha-switch
        .checked=${this._config[t]??e}
        @change=${s=>this._toggleDisplay(t,e,s.target.checked)}
      ></ha-switch>
    </div>`}_slotMode(t,e){return this._modes[t]?this._modes[t]:e?M(e)&&!S(e)?"entity":"custom":Ae.has(t)?"entity":"auto"}_renderModeChips(t,e){let i=Ae.has(t)?["entity","custom"]:["auto","entity","custom"];return n`<div class="modes">
      ${i.map(s=>n`<button
          class="mode ${e===s?"on":""}"
          @click=${()=>{this._modes={...this._modes,[t]:s},s==="auto"&&this._setOverride(t,"")}}
        >
          ${this._t(`editor.mode_${s}`)}
        </button>`)}
    </div>`}_renderSlot(t,e,i){let s=this._config.entities?.[t]||"",r=this._slotMode(t,s),a=this._defaults()[t];return n`<div class="section">
        <ha-icon icon=${e}></ha-icon>${i||this._t(`slot.${t}`)}
      </div>
      ${this._renderModeChips(t,r)}
      ${r==="auto"?n`<div class="hint">
            ${this._t("editor.auto_value",{value:a||this._t("editor.not_found")})}
          </div>`:r==="entity"?n`<ha-form
              .hass=${this.hass}
              .data=${{value:M(s)&&!S(s)?s:""}}
              .schema=${[{name:"value",selector:{entity:{}}}]}
              .computeLabel=${()=>this._t("editor.entity")}
              @value-changed=${l=>{l.stopPropagation(),this._setOverride(t,l.detail.value.value||"")}}
            ></ha-form>`:n`<ha-form
              .hass=${this.hass}
              .data=${{value:M(s)&&!S(s)?"":s}}
              .schema=${[{name:"value",selector:{template:{}}}]}
              .computeLabel=${()=>this._t("editor.value_template")}
              @value-changed=${l=>{l.stopPropagation(),this._setOverride(t,l.detail.value.value||"")}}
            ></ha-form>`}`}_withOverride(t,e){let i={...this._config.entities||{}};e?i[t]=e:delete i[t];let s={...this._config,entities:i,type:`custom:${v}`};return Object.keys(i).length||delete s.entities,s}_setOverride(t,e){this._dispatch(this._withOverride(t,e))}_toggleDisplay(t,e,i){let s={...this._config,type:`custom:${v}`};i===e?delete s[t]:s[t]=i,this._dispatch(s)}_valueChanged(t){t.stopPropagation();let e={...this._config,...t.detail.value,type:`custom:${v}`};e.device||delete e.device,this._dispatch(e)}_dispatch(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}static get styles(){return V`
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
    `}};customElements.define(v,ft);customElements.define(`${v}-editor`,mt);window.customCards=window.customCards||[];window.customCards.push({type:v,name:"EcoFlow Energy Card",description:"EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",preview:!0,documentationURL:"https://github.com/MichelFR/ha-ecoflow-iot"});
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
