
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = 3000

mongoose.connect('mongodb://localhost:27017/backendshop1',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("Database CONNECTED")
});

//Middleware Interfaces
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


const categoryRoutes=require('./routes/product_category');
const productRoutes=require('./routes/product');
const authRoutes=require('./routes/auth_user');
const orderRoutes=require('./routes/order');

app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',authRoutes);
app.use('/api',orderRoutes);

app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
