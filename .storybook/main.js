module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // for storybook in dev mode with postcss
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
};
