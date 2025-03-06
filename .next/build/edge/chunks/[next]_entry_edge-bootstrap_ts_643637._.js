(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
    "chunks/[next]_entry_edge-bootstrap_ts_643637._.js",
    {},
    {"otherChunks":[{"path":"chunks/src_middleware_eb93e5.js","included":["[project]/src/middleware.js (ecmascript, ecmascript)"]},{"path":"chunks/src_middleware_js_bootstrap-config_ts_77c932._.js","included":["[project]/src/middleware.js/bootstrap-config.ts (ecmascript)"]},{"path":"chunks/node_modules_next_5570d9._.js","included":["[project]/node_modules/next/server.js (ecmascript)","[project]/node_modules/next/dist/compiled/process/browser.js (ecmascript)","[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js (ecmascript)","[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript)","[project]/node_modules/next/dist/shared/lib/get-hostname.js (ecmascript)","[project]/node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js (ecmascript)","[project]/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js (ecmascript)","[project]/node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js (ecmascript)","[project]/node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js (ecmascript)","[project]/node_modules/next/dist/server/web/globals.js (ecmascript)","[project]/node_modules/next/dist/server/web/adapter.js (ecmascript)"]},{"path":"chunks/node_modules_next_dist_server_internal-utils_f02507.js","included":["[project]/node_modules/next/dist/server/internal-utils.js (ecmascript)"]},{"path":"chunks/node_modules_next_dist_lib_constants_1a2752.js","included":["[project]/node_modules/next/dist/lib/constants.js (ecmascript)"]},{"path":"chunks/node_modules_next_dist_shared_lib_page-path_ensure-leading-slash_4016e7.js","included":["[project]/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js (ecmascript)"]},{"path":"chunks/node_modules_next_dist_shared_lib_router_utils_relativize-url_1e1953.js","included":["[project]/node_modules/next/dist/shared/lib/router/utils/relativize-url.js (ecmascript)"]},{"path":"chunks/node_modules_next_dist_shared_lib_router_utils_app-paths_3b59a7.js","included":["[project]/node_modules/next/dist/shared/lib/router/utils/app-paths.js (ecmascript)"]},{"path":"chunks/node_modules_next_dist_client_components_app-router-headers_cf27bd.js","included":["[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript)"]},{"path":"chunks/[next]_entry_edge-bootstrap_ts_192a4e._.js","included":["[next]/entry/edge-bootstrap.ts/(ROUTE_MODULE)/[project]/node_modules/next/dist/server/future/route-modules/app-route/module.js (ecmascript)/(ENTRY)/[project]/src/middleware.js (ecmascript, ecmascript)/(BOOTSTRAP_CONFIG)/[project]/src/middleware.js/bootstrap-config.ts (ecmascript) (ecmascript)"]}],"runtimeModuleIds":["[next]/entry/edge-bootstrap.ts/(ROUTE_MODULE)/[project]/node_modules/next/dist/server/future/route-modules/app-route/module.js (ecmascript)/(ENTRY)/[project]/src/middleware.js (ecmascript, ecmascript)/(BOOTSTRAP_CONFIG)/[project]/src/middleware.js/bootstrap-config.ts (ecmascript) (ecmascript)"]}
]);
(() => {
if (!Array.isArray(globalThis.TURBOPACK)) {
    return;
}
;
;
;
;
;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag;
function defineProp(obj, name, options) {
    if (!hasOwnProperty.call(obj, name)) Object.defineProperty(obj, name, options);
}
function esm(exports, getters) {
    defineProp(exports, "__esModule", {
        value: true
    });
    if (toStringTag) defineProp(exports, toStringTag, {
        value: "Module"
    });
    for(const key in getters){
        defineProp(exports, key, {
            get: getters[key],
            enumerable: true
        });
    }
}
function esmExport(module, getters) {
    esm(module.namespaceObject = module.exports, getters);
}
function cjsExport(exports, props) {
    for(const key in props){
        defineProp(exports, key, {
            get: ()=>props[key],
            enumerable: true
        });
    }
}
function exportValue(module, value) {
    module.exports = value;
}
function exportNamespace(module, namespace) {
    module.exports = module.namespaceObject = namespace;
}
function createGetter(obj, key) {
    return ()=>obj[key];
}
const getProto = Object.getPrototypeOf ? (obj)=>Object.getPrototypeOf(obj) : (obj)=>obj.__proto__;
const LEAF_PROTOTYPES = [
    null,
    getProto({}),
    getProto([]),
    getProto(getProto)
];
function interopEsm(raw, ns, allowExportDefault) {
    const getters = Object.create(null);
    for(let current = raw; (typeof current === "object" || typeof current === "function") && !LEAF_PROTOTYPES.includes(current); current = getProto(current)){
        for (const key of Object.getOwnPropertyNames(current)){
            getters[key] = createGetter(raw, key);
        }
    }
    if (!(allowExportDefault && "default" in getters)) {
        getters["default"] = ()=>raw;
    }
    esm(ns, getters);
}
function esmImport(sourceModule, id) {
    const module = getOrInstantiateModuleFromParent(id, sourceModule);
    if (module.error) throw module.error;
    if (module.namespaceObject) return module.namespaceObject;
    const raw = module.exports;
    const ns = module.namespaceObject = {};
    interopEsm(raw, ns, raw.__esModule);
    return ns;
}
function commonJsRequire(sourceModule, id) {
    const module = getOrInstantiateModuleFromParent(id, sourceModule);
    if (module.error) throw module.error;
    return module.exports;
}
function requireContext(sourceModule, map) {
    function requireContext(id) {
        const entry = map[id];
        if (!entry) {
            throw new Error(`module ${id} is required from a require.context, but is not in the context`);
        }
        return commonJsRequireContext(entry, sourceModule);
    }
    requireContext.keys = ()=>{
        return Object.keys(map);
    };
    requireContext.resolve = (id)=>{
        const entry = map[id];
        if (!entry) {
            throw new Error(`module ${id} is resolved from a require.context, but is not in the context`);
        }
        return entry.id();
    };
    return requireContext;
}
function getChunkPath(chunkData) {
    return typeof chunkData === "string" ? chunkData : chunkData.path;
}
;
;
;
;
;
;
var SourceType;
(function(SourceType) {
    SourceType[SourceType["Runtime"] = 0] = "Runtime";
    SourceType[SourceType["Parent"] = 1] = "Parent";
    SourceType[SourceType["Update"] = 2] = "Update";
})(SourceType || (SourceType = {}));
;
const moduleFactories = Object.create(null);
const moduleCache = Object.create(null);
const moduleHotData = new Map();
const moduleHotState = new Map();
const queuedInvalidatedModules = new Set();
const runtimeModules = new Set();
const moduleChunksMap = new Map();
const chunkModulesMap = new Map();
const runtimeChunkLists = new Set();
const chunkListChunksMap = new Map();
const chunkChunkListsMap = new Map();
const availableModules = new Map();
const availableModuleChunks = new Map();
async function loadChunk(source, chunkData) {
    if (typeof chunkData === "string") {
        return loadChunkPath(source, chunkData);
    }
    const includedList = chunkData.included || [];
    const modulesPromises = includedList.map((included)=>{
        if (moduleFactories[included]) return true;
        return availableModules.get(included);
    });
    if (modulesPromises.length > 0 && modulesPromises.every((p)=>p)) {
        return Promise.all(modulesPromises);
    }
    const includedModuleChunksList = chunkData.moduleChunks || [];
    const moduleChunksPromises = includedModuleChunksList.map((included)=>{
        return availableModuleChunks.get(included);
    }).filter((p)=>p);
    let promise;
    if (moduleChunksPromises.length > 0) {
        if (moduleChunksPromises.length == includedModuleChunksList.length) {
            return Promise.all(moduleChunksPromises);
        }
        const moduleChunksToLoad = new Set();
        for (const moduleChunk of includedModuleChunksList){
            if (!availableModuleChunks.has(moduleChunk)) {
                moduleChunksToLoad.add(moduleChunk);
            }
        }
        for (const moduleChunkToLoad of moduleChunksToLoad){
            const promise = loadChunkPath(source, moduleChunkToLoad);
            availableModuleChunks.set(moduleChunkToLoad, promise);
            moduleChunksPromises.push(promise);
        }
        promise = Promise.all(moduleChunksPromises);
    } else {
        promise = loadChunkPath(source, chunkData.path);
        for (const includedModuleChunk of includedModuleChunksList){
            if (!availableModuleChunks.has(includedModuleChunk)) {
                availableModuleChunks.set(includedModuleChunk, promise);
            }
        }
    }
    for (const included of includedList){
        if (!availableModules.has(included)) {
            availableModules.set(included, promise);
        }
    }
    return promise;
}
async function loadChunkPath(source, chunkPath) {
    try {
        await BACKEND.loadChunk(chunkPath, source);
    } catch (error) {
        let loadReason;
        switch(source.type){
            case SourceType.Runtime:
                loadReason = `as a runtime dependency of chunk ${source.chunkPath}`;
                break;
            case SourceType.Parent:
                loadReason = `from module ${source.parentId}`;
                break;
            case SourceType.Update:
                loadReason = "from an HMR update";
                break;
        }
        throw new Error(`Failed to load chunk ${chunkPath} ${loadReason}${error ? `: ${error}` : ""}`, error ? {
            cause: error
        } : undefined);
    }
}
function instantiateModule(id, source) {
    const moduleFactory = moduleFactories[id];
    if (typeof moduleFactory !== "function") {
        let instantiationReason;
        switch(source.type){
            case SourceType.Runtime:
                instantiationReason = `as a runtime entry of chunk ${source.chunkPath}`;
                break;
            case SourceType.Parent:
                instantiationReason = `because it was required from module ${source.parentId}`;
                break;
            case SourceType.Update:
                instantiationReason = "because of an HMR update";
                break;
        }
        throw new Error(`Module ${id} was instantiated ${instantiationReason}, but the module factory is not available. It might have been deleted in an HMR update.`);
    }
    const hotData = moduleHotData.get(id);
    const { hot, hotState } = createModuleHot(id, hotData);
    let parents;
    switch(source.type){
        case SourceType.Runtime:
            runtimeModules.add(id);
            parents = [];
            break;
        case SourceType.Parent:
            parents = [
                source.parentId
            ];
            break;
        case SourceType.Update:
            parents = source.parents || [];
            break;
    }
    const module = {
        exports: {},
        error: undefined,
        loaded: false,
        id,
        parents,
        children: [],
        namespaceObject: undefined,
        hot
    };
    moduleCache[id] = module;
    moduleHotState.set(module, hotState);
    try {
        runModuleExecutionHooks(module, (refresh)=>{
            moduleFactory.call(module.exports, augmentContext({
                e: module.exports,
                r: commonJsRequire.bind(null, module),
                f: requireContext.bind(null, module),
                i: esmImport.bind(null, module),
                s: esmExport.bind(null, module),
                j: cjsExport.bind(null, module.exports),
                v: exportValue.bind(null, module),
                n: exportNamespace.bind(null, module),
                m: module,
                c: moduleCache,
                l: loadChunk.bind(null, {
                    type: SourceType.Parent,
                    parentId: id
                }),
                g: globalThis,
                k: refresh,
                __dirname: module.id.replace(/(^|\/)\/+$/, "")
            }));
        });
    } catch (error) {
        module.error = error;
        throw error;
    }
    module.loaded = true;
    if (module.namespaceObject && module.exports !== module.namespaceObject) {
        interopEsm(module.exports, module.namespaceObject);
    }
    return module;
}
function runModuleExecutionHooks(module, executeModule) {
    const cleanupReactRefreshIntercept = typeof globalThis.$RefreshInterceptModuleExecution$ === "function" ? globalThis.$RefreshInterceptModuleExecution$(module.id) : ()=>{};
    try {
        executeModule({
            register: globalThis.$RefreshReg$,
            signature: globalThis.$RefreshSig$
        });
        if ("$RefreshHelpers$" in globalThis) {
            registerExportsAndSetupBoundaryForReactRefresh(module, globalThis.$RefreshHelpers$);
        }
    } catch (e) {
        throw e;
    } finally{
        cleanupReactRefreshIntercept();
    }
}
const getOrInstantiateModuleFromParent = (id, sourceModule)=>{
    if (!sourceModule.hot.active) {
        console.warn(`Unexpected import of module ${id} from module ${sourceModule.id}, which was deleted by an HMR update`);
    }
    const module = moduleCache[id];
    if (sourceModule.children.indexOf(id) === -1) {
        sourceModule.children.push(id);
    }
    if (module) {
        if (module.parents.indexOf(sourceModule.id) === -1) {
            module.parents.push(sourceModule.id);
        }
        return module;
    }
    return instantiateModule(id, {
        type: SourceType.Parent,
        parentId: sourceModule.id
    });
};
function registerExportsAndSetupBoundaryForReactRefresh(module, helpers) {
    const currentExports = module.exports;
    const prevExports = module.hot.data.prevExports ?? null;
    helpers.registerExportsForReactRefresh(currentExports, module.id);
    if (helpers.isReactRefreshBoundary(currentExports)) {
        module.hot.dispose((data)=>{
            data.prevExports = currentExports;
        });
        module.hot.accept();
        if (prevExports !== null) {
            if (helpers.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                module.hot.invalidate();
            } else {
                helpers.scheduleUpdate();
            }
        }
    } else {
        const isNoLongerABoundary = prevExports !== null;
        if (isNoLongerABoundary) {
            module.hot.invalidate();
        }
    }
}
function formatDependencyChain(dependencyChain) {
    return `Dependency chain: ${dependencyChain.join(" -> ")}`;
}
function computeOutdatedModules(added, modified) {
    const newModuleFactories = new Map();
    for (const [moduleId, entry] of added){
        if (entry != null) {
            newModuleFactories.set(moduleId, _eval(entry));
        }
    }
    const outdatedModules = computedInvalidatedModules(modified.keys());
    for (const [moduleId, entry] of modified){
        newModuleFactories.set(moduleId, _eval(entry));
    }
    return {
        outdatedModules,
        newModuleFactories
    };
}
function computedInvalidatedModules(invalidated) {
    const outdatedModules = new Set();
    for (const moduleId of invalidated){
        const effect = getAffectedModuleEffects(moduleId);
        switch(effect.type){
            case "unaccepted":
                throw new Error(`cannot apply update: unaccepted module. ${formatDependencyChain(effect.dependencyChain)}.`);
            case "self-declined":
                throw new Error(`cannot apply update: self-declined module. ${formatDependencyChain(effect.dependencyChain)}.`);
            case "accepted":
                for (const outdatedModuleId of effect.outdatedModules){
                    outdatedModules.add(outdatedModuleId);
                }
                break;
        }
    }
    return outdatedModules;
}
function computeOutdatedSelfAcceptedModules(outdatedModules) {
    const outdatedSelfAcceptedModules = [];
    for (const moduleId of outdatedModules){
        const module = moduleCache[moduleId];
        const hotState = moduleHotState.get(module);
        if (module && hotState.selfAccepted && !hotState.selfInvalidated) {
            outdatedSelfAcceptedModules.push({
                moduleId,
                errorHandler: hotState.selfAccepted
            });
        }
    }
    return outdatedSelfAcceptedModules;
}
function updateChunksPhase(chunksAddedModules, chunksDeletedModules) {
    for (const [chunkPath, addedModuleIds] of chunksAddedModules){
        for (const moduleId of addedModuleIds){
            addModuleToChunk(moduleId, chunkPath);
        }
    }
    const disposedModules = new Set();
    for (const [chunkPath, addedModuleIds] of chunksDeletedModules){
        for (const moduleId of addedModuleIds){
            if (removeModuleFromChunk(moduleId, chunkPath)) {
                disposedModules.add(moduleId);
            }
        }
    }
    return {
        disposedModules
    };
}
function disposePhase(outdatedModules, disposedModules) {
    for (const moduleId of outdatedModules){
        disposeModule(moduleId, "replace");
    }
    for (const moduleId of disposedModules){
        disposeModule(moduleId, "clear");
    }
    const outdatedModuleParents = new Map();
    for (const moduleId of outdatedModules){
        const oldModule = moduleCache[moduleId];
        outdatedModuleParents.set(moduleId, oldModule?.parents);
        delete moduleCache[moduleId];
    }
    return {
        outdatedModuleParents
    };
}
function disposeModule(moduleId, mode) {
    const module = moduleCache[moduleId];
    if (!module) {
        return;
    }
    const hotState = moduleHotState.get(module);
    const data = {};
    for (const disposeHandler of hotState.disposeHandlers){
        disposeHandler(data);
    }
    module.hot.active = false;
    moduleHotState.delete(module);
    for (const childId of module.children){
        const child = moduleCache[childId];
        if (!child) {
            continue;
        }
        const idx = child.parents.indexOf(module.id);
        if (idx >= 0) {
            child.parents.splice(idx, 1);
        }
    }
    switch(mode){
        case "clear":
            delete moduleCache[module.id];
            moduleHotData.delete(module.id);
            break;
        case "replace":
            moduleHotData.set(module.id, data);
            break;
        default:
            invariant(mode, (mode)=>`invalid mode: ${mode}`);
    }
}
function applyPhase(outdatedSelfAcceptedModules, newModuleFactories, outdatedModuleParents, reportError) {
    for (const [moduleId, factory] of newModuleFactories.entries()){
        moduleFactories[moduleId] = factory;
    }
    for (const { moduleId, errorHandler } of outdatedSelfAcceptedModules){
        try {
            instantiateModule(moduleId, {
                type: SourceType.Update,
                parents: outdatedModuleParents.get(moduleId)
            });
        } catch (err) {
            if (typeof errorHandler === "function") {
                try {
                    errorHandler(err, {
                        moduleId,
                        module: moduleCache[moduleId]
                    });
                } catch (err2) {
                    reportError(err2);
                    reportError(err);
                }
            } else {
                reportError(err);
            }
        }
    }
}
function invariant(never, computeMessage) {
    throw new Error(`Invariant: ${computeMessage(never)}`);
}
function applyUpdate(chunkListPath, update) {
    switch(update.type){
        case "ChunkListUpdate":
            applyChunkListUpdate(chunkListPath, update);
            break;
        default:
            invariant(update, (update)=>`Unknown update type: ${update.type}`);
    }
}
function applyChunkListUpdate(chunkListPath, update) {
    if (update.merged != null) {
        for (const merged of update.merged){
            switch(merged.type){
                case "EcmascriptMergedUpdate":
                    applyEcmascriptMergedUpdate(chunkListPath, merged);
                    break;
                default:
                    invariant(merged, (merged)=>`Unknown merged type: ${merged.type}`);
            }
        }
    }
    if (update.chunks != null) {
        for (const [chunkPath, chunkUpdate] of Object.entries(update.chunks)){
            switch(chunkUpdate.type){
                case "added":
                    BACKEND.loadChunk(chunkPath, {
                        type: SourceType.Update
                    });
                    break;
                case "total":
                    BACKEND.reloadChunk?.(chunkPath);
                    break;
                case "deleted":
                    BACKEND.unloadChunk?.(chunkPath);
                    break;
                case "partial":
                    invariant(chunkUpdate.instruction, (instruction)=>`Unknown partial instruction: ${JSON.stringify(instruction)}.`);
                default:
                    invariant(chunkUpdate, (chunkUpdate)=>`Unknown chunk update type: ${chunkUpdate.type}`);
            }
        }
    }
}
function applyEcmascriptMergedUpdate(chunkPath, update) {
    const { entries = {}, chunks = {} } = update;
    const { added, modified, chunksAdded, chunksDeleted } = computeChangedModules(entries, chunks);
    const { outdatedModules, newModuleFactories } = computeOutdatedModules(added, modified);
    const { disposedModules } = updateChunksPhase(chunksAdded, chunksDeleted);
    applyInternal(outdatedModules, disposedModules, newModuleFactories);
}
function applyInvalidatedModules(outdatedModules) {
    if (queuedInvalidatedModules.size > 0) {
        computedInvalidatedModules(queuedInvalidatedModules).forEach((moduleId)=>{
            outdatedModules.add(moduleId);
        });
        queuedInvalidatedModules.clear();
    }
    return outdatedModules;
}
function applyInternal(outdatedModules, disposedModules, newModuleFactories) {
    outdatedModules = applyInvalidatedModules(outdatedModules);
    const outdatedSelfAcceptedModules = computeOutdatedSelfAcceptedModules(outdatedModules);
    const { outdatedModuleParents } = disposePhase(outdatedModules, disposedModules);
    let error;
    function reportError(err) {
        if (!error) error = err;
    }
    applyPhase(outdatedSelfAcceptedModules, newModuleFactories, outdatedModuleParents, reportError);
    if (error) {
        throw error;
    }
    if (queuedInvalidatedModules.size > 0) {
        applyInternal(new Set(), [], new Map());
    }
}
function computeChangedModules(entries, updates) {
    const chunksAdded = new Map();
    const chunksDeleted = new Map();
    const added = new Map();
    const modified = new Map();
    const deleted = new Set();
    for (const [chunkPath, mergedChunkUpdate] of Object.entries(updates)){
        switch(mergedChunkUpdate.type){
            case "added":
                {
                    const updateAdded = new Set(mergedChunkUpdate.modules);
                    for (const moduleId of updateAdded){
                        added.set(moduleId, entries[moduleId]);
                    }
                    chunksAdded.set(chunkPath, updateAdded);
                    break;
                }
            case "deleted":
                {
                    const updateDeleted = new Set(chunkModulesMap.get(chunkPath));
                    for (const moduleId of updateDeleted){
                        deleted.add(moduleId);
                    }
                    chunksDeleted.set(chunkPath, updateDeleted);
                    break;
                }
            case "partial":
                {
                    const updateAdded = new Set(mergedChunkUpdate.added);
                    const updateDeleted = new Set(mergedChunkUpdate.deleted);
                    for (const moduleId of updateAdded){
                        added.set(moduleId, entries[moduleId]);
                    }
                    for (const moduleId of updateDeleted){
                        deleted.add(moduleId);
                    }
                    chunksAdded.set(chunkPath, updateAdded);
                    chunksDeleted.set(chunkPath, updateDeleted);
                    break;
                }
            default:
                invariant(mergedChunkUpdate, (mergedChunkUpdate)=>`Unknown merged chunk update type: ${mergedChunkUpdate.type}`);
        }
    }
    for (const moduleId of added.keys()){
        if (deleted.has(moduleId)) {
            added.delete(moduleId);
            deleted.delete(moduleId);
        }
    }
    for (const [moduleId, entry] of Object.entries(entries)){
        if (!added.has(moduleId)) {
            modified.set(moduleId, entry);
        }
    }
    return {
        added,
        deleted,
        modified,
        chunksAdded,
        chunksDeleted
    };
}
function getAffectedModuleEffects(moduleId) {
    const outdatedModules = new Set();
    const queue = [
        {
            moduleId,
            dependencyChain: []
        }
    ];
    let nextItem;
    while(nextItem = queue.shift()){
        const { moduleId, dependencyChain } = nextItem;
        if (moduleId != null) {
            outdatedModules.add(moduleId);
        }
        if (moduleId === undefined) {
            return {
                type: "unaccepted",
                dependencyChain
            };
        }
        const module = moduleCache[moduleId];
        const hotState = moduleHotState.get(module);
        if (!module || hotState.selfAccepted && !hotState.selfInvalidated) {
            continue;
        }
        if (hotState.selfDeclined) {
            return {
                type: "self-declined",
                dependencyChain,
                moduleId
            };
        }
        if (runtimeModules.has(moduleId)) {
            queue.push({
                moduleId: undefined,
                dependencyChain: [
                    ...dependencyChain,
                    moduleId
                ]
            });
            continue;
        }
        for (const parentId of module.parents){
            const parent = moduleCache[parentId];
            if (!parent) {
                continue;
            }
            queue.push({
                moduleId: parentId,
                dependencyChain: [
                    ...dependencyChain,
                    moduleId
                ]
            });
        }
    }
    return {
        type: "accepted",
        moduleId,
        outdatedModules
    };
}
function handleApply(chunkListPath, update) {
    switch(update.type){
        case "partial":
            {
                applyUpdate(chunkListPath, update.instruction);
                break;
            }
        case "restart":
            {
                BACKEND.restart();
                break;
            }
        case "notFound":
            {
                if (runtimeChunkLists.has(chunkListPath)) {
                    BACKEND.restart();
                } else {
                    disposeChunkList(chunkListPath);
                }
                break;
            }
        default:
            throw new Error(`Unknown update type: ${update.type}`);
    }
}
function createModuleHot(moduleId, hotData) {
    const hotState = {
        selfAccepted: false,
        selfDeclined: false,
        selfInvalidated: false,
        disposeHandlers: []
    };
    const hot = {
        active: true,
        data: hotData ?? {},
        accept: (modules, _callback, _errorHandler)=>{
            if (modules === undefined) {
                hotState.selfAccepted = true;
            } else if (typeof modules === "function") {
                hotState.selfAccepted = modules;
            } else {
                throw new Error("unsupported `accept` signature");
            }
        },
        decline: (dep)=>{
            if (dep === undefined) {
                hotState.selfDeclined = true;
            } else {
                throw new Error("unsupported `decline` signature");
            }
        },
        dispose: (callback)=>{
            hotState.disposeHandlers.push(callback);
        },
        addDisposeHandler: (callback)=>{
            hotState.disposeHandlers.push(callback);
        },
        removeDisposeHandler: (callback)=>{
            const idx = hotState.disposeHandlers.indexOf(callback);
            if (idx >= 0) {
                hotState.disposeHandlers.splice(idx, 1);
            }
        },
        invalidate: ()=>{
            hotState.selfInvalidated = true;
            queuedInvalidatedModules.add(moduleId);
        },
        status: ()=>"idle",
        addStatusHandler: (_handler)=>{},
        removeStatusHandler: (_handler)=>{}
    };
    return {
        hot,
        hotState
    };
}
function addModuleToChunk(moduleId, chunkPath) {
    let moduleChunks = moduleChunksMap.get(moduleId);
    if (!moduleChunks) {
        moduleChunks = new Set([
            chunkPath
        ]);
        moduleChunksMap.set(moduleId, moduleChunks);
    } else {
        moduleChunks.add(chunkPath);
    }
    let chunkModules = chunkModulesMap.get(chunkPath);
    if (!chunkModules) {
        chunkModules = new Set([
            moduleId
        ]);
        chunkModulesMap.set(chunkPath, chunkModules);
    } else {
        chunkModules.add(moduleId);
    }
}
function getFirstModuleChunk(moduleId) {
    const moduleChunkPaths = moduleChunksMap.get(moduleId);
    if (moduleChunkPaths == null) {
        return null;
    }
    return moduleChunkPaths.values().next().value;
}
function removeModuleFromChunk(moduleId, chunkPath) {
    const moduleChunks = moduleChunksMap.get(moduleId);
    moduleChunks.delete(chunkPath);
    const chunkModules = chunkModulesMap.get(chunkPath);
    chunkModules.delete(moduleId);
    const noRemainingModules = chunkModules.size === 0;
    if (noRemainingModules) {
        chunkModulesMap.delete(chunkPath);
    }
    const noRemainingChunks = moduleChunks.size === 0;
    if (noRemainingChunks) {
        moduleChunksMap.delete(moduleId);
    }
    return noRemainingChunks;
}
function disposeChunkList(chunkListPath) {
    const chunkPaths = chunkListChunksMap.get(chunkListPath);
    if (chunkPaths == null) {
        return false;
    }
    chunkListChunksMap.delete(chunkListPath);
    for (const chunkPath of chunkPaths){
        const chunkChunkLists = chunkChunkListsMap.get(chunkPath);
        chunkChunkLists.delete(chunkListPath);
        if (chunkChunkLists.size === 0) {
            chunkChunkListsMap.delete(chunkPath);
            disposeChunk(chunkPath);
        }
    }
    BACKEND.unloadChunk?.(chunkListPath);
    return true;
}
function disposeChunk(chunkPath) {
    BACKEND.unloadChunk?.(chunkPath);
    const chunkModules = chunkModulesMap.get(chunkPath);
    if (chunkModules == null) {
        return false;
    }
    chunkModules.delete(chunkPath);
    for (const moduleId of chunkModules){
        const moduleChunks = moduleChunksMap.get(moduleId);
        moduleChunks.delete(chunkPath);
        const noRemainingChunks = moduleChunks.size === 0;
        if (noRemainingChunks) {
            moduleChunksMap.delete(moduleId);
            disposeModule(moduleId, "clear");
            availableModules.delete(moduleId);
        }
    }
    return true;
}
function instantiateRuntimeModule(moduleId, chunkPath) {
    return instantiateModule(moduleId, {
        type: SourceType.Runtime,
        chunkPath
    });
}
function getOrInstantiateRuntimeModule(moduleId, chunkPath) {
    const module = moduleCache[moduleId];
    if (module) {
        if (module.error) {
            throw module.error;
        }
        return module;
    }
    return instantiateModule(moduleId, {
        type: SourceType.Runtime,
        chunkPath
    });
}
function registerChunkList(chunkUpdateProvider, chunkList) {
    chunkUpdateProvider.push([
        chunkList.path,
        handleApply.bind(null, chunkList.path)
    ]);
    const chunks = new Set(chunkList.chunks.map(getChunkPath));
    chunkListChunksMap.set(chunkList.path, chunks);
    for (const chunkPath of chunks){
        let chunkChunkLists = chunkChunkListsMap.get(chunkPath);
        if (!chunkChunkLists) {
            chunkChunkLists = new Set([
                chunkList.path
            ]);
            chunkChunkListsMap.set(chunkPath, chunkChunkLists);
        } else {
            chunkChunkLists.add(chunkList.path);
        }
    }
    if (chunkList.source === "entry") {
        markChunkListAsRuntime(chunkList.path);
    }
}
function markChunkListAsRuntime(chunkListPath) {
    runtimeChunkLists.add(chunkListPath);
}
function registerChunk([chunkPath, chunkModules, runtimeParams]) {
    for (const [moduleId, moduleFactory] of Object.entries(chunkModules)){
        if (!moduleFactories[moduleId]) {
            moduleFactories[moduleId] = moduleFactory;
        }
        addModuleToChunk(moduleId, chunkPath);
    }
    return BACKEND.registerChunk(chunkPath, runtimeParams);
}
globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS ??= [];
const chunkListsToRegister = globalThis.TURBOPACK_CHUNK_LISTS;
if (Array.isArray(chunkListsToRegister)) {
    for (const chunkList of chunkListsToRegister){
        registerChunkList(globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS, chunkList);
    }
}
globalThis.TURBOPACK_CHUNK_LISTS = {
    push: (chunkList)=>{
        registerChunkList(globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS, chunkList);
    }
};
let BACKEND;
function augmentContext(context) {
    return context;
}
function commonJsRequireContext(entry, sourceModule) {
    return commonJsRequire(sourceModule, entry.id());
}
(()=>{
    BACKEND = {
        registerChunk (chunkPath, params) {
            registeredChunks.add(chunkPath);
            instantiateDependentChunks(chunkPath);
            if (params == null) {
                return;
            }
            if (params.otherChunks.length === 0) {
                instantiateRuntimeModules(params.runtimeModuleIds, chunkPath);
            } else {
                registerChunkRunner(chunkPath, params.otherChunks, params.runtimeModuleIds);
            }
        },
        loadChunk (chunkPath, fromChunkPath) {
            throw new Error("chunk loading is not supported");
        },
        restart: ()=>{
            throw new Error("restart is not supported");
        }
    };
    const registeredChunks = new Set();
    const runners = new Map();
    function registerChunkRunner(chunkPath, otherChunks, runtimeModuleIds) {
        const requiredChunks = new Set();
        const runner = {
            runtimeModuleIds,
            chunkPath,
            requiredChunks
        };
        for (const otherChunkData of otherChunks){
            const otherChunkPath = getChunkPath(otherChunkData);
            if (registeredChunks.has(otherChunkPath)) {
                continue;
            }
            requiredChunks.add(otherChunkPath);
            let runnersForChunk = runners.get(otherChunkPath);
            if (runnersForChunk == null) {
                runnersForChunk = new Set();
                runners.set(otherChunkPath, runnersForChunk);
            }
            runnersForChunk.add(runner);
        }
        if (runner.requiredChunks.size === 0) {
            instantiateRuntimeModules(runner.runtimeModuleIds, runner.chunkPath);
        }
    }
    function instantiateDependentChunks(chunkPath) {
        const runnersForChunk = runners.get(chunkPath);
        if (runnersForChunk != null) {
            for (const runner of runnersForChunk){
                runner.requiredChunks.delete(chunkPath);
                if (runner.requiredChunks.size === 0) {
                    instantiateRuntimeModules(runner.runtimeModuleIds, runner.chunkPath);
                }
            }
            runners.delete(chunkPath);
        }
    }
    function instantiateRuntimeModules(runtimeModuleIds, chunkPath) {
        for (const moduleId of runtimeModuleIds){
            getOrInstantiateRuntimeModule(moduleId, chunkPath);
        }
    }
})();
function _eval({ code, url, map }) {
    throw new Error("HMR evaluation is not implemented on this backend");
}
const chunksToRegister = globalThis.TURBOPACK;
globalThis.TURBOPACK = { push: registerChunk };
chunksToRegister.forEach(registerChunk);
})();


//# sourceMappingURL=[next]_entry_edge-bootstrap_ts_643637._.js.map