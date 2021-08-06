const p3 = document.querySelector('.p3');

function ubahWarnaKotak() {
    p3.style.backgroundColor = "red";
    p3.style.color = 'white';
}

const p4 = document.querySelector('#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector(' #b ul ');
    const liBaru = document.createElement('li');
    const teksLi = document.createTextNode('item baru');
    liBaru.appendChild(teksLi);
    ul.appendChild(liBaru);
});


// make hover in css with javascript
p2 = document.querySelector('.p2');
p2.addEventListener('mouseenter', function(){
    p2.style.backgroundColor = 'orange';
});

p2.addEventListener('mouseleave', function(){
    p2.style.backgroundColor = 'white';
});