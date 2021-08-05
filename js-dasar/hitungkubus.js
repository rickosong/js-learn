// Function
function hitungVolumeKubus(a, b) {
    var volumeA,
        volumeB,
        total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;
    

    return total;
} 



//
var a,
    b,
    ulang,
    nama;

alert("Selamat Datang di Website penghitung kubus");
nama = prompt("Siapa Nama Anda?");
alert("ok, nama anda adalah " + nama);


ulang = true;

while(ulang === true) {
    a = prompt("Masukkan Nilai Untuk Kubus A")
    b = prompt("Masukkan Nilai Untuk Kubus B");

    alert("Hasil total kubus " + nama + " adalah " + hitungVolumeKubus(a, b));

    ulang = confirm("Mau hitung kubus lagi?")
}

alert("Terimakasih " + nama);