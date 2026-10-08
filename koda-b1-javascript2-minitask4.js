// Implementasikan hitung luas dan keliling lingkaran memakai callback; jelaskan alur passing function, pemanggilan callback, dan return pada README. Tambahkan flowchart

function luas(r) {
  const luas = 3.14 * r * r;
  return `Luas lingkaran = ${luas}`;
}

function keliling(r) {
  const keliling = 2 * 3.14 * r;
  return `Keliling lingkaran = ${keliling}`;
}

function main(r, callback) {
  return callback(r);
}

console.log(main(7, luas));
console.log(main(8, keliling));
