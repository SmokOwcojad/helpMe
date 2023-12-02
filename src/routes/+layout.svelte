<script lang="ts">
	import '../app.pcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
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
				<a href="/"><img src="icon-rectangle-NoBg-rect.png" alt="icon" width="40%"/></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch slot="end" class=" mx-5" />
				<a href="/map"><button type="button" class="btn variant-filled rounded-full">
					<img src="map.png" alt="mapa" class="w-20" />
					Przejdź do mapy
				</button>
				<button on:click={() => signInWithPopup(auth, new GoogleAuthProvider())} slot="trail">
					<img src="man.png" alt="man" width="10%" />
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot/>
</AppShell>
