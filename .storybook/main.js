module.exports = {
    stories: [
        '../src/components/**/*.stories.mdx',
        '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: false,
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    webpackFinal: async(config) => {
        config.resolve.fallback = {
            fs: false,
        }
        config.plugins = config.plugins.filter(
            (plugin) => plugin.constructor.name !== 'CaseSensitivePathsPlugin'
        )
        return config
    },
}