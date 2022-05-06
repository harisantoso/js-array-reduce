// contoh 1
// const price = [10, 30, 20, 40]
// const reduce = price.reduce(function (previousValue, currentValue) {
//   console.info({
//     previousValue,
//     currentValue
//   })
// })



// contoh 2
// const price = [10, 30, 20, 40]

// const reduce = price.reduce(function (previousValue, currentValue) {
//   console.info(`${previousValue} + ${currentValue} = ${previousValue + currentValue}`)
//   return previousValue + currentValue
// })

// console.info(reduce)



// contoh 3
const price = [10, 30, 20, 40]

const reduce = price.reduce(function (previousValue, currentValue) {
  console.info(`${previousValue} + ${currentValue} = ${previousValue + currentValue}`)
  return previousValue + currentValue
  // menggunakan inisial value
}, 50) //Hasilnya 150

console.info(reduce)