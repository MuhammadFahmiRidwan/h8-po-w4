// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    hasil = ""
    temp = kalimat.toUpperCase()

    for (var i = 0; i <kalimat.length; i++) {
      // console.log(temp[i])
      if (kalimat[i] != temp[i]){
        hasil += kalimat[i].toUpperCase()
      }
      else {
        hasil += kalimat[i].toLowerCase()
      }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"