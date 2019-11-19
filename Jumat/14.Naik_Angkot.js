// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F']
  let arr = []
  
  for (let i = 0; i < arrPenumpang.length; i++) {
    let obj = {
      penumpang : arrPenumpang[i][0],
      naikDari : arrPenumpang[i][1],
      tujuan : arrPenumpang[i][2],
      bayar : 0
    }

    let indexNaik = 0
    let indexTujuan = 0
    for (let j = 0; j < rute.length; j++) {
      // console.log(obj.naikDari)
      if (rute[j] === obj.naikDari) {
        indexNaik = j
      }
      else if (rute[j] === obj.tujuan) {
        indexTujuan = j
      }
    }
    console.log(indexNaik)
    // console.log(indexTujuan)
    obj.bayar = Math.abs(indexTujuan - indexNaik) * 2000
    arr.push(obj)
  }
  return arr
}
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); // []