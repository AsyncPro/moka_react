import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const env = loadEnv(mode, process.cwd());

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      host: env.HOST || '0.0.0.0',
      port: Number(env.PORT) || 5173,
    }

})
