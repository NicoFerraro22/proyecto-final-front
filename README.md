# BMTH Shop – Frontend (React + Vite) para Vercel

Este repo está preparado específicamente para deploy en **Vercel** usando Vite.

## 🚀 Deploy en Vercel

### 1. Subí este proyecto a GitHub.

### 2. En Vercel:
- **New Project**
- Elegí el repositorio
- Framework preset: **Vite**
- Build Command (Vercel lo detecta solo, pero por si acaso):

```
npm install
npm run build
```

- Output Directory:
```
dist
```

### 3. Variables de entorno necesarias
En la sección **Environment Variables** de Vercel agregá:

```
VITE_API_URL = https://tu-backend-en-railway.railway.app
```

> Reemplazá la URL por la del backend real.

### 4. Rewrites / SPA Routing
Ya incluí un archivo **vercel.json** que asegura que React funcione como SPA:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "vite.config.js",
      "use": "@vercel/static-build",
      "config": {"distDir": "dist"}
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### Comandos locales

```bash
npm install
npm run dev
npm run build
npm run preview
```

Listo para funcionar en Vercel 🖤🔥
