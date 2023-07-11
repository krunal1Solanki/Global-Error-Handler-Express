const person = require("../person");

const TestRepository = new class {
    async testAdd(name) {
        await new person({
            name : name
        }).save();
        
        return `${name} added successfully`
     }
}

module.exports = TestRepository