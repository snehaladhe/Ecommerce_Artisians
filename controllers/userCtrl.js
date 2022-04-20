const Users=require("../models/userModel")
const bcrypt =require("bcrypt")
const jwt=require("jsonwebtoken")

const userCtrl={

register: async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const user=await Users.findOne({email})
        if(user) return res.status(400).json({msg:"this mail already exists"})
        if(password.length<6) return res.status(400).json({msg:"password must be 6 charcters long"})
     if(password.length>6) return res.status(400).json({msg:"password must be 6 characters long"})
     
     const passwordHash=await bcrypt.hash(password,10)
     const newUser=new Users({
         name,email,password:passwordHash
     })
    //  res.json({password,passwordHash})
    // res.json({msg:"Registerd Successfully!!"})
    // res.json({newUser})
    await newUser.save()
    const accesstoken=createAccessToken({id:newUser._id})
    const refreshtoken=createRefreshToken({id:newUser._id})
res.cookie('refreshtoken',refreshtoken,{
    httpOnly:true,
    path:'/user/refresh_token'
})
    res.json({accesstoken})
    }catch(err){
        return res.status(500).json({msg:err.message})
    }
},
refreshToken:(req,res)=>{
    const rf_token=req.cookies.refreshtoken;
    res.json({rf_token})
}

}
const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl