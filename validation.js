const joi = require('joi');

const registerValidation = (data)=>{
    const schema = joi.object({
        name:joi.string().required().min(3).max(10),
        email:joi.string().required().email(),
        mobile:joi.number().required().min(10).max(10)
    })
    return schema.validate(data);
}
module.exports = registerValidation;