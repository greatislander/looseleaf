module.exports = {
    order: 6,
    status: "ready",
    context: {
        button: {
            content: "Default link"
        }
    },
    variants: [
        {
            "name": "current-page",
            context: {
                button: {
                    content: "Link to the current page",
                    ariaCurrent: "page"
                }
            }
        },
        /* TODO: Add style for rel="external" links
        {
            "name": "external-page",
            context: {
                button: {
                    content: "Link to an external page",
                    rel: "external"
                }
            }
        }, */
        {
            "name": "button",
            context: {
                button: {
                    content: "Continue",
                    class: "button"
                }
            }
        }
    ]
};
