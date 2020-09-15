import * as About from '../models/about';
import logger from '../utils/logger';

/**
 * create about
 * 
 */

export async function create(payload) {
    logger.info("About created successfully")
    const data=await About.create(payload);
    return {
        data,
        message:'About created successfully'
    }
}
