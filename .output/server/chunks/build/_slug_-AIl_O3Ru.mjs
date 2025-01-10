import { _ as __nuxt_component_3 } from './client-only-BQwXfBHM.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { today, getLocalTimeZone } from '@internationalized/date';
import { u as useAuth } from './useAuth-Bm8wKJNG.mjs';
import { a as useRoute } from './server.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    useRoute();
    ref([]);
    ref({});
    const end = today(getLocalTimeZone());
    const start = end.subtract({ days: 7 });
    ref({
      start,
      end
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-3 p-5 md:p-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/reports/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-AIl_O3Ru.mjs.map
