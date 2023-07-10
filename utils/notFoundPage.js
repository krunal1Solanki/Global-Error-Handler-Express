    const ErrorHandlerClass = require("./ErorrHandlerClass")

    const notFound = (req, res, next) => {
        return next(new ErrorHandlerClass("Page Not Found", 404))
    }


    module.exports = notFound