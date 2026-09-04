"use client";
import React, { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, email, telefono, asunto, mensaje } = formData;
    const subject = encodeURIComponent(asunto || 'Contacto desde Sitio Web');
    const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`);
    window.open(`mailto:contacto@floreslogistica.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full min-h-[70vh] flex flex-col justify-center">
      <div className="text-center mb-12">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">Contáctanos</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          ¿Tienes alguna duda o requerimiento especial? Llena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-start">
        {/* Contact Info */}
        <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 space-y-6 shadow-lg">
          <h3 className="font-headline-md text-headline-md text-primary mb-6">Información de Contacto</h3>
          
          <div className="flex items-center gap-4 text-on-surface">
            <span className="material-symbols-outlined text-secondary text-3xl bg-surface p-3 rounded-full shadow-sm">location_on</span>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Dirección Central</p>
              <p className="font-body-md text-body-md">Av. de los Transportistas 123, Zona Industrial, Toluca, Estado de México</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-on-surface">
            <span className="material-symbols-outlined text-secondary text-3xl bg-surface p-3 rounded-full shadow-sm">call</span>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Teléfono</p>
              <p className="font-body-md text-body-md">+52 729 124 6319</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-on-surface">
            <span className="material-symbols-outlined text-secondary text-3xl bg-surface p-3 rounded-full shadow-sm">mail</span>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Correo Electrónico</p>
              <p className="font-body-md text-body-md">contacto@floreslogistica.com</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-outline-variant/30">
            <p className="font-body-md text-on-surface-variant mb-4">También puedes encontrarnos en nuestras redes sociales:</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <span className="font-bold text-xl">f</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <span className="font-bold text-xl">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Nombre Completo</label>
                <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex items-center gap-2 bg-surface">
                  <span className="material-symbols-outlined text-tertiary">person</span>
                  <input required value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} type="text" placeholder="Tu nombre" className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Teléfono</label>
                <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex items-center gap-2 bg-surface">
                  <span className="material-symbols-outlined text-tertiary">phone</span>
                  <input required value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} type="tel" placeholder="Tu teléfono" className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Correo Electrónico</label>
              <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex items-center gap-2 bg-surface">
                <span className="material-symbols-outlined text-tertiary">email</span>
                <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" placeholder="ejemplo@correo.com" className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Asunto</label>
              <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex items-center gap-2 bg-surface">
                <span className="material-symbols-outlined text-tertiary">subject</span>
                <input required value={formData.asunto} onChange={e => setFormData({...formData, asunto: e.target.value})} type="text" placeholder="¿Sobre qué nos escribes?" className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Mensaje</label>
              <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex gap-2 bg-surface">
                <span className="material-symbols-outlined text-tertiary pt-1">chat</span>
                <textarea required value={formData.mensaje} onChange={e => setFormData({...formData, mensaje: e.target.value})} rows={4} placeholder="Escribe tu mensaje aquí..." className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none resize-none"></textarea>
              </div>
            </div>

            <button type="submit" className="mt-2 bg-primary text-white py-4 rounded-xl font-button text-button transition-all duration-300 hover:bg-primary-container hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">send</span>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
