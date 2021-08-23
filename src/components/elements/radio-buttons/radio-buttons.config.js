module.exports = {
    order: 13,
    status: "ready",
    context: {
        name: "flavour",
        legend: "Favourite Flavour",
        hint: false,
        error: false,
        default: "chocolate",
        options: {
            chocolate: "Chocolate",
            vanilla: "Vanilla",
            strawberry: "Strawberry"
        }
    },
    variants: [
        {
            name: "hint",
            context: {
                hint: "Please choose a flavour of ice cream."
            }
        },
        {
            name: "error",
            context: {
                default: false,
                error: "You must choose a flavour."
            }
        }
    ]
};
