function E(){}const lt=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function v(t){t.forEach(Q)}function F(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Bt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function ut(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(at(e,n))}function Ht(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Lt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,u){if(r){const o=U(e,n,i,u);t.p(o,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const W=typeof window<"u";let ft=W?()=>window.performance.now():()=>Date.now(),H=W?t=>requestAnimationFrame(t):E;const $=new Set;function V(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&H(V)}function _t(t){let e;return $.size===0&&H(V),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}const Kt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let O=!1;function dt(){O=!0}function ht(){O=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,_=(r>0&&e[n[r]].claim_order<=c?r+1:mt(1,r,h=>e[n[h]].claim_order,c))-1;i[l]=n[_]+1;const a=_+1;n[a]=l,r=Math.max(a,r)}const u=[],o=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);s>=l;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);u.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<u.length&&o[l].claim_order>=u[c].claim_order;)c++;const _=c<u.length?u[c]:null;t.insertBefore(o[l],_)}}function yt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=Z("style");return bt(X(t),e),e.sheet}function bt(t,e){return yt(t.head||t,e),e.sheet}function xt(t,e){if(O){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Qt(t,e,n){O&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Z(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Ut(){return L(" ")}function Wt(){return L("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){Et(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const l=n(s);return l===void 0?t.splice(o,1):t[o]=l,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const l=n(s);return l===void 0?t.splice(o,1):t[o]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||u.push(s.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Yt(t,e,n){return et(t,e,n,Z)}function Zt(t,e,n){return et(t,e,n,$t)}function vt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function te(t){return vt(t," ")}function ee(t,e){e=""+e,t.data!==e&&(t.data=e)}function ne(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ie(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function re(t,e){return new t(e)}const T=new Map;let D=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:gt(e),rules:{}};return T.set(t,n),n}function I(t,e,n,i,r,u,o,s=0){const l=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=l){const g=e+(n-e)*u(y);c+=y*100+`%{${o(g,1-g)}}
`}const _=c+`100% {${o(n,1-n)}}
}`,a=`__svelte_${At(_)}_${s}`,h=X(t),{stylesheet:f,rules:d}=T.get(h)||St(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,D+=1,a}function Ct(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),D-=r,D||jt())}function jt(){H(()=>{D||(T.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Y(e)}),T.clear())})}let S;function A(t){S=t}function nt(){if(!S)throw new Error("Function called outside component initialization");return S}function se(t){nt().$$.on_mount.push(t)}function oe(t){nt().$$.after_update.push(t)}const x=[],J=[];let w=[];const K=[],it=Promise.resolve();let B=!1;function rt(){B||(B=!0,it.then(st))}function le(){return rt(),it}function M(t){w.push(t)}const q=new Set;let b=0;function st(){if(b!==0)return;const t=S;do{try{for(;b<x.length;){const e=x[b];b++,A(e),kt(e.$$)}}catch(e){throw x.length=0,b=0,e}for(A(null),x.length=0,b=0;J.length;)J.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];q.has(n)||(q.add(n),n())}w.length=0}while(x.length);for(;K.length;)K.pop()();B=!1,q.clear(),A(t)}function kt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function Tt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}let N;function Dt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function z(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const k=new Set;let p;function ce(){p={r:0,c:[],p}}function ue(){p.r||v(p.c),p=p.p}function Mt(t,e){t&&t.i&&(k.delete(t),t.i(e))}function ae(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),p.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function fe(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),o=i?0:1,s=null,l=null,c=null;function _(){c&&Ct(t,c)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=lt,tick:g=E,css:P}=u||Ot,R={start:ft()+d,b:f};f||(R.group=p,p.r+=1),s||l?l=R:(P&&(_(),c=I(t,o,f,m,d,y,P)),f&&g(0,1),s=a(R,m),M(()=>z(t,f,"start")),_t(C=>{if(l&&C>l.start&&(s=a(l,m),l=null,z(t,s.b,"start"),P&&(_(),c=I(t,o,s.b,s.duration,0,y,u.css))),s){if(C>=s.end)g(o=s.b,1-o),z(t,s.b,"end"),l||(s.b?_():--s.group.r||v(s.group.c)),s=null;else if(C>=s.start){const ot=C-s.start;o=s.a+s.d*y(ot/s.duration),g(o,1-o)}}return!!(s||l)}))}return{run(f){F(u)?Dt().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),s=l=null}}}function _e(t){t&&t.c()}function de(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||M(()=>{const o=t.$$.on_mount.map(Q).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),u.forEach(M)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(Tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(x.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,n,i,r,u,o,s=[-1]){const l=S;A(t);const c=t.$$={fragment:null,ctx:[],props:u,update:E,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:G(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return c.ctx&&r(c.ctx[a],c.ctx[a]=d)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](d),_&&qt(t,a)),h}):[],c.update(),_=!0,v(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){dt();const a=wt(e.target);c.fragment&&c.fragment.l(a),a.forEach(Y)}else c.fragment&&c.fragment.c();e.intro&&Mt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),ht(),st()}A(l)}class me{$destroy(){Rt(this,1),this.$destroy=E}$on(e,n){if(!F(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as A,Rt as B,Ht as C,Bt as D,xt as E,Gt as F,It as G,Lt as H,E as I,Ft as J,lt as K,Jt as L,ie as M,Vt as N,v as O,Kt as P,M as Q,fe as R,me as S,$t as T,Zt as U,Ut as a,Qt as b,te as c,ae as d,Wt as e,ue as f,Mt as g,Y as h,he as i,oe as j,Z as k,Yt as l,wt as m,Xt as n,se as o,ne as p,L as q,vt as r,zt as s,le as t,ee as u,ce as v,J as w,re as x,_e as y,de as z};