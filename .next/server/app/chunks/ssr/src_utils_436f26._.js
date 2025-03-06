(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_utils_436f26._.js", {

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
async function fetchTopTracks({ limit = 10 } = {}) {
    const endpoint = `/chart/0/tracks?limit=${limit}`;
    const { data } = await fetchData(endpoint);
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
}]);

//# sourceMappingURL=src_utils_436f26._.js.map