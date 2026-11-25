import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'static-pages',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = (req.url ?? '').split('?')[0]
          if (url === '/elecciones' || url === '/elecciones/') {
            const fullPath = path.join(process.cwd(), 'public', 'elecciones', 'index.html')
            if (fs.existsSync(fullPath)) {
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              res.end(fs.readFileSync(fullPath))
              return
            }
          }
          next()
        })
      },
    },
  ],
  server: {
    port: 5173,
    headers: {
      'Accept-Ranges': 'bytes',
    },
  },
})
