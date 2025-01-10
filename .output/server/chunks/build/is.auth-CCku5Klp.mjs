import { e as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useAuth } from './useAuth-Bm8wKJNG.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'class-variance-authority';
import 'radix-vue';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const is_auth = defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuth();
  if (user.value === null) {
    return navigateTo({ name: "admin-auth-login" });
  }
});

export { is_auth as default };
//# sourceMappingURL=is.auth-CCku5Klp.mjs.map
