import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';

import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		svgr({
			svgrOptions: {
				icon: true,
			},
		}),
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			db: path.resolve(__dirname, 'data/'),
		},
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
});
