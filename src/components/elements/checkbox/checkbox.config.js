module.exports = {
    order: 11,
    status: "ready",
    context: {
        name: "remember",
        id: false,
        label: "Remember me",
        ariaDescribedby: false,
        hint: false,
        error: false,
        invalid: false
    },
    variants: [
        {
            name: "hint",
            context: {
                hint: "This will keep you logged in for 30 days."
            }
        },
        {
            name: "error",
            context: {
                name: "tos",
                label: "I agree to the Terms of Service",
                error: "You must agree to the terms of service to use this website."
            }
        }
    ]
};
