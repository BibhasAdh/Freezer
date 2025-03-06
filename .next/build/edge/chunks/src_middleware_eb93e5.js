(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_middleware_eb93e5.js", {

"[project]/src/middleware.js (ecmascript, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function middleware(request) {
    const { pathname } = request.nextUrl;
    const isAuthenticated = request.cookies.get('auth') === 'true';
    if (!isAuthenticated && pathname !== '/login') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/login', request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};

})()),
}]);

//# sourceMappingURL=src_middleware_eb93e5.js.map