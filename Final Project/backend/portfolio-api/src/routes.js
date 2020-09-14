import {Router} from 'express';
const router= Router();

// //todo
// router.get('/',(req,res,next) => {
//     res.json({
//         name:'todo-api',
//         version:"1.0.0"
//     })
// })

// export default router;

//protfolio

router.get('/',(req,res,next) => {
    res.json({
        name:'protfolio-api',
        version:"1.0.0"
    })
})

export default router;

