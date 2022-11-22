// MENGGUNAKAN JQUERY AJAX
// $.ajax({
//   url: "http://www.omdbapi.com/?i=tt3896198&apikey=7506a05e&s=avengers",
//   success: (movies) => console.log(movies),
// });

// MENGGUNAKAN fetch UNTUK MEMANGGIL API SEPERTI DIATAS
// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7506a05e&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// PROMISE
// SEBUAH OBJECT YANG MEMPRESENTASIKAN KEBERHASILAN / KEGAGALAN SEBUAH EVENT YANG ASYNC DI MASA YANG AKAN DATANG
// JANJI ADA 2 (TERPENUHI / INGKAR)
// DI JS DISEBUT STATE (FULLFILLED / REJECTED / PENDING)
// UNTUK MENJALANKANNYA CALLBACK (RESOLVE / REJECT / FINALLY)
// DI DALAM PROMISE ADA AKSI YNG KITA LAKUKAN KETIKA TERPENUHI ATAU TIDAK TERPENUHI DENGAN AKSI THEN
// AKSI (THEN / CATCH)

// CONTOH 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     // INI SAMA AJAH DENGAN (JIKA DITEPATI == TRUE)
//     resolve("janji telah ditepati!");
//   } else {
//     reject("ingkar janji..");
//   }
// });

// janji1
//   .then((r) => console.log("OK: " + r))
//   .catch((r) => console.log("NOT OK!: " + r));

// CONTOH 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2))); //untuk lihat proses asyncnya
// janji2
//   .finally((r) => console.log("selesai menunggu!")) //biasanya digunakan untuk memanggil animasi loading
//   .then((r) => console.log("OK: " + r))
//   .catch((r) => console.log("NOT OK!: " + r));
// console.log("selesai");

// PROMISE.ALL()
// JIKA USER MEMILIKI BANYAK PROMISE DAN INGIN DIKJALANKAN SEKALIGUS
//simulasi ambil data film dari API
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "avengers",
        sutradara: "galih",
        pemeran: "arizza, candra",
      },
    ]);
  }, 1000);
});

//simulasi ambil data cuaca dari API
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "bandung",
        temp: 26,
        kondisi: "cerah berawan",
      },
    ]);
  }, 500);
});

// kalau dijalanin 1-1
// film.then((r) => console.log(r));
// cuaca.then((r) => console.log(r));

// kalau dijalanin semuanya
// Promise.all([film, cuaca]).then((r) => console.log(r)); //hasilnya array di dalam array
// jika tidak mau menghasilkan array dalam array gunakan method spread
Promise.all([film, cuaca]).then((r) => {
  const [film, cuaca] = r;
  console.log(film);
  console.log(cuaca);
});
