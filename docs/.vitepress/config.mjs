import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Eagentix Documentation',
  description: 'Guides, Workflows, and Tool Reference for Eagentix Autonomous Agents',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.eagentix.com',
    // Redirect stubs for the old /studios/seo-studio/* URLs must never be
    // indexed — the canonical pages live under /studios/marketing/seo-studio/.
    transformItems: (items) => items.filter((i) => !i.url.startsWith('studios/seo-studio/'))
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0284c7' }],
    ['meta', { name: 'description', content: 'Comprehensive user guides and workflows for Eagentix studios and agents.' }],
    ['meta', { name: 'author', content: 'Eagentix' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:title', content: 'Eagentix Documentation' }],
    ['meta', { property: 'og:site_name', content: 'Eagentix Docs' }],
    ['meta', { property: 'og:image', content: 'https://docs.eagentix.com/logo.png' }],
    ['meta', { property: 'og:image:alt', content: 'Eagentix Documentation' }],
    ['meta', { property: 'og:description', content: 'Comprehensive user guides and workflows for Eagentix studios and agents.' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Eagentix Documentation' }],
    ['meta', { name: 'twitter:description', content: 'Comprehensive user guides and workflows for Eagentix studios and agents.' }],
    ['meta', { name: 'twitter:image', content: 'https://docs.eagentix.com/logo.png' }],
    ['link', { rel: 'service-doc', type: 'text/markdown', href: '/llms.txt' }],
    ['link', { rel: 'alternate', type: 'text/markdown', href: '/llms.txt' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'Eagentix',
          url: 'https://eagentix.com/',
          logo: 'https://docs.eagentix.com/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            url: 'https://eagentix.com/',
            contactType: 'customer support'
          }
        },
        {
          '@type': 'WebSite',
          name: 'Eagentix Documentation',
          url: 'https://docs.eagentix.com/'
        }
      ]
    })]
  ],
  async transformHead({ pageData }) {
    // Per-page canonical + og:url so every indexed page points at itself.
    const path = pageData.relativePath
      .replace(/\.md$/, '.html')
      .replace(/(^|\/)index\.html$/, '$1');
    const url = `https://docs.eagentix.com/${path}`;
    const tags = [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }]
    ];
    // FAQPage schema lives here, not in frontmatter — a one-line JSON blob
    // breaks the frontmatter YAML parser.
    if (pageData.relativePath === 'getting-started/faq.md') {
      tags.push(['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an Eagentix Studio?',
            acceptedAnswer: { '@type': 'Answer', text: 'A Studio is a guided workflow for one job — video ads, carousels, newsletters, landing pages, SEO. You approve the plan before anything renders, and everything stays grounded in facts you supplied.' }
          },
          {
            '@type': 'Question',
            name: 'Do I need to write prompts?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Every studio uses pickers, briefs, and editable drafts — formats, styles, voices, and layouts are choices, not prompt engineering.' }
          },
          {
            '@type': 'Question',
            name: 'What uses credits?',
            acceptedAnswer: { '@type': 'Answer', text: 'Planning and rendering. Browsing, picking, editing, history, downloads, and post copy are free. Each studio guide lists exactly what is metered.' }
          },
          {
            '@type': 'Question',
            name: 'Will the AI invent claims about my product?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Copy comes only from facts you supplied — product details, proof points, allowed claims. Anything off-limits is never used or inflated, and proof sections render only from real material.' }
          },
          {
            '@type': 'Question',
            name: 'What happens to my past work?',
            acceptedAnswer: { '@type': 'Answer', text: 'Every studio autosaves to history. Reopening restores inputs, edits, and renders exactly as they were — finished work is never lost and never needs paying for twice.' }
          },
          {
            '@type': 'Question',
            name: 'Which studio should I use?',
            acceptedAnswer: { '@type': 'Answer', text: 'Start at the Marketing Studios overview. Quick talking-head video goes to UGC Ad Factory, multi-scene storyboarded video to Motion Ad Studio, LinkedIn carousels to Content Carousel, TikTok slides to TikTok Slideshow, news to Announcement Studio, rankings and audits to SEO Studio.' }
          }
        ]
      })]);
    }
    return tags;
  },
  themeConfig: {
    logo: { light: '/logo_menu.png', dark: '/logo-transparent-light.png' },
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
            { text: 'Connecting Integrations', link: '/getting-started/integrations' },
            { text: 'FAQ', link: '/getting-started/faq' }
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
            { text: 'Winning Statics', link: '/studios/marketing/14-winning-statics' },
            { text: 'Landing Page Studio', link: '/studios/marketing/15-landing-page' },
            { text: 'Production Studio', link: '/studios/marketing/16-production' },
            { text: 'Animation Studio', link: '/studios/marketing/17-animation' }
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
