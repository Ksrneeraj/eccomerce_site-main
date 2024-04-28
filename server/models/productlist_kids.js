const mongoose=require("mongoose");

const productlist_kids=mongoose.Schema({
   
    image: {
        type:String,
        require:true
    },
    
    image2: {
        type:String,
        
    },
    image3: {
        type:String,
        
    },  
    title: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    },
    price: {
        type:Number,
        require:true
    },
    discount:{
        type:String
    }

},
{
    timestamps:true,
})

const productlist_kids_schema=mongoose.model("PR_LIST_KID",productlist_kids)
module.exports=productlist_kids_schema;