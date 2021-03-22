const faker = require("faker");

module.exports = {
    order: 3,
    status: "ready",
    context: {
        quote: faker.lorem.sentence(9),
        citation: "Anonymous"
    }
};
