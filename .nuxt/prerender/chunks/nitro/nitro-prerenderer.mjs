globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file://C:/Fantacalcio/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, assertMethod, readBody, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file://C:/Fantacalcio/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://C:/Fantacalcio/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Fantacalcio/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Fantacalcio/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Fantacalcio/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Fantacalcio/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Fantacalcio/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Fantacalcio/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Fantacalcio/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Fantacalcio/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Fantacalcio/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Fantacalcio/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Fantacalcio/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/Fantacalcio/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "supabase": {
      "url": "https://ltdyvtatkzdpenvnrxls.supabase.co",
      "key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0ZHl2dGF0a3pkcGVudm5yeGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxODUxNjIsImV4cCI6MjAwNTc2MTE2Mn0.a2xyJMh9VAwbYabsq6--GYAPlC75Sb_Guk6Qnbn-0fY",
      "client": {
        "auth": {
          "detectSessionInUrl": true,
          "persistSession": true,
          "autoRefreshToken": true
        }
      },
      "redirect": false,
      "cookies": {
        "name": "sb",
        "lifetime": 28800,
        "domain": "",
        "path": "/",
        "sameSite": "lax"
      }
    }
  },
  "supabase": {
    "serviceKey": ""
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Fantacalcio/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Fantacalcio","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Fantacalcio\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Fantacalcio\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Fantacalcio\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"d3b-ZLXTzgULTQmEHFzF/6MTVzS/5cs\"",
    "mtime": "2023-08-11T14:26:16.552Z",
    "size": 3387,
    "path": "../../.output/public/favicon.ico"
  },
  "/logo/Atalanta.png": {
    "type": "image/png",
    "etag": "\"2dca-rhW1yE5ncREeQLo+y09iE2ctDhA\"",
    "mtime": "2023-08-11T14:26:16.559Z",
    "size": 11722,
    "path": "../../.output/public/logo/Atalanta.png"
  },
  "/logo/Bologna.png": {
    "type": "image/png",
    "etag": "\"22fa-SvIapVq+cYUKlU+kZrwrJlVaEsQ\"",
    "mtime": "2023-08-11T14:26:16.559Z",
    "size": 8954,
    "path": "../../.output/public/logo/Bologna.png"
  },
  "/logo/Cagliari.png": {
    "type": "image/png",
    "etag": "\"3dad-KOOP3WKzB6fPcSGh4SI81mqsK/w\"",
    "mtime": "2023-08-11T14:26:16.559Z",
    "size": 15789,
    "path": "../../.output/public/logo/Cagliari.png"
  },
  "/logo/Empoli.png": {
    "type": "image/png",
    "etag": "\"33df-z0DYpSC9F34q5tasc4laHG4mAa0\"",
    "mtime": "2023-08-11T14:26:16.559Z",
    "size": 13279,
    "path": "../../.output/public/logo/Empoli.png"
  },
  "/logo/Fiorentina.png": {
    "type": "image/png",
    "etag": "\"2447-E2oJBxujJmqjhEiUok+fGL4d3e4\"",
    "mtime": "2023-08-11T14:26:16.562Z",
    "size": 9287,
    "path": "../../.output/public/logo/Fiorentina.png"
  },
  "/logo/Frosinone.png": {
    "type": "image/png",
    "etag": "\"3e88-VbA1yiz90eiGO9RSG5lm03JUa2U\"",
    "mtime": "2023-08-11T14:26:16.562Z",
    "size": 16008,
    "path": "../../.output/public/logo/Frosinone.png"
  },
  "/logo/Genoa.png": {
    "type": "image/png",
    "etag": "\"1ee1-djlHPNesj+yQFQem8jaLJis7l88\"",
    "mtime": "2023-08-11T14:26:16.562Z",
    "size": 7905,
    "path": "../../.output/public/logo/Genoa.png"
  },
  "/logo/Inter.png": {
    "type": "image/png",
    "etag": "\"2db9-gh52+BQBGt6ZJK6zX4wxG9Kixks\"",
    "mtime": "2023-08-11T14:26:16.562Z",
    "size": 11705,
    "path": "../../.output/public/logo/Inter.png"
  },
  "/logo/Juventus.png": {
    "type": "image/png",
    "etag": "\"e60-ciQ/nludzFAztAuwv1rcYZznet4\"",
    "mtime": "2023-08-11T14:26:16.562Z",
    "size": 3680,
    "path": "../../.output/public/logo/Juventus.png"
  },
  "/logo/Lazio.png": {
    "type": "image/png",
    "etag": "\"2126-WJclihHi2aSFBshlZG468sVBsio\"",
    "mtime": "2023-08-11T14:26:16.562Z",
    "size": 8486,
    "path": "../../.output/public/logo/Lazio.png"
  },
  "/logo/Lecce.png": {
    "type": "image/png",
    "etag": "\"48ef-JOxydCRC6K/pAUPZ9OZbJ3b28gw\"",
    "mtime": "2023-08-11T14:26:16.567Z",
    "size": 18671,
    "path": "../../.output/public/logo/Lecce.png"
  },
  "/logo/Milan.png": {
    "type": "image/png",
    "etag": "\"3020-UxfgyMb7Rf+ibcAqpMq29wkTLTY\"",
    "mtime": "2023-08-11T14:26:16.567Z",
    "size": 12320,
    "path": "../../.output/public/logo/Milan.png"
  },
  "/logo/Monza.png": {
    "type": "image/png",
    "etag": "\"3e41-Z7s1zKJkY2NsxNkbsoW6q6dNnUQ\"",
    "mtime": "2023-08-11T14:26:16.567Z",
    "size": 15937,
    "path": "../../.output/public/logo/Monza.png"
  },
  "/logo/Napoli.png": {
    "type": "image/png",
    "etag": "\"381d-QQkvXUgvdqvhkAHjY3sEGTZkBKY\"",
    "mtime": "2023-08-11T14:26:16.567Z",
    "size": 14365,
    "path": "../../.output/public/logo/Napoli.png"
  },
  "/logo/Roma.png": {
    "type": "image/png",
    "etag": "\"3a84-OdmYsEug/vjdQ9AdvHhsXfu8X5U\"",
    "mtime": "2023-08-11T14:26:16.567Z",
    "size": 14980,
    "path": "../../.output/public/logo/Roma.png"
  },
  "/logo/Salernitana.png": {
    "type": "image/png",
    "etag": "\"2fb4-kN5zWmTcOdwPuPI5BBU7udGDOQc\"",
    "mtime": "2023-08-11T14:26:16.567Z",
    "size": 12212,
    "path": "../../.output/public/logo/Salernitana.png"
  },
  "/logo/Sassuolo.png": {
    "type": "image/png",
    "etag": "\"3935-rGoUFYHpjdMvq1cLg7EWeq1Slzg\"",
    "mtime": "2023-08-11T14:26:16.572Z",
    "size": 14645,
    "path": "../../.output/public/logo/Sassuolo.png"
  },
  "/logo/Torino.png": {
    "type": "image/png",
    "etag": "\"3ae9-cMrQYfwAmpg9Kl6cDsCZZ//P36M\"",
    "mtime": "2023-08-11T14:26:16.572Z",
    "size": 15081,
    "path": "../../.output/public/logo/Torino.png"
  },
  "/logo/Udinese.png": {
    "type": "image/png",
    "etag": "\"5ad4-s6gXdJrHospKmpNIGUoQ0J1XmgY\"",
    "mtime": "2023-08-11T14:26:16.572Z",
    "size": 23252,
    "path": "../../.output/public/logo/Udinese.png"
  },
  "/logo/Verona.png": {
    "type": "image/png",
    "etag": "\"42bc-O7kU2ZClKMXcKmGExiOWvKCjc3I\"",
    "mtime": "2023-08-11T14:26:16.572Z",
    "size": 17084,
    "path": "../../.output/public/logo/Verona.png"
  },
  "/font/AlloyInk.otf": {
    "type": "font/otf",
    "etag": "\"5888-Zr+f0EmbUy7tns0Jj0s75A6Ypt4\"",
    "mtime": "2023-08-11T14:26:16.557Z",
    "size": 22664,
    "path": "../../.output/public/font/AlloyInk.otf"
  },
  "/font/AlloyInk.ttf": {
    "type": "font/ttf",
    "etag": "\"5c5c-d4perZgl4Sg3nezNMzEJGeGmDTg\"",
    "mtime": "2023-08-11T14:26:16.557Z",
    "size": 23644,
    "path": "../../.output/public/font/AlloyInk.ttf"
  },
  "/_nuxt/default.9faa129a.js": {
    "type": "application/javascript",
    "etag": "\"14c5-fBEb23AMJ1cHh81769kX/Xv5dvc\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 5317,
    "path": "../../.output/public/_nuxt/default.9faa129a.js"
  },
  "/_nuxt/entry.c86a6b1a.js": {
    "type": "application/javascript",
    "etag": "\"400e6-Z0m8jxHQb7TuFh0PghH9zXd+pHg\"",
    "mtime": "2023-08-11T14:41:06.374Z",
    "size": 262374,
    "path": "../../.output/public/_nuxt/entry.c86a6b1a.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 3630,
    "path": "../../.output/public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.96ba5040.js": {
    "type": "application/javascript",
    "etag": "\"8d2-pc5IdKeOOG8Z85LzxEh0qEp/kn0\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 2258,
    "path": "../../.output/public/_nuxt/error-404.96ba5040.js"
  },
  "/_nuxt/error-500.1f941bec.js": {
    "type": "application/javascript",
    "etag": "\"756-V1f2B6hYgzkhTkHnuBJMM9sIaEo\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 1878,
    "path": "../../.output/public/_nuxt/error-500.1f941bec.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 1950,
    "path": "../../.output/public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/fetch.9ef51641.js": {
    "type": "application/javascript",
    "etag": "\"d24-exVJ1slU882n8FKyAwlrsg2Sop4\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 3364,
    "path": "../../.output/public/_nuxt/fetch.9ef51641.js"
  },
  "/_nuxt/index.01a4c432.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d-RT7nbhlo33ctUgBktW/X0TM4awc\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 77,
    "path": "../../.output/public/_nuxt/index.01a4c432.css"
  },
  "/_nuxt/index.0c587825.js": {
    "type": "application/javascript",
    "etag": "\"a6b-p7CAD2VoWUTCB7+nzN0/1teYF0o\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 2667,
    "path": "../../.output/public/_nuxt/index.0c587825.js"
  },
  "/_nuxt/index.19eecba7.js": {
    "type": "application/javascript",
    "etag": "\"792-jXX09OxOHTl4EoZQJYZEHcHhAyY\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 1938,
    "path": "../../.output/public/_nuxt/index.19eecba7.js"
  },
  "/_nuxt/index.2e625b74.js": {
    "type": "application/javascript",
    "etag": "\"45b-DXifneOBi9+y48zgk+r8ocTtOOQ\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 1115,
    "path": "../../.output/public/_nuxt/index.2e625b74.js"
  },
  "/_nuxt/index.2ead7b89.js": {
    "type": "application/javascript",
    "etag": "\"8dc-Mn7yCNHwV0rQfKqzGyjkJDASAOM\"",
    "mtime": "2023-08-11T14:41:06.367Z",
    "size": 2268,
    "path": "../../.output/public/_nuxt/index.2ead7b89.js"
  },
  "/_nuxt/index.577e77d8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ef-g9hLBCICoRWuYPdZBgb/NkhhIVs\"",
    "mtime": "2023-08-11T14:41:06.361Z",
    "size": 495,
    "path": "../../.output/public/_nuxt/index.577e77d8.css"
  },
  "/_nuxt/index.5c42a831.js": {
    "type": "application/javascript",
    "etag": "\"b2b-YWcGcF8nJr2HXsAbTLS5eBP2mO8\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 2859,
    "path": "../../.output/public/_nuxt/index.5c42a831.js"
  },
  "/_nuxt/index.5fcc54c9.js": {
    "type": "application/javascript",
    "etag": "\"2001-Yw0BDos5wnQqImVMmrxwyb0gLS4\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 8193,
    "path": "../../.output/public/_nuxt/index.5fcc54c9.js"
  },
  "/_nuxt/index.650fd38f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"84-9pyVTWRqfkhCa0Po24HR1G7h4fg\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 132,
    "path": "../../.output/public/_nuxt/index.650fd38f.css"
  },
  "/_nuxt/index.7a0238d8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d-NMaNmPN30tPHe3s9L/DM8ww81TE\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 77,
    "path": "../../.output/public/_nuxt/index.7a0238d8.css"
  },
  "/_nuxt/index.93a669ac.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ba-Cp4yYYqeZqH3zdgVnDYs97IgECs\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 442,
    "path": "../../.output/public/_nuxt/index.93a669ac.css"
  },
  "/_nuxt/index.9f94854d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"84-Ecj/gx3s9wJduHVSgxTekgn+tdY\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 132,
    "path": "../../.output/public/_nuxt/index.9f94854d.css"
  },
  "/_nuxt/index.c95e690e.js": {
    "type": "application/javascript",
    "etag": "\"242-Ixa97s6dbF/1m6JLdSJj01xrNck\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 578,
    "path": "../../.output/public/_nuxt/index.c95e690e.js"
  },
  "/_nuxt/index.cb779d0c.js": {
    "type": "application/javascript",
    "etag": "\"949-zn0cQ0gtBGsCVOUKQ0LcmdgW0pw\"",
    "mtime": "2023-08-11T14:41:06.371Z",
    "size": 2377,
    "path": "../../.output/public/_nuxt/index.cb779d0c.js"
  },
  "/_nuxt/index.d72a8cb4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"30d-O0Bvk1cXMlZoQZYFusTu/wOG6+0\"",
    "mtime": "2023-08-11T14:41:06.341Z",
    "size": 781,
    "path": "../../.output/public/_nuxt/index.d72a8cb4.css"
  },
  "/_nuxt/index.d9911f9f.js": {
    "type": "application/javascript",
    "etag": "\"b2b-3a3RnC0iaYdCrjypD5X+2ng77tY\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 2859,
    "path": "../../.output/public/_nuxt/index.d9911f9f.js"
  },
  "/_nuxt/index.f9d62110.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d-eo5vejSq7tZKOKxK8SVgTKAJe8k\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 77,
    "path": "../../.output/public/_nuxt/index.f9d62110.css"
  },
  "/_nuxt/nuxt-link.0a4ba090.js": {
    "type": "application/javascript",
    "etag": "\"10f7-bw6+AWz8OHTL0fQ/f6V4WET8HxE\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 4343,
    "path": "../../.output/public/_nuxt/nuxt-link.0a4ba090.js"
  },
  "/_nuxt/PlayerCard.a664555b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2a1-/yxLj8hsu8Np8K/+6KO5+bA9hhA\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 673,
    "path": "../../.output/public/_nuxt/PlayerCard.a664555b.css"
  },
  "/_nuxt/PlayerCard.b0dfc2df.js": {
    "type": "application/javascript",
    "etag": "\"4a7-g1wxSABo/xK67/Degl97Wf2G0sI\"",
    "mtime": "2023-08-11T14:41:06.371Z",
    "size": 1191,
    "path": "../../.output/public/_nuxt/PlayerCard.b0dfc2df.js"
  },
  "/_nuxt/_id_.10be297a.js": {
    "type": "application/javascript",
    "etag": "\"25b-qxrYIF32wLkpiK89p481RR25qag\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 603,
    "path": "../../.output/public/_nuxt/_id_.10be297a.js"
  },
  "/_nuxt/_id_.12bb695b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"84-xZxZATzQZP/TlpHahbeDGQo3q5s\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 132,
    "path": "../../.output/public/_nuxt/_id_.12bb695b.css"
  },
  "/_nuxt/_id_.1e76e1c0.js": {
    "type": "application/javascript",
    "etag": "\"ade-p1a9n4wy5baIh0gfd9QxX0r7Fec\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 2782,
    "path": "../../.output/public/_nuxt/_id_.1e76e1c0.js"
  },
  "/_nuxt/_id_.2264961a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d-clhh04KqPOc1Vb1XOGAAwJfAzGQ\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 77,
    "path": "../../.output/public/_nuxt/_id_.2264961a.css"
  },
  "/_nuxt/_id_.231c3758.js": {
    "type": "application/javascript",
    "etag": "\"113a-y21F1QMoIu59P+jSns3RUcZbxH4\"",
    "mtime": "2023-08-11T14:41:06.371Z",
    "size": 4410,
    "path": "../../.output/public/_nuxt/_id_.231c3758.js"
  },
  "/_nuxt/_id_.2d6891b8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d-QxSis7knVkZe7axRHjkobMhRS4c\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 77,
    "path": "../../.output/public/_nuxt/_id_.2d6891b8.css"
  },
  "/_nuxt/_id_.328f9a53.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c7-87a22GBwSROVqX8YuEb+P+6X/00\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 199,
    "path": "../../.output/public/_nuxt/_id_.328f9a53.css"
  },
  "/_nuxt/_id_.42f2ac69.js": {
    "type": "application/javascript",
    "etag": "\"113a-Rdi7y0Cxv9+UJiPfLXxhP4cHz74\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 4410,
    "path": "../../.output/public/_nuxt/_id_.42f2ac69.js"
  },
  "/_nuxt/_id_.4409bdbd.js": {
    "type": "application/javascript",
    "etag": "\"627-vbTG6iHXyc575pdTWlKkBj7AoTY\"",
    "mtime": "2023-08-11T14:41:06.371Z",
    "size": 1575,
    "path": "../../.output/public/_nuxt/_id_.4409bdbd.js"
  },
  "/_nuxt/_id_.5015a194.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"84-mRDW4h7kNHoUiI/XPN+KAjLSUhg\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 132,
    "path": "../../.output/public/_nuxt/_id_.5015a194.css"
  },
  "/_nuxt/_id_.58a5dc7a.js": {
    "type": "application/javascript",
    "etag": "\"c00-j5jxWG7F5OUAj+bRIUUhJWWELMo\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 3072,
    "path": "../../.output/public/_nuxt/_id_.58a5dc7a.js"
  },
  "/_nuxt/_id_.6d2ad344.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"328-ayW9KCITYrMHLtSu7kaWwOZ09rs\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 808,
    "path": "../../.output/public/_nuxt/_id_.6d2ad344.css"
  },
  "/_nuxt/_id_.9b3104dd.js": {
    "type": "application/javascript",
    "etag": "\"f22-Y0A0ZLx31Sd+gQ9cfnYYg0r3zM4\"",
    "mtime": "2023-08-11T14:41:06.371Z",
    "size": 3874,
    "path": "../../.output/public/_nuxt/_id_.9b3104dd.js"
  },
  "/_nuxt/_id_.a3046f57.js": {
    "type": "application/javascript",
    "etag": "\"5cb7-ZO7tItV7/dRQB7x04XuUxWZJEFY\"",
    "mtime": "2023-08-11T14:41:06.369Z",
    "size": 23735,
    "path": "../../.output/public/_nuxt/_id_.a3046f57.js"
  },
  "/_nuxt/_id_.adf66726.js": {
    "type": "application/javascript",
    "etag": "\"301-bhyCYcBLs8JOTTTNTynn4zv4V4o\"",
    "mtime": "2023-08-11T14:41:06.367Z",
    "size": 769,
    "path": "../../.output/public/_nuxt/_id_.adf66726.js"
  },
  "/_nuxt/_id_.e8706182.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"247-Lq49ljX55Yh6pNV2BCvwKv2a0wk\"",
    "mtime": "2023-08-11T14:41:06.363Z",
    "size": 583,
    "path": "../../.output/public/_nuxt/_id_.e8706182.css"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const config = useRuntimeConfig().public;
const _Y5kF7b = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const body = await readBody(event);
  const cookieOptions = config.supabase.cookies;
  const { event: signEvent, session } = body;
  if (!event) {
    throw new Error("Auth event missing!");
  }
  if (signEvent === "SIGNED_IN" || signEvent === "TOKEN_REFRESHED") {
    if (!session) {
      throw new Error("Auth session missing!");
    }
    setCookie(
      event,
      `${cookieOptions.name}-access-token`,
      session.access_token,
      {
        domain: cookieOptions.domain,
        maxAge: cookieOptions.lifetime ?? 0,
        path: cookieOptions.path,
        sameSite: cookieOptions.sameSite
      }
    );
    setCookie(event, `${cookieOptions.name}-refresh-token`, session.refresh_token, {
      domain: cookieOptions.domain,
      maxAge: cookieOptions.lifetime ?? 0,
      path: cookieOptions.path,
      sameSite: cookieOptions.sameSite
    });
    if (session.provider_token) {
      setCookie(event, `${cookieOptions.name}-provider-token`, session.provider_token, {
        domain: cookieOptions.domain,
        maxAge: cookieOptions.lifetime ?? 0,
        path: cookieOptions.path,
        sameSite: cookieOptions.sameSite
      });
    }
    if (session.provider_refresh_token) {
      setCookie(event, `${cookieOptions.name}-provider-refresh-token`, session.provider_refresh_token, {
        domain: cookieOptions.domain,
        maxAge: cookieOptions.lifetime ?? 0,
        path: cookieOptions.path,
        sameSite: cookieOptions.sameSite
      });
    }
  }
  if (signEvent === "SIGNED_OUT") {
    setCookie(event, `${cookieOptions.name}-access-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
    setCookie(event, `${cookieOptions.name}-refresh-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
  }
  return "auth cookie set";
});

const _lazy_ZrU7H7 = () => import('../index.get.mjs');
const _lazy_JWxj3n = () => import('../index.get2.mjs');
const _lazy_ZTF9FM = () => import('../_id_.mjs');
const _lazy_vxFONV = () => import('../_id_2.mjs');
const _lazy_ZY0JsW = () => import('../index.get3.mjs');
const _lazy_SeiBdb = () => import('../_id_3.mjs');
const _lazy_EbhRfO = () => import('../index.get4.mjs');
const _lazy_EPGZw8 = () => import('../_id_4.mjs');
const _lazy_lXCTV1 = () => import('../index.get5.mjs');
const _lazy_I5At9i = () => import('../_id_5.mjs');
const _lazy_lNOqij = () => import('../index.get6.mjs');
const _lazy_brE4Sl = () => import('../_id_6.mjs');
const _lazy_wWxOT8 = () => import('../index.get7.mjs');
const _lazy_6uuyfW = () => import('../index.get8.mjs');
const _lazy_x5aTfJ = () => import('../_id_7.mjs');
const _lazy_FvXHLm = () => import('../_id_8.mjs');
const _lazy_CkbKHV = () => import('../_id_9.mjs');
const _lazy_RXYciV = () => import('../index.get9.mjs');
const _lazy_zr3rz1 = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/calendar/grid', handler: _lazy_ZrU7H7, lazy: true, middleware: false, method: "get" },
  { route: '/api/calendar', handler: _lazy_JWxj3n, lazy: true, middleware: false, method: "get" },
  { route: '/api/calendar/team/:id', handler: _lazy_ZTF9FM, lazy: true, middleware: false, method: undefined },
  { route: '/api/championship/:id', handler: _lazy_vxFONV, lazy: true, middleware: false, method: undefined },
  { route: '/api/championship', handler: _lazy_ZY0JsW, lazy: true, middleware: false, method: "get" },
  { route: '/api/player/:id', handler: _lazy_SeiBdb, lazy: true, middleware: false, method: undefined },
  { route: '/api/player/A', handler: _lazy_EbhRfO, lazy: true, middleware: false, method: "get" },
  { route: '/api/player/A/slot/:id', handler: _lazy_EPGZw8, lazy: true, middleware: false, method: undefined },
  { route: '/api/player/C', handler: _lazy_lXCTV1, lazy: true, middleware: false, method: "get" },
  { route: '/api/player/C/slot/:id', handler: _lazy_I5At9i, lazy: true, middleware: false, method: undefined },
  { route: '/api/player/D', handler: _lazy_lNOqij, lazy: true, middleware: false, method: "get" },
  { route: '/api/player/D/slot/:id', handler: _lazy_brE4Sl, lazy: true, middleware: false, method: undefined },
  { route: '/api/player', handler: _lazy_wWxOT8, lazy: true, middleware: false, method: "get" },
  { route: '/api/player/P', handler: _lazy_6uuyfW, lazy: true, middleware: false, method: "get" },
  { route: '/api/player/P/slot/:id', handler: _lazy_x5aTfJ, lazy: true, middleware: false, method: undefined },
  { route: '/api/squad/:id', handler: _lazy_FvXHLm, lazy: true, middleware: false, method: undefined },
  { route: '/api/team/:id', handler: _lazy_CkbKHV, lazy: true, middleware: false, method: undefined },
  { route: '/api/team', handler: _lazy_RXYciV, lazy: true, middleware: false, method: "get" },
  { route: '/api/_supabase/session', handler: _Y5kF7b, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_zr3rz1, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useNitroApp as a, getRouteRules as g, localFetch as l, useRuntimeConfig as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
