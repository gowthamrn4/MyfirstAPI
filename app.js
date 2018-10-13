var express=require('express');
var moviesRouter=require('./routes/moviesRouter');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');


var db=mongoose.connect("mongodb://test:test123@ds227853.mlab.com:27853/curdoperation",{useNewUrlParser:true})
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/movies',moviesRouter);

app.listen(3000,function(){
    console.log('server is running on port 3000');
});

