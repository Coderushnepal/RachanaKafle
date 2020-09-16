import * as homePageService from '../services/home'

/**
 * Controller to  create home page content.
 * 
 * @param req
 * @param res 
 * 
 */
export function createHomePageContent(req, res, next) {
  homePageService
  .createHomePageContent(req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}


/**
 * Controller to get home content.
 * 
 * @param req
 * @param res 
 * 
 */

export function getHomePageContent(req, res, next) {
    homePageService
    .getHomePageContent()
    .then(data =>res.json(data))
    .catch(err => next(err))
  }

/**
 * Controller to update the details of a homepage
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function updateHomePageContent(req, res, next) {
  homePageService
  .updateHome(+req.params.homeId,req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}
  
     
/**
 * Controller to delete home page content
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function deleteHomePageContent(req, res, next) {
  homePageService
  .deleteHomePageContent(+req.params.homeId)
  .then(data =>res.json(data))
  .catch(err => next(err))
}

  