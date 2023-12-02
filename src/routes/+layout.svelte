<script lang="ts">
	import '../app.pcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
	import { auth } from '$lib/db';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			slotEnd="place-content-end"
			background="bg-surface-300 dark:bg-surface-800"
			slotCenter="place-content-center"
		>
			<svelte:fragment slot="lead">
				<a href="/"><img src="icon-rectangle-NoBg-rect.png" alt="icon" width="40%" /></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch slot="end" class="w-20 mx-5" />
				<a href="/map"
					><button type="button" class="btn variant-filled rounded-full w-60">
						<img src="map.png" alt="mapa" class="w-20" />
						Przejdź do mapy
					</button></a
				>
				<button
					on:click={async () => {
						if (auth.currentUser) {
							await signOut(auth);
						} else {
							await signInWithPopup(auth, new GoogleAuthProvider());
						}
					}}
				>
					<img src={auth.currentUser?.photoURL || 'man.png'} alt="man" width="40%" />
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
