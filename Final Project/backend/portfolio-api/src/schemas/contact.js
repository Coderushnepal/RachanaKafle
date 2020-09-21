import Joi from 'joi';
export  const CREATE_Contact_Form_SCHEMA=Joi.object().keys({
    fullName:Joi.string().max(60).required(),
    email:Joi.string().max(100).required(),
    // phoneNumber:Joi.number().min(1000000000).max(9999999999).required(),
    phoneNumber:Joi.string().required(),
    message:Joi.string().max(400).required(),
    });

    export function validateContactFormCreation(req, res, next) {
        try {
          Joi.assert(req.body, CREATE_Contact_Form_SCHEMA);     
          next();
        } catch(err) {
         next(err);
        }
      }