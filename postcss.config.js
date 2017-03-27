module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
        browsers: "last 2 versions",
        features: {
            customProperties: {
                variables: {
                    maxWidth: "75rem",
                    colorPrimaryDark: "#152737",
                    colorPrimary: "#1D2F3E",
                    colorSecondaryDark: "#0f9fB4",
                    colorSecondary: "#0FB493",
                    colorNeutralDark: "#586e75",
                    colorNeutral: "#839496",
                    colorNeutralLight: "#FBFCFC",
                    colorText: "#555",
                    colorBackground: "#F5F5F5"
                }
            }
        }
    }),
    require("postcss-reporter")(),
    ...!config.production
        ? [require("postcss-browser-reporter")()]
        : []
]
