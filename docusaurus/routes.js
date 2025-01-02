import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c48'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b7e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '395'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'edd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '395'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '895'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '87c'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f09'),
    exact: true
  },
  {
    path: '/blog/2022/01/08/reedroux',
    component: ComponentCreator('/blog/2022/01/08/reedroux', 'e65'),
    exact: true
  },
  {
    path: '/blog/2022/01/10/welcome-to-reedroux',
    component: ComponentCreator('/blog/2022/01/10/welcome-to-reedroux', '0d9'),
    exact: true
  },
  {
    path: '/blog/2022/04/18/update-version-2-0-0',
    component: ComponentCreator('/blog/2022/04/18/update-version-2-0-0', 'b98'),
    exact: true
  },
  {
    path: '/blog/2022/08/07/update-version-3-0-0',
    component: ComponentCreator('/blog/2022/08/07/update-version-3-0-0', '3e3'),
    exact: true
  },
  {
    path: '/blog/2023/07/25/update-version-3-5-0',
    component: ComponentCreator('/blog/2023/07/25/update-version-3-5-0', '23c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '16d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '6c1'),
    exact: true
  },
  {
    path: '/blog/tags/first',
    component: ComponentCreator('/blog/tags/first', 'ce9'),
    exact: true
  },
  {
    path: '/blog/tags/music',
    component: ComponentCreator('/blog/tags/music', '965'),
    exact: true
  },
  {
    path: '/blog/tags/new',
    component: ComponentCreator('/blog/tags/new', 'b05'),
    exact: true
  },
  {
    path: '/blog/tags/new-stuff',
    component: ComponentCreator('/blog/tags/new-stuff', 'a58'),
    exact: true
  },
  {
    path: '/blog/tags/reedroux',
    component: ComponentCreator('/blog/tags/reedroux', '814'),
    exact: true
  },
  {
    path: '/blog/tags/update',
    component: ComponentCreator('/blog/tags/update', 'dc7'),
    exact: true
  },
  {
    path: '/blog/tags/v-2-0-0',
    component: ComponentCreator('/blog/tags/v-2-0-0', '3b3'),
    exact: true
  },
  {
    path: '/blog/tags/v-3-0-0',
    component: ComponentCreator('/blog/tags/v-3-0-0', '6c6'),
    exact: true
  },
  {
    path: '/blog/tags/v-3-5-0',
    component: ComponentCreator('/blog/tags/v-3-5-0', '40b'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', 'f25'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '288'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ab9'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '266'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/adding-reedroux',
        component: ComponentCreator('/adding-reedroux', '0fa'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/commands',
        component: ComponentCreator('/commands', 'dd8'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/faq',
        component: ComponentCreator('/faq', '03f'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/faqs',
        component: ComponentCreator('/faqs', 'd80'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/favorites',
        component: ComponentCreator('/favorites', '177'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/features',
        component: ComponentCreator('/features', 'e0d'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/get_support',
        component: ComponentCreator('/get_support', '644'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/play-song',
        component: ComponentCreator('/play-song', 'fd4'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/playlists',
        component: ComponentCreator('/playlists', 'a06'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/premium',
        component: ComponentCreator('/premium', 'e4f'),
        exact: true,
        sidebar: "sidebars"
      },
      {
        path: '/starting-dashboard',
        component: ComponentCreator('/starting-dashboard', '58d'),
        exact: true,
        sidebar: "sidebars"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
