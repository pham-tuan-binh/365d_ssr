import { c as create_ssr_component, d as add_attribute, e as escape } from './index-41dea004.js';

function calculateDateFrom(startingDate, numberOfDays) {
  let startDateParts = startingDate.split("/");
  let day = parseInt(startDateParts[0], 10);
  let month = parseInt(startDateParts[1], 10);
  let year = parseInt(startDateParts[2], 10);
  let startDate = new Date(year, month - 1, day);
  let endDate = new Date(startDate.getTime() + numberOfDays * 24 * 60 * 60 * 1e3);
  let calculatedDay = endDate.getDate();
  let calculatedMonth = endDate.getMonth() + 1;
  let calculatedYear = endDate.getFullYear();
  let calculatedDate = calculatedDay.toString().padStart(2, "0") + "/" + calculatedMonth.toString().padStart(2, "0") + "/" + calculatedYear;
  return calculatedDate;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1lo7qcv_START -->${$$result.title = `<title>&quot;365 days&quot; Photo Album</title>`, ""}<meta name="description" content="Art Project by Binh Pham"><!-- HEAD_svelte-1lo7qcv_END -->`, ""}

<div class="w-full h-full flex flex-col justify-start items-center absolute"><div class="w-3/4 flex flex-col space-y-1 my-10 "><span class="mt-5 text-center text-2xl">&quot;365 days&quot; Album</span>
		<span class="mt-5 text-center text-xs">Do you feel special today? Do you need a booster or some sort of universe signal? Well, look
			below.</span></div>
	<img class="w-3/4 bg-gray-100 p-1 drop-shadow-2xl shadow-gray-900 z-20"${add_attribute("src", `/images/${data.slug}.jpg`, 0)} alt="Instagram">
	<div class="w-3/4 flex flex-col"><div class="w-full flex flex-row justify-between z-20"><div class=""><p class="mt-5 text-base ml-1 font-bold">Day ${escape(data.slug)}</p>
				<p class="mt-1 text-xs ml-1">This photo was posted on ${escape(calculateDateFrom("17/08/2022", data.slug))}</p></div>
			<div class="mt-5 flex flex-row justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path></svg></div></div>
		${``}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f7154542.js.map
