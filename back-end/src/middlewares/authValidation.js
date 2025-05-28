import joi from 'joi';

const singupValidation = (req,res,next) => {
  const Schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
  })
  const {error} = Schema.validate(req.body); 
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next()
};


const loginValidation = (req,res,next) => {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
  })
  const {error} = Schema.validate(req.body); 
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next()
};

export {singupValidation,loginValidation}