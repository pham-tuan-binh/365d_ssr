const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","365days/.DS_Store","365days/avatar.png","365days/cloud.png","365days/logo.png","365days/polaroid-cloud.png","365days/sig.gif","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","combined_image_links.csv","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/1.jpg","images/10.jpg","images/100.jpg","images/101.jpg","images/102.jpg","images/103.jpg","images/104.jpg","images/105.jpg","images/106.jpg","images/107.jpg","images/108.jpg","images/109.jpg","images/11.jpg","images/110.jpg","images/111.jpg","images/112.jpg","images/113.jpg","images/114.jpg","images/115.jpg","images/116.jpg","images/117.jpg","images/118.jpg","images/119.jpg","images/12.jpg","images/120.jpg","images/121.jpg","images/122.jpg","images/123.jpg","images/124.jpg","images/125.jpg","images/126.jpg","images/127.jpg","images/128.jpg","images/129.jpg","images/13.jpg","images/130.jpg","images/131.jpg","images/132.jpg","images/133.jpg","images/134.jpg","images/135.jpg","images/136.jpg","images/137.jpg","images/138.jpg","images/139.jpg","images/14.jpg","images/140.jpg","images/141.jpg","images/142.jpg","images/143.jpg","images/144.jpg","images/145.jpg","images/146.jpg","images/147.jpg","images/148.jpg","images/149.jpg","images/15.jpg","images/150.jpg","images/151.jpg","images/152.jpg","images/153.jpg","images/154.jpg","images/155.jpg","images/156.jpg","images/157.jpg","images/158.jpg","images/159.jpg","images/16.jpg","images/160.jpg","images/161.jpg","images/162.jpg","images/163.jpg","images/164.jpg","images/165.jpg","images/166.jpg","images/167.jpg","images/168.jpg","images/169.jpg","images/17.jpg","images/170.jpg","images/171.jpg","images/172.jpg","images/173.jpg","images/174.jpg","images/175.jpg","images/176.jpg","images/177.jpg","images/178.jpg","images/179.jpg","images/18.jpg","images/180.jpg","images/181.jpg","images/182.jpg","images/183.jpg","images/184.jpg","images/185.jpg","images/186.jpg","images/187.jpg","images/188.jpg","images/189.jpg","images/19.jpg","images/190.jpg","images/191.jpg","images/192.jpg","images/193.jpg","images/194.jpg","images/195.jpg","images/196.jpg","images/197.jpg","images/198.jpg","images/199.jpg","images/2.jpg","images/20.jpg","images/200.jpg","images/201.jpg","images/202.jpg","images/203.jpg","images/204.jpg","images/205.jpg","images/206.jpg","images/207.jpg","images/208.jpg","images/209.jpg","images/21.jpg","images/210.jpg","images/211.jpg","images/212.jpg","images/213.jpg","images/214.jpg","images/215.jpg","images/216.jpg","images/217.jpg","images/218.jpg","images/219.jpg","images/22.jpg","images/220.jpg","images/221.jpg","images/222.jpg","images/223.jpg","images/224.jpg","images/225.jpg","images/226.jpg","images/227.jpg","images/228.jpg","images/229.jpg","images/23.jpg","images/230.jpg","images/231.jpg","images/232.jpg","images/233.jpg","images/234.jpg","images/235.jpg","images/236.jpg","images/237.jpg","images/238.jpg","images/239.jpg","images/24.jpg","images/240.jpg","images/241.jpg","images/242.jpg","images/243.jpg","images/244.jpg","images/245.jpg","images/246.jpg","images/247.jpg","images/248.jpg","images/249.jpg","images/25.jpg","images/250.jpg","images/251.jpg","images/252.jpg","images/253.jpg","images/254.jpg","images/255.jpg","images/256.jpg","images/257.jpg","images/258.jpg","images/259.jpg","images/26.jpg","images/260.jpg","images/261.jpg","images/262.jpg","images/263.jpg","images/264.jpg","images/265.jpg","images/266.jpg","images/267.jpg","images/268.jpg","images/269.jpg","images/27.jpg","images/270.jpg","images/271.jpg","images/272.jpg","images/273.jpg","images/274.jpg","images/275.jpg","images/276.jpg","images/277.jpg","images/278.jpg","images/279.jpg","images/28.jpg","images/280.jpg","images/281.jpg","images/282.jpg","images/283.jpg","images/284.jpg","images/285.jpg","images/286.jpg","images/287.jpg","images/288.jpg","images/289.jpg","images/29.jpg","images/290.jpg","images/291.jpg","images/292.jpg","images/293.jpg","images/294.jpg","images/295.jpg","images/296.jpg","images/297.jpg","images/298.jpg","images/299.jpg","images/3.jpg","images/30.jpg","images/300.jpg","images/301.jpg","images/302.jpg","images/303.jpg","images/304.jpg","images/305.jpg","images/306.jpg","images/307.jpg","images/308.jpg","images/309.jpg","images/31.jpg","images/310.jpg","images/311.jpg","images/312.jpg","images/313.jpg","images/314.jpg","images/315.jpg","images/316.jpg","images/317.jpg","images/318.jpg","images/319.jpg","images/32.jpg","images/320.jpg","images/321.jpg","images/322.jpg","images/323.jpg","images/33.jpg","images/34.jpg","images/35.jpg","images/36.jpg","images/37.jpg","images/38.jpg","images/39.jpg","images/4.jpg","images/40.jpg","images/41.jpg","images/42.jpg","images/43.jpg","images/44.jpg","images/45.jpg","images/46.jpg","images/47.jpg","images/48.jpg","images/49.jpg","images/5.jpg","images/50.jpg","images/51.jpg","images/52.jpg","images/53.jpg","images/54.jpg","images/55.jpg","images/56.jpg","images/57.jpg","images/58.jpg","images/59.jpg","images/6.jpg","images/60.jpg","images/61.jpg","images/62.jpg","images/63.jpg","images/64.jpg","images/65.jpg","images/66.jpg","images/67.jpg","images/68.jpg","images/69.jpg","images/7.jpg","images/70.jpg","images/71.jpg","images/72.jpg","images/73.jpg","images/74.jpg","images/75.jpg","images/76.jpg","images/77.jpg","images/78.jpg","images/79.jpg","images/8.jpg","images/80.jpg","images/81.jpg","images/82.jpg","images/83.jpg","images/84.jpg","images/85.jpg","images/86.jpg","images/87.jpg","images/88.jpg","images/89.jpg","images/9.jpg","images/90.jpg","images/91.jpg","images/92.jpg","images/93.jpg","images/94.jpg","images/95.jpg","images/96.jpg","images/97.jpg","images/98.jpg","images/99.jpg","robots.txt","site.webmanifest","test.sh"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".csv":"text/csv",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg",".txt":"text/plain",".webmanifest":"application/manifest+json",".sh":"application/x-sh"},
	_: {
		client: {"start":"_app/immutable/entry/start.8a3a57ef.js","app":"_app/immutable/entry/app.2f6aac00.js","imports":["_app/immutable/entry/start.8a3a57ef.js","_app/immutable/chunks/index.c310d01a.js","_app/immutable/chunks/singletons.6f2e1259.js","_app/immutable/entry/app.2f6aac00.js","_app/immutable/chunks/index.c310d01a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-f1b2b08b.js')),
			__memo(() => import('./chunks/1-cc876016.js')),
			__memo(() => import('./chunks/2-67f6d0d2.js')),
			__memo(() => import('./chunks/3-020a3554.js'))
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
				id: "/day/[slug]",
				pattern: /^\/day\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/quote",
				pattern: /^\/quote\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-7e2843fd.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
