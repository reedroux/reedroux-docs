// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reedroux`s',
  tagline: 'Reedroux`s is the fastest, most feature rich bot ever.',
  url: 'https://docs.reedroux.biz',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/reedroux.webp',
  organizationName: 'Reedroux',
  projectName: 'docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/reedroux/docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          path: 'docs',
          routeBasePath: '/',
          include: ['**/**/*.mdx'],
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
        },
        blog: {
          blogTitle: "Reedroux's Blog",
          blogDescription: 'The ramblings of the Developers @ Reedroux-Bot',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Reedroux-Bot`,
          },
          showReadingTime: true,
          editUrl: 'https://github.com/reedroux/docs/',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.6,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexPages: true,
        docsRouteBasePath: '/',
        blogRouteBasePath: '/blog',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: 'Reedroux-Bot | Docs',
        logo: {
          alt: 'reedroux-logo',
          src: 'img/reedroux.webp',
        },
        items: [{to: 'blog', label: 'Blog', position: 'left'}],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Stay In The Loop ',
            items: [
              {
                label: 'Server Support',
                to: 'https://reedroux.biz/support',
              },
              {
                label: 'Invite',
                to: 'https://reedroux.biz/invite',
              },
              {
                label: 'Sponsor',
                to: 'https://reedroux.biz/',
              },
            ],
          },
          {
            title: 'Partners',
            items: [
              {
                label: 'OVH Clound',
                to: 'https://www.ovhcloud.com/',
              },
              {
                label: 'Hetzner',
                to: 'https://www.hetzner.com/',
              },
              {
                label: 'Phố Người Việt',
                to: 'https://discord.gg/phonguoiviet',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Refund Policy',
                to: 'https://reedroux.biz/refund-policy',
              },
              {
                label: 'Privacy Policy',
                to: 'https://reedroux.biz/privacy-policy',
              },
              {
                label: 'Terms Of Service',
                to: 'https://reedroux.biz/terms-of-service',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} Reedroux-Bot`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {},
      },
    },
};

module.exports = config;
