const mongoose = require('mongoose');
const userModel = require("./user");
require('dotenv').config()

mongoose
  .connect("mongodb+srv://"+process.env.MONGO_USR+":"+process.env.MONGO_PWD+"@"+
    process.env.MONGO_CLUSTER+".7zdwskb.mongodb.net/"+process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));
//tst
async function getUsers(name, job) {
    let result;
    if (name === undefined && job === undefined) {
        result = await userModel.find();
    }
    else if (name && (job === undefined)) {
        result = await findUserByName(name);
    }
    else if (job && (name === undefined)) {
        result = await findUserByJob(job);
    }
    else {
        result = await findUserByNameAndJob(name, job);
    }
    return result;
}

async function findUserById(id) {
    try {
        return await userModel.findById(id);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

async function addUser(user) {
    try {
        const userToAdd = new userModel(user);
        const savedUser = await userToAdd.save()
        return savedUser;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function findUserByName(name) {
    return await userModel.find({ 'name': name });
}

async function findUserByJob(job) {
    return await userModel.find({ 'job': job });
}

async function findUserByNameAndJob(name, job) {
    return await userModel.find({ 'name': name, 'job': job });
}

async function findUserToDelete(id) {
    try {
        return await userModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}


exports.getUsers = getUsers;
exports.findUserById = findUserById;
exports.addUser = addUser;
exports.findUserToDelete = findUserToDelete;