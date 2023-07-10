const express = require('express');
const app = express();
const {  asyncFun, syncFun } = require('./testController');
const router = require('./routes');
const errorMiddleware = require('./middlewares/ErrorHandler');
require('./db')

app.use(express.json())

// routes
app.get('/async', asyncFun);
app.get('/sync', syncFun)


// middlewares
app.use('/', router);
app.use(errorMiddleware)


app.listen(3001, () => {
    console.log("Server running fine on port 3001");
})
