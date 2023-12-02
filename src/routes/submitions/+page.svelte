<script lang="ts">
    import type { PageData } from './$types';
    import { AppBar, AppShell } from '@skeletonlabs/skeleton';
    export let data: PageData;
	import { initializeStores } from '@skeletonlabs/skeleton';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
initializeStores();
const modalStore = getModalStore();
    let visible: boolean = true;

    const modal: ModalSettings = {
	type: 'alert',
	// Data
	title: 'Wyslano dane',
	body: 'Teraz masz szansze na zostanie wolontariuszem.',
	image: 'ok.jpg',
};
modalStore.trigger(modal);
</script>
<Modal/>
<AppShell>
    <div class="flex justify-center w-full h-full">
    <form  action="/submitions">
        <label class="label">Imie</label>
            <input class="input input-success" type="text" placeholder="Podaj Imie"/>    
        <label class="label">Nazwisko</label>            
           <input class="input input-success" type="text" placeholder="Podaj Nazwisko"/>
        <label class="label">Zamieszkanie</label>            
           <input class="input input-warning" type="text" placeholder="Podaj swoje miasto"/>
           <input class="input input-warning" type="text" placeholder="Podaj swoja ulice"/>
           <input class="input input-warning" type="number" placeholder="Podaj numer domu"/>
           <input class="input input-warning" type="text" placeholder="Podaj swoje wojewodctwo"/>
           <input class="input input-warning" type="text" placeholder="Podaj swojoj kraj"/>
           <input class="input input-warning" type="text" placeholder="Podaj swojoj kontynent"/>
        <label class="label">Dane osobowe</label>
            <input class="input input-error" type="text" placeholder="Podaj imie i nazwisko matki"/>
            <input class="input input-error" type="text" placeholder="Podaj imie i nazwisko ojca"/>
            <input class="input input-error" type="text" placeholder="Podaj swoje drugie imie(jak nie masz to nie wpisuj)"/><br><br>
            <input type="submit" class="btn variant-filled rounded-full" value="Przeslij formulaz " id="kitty" on:click={()=>modalStore.trigger(modal)}>

        </form>
        

        
        
       
</div>
</AppShell>
<style>
    label, input{
        padding:5px;
        margin:5px;
    }
    label{
        font-size: 50px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
</style>

