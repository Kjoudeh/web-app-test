//var express = require('express');
const express = require('./config/express.js');
//import express from './config/express.js'

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));
