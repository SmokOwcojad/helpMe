<script lang="ts">
	import { onMount } from 'svelte';
	import { AppShell } from '@skeletonlabs/skeleton';

	import { addDoc, collection, count, GeoPoint, getCountFromServer } from 'firebase/firestore';
	import { db } from '$lib/db';

	let helpCount = 0;

	onMount(async () => {
		// Pobierz wartość z ciasteczka, jeśli istnieje
		const col = collection(db, 'vol');
		const snap = await getCountFromServer(col);
		helpCount = snap.data().count;
	});
	let n: string;
	function handleClick() {
		if (!navigator.geolocation) {
			alert('er');
			return;
		}
		const col = collection(db, '1');
		const loc = navigator.geolocation.getCurrentPosition(
			async (e) => {
				await addDoc(col, { cords: new GeoPoint(e.coords.latitude, e.coords.longitude), name: n });
			},
			(f) => {
				alert('err');
			}
		);
	}
</script>

<div class="bg-surface-200 dark:bg-inherit">
	<AppShell>
		<svelte:fragment slot="sidebarLeft">
			<div class="card p-10 pb-60 block text-center items-center bg-surface-300 mt-5">
				<p
					class="text-black dark:text-white variant-ghost-success p-6 font-extrabold rounded-2xl text-center"
					id="helpCounter "
				>
					Liczba ludzi, którym już pomogliśmy:<br /><br />
					<span class="text-5xl font-serif text-center">{helpCount}</span>
				</p>
				<hr class="!border-t-2" />

				<br /><br />
				<div class="text-center">
					<!-- <label for="zdarzenie" class="text-black dark:text-white variant-ghost-error text-center text-4xl p-4">Nazwa zdarzenia</label><br> -->
					<input
						type="text"
						bind:value={n}
						id="zdarzenie"
						class="text-white p-5 variant-ghost-warning rounded-2xl"
						placeholder="Nazwa zdarzenia"
					/><br /><br />
					<button
						type="button"
						class="btn variant-filled variant-ghost-warning p-10 text-black dark:text-white rounded-2xl"
						on:click={handleClick}
					>
						WEZWIJ POMOC!!!
					</button>
				</div>
			</div>
		</svelte:fragment>

		<div class="flex content-center w-full h-full">
			<img class="justify-center" src="icon-rectangle-NoBg.png" alt="logo" />
		</div>
		<svelte:fragment slot="pageFooter">
			<div
				class="card text-black dark:text-white p-10 block justify-center items-center bg-surface-300 mt-5"
				id="left"
				style="text-align:center;"
			>
				<a href="/submitions"
					><button
						type="button"
						class="text-2xl btn variant-filled dark:text-white text-black rounded-full w-100 h-30 variant-ghost-secondary"
						>Zostan wolontariuszem</button
					></a
				>
			</div>
		</svelte:fragment>
	</AppShell>
</div>
