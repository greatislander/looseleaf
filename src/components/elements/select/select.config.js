module.exports = {
    order: 10,
    status: "ready",
    context: {
        name: "flavour",
        id: false,
        label: "Favourite Flavour",
        hint: false,
        error: false,
        default: "",
        options: {
            "": "",
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
        {name: "error",
            context: {
                error: "You must choose a flavour."
            }
        }
    ]
};
