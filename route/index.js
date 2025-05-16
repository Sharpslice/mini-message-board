

const {Router} = require("express");
const indexRouter = Router();
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added : new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
]

indexRouter.get("/",(req,res)=>{
    console.log("in router")
    res.render("index",{
        title:"Mini MessageBoard",
        messages: messages
    })
})
indexRouter.get("/new",(req,res)=>{
    res.render("form");
})

module.exports = indexRouter