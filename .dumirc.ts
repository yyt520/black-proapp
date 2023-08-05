import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'build-docs',
  publicPath: '/black-proapp/',
  base: '/black-proapp/',
  themeConfig: {
    name: 'black-proapp',
    rtl: true,
    socialLinks: {
      github: 'https://github.com/yyt520',
    },
  },
});
