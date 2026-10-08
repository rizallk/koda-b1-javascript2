// function buatProfile(nama, umur = 18) {
//   return {
//     namaLengkap: nama,
//     usia: umur,
//     kategori: umur >= 18 ? 'Dewasa' : 'Anak-anak',
//   };
// }
// console.log(buatProfile("Rani", 15))

// Refactor Anonymous dan Arrow
const buatProfile1 = function (nama, umur) {
  return {
    namaLengkap: nama,
    usia: umur,
    kategori: umur >= 18 ? 'Dewasa' : 'Anak-anak',
  };
};
console.log(buatProfile1('Budi', 25));

const buatProfile2 = (nama, umur) => ({
  namaLengkap: nama,
  usia: umur,
  kategori: umur >= 18 ? 'Dewasa' : 'Anak-anak',
});
console.log(buatProfile2('Anto', 17));
