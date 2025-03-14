(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_utils_formatters_ce8fb5.js", {

"[project]/src/utils/formatters.js (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "compactNumber": ()=>compactNumber,
    "formatDuration": ()=>formatDuration,
    "getYearFromDate": ()=>getYearFromDate
});
function getYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
}
function compactNumber(number) {
    return Intl.NumberFormat('en-us', {
        notation: 'compact'
    }).format(number);
}
;
const formatDuration = (time)=>{
    if (isNaN(time)) {
        return '00:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const padNumber = (number)=>String(number).padStart(2, 0);
    return padNumber(minutes) + ":" + padNumber(seconds);
};

})()),
}]);

//# sourceMappingURL=src_utils_formatters_ce8fb5.js.map