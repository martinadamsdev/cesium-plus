import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/cesium.ts',
      formats: ['es', 'umd'],
    },
    rollupOptions: {

    }
  }
})
