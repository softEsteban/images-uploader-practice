const express = require('express')
const app = express()
const path = require('path')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.set('view engine', "ejs")

app.get('', (req, res) => {
    res.send(`<h1> Hola </h1>
    <input type="text" >`)
})

app.get('/upload', (req, res) => {
    // res.send(`<title> Upload view </title>`)
    res.render('upload')
    
})

app.post('/upload', upload.single('image') ,  (req, res) => {
    res.send('Image Uploaded')
})


app.listen(3001)
console.log('Running at localhost:3001')