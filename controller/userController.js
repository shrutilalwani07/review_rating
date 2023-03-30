const bcrypt = require("bcrypt");
const userSchema = require("../model/userschema");
//User signup API
const userSignup = async function(req,res){
    console.log(req.body);
    const { email, password } = req.body;
    const userData = new userSchema(req.body);
    try{
        const isUserExists = await userSchema.findOne({ email : email});
        if (isUserExists){
            returnres.status(409).json({
                status : false,
                error : "Email already exist"
            });
        }
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(password,salt);
        await userData.save();
        return res.status(201).json({
            success : true,
            message : "Registration successfully",        
        });
    } catch (err) {
        res.status(500).json({
            status : false,
            error : err.message
        })
    }
}

module.exports = {userSignup}
