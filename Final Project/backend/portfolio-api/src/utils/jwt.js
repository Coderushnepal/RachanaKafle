
import jwt from  'jsonwebtoken';
export function generateToken(admin) {
    return jwt.sign(admin,process.env.TOKEN_SECRET);

}

