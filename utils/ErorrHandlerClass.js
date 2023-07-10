class ErrorHandlerClass extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode;
    }
}


module.exports =  ErrorHandlerClass