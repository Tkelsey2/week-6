const express = require('express');
const path = require('path');

const app = express();

const publicFolder = path.join(__dirname, 'public');
const assetsJS = path.join(__dirname, 'assets/js');
const assetsCSS = path.join(__dirname, 'assets/css')

// Serve static web pages from the `public` folder, and resources from the
// `assets` folder.

app.use("/", express.static(publicFolder))
app.use("/js", express.static(assetsJS))
app.use("/css", express.static(assetsCSS))

module.exports = app;
