// JavaScript 2 Minitask 1
// Membuat program untuk program hitung nilai dengan proses,
// - Max
// - Min
// - Average (min. 10 nilai)

// Max
const a = [12, 8, 37];
const b = [50, 43, 2];
const c = [...a, ...b];
let max = c[0];
for (let i = 0; i < c.length; i++) {
  if (max < c[i]) {
    max = c[i];
  }
}
console.log(`Nilai Max dari ${c} adalah ${max}`);

// Min
const d = [1, 3, 6];
const e = [9, 2, 7];
const f = [...d, ...e];
let min = f[0];
for (let i = 0; i < f.length; i++) {
  if (min > f[i]) {
    min = f[i];
  }
}
console.log(`Nilai Min dari ${f} adalah ${min}`);

// Average
const data1 = [3, 5, 1, 6, 8];
const data2 = [2, 9, 7, 2, 4];
const data = [...data1, ...data2];
let avg = 0;
for (let i = 0; i < data.length; i++) {
  avg += data[i];
}
console.log(`Nilai average dari ${data} adalah ${avg / data.length}`);
