import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: { icon: true },
    }),
    glsl(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3005,
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:3006',
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //   },
    // },
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:3006'),
    __PROJECT__: JSON.stringify('frontend'),
  },
});
