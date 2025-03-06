(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_others_TopArtistsContainer_jsx_9b68fc._.js", {

"[project]/src/components/others/TopArtistsContainer.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/fetchers.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$LinkCardItem$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/list-items/LinkCardItem.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatters.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const TopArtistsContainer = async ({ limit })=>{
    const artists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__["fetchTopArtists"]({
        limit
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "top-artists-container",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: "Top Artist"
            }, void 0, false, {
                fileName: "<[project]/src/components/others/TopArtistsContainer.jsx>",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                children: artists.map((artist)=>{
                    const { id, name, picture_medium, nb_album, nb_fan } = artist;
                    const formattedFanNumber = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__["compactNumber"](nb_fan);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$LinkCardItem$2e$jsx__$28$ecmascript$29$__["default"], {
                        title: name,
                        imgSrc: picture_medium,
                        href: `/artist/${id}`,
                        description: `${formattedFanNumber} Fans | ${nb_album} Albums`
                    }, id, false, {
                        fileName: "<[project]/src/components/others/TopArtistsContainer.jsx>",
                        lineNumber: 19,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "<[project]/src/components/others/TopArtistsContainer.jsx>",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/others/TopArtistsContainer.jsx>",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = TopArtistsContainer;

})()),
}]);

//# sourceMappingURL=src_components_others_TopArtistsContainer_jsx_9b68fc._.js.map