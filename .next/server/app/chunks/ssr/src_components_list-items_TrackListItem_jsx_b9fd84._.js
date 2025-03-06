(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_list-items_TrackListItem_jsx_b9fd84._.js", {

"[project]/src/components/list-items/TrackListItem.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatters.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/songsSlice.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$FavoriteButton$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/FavoriteButton.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
const TrackListItem = ({ index, playlist, track: { id, title, duration, artist, album, type } })=>{
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useDispatch"]();
    const formattedDuration = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__["formatDuration"](duration);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
        className: "track-list-item",
        onClick: ()=>dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__["playSong"]({
                index,
                playlist
            })),
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                src: album.cover_medium,
                alt: ""
            }, void 0, false, {
                fileName: "<[project]/src/components/list-items/TrackListItem.jsx>",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "song-details",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                                className: "overflowing-text",
                                children: title
                            }, void 0, false, {
                                fileName: "<[project]/src/components/list-items/TrackListItem.jsx>",
                                lineNumber: 22,
                                columnNumber: 21
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                href: `/artist/${artist.id}`,
                                className: "artist-name overflowing-text",
                                onClick: (e)=>e.stopPropagation(),
                                children: artist.name
                            }, void 0, false, {
                                fileName: "<[project]/src/components/list-items/TrackListItem.jsx>",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/list-items/TrackListItem.jsx>",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: formattedDuration
                    }, void 0, false, {
                        fileName: "<[project]/src/components/list-items/TrackListItem.jsx>",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$FavoriteButton$2e$jsx__$28$ecmascript$29$__["default"], {
                        id: id,
                        type: type
                    }, void 0, false, {
                        fileName: "<[project]/src/components/list-items/TrackListItem.jsx>",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/list-items/TrackListItem.jsx>",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/list-items/TrackListItem.jsx>",
        lineNumber: 14,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = TrackListItem;

})()),
}]);

//# sourceMappingURL=src_components_list-items_TrackListItem_jsx_b9fd84._.js.map