
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

**Lo que falta configurar (solo el `.env`):**
El archivo `.env.example` en la carpeta `backend` tiene las variables que hay que completar. Necesitás conseguir:
- Las claves de **Google reCAPTCHA** — van ligadas al dominio real del sitio, hay que generarlas en https://www.google.com/recaptcha
- Un email desde el cual se van a enviar los mensajes (y su contraseña o app password si es Gmail)

⚠️ El archivo `.env` no está en Git (es privado). Te lo mando aparte.
Cuando lo tengas, lo pegás adentro de la carpeta `/backend`, al mismo nivel que el `server.js`. Tiene que quedar así:



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