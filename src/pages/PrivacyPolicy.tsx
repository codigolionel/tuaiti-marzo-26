import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-2">
          Política de Privacidad
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Última actualización: abril 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-[#505050] text-[15px] leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recabados a través de este sitio web es
              <strong> Tuaiti — Tecnología para Empresas</strong>, con domicilio en la Ciudad Autónoma de Buenos Aires, Argentina.
            </p>
            <p>
              Para cualquier consulta relacionada con la protección de tus datos personales, podés contactarnos
              a través del formulario de contacto del sitio o al teléfono +54 9 11-3511-7785.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">2. Datos que recopilamos</h2>
            <p>Recopilamos únicamente los datos que nos proporcionás voluntariamente:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Nombre</strong>: para dirigirnos a vos de forma personalizada.</li>
              <li><strong>Email o teléfono</strong>: para responder tu consulta.</li>
              <li><strong>Mensaje</strong>: el contenido de tu consulta.</li>
            </ul>
            <p className="mt-3">
              Adicionalmente, utilizamos <strong>Cloudflare Turnstile</strong> como mecanismo de verificación de
              seguridad, que puede recopilar datos técnicos del navegador de forma anónima para distinguir
              usuarios reales de bots.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">3. Finalidad del tratamiento</h2>
            <p>Los datos que recopilamos se utilizan exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Responder a tu consulta o solicitud de presupuesto.</li>
              <li>Contactarte para ofrecer la orientación solicitada.</li>
              <li>Proteger el sitio contra envíos automatizados o abusivos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">4. Base legal</h2>
            <p>
              El tratamiento de tus datos se basa en tu <strong>consentimiento</strong>, otorgado al completar
              y enviar el formulario de contacto. Podés retirar tu consentimiento en cualquier momento
              contactándonos por los medios indicados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">5. Destinatarios</h2>
            <p>Tus datos personales no se venden, alquilan ni comparten con terceros con fines comerciales. Los únicos terceros involucrados son:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Cloudflare</strong>: proveedor de seguridad (Turnstile).</li>
              <li><strong>Proveedor de hosting</strong>: donde se aloja el sitio y se procesan los envíos del formulario.</li>
              <li><strong>Proveedor de correo SMTP</strong>: para el envío del email de notificación.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">6. Plazos de conservación</h2>
            <p>
              Los datos enviados a través del formulario se conservan únicamente durante el tiempo necesario
              para responder tu consulta y gestionar la relación comercial. Una vez finalizado el propósito,
              los datos son eliminados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">7. Tus derechos</h2>
            <p>
              De acuerdo con la <strong>Ley 25.326 de Protección de Datos Personales</strong> de la República
              Argentina, tenés derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Acceder</strong> a tus datos personales.</li>
              <li><strong>Rectificar</strong> datos inexactos o incompletos.</li>
              <li><strong>Suprimir</strong> tus datos cuando ya no sean necesarios.</li>
              <li><strong>Oponerte</strong> al tratamiento de tus datos.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, contactanos a través del formulario de contacto o por teléfono.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              La Agencia de Acceso a la Información Pública (AAIP), en su carácter de Órgano de Control
              de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan
              quienes resulten afectados en sus derechos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">8. Cookies y tecnologías similares</h2>
            <p>
              Este sitio web no utiliza cookies propias con fines de seguimiento o publicidad.
              Cloudflare Turnstile puede utilizar cookies técnicas necesarias para su funcionamiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">9. Cambios en esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad. Cualquier cambio será
              publicado en esta misma página con la fecha de última actualización.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F3A5F] mb-3">10. Contacto</h2>
            <p>
              Si tenés preguntas sobre esta política o sobre el tratamiento de tus datos personales,
              podés contactarnos a través de:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>El <a href="/#contact" className="text-[#E47223] hover:underline font-medium">formulario de contacto</a> de nuestro sitio.</li>
              <li>WhatsApp: <a href="https://wa.me/5491135117785" className="text-[#E47223] hover:underline font-medium" target="_blank" rel="noopener noreferrer">+54 9 11-3511-7785</a></li>
            </ul>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
