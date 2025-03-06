(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_player_Player_jsx_46b427._.js", {

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
}]);

//# sourceMappingURL=src_components_player_Player_jsx_46b427._.js.map