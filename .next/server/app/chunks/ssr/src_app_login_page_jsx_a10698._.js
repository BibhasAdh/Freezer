(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_app_login_page_jsx_a10698._.js", {

"[project]/src/app/login/page.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const LoginPage = ()=>{
    const [email, setEmail] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]('');
    const [password, setPassword] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]('');
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    const handleLogin = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        try {
            const response = await fetch('http://localhost/login.php', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                document.cookie = "auth=true";
                router.push('/');
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Failed to connect to login server');
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex min-h-screen items-center justify-center",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
            onSubmit: handleLogin,
            className: "bg-black/30 p-8 rounded-lg w-96",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    className: "text-2xl mb-6 text-center",
                    children: "Login to Music App"
                }, void 0, false, {
                    fileName: "<[project]/src/app/login/page.jsx>",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                        type: "email",
                        placeholder: "Email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        className: "w-full p-2 rounded bg-black/20 border border-gray-600",
                        required: true
                    }, void 0, false, {
                        fileName: "<[project]/src/app/login/page.jsx>",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/login/page.jsx>",
                    lineNumber: 43,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                        type: "password",
                        placeholder: "Password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        className: "w-full p-2 rounded bg-black/20 border border-gray-600",
                        required: true
                    }, void 0, false, {
                        fileName: "<[project]/src/app/login/page.jsx>",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/login/page.jsx>",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    type: "submit",
                    className: "w-full bg-blue-600 hover:bg-blue-700 py-2 rounded",
                    children: "Login"
                }, void 0, false, {
                    fileName: "<[project]/src/app/login/page.jsx>",
                    lineNumber: 65,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mt-4 text-center",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        type: "button",
                        onClick: ()=>router.push('/register'),
                        className: "text-blue-600 hover:underline",
                        children: "Register"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/login/page.jsx>",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/login/page.jsx>",
                    lineNumber: 72,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/login/page.jsx>",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/login/page.jsx>",
        lineNumber: 39,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = LoginPage;

})()),
}]);

//# sourceMappingURL=src_app_login_page_jsx_a10698._.js.map