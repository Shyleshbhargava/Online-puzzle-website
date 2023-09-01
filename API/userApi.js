const exp=require('express')
const userApp=exp.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const expressAsyncHandler=require('express-async-handler')

//middle ware to extract object body.
userApp.use(exp.json())

//.....user authentication and it is common for every application.....

userApp.post('/createuser',expressAsyncHandler(async (req,res)=>{
    // console.log("body",req.body);
    const authObj=req.app.get('authObj');
    //Search if username is already existed
    let result=await authObj.findOne({username:req.body.username})
    //console.log(result)
    if(result!=null)
    {
        res.send({message:`${req.body.username} is already present try with other username`});
    }
    else
    {
        //otherwise, create new user
        let password=await bcryptjs.hash(req.body.password,5);
        await authObj.insertOne({"name":req.body.name,"username":req.body.username,"password":password});
        res.send({message:"User created Succesfully"});
    }  
}));


userApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const authObj=req.app.get('authObj')
    //finds user with name 'req.body.username' and returns object
    let obj=await authObj.findOne({username:req.body.username})
    if(obj==null)
    {
        res.send({message:`${req.body.username} doesn't exists`,state:200});
        //console.log("No user exist");
    }
    else
    {
        //password checking b/w requested password and stored password.
        //returns true or false based on comparision.
        let status=await bcryptjs.compare(req.body.password,obj.password);
        if(status===false)
        {
            res.send({message:'Invalid username/password'});
        }
        else
        {
            let token=jwt.sign({username:req.body.username},'abcde',{expiresIn:600});
            //send token.
            //after login success,we have to give access to profile.
            res.send({message:'login Succes',payload:token,userDetails:obj,state:100});
        }
    }
}));

module.exports=userApp;