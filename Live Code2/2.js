/**
 * ================
 * Pair Programming
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah funtion pair untuk mengembalikan sebuah array of names, dimana names tersebut
 * adalah pasangan dari 2 nama yang digabung ke dalam 1 string, jika ada yang tidak mendapatkan
 * pasangan maka orang tersebut dianggap sendirian.
 * 
 * Example
 * -------
 * @input = 'vindo,marcel,isni,ajeng,kevin'
 * proses:
 * vindo dipasangkan dengan marcel -> 'vindo dan marcel'
 * isni dipasangkan dengan ajeng -> 'isni dan ajeng'
 * kevin tidak punya pasangan -> 'kevin sendirian'
 * 
 * maka @output = [
 *  'vindo dan marcel',
 *  'isni dan ajeng',
 *  'kevin sendirian'
 * ]
 * 
 * Rules
 * -----
 * 1. Tidak boleh menggunakan built-in function: split, slice, splice, join
 */

function pair(str) {
  // Write your code here
  let arr = []
  let str2 = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ',') {
      arr.push(str2)
      str2 = ''
    }
    else {
      str2 += str[i]
    }
    if (i === str.length-1) {
      arr.push(str2)
    }
  }
  
  let result = []

  for (let i = 0; i < arr.length; i+= 2) {
    // console.log(arr[i+1])
    if (arr[i + 1]) {
      result.push(arr[i] + ' dan ' + arr[i+1]) 
    }
    else {
      result.push(arr[i] + ' sendirian')
    }
  }
  return result
  // if (arr.length % 2 == 0) {

  
  // let result = []
  // console.log(arr.length)
  // let count = 0
  // for (let i = 0; i < arr.length; i++) {
  //   count++
  //   console.log(count)
  //   if (arr.length % 2 == 0 && count % 2 != 0) {
  //     result.push(arr[i][0] + ' dan ')
  //   }
  //   else {
  //     result.push(arr[i][0])
  //   }
  // }
  // return result
  // }

  // else {
  //   let result1 = []
  //   let count = 0
  //   for (let i = 0; i < arr.length; i++) {
  //     count++
  //     console.log(count)
  //     if (arr.length % 2 != 0 && count % 2 != 0) {
  //       result1.push(arr[i][0] + ' dan ')
  //     }
  //     else {
  //       result1.push(arr[i][0])
  //     }
  //   }
  //   return result1
  // }

}

console.log(pair('yusuf,tony,adiel'))
// [ 'yusuf dan tony', 'adiel sendirian' ]

console.log(pair('fajrin,sahata,onesinus,jetly'))
// [ 'fajrin dan sahata', 'onesinus dan jetly' ]

// console.log(pair('refqi,fahmi,sinung,arif,gusti'))
// [ 'refqi dan fahmi', 'sinung dan arif', 'gusti sendirian' ]

// console.log(pair(''))
// No pair