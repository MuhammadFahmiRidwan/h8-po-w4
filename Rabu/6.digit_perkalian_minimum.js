// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

function digitPerkalianMinimum(angka) {
  
  let arr = []
  let result = 0
  let temp = Infinity

  for (let i = 1; i <= angka; i++) {
      if (angka % i === 0) {
        arr.push(String(i) +  String(angka / i))
    }
  }
  // console.log(arr)
  
  for (let i = 0; i < arr.length; i++) {
    // console.log(temp[0].length + ' ' + temp[i].length)
    if (temp > arr[i].length) {
      temp = arr[i].length
    }
  }
  result = temp
  return result
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
