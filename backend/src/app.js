"use strict";
const express = require('express');
const app = express();
const PORT = require('./config.js').PORT;
const public_routes = require('./routes/public.js');
const dashboard_routes = require('./routes/dashboard.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());    

app.get( '/image/:image',  ( req, res) => {
    res.sendFile(path.join(__dirname, `./uploads/${req.params.image}`));
});
app.use('/', public_routes);
app.use('/admin/', dashboard_routes);


app.listen( PORT, () => console.log(`Server is running on port ${PORT}`));
