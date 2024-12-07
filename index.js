const express=require('express')
const app=express();
const dotenv=require('dotenv');
// const packagesRouter=require('/routes/PackageRoutes');
const cors=require('cors');
const Connect = require('./DbConfig/dbConfig');
const packagesRouter = require('./routes/PackageRoutes');
const AuthRouter = require('./routes/AuthRoutes');
const BookNowRouter = require('./routes/BookNowRoutes');
dotenv.config();

const PORT=process.env.PORT || 5000;

Connect();

app.use(express.json());

app.use(cors());

app.use('/api/packages', packagesRouter);
app.use('/api/auth', AuthRouter);
app.use('/api', BookNowRouter);

app.listen(PORT, ()=>{
    console.log(`The server is listening at port ${PORT}`);
})