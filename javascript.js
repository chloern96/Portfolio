
let textarea = document.querySelector('#exampleDropdownForMessage2');
let blockCount = document.getElementById('counterBlock');

function count(){
    let count = 140-textarea.value.length;
    blockCount.innerHTML = count;

    if(count < 0) {
        blockCount.classList.add("red");
    } else if(count >= 0) {
        blockCount.classList.remove("red");
    } else{}
}

textarea.addEventListener('keyup', count);
count();




// lorsqu'on clique sur un onglet,

let afficherOnglet = function(a) {
    let li = a.parentNode
    
    let div = a.parentNode.parentNode.parentNode.parentNode
console.log(div)
    if(li.parentNode.classList.contains('active')){
        return false
    }
    
    //on retire la class active de l'onglet actif
    div.querySelector('.tabs .active').classList.remove('active')
    // j'ajoute la class active à l'onglet actuel
    li.classList.add('active')
    //on retire la class active sur le contenu actif
    div.querySelector('.tab-content.active').classList.remove('active')
    //j'ajoute la class active sur le contenu correspondant à mon clic
    div.querySelector(a.getAttribute('href')).classList.add('active')
}

let tabs = document.querySelectorAll('.tabs a')

for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', function(e){
        afficherOnglet(this)
    })
}

//je récupère le hash
//j'ajoute la class active sur le lien href="hash"
//je retire la class active sur les autres onglets
// j'affiche ou je masque les contenues

let hash = window.location.hash
let a = document.querySelector('a[href="'+ hash +'"]')

if(a !== null && a.parentNode.classList.contains('active')) {

}