import Image from 'next/image';
import {useConfig} from 'nextra-theme-docs';
import {useRouter} from 'next/router';

let site = {
	base: 'https://docs.superdevpro.com',
};

export default {
	head() {
		let {asPath} = useRouter();
		let {title} = useConfig();
		let isHome = asPath === '/';
		let meta = {
			url: `https://docs.superdevpro.com${asPath}`,
			title: isHome ? 'SuperDev Docs' : `${title} | SuperDev Docs`,
			description: 'Welcome to the SuperDev Pro documentation.',
			image: 'https://docs.superdevpro.com/others/mockup.png',
		};

		return (
			<>
				<title>{meta.title}</title>
				<meta
					name='description'
					content={meta.description}
				/>
				<link
					rel='canonical'
					href={meta.url}
				/>
				<meta
					property='og:title'
					content={meta.title}
				/>
				<meta
					property='og:description'
					content={meta.description}
				/>
				<meta
					property='og:url'
					content={meta.url}
				/>
				<meta
					property='og:site_name'
					content='SuperDev Pro'
				/>
				<meta
					property='og:image'
					content={meta.image}
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:site'
					content='@superdevpro'
				/>
				<meta
					name='twitter:title'
					content={meta.title}
				/>
				<meta
					name='twitter:description'
					content={meta.description}
				/>
				<meta
					name='twitter:image'
					content={meta.image}
				/>
				<link
					rel='shortcut icon'
					href='/favicon/256.png'
				/>
				<link
					rel='icon'
					href='/favicon/256.png'
				/>
				<link
					rel='apple-touch-icon'
					href='/favicon/256.png'
				/>
				<meta
					name='theme-color'
					content='#09090b'
				/>
			</>
		);
	},
	nextThemes: {
		defaultTheme: 'dark',
	},
	backgroundColor: {
		dark: '009,009,011',
		light: '255,255,255',
	},
	logo: (
		<>
			<Image
				alt='SuperDev Pro Logo'
				src='/logo/logo.png'
				width='30'
				height='30'
			/>
			<div>SuperDev Docs</div>
		</>
	),
	logoLink: site.base,
	sidebar: {
		defaultMenuCollapseLevel: 1,
		autoCollapse: true,
		toggleButton: false,
	},
	editLink: {
		component: null,
	},
	feedback: {
		content: null,
	},
	footer: {
		component: null,
	},
	gitTimestamp: null,
	themeSwitch: {
		component: null,
	},
};
