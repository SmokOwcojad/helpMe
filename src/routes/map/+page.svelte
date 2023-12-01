<script lang="ts">
	import { PUBLIC_GMA } from '$env/static/public';
	import { db } from '$lib/db';
	import { Loader } from '@googlemaps/js-api-loader';
	import { GeoPoint, collection, getDocs, query } from 'firebase/firestore';
	import { onMount } from 'svelte';
	let map: google.maps.Map;
	let mel: HTMLElement;
	onMount(async () => {
		const loader = new Loader({
			apiKey: PUBLIC_GMA,
			version: 'weekly'
		});

		loader.load().then(async () => {
			const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
			const { AdvancedMarkerElement } = (await google.maps.importLibrary(
				'marker'
			)) as google.maps.MarkerLibrary;

			map = new Map(mel, {
				center: { lat: 49.60964693872272, lng: 20.7039616596972 },
				zoom: 16,
				mapId:"map_id"
			});
			const coll = collection(db, '1');
			const docs = await getDocs(query(coll));
			docs.forEach((e) => {
				const cord: GeoPoint = e.data()['cords'];
				const txt=document.createElement("p")
				txt.innerHTML="test"
				const marker = new AdvancedMarkerElement({
					map,
					position: { lat: cord.latitude, lng: cord.longitude },
					title:"utopienie",
					//content:txt
				});
			});
		});
	});
</script>

<div bind:this={mel} class="h-screen"></div>
