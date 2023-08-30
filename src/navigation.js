import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      links: [
        {
			text: 'Shogun',
			href: getPermalink('/about'),
		},
        {
          text: 'Project MEI',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'The Founders',
          href: getPermalink('/homes/mobile-app'),
        },
      ],
    },
    {
      text: 'Support',
      links: [
        {
			text: 'Contact',
			href: getPermalink('/contact'),
		},
        {
          text: 'Support Server',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Dashboard',
      href: 'https://dash.project-mei.xyz',
    },
	{
		text: 'Monitoring',
		links: [
		  {
			text: 'Grafana',
			href: 'https://graph.project-mei.xyz/',
		  },
		  {
			text: 'Monitoring',
			href: 'https://status.project-mei.xyz',
		  },
		  {
			text: 'VPS Dashboard',
			href: 'https://home.project-mei.xyz/',
		  },
		],
	  },
  ],
  actions: [{ type: 'button', text: 'Invite Shogun', href: 'https://dsc.gg/shogun' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getHomePermalink()+'#features' },
		{ text: 'Source', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Discord Server', href: '#' },
        { text: 'Status', href: '#' },
		{ text: 'Contribute', href: '#' },
      ],
    },
    {
      title: 'Background',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Team', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
	{ ariaLabel: 'Email', icon: 'tabler:mail-filled', href: 'mailto:raiden@project-mei.xyz' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/project-mei' },
	{ ariaLabel: 'Discord', icon: 'tabler:brand-discord-filled', href: 'https://dsc.gg/transience' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url('~/assets/images/raiden.png')]"></span>
    &copy; <a class="text-blue-600 hover:underline dark:text-gray-200">Raiden</a> & <a class="text-blue-600 hover:underline dark:text-gray-200">Ayaya</a> · All rights reserved.
  `,
};
