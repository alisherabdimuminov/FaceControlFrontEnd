import { _ as _sfc_main$5$1, a as _sfc_main$2$1, b as _sfc_main$4$1, c as _sfc_main$3$1, d as _sfc_main$k, e as _sfc_main$1$1 } from './BreadcrumbSeparator-Bk7vwz0P.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BteVf0xu.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$1$2, b as _sfc_main$l, c as _sfc_main$5$2, d as _sfc_main$4$2 } from './SelectValue-Ca3TaOHb.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, createVNode, isRef, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot, computed, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent, CalendarRoot, useForwardProps, CalendarHeader, CalendarPrev, CalendarHeading, CalendarNext, CalendarGrid, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarGridBody, CalendarCell, CalendarCellTrigger, TabsRoot, TabsList, TabsTrigger, TabsContent } from 'radix-vue';
import { u as useHead, t as toast, c as cn } from './server.mjs';
import { _ as _sfc_main$m, b as buttonVariants } from './Button-BwGI6xSh.mjs';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-icons/vue';
import { _ as _sfc_main$5$3, a as _sfc_main$n, b as _sfc_main$1$3, c as _sfc_main$4$3, d as _sfc_main$2$2, e as _sfc_main$3$2 } from './TableHeader-DqV9hosG.mjs';
import { LucideCalendar } from 'lucide-vue-next';
import { u as useAuth } from './useAuth-Bm8wKJNG.mjs';
import { a as apify } from './apify-Dl3ct05U.mjs';
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

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Popover",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/Popover.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PopoverContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: { default: "center" },
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
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
              createVNode(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/PopoverContent.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "PopoverTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverTrigger), mergeProps(props, _attrs), {
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/PopoverTrigger.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Calendar",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: {},
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    weekStartsOn: {},
    weekdayFormat: {},
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: { type: Function },
    isDateUnavailable: { type: Function },
    dir: {},
    nextPage: { type: Function },
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CalendarRoot), mergeProps({
        class: unref(cn)("p-3", props.class)
      }, unref(forwarded), _attrs), {
        default: withCtx(({ grid, weekDays }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5)),
                    createVNode(unref(_sfc_main$7)),
                    createVNode(unref(_sfc_main$6))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0"${_scopeId}><!--[-->`);
            ssrRenderList(grid, (month) => {
              _push2(ssrRenderComponent(unref(_sfc_main$d), {
                key: month.value.toString()
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$a), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(weekDays, (day) => {
                                  _push5(ssrRenderComponent(unref(_sfc_main$9), { key: day }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(day)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(day), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                    return openBlock(), createBlock(unref(_sfc_main$9), { key: day }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(day), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                  return openBlock(), createBlock(unref(_sfc_main$9), { key: day }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(day), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$c), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(month.rows, (weekDates, index) => {
                            _push4(ssrRenderComponent(unref(_sfc_main$a), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(weekDates, (weekDate) => {
                                    _push5(ssrRenderComponent(unref(_sfc_main$f), {
                                      key: weekDate.toString(),
                                      date: weekDate
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(_sfc_main$e), {
                                            day: weekDate,
                                            month: month.value
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$e), {
                                              day: weekDate,
                                              month: month.value
                                            }, null, 8, ["day", "month"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                      return openBlock(), createBlock(unref(_sfc_main$f), {
                                        key: weekDate.toString(),
                                        date: weekDate
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$e), {
                                            day: weekDate,
                                            month: month.value
                                          }, null, 8, ["day", "month"])
                                        ]),
                                        _: 2
                                      }, 1032, ["date"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                              return openBlock(), createBlock(unref(_sfc_main$a), {
                                key: `weekDate-${index}`,
                                class: "mt-2 w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                    return openBlock(), createBlock(unref(_sfc_main$f), {
                                      key: weekDate.toString(),
                                      date: weekDate
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$e), {
                                          day: weekDate,
                                          month: month.value
                                        }, null, 8, ["day", "month"])
                                      ]),
                                      _: 2
                                    }, 1032, ["date"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(_sfc_main$9), { key: day }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(day), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$c), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(_sfc_main$a), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(_sfc_main$f), {
                                    key: weekDate.toString(),
                                    date: weekDate
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$e), {
                                        day: weekDate,
                                        month: month.value
                                      }, null, 8, ["day", "month"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(unref(_sfc_main$8), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5)),
                  createVNode(unref(_sfc_main$7)),
                  createVNode(unref(_sfc_main$6))
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(grid, (month) => {
                  return openBlock(), createBlock(unref(_sfc_main$d), {
                    key: month.value.toString()
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(_sfc_main$9), { key: day }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(day), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$c), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(_sfc_main$a), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(_sfc_main$f), {
                                    key: weekDate.toString(),
                                    date: weekDate
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$e), {
                                        day: weekDate,
                                        month: month.value
                                      }, null, 8, ["day", "month"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/Calendar.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "CalendarCell",
  __ssrInlineRender: true,
  props: {
    date: {},
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
      _push(ssrRenderComponent(unref(CalendarCell), mergeProps({
        class: unref(cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent [&:has([data-selected][data-outside-view])]:bg-accent/50", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarCell.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CalendarCellTrigger",
  __ssrInlineRender: true,
  props: {
    day: {},
    month: {},
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
      _push(ssrRenderComponent(unref(CalendarCellTrigger), mergeProps({
        class: unref(cn)(
          unref(buttonVariants)({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal",
          "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground",
          // Selected
          "data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground",
          // Disabled
          "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
          // Unavailable
          "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through",
          // Outside months
          "data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarCellTrigger.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CalendarGrid",
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CalendarGrid), mergeProps({
        class: unref(cn)("w-full border-collapse space-y-1", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarGrid.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "CalendarGridBody",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CalendarGridBody), mergeProps(props, _attrs), {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarGridBody.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "CalendarGridHead",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CalendarGridHead), mergeProps(props, _attrs), {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarGridHead.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CalendarGridRow",
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CalendarGridRow), mergeProps({
        class: unref(cn)("flex", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarGridRow.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeadCell",
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CalendarHeadCell), mergeProps({
        class: unref(cn)("w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarHeadCell.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeader",
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CalendarHeader), mergeProps({
        class: unref(cn)("relative flex w-full items-center justify-between pt-1", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarHeader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeading",
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CalendarHeading), mergeProps({
        class: unref(cn)("text-sm font-medium", props.class)
      }, unref(forwardedProps), _attrs), {
        default: withCtx(({ headingValue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { headingValue }, () => {
              _push2(`${ssrInterpolate(headingValue)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { headingValue }, () => [
                createTextVNode(toDisplayString(headingValue), 1)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarHeading.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CalendarNextButton",
  __ssrInlineRender: true,
  props: {
    step: {},
    nextPage: { type: Function },
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
      _push(ssrRenderComponent(unref(CalendarNext), mergeProps({
        class: unref(cn)(
          unref(buttonVariants)({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronRightIcon), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronRightIcon), { class: "h-4 w-4" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarNextButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CalendarPrevButton",
  __ssrInlineRender: true,
  props: {
    step: {},
    prevPage: { type: Function },
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
      _push(ssrRenderComponent(unref(CalendarPrev), mergeProps({
        class: unref(cn)(
          unref(buttonVariants)({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronLeftIcon), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronLeftIcon), { class: "h-4 w-4" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/calendar/CalendarPrevButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/Tabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  __ssrInlineRender: true,
  props: {
    value: {},
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
      _push(ssrRenderComponent(unref(TabsContent), mergeProps({
        class: unref(cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", props.class)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  __ssrInlineRender: true,
  props: {
    loop: { type: Boolean },
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
      _push(ssrRenderComponent(unref(TabsList), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
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
      _push(ssrRenderComponent(unref(TabsTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="truncate"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "truncate" }, [
                renderSlot(_ctx.$slots, "default")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Hisobotlar"
    });
    const { user } = useAuth();
    const attendance = ref([]);
    const departments = ref([]);
    const department = ref("0");
    const today = /* @__PURE__ */ new Date();
    const date = ref({
      day: today.getDate(),
      era: "AD",
      month: today.getMonth() + 1,
      year: today.getFullYear(),
      toString() {
        return `${this.year}-${this.month}-${this.day}`;
      }
    });
    const getAttendance = async (department2) => {
      var _a;
      try {
        let response = await $fetch(apify("employees/attendance") + `?day=${date.value.day}&&month=${date.value.month}&&year=${date.value.year}&&department=${department2}`, {
          headers: {
            "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
          }
        });
        if (response.status === "success") {
          attendance.value = response.data;
        } else {
          toast({
            title: "Xatolik",
            description: "Adminga murojat qiling. [ga500]"
          });
        }
      } catch {
      }
    };
    const updateDate = async (value) => {
      date.value = value;
      getAttendance(department.value);
    };
    watch(department, (newValue) => {
      getAttendance(department.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumb = _sfc_main$5$1;
      const _component_BreadcrumbList = _sfc_main$2$1;
      const _component_BreadcrumbItem = _sfc_main$4$1;
      const _component_BreadcrumbLink = _sfc_main$3$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BreadcrumbSeparator = _sfc_main$k;
      const _component_BreadcrumbPage = _sfc_main$1$1;
      const _component_Select = _sfc_main$6$1;
      const _component_SelectTrigger = _sfc_main$1$2;
      const _component_SelectValue = _sfc_main$l;
      const _component_SelectContent = _sfc_main$5$2;
      const _component_SelectItem = _sfc_main$4$2;
      const _component_Popover = _sfc_main$j;
      const _component_PopoverTrigger = _sfc_main$h;
      const _component_Button = _sfc_main$m;
      const _component_PopoverContent = _sfc_main$i;
      const _component_Calendar = _sfc_main$g;
      const _component_Tabs = _sfc_main$4;
      const _component_TabsList = _sfc_main$2;
      const _component_TabsTrigger = _sfc_main$1;
      const _component_TabsContent = _sfc_main$3;
      const _component_Table = _sfc_main$5$3;
      const _component_TableHeader = _sfc_main$n;
      const _component_TableHead = _sfc_main$1$3;
      const _component_TableBody = _sfc_main$4$3;
      const _component_TableRow = _sfc_main$2$2;
      const _component_TableCell = _sfc_main$3$2;
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
      _push(`<div class="flex gap-3">`);
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
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Bo'limni tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Bo'limni tanlang" })
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
                  createVNode(_component_SelectValue, { placeholder: "Bo'limni tanlang" })
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
      _push(ssrRenderComponent(_component_Popover, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PopoverTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(LucideCalendar), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(LucideCalendar))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, null, {
                      default: withCtx(() => [
                        createVNode(unref(LucideCalendar))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PopoverContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Calendar, { "onUpdate:modelValue": updateDate }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Calendar, { "onUpdate:modelValue": updateDate })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PopoverTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_Button, null, {
                    default: withCtx(() => [
                      createVNode(unref(LucideCalendar))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PopoverContent, null, {
                default: withCtx(() => [
                  createVNode(_component_Calendar, { "onUpdate:modelValue": updateDate })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full">`);
      _push(ssrRenderComponent(_component_Tabs, {
        "default-value": "kelganlar",
        class: "w-full overflow-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "kelganlar" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Kelganlar`);
                      } else {
                        return [
                          createTextVNode("Kelganlar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "kelmaganlar" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Kelmaganlar`);
                      } else {
                        return [
                          createTextVNode("Kelmaganlar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TabsTrigger, { value: "kelganlar" }, {
                      default: withCtx(() => [
                        createTextVNode("Kelganlar")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, { value: "kelmaganlar" }, {
                      default: withCtx(() => [
                        createTextVNode("Kelmaganlar")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, {
              value: "kelganlar",
              class: "overflow-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid gap-3 col-span-2"${_scopeId2}><p class="font-bold"${_scopeId2}><span class="text-green-500"${_scopeId2}>Kelganlar</span><span${_scopeId2}> / </span><span class="text-orange-500"${_scopeId2}>Kechikganlar</span></p><div class="border rounded-md overflow-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Table, { class: "whitespace-nowrap w-[calc(100%-3rem)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHeader, { class: "border-b" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`ID`);
                                  } else {
                                    return [
                                      createTextVNode("ID")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Familiya Ism`);
                                  } else {
                                    return [
                                      createTextVNode("Familiya Ism")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, { class: "whitespace-wrap w-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Bo&#39;limi`);
                                  } else {
                                    return [
                                      createTextVNode("Bo'limi")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, { class: "border-l text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Holati`);
                                  } else {
                                    return [
                                      createTextVNode("Holati")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Vaqt`);
                                  } else {
                                    return [
                                      createTextVNode("Vaqt")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, { class: "border-l text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Holati`);
                                  } else {
                                    return [
                                      createTextVNode("Holati")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, { class: "border-r text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Vaqt`);
                                  } else {
                                    return [
                                      createTextVNode("Vaqt")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Bino`);
                                  } else {
                                    return [
                                      createTextVNode("Bino")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Familiya Ism")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "whitespace-wrap w-4" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Bo'limi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "border-l text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Holati")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Vaqt")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "border-l text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Holati")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "border-r text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Vaqt")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Bino")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(attendance).filter((v) => v.attendance_access !== "did_not_come"), (a, index) => {
                                _push5(ssrRenderComponent(_component_TableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(index + 1)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(index + 1), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(a.full_name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(a.full_name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<p class="w-64 truncate"${_scopeId6}>${ssrInterpolate(a.department.name)}</p>`);
                                          } else {
                                            return [
                                              createVNode("p", { class: "w-64 truncate" }, toDisplayString(a.department.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "border-l text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (a.attendance_access === "arrived") {
                                              _push7(`<span class="text-green-500"${_scopeId6}>Kelgan</span>`);
                                            } else if (a.attendance_access === "failed") {
                                              _push7(`<span class="text-orange-500"${_scopeId6}>Xatolik</span>`);
                                            } else if (a.attendance_access === "late") {
                                              _push7(`<span class="text-orange-500"${_scopeId6}>Kech qolgan</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "text-green-500"
                                              }, "Kelgan")) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "text-orange-500"
                                              }, "Xatolik")) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                                key: 2,
                                                class: "text-orange-500"
                                              }, "Kech qolgan")) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "text-center font-semibold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (a.attendance_access === "arrived") {
                                              _push7(`<span class="text-green-500"${_scopeId6}>${ssrInterpolate(a.attendance_access_time)}</span>`);
                                            } else if (a.attendance_access === "failed") {
                                              _push7(`<span class="text-orange-500"${_scopeId6}>${ssrInterpolate(a.attendance_access_time)}</span>`);
                                            } else if (a.attendance_access === "late") {
                                              _push7(`<span class="text-orange-500"${_scopeId6}>${ssrInterpolate(a.attendance_access_time)}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "text-green-500"
                                              }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "text-orange-500"
                                              }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                                key: 2,
                                                class: "text-orange-500"
                                              }, toDisplayString(a.attendance_access_time), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "border-l text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (a.attendance_output === "at_work") {
                                              _push7(`<span class="text-green-500"${_scopeId6}>Ishda</span>`);
                                            } else if (a.attendance_output === "failed") {
                                              _push7(`<span class="text-orange-500"${_scopeId6}>Xatolik</span>`);
                                            } else if (a.attendance_output === "gone") {
                                              _push7(`<span class="text-green-500"${_scopeId6}>Ketgan</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              a.attendance_output === "at_work" ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "text-green-500"
                                              }, "Ishda")) : a.attendance_output === "failed" ? (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "text-orange-500"
                                              }, "Xatolik")) : a.attendance_output === "gone" ? (openBlock(), createBlock("span", {
                                                key: 2,
                                                class: "text-green-500"
                                              }, "Ketgan")) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "border-r text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(a.attendance_output_time)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(a.attendance_output_time), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(a.attendance_access_area)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(a.attendance_access_area), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
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
                                            createTextVNode(toDisplayString(a.full_name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "w-64 truncate" }, toDisplayString(a.department.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                          default: withCtx(() => [
                                            a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "text-green-500"
                                            }, "Kelgan")) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "text-orange-500"
                                            }, "Xatolik")) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: "text-orange-500"
                                            }, "Kech qolgan")) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "text-center font-semibold" }, {
                                          default: withCtx(() => [
                                            a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "text-green-500"
                                            }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "text-orange-500"
                                            }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: "text-orange-500"
                                            }, toDisplayString(a.attendance_access_time), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                          default: withCtx(() => [
                                            a.attendance_output === "at_work" ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "text-green-500"
                                            }, "Ishda")) : a.attendance_output === "failed" ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "text-orange-500"
                                            }, "Xatolik")) : a.attendance_output === "gone" ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: "text-green-500"
                                            }, "Ketgan")) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "border-r text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(a.attendance_output_time), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(a.attendance_access_area), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(attendance).filter((v) => v.attendance_access !== "did_not_come"), (a, index) => {
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
                                          createTextVNode(toDisplayString(a.full_name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "w-64 truncate" }, toDisplayString(a.department.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                        default: withCtx(() => [
                                          a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-green-500"
                                          }, "Kelgan")) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "text-orange-500"
                                          }, "Xatolik")) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-orange-500"
                                          }, "Kech qolgan")) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "text-center font-semibold" }, {
                                        default: withCtx(() => [
                                          a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-green-500"
                                          }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "text-orange-500"
                                          }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-orange-500"
                                          }, toDisplayString(a.attendance_access_time), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                        default: withCtx(() => [
                                          a.attendance_output === "at_work" ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-green-500"
                                          }, "Ishda")) : a.attendance_output === "failed" ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "text-orange-500"
                                          }, "Xatolik")) : a.attendance_output === "gone" ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-green-500"
                                          }, "Ketgan")) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "border-r text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(a.attendance_output_time), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(a.attendance_access_area), 1)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHeader, { class: "border-b" }, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("ID")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Familiya Ism")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "whitespace-wrap w-4" }, {
                                default: withCtx(() => [
                                  createTextVNode("Bo'limi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "border-l text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Holati")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Vaqt")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "border-l text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Holati")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "border-r text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Vaqt")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Bino")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(attendance).filter((v) => v.attendance_access !== "did_not_come"), (a, index) => {
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
                                        createTextVNode(toDisplayString(a.full_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "w-64 truncate" }, toDisplayString(a.department.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                      default: withCtx(() => [
                                        a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-green-500"
                                        }, "Kelgan")) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-orange-500"
                                        }, "Xatolik")) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: "text-orange-500"
                                        }, "Kech qolgan")) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-center font-semibold" }, {
                                      default: withCtx(() => [
                                        a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-green-500"
                                        }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-orange-500"
                                        }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: "text-orange-500"
                                        }, toDisplayString(a.attendance_access_time), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                      default: withCtx(() => [
                                        a.attendance_output === "at_work" ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-green-500"
                                        }, "Ishda")) : a.attendance_output === "failed" ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-orange-500"
                                        }, "Xatolik")) : a.attendance_output === "gone" ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: "text-green-500"
                                        }, "Ketgan")) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "border-r text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(a.attendance_output_time), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(a.attendance_access_area), 1)
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
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-3 col-span-2" }, [
                      createVNode("p", { class: "font-bold" }, [
                        createVNode("span", { class: "text-green-500" }, "Kelganlar"),
                        createVNode("span", null, " / "),
                        createVNode("span", { class: "text-orange-500" }, "Kechikganlar")
                      ]),
                      createVNode("div", { class: "border rounded-md overflow-auto" }, [
                        createVNode(_component_Table, { class: "whitespace-nowrap w-[calc(100%-3rem)]" }, {
                          default: withCtx(() => [
                            createVNode(_component_TableHeader, { class: "border-b" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Familiya Ism")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "whitespace-wrap w-4" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Bo'limi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "border-l text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Holati")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Vaqt")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "border-l text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Holati")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "border-r text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Vaqt")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Bino")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableBody, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(attendance).filter((v) => v.attendance_access !== "did_not_come"), (a, index) => {
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
                                          createTextVNode(toDisplayString(a.full_name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "w-64 truncate" }, toDisplayString(a.department.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                        default: withCtx(() => [
                                          a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-green-500"
                                          }, "Kelgan")) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "text-orange-500"
                                          }, "Xatolik")) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-orange-500"
                                          }, "Kech qolgan")) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "text-center font-semibold" }, {
                                        default: withCtx(() => [
                                          a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-green-500"
                                          }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "text-orange-500"
                                          }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-orange-500"
                                          }, toDisplayString(a.attendance_access_time), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                        default: withCtx(() => [
                                          a.attendance_output === "at_work" ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-green-500"
                                          }, "Ishda")) : a.attendance_output === "failed" ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "text-orange-500"
                                          }, "Xatolik")) : a.attendance_output === "gone" ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-green-500"
                                          }, "Ketgan")) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "border-r text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(a.attendance_output_time), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(a.attendance_access_area), 1)
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
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, { value: "kelmaganlar" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-3"${_scopeId2}><p class="text-red-500 font-bold"${_scopeId2}>Kelmaganlar</p><div class="border rounded-md"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Table, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHeader, { class: "border-b" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Familiya Ism`);
                                  } else {
                                    return [
                                      createTextVNode("Familiya Ism")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Holati`);
                                  } else {
                                    return [
                                      createTextVNode("Holati")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Familiya Ism")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Holati")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(attendance).filter((v) => v.attendance_access === "did_not_come"), (a) => {
                                _push5(ssrRenderComponent(_component_TableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(a.full_name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(a.full_name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Kelmagan`);
                                          } else {
                                            return [
                                              createTextVNode("Kelmagan")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(a.full_name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Kelmagan")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(attendance).filter((v) => v.attendance_access === "did_not_come"), (a) => {
                                  return openBlock(), createBlock(_component_TableRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(a.full_name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Kelmagan")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHeader, { class: "border-b" }, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Familiya Ism")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Holati")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(attendance).filter((v) => v.attendance_access === "did_not_come"), (a) => {
                                return openBlock(), createBlock(_component_TableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(a.full_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Kelmagan")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("p", { class: "text-red-500 font-bold" }, "Kelmaganlar"),
                      createVNode("div", { class: "border rounded-md" }, [
                        createVNode(_component_Table, null, {
                          default: withCtx(() => [
                            createVNode(_component_TableHeader, { class: "border-b" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Familiya Ism")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Holati")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableBody, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(attendance).filter((v) => v.attendance_access === "did_not_come"), (a) => {
                                  return openBlock(), createBlock(_component_TableRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(a.full_name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Kelmagan")
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
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_TabsTrigger, { value: "kelganlar" }, {
                    default: withCtx(() => [
                      createTextVNode("Kelganlar")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, { value: "kelmaganlar" }, {
                    default: withCtx(() => [
                      createTextVNode("Kelmaganlar")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TabsContent, {
                value: "kelganlar",
                class: "overflow-auto"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid gap-3 col-span-2" }, [
                    createVNode("p", { class: "font-bold" }, [
                      createVNode("span", { class: "text-green-500" }, "Kelganlar"),
                      createVNode("span", null, " / "),
                      createVNode("span", { class: "text-orange-500" }, "Kechikganlar")
                    ]),
                    createVNode("div", { class: "border rounded-md overflow-auto" }, [
                      createVNode(_component_Table, { class: "whitespace-nowrap w-[calc(100%-3rem)]" }, {
                        default: withCtx(() => [
                          createVNode(_component_TableHeader, { class: "border-b" }, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("ID")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Familiya Ism")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "whitespace-wrap w-4" }, {
                                default: withCtx(() => [
                                  createTextVNode("Bo'limi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "border-l text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Holati")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Vaqt")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "border-l text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Holati")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "border-r text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Vaqt")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Bino")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(attendance).filter((v) => v.attendance_access !== "did_not_come"), (a, index) => {
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
                                        createTextVNode(toDisplayString(a.full_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "w-64 truncate" }, toDisplayString(a.department.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                      default: withCtx(() => [
                                        a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-green-500"
                                        }, "Kelgan")) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-orange-500"
                                        }, "Xatolik")) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: "text-orange-500"
                                        }, "Kech qolgan")) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-center font-semibold" }, {
                                      default: withCtx(() => [
                                        a.attendance_access === "arrived" ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-green-500"
                                        }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "failed" ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-orange-500"
                                        }, toDisplayString(a.attendance_access_time), 1)) : a.attendance_access === "late" ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: "text-orange-500"
                                        }, toDisplayString(a.attendance_access_time), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "border-l text-center" }, {
                                      default: withCtx(() => [
                                        a.attendance_output === "at_work" ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-green-500"
                                        }, "Ishda")) : a.attendance_output === "failed" ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-orange-500"
                                        }, "Xatolik")) : a.attendance_output === "gone" ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: "text-green-500"
                                        }, "Ketgan")) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "border-r text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(a.attendance_output_time), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(a.attendance_access_area), 1)
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
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_TabsContent, { value: "kelmaganlar" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-3" }, [
                    createVNode("p", { class: "text-red-500 font-bold" }, "Kelmaganlar"),
                    createVNode("div", { class: "border rounded-md" }, [
                      createVNode(_component_Table, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableHeader, { class: "border-b" }, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Familiya Ism")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Holati")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(attendance).filter((v) => v.attendance_access === "did_not_come"), (a) => {
                                return openBlock(), createBlock(_component_TableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(a.full_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Kelmagan")
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
                        ]),
                        _: 1
                      })
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/reports/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bm7F8q8c.mjs.map
