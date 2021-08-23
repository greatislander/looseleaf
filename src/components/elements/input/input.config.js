module.exports = {
    order: 8,
    status: "ready",
    context: {
        name: "name",
        id: false,
        type: "text",
        label: "Name",
        hint: false,
        error: false
    },
    variants: [
        {
            name: "hint",
            context: {
                hint: "Please enter your full name."
            }
        },
        {name: "error",
            context: {
                error: "You must enter your name."
            }
        }
    ]
};
