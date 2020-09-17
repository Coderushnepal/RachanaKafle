/**
 * homepage endpoints
 */
export const GET_HomePageContent = '/home';
// export const GET_USER_BY_ID = '/home/:homeId';
export const CREATE_HomePageContent = '/home';
export const DELETE_HomePageContent= '/home/:homeId';
export const UPDATE_HomePageContent = '/home/:homeId';

/**
 * aboutpage endpoints
 */
export const CREATE_AboutPageContent = '/about';
export const GET_AboutPageContent = '/about';
export const UPDATE_AboutPageContent = '/about/:aboutId';
export const DELETE_AboutPageContent= '/about/:aboutId';

/**
 * skills page endpoints
 */
export const CREATE_SkillsPageContent = '/skills';
export const GET_SkillsPageContent = '/skills';
export const GET_Skills_BY_ID = '/skills/:skillsId';
export const UPDATE_SkillsPageContent = '/skills/:skillsId';
export const DELETE_SkillsPageContent= '/skills/:skillsId';

/**
 * blogs page endpoints
 */
export const CREATE_Blogs = '/blogs';
export const GET_Blogs = '/blogs';
export const UPDATE_Blogs = '/blogs/:blogsId';
export const DELETE_Blogs= '/blogs/:blogsId';

/**
 * contact page endpoints
 */
export const CREATE_Contact = '/contact';
export const GET_Contact = '/contact';
export const DELETE_Contact= '/contact/:contactId';

/**
 * comment endpoints
 */
export const CREATE_Comment = '/comment';
export const GET_Comment = '/comment';
export const DELETE_Comment= '/comment/:commentId';

/**
 * admin login endpoints
 */
export const CREATE_LoginCredentials= '/login';
export const GET_LoginCredentials= '/login';
export const UPDATE_LoginCredentials= '/login/:loginId';
export const DELETE_LoginCredentials='/login/:loginId';