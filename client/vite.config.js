import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from 'vite-plugin-node-polyfills';  

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills() 
  ],

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8800",
        changeOrigin: true,
      },
    },
  },
});
