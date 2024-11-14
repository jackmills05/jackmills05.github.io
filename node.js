const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('index.html')
const productPage = fs.readFileSync('products.html')

const server = http.createServer((req, res ) =>{
    const url = req.url;
    
})