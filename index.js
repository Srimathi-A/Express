const express = require("express")

var app = express();

var things = require('./things.js')

app.use('/Things',things)

app.listen(3000)  