const Joi = require('joi');
const person = require("./person");
const catchAsyncErrors = require('./middlewares/catchAsyncErrors');
const ErrorHandlerClass = require("./utils/ErorrHandlerClass");
const TestRepository = require('./Repository/testRepository');

const syncFun = catchAsyncErrors((req, res, next) => {
    return next(new ErrorHandlerClass("This is my custom error",400))
})


const asyncFun = catchAsyncErrors(async (req, res, next) => {
        // const data = await TestRepository.testAdd(req.body.name)
        const { name } = req.body;
         new person({
            name : name
        }).save();
        
        res.send("OK")
     
})

module.exports = {syncFun, asyncFun}

