import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'three': path.resolve(__dirname, './node_modules/three')
    }
  },
  optimizeDeps: {
    include: [
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'framer-motion',
      'clsx',
      'tailwind-merge',
      'stats.js',
      'three-stdlib',
      'use-sync-external-store/shim/with-selector'
    ],
    force: true
  },
  server: {
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei', 'three-stdlib'],
          'react-vendor': ['react', 'react-dom', 'framer-motion'],
        }
      }
    }
  }
})
