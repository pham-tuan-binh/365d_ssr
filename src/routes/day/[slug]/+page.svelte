<script>
  import { onMount } from "svelte";
  export let data;

  let randomQuote = 0;
  let randomQuoteLoading = true;

  async function fetchQuote() {
    randomQuoteLoading = true;
    const res = await fetch(`/quote?day=${data.slug}`);
    randomQuote = await res.json();
    randomQuoteLoading = false;
  }

  function calculateDateFrom(startingDate, numberOfDays) {
    let startDateParts = startingDate.split("/"); // Split the starting date string
    let day = parseInt(startDateParts[0], 10); // Extract the day
    let month = parseInt(startDateParts[1], 10); // Extract the month
    let year = parseInt(startDateParts[2], 10); // Extract the year

    let startDate = new Date(year, month - 1, day); // Create the starting date object

    let endDate = new Date(
      startDate.getTime() + numberOfDays * 24 * 60 * 60 * 1000
    );

    let calculatedDay = endDate.getDate();
    let calculatedMonth = endDate.getMonth() + 1;
    let calculatedYear = endDate.getFullYear();

    let calculatedDate =
      calculatedDay.toString().padStart(2, "0") +
      "/" +
      calculatedMonth.toString().padStart(2, "0") +
      "/" +
      calculatedYear;
    return calculatedDate;
  }

  function copyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;

    // Make the textarea non-editable to avoid flickering on iOS devices
    textarea.setAttribute("readonly", "");

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Show an alert message
    alert("Link is copied to clipboard.");
  }

  function onShare() {
    let link = window.location.hostname + "/day/" + data.slug;
    copyToClipboard(link);
  }

  function reDirect() {
    window.location.replace("/");
  }

  onMount(() => {
    fetchQuote();
  });
</script>

<svelte:head>
  <meta name="description" content="Art Project by Binh Pham" />
  <title>Day {data.slug} in "365 days" Album</title>
  <meta property="og:title" content={`Day ${data.slug} in "365 days" Album`} />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content={"https://365days.binhph.am/day/" + data.slug}
  />
  <meta property="og:image" content="open-graph-banner.png" />
</svelte:head>

<div
  class="w-screen h-screen flex flex-col justify-center items-center z-0 overflow-hidden"
>
  <div
    class="w-full h-full max-w-xl flex flex-col justify-start items-center absolute"
    transition:fade
  >
    <div class="w-3/4 flex flex-col space-y-1 my-10" on:click={reDirect}>
      <span class="mt-5 text-center text-2xl">"365 days" Album</span>
      <span class="mt-5 text-center text-xs"
        >"365 days" Album is a photography project by Binh Pham. You are viewing
        one of his many works in this album. Click the title above to view more.
      </span>
    </div>
    <img
      class="w-3/4 bg-gray-100 p-1 drop-shadow-2xl shadow-gray-900 z-20"
      src={`/images/${data.slug}.jpg`}
      alt="Instagram"
    />
    <div class="w-3/4 flex flex-col">
      <div class="w-full flex flex-row justify-between z-20" on:click={onShare}>
        <div class="">
          <p class="mt-5 text-base ml-1 font-bold">Day {data.slug}</p>
          <p class="mt-1 text-xs ml-1">
            This photo was posted on {calculateDateFrom(
              "17/08/2022",
              data.slug
            )}
          </p>
        </div>
        <div class="mt-5 flex flex-row justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </div>
      </div>
      {#if !randomQuoteLoading}
        <p class="mt-4 text-xs ml-1" transition:fade>
          "{randomQuote.quote}" -
          <span class="font-bold">{randomQuote.author}</span>
        </p>
      {/if}
    </div>
  </div>
</div>
