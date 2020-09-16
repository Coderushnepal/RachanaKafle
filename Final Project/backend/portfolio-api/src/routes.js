import {Router} from 'express';
const router= Router();
import * as homeController from './controllers/home';
import * as aboutPageController from './controllers/about';
import * as skillsPageControlller from './controllers/skills';
import * as blogsPageController from './controllers/blogs';
import * as endpoints from './constants/endpoints';



//first display

router.get('/',(req,res,next) => {
    res.json({
        name:'protfolio-api',
        version:"1.0.0"
    })
})
/**
 * routes for homepage
 */
router.post(endpoints.CREATE_HomePageContent,homeController.createHomePageContent);
router.get(endpoints.GET_HomePageContent,homeController.getHomePageContent);
router.put(endpoints.UPDATE_HomePageContent,homeController.updateHomePageContent);
router.delete(endpoints.UPDATE_HomePageContent,homeController.deleteHomePageContent);

/**
 * routes for aboutpage
 */
router.post(endpoints.CREATE_AboutPageContent,aboutPageController.createAboutPageContent);
router.get(endpoints.GET_AboutPageContent,aboutPageController.getAboutPageContent)
router.put(endpoints.UPDATE_AboutPageContent,aboutPageController.updateAboutPageContent);
router.delete(endpoints.DELETE_AboutPageContent,aboutPageController.deleteAboutPageContent);

/**
 * routes for skills page
 */
router.post(endpoints.CREATE_SkillsPageContent,skillsPageControlller.createSkillsPageContent);
router.get(endpoints.GET_SkillsPageContent,skillsPageControlller.getSkillsPageContent);
// router.get(endpoints.GET_Skills_BY_ID,skillsPageControlller.getSkillsById);
router.put(endpoints.UPDATE_SkillsPageContent,skillsPageControlller.updateSkillsPageContent);
router.delete(endpoints.DELETE_SkillsPageContent,skillsPageControlller.deleteSkillsPageContent);

/**
 * routes for blogs page
 */
router.post(endpoints.CREATE_Blogs,blogsPageController.createBlogs);
router.get(endpoints.GET_Blogs,blogsPageController.getBlogs);
router.put(endpoints.UPDATE_Blogs,blogsPageController.updateBlogs);
router.delete(endpoints.DELETE_Blogs,blogsPageController.deleteBlogs);



export default router;

