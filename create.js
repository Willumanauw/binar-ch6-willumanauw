// const { Biodata } = require('./models')
// const biodata = require('./models/biodata')
// Biodata.create({
//     idpeg: 1,
//     age: 27,
//     foot: 'Left'
// })

// .then(biodata => {
//     console.log(biodata)
//     })

const { Payment } = require('./models')
const payment = require('./models/payment')
 Payment.create({
    idpeg: 1,
    salary: 50
  })
    
   .then(payment => {
        console.log(payment)
    })