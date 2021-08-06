// const adalah var yg tak dapat diubah

// dom selecttion
// document.get element by id -> element
const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'black';
judul.innerHTML = 'Ricko'

// document.getElementsByTagName -> HTMLCollection bentuknya seperti array
const p = document.getElementsByTagName('p');

for(var i = 0; i < p.length; i++) {
    p[i].style.color = 'red';
}
// getelementbyclassname juga sama seperti tagname, hanya saja dia mengambilnya dari class yg kita buat di html -> HTMLCollection, bentuknya seperti array


// queryselector -> element
const p4 = document.querySelector(' #b p');
p4.style.backgroundColor = 'orange';

// querySelectorAll -> nodelist, bentuknya seperti array
const para = document.querySelectorAll('p');
for( var j = 0; j < para.length; j++) {
    para[j].style.backgroundColor = 'black'
    para[j].style.color = 'white'
}
