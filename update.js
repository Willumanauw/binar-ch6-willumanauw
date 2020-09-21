const { Pegawai } = require('./models')
// Kita lakukan query terhadap artikel
// Artikel tersebut memiliki id yang bernilai 1
const query = {
    where: { id: 1 }
}
Pegawai.update({
nama: 'Sadio Mane'
}, query)
  .then(() => {
  console.log("Data berhasil diupdate")
  process.exit()
})
  .catch(err => {
  console.error("Gagal mengupdate artikel!")
})