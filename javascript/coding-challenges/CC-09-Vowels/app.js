const giris = document.querySelector('input');
const cikis = document.querySelector('p');
const buton = document.querySelector('button');

const sesli = ['a','e','i','o','u'];

buton.addEventListener('click',() => {
    let sayac = 0;
    let inputValue = giris.value.toLocaleLowerCase();
    for (let i = 0; i<inputValue.length; i++ ) {
        if (sesli.includes(inputValue[i])) {
            sayac++;
        }
    }
    cikis.innerHTML = `There are ${sayac} vowels in <span>${giris.value}</span> `;
    giris.value = ''
});