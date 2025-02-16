const validate = (schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        console.log("valiadate-middleware: ", parseBody);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 588;
        const message = err.issues[0].message;

        const error = {
            status,
            message,
        }

        console.log(error);
        // res.status(400).json({message: message});
        next(error);
    }
};

module.exports = validate;