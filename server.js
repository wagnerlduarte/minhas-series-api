const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));

mongoose.connect('mongodb://192.168.99.100:27017/minhas-series', { useUnifiedTopology: true, useNewUrlParser: true })

requireDir('./src/models')

app.use('/', require('./src/routes'));

app.listen(3001);