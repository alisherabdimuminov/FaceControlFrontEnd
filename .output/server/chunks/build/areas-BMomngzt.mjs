import { _ as _sfc_main$5, a as _sfc_main$2, b as _sfc_main$4, c as _sfc_main$3, d as _sfc_main$1, e as _sfc_main$1$1 } from './BreadcrumbSeparator-Bk7vwz0P.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BteVf0xu.mjs';
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$4$1, c as _sfc_main$2$1, d as _sfc_main$1$2, e as _sfc_main$3$2, f as _sfc_main$5$2 } from './DialogTrigger-Cz1y5McC.mjs';
import { _ as _sfc_main$9 } from './DialogDescription-CLxQAHdY.mjs';
import { _ as _sfc_main$1$3, a as _sfc_main$a } from './Input-BhfeMC11.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$b, b as _sfc_main$1$4, c as _sfc_main$4$2, d as _sfc_main$2$2, e as _sfc_main$3$1 } from './TableHeader-DqV9hosG.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, isRef, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { LucideListPlus, LucideMapPin, LucideTrash } from 'lucide-vue-next';
import { u as useHead } from './server.mjs';
import { u as useAuth } from './useAuth-Bm8wKJNG.mjs';
import { a as apify } from './apify-Dl3ct05U.mjs';
import { _ as _sfc_main$8 } from './Button-BwGI6xSh.mjs';
import 'radix-vue';
import '@radix-icons/vue';
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
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "areas",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Hududlar"
    });
    const { user } = useAuth();
    const areaDialog = ref(false);
    const areas = ref([]);
    const coordinates = ref([{ latitude: "", longitude: "" }, { latitude: "", longitude: "" }, { latitude: "", longitude: "" }, { latitude: "", longitude: "" }]);
    const area = ref({
      id: "",
      name: "",
      coordinates: coordinates.value
    });
    const isLoading = ref(false);
    const getAreas = async () => {
      var _a;
      isLoading.value = true;
      let response = await $fetch(apify("employees/areas"), {
        headers: {
          "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
        }
      });
      areas.value = response.data;
      isLoading.value = false;
    };
    const createArea = async () => {
      var _a;
      isLoading.value = true;
      await $fetch(apify("employees/areas/add"), {
        method: "POST",
        body: JSON.stringify({
          "name": area.value.name,
          "coordinates": coordinates.value.map((coord) => `${coord.latitude}|${coord.longitude}`).join(",")
        }),
        headers: {
          "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
        }
      });
      areaDialog.value = false;
      getAreas();
      isLoading.value = false;
    };
    const deleteArea = async (area2) => {
      var _a;
      isLoading.value = true;
      console.log(area2);
      await $fetch(apify("employees/areas/delete"), {
        method: "POST",
        body: JSON.stringify({
          "id": area2.id
        }),
        headers: {
          "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
        }
      });
      getAreas();
      isLoading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumb = _sfc_main$5;
      const _component_BreadcrumbList = _sfc_main$2;
      const _component_BreadcrumbItem = _sfc_main$4;
      const _component_BreadcrumbLink = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BreadcrumbSeparator = _sfc_main$1;
      const _component_BreadcrumbPage = _sfc_main$1$1;
      const _component_Dialog = _sfc_main$6;
      const _component_DialogTrigger = _sfc_main$7;
      const _component_Button = _sfc_main$8;
      const _component_DialogContent = _sfc_main$4$1;
      const _component_DialogHeader = _sfc_main$2$1;
      const _component_DialogTitle = _sfc_main$1$2;
      const _component_DialogDescription = _sfc_main$9;
      const _component_Label = _sfc_main$1$3;
      const _component_Input = _sfc_main$a;
      const _component_Table = _sfc_main$5$1;
      const _component_TableHeader = _sfc_main$b;
      const _component_TableHead = _sfc_main$1$4;
      const _component_TableBody = _sfc_main$4$2;
      const _component_TableRow = _sfc_main$2$2;
      const _component_TableCell = _sfc_main$3$1;
      const _component_DialogFooter = _sfc_main$3$2;
      const _component_DialogClose = _sfc_main$5$2;
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
                              _push5(` Hududlar `);
                            } else {
                              return [
                                createTextVNode(" Hududlar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BreadcrumbPage, null, {
                            default: withCtx(() => [
                              createTextVNode(" Hududlar ")
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
                            createTextVNode(" Hududlar ")
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
                          createTextVNode(" Hududlar ")
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
        open: unref(areaDialog),
        "onUpdate:open": ($event) => isRef(areaDialog) ? areaDialog.value = $event : null
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
                              _push5(`Hudud qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Hudud qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Yangi hudud qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Yangi hudud qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Hudud qo'shish")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Yangi hudud qo'shish")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Hudud nomi <sup class="text-red-500 font-bold"${_scopeId3}>*</sup>`);
                      } else {
                        return [
                          createTextVNode("Hudud nomi "),
                          createVNode("sup", { class: "text-red-500 font-bold" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(area).name,
                    "onUpdate:modelValue": ($event) => unref(area).name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Joylashuvlar`);
                      } else {
                        return [
                          createTextVNode("Joylashuvlar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="border rounded-md"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Table, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHeader, { class: "border-b" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`#`);
                                  } else {
                                    return [
                                      createTextVNode("#")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Latitude`);
                                  } else {
                                    return [
                                      createTextVNode("Latitude")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Longitude`);
                                  } else {
                                    return [
                                      createTextVNode("Longitude")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("#")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Latitude")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Longitude")
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
                              ssrRenderList(unref(coordinates), (coordinate, index) => {
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
                                            _push7(ssrRenderComponent(_component_Input, {
                                              modelValue: coordinate.latitude,
                                              "onUpdate:modelValue": ($event) => coordinate.latitude = $event
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_Input, {
                                                modelValue: coordinate.latitude,
                                                "onUpdate:modelValue": ($event) => coordinate.latitude = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Input, {
                                              modelValue: coordinate.longitude,
                                              "onUpdate:modelValue": ($event) => coordinate.longitude = $event
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_Input, {
                                                modelValue: coordinate.longitude,
                                                "onUpdate:modelValue": ($event) => coordinate.longitude = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createVNode(_component_Input, {
                                              modelValue: coordinate.latitude,
                                              "onUpdate:modelValue": ($event) => coordinate.latitude = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Input, {
                                              modelValue: coordinate.longitude,
                                              "onUpdate:modelValue": ($event) => coordinate.longitude = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(coordinates), (coordinate, index) => {
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
                                          createVNode(_component_Input, {
                                            modelValue: coordinate.latitude,
                                            "onUpdate:modelValue": ($event) => coordinate.latitude = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Input, {
                                            modelValue: coordinate.longitude,
                                            "onUpdate:modelValue": ($event) => coordinate.longitude = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  createTextVNode("#")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Latitude")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Longitude")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(coordinates), (coordinate, index) => {
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
                                        createVNode(_component_Input, {
                                          modelValue: coordinate.latitude,
                                          "onUpdate:modelValue": ($event) => coordinate.latitude = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Input, {
                                          modelValue: coordinate.longitude,
                                          "onUpdate:modelValue": ($event) => coordinate.longitude = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(_component_Button, { onClick: createArea }, {
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
                          createVNode(_component_Button, { onClick: createArea }, {
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
                            createTextVNode("Hudud qo'shish")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Yangi hudud qo'shish")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Hudud nomi "),
                          createVNode("sup", { class: "text-red-500 font-bold" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(area).name,
                        "onUpdate:modelValue": ($event) => unref(area).name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Joylashuvlar")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "border rounded-md" }, [
                        createVNode(_component_Table, null, {
                          default: withCtx(() => [
                            createVNode(_component_TableHeader, { class: "border-b" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("#")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Latitude")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Longitude")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableBody, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(coordinates), (coordinate, index) => {
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
                                          createVNode(_component_Input, {
                                            modelValue: coordinate.latitude,
                                            "onUpdate:modelValue": ($event) => coordinate.latitude = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Input, {
                                            modelValue: coordinate.longitude,
                                            "onUpdate:modelValue": ($event) => coordinate.longitude = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        createVNode(_component_Button, { onClick: createArea }, {
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
                          createTextVNode("Hudud qo'shish")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Yangi hudud qo'shish")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Hudud nomi "),
                        createVNode("sup", { class: "text-red-500 font-bold" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Input, {
                      modelValue: unref(area).name,
                      "onUpdate:modelValue": ($event) => unref(area).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Joylashuvlar")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "border rounded-md" }, [
                      createVNode(_component_Table, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableHeader, { class: "border-b" }, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("#")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Latitude")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Longitude")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(coordinates), (coordinate, index) => {
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
                                        createVNode(_component_Input, {
                                          modelValue: coordinate.latitude,
                                          "onUpdate:modelValue": ($event) => coordinate.latitude = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Input, {
                                          modelValue: coordinate.longitude,
                                          "onUpdate:modelValue": ($event) => coordinate.longitude = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                      createVNode(_component_Button, { onClick: createArea }, {
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
                        _push4(`Hudud nomi`);
                      } else {
                        return [
                          createTextVNode("Hudud nomi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Joylashuvlar`);
                      } else {
                        return [
                          createTextVNode("Joylashuvlar")
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
                        createTextVNode("Hudud nomi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Joylashuvlar")
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
                  ssrRenderList(unref(areas), (area2, index) => {
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
                                _push5(`${ssrInterpolate(area2.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(area2.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "min-w-32 grid grid-cols-1 md:grid-cols-2 gap-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(area2.coordinates, (coordinate) => {
                                  _push5(`<div class="bg-muted/50 border rounded-md p-2 flex items-center gap-2"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(unref(LucideMapPin), null, null, _parent5, _scopeId4));
                                  _push5(`<div class="flex items-end justify-end flex-col w-full gap-1"${_scopeId4}><p class="rounded-sm text-green-500"${_scopeId4}>${ssrInterpolate(coordinate.latitude)}</p><p class="rounded-sm text-sky-500"${_scopeId4}>${ssrInterpolate(coordinate.longitude)}</p></div></div>`);
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(area2.coordinates, (coordinate) => {
                                    return openBlock(), createBlock("div", { class: "bg-muted/50 border rounded-md p-2 flex items-center gap-2" }, [
                                      createVNode(unref(LucideMapPin)),
                                      createVNode("div", { class: "flex items-end justify-end flex-col w-full gap-1" }, [
                                        createVNode("p", { class: "rounded-sm text-green-500" }, toDisplayString(coordinate.latitude), 1),
                                        createVNode("p", { class: "rounded-sm text-sky-500" }, toDisplayString(coordinate.longitude), 1)
                                      ])
                                    ]);
                                  }), 256))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Button, {
                                  onClick: ($event) => deleteArea(area2),
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
                                    onClick: ($event) => deleteArea(area2),
                                    size: "icon",
                                    variant: "destructive"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(LucideTrash), { size: 16 })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
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
                                createTextVNode(toDisplayString(area2.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "min-w-32 grid grid-cols-1 md:grid-cols-2 gap-2" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(area2.coordinates, (coordinate) => {
                                  return openBlock(), createBlock("div", { class: "bg-muted/50 border rounded-md p-2 flex items-center gap-2" }, [
                                    createVNode(unref(LucideMapPin)),
                                    createVNode("div", { class: "flex items-end justify-end flex-col w-full gap-1" }, [
                                      createVNode("p", { class: "rounded-sm text-green-500" }, toDisplayString(coordinate.latitude), 1),
                                      createVNode("p", { class: "rounded-sm text-sky-500" }, toDisplayString(coordinate.longitude), 1)
                                    ])
                                  ]);
                                }), 256))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_Button, {
                                  onClick: ($event) => deleteArea(area2),
                                  size: "icon",
                                  variant: "destructive"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(LucideTrash), { size: 16 })
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(areas), (area2, index) => {
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
                              createTextVNode(toDisplayString(area2.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "min-w-32 grid grid-cols-1 md:grid-cols-2 gap-2" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(area2.coordinates, (coordinate) => {
                                return openBlock(), createBlock("div", { class: "bg-muted/50 border rounded-md p-2 flex items-center gap-2" }, [
                                  createVNode(unref(LucideMapPin)),
                                  createVNode("div", { class: "flex items-end justify-end flex-col w-full gap-1" }, [
                                    createVNode("p", { class: "rounded-sm text-green-500" }, toDisplayString(coordinate.latitude), 1),
                                    createVNode("p", { class: "rounded-sm text-sky-500" }, toDisplayString(coordinate.longitude), 1)
                                  ])
                                ]);
                              }), 256))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, {
                                onClick: ($event) => deleteArea(area2),
                                size: "icon",
                                variant: "destructive"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(LucideTrash), { size: 16 })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
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
                      createTextVNode("Hudud nomi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Joylashuvlar")
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
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(areas), (area2, index) => {
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
                            createTextVNode(toDisplayString(area2.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "min-w-32 grid grid-cols-1 md:grid-cols-2 gap-2" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(area2.coordinates, (coordinate) => {
                              return openBlock(), createBlock("div", { class: "bg-muted/50 border rounded-md p-2 flex items-center gap-2" }, [
                                createVNode(unref(LucideMapPin)),
                                createVNode("div", { class: "flex items-end justify-end flex-col w-full gap-1" }, [
                                  createVNode("p", { class: "rounded-sm text-green-500" }, toDisplayString(coordinate.latitude), 1),
                                  createVNode("p", { class: "rounded-sm text-sky-500" }, toDisplayString(coordinate.longitude), 1)
                                ])
                              ]);
                            }), 256))
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "text-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              onClick: ($event) => deleteArea(area2),
                              size: "icon",
                              variant: "destructive"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(LucideTrash), { size: 16 })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/areas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=areas-BMomngzt.mjs.map
