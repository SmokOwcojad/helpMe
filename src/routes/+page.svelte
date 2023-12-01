
<script lang="ts">
import { AppBar,AppShell } from '@skeletonlabs/skeleton';
import { LightSwitch } from '@skeletonlabs/skeleton';

</script>
<div class="bg-primary-100">
<AppShell>
    <svelte:fragment slot="header">
		
		<AppBar  gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" slotEnd="place-content-end" background="bg-surface-400">
			<svelte:fragment slot="lead"><img src="icon-rectangle-NoBg-rect.png" alt="icon" width="40%"></svelte:fragment>
			<svelte:fragment slot="trail">
				

				<LightSwitch slot="end" id="light" class=" mx-5"/>
				 <button type="button" class="btn variant-filled" id="btn">
					<img src="map.png" alt="mapa" class="w-20">
					Przejdź do mapy
				</button>
				<img src="man.png" alt="man" width="10%" slot="trail">				
				

			</svelte:fragment>	
		</AppBar>
		
	</svelte:fragment>
	
	<svelte:fragment slot="sidebarLeft">
        <div class="card p-10 pb-60 pt-60 block justify-center items-center bg-surface-400 mt-5" id="left">
        <p class="text-white    ">Nasza strona pomogła już 3000 użytkowników</p>
    </div>
    </svelte:fragment>
	<svelte:fragment slot="sidebarRight">
        <div class="card p-10 pb-40 pt-40 block justify-center items-center bg-surface-400 mt-10">
        <button type="button" class="btn variant-filled-error p-10">WEZWIJ POMOC!!!</button>
        </div>
    </svelte:fragment>
    <div class="flex justify-content w-full h-full">
	<img class="justify-center" src="icon-rectangle-NoBg.png" alt="logo">
    </div>
	<svelte:fragment slot="footer">
        <div class="card text-white p-10 block justify-center items-center bg-surface-400 mt-5" id="left">
        Footer
        </div>
    </svelte:fragment>
</AppShell>
</div>
