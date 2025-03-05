import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

const identification = (req: Request, res: Response, next: NextFunction) => {
    let token;
    if(req.headers.client === 'not-browser'){
        token = req.headers.authorization
    }else{
        token = req.cookies['Authorization']
    }

    if(!token){
        return res.status(403).json({success: false, message: 'Unauthorized'});
    }

    try {
        const userToken = token.split(' ')[1]
        const jwtVerified = jwt.verify(userToken, String(process.env.TOKEN_SECRET));

        if(jwtVerified){
            /* req.user = jwtVerified; */
            return next();
        }else{
            throw new Error('Error en el token')
        }

    } catch (error) {
        console.log(error)
    }
}

export default identification;