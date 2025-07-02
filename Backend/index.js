const express = require("express");
const app = express();
const { createCard } = require("./type");
const PORT = 3000;
const { Cards } = require("./db")
const bodyParser = require("body-parser");

app.use(express.json());

app.get('/cards',async function(req,res){
    const allCards = await Cards.find({});
    res.json({
        msg:"All cards",fetchedCards : allCards
    })
});

app.post('/cards',async function(req,res){
    const createPayload = req.body; // createPayload = json body sent through request is stores in this 
    const parsePayload = createCard.safeParse(createPayload);
    if(!parsePayload.success){
        return res.status(411).json({
            msg : "Invalid Inputs"
        })
        return;
    }
    //put in mongodb
    await Cards.create({
        Name : createPayload.Name,
        Description : createPayload.Description,
        SocialMediaLinks : createPayload.SocialMediaLinks,
        Interest : createPayload.Interest,

    })
    res.json({
        msg : "Created your bussiness card"
    })
});

app.put('/cards/:id',async function(req,res){
    const createPayload = req.body;
    const parsePayload = createCard.safeParse(createPayload);
    if(!parsePayload.success){
        return res.status(411).json({
            msg:"Invalids"
        })
        return;
    }
    //old way to do this
    // await Cards.update({
    //     _id : req.body.id
    //   { $set: createPayload }
    // })
    const putting = await Cards.findByIdAndUpdate(req.params.id,createPayload,{new:true});
    if(!putting){
        res.status(404).send();
    }else{
        res.status(200).json({
            msg : "Card updated!!"
        })
    }
});

app.delete('/cards/:id',async function(req,res){
    const removeCard = await Cards.findByIdAndDelete(req.params.id);
    if(!removeCard){
        res.status(404).json({
            msg : "Card not found"
        })
    }else{
        res.status(200).json({
            msg: "Card deleted successfully"
        })
    }
});

// app.use('/*',function(req,res){
//     res.status(404).send("Route not found");
    
// })


app.listen(PORT,()=>{
    console.log(`Starting server ${PORT}`)
})
