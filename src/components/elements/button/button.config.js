module.exports = {
    order: 7,
    status: "ready",
    context: {
        type: "button",
        text: "Click Me"
    },
    variants: [
        {
            name: "submit",
            label: "Submit",
            context: {
                type: "submit",
                text: "Save Changes"
            }
        },
        {
            name: "reset",
            label: "Reset",
            context: {
                type: "reset",
                text: "Reset Form"
            }
        },
        {
            name: "link",
            context: {
                class: "link",
                text: "Settings"
            }
        }
    ]
};
