import * as Contact from '../models/contact';
import logger from '../utils/logger';




/**
 * create  contact page 
 * @param {} payload 
 */

export async function createContact(payload) {
    logger.info("Contact  created successfully")
    const data=await Contact.create(payload);
    return {
        data,
        message:'Contact created successfully'
    }
  }

/**
 * get Contact 
 */
export async function getContact() {
    logger.info("Fetching  contact")
    const data=await Contact.getAll()
    return {
        data,
        message: 'conatct received',   
        }; 
    
    }

  
/**
 * Delete a contact 
 * @param contactId 
 */
export async function deleteContact(contactId) {
    await Contact.remove(contactId);
  
    return {
      message: "Deleted contact with id " + contactId
    };
   }