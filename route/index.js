

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
indexRouter.post("/",(req,res)=>{
    
})
indexRouter.post("/new",(req,res)=>{
    const {messageText,username} = req.body;
    messages.push({text:messageText,user:username,added : new Date()});
    
    res.redirect("/")
})

module.exports = indexRouter