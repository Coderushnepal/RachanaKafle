import joi from 'joi';
export  const CREATE_USER_SCHEMA=joi.object().keys({
    firstName:joi.string().max(20).required(),
    lastName:joi.string().max(20).required(),
    email:joi.string().max(100).required(),
    password:joi.string().min(8).max(30).required(),
    phoneNumbers:joi.array().required().min(0).items(joi.object().keys({
      number:joi.number().min(1000000000).max(99999999999).required(),
      type:joi.string().required().valid('home','cell','work')
    }))


    });

    export  const UPDATE_USER_SCHEMA=joi.object().keys({
      firstName:joi.string().max(20),
      lastName:joi.string().max(20),
      // phoneNumbers:joi.array().required().min(0).items(joi.object().keys({
      //   number:joi.number().min(1000000000).max(99999999999).required(),
      //   type:joi.string().required().valid('home','cell','work')
      // }))
    }).min(1);

    export function validateUserCreation(req, res, next) {
        try {
          joi.assert(req.body, CREATE_USER_SCHEMA);
      
          next();
        } catch(err) {
         next(err);
        }
      }
      
      export function validateUserUpdate(req, res, next) {
        try {
          joi.assert(req.body, UPDATE_USER_SCHEMA);
      
          next();
        } catch(err) {
         next(err);
        }
      }
      