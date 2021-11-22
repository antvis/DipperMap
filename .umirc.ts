import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Dipper-Map',
  favicon:
    'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*v_NzR4sELEEAAAAAAAAAAAAAARQnAQ',
  logo: 'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*v_NzR4sELEEAAAAAAAAAAAAAARQnAQ',
  outputPath: 'docs-dist',
  plugins: [],
  mode: 'site',
  menus: {
    '/': [
      {
        title: 'Home',
        path: '/index',
      },
    ],
  },
  navs: [
    {
      title: '配置页面',
      path: '/demo',
      children: ['/demo.md'],
    },
    {
      title: '生态',
      children: [
        {
          title: 'L7',
          path: 'https://l7.antv.vision/',
        },
        {
          title: 'L7 Plot',
          path: 'https://l7plot.surge.sh//',
        },
      ],
    },
    { title: '官方网站', path: 'https://dippermap.alipay.com/' },
    { title: 'GitHub', path: 'https://github.com/antvis/DipperMap' },
  ],
  // mfsu: {},
  workerLoader: {
    inline: true,
  },
  headScripts: ["localStorage.setItem('dumi:prefers-color', 'dark')"],
  styles: ['.__dumi-default-navbar-tool { display: none !important; }'],
  publicPath: '/DipperMap/',
  base: '/DipperMap/',
  antd: {
    dark: true,
  },
  hash: true,
  theme: {
    '@body-background': '#141414',
    '@component-background': '#141414',
    '@text-color': 'rgba(255, 255, 255, 0.65)',
    '@border-color-base': 'rgba(255, 255, 255, 0.1)',
  },
  // more config: https://d.umijs.org/config
});
