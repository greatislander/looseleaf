module.exports = {
    order: 12,
    status: "ready",
    context: {
        name: "condiments",
        legend: "Condiments",
        hint: false,
        error: false,
        options: {
            ketchup: "Ketchup",
            mustard: "Mustard",
            relish: "Relish"
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
                error: "You must choose at least one flavour."
            }
        }
    ]
};
