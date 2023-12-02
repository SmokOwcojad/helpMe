import type { PageLoad } from './$types';



export const load = (async () => {
    return {};
}) satisfies PageLoad;
// class alertbox{
//     show(){
// alert("amigus");
// }}

// window.onload = () => {
//     var smth = new alertbox();
//     var bttn = document.getElementById('kitty');
//     bttn.onclick = function() {
//         smth.show();
//     }
// }

let visible: boolean = false;