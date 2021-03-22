module.exports = {
    status: "ready",
    context: {
        type: "button",
        text: "Press this button"
    },
    variants: [
        {
            name: "reset",
            context: {
                type: "reset"
            }
        },
        {
            name: "link",
            context: {
                class: "link"
            }
        }
    ]
};
