import * as skillsPageService from '../services/skills'

/**
 * Controller to  create aboutpage content.
 * 
 * @param req
 * @param res 
 * 
 */
export function createSkillsPageContent(req, res, next) {
  skillsPageService
  .createSkillsPageContent(req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}

/**
 * Controller to get skills page content.
 * 
 * @param req
 * @param res 
 * 
 */

export function getSkillsPageContent(req, res, next) {
    skillsPageService
    .getSkillsPageContent()
    .then(data =>res.json(data))
    .catch(err => next(err))
  }

//   /**
// * Controller to get skills by Id
// * 
// * @param req 
// * @param res 
// * @param next 
// */
// export function getSkillsById(req, res, next) {
//   skillsPageService
//   .getSkillsById(+req.params.skillsId)
//   .then(data =>res.json(data))
//   .catch(err => next(err))
//   }
  
  /**
 * Controller to update the skills
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function updateSkillsPageContent(req, res, next) {
    skillsPageService
    .updateSkillsPageContent(+req.params.skillsId,req.body)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }

  /**
 * Controller to delete skills
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function deleteSkillsPageContent(req, res, next) {
    skillsPageService
    .deleteSkillsPageContent(+req.params.skillsId)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }
  