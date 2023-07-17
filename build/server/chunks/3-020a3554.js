const load = ({ params }) => {
  return {
    slug: params.slug
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f7154542.js')).default;
const universal_id = "src/routes/day/[slug]/+page.js";
const imports = ["_app/immutable/nodes/3.e8a4e47b.js","_app/immutable/chunks/index.c310d01a.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-020a3554.js.map
