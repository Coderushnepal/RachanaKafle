import {Router} from 'express';
const router= Router();
import * as homeController from './controllers/home'
import * as aboutController from './controllers/about'


//first display

router.get('/',(req,res,next) => {
    res.json({
        name:'protfolio-api',
        version:"1.0.0"
    })
})

router.post('/home',homeController.createHomePageContent);
router.get('/home',homeController.getHomePageContent);
router.post('/about',aboutController.createAbout);




export default router;

