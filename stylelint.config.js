module.exports = {
    "extends": "stylelint-config-fluid",
    "plugins": [
        "stylelint-use-logical-spec"
    ],
    "ignoreFiles": ["build/**/*.css", "dist/**/*.css"],
    "rules": {
        "liberty/use-logical-spec": ["always", {"except": ["float", "top", "left", "right", "bottom", "max-width", "min-width", "max-height", "min-height", "width", "height", /border/]}]
    }
};
