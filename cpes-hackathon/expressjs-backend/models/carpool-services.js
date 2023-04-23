const mongoose = require('mongoose');
const carpoolModel = require("./carpool");
require('dotenv').config()

mongoose
  .connect("mongodb+srv://"+process.env.MONGO_USR+":"+process.env.MONGO_PWD+"@"+
    process.env.MONGO_CLUSTER+".7zdwskb.mongodb.net/"+process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));
//tst
async function getPools(name, source, dest) {
    let result;
    if (name === undefined && source === undefined && dest === undefined) {
        result = await carpoolModel.find();
    }
    else if (name && (source === undefined)) {
        result = await findPoolByName(name);
    }
    else if (source && (name === undefined)) {
        result = await findPoolBySource(source);
    }
    else {
        result = await findPoolByNameAndSource(name, source);
    }
    return result;
}

async function findPoolById(id) {
    try {
        return await carpoolModel.findById(id);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

async function addPool(carpool) {
    try {
        const poolToAdd = new carpoolModel(carpool);
        const savedPool = await poolToAdd.save()
        return savedPool;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function findPoolByName(name) {
    return await carpoolModel.find({ 'name': name });
}

async function findPoolBySource(source) {
    return await carpoolModel.find({ 'source': source });
}

async function findPoolByNameAndSource(name, source) {
    return await carpoolModel.find({ 'name': name, 'source': source });
}

async function findPoolToDelete(id) {
    try {
        return await carpoolModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}


exports.getPools = getPools;
exports.findPoolById = findPoolById;
exports.findPoolByName = findPoolByName;
exports.addPool = addPool;
exports.findPoolToDelete = findPoolToDelete;