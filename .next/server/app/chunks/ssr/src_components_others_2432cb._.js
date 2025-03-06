(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_others_2432cb._.js", {

"[project]/src/components/others/FavoriteButton.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$favoritesSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/favoritesSlice.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
const FavoriteButton = ({ type, id })=>{
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useDispatch"]();
    const favorites = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useSelector"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$favoritesSlice$2e$js__$28$ecmascript$29$__["selectFavorites"]);
    const isFavorite = favorites[type].find((favoriteId)=>favoriteId === id);
    const handleFavoriteClick = (e)=>{
        e.stopPropagation();
        isFavorite ? dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$favoritesSlice$2e$js__$28$ecmascript$29$__["removeFromFavorites"]({
            type,
            id
        })) : dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$favoritesSlice$2e$js__$28$ecmascript$29$__["addToFavorites"]({
            type,
            id
        }));
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
        className: isFavorite ? `favorite active` : 'favorite',
        onClick: handleFavoriteClick,
        children: isFavorite ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["AiFillHeart"], {}, void 0, false, {
            fileName: "<[project]/src/components/others/FavoriteButton.jsx>",
            lineNumber: 25,
            columnNumber: 28
        }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["AiOutlineHeart"], {}, void 0, false, {
            fileName: "<[project]/src/components/others/FavoriteButton.jsx>",
            lineNumber: 25,
            columnNumber: 46
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/others/FavoriteButton.jsx>",
        lineNumber: 21,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = FavoriteButton;

})()),
"[project]/src/components/others/IntroContainer.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/songsSlice.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$FavoriteButton$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/FavoriteButton.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
const IntroContainer = ({ id, imgSrc, title, description, playlist, type })=>{
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useDispatch"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "intro-container",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                src: imgSrc,
                alt: ""
            }, void 0, false, {
                fileName: "<[project]/src/components/others/IntroContainer.jsx>",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "intro-details",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                        children: title
                    }, void 0, false, {
                        fileName: "<[project]/src/components/others/IntroContainer.jsx>",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("small", {
                        children: description
                    }, void 0, false, {
                        fileName: "<[project]/src/components/others/IntroContainer.jsx>",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "intro-buttons",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                className: "play-button",
                                onClick: ()=>dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__["playSong"]({
                                        playlist,
                                        index: 0
                                    })),
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaPlay"], {}, void 0, false, {
                                        fileName: "<[project]/src/components/others/IntroContainer.jsx>",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: "Play"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/others/IntroContainer.jsx>",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/others/IntroContainer.jsx>",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$FavoriteButton$2e$jsx__$28$ecmascript$29$__["default"], {
                                type: type,
                                id: id
                            }, void 0, false, {
                                fileName: "<[project]/src/components/others/IntroContainer.jsx>",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/others/IntroContainer.jsx>",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/others/IntroContainer.jsx>",
                lineNumber: 14,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/others/IntroContainer.jsx>",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = IntroContainer;

})()),
}]);

//# sourceMappingURL=src_components_others_2432cb._.js.map