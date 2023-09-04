import{Y as Ce,x as L,Z as ve,L as Jt,K as Ve,p as z,U as oe,c as g,m as r,Q as le,_ as Se,g as it,d as Qt,e as ot,i as Zt,t as D,j as $e,G as Ee,a as en,v as Le,o as rt,$ as ut,a0 as tn,k as nn,a1 as ln,W as an,b as V,a2 as B,n as J,a3 as sn,q as Q,a4 as on,r as M,S as rn,a5 as un,a6 as He,F as Ae,J as cn,a7 as dn,a8 as De,s as ct,O as ke,P as dt,a9 as Ue,R as vn,l as fn,aa as mn,I as gn,ab as hn,y as vt,z as N,A as K,B as w,ac as re,ad as be,ae as ce,af as ne,C as Xe,ag as Ye}from"./index.55fdf0c5.js";import{k as pn,m as R,l as ft,a as G,d as fe,e as We,h as me,i as Te,V as Y,b as mt,n as yn,c as gt,f as ht,o as bn,g as pt,p as _n,u as qe,q as Ke}from"./color.697fd19e.js";const Cn=["top","bottom"],Sn=["start","end","left","right"];function kn(e,n){let[l,t]=e.split(" ");return t||(t=Ce(Cn,l)?"start":Ce(Sn,l)?"top":"center"),{side:Je(l,n),align:Je(t,n)}}function Je(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function Be(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",l=arguments.length>2?arguments[2]:void 0;return L({name:l!=null?l:ve(Jt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n}},setup(t,s){let{slots:a}=s;return()=>{var i;return Ve(t.tag,{class:e},(i=a.default)==null?void 0:i.call(a))}}})}const xn=[null,"default","comfortable","compact"],ge=z({density:{type:String,default:"default",validator:e=>xn.includes(e)}},"density");function ze(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oe();return{densityClasses:g(()=>`${n}--density-${e.density}`)}}const wn=["elevated","flat","tonal","outlined","text","plain"];function Pe(e,n){return r(le,null,[e&&r("span",{key:"overlay",class:`${n}__overlay`},null),r("span",{key:"underlay",class:`${n}__underlay`},null)])}const he=z({color:String,variant:{type:String,default:"elevated",validator:e=>wn.includes(e)}},"variant");function Ne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oe();const l=g(()=>{const{variant:a}=Se(e);return`${n}--variant-${a}`}),{colorClasses:t,colorStyles:s}=pn(g(()=>{const{variant:a,color:i}=Se(e);return{[["elevated","flat"].includes(a)?"background":"text"]:i}}));return{colorClasses:t,colorStyles:s,variantClasses:l}}const yt=z({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),In=z({value:null,disabled:Boolean,selectedClass:String},"group-item");function Vn(e,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=it("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Qt();ot(Symbol.for(`${n.description}:id`),s);const a=Zt(n,null);if(!a){if(!l)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const i=D(e,"value"),o=g(()=>a.disabled.value||e.disabled);a.register({id:s,value:i,disabled:o},t),$e(()=>{a.unregister(s)});const u=g(()=>a.isSelected(s)),f=g(()=>u.value&&[a.selectedClass.value,e.selectedClass]);return Ee(u,d=>{t.emit("group:selected",{value:d})}),{id:s,isSelected:u,toggle:()=>a.select(s,!u.value),select:d=>a.select(s,d),selectedClass:f,value:i,disabled:o,group:a}}function bt(e,n){let l=!1;const t=en([]),s=Le(e,"modelValue",[],c=>c==null?[]:_t(t,tn(c)),c=>{const v=En(t,c);return e.multiple?v:v[0]}),a=it("useGroup");function i(c,v){const _=c,m=Symbol.for(`${n.description}:id`),C=nn(m,a==null?void 0:a.vnode).indexOf(v);C>-1?t.splice(C,0,_):t.push(_)}function o(c){if(l)return;u();const v=t.findIndex(_=>_.id===c);t.splice(v,1)}function u(){const c=t.find(v=>!v.disabled);c&&e.mandatory==="force"&&!s.value.length&&(s.value=[c.id])}rt(()=>{u()}),$e(()=>{l=!0});function f(c,v){const _=t.find(m=>m.id===c);if(!(v&&_!=null&&_.disabled))if(e.multiple){const m=s.value.slice(),y=m.findIndex(S=>S===c),C=~y;if(v=v!=null?v:!C,C&&e.mandatory&&m.length<=1||!C&&e.max!=null&&m.length+1>e.max)return;y<0&&v?m.push(c):y>=0&&!v&&m.splice(y,1),s.value=m}else{const m=s.value.includes(c);if(e.mandatory&&m)return;s.value=(v!=null?v:!m)?[c]:[]}}function d(c){if(e.multiple&&ln('This method is not supported when using "multiple" prop'),s.value.length){const v=s.value[0],_=t.findIndex(C=>C.id===v);let m=(_+c)%t.length,y=t[m];for(;y.disabled&&m!==_;)m=(m+c)%t.length,y=t[m];if(y.disabled)return;s.value=[t[m].id]}else{const v=t.find(_=>!_.disabled);v&&(s.value=[v.id])}}const p={register:i,unregister:o,selected:s,select:f,disabled:D(e,"disabled"),prev:()=>d(t.length-1),next:()=>d(1),isSelected:c=>s.value.includes(c),selectedClass:g(()=>e.selectedClass),items:g(()=>t),getItemIndex:c=>$n(t,c)};return ot(n,p),p}function $n(e,n){const l=_t(e,[n]);return l.length?e.findIndex(t=>t.id===l[0]):-1}function _t(e,n){const l=[];for(let t=0;t<e.length;t++){const s=e[t];s.value!=null?n.find(a=>ut(a,s.value))!=null&&l.push(s.id):n.includes(t)&&l.push(s.id)}return l}function En(e,n){const l=[];for(let t=0;t<e.length;t++){const s=e[t];n.includes(s.id)&&l.push(s.value!=null?s.value:t)}return l}const Ln=["x-small","small","default","large","x-large"],Re=z({size:{type:[String,Number],default:"default"}},"size");function Oe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oe();return an(()=>{let l,t;return Ce(Ln,e.size)?l=`${n}--size-${e.size}`:e.size&&(t={width:V(e.size),height:V(e.size)}),{sizeClasses:l,sizeStyles:t}})}const An=z({color:String,start:Boolean,end:Boolean,icon:B,...Re(),...R({tag:"i"}),...J()},"v-icon"),W=L({name:"VIcon",props:An(),setup(e,n){let{attrs:l,slots:t}=n,s;t.default&&(s=g(()=>{var d,p;const c=(d=t.default)==null?void 0:d.call(t);if(!!c)return(p=c.filter(v=>v.type===sn&&v.children&&typeof v.children=="string")[0])==null?void 0:p.children}));const{themeClasses:a}=Q(e),{iconData:i}=on(s||e),{sizeClasses:o}=Oe(e),{textColorClasses:u,textColorStyles:f}=ft(D(e,"color"));return G(()=>{var d;return r(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",a.value,o.value,u.value,{"v-icon--clickable":!!l.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[o.value?void 0:{fontSize:V(e.size),height:V(e.size),width:V(e.size)},f.value],role:l.onClick?"button":void 0,"aria-hidden":!l.onClick},{default:()=>[(d=t.default)==null?void 0:d.call(t)]})}),{}}});function Tn(e){const n=M(),l=M(!1);if(rn){const t=new IntersectionObserver(s=>{e==null||e(s,t),l.value=!!s.find(a=>a.isIntersecting)});$e(()=>{t.disconnect()}),Ee(n,(s,a)=>{a&&(t.unobserve(a),l.value=!1),s&&t.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:l}}const xe=Symbol("rippleStop"),Bn=80;function Qe(e,n){e.style.transform=n,e.style.webkitTransform=n}function _e(e,n){e.style.opacity=`calc(${n} * var(--v-theme-overlay-multiplier))`}function we(e){return e.constructor.name==="TouchEvent"}function Ct(e){return e.constructor.name==="KeyboardEvent"}const zn=function(e,n){var l;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,a=0;if(!Ct(e)){const c=n.getBoundingClientRect(),v=we(e)?e.touches[e.touches.length-1]:e;s=v.clientX-c.left,a=v.clientY-c.top}let i=0,o=.3;(l=n._ripple)!=null&&l.circle?(o=.15,i=n.clientWidth/2,i=t.center?i:i+Math.sqrt((s-i)**2+(a-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const u=`${(n.clientWidth-i*2)/2}px`,f=`${(n.clientHeight-i*2)/2}px`,d=t.center?u:`${s-i}px`,p=t.center?f:`${a-i}px`;return{radius:i,scale:o,x:d,y:p,centerX:u,centerY:f}},de={show(e,n){var l;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(n!=null&&(l=n._ripple)!=null&&l.enabled))return;const s=document.createElement("span"),a=document.createElement("span");s.appendChild(a),s.className="v-ripple__container",t.class&&(s.className+=` ${t.class}`);const{radius:i,scale:o,x:u,y:f,centerX:d,centerY:p}=zn(e,n,t),c=`${i*2}px`;a.className="v-ripple__animation",a.style.width=c,a.style.height=c,n.appendChild(s);const v=window.getComputedStyle(n);v&&v.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),Qe(a,`translate(${u}, ${f}) scale3d(${o},${o},${o})`),_e(a,0),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),Qe(a,`translate(${d}, ${p}) scale3d(1,1,1)`),_e(a,.08)},0)},hide(e){var n;if(!(e!=null&&(n=e._ripple)!=null&&n.enabled))return;const l=e.getElementsByClassName("v-ripple__animation");if(l.length===0)return;const t=l[l.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const s=performance.now()-Number(t.dataset.activated),a=Math.max(250-s,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),_e(t,0),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),t.parentNode&&e.removeChild(t.parentNode)},300)},a)}};function St(e){return typeof e>"u"||!!e}function ae(e){const n={},l=e.currentTarget;if(!(!(l!=null&&l._ripple)||l._ripple.touched||e[xe])){if(e[xe]=!0,we(e))l._ripple.touched=!0,l._ripple.isTouch=!0;else if(l._ripple.isTouch)return;if(n.center=l._ripple.centered||Ct(e),l._ripple.class&&(n.class=l._ripple.class),we(e)){if(l._ripple.showTimerCommit)return;l._ripple.showTimerCommit=()=>{de.show(e,l,n)},l._ripple.showTimer=window.setTimeout(()=>{var t;l!=null&&(t=l._ripple)!=null&&t.showTimerCommit&&(l._ripple.showTimerCommit(),l._ripple.showTimerCommit=null)},Bn)}else de.show(e,l,n)}}function Ze(e){e[xe]=!0}function $(e){const n=e.currentTarget;if(!(!n||!n._ripple)){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{$(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),de.hide(n)}}function kt(e){const n=e.currentTarget;!n||!n._ripple||(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let se=!1;function xt(e){!se&&(e.keyCode===He.enter||e.keyCode===He.space)&&(se=!0,ae(e))}function wt(e){se=!1,$(e)}function It(e){se&&(se=!1,$(e))}function Vt(e,n,l){var i;const{value:t,modifiers:s}=n,a=St(t);if(a||de.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=a,e._ripple.centered=s.center,e._ripple.circle=s.circle,un(t)&&t.class&&(e._ripple.class=t.class),a&&!l){if(s.stop){e.addEventListener("touchstart",Ze,{passive:!0}),e.addEventListener("mousedown",Ze);return}e.addEventListener("touchstart",ae,{passive:!0}),e.addEventListener("touchend",$,{passive:!0}),e.addEventListener("touchmove",kt,{passive:!0}),e.addEventListener("touchcancel",$),e.addEventListener("mousedown",ae),e.addEventListener("mouseup",$),e.addEventListener("mouseleave",$),e.addEventListener("keydown",xt),e.addEventListener("keyup",wt),e.addEventListener("blur",It),e.addEventListener("dragstart",$,{passive:!0})}else!a&&l&&$t(e)}function $t(e){e.removeEventListener("mousedown",ae),e.removeEventListener("touchstart",ae),e.removeEventListener("touchend",$),e.removeEventListener("touchmove",kt),e.removeEventListener("touchcancel",$),e.removeEventListener("mouseup",$),e.removeEventListener("mouseleave",$),e.removeEventListener("keydown",xt),e.removeEventListener("keyup",wt),e.removeEventListener("dragstart",$),e.removeEventListener("blur",It)}function Pn(e,n){Vt(e,n,!1)}function Nn(e){delete e._ripple,$t(e)}function Rn(e,n){if(n.value===n.oldValue)return;const l=St(n.oldValue);Vt(e,n,l)}const Et={mounted:Pn,unmounted:Nn,updated:Rn};const et={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Lt=z({location:String},"location");function At(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Ae();return{locationStyles:g(()=>{if(!e.location)return{};const{side:a,align:i}=kn(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function o(f){return l?l(f):0}const u={};return a!=="center"&&(n?u[et[a]]=`calc(100% - ${o(a)}px)`:u[a]=0),i!=="center"?n?u[et[i]]=`calc(100% - ${o(i)}px)`:u[i]=0:(a==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),u})}}const On=L({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Lt({location:"top"}),...fe(),...R(),...J()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const t=Le(e,"modelValue"),{isRtl:s}=Ae(),{themeClasses:a}=Q(e),{locationStyles:i}=At(e),{textColorClasses:o,textColorStyles:u}=ft(e,"color"),{backgroundColorClasses:f,backgroundColorStyles:d}=We(g(()=>e.bgColor||e.color)),{backgroundColorClasses:p,backgroundColorStyles:c}=We(e,"color"),{roundedClasses:v}=me(e),{intersectionRef:_,isIntersecting:m}=Tn(),y=g(()=>parseInt(e.max,10)),C=g(()=>parseInt(e.height,10)),S=g(()=>parseFloat(e.bufferValue)/y.value*100),A=g(()=>parseFloat(t.value)/y.value*100),E=g(()=>s.value!==e.reverse),j=g(()=>e.indeterminate?"fade-transition":"slide-x-transition"),k=g(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function P(I){if(!_.value)return;const{left:U,right:F,width:O}=_.value.getBoundingClientRect(),H=E.value?O-I.clientX+(F-O):I.clientX-U;t.value=Math.round(H/O*y.value)}return G(()=>r(e.tag,{ref:_,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&m.value,"v-progress-linear--reverse":E.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},v.value,a.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?V(C.value):0,"--v-progress-linear-height":V(C.value),...i.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:A.value,onClick:e.clickable&&P},{default:()=>[e.stream&&r("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...u.value,[E.value?"left":"right"]:V(-C.value),borderTop:`${V(C.value/2)} dotted`,opacity:k.value,top:`calc(50% - ${V(C.value/4)})`,width:V(100-S.value,"%"),"--v-progress-linear-stream-to":V(C.value*(E.value?1:-1))}},null),r("div",{class:["v-progress-linear__background",f.value],style:[d.value,{opacity:k.value,width:V(e.stream?S.value:100,"%")}]},null),r(cn,{name:j.value},{default:()=>[e.indeterminate?r("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(I=>r("div",{key:I,class:["v-progress-linear__indeterminate",I,p.value],style:c.value},null))]):r("div",{class:["v-progress-linear__determinate",p.value],style:[c.value,{width:V(A.value,"%")}]},null)]}),l.default&&r("div",{class:"v-progress-linear__content"},[l.default({value:A.value,buffer:S.value})])]})),{}}}),Mn=z({loading:[Boolean,String]},"loader");function Gn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oe();return{loaderClasses:g(()=>({[`${n}--loading`]:e.loading}))}}function jn(e,n){var l;let{slots:t}=n;return r("div",{class:`${e.name}__loader`},[((l=t.default)==null?void 0:l.call(t,{color:e.color,isActive:e.active}))||r(On,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Fn=["static","relative","fixed","absolute","sticky"],Hn=z({position:{type:String,validator:e=>Fn.includes(e)}},"position");function Dn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oe();return{positionClasses:g(()=>e.position?`${n}--${e.position}`:void 0)}}function Tt(e,n){const l=dn("RouterLink"),t=g(()=>!!(e.href||e.to)),s=g(()=>(t==null?void 0:t.value)||De(n,"click")||De(e,"click"));if(typeof l=="string")return{isLink:t,isClickable:s,href:D(e,"href")};const a=e.to?l.useLink(e):void 0;return{isLink:t,isClickable:s,route:a==null?void 0:a.route,navigate:a==null?void 0:a.navigate,isActive:a&&g(()=>{var i,o;return e.exact?(i=a.isExactActive)==null?void 0:i.value:(o=a.isActive)==null?void 0:o.value}),href:g(()=>e.to?a==null?void 0:a.route.value.href:e.href)}}const Bt=z({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");var zt=(e=>(e.DEVICE_INTEGRATION="device-integration",e.THEME="theme",e.OTHER="other",e.TOOL="tool",e.EXAMPLE="example",e))(zt||{});const Un=z({start:Boolean,end:Boolean,icon:B,image:String,...ge(),...fe(),...Re(),...R(),...J(),...he({variant:"flat"})},"v-avatar"),ie=L({name:"VAvatar",props:Un(),setup(e,n){let{slots:l}=n;const{themeClasses:t}=Q(e),{colorClasses:s,colorStyles:a,variantClasses:i}=Ne(e),{densityClasses:o}=ze(e),{roundedClasses:u}=me(e),{sizeClasses:f,sizeStyles:d}=Oe(e);return G(()=>{var p;return r(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,o.value,u.value,f.value,i.value],style:[a.value,d.value]},{default:()=>[e.image?r(Te,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?r(W,{key:"icon",icon:e.icon},null):(p=l.default)==null?void 0:p.call(l),Pe(!1,"v-avatar")]})}),{}}});const Xn=L({name:"VCardActions",setup(e,n){let{slots:l}=n;return ct({VBtn:{variant:"text"}}),G(()=>{var t;return r("div",{class:"v-card-actions"},[(t=l.default)==null?void 0:t.call(l)])}),{}}}),Pt=Be("v-card-subtitle"),Ie=Be("v-card-title"),Yn=L({name:"VCardItem",props:{appendAvatar:String,appendIcon:B,prependAvatar:String,prependIcon:B,subtitle:String,title:String,...ge()},setup(e,n){let{slots:l}=n;return G(()=>{var t,s,a,i,o;const u=!!(e.prependAvatar||e.prependIcon||l.prepend),f=!!(e.appendAvatar||e.appendIcon||l.append),d=!!(e.title||l.title),p=!!(e.subtitle||l.subtitle);return r("div",{class:"v-card-item"},[u&&r(Y,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var c;return[r("div",{class:"v-card-item__prepend"},[(c=(t=l.prepend)==null?void 0:t.call(l))!=null?c:r(ie,null,null)])]}}),r("div",{class:"v-card-item__content"},[d&&r(Ie,{key:"title"},{default:()=>{var c;return[(c=(s=l.title)==null?void 0:s.call(l))!=null?c:e.title]}}),p&&r(Pt,{key:"subtitle"},{default:()=>{var c;return[(c=(a=l.subtitle)==null?void 0:a.call(l))!=null?c:e.subtitle]}}),(i=l.default)==null?void 0:i.call(l)]),f&&r(Y,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var c;return[r("div",{class:"v-card-item__append"},[(c=(o=l.append)==null?void 0:o.call(l))!=null?c:r(ie,null,null)])]}})])}),{}}}),Nt=Be("v-card-text"),Wn=L({name:"VCard",directives:{Ripple:Et},props:{appendAvatar:String,appendIcon:B,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:B,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...J(),...mt(),...ge(),...yn(),...gt(),...Mn(),...Lt(),...Hn(),...fe(),...Bt(),...R(),...he({variant:"elevated"})},setup(e,n){let{attrs:l,slots:t}=n;const{themeClasses:s}=Q(e),{borderClasses:a}=ht(e),{colorClasses:i,colorStyles:o,variantClasses:u}=Ne(e),{densityClasses:f}=ze(e),{dimensionStyles:d}=bn(e),{elevationClasses:p}=pt(e),{loaderClasses:c}=Gn(e),{locationStyles:v}=At(e),{positionClasses:_}=Dn(e),{roundedClasses:m}=me(e),y=Tt(e,l),C=g(()=>e.link!==!1&&y.isLink.value),S=g(()=>!e.disabled&&e.link!==!1&&(e.link||y.isClickable.value));return G(()=>{var A,E,j;const k=C.value?"a":e.tag,P=!!(t.title||e.title),I=!!(t.subtitle||e.subtitle),U=P||I,F=!!(t.append||e.appendAvatar||e.appendIcon),O=!!(t.prepend||e.prependAvatar||e.prependIcon),H=!!(t.image||e.image),x=U||O||F,Z=!!(t.text||e.text);return ke(r(k,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":S.value},s.value,a.value,i.value,f.value,p.value,c.value,_.value,m.value,u.value],style:[o.value,d.value,v.value],href:y.href.value,onClick:S.value&&y.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[H&&r(Y,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var X;return[r("div",{class:"v-card__image"},[(X=(A=t.image)==null?void 0:A.call(t))!=null?X:r(Te,null,null)])]}}),r(jn,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),x&&r(Yn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),Z&&r(Nt,{key:"text"},{default:()=>{var X;return[(X=(E=t.text)==null?void 0:E.call(t))!=null?X:e.text]}}),(j=t.default)==null?void 0:j.call(t),t.actions&&r(Xn,null,{default:t.actions}),Pe(S.value,"v-card")]}),[[dt("ripple"),S.value&&e.ripple]])}),{}}});const Rt=Symbol.for("vuetify:v-chip-group");L({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ut},...yt({selectedClass:"v-chip--selected"}),...R(),...J(),...he({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{themeClasses:t}=Q(e),{isSelected:s,select:a,next:i,prev:o,selected:u}=bt(e,Rt);return ct({VChip:{color:D(e,"color"),disabled:D(e,"disabled"),filter:D(e,"filter"),variant:D(e,"variant")}}),G(()=>{var f;return r(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},t.value]},{default:()=>[(f=l.default)==null?void 0:f.call(l,{isSelected:s,select:a,next:i,prev:o,selected:u.value})]})}),{}}});const qn=L({name:"VChip",directives:{Ripple:Et},props:{activeClass:String,appendAvatar:String,appendIcon:B,closable:Boolean,closeIcon:{type:B,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Ue,onClickOnce:Ue,...mt(),...ge(),...gt(),...In(),...fe(),...Bt(),...Re(),...R({tag:"span"}),...J(),...he({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:l,emit:t,slots:s}=n;const{borderClasses:a}=ht(e),{colorClasses:i,colorStyles:o,variantClasses:u}=Ne(e),{densityClasses:f}=ze(e),{elevationClasses:d}=pt(e),{roundedClasses:p}=me(e),{sizeClasses:c}=Oe(e),{themeClasses:v}=Q(e),_=Le(e,"modelValue"),m=Vn(e,Rt,!1),y=Tt(e,l),C=g(()=>e.link!==!1&&y.isLink.value),S=g(()=>!e.disabled&&e.link!==!1&&(!!m||e.link||y.isClickable.value));function A(k){_.value=!1,t("click:close",k)}function E(k){var P;t("click",k),S.value&&((P=y.navigate)==null||P.call(y,k),m==null||m.toggle())}function j(k){(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),E(k))}return()=>{var k;const P=y.isLink.value?"a":e.tag,I=!!(s.append||e.appendIcon||e.appendAvatar),U=!!(s.close||e.closable),F=!!(s.filter||e.filter)&&m,O=!!(s.prepend||e.prependIcon||e.prependAvatar),H=!m||m.isSelected.value;return _.value&&ke(r(P,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":F,"v-chip--pill":e.pill},v.value,a.value,H?i.value:void 0,f.value,d.value,p.value,c.value,u.value,m==null?void 0:m.selectedClass.value],style:[H?o.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:y.href.value,tabindex:S.value?0:void 0,onClick:E,onKeydown:S.value&&!C.value&&j},{default:()=>{var x;return[Pe(S.value,"v-chip"),F&&r(Y,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[r(_n,null,{default:()=>[ke(r("div",{class:"v-chip__filter"},[s.filter?s.filter():r(W,null,null)]),[[vn,m.isSelected.value]])]})]}),O&&r(Y,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[s.prepend?r("div",{class:"v-chip__prepend"},[s.prepend()]):e.prependAvatar?r(ie,{start:!0},null):e.prependIcon?r(W,{start:!0},null):void 0]}),(x=(k=s.default)==null?void 0:k.call(s,{isSelected:m==null?void 0:m.isSelected.value,selectedClass:m==null?void 0:m.selectedClass.value,select:m==null?void 0:m.select,toggle:m==null?void 0:m.toggle,value:m==null?void 0:m.value.value,disabled:e.disabled}))!=null?x:e.text,I&&r(Y,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[s.append?r("div",{class:"v-chip__append"},[s.append()]):e.appendAvatar?r(ie,{end:!0},null):e.appendIcon?r(W,{end:!0},null):void 0]}),U&&r(Y,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[r("div",{class:"v-chip__close",onClick:A},[s.close?s.close():r(W,null,null)])]})]}}),[[dt("ripple"),S.value&&e.ripple,null]])}}});const Kn=L({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...R()},setup(e,n){let{slots:l}=n;return G(()=>r(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},l)),{}}}),Me=["sm","md","lg","xl","xxl"],Ot=(()=>Me.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),Mt=(()=>Me.reduce((e,n)=>(e["offset"+ve(n)]={type:[String,Number],default:null},e),{}))(),Gt=(()=>Me.reduce((e,n)=>(e["order"+ve(n)]={type:[String,Number],default:null},e),{}))(),tt={col:Object.keys(Ot),offset:Object.keys(Mt),order:Object.keys(Gt)};function Jn(e,n,l){let t=e;if(!(l==null||l===!1)){if(n){const s=n.replace(e,"");t+=`-${s}`}return e==="col"&&(t="v-"+t),e==="col"&&(l===""||l===!0)||(t+=`-${l}`),t.toLowerCase()}}const Qn=["auto","start","end","center","baseline","stretch"],nt=L({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Ot,offset:{type:[String,Number],default:null},...Mt,order:{type:[String,Number],default:null},...Gt,alignSelf:{type:String,default:null,validator:e=>Qn.includes(e)},...R()},setup(e,n){let{slots:l}=n;const t=g(()=>{const s=[];let a;for(a in tt)tt[a].forEach(o=>{const u=e[o],f=Jn(a,o,u);f&&s.push(f)});const i=s.some(o=>o.startsWith("v-col-"));return s.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return Ve(e.tag,{class:t.value},(s=l.default)==null?void 0:s.call(l))}}}),Zn=["sm","md","lg","xl","xxl"],Ge=["start","end","center"],jt=["space-between","space-around","space-evenly"];function je(e,n){return Zn.reduce((l,t)=>(l[e+ve(t)]=n(),l),{})}const el=[...Ge,"baseline","stretch"],Ft=e=>el.includes(e),Ht=je("align",()=>({type:String,default:null,validator:Ft})),tl=[...Ge,...jt],Dt=e=>tl.includes(e),Ut=je("justify",()=>({type:String,default:null,validator:Dt})),nl=[...Ge,...jt,"stretch"],Xt=e=>nl.includes(e),Yt=je("alignContent",()=>({type:String,default:null,validator:Xt})),lt={align:Object.keys(Ht),justify:Object.keys(Ut),alignContent:Object.keys(Yt)},ll={align:"align",justify:"justify",alignContent:"align-content"};function al(e,n,l){let t=ll[e];if(l!=null){if(n){const s=n.replace(e,"");t+=`-${s}`}return t+=`-${l}`,t.toLowerCase()}}const ue=L({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ft},...Ht,justify:{type:String,default:null,validator:Dt},...Ut,alignContent:{type:String,default:null,validator:Xt},...Yt,...R()},setup(e,n){let{slots:l}=n;const t=g(()=>{const s=[];let a;for(a in lt)lt[a].forEach(i=>{const o=e[i],u=al(a,i,o);u&&s.push(u)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return Ve(e.tag,{class:["v-row",t.value]},(s=l.default)==null?void 0:s.call(l))}}});function at(e){const l=Math.abs(e);return Math.sign(e)*(l/((1/.501-2)*(1-l)+1))}function st(e){let{selectedElement:n,containerSize:l,contentSize:t,isRtl:s,currentScrollOffset:a,isHorizontal:i}=e;const o=i?n.clientWidth:n.clientHeight,u=i?n.offsetLeft:n.offsetTop,f=s&&i?t-u-o:u,d=l+a,p=o+f,c=o*.4;return f<=a?a=Math.max(f-c,0):d<=p&&(a=Math.min(a-(d-p-c),t-l)),a}function sl(e){let{selectedElement:n,containerSize:l,contentSize:t,isRtl:s,isHorizontal:a}=e;const i=a?n.clientWidth:n.clientHeight,o=a?n.offsetLeft:n.offsetTop,u=s&&a?t-o-i/2-l/2:o+i/2-l/2;return Math.min(t-l,Math.max(0,u))}const il=Symbol.for("vuetify:v-slide-group"),ol=fn()({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:il},nextIcon:{type:B,default:"$next"},prevIcon:{type:B,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...R(),...yt({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{isRtl:t}=Ae(),{mobile:s}=mn(),a=bt(e,e.symbol),i=M(!1),o=M(0),u=M(0),f=M(0),d=g(()=>e.direction==="horizontal"),{resizeRef:p,contentRect:c}=qe(),{resizeRef:v,contentRect:_}=qe(),m=g(()=>a.selected.value.length?a.items.value.findIndex(h=>h.id===a.selected.value[0]):-1),y=g(()=>a.selected.value.length?a.items.value.findIndex(h=>h.id===a.selected.value[a.selected.value.length-1]):-1);if(gn){let h=-1;Ee(()=>[a.selected.value,c.value,_.value,d.value],()=>{cancelAnimationFrame(h),h=requestAnimationFrame(()=>{if(c.value&&_.value){const b=d.value?"width":"height";u.value=c.value[b],f.value=_.value[b],i.value=u.value+1<f.value}if(m.value>=0&&v.value){const b=v.value.children[y.value];m.value===0||!i.value?o.value=0:e.centerActive?o.value=sl({selectedElement:b,containerSize:u.value,contentSize:f.value,isRtl:t.value,isHorizontal:d.value}):i.value&&(o.value=st({selectedElement:b,containerSize:u.value,contentSize:f.value,isRtl:t.value,currentScrollOffset:o.value,isHorizontal:d.value}))}})})}const C=M(!1);let S=0,A=0;function E(h){const b=d.value?"clientX":"clientY";A=(t.value&&d.value?-1:1)*o.value,S=h.touches[0][b],C.value=!0}function j(h){if(!i.value)return;const b=d.value?"clientX":"clientY",T=t.value&&d.value?-1:1;o.value=T*(A+S-h.touches[0][b])}function k(h){const b=f.value-u.value;o.value<0||!i.value?o.value=0:o.value>=b&&(o.value=b),C.value=!1}function P(){!p.value||(p.value[d.value?"scrollLeft":"scrollTop"]=0)}const I=M(!1);function U(h){if(I.value=!0,!(!i.value||!v.value)){for(const b of h.composedPath())for(const T of v.value.children)if(T===b){o.value=st({selectedElement:T,containerSize:u.value,contentSize:f.value,isRtl:t.value,currentScrollOffset:o.value,isHorizontal:d.value});return}}}function F(h){I.value=!1}function O(h){var b;!I.value&&!(h.relatedTarget&&(b=v.value)!=null&&b.contains(h.relatedTarget))&&x()}function H(h){!v.value||(d.value?h.key==="ArrowRight"?x(t.value?"prev":"next"):h.key==="ArrowLeft"&&x(t.value?"next":"prev"):h.key==="ArrowDown"?x("next"):h.key==="ArrowUp"&&x("prev"),h.key==="Home"?x("first"):h.key==="End"&&x("last"))}function x(h){if(!!v.value)if(h){if(h==="next"){var T;const q=(T=v.value.querySelector(":focus"))==null?void 0:T.nextElementSibling;q?q.focus():x("first")}else if(h==="prev"){var ee;const q=(ee=v.value.querySelector(":focus"))==null?void 0:ee.previousElementSibling;q?q.focus():x("last")}else if(h==="first"){var te;(te=v.value.firstElementChild)==null||te.focus()}else if(h==="last"){var Fe;(Fe=v.value.lastElementChild)==null||Fe.focus()}}else{var b;(b=[...v.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(Kt=>!Kt.hasAttribute("disabled"))[0])==null||b.focus()}}function Z(h){const b=o.value+(h==="prev"?-1:1)*u.value;o.value=hn(b,0,f.value-u.value)}const X=g(()=>{let h=o.value>f.value-u.value?-(f.value-u.value)+at(f.value-u.value-o.value):-o.value;o.value<=0&&(h=at(-o.value));const b=t.value&&d.value?-1:1;return{transform:`translate${d.value?"X":"Y"}(${b*h}px)`,transition:C.value?"none":"",willChange:C.value?"transform":""}}),pe=g(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),ye=g(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!s.value;case!0:return i.value||Math.abs(o.value)>0;case"mobile":return s.value||i.value||Math.abs(o.value)>0;default:return!s.value&&(i.value||Math.abs(o.value)>0)}}),Wt=g(()=>Math.abs(o.value)>0),qt=g(()=>f.value>Math.abs(o.value)+u.value);return G(()=>{var h,b,T;return r(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":ye.value,"v-slide-group--is-overflowing":i.value}],tabindex:I.value||a.selected.value.length?-1:0,onFocus:O},{default:()=>{var ee,te;return[ye.value&&r("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Wt.value}],onClick:()=>Z("prev")},[(ee=(h=l.prev)==null?void 0:h.call(l,pe.value))!=null?ee:r(Ke,null,{default:()=>[r(W,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),r("div",{key:"container",ref:p,class:"v-slide-group__container",onScroll:P},[r("div",{ref:v,class:"v-slide-group__content",style:X.value,onTouchstartPassive:E,onTouchmovePassive:j,onTouchendPassive:k,onFocusin:U,onFocusout:F,onKeydown:H},[(b=l.default)==null?void 0:b.call(l,pe.value)])]),ye.value&&r("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!qt.value}],onClick:()=>Z("next")},[(te=(T=l.next)==null?void 0:T.call(l,pe.value))!=null?te:r(Ke,null,{default:()=>[r(W,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})}),{selected:a.selected,scrollTo:Z,scrollOffset:o,focus:x}}}),rl=["href"],ul=ce("strong",null,"Maintainer: ",-1),cl=["href"],dl=vt({__name:"Counter",setup(e){const n=M();rt(async()=>{const i=await fetch("manifest.json");n.value=await i.json()});const l=g(()=>zt);function t(i){return Object.values(i.versions)[0]}function s(i){var o,u,f;return(f=(u=(o=t(i))==null?void 0:o.company)==null?void 0:u.name)!=null?f:"Unknown"}function a(i){var o,u,f;return(f=(u=(o=t(i))==null?void 0:o.company)==null?void 0:u.email)!=null?f:""}return(i,o)=>(N(),K(Kn,null,{default:w(()=>[(N(!0),re(le,null,be(Se(l),(u,f)=>(N(),K(ue,{key:f},{default:w(()=>[r(ue,{class:"ma-1"},{default:w(()=>[ce("h1",null,ne(u.replace("-"," ").replace(/\b\w/g,d=>d.toUpperCase())+"s"),1)]),_:2},1024),r(ue,{class:"ma-1",align:"center"},{default:w(()=>[(N(!0),re(le,null,be(n.value,d=>(N(),re(le,{key:d.identifier},[t(d).type===u?(N(),K(nt,{key:0},{default:w(()=>[r(Wn,{class:"mx-auto",width:"400px",outlined:""},{default:w(()=>[r(Ie,null,{default:w(()=>[r(ue,{"no-gutters":"",class:"justify-center align-center"},{default:w(()=>[r(ie,{tile:"",size:"65",class:"ma-2 rounded-0"},{default:w(()=>[r(Te,{src:d.extension_logo},null,8,["src"])]),_:2},1024),r(nt,null,{default:w(()=>[r(Ie,null,{default:w(()=>[ce("a",{href:d.website},ne(d.name),9,rl)]),_:2},1024),r(Pt,null,{default:w(()=>[ul,ce("a",{href:"mailto:"+a(d)},ne(s(d)),9,cl)]),_:2},1024)]),_:2},1024),t(d).filter_tags.length>0?(N(),K(ol,{key:0,class:"mt-2"},{default:w(()=>[(N(!0),re(le,null,be(t(d).filter_tags,p=>(N(),K(qn,{label:"",class:"ma-1",density:"compact",color:"blue"},{default:w(()=>[Xe(ne(p),1)]),_:2},1024))),256))]),_:2},1024)):Ye("",!0)]),_:2},1024)]),_:2},1024),r(Nt,null,{default:w(()=>[Xe(ne(d.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)):Ye("",!0)],64))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1}))}}),ml=vt({__name:"Home",setup(e){return(n,l)=>(N(),K(dl))}});export{ml as default};
