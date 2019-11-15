// Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.

function cariModus(arr) {
    // you can only write your code here!
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }

  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let found = false
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j][0]) {
        found = true
        newArr[j].push(arr[i])
      }
    }
    if (!found) {
      newArr.push([arr[i]])
    }
  }

  // console.log(newArr)
 
  let result = 0
  let temp = Infinity
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i].length === 2) {
        if(temp > newArr[i][0]) {
          temp = newArr[i][0]
        }
      }
    }
  }
  return temp

  // if(temp === Infinity) {
  //   return -1
  // } else if (temp !== Infinity) {
  //   return temp
  // }

  // if (result == 0 || newArr.length === 1) {
  //   return -1
  // }

  // if (temp.length > 0) {
  //   for (let i = 0; i < temp.length; i++) {
  //     if (temp[i] < temp[i+1]) {
  //       result = temp[i]
  //     }
  //   } 
  // }
}
  
  
  // TEST CASES
  console.log(cariModus([10, 4, 2, 4])); // 4
  // [2, 4, 4, 5, 5, 5, 10]
  console.log(cariModus([5, 10, 10, 1, 2, 5,])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1