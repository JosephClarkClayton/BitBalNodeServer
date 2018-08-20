var express = require('express')
var app = express()
const fetch = require('node-fetch');
var WAValidator = require('wallet-address-validator');



app.get('/:bitcoinAddress', function (req, res) {
    var bitcoinAddressToCheck = req.params.bitcoinAddress;
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(bitcoinAddressToCheck)
    
    fetch('https://blockchain.info/rawaddr/'+bitcoinAddressToCheck)
    .then(res => res.text())
    .then(bbbb =>res.send(bbbb));
  
   
})

app.listen(3000, () => {
    console.log(3000)
})