const adminMiddleware = async(req,res,next)=>{
    try {
        const data = req.user;
        console.log("from admin-middleware user data: ",data);
        console.log(data.isAdmin);
        if(!(data.isAdmin)){
            return res.status(500).json({msg:"access denied! you are not admin"})
        }
        
        next();
    } catch (error) {
        return res.status(400).json({msg:"Access denied! error from admin-middleware"});
    }
}

module.exports = adminMiddleware;