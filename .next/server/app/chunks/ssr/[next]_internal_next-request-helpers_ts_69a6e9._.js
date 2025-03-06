(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/[next]_internal_next-request-helpers_ts_69a6e9._.js", {

"[next]/internal/next-request-helpers.ts (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "attachRequestMeta": ()=>attachRequestMeta
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/request-meta.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$body$2d$streams$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/body-streams.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function attachRequestMeta(req, parsedUrl, host) {
    const protocol = (req.originalRequest?.socket)?.encrypted ? 'https' : 'http';
    const initUrl = `${protocol}://${host}${req.url}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__["addRequestMeta"](req, '__NEXT_INIT_URL', initUrl);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__["addRequestMeta"](req, '__NEXT_INIT_QUERY', {
        ...parsedUrl.query
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__["addRequestMeta"](req, '_protocol', protocol);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2d$meta$2e$js__$28$ecmascript$29$__["addRequestMeta"](req, '__NEXT_CLONABLE_BODY', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$body$2d$streams$2e$js__$28$ecmascript$29$__["getCloneableBody"](req.body));
}

})()),
}]);

//# sourceMappingURL=[next]_internal_next-request-helpers_ts_69a6e9._.js.map