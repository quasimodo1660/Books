let mongoose = require('mongoose');
var Book=mongoose.model('Book');

module.exports={
    add:(req,res)=>{
        book = new Book(req.body);
        book.save(function(err){
            if(err)
                res.json(err);
            else
                res.json({message:'Success add a book'});
        })
    },
    show:(req,res)=>{
        Book.find({}).sort({createdAt:'desc'}).exec((err,results)=>{
            if(err)
                res.json(err);
            else
                res.json(results);
        })
    },
    showOne:(req,res)=>{
        Book.find({_id:req.params.id},(err,results)=>{
            if(err){
                res.json(err);
            }     
            else{
                res.json(results);
            }        
        })
    },
    edit:(req,res)=>{
        Book.update({_id:req.params.id},req.body,{runValidators: true},(err,results)=>{
            if(err)
                res.json(err);
            else
                res.json({message:'Success update a book'});     
        })
    },
    remove:(req,res)=>{
        Book.remove({_id:req.params.id},(err,results)=>{
            if(err)
                res.json(err); 
            else{
                res.json({message:'Success delete a book'});
            }        
        })
    },
    increment:(req,res)=>{
        Book.update({_id:req.params.id},{ $inc:{like:1}},(err,results)=>{
            if(err)
                res.json(err);
            else
                res.json({message:'Success increase by 1'});     
        })

    },
    addReview:(req,res)=>{
        Book.update({_id:req.params.id},{ $push: {review:req.body}},{runValidators: true},(err,results)=>{
            if(err)
            res.json(err);
        else
            res.json({message:'Success add a review'});   
        })
    },
  
}