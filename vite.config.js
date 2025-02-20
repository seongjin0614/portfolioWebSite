import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lottie-react')) {
              return 'lottie';
            }
            if (id.includes('@fullpage/react-fullpage')) {
              return 'fullpage';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['lottie-react', '@fullpage/react-fullpage']
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  }
});