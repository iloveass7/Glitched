import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    // Add this section for production
    server: {
        host: true,
        port: 5173,
        strictPort: true,
    },
    preview: {
        host: true,
        port: 5173,
        strictPort: true,
    },
});