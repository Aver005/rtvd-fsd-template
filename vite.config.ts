import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/*

    Configuration:
    https://vite.dev/config/

*/


export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: 
    {
        alias: 
        {
            '@': path.resolve(import.meta.dirname, './src'),
            '$': path.resolve(import.meta.dirname, './public'),
            '#': path.resolve(import.meta.dirname, './src/shared'),
        },
    },
    server: { allowedHosts: true, },
    publicDir: 'public',
})
