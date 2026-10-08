// Mini-Task-2: Proses Checkout E-Commerce
// Membuat program penyelesaian transaksi E-Commerce dengan proses:
// 1. Combine (Penggabungan Data ada 2 variabel): Menggabungkan object dataPembeli dan detailPesanan (id) menjadi satu object baru bernama fakturPembayaran menggunakan Spread Operator, sekaligus menambahkan properti baru statusPembayaran: "Lunas".
// 2. Extract (Ekstraksi Data): Mengambil spesifik properti nama, email, dan totalHarga dari object fakturPembayaran menggunakan Destructuring.
// 3. Output (Tampilan): Menampilkan ringkasan pesanan ke console menggunakan variabel hasil destructuring tersebut (contoh output: "Struk dicetak untuk Budi (budi@email.com) dengan total tagihan Rp 150.000").

const dataPembeli = {
  userId: 23,
  userName: 'Anto',
  email: 'anto@gmail.com',
  noHp: '08123456789',
};
const detailPesanan = {
  productId: 1,
  productName: 'Laptop ASUS ROG',
  qty: 2,
  price: 7500000,
};
const fakturPembayaran = {
  ...dataPembeli,
  ...detailPesanan,
  statusPembayaran: 'Lunas',
};

const { userName, email, productName, qty, price } = fakturPembayaran;

function print(userName, email, productName, price, qty) {
  console.log('\n=========================');
  console.log('|   FAKTUR PEMBAYARAN   |');
  console.log('=========================');
  console.log(`Nama Pembeli  : ${userName}
Email         : ${email}
Nama Produk   : ${productName}
Harga Satuan  : Rp. ${price}
Jumlah (qty)  : ${qty} 
Total Tagihan : Rp. ${price * qty}
  `);
}

print(userName, email, productName, price, qty);
