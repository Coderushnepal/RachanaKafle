import * as homePageService from '../services/home'

/**
 * Controller to home page table.
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

export function getHomePageContent(req, res, next) {
    homePageService
    .getHomePageContent()
    .then(data =>res.json(data))
    .catch(err => next(err))
  }
  
