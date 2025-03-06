(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_app_artist_[id]_page_jsx_b53fce._.js", {

"[project]/src/app/artist/[id]/page.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$LinkCardItem$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/list-items/LinkCardItem.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/Carousel.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$IntroContainer$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/IntroContainer.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$TrackListContainer$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/TrackListContainer.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatters.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/fetchers.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const ArtistPage = async ({ params: { id } })=>{
    const artistPromise = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__["fetchArtist"](id);
    const topTracksPromise = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__["fetchArtistTopTracks"](id);
    const artistAlbumsPromise = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__["fetchArtistAlbums"](id, {
        limit: 20
    });
    const [artist, topTracks, artistAlbums] = await Promise.all([
        artistPromise,
        topTracksPromise,
        artistAlbumsPromise
    ]);
    const formattedFanNumber = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__["compactNumber"](artist.nb_fan);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "artist-page page-container",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$IntroContainer$2e$jsx__$28$ecmascript$29$__["default"], {
                id: id,
                type: artist.type,
                title: artist.name,
                imgSrc: artist.picture_medium,
                description: `${formattedFanNumber} Fans`,
                playlist: topTracks
            }, void 0, false, {
                fileName: "<[project]/src/app/artist/[id]/page.jsx>",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$TrackListContainer$2e$jsx__$28$ecmascript$29$__["default"], {
                header: "Top Songs",
                tracks: topTracks
            }, void 0, false, {
                fileName: "<[project]/src/app/artist/[id]/page.jsx>",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "albums-container",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$29$__["default"], {
                    header: "Albums",
                    children: artistAlbums.map((album)=>{
                        const { id, title, cover_medium, release_date } = album;
                        const releaseYear = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__["getYearFromDate"](release_date);
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$LinkCardItem$2e$jsx__$28$ecmascript$29$__["default"], {
                            title: title,
                            imgSrc: cover_medium,
                            href: `/album/${id}`,
                            description: `Album | ${releaseYear}`
                        }, id, false, {
                            fileName: "<[project]/src/app/artist/[id]/page.jsx>",
                            lineNumber: 37,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "<[project]/src/app/artist/[id]/page.jsx>",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/artist/[id]/page.jsx>",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/artist/[id]/page.jsx>",
        lineNumber: 17,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ArtistPage;

})()),
}]);

//# sourceMappingURL=src_app_artist_[id]_page_jsx_b53fce._.js.map