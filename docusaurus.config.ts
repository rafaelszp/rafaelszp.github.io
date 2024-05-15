import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rafael\' Case studies',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rafaelszp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rafaelszp', // Usually your GitHub org/user name.
  projectName: 'rafaelszp.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rafaelszp/rafaelszp.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/rafaelszp/rafaelszp.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    image: 'img/rafaelszp.jpg',
    navbar: {
      title: 'Rafael SZP',
      logo: {
        alt: 'Rafael\'s Logo',
        // src: 'img/logo.svg',
        src: 'img/rafaelszp.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'principal',
          position: 'left',
          label: 'Estudos',
        },
        {to: '/blog', label: 'Snippets', position: 'left'},
        {
          href: 'https://github.com/rafaelszp',
          label: 'Meu GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Studies',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'My Legacy Wordpress Blog',
              href: 'https://rafaelszp.wordpress.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/szp_rafael',
            },
            {
              label: 'Linked In',
              href: 'https://br.linkedin.com/in/rafaelszp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Snippets',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rafaelszp/rafaelszp.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rafael Pereira, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'BVVE68SDSY',

      // Public API key: it is safe to commit it
      apiKey: '78665a9bbc3f60d5bee9e1c162209681',

      indexName: 'rafaelszpio',

      // Optional: see doc section below
      contextualSearch: false,


      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

    },
  } satisfies Preset.ThemeConfig,
};

export default config;
