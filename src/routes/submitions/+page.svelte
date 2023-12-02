<script lang="ts">
    import type { PageData } from './$types';
    import { AppBar, AppShell } from '@skeletonlabs/skeleton';
    
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
        <label class="label" for="imie">Imie</label>
            <input class="input input-success" type="text" placeholder="Podaj Imie" id="imie"/>    
        <label class="label" for="nazwisko">Nazwisko</label>            
           <input class="input input-success" type="text" placeholder="Podaj Nazwisko" id="nazwisko"/>
        <label class="label" for="adres">Zamieszkanie</label>            
           <input class="input input-warning" type="text" placeholder="Podaj swoje miasto" id="adres"/>
           <input class="input input-warning" type="text" placeholder="Podaj swoja ulice"/>
           <input class="input input-warning" type="number" placeholder="Podaj numer domu"/>
           <input class="input input-warning" type="text" placeholder="Podaj swoje wojewodctwo"/>
           <input class="input input-warning" type="text" placeholder="Podaj swoj kraj"/>
           <input class="input input-warning" type="text" placeholder="Podaj swoj kontynent"/>
        <label class="label" for="dane">Dane osobowe</label>
            <input class="input input-error" type="text" placeholder="Podaj imie i nazwisko matki" id="dane"/>
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

