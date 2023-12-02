<script lang="ts">
	import { auth } from '$lib/db';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
		>
			<svelte:fragment slot="lead"
				><img src="icon-rectangle-NoBg-rect.png" alt="icon" width="40%" /></svelte:fragment
			>
			<svelte:fragment slot="trail">
				<LightSwitch slot="end" id="light" class=" mx-5" />
				<button type="button" class="btn variant-filled" id="btn">
					<img src="map.png" alt="mapa" class="w-20" />
					Przejdź do mapy
				</button>
				<button on:click={() => signInWithPopup(auth,new GoogleAuthProvider())} slot="trail">
					<img src="man.png" alt="man" width="10%" />
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>

<style>
	/* a{
	background-color: gray;
	color: black;
	padding: 5px;
	border: 2px solid black;
 }
 a:hover{
	color: lightgray;
 } */
	#btn {
		border-radius: 100px;
		margin: 0%;
	}
</style>
