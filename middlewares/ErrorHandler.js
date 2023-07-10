const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
  
    let statusText;
    switch (err.statusCode) {
      case 200:
        statusText = "OK";
        break;
      case 201:
        statusText = "Created";
        break;
      case 202:
        statusText = "Accepted";
        break;
      case 204:
        statusText = "No Content";
        break;
      case 301:
        statusText = "Moved Permanently";
        break;
      case 302:
        statusText = "Found";
        break;
      case 400:
        statusText = "Bad Request";
        break;
      case 401:
        statusText = "Unauthorized";
        break;
      case 403:
        statusText = "Forbidden";
        break;
      case 404:
        statusText = "Not Found";
        break;
      case 405:
        statusText = "Method Not Allowed";
        break;
      case 409:
        statusText = "Conflict";
        break;
      case 500:
        statusText = "Internal Server Error";
        break;
      case 502:
        statusText = "Bad Gateway";
        break;
      case 503:
        statusText = "Service Unavailable";
        break;
      case 504:
        statusText = "Gateway Timeout";
        break;
      default:
        statusText = "Unknown Error";
    }
  
    res.status(err.statusCode).json({
      status: err.statusCode,
      error: err.message,
    });
  };
  
  module.exports = errorMiddleware;
  