// Logic Challenge: Graduates
// Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

// Student dapat dinyatakan lulus apabila score lebih besar dari 75.
// Masukkan name dan score dari student ke class yang dia ikuti.
// Student yang tidak lulus tidak perlu ditampilkan.
// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:


function graduates (students) {
    // Code disini
    let obj = {}
    for (let i = 0; i < students.length; i++) {
      if (!obj[students[i].class]) {
      obj[students[i].class] = []
      }
      if (students[i].score > 75) {
        let temp = {
          name : students[i].name,
          score : students[i].score
        }
        obj[students[i].class].push(temp)
      }
    }
    return obj
}
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // // {
  // //   foxes: [
  // //     { name: 'Alexander', score: 100 },
  // //     { name: 'Vladimir', score: 92 }
  // //   ],
  // //   wolves: [
  // //     { name: 'Alisa', score: 76 },
  // //   ],
  // //   tigers: [
  // //     { name: 'Viktor', score: 80 }
  // //   ]
  // // }
  
  
  console.log(graduates([])); //{}