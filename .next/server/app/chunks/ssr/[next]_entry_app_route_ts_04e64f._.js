(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/[next]_entry_app_route_ts_04e64f._.js", {

"[next]/entry/app/route.ts/(ROUTE_MODULE)/[project]/node_modules/next/dist/server/future/route-modules/app-route/module.js (ecmascript)/(ENTRY)/[project]/src/app/api/search/route.js (ecmascript)/(BOOTSTRAP_CONFIG)/[project]/src/app/api/search/route.js/bootstrap-config.ts (ecmascript) (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$api$2d$server$2d$handler$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/api-server-handler.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$next$5d2f$polyfill$2f$app$2d$polyfills$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/polyfill/app-polyfills.ts (ecmascript, ssr)");
var __TURBOPACK__external__node$3a$url__ = __turbopack_external_require__("node:url", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$base$2d$http$2f$node$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/base-http/node.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$send$2d$response$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/send-response.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/next-request.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$next$2d$request$2d$helpers$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/next-request-helpers.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$route$2f$module$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-route/module.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$search$2f$route$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/search/route.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$search$2f$route$2e$js$2f$bootstrap$2d$config$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/search/route.js/bootstrap-config.ts (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$route$2f$module$2e$js__$28$ecmascript$29$__["default"]({
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$search$2f$route$2e$js__$28$ecmascript$29$__,
    definition: {
        page: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$search$2f$route$2e$js$2f$bootstrap$2d$config$2e$ts__$28$ecmascript$29$__["PAGE"],
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$search$2f$route$2e$js$2f$bootstrap$2d$config$2e$ts__$28$ecmascript$29$__["KIND"],
        pathname: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$search$2f$route$2e$js$2f$bootstrap$2d$config$2e$ts__$28$ecmascript$29$__["PATHNAME"],
        filename: '',
        bundlePath: ''
    },
    resolvedPagePath: `app/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$search$2f$route$2e$js$2f$bootstrap$2d$config$2e$ts__$28$ecmascript$29$__["PAGE"]}`,
    nextConfigOutput: undefined
});
__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$api$2d$server$2d$handler$2e$ts__$28$ecmascript$29$__["default"](async ({ request, response, query, params, path })=>{
    const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$base$2d$http$2f$node$2e$js__$28$ecmascript$29$__["NodeNextRequest"](request);
    const res = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$base$2d$http$2f$node$2e$js__$28$ecmascript$29$__["NodeNextResponse"](response);
    const parsedUrl = __TURBOPACK__external__node$3a$url__["parse"](req.url, true);
    __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$next$2d$request$2d$helpers$2e$ts__$28$ecmascript$29$__["attachRequestMeta"](req, parsedUrl, request.headers.host);
    const context = {
        params,
        prerenderManifest: {
            version: -1,
            routes: {},
            dynamicRoutes: {},
            notFoundRoutes: [],
            preview: {
                previewModeId: 'development-id'
            }
        },
        staticGenerationContext: {
            supportsDynamicHTML: true
        }
    };
    const routeResponse = await routeModule.handle(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$28$ecmascript$29$__["NextRequestAdapter"].fromNodeNextRequest(req), context);
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$send$2d$response$2e$js__$28$ecmascript$29$__["sendResponse"](req, res, routeResponse);
});

})()),
}]);

//# sourceMappingURL=[next]_entry_app_route_ts_04e64f._.js.map