import { defineConfig ,} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  /**
   * 
   * 
   * 
  server: {
      host: env.HOST || 'localhost',
      port: Number(env.PORT) || 5173,
    }
   */

})
