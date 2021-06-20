module.exports = {
    env: {
        test: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        targets: {
                            node: "current"
                        }
                    }
                ]
            ],
            plugins: [
                "@babel/plugin-proposal-class-properties"
            ]
        }
    }
};
