const Contact = require("../models/contact-model")

const contactForm = async(req,res)=>{
    try {
        const {username, email, message} = req.body;
        const userConnection = await Contact.create({username, email, message});
        console.log(userConnection);
        
        return res.status(200).json({message: "message sent successfully"});
    } catch (error) {
        return res.status(400).json({message: "message not delivered"});
    }
};

module.exports = contactForm;