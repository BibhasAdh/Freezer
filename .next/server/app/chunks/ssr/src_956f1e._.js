(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_956f1e._.js", {

"[project]/src/utils/fetchers.js (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "fetchAlbum": ()=>fetchAlbum,
    "fetchArtist": ()=>fetchArtist,
    "fetchArtistAlbums": ()=>fetchArtistAlbums,
    "fetchArtistTopTracks": ()=>fetchArtistTopTracks,
    "fetchPlaylist": ()=>fetchPlaylist,
    "fetchRadio": ()=>fetchRadio,
    "fetchSearchData": ()=>fetchSearchData,
    "fetchTopArtists": ()=>fetchTopArtists,
    "fetchTopPlaylists": ()=>fetchTopPlaylists,
    "fetchTopRadio": ()=>fetchTopRadio,
    "fetchTopTracks": ()=>fetchTopTracks,
    "fetchTrack": ()=>fetchTrack
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const base = 'https://api.deezer.com';
async function fetchData(endpoint) {
    const response = await fetch(base + endpoint);
    const data = await response.json();
    if (data.error?.code === 800) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["notFound"]();
    }
    return data;
}
async function fetchTrack(id) {
    const endpoint = `/track/${id}`;
    const data = await fetchData(endpoint);
    return data;
}
async function fetchTopTracks() {
    const response = await fetch('/api/top-tracks');
    if (!response.ok) {
        throw new Error('Failed to fetch top tracks');
    }
    const data = await response.json();
    return data;
}
async function fetchTopArtists({ limit = 3 } = {}) {
    const endpoint = `/chart/0/artists?limit=${limit}`;
    const { data } = await fetchData(endpoint);
    const promises = data.map((artist)=>fetchArtist(artist.id));
    const topArtists = await Promise.all(promises);
    return topArtists;
}
async function fetchTopPlaylists() {
    const endpoint = `/chart/0/playlists`;
    const { data } = await fetchData(endpoint);
    return data;
}
async function fetchArtist(id) {
    const endpoint = `/artist/${id}`;
    const data = await fetchData(endpoint);
    return data;
}
async function fetchArtistTopTracks(id) {
    const endpoint = `/artist/${id}/top`;
    const { data } = await fetchData(endpoint);
    return data;
}
async function fetchArtistAlbums(id, { limit = 9999 } = {}) {
    const endpoint = `/artist/${id}/albums?limit=${limit}`;
    const { data } = await fetchData(endpoint);
    return data;
}
async function fetchAlbum(id) {
    const endpoint = `/album/${id}`;
    const data = await fetchData(endpoint);
    return data;
}
async function fetchPlaylist(id) {
    const endpoint = `/playlist/${id}`;
    const data = await fetchData(endpoint);
    return data;
}
async function fetchTopRadio() {
    const endpoint = '/radio/top';
    const { data } = await fetchData(endpoint);
    return data;
}
async function fetchRadio(id) {
    const radioPromise = fetchData(`/radio/${id}`);
    const trackListPromise = fetchData(`/radio/${id}/tracks`);
    const [radio, tracks] = await Promise.all([
        radioPromise,
        trackListPromise
    ]);
    return {
        ...radio,
        tracks: tracks.data
    };
}
async function fetchSearchData(query, { limit = 3 } = {}) {
    const endpoint = (category)=>`/search/${category}?q=${query}&limit=${limit}`;
    const tracksPromise = fetchData(endpoint('track'));
    const albumsPromise = fetchData(endpoint('album'));
    const artistsPromise = fetchData(endpoint('artist'));
    return await Promise.all([
        tracksPromise,
        albumsPromise,
        artistsPromise
    ]);
}

})()),
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
"[project]/src/app/error.js (ecmascript, chunks, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => "[project]/src/app/error.js (ecmascript)",
    chunks: () => chunks,
});
const chunks = [
  {
    "path": "_next/static/chunks/src_app_error_b53fce.js",
    "included": [
      "[project]/src/app/error.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_compiled_process_browser_9bd518.js",
    "included": [
      "[project]/node_modules/next/dist/compiled/process/browser.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_compiled_react_jsx-dev-runtime_62fdea.js",
    "included": [
      "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_build_polyfills_process_bbbeee.js",
    "included": [
      "[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript)"
    ]
  },
  "_next/static/chunks/src_app_error_5771e1.js"
];

})()),
"[project]/src/app/error.js (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

var __TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$app$2f$error$2e$js__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$app$2f$error$2e$js__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__ = __turbopack_import__("[next]/entry/app/server-to-client-ssr.tsx/(CLIENT_MODULE)/[project]/src/app/error.js (ecmascript, with chunking context scope)/(CLIENT_CHUNKS)/[project]/src/app/error.js (ecmascript, chunks) (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: server-to-client }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$app$2f$error$2e$js__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$app$2f$error$2e$js__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__["default"]);

})()),
"[project]/src/app/error.js (ecmascript, client chunks, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/error.js (ecmascript, rsc)"),
    chunks: () => chunks,
});
const chunks = [];

})()),
"[project]/src/app/layout.jsx (ecmascript, chunks, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => "[project]/src/app/layout.jsx (ecmascript)",
    chunks: () => chunks,
});
const chunks = [
  {
    "path": "_next/static/chunks/node_modules_dde600._.js",
    "included": [
      "[project]/node_modules/@radix-ui/number/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/primitive/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-compose-refs/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-context/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-direction/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-use-previous/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-use-size/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-slot/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-primitive/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-collection/dist/index.mjs (ecmascript)",
      "[project]/node_modules/@radix-ui/react-slider/dist/index.mjs (ecmascript)",
      "[project]/node_modules/react-icons/ai/index.esm.js (ecmascript)",
      "[project]/node_modules/react-icons/fi/index.esm.js (ecmascript)",
      "[project]/node_modules/react-icons/gi/index.esm.js (ecmascript)",
      "[project]/node_modules/react-icons/md/index.esm.js (ecmascript)",
      "[project]/node_modules/react-icons/lib/esm/index.js (ecmascript)",
      "[project]/node_modules/next/navigation.js (ecmascript)",
      "[project]/node_modules/next/dist/compiled/process/browser.js (ecmascript)",
      "[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript)",
      "[project]/node_modules/next/link.js (ecmascript)",
      "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)",
      "[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)",
      "[project]/node_modules/next/dist/compiled/scheduler/index.js (ecmascript)",
      "[project]/node_modules/next/dist/compiled/react-dom/index.js (ecmascript)",
      "[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js (ecmascript)",
      "[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js (ecmascript)",
      "[project]/node_modules/use-sync-external-store/shim/index.js (ecmascript)",
      "[project]/node_modules/use-sync-external-store/shim/with-selector.js (ecmascript)",
      "[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript)",
      "[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript)",
      "[project]/node_modules/@swc/helpers/esm/_interop_require_wildcard.js (ecmascript)",
      "[project]/node_modules/@swc/helpers/esm/_interop_require_default.js (ecmascript)",
      "[project]/node_modules/redux-persist/es/index.js (ecmascript)",
      "[project]/node_modules/redux-persist/es/persistStore.js (ecmascript)",
      "[project]/node_modules/redux-persist/es/integration/react.js (ecmascript)",
      "[project]/node_modules/redux-persist/lib/storage/createWebStorage.js (ecmascript)",
      "[project]/node_modules/@babel/runtime/helpers/esm/extends.js (ecmascript)",
      "[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js (ecmascript)",
      "[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js (ecmascript)",
      "[project]/node_modules/react-redux/es/index.js (ecmascript)",
      "[project]/node_modules/react-redux/node_modules/react-is/index.js (ecmascript)",
      "[project]/node_modules/swr/_internal/dist/index.mjs (ecmascript)",
      "[project]/node_modules/swr/core/dist/index.mjs (ecmascript)",
      "[project]/node_modules/react-is/index.js (ecmascript)",
      "[project]/node_modules/wavesurfer.js/dist/wavesurfer.esm.js (ecmascript)",
      "[project]/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js (ecmascript)",
      "[project]/node_modules/immer/dist/immer.esm.mjs (ecmascript)",
      "[project]/node_modules/redux/es/redux.js (ecmascript)",
      "[project]/node_modules/reselect/es/index.js (ecmascript)",
      "[project]/node_modules/redux-thunk/es/index.js (ecmascript)",
      "[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_hooks_useWavesurfer_69ff87.js",
    "included": [
      "[project]/src/hooks/useWavesurfer.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_utils_formatters_570af4.js",
    "included": [
      "[project]/src/utils/formatters.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_redux_c406a2._.js",
    "included": [
      "[project]/src/redux/ReduxProvider.jsx (ecmascript)",
      "[project]/src/redux/features/songsSlice.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_app_layout_jsx_b53fce._.js",
    "included": [
      "[project]/src/app/layout.jsx (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_components_navigation_Sidebar_jsx_369c30._.js",
    "included": [
      "[project]/src/components/navigation/Sidebar.jsx (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_components_player_Player_jsx_64cc70._.js",
    "included": [
      "[project]/src/components/player/Player.jsx (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_components_searchbar_SearchBar_jsx_58efda._.js",
    "included": [
      "[project]/src/components/searchbar/SearchBar.jsx (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/[next]_internal_font_google_rubik_e34f261f_5b50e0.js",
    "included": [
      "[next]/internal/font/google/rubik_e34f261f.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/[next]_internal_font_google_rubik_e34f261f_module_b5a149.css",
    "included": [
      "[next]/internal/font/google/rubik_e34f261f.module.css (css, css module)"
    ],
    "moduleChunks": [
      "_next/static/chunks/[next]_internal_font_google_rubik_e34f261f_module_fb38f0.css"
    ]
  },
  {
    "path": "_next/static/chunks/src_app_globals.css",
    "included": [
      "[project]/src/app/globals.css (css)"
    ],
    "moduleChunks": [
      "_next/static/chunks/src_app_globals_c9a116.css"
    ]
  },
  "_next/static/chunks/src_app_layout_jsx_5771e1._.js"
];

})()),
"[project]/src/app/layout.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

var __TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$app$2f$layout$2e$jsx__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$app$2f$layout$2e$jsx__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__ = __turbopack_import__("[next]/entry/app/server-to-client-ssr.tsx/(CLIENT_MODULE)/[project]/src/app/layout.jsx (ecmascript, with chunking context scope)/(CLIENT_CHUNKS)/[project]/src/app/layout.jsx (ecmascript, chunks) (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: server-to-client }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$app$2f$layout$2e$jsx__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$app$2f$layout$2e$jsx__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__["default"]);

})()),
"[project]/src/app/layout.jsx (ecmascript, client chunks, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/layout.jsx (ecmascript, rsc)"),
    chunks: () => chunks,
});
const chunks = [
  "chunks/ssr/[next]_internal_font_google_rubik_e34f261f_module_b5a149.css",
  "chunks/ssr/src_app_globals.css"
];

})()),
"[project]/src/app/loading.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const loading = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "loader",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/src/app/loading.jsx>",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/src/app/loading.jsx>",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/src/app/loading.jsx>",
                lineNumber: 8,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/loading.jsx>",
        lineNumber: 5,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = loading;

})()),
"[project]/src/app/loading.jsx (ecmascript, client chunks, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/loading.jsx (ecmascript, rsc)"),
    chunks: () => chunks,
});
const chunks = [];

})()),
"[project]/src/app/not-found.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>NotFound
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function NotFound() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "not-found-page",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: [
                    "The page you looking for is ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "gradient-text",
                        children: "not found"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/not-found.jsx>",
                        lineNumber: 6,
                        columnNumber: 39
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/not-found.jsx>",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("small", {
                children: "The link you followed may ne broken, or the page may have been removed"
            }, void 0, false, {
                fileName: "<[project]/src/app/not-found.jsx>",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                href: "/",
                children: "View Home Page"
            }, void 0, false, {
                fileName: "<[project]/src/app/not-found.jsx>",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/not-found.jsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
;

})()),
"[project]/src/app/not-found.jsx (ecmascript, client chunks, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/not-found.jsx (ecmascript, rsc)"),
    chunks: () => chunks,
});
const chunks = [];

})()),
"[project]/src/app/top_artists/page.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>TopArtists
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$TopArtistsContainer$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/TopArtistsContainer.jsx (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function TopArtists() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$TopArtistsContainer$2e$jsx__$28$ecmascript$29$__["default"], {
        limit: 25
    }, void 0, false, {
        fileName: "<[project]/src/app/top_artists/page.jsx>",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}

})()),
"[project]/src/app/top_artists/page.jsx (ecmascript, client chunks, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/top_artists/page.jsx (ecmascript, rsc)"),
    chunks: () => chunks,
});
const chunks = [];

})()),
"[project]/src/components/list-items/LinkCardItem.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const LinkCardItem = ({ href, imgSrc, title, description })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
        className: "card-container",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
            href: href,
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                    src: imgSrc,
                    alt: ""
                }, void 0, false, {
                    fileName: "<[project]/src/components/list-items/LinkCardItem.jsx>",
                    lineNumber: 8,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                    children: title
                }, void 0, false, {
                    fileName: "<[project]/src/components/list-items/LinkCardItem.jsx>",
                    lineNumber: 9,
                    columnNumber: 17
                }, this),
                description && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("small", {
                    children: description
                }, void 0, false, {
                    fileName: "<[project]/src/components/list-items/LinkCardItem.jsx>",
                    lineNumber: 13,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/list-items/LinkCardItem.jsx>",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/list-items/LinkCardItem.jsx>",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = LinkCardItem;

})()),
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

//# sourceMappingURL=src_956f1e._.js.map