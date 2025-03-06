(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_app_layout_jsx_1d9434._.js", {

"[project]/src/app/layout.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_e34f261f$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/rubik_e34f261f.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$Sidebar$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/navigation/Sidebar.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$player$2f$Player$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/player/Player.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchbar$2f$SearchBar$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/searchbar/SearchBar.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$ReduxProvider$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/ReduxProvider.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
'use client';
;
;
;
;
;
;
;
;
const metadata = {
    title: 'Music platform',
    description: 'Discover new artists and music. Find top trending songs, artists information, and album tracklists.'
};
function RootLayout({ children }) {
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const isAuthenticated = document.cookie.includes('auth=true');
        if (!isAuthenticated && window.location.pathname !== '/login' && window.location.pathname !== '/register') {
            router.push('/login');
        }
    }, []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("html", {
        lang: "en",
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_e34f261f$2e$js__$28$ecmascript$29$__["default"].className,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("link", {
                rel: "icon",
                href: "./favicon.png",
                sizes: "any"
            }, void 0, false, {
                fileName: "<[project]/src/app/layout.jsx>",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("body", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$ReduxProvider$2e$jsx__$28$ecmascript$29$__["default"], {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "wrapper",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$Sidebar$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/layout.jsx>",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "main-container",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchbar$2f$SearchBar$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "<[project]/src/app/layout.jsx>",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("main", {
                                        children: children
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/layout.jsx>",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/layout.jsx>",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$player$2f$Player$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/layout.jsx>",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/layout.jsx>",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/layout.jsx>",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/layout.jsx>",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/layout.jsx>",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=src_app_layout_jsx_1d9434._.js.map