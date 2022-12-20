console.log('**** app.js *******');

const infoEnter = document.querySelector('.info');
const kaydetBtn = document.getElementById('save');
const silBtn = document.getElementById('delete');

const infoList = document.querySelector('#information-list');

const ul = document.createElement('ul');
infoList.appendChild(ul);


console.log(ul)


kaydetBtn.onclick = function () {
  if (!infoEnter.value) {
    alert('Please enter a information');
  } else {
    ul.innerHTML += ` <li>${infoEnter.value}</li>`;
    infoEnter.value = '';
    selfinfo();
  }
};

const selfinfo = () => {
  document.querySelectorAll('ul li').forEach((bilgi) => {
    const renklendir = bilgi.textContent.toLowerCase().trim();
    if (renklendir === 'barış şahin') {
      // dil.className = 'red';
      //?Alternatif yöntem
      bilgi.setAttribute('class', 'barıs');
      console.log(bilgi)
    }
  });
};

silBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert('Tüm bilgiler silindi');
};



