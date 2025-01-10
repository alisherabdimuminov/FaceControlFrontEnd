import { _ as _sfc_main$5$1, a as _sfc_main$2$1, b as _sfc_main$4$1, c as _sfc_main$3$1, d as _sfc_main$6, e as _sfc_main$1$1 } from './BreadcrumbSeparator-Bk7vwz0P.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BteVf0xu.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$7, b as _sfc_main$4$2, c as _sfc_main$2$2, d as _sfc_main$1$2, e as _sfc_main$3$2, f as _sfc_main$5$3 } from './DialogTrigger-Cz1y5McC.mjs';
import { _ as _sfc_main$9 } from './DialogDescription-CLxQAHdY.mjs';
import { _ as _sfc_main$1$3, a as _sfc_main$a } from './Input-BhfeMC11.mjs';
import { _ as _sfc_main$6$2, a as _sfc_main$1$4, b as _sfc_main$b, c as _sfc_main$5$2, d as _sfc_main$4$3 } from './SelectValue-Ca3TaOHb.mjs';
import { _ as _sfc_main$5$4, a as _sfc_main$c, b as _sfc_main$1$5, c as _sfc_main$4$4, d as _sfc_main$2$3, e as _sfc_main$3$3 } from './TableHeader-DqV9hosG.mjs';
import { _ as _sfc_main$d } from './index-CBSFICcq.mjs';
import { cva } from 'class-variance-authority';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, isRef, unref, toDisplayString, renderSlot, computed, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { LucideListPlus, LucideEdit, LucideTrash } from 'lucide-vue-next';
import { u as useHead, t as toast, c as cn } from './server.mjs';
import { u as useAuth } from './useAuth-Bm8wKJNG.mjs';
import { a as apify } from './apify-Dl3ct05U.mjs';
import { _ as _sfc_main$8 } from './Button-BwGI6xSh.mjs';
import { useForwardPropsEmits, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogClose, DialogTitle } from 'radix-vue';
import { Cross2Icon } from '@radix-icons/vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@vueuse/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'clsx';
import 'tailwind-merge';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Sheet",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
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
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/Sheet.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SheetContent",
  __ssrInlineRender: true,
  props: {
    class: {},
    side: {},
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, side, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({
              class: unref(cn)(unref(sheetVariants)({ side: _ctx.side }), props.class)
            }, { ...unref(forwarded), ..._ctx.$attrs }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Cross2Icon), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                      default: withCtx(() => [
                        createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps({
                class: unref(cn)(unref(sheetVariants)({ side: _ctx.side }), props.class)
              }, { ...unref(forwarded), ..._ctx.$attrs }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx(() => [
                      createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SheetHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-y-2 text-center sm:text-left", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SheetTitle",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(DialogTitle), mergeProps({
        class: unref(cn)("text-lg font-semibold text-foreground", props.class)
      }, delegatedProps.value, _attrs), {
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SheetTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps(props, _attrs), {
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "departments",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bo'limlar"
    });
    const { user } = useAuth();
    const department = ref({
      active: true,
      id: "",
      name: "",
      employees: 0
    });
    const departments = ref([]);
    const dialogOpen = ref(false);
    const getDepartments = async () => {
      var _a;
      try {
        let response = await $fetch(apify("employees/departments"), {
          headers: {
            "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
          }
        });
        if (response.status === "success") {
          departments.value = response.data;
        } else {
          toast({
            title: "Xatolik",
            description: "Adminga murojat qiling"
          });
        }
      } catch {
        toast({
          title: "Xatolik",
          description: "Adminga murojat qiling"
        });
      }
    };
    const editDepartment = async (department2) => {
      var _a;
      try {
        let response = await $fetch(apify(`employees/departments/department/${department2.id}/edit`), {
          method: "POST",
          body: JSON.stringify({
            "name": department2.name
          }),
          headers: {
            "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
          }
        });
      } catch {
      }
    };
    const addDepartment = async () => {
      var _a;
      try {
        let response = await $fetch(apify("employees/departments/add"), {
          method: "POST",
          body: JSON.stringify({
            "name": department.value.name
          }),
          headers: {
            "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
          }
        });
        dialogOpen.value = false;
        getDepartments();
      } catch {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumb = _sfc_main$5$1;
      const _component_BreadcrumbList = _sfc_main$2$1;
      const _component_BreadcrumbItem = _sfc_main$4$1;
      const _component_BreadcrumbLink = _sfc_main$3$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BreadcrumbSeparator = _sfc_main$6;
      const _component_BreadcrumbPage = _sfc_main$1$1;
      const _component_Dialog = _sfc_main$6$1;
      const _component_DialogTrigger = _sfc_main$7;
      const _component_Button = _sfc_main$8;
      const _component_DialogContent = _sfc_main$4$2;
      const _component_DialogHeader = _sfc_main$2$2;
      const _component_DialogTitle = _sfc_main$1$2;
      const _component_DialogDescription = _sfc_main$9;
      const _component_Label = _sfc_main$1$3;
      const _component_Input = _sfc_main$a;
      const _component_Select = _sfc_main$6$2;
      const _component_SelectTrigger = _sfc_main$1$4;
      const _component_SelectValue = _sfc_main$b;
      const _component_SelectContent = _sfc_main$5$2;
      const _component_SelectItem = _sfc_main$4$3;
      const _component_DialogFooter = _sfc_main$3$2;
      const _component_DialogClose = _sfc_main$5$3;
      const _component_Table = _sfc_main$5$4;
      const _component_TableHeader = _sfc_main$c;
      const _component_TableHead = _sfc_main$1$5;
      const _component_TableBody = _sfc_main$4$4;
      const _component_TableRow = _sfc_main$2$3;
      const _component_TableCell = _sfc_main$3$3;
      const _component_Badge = _sfc_main$d;
      const _component_Sheet = _sfc_main$5;
      const _component_SheetTrigger = _sfc_main$1;
      const _component_SheetContent = _sfc_main$4;
      const _component_SheetHeader = _sfc_main$3;
      const _component_SheetTitle = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-3 p-5 md:p-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Breadcrumb, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BreadcrumbList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BreadcrumbItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BreadcrumbLink, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: { name: "admin" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Bosh sahifa`);
                                  } else {
                                    return [
                                      createTextVNode("Bosh sahifa")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, { to: { name: "admin" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("Bosh sahifa")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BreadcrumbLink, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, { to: { name: "admin" } }, {
                                default: withCtx(() => [
                                  createTextVNode("Bosh sahifa")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BreadcrumbSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BreadcrumbItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BreadcrumbPage, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Bo&#39;limlar `);
                            } else {
                              return [
                                createTextVNode(" Bo'limlar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BreadcrumbPage, null, {
                            default: withCtx(() => [
                              createTextVNode(" Bo'limlar ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BreadcrumbItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_BreadcrumbLink, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, { to: { name: "admin" } }, {
                              default: withCtx(() => [
                                createTextVNode("Bosh sahifa")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BreadcrumbSeparator),
                    createVNode(_component_BreadcrumbItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_BreadcrumbPage, null, {
                          default: withCtx(() => [
                            createTextVNode(" Bo'limlar ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BreadcrumbList, null, {
                default: withCtx(() => [
                  createVNode(_component_BreadcrumbItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_BreadcrumbLink, null, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: { name: "admin" } }, {
                            default: withCtx(() => [
                              createTextVNode("Bosh sahifa")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BreadcrumbSeparator),
                  createVNode(_component_BreadcrumbItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_BreadcrumbPage, null, {
                        default: withCtx(() => [
                          createTextVNode(" Bo'limlar ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center justify-between"><div></div><div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        open: unref(dialogOpen),
        "onUpdate:open": ($event) => isRef(dialogOpen) ? dialogOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    size: "sm",
                    variant: "ghost"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(LucideListPlus), { size: 16 }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>Qo&#39;shish</span>`);
                      } else {
                        return [
                          createVNode(unref(LucideListPlus), { size: 16 }),
                          createVNode("span", null, "Qo'shish")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      size: "sm",
                      variant: "ghost"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(LucideListPlus), { size: 16 }),
                        createVNode("span", null, "Qo'shish")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DialogContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Bo&#39;lim qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Bo'lim qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Yangi bo&#39;lim qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Yangi bo'lim qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Bo'lim qo'shish")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Yangi bo'lim qo'shish")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;lim nomi <sup class="text-red-500 font-bold"${_scopeId3}>*</sup>`);
                      } else {
                        return [
                          createTextVNode("Bo'lim nomi "),
                          createVNode("sup", { class: "text-red-500 font-bold" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(department).name,
                    "onUpdate:modelValue": ($event) => unref(department).name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;lim ikonkasi`);
                      } else {
                        return [
                          createTextVNode("Bo'lim ikonkasi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, { value: "lucide:layout-list" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;lim tartibi`);
                      } else {
                        return [
                          createTextVNode("Bo'lim tartibi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, { "default-value": "last" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Tanlang" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "last" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Oxirida`);
                                  } else {
                                    return [
                                      createTextVNode("Oxirida")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "first" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Boshida`);
                                  } else {
                                    return [
                                      createTextVNode("Boshida")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`2`);
                                  } else {
                                    return [
                                      createTextVNode("2")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`3`);
                                  } else {
                                    return [
                                      createTextVNode("3")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectItem, { value: "last" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Oxirida")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "first" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Boshida")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("2")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "3" }, {
                                  default: withCtx(() => [
                                    createTextVNode("3")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "last" }, {
                                default: withCtx(() => [
                                  createTextVNode("Oxirida")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "first" }, {
                                default: withCtx(() => [
                                  createTextVNode("Boshida")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "2" }, {
                                default: withCtx(() => [
                                  createTextVNode("2")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "3" }, {
                                default: withCtx(() => [
                                  createTextVNode("3")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogClose, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Yopish`);
                                  } else {
                                    return [
                                      createTextVNode("Yopish")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, { variant: "destructive" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Yopish")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { onClick: addDepartment }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogClose, null, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "destructive" }, {
                                default: withCtx(() => [
                                  createTextVNode("Yopish")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { onClick: addDepartment }, {
                            default: withCtx(() => [
                              createTextVNode("Qo'shish")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Bo'lim qo'shish")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Yangi bo'lim qo'shish")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Bo'lim nomi "),
                          createVNode("sup", { class: "text-red-500 font-bold" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(department).name,
                        "onUpdate:modelValue": ($event) => unref(department).name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Bo'lim ikonkasi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, { value: "lucide:layout-list" }),
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Bo'lim tartibi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, { "default-value": "last" }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "last" }, {
                                default: withCtx(() => [
                                  createTextVNode("Oxirida")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "first" }, {
                                default: withCtx(() => [
                                  createTextVNode("Boshida")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "2" }, {
                                default: withCtx(() => [
                                  createTextVNode("2")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "3" }, {
                                default: withCtx(() => [
                                  createTextVNode("3")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogClose, null, {
                          default: withCtx(() => [
                            createVNode(_component_Button, { variant: "destructive" }, {
                              default: withCtx(() => [
                                createTextVNode("Yopish")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { onClick: addDepartment }, {
                          default: withCtx(() => [
                            createTextVNode("Qo'shish")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    size: "sm",
                    variant: "ghost"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(LucideListPlus), { size: 16 }),
                      createVNode("span", null, "Qo'shish")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DialogContent, null, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Bo'lim qo'shish")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Yangi bo'lim qo'shish")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Bo'lim nomi "),
                        createVNode("sup", { class: "text-red-500 font-bold" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Input, {
                      modelValue: unref(department).name,
                      "onUpdate:modelValue": ($event) => unref(department).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Bo'lim ikonkasi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Input, { value: "lucide:layout-list" }),
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Bo'lim tartibi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, { "default-value": "last" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectItem, { value: "last" }, {
                              default: withCtx(() => [
                                createTextVNode("Oxirida")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "first" }, {
                              default: withCtx(() => [
                                createTextVNode("Boshida")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "2" }, {
                              default: withCtx(() => [
                                createTextVNode("2")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "3" }, {
                              default: withCtx(() => [
                                createTextVNode("3")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogClose, null, {
                        default: withCtx(() => [
                          createVNode(_component_Button, { variant: "destructive" }, {
                            default: withCtx(() => [
                              createTextVNode("Yopish")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Button, { onClick: addDepartment }, {
                        default: withCtx(() => [
                          createTextVNode("Qo'shish")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full border rounded-md overflow-x-auto">`);
      _push(ssrRenderComponent(_component_Table, { class: "whitespace-nowrap overflow-x-auto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, { class: "border-b" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TableHead, { class: "w-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`#`);
                      } else {
                        return [
                          createTextVNode("#")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;lim nomi`);
                      } else {
                        return [
                          createTextVNode("Bo'lim nomi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Xodimlar soni`);
                      } else {
                        return [
                          createTextVNode("Xodimlar soni")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tahrirlash`);
                      } else {
                        return [
                          createTextVNode("Tahrirlash")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`O&#39;chirish`);
                      } else {
                        return [
                          createTextVNode("O'chirish")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TableHead, { class: "w-4" }, {
                      default: withCtx(() => [
                        createTextVNode("#")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Bo'lim nomi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Xodimlar soni")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Tahrirlash")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("O'chirish")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(departments), (department2, index) => {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(index + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(index + 1), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(department2.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(department2.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Badge, { variant: "secondary" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(department2.employees)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(department2.employees), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Badge, { variant: "secondary" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(department2.employees), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "w-10" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Sheet, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_SheetTrigger, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Button, {
                                              size: "icon",
                                              variant: "default"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(LucideEdit), { size: 16 }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(unref(LucideEdit), { size: 16 })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_Button, {
                                                size: "icon",
                                                variant: "default"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(LucideEdit), { size: 16 })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_SheetContent, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_SheetHeader, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_SheetTitle, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(department2.name)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(department2.name), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_SheetTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(department2.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_Label, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Nomi`);
                                                } else {
                                                  return [
                                                    createTextVNode("Nomi")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_Input, {
                                              modelValue: department2.name,
                                              "onUpdate:modelValue": ($event) => department2.name = $event
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_Button, {
                                              onClick: ($event) => editDepartment(department2)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Saqlash`);
                                                } else {
                                                  return [
                                                    createTextVNode("Saqlash")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_SheetHeader, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_SheetTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(department2.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_Label, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Nomi")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_Input, {
                                                modelValue: department2.name,
                                                "onUpdate:modelValue": ($event) => department2.name = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_Button, {
                                                onClick: ($event) => editDepartment(department2)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Saqlash")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_SheetTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Button, {
                                              size: "icon",
                                              variant: "default"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(LucideEdit), { size: 16 })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SheetContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SheetHeader, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_SheetTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(department2.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_Label, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Nomi")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_Input, {
                                              modelValue: department2.name,
                                              "onUpdate:modelValue": ($event) => department2.name = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_Button, {
                                              onClick: ($event) => editDepartment(department2)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Saqlash")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Sheet, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SheetTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, {
                                            size: "icon",
                                            variant: "default"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(LucideEdit), { size: 16 })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SheetContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SheetHeader, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SheetTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(department2.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_Label, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Nomi")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_Input, {
                                            modelValue: department2.name,
                                            "onUpdate:modelValue": ($event) => department2.name = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_Button, {
                                            onClick: ($event) => editDepartment(department2)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Saqlash")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "w-10" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Button, {
                                  size: "icon",
                                  variant: "destructive"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(LucideTrash), { size: 16 }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(LucideTrash), { size: 16 })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Button, {
                                    size: "icon",
                                    variant: "destructive"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(LucideTrash), { size: 16 })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(department2.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_Badge, { variant: "secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(department2.employees), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "w-10" }, {
                              default: withCtx(() => [
                                createVNode(_component_Sheet, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SheetTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, {
                                          size: "icon",
                                          variant: "default"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(LucideEdit), { size: 16 })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SheetContent, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SheetHeader, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SheetTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(department2.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_Label, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Nomi")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_Input, {
                                          modelValue: department2.name,
                                          "onUpdate:modelValue": ($event) => department2.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_Button, {
                                          onClick: ($event) => editDepartment(department2)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Saqlash")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "w-10" }, {
                              default: withCtx(() => [
                                createVNode(_component_Button, {
                                  size: "icon",
                                  variant: "destructive"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(LucideTrash), { size: 16 })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department2, index) => {
                      return openBlock(), createBlock(_component_TableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(index + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(department2.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_Badge, { variant: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(department2.employees), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "w-10" }, {
                            default: withCtx(() => [
                              createVNode(_component_Sheet, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SheetTrigger, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, {
                                        size: "icon",
                                        variant: "default"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(LucideEdit), { size: 16 })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SheetContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SheetHeader, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SheetTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(department2.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_Label, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Nomi")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Input, {
                                        modelValue: department2.name,
                                        "onUpdate:modelValue": ($event) => department2.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_Button, {
                                        onClick: ($event) => editDepartment(department2)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Saqlash")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "w-10" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, {
                                size: "icon",
                                variant: "destructive"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(LucideTrash), { size: 16 })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableHeader, { class: "border-b" }, {
                default: withCtx(() => [
                  createVNode(_component_TableHead, { class: "w-4" }, {
                    default: withCtx(() => [
                      createTextVNode("#")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Bo'lim nomi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Xodimlar soni")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Tahrirlash")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("O'chirish")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department2, index) => {
                    return openBlock(), createBlock(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(index + 1), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(department2.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode(_component_Badge, { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(department2.employees), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "w-10" }, {
                          default: withCtx(() => [
                            createVNode(_component_Sheet, null, {
                              default: withCtx(() => [
                                createVNode(_component_SheetTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, {
                                      size: "icon",
                                      variant: "default"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(LucideEdit), { size: 16 })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SheetContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SheetHeader, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SheetTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(department2.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_Label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Nomi")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Input, {
                                      modelValue: department2.name,
                                      "onUpdate:modelValue": ($event) => department2.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_Button, {
                                      onClick: ($event) => editDepartment(department2)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Saqlash")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "w-10" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              size: "icon",
                              variant: "destructive"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(LucideTrash), { size: 16 })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/departments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=departments-Bgu-ED1U.mjs.map
