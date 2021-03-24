const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bodyparser = require('body-parser')
const ejs = require('ejs')
const path = require('path')

//MongoDB connection string
const MONGOURI="mongodb+srv://dm_user123:dm_user123@cluster0.ykkfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//Candidate model
const candidate = require('../test_app/models/candidate_model');
const { create } = require('../test_app/models/candidate_model');

//Database connection using mongoose
mongoose.connect(MONGOURI, {useNewUrlParser: true})
    .then(console.log("Database connected.."))
    .catch(err=> console.log(err));

//parse requests to body-parser
app.use(bodyparser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    candidate.find()
        .then(data => {
            res.render('index' , {data})
        })
        .catch(err => {
            console.log(err)
        })
})

app.get('/add_candidate', (req,res)=>{
    res.render('add_candidate')
})


//route for adding new candidates
app.post('/add_candidate', (req,res)=>{
    let {name, email} = req.body

    const newCandidate = new candidate({
        name,
        email
    })

    //inserting data into collection
    newCandidate.save()
    .then(data => {
        res.redirect('/')
    })
    .catch(err => console.log('Email address already exists!'))
})
app.listen(3000 , ()=>{
    console.log(`Listening port: 3000`)
})