import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // Change to your desired port
    open: true, // Open the browser automatically
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Proxy API requests to the Node.js/Express server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
