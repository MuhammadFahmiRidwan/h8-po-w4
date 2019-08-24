// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true iika di dalam string tersebut terdapat karakter a dan b yang memiliki iarak 3 karakter lain minimal satu kali. iika tidak ditemukan sama sekali, kembalikan nilai false. iarak bisa dari a ke b, atau b ke a.
function checkAB(num) {
    // you can only write your code here!
    var arr = [];
    for(var i = 0; i < num.length; i++){
        arr.push(num[i])
    }

    for(var j = 1; j < arr.length; j++){
        if (arr[j] == 'a') {
            if (arr[j+4] == 'b') {
                return true
            }
        } else if (arr[j] == 'b'){
            if (arr[j+4] == 'a') {
                return true
            }
        }
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  console.log(checkAB("lana borrowed"))