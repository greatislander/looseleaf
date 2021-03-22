const faker = require("faker");

const paragraphs = [];
for (var i = 0; i < 3; i++) {
    paragraphs.push({
        content: faker.lorem.paragraph()
    });
}

module.exports = {
    order: 2,
    status: "ready",
    context: {
        paragraphs: paragraphs
    }
};
