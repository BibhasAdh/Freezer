(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_hooks_useCarousel_bd2bf9.js", {

"[project]/src/hooks/useCarousel.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$carousel$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/carousel.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useCarousel = ()=>{
    const slide = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](0);
    const carouselRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](null);
    const setSlide = (slideIndex)=>{
        slide.current = slideIndex;
        const { childWidth } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$carousel$2e$js__$28$ecmascript$29$__["getCarouselData"](carouselRef.current);
        carouselRef.current.style.transform = `translateX(-${childWidth * slideIndex}px)`;
    };
    const next = ()=>{
        const { lastSlide } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$carousel$2e$js__$28$ecmascript$29$__["getCarouselData"](carouselRef.current);
        const newIndex = lastSlide === slide.current ? 0 : slide.current + 1;
        setSlide(newIndex);
    };
    const prev = ()=>{
        const { lastSlide } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$carousel$2e$js__$28$ecmascript$29$__["getCarouselData"](carouselRef.current);
        const newIndex = slide.current === 0 ? lastSlide : slide.current - 1;
        setSlide(newIndex);
    };
    return {
        carouselRef,
        next,
        prev
    };
};
const __TURBOPACK__default__export__ = useCarousel;

})()),
}]);

//# sourceMappingURL=src_hooks_useCarousel_bd2bf9.js.map