const faker = require("faker");

module.exports = {
    status: "ready",
    context: {
        quote: faker.lorem.sentence(9),
        citation: "Anonymous"
    }
};
