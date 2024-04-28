const express=require("express")
const payment_router=express.Router();
const stripe=require('stripe')('stripe_key')

payment_router.post('/payment',async(req,res)=>{
    const {amount,currency,description,source}=req.body;
    try{
        const charge=await stripe.charge.create({
            amount,
            currency,
            description,
            source
        })
        res.status(200).json({success:true,charge})
    }catch(err){
        res.status(500).json({success:false,error:err.message})
    }
});
module.exports=payment_router