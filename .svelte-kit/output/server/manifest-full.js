export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Co_PTj2R.js","app":"_app/immutable/entry/app.C-AGHgb-.js","imports":["_app/immutable/entry/start.Co_PTj2R.js","_app/immutable/chunks/entry.YSNzN-GH.js","_app/immutable/chunks/scheduler.I_uqlSKq.js","_app/immutable/chunks/index.ULM4vl0B.js","_app/immutable/entry/app.C-AGHgb-.js","_app/immutable/chunks/scheduler.I_uqlSKq.js","_app/immutable/chunks/index.Dnod5cps.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/category/[category]",
				pattern: /^\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/item/[id]",
				pattern: /^\/item\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/vendor/[vendor]",
				pattern: /^\/vendor\/([^/]+?)\/?$/,
				params: [{"name":"vendor","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
