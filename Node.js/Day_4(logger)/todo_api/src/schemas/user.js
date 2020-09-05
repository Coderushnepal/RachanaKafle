import joi from 'joi';
export  const CREATE_USER_SCHEMA=joi.object().keys({
    firstName:joi.string().max(20).required(),
    lastName:joi.string().max(20).required(),
    phoneNumbers:joi.array().required().min(0).items(joi.object().keys({
        number:joi.number().min(1000000000).max(99999999999).required(),
        type:joi.string().required().valid('home','cell','work')
    }))

    });
    export function validateUserCreation(req, res, next) {
        try {
          joi.assert(req.body, CREATE_USER_SCHEMA);
      
          next();
        } catch(err) {
         res.json({
             message:"Invalid data",
             details:err.data
         });
        }
      }
      
