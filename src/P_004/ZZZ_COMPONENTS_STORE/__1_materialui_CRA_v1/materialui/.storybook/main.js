module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    '../src/**/*.stories.js',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
        '@storybook/addon-actions',
        '@storybook/addon-knobs' // Add the knobs addon.
  ],
}