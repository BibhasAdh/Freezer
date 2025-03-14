(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_app_api_top-tracks_route_455db9.js", {

"[project]/src/app/api/top-tracks/route.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const base = 'https://api.deezer.com';
async function GET() {
    const endpoint = `${base}/chart/0/tracks?limit=10`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$28$ecmascript$29$__["NextResponse"].json(data);
}

})()),
}]);

//# sourceMappingURL=src_app_api_top-tracks_route_455db9.js.map