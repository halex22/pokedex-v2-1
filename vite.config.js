import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions:{
      input: {
        main: 'index.html',
        type: 'type.html',
        detail: 'detail.html'
      }
    }
  }
})