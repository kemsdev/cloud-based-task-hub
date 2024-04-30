import{r as b,v as Vt,w as me,x as O,O as wt,U as _e,y as xe,z as oe,C as Wn,D as Gn,E as Kn,H as B,I as je,R as Oe,J as Xn,K as Pe,N as Yn,Q as Jn,S as Qn,V as ye,W as $e,X as A,Y as Zn,Z as es,_ as ts,$ as ns,a0 as et,a1 as ss,a2 as rs,a3 as is,a4 as as,j as a,f as K,a5 as ct,G as ve,a6 as os,a7 as ut,h as ls,a8 as qt,a9 as cs,aa as us,a as Wt,ab as Gt,ac as Kt,T as fe,ad as ds,B as Z,A as F,b as hs,ae as de,af as fs,u as ps,P as Xt,g as Yt,ag as tt,ah as Jt,ai as Qt,aj as dt,ak as Le,i as Zt,k as en,l as tn,e as ms,L as gs,al as bs}from"./index-DP8FjTfo.js";import{C as nn,T as _s}from"./Title-BScR8jUY.js";import{T as xs}from"./Tabs-UyfG_Ys0.js";import{b as ys,c as vs,d as ws,e as sn,f as Ts,g as Es}from"./taskApiSlice-CQVkAHk5.js";import{U as rn}from"./UserInfo-CUo-XkyS.js";import"bcryptjs";function an(e,t){let[n,s]=b.useState(e),r=Vt(e);return me(()=>s(r.current),[r,s,...t]),n}function Ss(e,t,n){let[s,r]=b.useState(n),i=e!==void 0,o=b.useRef(i),l=b.useRef(!1),c=b.useRef(!1);return i&&!o.current&&!l.current?(l.current=!0,o.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!i&&o.current&&!c.current&&(c.current=!0,o.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[i?e:s,O(u=>(i||r(u),t==null?void 0:t(u)))]}function on(e={},t=null,n=[]){for(let[s,r]of Object.entries(e))cn(n,ln(t,s),r);return n}function ln(e,t){return e?e+"["+t+"]":t}function cn(e,t,n){if(Array.isArray(n))for(let[s,r]of n.entries())cn(e,ln(t,s.toString()),r);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):on(n,t,e)}var Rs=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Rs||{}),Is=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Is||{}),Ns=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ns||{}),Ds=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ds||{});function Ve(e,t=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,s=as(t(e.options.slice()),i=>i.dataRef.current.domRef.current),r=n?s.indexOf(n):null;return r===-1&&(r=null),{options:s,activeOptionIndex:r}}let Os={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,s=e.options.findIndex(r=>n(r.dataRef.current.value));return s!==-1&&(t=s),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||e.listboxState===1)return e;let s=Ve(e),r=is(t,{resolveItems:()=>s.options,resolveActiveIndex:()=>s.activeOptionIndex,resolveId:i=>i.id,resolveDisabled:i=>i.dataRef.current.disabled});return{...e,...s,searchQuery:"",activeOptionIndex:r,activationTrigger:(n=t.trigger)!=null?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,s=e.searchQuery+t.value.toLowerCase(),r=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(o=>{var l;return!o.dataRef.current.disabled&&((l=o.dataRef.current.textValue)==null?void 0:l.startsWith(s))}),i=r?e.options.indexOf(r):-1;return i===-1||i===e.activeOptionIndex?{...e,searchQuery:s}:{...e,searchQuery:s,activeOptionIndex:i,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},s=Ve(e,r=>[...r,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(s.activeOptionIndex=s.options.indexOf(n)),{...e,...s}},6:(e,t)=>{let n=Ve(e,s=>{let r=s.findIndex(i=>i.id===t.id);return r!==-1&&s.splice(r,1),s});return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},ht=b.createContext(null);ht.displayName="ListboxActionsContext";function we(e){let t=b.useContext(ht);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,we),n}return t}let ft=b.createContext(null);ft.displayName="ListboxDataContext";function Te(e){let t=b.useContext(ft);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Te),n}return t}function As(e,t){return oe(t.type,Os,e,t)}let Cs=b.Fragment;function js(e,t){let{value:n,defaultValue:s,form:r,name:i,onChange:o,by:l=(v,N)=>v===N,disabled:c=!1,horizontal:u=!1,multiple:p=!1,...g}=e;const x=u?"horizontal":"vertical";let d=xe(t),[h=p?[]:void 0,m]=Ss(n,o,s),[_,f]=b.useReducer(As,{dataRef:b.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),y=b.useRef({static:!1,hold:!1}),E=b.useRef(null),T=b.useRef(null),k=b.useRef(null),I=O(typeof l=="string"?(v,N)=>{let C=l;return(v==null?void 0:v[C])===(N==null?void 0:N[C])}:l),P=b.useCallback(v=>oe(w.mode,{1:()=>h.some(N=>I(N,v)),0:()=>I(h,v)}),[h]),w=b.useMemo(()=>({..._,value:h,disabled:c,mode:p?1:0,orientation:x,compare:I,isSelected:P,optionsPropsRef:y,labelRef:E,buttonRef:T,optionsRef:k}),[h,c,p,_]);me(()=>{_.dataRef.current=w},[w]),Wn([w.buttonRef,w.optionsRef],(v,N)=>{var C;f({type:1}),Gn(N,Kn.Loose)||(v.preventDefault(),(C=w.buttonRef.current)==null||C.focus())},w.listboxState===0);let V=b.useMemo(()=>({open:w.listboxState===0,disabled:c,value:h}),[w,c,h]),Re=O(v=>{let N=w.options.find(C=>C.id===v);N&&re(N.dataRef.current.value)}),$=O(()=>{if(w.activeOptionIndex!==null){let{dataRef:v,id:N}=w.options[w.activeOptionIndex];re(v.current.value),f({type:2,focus:B.Specific,id:N})}}),ne=O(()=>f({type:0})),L=O(()=>f({type:1})),se=O((v,N,C)=>v===B.Specific?f({type:2,focus:B.Specific,id:N,trigger:C}):f({type:2,focus:v,trigger:C})),Ie=O((v,N)=>(f({type:5,id:v,dataRef:N}),()=>f({type:6,id:v}))),ze=O(v=>(f({type:7,id:v}),()=>f({type:7,id:null}))),re=O(v=>oe(w.mode,{0(){return m==null?void 0:m(v)},1(){let N=w.value.slice(),C=N.findIndex(De=>I(De,v));return C===-1?N.push(v):N.splice(C,1),m==null?void 0:m(N)}})),q=O(v=>f({type:3,value:v})),Hn=O(()=>f({type:4})),zn=b.useMemo(()=>({onChange:re,registerOption:Ie,registerLabel:ze,goToOption:se,closeListbox:L,openListbox:ne,selectActiveOption:$,selectOption:Re,search:q,clearSearch:Hn}),[]),Vn={ref:d},Ne=b.useRef(null),qn=je();return b.useEffect(()=>{Ne.current&&s!==void 0&&qn.addEventListener(Ne.current,"reset",()=>{m==null||m(s)})},[Ne,m]),Oe.createElement(ht.Provider,{value:zn},Oe.createElement(ft.Provider,{value:w},Oe.createElement(Xn,{value:oe(w.listboxState,{0:Pe.Open,1:Pe.Closed})},i!=null&&h!=null&&on({[i]:h}).map(([v,N],C)=>Oe.createElement(Yn,{features:Jn.Hidden,ref:C===0?De=>{var vt;Ne.current=(vt=De==null?void 0:De.closest("form"))!=null?vt:null}:void 0,...Qn({key:v,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:r,disabled:c,name:v,value:N})})),ye({ourProps:Vn,theirProps:g,slot:V,defaultTag:Cs,name:"Listbox"}))))}let Ps="button";function Ls(e,t){var n;let s=$e(),{id:r=`headlessui-listbox-button-${s}`,...i}=e,o=Te("Listbox.Button"),l=we("Listbox.Button"),c=xe(o.buttonRef,t),u=je(),p=O(_=>{switch(_.key){case A.Space:case A.Enter:case A.ArrowDown:_.preventDefault(),l.openListbox(),u.nextFrame(()=>{o.value||l.goToOption(B.First)});break;case A.ArrowUp:_.preventDefault(),l.openListbox(),u.nextFrame(()=>{o.value||l.goToOption(B.Last)});break}}),g=O(_=>{switch(_.key){case A.Space:_.preventDefault();break}}),x=O(_=>{if(Zn(_.currentTarget))return _.preventDefault();o.listboxState===0?(l.closeListbox(),u.nextFrame(()=>{var f;return(f=o.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})})):(_.preventDefault(),l.openListbox())}),d=an(()=>{if(o.labelId)return[o.labelId,r].join(" ")},[o.labelId,r]),h=b.useMemo(()=>({open:o.listboxState===0,disabled:o.disabled,value:o.value}),[o]),m={ref:c,id:r,type:es(e,o.buttonRef),"aria-haspopup":"listbox","aria-controls":(n=o.optionsRef.current)==null?void 0:n.id,"aria-expanded":o.listboxState===0,"aria-labelledby":d,disabled:o.disabled,onKeyDown:p,onKeyUp:g,onClick:x};return ye({ourProps:m,theirProps:i,slot:h,defaultTag:Ps,name:"Listbox.Button"})}let Us="label";function Bs(e,t){let n=$e(),{id:s=`headlessui-listbox-label-${n}`,...r}=e,i=Te("Listbox.Label"),o=we("Listbox.Label"),l=xe(i.labelRef,t);me(()=>o.registerLabel(s),[s]);let c=O(()=>{var p;return(p=i.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})}),u=b.useMemo(()=>({open:i.listboxState===0,disabled:i.disabled}),[i]);return ye({ourProps:{ref:l,id:s,onClick:c},theirProps:r,slot:u,defaultTag:Us,name:"Listbox.Label"})}let Ms="ul",ks=wt.RenderStrategy|wt.Static;function $s(e,t){var n;let s=$e(),{id:r=`headlessui-listbox-options-${s}`,...i}=e,o=Te("Listbox.Options"),l=we("Listbox.Options"),c=xe(o.optionsRef,t),u=je(),p=je(),g=ts(),x=g!==null?(g&Pe.Open)===Pe.Open:o.listboxState===0;b.useEffect(()=>{var f;let y=o.optionsRef.current;y&&o.listboxState===0&&y!==((f=ns(y))==null?void 0:f.activeElement)&&y.focus({preventScroll:!0})},[o.listboxState,o.optionsRef]);let d=O(f=>{switch(p.dispose(),f.key){case A.Space:if(o.searchQuery!=="")return f.preventDefault(),f.stopPropagation(),l.search(f.key);case A.Enter:if(f.preventDefault(),f.stopPropagation(),o.activeOptionIndex!==null){let{dataRef:y}=o.options[o.activeOptionIndex];l.onChange(y.current.value)}o.mode===0&&(l.closeListbox(),et().nextFrame(()=>{var y;return(y=o.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})}));break;case oe(o.orientation,{vertical:A.ArrowDown,horizontal:A.ArrowRight}):return f.preventDefault(),f.stopPropagation(),l.goToOption(B.Next);case oe(o.orientation,{vertical:A.ArrowUp,horizontal:A.ArrowLeft}):return f.preventDefault(),f.stopPropagation(),l.goToOption(B.Previous);case A.Home:case A.PageUp:return f.preventDefault(),f.stopPropagation(),l.goToOption(B.First);case A.End:case A.PageDown:return f.preventDefault(),f.stopPropagation(),l.goToOption(B.Last);case A.Escape:return f.preventDefault(),f.stopPropagation(),l.closeListbox(),u.nextFrame(()=>{var y;return(y=o.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})});case A.Tab:f.preventDefault(),f.stopPropagation();break;default:f.key.length===1&&(l.search(f.key),p.setTimeout(()=>l.clearSearch(),350));break}}),h=an(()=>{var f;return(f=o.buttonRef.current)==null?void 0:f.id},[o.buttonRef.current]),m=b.useMemo(()=>({open:o.listboxState===0}),[o]),_={"aria-activedescendant":o.activeOptionIndex===null||(n=o.options[o.activeOptionIndex])==null?void 0:n.id,"aria-multiselectable":o.mode===1?!0:void 0,"aria-labelledby":h,"aria-orientation":o.orientation,id:r,onKeyDown:d,role:"listbox",tabIndex:0,ref:c};return ye({ourProps:_,theirProps:i,slot:m,defaultTag:Ms,features:ks,visible:x,name:"Listbox.Options"})}let Fs="li";function Hs(e,t){let n=$e(),{id:s=`headlessui-listbox-option-${n}`,disabled:r=!1,value:i,...o}=e,l=Te("Listbox.Option"),c=we("Listbox.Option"),u=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===s:!1,p=l.isSelected(i),g=b.useRef(null),x=ss(g),d=Vt({disabled:r,value:i,domRef:g,get textValue(){return x()}}),h=xe(t,g);me(()=>{if(l.listboxState!==0||!u||l.activationTrigger===0)return;let I=et();return I.requestAnimationFrame(()=>{var P,w;(w=(P=g.current)==null?void 0:P.scrollIntoView)==null||w.call(P,{block:"nearest"})}),I.dispose},[g,u,l.listboxState,l.activationTrigger,l.activeOptionIndex]),me(()=>c.registerOption(s,d),[d,s]);let m=O(I=>{if(r)return I.preventDefault();c.onChange(i),l.mode===0&&(c.closeListbox(),et().nextFrame(()=>{var P;return(P=l.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})}))}),_=O(()=>{if(r)return c.goToOption(B.Nothing);c.goToOption(B.Specific,s)}),f=rs(),y=O(I=>f.update(I)),E=O(I=>{f.wasMoved(I)&&(r||u||c.goToOption(B.Specific,s,0))}),T=O(I=>{f.wasMoved(I)&&(r||u&&c.goToOption(B.Nothing))}),k=b.useMemo(()=>({active:u,selected:p,disabled:r}),[u,p,r]);return ye({ourProps:{id:s,ref:h,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":p,disabled:void 0,onClick:m,onFocus:_,onPointerEnter:y,onMouseEnter:y,onPointerMove:E,onMouseMove:E,onPointerLeave:T,onMouseLeave:T},theirProps:o,slot:k,defaultTag:Fs,name:"Listbox.Option"})}let zs=_e(js),Vs=_e(Ls),qs=_e(Bs),Ws=_e($s),Gs=_e(Hs),G=Object.assign(zs,{Button:Vs,Label:qs,Options:Ws,Option:Gs});const qe=({label:e,className:t})=>a.jsxs("div",{className:"w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between",children:[a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx("div",{className:K("w-4 h-4 rounded-full ",t)}),a.jsx("p",{className:"text-sm md:text-base text-gray-600",children:e})]}),a.jsx("button",{className:"hidden md:block",children:a.jsx(ct,{className:"text-lg text-black"})})]});function Ks(e){return ve({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{fill:"#D9D9D9",d:"M159 768h612.3l103.4-256H262.3z"},child:[]},{tag:"path",attr:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"},child:[]}]})(e)}function un(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"},child:[]}]})(e)}function Xs(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(e)}function Ys(e){return ve({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"},child:[]},{tag:"path",attr:{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"},child:[]}]})(e)}function Js(e){return ve({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"},child:[]}]})(e)}new Date("2023-01-15").toISOString(),new Date("2023-01-15").toISOString(),new Date("2023-01-15").toISOString(),new Date("2024-01-15").toISOString(),new Date("2023-01-15").toISOString(),new Date("2023-01-15").toISOString();const Qs=({setTeam:e,team:t})=>{const{data:n,isLoading:s}=os(),[r,i]=b.useState([]),o=l=>{i(l),e(l==null?void 0:l.map(c=>c._id))};return b.useEffect(()=>{(t==null?void 0:t.length)<1?n&&i([n[0]]):i(t)},[s]),a.jsxs("div",{children:[a.jsx("p",{className:"text-gray-700",children:"Assign Task To: "}),a.jsx(G,{value:r,onChange:l=>o(l),multiple:!0,children:a.jsxs("div",{className:"relative mt-1",children:[a.jsxs(G.Button,{className:"relative w-full cursor-default rounded bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-300 sm:text-sm",children:[a.jsx("span",{className:"block truncate",children:r==null?void 0:r.map(l=>l.name).join(", ")}),a.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:a.jsx(un,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),a.jsx(ut,{as:b.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a.jsx(G.Options,{className:"z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:n==null?void 0:n.map((l,c)=>a.jsx(G.Option,{className:({active:u})=>`relative cursor-default select-none py-2 pl-10 pr-4. ${u?"bg-amber-100 text-amber-900":"text-gray-900"} `,value:l,children:({selected:u})=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:K("flex items-center gap-2 truncate",u?"font-medium":"font-normal"),children:[a.jsx("div",{className:"w-6 h-6 rounded-full text-white flex items-center justify-center bg-violet-600",children:a.jsx("span",{className:"text-center text-[10px]",children:ls(l.name)})}),a.jsx("span",{children:l.name})]}),u?a.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",children:a.jsx(qt,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},c))})})]})})]})},Tt=({lists:e,selected:t,setSelected:n,label:s})=>a.jsxs("div",{className:"w-full",children:[s&&a.jsx("p",{className:"text-slate-900 dark:text-gray-500",children:s}),a.jsx(G,{value:t,onChange:n,children:a.jsxs("div",{className:"relative mt-1",children:[a.jsxs(G.Button,{className:"relative w-full cursor-default rounded bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-300 sm:text-sm",children:[a.jsx("span",{className:"block truncate",children:t}),a.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:a.jsx(un,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),a.jsx(ut,{as:b.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a.jsx(G.Options,{className:"z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:e.map((r,i)=>a.jsx(G.Option,{className:({active:o})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${o?"bg-amber-100 text-amber-900":"text-gray-900"}`,value:r,children:({selected:o})=>a.jsxs(a.Fragment,{children:[a.jsx("span",{className:`block truncate ${o?"font-medium":"font-normal"}`,children:r}),o?a.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",children:a.jsx(qt,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},i))})})]})})]}),Et=globalThis||void 0||self;var St={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Zs=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],l=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,l=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,p=i>>2,g=(i&3)<<4|l>>4;let x=(l&15)<<2|u>>6,d=u&63;c||(d=64,o||(x=64)),s.push(n[p],n[g],n[x],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Zs(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],l=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const g=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||l==null||u==null||g==null)throw new er;const x=i<<2|l>>4;if(s.push(x),u!==64){const d=l<<4&240|u>>2;if(s.push(d),g!==64){const h=u<<6&192|g;s.push(h)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class er extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tr=function(e){const t=dn(e);return hn.encodeByteArray(t,!0)},Ue=function(e){return tr(e).replace(/\./g,"")},nr=function(e){try{return hn.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof Et<"u")return Et;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=()=>sr().__FIREBASE_DEFAULTS__,ir=()=>{if(typeof cs>"u"||typeof St>"u")return;const e=St.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ar=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&nr(e[1]);return t&&JSON.parse(t)},fn=()=>{try{return rr()||ir()||ar()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},or=e=>{var t,n;return(n=(t=fn())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},lr=e=>{const t=or(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},pn=()=>{var e;return(e=fn())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ue(JSON.stringify(n)),Ue(JSON.stringify(o)),""].join(".")}function dr(){try{return typeof indexedDB=="object"}catch{return!1}}function hr(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="FirebaseError";class ce extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=fr,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mn.prototype.create)}}class mn{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?pr(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new ce(r,l,s)}}function pr(e,t){return e.replace(mr,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const mr=/\{\$([^}]+)}/g;function nt(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Rt(i)&&Rt(o)){if(!nt(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Rt(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){return e&&e._delegate?e._delegate:e}class ge{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new cr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_r(t))try{this.getOrInitializeService({instanceIdentifier:J})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=J){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=J){return this.instances.has(t)}getOptions(t=J){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:br(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=J){return this.component?this.component.multipleInstances?t:J:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function br(e){return e===J?void 0:e}function _r(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new gr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const yr={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},vr=S.INFO,wr={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Tr=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=wr[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Er{constructor(t){this.name=t,this._logLevel=vr,this._logHandler=Tr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}const Sr=(e,t)=>t.some(n=>e instanceof n);let It,Nt;function Rr(){return It||(It=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ir(){return Nt||(Nt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gn=new WeakMap,st=new WeakMap,bn=new WeakMap,We=new WeakMap,pt=new WeakMap;function Nr(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(X(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&gn.set(n,e)}).catch(()=>{}),pt.set(t,e),t}function Dr(e){if(st.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});st.set(e,t)}let rt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return st.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return X(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Or(e){rt=e(rt)}function Ar(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ge(this),t,...n);return bn.set(s,t.sort?t.sort():[t]),X(s)}:Ir().includes(e)?function(...t){return e.apply(Ge(this),t),X(gn.get(this))}:function(...t){return X(e.apply(Ge(this),t))}}function Cr(e){return typeof e=="function"?Ar(e):(e instanceof IDBTransaction&&Dr(e),Sr(e,Rr())?new Proxy(e,rt):e)}function X(e){if(e instanceof IDBRequest)return Nr(e);if(We.has(e))return We.get(e);const t=Cr(e);return t!==e&&(We.set(e,t),pt.set(t,e)),t}const Ge=e=>pt.get(e);function jr(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),l=X(o);return s&&o.addEventListener("upgradeneeded",c=>{s(X(o.result),c.oldVersion,c.newVersion,X(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Pr=["get","getKey","getAll","getAllKeys","count"],Lr=["put","add","delete","clear"],Ke=new Map;function Dt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ke.get(t))return Ke.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Lr.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Pr.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return Ke.set(t,i),i}Or(e=>({...e,get:(t,n,s)=>Dt(t,n)||e.get(t,n,s),has:(t,n)=>!!Dt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Br(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Br(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const it="@firebase/app",Ot="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new Er("@firebase/app"),Mr="@firebase/app-compat",kr="@firebase/analytics-compat",$r="@firebase/analytics",Fr="@firebase/app-check-compat",Hr="@firebase/app-check",zr="@firebase/auth",Vr="@firebase/auth-compat",qr="@firebase/database",Wr="@firebase/database-compat",Gr="@firebase/functions",Kr="@firebase/functions-compat",Xr="@firebase/installations",Yr="@firebase/installations-compat",Jr="@firebase/messaging",Qr="@firebase/messaging-compat",Zr="@firebase/performance",ei="@firebase/performance-compat",ti="@firebase/remote-config",ni="@firebase/remote-config-compat",si="@firebase/storage",ri="@firebase/storage-compat",ii="@firebase/firestore",ai="@firebase/firestore-compat",oi="firebase",li="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="[DEFAULT]",ci={[it]:"fire-core",[Mr]:"fire-core-compat",[$r]:"fire-analytics",[kr]:"fire-analytics-compat",[Hr]:"fire-app-check",[Fr]:"fire-app-check-compat",[zr]:"fire-auth",[Vr]:"fire-auth-compat",[qr]:"fire-rtdb",[Wr]:"fire-rtdb-compat",[Gr]:"fire-fn",[Kr]:"fire-fn-compat",[Xr]:"fire-iid",[Yr]:"fire-iid-compat",[Jr]:"fire-fcm",[Qr]:"fire-fcm-compat",[Zr]:"fire-perf",[ei]:"fire-perf-compat",[ti]:"fire-rc",[ni]:"fire-rc-compat",[si]:"fire-gcs",[ri]:"fire-gcs-compat",[ii]:"fire-fst",[ai]:"fire-fst-compat","fire-js":"fire-js",[oi]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new Map,ui=new Map,ot=new Map;function At(e,t){try{e.container.addComponent(t)}catch(n){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Me(e){const t=e.name;if(ot.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;ot.set(t,e);for(const n of Be.values())At(n,e);for(const n of ui.values())At(n,e);return!0}function di(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Y=new mn("app","Firebase",hi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Y.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=li;function _n(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:at,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Y.create("bad-app-name",{appName:String(r)});if(n||(n=pn()),!n)throw Y.create("no-options");const i=Be.get(r);if(i){if(nt(n,i.options)&&nt(s,i.config))return i;throw Y.create("duplicate-app",{appName:r})}const o=new xr(r);for(const c of ot.values())o.addComponent(c);const l=new fi(n,s,o);return Be.set(r,l),l}function mi(e=at){const t=Be.get(e);if(!t&&e===at&&pn())return _n();if(!t)throw Y.create("no-app",{appName:e});return t}function le(e,t,n){var s;let r=(s=ci[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(l.join(" "));return}Me(new ge(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="firebase-heartbeat-database",bi=1,be="firebase-heartbeat-store";let Xe=null;function xn(){return Xe||(Xe=jr(gi,bi,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(be)}catch(n){console.warn(n)}}}}).catch(e=>{throw Y.create("idb-open",{originalErrorMessage:e.message})})),Xe}async function _i(e){try{const n=(await xn()).transaction(be),s=await n.objectStore(be).get(yn(e));return await n.done,s}catch(t){if(t instanceof ce)ee.warn(t.message);else{const n=Y.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(n.message)}}}async function Ct(e,t){try{const s=(await xn()).transaction(be,"readwrite");await s.objectStore(be).put(t,yn(e)),await s.done}catch(n){if(n instanceof ce)ee.warn(n.message);else{const s=Y.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ee.warn(s.message)}}}function yn(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=1024,yi=30*24*60*60*1e3;class vi{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ti(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jt();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=yi}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jt(),{heartbeatsToSend:s,unsentEntries:r}=wi(this._heartbeatsCache.heartbeats),i=Ue(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jt(){return new Date().toISOString().substring(0,10)}function wi(e,t=xi){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Pt(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Pt(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ti{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dr()?hr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _i(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ct(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ct(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Pt(e){return Ue(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e){Me(new ge("platform-logger",t=>new Ur(t),"PRIVATE")),Me(new ge("heartbeat",t=>new vi(t),"PRIVATE")),le(it,Ot,e),le(it,Ot,"esm2017"),le("fire-js","")}Ei("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="firebasestorage.googleapis.com",wn="storageBucket",Si=2*60*1e3,Ri=10*60*1e3,Ii=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends ce{constructor(t,n,s=0){super(Ye(t),`Firebase Storage: ${n} (${Ye(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ye(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var R;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(R||(R={}));function Ye(e){return"storage/"+e}function mt(){const e="An unknown error occurred, please check the error payload for server response.";return new D(R.UNKNOWN,e)}function Ni(e){return new D(R.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Di(e){return new D(R.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Oi(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new D(R.UNAUTHENTICATED,e)}function Ai(){return new D(R.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ci(e){return new D(R.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Tn(){return new D(R.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function En(){return new D(R.CANCELED,"User canceled the upload/download.")}function ji(e){return new D(R.INVALID_URL,"Invalid URL '"+e+"'.")}function Pi(e){return new D(R.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Li(){return new D(R.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wn+"' property when initializing the app?")}function Sn(){return new D(R.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ui(){return new D(R.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Bi(){return new D(R.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Mi(e){return new D(R.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lt(e){return new D(R.INVALID_ARGUMENT,e)}function Rn(){return new D(R.APP_DELETED,"The Firebase app was deleted.")}function ki(e){return new D(R.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pe(e,t){return new D(R.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function he(e){throw new D(R.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=M.makeFromUrl(t,n)}catch{return new M(t,"")}if(s.path==="")return s;throw Pi(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(T){T.path_=decodeURIComponent(T.path)}const p="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",d=new RegExp(`^https?://${g}/${p}/b/${r}/o${x}`,"i"),h={bucket:1,path:3},m=n===vn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",f=new RegExp(`^https?://${m}/${r}/${_}`,"i"),E=[{regex:l,indices:c,postModify:i},{regex:d,indices:h,postModify:u},{regex:f,indices:{bucket:1,path:2},postModify:u}];for(let T=0;T<E.length;T++){const k=E[T],I=k.regex.exec(t);if(I){const P=I[k.indices.bucket];let w=I[k.indices.path];w||(w=""),s=new M(P,w),k.postModify(s);break}}if(s==null)throw ji(t);return s}}class $i{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e,t,n){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function p(..._){u||(u=!0,t.apply(null,_))}function g(_){r=setTimeout(()=>{r=null,e(d,c())},_)}function x(){i&&clearTimeout(i)}function d(_,...f){if(u){x();return}if(_){x(),p.call(null,_,...f);return}if(c()||o){x(),p.call(null,_,...f);return}s<64&&(s*=2);let E;l===1?(l=2,E=0):E=(s+Math.random())*1e3,g(E)}let h=!1;function m(_){h||(h=!0,x(),!u&&(r!==null?(_||(l=2),clearTimeout(r),g(0)):_||(l=1)))}return g(0),i=setTimeout(()=>{o=!0,m(!0)},n),m}function Hi(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e){return e!==void 0}function Vi(e){return typeof e=="function"}function qi(e){return typeof e=="object"&&!Array.isArray(e)}function He(e){return typeof e=="string"||e instanceof String}function Lt(e){return gt()&&e instanceof Blob}function gt(){return typeof Blob<"u"}function Ut(e,t,n,s){if(s<t)throw lt(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw lt(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function In(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Q||(Q={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,n,s,r,i,o,l,c,u,p,g,x=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=p,this.connectionFactory_=g,this.retry=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,h)=>{this.resolve_=d,this.reject_=h,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new Ae(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Q.NO_ERROR,c=i.getStatus();if(!l||Nn(c,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Q.ABORT;s(!1,new Ae(!1,null,p));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ae(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());zi(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=mt();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Rn():En();o(c)}else{const c=Tn();o(c)}};this.canceled_?n(!1,new Ae(!1,null,!0)):this.backoffId_=Fi(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Hi(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ae{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Gi(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ki(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Xi(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Yi(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Ji(e,t,n,s,r,i,o=!0){const l=In(e.urlParams),c=e.url+l,u=Object.assign({},e.headers);return Xi(u,t),Gi(u,n),Ki(u,i),Yi(u,s),new Wi(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Zi(...e){const t=Qi();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(gt())return new Blob(e);throw new D(R.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ea(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e){if(typeof atob>"u")throw Mi("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Je{constructor(t,n){this.data=t,this.contentType=n||null}}function na(e,t){switch(e){case H.RAW:return new Je(Dn(t));case H.BASE64:case H.BASE64URL:return new Je(On(e,t));case H.DATA_URL:return new Je(ra(t),ia(t))}throw mt()}function Dn(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=s,o=e.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function sa(e){let t;try{t=decodeURIComponent(e)}catch{throw pe(H.DATA_URL,"Malformed data URL.")}return Dn(t)}function On(e,t){switch(e){case H.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw pe(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case H.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw pe(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ta(t)}catch(r){throw r.message.includes("polyfill")?r:pe(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class An{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw pe(H.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=aa(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function ra(e){const t=new An(e);return t.base64?On(H.BASE64,t.rest):sa(t.rest)}function ia(e){return new An(e).contentType}function aa(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n){let s=0,r="";Lt(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Lt(this.data_)){const s=this.data_,r=ea(s,t,n);return r===null?null:new W(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new W(s,!0)}}static getBlob(...t){if(gt()){const n=t.map(s=>s instanceof W?s.data_:s);return new W(Zi.apply(null,n))}else{const n=t.map(o=>He(o)?na(H.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)r[i++]=o[l]}),new W(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){let t;try{t=JSON.parse(e)}catch{return null}return qi(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function la(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function jn(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(e,t){return t}class j{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||ca}}let Ce=null;function ua(e){return!He(e)||e.length<2?e:jn(e)}function Pn(){if(Ce)return Ce;const e=[];e.push(new j("bucket")),e.push(new j("generation")),e.push(new j("metageneration")),e.push(new j("name","fullPath",!0));function t(i,o){return ua(o)}const n=new j("name");n.xform=t,e.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new j("size");return r.xform=s,e.push(r),e.push(new j("timeCreated")),e.push(new j("updated")),e.push(new j("md5Hash",null,!0)),e.push(new j("cacheControl",null,!0)),e.push(new j("contentDisposition",null,!0)),e.push(new j("contentEncoding",null,!0)),e.push(new j("contentLanguage",null,!0)),e.push(new j("contentType",null,!0)),e.push(new j("metadata","customMetadata",!0)),Ce=e,Ce}function da(e,t){function n(){const s=e.bucket,r=e.fullPath,i=new M(s,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function ha(e,t,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,t[o.server])}return da(s,e),s}function Ln(e,t,n){const s=Cn(t);return s===null?null:ha(e,s,n)}function fa(e,t,n,s){const r=Cn(t);if(r===null||!He(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const p=e.bucket,g=e.fullPath,x="/b/"+o(p)+"/o/"+o(g),d=Ee(x,n,s),h=In({alt:"media",token:u});return d+h})[0]}function Un(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class ue{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(!e)throw mt()}function bt(e,t){function n(s,r){const i=Ln(e,r,t);return z(i!==null),i}return n}function pa(e,t){function n(s,r){const i=Ln(e,r,t);return z(i!==null),fa(i,r,e.host,e._protocol)}return n}function Se(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Ai():r=Oi():n.getStatus()===402?r=Di(e.bucket):n.getStatus()===403?r=Ci(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Bn(e){const t=Se(e);function n(s,r){let i=t(s,r);return s.getStatus()===404&&(i=Ni(e.path)),i.serverResponse=r.serverResponse,i}return n}function ma(e,t,n){const s=t.fullServerUrl(),r=Ee(s,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,l=new ue(r,i,bt(e,n),o);return l.errorHandler=Bn(t),l}function ga(e,t,n){const s=t.fullServerUrl(),r=Ee(s,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,l=new ue(r,i,pa(e,n),o);return l.errorHandler=Bn(t),l}function ba(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Mn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=ba(null,t)),s}function _a(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let T=0;T<2;T++)E=E+Math.random().toString().slice(2);return E}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=Mn(t,s,r),p=Un(u,n),g="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,x=`\r
--`+c+"--",d=W.getBlob(g,s,x);if(d===null)throw Sn();const h={name:u.fullPath},m=Ee(i,e.host,e._protocol),_="POST",f=e.maxUploadRetryTime,y=new ue(m,_,bt(e,n),f);return y.urlParams=h,y.headers=o,y.body=d.uploadData(),y.errorHandler=Se(t),y}class ke{constructor(t,n,s,r){this.current=t,this.total=n,this.finalized=!!s,this.metadata=r||null}}function _t(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{z(!1)}return z(!!n&&(t||["active"]).indexOf(n)!==-1),n}function xa(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o=Mn(t,s,r),l={name:o.fullPath},c=Ee(i,e.host,e._protocol),u="POST",p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},g=Un(o,n),x=e.maxUploadRetryTime;function d(m){_t(m);let _;try{_=m.getResponseHeader("X-Goog-Upload-URL")}catch{z(!1)}return z(He(_)),_}const h=new ue(c,u,d,x);return h.urlParams=l,h.headers=p,h.body=g,h.errorHandler=Se(t),h}function ya(e,t,n,s){const r={"X-Goog-Upload-Command":"query"};function i(u){const p=_t(u,["active","final"]);let g=null;try{g=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{z(!1)}g||z(!1);const x=Number(g);return z(!isNaN(x)),new ke(x,s.size(),p==="final")}const o="POST",l=e.maxUploadRetryTime,c=new ue(n,o,i,l);return c.headers=r,c.errorHandler=Se(t),c}const Bt=256*1024;function va(e,t,n,s,r,i,o,l){const c=new ke(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw Ui();const u=c.total-c.current;let p=u;r>0&&(p=Math.min(p,r));const g=c.current,x=g+p;let d="";p===0?d="finalize":u===p?d="upload, finalize":d="upload";const h={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${c.current}`},m=s.slice(g,x);if(m===null)throw Sn();function _(T,k){const I=_t(T,["active","final"]),P=c.current+p,w=s.size();let V;return I==="final"?V=bt(t,i)(T,k):V=null,new ke(P,w,I==="final",V)}const f="POST",y=t.maxUploadRetryTime,E=new ue(n,f,_,y);return E.headers=h,E.body=m.uploadData(),E.progressCallback=l||null,E.errorHandler=Se(e),E}const U={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Qe(e){switch(e){case"running":case"pausing":case"canceling":return U.RUNNING;case"paused":return U.PAUSED;case"success":return U.SUCCESS;case"canceled":return U.CANCELED;case"error":return U.ERROR;default:return U.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n,s){if(Vi(t)||n!=null||s!=null)this.next=t,this.error=n??void 0,this.complete=s??void 0;else{const i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class Ta{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Q.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Q.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Q.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw he("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw he("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw he("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw he("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw he("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ea extends Ta{initXhr(){this.xhr_.responseType="text"}}function ae(){return new Ea}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=s,this._mappings=Pn(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(R.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Nn(r.status,[]))if(i)r=Tn();else{this.sleepTime=Math.max(this.sleepTime*2,Ii),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(R.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":t(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const s=xa(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,ae,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,s)=>{const r=ya(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,ae,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Bt*this._chunkMultiplier,n=new ke(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=va(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(o,ae,r,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Bt*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const s=ma(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,ae,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const s=_a(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,ae,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=En(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Qe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,s,r){const i=new wa(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Qe(this._state)){case U.SUCCESS:ie(this._resolve.bind(null,this.snapshot))();break;case U.CANCELED:case U.ERROR:const n=this._reject;ie(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Qe(this._state)){case U.RUNNING:case U.PAUSED:t.next&&ie(t.next.bind(t,this.snapshot))();break;case U.SUCCESS:t.complete&&ie(t.complete.bind(t))();break;case U.CANCELED:case U.ERROR:t.error&&ie(t.error.bind(t,this._error))();break;default:t.error&&ie(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,n){this._service=t,n instanceof M?this._location=n:this._location=M.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new te(t,n)}get root(){const t=new M(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jn(this._location.path)}get storage(){return this._service}get parent(){const t=oa(this._location.path);if(t===null)return null;const n=new M(this._location.bucket,t);return new te(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw ki(t)}}function Ra(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Sa(e,new W(t),n)}function Ia(e){e._throwIfRoot("getDownloadURL");const t=ga(e.storage,e._location,Pn());return e.storage.makeRequestWithTokens(t,ae).then(n=>{if(n===null)throw Bi();return n})}function Na(e,t){const n=la(e._location.path,t),s=new M(e._location.bucket,n);return new te(e.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e){return/^[A-Za-z]+:\/\//.test(e)}function Oa(e,t){return new te(e,t)}function kn(e,t){if(e instanceof xt){const n=e;if(n._bucket==null)throw Li();const s=new te(n,n._bucket);return t!=null?kn(s,t):s}else return t!==void 0?Na(e,t):e}function Aa(e,t){if(t&&Da(t)){if(e instanceof xt)return Oa(e,t);throw lt("To use ref(service, url), the first argument must be a Storage instance.")}else return kn(e,t)}function Mt(e,t){const n=t==null?void 0:t[wn];return n==null?null:M.makeFromBucketSpec(n,e)}function Ca(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:ur(r,e.app.options.projectId))}class xt{constructor(t,n,s,r,i){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=vn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Si,this._maxUploadRetryTime=Ri,this._requests=new Set,r!=null?this._bucket=M.makeFromBucketSpec(r,this._host):this._bucket=Mt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=M.makeFromBucketSpec(this._url,t):this._bucket=Mt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ut("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ut("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new te(this,t)}_makeRequest(t,n,s,r,i=!0){if(this._deleted)return new $i(Rn());{const o=Ji(t,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const kt="@firebase/storage",$t="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="storage";function ja(e,t,n){return e=Fe(e),Ra(e,t,n)}function Pa(e){return e=Fe(e),Ia(e)}function La(e,t){return e=Fe(e),Aa(e,t)}function Ua(e=mi(),t){e=Fe(e);const s=di(e,$n).getImmediate({identifier:t}),r=lr("storage");return r&&Ba(s,...r),s}function Ba(e,t,n,s={}){Ca(e,t,n,s)}function Ma(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new xt(n,s,r,t,pi)}function ka(){Me(new ge($n,Ma,"PUBLIC").setMultipleInstances(!0)),le(kt,$t,""),le(kt,$t,"esm2017")}ka();var $a="firebase",Fa="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le($a,Fa,"app");var Ha={VITE_AAPP_FIREBASE_API_KEY:"AIzaSyCpPA9AtkYyRVIimsmimFK_KLnnKZNjwhs",VITE_APP_BASE_URL:"https://cloud-based-task-hub.onrender.com",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const za={apiKey:Ha.VITE_APP_FIREBASE_API_KEY,authDomain:"taskmanager-2cfef.firebaseapp.com",projectId:"taskmanager-2cfef",storageBucket:"taskmanager-2cfef.appspot.com",messagingSenderId:"413338035214",appId:"1:413338035214:web:a796608c2946552857885f"},Va=_n(za),Ft=["TODO","IN PROGRESS","COMPLETED"],Ht=["HIGH","MEDIUM","NORMAL","LOW"],zt=[],yt=({open:e,setOpen:t,task:n})=>{var V,Re;const s={title:(n==null?void 0:n.title)||"",date:us((n==null?void 0:n.date)||new Date),team:[],stage:"",priority:"",assets:[]},{register:r,handleSubmit:i,formState:{errors:o}}=Wt({defaultValues:s}),[l,c]=b.useState((n==null?void 0:n.team)||[]),[u,p]=b.useState(((V=n==null?void 0:n.stage)==null?void 0:V.toUpperCase())||Ft[0]),[g,x]=b.useState(((Re=n==null?void 0:n.priority)==null?void 0:Re.toUpperCase())||Ht[2]),[d,h]=b.useState([]),[m,_]=b.useState(!1),[f,{isLoading:y}]=ys(),[E,{isLoading:T}]=vs(),k=n!=null&&n.assets?[...n.assets]:[],I=async $=>{var ne;for(const L of d){_(!0);try{await w(L)}catch(se){console.error("Error uploading file:",se.message);return}finally{_(!1)}}try{const L={...$,assets:[...k,...zt],team:l,stage:u,priority:g},se=n!=null&&n._id?await E({...L,_id:n._id}).unwrap():await f(L).unwrap();F.success("Task updated successfully"),setTimeout(()=>{t(!1)},500)}catch(L){console.log(L),F.error(((ne=L==null?void 0:L.data)==null?void 0:ne.message)||L.error)}},P=$=>{h($.target.files)},w=async $=>{const ne=Ua(Va),L=new Date().getTime()+$.name,se=La(ne,L),Ie=ja(se,$);return new Promise((ze,re)=>{Ie.on("state_changed",q=>{console.log("Uploading")},q=>{re(q)},()=>{Pa(Ie.snapshot.ref).then(q=>{zt.push(q),ze()}).catch(q=>{re(q)})})})};return a.jsx(a.Fragment,{children:a.jsx(Gt,{open:e,setOpen:t,children:a.jsxs("form",{onSubmit:i(I),children:[a.jsx(Kt.Title,{as:"h2",className:"text-base font-bold leading-6 text-gray-900 mb-4",children:n?"UPDATE TASK":"ADD TASK"}),a.jsxs("div",{className:"mt-2 flex flex-col gap-6",children:[a.jsx(fe,{placeholder:"Task Title",type:"text",name:"title",label:"Task Title",className:"w-full rounded",register:r("title",{required:"Title is required"}),error:o.title?o.title.message:""}),a.jsx(Qs,{setTeam:c,team:l}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx(Tt,{label:"Task Stage",lists:Ft,selected:u,setSelected:p}),a.jsx("div",{className:"w-full",children:a.jsx(fe,{placeholder:"Date",type:"date",name:"date",label:"Task Date",className:"w-full rounded",register:r("date",{required:"Date is required!"}),error:o.date?o.date.message:""})})]}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx(Tt,{label:"Priority Level",lists:Ht,selected:g,setSelected:x}),a.jsx("div",{className:"w-full flex items-center justify-center mt-4",children:a.jsxs("label",{className:"flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4",htmlFor:"imgUpload",children:[a.jsx("input",{type:"file",className:"hidden",id:"imgUpload",onChange:$=>P($),accept:".jpg, .png, .jpeg",multiple:!0}),a.jsx(ds,{}),a.jsx("span",{children:"Add Assets"})]})})]}),a.jsxs("div",{className:"bg-gray-50 py-6 sm:flex sm:flex-row-reverse gap-4",children:[m?a.jsx("span",{className:"text-sm py-2 text-red-500",children:"Uploading assets"}):a.jsx(Z,{label:"Submit",type:"submit",className:"bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto"}),a.jsx(Z,{type:"button",className:"bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto",onClick:()=>t(!1),label:"Cancel"})]})]})]})})})},Fn=({open:e,setOpen:t,id:n})=>{const{register:s,handleSubmit:r,formState:{errors:i}}=Wt(),[o]=ws(),l=async c=>{var u;try{const p=await o({data:c,id:n}).unwrap();F.success(p.message),setTimeout(()=>{t(!1)},500)}catch(p){console.log(p),F.error(((u=p==null?void 0:p.data)==null?void 0:u.message)||p.error)}};return a.jsx(a.Fragment,{children:a.jsx(Gt,{open:e,setOpen:t,children:a.jsxs("form",{onSubmit:r(l),className:"",children:[a.jsx(Kt.Title,{as:"h2",className:"text-base font-bold leading-6 text-gray-900 mb-4",children:"ADD SUB-TASK"}),a.jsxs("div",{className:"mt-2 flex flex-col gap-6",children:[a.jsx(fe,{placeholder:"Sub-Task title",type:"text",name:"title",label:"Title",className:"w-full rounded",register:s("title",{required:"Title is required!"}),error:i.title?i.title.message:""}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(fe,{placeholder:"Date",type:"date",name:"date",label:"Task Date",className:"w-full rounded",register:s("date",{required:"Date is required!"}),error:i.date?i.date.message:""}),a.jsx(fe,{placeholder:"Tag",type:"text",name:"tag",label:"Tag",className:"w-full rounded",register:s("tag",{required:"Tag is required!"}),error:i.tag?i.tag.message:""})]})]}),a.jsxs("div",{className:"py-3 mt-4 flex sm:flex-row-reverse gap-4",children:[a.jsx(Z,{type:"submit",className:"bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 sm:ml-3 sm:w-auto",label:"Add Task"}),a.jsx(Z,{type:"button",className:"bg-white border text-sm font-semibold text-gray-900 sm:w-auto",onClick:()=>t(!1),label:"Cancel"})]})]})})})},qa=({task:e})=>{const[t,n]=b.useState(!1),[s,r]=b.useState(!1),[i,o]=b.useState(!1),l=hs(),[c]=sn(),[u]=Ts(),p=async()=>{var h;try{const m=await u(e._id).unwrap();F.success("Task duplicated successfully"),setTimeout(()=>{o(!1),window.location.reload()},500)}catch(m){console.log(m),F.error(((h=m==null?void 0:m.data)==null?void 0:h.message)||m.error)}},g=()=>{o(!0)},x=async()=>{var h;try{const m=await c({id:e._id,isTrashed:"trash"}).unwrap();F.success(m==null?void 0:m.message),setTimeout(()=>{o(!1),window.location.reload()},500)}catch(m){console.log(m),F.error(((h=m==null?void 0:m.data)==null?void 0:h.message)||m.error)}},d=[{label:"Open Task",icon:a.jsx(Ks,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),onClick:()=>l(`/task/${e._id}`)},{label:"Edit",icon:a.jsx(fs,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),onClick:()=>r(!0)},{label:"Duplicate",icon:a.jsx(Ys,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),onClick:p}];return a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsxs(de,{as:"div",className:"relative inline-block text-left",children:[a.jsx(de.Button,{className:"inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-600",children:a.jsx(Xs,{})}),a.jsx(ut,{as:b.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:a.jsxs(de.Items,{className:"absolute p-4 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none",children:[a.jsx("div",{className:"px-1 py-1 space-y-2",children:d.map(h=>a.jsx(de.Item,{children:({active:m})=>a.jsxs("button",{onClick:h.onClick,className:`${m?"bg-blue-500 text-white":"text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,children:[h.icon,h.label]})},h.label))}),a.jsx("div",{className:"px-1 py-1",children:a.jsx(de.Item,{children:({active:h})=>a.jsxs("button",{onClick:g,className:`${h?"bg-blue-500 text-white":"text-red-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,children:[a.jsx(Js,{className:"mr-2 h-5 w-5 text-red-400","aria-hidden":"true"}),"Delete"]})})})]})})]})}),a.jsx(yt,{open:s,setOpen:r,task:e},new Date().getTime()),a.jsx(Fn,{open:t,setOpen:n}),a.jsx(nn,{open:i,setOpen:o,onClick:x})]})},Wa={high:a.jsx(Zt,{}),medium:a.jsx(en,{}),low:a.jsx(tn,{})},Ga=({task:e})=>{var r,i,o,l,c,u;const{user:t}=ps(p=>p.auth),[n,s]=b.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"w-full h-fit bg-white shadow-md p-4 rounded",children:[a.jsxs("div",{className:"w-full flex justify-between",children:[a.jsxs("div",{className:K("flex flex-1 gap-1 items-center text-sm font-medium",Xt[e==null?void 0:e.priority]),children:[a.jsx("span",{className:"text-lg",children:Wa[e==null?void 0:e.priority]}),a.jsxs("span",{className:"uppercase",children:[e==null?void 0:e.priority," Priority"]})]}),(t==null?void 0:t.isAdmin)&&a.jsx(qa,{task:e})]}),a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:K("w-4 h-4 rounded-full",Yt[e.stage])}),a.jsx("h4",{className:"line-clamp-1 text-black",children:e==null?void 0:e.title})]}),a.jsx("span",{className:"text-sm text-gray-600",children:tt(new Date(e==null?void 0:e.date))})]}),a.jsx("div",{className:"w-full border-t border-gray-200 my-2"}),a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600",children:[a.jsx(Jt,{}),a.jsx("span",{children:(r=e==null?void 0:e.activities)==null?void 0:r.length})]}),a.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600 ",children:[a.jsx(Qt,{}),a.jsx("span",{children:(i=e==null?void 0:e.assets)==null?void 0:i.length})]}),a.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600 ",children:[a.jsx(dt,{}),a.jsxs("span",{children:["0/",(o=e==null?void 0:e.subTasks)==null?void 0:o.length]})]})]}),a.jsx("div",{className:"flex flex-row-reverse",children:(l=e==null?void 0:e.team)==null?void 0:l.map((p,g)=>{var x;return a.jsx("div",{className:K("w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",Le[g%((x=Le)==null?void 0:x.length)]),children:a.jsx(rn,{user:p})},g)})})]}),((c=e==null?void 0:e.subTasks)==null?void 0:c.length)>0?a.jsxs("div",{className:"py-4 border-t border-gray-200",children:[a.jsx("h5",{className:"text-base line-clamp-1 text-black",children:e==null?void 0:e.subTasks[0].title}),a.jsxs("div",{className:"p-4 space-x-8",children:[a.jsx("span",{className:"text-sm text-gray-600",children:tt(new Date((u=e==null?void 0:e.subTasks[0])==null?void 0:u.date))}),a.jsx("span",{className:"bg-blue-600/10 px-3 py-1 rounded0full text-blue-700 font-medium",children:e==null?void 0:e.subTasks[0].tag})]})]}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"py-4 border-t border-gray-200",children:a.jsx("span",{className:"text-gray-500",children:"No Sub Task"})})}),a.jsx("div",{className:"w-full pb-2",children:a.jsxs("button",{onClick:()=>s(!0),disabled:!t.isAdmin,className:"w-full flex gap-4 items-center text-sm text-gray-500 font-semibold disabled:cursor-not-allowed disabled::text-gray-300",children:[a.jsx(ct,{className:"text-lg"}),a.jsx("span",{children:"ADD SUBTASK"})]})})]}),a.jsx(Fn,{open:n,setOpen:s,id:e._id})]})},Ka=({tasks:e})=>a.jsx("div",{className:"w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10",children:e.map((t,n)=>a.jsx(Ga,{task:t},n))}),Xa={high:a.jsx(Zt,{}),medium:a.jsx(en,{}),low:a.jsx(tn,{})},Ya=({tasks:e})=>{const[t,n]=b.useState(!1),[s,r]=b.useState(null),[i,o]=b.useState(!1),[l]=sn(),c=d=>{r(d),n(!0)},u=d=>{r(d),o(!0)},p=async()=>{var d;try{const h=await l({id:s,isTrash:"trash"}).unwrap();F.success(h==null?void 0:h.message),setTimeout(()=>{n(!1),window.location.reload()},500)}catch(h){console.log(h),F.error(((d=h==null?void 0:h.data)==null?void 0:d.message)||h.error)}},g=()=>a.jsx("thead",{className:"w-full border-b border-gray-300",children:a.jsxs("tr",{className:"w-full text-black  text-left",children:[a.jsx("th",{className:"py-2",children:"Task Title"}),a.jsx("th",{className:"py-2",children:"Priority"}),a.jsx("th",{className:"py-2 line-clamp-1",children:"Created At"}),a.jsx("th",{className:"py-2",children:"Assets"}),a.jsx("th",{className:"py-2",children:"Team"})]})}),x=({task:d})=>{var h,m,_,f;return a.jsxs("tr",{className:"border-b border-gray-200 text-gray-600 hover:bg-gray-300/10",children:[a.jsx("td",{className:"py-2",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:K("w-4 h-4 rounded-full",Yt[d.stage])}),a.jsx("p",{className:"w-full line-clamp-2 text-base text-black",children:d==null?void 0:d.title})]})}),a.jsx("td",{className:"py-2",children:a.jsxs("div",{className:"flex gap-1 items-center",children:[a.jsx("span",{className:K("text-lg",Xt[d==null?void 0:d.priority]),children:Xa[d==null?void 0:d.priority]}),a.jsxs("span",{className:"capitalize line-clamp-1",children:[d==null?void 0:d.priority," Priority"]})]})}),a.jsx("td",{className:"py-2",children:a.jsx("span",{className:"text-sm text-gray-600",children:tt(new Date(d==null?void 0:d.date))})}),a.jsx("td",{className:"py-2",children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600",children:[a.jsx(Jt,{}),a.jsx("span",{children:(h=d==null?void 0:d.activities)==null?void 0:h.length})]}),a.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600 dark:text-gray-400",children:[a.jsx(Qt,{}),a.jsx("span",{children:(m=d==null?void 0:d.assets)==null?void 0:m.length})]}),a.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600 dark:text-gray-400",children:[a.jsx(dt,{}),a.jsxs("span",{children:["0/",(_=d==null?void 0:d.subTasks)==null?void 0:_.length]})]})]})}),a.jsx("td",{className:"py-2",children:a.jsx("div",{className:"flex",children:(f=d==null?void 0:d.team)==null?void 0:f.map((y,E)=>{var T;return a.jsx("div",{className:K("w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",Le[E%((T=Le)==null?void 0:T.length)]),children:a.jsx(rn,{user:y})},y._id)})})}),a.jsxs("td",{className:"py-2 flex gap-2 md:gap-4 justify-end",children:[a.jsx(Z,{className:"text-blue-600 hover:text-blue-500 sm:px-0 text-sm md:text-base",label:"Edit",type:"button",onClick:()=>u(d)}),a.jsx(Z,{className:"text-red-700 hover:text-red-500 sm:px-0 text-sm md:text-base",label:"Delete",type:"button",onClick:()=>c(d._id)})]})]})};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"bg-white  px-2 md:px-4 pt-4 pb-9 shadow-md rounded",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full ",children:[a.jsx(g,{}),a.jsx("tbody",{children:e.map((d,h)=>a.jsx(x,{task:d},h))})]})})}),a.jsx(nn,{open:t,setOpen:n,onClick:p}),a.jsx(yt,{open:i,setOpen:o,task:s},new Date().getTime())]})},Ja=[{title:"Board View",icon:a.jsx(bs,{})},{title:"List View",icon:a.jsx(dt,{})}],Ze={todo:"bg-blue-600","in progress":"bg-yellow-600",completed:"bg-green-600"},ro=()=>{const e=ms(),[t,n]=b.useState(0),[s,r]=b.useState(!1),i=(e==null?void 0:e.status)||"",{data:o,isLoading:l}=Es({strQuery:i,isTrashed:"",search:""});return l?a.jsx("div",{className:"py-10",children:a.jsx(gs,{})}):a.jsxs("div",{className:"w-full",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx(_s,{title:i?`${i} Tasks`:"Tasks"}),!i&&a.jsx(Z,{onClick:()=>r(!0),label:"Create Task",icon:a.jsx(ct,{className:"text-lg"}),className:"flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"})]}),a.jsxs(xs,{tabs:Ja,setSelected:n,children:[!i&&a.jsxs("div",{className:"w-full flex justify-between gap-4 md:gap-x-12 py-4",children:[a.jsx(qe,{label:"To Do",className:Ze.todo}),a.jsx(qe,{label:"In Progress",className:Ze["in progress"]}),a.jsx(qe,{label:"completed",className:Ze.completed})]}),t!==1?a.jsx(Ka,{tasks:o==null?void 0:o.tasks}):a.jsx("div",{className:"w-full",children:a.jsx(Ya,{tasks:o==null?void 0:o.tasks})})]}),a.jsx(yt,{open:s,setOpen:r})]})};export{ro as default};
