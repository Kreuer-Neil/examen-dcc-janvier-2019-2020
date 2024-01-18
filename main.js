// Nom :
// Prénom :
// Groupe :


const settings = {
    jsEnabledClass: 'js-enabled',
    ribbonEnabledCLass: 'ribbon-wrapper',
    ribbonClass: 'ribbon',
    premier: 'premier',
    byThreeCLass: 'multiple-3',
    byThreeText: '3',
    byThreeNineCLass: 'multiple-3-9',
    byThreeNineText: '3 et 9',
    premierNumbers: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109,113,121,127,131, 197]
}
document.documentElement.classList.add(settings.jsEnabledClass);


const olElement = document.getElementById('app');


for (let i = 1; i < 200; i += 2) {
    olElement.insertAdjacentHTML('beforeend', `<li class="grid__item">${i}</li>`);
}


olElement.childNodes.forEach((r) => {

    if (settings.premierNumbers.includes(Number(r.textContent))) {
        addRibbon(settings.premier, settings.premier, r);
        r.dataset.sum = autoSumm(parseInt(r.textContent));//for(let j=1,k = 0;j<i;j++){j+k=k; return k;}
    } else if (r.textContent % 9 === 0) {
        addRibbon(settings.byThreeNineCLass, settings.byThreeNineText, r);
    } else if (r.textContent % 3 === 0) {
        addRibbon(settings.byThreeCLass, settings.byThreeText, r);
    }
});

function addRibbon(liClass, divText, e) {
    e.classList.add(liClass);
    e.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper">
    <div class="ribbon">${divText}</div>
  </div>`);
}

const premierElements = document.querySelectorAll('.premier');

premierElements.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        toggleActive(e);
        //setTimeout(()=>{toggleActive(e);}, 500,e);
        const current = e.currentTarget;
        [current.dataset.sum,current.textContent] = [current.textContent,current.dataset.sum];
    });
});

function toggleActive(e) {
    e.currentTarget.classList.toggle('animate');
    console.log(e);
    olElement.childNodes.forEach((l)=> {
        l.classList.toggle('grid__item--lighter');
    });
}

function autoSumm(value){
    let j=0;
    for(let i=1;value>=i;i++){
        j+=i;
    } return j;
}

function isPremier(nb) {
    for (let i = 2; i < nb; i++)
        if (nb % i === 0) return false;
    return nb > 1;
}

function sumPremier(){

}