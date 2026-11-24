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
          const staticRoutes: Record<string, string> = {
            '/elecciones': 'public/elecciones/index.html',
            '/elecciones/': 'public/elecciones/index.html',
          }
          const filePath = staticRoutes[req.url?.split('?')[0] || '']
          if (filePath) {
            const fullPath = path.resolve(filePath)
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
    headers: {
      'Accept-Ranges': 'bytes',
    },
  },
})
