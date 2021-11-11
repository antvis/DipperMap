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
  publicPath: '/DipperMap/',
  base: '/DipperMap/',
  // more config: https://d.umijs.org/config
});
