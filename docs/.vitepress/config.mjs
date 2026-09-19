import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Eagentix Documentation',
  description: 'Guides, Workflows, and Tool Reference for Eagentix Autonomous Agents',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0284c7' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Eagentix Documentation' }],
    ['meta', { property: 'og:site_name', content: 'Eagentix Docs' }],
    ['meta', { property: 'og:image', content: '/logo.png' }],
    ['meta', { property: 'og:description', content: 'Comprehensive user guides and workflows for Eagentix studios and agents.' }]
  ],
  themeConfig: {
    logo: '/logo_menu.png',
    siteTitle: 'Eagentix Docs',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/overview' },
      { text: 'SEO Studio', link: '/studios/seo-studio/00-overview' },
      { text: 'Tool Catalog', link: '/reference/seo-tools-catalog' },
      { text: 'Launch App', link: 'https://app.eagentix.com', target: '_blank' }
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Platform Overview', link: '/getting-started/overview' },
            { text: 'Workspace & Site Switching', link: '/getting-started/workspace-and-sites' },
            { text: 'Connecting Integrations', link: '/getting-started/integrations' }
          ]
        }
      ],
      '/studios/seo-studio/': [
        {
          text: 'SEO Studio Guide',
          items: [
            { text: '00. Studio Architecture & Pillars', link: '/studios/seo-studio/00-overview' },
            { text: '01. Site Brief & Ground Truth', link: '/studios/seo-studio/01-site-brief' },
            { text: '02. Keyword Strategy & SERP Campaigns', link: '/studios/seo-studio/02-keyword-campaigns' },
            { text: '03. Rank Movement & Same-Day Reruns', link: '/studios/seo-studio/03-tracking-and-reruns' },
            { text: '04. Research-Locked AI Drafting', link: '/studios/seo-studio/04-content-drafting' },
            { text: '05. On-Page Intelligence & Scorecards', link: '/studios/seo-studio/05-onpage-intelligence' },
            { text: '06. Link Architecture & Equity Gaps', link: '/studios/seo-studio/06-links-and-architecture' },
            { text: '07. Monitoring & Rerun Lifecycle', link: '/studios/seo-studio/07-project-health' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'SEO Skills & Tool Catalog', link: '/reference/seo-tools-catalog' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/eagentix' }
    ],
    footer: {
      message: 'Autonomous Agents for Enterprise Workflows.',
      copyright: 'Copyright © 2026 Eagentix. All rights reserved.'
    }
  }
});
