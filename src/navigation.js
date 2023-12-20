import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      links: [
        {
          text: 'Project MEI',
          href: getPermalink('/about/project-mei'),
        },
      ],
    },
    {
      text: 'Support',
      links: [
        {
			text: 'Contact Form',
			href: getPermalink('/contact'),
		},
        {
          text: 'Discord Server',
          href: 'https://dsc.gg/transience',
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'MEI\'s Corner',
          href: getBlogPermalink(),
        },
		{
			text: 'Raiden\'s Blog',
			href: 'https://blog.project-mei.xyz/',
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
        { text: 'Discord Server', href: 'https://dsc.gg/transience' },
        { text: 'Status', href: 'https://status.project-mei.xyz' },
		{ text: 'Contribute', href: 'https://ko-fi.com/raidensakura' },
      ],
    },
    {
      title: 'Background',
      links: [
        { text: 'About', href: getPermalink('about/project-mei') },
        { text: 'Blog', href: getBlogPermalink('') },
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
