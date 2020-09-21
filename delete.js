const { Pegawai } = require('./models')

Pegawai.destroy({
    where: {
    status: 'Kontrak'
    }
    })
    .then(() => console.log("Hapus data berhasil"))