// membuat object
// object literal
var siswa = {
    nama : "Mohammad Ricko Aprilianto",
    Umur : 17,
    Nim : [92, 98, 40, 68],
    alamat : {
        jalan : "jl, abc rt.12",
        kota : "Banjarmasin",
        provinsi : "kalimantan Selatan",
    }
};

// function declaration
function buatObjectSiswa(nama, umur, nim, jurusan) {
    var siswa = {};
    siswa.nama = nama;
    siswa.umur = umur;
    siswa.nim = nim;
    siswa.jurusan = jurusan;

    return siswa;
}

var siswa3 = buatObjectSiswa('Ricko', '17', '90', 'rpl');

// constructor
function Siswa(nama, umur) {
    this.nama = nama;
    this.umur = umur;
}

var siswa4 = new Siswa(prompt('Masukkan Nama'), prompt('Masukkan Umur'));

alert(siswa4.nama);
alert(siswa4.umur);