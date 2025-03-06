(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_utils_carousel_38d696.js", {

"[project]/src/utils/carousel.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getCarouselData": ()=>getCarouselData
});
const getCarouselData = (carousel)=>{
    const childWidth = carousel.scrollWidth / carousel.children.length;
    const childsInSlide = Math.floor(carousel.clientWidth / childWidth);
    const lastSlide = carousel.children.length - (childsInSlide || 1);
    return {
        childWidth,
        lastSlide
    };
};

})()),
}]);

//# sourceMappingURL=src_utils_carousel_38d696.js.map