
const mongoose = require('mongoose');
const Oil = mongoose.model("OIL")


exports.getLevel = (req,res)=>{

    const level = req.params;
    console.log(level.level)
    const date = new Date();
    const thatDate = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    const oil = new Oil()
    
    oil.level = level.level;
    oil.date = thatDate;
    oil.time = time;

    oil.save((err,doc)=>{
        if(!err){
            res.send("data has been sent")
        }else{
            res.send("there is an error")
        }
    })
}

exports.getOil = (req,res)=>{
    Oil.find((err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            console.log("there is an error")
        }
    })
}