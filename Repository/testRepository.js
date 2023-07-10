const person = require("../person");

const TestRepository = new class {
    async testAdd(name) {
        await new person({
            name : name
        }).save();
        
        res.send("OK")
     }
}

module.exports = TestRepository