var books = require('../controllers/books.js');
let path = require('path');


module.exports=function(app){ 
    app.post('/books',(req,res)=>{
        books.add(req,res);
    })
    app.get('/books',(req,res)=>{
        books.show(req,res);
    })
    app.get('/books/:id',(req,res)=>{
        books.showOne(req,res)
    })
    app.put('/books/:id',(req,res)=>{
        books.edit(req,res)
    })
    app.delete('/books/:id',(req,res)=>{
        books.remove(req,res)
    })
    app.put('/books/inc/:id',(req,res)=>{
        books.increment(req,res)
    })
    app.post('/review/:id',(req,res)=>{
        books.addReview(req,res)
    })
    app.all('*',(req,res,next)=>{
        console.log('here');
        res.sendFile(path.resolve('./Client/dist/index.html'))
    });
}