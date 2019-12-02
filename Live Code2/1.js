/**
 * ===================
 * SECRET PHONE NUMBER
 * ===================
 * 
 * 
 * Function ini akan mengubah 5 digit di belakang nomor handphone, menjadi '*', 
 * 
 * contoh : 
 *  1. input: "081267465370" -> 5 angka dibelakangnya adalah 65370
 *     output: "0812674*****"
 *  2. input: "08537582711" -> 5 angka dibelakangnya adalah 82711
 *     output: "085375*****"
 * 
 *  - Jika nomor handphone kurang dari 10 digit, maka function akan mereturn:
 *      "Invalid phone number"
 * 
 * RULES: 
 *  1. Wajib menggunakan pseudocode
 * 
 * STORE temp with empty
 * STORE count with any value
 * STORE jumlah EQUAL length of numbers minus 5
 * make looping for numbers
 * each ADD count
 * IF count > jumlah
 * ADD temp with '*
 * ELSE
 * ADD temp with numbers of index
 * 
 * IF length of number < 10
 * Display 'Invalid phone number
 * 
 * DISPLAY temp
 *  
 */

function secretPhoneNumber (numbers) {
  // your code here
  let temp = ''
  let count = 0
  let jumlah = numbers.length - 5
  for (let i = 0; i < numbers.length; i++) {
      count++
      if (count > jumlah) {
        temp += '*'
      }
      else {
        temp += numbers[i]
      }
  }

  if (numbers.length < 10) {
    return 'invalid phone number'
  }
  return temp
}

console.log(secretPhoneNumber("081267465370"))
// 0812674*****
console.log(secretPhoneNumber("08537582711"))
// 085375*****
console.log(secretPhoneNumber("085758271523"))
// 0857582*****
console.log(secretPhoneNumber("0811739915"))
// 08117*****
console.log(secretPhoneNumber("08238797"))
// "Invalid phone number"