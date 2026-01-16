
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Minificação agressiva usando o Terser (padrão do Vite é esbuild, mas terser às vezes é menor)
    minify: 'esbuild',
    // Gerar sourcemaps apenas em desenvolvimento se necessário, false em prod poupa espaço
    sourcemap: false,
    // Aviso de tamanho de chunk
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Code Splitting manual para separar vendor (React) do código da app
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Otimização de CSS
    cssCodeSplit: true,
  },
})
