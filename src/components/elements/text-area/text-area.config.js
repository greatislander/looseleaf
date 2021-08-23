module.exports = {
    order: 9,
    status: "ready",
    context: {
        name: "message",
        id: false,
        label: "Message",
        hint: false,
        error: false
    },
    variants: [
        {
            name: "hint",
            context: {
                hint: "Please enter a message."
            }
        },
        {name: "error",
            context: {
                error: "You must enter a message."
            }
        }
    ]
};
