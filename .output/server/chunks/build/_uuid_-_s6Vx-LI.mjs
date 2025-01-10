import { _ as _sfc_main$5, a as _sfc_main$2, b as _sfc_main$4, c as _sfc_main$3, d as _sfc_main$1, e as _sfc_main$1$1 } from './BreadcrumbSeparator-Bk7vwz0P.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BteVf0xu.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$7, b as _sfc_main$4$1, c as _sfc_main$2$1, d as _sfc_main$1$2, e as _sfc_main$3$1, f as _sfc_main$5$1 } from './DialogTrigger-Cz1y5McC.mjs';
import { _ as _sfc_main$3$2, a as _sfc_main$1$3, b as _sfc_main$8, c as _sfc_main$2$2 } from './CardTitle-CmQpl_S1.mjs';
import { _ as _sfc_main$1$4, a as _sfc_main$9 } from './Input-BhfeMC11.mjs';
import { _ as _sfc_main$6$2, a as _sfc_main$1$5, b as _sfc_main$a, c as _sfc_main$5$2, d as _sfc_main$4$2 } from './SelectValue-Ca3TaOHb.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, isRef, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { LucideRefreshCcw } from 'lucide-vue-next';
import { u as useHead, a as useRoute, n as navigateTo, t as toast } from './server.mjs';
import { u as useAuth } from './useAuth-Bm8wKJNG.mjs';
import { a as apify } from './apify-Dl3ct05U.mjs';
import { _ as _sfc_main$6 } from './Button-BwGI6xSh.mjs';
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
  __name: "[uuid]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Xodimni tahrirlash"
    });
    const route = useRoute();
    const { user } = useAuth();
    const employee = ref({
      address: "",
      birth_date: "",
      city: "",
      country: "",
      department: {
        active: true,
        id: "0",
        name: "",
        employees: 0
      },
      full_name: "",
      gender: "male",
      handle: "",
      image: "",
      phone: "",
      position: "",
      town: "",
      uuid: "",
      working_time: ""
    });
    const departments = ref([]);
    const dialogOpen = ref(false);
    const editEmployee = async () => {
      var _a;
      let form = new FormData();
      let image = (void 0).getElementById("image");
      form.append("address", employee.value.address);
      form.append("birth_data", employee.value.birth_date);
      form.append("city", employee.value.city);
      form.append("country", employee.value.country);
      form.append("department", employee.value.department.id);
      form.append("full_name", employee.value.full_name);
      form.append("gender", employee.value.gender);
      form.append("handle", employee.value.handle);
      form.append("phone", employee.value.phone);
      form.append("position", employee.value.position);
      form.append("town", employee.value.town);
      form.append("working_time", employee.value.working_time);
      form.append("image", image.src);
      try {
        let response = await $fetch(apify(`employees/employee/${route.params.uuid}/edit`), {
          method: "POST",
          body: form,
          headers: {
            "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
          }
        });
        if (response.status === "success") {
          toast({
            title: "Ajoyib",
            description: "Xodim tahrirlandi"
          });
        }
      } catch {
      }
    };
    const deleteEmployee = async () => {
      var _a;
      try {
        let response = await $fetch(apify(`employees/employee/${employee.value.uuid}/delete`), {
          method: "POST",
          headers: {
            "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
          }
        });
        if (response.status === "success") {
          navigateTo({ name: "admin-employees" });
          toast({
            title: "Ajoyib",
            description: "Xodim ishdan bo'shatildi"
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumb = _sfc_main$5;
      const _component_BreadcrumbList = _sfc_main$2;
      const _component_BreadcrumbItem = _sfc_main$4;
      const _component_BreadcrumbLink = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BreadcrumbSeparator = _sfc_main$1;
      const _component_BreadcrumbPage = _sfc_main$1$1;
      const _component_Button = _sfc_main$6;
      const _component_Dialog = _sfc_main$6$1;
      const _component_DialogTrigger = _sfc_main$7;
      const _component_DialogContent = _sfc_main$4$1;
      const _component_DialogHeader = _sfc_main$2$1;
      const _component_DialogTitle = _sfc_main$1$2;
      const _component_DialogFooter = _sfc_main$3$1;
      const _component_DialogClose = _sfc_main$5$1;
      const _component_Card = _sfc_main$3$2;
      const _component_CardHeader = _sfc_main$1$3;
      const _component_CardTitle = _sfc_main$8;
      const _component_CardContent = _sfc_main$2$2;
      const _component_Label = _sfc_main$1$4;
      const _component_Input = _sfc_main$9;
      const _component_Select = _sfc_main$6$2;
      const _component_SelectTrigger = _sfc_main$1$5;
      const _component_SelectValue = _sfc_main$a;
      const _component_SelectContent = _sfc_main$5$2;
      const _component_SelectItem = _sfc_main$4$2;
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
                        _push4(ssrRenderComponent(_component_BreadcrumbLink, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: { name: "admin-employees" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Xodimlar`);
                                  } else {
                                    return [
                                      createTextVNode("Xodimlar")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, { to: { name: "admin-employees" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("Xodimlar")
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
                              createVNode(_component_NuxtLink, { to: { name: "admin-employees" } }, {
                                default: withCtx(() => [
                                  createTextVNode("Xodimlar")
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
                              _push5(` Xodimni tahrirlash `);
                            } else {
                              return [
                                createTextVNode(" Xodimni tahrirlash ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BreadcrumbPage, null, {
                            default: withCtx(() => [
                              createTextVNode(" Xodimni tahrirlash ")
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
                        createVNode(_component_BreadcrumbLink, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, { to: { name: "admin-employees" } }, {
                              default: withCtx(() => [
                                createTextVNode("Xodimlar")
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
                            createTextVNode(" Xodimni tahrirlash ")
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
                      createVNode(_component_BreadcrumbLink, null, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: { name: "admin-employees" } }, {
                            default: withCtx(() => [
                              createTextVNode("Xodimlar")
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
                          createTextVNode(" Xodimni tahrirlash ")
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
      _push(`<div class="flex justify-between"><div></div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "sm",
        variant: "destructive"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ta&#39;til berish`);
          } else {
            return [
              createTextVNode("Ta'til berish")
            ];
          }
        }),
        _: 1
      }, _parent));
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
                    variant: "destructive"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ishdan bo&#39;shatish`);
                      } else {
                        return [
                          createTextVNode("Ishdan bo'shatish")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      size: "sm",
                      variant: "destructive"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Ishdan bo'shatish")
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
                              _push5(` Xodimni ishdan bo&#39;shatish `);
                            } else {
                              return [
                                createTextVNode(" Xodimni ishdan bo'shatish ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" Xodimni ishdan bo'shatish ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(employee).full_name)} ni ishdan bo&#39;shatishni bo&#39;shatasizmi? `);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogClose, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Yoq`);
                                  } else {
                                    return [
                                      createTextVNode("Yoq")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Yoq")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          onClick: deleteEmployee,
                          variant: "destructive"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Ha`);
                            } else {
                              return [
                                createTextVNode("Ha")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogClose, null, {
                            default: withCtx(() => [
                              createVNode(_component_Button, null, {
                                default: withCtx(() => [
                                  createTextVNode("Yoq")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, {
                            onClick: deleteEmployee,
                            variant: "destructive"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ha")
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
                            createTextVNode(" Xodimni ishdan bo'shatish ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(unref(employee).full_name) + " ni ishdan bo'shatishni bo'shatasizmi? ", 1),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogClose, null, {
                          default: withCtx(() => [
                            createVNode(_component_Button, null, {
                              default: withCtx(() => [
                                createTextVNode("Yoq")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, {
                          onClick: deleteEmployee,
                          variant: "destructive"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Ha")
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
                    variant: "destructive"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Ishdan bo'shatish")
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
                          createTextVNode(" Xodimni ishdan bo'shatish ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(employee).full_name) + " ni ishdan bo'shatishni bo'shatasizmi? ", 1),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogClose, null, {
                        default: withCtx(() => [
                          createVNode(_component_Button, null, {
                            default: withCtx(() => [
                              createTextVNode("Yoq")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Button, {
                        onClick: deleteEmployee,
                        variant: "destructive"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Ha")
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
      _push(ssrRenderComponent(_component_Button, {
        size: "sm",
        onClick: editEmployee
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Saqlash`);
          } else {
            return [
              createTextVNode("Saqlash")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col md:flex-row gap-3">`);
      _push(ssrRenderComponent(_component_Card, { class: "bg-muted/10 flex-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ma&#39;lumotlar`);
                      } else {
                        return [
                          createTextVNode("Ma'lumotlar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Ma'lumotlar")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "space-y-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Familiya Ism Sharifi <span class="text-red-500"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode("Familiya Ism Sharifi "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).full_name,
                    "onUpdate:modelValue": ($event) => unref(employee).full_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-3"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Jinsi <span class="text-red-500"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode("Jinsi "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    "default-value": "male",
                    modelValue: unref(employee).gender,
                    "onUpdate:modelValue": ($event) => unref(employee).gender = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Jinsini tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Jinsini tanlang" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "male" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Erkak`);
                                  } else {
                                    return [
                                      createTextVNode("Erkak")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "female" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Ayol`);
                                  } else {
                                    return [
                                      createTextVNode("Ayol")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectItem, { value: "male" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Erkak")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "female" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ayol")
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
                              createVNode(_component_SelectValue, { placeholder: "Jinsini tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "male" }, {
                                default: withCtx(() => [
                                  createTextVNode("Erkak")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "female" }, {
                                default: withCtx(() => [
                                  createTextVNode("Ayol")
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
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tug&#39;ilgan sanasi <span class="text-red-500"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode("Tug'ilgan sanasi "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).birth_date,
                    "onUpdate:modelValue": ($event) => unref(employee).birth_date = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`ID <span class="text-red-500"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode("ID "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).handle,
                    "onUpdate:modelValue": ($event) => unref(employee).handle = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="absolute flex items-center justify-center w-8 h-8 top-0 right-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(LucideRefreshCcw), {
                    size: 25,
                    class: "hover:bg-accent rounded p-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div></div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Shtat <span class="text-red-500"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode("Shtat "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(employee).working_time)} `);
                  _push3(ssrRenderComponent(_component_Select, {
                    "default-value": "male",
                    modelValue: unref(employee).working_time,
                    "onUpdate:modelValue": ($event) => unref(employee).working_time = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Shtatni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Shtatni tanlang" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`1 shtat`);
                                  } else {
                                    return [
                                      createTextVNode("1 shtat")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "0.5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`0.5 shtat`);
                                  } else {
                                    return [
                                      createTextVNode("0.5 shtat")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectItem, { value: "1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("1 shtat")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "0.5" }, {
                                  default: withCtx(() => [
                                    createTextVNode("0.5 shtat")
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
                              createVNode(_component_SelectValue, { placeholder: "Shtatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("1 shtat")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "0.5" }, {
                                default: withCtx(() => [
                                  createTextVNode("0.5 shtat")
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
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Familiya Ism Sharifi "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).full_name,
                        "onUpdate:modelValue": ($event) => unref(employee).full_name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-3" }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Jinsi "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Select, {
                          "default-value": "male",
                          modelValue: unref(employee).gender,
                          "onUpdate:modelValue": ($event) => unref(employee).gender = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectValue, { placeholder: "Jinsini tanlang" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectItem, { value: "male" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Erkak")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "female" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ayol")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Tug'ilgan sanasi "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).birth_date,
                          "onUpdate:modelValue": ($event) => unref(employee).birth_date = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("ID "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_Input, {
                            modelValue: unref(employee).handle,
                            "onUpdate:modelValue": ($event) => unref(employee).handle = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "absolute flex items-center justify-center w-8 h-8 top-0 right-0" }, [
                            createVNode(unref(LucideRefreshCcw), {
                              size: 25,
                              class: "hover:bg-accent rounded p-1"
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Shtat "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(unref(employee).working_time) + " ", 1),
                      createVNode(_component_Select, {
                        "default-value": "male",
                        modelValue: unref(employee).working_time,
                        "onUpdate:modelValue": ($event) => unref(employee).working_time = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Shtatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "1" }, {
                                default: withCtx(() => [
                                  createTextVNode("1 shtat")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "0.5" }, {
                                default: withCtx(() => [
                                  createTextVNode("0.5 shtat")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Ma'lumotlar")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "space-y-5" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Familiya Ism Sharifi "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Input, {
                      modelValue: unref(employee).full_name,
                      "onUpdate:modelValue": ($event) => unref(employee).full_name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-3" }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Jinsi "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        "default-value": "male",
                        modelValue: unref(employee).gender,
                        "onUpdate:modelValue": ($event) => unref(employee).gender = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Jinsini tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "male" }, {
                                default: withCtx(() => [
                                  createTextVNode("Erkak")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "female" }, {
                                default: withCtx(() => [
                                  createTextVNode("Ayol")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Tug'ilgan sanasi "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).birth_date,
                        "onUpdate:modelValue": ($event) => unref(employee).birth_date = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("ID "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_Input, {
                          modelValue: unref(employee).handle,
                          "onUpdate:modelValue": ($event) => unref(employee).handle = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "absolute flex items-center justify-center w-8 h-8 top-0 right-0" }, [
                          createVNode(unref(LucideRefreshCcw), {
                            size: 25,
                            class: "hover:bg-accent rounded p-1"
                          })
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Shtat "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(unref(employee).working_time) + " ", 1),
                    createVNode(_component_Select, {
                      "default-value": "male",
                      modelValue: unref(employee).working_time,
                      "onUpdate:modelValue": ($event) => unref(employee).working_time = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Shtatni tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectItem, { value: "1" }, {
                              default: withCtx(() => [
                                createTextVNode("1 shtat")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "0.5" }, {
                              default: withCtx(() => [
                                createTextVNode("0.5 shtat")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "bg-muted/10 w-64" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Rasmi <span class="text-red-500"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode("Rasmi "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Rasmi "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-3"${_scopeId2}><img id="image" class="w-56 h-56 rounded"${ssrRenderAttr("src", _ctx.$config.public.base + unref(employee).image)} alt=""${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("img", {
                        id: "image",
                        class: "w-56 h-56 rounded",
                        src: _ctx.$config.public.base + unref(employee).image,
                        alt: ""
                      }, null, 8, ["src"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Rasmi "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-3" }, [
                    createVNode("img", {
                      id: "image",
                      class: "w-56 h-56 rounded",
                      src: _ctx.$config.public.base + unref(employee).image,
                      alt: ""
                    }, null, 8, ["src"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "bg-muted/10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Qo&#39;shimcha ma&#39;lumotlar`);
                      } else {
                        return [
                          createTextVNode("Qo'shimcha ma'lumotlar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Qo'shimcha ma'lumotlar")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 gap-3"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;lim <span class="text-red-500"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode("Bo'lim "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(employee).department.id,
                    "onUpdate:modelValue": ($event) => unref(employee).department.id = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Bo'limni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Bo'limni tanlang" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(departments), (department) => {
                                _push5(ssrRenderComponent(_component_SelectItem, {
                                  value: department.id
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(department.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(department.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    value: department.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(department.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  value: department.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(department.name), 1)
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Lavozimi <span class="text-red-500"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode("Lavozimi "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).position,
                    "onUpdate:modelValue": ($event) => unref(employee).position = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-3"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Telefon raqami`);
                      } else {
                        return [
                          createTextVNode("Telefon raqami")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).phone,
                    "onUpdate:modelValue": ($event) => unref(employee).phone = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Bo'lim "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Select, {
                          modelValue: unref(employee).department.id,
                          "onUpdate:modelValue": ($event) => unref(employee).department.id = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectValue, { placeholder: "Bo'limni tanlang" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    value: department.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(department.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Lavozimi "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).position,
                          "onUpdate:modelValue": ($event) => unref(employee).position = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Telefon raqami")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).phone,
                          "onUpdate:modelValue": ($event) => unref(employee).phone = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Qo'shimcha ma'lumotlar")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Bo'lim "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        modelValue: unref(employee).department.id,
                        "onUpdate:modelValue": ($event) => unref(employee).department.id = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Bo'limni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  value: department.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(department.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Lavozimi "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).position,
                        "onUpdate:modelValue": ($event) => unref(employee).position = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Telefon raqami")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).phone,
                        "onUpdate:modelValue": ($event) => unref(employee).phone = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(ssrRenderComponent(_component_Card, { class: "bg-muted/10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Manzili`);
                      } else {
                        return [
                          createTextVNode("Manzili")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Manzili")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 gap-3"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Davlat`);
                      } else {
                        return [
                          createTextVNode("Davlat")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    "default-value": "o'zbekiston",
                    modelValue: unref(employee).country,
                    "onUpdate:modelValue": ($event) => unref(employee).country = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Davlatni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Davlatni tanlang" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "o'zbeksiton" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`O&#39;zbekiston`);
                                  } else {
                                    return [
                                      createTextVNode("O'zbekiston")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "rossiya" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Rossiya`);
                                  } else {
                                    return [
                                      createTextVNode("Rossiya")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectItem, { value: "o'zbeksiton" }, {
                                  default: withCtx(() => [
                                    createTextVNode("O'zbekiston")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "rossiya" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Rossiya")
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
                              createVNode(_component_SelectValue, { placeholder: "Davlatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "o'zbeksiton" }, {
                                default: withCtx(() => [
                                  createTextVNode("O'zbekiston")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "rossiya" }, {
                                default: withCtx(() => [
                                  createTextVNode("Rossiya")
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
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Viloyat`);
                      } else {
                        return [
                          createTextVNode("Viloyat")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).city,
                    "onUpdate:modelValue": ($event) => unref(employee).city = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-3"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tuman`);
                      } else {
                        return [
                          createTextVNode("Tuman")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).town,
                    "onUpdate:modelValue": ($event) => unref(employee).town = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Manzil`);
                      } else {
                        return [
                          createTextVNode("Manzil")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).address,
                    "onUpdate:modelValue": ($event) => unref(employee).address = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Davlat")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Select, {
                          "default-value": "o'zbekiston",
                          modelValue: unref(employee).country,
                          "onUpdate:modelValue": ($event) => unref(employee).country = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectValue, { placeholder: "Davlatni tanlang" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectItem, { value: "o'zbeksiton" }, {
                                  default: withCtx(() => [
                                    createTextVNode("O'zbekiston")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "rossiya" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Rossiya")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Viloyat")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).city,
                          "onUpdate:modelValue": ($event) => unref(employee).city = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Tuman")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).town,
                          "onUpdate:modelValue": ($event) => unref(employee).town = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Manzil")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).address,
                          "onUpdate:modelValue": ($event) => unref(employee).address = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Manzili")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Davlat")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        "default-value": "o'zbekiston",
                        modelValue: unref(employee).country,
                        "onUpdate:modelValue": ($event) => unref(employee).country = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Davlatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "o'zbeksiton" }, {
                                default: withCtx(() => [
                                  createTextVNode("O'zbekiston")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "rossiya" }, {
                                default: withCtx(() => [
                                  createTextVNode("Rossiya")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Viloyat")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).city,
                        "onUpdate:modelValue": ($event) => unref(employee).city = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Tuman")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).town,
                        "onUpdate:modelValue": ($event) => unref(employee).town = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Manzil")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).address,
                        "onUpdate:modelValue": ($event) => unref(employee).address = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/employees/[uuid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_uuid_-_s6Vx-LI.mjs.map
