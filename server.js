var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'quote-ranks-app', 'dist')));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/quote_ranks_demo_march');

var AuthorSchema = new mongoose.Schema({
    name: {type: String, minlength: 3},
    quotes: [{
        content: {type:String, minlength:3},
        votes: {type:Number, default: 0}
    }]
})
mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author');

app.post('/authors', (req,res)=>{
    var newAuthor = new Author({name: req.body.name});
    newAuthor.save(function(err){
        if(err){
            res.json(err);
        }else{
            res.json(newAuthor);
        }
    })
})

app.get('/authors', (req,res)=>{
    Author.find({}, (err, foundAuthors)=>{
        if (err) {
            res.json(err);
        } else {
            res.json(foundAuthors);
        }
    })
})

app.get('/authors/:id', (req,res)=>{
    Author.findOne({_id: req.params.id}, (err, foundAuthor)=>{
        if (err) {
            res.json(err);
        } else {
            res.json(foundAuthor);
        }
    })
})
app.put('/authors/:id', (req,res)=>{
    Author.findOne({ _id: req.params.id }, (err, foundAuthor) => {
        if (err) {
            res.json(err);
        } else {
            foundAuthor.name = req.body.name;
            foundAuthor.save((err)=>{
                if(err){
                    res.json(err);
                }else{
                    res.json(foundAuthor);
                }
            })
        }
    })
})
app.delete('/authors/:id', (req,res)=>{
    Author.remove({_id: req.params.id}, (err)=>{
        res.json({message: 'author deleted'});
    })
})
app.post('/quotes/:author_id', (req,res)=>{
    // 1. Find the author by id
    // 2. push to the array of quotes
    // 3. save the author
    Author.findOne({_id: req.params.author_id}, (err, foundAuthor)=>{
        if(err){
            res.json(err);
        }else{
            foundAuthor.quotes.push({content: req.body.content});
            foundAuthor.save((err)=>{
                if(err){
                    res.json(err);
                }else{
                    res.json(foundAuthor);
                }
            })
        }
    })
})

app.post('/authors/:author_id/quotes/:quote_id', (req,res)=>{
    Author.findOne({_id: req.params.author_id}, (err, foundAuthor)=>{
        if (err) {
            res.json(err);
        } else {
            var myQuote = foundAuthor.quotes.id(req.params.quote_id);
            console.log(myQuote);
            if(req.body.vote == 'up'){
                myQuote.votes++;
            }else{
                myQuote.votes--;
            }
            foundAuthor.save((err)=>{
               if(err){
                   res.json(err);
               } else{
                   res.json(foundAuthor);
               }
            })
        }
    })
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./quote-ranks-app/dist/index.html"))
});

app.listen(8000, ()=>{
    console.log('listening on port 8000');
});