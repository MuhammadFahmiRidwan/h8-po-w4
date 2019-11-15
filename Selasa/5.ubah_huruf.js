// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
    // you can only write your code here!
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    let arr = []
    let result = ''

    for (let i = 0; i < abjad.length; i++) {
      arr.push(abjad[i])
    }

    for (let i = 0; i < kata.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        // console.log(kata[i] + ' ' + arr[j])
        if (kata[i] == arr[j]) {
          result += arr[j+1]
        }
      }
    }
    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu