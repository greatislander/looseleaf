module.exports = {
    order: 6,
    status: "ready",
    context: {
        label: "Our Party",
        caption: "Members of the party.",
        captionSide: "top",
        columnHeaders: [
            "Name",
            "E-mail",
            "Role"
        ],
        rowHeaders: [],
        records: [
            [
                "Bilbo Baggins",
                "bilbo.baggins@hotmail.com",
                "Rogue"
            ],
            [
                "Gandalf the Grey",
                "gandalf@icloud.com",
                "Wizard"
            ],
            [
                "Thorin Oakenshield",
                "oakenshield@gmail.com",
                "Fighter"
            ]
        ]
    },
    variants: [
        {
            name: "bottom-caption",
            label: "Table with Bottom Caption",
            context: {
                captionSide: "bottom"
            }
        },
        {
            name: "row-headers",
            label: "Table with Row Headers",
            context: {
                label: "Q1 Results",
                caption: "First quarter revenue and expenses.",
                captionSide: "top",
                columnHeaders: [
                    "",
                    "Revenue",
                    "Expenses",
                    "Net Income"
                ],
                rowHeaders: [
                    "January",
                    "February",
                    "March"
                ],
                records: [
                    [
                        "1800.00",
                        "1375.00",
                        "425.00"
                    ],
                    [
                        "2100.00",
                        "1550.00",
                        "550.00"
                    ],
                    [
                        "2250.00",
                        "1375.00",
                        "875.00"
                    ]
                ]
            }
        }
    ]
};
