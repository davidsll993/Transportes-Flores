"use client";
import React, { useState } from 'react';

export default function BolsaDeTrabajoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    puesto: 'Operador de Tractocamión',
    experiencia: '',
    cvLink: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, email, telefono, puesto, experiencia, cvLink, mensaje } = formData;
    
    const text = `Hola, me interesa aplicar para una vacante en Transportes Flores.\n\n*Datos del Candidato:*\nNombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${email}\n\n*Perfil:*\nPuesto de Interés: ${puesto}\nAños de Experiencia: ${experiencia}\n\n*Mensaje Adicional:*\n${mensaje || 'Sin mensaje adicional'}\n\n_(Adjunto mi CV en este chat)_`;
    
    const url = `https://wa.me/527291246319?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full min-h-[70vh] flex flex-col justify-center">
      <div className="text-center mb-12">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">Únete a Nuestro Equipo</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          ¿Estás buscando nuevos retos? En Transportes Flores siempre buscamos talento. Llena el siguiente formulario y nos pondremos en contacto contigo.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-outline-variant/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <h3 className="font-headline-md text-headline-md text-primary mb-2 border-b border-outline-variant/30 pb-4">Formulario de Solicitud de Empleo</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Nombre Completo *</label>
                <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex items-center gap-2 bg-surface">
                  <span className="material-symbols-outlined text-tertiary">person</span>
                  <input required value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} type="text" placeholder="Ej. Juan Pérez" className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Teléfono (WhatsApp) *</label>
                <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex items-center gap-2 bg-surface">
                  <span className="material-symbols-outlined text-tertiary">phone</span>
                  <input required value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} type="tel" placeholder="Ej. 55 1234 5678" className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Correo Electrónico *</label>
                <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex items-center gap-2 bg-surface">
                  <span className="material-symbols-outlined text-tertiary">email</span>
                  <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" placeholder="ejemplo@correo.com" className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Puesto de Interés *</label>
                <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex items-center gap-2 bg-surface">
                  <span className="material-symbols-outlined text-tertiary">badge</span>
                  <select required value={formData.puesto} onChange={e => setFormData({...formData, puesto: e.target.value})} className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md text-on-surface outline-none cursor-pointer">
                    <option value="Operador de Tractocamión">Operador de Tractocamión</option>
                    <option value="Mecánico Diésel">Mecánico Diésel</option>
                    <option value="Personal Administrativo">Personal Administrativo</option>
                    <option value="Logística y Tráfico">Logística y Tráfico</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Años de Experiencia *</label>
                <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex items-center gap-2 bg-surface">
                  <span className="material-symbols-outlined text-tertiary">work_history</span>
                  <input required min="0" value={formData.experiencia} onChange={e => setFormData({...formData, experiencia: e.target.value})} type="number" placeholder="Ej. 5" className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none" />
                </div>
              </div>
              <div className="space-y-1 flex flex-col justify-center">
                <div className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">attach_file</span>
                  <div>
                    <p className="font-label-caps text-label-caps text-primary mb-1">Envíanos tu CV</p>
                    <p className="text-xs text-on-surface-variant">
                      Por favor, ten listo tu CV en formato PDF. Podrás adjuntarlo directamente en el chat de WhatsApp al enviar esta solicitud.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-label-caps font-label-caps text-on-surface-variant block ml-1">Mensaje Adicional</label>
              <div className="industrial-border rounded-xl px-4 py-3 industrial-focus transition-all duration-300 flex gap-2 bg-surface">
                <span className="material-symbols-outlined text-tertiary pt-1">chat</span>
                <textarea value={formData.mensaje} onChange={e => setFormData({...formData, mensaje: e.target.value})} rows={3} placeholder="Cuéntanos un poco sobre ti..." className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md outline-none resize-none"></textarea>
              </div>
            </div>

            <button type="submit" className="mt-4 bg-[#25D366] text-white py-4 rounded-xl font-button text-button transition-all duration-300 hover:bg-[#1ebe5c] hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Enviar Solicitud por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
