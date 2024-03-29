import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {DocsThemeConfig} from 'nextra-theme-docs';

const config: DocsThemeConfig = {
	logo: (
		<>
			<Image
				alt='SuperDev Pro Logo'
				src='/logo/logo.png'
				width='30'
				height='30'
			/>
			<div className='logo-text'>SuperDev Docs</div>
		</>
	),
	project: {
		link: 'https://github.com/superdevpro',
		icon: (
			<svg
				width='22'
				height='22'
				fill='currentColor'
				viewBox='3 3 18 18'>
				<title>GitHub</title>
				<path d='M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z'></path>
			</svg>
		),
	},
	chat: {
		link: 'https://twitter.com/superdevpro',
		icon: (
			<svg
				width='22'
				height='22'
				viewBox='0 0 248 204'>
				<path
					fill='currentColor'
					d='M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z'
				/>
			</svg>
		),
	},
	sidebar: {
		autoCollapse: true,
		defaultMenuCollapseLevel: 1,
	},
	head: (
		<>
			<meta
				name='description'
				content='Welcome to the SuperDev Pro documentation.'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='256x256'
				href='/favicon/256.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='256x256'
				href='/favicon/256.png'
			/>
			<meta
				name='theme-color'
				content='#09090B'
			/>
			<meta
				property='og:title'
				content='SuperDev Docs'
			/>
			<meta
				property='og:site_name'
				content='SuperDev Docs'
			/>
			<meta
				property='og:url'
				content='https://docs.superdevpro.com/'
			/>
			<meta
				property='og:description'
				content='Welcome to the SuperDev Pro documentation.'
			/>
			<meta
				property='og:type'
				content='website'
			/>
			<meta
				property='og:image'
				content='https://docs.superdevpro.com/others/mockup.png'
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
				content='SuperDev Docs'
			/>
			<meta
				name='twitter:description'
				content='Welcome to the SuperDev Pro documentation.'
			/>
			<meta
				name='twitter:image'
				content='https://docs.superdevpro.com/others/mockup.png'
			/>
		</>
	),
	useNextSeoProps() {
		const {asPath} = useRouter();
		if (asPath === '/') {
			return {
				titleTemplate: 'SuperDev Docs',
			};
		} else if (asPath !== '/') {
			return {
				titleTemplate: '%s | SuperDev Docs',
			};
		}
	},
	nextThemes: {
		defaultTheme: 'dark',
	},
};

export default config;
