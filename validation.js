const joi = require('joi');

const registerValidation = (data)=>{
    const schema = joi.object({
        name:joi.string().required().min(3).max(10),
        email:joi.string().required().email(),
        password:joi.string().required().min(6).max(12),
        mobile:joi.number().integer().required().min(1000000000).max(9999999999)
    })
    return schema.validate(data);
}

const loginValidation =(data)=>{
    const schema = joi.object({
        email:joi.string().required().email(),
        password:joi.string().required().min(6).max(12)
    })
    return schema.validate(data);
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation =loginValidation;