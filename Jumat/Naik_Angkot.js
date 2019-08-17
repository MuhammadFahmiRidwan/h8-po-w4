// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var bayar = 2000
    var arr = []
    for ( var i = 0; i < arrPenumpang.length; i++) {
      var pelanggan = { 
        penumpang : arrPenumpang[i][0], 
      }
      for ( var j = 0; j < rute.length; j++) {
        if (rute[j] == arrPenumpang[i][1]) {
          pelanggan.naikDari = rute[j]
          for (var k = j; k < rute.length; k++) {
            if (rute[k] == arrPenumpang[i][2]){
              pelanggan.tujuan = rute[k]
              pelanggan.bayar = (k - j) * bayar
            }
          }
        }
      }
      arr.push(pelanggan)
  }
  return arr
}
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); // []