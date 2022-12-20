const userModel = require('../models/userModel');

const createUser = async (req, res) => {
    const firstname = req.body.firstname;
    if(!firstname) return res.status(400).json({massage:'first cannot be null'});
    const phoneExit = await userModel.findOne({phone:req.body.phone});
    if(phoneExit) return res.status(400).json({message: `this phone:${req.body.phone} is already used`});
    const newUser = await userModel.create(req.body);

    return res.status(200).json(newUser);

}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const exitUser = await userModel.findById(userId);
    if(!exitUser) return res.status(400).json({message: 'user not fonud'});
    const updateUser = await userModel.findByIdAndUpdate(userId, req.body);
    return res.status(200).json(updateUser);

}

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const exitUser = await userModel.findById(userId);
    if(!exitUser) return res.status(400).json({message: 'user not fonud'});
    const deleteUser = await userModel.findByIdAndDelete(userId, req.body);
    return res.status(200).json(deleteUser);
}

const selectUser = async (req, res) => {
    const getUser = await userModel.find();
    return res.status(200).json(getUser);
}

const selectUserId = async (req, res) => {
    const userId = req.params.id;
    const getUserId = await userModel.findById(userId);
    return res.status(200).json(getUserId);
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    selectUser,
    selectUserId
}