<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<div class="bg-primary-100">
	<AppShell>
		<svelte:fragment slot="sidebarLeft">
			<div
				class="card p-10 pb-60 pt-60 block justify-center items-center bg-surface-400 mt-5"
				id="left"
			>
				<p class="text-white">Nasza strona pomogła już 3000 użytkowników</p>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="sidebarRight">
			<div class="card p-10 pb-40 pt-40 block justify-center items-center bg-surface-400 mt-10">
				<button type="button" class="btn variant-filled-error p-10">WEZWIJ POMOC!!!</button>
			</div>
		</svelte:fragment>
		<div class="flex justify-content w-full h-full">
			<img class="justify-center" src="icon-rectangle-NoBg.png" alt="logo" />
		</div>
		<svelte:fragment slot="footer">
			<div class="flex justify-center w-full">
				<button type="button" class="btn variant-filled-surface rounded-full">Zarejejstruj się jako wolonatiusz/Register as a volontuguer</button>
			
            </div>
		</svelte:fragment>
	</AppShell>
</div>
