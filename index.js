// console.log("Hello world");

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();


const app = express();



app.use(cors());
app.use(express.json()); 




app.get('/', (req, res) => {
  res.send('Welcome to the School Student Management API!!');
});


const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/schoolDB';

mongoose.connect(MONGO_URI)
  .then(() => console.log(' MongoDB connected successfully'))
  .catch((err) => console.error(' MongoDB connection failed:', err));



const PORT = process.env.PORT ||3000;


app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

