<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';
	import { PUBLIC_GMA } from '$env/static/public';
	let map;
	let mel: HTMLElement;
	onMount(async () => {
		const loader = new Loader({
			apiKey: PUBLIC_GMA,
			version: 'weekly'
		});

		loader.load().then(async () => {
			const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
			map = new Map(mel, {
				center: { lat: -34.397, lng: 150.644 },
				zoom: 8
			});
		});
	});
</script>

<div bind:this={mel} class="h-screen"></div>
