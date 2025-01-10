import { defineComponent, ref, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { LucideRefreshCw } from 'lucide-vue-next';
import { a as useRoute } from './server.mjs';
import { _ as _sfc_main$1 } from './Button-BwGI6xSh.mjs';
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
import 'radix-vue';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "faceid",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isLoading = ref(true);
    ref(true);
    let centerText = ref("Kameraga ruxsat bering");
    route.query.passport || "";
    let reload = ref(false);
    let color = ref("white");
    const reloadFunc = () => {
      (void 0).reload();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      _push(`<!--[--><div class=""><div class="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-[-1]"><p class="${ssrRenderClass(["text-" + unref(color) + "-500", "text-3xl font-bold text-center"])}">${ssrInterpolate(unref(centerText))}</p></div>`);
      if (unref(reload)) {
        _push(ssrRenderComponent(_component_Button, {
          onClick: reloadFunc,
          class: "fixed bottom-10 left-[40%] z-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Qayta urinish`);
            } else {
              return [
                createTextVNode("Qayta urinish")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<canvas id="canvas" class="fixed top-0 left-0 w-full h-full z-[-1]"></canvas><canvas id="photo" style="${ssrRenderStyle({ "display": "none" })}"></canvas><video id="video" class="fixed top-0 left-0 w-full h-full z-[-10]" autoplay playsinline loop></video></div><div class="${ssrRenderClass([unref(isLoading) ? "flex" : "hidden", "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-accent/70"])}">`);
      _push(ssrRenderComponent(unref(LucideRefreshCw), {
        class: "animate-spin",
        size: 50
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faceid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faceid-DNCiW6C-.mjs.map
