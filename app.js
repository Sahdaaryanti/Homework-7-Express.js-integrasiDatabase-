// app.js
const express = require('express');
const actorRoutes = require('./routes/actor');
const filmRoutes = require('./routes/film');
const categoryRoutes = require('./routes/category');

// Inisialisasi aplikasi Express dan menetapkan nomor port 
const app = express();
const port = 3500;

//Mengatur rute utama ("/") untuk mengarahkan pengguna ke rute "/api"
app.get('/', (req, res) => {
    res.redirect('/api');
  });

//Middleware Express  
app.use('/api', actorRoutes);
app.use('/api', filmRoutes);
app.use('/api', categoryRoutes);

//Menjalankan server Express pada port
app.listen(port, () => {
  console.log(`Server berjalan pada port: ${port}`);
});
