import * as loginPageService from '../services/login'

/**
 * Controller to  create admin login credentials.
 * 
 * @param req
 * @param res 
 * 
 */
export function createAdminLogin(req, res, next) {
  loginPageService
  .createAdminLogin(req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}

/**
 * Controller to get admin login credentials
 * 
 * @param req
 * @param res 
 * 
 */

export function getAdminLogin(req, res, next) {
    loginPageService
    .getAdminLogin()
    .then(data =>res.json(data))
    .catch(err => next(err))
  }


  /**
 * Controller to update the login credentials
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function updateAdminLogin(req, res, next) {
    loginPageService
    .updateAdminLogin(+req.params.loginId,req.body)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }

  /**
 * Controller to delete admin login
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function deleteAdminLogin(req, res, next) {
    loginPageService
    .deleteAdminLogin(+req.params.loginId)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }

 

/**
 * Controller for user login.
 *
 * @param req
 * @param res
 * @param next
 */
export function login(req, res, next) {
  loginPageService
    .login(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}