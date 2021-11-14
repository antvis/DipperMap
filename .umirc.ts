import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Dipper-Map',
  favicon:
    'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*v_NzR4sELEEAAAAAAAAAAAAAARQnAQ',
  logo: 'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*v_NzR4sELEEAAAAAAAAAAAAAARQnAQ',
  outputPath: 'docs-dist',
  plugins: [],
  // mfsu: {},
  workerLoader: {
    inline: true,
  },
  headScripts: ["localStorage.setItem('dumi:prefers-color', 'dark')"],
  publicPath: '/DipperMap/',
  base: '/DipperMap/',
  antd: {
    dark: true,
  },
  theme: {
    '@body-background': '#141414',
    '@component-background': '#141414',
    '@text-color': 'rgba(255, 255, 255, 0.65)',
    '@border-color-base': 'rgba(255, 255, 255, 0.1)',
  },
  // more config: https://d.umijs.org/config
});
