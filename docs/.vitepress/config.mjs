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
    logo: { light: '/logo_menu.png', dark: '/logo-transparent.png' },
    siteTitle: 'Eagentix Docs',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/overview' },
      { text: 'Marketing Studios', link: '/studios/marketing/00-overview' },
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
      '/studios/marketing/': [
        {
          text: 'Marketing Studios',
          items: [
            { text: 'Overview & Which Studio When', link: '/studios/marketing/00-overview' },
            { text: 'UGC Ad Factory', link: '/studios/marketing/01-ugc-factory' },
            { text: 'Finished Ad Studio', link: '/studios/marketing/02-finished-ad' },
            { text: 'Carousel Studio', link: '/studios/marketing/03-carousel' },
            { text: 'Content Carousel', link: '/studios/marketing/04-content-carousel' },
            { text: 'TikTok Slideshow', link: '/studios/marketing/05-tiktok-slideshow' },
            { text: 'Template Ads', link: '/studios/marketing/06-template-ads' },
            { text: 'Announcement Studio', link: '/studios/marketing/07-announcement' },
            { text: 'Comic Strip Studio', link: '/studios/marketing/08-comic-strip' },
            { text: 'Diagram Studio', link: '/studios/marketing/09-diagram' },
            { text: 'Motion Ad Studio', link: '/studios/marketing/10-motion-ad' },
            { text: 'Shorts Studio', link: '/studios/marketing/11-shorts' },
            { text: 'Reels Studio', link: '/studios/marketing/12-reels' },
            { text: 'Newsletter Studio', link: '/studios/marketing/13-newsletter' },
            { text: 'Winning Statics', link: '/studios/marketing/14-winning-statics' }
          ]
        },
        {
          text: 'SEO Studio Guide',
          items: [
            { text: 'Studio Architecture & Pillars', link: '/studios/marketing/seo-studio/00-overview' },
            { text: 'Site Brief & Ground Truth', link: '/studios/marketing/seo-studio/01-site-brief' },
            { text: 'Keyword Strategy & SERP Campaigns', link: '/studios/marketing/seo-studio/02-keyword-campaigns' },
            { text: 'Rank Movement & Same-Day Reruns', link: '/studios/marketing/seo-studio/03-tracking-and-reruns' },
            { text: 'Research-Locked AI Drafting', link: '/studios/marketing/seo-studio/04-content-drafting' },
            { text: 'On-Page Intelligence & Scorecards', link: '/studios/marketing/seo-studio/05-onpage-intelligence' },
            { text: 'Link Architecture & Equity Gaps', link: '/studios/marketing/seo-studio/06-links-and-architecture' },
            { text: 'Monitoring & Rerun Lifecycle', link: '/studios/marketing/seo-studio/07-project-health' }
          ]
        }
      ],
    },
    footer: {
      message: 'Autonomous Agents for Enterprise Workflows.',
      copyright: 'Copyright © 2026 Eagentix. All rights reserved.'
    }
  }
});
