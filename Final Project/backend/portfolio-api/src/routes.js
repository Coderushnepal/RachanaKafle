import {Router} from 'express';
const router= Router();
import * as homeController from './controllers/home'
import * as aboutController from './controllers/about'
import * as endpoints from './constants/endpoints';



//first display

router.get('/',(req,res,next) => {
    res.json({
        name:'protfolio-api',
        version:"1.0.0"
    })
})
/**
 * routes for home page
 */
router.post(endpoints.CREATE_HomePageContent,homeController.createHomePageContent);
router.get(endpoints.GET_HomePageContent,homeController.getHomePageContent);
router.put(endpoints.UPDATE_HomePageContent,homeController.updateHomePageContent);
router.delete(endpoints.UPDATE_HomePageContent,homeController.deleteHomePageContent);


router.post('/about',aboutController.createAbout);




export default router;

