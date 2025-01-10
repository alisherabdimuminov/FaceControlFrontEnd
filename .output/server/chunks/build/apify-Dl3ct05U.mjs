import { b as useRuntimeConfig } from './server.mjs';

function apify(path) {
  const config = useRuntimeConfig();
  return `${config.public.api}/${path}/`;
}

export { apify as a };
//# sourceMappingURL=apify-Dl3ct05U.mjs.map
