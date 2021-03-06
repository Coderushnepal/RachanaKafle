import * as conatctPageService from '../services/contact'

/**
 * Controller to  create contact message
 * 
 * @param req
 * @param res 
 * 
 */
export function createContact(req, res, next) {
  conatctPageService
  .createContact(req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}

/**
 * Controller to get contact message
 * 
 * @param req
 * @param res 
 * 
 */

export function getConatct(req, res, next) {
    conatctPageService
    .getContact()
    .then(data =>res.json(data))
    .catch(err => next(err))
  }

    /**
* Controller to get skills by Id
* 
* @param req 
* @param res 
* @param next 
*/
export function getContactById(req, res, next) {
  conatctPageService
  .getContactById(+req.params.contactId)
  .then(data =>res.json(data))
  .catch(err => next(err))
  }


  /**
 * Controller to delete contact
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function deleteContact(req, res, next) {
    conatctPageService
    .deleteContact(+req.params.contactId)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }
  