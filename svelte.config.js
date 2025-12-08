import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Output directory for the built files
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		// If deploying to a subdirectory (e.g., https://username.github.io/repo-name/)
		// uncomment and set the base path:
		// paths: {
		// 	base: '/ChieriJN'
		// }
	}
};

export default config;
