// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
function digitPerkalianMinimum(angka) {
  console.log(angka.length)
    // you can only write your code here!
    var hasil = ""
    var length = Number.MAX_SAFE_INTEGER

    for ( var i = 1; i <= Math.round(Math.sqrt(angka)); i++){
      if (angka % i === 0) {
        hasil = String(angka/i)+String(i)
        if (hasil.length < length) {
          length = hasil.length
          
        }
        }
      }
      console.log(hasil)
      return length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2