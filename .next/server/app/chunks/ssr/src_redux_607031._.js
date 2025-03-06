(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_redux_607031._.js", {

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
}]);

//# sourceMappingURL=src_redux_607031._.js.map