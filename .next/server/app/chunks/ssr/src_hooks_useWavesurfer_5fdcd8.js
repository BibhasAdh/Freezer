(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_hooks_useWavesurfer_5fdcd8.js", {

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
}]);

//# sourceMappingURL=src_hooks_useWavesurfer_5fdcd8.js.map