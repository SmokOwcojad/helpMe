<script lang="ts">
	import { PUBLIC_GMA } from '$env/static/public';
	import { app, auth, db } from '$lib/db';
	import { Loader } from '@googlemaps/js-api-loader';
	import { Modal,getModalStore } from '@skeletonlabs/skeleton';
	import { GeoPoint, addDoc, collection, deleteDoc, getDocs, query } from 'firebase/firestore';
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
				mapId: 'map_id'
			});
			const coll = collection(db, '1');
			const vol = collection(db, 'vol');
			const docs = await getDocs(query(coll));
			docs.forEach((e) => {
				const data = e.data();
				const cord: GeoPoint = data['cords'];
				const txt = document.createElement('p');
				txt.innerHTML = 'test';
				const marker = new AdvancedMarkerElement({
					map,
					position: { lat: cord.latitude, lng: cord.longitude },
					title: data['name']
				});
				marker.addListener('click', async (f: Event) => {
					if (auth.currentUser) {
						await deleteDoc(e.ref);
						await addDoc(vol, { id: e.id, volunteer: auth.currentUser.uid });
					}
				});
			});
		});
	});
</script>

<div bind:this={mel} class="h-screen"></div>
<Modal ></Modal>