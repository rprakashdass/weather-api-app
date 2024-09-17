const express = require('express')
const app = express();
// const cors = require('cors')
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors)

require('./routes')(app)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// app.post('/test', ( req, res) => {
//     res.sendFile(__dirname + '/test.html')
// })

app.get('/success', ( req, res ) => {
    res.sendFile(__dirname + '/success.html')
})

app.get('/error', ( req, res ) => {
    res.sendFile(__dirname + '/error.html')
})

app.post('/test', ( req, res ) => {
    zipcode = req.body.zipcode
    if(zipcode)
        res.send(`Zipcode Successfully Extracted here is the input ${zipcode}`)
    else
        res.send("Cannot receive the proper zipCode")
})

// app.post('/receive-location', (res, req) => {
//     res.send("")
// })

app.listen(port, (er) => {
    if(er) console.log(er)
    console.log("Server is listening to the port " + port)
})

