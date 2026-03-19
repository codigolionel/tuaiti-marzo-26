
**Desarrollado con:**

- Vite
- TypeScript
- React
- Tailwind CSS

**Frontend:**
npm install
npm run dev


**Backend:**
cd backend
npm install
npm run dev

El backend está hecho y probado localmente. Es un servidor en Node.js que recibe el formulario de contacto del sitio y manda un email.

**Lo que funciona:**
- Recibe los campos: nombre, contacto, servicio, mensaje
- Valida que no falte ninguno
- Verifica reCAPTCHA antes de procesar
- Manda el email

```
Mindthera/
  backend/
    server.js
    .env        ← acá va
    package.json


**Para correrlo:**
```
npm install
npm run dev     ← desarrollo
npm start       ← producción
```

**Puerto por defecto:** 3000

**CORS:** está configurado para `localhost:8080`. En producción hay que cambiarlo por la URL real del sitio.

ya se que sabes, pero la iA me obligo a poner esto. 🤖 🤖 🤖 