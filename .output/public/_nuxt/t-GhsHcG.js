import{e as l,x,o as r,h as i,w as n,k as c,l as g,m as y,u as e,Y as C,y as h,p as B,b as f,C as D,q as v,s as w,v as m,z as k,a as z,A as P,c as b,B as $,I as O,D as F,X as A}from"./DY5YPz6z.js";const E=l({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(t,{emit:s}){const d=x(t,s);return(p,_)=>(r(),i(e(C),g(y(e(d))),{default:n(()=>[c(p.$slots,"default")]),_:3},16))}}),I=l({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(t){const s=t;return(a,o)=>(r(),i(e(h),g(y(s)),{default:n(()=>[c(a.$slots,"default")]),_:3},16))}}),N=l({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:s}){const a=t,o=s,d=B(()=>{const{class:_,...u}=a;return u}),p=x(d,o);return(_,u)=>(r(),i(e(P),null,{default:n(()=>[f(e(D),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),f(e(v),w(e(p),{class:e(m)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a.class)}),{default:n(()=>[c(_.$slots,"default"),f(e(h),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:n(()=>[f(e(k),{class:"w-4 h-4"}),u[0]||(u[0]=z("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),T=l({__name:"DialogFooter",props:{class:{}},setup(t){const s=t;return(a,o)=>(r(),b("div",{class:$(e(m)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",s.class))},[c(a.$slots,"default")],2))}}),V=l({__name:"DialogHeader",props:{class:{}},setup(t){const s=t;return(a,o)=>(r(),b("div",{class:$(e(m)("flex flex-col gap-y-1.5 text-center sm:text-left",s.class))},[c(a.$slots,"default")],2))}}),X=l({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const s=t,a=B(()=>{const{class:d,...p}=s;return p}),o=O(a);return(d,p)=>(r(),i(e(F),w(e(o),{class:e(m)("text-lg font-semibold leading-none tracking-tight",s.class)}),{default:n(()=>[c(d.$slots,"default")]),_:3},16,["class"]))}}),Y=l({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(t){const s=t;return(a,o)=>(r(),i(e(A),g(y(s)),{default:n(()=>[c(a.$slots,"default")]),_:3},16))}});export{Y as _,N as a,V as b,X as c,T as d,I as e,E as f};
