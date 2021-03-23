module.exports = {
    order: 4,
    status: "ready",
    context: {
        type: "ul",
        items: [
            "First item",
            "Second item",
            "Third item",
            "Fourth item which, under some circumstances, wraps to the subsequent line because of its excessive length",
            "Fifth item"
        ]
    },
    variants: [
        {
            name: "default",
            label: "Unordered"
        }
    ]
};
