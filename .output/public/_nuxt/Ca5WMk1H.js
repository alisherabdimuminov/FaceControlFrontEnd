import{_ as fe}from"./D9pBdgcG.js";import{r as me,_ as ge,a as ye,b as ve,c as be,d as he,e as $e}from"./C_W1wP7l.js";import{a as xe,b as we,c as ke,d as Be,_ as Ce}from"./DB4MGXwF.js";import{_ as Pe}from"./Cq9Wa7h3.js";import{_ as Te,a as Ve,b as Fe}from"./CTXxIGBz.js";import{e as m,p as b,x as Y,o,h as p,w as e,b as a,u as t,a as y,c as f,F as V,g as F,d as _,t as x,s as h,v as $,ah as Ie,I as C,k as g,ai as He,aj as Se,ak as Ke,l as A,m as L,al as je,am as De,an as Ae,ao as Le,ap as Me,aq as qe,ar as Ne,as as ze,at as Ue,au as Xe,av as Ge,aw as Re,r as H,f as Oe,j,U as We,K as Ee,i as Ye,a0 as D}from"./DY5YPz6z.js";import{b as M}from"./CoYbDtYK.js";import{r as Je}from"./C2RB0JN7.js";import{_ as Qe,a as Ze,b as et,c as tt,d as at,e as st}from"./DBiEsTa-.js";import{u as nt}from"./CNrGq2Rz.js";import{u as lt}from"./DhZM79Uq.js";import{a as W}from"./DLL7LeIM.js";import{c as ot}from"./CBgy_JFS.js";/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=ot("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),dt={class:"flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0"},ct=m({__name:"Calendar",props:{modelValue:{},multiple:{type:Boolean},defaultValue:{},defaultPlaceholder:{},placeholder:{},pagedNavigation:{type:Boolean},preventDeselect:{type:Boolean},weekStartsOn:{},weekdayFormat:{},calendarLabel:{},fixedWeeks:{type:Boolean},maxValue:{},minValue:{},locale:{},numberOfMonths:{},disabled:{type:Boolean},readonly:{type:Boolean},initialFocus:{type:Boolean},isDateDisabled:{type:Function},isDateUnavailable:{type:Function},dir:{},nextPage:{type:Function},prevPage:{type:Function},asChild:{type:Boolean},as:{},class:{}},emits:["update:modelValue","update:placeholder"],setup(u,{emit:n}){const d=u,c=n,s=b(()=>{const{class:w,...T}=d;return T}),r=Y(s,c);return(w,T)=>(o(),p(t(Ie),h({class:t($)("p-3",d.class)},t(r)),{default:e(({grid:S,weekDays:K})=>[a(t(gt),null,{default:e(()=>[a(t(bt)),a(t(yt)),a(t(vt))]),_:1}),y("div",dt,[(o(!0),f(V,null,F(S,I=>(o(),p(t(_t),{key:I.value.toString()},{default:e(()=>[a(t(ft),null,{default:e(()=>[a(t(E),null,{default:e(()=>[(o(!0),f(V,null,F(K,v=>(o(),p(t(mt),{key:v},{default:e(()=>[_(x(v),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),a(t(pt),null,{default:e(()=>[(o(!0),f(V,null,F(I.rows,(v,l)=>(o(),p(t(E),{key:`weekDate-${l}`,class:"mt-2 w-full"},{default:e(()=>[(o(!0),f(V,null,F(v,P=>(o(),p(t(ut),{key:P.toString(),date:P},{default:e(()=>[a(t(it),{day:P,month:I.value},null,8,["day","month"])]),_:2},1032,["date"]))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))])]),_:1},16,["class"]))}}),ut=m({__name:"CalendarCell",props:{date:{},asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(He),h({class:t($)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent [&:has([data-selected][data-outside-view])]:bg-accent/50",n.class)},t(c)),{default:e(()=>[g(s.$slots,"default")]),_:3},16,["class"]))}}),it=m({__name:"CalendarCellTrigger",props:{day:{},month:{},asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(Se),h({class:t($)(t(M)({variant:"ghost"}),"h-8 w-8 p-0 font-normal","[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground","data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground","data-[disabled]:text-muted-foreground data-[disabled]:opacity-50","data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through","data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30",n.class)},t(c)),{default:e(()=>[g(s.$slots,"default")]),_:3},16,["class"]))}}),_t=m({__name:"CalendarGrid",props:{asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(Ke),h({class:t($)("w-full border-collapse space-y-1",n.class)},t(c)),{default:e(()=>[g(s.$slots,"default")]),_:3},16,["class"]))}}),pt=m({__name:"CalendarGridBody",props:{asChild:{type:Boolean},as:{}},setup(u){const n=u;return(d,c)=>(o(),p(t(je),A(L(n)),{default:e(()=>[g(d.$slots,"default")]),_:3},16))}}),ft=m({__name:"CalendarGridHead",props:{asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u;return(d,c)=>(o(),p(t(De),A(L(n)),{default:e(()=>[g(d.$slots,"default")]),_:3},16))}}),E=m({__name:"CalendarGridRow",props:{asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(Ae),h({class:t($)("flex",n.class)},t(c)),{default:e(()=>[g(s.$slots,"default")]),_:3},16,["class"]))}}),mt=m({__name:"CalendarHeadCell",props:{asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(Le),h({class:t($)("w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground",n.class)},t(c)),{default:e(()=>[g(s.$slots,"default")]),_:3},16,["class"]))}}),gt=m({__name:"CalendarHeader",props:{asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(Me),h({class:t($)("relative flex w-full items-center justify-between pt-1",n.class)},t(c)),{default:e(()=>[g(s.$slots,"default")]),_:3},16,["class"]))}}),yt=m({__name:"CalendarHeading",props:{asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(qe),h({class:t($)("text-sm font-medium",n.class)},t(c)),{default:e(({headingValue:w})=>[g(s.$slots,"default",{headingValue:w},()=>[_(x(w),1)])]),_:3},16,["class"]))}}),vt=m({__name:"CalendarNextButton",props:{step:{},nextPage:{type:Function},asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(Ne),h({class:t($)(t(M)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",n.class)},t(c)),{default:e(()=>[g(s.$slots,"default",{},()=>[a(t(me),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),bt=m({__name:"CalendarPrevButton",props:{step:{},prevPage:{type:Function},asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(ze),h({class:t($)(t(M)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",n.class)},t(c)),{default:e(()=>[g(s.$slots,"default",{},()=>[a(t(Je),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),ht=m({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(u,{emit:n}){const s=Y(u,n);return(r,w)=>(o(),p(t(Ue),A(L(t(s))),{default:e(()=>[g(r.$slots,"default")]),_:3},16))}}),$t=m({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:c,...s}=n;return s});return(c,s)=>(o(),p(t(Xe),h({class:t($)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n.class)},d.value),{default:e(()=>[g(c.$slots,"default")]),_:3},16,["class"]))}}),xt=m({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:c,...s}=n;return s});return(c,s)=>(o(),p(t(Ge),h(d.value,{class:t($)("inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",n.class)}),{default:e(()=>[g(c.$slots,"default")]),_:3},16,["class"]))}}),wt={class:"truncate"},kt=m({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,d=b(()=>{const{class:s,...r}=n;return r}),c=C(d);return(s,r)=>(o(),p(t(Re),h(t(c),{class:t($)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",n.class)}),{default:e(()=>[y("span",wt,[g(s.$slots,"default")])]),_:3},16,["class"]))}}),Bt=window.setInterval,Ct={class:"grid gap-3 p-5 md:p-10"},Pt={class:"flex gap-3"},Tt={class:"w-full"},Vt={class:"grid gap-3 col-span-2"},Ft={class:"border rounded-md overflow-auto"},It={class:"w-64 truncate"},Ht={key:0,class:"text-green-500"},St={key:1,class:"text-orange-500"},Kt={key:2,class:"text-orange-500"},jt={key:0,class:"text-green-500"},Dt={key:1,class:"text-orange-500"},At={key:2,class:"text-orange-500"},Lt={key:0,class:"text-green-500"},Mt={key:1,class:"text-orange-500"},qt={key:2,class:"text-green-500"},Nt={class:"flex flex-col gap-3"},zt={class:"border rounded-md"},aa=m({__name:"index",setup(u){nt({title:"Hisobotlar"});const{user:n}=lt(),d=H([]),c=H([]),s=H("0"),r=new Date,w=H({day:r.getDate(),era:"AD",month:r.getMonth()+1,year:r.getFullYear(),toString(){return`${this.year}-${this.month}-${this.day}`}}),T=async v=>{var l;try{let P=await $fetch(W("employees/attendance")+`?day=${w.value.day}&&month=${w.value.month}&&year=${w.value.year}&&department=${v}`,{headers:{Authorization:`Token ${(l=n.value)==null?void 0:l.token}`}});P.status==="success"?d.value=P.data:j({title:"Xatolik",description:"Adminga murojat qiling. [ga500]"})}catch{}},S=async()=>{var v;try{let l=await $fetch(W("employees/departments"),{headers:{Authorization:`Token ${(v=n.value)==null?void 0:v.token}`}});l.status==="success"?c.value=l.data:j({title:"Xatolik",description:"Adminga murojat qiling"})}catch{j({title:"Xatolik",description:"Adminga murojat qiling"})}},K=async v=>{w.value=v,T(s.value)};let I;return Oe(async()=>{T(s.value),S(),I=Bt(()=>{T(s.value)},5e3)}),We(()=>{clearInterval(I)}),Ee(s,v=>{T(s.value)}),(v,l)=>{const P=fe,J=ve,q=ye,Q=be,Z=he,ee=ge,te=$e,ae=we,se=xe,N=Be,ne=ke,le=Ce,oe=Pe,re=Te,de=ct,ce=Ve,ue=Fe,z=kt,ie=xt,k=et,U=Ze,B=st,X=at,G=tt,R=Qe,O=$t,_e=ht;return o(),f("div",Ct,[a(te,null,{default:e(()=>[a(ee,null,{default:e(()=>[a(q,null,{default:e(()=>[a(J,null,{default:e(()=>[a(P,{to:{name:"admin"}},{default:e(()=>l[1]||(l[1]=[_("Bosh sahifa")])),_:1})]),_:1})]),_:1}),a(Q),a(q,null,{default:e(()=>[a(Z,null,{default:e(()=>l[2]||(l[2]=[_(" Xodimlar ")])),_:1})]),_:1})]),_:1})]),_:1}),y("div",Pt,[a(le,{"default-value":"0",modelValue:t(s),"onUpdate:modelValue":l[0]||(l[0]=i=>Ye(s)?s.value=i:null)},{default:e(()=>[a(se,null,{default:e(()=>[a(ae,{placeholder:"Bo'limni tanlang"})]),_:1}),a(ne,null,{default:e(()=>[a(N,{value:"0"},{default:e(()=>l[3]||(l[3]=[_("Barcha bo'limlar")])),_:1}),(o(!0),f(V,null,F(t(c),i=>(o(),p(N,{value:i.id},{default:e(()=>[_(x(i.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1},8,["modelValue"]),a(ue,null,{default:e(()=>[a(re,null,{default:e(()=>[a(oe,null,{default:e(()=>[a(t(rt))]),_:1})]),_:1}),a(ce,null,{default:e(()=>[a(de,{"onUpdate:modelValue":K})]),_:1})]),_:1})]),y("div",Tt,[a(_e,{"default-value":"kelganlar",class:"w-full overflow-auto"},{default:e(()=>[a(ie,null,{default:e(()=>[a(z,{value:"kelganlar"},{default:e(()=>l[4]||(l[4]=[_("Kelganlar")])),_:1}),a(z,{value:"kelmaganlar"},{default:e(()=>l[5]||(l[5]=[_("Kelmaganlar")])),_:1})]),_:1}),a(O,{value:"kelganlar",class:"overflow-auto"},{default:e(()=>[y("div",Vt,[l[14]||(l[14]=y("p",{class:"font-bold"},[y("span",{class:"text-green-500"},"Kelganlar"),y("span",null," / "),y("span",{class:"text-orange-500"},"Kechikganlar")],-1)),y("div",Ft,[a(R,{class:"whitespace-nowrap w-[calc(100%-3rem)]"},{default:e(()=>[a(U,{class:"border-b"},{default:e(()=>[a(k,null,{default:e(()=>l[6]||(l[6]=[_("ID")])),_:1}),a(k,null,{default:e(()=>l[7]||(l[7]=[_("Familiya Ism")])),_:1}),a(k,{class:"whitespace-wrap w-4"},{default:e(()=>l[8]||(l[8]=[_("Bo'limi")])),_:1}),a(k,{class:"border-l text-center"},{default:e(()=>l[9]||(l[9]=[_("Holati")])),_:1}),a(k,{class:"text-center"},{default:e(()=>l[10]||(l[10]=[_("Vaqt")])),_:1}),a(k,{class:"border-l text-center"},{default:e(()=>l[11]||(l[11]=[_("Holati")])),_:1}),a(k,{class:"border-r text-center"},{default:e(()=>l[12]||(l[12]=[_("Vaqt")])),_:1}),a(k,null,{default:e(()=>l[13]||(l[13]=[_("Bino")])),_:1})]),_:1}),a(G,null,{default:e(()=>[(o(!0),f(V,null,F(t(d).filter(i=>i.attendance_access!=="did_not_come"),(i,pe)=>(o(),p(X,null,{default:e(()=>[a(B,null,{default:e(()=>[_(x(pe+1),1)]),_:2},1024),a(B,null,{default:e(()=>[_(x(i.full_name),1)]),_:2},1024),a(B,null,{default:e(()=>[y("p",It,x(i.department.name),1)]),_:2},1024),a(B,{class:"border-l text-center"},{default:e(()=>[i.attendance_access==="arrived"?(o(),f("span",Ht,"Kelgan")):i.attendance_access==="failed"?(o(),f("span",St,"Xatolik")):i.attendance_access==="late"?(o(),f("span",Kt,"Kech qolgan")):D("",!0)]),_:2},1024),a(B,{class:"text-center font-semibold"},{default:e(()=>[i.attendance_access==="arrived"?(o(),f("span",jt,x(i.attendance_access_time),1)):i.attendance_access==="failed"?(o(),f("span",Dt,x(i.attendance_access_time),1)):i.attendance_access==="late"?(o(),f("span",At,x(i.attendance_access_time),1)):D("",!0)]),_:2},1024),a(B,{class:"border-l text-center"},{default:e(()=>[i.attendance_output==="at_work"?(o(),f("span",Lt,"Ishda")):i.attendance_output==="failed"?(o(),f("span",Mt,"Xatolik")):i.attendance_output==="gone"?(o(),f("span",qt,"Ketgan")):D("",!0)]),_:2},1024),a(B,{class:"border-r text-center"},{default:e(()=>[_(x(i.attendance_output_time),1)]),_:2},1024),a(B,null,{default:e(()=>[_(x(i.attendance_access_area),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})])])]),_:1}),a(O,{value:"kelmaganlar"},{default:e(()=>[y("div",Nt,[l[18]||(l[18]=y("p",{class:"text-red-500 font-bold"},"Kelmaganlar",-1)),y("div",zt,[a(R,null,{default:e(()=>[a(U,{class:"border-b"},{default:e(()=>[a(k,null,{default:e(()=>l[15]||(l[15]=[_("Familiya Ism")])),_:1}),a(k,null,{default:e(()=>l[16]||(l[16]=[_("Holati")])),_:1})]),_:1}),a(G,null,{default:e(()=>[(o(!0),f(V,null,F(t(d).filter(i=>i.attendance_access==="did_not_come"),i=>(o(),p(X,null,{default:e(()=>[a(B,null,{default:e(()=>[_(x(i.full_name),1)]),_:2},1024),a(B,null,{default:e(()=>l[17]||(l[17]=[_("Kelmagan")])),_:1})]),_:2},1024))),256))]),_:1})]),_:1})])])]),_:1})]),_:1})])])}}});export{aa as default};