const express = require('express')
const app = express()
const {Pegawai} = require('./models')
const pegawai = require('./models/pegawai')
app.use(express.json())
const bodyParser = require('body-parser')
const PORT = 8000

// View Engine
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Parser
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//GET Pegawai All
app.get('/pegawai', (req, res) => {
  Pegawai.findAll()
    .then(pegawais => {
      res.render('pegawais/index', {
        pegawais
      })
    })
})

//GET Pegawai by Id
app.get('/pegawai/:id', (req, res) => {
  Pegawai.findOne({
    where: { id: req.params.id }
  })
    .then(pegawai => {
      res.render('pegawais/show', pegawai)
    })
  })


// Input Pegawai baru
app.post('/pegawais', (req, res) => {
  Pegawai.create({
    nama: req.body.nama,
    status: req.body.status,
    jabatan: req.body.jabatan
  })
    .then(pegawai => {
    res.send('Input Pegawai berhasil dibuat')
  })
})

// GET /pegawais/create, menampilkan form create
app.get('/pegawais/create', (req, res) => {
  res.render('pegawais/create')
  })

// PUT an pegawai
app.put('/pegawais', (req, res) => {
  Pegawai.update({
    nama: req.body.nama,
    status: req.body.status,
    jabatan: req.body.jabatan
  }, {
    where: { id: req.params.id }
  })
  .then(pegawai => {
    res.send('update Pegawai berhasil dibuat')
  })
})

// Menampilkan update form
// app.get('/pegawais/update', (req, res) => {
//   res.render('pegawais/update')
//   })

app.get('/pegawais/update/:id', (req, res) => {
    res.render('pegawais/update', {id : req.params.id})
})


//Delete pegawai
// Pegawai.destroy({
//   where: {
//   status: 'Kontrak'
//   }
//   })
//   .then(() => console.log("Hapus data berhasil"))

// menampilkan login
app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  if (req.body.username === 'admin' && req.body.password === 'admin') {
      res.render('home')
  } else {
      res.status(401).send({'message': 'unauthorized'})
  }
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })