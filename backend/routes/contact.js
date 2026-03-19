const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, contact, service, message, token } = req.body;

    // 1. Validar campos obligatorios (no confiar en el frontend)
    if (!name || !contact || !service || !message || !token) {
      console.log('Error: Validación fallida - Campos faltantes en la petición');
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    console.log(`[Formulario] Petición recibida de: ${name} (${contact})`);

    // 2. Verificar token de Google reCAPTCHA v2 invisible
    const verifyRecaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`;
    
    // Usamos fetch nativo (disponible en Node.js 18+)
    const recaptchaResponse = await fetch(verifyRecaptchaUrl, { method: 'POST' });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      console.log('Error: Validación de reCAPTCHA fallida', recaptchaData);
      return res.status(400).json({ error: 'Validación de reCAPTCHA fallida. Intenta nuevamente.' });
    }
    
    console.log('✅ reCAPTCHA validado correctamente.');

    // 3. Configurar NodeMailer con Gmail (App Password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Formatear email en formato HTML como lead comercial
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Enviar al mismo correo
      subject: `Nuevo Lead Comercial: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0044cc; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Nuevo Lead de Contacto</h2>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px; color: #333;">Has recibido un nuevo mensaje desde el formulario web.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 12px 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%; color: #333;">Nombre:</td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #eee; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Contacto (Email/Tel):</td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #eee; color: #555;">${contact}</td>
              </tr>
              <tr>
                <td style="padding: 12px 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Servicio:</td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #eee; color: #555;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 10px; font-weight: bold; color: #333; vertical-align: top;">Mensaje:</td>
                <td style="padding: 12px 10px; color: #555; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f8f9fa; padding: 15px; text-align: center; color: #888; font-size: 12px; border-top: 1px solid #e0e0e0;">
            Este mensaje fue generado automáticamente desde tu landing page web.
          </div>
        </div>
      `
    };

    // 5. Enviar el email
    await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado con éxito.');

    // 6. Enviar respuesta exitosa al frontend
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('❌ Error interno al procesar el formulario:', error);
    // Respuesta de error general
    return res.status(500).json({ error: 'Ocurrió un error en el servidor. Revisa los logs.' });
  }
});

module.exports = router;
