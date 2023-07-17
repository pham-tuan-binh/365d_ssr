<script>
	import { fade, fly } from 'svelte/transition';
	let currentState = 0;
	let randomPicture = getRandomNumber(1, 365);
	let randomQuote = { content: 'Loading...' };
	let randomQuoteLoading = false;

	function getRandomNumber(val1, val2) {
		var min = Math.min(val1, val2);
		var max = Math.max(val1, val2);
		var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		return randomNumber;
	}

	function copyToClipboard(text) {
		// Create a temporary textarea element
		const textarea = document.createElement('textarea');
		textarea.value = text;

		// Make the textarea non-editable to avoid flickering on iOS devices
		textarea.setAttribute('readonly', '');

		// Append the textarea to the document
		document.body.appendChild(textarea);

		// Select the text inside the textarea
		textarea.select();

		// Copy the selected text to the clipboard
		document.execCommand('copy');

		// Remove the textarea from the document
		document.body.removeChild(textarea);

		// Show an alert message
		alert('Link is copied to clipboard.');
	}

	function onShare() {
		let link = window.location.href + 'day/' + randomPicture;
		copyToClipboard(link);
	}

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			delay: 1500,
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	function calculateDateFrom(startingDate, numberOfDays) {
		let startDateParts = startingDate.split('/'); // Split the starting date string
		let day = parseInt(startDateParts[0], 10); // Extract the day
		let month = parseInt(startDateParts[1], 10); // Extract the month
		let year = parseInt(startDateParts[2], 10); // Extract the year

		let startDate = new Date(year, month - 1, day); // Create the starting date object

		let endDate = new Date(startDate.getTime() + numberOfDays * 24 * 60 * 60 * 1000);

		let calculatedDay = endDate.getDate();
		let calculatedMonth = endDate.getMonth() + 1;
		let calculatedYear = endDate.getFullYear();

		let calculatedDate =
			calculatedDay.toString().padStart(2, '0') +
			'/' +
			calculatedMonth.toString().padStart(2, '0') +
			'/' +
			calculatedYear;
		return calculatedDate;
	}

	async function fetchRandomQuotes() {
		randomQuoteLoading = true;
		const res = await fetch(`/quote?day=${randomPicture}`);
		randomQuote = await res.json();
		randomQuoteLoading = false;
	}

	async function leftClickHandle() {
		if (currentState === 0) {
			return;
		}
		currentState--;
	}

	async function rightClickHandle() {
		if (currentState === 4) {
			currentState = 0;
		} else if (currentState == 2) {
			randomPicture = getRandomNumber(1, 365);
			await fetchRandomQuotes();
			currentState++;
		} else {
			currentState++;
		}
	}
</script>

<svelte:head>
	<title>"365 days" Photo Album</title>
	<meta name="description" content="Art Project by Binh Pham" />
</svelte:head>

<div
	class="w-screen h-screen md:hidden flex flex-col justify-center items-center z-0 overflow-hidden"
>
	<div class="absolute w-1/2 h-full left-0 top-0 z-10" on:click={leftClickHandle} />
	<div class="absolute w-1/2 h-full right-0 top-0 z-10" on:click={rightClickHandle} />
	{#if currentState === 0}
		<div
			class="w-full h-full flex flex-col justify-center items-center absolute"
			transition:fly={{ y: -200, duration: 2000 }}
		>
			<img
				class="w-3/4 sm:w-96 object-cover mb-10"
				src="/365days/polaroid-cloud.png"
				alt="Cloud of Polaroids"
			/>
			<img class="w-1/5 sm:w-28 object-cover mb-10" src="/365days/logo.png" alt="logo" />
			<span class="animate-pulse text-base" transition:fade>Tap to start</span>
		</div>
	{/if}
	{#if currentState === 1}
		<div class="w-full h-full flex flex-col justify-start items-center absolute" transition:fade>
			<img
				class="w-3/4 sm:w-96 object-cover my-10 "
				src="/365days/polaroid-cloud.png"
				alt="A cloud of Polaroid"
			/>
			<span class="text-xl w-full text-start px-12 mb-6 text-gray-900"
				>Sometimes, we just need a signal from the universe</span
			>
			<p class="text-xs w-full text-start px-12 text-gray-900">
				<b>@365d_album</b> began as a photo collection that chronicled an entire year, capturing
				moments from each of the 365 days.
				<br />
				<br />
				The journey started on 18/08/2022 and concluded on 18/08/2023. While I cherished the album, there
				comes a point when all things must come to an end.
				<br />
				<br />
				In order to immortalize the album on the internet, I transformed it into a book of answers. Each
				photo now serves as a response to your questions, providing guidance through the quotes they
				hold.
				<br />
				<br />
				On this website, you have the opportunity to ask a question, and in return, it will present you
				with a random photo from the album, accompanied by a quote that may serve as your guiding light.
				<br />
				<br />
				May you find peace within,
			</p>
			<img
				class="w-24 object-cover justify-self-start self-start ml-20"
				src="/365days/sig.gif"
				alt="A cloud of Polaroid"
			/>
		</div>
	{/if}
	{#if currentState === 2}
		<div class="w-full h-full flex flex-col justify-center items-center " transition:fade>
			<span class="text-xl text-gray-900 px-12 text-center"
				>Focus on your question then tap the screen</span
			>
		</div>
	{/if}
	{#if currentState === 3}
		<div class="w-full h-full flex flex-col justify-start items-center absolute" transition:fade>
			<div class="w-3/4 flex flex-col space-y-1 my-10 ">
				<span class="mt-5 text-center text-2xl">A random photo</span>
				<span class="mt-5 text-center text-xs"
					>Do you feel special today? Do you need a booster or some sort of universe signal? Well,
					look below.</span
				>
			</div>
			<img
				class="w-3/4 bg-gray-100 p-1 drop-shadow-2xl shadow-gray-900 z-20"
				src={`/images/${randomPicture}.jpg`}
				alt="Instagram"
			/>
			<div class="w-3/4 flex flex-col">
				<div class="w-full flex flex-row justify-between z-20" on:click={onShare}>
					<div class="">
						<p class="mt-5 text-base ml-1 font-bold">Day {randomPicture}</p>
						<p class="mt-1 text-xs ml-1">
							This photo was posted on {calculateDateFrom('17/08/2022', randomPicture)}
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
						"{randomQuote.quote}" - <span class="font-bold">{randomQuote.author}</span>
					</p>
				{/if}
			</div>
		</div>
	{/if}
	{#if currentState === 4}
		<div
			class="w-full h-full flex flex-col justify-start items-center"
			transition:fade={{ duration: 1000 }}
		>
			<img class="w-1/5 sm:w-28 object-cover my-10" src="/365days/logo.png" />
			<img class="w-3/4 object-cover animation-float" src="/365days/avatar.png" />
			<div class="w-3/4 flex flex-col">
				<p class="text-xl">Thank You</p>
				<p class="text-xs mt-4">
					The <span class="font-bold">"365 days" Photo Album</span> is a small project made by Binh
					Pham, the fat guy in the picture. He is a Fullstack Developer who just happens to be good
					in Art and several other things.
					<br />
					<br />
					If you are in need of help, please don't use this website as a guide. Talk to your friends
					or if you need a pal, strike a conversation with me.
					<br />
					<br />
					If there are bugs on the website, please consider them as features. This website will not be
					updated, immortalizing it as a time capsule on the Internet... unless the Quote's API went
					down.
					<br />
					<br />
					Thank you for your support!
				</p>
			</div>
		</div>
	{/if}
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	@keyframes float {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-20px);
		}
		100% {
			transform: translatey(0px);
		}
	}

	.animation-float {
		animation: float 6s ease-in-out infinite;
	}
</style>
