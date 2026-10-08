// Buat object lingkaran dengan properti jari-jari serta dua method terpisah: luas() dan keliling(). README berisi penjelasan cara kerja, bukan flowchart.  Buat ringkasan() yang memanggil dua method tersebut.

const lingkaran = {
  r: 7,
  luas: function () {
    return 3.14 * this.r * this.r;
  },
  keliling: function () {
    return 2 * 3.14 * this.r;
  },
};

function ringkasan() {
  console.log(`Luas lingkaran = ${lingkaran.luas()}`);
  console.log(`Keliling lingkaran = ${lingkaran.keliling()}`);
}

ringkasan();
