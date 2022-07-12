import { defineConfig } from 'vite';

const path = require('path');

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '~': path.resolve(__dirname, './node_modules'),
    },
  },
});
