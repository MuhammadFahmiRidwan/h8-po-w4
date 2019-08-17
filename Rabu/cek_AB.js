// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.
function checkAB(num) {
    // you can only write your code here!
    var indexAB = 0 
    for (var i = 0; i < num.length; i++) {
      var cek = num[i]
      // console.log(cek)
      if (cek === "a" || cek === "b") {
        indexAB = i
        break
      }
    }

    var range = indexAB+4
    if (num[range] === "a" && cek === "b") {
      return true
    }
    else if (num[range] === "b" && cek === "a") {
      return true
    }
    else {
      false
    } 
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  // console.log(checkAB('i am sick')); // false
  // console.log(checkAB('you are boring')); // true
  // console.log(checkAB('barbarian')); // true
  // console.log(checkAB('bacon and meat')); // false