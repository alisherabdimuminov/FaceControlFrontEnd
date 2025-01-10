import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { u as useHead, n as navigateTo } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { LucidePartyPopper } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './Button-BwGI6xSh.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'class-variance-authority';
import 'radix-vue';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const _imports_0 = "" + buildAssetsURL("passed.GwM5pNud.gif");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "passed",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Davomatdan o'tdingiz"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen flex flex-col gap-10 items-center justify-center" }, _attrs))}><img class="w-32 h-32"${ssrRenderAttr("src", _imports_0)} alt=""><p class="flex items-center gap-3 text-2xl text-cyan-500 font-bold">`);
      _push(ssrRenderComponent(unref(LucidePartyPopper), { size: 30 }, null, _parent));
      _push(` Davomatdan o&#39;tdingiz</p>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ortga`);
          } else {
            return [
              createTextVNode("Ortga")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/passed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=passed-C55g7unI.mjs.map
