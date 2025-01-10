import { ref, computed } from 'vue';
import { p as parse, q as getRequestHeader, r as destr, v as klona, x as isEqual, y as setCookie, z as getCookie, A as deleteCookie } from '../nitro/nitro.mjs';
import { h as useNuxtApp } from './server.mjs';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2, _b;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  (_a2 = opts.filter) != null ? _a2 : opts.filter = (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : (_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
function useAuth() {
  const userCookie = useCookie("user", {
    watch: "shallow",
    path: "/",
    default: () => null
  });
  const user = computed(() => {
    return userCookie.value;
  });
  const login = (data) => {
    userCookie.value = data;
  };
  const logout = () => {
    userCookie.value = null;
    (void 0).reload();
  };
  return {
    user,
    login,
    logout
  };
}

export { useAuth as u };
//# sourceMappingURL=useAuth-Bm8wKJNG.mjs.map
