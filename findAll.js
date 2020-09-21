const { Pegawai } = require('./models')
const pegawai = require('./models/pegawai')

Pegawai.findAll().then(pegawai => console.log(pegawai))