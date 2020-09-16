import * as aboutPageService from '../services/about'

/**
 * Controller to  create aboutpage content.
 * 
 * @param req
 * @param res 
 * 
 */
export function createAboutPageContent(req, res, next) {
  aboutPageService
  .createAboutPageContent(req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}


/**
 * Controller to get about page content.
 * 
 * @param req
 * @param res 
 * 
 */

export function getAboutPageContent(req, res, next) {
  aboutPageService
  .getAboutPageContent()
  .then(data =>res.json(data))
  .catch(err => next(err))
}



/**
 * Controller to update the details of a about page
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function updateAboutPageContent(req, res, next) {
  aboutPageService
  .updateAboutPageContent(+req.params.aboutId,req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}
 

   
/**
* Controller to delete about page content
* 
* @param req 
* @param res 
* @param next 
*/
export function deleteAboutPageContent(req, res, next) {
aboutPageService
.deleteAboutPageContent(+req.params.aboutId)
.then(data =>res.json(data))
.catch(err => next(err))
}


