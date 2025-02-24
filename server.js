//if any request changes the state of any server then we have to do it by post request
//data is not visible in post request in url
//data is send through req.body
const express=require("express");
const app=express();
//middleware to parse urlencoded data
app.use(express.urlencoded({extended:true}))
let userData=[]
app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})
app.post("/signup",(req,res)=>{
    let {username,useremail,userpassword}=req.body;
    let newuser={
        name:username,
        email:useremail,
        password:userpassword
    }
    userData.push(newuser);
    res.send(userData);
    // console.log(username,useremail,userpassword);
})
app.listen(3456,()=>{
    console.log("server started..");
})