const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi")

const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//set aylien api credentials

function handler (req, res){
    const textapi = new aylien({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    
    const {url} = req.body;
    try{
        textapi.sentiment({url},function(error, result) {
                console.log('working')
                console.log(res)
                res.send(result)
            })
        
    }catch(error){
        console('ERROR', error)
    }  
}


app.post('/article', handler);


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})