// manipulasi array

// menambah array
// var arr = ["Mohammad", "Ricko"];

// console.log(arr);

// arr[2] = "Aprilianto";

// console.log(arr);

// mengurangi array
// var arr = ["Mohammad", "Ricko", "Aprilianto"]
// arr[1] = undefined;

// console.log(arr);

// menampilkan array
// var arr = ["Mohammad", "Ricko", "Aprilianto"];

// for(var i = 0; i < arr.length; i++) {           
//     console.log("Mahasiswa ke-" + (i + 1) + " namanya " + arr[i]);
//     // length akan secara otomatis menghitung berapa jumlah dari array yang ingin ditampilkan
// }


// method adalah functions yg ada pada object
// method pada array
// 1. length: untuk mengetahui berapa jumlah elemen pada array
// 2. join: method yang menggabungkan semua isi array dan mengubahnya menjadi string
// push, pop, shift, unshift  digunakan untuk menambah atau menghapus array
// slice, splice
// foreach, map

// 1. join
var arr = ["Mohammad", "Ricko", "Aprilianto"];

console.log(arr.join());
console.log(arr.join(' - '));

// 2. push
arr.push("Doddy");
console.log(arr);

// 3.pop
arr.pop("Doddy");
console.log(arr);

// unshift dan shift menambahkan dan mengurangi di index pertama
arr.unshift("Doddy");
console.log(arr);

arr.shift("Doddy");
console.log(arr);

// untuk mencoba semua method ini silahkan liat di console browser web anda
// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenbaru1, elemenbaru2, ...)

// 5. slice

// 6 foreach
angka = [1, 2, 3, 4, 5]

angka.forEach(function(e){
    console.log(e);
}); 

// 7. map mengembalikan nilai array

// 8. sort mengurutkan angka
angka = [2, 1, 5, 4, 3]
angka.sort();
console.log(angka);

// 9. filter mencari nilai di dalam array

// 10. find