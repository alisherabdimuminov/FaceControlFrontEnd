import { _ as _sfc_main$5$1, a as _sfc_main$2$1, b as _sfc_main$4$1, c as _sfc_main$3$1, d as _sfc_main$8, e as _sfc_main$1$1 } from './BreadcrumbSeparator-Bk7vwz0P.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BteVf0xu.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$1$2, b as _sfc_main$9, c as _sfc_main$5$2, d as _sfc_main$4$2 } from './SelectValue-Ca3TaOHb.mjs';
import { _ as _sfc_main$5$3, a as _sfc_main$b, b as _sfc_main$1$3, c as _sfc_main$4$3, d as _sfc_main$2$2, e as _sfc_main$3$2 } from './TableHeader-DqV9hosG.mjs';
import { _ as _sfc_main$c } from './index-CBSFICcq.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, createVNode, isRef, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { useForwardPropsEmits, HoverCardRoot, HoverCardTrigger, useForwardProps, HoverCardPortal, HoverCardContent, DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem } from 'radix-vue';
import { u as useHead, n as navigateTo, b as useRuntimeConfig, c as cn, t as toast } from './server.mjs';
import { LucideListPlus, LucideCog, LucideUserRoundPen, LucideTrash } from 'lucide-vue-next';
import { u as useAuth } from './useAuth-Bm8wKJNG.mjs';
import { a as apify } from './apify-Dl3ct05U.mjs';
import { _ as _sfc_main$a } from './Button-BwGI6xSh.mjs';
import '@radix-icons/vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'class-variance-authority';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'clsx';
import 'tailwind-merge';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HoverCard",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    openDelay: {},
    closeDelay: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(HoverCardContent), mergeProps(unref(forwardedProps), {
              class: unref(cn)(
                "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
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
          } else {
            return [
              createVNode(unref(HoverCardContent), mergeProps(unref(forwardedProps), {
                class: unref(cn)(
                  "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCardContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HoverCardTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardTrigger), mergeProps(props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCardTrigger.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
              class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
            }), {
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
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
                class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-4 [&>svg]:shrink-0",
          _ctx.inset && "pl-8",
          props.class
        )
      }, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ class: "outline-none" }, unref(forwardedProps), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Xodimlar"
    });
    const config = useRuntimeConfig();
    const { user } = useAuth();
    const employees = ref([]);
    const departments = ref([]);
    const department = ref("0");
    const isLoading = ref(false);
    const getEmployees = async (department2) => {
      var _a;
      isLoading.value = true;
      let response = await $fetch(apify("employees") + `?department=${department2}`, {
        headers: {
          "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
        }
      });
      if (response.status === "success") {
        employees.value = response.data;
      }
      isLoading.value = false;
    };
    const deleteEmployee = async (employee) => {
      var _a;
      try {
        let response = await $fetch(apify(`employees/employee/${employee.uuid}/delete`), {
          method: "POST",
          headers: {
            "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
          }
        });
        if (response.status === "success") {
          getEmployees(department.value);
          toast({
            title: "Ajoyib",
            description: "Xodim o'chirildi"
          });
        } else {
          toast({
            title: "Xatolik",
            description: "Adminga murojat qiling"
          });
        }
      } catch {
      }
    };
    watch(department, () => {
      getEmployees(department.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumb = _sfc_main$5$1;
      const _component_BreadcrumbList = _sfc_main$2$1;
      const _component_BreadcrumbItem = _sfc_main$4$1;
      const _component_BreadcrumbLink = _sfc_main$3$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BreadcrumbSeparator = _sfc_main$8;
      const _component_BreadcrumbPage = _sfc_main$1$1;
      const _component_Select = _sfc_main$6$1;
      const _component_SelectTrigger = _sfc_main$1$2;
      const _component_SelectValue = _sfc_main$9;
      const _component_SelectContent = _sfc_main$5$2;
      const _component_SelectItem = _sfc_main$4$2;
      const _component_Button = _sfc_main$a;
      const _component_Table = _sfc_main$5$3;
      const _component_TableHeader = _sfc_main$b;
      const _component_TableHead = _sfc_main$1$3;
      const _component_TableBody = _sfc_main$4$3;
      const _component_TableRow = _sfc_main$2$2;
      const _component_TableCell = _sfc_main$3$2;
      const _component_Badge = _sfc_main$c;
      const _component_HoverCard = _sfc_main$7;
      const _component_HoverCardTrigger = _sfc_main$5;
      const _component_HoverCardContent = _sfc_main$6;
      const _component_DropdownMenu = _sfc_main$4;
      const _component_DropdownMenuTrigger = _sfc_main$1;
      const _component_DropdownMenuContent = _sfc_main$3;
      const _component_DropdownMenuItem = _sfc_main$2;
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
                              _push5(` Xodimlar `);
                            } else {
                              return [
                                createTextVNode(" Xodimlar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BreadcrumbPage, null, {
                            default: withCtx(() => [
                              createTextVNode(" Xodimlar ")
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
                            createTextVNode(" Xodimlar ")
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
                          createTextVNode(" Xodimlar ")
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
      _push(`<div class="flex items-center justify-between gap-2"><div class="flex-1">`);
      _push(ssrRenderComponent(_component_Select, {
        "default-value": "0",
        modelValue: unref(department),
        "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Select department" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Select department" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectItem, { value: "0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Barcha bo&#39;limlar`);
                      } else {
                        return [
                          createTextVNode("Barcha bo'limlar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(departments), (department2) => {
                    _push3(ssrRenderComponent(_component_SelectItem, {
                      value: department2.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(department2.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(department2.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(_component_SelectItem, { value: "0" }, {
                      default: withCtx(() => [
                        createTextVNode("Barcha bo'limlar")
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department2) => {
                      return openBlock(), createBlock(_component_SelectItem, {
                        value: department2.id
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(department2.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "Select department" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectItem, { value: "0" }, {
                    default: withCtx(() => [
                      createTextVNode("Barcha bo'limlar")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department2) => {
                    return openBlock(), createBlock(_component_SelectItem, {
                      value: department2.id
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(department2.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 256))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        size: "sm",
        variant: "ghost",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-add" })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LucideListPlus), { size: 16 }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Qo&#39;shish</span>`);
          } else {
            return [
              createVNode(unref(LucideListPlus), { size: 16 }),
              createVNode("span", null, "Qo'shish")
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
                        _push4(`Familiya, Ism, Sharifi`);
                      } else {
                        return [
                          createTextVNode("Familiya, Ism, Sharifi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;limi`);
                      } else {
                        return [
                          createTextVNode("Bo'limi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Lavozimi`);
                      } else {
                        return [
                          createTextVNode("Lavozimi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`IDsi`);
                      } else {
                        return [
                          createTextVNode("IDsi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tug&#39;ilgan sanasi`);
                      } else {
                        return [
                          createTextVNode("Tug'ilgan sanasi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Rasmi`);
                      } else {
                        return [
                          createTextVNode("Rasmi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Harakatlar`);
                      } else {
                        return [
                          createTextVNode("Harakatlar")
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
                        createTextVNode("Familiya, Ism, Sharifi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Bo'limi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Lavozimi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("IDsi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Tug'ilgan sanasi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Rasmi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Harakatlar")
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
                  ssrRenderList(unref(employees), (employee, index) => {
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
                          _push4(ssrRenderComponent(_component_TableCell, {
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(employee.full_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(employee.full_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(employee.department.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(employee.department.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(employee.position)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(employee.position), 1)
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
                                      _push6(`${ssrInterpolate(employee.handle)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(employee.handle), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Badge, { variant: "secondary" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(employee.handle), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(employee.birth_date)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(employee.birth_date), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_HoverCard, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_HoverCardTrigger, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<img class="w-6 h-6 rounded-full"${ssrRenderAttr("src", `${unref(config).public.base}${employee.image}`)} alt=""${_scopeId6}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                class: "w-6 h-6 rounded-full",
                                                src: `${unref(config).public.base}${employee.image}`,
                                                alt: ""
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_HoverCardContent, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div${_scopeId6}><img class="w-64 h-64 rounded-md"${ssrRenderAttr("src", `${unref(config).public.base}${employee.image}`)} alt=""${_scopeId6}></div>`);
                                          } else {
                                            return [
                                              createVNode("div", null, [
                                                createVNode("img", {
                                                  class: "w-64 h-64 rounded-md",
                                                  src: `${unref(config).public.base}${employee.image}`,
                                                  alt: ""
                                                }, null, 8, ["src"])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_HoverCardTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              class: "w-6 h-6 rounded-full",
                                              src: `${unref(config).public.base}${employee.image}`,
                                              alt: ""
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_HoverCardContent, null, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("img", {
                                                class: "w-64 h-64 rounded-md",
                                                src: `${unref(config).public.base}${employee.image}`,
                                                alt: ""
                                              }, null, 8, ["src"])
                                            ])
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
                                  createVNode(_component_HoverCard, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_HoverCardTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            class: "w-6 h-6 rounded-full",
                                            src: `${unref(config).public.base}${employee.image}`,
                                            alt: ""
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_HoverCardContent, null, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("img", {
                                              class: "w-64 h-64 rounded-md",
                                              src: `${unref(config).public.base}${employee.image}`,
                                              alt: ""
                                            }, null, 8, ["src"])
                                          ])
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
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_DropdownMenu, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_DropdownMenuTrigger, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Button, {
                                              size: "icon",
                                              variant: "outline"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(LucideCog), { size: 16 }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(unref(LucideCog), { size: 16 })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_Button, {
                                                size: "icon",
                                                variant: "outline"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(LucideCog), { size: 16 })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_DropdownMenuContent, { side: "left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_DropdownMenuItem, {
                                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(LucideUserRoundPen), { size: 16 }, null, _parent8, _scopeId7));
                                                  _push8(`<span${_scopeId7}>Tahrirlash</span>`);
                                                } else {
                                                  return [
                                                    createVNode(unref(LucideUserRoundPen), { size: 16 }),
                                                    createVNode("span", null, "Tahrirlash")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_DropdownMenuItem, {
                                              onClick: ($event) => deleteEmployee(employee)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(LucideTrash), { size: 16 }, null, _parent8, _scopeId7));
                                                  _push8(`<span${_scopeId7}>O&#39;chirish</span>`);
                                                } else {
                                                  return [
                                                    createVNode(unref(LucideTrash), { size: 16 }),
                                                    createVNode("span", null, "O'chirish")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_DropdownMenuItem, {
                                                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(LucideUserRoundPen), { size: 16 }),
                                                  createVNode("span", null, "Tahrirlash")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]),
                                              createVNode(_component_DropdownMenuItem, {
                                                onClick: ($event) => deleteEmployee(employee)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(LucideTrash), { size: 16 }),
                                                  createVNode("span", null, "O'chirish")
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
                                        createVNode(_component_DropdownMenuTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Button, {
                                              size: "icon",
                                              variant: "outline"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(LucideCog), { size: 16 })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_DropdownMenuContent, { side: "left" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_DropdownMenuItem, {
                                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(LucideUserRoundPen), { size: 16 }),
                                                createVNode("span", null, "Tahrirlash")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(_component_DropdownMenuItem, {
                                              onClick: ($event) => deleteEmployee(employee)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(LucideTrash), { size: 16 }),
                                                createVNode("span", null, "O'chirish")
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
                                  createVNode(_component_DropdownMenu, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DropdownMenuTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, {
                                            size: "icon",
                                            variant: "outline"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(LucideCog), { size: 16 })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuContent, { side: "left" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DropdownMenuItem, {
                                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(LucideUserRoundPen), { size: 16 }),
                                              createVNode("span", null, "Tahrirlash")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_DropdownMenuItem, {
                                            onClick: ($event) => deleteEmployee(employee)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(LucideTrash), { size: 16 }),
                                              createVNode("span", null, "O'chirish")
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
                        } else {
                          return [
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, {
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(employee.full_name), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(employee.department.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(employee.position), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_Badge, { variant: "secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(employee.handle), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(employee.birth_date), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_HoverCard, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_HoverCardTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          class: "w-6 h-6 rounded-full",
                                          src: `${unref(config).public.base}${employee.image}`,
                                          alt: ""
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_HoverCardContent, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("img", {
                                            class: "w-64 h-64 rounded-md",
                                            src: `${unref(config).public.base}${employee.image}`,
                                            alt: ""
                                          }, null, 8, ["src"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownMenu, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DropdownMenuTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, {
                                          size: "icon",
                                          variant: "outline"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(LucideCog), { size: 16 })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DropdownMenuContent, { side: "left" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_DropdownMenuItem, {
                                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(LucideUserRoundPen), { size: 16 }),
                                            createVNode("span", null, "Tahrirlash")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(_component_DropdownMenuItem, {
                                          onClick: ($event) => deleteEmployee(employee)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(LucideTrash), { size: 16 }),
                                            createVNode("span", null, "O'chirish")
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
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(employees), (employee, index) => {
                      return openBlock(), createBlock(_component_TableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(index + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, {
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(employee.full_name), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(employee.department.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(employee.position), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_Badge, { variant: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(employee.handle), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(employee.birth_date), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_HoverCard, null, {
                                default: withCtx(() => [
                                  createVNode(_component_HoverCardTrigger, null, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        class: "w-6 h-6 rounded-full",
                                        src: `${unref(config).public.base}${employee.image}`,
                                        alt: ""
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_HoverCardContent, null, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("img", {
                                          class: "w-64 h-64 rounded-md",
                                          src: `${unref(config).public.base}${employee.image}`,
                                          alt: ""
                                        }, null, 8, ["src"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenu, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DropdownMenuTrigger, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, {
                                        size: "icon",
                                        variant: "outline"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(LucideCog), { size: 16 })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuContent, { side: "left" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_DropdownMenuItem, {
                                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(LucideUserRoundPen), { size: 16 }),
                                          createVNode("span", null, "Tahrirlash")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_DropdownMenuItem, {
                                        onClick: ($event) => deleteEmployee(employee)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(LucideTrash), { size: 16 }),
                                          createVNode("span", null, "O'chirish")
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
                          }, 1024)
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
                      createTextVNode("Familiya, Ism, Sharifi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Bo'limi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Lavozimi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("IDsi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Tug'ilgan sanasi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Rasmi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Harakatlar")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(employees), (employee, index) => {
                    return openBlock(), createBlock(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(index + 1), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, {
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(employee.full_name), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(employee.department.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(employee.position), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode(_component_Badge, { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(employee.handle), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(employee.birth_date), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode(_component_HoverCard, null, {
                              default: withCtx(() => [
                                createVNode(_component_HoverCardTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      class: "w-6 h-6 rounded-full",
                                      src: `${unref(config).public.base}${employee.image}`,
                                      alt: ""
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_HoverCardContent, null, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        class: "w-64 h-64 rounded-md",
                                        src: `${unref(config).public.base}${employee.image}`,
                                        alt: ""
                                      }, null, 8, ["src"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownMenuTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, {
                                      size: "icon",
                                      variant: "outline"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(LucideCog), { size: 16 })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuContent, { side: "left" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_DropdownMenuItem, {
                                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(LucideUserRoundPen), { size: 16 }),
                                        createVNode("span", null, "Tahrirlash")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_DropdownMenuItem, {
                                      onClick: ($event) => deleteEmployee(employee)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(LucideTrash), { size: 16 }),
                                        createVNode("span", null, "O'chirish")
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
                        }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/employees/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bfr2_i1E.mjs.map
