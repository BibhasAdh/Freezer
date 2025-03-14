(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_5e3ad5._.js", {

"[project]/src/utils/fetchers.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
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
"[project]/src/utils/formatters.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

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
"[project]/src/hooks/useWavesurfer.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$wavesurfer$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wavesurfer.js/dist/wavesurfer.esm.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const options = {
    progressColor: '#1cc39f',
    waveColor: '#9094a7',
    fillParent: true,
    responsive: true,
    autoplay: true,
    cursorWidth: 0,
    barHeight: 0.5,
    barGap: 3
};
const useWavesurfer = (waveContainerRef, audioSrc, onFinish)=>{
    const waveSurferRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](null);
    const [isPlaying, setIsPlaying] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [audioVolume, setAudioVolume] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]({
        isMuted: false,
        value: 1
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        waveSurferRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$wavesurfer$2e$esm$2e$js__$28$ecmascript$29$__["default"].create({
            ...options,
            url: audioSrc,
            container: waveContainerRef.current,
            height: waveContainerRef.current.clientHeight
        });
        waveSurferRef.current.on('play', ()=>setIsPlaying(true));
        waveSurferRef.current.on('pause', ()=>setIsPlaying(false));
        waveSurferRef.current.on('finish', ()=>onFinish());
        waveSurferRef.current.setVolume(audioVolume.isMuted ? 0 : audioVolume.value);
        return ()=>{
            waveSurferRef.current.destroy();
        };
    }, [
        audioSrc
    ]);
    waveSurferRef?.current?.setVolume(audioVolume.isMuted ? 0 : audioVolume.value);
    return {
        handlePlayPause: ()=>waveSurferRef?.current?.playPause(),
        audioVolume,
        setAudioVolume,
        isPlaying
    };
};
const __TURBOPACK__default__export__ = useWavesurfer;

})()),
"[project]/src/app/page.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$Playlists$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/Playlists.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$TrackListContainer$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/TrackListContainer.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/fetchers.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$TopArtistsContainer$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/TopArtistsContainer.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
function Home() {
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    const [tracks, setTracks] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn || isLoggedIn !== 'true') {
            router.push('/login');
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__["fetchTopTracks"]().then((data)=>setTracks(data)).catch((err)=>{
                console.error('Error fetching top tracks:', err);
                setError('Failed to fetch top tracks. Please try again later.');
            });
        }
    }, [
        router
    ]);
    if (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: error
        }, void 0, false, {
            fileName: "<[project]/src/app/page.jsx>",
            lineNumber: 30,
            columnNumber: 12
        }, this);
    }
    if (!tracks.length) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "<[project]/src/app/page.jsx>",
            lineNumber: 34,
            columnNumber: 12
        }, this);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "home-container",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$TrackListContainer$2e$jsx__$28$ecmascript$29$__["default"], {
                header: "Trending right now",
                tracks: tracks
            }, void 0, false, {
                fileName: "<[project]/src/app/page.jsx>",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$TopArtistsContainer$2e$jsx__$28$ecmascript$29$__["default"], {
                limit: 3
            }, void 0, false, {
                fileName: "<[project]/src/app/page.jsx>",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$Playlists$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/page.jsx>",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/page.jsx>",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/error.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Error
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
function Error({ reset }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "error-page",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: "Something went wrong!"
            }, void 0, false, {
                fileName: "<[project]/src/app/error.js>",
                lineNumber: 5,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("small", {
                children: [
                    "For Developers: the occurrence of errors could be due to limitations on",
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "gradient-text",
                        children: " Deezer API "
                    }, void 0, false, {
                        fileName: "<[project]/src/app/error.js>",
                        lineNumber: 8,
                        columnNumber: 13
                    }, this),
                    "requests."
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/error.js>",
                lineNumber: 6,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: ()=>reset(),
                children: "Try again"
            }, void 0, false, {
                fileName: "<[project]/src/app/error.js>",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/error.js>",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
;

})()),
"[project]/src/app/layout.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_e34f261f$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/rubik_e34f261f.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$Sidebar$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/navigation/Sidebar.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$player$2f$Player$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/player/Player.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchbar$2f$SearchBar$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/searchbar/SearchBar.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$ReduxProvider$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/ReduxProvider.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
"use client";
;
;
;
;
;
;
;
const metadata = {
    title: 'Music platform',
    description: 'Discover new artists and music. Find top trending songs, artists information, and album tracklists.'
};
function RootLayout({ children }) {
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["usePathname"]();
    const isLoginPage = pathname === '/login';
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("html", {
        lang: "en",
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_e34f261f$2e$js__$28$ecmascript$29$__["default"].className,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("link", {
                rel: "icon",
                href: "./favicon.png",
                sizes: "any"
            }, void 0, false, {
                fileName: "<[project]/src/app/layout.jsx>",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("body", {
                className: isLoginPage ? 'login-body' : '',
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$ReduxProvider$2e$jsx__$28$ecmascript$29$__["default"], {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "wrapper",
                        children: [
                            !isLoginPage && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$Sidebar$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/layout.jsx>",
                                lineNumber: 31,
                                columnNumber: 30
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "main-container",
                                children: [
                                    !isLoginPage && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchbar$2f$SearchBar$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "<[project]/src/app/layout.jsx>",
                                        lineNumber: 34,
                                        columnNumber: 32
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("main", {
                                        children: children
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/layout.jsx>",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/layout.jsx>",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            !isLoginPage && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$player$2f$Player$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/layout.jsx>",
                                lineNumber: 41,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/layout.jsx>",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/layout.jsx>",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/layout.jsx>",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/layout.jsx>",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/redux/utils/storage.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$createWebStorage$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/redux-persist/lib/storage/createWebStorage.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const isServer = typeof window !== "undefined";
const createNoopStorage = ()=>{
    return {
        getItem (_key) {
            return Promise.resolve(null);
        },
        setItem (_key, value) {
            return Promise.resolve(value);
        },
        removeItem (_key) {
            return Promise.resolve();
        }
    };
};
const storage = isServer ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$createWebStorage$2e$js__$28$ecmascript$29$__["default"]("local") : createNoopStorage();
const __TURBOPACK__default__export__ = storage;

})()),
"[project]/src/redux/features/favoritesSlice.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "addToFavorites": ()=>addToFavorites,
    "default": ()=>__TURBOPACK__default__export__,
    "removeFromFavorites": ()=>removeFromFavorites,
    "selectFavorites": ()=>selectFavorites
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const initialState = {
    album: [],
    track: [],
    radio: [],
    artist: [],
    playlist: []
};
const favoriteSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites (state, { payload }) {
            const { type, id } = payload;
            state[type].push(id);
        },
        removeFromFavorites (state, { payload }) {
            const { type, id } = payload;
            state[type] = state[type].filter((favoriteId)=>favoriteId !== id);
        }
    }
});
const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
const selectFavorites = (state)=>state.favorites;
const __TURBOPACK__default__export__ = favoriteSlice.reducer;

})()),
"[project]/src/redux/features/songsSlice.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "playNextSong": ()=>playNextSong,
    "playPreviousSong": ()=>playPreviousSong,
    "playSong": ()=>playSong,
    "selectCurrentSong": ()=>selectCurrentSong
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const initialState = {
    entities: [],
    activeEntity: null
};
const songsSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: 'songs',
    initialState,
    reducers: {
        playSong (state, action) {
            const { payload } = action;
            return state = {
                entities: payload.playlist,
                activeEntity: payload.index
            };
        },
        playNextSong (state) {
            const { entities, activeEntity } = state;
            const isLastSong = entities.length - 1 <= activeEntity;
            if (isLastSong) {
                state.activeEntity = 0;
                return;
            }
            state.activeEntity = activeEntity + 1;
        },
        playPreviousSong (state) {
            const { entities, activeEntity } = state;
            if (activeEntity <= 0) {
                state.activeEntity = entities.length - 1;
                return;
            }
            state.activeEntity = activeEntity - 1;
        }
    }
});
const { playSong, playNextSong, playPreviousSong } = songsSlice.actions;
const selectCurrentSong = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSelector"]((state)=>state.songs, (songs)=>{
    return songs.entities[songs.activeEntity] || {};
});
const __TURBOPACK__default__export__ = songsSlice.reducer;

})()),
"[project]/src/redux/store.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/redux-persist/es/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/songsSlice.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$favoritesSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/favoritesSlice.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$utils$2f$storage$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/utils/storage.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const persistConfig = {
    key: 'favorites',
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$utils$2f$storage$2e$js__$28$ecmascript$29$__["default"]
};
const persistedReducer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["persistReducer"](persistConfig, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$favoritesSlice$2e$js__$28$ecmascript$29$__["default"]);
const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["configureStore"]({
    reducer: {
        songs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__["default"],
        favorites: persistedReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["FLUSH"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["REHYDRATE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["PAUSE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["PERSIST"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["PURGE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["REGISTER"]
                ]
            }
        })
});
const __TURBOPACK__default__export__ = store;

})()),
"[project]/src/redux/ReduxProvider.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/redux-persist/es/integration/react.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/store.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/redux-persist/es/persistStore.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
const persistor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$js__$28$ecmascript$29$__["default"]);
const ReduxProvider = ({ children })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$js__$28$ecmascript$29$__["default"],
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$28$ecmascript$29$__["PersistGate"], {
            persistor: persistor,
            children: children
        }, void 0, false, {
            fileName: "<[project]/src/redux/ReduxProvider.jsx>",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/redux/ReduxProvider.jsx>",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ReduxProvider;

})()),
"[project]/src/components/list-items/PlaylistListItem.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatters.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const PlaylistListItem = ({ id, title, imgSrc, creationDate })=>{
    const createdYear = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__["getYearFromDate"](creationDate);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
        className: "playlist-item",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
            href: `playlist/${id}`,
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                    src: imgSrc,
                    alt: "playlist-img"
                }, void 0, false, {
                    fileName: "<[project]/src/components/list-items/PlaylistListItem.jsx>",
                    lineNumber: 10,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "playlist-details",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                            children: title
                        }, void 0, false, {
                            fileName: "<[project]/src/components/list-items/PlaylistListItem.jsx>",
                            lineNumber: 13,
                            columnNumber: 21
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("small", {
                            children: createdYear
                        }, void 0, false, {
                            fileName: "<[project]/src/components/list-items/PlaylistListItem.jsx>",
                            lineNumber: 14,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/list-items/PlaylistListItem.jsx>",
                    lineNumber: 12,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/list-items/PlaylistListItem.jsx>",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/list-items/PlaylistListItem.jsx>",
        lineNumber: 8,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = PlaylistListItem;

})()),
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
"[project]/src/components/list-items/LinkCardItem.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
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
"[project]/src/components/others/Carousel.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarousel$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useCarousel.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const Carousel = ({ children, header })=>{
    const { carouselRef, next, prev } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarousel$2e$js__$28$ecmascript$29$__["default"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "carousel-header-container",
                children: [
                    header && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        children: header
                    }, void 0, false, {
                        fileName: "<[project]/src/components/others/Carousel.jsx>",
                        lineNumber: 10,
                        columnNumber: 29
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "carousel-buttons",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: prev,
                                children: '<'
                            }, void 0, false, {
                                fileName: "<[project]/src/components/others/Carousel.jsx>",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: next,
                                children: '>'
                            }, void 0, false, {
                                fileName: "<[project]/src/components/others/Carousel.jsx>",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/others/Carousel.jsx>",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/others/Carousel.jsx>",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "carousel",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                    ref: carouselRef,
                    children: children
                }, void 0, false, {
                    fileName: "<[project]/src/components/others/Carousel.jsx>",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/others/Carousel.jsx>",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Carousel;

})()),
"[project]/src/components/others/Playlists.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/fetchers.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$PlaylistListItem$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/list-items/PlaylistListItem.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/Carousel.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const Playlists = async ()=>{
    const playlists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__["fetchTopPlaylists"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "top-playlists-container",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$29$__["default"], {
            header: "Playlists",
            children: playlists.map((playlist)=>{
                const { id, title, creation_date, picture_medium } = playlist;
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$PlaylistListItem$2e$jsx__$28$ecmascript$29$__["default"], {
                    id: id,
                    title: title,
                    imgSrc: picture_medium,
                    creationDate: creation_date
                }, id, false, {
                    fileName: "<[project]/src/components/others/Playlists.jsx>",
                    lineNumber: 16,
                    columnNumber: 29
                }, this);
            })
        }, void 0, false, {
            fileName: "<[project]/src/components/others/Playlists.jsx>",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/others/Playlists.jsx>",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Playlists;

})()),
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
"[project]/src/components/others/TrackListContainer.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$TrackListItem$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/list-items/TrackListItem.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const TrackListContainer = ({ header, tracks })=>{
    if (!Array.isArray(tracks)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: "No tracks available"
        }, void 0, false, {
            fileName: "<[project]/src/components/others/TrackListContainer.jsx>",
            lineNumber: 6,
            columnNumber: 12
        }, this);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "track-list-container",
        children: [
            header && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: header
            }, void 0, false, {
                fileName: "<[project]/src/components/others/TrackListContainer.jsx>",
                lineNumber: 11,
                columnNumber: 18
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                children: tracks.map((track, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$TrackListItem$2e$jsx__$28$ecmascript$29$__["default"], {
                        index: index,
                        playlist: tracks,
                        track: track
                    }, track.id, false, {
                        fileName: "<[project]/src/components/others/TrackListContainer.jsx>",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/src/components/others/TrackListContainer.jsx>",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/others/TrackListContainer.jsx>",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TrackListContainer;

})()),
"[project]/src/components/others/TopArtistsContainer.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/fetchers.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$LinkCardItem$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/list-items/LinkCardItem.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatters.js (ecmascript, ssr)");
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
"[project]/src/components/navigation/NavLink.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const NavLink = ({ slug, children })=>{
    const segment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useSelectedLayoutSegment"]() || '';
    const isActive = segment === slug;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
        href: `/${slug}`,
        className: isActive ? 'active' : null,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/navigation/NavLink.jsx>",
        lineNumber: 10,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = NavLink;

})()),
"[project]/src/components/navigation/Sidebar.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fi/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/gi/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$NavLink$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/navigation/NavLink.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const Sidebar = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "sidebar",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                className: "app-logo",
                href: "/",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["GiMusicSpell"], {}, void 0, false, {
                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: "Spotifake"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        children: "DISCOVER"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$NavLink$2e$jsx__$28$ecmascript$29$__["default"], {
                                    slug: "",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["AiFillHome"], {}, void 0, false, {
                                            fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                            lineNumber: 21,
                                            columnNumber: 29
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                            lineNumber: 22,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                    lineNumber: 20,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$NavLink$2e$jsx__$28$ecmascript$29$__["default"], {
                                    slug: "top_tracks",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FiMusic"], {}, void 0, false, {
                                            fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            children: "Songs"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                            lineNumber: 29,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$NavLink$2e$jsx__$28$ecmascript$29$__["default"], {
                                    slug: "top_artists",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                                            fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            children: "Artists"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                            lineNumber: 36,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        children: "LIBRARY"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$NavLink$2e$jsx__$28$ecmascript$29$__["default"], {
                                slug: "favorites",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FiHeart"], {}, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: "Favorites"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                href: "https://github.com/Roryeeee",
                target: "_blank",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["AiFillGithub"], {}, void 0, false, {
                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: "Github"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/navigation/Sidebar.jsx>",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Sidebar;

})()),
"[project]/src/components/player/VolumeSlider.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slider/dist/index.mjs (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const VolumeSlider = ({ onChange, audioVolume })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__.Root, {
        className: "slider-root",
        orientation: "vertical",
        min: 0,
        step: 0.1,
        max: 1,
        value: [
            audioVolume.isMuted ? 0 : audioVolume.value
        ],
        onValueChange: (value)=>onChange(value),
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__.Track, {
                className: "slider-track",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__.Range, {
                    className: "slider-range"
                }, void 0, false, {
                    fileName: "<[project]/src/components/player/VolumeSlider.jsx>",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/player/VolumeSlider.jsx>",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__.Thumb, {
                className: "slider-thumb"
            }, void 0, false, {
                fileName: "<[project]/src/components/player/VolumeSlider.jsx>",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/player/VolumeSlider.jsx>",
        lineNumber: 5,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = VolumeSlider;

})()),
"[project]/src/components/player/Player.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWavesurfer$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useWavesurfer.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$player$2f$VolumeSlider$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/player/VolumeSlider.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatters.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/songsSlice.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
;
const Player = ()=>{
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useDispatch"]();
    const waveContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](null);
    const { album, title, artist, preview: audioSrc, duration } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useSelector"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__["selectCurrentSong"]);
    const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWavesurfer$2e$js__$28$ecmascript$29$__["default"](waveContainerRef, audioSrc, ()=>dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__["playNextSong"]()));
    const formattedDuration = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$28$ecmascript$29$__["formatDuration"](duration);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: audioSrc ? 'player' : 'player disable',
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                    src: album?.cover_medium,
                    alt: ""
                }, void 0, false, {
                    fileName: "<[project]/src/components/player/Player.jsx>",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "song-details",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: "song-title overflowing-text",
                            children: title
                        }, void 0, false, {
                            fileName: "<[project]/src/components/player/Player.jsx>",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: "artist-name",
                            children: artist?.name
                        }, void 0, false, {
                            fileName: "<[project]/src/components/player/Player.jsx>",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/player/Player.jsx>",
                    lineNumber: 22,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "control-buttons",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: ()=>dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__["playPreviousSong"]()),
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdSkipPrevious"], {}, void 0, false, {
                                fileName: "<[project]/src/components/player/Player.jsx>",
                                lineNumber: 29,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/player/Player.jsx>",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "play-pause-btn",
                            onClick: audioSrc && handlePlayPause,
                            children: isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdPause"], {}, void 0, false, {
                                fileName: "<[project]/src/components/player/Player.jsx>",
                                lineNumber: 38,
                                columnNumber: 33
                            }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdPlayArrow"], {}, void 0, false, {
                                fileName: "<[project]/src/components/player/Player.jsx>",
                                lineNumber: 39,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/player/Player.jsx>",
                            lineNumber: 32,
                            columnNumber: 21
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: ()=>dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__["playNextSong"]()),
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdSkipNext"], {}, void 0, false, {
                                fileName: "<[project]/src/components/player/Player.jsx>",
                                lineNumber: 44,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/player/Player.jsx>",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/player/Player.jsx>",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "wave-container",
                    ref: waveContainerRef
                }, void 0, false, {
                    fileName: "<[project]/src/components/player/Player.jsx>",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                    className: "duration",
                    children: formattedDuration
                }, void 0, false, {
                    fileName: "<[project]/src/components/player/Player.jsx>",
                    lineNumber: 50,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "volume-slider-container",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: ()=>setAudioVolume((prev)=>({
                                        ...prev,
                                        isMuted: prev.value <= 0 ? true : !prev.isMuted
                                    })),
                            children: audioVolume.isMuted ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdVolumeMute"], {}, void 0, false, {
                                fileName: "<[project]/src/components/player/Player.jsx>",
                                lineNumber: 54,
                                columnNumber: 49
                            }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdVolumeUp"], {}, void 0, false, {
                                fileName: "<[project]/src/components/player/Player.jsx>",
                                lineNumber: 54,
                                columnNumber: 68
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/player/Player.jsx>",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        audioSrc && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$player$2f$VolumeSlider$2e$jsx__$28$ecmascript$29$__["default"], {
                            audioVolume: audioVolume,
                            onChange: ([value])=>{
                                setAudioVolume({
                                    isMuted: value <= 0 ? true : false,
                                    value
                                });
                            }
                        }, void 0, false, {
                            fileName: "<[project]/src/components/player/Player.jsx>",
                            lineNumber: 59,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/player/Player.jsx>",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/player/Player.jsx>",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Player;

})()),
"[project]/src/components/searchbar/SearchResultItem.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/songsSlice.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
const SearchResultItem = ({ type, result })=>{
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useDispatch"]();
    const { id, name, title, picture_medium, md5_image } = result;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
        onClick: type === 'track' ? ()=>dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$songsSlice$2e$js__$28$ecmascript$29$__["playSong"]({
                playlist: [
                    result
                ],
                index: 0
            })) : ()=>router.push(`/${type}/${id}`),
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                src: picture_medium || `https://e-cdns-images.dzcdn.net/images/artist/${md5_image}/1000x1000-000000-80-0-0.jpg`,
                alt: title || name
            }, void 0, false, {
                fileName: "<[project]/src/components/searchbar/SearchResultItem.jsx>",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "overflowing-text",
                children: name || title
            }, void 0, false, {
                fileName: "<[project]/src/components/searchbar/SearchResultItem.jsx>",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/searchbar/SearchResultItem.jsx>",
        lineNumber: 12,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SearchResultItem;

})()),
"[project]/src/components/searchbar/SearchResults.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchbar$2f$SearchResultItem$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/searchbar/SearchResultItem.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const SearchResults = ({ query })=>{
    const { data: resultsObj = {}, error, isLoading } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"](query, async ()=>{
        const response = await fetch(`/api/search?q=${query}`);
        return await response.json();
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: query && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "search-results-container",
            children: [
                isLoading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "<[project]/src/components/searchbar/SearchResults.jsx>",
                    lineNumber: 16,
                    columnNumber: 32
                }, this),
                error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                    children: "Something went wrong..."
                }, void 0, false, {
                    fileName: "<[project]/src/components/searchbar/SearchResults.jsx>",
                    lineNumber: 18,
                    columnNumber: 28
                }, this),
                Object.keys(resultsObj).map((type)=>{
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                                children: type + 's'
                            }, void 0, false, {
                                fileName: "<[project]/src/components/searchbar/SearchResults.jsx>",
                                lineNumber: 24,
                                columnNumber: 33
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                children: !resultsObj[type].length ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "not-found-error",
                                    children: "Item not found. Please try a different search term."
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/searchbar/SearchResults.jsx>",
                                    lineNumber: 29,
                                    columnNumber: 45
                                }, this) : resultsObj[type].map((result)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchbar$2f$SearchResultItem$2e$jsx__$28$ecmascript$29$__["default"], {
                                        type: type,
                                        result: result
                                    }, result.id, false, {
                                        fileName: "<[project]/src/components/searchbar/SearchResults.jsx>",
                                        lineNumber: 32,
                                        columnNumber: 49
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/src/components/searchbar/SearchResults.jsx>",
                                lineNumber: 26,
                                columnNumber: 33
                            }, this)
                        ]
                    }, type, true, {
                        fileName: "<[project]/src/components/searchbar/SearchResults.jsx>",
                        lineNumber: 23,
                        columnNumber: 29
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/searchbar/SearchResults.jsx>",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = SearchResults;

})()),
"[project]/src/components/searchbar/SearchBar.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchbar$2f$SearchResults$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/searchbar/SearchResults.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
const SearchBar = ()=>{
    const [searchQuery, setSearchQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]('');
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "searchbar",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["AiOutlineSearch"], {}, void 0, false, {
                fileName: "<[project]/src/components/searchbar/SearchBar.jsx>",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: "text",
                placeholder: "Search for songs, artists...",
                value: searchQuery,
                onChange: (e)=>setSearchQuery(e.target.value)
            }, void 0, false, {
                fileName: "<[project]/src/components/searchbar/SearchBar.jsx>",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchbar$2f$SearchResults$2e$jsx__$28$ecmascript$29$__["default"], {
                query: searchQuery
            }, void 0, false, {
                fileName: "<[project]/src/components/searchbar/SearchBar.jsx>",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/searchbar/SearchBar.jsx>",
        lineNumber: 10,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SearchBar;

})()),
}]);

//# sourceMappingURL=src_5e3ad5._.js.map