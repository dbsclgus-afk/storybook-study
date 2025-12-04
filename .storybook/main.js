/** @type { import('@storybook/react-webpack5').StorybookConfig } */
module.exports = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],

  framework: "@storybook/react-webpack5",

  staticDirs: ["../public"],

  // 🔥 GitHub Pages 에서 /storybook-study/ 경로로 열리도록 publicPath 설정
  webpackFinal: async (config) => {
    config.output = config.output || {};
    config.output.publicPath = "/storybook-study/";
    return config;
  },
};
