const { Pegawai } = require('./models')
const pegawai = require('./models/pegawai')

Pegawai.findOne({
    where: { id: 5}
    })
    .then(pegawai => console.log(pegawai))