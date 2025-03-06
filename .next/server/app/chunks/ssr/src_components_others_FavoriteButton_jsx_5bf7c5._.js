(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_others_FavoriteButton_jsx_5bf7c5._.js", {

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
}]);

//# sourceMappingURL=src_components_others_FavoriteButton_jsx_5bf7c5._.js.map