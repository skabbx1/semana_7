const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/', require('./routes/authRoutes'));

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));