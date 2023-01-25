const jwt = require("jsonwebtoken");

const  gen_access_token=(user_id)=>{
    console.log('in  the  access');
    const access_token= jwt.sign({id:user_id},process.env.Access_secret, { expiresIn: '10s' })
    return access_token
}

const  gen_refresh_token=(user_id)=>{
    console.log('in  the  refresh');

    const refresh_token= jwt.sign({id:user_id},process.env.Refresh_secret)
    
    return refresh_token
}

module.exports = {gen_access_token,gen_refresh_token}