import{e as l,x as _,o as i,h as p,w as r,k as c,l as B,m as b,u as e,b2 as w,p as g,b as P,b3 as v,s as f,v as h,b4 as x,I as y,b5 as C,b6 as D}from"./DY5YPz6z.js";const z=l({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean}},emits:["update:open"],setup(t,{emit:s}){const o=_(t,s);return(d,u)=>(i(),p(e(w),B(b(e(o))),{default:r(()=>[c(d.$slots,"default")]),_:3},16))}}),O=l({__name:"DropdownMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(t,{emit:s}){const a=t,n=s,o=g(()=>{const{class:u,...m}=a;return m}),d=_(o,n);return(u,m)=>(i(),p(e(x),null,{default:r(()=>[P(e(v),f(e(d),{class:e(h)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a.class)}),{default:r(()=>[c(u.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),k=l({__name:"DropdownMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(t){const s=t,a=g(()=>{const{class:o,...d}=s;return d}),n=y(a);return(o,d)=>(i(),p(e(C),f(e(n),{class:e(h)("relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-4 [&>svg]:shrink-0",o.inset&&"pl-8",s.class)}),{default:r(()=>[c(o.$slots,"default")]),_:3},16,["class"]))}}),M=l({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const a=y(t);return(n,o)=>(i(),p(e(D),f({class:"outline-none"},e(a)),{default:r(()=>[c(n.$slots,"default")]),_:3},16))}});export{z as _,M as a,O as b,k as c};
