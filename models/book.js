let mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    title:{ type:String,unique:true,required:[true,'Title is required.'],minlength:[3,'Title must be at least 3 characters long']},
    description:{type:String,required:[true,'Description is required'],minlength:[3,'Description must be at least 3 characters']},
    like:{type:Number,default:0},
    pubicDate:{type:Date,required:true},
    review:[{
        reader:{type:String,required:[true,'Reader\'s name is required'],minlength:[3,'Name must be at least 3 characters long'],maxlength:[20,'Name must be no more than 20 characters long']},
        stars:{type:Number,required:true,default:1,min:[1],max:[5]},
        note:{type:String,required:[true,'Review is required'],minlength:[3,'Name must be at least 3 characters long']},
        created_at:{type:Date,default:new Date()},
        display:{type:Boolean,default:false}
    }]
},{timestamps:true})

var Book = mongoose.model('Book',BookSchema);