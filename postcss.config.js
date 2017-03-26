module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
        browsers: "last 2 versions",
        features: {
            customProperties: {
                variables: {
                    maxWidth: "75rem",
                    colorPrimaryDark: "#002b36",
                    colorPrimary: "#073642",
                    colorSecondaryDark: "#268bd2",
                    colorSecondary: "#cb4b16",
                    colorNeutralDark: "#586e75",
                    colorNeutral: "#839496",
                    colorNeutralLight: "#FBFCFC",
                    colorText: "#555",
                    colorBackground: "#eee8d5"
                }
            }
        }
    }),
    require("postcss-reporter")(),
    ...!config.production
        ? [require("postcss-browser-reporter")()]
        : []
]
