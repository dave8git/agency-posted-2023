const express = require('express');
const path = require('path');
const app = express(); 
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
// const testimonials = require('./routes/testimonials.routes');
// const concerts = require('./routes/concerts.routes');
// const seats = require('./routes/seats.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(cors());


// app.use('/api', testimonials); // add post routes to server
// app.use('/api', concerts);
// app.use('/api', seats);


  
// app.use(express.static(path.join(__dirname, '/client/build')));



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

app.use((req, res) => {
    res.status(404).json('404');
});



// connects our backend code with the database
mongoose.connect('mongodb+srv://davepol:Olivermuc1@davepolcluster.yn1hyo1.mongodb.net/ads_collection_db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//mongodb+srv://davepol:<password>@davepolcluster.yn1hyo1.mongodb.net/?retryWrites=true&w=majority

db.once('open', () => {
    console.log('Connected to the database');
  });
  db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: 8000')
});



