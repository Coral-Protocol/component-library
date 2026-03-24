import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : (process.env.BASE_PATH || '').replace(/\/$/, '')
		},
		alias: {
			'@coral-os/component-library': 'src/lib',
			'@coral-os/component-library/*': 'src/lib/*',
			'@coral-os/component-library/hooks/*': 'src/lib/hooks/*',
			'@coral-os/component-library/components/*': 'src/lib/components/*',
			'@coral-os/component-library/ui/*': 'src/lib/components/ui/*',

			// Do NOT use these in lib code
			'$ui/*': 'src/lib/components/ui/*'
		}
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes('node_modules') ? undefined : { runes: true }
	}
};

export default config;
