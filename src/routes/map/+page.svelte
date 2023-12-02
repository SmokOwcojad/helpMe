<script lang="ts">
	import { PUBLIC_GMA } from '$env/static/public';
	import { app, auth, db } from '$lib/db';
	import { Loader } from '@googlemaps/js-api-loader';
	import {
		Modal,
		getModalStore,
		type ModalStore,
		type ModalSettings
	} from '@skeletonlabs/skeleton';
	import { GeoPoint, addDoc, collection, deleteDoc, getDocs, query } from 'firebase/firestore';
	import { onMount } from 'svelte';
	const modalStore = getModalStore();
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
					if (auth?.currentUser) {
						const modal_logged: ModalSettings = {
							type: 'confirm',
							// Data
							title: 'Please Confirm',
							body: 'Are you sure you wish to proceed?',
							async response(r) {
								await deleteDoc(e.ref);
								await addDoc(vol, { id: e.id, volunteer: auth.currentUser.uid });
							}
						};
						modalStore.trigger(modal_logged)
					} else {
						const modal_unlogged: ModalSettings = {
							type: 'alert',
							title: 'Unauthorized',
							body: 'You need to be locked in'
						};
						modalStore.trigger(modal_unlogged)
					}
				});
			});
		});
	});
</script>

<div bind:this={mel} class="h-screen"></div>
<Modal></Modal>
