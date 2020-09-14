import joi from 'joi';
export  const CREATE_USER_SCHEMA=joi.object().keys({
    firstName:joi.string().max(20).required(),
    lastName:joi.string().max(20).required(),
    email:joi.string().max(100).required(),
    password:joi.string().min(8).max(30).required(),
    });

    export function validateUserCreation(req, res, next) {
        try {
          joi.assert(req.body, CREATE_USER_SCHEMA);
      
          next();
        } catch(err) {
         next(err);
        }
      }
      
  