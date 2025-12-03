# Proyecto listo con Mock API (sin backend)

- Usa archivos JSON en `public/mock/` para simular la API.
- Podés alternar a backend real configurando `VITE_API_URL`.

## Uso (Mock por defecto)
1) Copiá `.env.example` a `.env` (o crealo) y dejá:
```
VITE_USE_MOCK=true
```
2) Instalá y corré:
```
npm install
npm run dev
```

## Uso con Backend (opcional)
1) En `.env`:
```
VITE_USE_MOCK=false
VITE_API_URL=http://127.0.0.1:8000/api
```
2) Reiniciá el dev server.
