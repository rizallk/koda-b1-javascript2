// JavaScript 2 Minitask 1
// Membuat program untuk program hitung nilai dengan proses,
// - Max
// - Min
// - Average (min. 10 nilai)

// Max
const a = 45;
const b = 20;
const c = 68;
const txt1 = `Nilai Max dari ${a}, ${b}, ${c} adalah `;
if (a > b) {
  if (a > c) {
    console.log(txt1 + a);
  } else {
    console.log(txt1 + c);
  }
} else {
  if (b > c) {
    console.log(txt1 + b);
  } else {
    console.log(txt1 + c);
  }
}

// Min
const d = 7;
const e = 10;
const f = 3;
const txt2 = `Nilai Min dari ${d}, ${e}, ${f} adalah `;
if (d < e) {
  if (d < f) {
    console.log(txt2 + d);
  } else {
    console.log(txt2 + f);
  }
} else {
  if (e < f) {
    console.log(txt2 + e);
  } else {
    console.log(txt2 + f);
  }
}

// Average
const data = [3, 5, 1, 6, 8, 2, 9, 7, 2, 4];
let avg = 0;
for (let i = 0; i < data.length; i++) {
  avg += data[i];
}
console.log(`Nilai average dari ${data} adalah ${avg / data.length}`);
