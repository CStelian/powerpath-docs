import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PowerPath Docs',
			favicon: '/favicon.png',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			social: {
				discord: 'https://discord.gg/HCGcDCtmSh',
			},
			sidebar: [
				{
					label: 'Learn more',
					items: [
						'getting-started',
						'patch-notes'
					],
				},
				{
					label: 'General',
					autogenerate: { directory: 'general' },
				},
				{
					label: 'Items',
					autogenerate: { directory: 'items' },
				},
				{
					label: 'User',
					autogenerate: { directory: 'user' },
				},
				{
					label: 'Economy',
					autogenerate: { directory: 'economy' },
				},
				{
					label: 'Events',
					autogenerate: { directory: 'events' },
				}
			],
		}),
	],
});
