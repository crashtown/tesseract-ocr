const Tesseract = require('tesseract.js')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get("/", ( req, res) => {
     
Tesseract.recognize("ocr-test.jpg", "eng")
    .then(function(result){
        res.send(result.text)
    })
})

app.listen(8080, () => {
    console.log("App listening on port 8080.")
})

// const img = new Image();
// img.src = "http://jurnsearch.files.wordpress.com/2009/07/ocr-test.jpg";