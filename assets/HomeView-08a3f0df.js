import{u as M,V as I,a as j}from"./list-2b510789.js";import{g as W,o as B,a as E,n as D,u as T,b as U,r as C,w as F,c as k,_ as H,s as V,d as R,e as q,f as $,h as y,V as z,i as x,j as h,t as P,k as O}from"./index-3b979105.js";function A(e){return W()?(B(e),!0):!1}function w(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const s=()=>t(o);return A(s),{off:s}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(s=>s(...o)))}}function L(e){return typeof e=="function"?e():T(e)}const J=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const K=Object.prototype.toString,Q=e=>K.call(e)==="[object Object]",X=()=>{};function Y(e){return e||U()}function Z(e,t=!0,n){Y()?E(e,n):t?e():D(e)}function ee(e){var t;const n=L(e);return(t=n==null?void 0:n.$el)!=null?t:n}const G=J?window:void 0;function te(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=G):[t,n,r,o]=e,!t)return X;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],a=()=>{s.forEach(u=>u()),s.length=0},v=(u,i,l,f)=>(u.addEventListener(i,l,f),()=>u.removeEventListener(i,l,f)),_=F(()=>[ee(t),L(o)],([u,i])=>{if(a(),!u)return;const l=Q(i)?{...i}:i;s.push(...n.flatMap(f=>r.map(g=>v(u,f,g,l))))},{immediate:!0,flush:"post"}),p=()=>{_(),a()};return A(p),p}function ne(){const e=C(!1);return U()&&E(()=>{e.value=!0}),e}function oe(e){const t=ne();return k(()=>(t.value,!!e()))}function se(e={}){const{window:t=G,requestPermissions:n=!0}=e,r=e,o=oe(()=>!!t&&"Notification"in t),s=C(o.value&&"permission"in Notification&&Notification.permission==="granted"),a=C(null),v=async()=>{if(o.value)return!s.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(s.value=!0),s.value},{on:_,trigger:p}=w(),{on:u,trigger:i}=w(),{on:l,trigger:f}=w(),{on:g,trigger:N}=w(),b=async d=>{if(!o.value||!s.value)return;const c=Object.assign({},r,d);return a.value=new Notification(c.title||"",c),a.value.onclick=p,a.value.onshow=i,a.value.onerror=f,a.value.onclose=N,a.value},S=()=>{a.value&&a.value.close(),a.value=null};if(n&&Z(v),A(S),o.value&&t){const d=t.document;te(d,"visibilitychange",c=>{c.preventDefault(),d.visibilityState==="visible"&&S()})}return{isSupported:o,notification:a,ensurePermissions:v,permissionGranted:s,show:b,close:S,onClick:_,onShow:u,onError:l,onClose:g}}const ie={class:"box"},re={class:"text"},ae={class:"time"},le={__name:"HomeView",setup(e){const t=M(),{currentItem:n,items:r,timeLeft:o}=V(t),{setCurrentItem:s,countDown:a,setFinishedItem:v}=t,_=R(),{selectedAlarmFile:p,notify:u}=V(_),i={STOP:0,COUNTING:1,PAUSE:2},l=C(i.STOP);let f=0;const g=()=>{l.value===i.STOP&&r.value.length>0&&s(),l.value=i.COUNTING,f=setInterval(()=>{a(),o.value===0&&b()},1e3)},N=()=>{l.value=i.PAUSE,clearInterval(f)},b=()=>{if(clearInterval(f),l.value=i.STOP,o.value===0){const c=new Audio;c.src=p.value,c.play()}if(u.value){const{show:c,isSupported:m}=se({title:"事項完成",body:n.value,icon:new URL(""+new URL("bird-8710ef06.png",import.meta.url).href,self.location).href});m&&c()}v(),r.value.length>0&&g()},S=k(()=>n.value.length>0?n.value:r.value.length>0?"點擊開始":"沒有事項"),d=k(()=>{const c=Math.floor(o.value/60).toString().padStart(2,"0"),m=(o.value%60).toString().padStart(2,"0");return c+":"+m});return(c,m)=>(q(),$(z,{class:"vContainer"},{default:y(()=>[x("div",ie,[h(j,{class:"text-center"},{default:y(()=>[h(I,{cols:"12"},{default:y(()=>[x("h1",re,P(S.value),1),x("h1",ae,P(d.value),1)]),_:1}),h(I,{style:{height:"100px"}},{default:y(()=>[h(O,{class:"btn",variant:"text",icon:"mdi-play",disabled:l.value===i.COUNTING||T(n).length===0&&T(r).length===0,onClick:g},null,8,["disabled"]),h(O,{class:"btn",variant:"text",icon:"mdi-pause",disabled:l.value!==i.COUNTING,onClick:N},null,8,["disabled"]),h(O,{class:"btn",variant:"text",icon:"mdi-skip-next",disabled:T(n).length===0,onClick:m[0]||(m[0]=ce=>b())},null,8,["disabled"])]),_:1})]),_:1})])]),_:1}))}},de=H(le,[["__scopeId","data-v-0b08a848"]]);export{de as default};