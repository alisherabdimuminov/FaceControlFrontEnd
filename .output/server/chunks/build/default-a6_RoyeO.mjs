import { defineComponent, ref, mergeProps, unref, computed, withCtx, renderSlot, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as useRoute, f as useState, c as cn } from './server.mjs';
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaCorner, Separator } from 'radix-vue';
import { _ as __nuxt_component_0 } from './nuxt-link-BteVf0xu.mjs';
import { _ as __nuxt_component_3 } from './client-only-BQwXfBHM.mjs';
import { LucideScanFace, LucideHome, LucideLayoutDashboard, LucideUsers2, LucideBookOpenText, LucideMapPin, LucideLayoutList } from 'lucide-vue-next';
import { u as useAuth } from './useAuth-Bm8wKJNG.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ScrollBar",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaScrollbar), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "flex touch-none select-none transition-colors",
          _ctx.orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
          _ctx.orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ScrollArea",
  __ssrInlineRender: true,
  props: {
    type: {},
    dir: {},
    scrollHideDelay: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaRoot), mergeProps(delegatedProps.value, {
        class: unref(cn)("relative overflow-hidden", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ScrollAreaCorner), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_sfc_main$3),
              createVNode(unref(ScrollAreaCorner))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    label: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "shrink-0 bg-border relative",
          props.orientation === "vertical" ? "w-px h-full" : "h-px w-full",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.label) {
              _push2(`<span class="${ssrRenderClass(
                unref(cn)(
                  "text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",
                  props.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] py-1 px-2"
                )
              )}"${_scopeId}>${ssrInterpolate(props.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.label ? (openBlock(), createBlock("span", {
                key: 0,
                class: unref(cn)(
                  "text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",
                  props.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] py-1 px-2"
                )
              }, toDisplayString(props.label), 3)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/separator/Separator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useAuth();
    useColorMode();
    const departments = ref([]);
    ref([]);
    const now = ref(/* @__PURE__ */ new Date());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScrollArea = _sfc_main$2;
      const _component_Separator = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex" }, _attrs))}><div class="w-14 md:w-64 border-r p-2"><div class="border-b flex items-center justify-center md:justify-start gap-1 p-2">`);
      _push(ssrRenderComponent(unref(LucideScanFace), { size: 30 }, null, _parent));
      _push(`<p class="text-xl font-bold hidden md:block"> FaceControl <sup class="text-sm">TM</sup></p></div>`);
      _push(ssrRenderComponent(_component_ScrollArea, { class: "h-[calc(100%-3rem)] md:p-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="p-2 flex flex-col items-center md:items-start gap-y-2"${_scopeId}><div class="hidden md:flex items-center w-full gap-2"${_scopeId}><p class="text-start text-muted-foreground text-sm font-semibold leading-6"${_scopeId}>Asosiy</p>`);
            _push2(ssrRenderComponent(_component_Separator, { class: "w-full" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "admin" },
              class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === "admin" ? "bg-accent text-sky-500" : ""]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-1 group-hover:text-sky-500"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(LucideHome), { size: 20 }, null, _parent3, _scopeId2));
                  _push3(`<span class="w-40 truncate hidden md:block"${_scopeId2}>Bosh sahifa</span></div><div${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideHome), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Bosh sahifa")
                    ]),
                    createVNode("div")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "admin-departments" },
              class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === "admin-departments" ? "bg-accent text-sky-500" : ""]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-1 group-hover:text-sky-500"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(LucideLayoutDashboard), { size: 20 }, null, _parent3, _scopeId2));
                  _push3(`<span class="w-40 truncate hidden md:block"${_scopeId2}>Bo&#39;limlar</span></div><div${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideLayoutDashboard), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Bo'limlar")
                    ]),
                    createVNode("div")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "admin-employees" },
              class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", ((_a = unref(route).name) == null ? void 0 : _a.toString().includes("employees")) ? "bg-accent text-sky-500" : ""]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-1 group-hover:text-sky-500"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(LucideUsers2), { size: 20 }, null, _parent3, _scopeId2));
                  _push3(`<span class="w-40 truncate hidden md:block"${_scopeId2}>Xodimlar</span></div><div${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideUsers2), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Xodimlar")
                    ]),
                    createVNode("div")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "admin-reports" },
              class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === "admin-reports" ? "bg-accent text-sky-500" : ""]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-1 group-hover:text-sky-500"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(LucideBookOpenText), { size: 20 }, null, _parent3, _scopeId2));
                  _push3(`<span class="w-40 truncate hidden md:block"${_scopeId2}>Hisobotlar</span></div><div${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideBookOpenText), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Hisobotlar")
                    ]),
                    createVNode("div")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "admin-areas" },
              class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === "admin-areas" ? "bg-accent text-sky-500" : ""]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-1 group-hover:text-sky-500"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(LucideMapPin), { size: 20 }, null, _parent3, _scopeId2));
                  _push3(`<span class="w-40 truncate hidden md:block"${_scopeId2}>Hududlar</span></div><div${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideMapPin), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Hududlar")
                    ]),
                    createVNode("div")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Separator, { class: "block md:hidden" }, null, _parent2, _scopeId));
            _push2(`<div class="p-2 flex flex-col items-center md:items-start gap-y-2"${_scopeId}><div class="hidden md:flex items-center w-full gap-2"${_scopeId}><p class="text-start text-muted-foreground text-sm font-semibold leading-6"${_scopeId}>Bo&#39;limlar</p>`);
            _push2(ssrRenderComponent(_component_Separator, { class: "w-full" }, null, _parent2, _scopeId));
            _push2(`</div><!--[-->`);
            ssrRenderList(unref(departments), (department) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: { name: "admin-reports-slug", params: { slug: department.id } },
                class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === `admin-reports-slug` && unref(route).params.slug === `${department.id}` ? "bg-accent text-sky-500" : ""]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-1 group-hover:text-sky-500"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(LucideLayoutList), { size: 20 }, null, _parent3, _scopeId2));
                    _push3(`<span class="w-40 truncate hidden md:block"${_scopeId2}>${ssrInterpolate(department.name)}</span></div><div class="hidden md:block border border-sky-500 text-sky-500 rounded-full py-px px-1 text-xs font-semibold bg-sky-500/20"${_scopeId2}>${ssrInterpolate(department.employees)}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                        createVNode(unref(LucideLayoutList), { size: 20 }),
                        createVNode("span", { class: "w-40 truncate hidden md:block" }, toDisplayString(department.name), 1)
                      ]),
                      createVNode("div", { class: "hidden md:block border border-sky-500 text-sky-500 rounded-full py-px px-1 text-xs font-semibold bg-sky-500/20" }, toDisplayString(department.employees), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "p-2 flex flex-col items-center md:items-start gap-y-2" }, [
                createVNode("div", { class: "hidden md:flex items-center w-full gap-2" }, [
                  createVNode("p", { class: "text-start text-muted-foreground text-sm font-semibold leading-6" }, "Asosiy"),
                  createVNode(_component_Separator, { class: "w-full" })
                ]),
                createVNode(_component_NuxtLink, {
                  to: { name: "admin" },
                  class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === "admin" ? "bg-accent text-sky-500" : ""]
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideHome), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Bosh sahifa")
                    ]),
                    createVNode("div")
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_NuxtLink, {
                  to: { name: "admin-departments" },
                  class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === "admin-departments" ? "bg-accent text-sky-500" : ""]
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideLayoutDashboard), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Bo'limlar")
                    ]),
                    createVNode("div")
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_NuxtLink, {
                  to: { name: "admin-employees" },
                  class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", ((_b = unref(route).name) == null ? void 0 : _b.toString().includes("employees")) ? "bg-accent text-sky-500" : ""]
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideUsers2), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Xodimlar")
                    ]),
                    createVNode("div")
                  ]),
                  _: 2
                }, 1032, ["class"]),
                createVNode(_component_NuxtLink, {
                  to: { name: "admin-reports" },
                  class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === "admin-reports" ? "bg-accent text-sky-500" : ""]
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideBookOpenText), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Hisobotlar")
                    ]),
                    createVNode("div")
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_NuxtLink, {
                  to: { name: "admin-areas" },
                  class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === "admin-areas" ? "bg-accent text-sky-500" : ""]
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                      createVNode(unref(LucideMapPin), { size: 20 }),
                      createVNode("span", { class: "w-40 truncate hidden md:block" }, "Hududlar")
                    ]),
                    createVNode("div")
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              createVNode(_component_Separator, { class: "block md:hidden" }),
              createVNode("div", { class: "p-2 flex flex-col items-center md:items-start gap-y-2" }, [
                createVNode("div", { class: "hidden md:flex items-center w-full gap-2" }, [
                  createVNode("p", { class: "text-start text-muted-foreground text-sm font-semibold leading-6" }, "Bo'limlar"),
                  createVNode(_component_Separator, { class: "w-full" })
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    to: { name: "admin-reports-slug", params: { slug: department.id } },
                    class: ["w-full flex items-center justify-between hover:bg-accent rounded-md p-1 group", unref(route).name === `admin-reports-slug` && unref(route).params.slug === `${department.id}` ? "bg-accent text-sky-500" : ""]
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-1 group-hover:text-sky-500" }, [
                        createVNode(unref(LucideLayoutList), { size: 20 }),
                        createVNode("span", { class: "w-40 truncate hidden md:block" }, toDisplayString(department.name), 1)
                      ]),
                      createVNode("div", { class: "hidden md:block border border-sky-500 text-sky-500 rounded-full py-px px-1 text-xs font-semibold bg-sky-500/20" }, toDisplayString(department.employees), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "class"]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1"><div class="h-[3rem] border-b flex items-center justify-between p-2 m-1.5"><div><p class="text-xl font-bold">${ssrInterpolate(unref(now).getDate())} ${ssrInterpolate(unref(now).toLocaleDateString("default", { month: "long" }))} ${ssrInterpolate(unref(now).getFullYear())}</p></div><div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ScrollArea, { class: "h-[calc(100%-4rem)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-a6_RoyeO.mjs.map
