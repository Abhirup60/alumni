const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    // console.log(users);
    return res.status(200).json({ message: users });
  } catch (error) {
    return res.status(400).json({ msg: "user can't be fetched" });
  }
};

const getAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    // console.log(contacts);
    return res.status(200).json({ message: contacts });
  } catch (error) {
    return res.status(400).json({ msg: "contacts can't be fetched from database" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    return res.status(400).json({ msg: "user is not deleted" });
  }
};

const deleteContacts = async(req,res)=>{
  try {
    const id = req.params.id;
    await Contact.deleteOne({_id:id});
    return res.status(200).json({msg:"Contact deleted successfully"});
  } catch (error) {
    return res.status(400).json({ msg: "contact is not deleted" });
    
  }
}

const getContact = async(req,res)=>{
  try {
    const id = req.params.id;
    const contactData = await Contact.findOne({_id:id});
    return res.status(200).json({msg:contactData});
  } catch (error) {
    return res.status(400).json({ msg: "contact data not fetched from url using contact id" });
  }
}

const updateContact = async(req,res)=>{
  try {
    const id = req.params.id;
    const updatedContactData = req.body;
    const updated_contactData = await Contact.updateOne({_id:id},{
      $set: updatedContactData,
    })
    return res.status(200).json({msg:"contact updated",updated_contactData});
  } catch (error) {
    return res.status(404).json({msg:"contact not updated"});
  }
}

// get user data from url using user._id
const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await User.findOne({ _id: id });
    return res.status(200).json({ msg: userData });
  } catch (error) {
    return res.status(400).json({ msg: "user data not fetched from url using user id" });
  }
};

// update user data
const updateUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        const updateUserData = req.body;
        const updatedData = await User.updateOne({_id:id},{
            $set: updateUserData,
        });

        return res.status(200).json({msg:"user updated",updatedData});
    } catch (error) {
        return res.status(404).json({msg:"user not updated"});
    }
}

module.exports = { getAllUser, getAllContact, deleteUser, getUser, updateUserById, deleteContacts, getContact, updateContact };
